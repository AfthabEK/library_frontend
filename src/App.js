import './App.css';
//import Video from './Components/Video';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import Ebooks, { loader as EbooksLoader} from "./pages/Ebooks";
import PublisherList, { loader as PublisherLoader} from './pages/PublisherList';
import JournalPublishers, { loader as JournalPublisherLoader } from './pages/JournalPublishers';
import OJournals, { loader as OnlineJournalsLoader } from "./pages/OJournals";
import PJournals, {loader as PJournalsLoader} from './pages/PJournals';
import DailiesAndMagazines, {loader as DailiesLoader } from './pages/DailyMagazines';
import {loader as AnnouncementsLoader} from './pages/NotificationPage';
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
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: AnnouncementsLoader,
      },
      {
        path: "ebooks",
        children: [
          {
            index: true,
            element: <PublisherList />,
            loader: PublisherLoader,
          },
          {
            path: ":publisher",
            id: "publisher-detail",
            loader: EbooksLoader,
            children: [
              {
                index: true,
                element: <Ebooks />,
              },
            ],
          },
        ],
      },
      {
        path: "ojournals",
        children: [
          {
            index: true,
            element: <JournalPublishers />,
            loader: JournalPublisherLoader,
          },
          {
            path: ":publisher_id",
            id: "publisher-id",
            loader: OnlineJournalsLoader,
            children: [
              {
                index: true,
                element: <OJournals />,
              },
            ],
          },
        ],
      },
      {
        path: "pjournals",
        children: [
          {
            index: true,
            element: <PJournals />,
            loader: PJournalsLoader,
          },
        ],
      },
      {
        path: "dailies",
        children: [
          {
            index: true,
            element: <DailiesAndMagazines />,
            loader: DailiesLoader,
          },
        ],
      },
    ],
  },
]);

function App(){
  return <RouterProvider router={router}/>
}
export default App;
