import "./Home.css";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BottomArrow from "../assets/down-arrow.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export const Home = (props) => {
    const data = props.data.home;
    const gsapRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: gsapRef.current,
                start: "top center",
                end: "top center",
                scrub: 1,
            },
        });

        tl.to(gsapRef.current, {
            x: 1000,
            duration: 5,
            backgroundColor: "yellow",
            scale: 2,
            rotation: 1000,
            opacity: 1
        })
    });

    return (
        <>
        <div className="home container current">
            <h1><span>{data.firstName}</span> {data.lastName}</h1>
            <p className="sub-title">{data.subtitle}</p>
            <Link to="/resume">{data.button}</Link>
            <div className="bottom-arrow">
                <p>{data.scroll}</p>
                <img src={BottomArrow} alt="arrow" />
            </div>
        </div>
        <div className="gsap container">
            <div ref={gsapRef} className="box"></div>
        </div>
        </>
    )
}