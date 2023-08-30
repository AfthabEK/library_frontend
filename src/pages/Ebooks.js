import { Suspense } from "react";
import { json, useRouteLoaderData ,defer, Await } from "react-router-dom";
import { backendHost } from "../Config";
import Table from '../Components/Table';

function Ebooks() {
  const { books } = useRouteLoaderData("publisher-detail");
  console.log("Object", books);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={books}>
        {(loadedBooks) => < Table books={loadedBooks} />}
      </Await>
    </Suspense>
  );
}

export default Ebooks;

export async function loader({ request, params }) {
  const id = params.publisher;

  return defer({
    books: await loadBooks(id),
  });
}

async function loadBooks(id) {
  const response = await fetch(`http://${backendHost}/ebooks/` + id);
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


