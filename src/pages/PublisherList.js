import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import List from "../Components/List";

function PublisherList() {
  const { publishers } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={publishers}>
        {(loadedPublishers) => <List publishers={loadedPublishers} />}
      </Await>
    </Suspense>
  );
}

export default PublisherList;

async function loadPublisher() {
  const response = await fetch("http://localhost:7000/ebooks");
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
    publishers: loadPublisher(),
  });
}
