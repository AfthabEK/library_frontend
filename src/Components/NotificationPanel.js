import Announcements from "./Announcements";
import classes from "./NotificationPanel.module.css"

const NotificationPanel = (props) => {;
    return <>
        <div className={"container " + classes.panel}>
                <h2 className={classes.header}>ANNOUNCEMENTS</h2>
                <Announcements announcements={props.announcements}/>
        </div>
    </>
};
export default NotificationPanel;