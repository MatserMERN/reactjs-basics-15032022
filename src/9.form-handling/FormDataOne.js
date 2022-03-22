import React, { Component } from 'react'

export class FormDataOne extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            country: '',
            gender: '',
            isAdmin: false
        }

       // this.state.username ='Scott'
    }

    getFormData(){
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
    }

  render() {
      const countryList = [
          {id:1, name: "Bharat"},
          {id:2, name: "Japan"},
          {id:3, name: "Australia"}
      ]
    return (
      <div className="container">
          <h1>User Form</h1>
          <form>
            <div>
                <label>Username</label>
                <input type="text" 
                       className="form-control w-50" 
                       value={this.state.username}
                       onChange={(event) => this.setState({username : event.target.value})} 
                />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50"
                          value={this.state.comments}
                          onChange={(event) => this.setState({comments : event.target.value})}
                ></textarea>
            </div>
            <br />
            <div>
                    <label>Country</label>
                    <select className="form-select w-50" 
                            value={this.state.country}
                            onChange={(event) => this.setState({country : event.target.value})}
                    >
                        <option value="">Select</option>
                        {
                            countryList.map(country => (
                                <option key={country.id} 
                                    value={country.id}>{country.name}</option>
                            ))
                        }
                    </select>                
            </div>
            <br />
            <div>
                <label>Gender</label>&nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       name="gender" 
                       value="F"
                       onChange={(event) => this.setState({gender : event.target.value})}
                />&nbsp;&nbsp;Female&nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       name="gender" 
                       value="M"
                       onChange={(event) => this.setState({gender : event.target.value})}
                />&nbsp;&nbsp;Male&nbsp;&nbsp;
            </div>
            <br />
            <div>
                <label>IsAdmin</label>&nbsp;&nbsp;
                <input type="checkbox" 
                       className="form-check-input"
                       value={this.state.isAdmin} 
                       onChange={() => this.setState({isAdmin: !this.state.isAdmin})}
                />
            </div>
            <br />
            <div>
                <button type="button" className="btn btn-primary"
                        onClick={() => this.getFormData()}
                >Submit Form</button>
            </div>
          </form>
      </div>
    )
  }
}

export default FormDataOne