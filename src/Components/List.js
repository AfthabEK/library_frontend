import { Link } from "react-router-dom";
import classes from "./List.module.css";

const List = (props) => {
 const { publishers } = props;
 return (
   <>
     <div className={classes.box}>
       {publishers.map((ele) => (
         <Link
           to={ele.link === "" ? `${ele.publisher_id}` : ele.link}
           style={{ textDecoration: "none" }}
         >
           <div className={classes.item}>
             <div className={classes.holder}>
               <img className="img-fluid" alt="text" src={ele.img} />
             </div>
             <b>{ele.name}</b>
           </div>
         </Link>
       ))}
     </div>
   </>
 );
};
export default List;
