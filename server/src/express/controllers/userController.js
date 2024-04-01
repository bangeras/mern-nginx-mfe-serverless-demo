const {User} = require("../models/user")

const getAllUsers = async (req, res) => { 
    console.log("Invoked GET /api/users")

    const allUsers = await User.find({})
    res.status(200).json(allUsers)
}

const createUser = async (req, res) => { 
    const body = req.body
    console.log("Invoked POST /api/users")

    if (!body || !body.username || !body.fullname || !body.email) {
      res.status(400).json({msg: "Mandatory fields missing!"})
      return
    }

    // const allUsers = await User.find({})
    const result = await User.create({
      id: body.id,
      username: body.username,
      fullname: body.fullname,
      email: body.email,
      gender: body.gender

    })
    .then(() => res.status(201).json({ msg: "User created"}))
    .catch((err) => res.status(500).json({ msg: err}))
}

const getUser = async (req, res) => { 
    console.log("Invoked GET /api/users/:id", req.params.id)

    const user = await User.findById(req.params.id)

    res.status(200).json(user)
}

const updateUser = async (req, res) => { 
    const body = req.body
    console.log("Invoked PATCH /api/users/:id", req.params.id)
    if (!body || !body.fullname || !body.email) {
      res.status(400).json({msg: "Mandatory fields missing!"})
      return
    }
  
    const user = await User.findByIdAndUpdate(req.params.id, 
      {
        fullname: body.fullname,
        email: body.email
      }, { new: true }) // By default, it returns the original document before the update. If you want to get the updated document instead, you can use the new option.
      
      res.status(200).json(user)
}

const deleteUser = async (req, res) => { 
    console.log("Invoked DELETE /api/users/:id", req.params.id)
    const result = await User.findByIdAndDelete(req.params.id)
    
    if (result) res.status(204).send(); // 204 No Content indicates a successful deletion
    else res.status(404).json({msg: "ID not found"}) //Resource not found to delete
  }

  
module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}