export default function Printable({
  personalData,
  educationData,
  professionData,
}) {
  function PersonalInfo({ person }) {
    return (
      <div className="personal-data">
        <h3>
          {person.firstName}
          {", "}
          {person.lastName}
        </h3>
        <h4>Contact & Address:</h4>
        <p>Address: {person.city}</p>
        <p>E-mail: {person.email}</p>
        <p>Phone no.: {person.phoneNumber}</p>
        <p>Website: {person.website}</p>
      </div>
    );
  }

  function EducationInfo({ education }) {
    return education.map((educ, index) => {
      return (
        <div key={educ.id + "1"} className="education-data">
          <h4>{index + 1}. education</h4>
          <ul key={educ.id}>
            <li key={educ.degree + "1"}>Degree: {educ.degree}</li>
            <li key={educ.school + "2"}>School: {educ.school}</li>
            <li key={educ.city + "3"}>City: {educ.city}</li>
            <li key={educ.start + "4"}>Start: {educ.start}</li>
            <li key={educ.end + "5"}>End: {educ.end}</li>
          </ul>
        </div>
      );
    });
  }

  function ProfessionInfo({ profession }) {
    return profession.map((prof, index) => {
      return (
        <div key={prof.id + "1"} className="profession-data">
          <h4>{index + 1}. profession</h4>
          <ul key={prof.id}>
            <li key={prof.title + "1"}>Title: {prof.title}</li>
            <li key={prof.company + "2"}>Company: {prof.company}</li>
            <li key={prof.start + "3"}>Start: {prof.start}</li>
            <li key={prof.end + "4"}>End: {prof.end}</li>
            <li key={prof.description + "5"}>
              Description: {prof.description}
            </li>
          </ul>
        </div>
      );
    });
  }

  return (
    <div className="printable">
      <h3>Curriculum Vitae</h3>
      <h4>Personal informations:</h4>
      <PersonalInfo person={personalData} />
      <h4>Education:</h4>
      <EducationInfo education={educationData} />
      <h4>Profession:</h4>
      <ProfessionInfo profession={professionData} />
    </div>
  );
}
