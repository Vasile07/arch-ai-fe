import type React from "react";
import "./css/HowItWorksComponent.css"
import Carousel, { type CarouselItem } from "./Carousel";
import {
    FiEdit3,
    FiSearch,
    FiLayers,
    FiLayout,
} from "react-icons/fi";

const HowItWorksComponent: React.FC = () => {

    const steps: CarouselItem[] = [
        {
            id: 1,
            title: "Describe Your SaaS Application",
            description:
                "Describe your SaaS idea, including functional requirements, quality attributes, and design constraints. ArchAI understands projects written in natural language.",
            icon: <FiEdit3 className="carousel-icon" />,
        },
        {
            id: 2,
            title: "AI Requirement Analysis",
            description:
                "ArchAI analyzes your requirements, identifies quality attributes, constraints, and SaaS-specific concerns such as scalability, security, and multi-tenancy.",
            icon: <FiSearch className="carousel-icon" />,
        },
        {
            id: 3,
            title: "Architecture Blueprint",
            description:
                "Receive an AI-generated architecture blueprint including architecture style, SaaS design decisions, technology stack, and trade-off analysis tailored to your application.",
            icon: <FiLayers className="carousel-icon" />,
        },
        {
            id: 4,
            title: "Generate Design Artifacts",
            description:
                "Automatically generate Architecture Decision Records (ADRs), interactive architecture diagrams, and continue refining the solution through contextual AI conversations.",
            icon: <FiLayout className="carousel-icon" />,
        },
    ];

    return (
        <div className="how-it-works-container">
            <div className="how-it-works-carrousel-container">
                <div style={{ position: 'relative' }}>
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