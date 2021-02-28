import "./App.css";
import BackgroundVideo from "./Components/BackgroundVideo/BackgroundVideo";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <BackgroundVideo />
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default App;
