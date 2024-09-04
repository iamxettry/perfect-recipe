import React from 'react'

export const Tags = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-xl md:text-2xl font-bold'>Tags</h1>

        <div className='my-3'>
            <button className=' border border-neutral-400 m-1  font-medium p-2 text-sm min-w-20 rounded-md'>
                #Desert
            </button>
            <button className=' border border-neutral-400 m-1  font-medium p-2 text-sm min-w-20 rounded-md'>
                #CheseCakeRecipe
            </button>
            <button className=' border border-neutral-400 m-1  font-medium p-2 text-sm min-w-20 rounded-md'>
                #FoodBlog
            </button>
            <button className=' border border-neutral-400 m-1  font-medium p-2 text-sm min-w-20 rounded-md'>
                #DeliciousDeserts
            </button>
            <button className=' border border-neutral-400 m-1  font-medium p-2 text-sm min-w-20 rounded-md'>
                #Baking
            </button>
        </div>
    </div>
  )
}
