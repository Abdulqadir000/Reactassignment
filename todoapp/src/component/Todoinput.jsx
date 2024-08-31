function Todoinput({ onChange, onClick, value }) {
  return (
    <div className="my-3 text-center">
      <input
        onChange={onChange}
        className="border rounded-sm p-2"
        placeholder="Add Todo"
        value={value}
      />
      <button
        disabled={value === ""}
        onClick={onClick}
        className="p-2 ml-3 rounded-sm bg-blue-400"
      >
        Add
      </button>
    </div>
  );
}
export default Todoinput;
