import { styled } from "@theme";

export const Wrapper = styled("div", {
  background: "#6864BF",
  padding: "16px",
  borderRadius: "10px",

  "@md": {
    padding: "24px",
  },
});

export const Input = styled("input", {
  outline: "none",
  border: "none",
  background: "white",
  height: "62px",
  width: "100%",
  padding: "0 16px",
  borderRadius: "8px",
  fontSize: "20px",

  "@md": {
    height: "84px",
    padding: "0 24px",
    fontSize: "24px",
  },

  "&::placeholder": {
    color: "#888A93",
  },
});

export const SearchContainer = styled("div", {
  width: "100%",
  display: "block",
  
  '> p#results': {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',

    color: '#5A5B65',
    marginBottom: 0,
    marginTop: "32px",
  }
})
