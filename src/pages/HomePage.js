import Video from "../Components/Video";
import NotificationPage from "./NotificationPage";
import { selectAuth } from "../Feature/authSlice";
function HomePage() {
  console.log(selectAuth);
  return (
    <>
      <Video />
      <NotificationPage />
    </>
  );
}

export default HomePage;
