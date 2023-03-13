import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import Dailies from "../Components/Dailies";

function DailiesAndMagazines() {
  const { dailies } = useLoaderData();
  console.log(dailies);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={dailies}>
        {(loadedDailies) => <Dailies dailies={loadedDailies} />}
      </Await>
    </Suspense>
  );
}

export default DailiesAndMagazines;

async function loadDailies() {
  const response = await fetch("http://localhost:7000/dailies");
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
    //console.log(resData.data)
    return resData.data;
  }
}
export async function loader() {
  return defer({
    dailies: await loadDailies(),
  });
}
