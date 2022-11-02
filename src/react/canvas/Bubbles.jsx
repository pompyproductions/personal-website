import React, { useState, useEffect, useRef } from "react";

const Bubbles = (props) => {

    const DEFAULT_STYLES = {
        lineColor: false,
        lineWeight: 1,
        lineDash: false,
        fillColor: "blue",
    }
    const canvasRef = useRef();
    let timeoutID;

    // set stuff on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        canvasRef.current.width = canvas.parentElement.clientWidth;
        canvasRef.current.height = canvas.parentElement.clientHeight;
        const ctx = canvasRef.current.getContext("2d");

        function handleResize() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            clearTimeout(timeoutID);
            timeoutID = setTimeout(randomizeCanvas, 100, ctx);
        }

        window.addEventListener("resize", handleResize);

        randomizeCanvas(ctx);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
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
        fillColor: "#9d26412e"
    }
}

export default Bubbles;