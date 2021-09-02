export default function Button({ text, icon, textSize }) {
  return (
    <button className="flex items-center text-white bg-blue-600 text-sm py-2 px-4 rounded-md hover:bg-blue-700 active:bg-blue-600">
      <span className={icon && 'text-base mr-2'}>{icon}</span> <span className={textSize}>{text}</span>
    </button>
  );
}
