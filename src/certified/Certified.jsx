import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset, ThemeProvider } from "atomize";
import { Button, Icon, Input, Div} from "atomize";
import Nav from "../nav/Nav";


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const theme = {
  colors: {
    black900: "#1d1d1e",
  },
  shadows: {
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)",
  },
};

const CertifiedBox = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="card">
            {/* Heading One */}
            <div className="card-header" id="headingOne">
              <Button
                suffix={
                  <Icon
                    name="LongRight"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#InternCert"
                aria-expanded="false"
                aria-controls="InternCert"
              >
                Campus Ambassador Certificate
              </Button>
            </div>

            {/* Heading Two */}
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <Button
                  suffix={
                    <Icon
                      name="LongRight"
                      size="16px"
                      color="white"
                      m={{ l: "1rem" }}
                    />
                  }
                  shadow="3"
                  hoverShadow="4"
                  m={{ r: "1rem" }}
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#GraphicInt"
                  aria-expanded="false"
                  aria-controls="GraphicInt"
                >
                  Graphic Intern Certificate
                </Button>
              </h2>
            </div>

            {/* Heading Three */}
            <div className="card-header" id="headingThree">
              <Button
                suffix={
                  <Icon
                    name="LongRight"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#internshipfest"
                aria-expanded="false"
                aria-controls="internshipfest"
              >
                Internship Fest Certificate
              </Button>
            </div>

            <div
              id="InternCert"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <form>
                  <Input
                    placeholder="Email"
                    type="email"
                    id="uid"
                    required
                    suffix={
                      <Button
                        id="certificatesubmit"
                        pos="absolute"
                        bg="info700"
                        hoverBg="info800"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{ r: "md" }}
                        type="submit"
                      >
                        <Icon
                          name="Search"
                          size="20px"
                          color="white"
                          cursor="pointer"
                        />
                      </Button>
                    }
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              id="internshipfest"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <form>
                  <Input
                    placeholder="Unique ID"
                    type="text"
                    id="uid"
                    required
                    suffix={
                      <Button
                        id="certificatesubmit"
                        pos="absolute"
                        bg="info700"
                        hoverBg="info800"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{ r: "md" }}
                        type="submit"
                      >
                        <Icon
                          name="Search"
                          size="20px"
                          color="white"
                          cursor="pointer"
                        />
                      </Button>
                    }
                  />
                  <span>
                    <i>
                      if didnt work try refresh and use first search bar with
                      placeholder email by using relative First Name or UID
                    </i>
                  </span>
                </form>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              id="GraphicInt"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="card-body">
                  <form action="#">
                    <Input
                      placeholder="First Name"
                      type="text"
                      id="uid"
                      required
                      suffix={
                        <Button
                          id="certificatesubmit"
                          pos="absolute"
                          bg="info700"
                          hoverBg="info800"
                          w="3rem"
                          top="0"
                          right="0"
                          rounded={{ r: "md" }}
                          type="submit"
                        >
                          <Icon
                            name="Search"
                            size="20px"
                            color="white"
                            cursor="pointer"
                          />
                        </Button>
                      }
                    />
                    <span>
                      <i>
                        if didnt work try refresh and use first search bar with
                        placeholder email by using relative First Name or UID
                      </i>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Certified = () => {
  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <div className="app">{CertifiedBox()}</div>
          <div className="download-area ml-auto">
            <Button
              h="10rem"
              w="10rem"
              bg="danger300"
              hoverBg="danger400"
              rounded="lg"
              m={{ r: "1rem" }}
            >
              <Icon name="Download" size="20px" color="danger700" />
            </Button>
            <span id="certificate"></span>
          </div>

          <Div
            h="3.5rem"
            p={{ x: "1rem" }}
            shadow="new-shadow"
            rounded="lg"
            d="flex"
            align="center"
            justify="center"
            textColor="medium"
          >
            <span class="h6">Powered By Bagcampus</span>
            
          </Div>
        </ThemeProvider>
      </StyletronProvider>
    </>
  );
};

export default Certified;
