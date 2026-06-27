import appIcon from "../../assets/arch-ai-icon.png"
import "./css/LandingPageHeaderBar.css"

const LandingPageHeaderBar = () => {
    return (
        <div className="landing-page-header-bar">
            <div className="landing-page-header-icon-container">
                <img src={appIcon} alt="Icon" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="landing-page-header-text-container">
                <div className="landing-page-header-link">Features</div>
                <div className="landing-page-header-link">How it Works</div>
                <div className="landing-page-header-link">About</div>
                <div className="landing-page-header-link">Documentation</div>
                <div className="landing-page-header-link" style={{ backgroundColor: '#fff', color: '#000' }}>Start Now</div>
            </div>
        </div>
    )
}

export default LandingPageHeaderBar