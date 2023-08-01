var count = 0; //-- used in collide-detect component

//-- add to the oculus touch controller html --
AFRAME.registerComponent('trigger-check', {
  //dependencies: ['raycaster'],

  init: function () {
       
    var debugtxt = document.querySelector('a-text');
   
    //-- trigger button pressed
    this.el.addEventListener('triggerdown', function (e) {
        
        shoot();
        count++;
        debugtxt.setAttribute('value', 'count: ' + count);
    });
  },
  
  
});