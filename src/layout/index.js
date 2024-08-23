import CanvasLayout from "./Canvas"
// import Sidebar from "./Sidebar";
import { isMobile } from "react-device-detect";

const Configurator = () => {
    return (
        <div
            className="w-full h-screen flex "
            style={{
                flexDirection: isMobile ? "column" : "row"
            }}
        >
            <div style={{
                height: "100%",
                width: "100%"
                // height: isMobile ? "100%" : "100%",
                // width: isMobile ? "100%" : "70%"
            }} >
                <CanvasLayout />
            </div>
            {/* <Sidebar /> */}
        </div>
    )
}

export default Configurator;