if (window.innerWidth > 700) {
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.imageMasker(".mask-target" /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: true,
        text: "Shery",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.textAnimate(".text-target" /* Element to target.*/, {
        //Parameters are optional.
        style: 1,
        y: 10,
        delay: 0.1,
        duration: .1,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: .1,
    });

    Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
        images: ["/asset/resource/image/background/image1.jpg", "/asset/resource/image/background/image2.jpg", "/asset/resource/image/background/image3.jpg"] /*OR*/,
        //videos: ["video1.mp4", "video2.mp4"],
    });
}