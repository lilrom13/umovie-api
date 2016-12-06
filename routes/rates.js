/**
 * Created by romain on 2016-12-05.
 */

var Rate = require('../models/rate.js').model;

exports.getRates = function (req, res) {
    Rate.find({'trackId': req.params.trackId}, function (err, rates) {
        if (!err) {

            var totalRate = 0;
            for (var i = 0; i < rates.length; i++) {
                totalRate += rates[i].rate;
            }
            var average = totalRate / rates.length

            var response = {
                'average': average,
                'rates': rates
            };

            res.status(200).send(response);
        } else {
            console.error(err);
        }
    });
}

exports.createRate = function (req, res) {
    Rate.count({'userId': req.body.userId, 'trackId': req.body.trackId}, function (err, count) {
        if (count == 0) {
            var rate = new Rate(req.body);

            rate.save(function(err){
                if(err)
                    console.log(err);
                else
                    res.status(200).send(rate);
            });
        } else {
            res.status(460);
            res.send('you already rated this movie.');
        }
    });
}

exports.deleteRate = function (req, res) {
    Rate.findByIdAndRemove(req.params.id, function (err, rate) {
        if (!err) {
            res.status(200).send("rate deleted");
        }
    });
}

exports.editRate = function (req, res) {
    Rate.findByIdAndUpdate(req.params.id, function (err, rate) {
        if (!err) {
        }
    });
}