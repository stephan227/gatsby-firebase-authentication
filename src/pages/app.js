import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Details from "../components/Details"
import Home from "../components/Home"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = (props) => (
  <Layout {...props}>
    <Status auth={props.auth} user={props.user} />
    <Router>
      <PrivateRoute user={props.user} path="/app/profile" component={Home} />
      <PrivateRoute user={props.user} path="/app/details" component={Details} />
      <Login {...props} path="/app/login" />
    </Router>
  </Layout>
)

export default App
