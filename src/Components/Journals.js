import List from "./List";
import classes from "./EbooksList.module.css";

const EbooksList = ({ journals }) => {
  return (
    <>
      <div className={"container"}>
        {journals && (
          <div>
            <h1 className={classes.header}> Print Journals </h1>
            <List publishers={journals} />
          </div>
        )}

      </div>
    </>
  );
};

export default EbooksList;
