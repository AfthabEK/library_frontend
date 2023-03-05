import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import Table from '../Components/Table';

function Ebooks() {
  const { books } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={books}>
        {(loadedBooks) => < Table books={loadedBooks} />}
      </Await>
    </Suspense>
  );
}

export default Ebooks;

async function loadBooks() {
  const response = await fetch("http://localhost:7000/");
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
export function loader() {
  return defer({
    books: loadBooks(),
  });
}
