export default function Button({ text, icon, textSize, order }) {
  const submitForm = text == 'submit' && 'mt-3 lg:w-4/12 w-full justify-center ml-auto';

  return (
    <button className={`button flex items-center text-white bg-blue-600 text-sm py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-600 ${submitForm} ${order}`}>
      <span className={icon && 'text-base mr-2'}>{icon}</span> <span className={textSize}>{text}</span>
    </button>
  );
}
