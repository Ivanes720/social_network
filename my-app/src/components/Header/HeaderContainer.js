import React from "react";
import Header from "./Header";
  import { connect } from "react-redux";
import {authHeader} from "../../redux/authReducer"

class HeaderContainer extends React.Component {
  componentDidMount() {
this.props.authHeader();
}
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authHeader })(HeaderContainer);

