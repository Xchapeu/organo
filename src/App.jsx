import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Organization } from "./components/Organization";
import { Team } from "./components/Team";

function App() {

  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]

  const [employees, setEmployees] = useState([]);
  const [isShowingForm, setIsShowingForm] = useState(false);

  const handleNewEmployee = employee => {
    debugger
    setEmployees([...employees, employee])
  }

  const toggleShowForm = () => {
    setIsShowingForm(!isShowingForm);
  }

  return (
    <div>
      <Banner />

      {
        isShowingForm 
        ? <Form teams={teams.map(team => team.name)} register={employee => handleNewEmployee(employee)} />
        : ""
      }
      
      <Organization onClick={toggleShowForm} />

      { teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor}
          employees={employees.filter(employee => employee.time === team.name)}
        />
      )}

      <Footer />

    </div>
  )
}

export default App;
