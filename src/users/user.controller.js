const createUserController = async(req , res) => {
    res.send({message: 'Create a new user'})
}
const getAllUserController = async(req , res) => {
    res.send({message: 'find all users'})
}

module.exports = {createUserController,
    getAllUserController
}
