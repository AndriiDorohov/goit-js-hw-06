# Admission criteria

- The repository `goit-js-hw-06` has been created
- When submitting homework, there is a link to the source files in the repository
- All tasks are performed in a single file, into which the array is imported
  users.
- The names of variables and functions are clear, descriptive
- The code is formatted with Prettier

# TK

Write functions that use iterating array methods (no `for`,
`splice', etc.) perform the following operations on an array
of user objects from a file [users.js ](./users.js ).

# Task 1

Get an array of names of all users (the `name` field).

```js
const getUserNames = users => {
  // your code
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Task 2

Get an array of user objects by eye color (the `eyeColor` field).

```js
const getUsersWithEyeColor = (users, color) => {
  // your code
};

console.log(getUsersWithEyeColor(users, 'blue')); // [Moore Hensley object, Sharlene Bush object, Carey Barr object]
```

# Task 3

Get an array of user names by gender (the `gender` field).

```js
const getUsersWithGender = (users, gender) => {
  // your code
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Task 4

Get an array of inactive users only (the `isActive` field).

```js
const getInactiveUsers = users => {
  // your code
};

console.log(getInactiveUsers(users)); // [Moore Hensley object, Ross Vazquez object, Blackburn Dotson object]
```

# Task 5

Get the user (not an array) by `email` (the `email` field, it is unique).

```js
const getUserWithEmail = (users, email) => {
  // your code
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com ')); // {user object Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com ')); // {Elma Head user object}
```

# Task 6

Get an array of users falling into the age category from `min` to
`max` years (field `age').

```js
const getUsersWithAge = (users, min, max) => {
  // your code
};

console.log(getUsersWithAge(users, 20, 30)); // [ Ross Vazquez object, Elma Head object, Carey Barr object]

console.log(getUsersWithAge(users, 30, 40));
// [Moore Hensley object, Sharlene Bush object, Blackburn Dotson object, Sheree Anthony object]
``

# Task 7

Get the total balance amount (the 'balance` field) of all users.

```js
const calculateTotalBalance = users => {
  // your code
};

console.log(calculateTotalBalance(users)); // 20916
```

# Task 8

Array of names of all users who have a friend with the specified name.

```js
const getUsersWithFriend = (users, friendName) => {
  // your code
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Task 9

Array of names (field `name') of people sorted according to the number of their
friends (field `friends')

```js
const getNamesSortedByFriendsCount = users => {
  // your code
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Task 10

Get an array of all the skills of all users (the `skills` field), while not
there should be repetitive skills and they should be sorted
alphabetically.

```js
const getSortedUniqueSkills = users => {
  // your code
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```
