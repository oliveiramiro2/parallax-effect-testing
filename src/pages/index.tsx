import React from "react";
/* import { Parallax } from "react-scroll-parallax"; */
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomeParallax: React.FC = () => {
    return (
        <div className="bg-slate-300">
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
            <Parallax pages={2} style={{ top: "0", left: "0" }}>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="bg-ceu bg-no-repeat relative h-screen bg-cover" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={5} factor={1/5}>
                    <div className="bg-lua bg-center bg-no-repeat relative h-screen" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} speed={1}>
                    <div className="bg-montanha bg-no-repeat relative h-screen bg-cover" />
                </ParallaxLayer>
                {/* <ParallaxLayer speed={5} offset={0.9}>
                    <div className="bg-montanha bg-no-repeat bg-cover relative h-screen" />
                </ParallaxLayer> */}
                <ParallaxLayer speed={5} offset={1} sticky={{start: 0, end: 1}}>
                    <div className="bg-montanha bg-no-repeat bg-cover relative h-screen" />
                </ParallaxLayer>
                {/* <ParallaxLayer speed={5} offset={0.95}>
                    <div className="bg-paisagem bg-no-repeat bg-cover relative h-screen" />
                </ParallaxLayer> */}
                {/* <ParallaxLayer offset={0} speed={2.5}>
                    <div className="">
                        <p className="text-white">Parallax</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div className="">
                        <p className="text-white">Parallax</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div className="">
                        <p className="text-white">Parallax</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2.5}>
                    <div className="">
                        <p className="text-white">Parallax1</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2.5}>
                    <div className="">
                        <p className="text-white">Parallax1</p>
                    </div>
                </ParallaxLayer> */}
            </Parallax>
        </div>
    );
};

export default HomeParallax;
