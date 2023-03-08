import List from "./List";
import classes from "./EbooksList.module.css";


const EbooksList = ({ subscribers, slinks, eshodh, elinks }) => {


  return (
    <>
      <div className={"container"}>
        {subscribers && (
          <div>
            <h1 className={classes.header}>Subscribed Journals </h1>
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
