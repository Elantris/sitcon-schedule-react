import React, { Component } from 'react'
import { render } from 'react-dom'
import Schedule from './schedule.jsx'

class App extends Component {
	render() {
		return (
			<Schedule />
		)
	}
}

render(<App />, document.getElementById('main'))
