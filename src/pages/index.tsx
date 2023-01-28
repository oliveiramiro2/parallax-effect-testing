import React from "react";
/* import { Parallax } from "react-scroll-parallax"; */
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomeParallax: React.FC = () => {
    return (
        <div>
            {/* <Parallax className="h-screen bg-paisagem2 bg-no-repeat bg-cover z-10">
                <span className="text-red-600">index</span>
            </Parallax>
            <Parallax
                scale={[0.9, 2]}
                shouldAlwaysCompleteAnimation
                className="h-screen bg-paisagem bg-no-repeat bg-cover z-0"
            >
                <span className="text-red-600">index</span>
            </Parallax>
            <Parallax className="h-screen">
                <span className="text-red-600">index</span>
            </Parallax>
            <Parallax className="h-screen">
                <span className="text-red-600">index</span>
            </Parallax> */}
            <Parallax pages={4} style={{ top: "0", left: "0" }}>
                <ParallaxLayer offset={0}>
                    <div className="w-screen bg-black h-screen flex items-center justify-center">
                        <h1 className="text-white text-xl">Parallax 1</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    sticky={{ start: 1, end: 2.4 }}
                    className="overflow-hidden"
                >
                    <div className="bg-ceu bg-no-repeat relative h-screen bg-cover" />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    factor={9}
                    sticky={{ start: 1.7, end: -1 }}
                >
                    <div className="bg-lua bg-center bg-no-repeat relative h-screen" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} sticky={{ start: 2, end: 2.6 }}>
                    <div className="bg-montanha bg-no-repeat relative h-screen bg-cover" />
                </ParallaxLayer>
                <ParallaxLayer offset={1} sticky={{ start: 3, end: 3 }}>
                    <div className="bg-paisagem bg-no-repeat bg-cover relative h-screen" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} sticky={{ start: 3, end: 3 }}>
                    <div className="bg-lobo bg-no-repeat bg-right-bottom relative h-screen translate-x-20" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default HomeParallax;
