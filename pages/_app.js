import '../styles/globals.css'
import React from "react"

export const langageCtx = React.createContext();

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState("en")
  return (
    <langageCtx.Provider value={[state,setState]}>
       <Component {...pageProps} />
    </langageCtx.Provider>
  )
}

export default MyApp
