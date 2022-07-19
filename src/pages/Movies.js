export default function Movies({ submitForm }) {
  return (
    <form onSubmit={submitForm}>
      <input type="text" autoFocus />
      <button type="submit">Search</button>
    </form>
  );
}
