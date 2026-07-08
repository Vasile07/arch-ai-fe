import type React from "react";
import "./css/FeaturesComponent.css"
import CardSwap, { Card } from './CardSwap'
import {
    FiSearch,
    FiLayers,
    FiUsers,
    FiCpu,
    FiGitBranch,
    FiFileText,
    FiGrid,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface Feature {
    icon: IconType,
    title: string,
    description: string,
}

const FeaturesComponent: React.FC = () => {

    const features: Feature[] = [
        {
            icon: FiSearch,
            title: "Analyze SaaS Requirements",
            description: "Analyze functional and non-functional requirements, identify quality attributes, and extract key architectural concerns for your SaaS application.",
        },
        {
            icon: FiLayers,
            title: "Recommend Architecture Style",
            description: "Receive AI-powered recommendations for the most suitable architecture style, including Modular Monolith, Microservices, Event-Driven, or Serverless, with clear reasoning.",
        },
        {
            icon: FiUsers,
            title: "Multi-Tenancy Strategy",
            description: "Get recommendations for tenant isolation, authentication, authorization, subscription management, and other SaaS-specific architectural decisions.",
        },
        {
            icon: FiCpu,
            title: "Technology Stack",
            description: "Discover technologies that best fit your architecture, including databases, messaging systems, caching, cloud services, and deployment platforms.",
        },
        {
            icon: FiGitBranch,
            title: "Trade-off Analysis",
            description: "Compare alternative architectures and understand the advantages, disadvantages, and design trade-offs behind each recommendation.",
        },
        {
            icon: FiFileText,
            title: "Generate ADRs",
            description: "Automatically generate Architecture Decision Records documenting the rationale behind important architectural choices.",
        },
        {
            icon: FiGrid,
            title: "Architecture Diagram",
            description: "Visualize your recommended solution with interactive architecture diagrams that illustrate system components and their relationships.",
        },
    ]

    return (
        <div className="features-container">
            <div className="features-title-container">
                <p>Features</p>
            </div>
            <div className="features-card-container">
                <div className="features-wrapper">
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={110}
                        delay={5000}
                        pauseOnHover={false}
                        width={700}
                        height={500}
                    >
                        {features.map(feature => (
                            <Card className="feature-card" key={feature.title}>
                                <div className="feature-card-title-container">
                                    <span className="feature-title-icon">
                                        <feature.icon />
                                    </span>
                                    <h3>{feature.title}</h3>
                                </div>
                                <p>{feature.description}</p>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </div>
    )
}

export default FeaturesComponent