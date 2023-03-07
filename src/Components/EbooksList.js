import List from "./List"
import classes from "./EbooksList.module.css"
const EbooksList = ({ publishers, links }) => {
    return (
      <>
        <div className={"container"}>
          {publishers && <h1 className={classes.header}>Ebooks </h1>}
          {publishers && <List publishers={publishers} />}
          {links && <h1 className={classes.header}>Useful Links </h1>}
          {publishers && <List publishers={links} />}
        </div>
      </>
    );
}

export default EbooksList;
