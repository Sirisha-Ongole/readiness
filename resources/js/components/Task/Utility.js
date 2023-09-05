import React from 'react'
import { useSelector } from "react-redux";


const date = new Date();
date.setMinutes(date.getMinutes() + 240);
export const showTime = date.getHours()+ ':' + date.getMinutes();

