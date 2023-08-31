

import { IconChevronDown, IconLayoutDashboard, IconReservedLine, } from "@tabler/icons-react";
import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: "home",
    title: "Home",
    icon: IconLayoutDashboard,
    href: "/",
  },
  /* {
    id: "products",
    title: "Products",
    icon: IconReservedLine,
    href: "/products",
    children: [
      {
        id: "accommodation",
        title: "Accommodation",
        icon: IconChevronDown,
        href: "/products/accommodation",
        children: [
          {
            navlabel: true,
            subChildren: "Box Office",
            href: "/products/boxOffice",
          },
          {
            navlabel: true,
            subChildren: "Car Rent",
            href: "/products/carRent",
          },
        ],
      },
    ],
  }, */ 
  {
    id: 'products',
    title: 'products',
    type: 'group',
    href: "/products",
    children: [
      {
        id: 'accommodation',
        title: 'accommodation',
        type: 'collapse',
        icon: IconChevronDown,
        href: "/products/accommodation",
        children: [
          {
            id: 'boxOffice',
            title: 'boxOffice',
            type: 'item',
            url: '/products/boxOffice',
            target: true
          },
          {
            id: 'carRent',
            title: 'carRent',
            type: 'item',
            url: '/products/carRent',
            target: true
          }
        ]
      }
    ]
  },
  {
    navlabel: true,
    subheader: "Agency Data",
    href: "/",
  },
];

export default Menuitems;
