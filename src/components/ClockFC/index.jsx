import React, { useState, useEffect } from 'react'
import style from './style.module.css'

const ClockFC = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		setDate(new Date(0,0,0,0))
		 setInterval(() => { setDate(new Date(Date.now()-date)) }, 1000)
		 date.setHours(date.getHours()+3)	
	}, [])

	useEffect(() => {
		 clearInterval()
	}, [date])
	
	//console.log(typeof date.toLocaleTimeString())
	return (
		<p className={style.p}>{date.toLocaleTimeString()}</p>
	)
}

//.toLocaleTimeString()

export default React.memo(ClockFC)