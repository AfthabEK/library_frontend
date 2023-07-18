import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useRouteLoaderData ,defer} from "react-router-dom";
import {useNavigate,useNavigation,useActionData,redirect,useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

export const NewPublisher=()=>{
    const [name,setName]=useState("");
    const [img,setImg]=useState("")
    const [pubType,setPubType]=useState("dailies_and_mags")
    const [link,setLink]=useState("");
    const [oType,setOType]=useState("")
    const navigate = useNavigate();

    const PublisherComponent=()=>{
        if(pubType==="ebooks_publisher"){
            return (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Link</Form.Label>
                    <Form.Control required type="text" value={link} placeholder="Enter Link Of the Book" name="link" onChange={(e)=>setLink(e.target.value)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            )
        }
        else if(pubType==="online_journals_publisher"){
            return (
                <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Link</Form.Label>
                    <Form.Control required type="text" value={link} placeholder="Enter Link Of the Book" name="link" onChange={(e)=>setLink(e.target.value)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Select required aria-label="Default select example" name="OType" onChange={(e)=>setOType(e.target.value)}>
                    <option value="eshodh">Eshodh</option>
                    <option value="subscribed">subscribed</option>
                </Form.Select>
                </div>
            )
        }
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch(`http://localhost:7000/new-publisher`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
              link,
              oType,
              pubType,
              img
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
        <h1>Add New Publisher</h1>
        <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group className="mb-3 " controlId="formBasicEmail" >
                <Form.Label>Name of Publisher</Form.Label>
                <Form.Control required type="text" placeholder="Enter Name of Publisher" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail" >
                <Form.Label>Image Link</Form.Label>
                <Form.Control required type="text" placeholder="Enter Image Link" name="img" value={img} onChange={(e)=>setImg(e.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Select required aria-label="Default select example" name="pubType" onChange={(e)=>setPubType(e.target.value)}>
                <option value="dailies_and_mags">Dailies And Magazines</option>
                <option value="ebooks_publisher">Ebooks Publisher</option>
                <option value="online_journals_publisher">Online Journals Publisher</option>
                <option value="p_journals">Print Journals</option>
            </Form.Select>
            {PublisherComponent()}
            <br />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>);
}