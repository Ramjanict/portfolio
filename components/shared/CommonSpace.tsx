interface CommonSpaceProps {
  isBottom?: boolean;
  children: React.ReactNode;
}
const CommonSpace: React.FC<CommonSpaceProps> = ({
  isBottom = false,
  children,
}) => {
  return (
    <div className={isBottom ? "pb-16" : "py-16 md:py-24"}>{children}</div>
  );
};

export default CommonSpace;
