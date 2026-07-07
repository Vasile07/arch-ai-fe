import React from "react"
import "./css/WhyComponent.css"
import TrueFocus from "./TrueFocus"

const WhyComponent: React.FC = () => {
    return (
        <div className="why-container">
            <div className="focus-text-container">
                <TrueFocus
                    sentence="SaaS-focused architecture recommendations#Multi-tenancy guidance#Cloud-native best practices#Technology stack recommendations#Interactive architecture diagrams#Architecture Decision Records"
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