import "./styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Printable from "./components/Printable";
function App() {
  return (
    <>
      <Header />
      <Editor />
      <Printable />
      <Footer />
    </>
  );
}

export default App;
