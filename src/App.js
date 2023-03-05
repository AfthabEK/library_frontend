import './App.css';
import Video from './Components/Video';
import Footer from './Components/Footer';
import Table from './Components/Table';
import Content from './UI/Content';
function App() {
  return (
    <>
      {/* <Video/> */}
      <Content>
        <Table />
      </Content>
      <Footer />
    </>
  );
}

export default App;
