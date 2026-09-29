import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CommonHeader: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span
        aria-hidden="true"
        className="relative inline-block size-6 shrink-0"
      >
        <RiCheckboxBlankCircleFill className="absolute bottom-0 right-0 size-5 text-[#ff6f61] dark:text-white " />
        <RiCheckboxBlankCircleLine className="absolute -right-1 top-0 z-10 size-5 text-[#1f1f33] dark:text-[#ff6f61]" />
      </span>

      <h2 className="text-4xl font-bold dark:text-foreground  text-[#1f1f33]">
        {children}
      </h2>
    </div>
  );
};

export default CommonHeader;
