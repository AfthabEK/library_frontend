import { HiArrowNarrowRight } from "react-icons/hi";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const { event } = props;

  return (
    <>
      <div className={classes.item}>
        <div className={classes.box}>
          <h4 onClick={() => props.OverlayChanger(props.id)}>
            {event} <HiArrowNarrowRight />
          </h4>
        </div>
      </div>
    </>
  );
};

export default Notification;
