import LocomotiveScroll from "locomotive-scroll";
import { getStore } from "./stores";

export default function initializeScroll(id : string, {
    wrapper = "window",
    duration = 2.5,
    orientation = "vertical",
    lerp = 0.3,
    gestureOrientation = "vertical",
    smoothWheel = true,
    smoothTouch = true,
    wheelMultiplier = 1,
    touchMultiplier = 2,
    normalizeWheel = true,
    easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})
{
    let wrapperElement;

    if (wrapper === "window") {
        wrapperElement = window;
    } else {
        if (!wrapper) {
            console.error("Wrapper element is not provided.");
            return;
        }

        wrapperElement = wrapper;
    }

    const contentElement = wrapperElement.firstChild;

    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            wrapper: wrapperElement,
            content: contentElement,
            lerp,
            duration,
            orientation,
            gestureOrientation,
            smoothWheel,
            smoothTouch,
            wheelMultiplier,
            touchMultiplier,
            normalizeWheel,
            easing,
        },
    });

    const locomotiveStore = getStore(id, null);
    locomotiveStore.set(locomotiveScroll);
}
