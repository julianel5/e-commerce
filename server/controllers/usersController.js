const Users = require("../models/Users");

exports.createUser = async (req,res) => {
    try {
        let user;

        user = new Users(req.body);
        await user.save();
        res.send(user);

        console.log('User created ^^')
    } catch (error) {
        console.log(error);
        res.status(500).send('an error has ocurred')
    }
}

exports.obtainUsers = async (req,res) =>{
    try {
        
        const users = await Users.find();
        res.json(users);
        console.log('Users obtained ^^')

    } catch (error) {
        console.log(error);
        res.status(500).send('an error has ocurred obtaining users')
    }
}


exports.updateUser = async (req,res) => {

    try {
        const {username, password} = req.body;
        let user = await Users.findById(req.params.id);

        if(!user){
            res.status(404).json({msg: 'the user does NOT exist ¬¬'});
        }
        user.username = username;
        user.password = password;

        user = await Users.findOneAndUpdate({_id: req.params.id}, user, {new: true});
        res.json(user);

        console.log('user updated ^^');
    } catch (error) {
        console.log(error);
    }

}

exports.obtainUser = async (req,res) => {

    try {
        let user = await Users.findById(req.params.id);

        if(!user){
            res.status(404).json({msg: 'the user does NOT exist ¬¬'});
        }

        res.json(user);

        console.log('user obtained ^^');
    } catch (error) {
        console.log(error);
    }

}

exports.deleteUser = async (req,res) => {

    try {
        let user = await Users.findById(req.params.id);

        if(!user){
            res.status(404).json({msg: 'the user does NOT exist ¬¬'});
        }

        await Users.findOneAndDelete({_id: req.params.id });
        res.json({msg: "the user has been deleted"});

        console.log('user deleted >:)');
    } catch (error) {
        console.log(error);
    }

}