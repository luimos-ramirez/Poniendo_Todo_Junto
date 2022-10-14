import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    cumpleanios = () => {
        this.setState({age: this.state.age+1})
    }

    render() {

        const {firstName, lastName, hairColor} = this.props;

        return(
            <div className="container m-3">
                <h3>{firstName} {lastName}</h3>
                <p><b>Age:</b> {this.state.age}</p>
                <p><b>Hair Color:</b> {hairColor}</p>
                <button className="btn btn-success" onClick={()=>this.cumpleanios()}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }

}

export default PersonCard;