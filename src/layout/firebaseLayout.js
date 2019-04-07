import React from "react"

import FirabseService from "../services/firebase.js"
import FirebaseProvider from '../containers/FirebaseProvider';

const Layout = ({ children }) => (
  <FirebaseProvider firebase={FirabseService}>
    {children}
  </FirebaseProvider>
)

export default Layout
