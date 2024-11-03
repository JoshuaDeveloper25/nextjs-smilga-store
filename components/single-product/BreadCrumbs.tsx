import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadCrumbsProps = {
  name: string;
};

const BreadCrumbs = ({ name }: BreadCrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-xl">
            home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/products" className="capitalize text-xl">
            products
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbPage className="capitalize text-xl">{name}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
