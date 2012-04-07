!SLIDE conclusions subsection bullets incremental

<script type="text/javascript">
  $('.conclusions').bind('showoff:show', conclusionsMarkup);
</script>

# Conclusions

* Significant performance gains

* Not applicable out of the box

* Numerical issues with Gaussian Processes

* Investigate how well the algorithm scales

.notes Smoothness constraints have to be satisfied (i.e. it must be possible to model EL using a Gaussian Process) and input distribution of X has to be Gaussian. Numerical issues arise from the use of covariance matrices and inverting them.
