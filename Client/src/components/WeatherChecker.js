import React, { Component } from 'react'
import Header from './Header'
import LocationInput from './LocationInput'
import ResultsTable from './ResultsTable';

class WeatherChecker extends Component {
    state = {
        weathers: []
    }

    addWeather = (weather) => {
        this.setState({
            weathers: [...this.state.weathers, weather]
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <LocationInput addWeather={this.addWeather} />
                <ResultsTable weathers={this.state.weathers} />
            </div>
        )
    }
}

export default WeatherChecker;