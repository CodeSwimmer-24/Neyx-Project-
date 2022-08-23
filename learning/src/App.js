// import { Component, useState } from "react";
// import styled from "styled-components";
// import "./App.css";
// import WithHigherOrder from "./WithHigherOrder";

// function App() {
//   const Button = styled.button`
//     background: ${(props) => (props.primary ? "yellow" : "orange")};
//     border-radius: 3px;
//     border: 2px solid palevioletred;
//     color: #000;
//     font-size: 20px;
//     margin: 10em 5em;
//     padding: 1em 3em;
//   `;

//   const [personState, setpersoneState] = useState({
//     person: [
//       { name: "Max", age: 20 },
//       { name: "Mini", age: 10 },
//     ],
//   });

//   const [showPerson, setShowPerson] = useState(false);

//   const handleChange = (userName, age) => {
//     setpersoneState({
//       person: { name: userName, age: age },
//       // person: { name: "Max", age: 20 },
//     });
//   };

//   const toggleHandler = (primary) => {
//     // setShowPerson(true);
//     const doesShow = showPerson;
//     setShowPerson(!doesShow);
//   };

//   let person;

// if (showPerson) {
//   person = (
//     <div>
//       <h1>
//         {personState.person.map((per, i) => {
//           return ` ${i + 1} >  Hello my name is ${per.name} and my age is ${
//             per.age
//           }`;
//         })}
//       </h1>
//     </div>
//   );
// }

//   return (
//     <>
//       <WithHigherOrder classes="App">
//         {/* <button onClick={() => handleChange("Max!")}>Click</button> */}
//         <Button primary={showPerson} onClick={toggleHandler}>
//           Click
//         </Button>
//         <button onClick={handleChange.bind(this, "Max!!", 24)}>Click</button>
//         <div>{person}</div>
//       </WithHigherOrder>
//     </>
//   );
// }

// // export default WithHigherOrder(App, classes.App);
// export default App;

// import React, { Component } from "react";
// import ValidationComp from "./ValidationComp";
// import Char from "./Char";
// import AuthContext from "./context/auth-context";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("App.js constructor");

//     // this.state = {

//     // }
//   }
//   state = {
//     text: "",
//     count: 0,
//   };

//   static getDerivedStateFromProps(props, state) {
//     console.log("App.js getDerivedStateFromProps", props);
//     return state;
//   }

// componentWillMount() {
//   console.log("Component Will mount");
// }

//   componentDidMount() {
//     console.log("Component Did mount");
//   }

//   componentDidUpdate(prevProps, prevState, snapShot) {
//     console.log("Component Did Update");
//     console.log(snapShot);
//   }

//   handleChange = (e) => {
//     const text = e.target.value;
//     this.setState({ text: text });

//     // this.setState({ count: this.state.count + 1 });

//     // Way to write state when we are dependent on old state
//     this.setState((prevState, props) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   };

//   remove = (i) => {
//     const txt = this.state.text.split("");
//     txt.splice(i, 1);
//     const UpdateText = txt.join("");
//     this.setState({ text: UpdateText });
//   };

//   render() {
//     console.log("App.js Render");
//     const charList = this.state.text.split("").map((c, i) => {
//       return <Char click={() => this.remove(i)} key={i} chr={c} />;
//     });

//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.text}
//         />
//         <AuthContext.Provider
//           value={{ authenticated: this.state.authenticated }}
//         >
//           <ValidationComp text={this.state.text.length} />
//           {charList}
//         </AuthContext.Provider>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Login from "./components/component1/Login";
import Profile from "./components/component1/Profile";

export const AuthContext = React.createContext({
  isAuth: false,
  toogleAuth: () => {},
});

class App extends Component {
  state = {
    isAuth: false,
  };

  // toogleAuth = () => {
  //   this.setState((prevState) => {
  //     return {
  //       isAuth: !prevState.isAuth,
  //     };
  //   });
  // };

  toogleAuth = () => {
    const changeAuth = this.state.isAuth;
    this.setState({ isAuth: !changeAuth });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ isAuth: this.state.isAuth, toogleAuth: this.toogleAuth }}
      >
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
