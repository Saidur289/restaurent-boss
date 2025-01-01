import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    const location = useLocation()
    const noHeaderNoFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderNoFooter  || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderNoFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;