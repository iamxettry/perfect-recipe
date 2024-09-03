import React from 'react'

const WrapperContainer = ({children}) => {
  return (
    <div className='max-w-[90%] xl:max-w-[80%] mx-auto'>{children}</div>
  )
}

export default WrapperContainer