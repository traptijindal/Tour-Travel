import { faAddressBook, faBriefcase, faCircleInfo, faHouse } from "@fortawesome/free-solid-svg-icons"

const MenuItems = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: faHouse  // Correct FontAwesome icon name format
    },
    {
        title: "About",
        url: "/about",
        cName: "nav-links",
        icon: faCircleInfo // Example FontAwesome icon name
    },
    {
        title: "Service",
        url: "/service",
        cName: "nav-links",
        icon: faBriefcase// Example FontAwesome icon name
    },
    {
        title: "Contact",
        url: "/signup",
        cName: "nav-links",
        icon: faAddressBook // Correct FontAwesome icon name format
    },
    {
        title:"Sign Up",
        url:"/signup",
        cName: "nav-links-mobile"
    }
];

export default MenuItems;
