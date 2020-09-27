import { CssBaseline } from '@material-ui/core'
import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React, { Fragment, useEffect } from 'react'
import { AppMain } from '../components/AppMain'
import { AppNavbar } from '../components/AppNavbar'
import { AppSidebar } from '../components/AppSidebar'

/**
 * example https://github.com/mui-org/material-ui/blob/next/examples/nextjs-with-typescript/pages/_app.tsx
 */
const MyApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>AppName</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <Fragment>
        <CssBaseline />
        <AppNavbar></AppNavbar>
        <AppSidebar></AppSidebar>
        <AppMain>
          <Component {...pageProps}></Component>
        </AppMain>
      </Fragment>
    </Fragment>
  )
}

export default MyApp
