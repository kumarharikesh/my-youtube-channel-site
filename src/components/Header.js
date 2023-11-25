import React from "react";
import './Header.css';


class App extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props) {
    super(props);
    this.state = {
      modelDisplay: "none",
      panelWidth: "0",
      transition: "0.3s",
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  
openNav() {this.setState({modelDisplay: "block", panelWidth: "200px"})}
closeNav() {this.setState({modelDisplay: "none", panelWidth: "0px"})}

  render() {
    return (
  <body>
    <header idName="header">
      <div className="row">
        <div className="col-12">
          <div idName="logodiv">
            <a idName="logo" 
              className="logo" 
              href="https://kumarharikesh-portfolio.netlify.app/" 
              title="A home is made of hopes and dreams where our story begins…"
            >H</a>
          </div>
          <div className="openbtn" onClick={this.openNav}>&#9776;</div>

          <nav>
            <ul idName="nav-header" className="nav-header">
              <li className="page-item">
                <a href="https://kumarharikesh-portfolio.netlify.app/" 
                   title="To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
                >About</a>
              </li>
              <li className="page-item">
                <a href="https://kumarharikesh-portfolio.netlify.app/"
                   title="Contacts added but not one is worthy enough to remain as their priority."
                >Contact</a>
              </li>
              <li className="page-item">
                <a href="https://kumarharikesh-portfolio.netlify.app/"
                   title="Check ot my portfolio."
                 >Portfolio</a>
              </li>
              <li className="page-item">
                <a href="https://kumarharikesh-portfolio.netlify.app/blogs.html"
                   title="Read the interesting blogs."
                 >Blog</a>
              </li>

              <li style={{marginLeft: "30px"}}>
                <ul className="social">
                  <li className="git">
                    <span
                      id="email-tooltip"
                      tooltip="Click to copy my email address to your clipboard 😀"
                      ><a
                        id="github"
                        href="https://github.com/kumarharikesh"
                        title="Checkout my git Repo"
                        data-clipboard-text="harikeshpatel24@gmail.com"
                        >github</a
                      ></span
                    >
                  </li>
                  <li className="twitter">
                    <a
                      href="https://twitter.com/Harikes49467657?s=09"
                      title="Follow me on Twitter"
                      target="_blank" rel="noreferrer"
                      >twitter</a
                    >
                  </li>
                  <li className="linkedin">
                    <a
                      href="https://in.linkedin.com/in/harikesh-patel-357171191?trk=people-guest_people_search-card"
                      title="Connect with me on Linkedin"
                      target="_blank" rel="noreferrer"
                      >linkedin</a
                    >
                  </li>
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/profile.php?id=100022095913969"
                      title="Like me on Facebook"
                      target="_blank" rel="noreferrer"
                      >facebook</a
                    >
                  </li>
                  <li className="hackerrank">
                    <a
                      href="https://www.hackerrank.com/Harikesh_Patel/"
                      title="Follow me on Hackerrank"
                      target="_blank" rel="noreferrer"
                      >hackerrank</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
      
    <div className="model-section" style={{display: this.state.modelDisplay,transition: this.state.transition}}>
      <div className="panel-content" id="sidepanel" style={{width: this.state.panelWidth, transition: this.state.transition}}>
        <div className="closediv"><a href="#njn" className="closebtn" onClick={this.closeNav}>&times;</a></div>
        <ul>
          <li><a href="https://github.com/kumarharikesh" className="anchor">Github</a><span className="nav-marker"></span></li>
          <li><a href="https://twitter.com/Harikes49467657?s=09" className="anchor">Twitter</a><span className="nav-marker"></span></li>
          <li><a href="https://in.linkedin.com/in/harikesh-patel-357171191?trk=people-guest_people_search-card" className="anchor">Linkedin</a><span className="nav-marker"></span></li>
          <li><a href="https://www.facebook.com/profile.php?id=100022095913969" className="anchor">Facebook</a><span className="nav-marker"></span></li>
          <li><a href="https://www.hackerrank.com/harikeshpatel24?hr_r=1" className="anchor">Hackerrank</a><span className="nav-marker"></span></li>
        </ul>
      </div>
    </div>
    </body>)
  }
};
export default App;
