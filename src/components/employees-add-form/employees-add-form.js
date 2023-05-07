import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            isError: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) {
          this.setState({ isError: true });
          return;
        }
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
          name: "",
          salary: "",
          isError: false
        });
      };

    render() { 
        const {name, salary} = this.state;

        return(
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is the name?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>

                    <button type="submit"
                            className={`btn btn-outline-light ${
                                this.state.isError ? "btn-danger" : ""
                              }`}>Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;