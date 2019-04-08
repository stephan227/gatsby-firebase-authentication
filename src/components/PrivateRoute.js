import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
    if (!user) {
    // If we’re not logged in, redirect to the login page.
    navigate(`/app/login`, { replace: true })
    return null
  }

  return <Component user={user} {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
}

export default PrivateRoute
