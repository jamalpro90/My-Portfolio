import React from "react";

export default function Input({
  label,
  name,
  place,
  type,
  textA,
  value,
  onChange,
}) {
  const classInput =
    "rounded outline-none mt-3 bg-gray-100 p-3 border border-black-111 dark:border-white dark:bg-black-222 dark:text-gray-50";

  return (
    <div className="flex flex-col w-10/12 mt-4">
      <label
        className="font-u-mono font-bold text-xl dark:text-gray-50 tracking-wide"
        htmlFor={name}
      >
        {label}
      </label>

      {textA ? (
        <textarea
          className={classInput}
          name={name}
          rows="4"
          id={name}
          placeholder={place}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={classInput}
          type={type}
          name={name}
          id={name}
          placeholder={place}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
