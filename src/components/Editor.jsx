function FormEdu(props) {
  return (
    <form key={props.id}>
      <label>
        {"Degree:"}
        <input type={"text"} placeholder={"degree"} required></input>
      </label>
      <label>
        {"School:"}
        <input type={"text"} placeholder={"school"} required></input>
      </label>
      <label>
        {"City:"}
        <input type={"text"} placeholder={"city"} required></input>
      </label>
      <label>
        {"Start:"}
        <input type={"text"} placeholder={"start"} required></input>
      </label>
      <label>
        {"End:"}
        <input type={"text"} placeholder={"end"} required></input>
      </label>
    </form>
  );
}

function FormProf(props) {
  return (
    <form key={props.id}>
      <label>
        {"Title:"}
        <input type={"text"} placeholder={"title"} required></input>
      </label>
      <label>
        {"Company:"}
        <input type={"text"} placeholder={"company"} required></input>
      </label>
      <label>
        {"Description:"}
        <input type={"text"} placeholder={"description"} required></input>
      </label>
      <label>
        {"Start:"}
        <input type={"text"} placeholder={"start"} required></input>
      </label>
      <label>
        {"End:"}
        <input type={"text"} placeholder={"end"} required></input>
      </label>
    </form>
  );
}

export default function Editor({ personalData, setPersonalData }) {
  const personalInfo = personalData.map((x, i) => {
    return (
      <label key={x.name}>
        {x.name}:
        <input
          type={x.type ? x.type : "text"}
          placeholder={x.name.toLowerCase()}
          required
        ></input>
      </label>
    );
  });

  const educationInfo = cv.education.map((x) => {
    return <FormEdu elem={x} />;
  });

  const professionInfo = cv.profession.map((x) => {
    return <FormProf elem={x} />;
  });

  return (
    <div className="editor">
      <h3>Your datas</h3>
      <h4>Personal informations:</h4>
      {personalInfo}
      <h4>Education:</h4>
      {educationInfo}
      <h4>Profession:</h4>
      {professionInfo}
    </div>
  );
}
