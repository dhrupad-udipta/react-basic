import React, {Component} from "react";

class Form extends Component{
    initialState = {
        name:'',
        job:''
    }
    state = this.initialState

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {name,job} = this.state;
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" id="name" value={name} onChange={this.handleChange}></input>
                <label htmlFor="job">Job</label>
                <input name="job" type="text" id="job" value={job} onChange={this.handleChange}></input>
                <input type="button" value="Submit" onClick={this.submitForm}></input>
            </form>
        )
    }
}

export default Form;