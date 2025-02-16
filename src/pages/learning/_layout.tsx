import React, { ReactNode } from 'react'
import Header from './components/package-header'

const StudentLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='px-20 py-10'>
       <div className="flex overflow-hidden flex-col bg-white">
       <Header />
      {children}
      </div>
    </div>
  )
}

export default StudentLayout
