import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import Journals from "../Components/Journals";

function PJournals() {
  const { journals } = useLoaderData();;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={journals}>
        {(loadedJournals) => <Journals journals={loadedJournals} />}
      </Await>
    </Suspense>
  );
}

export default PJournals;

async function loadPJournals() {
  const response = await fetch("http://localhost:7000/pjournals");
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
export async function loader() {
  return defer({
    journals: await loadPJournals(),
  });
}
