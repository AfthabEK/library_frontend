import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'next/dist/server/api-utils';
import { backendHost } from '../Config';

export const NewEbookForm=(props)=>{
    const [title,setTitle]=useState("");
    const [publisher,setPublisher]=useState("Wiley");
    const [author,setAuthor]=useState("");
    const [link,setLink]=useState("");


    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch(`http://${backendHost}/new-ebook/`, {
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

}

