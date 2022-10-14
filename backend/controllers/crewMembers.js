const crewModel = require('../models/crewMembers')

exports.getAllMembers = (req, res, next) => {
    crewModel.find().sort({ createdAt: -1 })
    .then(members => res.status(200).json(members))
    .catch(error => res.status(400).json( { error }));
};

exports.pushMember = (req, res, next) => {
    delete req.body._id;
    let newMember = new crewModel({
        crewname: req.body.crewname
    });
    newMember.save()
    .then(() => res.status(201).json({ message: 'Membre ajouté' }))
    .catch(error => res.status(400).json({ error }))
}