interface ButtonProps {
  label: string;
  clickHandler: () => void;
}

export const Button = ({ label, clickHandler }: ButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className="flex w-full justify-center rounded-md border border-transparent bg-cta py-2 px-4 text-sm font-medium text-ctaText shadow-sm hover:bg-ctaHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {label}
    </button>
  );
};
