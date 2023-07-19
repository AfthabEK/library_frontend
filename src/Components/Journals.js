import List from "./List";
import classes from "./EbooksList.module.css";
import Buttons from "../UI/Buttons";
import { Link } from "react-router-dom";
import { selectAuth } from "../Feature/authSlice";
import { useSelector } from "react-redux";
const EbooksList = ({ journals }) => {
  const auth = useSelector(selectAuth);
  return (
    <>
      <div className={"container"}>
        {journals && (
          <div>
            <div className="row">
              <h1 className={"col-10 " + classes.header}>Print Journals </h1>
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
            <List publishers={journals} />
          </div>
        )}
      </div>
    </>
  );
};

export default EbooksList;
