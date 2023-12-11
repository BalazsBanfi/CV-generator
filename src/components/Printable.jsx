export default function Printable({ data }) {
  return (
    <div className="printable">
      <h3>Your CV</h3>
      {data.map((x) => {
        return (
          <p>
            {x.name}: {x.text}
          </p>
        );
      })}
    </div>
  );
}
