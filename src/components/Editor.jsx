import { v4 as uuidv4 } from "uuid";

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

  function handleChangeEd(index, e) {
    setEducation(
      education.map((edu, i) => {
        if (i === index) {
          edu[e.target.name] = e.target.value;
        }
        return edu;
      })
    );
  }
  function handleDeleteEd(index) {
    setEducation(
      education.filter((edu, i) => {
        return i !== index;
      })
    );
  }

  function handleAddEd(e) {
    e.preventDefault();
    const newElem = {
      id: uuidv4(),
      degree: "",
      school: "",
      city: "",
      start: "",
      end: "",
    };
    setEducation([...education, newElem]);
  }

  function handleChangePro(index, e) {
    setProfession(
      profession.map((pro, i) => {
        if (i === index) {
          pro[e.target.name] = e.target.value;
        }
        return pro;
      })
    );
  }

  function handleDeletePro(index) {
    setProfession(
      profession.filter((pro, i) => {
        return i !== index;
      })
    );
  }

  function handleAddPro(e) {
    e.preventDefault();
    const newElem = {
      id: uuidv4(),
      title: "",
      company: "",
      description: "",
      start: "",
      end: "",
    };

    setProfession([...profession, newElem]);
  }

  return (
    <div className="editor">
      <h4>Personal informations</h4>
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
          Phone no.:{" "}
          <input
            type="text"
            name="phoneNumber"
            placeholder={person.phoneNumber}
            required
            onChange={handleChangePer}
          ></input>
        </label>
        <label>
          Website:{" "}
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
                    handleChangeEd(index, e);
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
                  onChange={(e) => {
                    handleChangeEd(index, e);
                  }}
                ></input>
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  placeholder={edu.city}
                  required
                  onChange={(e) => {
                    handleChangeEd(index, e);
                  }}
                ></input>
              </label>
              <label>
                Start:
                <input
                  type="text"
                  name="start"
                  placeholder={edu.start}
                  required
                  onChange={(e) => {
                    handleChangeEd(index, e);
                  }}
                ></input>
              </label>
              <label>
                End:
                <input
                  type="text"
                  name="end"
                  placeholder={edu.end}
                  required
                  onChange={(e) => {
                    handleChangeEd(index, e);
                  }}
                ></input>
              </label>
              {index === education.length - 1 && index < 4 && (
                <button onClick={handleAddEd}>Add</button>
              )}
              {education.length > 1 && (
                <button
                  className="btn-red"
                  onClick={() => {
                    handleDeleteEd(index);
                  }}
                >
                  Delete
                </button>
              )}
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
                  onChange={(e) => {
                    handleChangePro(index, e);
                  }}
                ></input>
              </label>
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  placeholder={prof.company}
                  required
                  onChange={(e) => {
                    handleChangePro(index, e);
                  }}
                ></input>
              </label>
              <label>
                Description:
                <input
                  type="textarea"
                  name="description"
                  placeholder={prof.description}
                  required
                  onChange={(e) => {
                    handleChangePro(index, e);
                  }}
                ></input>
              </label>
              <label>
                Start:
                <input
                  type="text"
                  name="start"
                  placeholder={prof.start}
                  required
                  onChange={(e) => {
                    handleChangePro(index, e);
                  }}
                ></input>
              </label>
              <label>
                End:
                <input
                  type="text"
                  name="end"
                  placeholder={prof.end}
                  required
                  onChange={(e) => {
                    handleChangePro(index, e);
                  }}
                ></input>
              </label>
              {index === profession.length - 1 && index < 4 && (
                <button onClick={handleAddPro}>Add</button>
              )}
              {profession.length > 1 && (
                <button
                  className="btn-red"
                  onClick={() => {
                    handleDeletePro(index);
                  }}
                >
                  Delete
                </button>
              )}
            </form>
          );
        })}
      </>
    </div>
  );
}
