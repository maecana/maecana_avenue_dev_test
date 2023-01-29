// Package / Dependency Imports
import React from "react";
import { WpImageProps } from "@types";
// Local Imports
import { Line, AvenueLink } from "@primitives";
import {
    PostItemContainer,
    ImageContainer,
    EmptyNameContainer,
    PostImage,
    PostBase,
    TypeContainer,
    Title,
    Excerpt,
    PostItemHeading,
    Footer,
} from "./style";

// [ START ] - CONSTANTS
const POST_ITEM_DEFAULT_IMAGE_PLACEHOLDER = '/images/avenue-new-placeholder.jpg';
// [ END ] - CONSTANTS

// [ START ] - INTERFACES
export type ItemProps = {
    type?: string;
    title?: string;
    excerpt?: string;
    featuredImage?: WpImageProps;
    uri?: string;
    slug?: string;
};
// [ END ] - INTERFACES


// [ START ] - CLASS
class PostItems extends React.Component<ItemProps> {
    render() {
        const {
            type,
            title,
            excerpt,
            featuredImage,
            uri,
            slug,
        } = this.props;

        return (
            <>
                <PostItemContainer>
                    {(type == 'People' && featuredImage == null) ? (
                        <ImageContainer>
                            <EmptyNameContainer>
                                <span>{(title?.split(" ").map(word => word[0]).join(""))?.toUpperCase() || 'N/A'}</span>
                            </EmptyNameContainer>
                        </ImageContainer>
                    ) : (
                        <ImageContainer>
                            <PostImage src={featuredImage?.node?.sourceUrl || POST_ITEM_DEFAULT_IMAGE_PLACEHOLDER} alt={excerpt || ""} />
                        </ImageContainer>
                    )}

                    <PostBase>
                        <div style={{width: '100%'}}>
                            <PostItemHeading>
                                <TypeContainer>{type || 'Page'}</TypeContainer>
                                <Title>{title || 'UNKNOWN'}</Title>
                            </PostItemHeading>
                            
                            <Excerpt>{excerpt || ''}</Excerpt>
                        </div>
                        
                        <Footer>
                            <Line color="#5CC9E2" height="2px" css={{marginTop:"32px", marginBottom: "16px"}} />
                            <AvenueLink href={uri}>Read More</AvenueLink>
                        </Footer>
                    </PostBase>
                </PostItemContainer>
            </>
        );
    }
};
// [ END ] - CLASS

// [ START ] - EXPORTS
export default PostItems;
// [ END ] - EXPORTS