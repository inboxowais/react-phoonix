import React, { useEffect, useState } from 'react'
import { Icon, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { Paper } from '@material-ui/core'
import { formatDate } from 'components/utils/util'

const CALENDER_LIMIT = "01-01-2000"
export default function CustomCalender(props) {
  const [state, setState] = useState({
    anchorEl: undefined,
    width: undefined,
    dateDialogIsOpen: false,
    dateAnchor: undefined
  })

  const { classNames, views, label, value, displayText, minDate, maxDate, error, validationResult } = props; // views can be month , year , date , should be array

  const [errorState, setError] = useState(false)

  useEffect(() => {

    setError(error)
  }, [error, validationResult])

  const onDateSelect = (event) => {
    event.stopPropagation()
    setState({ ...state, dateAnchor: event.currentTarget })
  }
  const onAccept = (date) => {

    props.onAccept && props.onAccept(date);
    if (views && views.length > 0) {
    }
    else
      setState({ ...state, dateAnchor: false })
  }
  const onClose = () => {
    setState({ ...state, dateAnchor: false })
  }
  const onYearChange = (date) => {
    props.onYearChange && props.onYearChange(date);
    setState({ ...state, dateAnchor: false })
  }
  const onChange = (date) => {

    props.onChange && props.onChange(date);
  }

  var cdate = formatDate(value);
  const openKeyboardDatePicker = Boolean(state.dateAnchor)

  return (
    <React.Fragment>
      <Paper
        elevation={1}
        style={{ height: 42 }}
        className={`${classNames} p-2 d-flex align-items-center justify-content-between w-100 border-radius-10 cursor-pointer paper-root`}
        onClick={(event) => onDateSelect(event)}
      >
        <div className="d-flex align-items-center">
          {label ? (
            <Typography color="primary">
              {label}
            </Typography>
          ) : null}
          <Typography className="pl-2">
            {
              value ? cdate : displayText ? <span className="text-muted">{displayText}</span> : "Select Date"
            }
            {/* {displayText ? displayText : value ? cdate : "Select Date"} */}
          </Typography>
        </div>
        {/* <Icon fontSize="small" color="primary" className="cursor-pointer far fa-calendar color-primary"></Icon> */}
        <div>
          <i className="fa fa-calendar text-primary"></i>
        </div>
      </Paper>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          onYearChange={onYearChange}
          views={views}
          disableToolbar
          margin="normal"
          variant="inline"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          PopoverProps={{
            anchorEl: state.dateAnchor,
            open: openKeyboardDatePicker,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
          }}
          value={value}
          style={{
            display: 'none',
          }}
          onChange={onChange}
          // keyboardIcon={true}
          // KeyboardButtonProps={{
          //   'aria-label': 'change date',
          // }}
          onAccept={(date) => onAccept(date)}
          onClose={() => onClose()}
          minDate={minDate ? minDate : CALENDER_LIMIT}
          maxDate={maxDate}
        />
      </MuiPickersUtilsProvider>
      {
        errorState ?
          <div className="text-danger pt-2 pl-1">
            Please select date
          </div> : null
      }
    </React.Fragment>
  )
}

// <div className="w-25">
//           <CustomCalender
//             classNames="ml-3"
//             placeholder="Select Date"
//             variant={state.searchBy == 'date' ? 'contained' : 'outlined'}
//             onClick={() => setState({ ...state, searchBy: 'date' })}
//             onChange={() => onDateChange()}
//             onAccept={onAccept}
//             selectedDate={state.selectedDate}
//             label="From"
//           ></CustomCalender>
//         </div>
