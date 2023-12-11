export default function General() {
  const fields = ["Firstname", "Lastname", "Current role"];
  const contact = ["Current address", "Email address", "Contact number"];

  const inputFields = fields.map((name) => (
    <label key={name}>
      {name}: <input placeholder={name} required></input>
    </label>
  ));
  const contacts = contact.map((name) => (
    <label key={name}>
      {name}: <input placeholder={name} required></input>
    </label>
  ));

  return (
    <div className="general">
      <h3>General information</h3>
      <form>{inputFields}</form>
      <h3>Contact information</h3>
      <form>{contacts}</form>
    </div>
  );
}
