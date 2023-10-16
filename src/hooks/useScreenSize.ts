import { useEffect, useState } from "react";

export default function useScreenSize(){
    const [state, setState] = useState({
        scrWidth: window.innerWidth,
        scrHeight: window.innerHeight
    })

    useEffect(() => {
        const handler = () => {
            setState({
                scrWidth: window.innerWidth,
                scrHeight: window.innerHeight
            });
        };

        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler)
        };
    }, []);

    return state;
}