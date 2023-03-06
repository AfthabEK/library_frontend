import { Link } from 'react-router-dom';
import classes from './List.module.css';

const List = ({ publishers }) => {


    return (
      <>
        <div className={"container " + classes.box}>
          {publishers.map((ele) => (
            <Link to={`/ebooks/${ele.publisher_id}`} style={{ textDecoration: 'none' }}>
              <div className={classes.item}>
                <div className={classes.holder}>
                  <img className="img-fluid" alt="text" src={ele.img} />
                </div>
                {ele.name}
              </div>
            </Link>
          ))}
        </div>
      </>
    );
}

export default List;
