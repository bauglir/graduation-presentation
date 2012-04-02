// Include D3
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "file/lib/d3.min.js";
  document.getElementsByTagName("head")[0].appendChild(script);
})();

// Include MathJax
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";

  // Only use the locally cloned version of MathJax when running from localhost
  if(window.location.hostname == "localhost") {
    script.src  = "/file/lib/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  } else {
    script.src  = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  }

  document.getElementsByTagName("head")[0].appendChild(script);
})();

function drawLineGraph(target, data) {
  data  = [3,7,9,1,4,6,8,2,5];
  w     = 700;
  h     = 300;
  max   = d3.max(data);

  x  = d3.scale.linear().domain([0, data.length - 1]).range([0, w]);
  y  = d3.scale.linear().domain([0, max]).range([h, 0]);

  vis = d3.select('.traditional-results').append('svg:svg').attr('width', w).attr('height', h);
  vis.selectAll('path.line').data([data, [5,2,8,6,4,1,9,7,3]]).enter().append("svg:path").attr("d", d3.svg.line().x(function (d,i) { return x(i) }).y(y));

  ticks = vis.selectAll('.ticks').data(y.ticks(7)).enter().append('svg:g').attr('transform', function(d) { return "translate(0, #{y(d)})"; }).attr('class', 'tick');

  ticks.append('svg:line').attr('y1', 0).attr('y2', 0).attr('x1', 0).attr('x2', w);
  ticks.append('svg:text').text(function(d) { return d; }).attr('text-anchor', 'end').attr('dy', 2).attr('dx', -4);

  vis.selectAll('.point').data(data).enter().append("svg:circle")
    .attr("class", function(d, i) { if(d == max) { return 'point max'; } else { return 'point'; } })
    .attr("cx", function(d, i) { return x(i) })
    .attr("cy", function(d) { return y(d) })
    .attr("r", function(d, i) { if(d == max) { return 6; } else { return 4; } })
    .on('mouseover', function() { d3.select(this).attr('r', 8) })
    .on('mouseout',  function() { d3.select(this).attr('r', 4) });
}

function traditionalResultsReset() {
  traditionalResultsStep = 0;

  $('h1', '.traditional-results').css('marginTop', '-210px');
  $('li:first-child', '.traditional-results').css('padding-bottom', '475px');

  $('img', '.traditional-results').css({
    'width' : '890px',
    'position' : 'absolute',
    'top' : '110px',
    'left' : '67px'
  });
}

function traditionalResultsForward() {
  if(traditionalResultsStep >= 1) {
    $('img', '.traditional-results').css({
      'width' : '740px',
      'left' : '142px'
    });
  } else {
    traditionalResultsStep++;
  }
}
