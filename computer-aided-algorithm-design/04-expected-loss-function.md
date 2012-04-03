!SLIDE bullets incremental algorithm-performance

<script type="text/javascript">
  $('.algorithm-performance').bind('showoff:show', algorithmPerformanceReset)
  $('.algorithm-performance').bind('showoff:incr', algorithmPerformanceForward);
</script>

# Algorithm Performance
* ![Loss Function Response](loss-function-response.png)

* Evaluation of \\(L\\) is expensive

* ![Probability Distribution](snr-probabilities.png)

* ![Expected Loss Function Response](expected-loss-function-response.png)

* Evaluation of \\(\text{EL}\\) is _really_ expensive

.notes Exhaustive calculation of surface L is not feasible. Evaluation of L is expensive, since we need the final state \(S_{T}\). Gaussian probability distribution fits interesting input SNRs for a given SNR loss. The minimum shown in EL plot is the one we want to find. Large number of x required to accurately model the world.
