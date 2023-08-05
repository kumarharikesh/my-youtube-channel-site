import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './videoSlider.css';

// const PREFIX_URL ='https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class MyVideoSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: true,
      fullScreen_ThumbnailWidth: "50%",
      fullScreen_ytMarginLR: "0 25% 0 25%",
      toggleSettingTop: "120%",
      settingDisplay: "none",
      toggleSetting: "⚙️",
      settingTitle: "Show Video Settings",
    };

    this.images = [
      {
        thumbnail: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/Infinity1.png`,
        original: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/Infinity1.png`,
        embedUrl:'https://www.youtube.com/embed/4suWp7p1EOw?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/tmbnl_InTheEnd0.png`,
        original: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/tmbnl_InTheEnd0.png`,
        embedUrl:'https://www.youtube.com/embed/_xDYZSM3IT0?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/Billie+Eilish.png`,
        original: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/Billie+Eilish.png`,
        embedUrl:'https://www.youtube.com/embed/zKRIkNdjb8M?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/a+dog2.png`,
        original: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/a+dog2.png`,
        embedUrl:'https://www.youtube.com/embed/NWazD5Tm7r8?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/mushroom+Planet.png`,
        original: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/mushroom+Planet.png`,
        embedUrl:'https://www.youtube.com/embed/PXlN8gAALwk?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/Martian+Civilization.png`,
        original: `https://harikesh-bucket-1.s3.ap-south-1.amazonaws.com/TCVZ/Martian+Civilization.png`,
        embedUrl:'https://www.youtube.com/embed/sIOdp3X9ars?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this),
      },
    ]

      // {
      //   thumbnail: `${PREFIX_URL}1t.jpg`,
      //   original: `${PREFIX_URL}1.jpg`,
      //   originalClass: 'featured-slide',
      //   thumbnailClass: 'featured-thumb',
      //   description: 'Custom class for slides & thumbnails',
      // },
    // ].concat(this._getStaticImages());
  }

  _onImageClick(event) {
    console.debug(
      'clicked on image',
      event.target,
      'at index',
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
    if(!fullScreenElement){
      this.setState({fullScreen_ThumbnailWidth: "50%",
      fullScreen_ytMarginLR: "0 25% 0 25%",
      toggleSettingTop : "120%",
     });
      }else{this.setState({fullScreen_ThumbnailWidth: "83.3%",
      fullScreen_ytMarginLR: "0 8.3% 0 8.3%",
      toggleSettingTop : "120%",
     });
      }
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({ [state]: event.target.value });
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  // _getStaticImages() {
  //   let images = [];
  //   for (let i = 2; i < 4; i++) {
  //     images.push({
  //       original: `${PREFIX_URL}${i}.jpg`,
  //       thumbnail: `${PREFIX_URL}${i}t.jpg`,
  //     });
  //   }

  //   return images;
  // }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.setState((prevState) => ({
        showVideo: {
          ...prevState.showVideo,
          [url]: !Boolean(prevState.showVideo[url])
        }}));  

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }
  closeYTvideo(url) {
    this.setState((prevState) => ({
        showVideo: {
          ...prevState.showVideo,
          [url]: !Boolean(prevState.showVideo[url])
        }
    }));  
}
toggleSettings(){
  if(this.state.toggleSetting==="⚙️"){
    this.setState({
      settingDisplay: "block",
      toggleSetting: "🔩",
      settingTitle: "Hide Video Settings",
    });
  }else{
    this.setState({
      settingDisplay: "none",
      toggleSetting: "⚙️",
      settingTitle: "Show Video Settings",
    });
  }
}

  _renderVideo(item) {
    return (<div className='video-box'>
    <div>
        {this.state.showVideo[item.embedUrl] ? (<div className='source-video-box' style={{margin: this.state.fullScreen_ytMarginLR}}> 
        <a className="close-video" href={this.closeYTvideo.bind(this, item.embedUrl)} onClick={this.closeYTvideo.bind(this, item.embedUrl)}>𐤕</a>
        <div className="video-wrapper">
              <iframe width="1280" height="720" title='YouTube Video' src={item.embedUrl} allowFullScreen ></iframe>
            </div> 
          </div>) : 
          (<a href={this._toggleShowVideo.bind(this, item.embedUrl)} onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
          <div className="play-button"></div>
            <img className="image-gallery-image" alt='img gallery' style={{width: this.state.fullScreen_ThumbnailWidth, border: "2px solid green"}} src={item.original} />
            {item.description && (<span className="image-gallery-description" style={{ right: '0', left: 'initial', borderRadius: "2rem 0 0 2rem" }}>{item.description}</span>)}
          </a>)}
      </div><sh></sh>
      </div>
    );
  }

  render() {
    return (
      <section className="app">
        <ImageGallery
          ref={(i) => (this._imageGallery = i)}
          items={this.images}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />

        <div className="setting-app"> 
        <span className='toggle-setting-btn' style={{top: this.state.toggleSettingTop}} title={this.state.settingTitle} onClick={this.toggleSettings.bind(this)}>{this.state.toggleSetting}</span>
          <div className="setting-content" style={{display: this.state.settingDisplay}}>
            <ul className="app-buttons">
              <li>
                <div className="app-interval-input-group">
                  <span className="app-interval-label">Play Interval</span>
                  <input
                    className="app-interval-input"
                    type="text"
                    onChange={this._handleInputChange.bind(this,'slideInterval')}
                    value={this.state.slideInterval}
                  />
                </div>
              </li>

              <li>
                <div className="app-interval-input-group">
                  <span className="app-interval-label">Slide Duration</span>
                  <input
                    className="app-interval-input"
                    type="text"
                    onChange={this._handleInputChange.bind(this,'slideDuration')}
                    value={this.state.slideDuration}
                  />
                </div>
              </li>

              <li>
                <div className="app-interval-input-group">
                  <span className="app-interval-label">
                    Thumbnail Bar Position
                  </span>
                  <select
                    className="app-interval-input"
                    value={this.state.thumbnailPosition}
                    onChange={this._handleThumbnailPositionChange.bind(this)}
                  >
                    <option value="bottom">Bottom</option>
                    <option value="top">Top</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              </li>
            </ul>

            <ul className="app-checkboxes">
              <li>
                <input
                  id="infinite"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this, 'infinite')}
                  checked={this.state.infinite}
                />
                <label htmlFor="infinite">allow infinite sliding</label>
              </li>
              <li>
                <input
                  id="show_fullscreen"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this,'showFullscreenButton')}
                  checked={this.state.showFullscreenButton}
                />
                <label htmlFor="show_fullscreen">show fullscreen button</label>
              </li>
              <li>
                <input
                  id="show_playbutton"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this,'showPlayButton')}
                  checked={this.state.showPlayButton}
                />
                <label htmlFor="show_playbutton">show play button</label>
              </li>
              <li>
                <input
                  id="show_bullets"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this,'showBullets')}
                  checked={this.state.showBullets}
                />
                <label htmlFor="show_bullets">show bullets</label>
              </li>
              <li>
                <input
                  id="show_thumbnails"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this,'showThumbnails')}
                  checked={this.state.showThumbnails}
                />
                <label htmlFor="show_thumbnails">show thumbnails</label>
              </li>
              <li>
                <input
                  id="show_navigation"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this, 'showNav')}
                  checked={this.state.showNav}
                />
                <label htmlFor="show_navigation">show navigation</label>
              </li>
              <li>
                <input
                  id="show_index"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this, 'showIndex')}
                  checked={this.state.showIndex}
                />
                <label htmlFor="show_index">show index</label>
              </li>
              <li>
                <input
                  id="is_rtl"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(this, 'isRTL')}
                  checked={this.state.isRTL}
                />
                <label htmlFor="is_rtl">is right to left</label>
              </li>
              <li>
                <input
                  id="slide_on_thumbnail_hover"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(
                    this,
                    'slideOnThumbnailOver'
                  )}
                  checked={this.state.slideOnThumbnailOver}
                />
                <label htmlFor="slide_on_thumbnail_hover">
                  slide on mouse over thumbnails
                </label>
              </li>
              <li>
                <input
                  id="use_window_keydown"
                  type="checkbox"
                  onChange={this._handleCheckboxChange.bind(
                    this,
                    'useWindowKeyDown'
                  )}
                  checked={this.state.useWindowKeyDown}
                />
                <label htmlFor="use_window_keydown">use window keydown</label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default MyVideoSlider;