import { useCallback, useEffect } from "react";

const usePageScroll = (conditionScroll: boolean, func: CallableFunction, deps: any) => {
    const handleScroll = useCallback(() => {

        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
            conditionScroll
        ) {
            console.log(deps);
            func();
        }
    }, [...deps]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [...deps]);
}

export default usePageScroll;