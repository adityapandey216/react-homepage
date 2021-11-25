//The react features enlisted along with JSX snippets
import "./ReactFeatures.css";
import Snippets from "./Snippets";
function ReactFeatures(props) {

  return (
    <div>
      <div className="info-container">
        <div className="info" style={{paddingLeft:"0px"}}>
          <h1 style={{ color: "black", fontWeight: "bolder" }}>
            {props.header}
          </h1>
          <p>{props.body}</p>
          <p>{props.footer}</p>
        </div>
        <div>
            <Snippets/>
        </div>
      </div>
    </div>
  );
}
export default ReactFeatures;
