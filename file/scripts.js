// Include MathJax
(function () {
  regoDemonstrationSetup();
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

function algorithmPerformanceMoveToPosition(id) {
  var bullets = $('li', '.algorithm-performance');
  var left = [25, 350, 675];
  imageStyling = { 'position': 'absolute', 'width': '350px', 'top': '125px' };
  imageStyling.left = left[id] + 'px';
  $('img', bullets[id]).css(imageStyling);
}

function algorithmPerformanceSetup() {
  $('h1', '.algorithm-performance').css('marginTop', '15px');
  algorithmPerformanceMoveToPosition(0);
  algorithmPerformanceMoveToPosition(1);
  algorithmPerformanceMoveToPosition(2);

  var bullets = $('li', '.algorithm-performance');
  $(bullets[0]).css('padding', '125px');
  $(bullets[1]).css('padding', 0);
  $(bullets[2]).css('padding', 0);
}

function conclusionsMarkup() {
  var items = $('li', '.conclusions');
  $(items[0]).css('color', 'green');
  $(items[1]).css('color', 'orange');
  $(items[2]).css('color', 'orange');
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

  var slide = $('.conventional-results');
  $('div', slide).remove();
  var mask_properties = { 'width' : '50px', 'height' : '20px', 'position' : 'absolute', 'top' : '575px', 'background-color' : '#fff' };
  for(i = 0; i < 7; i++) {
    mask_properties.left = (175 + i * 115) + 'px';
	slide.append($('<div>').css(mask_properties));
  }
}

function conventionalOptimizationStrategyReset() {
  conventionalOptimizationStrategyStep = 0;
  $('h1', '.conventional-optimization-strategy').css('marginTop', '-160px');
  var slide = $('.conventional-optimization-strategy');
  $('div', slide).remove();
  var mask_properties = [
    { 'width' : '214px', 'height' : '70px', 'position' : 'absolute', 'top' : '283px', 'left' : '200px', 'background-color' : '#fff' },
    { 'width' : '235px', 'height' : '54px', 'position' : 'absolute', 'top' : '284px', 'left' : '414px', 'background-color' : '#fff' },
    { 'width' : '175px', 'height' : '242px', 'position' : 'absolute', 'top' : '284px', 'left' : '648px', 'background-color' : '#fff' },
    { 'width' : '209px', 'height' : '114px', 'position' : 'absolute', 'top' : '434px', 'left' : '506px', 'background-color' : '#fff' },
    { 'width' : '209px', 'height' : '97px', 'position' : 'absolute', 'top' : '337px', 'left' : '506px', 'background-color' : '#fff' },
    { 'width' : '260px', 'height' : '127px', 'position' : 'absolute', 'top' : '427px', 'left' : '246px', 'background-color' : '#fff' },
  ];
  for(i = 0; i < mask_properties.length; i++) {
	slide.append($('<div>').css(mask_properties[i]));
  }
}

function conventionalOptimizationStrategyStep(event) {
  $($('div', '.conventional-optimization-strategy')[conventionalOptimizationStrategyStep++]).hide();
  if(conventionalOptimizationStrategyStep < 7) {
    event.preventDefault();
  }
}

function gaussianProcessBasedResultsReset() {
  $('h1', '.gaussian-process-based-results').css('marginTop', '-210px');
  $('li:first-child', '.gaussian-process-based-results').css('padding-bottom', '475px');

  $('img', '.gaussian-process-based-results').css({
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
  for(i = 0; i < mask_properties.length; i++) {
	slide.append($('<div>').css(mask_properties[i]));
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

  overview_slides.each(function(id, slide) {
	if(slide == event.target) {
      active_overview_id = id;
	}
  });

  var list_items = $('li', event.target);
  if($('.overview-highlighted').length == 0) {
	list_items.not(list_items[active_overview_id]).addClass('overview-highlighted');
	event.preventDefault();
  }
}

function overviewReset() {
  $('li', '.overview').removeClass('overview-highlighted');
}

function regoDemonstrationReset(event) {
  regoDemonstrationStep = 0;

  imagePositioning = { 'position' : 'absolute', 'top' : '175px', 'left': '210px' };
  $('img', '.rego-demonstration').css(imagePositioning);
  $('li', '.rego-demonstration').slice(0, 2).show().css('padding', '25px');
  $('div', event.target).hide();
}

function regoDemonstrationSetup() {
  $('.rego-demonstration').append($('<div>\\(L(\\theta)\\)</div>').css({'position' : 'absolute', 'top' : '417px', 'left' : '226px', 'width' : '2em', 'padding' : '2ex 0', 'background-color' : '#fff'}));
  $('.rego-demonstration').append($('<div>\\(\\theta\\)</div>').css({'position' : 'absolute', 'top' : '678px', 'left' : '525px', 'padding' : '0 1em', 'background-color' : '#fff'}));
  $('div', '.rego-demonstration').hide();
}

function regoDemonstrationStep() {
  if(regoDemonstrationStep > 1) {
    $('li', '.rego-demonstration').slice(0, 2).hide().css('padding', 0);
    $('div', '.rego-demonstration').show();
  } else {
	regoDemonstrationStep++;
  }
}
