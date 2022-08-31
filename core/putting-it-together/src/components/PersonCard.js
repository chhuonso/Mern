import React, { Component } from 'react';

class PersonCard  extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props['firstName'],
            lastName: this.props['lastName'],
            age: this.props['age'],
            hairColor: this.props['hairColor'],


            // in the video option 
            // this.state = {
            // age: this.props.age
            //}
        }
    }
// in the video option
    // changeAge = () => {
//      this.setState({age: this.state.age + 1})
    // }


    render(){
        return <div>
            <h1>{this.state.lastName}, {this.state.firstName}</h1>
            {/* also did the same to update age to state */}
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.state.hairColor}</p>
            {/* onClick= {this.changeAge} */}
            <button onClick={()=>this.setState({age:this.state.age+1})}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
        </div>
    }

}

export default PersonCard;