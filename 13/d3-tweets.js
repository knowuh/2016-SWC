var height = 500;
var width = 1000;
var margin = {left: 100, bottom: 60, right: 10, top: 10};

var countScale;
var retweetScale;
var dateScale;
var axisBottom;
var axisLeft;


var svg = d3.select('svg');


function biggen(datum,index) {
  var elem = d3.select(this);
  d3.select('.footnote').transition().style("opacity", "1");
  d3.select("#retweet").text(datum.retweets)
  d3.select("#text").text(datum.text)
  d3.select("#time").text(datum.date.getHours() + ":" + datum.date.getMinutes() );
  elem.classed("selected", true)
  elem.transition()
    .duration(250)
    .delay(0)
    .ease(d3.easeElastic)
    .attr("r", 20);

}

function smallen(datum,index) {
  var elem = d3.select(this);
  d3.select('.footnote').transition().duration(1000).style("opacity", "0");
  elem.classed("selected", false)
  elem.transition()
    .duration(1000)
    .delay(10)
    .attr("r", 5);

}

function forPerson(person) {
  return function(d) {
    return {
      id: d.id,
      text: d.text,
      retweets: d.retweets,
      date: new Date(Date.parse(d.date)),
      faves: d.faves,
      person: person
    }
  }
}

d3.json('realDonaldTrump-tweet-stats.json',function(dtTweets) {
  d3.json('HillaryClinton-tweet-stats.json',function(hrcTweets) {
    var tweets = [];

    tweets = tweets.concat(dtTweets.map(forPerson('trump')));
    tweets = tweets.concat(hrcTweets.map(forPerson('hillary')));
    tweets = _.sortBy(tweets,'date')


    // var minDate = d3.min(tweets, function (d) { return d.date });
    // var maxDate = d3.max(tweets, function (d) { return d.date });
    var minDate = new Date('2016','10','1');
    var maxDate = new Date('2016','10','12');

    tweets = _.filter(tweets, function(t) { return t.date > minDate});

    var minRetweet = d3.min(tweets, function (d) { return d.retweets });
    var maxRetweet = d3.max(tweets, function (d) { return d.retweets });


    console.log("MIN " + minRetweet);
    console.log("MAX " + maxRetweet);

    timeScale = d3.scaleTime().domain([minDate,maxDate]).range([margin.left, width - margin.right]);
    retweetScale = d3.scaleLinear().domain([0, maxRetweet]).range([height - margin.bottom, margin.top]);

    axisBottom = d3.axisBottom(timeScale);
    axisLeft = d3.axisLeft(retweetScale);

    function retweetToY(data, i) {
      return retweetScale(data.retweets);
    };

    function tweetNumberToX(data, i) {
      return timeScale(data.date);
    };



    svg.append('g')
      .attr("transform", "translate(0," + (height - margin.bottom) + ")")
      .call(axisBottom);

    svg.append('g')
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(axisLeft);

    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", margin.left / 3)
      .attr("x", 0 - (height / 2))
      .style("text-anchor", "middle")
      .text("retweet count");

    // text label for the x axis
    svg.append("text")
      .attr("y", height - margin.bottom / 3)
      .attr("x", width / 2)
      .style("text-anchor", "middle")
      .text("Tweet Number");

    svg.selectAll('circle')
      .data(tweets)
      .enter()
      .append("circle")
      .attr('class', 'weight')
      .attr("cx", tweetNumberToX)
      .attr("cy", retweetToY)
      .attr("fill", function(d) {
        var blueColor = "hsl(200,40%,60%)";
        var redColor  = "hsl(0,40%,60%)"
        var color = d.person == 'hillary' ? blueColor : redColor;
        return color;
      })
      .attr("r", 5)
      .on("mouseover", biggen)
      .on("mouseout", smallen);
  });
});

