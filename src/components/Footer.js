import React from "react";
import './Footer.css';

class App extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props) {
    super(props);
    this.state = {
    /*  */ 
    };
  }
  render() {
    return (
        <footer className="footer" role="contentinfo" style={{opacity: "1",bottom: "-140px"}}>
      <div className="row">
        <div className="left">
          <a className="transition" href="#copyright">© 2023 HarryStyle</a>
        </div>

        <nav className="nav-footer">
          <ul>
            <li className="page_item"><a href="#about">About</a></li>
            <li className="page_item"><a href="#contact">Contact</a></li>
            <li className="page_item"><a href="#portfolio">Portfolio</a></li>
            <li className="page_item"><a href="#blog">Blog</a></li>
          </ul>
        </nav>

        <div className="right">
          <a
            className="facebook"
            href="https://www.facebook.com/profile.php?id=100022095913969"
            >go-to-facebook</a
          >
        </div>
        <div className="right">
          <a className="twitter" href="https://twitter.com/Harikes49467657?s=09"
            >go-to-twitter</a
          >
        </div>
        <div className="right">
          <a
            className="linkedin"
            href="https://in.linkedin.com/in/harikesh-patel-357171191?trk=people-guest_people_search-card"
            >go-to-linkedin</a
          >
        </div>
        <div className="right">
          <a
            className="insta"
            href="https://instagram.com/111_harry_style?igshid=1m68iw0bipjg0"
            >go-to-insta</a
          >
        </div>
      </div>

      <div className="gradient-white">
        <a
          className="top"
          href="#top"
          onclick={this.smoothScroll()}
          title="Go to top"
          activeClass="active"
          >back-to-top</a
        >
      </div>
    </footer>
    )
  }
};

export default App;
