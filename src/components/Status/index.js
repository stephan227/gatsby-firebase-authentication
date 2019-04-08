import React from "react"
import { Link } from "@reach/router"
import styles from "./status.module.css"

export default (props) => {
  const { user } = props;
  let details
  if (!user) {
    details = (
      <p className={styles[`status__text`]}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </p>
    )
  } else {
    const { displayName, email } = user;
    const { auth } = props;
    details = (
      <p className={styles[`status__text`]}>
        Logged in as {displayName} ({email}
        )!
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            auth().signOut()
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className={styles.status}>{details}</div>
}
