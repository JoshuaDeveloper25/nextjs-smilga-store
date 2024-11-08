// Types of links
type NavLink = {
  href: string;
  label: string;
};

// Exporting links
export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/favorites", label: "Favorites" },
  { href: "/cart", label: "Car" },
  { href: "/orders", label: "Orders" },
];