import React, { ReactNode } from 'react'
import Header from './components/package-header'

const StudentLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='pt-10'>
       <div className="flex overflow-hidden flex-col bg-white">
       <Header />
        <div className='xl:px-20 px-8 bg-zinc-100 '>
        {children}
        </div>
      </div>
    </div>
  )
}

export default StudentLayout
