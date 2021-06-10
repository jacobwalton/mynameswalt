import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import albums from "../../util/data";
import "./intro-modal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div className="introModal">
            <div classname="modalContent">
              <h2 id="transition-modal-title">
                Thank you for visiting my site
                <hr />
              </h2>

              <p id="greeting">
                <br /> I've included some exclusive content only viewable here
                <em>(some of which is hidden).</em>
                <br />
                When you visit my site you might be welcomed with a message
                informing you what I'm working on, words of encouragement, tv
                show reccomendations or really anything.
              </p>
              <br />
              <p style={{ padding: 0, margin: 0 }}>WHAT I'M WORKING ON:</p>
              <br />
              <img src={albums[0].artwork} className="artwork"></img>
              <h5 id="transition-modal-description">
                <em>Walt and His Imagination</em>
              </h5>
              <p>
                <em>"Walt and His Imagination"</em> is an EP that I'm currently
                working on and hope to release soon. The title pretty much
                explains the content that you can expect. I produced, recorded,
                engineered, and made the artwork for this EP, so it truly is a
                geniune form of expression coming directly from me and me only.
                My imagination to you.
                <br />
                -walt
              </p>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
