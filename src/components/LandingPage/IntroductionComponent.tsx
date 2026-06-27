import RotatingText from "./RotatingText"
import React from "react"
import "./css/IntroductionComponent.css"

const IntroductionComponent: React.FC = () => {
    return (
        <div className="introduction-container">
            <div className="introduction-text-container">
                <p className="introduction-text">ArhcAI</p>
            </div>
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
            <div className="introduction-buttons-container">
                <div className="introduction-button" style={{backgroundColor: "#FFF", color: "#120F17"}}>
                    <p>Start Designing</p>
                </div>
                <div className="introduction-button" style={{backgroundColor: "#2a272e", color: "#FFF"}}>
                    <p>Learn More</p>
                </div>
            </div>
        </div>
    )
}

export default IntroductionComponent