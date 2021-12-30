export default function ContentToggle({ name, bgColor, fontColor, stateToggle }) {
  const styling = {
    backgroundColor: bgColor,
    color: fontColor,
    borderColor: fontColor,
  };

  return (
    <button style={styling} className="p-2 rounded-lg  border-4 w-full font-bold shadow-" onClick={() => stateToggle(name)}>
      {name}
    </button>
  );
}
