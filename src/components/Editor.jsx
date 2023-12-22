export default function Editor({
  person,
  education,
  profession,
  setPerson,
  setEducation,
  setProfession,
}) {
  function handleChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
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
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Last name:{" "}
          <input
            type="text"
            name="lastName"
            placeholder={person.lastName}
            required
            onChange={handleChange}
          ></input>
        </label>
        <label>
          City:{" "}
          <input
            type="text"
            name="city"
            placeholder={person.city}
            required
            onChange={handleChange}
          ></input>
        </label>
        <label>
          E-mail:{" "}
          <input
            type="email"
            name="email"
            placeholder={person.email}
            required
            onChange={handleChange}
          ></input>
        </label>
        <label>
          First name:{" "}
          <input
            type="text"
            name="phoneNumber"
            placeholder={person.phoneNumber}
            required
            onChange={handleChange}
          ></input>
        </label>
        <label>
          First name:{" "}
          <input
            type="url"
            name="website"
            placeholder={person.website}
            required
            onChange={handleChange}
          ></input>
        </label>
      </form>
    </div>
  );
}
