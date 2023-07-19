import List from "./List";
import classes from "./EbooksList.module.css";
import Buttons from "../UI/Buttons";
import { selectAuth } from "../Feature/authSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const EbooksList = ({ subscribers, slinks, eshodh, elinks }) => {
  const auth = useSelector(selectAuth);
  
  return (
    <>
      <div className={"container"}>
        {subscribers && (
          <div>
            <div className="row">
              <h1 className={"col-10 " + classes.header}>
                Subscribed Journals{" "}
              </h1>
              <div className="col-2 mt-4">
                {auth && (
                  <Link
                    href="/new-publisher"
                    style={{ textDecoration: "none" }}
                  >
                    <Buttons text="Add Publisher" />
                  </Link>
                )}
              </div>
            </div>
            <List publishers={subscribers} />
            <h1 className={classes.header}>Useful Links </h1>
            <List publishers={slinks} />
          </div>
        )}
        {eshodh && (
          <div>
            <h1 className={classes.header}> E-Shodh Sindhu </h1>
            <List publishers={eshodh} />
            <h1 className={classes.header}>Useful Links </h1>
            <List publishers={elinks} />
          </div>
        )}
      </div>
    </>
  );
};

export default EbooksList;
