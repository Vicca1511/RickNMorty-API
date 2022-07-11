const mongoose = require('mongoose');

const idValidation = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: "ID nonexistent!" })
    }
    next();
}

const bodyObjectValidation = (req, res, next) => {
    const character = req.body;
    if (!character || !character.nome || !character.descricao ||!character.username || !character.password || !character.photo) {

        return res.status(400).send({ message: 'You need provide all the fields required' });

    }
    next();
}

module.exports = {

    idValidation,
    bodyObjectValidation,

}


