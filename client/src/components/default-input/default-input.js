import 'bootstrap/dist/css/bootstrap.min.css';
import './default-input.scss';

function DefaultInput({ type, name, placeholder, handleOnChange, value, required, icon}) {
    return (
        <div> 
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

export default DefaultInput;