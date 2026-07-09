import type React from "react";
import "./css/MainPageHeader.css"
import appIcon from "../../assets/arch-ai-icon.png"
import UserProfileDisplay from "./UserProfileDisplay";

const MainPageHeader: React.FC = () => {
    return (
        <div className="main-page-header">
            <div className="app-title-container">
                <img src={appIcon} className="app-icon"/>
                <p>ArchAI</p>
            </div>
            <div className="main-page-user-container">
                <UserProfileDisplay />
            </div>
        </div>
    )
}

export default MainPageHeader