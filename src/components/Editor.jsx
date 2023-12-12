export default function Editor({ cv, setData }) {
  const personalInfo = cv.personal.map((x) => {
    return (
      <label key={x.name}>
        {x.name}:{" "}
        <input
          type={x.type ? x.type : "text"}
          placeholder={x.name.toLowerCase()}
          required
        ></input>
      </label>
    );
  });

  function Form(props) {
    return (
      <form key={props.id}>
        <label>
          {"Degree: "}
          <input type={"text"} placeholder={"degree"} required></input>
        </label>
        <label>
          {"School: "}
          <input type={"text"} placeholder={"school"} required></input>
        </label>
        <label>
          {"City: "}
          <input type={"text"} placeholder={"city"} required></input>
        </label>
        <label>
          {"Start: "}
          <input type={"text"} placeholder={"start"} required></input>
        </label>
        <label>
          {"End: "}
          <input type={"text"} placeholder={"end"} required></input>
        </label>
      </form>
    );
  }

  const educationInfo = cv.education.map((x) => {
    return (
      <>
        <Form elem={x} />
      </>
    );
  });

  const professionInfo = cv.profession.map((x, index) => {
    return (
      <ul key={x.id}>
        {index + 1}.<li key="x.title">Title: {x.title}</li>
        <li key="x.company">Company: {x.company}</li>
        <li key="x.start">Start: {x.start}</li>
        <li key="x.end">End: {x.end}</li>
        <li key="x.description">Description: {x.description}</li>
      </ul>
    );
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
