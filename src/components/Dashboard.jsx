import Menubar from "./Menubar.jsx";
import Sidebar from "./Sidebar.jsx";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

const Dashboard = ({children, activeMenu}) => {
    const {user} = useContext(AppContext);
    return (
        <div>
            <Menubar activeMenu={activeMenu} />

            {user && (
                <div className="flex  min-h-screen bg-gray-50">
                    <div className="max-[1080px]:hidden">
                        <Sidebar activeMenu={activeMenu}/>
                    </div>

                    <div className="flex-1 mx-5 overflow-y-auto">{children}</div>
                </div>
            )}
        </div>
    )
}

export default Dashboard;