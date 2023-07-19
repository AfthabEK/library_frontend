import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function RootLayout() {
  return (
    <>
    <Navbar/>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p> } */}
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
