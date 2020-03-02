import React, { useState, useEffect } from 'react'
import style from './style.module.css'

const ClockFC = () => {
	const [time, setTime] = useState(0)
	const [date, setDate] = useState(Date.now())
	console.log('render')
	useEffect(() => {
		console.log(' componentDidMount: компоненты был смонтирован, выполняется после render')
		const interval = setInterval(() => {
			setTime(Date.now() - date)
		}, 1000)
		return () => {
			console.log(' componentWillUnmount: компонент будет размонтирован, выполняется в конце жизненного цикла')
			clearInterval(interval)
		}
	}, [])

	useEffect(() => console.log(' componentDidUpdate: сравнивает state с предыдущим state, не запускается есть shouldComponentUpdate вернет false'), [time])

	const timeCorrection = () => {
		const timecor = new Date(time)
		timecor.setHours(timecor.getHours() - 3)
		return timecor.toLocaleTimeString()
	}

	///////////////////////////////////

	// import React from 'react'

	// const Timer = () => {
	//   console.log('Рендер был вызван, потому что произошло обновление')
	//   const [time, setTime] = React.useState(0)
	//   const [start] = React.useState(Date.now())

	//   React.useEffect(() => {
	//     console.log('Монтирование компонента Timer')
	//     const timer = setInterval(() => setTime(Date.now() - start), 1000)
	//     return () => {
	//       console.log('Таймер остановлен и размонтирован')
	//       clearInterval(timer)
	//     }
	//   }, [])

	//   React.useEffect(() => {
	//     console.log('Произошло обновление time')
	//   }, [time])

	//   const getTime = () => {
	//     const formattedTime = new Date(time)
	//     const date = formattedTime
	//     date.setHours(date.getHours() - 3)
	//     return date.toLocaleTimeString()
	//   }

	//   return (
	//     <div>
	//       <h2>{getTime()}</h2>
	//     </div>
	//   )
	// }
	// export default React.memo(Timer)



	///////////////////////////////////////////
	// useEffect(() => {
	// 	setInterval(() => { setDate(new Date(new Date() - date ).toLocaleTimeString()) }, 1000)
	// }, [date])

	// useEffect(() => {
	// 	return () => clearInterval()
	// }, [])

	return (
		<p className={style.p}>{timeCorrection()}</p>
	)
}

export default React.memo(ClockFC)