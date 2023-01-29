// Package / Dependency Imports
import React from "react";
// Local Imports
import { Line, AvenueLink } from "@primitives";
import {
    LazyPostItemContainer,
    LazyTypeContainer,
    LazyTitle,
    LazyExcerpt,
} from "./lazystyle";
import {
    ImageContainer,
    PostImage,
    PostBase,
    PostItemHeading,
    Footer,
} from "./style";


const LazyLoadPostItem = () => {
    return (
        <>
            <LazyPostItemContainer>
                <ImageContainer>
                    <PostImage src={"/images/avenue-new-placeholder.jpg"} alt="Loading" />
                </ImageContainer>
                <PostBase>
                    <div style={{width: '100%'}}>
                        <PostItemHeading>
                            <LazyTypeContainer></LazyTypeContainer>
                            <LazyTitle></LazyTitle>
                        </PostItemHeading>
                        
                        <LazyExcerpt></LazyExcerpt>
                        <LazyExcerpt></LazyExcerpt>
                        <LazyExcerpt></LazyExcerpt>
                    </div>
                    
                    <Footer>
                        <Line color="#5CC9E2" height="2px" css={{marginTop:"32px", marginBottom: "16px"}} />
                        <AvenueLink href="#"></AvenueLink>
                    </Footer>
                </PostBase>
            </LazyPostItemContainer>
        </>
    )
}

export default LazyLoadPostItem;
