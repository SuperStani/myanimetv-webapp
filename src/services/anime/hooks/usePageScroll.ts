import { useCallback, useEffect } from "react";

const usePageScroll = (conditionScroll: boolean, func: CallableFunction, deps: any) => {
    const handleScroll = useCallback(() => {
        const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        if (isBottom && conditionScroll) {
            func();
        }
    }, [conditionScroll, func, ...deps]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
};

export default usePageScroll;