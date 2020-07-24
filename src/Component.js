import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        current: {
          clouds: 0
        }
      },
    }
  }

  componentDidMount = () => {

    this.geolocation(this.location);

  }

  geolocation = async position => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position);

    } else {

      console.log('Your browser not support geolocation');

    }

  }

  location = async position => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    /*     console.log(lat, lon); */
    await this.getData(lat, lon);

  }

  getData = async (lat, lon) => {

    this.setState({ loading: true });

    const latitude = lat;
    const longitude = lon;
    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}`;
    const API_KEY = `c196bcdce7bad59b552b30dbfefd9b2b`;

    try {

      const response = await fetch(`${API_URL}&appid=${API_KEY}`);
      const data = await response.json();
      this.setState({
        data: data,
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  render = () => {
    console.log(this.state.data)
    // console.log(this.state.data.daily[0]);
        console.log(this.state.data.current.clouds)

    setTimeout(() => {
      console.log(this.state.data.current.clouds)
    }, 1200);
    return (

      <div></div>
    );
  }
}

export default Component;

