import Header from "./components/Header";
import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Printable from "./components/Printable";
import { Person } from "./components/sampleCV";
import { useState } from "react";

function App() {
  const [data, setData] = useState({ Person });
  return (
    <>
      <Header />
      <Editor />
      <Printable data={Person.personal} Size={100} />
      <Footer />
    </>
  );
}

export default App;
