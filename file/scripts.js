// Include D3
$(function () {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "file/lib/d3.min.js";
});

// Include MathJax
$(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "file/lib/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  document.getElementsByTagName("head")[0].appendChild(script);
});
