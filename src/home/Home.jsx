import "./Home.css";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BottomArrow from "../assets/down-arrow.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Home = (props) => {
    const data = props.data.home;
    const gsapRef = useRef(null);
    let lastScrollY = window.scrollY

    useEffect(() => {

        // when user scroll down then video will be play, if user scroll up then video will start reverse play
        const videoEln = document.querySelector(".video-background video");
        document.addEventListener("scroll", () => {
            if (window.scrollY <= 0) 
                return 
            if (videoEln.paused) {
                videoEln.playbackRate = 1.5;                
                videoEln.play();
            }

            setTimeout(() => {
                if (videoEln.paused) return;
                videoEln.pause();
            }, 800);
            lastScrollY = window.scrollY;
        });


        // gsap.registerPlugin(ScrollTrigger);
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: gsapRef.current,
        //         start: "top center",
        //         end: "top center",
        //         scrub: 1,
        //         markers: true,
        //         toggleActions: "restart pause reverse pause",
        //     },
        // });

        // tl.to(gsapRef.current, {
        //     x: 1000,
        //     duration: 5,
        //     backgroundColor: "red",
        //     scale: 2,
        //     onComplete: () => console.log("done"),
        //     opacity: 1
        // })
    });

    return (
        <>
            {/* make header section that contain info and video as background and display info above this video */}

            <div className="header-section">
                <div className="video-background">
                    <video  muted loop playsInline>
                        <source src="https://videos.pexels.com/video-files/3129977/3129977-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                        {/* <source src="https://videos.pexels.com/video-files/11063871/11063871-hd_1920_1080_60fps.mp4" type="video/mp4" /> */}
                        {/* <source src="https://videos.pexels.com/video-files/29035881/12552791_1920_1080_30fps.mp4" type="video/mp4" /> */}
                    </video>
                </div>
                <div className="home container current">
                    <h1><span>{data.firstName}</span> {data.lastName}</h1>
                    <p className="sub-title">{data.subtitle}</p>
                    <Link to="/resume">{data.button}</Link>
                    <div className="bottom-arrow">
                        <p>{data.scroll}</p>
                        <img src={BottomArrow} alt="arrow" />
                    </div>
                </div>
            </div>

            <div className="more-space"></div>
            <div className="more-space"></div>

            <div className="about">dfgdfgdfgdfgdfg</div>

            {/* <div className="video-background">
                <video autoPlay muted loop playsInline>
                    <source src="https://videos.pexels.com/video-files/9450558/9450558-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
                <div className="home current">
                    <h1><span>{data.firstName}</span> {data.lastName}</h1>
                    <p className="sub-title">{data.subtitle}</p>
                    <Link to="/resume">{data.button}</Link>
                    <div className="bottom-arrow">
                        <p>{data.scroll}</p>
                        <img src={BottomArrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="gsap container">
                <div ref={gsapRef} className="box"></div>
            </div> */}
        </>
    )
}