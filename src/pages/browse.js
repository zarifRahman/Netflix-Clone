import React from 'react'
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter';

const Browse = () => {
  // we need the series and the Films
  const { series } = useContent('series');
  const { films } = useContent("films");
  // then we need the slides
  const slides = selectionFilter({ series, films });
  // pass it to the browse container



  return <BrowseContainer slides ={slides} />;
}

export default Browse