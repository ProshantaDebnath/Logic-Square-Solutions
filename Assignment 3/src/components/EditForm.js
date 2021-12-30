import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';


const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [name, setName] = useState(theEmployee.name);
    const [department, setDepartment] = useState(theEmployee.department);
    const [age, setAge] = useState(theEmployee.age);
    const [designation, setDesignation] = useState(theEmployee.designation);


    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id, name, department}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Department *"
                    name="department"
                    value={department}
                    onChange={(e)=> setDepartment(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="AGE *"
                    name="age"
                    value={age}
                    onChange={(e)=> setAge(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Designation *"
                    name="designation"
                    value={designation}
                    onChange={(e)=> setDesignation(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Save
            </Button>
        </Form>

     )
}

export default EditForm;