import List from "./List"
import classes from "./EbooksList.module.css"
import Buttons from "../UI/Buttons";
import { selectAuth } from "../Feature/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const EbooksList = ({ publishers, links }) => {
  const auth = useSelector(selectAuth);
    return (
      <>
        <div className={"container"}>
          {publishers && (
            <div className="row">
              <h1 className={"col-10 " + classes.header}>Ebooks </h1>
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
          )}
          {publishers && <List publishers={publishers} />}
          {links && <h1 className={classes.header}>Useful Links </h1>}
          {publishers && <List publishers={links} />}
        </div>
      </>
    );
}

export default EbooksList;
