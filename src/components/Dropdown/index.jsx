import "./styles.css";

export const Dropdown = ({ label, itens, value, onChange, required }) => {

    return (
        <fieldset className="input-field">
            <label>{label}</label>
            <select value={value} onChange={onChange} required={required}>
                <option value=""></option>
                { itens.map(item => <option key={item}>{item}</option>) }
            </select>
        </fieldset>
    );
}
