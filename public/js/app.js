$(document).ready(function () {
  if (localStorage.getItem('__pictoUser')) {
  	return sketch.init();
  }
});