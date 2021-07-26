const bcrypt = require('bcryptjs');
const db = require('./db');
const Role = require('./role');

module.exports = createTestUser;

async function createTestUser() {
    if ((await db.User.countDocuments({})) === 0) {
        const user = new db.User({
            firstName: 'Gordon',
            lastName: 'Freeman',
            username: 'test',
            email: "freeman@blackmesa.com",
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.Admin
        });
        await user.save();

        const user1 =new db.User({
            firstName: 'Alyx',
            lastName: 'Vance',
            username: 'alyx',
            email: "alyx@resitance.com",
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.User
        });
        await user1.save();

        const user2 =new db.User({
            firstName: 'Wallace',
            lastName: 'Breen',
            username: 'wallace',
            email: "breen@blackmesa.com",
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.User
        });
        await user2.save();

        const user3 =new db.User({
            firstName: 'Barney',
            lastName: 'Calhoun',
            username: 'barney',
            email: "calhoun@blackmesa.com",
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.User
        });
        await user3.save();

        const user4 =new db.User({
            firstName: 'Eli',
            lastName: 'Vance',
            username: 'eli',
            email: "vance@blackmesa.com",
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.User
        });
        await user4.save();
    }
}
