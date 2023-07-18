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
import { NewEbook,loader as NewEbookLoader, NewEbookExcel } from '../src/pages/NewEbook';
import { EditEbook } from './pages/EditEbook';
import { NewOnlineJournal } from './pages/NewOnlineJounal';
import { EditOnlineJournal } from './pages/EditOnlineJournal';
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
              {
                path:":ebook_id",
                index:true,
                element:<EditEbook />,
              }
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
              {
                path:":journal_id",
                index:true,
                element:<EditOnlineJournal />,
              }
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
      {
        path:"admin",
        children:[
          {
            path:"new-ebook",
            children:[
              {
                index:true,
                id:'ebooks-form',
                element:<NewEbook val={"Individual"} id={1}/>,
                loader:NewEbookLoader,
              },
              {
                path:"excel",
                id:'ebooks-form-excel',
                element:<NewEbookExcel />,
                loader:NewEbookLoader,
              }
            ]
          }
        ]
      },
      {
        path:"/new-ojournal",
        children: [
          {
            index: true,
            element: <NewOnlineJournal />,
            loader: DailiesLoader,
          },
        ],
      }
    ],
  },
]);

function App(){
  return <RouterProvider router={router}/>
}
export default App;
