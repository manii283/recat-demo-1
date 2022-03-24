// import React, { Component } from "react";
// import propTypes from "prop-types";
//Function Component------

// function Mani(props){
//     return <h1>hiiii {props.title}</h1>
// }
// export default Mani;

//composing component------
// function Student(props){
//     return <h1>hiiiii{props.name}</h1>
// }
// export default Student;

//popos(no. props)
// const Student = (props) => {
//     return(
//         <div>
//             <h1>hello {props.name}</h1>
//             {/* <h2>manisha's {props.roll}</h2> */}
//         </div>
//     );
// };

// export default Student;

//prop-types  // isrequired

//  Student.propTypes = {
//      name:propTypes.string.isRequired
//  };

// children

// const Student = (props) => {
//    return <h1>hiiiii{props.children}</h1>
// }

//  export default Student;
// export default class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "sumedh",
//       age:this.props.age,
//     };
//   }
//   click=()=>{
//       console.log("click event done");
//     //   this.setState({
//     //     name: "mani",
//     //     age:24,
//     //   })
//     this.setState(function(state,props){
//         console.log(state);
//         console.log(state.name);
//         console.log(state.age);
//         console.log(props.age);
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>hiiii {this.state.name}</h1>
//         <h1>your age is {this.state.age}</h1>
//         <button onClick={this.click}> click me</button>
//       </div>
//     );
//   }
// }

// export default Test;
