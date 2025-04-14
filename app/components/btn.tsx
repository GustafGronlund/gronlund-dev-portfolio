type BtnProps = {
  text: string;
  className: string;
  href?: string;
  onClick: () => void;
};

export const Btn = ({ text, className, href, onClick }: BtnProps) => {
  return (
    <button
      className={`cursor-pointer rounded-full border border-[#282828] px-8 py-2 font-mono text-sm text-[#282828] ${className}`}
    >
      {text}
    </button>
  );
};
