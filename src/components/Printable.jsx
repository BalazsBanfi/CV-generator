export default function Printable({
  personalData,
  educationData,
  professionData,
}) {
  function PersonalInfo(person) {
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

  function EducationInfo(education) {
    return education.map((educ, index) => {
      return (
        <div key={educ.id + "1"} className="education-data">
          <h3>{index + 1}. education</h3>
          <ul key={educ.id}>
            <li key={educ.degree}>Degree: {educ.degree}</li>
            <li key={educ.school}>School: {educ.school}</li>
            <li key={educ.city}>City: {educ.city}</li>
            <li key={educ.start}>Start: {educ.start}</li>
            <li key={educ.end}>End: {educ.end}</li>
          </ul>
        </div>
      );
    });
  }

  function ProfessionInfo(profession) {
    return profession.map((prof, index) => {
      return (
        <div key={prof.id + "1"} className="profession-data">
          <h3>{index + 1}. profession</h3>
          <ul key={prof.id}>
            <li key={prof.title}>Title: {prof.title}</li>
            <li key={prof.company}>Company: {prof.company}</li>
            <li key={prof.start}>Start: {prof.start}</li>
            <li key={prof.end}>End: {prof.end}</li>
            <li key={prof.description}>Description: {prof.description}</li>
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
