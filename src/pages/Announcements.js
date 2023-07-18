import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useRouteLoaderData ,defer} from "react-router-dom";
import {useNavigate,useNavigation,useActionData,redirect,useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, CardGroup} from 'react-bootstrap';  

export const Announcements=()=>{
    const [announcements,setAnnouncements]=useState([]);
    useEffect(() => {
        // Function to make the GET request
        const getAnnouncementsList= async()=>{
            const response = await fetch("http://localhost:7000/announcements/" );
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
                setAnnouncements(resData.data)
            }
        }
        // Call the fetchUsers function to make the request when the component mounts
        
        getAnnouncementsList();
      }, []);

    return (<>
    <h1>Announcments Management Page</h1>
    {   
        announcements.map((announcement)=>{
        return (
            <Card border={"Primary"}   
            text={'dark'}  
            style={{width:"99%"}}  
            className="m-2"  >  
            <Card.Body>  
                <Card.Title>{announcement.title}</Card.Title>  
                <Card.Text>  
                {announcement.description} 
                </Card.Text>  
                <Button variant="primary" style={{margin:"1rem"}}>Update</Button>
                <Button variant="danger">Delete</Button>
            </Card.Body>  
            </Card>
            )
        })    
    }
    </>)
    
}