import React, { useState, useEffect, useRef } from "react";
import refreshIcon from "../../assets/refresh.svg";
import IconButton from "./IconButton.jsx";

const CanvasBackground = (props) => {

    const canvasRef = useRef();
    const [bgStyle, setBgStyle] = useState({
        transition: "background-color .5s",
    });
    const [color, setColor] = useState("#191919");
    const [btnStyle, setBtnStyle] = useState({
        transition: "fill .5s",
        fill: "yellow"
    })
    const colors = [
        "hsl(160deg 85% 60%)",
        "hsl(80deg 85% 60%)",
        "hsl(10deg 85% 60%)"
    ]

    // set stuff on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const ctx = canvasRef.current.getContext("2d");

        window.onresize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        randomizeCanvas(ctx);
    }, [])

    function clearCircle(ctx, x, y, radius) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI, true);
        ctx.clip();
        ctx.clearRect(x-radius,y-radius,radius*2,radius*2);
        ctx.restore();
    }

    const drawCircles = (ctx, scale=1) => {
        ctx.strokeStyle = "rgba(30, 30, 30, 1)";
        ctx.lineWidth = 1 * scale;
        ctx.setLineDash([8 * scale, 3 * scale]);

        
        ctx.beginPath();

        const circles = [];
        for (let i = 0; i < 50; i++) {
            const radius = 10 * scale + 100 * Math.random();
            const pos = [
                canvasRef.current.width * Math.random(), 
                canvasRef.current.height * Math.random()
            ];
            ctx.moveTo(
                pos[0] + radius * scale, 
                pos[1]);
            ctx.arc(
                pos[0], pos[1], radius * scale,
                0, 2 * Math.PI
            )
            circles.push([pos[0], pos[1], radius])
        }
        // ctx.stroke();
        for (let point of circles) {
            clearCircle(ctx, point[0], point[1], point[2] * scale - 1);
        }
        // ctx.fill();
    }

    // const handle = () => {
    //     randomizeCanvas(canvasRef.current.getContext("2d"));
    // }

    // function newRandomColor() {
    //     setColor(`hsl(${Math.floor((200 + 190 * Math.random()) % 360)}deg 85% 60%)`)
    // }

    function randomizeCanvas(ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.fillStyle = "rgba(32, 32, 32, 0.6)"
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        drawCircles(
            ctx, 
            window.innerWidth < 480 ? 0.75 : 1
            );
    }

    return <canvas ref={canvasRef}/>
}

export default CanvasBackground;