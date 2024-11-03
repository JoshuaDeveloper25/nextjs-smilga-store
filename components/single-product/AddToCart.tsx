import { Button } from "../ui/button";

type AddToCartProps = {
  productId: string;
};

const AddToCart = ({ productId }: AddToCartProps) => {
  return (
    <Button className="capitalize mt-8" size={"lg"}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
