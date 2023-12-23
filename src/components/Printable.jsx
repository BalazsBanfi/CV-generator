export default function Printable({
  personalData,
  educationData,
  professionData,
}) {
  function PersonalInfo({ person }) {
    return (
      <div>
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
        <div key={educ.id + "1"}>
          <h4>Education {index + 1}.</h4>
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
        <div key={prof.id + "1"}>
          <h4>Profession {index + 1}.</h4>
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
      <div className="container">
        <div className="personal-data">
          <PersonalInfo person={personalData} />
        </div>
        <div className="education-data">
          <EducationInfo education={educationData} />
        </div>
        <div className="profession-data">
          <ProfessionInfo profession={professionData} />
        </div>
      </div>
    </div>
  );
}
