import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ReactFeatures from "./components/ReactFeatures";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const featuresData = [
  {
    header: "A Simple Component",
    body: "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",

    footer:
      "JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.",
  },
  {
    header: "A Stateful Component",
    body: "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
    footer: "",
  },
  {
    header: "An Application",
    body: "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
    footer: "",
  },
  {
    header: "A Component Using External Plugins",
    body: "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.",
    footer: "",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <div className="banner">
        <div class="banner-container">
          <div className="banner-contents">
            <div className="react-banner-text">REACT</div>
            <div style={{ color: "white", fontSize: "37px" }}>
              A JavaScript library for building user interfaces
            </div>
            <div className="getting-started">
              <div className="gs">Get Started</div>
              <div className="tt">Take the Tutorial</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingLeft: "60px", paddingRight: "60px", marginTop: "40px" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4} justify={"left"}>
            <Item>
              <h2>Declarative</h2>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
              <p style={{ marginTop: "20px" }}>
                Declarative views make your code more predictable and easier to
                debug.
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h2>Component-Based</h2>
              Build encapsulated components that manage their own state, then
              compose them to make complex UIs.
              <p style={{ marginTop: "20px" }}>
                Since component logic is written in JavaScript instead of
                templates, you can easily pass rich data through your app and
                keep state out of the DOM.
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h2>Learn Once, Write Anywhere</h2>
              We don’t make assumptions about the rest of your technology stack,
              so you can develop new features in React without rewriting
              existing code.
              <p style={{ marginTop: "20px" }}>
                React can also render on the server using Node and power mobile
                apps using React Native.
              </p>
            </Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <ReactFeatures
          header={featuresData[0].header}
          body={featuresData[0].body}
          footer={featuresData[0].footer}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <ReactFeatures
          header={featuresData[1].header}
          body={featuresData[1].body}
          footer={featuresData[1].footer}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <ReactFeatures
          header={featuresData[2].header}
          body={featuresData[2].body}
          footer={featuresData[2].footer}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <ReactFeatures
          header={featuresData[3].header}
          body={featuresData[3].body}
          footer={featuresData[3].footer}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
