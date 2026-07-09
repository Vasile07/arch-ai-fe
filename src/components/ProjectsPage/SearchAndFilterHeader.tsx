import Dropdown from "../Dropdown";
import Input from "../Input";

const SearchAndFilterHeader : React.FC = () => {
    return (
        <div>
            <div>
                <Input />
            </div>
            <div>
                <p>Industry</p>
                <Dropdown />
            </div>
            <div>
                <p>Sort by:</p>
                <Dropdown />
            </div>
        </div>
    )
}

export default SearchAndFilterHeader;