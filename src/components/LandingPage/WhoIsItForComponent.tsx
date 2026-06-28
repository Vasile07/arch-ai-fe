import type React from "react";
import "./css/WhoIsItForComponent.css"
import TargetComponent from "./TargetComponent";

const WhoIsItForComponent : React.FC = () => {

    return (
        <div className="who-is-it-for-container">
            <div className="who-is-it-for-title-container">
                <p>Who is it for?</p>
            </div>
            <div className="who-is-it-for-target-container">
                <TargetComponent />
            </div>
        </div>
    )
}

export default WhoIsItForComponent