import React, { Component } from 'react'
import PropTypes from 'prop-types'  //进行类型检查

export class Search extends Component {
    state={
        text:"", 
    }
    
    static PropTypes = {
        searchUsers:PropTypes.func.isRequired, //ptfr
    }

    onChange = e =>this.setState({[e.target.name]:e.target.value})
    onSubmit = e =>{
        e.preventDefault();
        //this.setState(this.text)
        console.log(this.state.text);
        this.props.searchUsers(this.state.text)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search user..."
                        value={this.state.text}
                        onChange={this.onChange}
                     />
                    <input 
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
            </div>
        )
    }
}

export default Search
