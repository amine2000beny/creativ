const users = [
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password123'
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password456'
    }
];

function getUserByUsername(username) {
    return users.find(user => user.username === username);
}

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

function addUser(user) {
    users.push(user);
}
