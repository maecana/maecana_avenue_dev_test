// Package / Dependency Imports
import { styled } from "@theme";
// Local Imports
import { Image } from "@primitives";

export const ImageContainer = styled("div", {
    position: "relative",
    display: "block",
    overflow: "hidden",
    width: "auto",
    height: "calc(5vh + 255px)",
    borderRadius: "24px",

    "@xs": {
        height: "calc(10vh + 455px)",
    },

    "@sm": {
        height: "calc(10vh + 355px)",
    },

    "@md": {
        height: "calc(10vh + 255px)",
    },

    "@lg": {
        height: "calc(10vh + 155px)",
    },
});

export const PostImage = styled(Image, {
    display: "block",
    overflow: "hidden",
    borderRadius: "24px",
    width: "100%",
    height: "100%",
    img: { transition: "750ms" },
});

export const PostBase = styled("div", {
    minHeight: "332px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
});

export const PostItemHeading = styled("div", {
    display: "block",
    width: "100%",
    height: "auto",
    marginBottom: "1rem",
});

export const TypeContainer = styled("p", {
    marginTop: "24px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "130%",
    color: "#8581F1",
});

export const Title = styled("p", {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "34px",
    lineHeight: "120%",
    color: "#2C3355",
});

export const Excerpt = styled("p", {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#5A5B65",
})

export const Footer = styled("div", {
    display: "block",
    width: "100%",

    '> a': {
        fontFamily: 'Open Sans',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "150%",

        textAlign: "center",
        textDecorationLine: "underline",

        color: "#2C92BE",
    }
});

export const EmptyNameContainer = styled("div", {
    background: "#5CC9E2",
    display: "block",
    overflow: "hidden",
    borderRadius: "24px",
    width: "100%",
    height: "100%",
    
    '> span': {
        transition: '750ms',
        color: "#89E7FD",
        fontSize: "8rem",
        fontWeight: "1000",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
});

export const PostItemContainer = styled("div", {
    width: "100%",
    cursor: "pointer",

    [`&:hover`]: {
        img: {
            transform: "scale(1.1)",
        },

        span: {
            fontSize: "10rem",
        }
    },
});
