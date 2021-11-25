//top header navigation bar
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <div className="header">
        <div className="header-items">
          <div id="logo">REACT</div>
          <div className="menu-items">
            <div className="item">Docs</div>
            <div className="item">Tutorial</div>
            <div className="item">Blog</div>
            <div className="item">Community</div>
          </div>
          <div className="search-box">
              <input type="search" class="search" placeholder="Search"/>
          </div>
          <div class="item">v17.02</div>
          <div class="item">Languages</div>
          <div class="item">Github</div>

        </div>
      </div>
    </div>
  );
}
export default NavBar;
