import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset, ThemeProvider } from "atomize";


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const theme = {
  colors: {
    black900: "#1d1d1e",
  },
};

const navBox = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          Bagcampus
        </a>

        <div class="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="http://bagcampus.in/"
                target="__blank"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <div className="app">{navBox()}</div>
        </ThemeProvider>
      </StyletronProvider>
    </>
  );
};

export default Nav;
