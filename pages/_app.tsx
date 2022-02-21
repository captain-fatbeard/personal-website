import type { AppProps } from 'next/app'
import { FC } from 'react'

import Menu from '../components/Menu'

import '../styles/globals.css'


const MyApp = ({Component, pageProps}: {Component: FC<any>, pageProps: AppProps}) => {
	return <>
		<Menu />
		<Component {...pageProps} />
	</>	
}

export default MyApp
