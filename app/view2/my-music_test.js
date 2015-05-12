'use strict';

describe('myApp.my-music module', function() {

  beforeEach(module('myApp.my-music'));

  describe('my-music controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('MyMusicCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});