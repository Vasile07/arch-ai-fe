import RotatingText from "./RotatingText"
import React from "react"
import "./css/IntroductionComponent.css"
import ChatPreview from "./ChatPreview"

const IntroductionComponent: React.FC = () => {
    return (
        <div className="introduction-container">
            <div className="introduction-text-container">
                <p className="introduction-subtitle">AI-Powered Software Architecture Assistant</p>
                <p className="introduction-title">ArhcAI</p>
            </div>
            <div className="introduction-content-container">
                <div className="left-side-container">
                    <div className="motto-wrapper">
                        <div className="introduction-motto">
                            <p>From software requirements to</p>
                        </div>
                        <div className="rotation-text-wrapper">
                            <RotatingText
                                texts={[
                                    'architecture recommendations',
                                    'technology choices',
                                    'ADRs',
                                    'trade-off analysis',
                                    'architecture diagrams',
                                ]}
                                mainClassName="rotating-text-container"
                                staggerFrom="last"
                                initial={{ y: "130%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-130%" }}
                                staggerDuration={0.05}
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                rotationInterval={3000}
                                splitBy="characters"
                                auto
                                loop
                            />
                        </div>
                    </div>
                    <div className="introduction-reason-container">
                        Reduce architecture design time and make better-informed architectural decisions with AI.
                    </div>
                    <div className="introduction-buttons-container">
                        <div className="introduction-button" style={{ backgroundColor: "#FFF", color: "#120F17" }}>
                            <p>Start Designing</p>
                        </div>
                        <div className="introduction-button" style={{ backgroundColor: "#120F14", color: "#FFF", border: "2px solid #FFF" }}>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <div style={{marginTop: 100}}>
                        <ChatPreview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionComponent