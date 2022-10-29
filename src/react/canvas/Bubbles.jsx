import React, { useState, useEffect, useRef } from "react";

const Bubbles = (props) => {

    const DEFAULT_STYLES = {
        lineColor: "yellow",
        lineWeight: 2,
        lineDash: false,
        fillColor: "blue",
    }
    const canvasRef = useRef();

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

    function applyStyles(ctx, styles, scale=1) {
        ctx.strokeStyle = styles.lineColor;
        ctx.lineWidth = styles.lineWeight * scale;
        if (styles.lineDash) {
            ctx.setLineDash(styles.lineDash)
        }
        ctx.fillStyle = styles.fillColor;
        console.log(ctx);
    }

    function drawCircles(ctx, scale=1) {

        const circles = [];
        for (let y = 0; y < 50; y++) {
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
        return circles; // used for clearCircle
    }

    function randomizeCanvas(ctx, scale=1) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        const styles = Object.assign(DEFAULT_STYLES, props.styles);
        applyStyles(ctx, styles, scale);
        console.log(ctx);

        if (styles.fillColor && props.invert) {
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        }

        const circles = drawCircles(
            ctx, 
            window.innerWidth < 480 ? 0.75 : 1
        );

        if (styles.lineColor) ctx.stroke();
        if (props.invert) {
            for (let point of circles) {
                clearCircle(ctx, point[0], point[1], point[2] * scale - 1);
            }
        } else if (styles.fillColor) {
            ctx.fill()
        }
    }

    return <canvas ref={canvasRef}/>
}

Bubbles.defaultProps = {
    invert: true,
    styles: {
        lineColor: false,
        fillColor: "rgba(30, 30, 30, 0.6)"
    }
}

export default Bubbles;