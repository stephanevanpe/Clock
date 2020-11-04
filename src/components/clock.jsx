import React from 'react';
import './clock.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.ticTac();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	ticTac() {
		this.setState({ time: new Date() });
	}

	getTime() {
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		};

		return this.state.time.toLocaleTimeString('pt-BR', options);
	}

	render() {
		return (
			<div className='clock'>
				<span className='time'>{this.getTime()}</span>
			</div>
		);
	}
}

export default Clock;

