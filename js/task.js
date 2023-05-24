import users from './users.js';

// Task 1
// Get an array of names of all users (name field).

const getUserNames = users => {
return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task 2
// Get an array of user objects based on eye color (eyeColor field).

const getUsersWithEyeColor = (users, color) => {
return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [object Moore Hensley, object Sharlene Bush, object Carey Barr]

// Task 3
// Get an array of user names based on gender (gender field).

const getUsersWithGender = (users, gender) => {
return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // ['Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

// Task 4
// Get an array of only inactive users (isActive field).

const getInactiveUsers = users => {
return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [object Moore Hensley, object Ross Vazquez, object Blackburn Dotson]

// Task 5
// Get a user (not an array) by email (email field, it is unique).

const getUserWithEmail = (users, email) => {
return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {object user Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {object user Elma Head}

// Task 6
// Get an array of users within the age range from min to max (age field).

const getUsersWithAge = (users, min, max) => {
return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [object Ross Vazquez, object Elma Head, object Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [object Moore Hensley, object Sharlene Bush, object Blackburn Dotson, object Sheree Anthony]

// Task 7
// Get the total balance of all users (balance field).

const calculateTotalBalance = users => {
return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// Task 8
// Array of names of all users who have a friend with the specified name.

const getUsersWithFriend = (users, friendName) => {
return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // ['Sharlene Bush', 'Sheree Anthony']
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // ['Elma Head', 'Sheree Anthony']

// Task 9
// Array of names (name field) of people sorted by the number of their friends (friends field).

const getNamesSortedByFriendsCount = users => {
return users.slice().sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez']

// Task 10
// Get an array of all skills of all users (skills field), ensuring that there are no duplicate skills, and they are sorted in alphabetical order.

const getSortedUniqueSkills = users => {
return users.flatMap(user => user.skills).sort().filter((skill, index, arr) => arr.indexOf(skill) === index);
};

console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']