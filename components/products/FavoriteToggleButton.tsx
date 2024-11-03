import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

type FavoriteToggleButtonProps = {
  productId: string;
};

const FavoriteToggleButton = ({ productId }: FavoriteToggleButtonProps) => {
  console.log(productId);

  return (
    <Button size="icon" variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
