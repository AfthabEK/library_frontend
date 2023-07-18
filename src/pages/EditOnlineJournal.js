import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useRouteLoaderData ,defer} from "react-router-dom";
import {useNavigate,useNavigation,useActionData,redirect,useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

export const EditOnlineJournal=(props)=>{
    const { publisher_id,journal_id} = useParams();
    const [title,setTitle]=useState("");
    const [publisherData,setPublisher]=useState("ACM");
    const [link,setLink]=useState("");
    let [publisherList,setPublisherList]=useState([])
    const navigate = useNavigate();


    useEffect(() => {
        // Function to make the GET request
        const handlePublishersList= async()=>{
            const response = await fetch("http://localhost:7000/online-publishers/" );
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
            console.log(`http://localhost:7000/ojournals/${publisher_id}/${journal_id}` )
            const response = await fetch(`http://localhost:7000/ojournal/${publisher_id}/${journal_id}` );
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
        let res = await fetch(`http://localhost:7000/ojournals/${publisher_id}/${journal_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            link,
            publisherData,
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
        <h1>Edit Online Journal</h1>
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