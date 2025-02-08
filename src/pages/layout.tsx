import { cn } from '@/lib/utils'
import React from 'react'


interface Prop {
  children: React.ReactNode
  style?: string
}
const RootLayout = ({children, style}: Prop) => {
  return (
    <div className={cn("lg:px-32 md:px-12 px-5 py-5", style)}>
      {children}
    </div>
  )
}

export default RootLayout
