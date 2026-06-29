import React, { useRef } from "react";
import FloatingLines from "../components/LandingPage/FloatingLines";
import LandingPageHeaderBar from "../components/LandingPage/LandingPageHeaderBar";
import './LandingPage.css';
import WhyComponent from "../components/LandingPage/WhyComponent";
import IntroductionComponent from "../components/LandingPage/IntroductionComponent";
import FeaturesComponent from "../components/LandingPage/FeaturesComponent";
import HowItWorksComponent from "../components/LandingPage/HowItWorksComponent";
import WhoIsItForComponent from "../components/LandingPage/WhoIsItForComponent";
import { motion } from "framer-motion";


const LandingPage: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const whoTriggered = useRef(false);
    const targetContainerRef = useRef<HTMLDivElement>(null);

    const sectionProps = {
        className: "landing-section",
        initial: { opacity: 0, y: 120, scale: 0.96 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.5, root: scrollRef },
        transition: { duration: 0.9 }
    };

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
            <div className="content-container" ref={scrollRef}>
                <motion.div {...sectionProps}><IntroductionComponent /></motion.div>
                <motion.div {...sectionProps}><FeaturesComponent /></motion.div>
                <motion.div {...sectionProps}><HowItWorksComponent /></motion.div>
                <motion.div
                    {...sectionProps}
                    onViewportEnter={() => {
                        if (!whoTriggered.current) {
                            whoTriggered.current = true;
                            setTimeout(() => {
                                targetContainerRef.current?.classList.add("animate");
                            }, 1000);
                        }
                    }}
                >
                    <WhoIsItForComponent containerRef={targetContainerRef} />
                </motion.div>
                <motion.div {...sectionProps}><WhyComponent /></motion.div>
            </div>
        </div>
    )
}

export default LandingPage