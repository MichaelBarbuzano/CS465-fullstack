const mongoose = require('mongoose'); //.set('debug', true)
const Model = mongoose.model('trips'); 

// GET: /trips - lists all trips 
const tripsList = async (req, res) => {
    Model
        .find({}) // empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(trips);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });

};
module.exports = {
    tripsList
};