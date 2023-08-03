import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import PageContent from "./components/pageContent";

const App = () => {
  return (
    <>
      <div id="container">
        <NavBar />
        <PageContent />
        <Footer />
      </div>
    </>
  );
};

export default App;
