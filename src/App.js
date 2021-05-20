import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset, ThemeProvider } from "atomize";
import { Div, Button, Anchor, Icon } from "atomize";
import logo from './logo.svg';
import './App.css';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

const UtmBox = () => {
  return(
    <>
      <Div d="flex" className="justify-content-center">
        <Anchor href="/certified">
            <Button
          prefix={
            <Icon
              name="UpArrow"
              size="16px"
              color="white"
              m={{ r: "0.5rem" }}
            />
          }
          bg="warning700"
          hoverBg="warning800"
          rounded="circle"
          p={{ r: "1.5rem", l: "1rem" }}
          shadow="3"
          hoverShadow="4"
          className="mt-3"
        >
          Get My Certificate
        </Button>
        </Anchor>
        </Div>
    </>
  )
}

class App extends Component {
  render() {
    return (
      <>
      
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
        <StyleReset />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="h2">
                Welcome To Bagcampus Portal
                {UtmBox()}
              </p>
            </header>
          </div>
        </ThemeProvider>
      </StyletronProvider>
      </>
    );
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import { Div, Button } from "atomize";

// const TheCard = () => {
//   return(
//     <>
//       <Div d="flex">
//           <Button
//             h="2.5rem"
//             w="2.5rem"
//             bg="warning700"
//             hoverBg="warning600"
//             rounded="circle"
//             m={{ r: "1rem" }}
//             shadow="2"
//             hoverShadow="4"
//           >
//             VOTE FOR BJP
//           </Button>
//           </Div>
//     </>
//   )
// }


// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome To Bagcampus Certificate Portal
    //     </p>
    //     {TheCard()}
    //   </header>
    // </div>
//   );
// }

// export default App;
