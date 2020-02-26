import React from 'react'
import Clock from '../Clock/index'
import style from './style.module.css'
import play from '../img/play.svg'
import pause from '../img/pause.svg'
// import ClockFC from '../ClockFC/index'

const timeCorection = 10800000

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			click: false
		}
	}

	shouldComponentUpdate(nextState) {
		return nextState !== this.state
	}

	render() {
		return (
			<>
				<div className={style.wrapper}>
					<div>
						<button className={style.button} onClick={() => this.setState({
							click: !this.state.click
						})
						}
						>
							{!this.state.click ? <img src={play} alt="" className={style.img} /> : <img src={pause} alt="" className={style.img} />}
						</button>
					</div>
					{(this.state.click && <div className={style.clock}><Clock /></div>) || <p className={style.p}>{new Date(0 - timeCorection).toLocaleTimeString()}</p>}
				</div>
			</>
		)
	}
}
export default Button