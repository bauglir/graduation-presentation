!SLIDE bullets incremental algorithm-performance

<script type="text/javascript">
  $('.algorithm-performance').bind('showoff:show', algorithmPerformanceSetup);
</script>

# Optimization Problem

\\(\text{EL}(\theta) = \sum\_{k=1}^{K} p(x\_k) L(y\_{k},r\_{k})\\)

* ![Expected Loss Function Response](expected-loss-function-response.png)

* ![Probability Distribution](snr-probabilities.png)

* ![Loss Function Response](loss-function-response.png)

* Evaluating \\(L\\) is expensive

* Evaluating \\(\text{EL}\\) is \\(K\\) times as expensive

* _Find an optimization algorithm that solves the optimization problem in as few evaluations of \\(L\\) as possible_
