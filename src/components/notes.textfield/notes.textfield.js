import React, { useState } from 'react'
import { TextField, Paper, Typography, ClickAwayListener } from '@material-ui/core'
import './notes.textfield.scss'
import { useStyles } from './notes.textfield.style'
export default function NotesTextField(props) {
    const [state, setState] = useState({
        textFieldIsFocus: false,
        notesLength: 0,
    })
    const {
        placeholder,
        error,
        maxLength,
        value,
        showCount,
        topAdornment
    } = props

    const onFocus = () => {
        setState({ ...state, textFieldIsFocus: true })
    }
    const onBlur = () => {
        setState({ ...state, textFieldIsFocus: false })
    }

    const onChange = (e) => {
        if (e.target.value.length <= 500) {
            setState({ ...state, notesLength: e.target.value.length })
            props.onChange(e)
        }
    }

    const classes = useStyles();
    return (
        <div id="notes" className = "w-100">
            {
                topAdornment ? <Typography className="pb-2 text-left">
                    {topAdornment}
                </Typography> : null
            }
            <div className="d-flex align-items-start w-100">
                <div className="w-100">
                    <ClickAwayListener onClickAway={onBlur}>
                        <Paper  classes={{ root: "paper" }} className="paper-root w-100" >
                            {
                                <TextField onFocus={onFocus}
                                    InputProps={{
                                        classes: {
                                            inputAdornedStart: classes.paddingLeft,
                                            notchedOutline: classes.noBorder,
                                        }
                                    }}
                                    classes={{
                                        root: state.textFieldIsFocus ? "height-100" : null
                                    }}
                                    inputProps={{
                                        maxLength: maxLength
                                    }}
                                    value={value}


                                    onChange={onChange}
                                    autoFocus={state.textFieldIsFocus}
                                    rows={7}
                                    multiline={true}
                                    variant="outlined"
                                    className="w-100"
                                    placeholder={placeholder}>

                                </TextField>
                            }
                            {
                                showCount ?
                            <div className="d-flex justify-content-end w-100 pr-2 text-muted">
                                <Typography>{state.notesLength}/500</Typography>
                            </div> : null
}
                        </Paper>
                    </ClickAwayListener>
                    {
                        error ?
                            <div className="text-danger p-2">
                                {error}
                            </div> : null
                    }
                </div>
            </div>
        </div>
    )
}


