import React from 'react'
import {RideList} from './RideList'


export const PastRides = ({ridesObj,user}) => {
  return (
    <RideList ridesData={ridesObj} user={user}/>
  )
}
