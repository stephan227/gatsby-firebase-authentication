import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

const Index = (props) => (
  <Layout>
    <Status auth={props.auth}  user={props.user}  />
    <View title="Simple Authentication Example">
      <p>
        This is a simple example of Gatsby Firebase Authentication using FirebaseUI-web-react with redirect.
      </p>
      <p>

      <a href="https://github.com/stephan227/gatsby-firebase-authentication">
        Gatsby Firebase Authentication Github repo
      </a>
      </p>
      <p>
        For the full experience, go to
        {` `}
        <Link to="/app/profile">your profile</Link>.
      </p>
    </View>
  </Layout>
)

export default Index
