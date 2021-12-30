export default function ContentToggle({ name, bgColor, fontColor, setTheme }) {
  const styling = {
    backgroundColor: bgColor,
    color: fontColor,
    borderColor: fontColor,
  };

  return (
    <button style={styling} className="p-2 rounded-lg  border-4 w-full font-bold shadow-" onClick={() => setTheme(name)}>
      {name}
    </button>
  );
}
