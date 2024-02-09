const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json({message: []})

userCtrl.createUser = (req, res) => res.json({message: 'Usuario Guardado'})

userCtrl.deleteUser = (req, res) => res.json({message: 'Usuario Eliminado'})

module.exports = userCtrl;
