import React from 'react'

function Layout({children}) {
  return (
    <div className='h-[100vh] w-full'>
        <div className='grid  grid-cols-[2fr_3fr] h-full overflow-hidden '>
          <div className='bg-black flex items-center justify-center text-white text-7xl font-bold '>
              Board
          </div>

         <div className='bg-[#F5F5F5] flex items-center justify-center '>
            {children}
         </div>
        </div>
    </div>
  )
}

export default Layout