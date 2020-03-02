import React from 'react'
import style from './style.module.css'


const timeCorection = 10800000

export default class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			seconds: new Date(0, 0, 0, 0).toLocaleTimeString(),
			start: Date.now()
		}
	}

	componentDidMount() {
		console.log(' componentDidMount: компоненты был смонтирован, выполняется после render')
		this.interval = setInterval(() => this.setState({ seconds: new Date(Date.now() - this.state.start - timeCorection).toLocaleTimeString() }), 1000)
	}
	//////////////////update

	shouldComponentUpdate(nextState) {
		console.log(' shouldComponentUpdate: вызывывается перед render в случае обновления props или state. Должно вернуть true')
		return nextState !== this.state
	}

	componentDidUpdate(prevState) {
		console.log(' componentDidUpdate: сравнивает state с предыдущим state, не запускается есть shouldComponentUpdate вернет false')
		return prevState !== this.state
	}

	//////////////////unmounting

	componentWillUnmount() {
		console.log(' componentWillUnmount: компонент будет размонтирован, выполняется в конце жизненного цикла')
		clearInterval(this.interval)
	}


	render() {
		console.log('render')
		return <p className={style.p}>{this.state.seconds}</p>
	}
}

