import React from 'react';
import Profile from '../../Profile/Profile';
import {connect} from 'react-redux';
import {setUsersProfile} from './../../../redux/reducerProfile';
import * as axios from 'axios';
import {withRouter} from "react-router-dom";
class ProfileContainer extends React.Component {

  componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = 2;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
          .then(response => {
              this.props.setUsersProfile(response.data);
          });
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);