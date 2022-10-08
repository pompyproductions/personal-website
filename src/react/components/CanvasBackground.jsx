import React, { useState, useEffect, useRef } from "react";
import refreshIcon from "../../assets/refresh.svg";
import SVG from 'react-inlinesvg';
import IconButton from "./IconButton.jsx";

const CanvasBackground = (props) => {

    const canvasRef = useRef();
    const [bgStyle, setBgStyle] = useState({
        transition: "background-color .5s",
    });
    const [color, setColor] = useState("red");
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

    const drawCircles = (ctx, color, scale=1) => {
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

    function newRandomColor() {
        setColor(`hsl(${Math.floor((200 + 190 * Math.random()) % 360)}deg 85% 60%)`)
    }
    function switchColor(clr) {
        setBgStyle({
            ...bgStyle,
            backgroundColor: clr
        })
        setBtnStyle({
            ...btnStyle,
            fill: clr
        });
    }

    function randomizeCanvas(ctx) {
        newRandomColor();
        switchColor(color);
        drawCircles(
            ctx, 
            color, 
            window.innerWidth < 480 ? 0.75 : 1
            );
    }

    return (
        <>
            <canvas style={bgStyle} ref={canvasRef}/>
            <IconButton onClick={handle} icon={refreshIcon} iconStyle={btnStyle} content="randomize background" />
        </>
    )
}

export default CanvasBackground;