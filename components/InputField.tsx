import React from "react";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => (
  <textarea
    className="text-center w-full justify-center py-1 bg-white h-[30px] bg-opacity-50 hover:bg-opacity-60 font-normal rounded focus:outline-none focus:border-red-500 resize-none"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputField;
