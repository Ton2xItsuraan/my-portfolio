import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        
        const updateMatches = () => {
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
        };

        // Initial check
        updateMatches();

        const listener = () => {
            updateMatches();
        };

        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        };
      
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;
