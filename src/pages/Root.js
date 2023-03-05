import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";

function RootLayout() {
  return (
    <>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p> } */}
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
