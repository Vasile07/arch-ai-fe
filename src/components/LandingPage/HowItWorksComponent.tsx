import type React from "react";
import "./css/HowItWorksComponent.css"
import Carousel, { type CarouselItem } from "./Carousel";
import {
  FiEdit3,
  FiSearch,
  FiLayers,
  FiLayout,
} from "react-icons/fi";

const HowItWorksComponent : React.FC = () => {

    const steps : CarouselItem[] = [
        {
        id: 1,
        title: "Describe Your Project",
        description:
            "Provide your software requirements, goals, and constraints in natural language. ArchAI understands both functional and non-functional requirements.",
        icon: <FiEdit3 className="carousel-icon" />,
        },
        {
        id: 2,
        title: "Requirements Analysis",
        description:
            "ArchAI analyzes your requirements, identifies quality attributes, and extracts the key architectural concerns before making recommendations.",
        icon: <FiSearch className="carousel-icon" />,
        },
        {
        id: 3,
        title: "Architecture Recommendation",
        description:
            "Receive tailored architecture patterns, technology suggestions, and clear explanations of the trade-offs behind each recommendation.",
        icon: <FiLayers className="carousel-icon" />,
        },
        {
        id: 4,
        title: "Generate Design Artifacts",
        description:
            "Automatically generate Architecture Decision Records (ADRs) and architecture diagrams to document and visualize your solution.",
        icon: <FiLayout className="carousel-icon" />,
        },
    ]

    return (
        <div className="how-it-works-container">
            <div className="how-it-works-carrousel-container">
                <div style={{position: 'relative' }}>
                <Carousel
                    baseWidth={600}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                    items={steps}
                />
                </div>
            </div>
            <div className="how-it-works-title-container">
                <p>How it works?</p>
            </div>
        </div>
    )
}

export default HowItWorksComponent