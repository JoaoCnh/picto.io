const DrawAPI = {

    reDraw: (pictoProps, canvas, context) => {
        canvas = canvas|| document.getElementById('picto');
        context = context || canvas.getContext('2d');

        let radius;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.lineJoin = "round";

        for (let i=0; i < pictoProps.clickX.length; i++) {
            switch (pictoProps.clickSize[i]) {
                case "small":
                    radius = 2;
                    break;
                default:
                case "normal":
                    radius = 5;
                    break;
                case "large":
                    radius = 10;
                    break;
                case "huge":
                    radius = 20;
                    break;
            }

            context.beginPath();

            if (pictoProps.clickDrag[i] && i) {
                context.moveTo(pictoProps.clickX[i-1], pictoProps.clickY[i-1]);
            } else {
                context.moveTo(pictoProps.clickX[i]-1, pictoProps.clickY[i]);
            }

            context.lineTo(pictoProps.clickX[i], pictoProps.clickY[i]);
            context.closePath();
            context.strokeStyle = pictoProps.clickColor[i];
            context.lineWidth = radius;
            context.stroke();
        }
    },

};

export default DrawAPI;