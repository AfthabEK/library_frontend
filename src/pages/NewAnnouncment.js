import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useRouteLoaderData ,defer} from "react-router-dom";
import {useNavigate,useNavigation,useActionData,redirect,useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

export const NewAnnouncement=(props)=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const navigate = useNavigate();

    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch(`http://localhost:7000/announcements`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            description,
          }),
          redirect: 'follow'
        });
        console.log(res.body);
        navigate('/');
        
      } catch (err) {
        console.log(err);
      }
      
    };
    
    return (<>
        <h1>Create New Announcement</h1>
        <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group className="mb-3 " controlId="formBasicEmail" >
                <Form.Label>Title Of Announcement</Form.Label>
                <Form.Control required type="text" placeholder="Enter Title of Announcement" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Link</Form.Label>
                <Form.Control required as="textArea" value={description} placeholder="Enter Description Of Announcements" name="description" onChange={(e)=>setDescription(e.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
      </Form>
    </>)
}