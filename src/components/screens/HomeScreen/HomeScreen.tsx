// Package / Dependency Imports
import { Spacer } from "@primitives";
import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Local Imports
import { CallToAction } from "./CallToAction";
import { CallToActionProps } from "./CallToAction/CallToAction";
import { ItemProps } from "./Posts/PostItems";
import { SearchInput } from "./SearchInput";
import { PostContainer, PageWrapper, PostWrapper } from "./style";
import LazyLoadPostItem from "./Posts/LazyLoadPostItem";
import { setPostItems, setFilteredPostItems, selectFilteredPostItems } from "src/features/Post/PostSlice";


// Simulate Lazy Loading
const LazyPostItems = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () => import("./Posts/PostItems")
  );
});


interface IProps {
  items: ItemProps[];
  callToAction: CallToActionProps;
}
function HomeScreen({ items, callToAction }: IProps) {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredPostItems);
  
  useEffect(() => {
    dispatch(setPostItems(items));
    dispatch(setFilteredPostItems(items));
  }, [items, dispatch]);
  

  return (
    <PageWrapper>
      <SearchInput />
      <Spacer height={[32, null, 40]} />

      <PostContainer>
        <PostWrapper>
          {
            filteredItems && filteredItems.map(
              (item: any, index: number) => (
                <Suspense fallback={<LazyLoadPostItem />}>
                  <LazyPostItems key={index} {...item} />
                </Suspense>
              )
            )
          }
        </PostWrapper>
      </PostContainer>
      
      <Spacer height={[32, null, 40]} />
      <CallToAction {...callToAction} />
      <Spacer height={[32, null, 40]} />
    </PageWrapper>
  );
}

export default HomeScreen;
