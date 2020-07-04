import React from 'react'
//引用highlight样式
// import 'highlight.js/styles/dracula.css'
import '../styles/tailwind.css'
import '../styles/markdown.css'
import '../styles/drucula.css'

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App
