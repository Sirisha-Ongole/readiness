import React from 'react'

export const Utility = () => {
  return (
    <div>Utility</div>
  )
}

const date = new Date();
date.setMinutes(date.getMinutes() + 240);
export const showTime = date.getHours()+ ':' + date.getMinutes();
