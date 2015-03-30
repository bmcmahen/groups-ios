var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');
var PayloadSources = require('../Constants').PayloadSources;


module.exports = Object.assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
  
})