import React from "react"
// import Layout from "./src/components/layout"
import FirebaseLayout from "./src/components/Layout/FirebaseLayout.js"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <FirebaseLayout {...props}>{element}</FirebaseLayout>
}