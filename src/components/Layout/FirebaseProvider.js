import FirabseService from "../../services/firebase.js"

import React from 'react';
class FirebaseProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firebase: FirabseService,
      user: null
    }
  }
  componentDidMount = () => {
    const { firebase } = this.state;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user: user});
      } else {
        firebase.auth().signOut()
        this.setState({user: null})        
      }
    });
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { auth: this.state.firebase.auth, user: this.state.user })
    );
    return childrenWithProps;
  }
}

export default FirebaseProvider;