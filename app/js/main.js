$('body').scrollspy({target: ".navbar"})
$(document).ready(function() {
	$('.carousel').carousel({
	  interval: 2000
	});
	$('.carousel-1').carousel({
	  interval: 4000
	});
});

		// progress bar
var line1 = new ProgressBar.Line('.photoshopSkill', {
  color: '#009dda',
  text: {
      value: '0'
  },
  step: function(state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
line1.animate(0.79);

var line2 = new ProgressBar.Line('.htmlCSS', {
  color: '#009dda',
  text: {
      value: '0'
  },
  step: function(state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
line2.animate(0.90);

var line3 = new ProgressBar.Line('.JS', {
  color: '#009dda',
  text: {
      value: '0'
  },
  step: function(state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
line3.animate(0.69);

var line4 = new ProgressBar.Line('.Wordprees', {
  color: '#009dda',
  text: {
      value: '0'
  },
  step: function(state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
line4.animate(0.92);

