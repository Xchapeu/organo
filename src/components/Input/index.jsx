import "./styles.css";

export const Input = ({ label, placeholder, value, onChange, required }) => {

    const altPlaceholder = `${placeholder} ${label.toLowerCase()}`;

    return (
        <fieldset className="input-field">
            <label htmlFor="">{label}</label>
            <input 
                type="text" 
                placeholder={altPlaceholder} 
                value={value} 
                onChange={onChange}
                required={required}
            />
        </fieldset>
    );
}