!SLIDE bullets incremental algorithm-performance

<script type="text/javascript">
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

  $('.algorithm-performance').bind('showoff:show', algorithmPerformanceReset)
  $('.algorithm-performance').bind('showoff:incr', algorithmPerformanceForward);
</script>

# Algorithm Performance
* ![Loss Function Response](loss-function-response.png)

* Evaluation of \\(L\\) is expensive

* \\(\text{EL}(\theta) = \sum\_{k=1}^{K} p(x\_k) L(s\_{T,k},r\_{k})\\)

* ![Probability Distribution](snr-probabilities.png)

* ![Expected Loss Function Response](expected-loss-function-response.png)

* Evaluation of \\(\text{EL}\\) is _really_ expensive
