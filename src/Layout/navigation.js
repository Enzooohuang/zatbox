const pages = [
  {
    title: 'Home',
    href: '/demos/ecommerce',
    id: 'demo__ecommerece-home',
  },
  {
    title: 'Listing',
    id: 'demo__ecommerece-listing',
    children: [
      {
        title: 'Search Listing',
        href: '/demos/ecommerce/listing',
        id: 'demo__ecommerece-listing--search',
      },
      {
        title: 'Promotions',
        href: '/demos/ecommerce/promotions',
        id: 'demo__ecommerece-listing--promotions',
      },
    ],
  },
];

export default pages;
