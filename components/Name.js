 import React , {Component,useState} from "react";
  
 class Name extends Component{
    state ={ name : "Shambhavi Priya"};
    // constructor(props){
    //     super(props);
    //     this.setName= this.setName.bind(this);
    // }
    // setName(e) {
    //     this.setState({...this.state , name :"Seema Singh"})
    // }
    setName = (name) =>{
        this.setState({...this.state , name})
    };

    testHandler = () =>{
        console.log("testHandler");
    }

    render(){
        return(
            <>
            <h1>The name is: {this.state.name}</h1>;
            <button onClick={()=> {
                this.setName("Seema singh");
                this.testHandler();
                }}>Click me!</button>
            </>
        )
    }
 }
 

// const Name =() =>{
//     const [state, setState]= useState({name : "Shambhavi Priya"});

//     let setName =(e) =>{
//         setState({...state, name : "Seema Singh"});
//     }
//     return(
//         <>
//         <h1>This name is: {state.name}</h1>
//         <button onClick={setName}>Click me</button>
//         </>
//     )
// }

export default Name;