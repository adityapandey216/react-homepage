//component for JSX code snippets which are enlisted along with react features in react homepage
import "./Snippets.css";

function Snippets() {
  return (
    <div>
      <div className="container">
        <div className="snippet-container">
          <div className="snippet-header">LIVE JSX EDITOR</div>
          <div className="snippet-content">
            <div className="snippet">
              <span className="token keyword">class</span>
              <span className="token class-name">HelloMessage</span>
              <span className="token keyword">extends</span>
              <span className="token class-name">
                React
                <span className="token punctuation">.</span>
                Component
              </span>
              <span class="token punctuation">{"{"}</span>
              <div style={{ paddingLeft: "12px" }}>
                <span className="token function">render</span>
                <span className="token punctuation">{"("}</span>
                <span className="token punctuation">{")"}</span>
                <span class="token punctuation">{"{"}</span>
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <span class="token keyword">return</span>
                <span class="token punctuation">{"("}</span>
              </div>
              <div style={{ paddingLeft: "40px" }}>
                <span className="token punctuation">{"<"}</span>
                <span className="token tag">div</span>
                <span className="token punctuation">{">"}</span>
              </div>
              <div style={{ paddingLeft: "60px" }}>
                <span style={{ color: "white" }}>Hello</span>
                <span class="token punctuation">{"{"}</span>
                <span className="token keyword">this</span>
                <span class="token punctuation">.</span>
                <span style={{ color: "white" }}>props</span>
                <span class="token punctuation">.</span>
                <span style={{ color: "white" }}>name</span>
                <span class="token punctuation">{"}"}</span>
              </div>
              <div style={{ paddingLeft: "40px" }}>
                <span className="token punctuation">{"<"}</span>
                <span className="token tag">div</span>
                <span className="token punctuation">{">"}</span>
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <span class="token punctuation">{")"}</span>
              </div>
              <div style={{ paddingLeft: "12px" }}>
                <span class="token punctuation">{"}"}</span>
              </div>
              <div>
                <span class="token punctuation">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="result-container">
          <div className="result-header">RESULT</div>
          <div className="result-content">
            <span style={{ paddingLeft: "5px" }}>Hello Taylor</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snippets;
