import 'bootstrap/dist/css/bootstrap.min.css';
import './input.scss';

function Input({ type, name, placeholder, handleOnChange, value, required, label }) {
    return (
        <div className="input-field d-flex flex-column">
            <label className="font-subtitle-16-ubuntu"> {label} </label>
            <input
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

export default Input;
