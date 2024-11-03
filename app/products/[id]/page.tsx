import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRating from "@/components/single-product/ProductRating";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import AddToCart from "@/components/single-product/AddToCart";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

interface SingleProductProps {
  params: { id: string };
}

const SingleProductPage = async ({ params }: SingleProductProps) => {
  const product = await fetchSingleProduct(params?.id);
  const { name, image, company, description, price } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full rounded object-cover"
            src={image}
            alt={name}
            priority
            fill
          />
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params?.id} />
          </div>

          <ProductRating productId={params?.id} />
          
          <h4 className="text-xl mt-2">{company}</h4>

          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarAmount}
          </p>

          <p
            className="mt
          -6 leading-8 text-muted-foreground"
          >
            {description}
          </p>

          <AddToCart productId={params?.id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
