interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8 xl:px-10">
      {children}
    </div>
  );
};

export default Container;
