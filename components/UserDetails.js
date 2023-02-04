// import React, {Component} from "react";
import React, { useState } from "react";



const UserDetails = ({ user = {} }) => {
    // let user = props.user;
    // let {user} = props;
    const [h1Text, setH1Text] = useState("This is demo component.");
    return (
        <div>
            <h3>{user.name}</h3>
            <h5>
                Email : {user.email} <br />
                Phone Number: {user.phoneNumber}
            </h5>

            <h1>{h1Text}</h1>
            <button onClick={(e) => {
                setH1Text("this is shambhavi Priya.")
            }}>click me</button>
        </div>
    )
}

// class UserDetails extends Component{
//     const [h1Text, setH1Text] = useState("This is demo component.");
//     user = this.props.user;
//     render(){

//         return (
//             <div><h3>{this.user.name}</h3>
//                         <h5>
//                             Email : {this.user.email} <br/>
//                             Phone Number: {this.user.phoneNumber}
//                         </h5>
//                         <h1>{h1Text}</h1>
//                         <button onClick={(e) =>{
//                            setH1Text("This is shambhavi Priya");
//                         }}>click me</button>
//                         </div>
//         )
//     }

export default UserDetails;