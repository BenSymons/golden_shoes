import { useEffect, useState } from "react";

const useWidth = () => {
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return width
}

export default useWidth