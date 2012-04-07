!SLIDE rego-demonstration bullets incremental

<script type="text/javascript">
  $('.rego-demonstration').bind('showoff:show', regoDemonstrationReset);
  $('.rego-demonstration').bind('showoff:next', regoDemonstrationStep);
</script>

# Bayesian Optimization

* Quantify uncertainty using probability distributions

* Optimal experimental design

* ![Step 1](optimization-step-1.png)
* ![Step 2](optimization-step-2.png)
* ![Step 3](optimization-step-3.png)
* ![Step 4](optimization-step-4.png)
* ![Step 5](optimization-step-5.png)
* ![Step 6](optimization-step-6.png)
* ![Step 7](optimization-step-7.png)
* ![Step 8](optimization-step-8.png)

.notes Model of EL is based on Gaussian Processes. Gaussian probability distributions at each point in the solution space (so a mean and a standard deviation). The probability distributions model the uncertainty of our model of EL. The example illustrates the concept, it is not an actual EL.
