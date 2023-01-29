import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomeParallax: React.FC = () => {
    const [parallax, setParallax] = React.useState<boolean>(true);

    const handleParallax = (): void => {
        setParallax(!parallax);
    };

    return (
        <div>
            {parallax ? (
                <div>
                    <Parallax pages={5} style={{ top: "0", left: "0" }}>
                        <ParallaxLayer offset={0}>
                            <div className="w-screen bg-black h-screen flex items-center justify-center flex-col">
                                <h1 className="text-white text-xl block">
                                    Parallax 1
                                </h1>
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
                        <ParallaxLayer
                            offset={0.2}
                            sticky={{ start: 2, end: 2.6 }}
                        >
                            <div className="bg-montanha bg-no-repeat relative h-screen bg-cover" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={1} sticky={{ start: 3, end: 3 }}>
                            <div className="bg-paisagem bg-no-repeat bg-cover relative h-screen" />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.2}
                            sticky={{ start: 3, end: 3 }}
                        >
                            <div className="bg-lobo bg-no-repeat bg-right-bottom relative h-screen translate-x-20" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={4}>
                            <div className="w-screen bg-black h-screen flex items-center justify-center flex-col">
                                <button
                                    type="button"
                                    onClick={handleParallax}
                                    className="border p-3 mt-2 rounded-md hover:bg-white text-white text-xl hover:text-black"
                                >
                                    mudar parallax
                                </button>
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                </div>
            ) : (
                <div>
                    <div className="w-screen bg-black h-screen flex items-center justify-center flex-col">
                        <h1 className="text-white text-xl block">Parallax 2</h1>
                    </div>
                    <div className="">
                        <ParallaxBanner className="h-screen w-screen">
                            <ParallaxBannerLayer
                                expanded
                            >
                                <div className="h-screen w-screen bg-ceu bg-cover z-0" />
                            </ParallaxBannerLayer>
                            <ParallaxBannerLayer
                                speed={50}
                                scale={[.9, .6, "easeOut"]}
                                opacity={[0.6, 1]}
                            >
                                <div className="h-screen w-screen bg-lua z-10 bg-no-repeat bg-center" />
                            </ParallaxBannerLayer>
                            <ParallaxBannerLayer
                                expanded
                                speed={15}
                            >
                                <div className="h-screen w-screen bg-montanha bg-cover z-30" />
                            </ParallaxBannerLayer>
                            <ParallaxBannerLayer
                                expanded
                            >
                                <div className="h-screen w-screen bg-paisagem bg-cover z-20" />
                            </ParallaxBannerLayer>
                            <ParallaxBannerLayer
                                expanded
                                scale={[1, .9, "easeIn"]}
                            >
                                <div className="h-screen w-screen bg-lobo bg-no-repeat bg-right-bottom translate-x-20 z-30" />
                            </ParallaxBannerLayer>
                        </ParallaxBanner>
                    </div>
                    <div className="w-screen bg-black h-screen flex items-center justify-center flex-col">
                        <button
                            type="button"
                            onClick={handleParallax}
                            className="border p-3 mt-2 rounded-md text-white text-xl hover:bg-white hover:text-black"
                        >
                            mudar parallax
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeParallax;
