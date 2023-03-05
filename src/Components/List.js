

const List = (props) => {
    let arr = [];
    for(let i = 0; i < 50; i++)
        arr.push(i);

    return <>
        {arr.map((ele)=> <div>
            <img src="https://library.nitc.ac.in/img/jlogos/pearsonebooks.jpg"/>
            {ele}
        </div>)}
    </>
}

export default List;
