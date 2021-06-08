import "./App.css";
// import BackgroundVideo from "./Components/BackgroundVideo/BackgroundVideo";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Music from "./Components/Music/Music";
import MissionStatement from "./Components/MissionStatement/MissionStatement";
import IntroModal from "./Components/IntroModal/IntroModal";

function App() {
  return (
    <>
      <div className="App">
        {/* <BackgroundVideo /> */}
        <IntroModal />
        <Header />
        <MissionStatement />
        <Music />
      </div>
      <Footer />
    </>
  );
}

export default App;
