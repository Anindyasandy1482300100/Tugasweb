// DOM elements
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const bioElement = document.getElementById('bio');
const profilePic = document.getElementById('profile-pic');

// Initial profile data
let profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Web Developer and Tech Enthusiast.',
    picture: 'https://via.placeholder.com/150'
};

// Function to load profile data into the DOM
function loadProfile() {
    nameElement.innerHTML = `<strong>Name:</strong> ${profileData.name}`;
    emailElement.innerHTML = `<strong>Email:</strong> ${profileData.email}`;
    bioElement.innerHTML = `<strong>Bio:</strong> ${profileData.bio}`;
    profilePic.src = profileData.picture;
}

// Function to update profile data
function changeProfile() {
    profileData = {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        bio: 'Graphic Designer and Creative Thinker.',
        picture: 'https://via.placeholder.com/150/0000FF/808080'
    };
    loadProfile();
}

// Load the initial profile
loadProfile();
