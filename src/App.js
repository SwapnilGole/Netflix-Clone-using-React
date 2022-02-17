import "./App.css";
import Row from "./Components/Row.js";
import requests from "./request";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        // isTrailerContainer
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title={"Documentaries Movies"}
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}
// home alone part 1 - https://drive.google.com/file/d/1a82dxxlzkQhxpMliP049_jqJ5bB6QZnu/view
export default App;
