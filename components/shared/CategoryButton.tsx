interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

function CategoryButton({
  category,
  isSelected,
  onClick,
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
        isSelected
          ? "bg-main text-white shadow-md"
          : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
      }`}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
