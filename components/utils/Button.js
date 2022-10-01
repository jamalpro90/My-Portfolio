export default function Button({ text, icon, textSize, order }) {
  const submitForm =
    text == "submit" && "mt-3 lg:w-4/12 w-full justify-center ml-auto";

  return (
    <button
      className={`px-6 py-2 linear-bluee text-white rounded-[50px] ${
        textSize ? textSize : "text-base"
      } font-medium mx-4`}
    >
      {icon && <span className="mr-2 text-lg">{icon}</span>}
      {text}
    </button>
  );
}
