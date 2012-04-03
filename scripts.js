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

function algorithmPerformanceForward(event) {
  algorithmPerformanceMoveToPosition(0);
  algorithmPerformanceMoveToPosition(3);
  algorithmPerformanceMoveToPosition(4);

  if(window.algorithmPerformanceStep == 0 || window.algorithmPerformanceStep == 3 || window.algorithmPerformanceStep == 4) {
    if(window.algorithmPerformanceStep == 0) {
      algorithmPerformanceZoom(0);
    } else {
      algorithmPerformanceZoom(window.algorithmPerformanceStep - 2);
    }
  } else {
    var images = $('img', '.algorithm-performance');
    $(images[0]).show();
    $(images[3]).show();
    $(images[4]).show();
  }
  window.algorithmPerformanceStep++;
}

function algorithmPerformanceZoom(id) {
  var images = $('img', '.algorithm-performance');
  $(images[0]).hide();
  $(images[3]).hide();
  $(images[4]).hide();

  $(images[id]).css({ 'background-color' : 'white', 'left' : 112, 'width' : 800, 'z-index': 100 });
  $(images[id]).show();
}

function algorithmPerformanceMoveToPosition(id) {
  var bullets = $('li', '.algorithm-performance');
  var left = [25, 0, 0, 350, 675];
  imageStyling = { 'position': 'absolute', 'width': '350px', 'top': '125px' };
  imageStyling.left = left[id] + 'px';
  $('img', bullets[id]).css(imageStyling);
}

function algorithmPerformanceReset() {
  algorithmPerformanceStep = 0;
  var bullets = $('li', '.algorithm-performance');
  $(bullets[0]).css('padding', '125px');
  $(bullets[3]).css('padding', 0);
  $(bullets[4]).css('padding', 0);
}

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

function modelBasedResultsReset() {
  $('h1', '.model-based-results').css('marginTop', '-210px');
  $('li:first-child', '.model-based-results').css('padding-bottom', '475px');

  $('img', '.model-based-results').css({
    'width' : '890px',
    'position' : 'absolute',
    'top' : '110px',
    'left' : '67px'
  });
}

function optimizationStrategyReset() {
  optimizationStrategyStep = 0;
  $('h1', '.optimization-strategy').css('marginTop', '-290px');
  var slide = $('.optimization-strategy');
  $('div', slide).remove();
  var mask_properties = [
    { 'width' : '222px', 'height' : '88px', 'position' : 'absolute', 'top' : '164px', 'left' : '221px', 'background-color' : '#fff' },
    { 'width' : '182px', 'height' : '90px', 'position' : 'absolute', 'top' : '162px', 'left' : '442px', 'background-color' : '#fff' },
    { 'width' : '182px', 'height' : '299px', 'position' : 'absolute', 'top' : '163px', 'left' : '624px', 'background-color' : '#fff' },
    { 'width' : '190px', 'height' : '190px', 'position' : 'absolute', 'top' : '461px', 'left' : '615px', 'background-color' : '#fff' },
    { 'width' : '165px', 'height' : '121px', 'position' : 'absolute', 'top' : '475px', 'left' : '451px', 'background-color' : '#fff' },
    { 'width' : '205px', 'height' : '225px', 'position' : 'absolute', 'top' : '251px', 'left' : '477px', 'background-color' : '#fff' },
    { 'width' : '256px', 'height' : '93px', 'position' : 'absolute', 'top' : '372px', 'left' : '221px', 'background-color' : '#fff' },
    { 'width' : '100px', 'height' : '152px', 'position' : 'absolute', 'top' : '464px', 'left' : '271px', 'background-color' : '#fff' }
  ];
  for(i = 0; i < 8; i++) {
	slide.append($('<div>').addClass('mask').css(mask_properties[i]));
  }
}

function optimizationStrategyStep(event) {
  $($('div', '.optimization-strategy')[optimizationStrategyStep++]).hide();
  if(optimizationStrategyStep < 9) {
    event.preventDefault();
  }
}

function traditionalResultsReset() {
  $('h1', '.traditional-results').css('marginTop', '-210px');
  $('li:first-child', '.traditional-results').css('padding-bottom', '475px');

  $('img', '.traditional-results').css({
    'width' : '890px',
    'position' : 'absolute',
    'top' : '110px',
    'left' : '67px'
  });
}
