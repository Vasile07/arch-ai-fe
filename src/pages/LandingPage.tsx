import React from "react";
import FloatingLines from "../components/LandingPage/FloatingLines";
import LandingPageHeaderBar from "../components/LandingPage/LandingPageHeaderBar";
import './LandingPage.css';
import IntroductionComponent from "../components/LandingPage/IntroductionComponent";

const LandingPage: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <FloatingLines
                linesGradient={["#e945f5", "#6f6f6f", "#6a6a6a"]}
                animationSpeed={1.2}
                interactive={false}
                bendRadius={4}
                bendStrength={-0.6}
                mouseDamping={0.03}
                parallax
                parallaxStrength={0.75}
            />
            <div className="header-container">
                <LandingPageHeaderBar />
            </div>
            <div className="content-container">
                <IntroductionComponent />
            </div>
        </div>
    )
} 

export default LandingPage