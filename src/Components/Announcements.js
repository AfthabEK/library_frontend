import { useState } from "react";
import Notificaion from "../UI/Notification";
import Modal from "../UI/Modal";
import classes from "./Announcements.module.css"

const Announcements = (props) => {
const [overlay, setOverlay] = useState(-1);
const {announcements:EVENTS} = props;
const OverlayHandler = (id) => {
  console.log(id);
  setOverlay(id);
}
  return (
    <>
      <div className={classes.box}>
        {EVENTS.map((ele, id) => (
          <>
            <Notificaion event={ele.title} id={id} OverlayChanger={OverlayHandler} />
            {overlay === id && (
              <Modal overlayClose={OverlayHandler}>
                <div className={classes.border}>
                  <h2>{ele.title}</h2>
                </div>
                <p>{ele.description}</p>
                <div className={classes.actions}>
                  <button
                    className={classes["button--alt"]}
                    onClick={() => setOverlay(-1)}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Announcements;
