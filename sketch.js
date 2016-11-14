var sketch = (function () {
  "use strict";

  var canvas,
      context,
      paint = false,

      clickX = new Array(),  
      clickY = new Array(),
      clickDrag = new Array(),
      clickColor = new Array(),
      clickSize = new Array(),
      clickY = new Array(),
      clickY = new Array(),

      currentColor = "#000",
      currentSize = "normal",

      _clearCanvas = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
      },

      clearCanvas = function () {
        _clearCanvas();
        clickX = [];
        clickY = [];
        clickDrag = [];
        clickColor = [];
        clickSize = [];
      },

      setColor = function (newColor) {
        currentColor = newColor;
      },

      _setRadius = function (i) {
        switch (clickSize[i]) {
          case "small":
            return 2;
          default:
          case "normal":
            return 5;
          case "large":
            return 10;
          case "huge":
            return 20;
          }
      },

      redraw = function () {
        var radius;

        _clearCanvas();

        context.lineJoin = "round";

        for(var i=0; i < clickX.length; i++) {
          radius = _setRadius(i);

          context.beginPath();
          if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
           }else{
             context.moveTo(clickX[i]-1, clickY[i]);
           }
           context.lineTo(clickX[i], clickY[i]);
           context.closePath();
           context.strokeStyle = clickColor[i];
           context.lineWidth = radius;
           context.stroke();
        }
      },

      addClick = function (x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
        clickColor.push(currentColor);
        clickSize.push(currentSize);
      },

      addEventListeners = function () {
        var press = function (e) {
          var mouseX = e.pageX - this.offsetLeft;
          var mouseY = e.pageY - this.offsetTop;

          paint = true;
          addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
          redraw();
        },

        drag = function (e) {
          if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
          }
        },

        release = function () {
          paint = false;
          redraw();
        },

        cancel = function () {
          paint = false;
        };

        canvas.addEventListener("mousedown", press, false);
        canvas.addEventListener("mousemove", drag, false);
        canvas.addEventListener("mouseup", release, false);
        canvas.addEventListener("mouseleave", cancel, false);
        // touch support
        canvas.addEventListener("touchstart", press, false);
        canvas.addEventListener("touchmove", drag, false);
        canvas.addEventListener("touchend", release, false);
        canvas.addEventListener("touchcancel", cancel, false);
      },

      init = function () {
        canvas = document.getElementById('picto');
        context = canvas.getContext('2d');

        redraw();
        addEventListeners();
      };

      return {
        init: init,
        setColor: setColor,
        clearCanvas: clearCanvas,
      };
}());