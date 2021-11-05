import './content.dialog.scss'
import React from 'react';
import { useStyles } from './content.dialog.style'
import { CircularProgress, Dialog, DialogTitle, Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import CancelIcon from '@material-ui/icons/Cancel';
export default function ContentDialog(props) {
  const { title, showActions, successText, maxWidth, cancelText, execStatus, disabled, disableBackdropClick } = props;
  const classes = useStyles()

  return (
    <Dialog
      open={props.dialogIsOpen}
      onClose={props.onClose}
      PaperProps={{
        className: 'dialog-paper',
      }}
      disableBackdropClick={disableBackdropClick}
      maxWidth={maxWidth ? maxWidth : "sm"}
      fullWidth
    >
      <div id="content-dialog" className="pt-2 pb-2">
        <DialogTitle>
          <div className="d-flex justify-content-between align-items-center">
            {title}
            <div
              onClick={props.onClose}
              className={`${classes.closeIcon} d-flex align-items-center justify-content-center`}
            >
              <CancelIcon/>
            </div>
          </div>
        </DialogTitle>
        <div className="content">{props.children}</div>
      </div>
      {
        showActions ?
          <DialogActions className="p-4">
            {
              cancelText ?
                <Button onClick={props.onCancelPress} color="secondary">
                  {cancelText}
                </Button> : null
            }
            {
              execStatus && execStatus.status === "PENDING" ?
                <CircularProgress size={30} /> :
                <Button type="submit"
                  disabled={disabled}
                  onClick={props.onSuccess}
                  color="secondary">
                  {successText}
                </Button>
            }
          </DialogActions> : null
      }

    </Dialog>
  )
}
