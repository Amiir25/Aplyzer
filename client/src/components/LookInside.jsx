import React from 'react'
import { assets, lookInside } from '../assets/assets'

const LookInside = () => {
  return (
    <>
    <div style={{ backgroundImage: `url(${lookInside.image4})` }}
    className={`h-screen bg-cover bg-center bg-no-repeat bg-fixed`}>
    </div>
    </>
  )
}

export default LookInside
