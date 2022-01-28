import React from 'react';
import './App.css';

import { MainFrame } from './components/main-frame/main-frame.component';
import {MenuBar} from './components/menu-bar/menu-bar.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {

  constructor () {
    super()

    this.state = {
      place: '',
      weather: 0,
      placeholder: 'Search a city...',
      apiKey: '0ef083f19aa04e93918154306222801',
      searchedPlace: 'Coimbra'
    };
  }

  getWeather = async (place) => {

    try {
      fetch('http://api.weatherapi.com/v1/current.json?key='+this.state.apiKey+'&q='+place+'&aqi=no&lang=pt')
      .then(r => r.json())
      .then(r => this.setState({weather: r.current.temp_c}))

    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getWeather(this.state.searchedPlace)
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({searchedPlace: this.state.place})
    this.getWeather(this.state.searchedPlace)
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({place: e.target.value})
  }

  render() {

    return (
    <div className='App'>
      <MenuBar place={this.state.place} placeholder={this.state.placeholder}>
        <SearchBox placeholder={this.state.placeholder} handleChange = {this.handleChange} handleSearch = {this.handleSearch}/>
      </MenuBar>
      <MainFrame place={this.state.searchedPlace} weather = {this.state.weather} />
      <h1>{this.state.searchedPlace} - {this.state.weather}ºC</h1>
    </div>
    );
  }
}

export default App;
