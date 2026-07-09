import type MenuOption from "../../types/MenuOption";
import "./css/OptionCard.css"
import { FaArrowRightLong } from "react-icons/fa6";

const OptionCard : React.FC<{option: MenuOption}> = ({option}) => {
    return (
        <div>
            <div>
                <option.image/>
            </div>
            <div>
                <p>
                    {option.title}
                </p>
                <p>
                    {option.description}
                </p>
            </div>
            <div>
                <FaArrowRightLong />
            </div>
        </div>
    )
}

export default OptionCard