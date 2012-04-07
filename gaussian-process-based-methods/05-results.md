!SLIDE gaussian-process-based-results bullets incremental

<script type="text/javascript">
  $('.gaussian-process-based-results').bind('showoff:show', gaussianProcessBasedResultsReset)
</script>

# Convergence Behavior

* ![REGO Results](rego-results.png)

* 30 Evaluations of \\(L\\)

.notes Same experiment as before, but repeated 10 times for each experiment. Uses 10 evaluations of L to create initial model. Non-monotonicity is caused by adjusting the model to the observations (temporary overfit).
