import { Suspense } from "react";
import { json, useRouteLoaderData, defer, Await } from "react-router-dom";

import Table from "../Components/Table";

function JournalList() {
  const { books } = useRouteLoaderData("publisher-id");
  console.log("Object", books);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={books}>
        {(loadedBooks) => <Table books={loadedBooks} />}
      </Await>
    </Suspense>
  );
}

export default JournalList;

export async function loader({ request, params }) {
  const id = params.publisher_id;

  return defer({
    books: await loadOJournals(id),
  });
}

async function loadOJournals(id) {
  const response = await fetch("http://localhost:7000/ojournals/" + id);
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
