import type { AppProps } from 'next/app'

import Menu from '../components/Menu'

import '../styles/design_tokens.css'
import '../styles/globals.css'


const MyApp = ({Component, pageProps}: {Component: React.FC<any>, pageProps: AppProps}) => {
	return <>
		<Menu />
		<Component {...pageProps} />
	</>	
}

export default MyApp
