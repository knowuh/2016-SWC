
var token = '15a9409829ade5b8bee81e008adcf6acc55f24a1'
var particle = new Particle();



function loadAnalog() {
  var analogV = particle.getVariable(
    {
      deviceId: '1d0028000747343337373738',
      name: 'analogvalue',
      auth: token
    });



  analogV.then(function(data) {
    console.log('Device variable retrieved successfully:', data.body.result);
    },
    function(err) {
      console.log('An error occurred while getting attrs:', err);
    }
  );

  funcCall.then(function(data) {
    console.log("ok");
  },
    function(err){
      console.log("error while calling led function");
    }
  );
};

var on = false;
function toggle() {
  on = !on
  var status = on ? "on" : "off";
  console.log(on);
  particle.callFunction(
    {
      deviceId: '1d0028000747343337373738',
      name: 'led',
      argument: status,
      auth: token
    });
}
setInterval(loadAnalog,4  000);
$("#toggle").click(toggle);
