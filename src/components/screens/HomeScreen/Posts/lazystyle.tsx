// Package / Dependency Imports
import { styled, keyframes } from "@theme";
// Local Imports
import { ImageContainer } from "./style";


export const LazyTitle = styled("p", {
    width: "50%",
    margin: "1rem 0",
    height: "18px",
    background: "#50567480",
    position: "relative",
});

export const LazyExcerpt = styled("p", {
    width: "100%",
    margin: "1rem 0",
    height: "18px",
    background: "#DDDBDD",
    position: "relative",
})

export const LazyTypeContainer = styled("p", {
    width: "70%",
    margin: "1rem 0",
    height: "18px",
    lineHeight: "130%",
    background: "#b0aee1",
    position: "relative",
});

const shimmer = keyframes({
    "100%": {
        transform: "translateX(100%)",
    }
});

export const LazyPostItemContainer = styled("div", {
    width: "100%",
    cursor: "pointer",
    position: "relative",

    [`${LazyExcerpt}::after,
        ${LazyTitle}::after,
        ${LazyTypeContainer}::after,
        ${ImageContainer}::after`]: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: "translateX(-100%)",
        background: "linear-gradient(90deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, 0.2) 20%, rgba(255,255,255, 0.5) 60%, rgba(255,255,255, 0))",
        animation: `${shimmer} 2s infinite`,
        content: '',
    },
});
