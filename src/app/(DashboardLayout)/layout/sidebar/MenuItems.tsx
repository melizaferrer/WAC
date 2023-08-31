

import { IconActivity, IconMountain } from "@tabler/icons-react";
import { Icon24Hours, Icon3dCubeSphere, IconArrowsTransferDown, IconArrowsTransferUp, IconBox, IconCar, IconHotelService, IconTicket, IconTransferIn, IconTransferOut } from "@tabler/icons-react";
import { IconChevronDown, IconLayoutDashboard, IconReservedLine, } from "@tabler/icons-react";
// import { uniqueId } from "lodash";

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
    icon: IconReservedLine,
    href: "/products",
  },
  {
    id: 'accommodation',
    title: 'accommodation',
    icon: IconHotelService,
    href: "/products/accommodation",
  },
  {
    id: 'boxOffice',
    title: 'Box Office',
    icon: IconTicket,
    href: "/products/boxOffice",
  },
  {
    id: 'carRent',
    title: 'Car Rent',
    icon: IconCar,
    href: "/products/carRent",
  },
  {
    id: 'excursions',
    title: 'Excursions',
    icon: IconMountain,
    href: "/products/excursions",
  },
  {
    id: 'transfers',
    title: 'Transfers',
    icon: IconArrowsTransferDown,
    href: "/products/transfers",
  },
  {
    navlabel: true,
    subheader: "Agency Data",
    href: "/",
  },
];

export default Menuitems;
