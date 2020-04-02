import React, {Component} from 'react';
import Navigation from '../Component/Navigation/Navigation'
import Logo from '../Component/Logo/Logo'
import Clarifai from 'clarifai'
import ImageLinkForm from '../Component/ImageLink/ImageLinkForm'
import FaceRecognition from '../Component/FaceRecognition/FaceRecognition'
import Rank from '../Component/Rank/Rank'
import './App.css';
import Particles from 'react-particles-js';
import {parameters} from './ParticleParameters'

const app = new Clarifai.App({
 apiKey: '57a8ba726d614e1385d349c514734011'
});

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchField :'',
      ImageUrl :'',
      box:{},
    }
  }

  calculateFaceLocation = data=>{
    const image = document.getElementById('input-image')
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const width = Number(image.width)
    const height = Number(image.height)
    return{
      leftCol :clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row * height,
      rightCol:width - (clarifaiFace.right_col * width),
      bottomRow:height - (clarifaiFace.bottom_row * height),
    }
  }
   
  displayFaceBox = (obj)=>{
     this.setState({box:obj})
     
  }

 onSearch = (event)=>{
     this.setState({searchField:event.target.value})

  }

  onBtnClicked = ()=>{
    this.setState({ImageUrl:this.state.searchField})
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.searchField)
    .then( response=>{ 
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err=>{
      console.log(err)
    })
  

  }

 render(){
    return (
      <div className="App">
        <Particles className="particle" params={parameters}  />
        <Navigation/>
        <Logo></Logo>
        <Rank></Rank>
        <ImageLinkForm  onSearch={this.onSearch} onBtnClicked = {this.onBtnClicked}></ImageLinkForm>
        <FaceRecognition box={this.state.box} ImageUrl = {this.state.ImageUrl}></FaceRecognition>
      </div>
    );
    }
  }

export default App;
