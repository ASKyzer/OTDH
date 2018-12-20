import React, { Component } from 'react';
import './App.css';

// import Container from './components/Container/Container';
// import Row from './components/Row/Row';
// import Content from './components/Content/Content';
import ParallaxWindow from './components/ParallaxWindow/ParallaxWindow';
import Gallery, { propsGallery } from './components/Gallery/Gallery'

// import about from './data/content/about/about.json';
// import house from './data/images/gallery/house.json';

// const imgArray = house.images;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = propsGallery
    // this.state = Object.assign({}, this.state, propsCard, propsGallery)
  }

  render() {

    // const sections = this.state.map(i => {
    //   return <SectionBanner key={Math.random()} {...i.SectionBanner}/>
    // })

    return (
      <div className="App">
        {/* <CardSFC {...this.state}/> */}
        <Gallery {...this.state}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ParallaxWindow 
          side="cut-right" 
          blur='0'
          imagePath='./whaleshark.jpeg'
          imageAlt='Ocean Tigers Dive House'
          strength='500'
          content="Content Optional" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}

export default App;
