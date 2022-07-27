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
          userId = 6826;
      }
      this.props.getUsersProfile(userId);
      this.props.getStatus(userId)
  };


  render() {
    
      return (
          <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
      )
  }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getStatus, getUsersProfile, updateStatus}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer);
