import 'bootstrap/dist/css/bootstrap.min.css';
import './input_header.scss';

function InputHeader({ type, name, placeholder, handleOnChange, value, required, label }) {
    return (
        <div className="input-field d-flex flex-column">
            <label className="font-subtitle-16-ubuntu"> {label} </label>
            <input
		className="input_header icon-search"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                required={required}
            />
        </div>
    )
}

export default InputHeader;
