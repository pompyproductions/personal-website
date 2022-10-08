import React, { useState, useEffect, useRef } from "react";
import Icon from "../../assets/refresh.svg";
import SVG from 'react-inlinesvg';

const CanvasBackground = (props) => {

    const canvasRef = useRef();
    const [bgStyle, setBgStyle] = useState({
        transition: "background-color .5s",
    });
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

    const draw = (ctx, color, scale=1) => {
        ctx.fillStyle = color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2 * scale;
        ctx.setLineDash([8 * scale, 3 * scale]);
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.beginPath();

        for (let i = 0; i < 50; i++) {
            const radius = 10 * scale + 100 * Math.random();
            const pos = [
                canvasRef.current.width * Math.random(), 
                canvasRef.current.height * Math.random()
            ];
            ctx.moveTo(pos[0] + radius * scale, pos[1]);
            ctx.arc(
                pos[0], pos[1], radius * scale,
                0, 2 * Math.PI
            )
        }
        ctx.stroke();
        ctx.fill();
    }

    const handle = () => {
        randomizeCanvas(canvasRef.current.getContext("2d"));
    }

    function randomizeCanvas(ctx) {
        const color = `hsl(${Math.floor((200 + 190 * Math.random()) % 360)}deg 85% 60%)`; // between 30 and 200
        setBgStyle({
            ...bgStyle,
            backgroundColor: color
        });
        setBtnStyle({
            ...btnStyle,
            fill: color
        });
        draw(
            ctx, 
            color, 
            window.innerWidth < 480 ? 0.75 : 1
            );
    }

    return (
        <>
            <canvas style={bgStyle} ref={canvasRef}/>
            <button onClick={handle} className="icon-button"><SVG src={Icon} style={btnStyle}/></button>
        </>
    )
}

export default CanvasBackground;