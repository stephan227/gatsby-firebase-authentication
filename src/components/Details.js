import React from "react"
import View from "./View"

const Details = ({user}) => {
  const { displayName, email, emailVerified } = user;
  return (
    <View title="Your Details">
      <ul>
        <li>Display name: {displayName}</li>
        <li>Email address: {email}</li>
        <li>Email Verified: {`${emailVerified}`}</li>
      </ul>
    </View>
  )
}

export default Details
