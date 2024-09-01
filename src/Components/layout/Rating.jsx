import { Star } from 'lucide-react'
import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="flex items-center gap-1">
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star fill="#FF8F00" color="#715838" className="w-3  h-3 "  />
            <Star color="#715838" className="w-3  h-3"  />

            {
                rating && <span className="px-2 text-xs font-bold tracking-wider">4.5/5</span>
            }
          </div>
  )
}

export default Rating