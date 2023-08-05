import React from 'react';
import Header from './components/Header';
import Comp1 from "./components/Comp1";
import Slider from "./components/videoSlider"
import Footer from "./components/Footer";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.headerRef = React.createRef();
      this.scrollToContent = this.scrollToContent.bind(this);
    }
    scrollToContent() {
        // e.preventDefault();
        this.headerRef.current.scrollIntoView({behavior: 'smooth'});
    }
    render() {
      return (
        <main>
            <Header ref={this.headerRef} />
            <Comp1 />
            <Slider />
            <Footer goTo={this.scrollToContent} />
        </main>
      );
    }
  }
  export default App;
