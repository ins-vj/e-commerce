import React from 'react'
import Productinfo from './productcard'

const Current_trend = () => {
  return (
    <div>Current-trend
        <br />
        <div className="container flex">
        <Productinfo/>
        <Productinfo/>
        <Productinfo/>
        <Productinfo/>
        </div>
    </div>
  )
}

export default Current_trend