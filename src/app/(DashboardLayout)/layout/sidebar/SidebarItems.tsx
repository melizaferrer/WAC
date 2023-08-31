/* import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const pathDirect: any = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => { 
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;
          } else if (item.children) {
            return (
              <NavGroup item={item} key={item.id}>
                {item.children.map((childItem) => (
                  <NavItem
                    item={childItem}
                    key={childItem.id}
                    pathDirect={pathDirect}
                    onClick={toggleMobileSidebar}
                  />
                ))}
              </NavGroup>
            );
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
 */
// SidebarItems.jsx import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";   // Asegúrate de que la ruta sea correcta
import NavGroup from "./NavGroup/NavGroup";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const pathDirect: any = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => { 
          if (item.subheader) {
            console.log('subheader')
            return <NavGroup item={item} key={item.subheader} />;
            
          } else if (item.children) {
            console.log("sub")
            return (
              <NavGroup item={item} key={item.id}>
                {item.children.map((childItem) => (
                  <NavItem
                    item={childItem}
                    key={childItem.id}
                    pathDirect={pathDirect}
                    onClick={toggleMobileSidebar}
                  />
                ))}
              </NavGroup>
            );
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
