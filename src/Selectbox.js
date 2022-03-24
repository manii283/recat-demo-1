
// import React, { Component } from "react";


// export default class Selectbox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentYear: this.props.yearFrom,
//     };
//   }

//   updateYear = (e) => {
//     console.log("update year called", e.target.value);
//     this.setState({
//       currentYear: e.target.value,
//     });
//     console.log("current state", this.state.currentYear);
//   };

//   static getDerivedStateFromProps(props,state){
//     console.log("get");
//     if(props.yearFrom !== state.currentYear){
//       console.log("not matched");
      
//     }
//   }
//   render() {
//     let items = [];
//     for (let count = this.props.yearFrom; count <= 2020; count++) {
//       items.push(count);
//     }

//     return (
//       <select name="year_from" onChange={this.updateYear}>
//         {items.map((value) => (
//           <option>{value}</option>
//         ))}
//       </select>
//     );
//   }
// }


