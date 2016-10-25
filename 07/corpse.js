var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var scripts = [];
var knowuh = {};

// possibly change drawImage(filename, ctx, x, y)
var makeDrawImage = function(username) {
  var originalDrawImage = window[username].drawImage;
  if (originalDrawImage) {
    console.log("Changing draw image function");
    var newFunction = function (filename, ctx, x, y) {
      if (filename.split(".").length > 2) {
        filename = "//" + name + ".github.io/2016-SWC/ps-06" + filename;
      }
      originalDrawImage(filename, ctx, x, y);
    };
    window[username].drawImage = newFunction;
  }
  else {
    console.log("no draw image for " + username);
  }
};

var addScript = function (student, path) {
  var name = student.github;
  var webPage = "//" + name + ".github.io/2016-SWC/" + path;
  jQuery.getScript(webPage, function(script) {
    console.log("Added script for " + name);
    scripts.push(name);
    makeDrawImage(name);
  });
};

var loadCorpses = function(problemset) {
  $.getJSON( "../roster.json", function(students) {
    $('#dynamic-content').append($("<ul className='solutions' id='solutions'>"));
    for (var student of students) {
      addScript(student, "ps-06/corpse.js");
    }
  });
};


var choose = function() {
  var index = Math.random() * scripts.length;
  return scripts[index -1];
}

knowuh.drawTop = function(ctx) {
  var user=choose();
  window[user].drawTop(ctx);
};

knowuh.drawMiddle = function(ctx) {
  var user=choose();
  window[user].drawMiddle(ctx);
};

knowuh.drawBottom = function(ctx) {
  var user=choose();
  window[user].drawMiddle(ctx);
};

knowuh.drawCorpse = function() {
  if (scripts.length > 0) {
    console.dir(scripts);
    knowuh.drawTop(drawingPad);
    knowuh.drawMiddle(drawingPad);
    knowuh.drawBottom(drawingPad);
  }
  else {
    console.log("Nothing here...");
  }
};

loadCorpses();
var interval = 5 * 1000;
setInterval(knowuh.drawCorpse, interval);
