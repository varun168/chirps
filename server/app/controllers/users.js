var express = require('express'),
              logger = require('../../config/logger'),
              router = express.Router(), 
    mongoose = require('mongoose'),
              User = mongoose.model('User')
var requireAuth = passport.authenticate('jwt', { session: false });

              passportService = require('../../config/passport')
passport = require('passport')

var requireLogin = passport.authenticate('local', { session: false });


router.route('/users/login').post(requireLogin, login);



 
module.exports = function (app) {
              app.use('/api', router); 
 
  router.route('/users')
 
  .post(function (req, res, next) {
	  console.log("HERE")
	  console.log(req.body)
      logger.log('Create User', 'verbose');
      logger.log(req.body)
      var user = new User(req.body);
      user.save()
      .then(function (result) {
          res.status(201).json(result);
      })
      .catch(function(err){
         return next(err);
      });
    })
 
             .put(requireAuth,function (req, res, next) {
      logger.log('Update User ' + req.params.id, 'verbose');
      var query = User.findOneAndUpdate(
                             { _id: req.body._id },
                             req.body,
                             { new: true })
      .exec()
      .then(function (result) {
          res.status(200).json(result);
      })
      .catch(function(err){
          return next(err);
      });
    })
 
              .get( function (req, res, next) {
      logger.log('Get User ' + req.params.id, 'verbose');
      var query = User.find()
        .exec()
        .then(function (result) {
          res.status(200).json(result);
        })
        .catch(function(err) {
          return next(err);
        });
    })
 
              .delete(requireAuth,function (req, res, next) {
      logger.log('Delete User ' + req.params.id, 'verbose');
      var query = User.remove({ _id: req.params.id })
        .exec()
        .then(function (result) {
          res.status(204).json({ message: 'Record deleted' });
        })
        .catch(function (err) {
          return next(err);
        });
    })
    router.route('/users/login').post(requireLogin, login);
 
 
};
 router.route('/users/followedChirps/:id')

    .get(requireAuth, function (req, res, next) {
      logger.log('Get Users followed chirps ' + req.params.id, 'debug');
      User.findOne({ _id: req.params.id }, function (err, user) {
        if (!err) {
          Chirp.find({
            $or: [
              { user: user._id }, { user: { $in: user.follow } }
            ]
          }).populate('chirpAuthor').sort({ dateSubmitted: -1 }).exec(function (err, chirps) {
            if (!err) {
              res.status(200).json(chirps);
            } else {
              res.status(403).json({ message: "Forbidden" });
            }
          });
        }
      });
    });
