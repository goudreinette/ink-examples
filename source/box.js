const React = require("react")
const { render, Color, Box } = require("ink")

class Counter extends React.Component {
	constructor() {
		super()
		
		this.state = {
			i: 0
		}
	}

	render() {
		return <Box green>{this.state.i} tests passed</Box>
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				i: this.state.i + 1
			})
		}, 100)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}
}

console.clear()
render(<Counter></Counter>)