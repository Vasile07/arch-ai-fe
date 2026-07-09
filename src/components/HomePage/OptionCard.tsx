import type MenuOption from "../../types/MenuOption";
import "./css/OptionCard.css";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
    option: MenuOption;
    index: number;
}

const OptionCard: React.FC<Props> = ({ option, index }) => {
    return (
        <div className="card-animation"
            style={{
                animationDelay: `${3000 + index * 1000}ms`,
            }}
        >

            <div
                className="card-wrapper"

            >
                {option.isMain && <span className="main-card-decoration" />}

                <div className={`option-card ${option.isMain ? "main-card" : ""}`}>
                    <div style={{ marginLeft: 30, marginTop: 20 }}>
                        <div className="option-icon-container">
                            <option.image size="50%" />
                        </div>

                        <div className="option-text-container">
                            <p className="option-title">{option.title}</p>
                            <p className="option-description">
                                {option.description}
                            </p>
                        </div>

                        <div className="option-arrow-container">
                            <FaArrowRightLong style={{ width: 38, height: 30 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionCard;