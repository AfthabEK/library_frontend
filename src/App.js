import './App.css';
//import Video from './Components/Video';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import Ebooks, { loader as EbooksLoader} from "./pages/Ebooks";

// import Footer from './Components/Footer';
// import Table from './Components/Table';
// import Content from './UI/Content';

import ErrorPage from './pages/Error';
// function App() {
//   return (
//     <>
//       {/* <Video/> */}
//       <Content>
//         <Table />
//       </Content>
//       <Footer />
//     </>
//   );
// }

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [{
      index: true,
      element: <HomePage/>,
    },
      {
        path:"ebooks",
        element:<Ebooks/>,
        loader:EbooksLoader,

      }
  ]
  }
])

function App(){
  return <RouterProvider router={router}/>
}
export default App;
