import './material.autocomplete.multiselect.scss';
import React, { useState } from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './material.autocomplete.multiselect.style';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { CircularProgress, Popper, ClickAwayListener, Icon, Typography, Chip, Divider, Tooltip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'

const CustomizedChip = (props) => {
    const { label, img, svgLogo, action, content } = props
    return <Tooltip
        title={label}><Chip
            label={
                <div className="d-flex align-items-center">
                    <div className="truncated-word applied-font"> {label}</div>
                    {
                        action ?
                            <div className="h-100 d-flex" onClick={(e) => props.onActnClick(e, content)} >
                                {action}
                            </div> : null
                    }
                </div>
            }
            icon={
                img ?
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/${img}`}
                        className="svg-logo"
                    /> : svgLogo ?
                        <Avatar
                            className="svg-logo"
                            alt={""}
                            src={svgLogo}
                        /> : null
            }
            onDelete={props.onDelete}
            deleteIcon={
                <i className="text-primary fa fa-trash"></i>
            }
            classes={{
                deleteIcon: "delete-icon"
            }}
        /></Tooltip>
}

export default function MaterialAutoCompleteMultiSelect(props) {
    const { data, placeholder, execStatus, error, selectedItems, endAdornment, placement, startAdornment, disabled, truncated, topAdornment } = props;


    let selectedItms = [];
    selectedItems && selectedItems.map((sItem) => {
        let itm;
        itm = data && data.find((item) => item.value === sItem.value);
        if (itm) {
            selectedItms.push(itm)
        }
    })
    const classes = useStyles()
    const [state, setState] = useState({
        anchorELe: false,
        open: false
    })
    const onActnClick = (e, content) => {
        let itm = selectedItems && selectedItems.find((item) => item.value === content.value);
        closePopper();
        e.stopPropagation();
        props.onActionClick(itm);
    }

  
    const onOpen = (event) => {
        if (props.disabled === true) {
        }
        else {
            setState({ ...state, anchorELe: event.currentTarget, open: true })
        }
    }
    const closePopper = () => {
        setState({ ...state, open: false })
    }
    const isAlreadAdded = (option) => {
        let itm = selectedItems && selectedItems.find((item) => item.value === option.value);
        if (itm && itm.value) {
            return true;
        }
        return false;
    }
    const open = Boolean(state.anchorELe) && state.open === true;

    const onMobileChange = (data) => {
        if (props.disabled === true) {

        }
        else {
            props.onSelect(data);
        }
    }
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getTagProps,
        getOptionProps,
        groupedOptions,
        value
    } = useAutocomplete({
        id: 'material-autocomplete',
        options: data && data.length > 0 ? data : "",
        open: open,
        openOnFocus: true,
        freeSolo: true,
        filterSelectedOptions: true,
        multiple: true,
        defaultValue: selectedItms,
        value: selectedItms,
        onChange: (event, data, detail) => {
            if (props.disabled === true) {

            }
            else {
                let itemAlreadyAdded = false;
                // if (selectedItems) {
                //     for (var i = 0; i < selectedItems.length; i++) {
                //         let itm;
                //         itm = data && data.find((item) => item.value === selectedItems[i].value);
                //         if (itm && itm.value) {
                //             itemAlreadyAdded = true;
                //             break;
                //         }
                //     }
                // }

                if (itemAlreadyAdded === false) {
                    let itms = [];
                    data && data.map((dt) => {
                        let sItm = selectedItems && selectedItems.find((item) => item.value === dt.value);
                        if (sItm) {
                            itms.push(sItm);
                        }
                        else {
                            itms.push(dt);
                        }
                    })
                    if (event.target.className === "text-primary fa fa-trash MuiChip-deleteIcon delete-icon") {
                        props.onSelect(itms);
                        setState({ ...state, open: false })
                    }
                    else if (event.key === "Enter") {
                        if (groupedOptions && groupedOptions[0]) {
                            setState({ ...state, open: false })
                            // props.onSelect(groupedOptions && groupedOptions[0] ? groupedOptions[0].name : null, {
                            //     city: groupedOptions && groupedOptions[0] && groupedOptions[0].name,
                            //     name: groupedOptions && groupedOptions[0] && groupedOptions[0].name,
                            //     value: groupedOptions && groupedOptions[0] && groupedOptions[0].name
                            // });
                            props.onSelect(itms);
                        }
                    }
                    else {
                        setState({ ...state, open: true })
                        props.onSelect(itms);
                    }
                }
            }
        },
        getOptionLabel: (option) => {
            return option.name
        }
    })

    return (
        <React.Fragment>
            <div className="w-100">
                {
                    execStatus && execStatus.status === "PENDING" && !data ?
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
                            <Paper
                                id="paper-autocomplete"
                                onClick={onOpen}
                                component="div"
                                className={clsx("d-flex align-items-center cursor-pointer",
                                    state.open && classes.borderRadiusPartial,
                                    !state.open && classes.borderRadiusFull,
                                    classes.paperRoot,
                                )}>
                                {
                                    startAdornment ?
                                        <div>
                                            {startAdornment}
                                        </div>
                                        : null
                                }
                                <div className="d-flex flex-column w-100">
                                    <div className="w-100 d-flex align-items-center">
                                        <InputBase
                                            {...getInputProps()}
                                            autoFocus={open}
                                            placeholder={placeholder}
                                            onKeyDown={e => {
                                                setState({ ...state, open: true })
                                                // if (e.keyCode === 13 && e.target.value) {
                                                //     setState({ ...state, anchorELe: false })

                                                // }
                                            }}
                                            inputProps={{
                                                className: 'pb-2 pt-2'
                                            }}
                                            className={clsx(`${classes.input}`, !startAdornment && !selectedItems && "pl-4", startAdornment && !selectedItems && "pl-2", selectedItems && "pl-2")}
                                        />
                                        {!disabled ?
                                            selectedItems && data && data.length === 1 ?
                                                null :
                                                <div className="pr-2">
                                                    {
                                                        placement && placement.indexOf("right") >= 0 ?
                                                            <React.Fragment>

                                                                {
                                                                    open ?
                                                                        <i class="fa fa-caret-up">
                                                                        </i> :
                                                                        <i class="fa fa-caret-down">
                                                                        </i>
                                                                }
                                                            </React.Fragment> :
                                                            <React.Fragment>
                                                                {
                                                                    open ?
                                                                        <i class="fa fa-caret-up">
                                                                        </i> :
                                                                        <i class="fa fa-caret-down">
                                                                        </i>
                                                                }
                                                            </React.Fragment>

                                                    }
                                                </div> : null
                                        }
                                    </div>
                                    {
                                        value && value.length > 0 ?
                                            <div className="w-100 pl-2 pr-2 d-flex flex-wrap" style={{ maxHeight: 200, overflow: "auto" }}>
                                                <Divider className="w-100 mb-2" />
                                                {
                                                    value && value.map((data, index) => {
                                                        // if (truncated) {
                                                        //     if (index <= 2) {
                                                        //         return <CustomizedChip
                                                        //             label={data.name}
                                                        //             {...getTagProps({ index })}
                                                        //         />
                                                        //     }
                                                        //     else if (index == 3) {
                                                        //         return "..."
                                                        //     }
                                                        // }
                                                        // else {
                                                        return <div className="pb-1 pr-1" style={{ height: "max-content" }}>
                                                            <CustomizedChip
                                                                label={data.name}
                                                                img={data.img}
                                                                content={data}
                                                                svgLogo={data.svgLogo}
                                                                onActnClick={onActnClick}
                                                                {...props}
                                                                {...getTagProps({ index })}
                                                            /> </div>
                                                        //}

                                                    })
                                                }
                                            </div> : null
                                    }

                                </div>


                            </Paper>
                            {data && data.length > 0 ? (
                                <Popper {...getListboxProps()} open={open} anchorEl={state.anchorELe} placement={placement ? placement : "bottom"} className={classes.listbox} style={{
                                    width: document.getElementById("paper-autocomplete") && document.getElementById("paper-autocomplete").offsetWidth
                                }}>
                                    <ClickAwayListener onClickAway={closePopper}>
                                        <Paper elevation={1} className="bg-light" {...getListboxProps()}>
                                            {groupedOptions && groupedOptions.map((option, index) => {
                                                if (!isAlreadAdded(option))
                                                    return <React.Fragment>
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
                                                                        <div>
                                                                            <Typography><b>{option.name}</b></Typography>
                                                                        </div>

                                                                        <div>
                                                                            <Typography>{option.description1}</Typography>
                                                                        </div>
                                                                        <div>
                                                                            <Typography>{option.description2}</Typography>
                                                                        </div>

                                                                    </div>
                                                                    {/* {
                                                                selectedItm && selectedItm.value == option.value ?
                                                                    <div>
                                                                        <Icon>
                                                                            <i className="fa fa-check text-success"></i>
                                                                        </Icon>
                                                                    </div> : null
                                                            } */}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </React.Fragment>
                                            }

                                            )}
                                        </Paper>
                                    </ClickAwayListener>
                                </Popper>
                            ) : null}
                        </div> : execStatus && execStatus.status !== "PENDING" &&
                            execStatus.status !== "ERROR" ? <Paper>
                            <div className=" text-muted d-flex justify-content-center p-2">
                                <Typography>No Result Found</Typography>
                            </div>
                        </Paper> : null
                }
            </div>
            {
                error ?
                    <div className="text-danger 
                    d-flex justify-content-start p-1">
                        <Typography> {error}</Typography>
                    </div> : null
            }
        </React.Fragment>

    )
}
//name , value , img