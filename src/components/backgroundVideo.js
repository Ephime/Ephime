import React, { useEffect, useState } from "react";
import './backgroundVideo.css';

const BackgroundVideo = () => {
    // State to track orientation
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        // Update state on window resize
        const handleResize = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isLandscape ? (
                <video width={400}
                    id="video-horizontal"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/Ephime/assets/Horizontal.mp4" type="video/mp4" />
                </video>
            ) : (
                <video
                    id="video-verticle"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/Ephime/assets/Verticle.mp4" type="video/mp4" />
                </video>
            )}
        </>
    );
};

export default BackgroundVideo;