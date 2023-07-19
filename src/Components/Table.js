import classes from './Table.module.css';
import SearchBar from '../UI/SearchBar';
import { useState, useEffect, useContext} from 'react';
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../Feature/authSlice';
import { useSelector } from 'react-redux';
const Table = ({ books }) => {
    const [category , setCategory] = useState([]);
    const [option, setOption] = useState(0);
    const [data, setData] = useState([]);
    const [searchInput , setSearchInput] = useState("");
    const [publisher, setPublisher] = useState("");
    const navigate = useNavigate();
    const auth = useSelector(selectAuth);
    

    const categoryHandler = (id) => {
        setOption(id);
    }

    const filterInput = (data) => {
        setSearchInput(data);
        // console.log(data);
    }
    useEffect(()=> {
      const fetchData  = async () => { 
      // console.log("Books",books);
      let years = [];
      if(books[0].year !== undefined){
      for (let ele of books) {
        if (!years.includes(ele.year)) {
          years.push(ele.year);
          
        }
      }
      } else{
        years.push("OTHER")
      }
      console.log(years);
      setCategory(years);
      setOption(0);
      console.log(books);
      setData(books); 

      setPublisher(books[0].publisher);
      }
      fetchData();
    },[books]);

    console.log(auth);

    return (
      <div className={"container mt-5 " + classes.list} >
        <h2 className={classes.header}>{publisher} Books</h2>
        <SearchBar filter={filterInput} />
        {category && (
          <div className={"d-flex flex-row mb-3 " + classes.flex}>
            {category.map((ele, id) => (
              <div
                className={"p-2 " + (option === id ? classes.active : "")}
                onClick={() => categoryHandler(id)}
              >
                {ele}
              </div>
            ))}
          </div>
        )}
        <table>
          <tr>
            <th>Publisher</th>
            <th>Title</th>
            <th>Author</th>
            <th>Link</th>
            {auth && <th>Edit</th>}
          </tr>
          {data &&
            data
              .filter(
                (ele) =>
                  ele.year === category[option] &&
                  ele.title.includes(searchInput)
              )
              .map((ele) => (
                <tr className={classes.table_row}>
                  <td>{ele.publisher}</td>
                  <td>{ele.title}</td>
                  <td>{typeof ele.author === "undefined" ? "-": ele.author}</td>
                  <td><a href={ele.link}>Go to link</a></td>
                  {auth && <td><AiFillEdit onClick={() => navigate(`${ele.book_id}`)} /></td>}
                </tr>
              ))}
        </table>
      </div>
    );
};
export default Table;