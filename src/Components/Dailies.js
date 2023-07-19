import List from "./List";
import classes from "./EbooksList.module.css";
import Buttons from "../UI/Buttons";
import { selectAuth } from "../Feature/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Dailies = ({ dailies }) => {
      const auth = useSelector(selectAuth);
  
return (
    <>

      <div className={"container"}>
        {dailies && (
          <div>
            <div className="row">
              <h1 className={"col-10 " + classes.header}>
                {" "}
                Dailies & Magazines{" "}
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
            <List publishers={dailies} />
          </div>
        )}
      </div>
    </>
  );
};

export default Dailies;
