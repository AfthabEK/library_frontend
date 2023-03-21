import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useRouteLoaderData ,defer} from "react-router-dom";
import {useNavigate,useNavigation,useActionData,redirect} from 'react-router-dom';
import { NewEbookForm } from '../Components/NewEbookForm';
import {useState} from 'react';

export const NewEbook=()=>{
    const { publishers } = useRouteLoaderData("ebooks-form");
    console.log("Object", publishers);
    return <>
        <div>
            <h4>Register New Ebook</h4>
            <NewEbookForm publishers={publishers}/>
        </div>
    </>
}

export async function loader({ request, params }) {
  
    return defer({
      publishers: await loadPublisher(),
    });
  }
  
  async function loadPublisher() {
    const response = await fetch("http://localhost:7000/publishers/");
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
      return resData.data;
    }
  }


