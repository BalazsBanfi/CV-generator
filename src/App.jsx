import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Printable from "./components/Printable";
import { Personal, Education, Profession } from "./components/sampleCV";

function App() {
  const [personalData, setPersonalData] = useState(Personal);
  const [educationData, setEducationData] = useState(Education);
  const [professionData, setProfessionData] = useState(Profession);

  return (
    <>
      <Header />
      <Editor
        person={personalData}
        education={educationData}
        profession={professionData}
        setPerson={setPersonalData}
        setEducation={setEducationData}
        setProfession={setProfessionData}
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
