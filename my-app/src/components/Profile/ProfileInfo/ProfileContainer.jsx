import React from 'react';
import Profile from '../../Profile/Profile';
import {connect} from 'react-redux';
import {withRouter} from "../../HOC/withRouter"
import { getUsersProfile } from "../../../redux/reducerProfile";
import { withAuthRedirect } from './../../HOC/withAuthRedirect';
import {compose} from "redux";
class ProfileContainer extends React.Component {

  componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = 2;
      }
      this.props.getUsersProfile(userId)
  }


  render() {
      return (
          <Profile {...this.props} />
      )
  }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);
