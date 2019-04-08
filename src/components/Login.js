import React from "react"
import { navigate } from "gatsby"
import SignInScreen from "./SignInScreen"
import View from "./View"

class Login extends React.Component {
  render() {
    if (this.props.user) {
      navigate(`/app/profile`)
    }
    return (
      <View title="Log In">
        <SignInScreen
          auth={this.props.auth}
        />
      </View>
    )
  }
}

export default Login
