import React from 'react';
import Profile from '../../Profile/Profile';
import {connect} from 'react-redux';
import {setUsersProfile} from './../../../redux/reducerProfile';
import * as axios from 'axios';
import { useParams } from 'react-router-dom';

class ProfileContainer extends React.Component  {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/userId`)
    .then((response) => {
      this.props.setUsersProfile(response.data)  
      });
  };

  render (){
  return (
    <div >
      <Profile {...this.props} profile={this.props.profile}/>
      
    </div>
  )
};
}
let mapStateToProps=(state)=>({
  profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUsersProfile}  )(ProfileContainer);

