import React from 'react';
import './style/Profile.css';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePic: 'https://via.placeholder.com/150',
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Page</h1>
      </div>
      <div className="profile-content">
        <div className="profile-pic">
          <img src={user.profilePic} alt="Profile" />
        </div>
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
