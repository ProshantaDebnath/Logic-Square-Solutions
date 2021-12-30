import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Thomas Hardy', department: 'Frontend', age: '23', designation: 'test' },
        { id: uuidv4(), name: 'Perrier', department: 'Backend', age: '24', designation: 'test' },
        { id: uuidv4(), name: 'Maria Anders', department: 'Deployment', age: '25', designation: 'test' },
        { id: uuidv4(), name: 'Fran Wilson', department: 'Frontend', age: '27', designation: 'test' },
        { id: uuidv4(), name: 'Martin Blank', department: 'Backend', age: '30', designation: 'test' }
    ])

    useEffect(() => {
        setEmployees(JSON.parse(localStorage.getItem('employees')))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    })



    const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));



    const addEmployee = (name, department, age, designation) => {
        setEmployees([...employees, { id: uuidv4(), name, department, age, designation }])
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
    }

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;