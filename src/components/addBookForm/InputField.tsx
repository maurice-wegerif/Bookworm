interface InputFieldProps {
  placeholder: string;
  value: string;
  changeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  placeholder,
  value,
  changeHandler,
}: InputFieldProps) => (
  <input
    type="text"
    placeholder={placeholder}
    className="block w-full appearance-none rounded-md border bg-background text-text border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    value={value}
    onChange={changeHandler}
  />
);
