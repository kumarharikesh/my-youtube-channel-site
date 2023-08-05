import React from "react";
import './Comp1.css';
import channel_logo from './img/TCVZdp.png'

class App extends React.Component {
  /** @param {Record<string, any>} props */


  render() {
    return (
<div className="big-container">

{ /*  zoom in out more */}

<div className="Zoom_in_out z-in-o-1"></div>
<div className="Zoom_in_out z-in-o-2"></div>
<div className="Zoom_in_out z-in-o-3"></div>
<div className="Zoom_in_out z-in-o-4"></div>
<div className="Zoom_in_out z-in-o-5"></div>
<div className="Zoom_in_out z-in-o-6"></div>
<div className="Zoom_in_out z-in-o-7"></div>
<div className="Zoom_in_out z-in-o-8"></div>
<div className="Zoom_in_out z-in-o-9"></div>


{ /*  Zoom it out one */}

    <div className="Container">
        <div className="channelOuter">
          <div className="channel-wrapper">
            <a className="my-super-cool-channel" 
              href="https://youtube.com/@TheCreativeVibeZone?sub_confirmation=1">
              <div class="dots-container">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
              <img src={channel_logo} alt="YouTube Channel"/>
            </a>
          </div>
          <div className="circle c1" ></div>
          <div className="circle c2" ></div>
          <div className="circle c3" ></div>
          <div className="circle c4" ></div>
        </div>

{ /*TagLine */} 
        <div className="tagline"><h1>Welcome to our channel site. (◕‿◕) .👋.🌵.💖</h1><sh></sh></div>
        <div className="box-about"><h3>🙶TheCreativeVibeZone🙷 is your one-stop destination for all things creative. 
          Whether you're an artist, a DIY enthusiast, a musician, or simply someone who appreciates the beauty of creativity, 
          this channel is designed just for you!! 💕🌿🌸🦋🌻</h3><sh></sh>
        </div>
    </div>

{/* Slides */}
{/*
    <div className="slider-box">
        <div className="pix-slider">
          <div className="pix-slide"></div>
          <div className="pix-slide1"></div>
        </div>
    </div>
    */}
{/* Purpose */}
<div className="box-purpose"><h3>Subscribe now & become a part of 🙶TheCreativeVibeZone🙷 family. 
  Let's embark on this exciting journey together as we unleash the creative potential that amaze all!!<br></br>
 Join us now, & let your imagination soar & good vibes inspire you!! 🚀🌟✨🍃 </h3> <sh></sh>
</div>

{/* Hover Over */}
    <div className="subscribe_container">  
      <div className="subscribe_button">
          <a href="https://youtube.com/@TheCreativeVibeZone?sub_confirmation=1">Subscribe to our channel →</a>
      </div>
  </div>
  <div className="comp1-area-box"></div>
</div>
)
};}
        
export default App;