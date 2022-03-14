import React from 'react'
import {RideList} from './RideList'


export const NearestRides = ({ridesObj,user}) => {
  return (
    <RideList ridesData={ridesObj} user={user}/>
  )
}
