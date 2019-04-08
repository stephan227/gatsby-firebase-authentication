import React from "react"

import FirebaseProvider from './FirebaseProvider';
const Layout = ({ children }) => (
  <FirebaseProvider>
    {children}
  </FirebaseProvider>
)

export default Layout
