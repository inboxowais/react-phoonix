import React, { useEffect, useState } from 'react'
import { GrapesjsReact } from 'grapesjs-react'
// import 'grapesjs/dist/css/grapes.min.css';
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
// import 'grapesjs/dist/grapes.min.css'
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
// import { Button } from '@material-ui/core'
// import "grapesjs/dist/css/grapes.min.css";
// import "antd/dist/antd.min.css";
// import 'grapesjs-preset-webpage'
// import "bootstrap/dist/css/bootstrap.min.css";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import ReactFlow from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
import { Button, CircularProgress } from '@material-ui/core'
import { IsDesktopWidth, IsDesktopSmallWidth } from './../../../../components/utils/util'
import SiteLabelTextField from 'components/site.label.textfield/site.label.textfield'
import NotesTextField from 'components/notes.textfield/notes.textfield'
import { Recorder } from './mic';
import DragAndDrop from './drag.and.drop/drag.and.drop'
import { withRouter } from 'react-router'
import { Typography } from '@material-ui/core'
function GraphJs(props) {

    const destopTopWidth = IsDesktopWidth()
    const smallDeskTopWidth = IsDesktopSmallWidth()


    const [editor, setEditor] = useState(false)
    const [state, setState] = useState({
        html: false,
        css: false
    })
    const [selectedBox, setSelectedBox] = useState(false)
    const [landingPage, setLandingPage] = useState({
        html: false,
        css: false
    })









    useEffect(() => {
        var editor = grapesjs.init({
            container: "#gjs",
            plugins: ['gjs-preset-webpage'],
            deviceManager: {
                devices: [{
                    name: 'Mobile',
                    width: '45%',
                    widthMedia: '',
                }, {
                    name: 'Desktop',
                    width: '',
                    widthMedia: '',
                }]
            },
            forceClass: false,
            fromElement: true,
        })



        editor.setDevice('Mobile');
        const findItem = props.elements && props.elements.find((data, index) => data.id === selectedBox.id)
        if (findItem && findItem.css) {

            editor.setComponents(atob(findItem.html));
            editor.setStyle(atob(findItem.css))
        }
        else {
            editor.DomComponents.clear();
            editor.setStyle('.cls{color: red}');
        }
        setEditor(editor)
    }, [selectedBox, destopTopWidth, smallDeskTopWidth])


    const onElementClick = (i, d) => {
        props.getAudio(d)
        setSelectedBox(d)
    }

    console.log(selectedBox)


    return (
        <div className="w-100 ">

            {
                props.saveStepAsFileResponseLoading ? <CircularProgress /> :
                    <React.Fragment>
                        <Button className="mt-2 mb-2" onClick={() => props.updateSelectedBox(selectedBox.id, editor.getHtml(), editor.getCss())}>Save</Button>

                        <Button onClick={() => props.history.push("/applets")} className="ml-3">Go To Applets List</Button>
                        {
                            selectedBox ?
                                <Button className='ml-3' onClick={() => props.deleteItem(selectedBox.id)}>Delete</Button> : null
                        }
                    </React.Fragment>
            }

            <div className='d-flex w-100 justify-content-center pt-4 pb-4 flex-column'>
                <div className='w-75'>
                    <div className='w-100 d-flex align-items-start'>
                        <div className='w-30'>
                            <SiteLabelTextField
                                onChange={e => props.setName(e.target.value)}
                                value={props.name}
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className='w-30 pl-2'>
                            <NotesTextField
                                onChange={e => props.setDescription(e.target.value)}
                                value={props.description}
                                placeholder="Enter Description"
                            />
                        </div>

                        <div className='w-25 pl-2'>

                            <Button
                                style={{ width: "max-content" }}
                                type="button"
                                disabled={props.isRecording}
                                className='applied-font'
                                onClick={() => props.addNode(state.cu)}
                            >Add Step</Button>
                        </div>
                    </div>

                </div>
                <div className='w-25 pl-3 pt-2'>
                    <Recorder
                        getUrl={props.getUrl}
                        resetRecording={props.resetRecording}
                        audioUrl={props.audioUrl}
                    />
                </div>
            </div>
            <div>
                <Typography className="font-weight-bold text-danger pb-2">Image larger than 2mb can not be uploaded</Typography>
            </div>


            <div className="w-100 d-flex">

                <div className="w-70">
                    {
                        !selectedBox ? <div style={{ height: "70vh", backgroundColor: 'gray' }} className="d-flex justify-content-center align-items-center">
                            <b className='font-weight-bold text-white' style={{ fontSize: 25 }}>No Step Selected</b>
                        </div> :
                            <div id="gjs"></div>
                    }
                </div>
                <div className='w-30'>
                    <DragAndDrop
                        onElementClick={onElementClick}
                        elements={props.elements}
                        addNode={props.addNode}
                        onNodeDrag={props.onNodeDrag}
                        onConnect={props.onConnect}
                        setSelectBox={props.setSelectBox}
                    />
                </div>
            </div>
        </div>
    )
}

export default withRouter(GraphJs)
