export default ({ note }) => {
  return (
    <div className={`note note__${note.color}`} >
      <p>{note.text}</p>
      <p>{note.date}</p>
    </div>
  );
};
