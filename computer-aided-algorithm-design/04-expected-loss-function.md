!SLIDE bullets incremental algorithm-performance

<script type="text/javascript">
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
