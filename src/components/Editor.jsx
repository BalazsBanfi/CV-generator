export default function Editor({
  person,
  education,
  profession,
  setPerson,
  setEducation,
  setProfession,
}) {
  function handleChangePer(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  function handleChangeEd(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleChangeEd2(index, e) {
    const edu2 = education.map((edu, i) => {
      if (i === index) {
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(index);
        edu[e.target.name] = e.target.value;
      } else {
        return edu;
      }
    });
    setEducation(edu2);
  }

  function handleChangePro(e) {
    setProfession({ ...profession, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form>
        <label>
          First name:{" "}
          <input
            type="text"
            name="firstName"
            placeholder={person.firstName}
            required
            onChange={handleChangePer}
          ></input>
        </label>
        <label>
          Last name:{" "}
          <input
            type="text"
            name="lastName"
            placeholder={person.lastName}
            required
            onChange={handleChangePer}
          ></input>
        </label>
        <label>
          City:{" "}
          <input
            type="text"
            name="city"
            placeholder={person.city}
            required
            onChange={handleChangePer}
          ></input>
        </label>
        <label>
          E-mail:{" "}
          <input
            type="email"
            name="email"
            placeholder={person.email}
            required
            onChange={handleChangePer}
          ></input>
        </label>
        <label>
          First name:{" "}
          <input
            type="text"
            name="phoneNumber"
            placeholder={person.phoneNumber}
            required
            onChange={handleChangePer}
          ></input>
        </label>
        <label>
          First name:{" "}
          <input
            type="url"
            name="website"
            placeholder={person.website}
            required
            onChange={handleChangePer}
          ></input>
        </label>
      </form>
      <>
        {education.map((edu, index) => {
          return (
            <form key={edu.id}>
              <h4>Education {index + 1}.</h4>
              <label>
                Degree:
                <input
                  type="text"
                  name="degree"
                  placeholder={edu.degree}
                  required
                  onChange={(e) => {
                    handleChangeEd2(index, e);
                  }}
                ></input>
              </label>
              <label>
                School:
                <input
                  type="text"
                  name="school"
                  placeholder={edu.school}
                  required
                  onChange={handleChangeEd}
                ></input>
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  placeholder={edu.city}
                  required
                  onChange={handleChangeEd}
                ></input>
              </label>
              <label>
                Start:
                <input
                  type="text"
                  name="start"
                  placeholder={edu.start}
                  required
                  onChange={handleChangeEd}
                ></input>
              </label>
              <label>
                End:
                <input
                  type="text"
                  name="end"
                  placeholder={edu.end}
                  required
                  onChange={handleChangeEd}
                ></input>
              </label>
            </form>
          );
        })}
      </>
      <>
        {profession.map((prof, index) => {
          return (
            <form key={prof.id}>
              <h4>Profession {index + 1}.</h4>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder={prof.title}
                  required
                  onChange={handleChangePro}
                ></input>
              </label>
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  placeholder={prof.company}
                  required
                  onChange={handleChangePro}
                ></input>
              </label>
              <label>
                Description:
                <input
                  type="textarea"
                  name="description"
                  placeholder={prof.description}
                  required
                  onChange={handleChangePro}
                ></input>
              </label>
              <label>
                Start:
                <input
                  type="text"
                  name="start"
                  placeholder={prof.start}
                  required
                  onChange={handleChangePro}
                ></input>
              </label>
              <label>
                End:
                <input
                  type="text"
                  name="end"
                  placeholder={prof.end}
                  required
                  onChange={handleChangePro}
                ></input>
              </label>
            </form>
          );
        })}
      </>
    </div>
  );
}
