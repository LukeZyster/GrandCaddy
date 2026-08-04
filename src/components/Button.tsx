type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full
        rounded-full
        bg-[#0B5FFF]
        py-4
        text-white
        font-semibold
        text-lg
        transition
        duration-300
        hover:bg-[#084ed1]
        active:scale-[0.98]
      "
    >
      {children}
    </button>
  );
}