import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name:"", department:"",age:"", designation:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {name, department, age, designation} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, department);
    }

     return (<div>

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Department *"
                    name="department"
                    value={department}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="AGE *"
                    name="age"
                    value={age}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Designation *"
                    name="designation"
                    value={designation}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>

        </div>

     )
}

export default AddForm;