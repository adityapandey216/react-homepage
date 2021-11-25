import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer-header">
        <div className="getting-started-container">
          <div className="gs">Get Started</div>
          <div className="tt">Take the Tutorial</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="column-1" style={{ color: "white" }}>
            Copyright © 2021 Facebook Inc.
          </div>
          <div className="column-2" style={{ color: "white" }}>
          <div>DOCS</div>
          <div className="sub-headers-container">
          <div className="sub-headers">Installation</div>
          <div className="sub-headers">Main Concepts</div>
          <div className="sub-headers">Advanced Guides</div>
          <div className="sub-headers">API Reference</div>
          <div className="sub-headers">Hooks</div>
          <div className="sub-headers">Testing</div>
          <div className="sub-headers">Contributing</div>
          <div className="sub-headers">FAQ</div>
          </div>
          </div>
          <div className="column-2" style={{ color: "white" }}>
          <div>Channels</div>
          <div className="sub-headers-container">
          <div className="sub-headers">Github</div>
          <div className="sub-headers">Stack Overflow</div>
          <div className="sub-headers">Discussion Forums</div>
          <div className="sub-headers">API Reference</div>
          <div className="sub-headers">Reactiflux Chat</div>
          <div className="sub-headers">DEV Community</div>
          <div className="sub-headers">Facebook</div>
          <div className="sub-headers">Twitter</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
