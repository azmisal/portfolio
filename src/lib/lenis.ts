import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis() {
    if (lenis) return lenis;


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = Lenis as any;

    lenis = new L({
        duration: 1.1,
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
        wheelMultiplier: 1,
    });

    function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return lenis;
}

export function stopLenis() {
    lenis = null;
}

