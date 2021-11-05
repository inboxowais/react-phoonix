import './site.label.textfield.scss'
import React from 'react';
import ReactInputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';
import { useStyles } from './site.label.textfield.style';
import { Paper, InputAdornment, CircularProgress } from '@material-ui/core'
import clsx from 'clsx';

export default function SiteLabelTextField(props) {
  const { maxLength, pattern, endAdornment, label, execStatus, error, maskChar, value, mask, placeholder, validationType, topAdornment, type, required, borderRadius } = props
  const classes = useStyles()
  const onChange = (event) => {
    // if (validationType === "ALPHANUMERIC_WITH_DASH") {
    //   if (regex.alphanumericWithDash.test(event.target.value) || event.target.value === "") {
    //     props.onChange(event)
    //   }
    // }
    // else if (validationType === "ALPHANUMERIC") {
    //   if (regex.alphanumericWithOutSpace.test(event.target.value) || event.target.value === "") {
    //     props.onChange(event)
    //   }
    // }
    // else if (validationType === "NUMERIC") {
    //   if (regex.wholeNumber.test(event.target.value) || event.target.value === "") {
    //     props.onChange(event)
    //   }
    // }
    // else if (validationType === "FLOAT") {
    //   if (regex.decimalNumber.test(event.target.value) || event.target.value === "") {
    //     props.onChange(event)
    //   }
    // }

    props.onChange(event)

  }
  return (
    <React.Fragment>
      {
        topAdornment ? <div className="pb-2">{topAdornment}</div> : null
      }
      {
        mask && !props.disabled ?
          <ReactInputMask mask={mask} maskChar={maskChar} placeholder={placeholder} onChange={onChange} alwaysShowMask={false} value={value} >

            {inputProps => (
              <Paper elevation={0} style={{ border: "1px solid green" }} className={clsx(classes.paperRoot, "paper-root  w-100")} >
                {
                  execStatus && execStatus.status === "PENDING" ?
                    <div><CircularProgress size={50} className="p-3" /></div> :
                    <TextField
                      {...inputProps}
                      label={null}
                      disabled={props.disabled ? props.disabled : null}
                      variant="outlined"
                      color="primary"
                      type={type}
                      inputProps={{
                        maxLength: maxLength,
                        pattern: pattern,
                      }}

                      InputProps={{
                        classes: {
                          inputAdornedEnd: classes.endAdn,
                          notchedOutline: classes.noBorder,
                          input: classes.input,
                          disabled: classes.disabled,

                        },
                        type: type,
                        startAdornment: (
                          <InputAdornment
                            color="primary"
                            className="h-100"
                            position="start"
                          >

                            <div className={`${classes.textColor} font-weight-bolder width-max-content d-flex`}>
                              {label}
                              {
                                required ? <b className="text-danger pl-1">*</b> : null
                              }
                            </div>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment className="h-100" position="end">
                            {endAdornment ? (
                              endAdornment
                            ) : null
                            }
                          </InputAdornment>
                        ),
                      }}
                    />
                }
              </Paper>
            )}
          </ReactInputMask>
          :
          <Paper elevation={classes.lightBorder ? 0: 1} className={clsx(props.lightBorder && classes.lightBorder, !props.lightBorder && classes.paperRoot, "paper-root border-radius-10 w-100")} >
            {
              <div className="d-flex align-items-center w-100">
                {
                  execStatus && execStatus.status === "PENDING" ?
                    <div className="pr-4"><CircularProgress size={45} className="p-3" /></div>
                    : null
                }
                <div className="flex-grow-1">
                  {

                    <TextField
                      onBlur={props.onBlur}
                      type={type}
                      value={value}
                      placeholder={placeholder}
                      label={null}
                      disabled={props.disabled ? props.disabled : null}
                      variant="outlined"
                      inputProps={{
                        maxLength: maxLength,
                        pattern: pattern,

                      }}
                      onChange={onChange}
                      InputProps={{
                        classes: {
                          inputAdornedEnd: classes.endAdn,
                          //inputAdornedStart: classes.paddingLeft,
                          notchedOutline: classes.noBorder,
                          input: props.lightBorder ? classes.lightInput : classes.input,
                          disabled: classes.disabled
                        },
                        startAdornment: (
                          <InputAdornment
                            color="primary"
                            className="h-100"
                            position="start"
                          >
                            <div className={`${(props.labelColor ? props.labelColor : classes.textColor)} font-weight-bolder d-flex`}>

                              {label}
                              {
                                required ? <b className="text-danger pl-1">*</b> : null
                              }
                            </div>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment className="h-100" position="end">
                            {endAdornment ? (
                              endAdornment
                            ) : null
                            }
                          </InputAdornment>
                        ),
                      }}
                    />
                  }
                </div>
              </div>
            }
          </Paper>
      }
      <div className="">
        {
          error ?
            <div className="text-danger p-2">
              {error}
            </div> : null
        }

      </div>

    </React.Fragment>
  );
};
