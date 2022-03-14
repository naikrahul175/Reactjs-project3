import React from 'react'
import {RideList} from './RideList'


export const UpcomingRides = ({ridesObj,user}) => {
  return (
    <RideList ridesData={ridesObj} user={user}/>
  )
}
