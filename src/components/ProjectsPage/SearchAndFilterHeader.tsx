import Dropdown from "../Common/Dropdown";
import Input from "../Common/Input";
import "./css/SearchAndFilterHeader.css"

interface Props {
    searchValue: string,
    onSearchValueChange: (value: string) => void,
    industries: readonly string[],
    defaultIndustry: string,
    onIndustryChange: (value: string) => void,
    sortByOptions: readonly string[],
    sortByDefaultValue: string,
    onSortByChange: (value: string) => void,
}

const SearchAndFilterHeader: React.FC<Props> = (props) => {
    return (
        <div className="search-and-filter-main-container">
            <div className="projects-search-input-container">
                <Input value={props.searchValue} onChange={props.onSearchValueChange}/>
            </div>
            <div className="projects-industry-dropdown-container">
                <label>Industry</label>
                <div>
                    <Dropdown values={props.industries} value={props.defaultIndustry} onChange={props.onIndustryChange} />
                </div>
            </div>
            <div className="projects-sort-by-dropdown-container">
                <label>Sort by:</label>
                <div>
                    <Dropdown values={props.sortByOptions} value={props.sortByDefaultValue} onChange={props.onSortByChange}/>
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilterHeader;