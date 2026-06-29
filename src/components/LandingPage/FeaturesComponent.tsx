import type React from "react";
import "./css/FeaturesComponent.css"
import CardSwap, { Card } from './CardSwap'

interface Feature {
    title: string,
    description: string,
}

const FeaturesComponent: React.FC = () => {

    const features: Feature[] = [
        {
            title: "📄 Analyze Requirements",
            description: "Upload or type software requirements and let ArchAI understand functional and non-functional requirements.",
        },
        {
            title: "🏗 Architecture Recommendations",
            description: "Receive architectural pattern recommendations based on scalability, performance, maintainability, and security.",
        },
        {
            title: "⚖️ Explain Trade-offs",
            description: "Understand why one architecture is recommended over another.",
        },
        {
            title: "📝 Generate ADRs",
            description: "Automatically generate Architecture Decision Records that document important design decisions.",
        },
        {
            title: "📊 Generate Diagrams ",
            description: "Visualize the recommended architecture with automatically generated diagrams.",
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
                        height={600}
                    >
                        {features.map(feature => (
                            <Card className="feature-card" key={feature.title}>
                                <h3>{feature.title}</h3>
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