import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="font-poppins lg:overflow-x-hidden">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;