import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useRouteLoaderData ,defer} from "react-router-dom";
import {useNavigate,useNavigation,useActionData,redirect,useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

export const EditEbook=(props)=>{
    const { publisher,ebook_id} = useParams();
    const [title,setTitle]=useState("");
    const [publisherData,setPublisher]=useState("Wiley");
    const [author,setAuthor]=useState("");
    const [link,setLink]=useState("");
    let [publisherList,setPublisherList]=useState([])
    const navigate = useNavigate();


    useEffect(() => {
        // Function to make the GET request
        const handlePublishersList= async()=>{
            const response = await fetch("http://localhost:7000/publishers/" );
            if (!response.ok) {
                // return {isError: true, message: "Could not fetch result!"};
                // throw new Response(JSON.stringify({ message: "Coulf not fetch events." }), {
                //   status: 500,
                // });
                console.log("Error!");
                return json(
                { message: "Could not fetch events." },
                {
                    status: 500,
                }
                );
            } else {
                const resData = await response.json();
                console.log(resData.data)
                setPublisherList(resData.data)
            }
        }

        const getEditValues=async()=>{
            const response = await fetch(`http://localhost:7000/ebooks/${publisher}/${ebook_id}` );
            if (!response.ok) {
                // return {isError: true, message: "Could not fetch result!"};
                // throw new Response(JSON.stringify({ message: "Coulf not fetch events." }), {
                //   status: 500,
                // });
                console.log("Error!");
                return json(
                { message: "Could not fetch events." },
                {
                    status: 500,
                }
                );
            } else {
                const resData = await response.json();
                setTitle(resData.data.title)
                setAuthor(resData.data.author)
                setLink(resData.data.link)
            }
        }
    
        // Call the fetchUsers function to make the request when the component mounts
        
        handlePublishersList();
        getEditValues();
      }, []);

    

    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch(`http://localhost:7000/ebooks/${publisher}/${ebook_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            link,
            publisherData,
            author
          }),
          redirect: 'follow'
        });
        console.log(res.body);
        navigate('/ebooks');
        
      } catch (err) {
        console.log(err);
      }
      
    };
    
    return (<>
        <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group className="mb-3 " controlId="formBasicEmail" >
                <Form.Label>Title Of Book</Form.Label>
                <Form.Control required type="text" placeholder="Enter Title of Book" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Select required aria-label="Default select example" name="publisher" onChange={(e)=>setPublisher(e.target.value)}>
                {
                    publisherList.map((pub)=>{
                        return (<option value={pub.name}>{pub.name}</option>)
                    })
                }
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of Author</Form.Label>
                <Form.Control required type="text" value={author} placeholder="Enter Name of Author" name="author" onChange={(e)=>setAuthor(e.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Link</Form.Label>
                <Form.Control required type="text" value={link} placeholder="Enter Link Of the Book" name="link" onChange={(e)=>setLink(e.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    </>)
}
/*
const [title,setTitle]=useState("");
    const [publisher,setPublisher]=useState("Wiley");
    const [author,setAuthor]=useState("");
    const [link,setLink]=useState("");


    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:7000/new-ebook/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            link,
            publisher,
            author
          }),
          redirect: 'follow'
        });
        console.log(res.body);
        redirect('/');
        
      } catch (err) {
        console.log(err);
      }
      
    };

    return (
    <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group className="mb-3 " controlId="formBasicEmail" >
                <Form.Label>Title Of Book</Form.Label>
                <Form.Control required type="text" placeholder="Enter Title of Book" name="title" onChange={(e)=>setTitle(e.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Select required aria-label="Default select example" name="publisher" onChange={(e)=>setPublisher(e.target.value)}>
                {
                    props.publishers.map((pub)=>{
                        return (<option value={pub.name}>{pub.name}</option>)
                    })
                }
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of Author</Form.Label>
                <Form.Control required type="text" placeholder="Enter Name of Author" name="author" onChange={(e)=>setAuthor(e.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Link</Form.Label>
                <Form.Control required type="text" placeholder="Enter Link Of the Book" name="link" onChange={(e)=>setLink(e.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>);
*/