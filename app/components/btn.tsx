type BtnProps = {
  text: string;
  className: string;
  href?: string;
  onClick: () => void;
};

const Btn: React.FC<BtnProps> = ({ text, className, href, onClick }) => {
  return (
    <button
      className={`border border-[#282828] text-[#282828] px-8 py-2 cursor-pointer rounded-full font-mono text-sm ${className}`}>
      {text}
    </button>
  );
};

export default Btn;
