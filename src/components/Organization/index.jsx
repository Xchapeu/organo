import './styles.css';
import addButton from "../../assets/add-button.png";

export const Organization = ({ onClick }) => {
    return (
        <div className="container">
            <h3>Minha Organização:</h3>
            <button onClick={onClick}><img src={addButton} alt="Add form button" /></button>
        </div>
    );
}