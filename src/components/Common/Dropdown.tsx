import "./css/Dropdown.css"

interface DropdownProps {
    values: readonly string[];
    value: string;
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
    values,
    value,
    onChange,
}) => {
    return (
        <select
            className="dropdown"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {values.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;