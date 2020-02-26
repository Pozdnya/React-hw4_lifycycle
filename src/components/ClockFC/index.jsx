import React, { useState, useEffect } from 'react'

export default () => {
	const timeCorection = 10800000
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => { setDate(new Date(Date.now()-date).toLocaleTimeString()) }, 1000)
		return () => clearInterval(interval)
	}, [date])
	console.log(date)
	return (
		<p>date</p>
	)
}

//.toLocaleTimeString()