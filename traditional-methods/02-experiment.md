!SLIDE traditional-results bullets incremental

<script>
function showGraphTraditional(event) {
  var bulletList = $(event.target).find('ul');

  $('h1').animate({ marginTop: '-200px' }, 1000)

  var data = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 7]
  drawLineGraph($(bulletList), data);
}

<!-- $(".traditional-results").bind("showoff:next", showGraphTraditional); -->
</script>

# Results

* Show Results Of Traditional Optimization
