import { Employee } from "../Employee";
import "./styles.css";

export const Team = ({ name, primaryColor, secondaryColor, employees }) => {
  return (

		employees.length > 0 &&
    <section 
      className="team" 
      style={{ backgroundColor: secondaryColor }}
    >
      <h3 style={{ borderColor: primaryColor }}>
        { name }
      </h3>

			<div className="employees">
				{
					employees.map((employee, i) => {
						return (
							<Employee
								key={`${employee.nome}-${i}`}
								primaryColor={primaryColor} 
								nome={employee.nome} 
								cargo={employee.cargo} 
								imagem={employee.imagem} 
							/>
						);
					})
				}
			</div>
    </section>
  );
}