import  { NavLink } from "react-router"
import Header from "./header";
import { Outlet } from "react-router";

const menuItems = [
    {route: '/dashboard/resumen', label:'Resumen'},
    {route: '/dashboard/pedidos', label:'Pedidos'},
    {route: '/dashboard/menu', label:'Menu'},
    {route: '/dashboard/reportes', label:'Reportes'},
];

export default function Layout(){
  return(
    <>
      <Header/>

      <div className="bg-[#f6f4f469] min-h-screen">
        <div className="p-6">
          <div className="inline-flex bg-[#F2F2F2] p-1 space-x-4 rounded-sm">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.route}
                className={({ isActive })=>
                  `cursor-pointer rounded-sm p-1 w-22 flex justify-center ${
                    isActive
                    ? "bg-white"
                    :"bg-[#F2F2F2] hover:bg-[#f0eeee]"
                  }`
                }
              >
                <p className="text-sm">{item.label}</p>
              </NavLink>
            ))}
          </div>

            <Outlet/>
        </div>
      </div>
    </>
  );
  
}