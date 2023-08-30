import { Fragment } from 'react';
import classes from './Video.module.css';
const Video = () => {

    return (
      <Fragment>
        <div  className={classes.parent}>
          <video  loop muted autoPlay playsInline className={classes.video}>
            <source src={"lib.mp4"} type={"video/mp4"} />
            <source src={"lib.ogg"} type={"video/ogg"} />
            Your browser does not support the video tag.
          </video>
          <div className={classes.overlay}>
          </div>
        </div>
      </Fragment>
    );
};

export default Video;