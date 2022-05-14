import React from 'react'
import { useContent } from '../hooks'

const Browse = () => {
  // we need the series and the Films
  const { series } = useContent('series');
  console.log(series, "--series")


  // then we need the slides

  // pass it to the browse container


  return (
    <div>Browse</div>
  )
}

export default Browse