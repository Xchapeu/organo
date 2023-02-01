import "./styles.css";

export const Employee = ({ primaryColor, nome, cargo, imagem }) => {
    return (
        <div className="card-container">
            
            <div className="card-header" style={{ backgroundColor: primaryColor }}>
                <img src={imagem} alt={nome} />
            </div>

            <div className="card-info">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    );
}
