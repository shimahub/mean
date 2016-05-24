'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  stars: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  info: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
