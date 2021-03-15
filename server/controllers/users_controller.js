let users = [];
//can I add data that will always be there. Say 10 users that are always registered for sales alerts? and then start id at 11?
let id = 0;

module.exports = {
    create: (req, res) => {
        users.push({
            id: id,
            name: req.body.name,
            email: req.body.email
        })
        id++
        res.status(200).send(users)
    },

    read: (req, res) => {
        res.status(200).send(users)
    },

    update: (req, res) => {
        const {name, email} = req.body
        let userIndex = null;
        // console.log(name, email)

        users.forEach((elem, i) => {
            //match the name, if no name matches, match the email.
            if(elem.name === name){
                userIndex = i;
                id = users[userIndex].id
            } else if(elem.email === email){
                userIndex = i;
                id = users[userIndex].id
            }
        })
        const updatedUser = {
            id,
            name,
            email
        }

        users.splice(userIndex, 1, updatedUser)
        res.status(200).send(users)
    },

    delete: (req, res) => {
        let userIndex2 = null;
        const {email} = req.body;

        users.forEach((elem, i) => {
            if(elem.email === email){
                userIndex2 = i
            }
        })
        users.splice(userIndex2, 1)
        res.status(200).send(users)
    }
}