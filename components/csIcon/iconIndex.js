import React, { useState, useEffect, useRef, memo, useCallback } from 'react'
function Getsvg({ className, addclass, width }) {
    const svgXML = useRef(null)
    // console.log(className, addclass)
    useEffect(() => {
        const iconfont = require('../../public/js/iconfont');
        // console.log("iconfont", iconfont)
        if (iconfont) {
            var parser = new DOMParser();
            var resXML = parser.parseFromString(iconfont, 'text/xml');
            var zeroXML = resXML.querySelector("#" + className);
            if (zeroXML && svgXML.current) {
                svgXML.current.innerHTML = zeroXML.innerHTML
                svgXML.current.setAttribute("id", zeroXML.getAttribute("id"))
                svgXML.current.setAttribute("viewBox", zeroXML.getAttribute("viewBox"))
            }
        }
    }, [])
 
    return (
        <svg width={width} className={`icon ${addclass && addclass != undefined ? addclass : ''}`} ref={svgXML}>
        </svg>
    )
}
 
export default Getsvg