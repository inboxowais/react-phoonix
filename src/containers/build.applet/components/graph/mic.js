import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { storage } from './../../../firebase/index'
import { CircularProgress } from "@material-ui/core";

export const Recorder = (props) => {
    const [state, setState] = useState({
        isRecording: false,
        blobURL: "",
        isBlocked: false,
    });

    const [progress, setProgress] = useState("NONE")

    const [Mp3Recorder, setMp3Recorder] = useState(new MicRecorder({ bitRate: 128 }))

    useEffect(() => {
        navigator && navigator.mediaDevices.getUserMedia(
            { audio: true },
            () => {
                setState({ isBlocked: false });
            },
            () => {
                setState({ isBlocked: true });
            }
        );
    }, [])


    useEffect(() => {
        if (state.blobURL) {
            props.getUrl(state.blobURL,state.isRecording)
            
        }
    }, [state.blobURL])

    useEffect(() => {
        if (props.resetRecording) {
            setState({ ...state, isRecording: false, isBlocked: false })
        }
    }, [props.resetRecording])



    const start = () => {
       
        if (state.isBlocked) {

        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    setState({ isRecording: true });
                    
                }).catch((e) => console.error(e));
        }
    };

    useEffect(() => {
        props.getUrl(state.blobURL,state.isRecording)
    },[state.isRecording])

    const stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)

                const file = new File(buffer, `voice-recorder-${Math.random()}.mp3`, {
                    type: blob.type,
                    lastModified: Date.now()
                });

                
                const uploadTask = storage.ref(`images/${file.name}`).put(file);
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
                            .child(file.name)
                            .getDownloadURL()
                            .then(url => {

                                setState({ blobURL: url, isRecording: false });
                            });
                    }
                );
                // audioToBase64(blobURL).then((data) => {
                //     console.log(data)
                // })

            }).catch((e) => console.log(e));
    };

    


    useEffect(() => {
        if (props.audioUrl) {
            setState({ ...state, blobURL: false })
        }
    }, [props.audioUrl])


    return (
        <React.Fragment>
            {
                progress === "LOADING" ? <CircularProgress /> :
                    <div className="d-flex flex-column">

                        <div className="d-flex">
                            <div className={`d-flex box background-light justify-content-center align-items-center pl-2 pr-2 cursor-pointer ${state.isRecording ? 'bg-primary' : null}`} onClick={start}>
                                <div className="d-flex">
                                    <div><i className="fa fa-microphone color-light"></i></div>
                                    <div className="pl-1 color-light applied-font">Record</div>
                                </div>
                            </div>
                            <div className={`d-flex box background-light justify-content-center align-items-center pl-2 pr-2 cursor-pointer ml-2 ${!state.isRecording ? 'bg-primary' : null}`} onClick={stop}>
                                <div className="d-flex">
                                    <div><i className="fa fa-stop color-light"></i></div>
                                    <div className="pl-1 color-light applied-font">Stop</div>
                                </div>
                            </div>

                        </div>
                        {
                            state.isRecording ? <b className="applied-font">We are listening</b> : null
                        }
                        {
                            !state.isRecording ?
                                <audio

                                    src={state.blobURL ? state.blobURL : props.audioUrl} className="mt-2" controls="controls" /> : null
                        }
                    </div>
            }
        </React.Fragment>
    );
};