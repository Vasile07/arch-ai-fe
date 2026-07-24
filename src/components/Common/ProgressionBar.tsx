import { color } from "motion";
import "./css/ProgressionBar.css"
import { FaCheck } from "react-icons/fa6";
import { PiCheckBold } from "react-icons/pi";
import { ImCheckmark } from "react-icons/im";

interface Props {
    numberOfCheckpoints: number,
    currentCheckpoint: number
    color: string;
    lightColor: string,
}

const ProgressionBar: React.FC<Props> = (props) => {

    function range(n: number): number[] {
        return Array.from({ length: n }, (_, i) => i);
    }

    return (
        <div className="progression-bar-container" style={{ backgroundColor: props.color }}>
            {
                range(props.numberOfCheckpoints).map(checkpoint => (
                    <div className="checkpoint" style={{backgroundColor: props.currentCheckpoint === checkpoint ? props.color : props.lightColor}}>
                        {
                            checkpoint < props.currentCheckpoint &&
                            <span className="icon-wrapper">
                                <ImCheckmark size={12} color={props.color} />
                            </span>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ProgressionBar;