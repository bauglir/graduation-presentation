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
  algorithmPerformanceMoveToPosition(2);
  algorithmPerformanceMoveToPosition(3);

  if(window.algorithmPerformanceStep == 0 || window.algorithmPerformanceStep == 2 || window.algorithmPerformanceStep == 3) {
    if(window.algorithmPerformanceStep == 0) {
      algorithmPerformanceZoom(0);
    } else {
      algorithmPerformanceZoom(window.algorithmPerformanceStep - 1);
    }
  } else {
    var images = $('img', '.algorithm-performance');
    $(images[0]).show();
    $(images[2]).show();
    $(images[3]).show();
  }
  window.algorithmPerformanceStep++;
}

function algorithmPerformanceZoom(id) {
  var images = $('img', '.algorithm-performance');
  $(images[0]).hide();
  $(images[2]).hide();
  $(images[3]).hide();

  $(images[id]).css({ 'background-color' : 'white', 'left' : 112, 'width' : 800, 'z-index': 100 });
  $(images[id]).show();
}

function algorithmPerformanceMoveToPosition(id) {
  var bullets = $('li', '.algorithm-performance');
  var left = [25, 0, 350, 675, 0];
  imageStyling = { 'position': 'absolute', 'width': '350px', 'top': '150px' };
  imageStyling.left = left[id] + 'px';
  $('img', bullets[id]).css(imageStyling);
}

function algorithmPerformanceReset() {
  algorithmPerformanceStep = 0;
  var bullets = $('li', '.algorithm-performance');
  $(bullets[0]).css('padding', '125px');
  $(bullets[2]).css('padding', 0);
  $(bullets[3]).css('padding', 0);
}

function conclusionsMarkup() {
  var items = $('li', '.conclusions');
  $(items[0]).css('color', 'green');
  $(items[1]).css('color', 'orange');
  $(items[2]).css('color', 'orange');
}

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
    { 'width' : '151px', 'height' : '88px', 'position' : 'absolute', 'top' : '164px', 'left' : '221px', 'background-color' : '#fff' },
    { 'width' : '252px', 'height' : '90px', 'position' : 'absolute', 'top' : '162px', 'left' : '372px', 'background-color' : '#fff' },
    { 'width' : '182px', 'height' : '299px', 'position' : 'absolute', 'top' : '163px', 'left' : '624px', 'background-color' : '#fff' },
    { 'width' : '355px', 'height' : '190px', 'position' : 'absolute', 'top' : '461px', 'left' : '451px', 'background-color' : '#fff' },
    { 'width' : '165px', 'height' : '184px', 'position' : 'absolute', 'top' : '362px', 'left' : '451px', 'background-color' : '#fff' },
    { 'width' : '205px', 'height' : '111px', 'position' : 'absolute', 'top' : '251px', 'left' : '477px', 'background-color' : '#fff' },
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

function overviewHighlight(event) {
  var overview_slides = $('.overview');
  var active_overview_id = 0;
  var active_overview_slide = undefined;

  overview_slides.each(function(id, slide) {
	if(slide == event.target) {
      active_overview_id = id;
      active_overview_slide = slide;
	}
  });

  var list_items = $('li', active_overview_slide);
  if($('.overview-highlighted').length == 0) {
	list_items.not(list_items[active_overview_id]).addClass('overview-highlighted');
	event.preventDefault();
  } else {
	list_items.removeClass('overview-highlighted');
  }
}

function regoDemonstrationReset() {
  regoDemonstrationStep = 0;

  imagePositioning = { 'position' : 'absolute', 'top' : '220px', 'left': '210px' };
  $('img', '.rego-demonstration').css(imagePositioning);
  $($('li', '.rego-demonstration')[0]).show();
}

function regoDemonstrationStep() {
  if(regoDemonstrationStep > 0) {
	$($('li', '.rego-demonstration')[0]).hide();
  } else {
	regoDemonstrationStep++;
  }
}

function conventionalResultsReset() {
  $('h1', '.conventional-results').css('marginTop', '-210px');
  $('li:first-child', '.conventional-results').css('padding-bottom', '475px');

  $('img', '.conventional-results').css({
    'width' : '890px',
    'position' : 'absolute',
    'top' : '110px',
    'left' : '67px'
  });
}
