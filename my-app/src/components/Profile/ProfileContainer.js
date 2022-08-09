import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from "../HOC/withRouter"
import { getStatus, getUsersProfile, updateStatus } from "../../redux/reducerProfile";
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let { userId } = this.props.match.params
      if (!userId) {
          userId = this.props.authorizedId;
                }
      this.props.getUsersProfile(userId);
      this.props.getStatus(userId)
  };


  render() {
    
      return (
          <Profile {...this.props} 
          profile={this.props.profile}
          status={this.props.status} 
          updateStatus={this.props.updateStatus}/>
      )
  }
}




let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, {getStatus, getUsersProfile, updateStatus}),
    withRouter,
   withAuthRedirect
)(ProfileContainer);
