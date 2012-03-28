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

  // Only use the locally cloned version of MathJax when running from localhost
  if(window.location.hostname == "localhost") {
    script.src  = "file/lib/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  } else {
    script.src  = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  }

  document.getElementsByTagName("head")[0].appendChild(script);
});
