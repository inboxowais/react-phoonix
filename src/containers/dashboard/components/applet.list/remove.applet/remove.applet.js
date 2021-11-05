import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import "./remove.applet.scss";
// import LoaderButton from "../material.components/loader.button/loader.button";

export default function ConfirmationDialog(props) {
  const { open, title, successButtonText, deleteButtonText, loading, isContactDeleted } = props;

  return (
    <div className="popup">
      <Dialog
        disableBackdropClick={false}
        open={open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ root: "dialog" }}
      >
        <DialogTitle
          className="mt-4 font-weight-bold"
          classes={{ root: "dialogTitle" }}
          id="alert-dialog-title"
        >
         <b> {title}</b>
        </DialogTitle>
        <DialogContent classes={{ root: "dialogContent" }}>
          <DialogContentText dividers id="alert-dialog-description">
            {props.children}
          </DialogContentText>
        </DialogContent>

        <DialogActions classes={{ root: "actions" }}>
          <div className="d-flex w-100 justify-content-end">
            <Divider />
            {
              isContactDeleted && isContactDeleted === true ?
                <Button
                  fullWidth
                  onClick={props.handleClose}

                  variant="contained"
                  color="primary"
                  className="confirmation-button"
                >
                  Contact Deleted Successfully , Go Back
            </Button> : null
            }
            {
              isContactDeleted === undefined || isContactDeleted === false ?
                <div className="w-35">
                  <Button
                    fullWidth
                    onClick={props.handleClose}
                    color="default"
                    variant="contained"

                  >
                    {deleteButtonText}
                  </Button></div> : null
            }
            {
              successButtonText ?
                <div className="w-35 pl-3">
                  <Button
                    loading={loading}
                    onClick={props.onSuccess}
                    color="primary"
                    fullWidth
                    variant="contained"

                  >
                    {successButtonText}
                  </Button></div> : null
            }

          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// <ConfirmationDialog
// open={true}
// title="Are you sure you want to delete"
// successButtonText="Ok"
// deleteButtonText="Delete"
// >
// Are you Sure you want to delete
// </ConfirmationDialog>
// <ProfileSettingsTemplate />
