export default function Printable({ cv }) {
  const personalInfo = cv.personal.map((x) => {
    return (
      <p key={x.name}>
        {x.name}: {x.text}
      </p>
    );
  });
  const educationInfo = cv.education.map((x, index) => {
    return (
      <ul key={x.id}>
        {index + 1}.<li key="x.degree">Degree: {x.degree}</li>
        <li key="x.school">School: {x.school}</li>
        <li key="x.city">City: {x.city}</li>
        <li key="x.start">Start: {x.start}</li>
        <li key="x.end">End: {x.end}</li>
      </ul>
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
    <div className="printable">
      <h3>Your CV</h3>
      <h4>Personal informations:</h4>
      {personalInfo}
      <h4>Education:</h4>
      {educationInfo}
      <h4>Profession:</h4>
      {professionInfo}
    </div>
  );
}
