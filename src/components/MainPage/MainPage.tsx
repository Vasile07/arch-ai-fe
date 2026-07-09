import type { ReactNode } from "react";
import "./css/MainPage.css";
import MainPageHeader from "./MainPageHeader";

interface MainPageProps {
    children?: ReactNode;
}

const MainPage = ({ children }: MainPageProps) => {
    return (
        <div className="main-page">
            <MainPageHeader />
            <div className="main-page-content-container">
                {children}
            </div>
        </div>
    );
};

export default MainPage;