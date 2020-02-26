import React, { useState } from 'react'
import play from '../img/play.svg'
import pause from '..//img/pause.svg'
import style from './style.module.css'
import ClockFC from '../ClockFC/index'

let Button = () => {
	let [clicked, setClicked] = useState(false)
	const timeCorection = 10800000

	return (
		<>
			<div className={style.wrapper}>
				<div>
					<button className={style.button} onClick={() => setClicked(!clicked)}>
						{!clicked ? <img src={play} alt="" /> : <img src={pause} alt="" />}
					</button>
				</div>
				{(clicked && <div className={style.clock}> <ClockFC /> </div>) || <p className={style.p}>{new Date(0 - timeCorection).toLocaleTimeString()}</p>}
			</div>
		</>
	)
}

export default Button