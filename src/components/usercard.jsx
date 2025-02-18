import React from 'react';
import './usercard.css'; // Create a CSS file for styling if needed

const Usercard = () => {
  // Static user details
  const user = {
    profilePhoto: 'https://via.placeholder.com/150', // Placeholder image URL
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main Street, City, Country',
  };

  return (
    <div className="usercard">
      <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default Usercard;
