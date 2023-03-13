import List from "./List";
import classes from "./EbooksList.module.css";

const Dailies = ({ dailies }) => {
  console.log("dailies: ", dailies);
  return (
    <>
      <div className={"container"}>
        {dailies && (
          <div>
            <h1 className={classes.header}> Dailies & Magazines </h1>
            <List publishers={dailies} />
          </div>
        )}
      </div>
    </>
  );
};

export default Dailies;
