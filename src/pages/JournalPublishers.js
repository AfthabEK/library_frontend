import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import { backendHost } from "../Config";
import JournalsList from "../Components/JournalsList";

function JournalPublishers() {
  const { publishers } = useLoaderData();
  console.log("Publishers", publishers);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={publishers}>
        {(loadedPublishers) => (
          <JournalsList
            subscribers={loadedPublishers.sub}
            slinks={loadedPublishers.slinks}
            elinks={loadedPublishers.elinks}
            eshodh={loadedPublishers.eshodh}
          />
        )}
      </Await>
    </Suspense>
  );
}

export default JournalPublishers;

async function loadOJournals() {
  const response = await fetch(`http://${backendHost}/ojournals`);
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
export async function loader() {
  return defer({
    publishers: await loadOJournals(),
  });
}
