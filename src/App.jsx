import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Printable from "./components/Printable";
import { Person } from "./components/sampleCV";

function App() {
  const [personalData, setPersonalData] = useState(Person.personal);
  const [educationData, setEducationData] = useState(Person.education);
  const [professionData, setProfessionData] = useState(Person.profession);

  return (
    <>
      <Header />
      <Editor
        personalData={personalData}
        educationData={educationData}
        professionData={professionData}
        setPersonalData={setPersonalData}
        setEducationData={setEducationData}
        setProfessionData={setProfessionData}
      />

      <Printable
        personalData={personalData}
        educationData={educationData}
        professionData={professionData}
      />
      <Footer />
    </>
  );
}

export default App;
