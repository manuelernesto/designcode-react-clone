import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"


function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
