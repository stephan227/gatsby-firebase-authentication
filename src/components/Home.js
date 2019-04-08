import React from "react"
import View from "./View"

const Home = ({user}) => {
  const { displayName } = user;

  return (
    <View title="Your Profile">
      <p>Welcome back, {displayName}!</p>
    </View>
  )
}

export default Home
