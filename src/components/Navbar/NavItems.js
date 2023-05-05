import {BsFillHouseHeartFill as Home,
    BsFillFilePersonFill as Contact,
    BsFillWalletFill as Service,
    BsFillExclamationCircleFill as Info,
    BsCarFront as Car } from "react-icons/bs";

export const NavItems = [
    {
        title:"Cars",
        url:"/cars",
        cName:"nav-links",
        icon: <Car/>
    },
    {
        title:"Home",
        url:"/",
        cName:"nav-links",
        icon: <Home/>
    },
    {
        title:"About",
        url:"/about",
        cName:"nav-links",
        icon: <Info/>
    },
    {
        title:"Contact",
        url:"/contact",
        cName:"nav-links",
        icon: <Contact/>
    },
    {
        title:"Sign up",
        url:"/signup",
        cName:"nav-links-mobile"
        
    }
]