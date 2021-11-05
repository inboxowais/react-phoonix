import './material.autocomplete.scss'
import React, { useState, useRef, useEffect } from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './material.autocomplete.style';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { CircularProgress, Popper, ClickAwayListener, Icon, Typography, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default function MaterialAutoComplete(props) {
    const { data, placeholder, execStatus, error, selectedItem, endAdornment, placement, startAdornment, disabled, topAdornment, pagination, required,lightBorder } = props;
    let selectedItm;
    if (selectedItem)
        selectedItm = data && data.find((item) => item.value === selectedItem.value);
    const classes = useStyles()
    const [state, setState] = useState({
        anchorELe: false,
        autoCompleteWidth: false,
        isPaginate: false
    })

    const autoCompleteRef = useRef()

    useEffect(() => {
        if (autoCompleteRef.current) {
            setState({ ...state, autoCompleteWidth: autoCompleteRef.current.offsetWidth })
        }
    }, [autoCompleteRef])

    const onOpen = (event) => {
        if (props.disabled === true) {

        }
        else {
            setState({ ...state, anchorELe: event.currentTarget })
        }
    }

    const closeDropdown = (e) => {
        e.stopPropagation()
        setState({ ...state, anchorELe: false })
    }

    const closePopper = (isPagination) => {
        setState({ ...state, isPaginate: false })
        if (!state.isPaginate) {
            setState({ ...state, anchorELe: false })
        }
    }

    const paginate = () => {
        setState({ ...state, isPaginate: true })
        props.onPagination()
    }

    const open = Boolean(state.anchorELe)

    const onMobileChange = (data) => {
        if (props.disabled === true) {

        }
        else {
            props.onSelect(data ? data.value : null, { ...data });
            setState({ ...state, anchorELe: false })
        }

    }
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'material-autocomplete',
        options: data && data.length > 0 ? data : "",
        open: open,
        openOnFocus: true,
        value: selectedItem && selectedItem.value,
        onChange: (event, data, detail) => {
            if (props.disabled === true) {

            }
            else {
                props.onSelect(data ? data.value : null, { ...data });
            }
        },
        onClose: (event) => {
            setState({ ...state, open: false })
        },
        onOpen: (event) => {

            if (props.disabled === true) {

            }
            else
                setState({ ...state, open: true })
        },
        getOptionLabel: (option) => {
            return option.name
        }
    })
    return (
        <React.Fragment>
            <div className="wrapper">


                <form className="w-100" autoComplete="new-password">
                    {
                        execStatus && execStatus.status === "PENDING" && !pagination ?
                            <Paper>
                                <div className="d-flex justify-content-center p-1">
                                    <CircularProgress className="p-2" size={30} />
                                </div>
                            </Paper> : null
                    }
                    {execStatus && execStatus.status === "ERROR" ? (
                        <Paper>
                            <div className="text-danger d-flex justify-content-center font-italic pt-2 pb-2">
                                <b>
                                    {" "}
                                    {execStatus.errorDetail && typeof execStatus.errorDetail === 'object'
                                        ? execStatus.errorDetail.get("description")
                                        : "Something isn’t working as it should, please try again"}
                                </b>
                            </div>
                        </Paper>
                    ) : null}
                    {
                        data && data.length > 0 ?
                            <div className="w-100 d-flex flex-column justify-content-center  position-relative"
                                {...getRootProps()}>
                                {
                                    topAdornment ?
                                        <div>
                                            {topAdornment}
                                        </div>
                                        : null
                                }
                                <ClickAwayListener onClickAway={() => closePopper(false)}>

                                    <Paper
                                        ref={autoCompleteRef}
                                        id="paper-autocomplete"
                                        onClick={onOpen}

                                        component="div"
                                        className={clsx("d-flex align-items-center cursor-pointer",
                                            state.open && classes.borderRadiusPartial,
                                            !state.open && classes.borderRadiusFull,
                                            props.lightBorder && classes.lightBorder, !props.lightBorder && classes.paperRoot, "paper-root border-radius-10 w-100"
                                            ,
                                        )}>
                                        {
                                            startAdornment ?
                                                <div className=" pl-2 font-weight-bold d-flex">
                                                    <div className="width-max-content">{startAdornment}</div>
                                                    {
                                                        required ? <b className="text-danger pl-1">*</b> : null
                                                    }
                                                </div>
                                                : null
                                        }
                                        {
                                            selectedItm && selectedItm.img ?
                                                <Paper className="svg-logo" elevation={3}>
                                                    <img
                                                        className="svg-logo"
                                                        src={`${process.env.PUBLIC_URL}/assets/images/${selectedItm.img}`}

                                                    /></Paper> : null
                                        }
                                        {
                                            selectedItm && selectedItm.svgLogo ?
                                                <Paper className={clsx("svg-logo", !startAdornment && "ml-3", startAdornment && "ml-2")} elevation={3}>
                                                    <Avatar
                                                        className="svg-logo"
                                                        alt={""}
                                                        src={selectedItm.svgLogo}
                                                    /></Paper> : null
                                        }
                                        <InputBase
                                            {...getInputProps()}
                                            disabled={true}

                                            placeholder={placeholder}
                                            onFocus={onOpen}
                                            onBlur={closePopper}
                                            value={selectedItm && selectedItm.name}
                                            inputProps={{
                                                className: 'pb-0 pt-0',

                                            }}
                                            className={clsx(`flex-grow-1 ${classes.input}`, !startAdornment && !selectedItem && "pl-2", startAdornment && !selectedItem && "pl-2", selectedItem && "pl-2")}
                                        />

                                        {

                                            !disabled ?
                                                selectedItem && data && data.length === 1 ?
                                                    null :
                                                    <Icon className="pr-2" color="secondary">
                                                        {
                                                            placement && placement.indexOf("right") >= 0 ?
                                                                <React.Fragment>

                                                                    {
                                                                        open ?
                                                                            <span class="material-icons">
                                                                                keyboard_arrow_left</span> :
                                                                            <span class="material-icons">
                                                                                keyboard_arrow_right</span>
                                                                    }
                                                                </React.Fragment> :
                                                                <React.Fragment>
                                                                    {
                                                                        open ?
                                                                            <ExpandLessIcon onClick={closeDropdown} />

                                                                            :
                                                                            <ExpandMoreIcon />
                                                                    }
                                                                </React.Fragment>

                                                        }
                                                    </Icon> : null
                                        }

                                    </Paper>
                                </ClickAwayListener>
                                {data && data.length > 0 ? (
                                    <Popper open={open} anchorEl={state.anchorELe} placement={placement ? placement : "bottom"} className={classes.listbox} style={{
                                        width: state.autoCompleteWidth,
                                        zIndex: 10000
                                    }} {...getListboxProps()}>
                                        <Paper elevation={1} className="bg-light">
                                            {data && data.map((option, index) => (
                                                <React.Fragment>
                                                    <li
                                                        className={classes.listItem}
                                                        {...getOptionProps({ option, index })}
                                                        onTouchStartCapture={() => onMobileChange(option)}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            {
                                                                option.img ?
                                                                    <Paper className="svg-logo " elevation={3}>
                                                                        <img
                                                                            src={`${process.env.PUBLIC_URL}/assets/images/${option.img}`}
                                                                            className="svg-logo"
                                                                        /></Paper> : null
                                                            }
                                                            {
                                                                option.svgLogo ?
                                                                    <Paper className="svg-logo" elevation={3}>

                                                                        <Avatar
                                                                            alt={""}
                                                                            className="svg-logo"
                                                                            src={option.svgLogo}
                                                                        /></Paper> : null
                                                            }
                                                            <div className="w-100 d-flex justify-content-between align-items-center">
                                                                <div className="pl-1 d-flex flex-column w-100 pr-2">
                                                                    {
                                                                        option.name &&
                                                                        <div>
                                                                            <Typography><b>{option.name}</b></Typography>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        option.description1 &&
                                                                        <div>
                                                                            <Typography>{option.description1}</Typography>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        option.description2 &&
                                                                        < div >
                                                                            <Typography>{option.description2}</Typography>
                                                                        </div>
                                                                    }

                                                                </div>
                                                                {
                                                                    selectedItm && selectedItm.value == option.value ?
                                                                        <div>
                                                                            <Icon>
                                                                                <i className="fa fa-check text-success"></i>
                                                                            </Icon>
                                                                        </div> : null
                                                                }

                                                            </div>
                                                        </div>
                                                    </li>
                                                </React.Fragment>
                                            ))}
                                            {
                                                execStatus && execStatus.status === "PENDING" && pagination ?
                                                    <div className="d-flex w-100 justify-content-center">
                                                        <CircularProgress />
                                                    </div> :
                                                    pagination ?
                                                        <div className="d-flex w-100 justify-content-center">
                                                            <Button variant="text" onClick={paginate}>
                                                                Load More
                                                            </Button>
                                                        </div> : null
                                            }
                                        </Paper>
                                    </Popper>
                                ) : null}
                            </div> : execStatus && execStatus.status !== "PENDING" &&
                                execStatus.status !== "ERROR" ? <Paper>
                                <div className=" text-muted d-flex justify-content-center p-2">
                                    <Typography>No Result Found</Typography>
                                </div>
                            </Paper> : null
                    }
                </form>
                {
                    error ?
                        <div className="text-danger 
                    d-flex justify-content-start p-1">
                            <Typography> {error}</Typography>
                        </div> : null
                }
            </div>
        </React.Fragment >

    )
}
//name , value , img