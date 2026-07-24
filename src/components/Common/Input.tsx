import "./css/Input.css";

interface Props {
    value: string;
    onChange: (newValue: string) => void;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
    return (
        <input
            className="input"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search projects..."
        />
    );
};

export default Input;