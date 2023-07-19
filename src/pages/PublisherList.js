import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import { selectAuth } from "../Feature/authSlice";
import EbooksList from "../Components/EbooksList";
import { useSelector } from "react-redux";

function PublisherList() {
  const { list } = useLoaderData();
  const auth = useSelector(selectAuth);
  console.log(auth);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={list}>
        {(loadedList) => (
          <EbooksList publishers={loadedList.data} links={loadedList.links} />
        )}
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
    return resData;
  }
}
export function loader() {
  return defer({
    list: loadPublisher(),
  });
}
