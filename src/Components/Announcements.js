import { useState } from "react";
import Notificaion from "../UI/Notification";
import Modal from "../UI/Modal";
import classes from "./Announcements.module.css"
const EVENTS = [
  "Library Dues Payment Using SBI Collect",
  "Summer Interships",
  "Study Room at Room 103",
  "Inviting Students for Inauguration",
];

const Announcements = () => {
const [overlay, setOverlay] = useState(-1);

const OverlayHandler = (id) => {
  console.log(id);
  setOverlay(id);
}
  return (
    <>
      <div className={classes.box}>
        {EVENTS.map((ele, id) => (
          <>
            <Notificaion event={ele} id={id} OverlayChanger={OverlayHandler} />
            {overlay === id && (
              <Modal overlayClose={OverlayHandler}>
                {ele}
                <div className={classes.actions}>
                  <button className={classes["button--alt"]} onClick={() => setOverlay(-1)}>Close</button>
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
