var Dispatcher = require('../Dispatcher');
var _ = require('lodash');
var EventEmitter = require('component-emitter');

class GroupStore extends EventEmitter {

  constructor(){
    super();
  }

  toJSON(){
    return {
      foo: 'bar ok'
    }
  }
}

module.exports = new GroupStore();