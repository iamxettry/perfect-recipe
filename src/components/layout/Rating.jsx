import { LuStar } from 'react-icons/lu'
import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="flex items-center gap-1">
            <LuStar fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <LuStar fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <LuStar fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <LuStar fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <LuStar color="#715838" className="w-3  h-3"  />

            {
                rating && <span className="px-2 text-xs font-bold tracking-wider">4.5/5</span>
            }
          </div>
  )
}

export default Rating