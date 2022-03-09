import { Typography, Button, FormControlLabel, CircularProgress, IconButton } from '@material-ui/core';
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield';
import RadioButton from '@material-ui/core/Radio'
import MaterialAutoComplete from '../../components/material.autocomplete/material.autocomplete';
import NotesTextField from '../../components/notes.textfield/notes.textfield';
import './builder.applet.scss'
import { IsMobileWidth } from 'components/utils/util';
import { DiagramView, NodeListView } from 'diagram-library-react'
import { useEffect, useState, useRef } from 'react';
import ReactFlow from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';
import Graph from './components/graph/graph'
import { withRouter } from 'react-router'
// additionally you can load the default theme
import 'react-flow-renderer/dist/theme-default.css';
import { getQueryStringValue } from 'components/utils/util'

import 'react-voice-recorder/dist/index.css'
import { Dialog } from '@material-ui/core'
import { Recorder } from './components/graph/mic'
import { Checkbox } from '@material-ui/core'
import DragAndDrop from './components/graph/drag.and.drop/drag.and.drop.js'
import { addEdge } from 'react-flow-renderer'
import { storage } from './../firebase/index'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'


function Dashboard(props) {

    const [state, setState] = useState({
        name: "",
        position: "",
        selectedDecision: false,

        doRecord: false,
        attributes: { x: 0, y: 0 },
        difference: 0,
        showGraphState: false,
        selectedBox: false,
        currentAudio: false,
        resetRecording: false,
        clickFire: false,

        audioDetails: {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0
            }
        }
    })

    var juice = require('juice');


    const [elements, setElements] = useState([])

    const setPosition = (position) => {
        setState({ ...state, position: position })
    }

    useEffect(() => {

    }, [])


    const onChange = (e, name) => {
        setState({ ...state, [name]: e.target.value })
    }

    const { appletId } = props.match.params

    const query = getQueryStringValue("update")
    const template = getQueryStringValue("template")
    const templateId = getQueryStringValue("templateId")


    useEffect(() => {
        if (query) {
            if (!Boolean(template)) {
                props.getSingleApplet(appletId)
            }
            else {

                props.getSingleApplet(appletId, true)
            }
        }
        else {
            if (templateId) {
                props.getSingleApplet(templateId, true)
            }
            else {
                props.getSingleApplet(appletId)
            }
        }
    }, [query])



    useEffect(() => {

        if (props.singleApplet && props.singleApplet.template) {
            setElements(props.singleApplet && props.singleApplet.template && props.singleApplet.template.steps ? props.singleApplet.template.steps : [])
            // setState({ ...state, elements: props.singleApplet && props.singleApplet.template && props.singleApplet.template.steps ? props.singleApplet.template.steps : [] })
        }
        else if (props.singleApplet && props.singleApplet.applet) {

            setElements(props.singleApplet && props.singleApplet.applet && props.singleApplet.applet.steps ? props.singleApplet.applet.steps : [])
            // setState({ ...state, elements: props.singleApplet && props.singleApplet.applet && props.singleApplet.applet.steps ? props.singleApplet.applet.steps : [] })
        }

    }, [props.singleApplet])

    // useEffect(() => {

    //     if (props.singleAppletAsFile && props.singleAppletAsFile.template) {
    //         setElements(props.singleAppletAsFile && props.singleAppletAsFile.template && props.singleAppletAsFile.template.steps ? props.singleAppletAsFile.template.steps : [])
    //         // setState({ ...state, elements: props.singleApplet && props.singleApplet.template && props.singleApplet.template.steps ? props.singleApplet.template.steps : [] })
    //     }
    //     else if (props.singleAppletAsFile && props.singleAppletAsFile.steps) {

    //         setElements(props.singleAppletAsFile && props.singleAppletAsFile.steps ? props.singleAppletAsFile.steps : [])
    //         // setState({ ...state, elements: props.singleApplet && props.singleApplet.applet && props.singleApplet.applet.steps ? props.singleApplet.applet.steps : [] })
    //     }

    // }, [props.singleAppletAsFile])






    const decision = state.elements && state.elements.filter((data, index) => {
        return !data.source
    })

    const finalDecision = decision && decision.map((data, index) => {
        return {
            name: data && data.data && data.data.label,
            value: data.id
        }
    })

    const onDecisionSelect = (data, dataObject) => {
        setState({ ...state, selectedDecision: dataObject })
    }

    const refWidth = useRef()

    useEffect(() => {
        if (refWidth.current) {
            setState({ ...state, attributes: { x: refWidth.current.offsetWidth / 2 - 100, y: 0 }, difference: refWidth.current.offsetWidth / 4 - 100 })
        }
    }, [refWidth])

    const mobileWidth = IsMobileWidth()

    const showGraph = () => {
        setState({ ...state, showGraphState: true })
    }

    const onBackClick = () => {
        setState({ ...state, showGraphState: false })
    }

    const updateApplet = () => {
        setState({ ...state, clickFire: true, doRecord: false })
        if (!Boolean(template)) {
            props.updateApplet({
                id: props.match.params.appletId,
                user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                steps: state.elements
            })
        }
        else {
            props.updateApplet({
                id: props.match.params.appletId,
                user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                steps: state.elements
            }, true)
        }
    }



    useEffect(() => {
        if (elements && elements.length !== 0 && state.clickFire) {
            setState({ ...state, clickFire: false })
            if (!Boolean(template)) {
                props.updateApplet({
                    id: props.match.params.appletId,
                    user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                    steps: elements
                })
            }
            else {
                props.updateApplet({
                    id: props.match.params.appletId,
                    user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                    steps: elements
                }, true)
            }

        }
    }, [elements])

    useEffect(() => {
        if (props.updateAppletsResponse && state.clickFire) {
            setState({ ...state, showGraphState: true })
        }
    }, [props.updateAppletsResponse])


    useEffect(() => {
        return () => {
            props.resetApplet()
        }
    }, [])

    useEffect(() => {
        // props.retrieveStepAsFile({
        //     filename: props.match.params.appletId
        // })
    }, [])


    const updateSelectedBox = (id, html, css) => {
        var result = juice(`<style>${css}</style>${html}`)
        var randomNumber = Math.random()


        setState({ ...state, clickFire: true })
        var tempElements = [...elements]
        var findedElement = tempElements.find((data, index) => {
            return data.id === id
        })
        if (findedElement) {


            findedElement.html = btoa(html)
            findedElement.css = btoa(css)
            findedElement.inlinehtml = btoa(result)
            findedElement.arrowHeadType = "arrow"
            findedElement.audio = currentAudio
        }

        if (!Boolean(template)) {
            // props.updateApplet({
            //     id: props.match.params.appletId,
            //     user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            //     steps: tempElements
            // })
            props.saveStepsAsFile({
                id: props.match.params.appletId,
                user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                steps: tempElements,
                filename: props.match.params.appletId
            })
        }
        else {
            // props.updateApplet({
            //     id: props.match.params.appletId,
            //     user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            //     steps: tempElements
            // }, true)
            props.saveStepsAsFile({
                id: props.match.params.appletId,
                user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                steps: tempElements,
                filename: props.match.params.appletId
            })
        }


    }

    useEffect(() => {
        const storage = getStorage();
        const pathReference = ref(storage, `${appletId}.json`);
        const gsReference = ref(storage, `gs://phoenix-nc.appspot.com/${appletId}.json`);
        const httpsReference = ref(storage, `https://firebasestorage.googleapis.com/v0/b/phoenix-nc.appspot.com/o/${appletId}.json?alt=media&`);
        getDownloadURL(ref(storage, `${appletId}.json`))
            .then(async (url) => {
                var obj = await (await fetch(url)).json().then((data) => {
                    setElements(data.steps)
                });
            })
            .catch((error) => {
                // Handle any errors
            });
    }, [])




    const setSelectedBox = (i, d) => {
        setState({ ...state, selectedBox: i, resetRecording: !state.resetRecording })
    }



    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [currentAudio, setCurrentAudio] = useState(false)

    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: name },
            position: { x: 0, y: 0 },
            audio: currentAudio,
            description: description

        }));
        setName("")
        setDescription("")
        setState({ ...state, resetRecording: true })
    };

    const onNodeDrag = (el) => {
        var tempElements = [...elements]
        var element = tempElements.find((data) => data.id === el.id)
        element.position.x = el.position.x
        element.position.y = el.position.y

        setElements(tempElements)
    }

    const [isRecording, setIsRecording] = useState(false)

    const getUrl = (url, isRecording) => {
        setCurrentAudio(url)
        setIsRecording(isRecording)
    }

    const getAudio = (data) => {
        var tempElements = [...elements]
        var item = tempElements && tempElements.find((item) => item.id === data.id)
        setState({ ...state, currentAudio: item.audio })
    }

    const deleteItem = (id) => {
        var tempElements = [...elements]
        var findedEle = tempElements && tempElements.find((data) => data.id === id)
        var index = tempElements.indexOf(findedEle)
        tempElements.splice(index, 1)
        setElements(tempElements)

    }

    // const onConnect = (params) => setElements(e => addEdge(params, e));

    const onConnect = (params) => setElements(e => addEdge({
        source: params.source,
        sourceHandle: params.sourceHandle,
        target: params.target,
        targetHandle: params.targetHandle,
        arrowHeadType: "arrow"

    }, e))




    return (
        <div className='w-100'>


            <div className='w-100 d-flex'>
                <div className='w-100'>
                    {
                    
                            <Graph
                                updateSelectedBox={updateSelectedBox}
                                elements={elements}
                                name={name}
                                description={description}
                                setDescription={setDescription}
                                setName={setName}
                                addNode={addNode}
                                setSelectedBox={setSelectedBox}
                                updateAppletLoading={props.updateAppletLoading}
                                saveStepAsFileResponseLoading={props.saveStepAsFileResponseLoading}
                                onNodeDrag={onNodeDrag}
                                onConnect={onConnect}
                                getUrl={getUrl}
                                isRecording={isRecording}
                                resetRecording={state.resetRecording}
                                getAudio={getAudio}
                                audioUrl={state.currentAudio}
                                deleteItem={deleteItem}
                            />
                    }
                </div>
            </div>
            {/* } */}
        </div>
    )
}

export default withRouter(Dashboard)
