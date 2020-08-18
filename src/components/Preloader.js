import { useState, useEffect } from 'react'

const Preloader = () => {
	const [classes, setClasses] = useState('')

	useEffect(() => {
		setClasses('visible')

		window.addEventListener('scroll', () => setClasses('visible done'), { capture: true, once: true })
	}, [])

	return (
		<div className={`absolute inset-0 z-30 preloader ${classes} w-screen bg-gray-900 flex items-center justify-center`} style={{ height: '100.1vh' }}>
			<svg x="0px" y="0px" viewBox="0 0 125 125" className="w-full max-w-lg h-auto animate-spin preloader">
				<path className="fill-none" id="a" d="M107.5,62.5c0,24.9-20.1,45-45,45s-45-20.1-45-45s20.1-45,45-45S107.5,37.6,107.5,62.5z" />
				<text>
					<textPath xlinkHref="#a" className="fill-current text-white text-lg uppercase">
						Our logo is a fucking dot
					</textPath>
				</text>
				<path className="fill-none stroke-current text-gray-900 path" strokeWidth="21.5333" strokeMiterlimit="10" strokeDasharray="320px" d="M113.5,62.5c0,28.2-22.8,51-51,51s-51-22.8-51-51s22.8-51,51-51S113.5,34.3,113.5,62.5" />
			</svg>
			<div className="absolute bottom-6 inset-x-0 flex justify-center">
				<svg viewBox="0 0 20 20" fill="currentColor" className="text-white w-6 h-6 animate-bounce">
					<path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
				</svg>
			</div>
		</div>
	)
}

export default Preloader
