import type React from "react";
import "./css/WhoIsItForComponent.css"
import TargetComponent from "./TargetComponent";

interface WhoIsItForProps {
    containerRef: React.RefObject<HTMLDivElement | null> ;
}

const WhoIsItForComponent: React.FC<WhoIsItForProps> = ({ containerRef }) => {
    return (
        <div className="who-is-it-for-container">
            <div className="who-is-it-for-title-container">
                <p>Who is it for?</p>
            </div>
            <div className="who-is-it-for-target-container">
                <TargetComponent containerRef={containerRef} />
            </div>
        </div>
    )
}

export default WhoIsItForComponent