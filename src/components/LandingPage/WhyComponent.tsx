import React from "react"
import "./css/WhyComponent.css"
import TrueFocus from "./TrueFocus"

const WhyComponent: React.FC = () => {
    return (
        <div className="why-container">
            <div className="focus-text-container">
                <TrueFocus
                    sentence="AI-assisted recommendations#Explains architectural decisions#Generates ADRs automatically#Produces architecture diagrams#Based on software engineering best practices"
                    separator="#"
                    manualMode={false}
                    blurAmount={7}
                    borderColor="#120F17"
                    animationDuration={1}
                    pauseBetweenAnimations={1}
                />
            </div>
            <div className="why-title-container">
                <p>Why ArhcAI?</p>
            </div>
        </div>
    )
}

export default WhyComponent