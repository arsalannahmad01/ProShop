import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@test.com',
        password: bcrypt.hashSync('12345', 10)
    },
    {
        name: 'arsalan',
        email: 'arsalan@test.com',
        password: bcrypt.hashSync('12345', 10)
    }
]

export default users