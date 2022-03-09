import { Typography, Button, FormControlLabel, CircularProgress, Chip, IconButton } from '@material-ui/core';
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield';
import RadioButton from '@material-ui/core/Radio'
import MaterialAutoComplete from '../../components/material.autocomplete/material.autocomplete';
import NotesTextField from '../../components/notes.textfield/notes.textfield';
import { withRouter } from 'react-router-dom'
import { IsMobileWidth } from 'components/utils/util';
import { useEffect, useState, useRef } from 'react';
import MultiSelectAutoCompleteMulti from './../../components/material.autocomplete.multiselect/material.autocomplete.multiselect'
import { isValidCreateApplet } from './validator'
import { regex } from 'components/utils/regex';
import { getQueryStringValue } from 'components/utils/util'
import { storage } from './../firebase/index'
function Dashboard(props) {

    const [state, setState] = useState({
        name: "",
        description: "",
        channel: "",
        categories: [],
        keywords: [],
        image: "",
        keyword: "",
        files: "",
        validationResult: {
            isValidName: true,
            isValidDescription: true,
            isValidChannel: true,
            isValidCategories: true,
            isValidKeyWords: true,
            isValidImage: true,
            isValidFile: true,
            allValid: true
        },
        allCategories: [
            {
                name: "test1",
                value: "test1"
            },
            {
                name: "test2",
                value: "test2"
            },
            {
                name: "test3",
                value: "test3"
            },
            {
                name: "test4",
                value: "test4"
            }
        ]
    })

    const mobileWidth = IsMobileWidth()









    useEffect(() => {
        if (props.singleApplets) {

            var categoriestemp = null
            if (props.singleApplets && props.singleApplets.applet) {
                categoriestemp = props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.categories && props.singleApplets.applet.categories.map((data, index) => {
                    return {
                        name: data,
                        value: data
                    }
                })
            }
            else {
                categoriestemp = props.singleApplets && props.singleApplets.template && props.singleApplets.template.categories && props.singleApplets.template.categories.map((data, index) => {
                    return {
                        name: data,
                        value: data
                    }
                })
            }
            if (props.singleApplets && props.singleApplets.applet) {
                setState({
                    ...state,
                    name: props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.name,
                    description: props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.description,
                    categories: categoriestemp,
                    channel: {
                        name: props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.channel.name,
                        value: props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.channel.id
                    },
                    keywords: props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.keywords,
                    files: props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.feature_image,


                })
                setUploadedImage(props.singleApplets && props.singleApplets.applet && props.singleApplets.applet.feature_image)
            }
            else {
                setState({
                    ...state,
                    name: props.singleApplets && props.singleApplets.template && props.singleApplets.template.name,
                    description: props.singleApplets && props.singleApplets.template && props.singleApplets.template.description,
                    categories: categoriestemp,
                    channel: {
                        name: props.singleApplets && props.singleApplets.template && props.singleApplets.template.channel.name,
                        value: props.singleApplets && props.singleApplets.template && props.singleApplets.template.channel.id
                    },
                    keywords: props.singleApplets && props.singleApplets.template && props.singleApplets.template.keywords,
                    files: props.singleApplets && props.singleApplets.template && props.singleApplets.template.feature_image,


                })
                setUploadedImage(props.singleApplets && props.singleApplets.template && props.singleApplets.template.feature_image)
            }
        }
    }, [props.singleApplets])



    useEffect(() => {
        props.getChannel({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id
        })
    }, [])



    const channels = props.channels.channels && props.channels.channels.map((data, index) => {

        return {
            name: data.name,
            value: data.id
        }
    })


    const { appletId } = props.match.params

    const templateQ = getQueryStringValue("template")

    useEffect(() => {
        if (appletId) {
            if (!Boolean(templateQ)) {
                props.getSingleApplet(appletId)
            }
            else {
                props.getSingleApplet(appletId, true)
            }
        }
    }, [])

    useEffect(() => {
        return () => {
            props.resetApplet()
        }
    }, [])




    const onChange = (e, name) => {

        setState({ ...state, [name]: e.target.value })

    }

    const onSelect = (data, dataObject, name) => {
        setState({ ...state, [name]: dataObject })
    }

    const onMultiSelect = (data, dataObject, name) => {
        setState({ ...state, [name]: data })
    }

    const addKeyWord = (e) => {
        e.preventDefault()

        var tempKeyWord = [...state.keywords]
        if (/^(?=.*[A-Za-z])[A-Za-z\d@_.]{3,20}$/.test(state.keyword)) {
            tempKeyWord.push(state.keyword)

            setState({ ...state, keywords: tempKeyWord, keyword: "" })
        }
    }

    const deleteChip = (data) => {
        var tempKeyword = [...state.keywords]
        var index = tempKeyword.indexOf(data)
        tempKeyword.splice(index, 1)
        setState({ ...state, keywords: tempKeyword })
    }

    const [uploadedImage, setUploadedImage] = useState(false)
    const [progress, setProgress] = useState("NONE")



    const handleChange = (event) => {
        // var items = Object.keys(event.target.files).map(async (key) => {
        //     var item = event.target.files[key]
        //     return item
        // })

        // Promise.all(items).then(result => {
        //     setState({ ...state, files: result, })
        // })



        const uploadTask = storage.ref(`images/${event.target.files[0].name}`).put(event.target.files[0]);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                if (progress < 100) {
                    setProgress("LOADING")
                }
                else {
                    setProgress("NONE")
                }
            },
            error => {
                // console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(event.target.files[0].name)
                    .getDownloadURL()
                    .then(url => {
                        setUploadedImage(url)
                    });
            }
        );
    }

    const fileToBase64 = (file) => {
        return new Promise(resolve => {
            var reader = new FileReader();
            reader.onload = function (event) {
                resolve(event.target.result);
            };
            reader.readAsDataURL(file);
        });
    };



    const createBuilder = async (e, template) => {

        e.preventDefault()
        if (appletId && !templateQ) {
            var base64Image = typeof state.files === 'string' ? state.files : await fileToBase64(state.files[0])
            const cat = state.categories && state.categories.map((data, index) => {
                return data.name
            })
            props.updateApplet({
                id: props.match.params.appletId,
                user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                name: state.name,
                feature_image: uploadedImage,
                description: state.description,
                channel: state.channel.value,
                channel_name: state.channel.name,
                categories: cat,
                keywords: state.keywords,
                link: "testlink",
            
            })


        }
        else {
            const validationResult = isValidCreateApplet(state)
            setState({ ...state, validationResult: validationResult })
            if (validationResult.allValid) {

                var base64Image = typeof state.files === 'string' ? state.files : await fileToBase64(state.files[0])
                const cat = state.categories && state.categories.map((data, index) => {
                    return data.name
                })
                const data = {
                    "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                    "name": state.name,
                    "feature_image": uploadedImage,
                    "description": state.description,
                    "channel": state.channel.value,
                    "channel_name": state.channel.name,
                    "categories": cat,
                    "keywords": state.keywords,
                    "link": "testlink",
                    "status": false
                }


                props.createApplet(data, template)
            }
        }


    }


    useEffect(() => {
        if (props.createAppletsResponse) {

            if (props.createAppletsResponse && props.createAppletsResponse.applet && props.createAppletsResponse.applet.id) {


                if (Boolean(templateQ)) {
                    props.history.push(`/builder/${props.createAppletsResponse.applet.id}?templateId=${appletId}`)
                }
                else {
                    props.history.push(`/builder/${props.createAppletsResponse.applet.id}`)
                }
            }
            else {
                props.history.push(`/builder/${props.createAppletsResponse.template.id}?template=true`)
            }
        }

        if (props.updateApplets) {
            console.log(props.updateApplets)
            fetch('https://fcm.googleapis.com/fcm/send', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'key=AAAAas_p8to:APA91bE4JfnEphNz_DrlBdc8frZfwq-XQnH1mVl70usk7VqHBkJLDfiE_KNj--IscGTns4yRDeEYj14s66EVmOzGumX3WV46-KMROegbl1f-lB-8jtteStqp5mcytS1LHTPwvINrk2rS'
                },
                body: JSON.stringify({
                    "to": props.singleUser && props.singleUser.user && props.singleUser.user.mobileToken,
                    "notification": {
                        "title": `${props.updateApplets.applet.channel_name} Updated ${props.updateApplets.applet.name}`,
                        "body": `${props.updateApplets.applet.description}`,

                    },
                    "data": {
                        "url": props.updateApplets.applet.feature_image,

                    }


                })
            }).then(res => res.json())
                .then((res) => {
                    if (res.success) {
                        props.addNotification({
                            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
                            "notification": {
                                "to": props.singleUser && props.singleUser.user && props.singleUser.user.mobileToken,
                                "notification": {
                                    "title": `${props.updateApplets.applet.channel_name} Updated ${props.updateApplets.applet.name}`,
                                    "body": `${props.updateApplets.applet.description}`,
                                    "date": new Date()

                                },
                                "data": {
                                    "url": props.updateApplets.applet.feature_image,

                                }
                            }
                        })
                        props.addSubscriberNotification({
                            "channel_id": props.updateApplets.applet.channel._path.segments[1],
                            "notification": {
                                "to": props.singleUser && props.singleUser.user && props.singleUser.user.mobileToken,
                                "notification": {
                                    "title": `${props.updateApplets.applet.channel_name} Updated ${props.updateApplets.applet.name}`,
                                    "body": `${props.updateApplets.applet.description}`,
                                    "date": new Date()

                                },
                                "data": {
                                    "url": props.updateApplets.applet.feature_image,
                                }
                            }
                        })
                    }
                });


            props.history.push(`/builder/${props.updateApplets.applet.id}?update=true`)
        }
    }, [props.createAppletsResponse || props.updateApplets])


    useEffect(() => {

        return () => {
            props.resetApplet()
        }
    }, [])




    const myRefs = useRef([]);

    return (
        <form className='w-100'>
            <div className={`d-flex flex-column ${mobileWidth && "w-100"} ${!mobileWidth && 'w-50'}`}>
                <Typography variant="h5" className="font-weight-bolder">Build Your Applet</Typography>
                <div className='pt-2'>
                    <Typography variant="h6" className="font-weight-bold">Name</Typography>
                    <SiteLabelTextField
                        lightBorder
                        placeholder="What is your applet’s name?"
                        error={!state.validationResult.isValidName ? "Name Is Required" : null}
                        onChange={(e) => onChange(e, "name")}
                        value={state.name}
                        maxLength={40}
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Description</Typography>
                    <NotesTextField
                        lightBorder
                        placeholder="Write a brief applet description (up to 280 characters)"
                        error={!state.validationResult.isValidDescription ? "Description Is Required" : null}
                        onChange={(e) => onChange(e, "description")}
                        value={state.description}
                        maxLength={280}
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Channel</Typography>
                    {
                        props.channelLoading ? <CircularProgress /> :
                            <MaterialAutoComplete
                                placeholder="Select Channel"
                                onSelect={(data, dataObject) => onSelect(data, dataObject, "channel")}
                                error={!state.validationResult.isValidChannel ? "Channel Is Required" : null}
                                lightBorder
                                selectedItem={state.channel}
                                data={channels}
                            />
                    }
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold" >Categories</Typography>
                    <MultiSelectAutoCompleteMulti
                        lightBorder
                        onSelect={(data, dataObject) => onMultiSelect(data, dataObject, "categories")}
                        error={!state.validationResult.isValidCategories ? "Categories Is Required" : null}
                        selectedItems={state.categories}
                        placeholder="Select up to three categories"
                        data={state.allCategories}
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Keywords</Typography>
                    {
                        state.keywords && state.keywords.map((data, index) => {
                            return <Chip label={data} key={index} className="p-2 applied-font"
                                onDelete={() => deleteChip(data)}
                            />
                        })
                    }

                    <div className="d-flex">

                    </div>
                    {
                        state.keywords && state.keywords.length === 5 ? null :
                            <form className="pt-2">
                                <SiteLabelTextField
                                    placeholder="Key"
                                    error={!state.validationResult.isValidKeyWords ? "Keywords Is Required" : null}
                                    endAdornment={<IconButton
                                        type="submit" onClick={(e) => addKeyWord(e)}><i className={`fa fa-plus cursor-pointer`}></i></IconButton>}
                                    onChange={(e) => onChange(e, 'keyword')}
                                    value={state.keyword}

                                    lightBorder
                                />
                            </form>
                    }
                </div>

                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Cover</Typography>
                    <div className="d-flex">

                        <div className="d-flex flex-column">
                            {
                                progress === "LOADING" ? <CircularProgress /> :
                                    <Button onClick={() => { myRefs.current[0].click(); }} className="applied-font">Upload Image</Button>
                            }
                        </div>
                        {
                            uploadedImage ?
                                <img style={{ width: 50, height: 50 }} className="pl-3" src={uploadedImage} /> : null
                        }
                    </div>

                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        // onClick={() => addImages("SURVEY_LEFT_SIDE")}
                        style={{ display: "none" }}
                        onChange={(event) => handleChange(event, "name")}
                        ref={(el) => (myRefs.current[0] = el)}
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Legal Agreement</Typography>
                    <div className="pt-2 applied-font" >
                        By continuing, I agree to all applicable <span className="text-primary applied-font">Phoenix NC Terms</span> and <span className="text-primary"> Phoenix NC Policies</span>.
                    </div>
                </div>
                <div className="pt-4 w-100 d-flex justify-content-center">
                    {
                        props.createAppletLoading || props.updateAppletsLoading ? <CircularProgress /> :
                            <div className='d-flex'>
                                <Button variant="contained" style={{ borderRadius: 10 }} onClick={(e) => createBuilder(e, false)}>
                                    {
                                        Boolean(templateQ) ?
                                            <div>Start Building</div> :
                                            appletId ?
                                                <div>Update Applet</div> :
                                                <div>   Start Building</div>
                                    }
                                </Button>
                                {
                                    !Boolean(templateQ) ?
                                        <Button variant="contained" className='ml-3' style={{ borderRadius: 10 }} onClick={(e) => createBuilder(e, true)}>
                                            Save As Template
                                        </Button> : null
                                }

                            </div>
                    }
                </div>
            </div>
        </form>
    )
}

export default withRouter(Dashboard)