import '../scss/styles.scss'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Punct</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
