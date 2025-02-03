import React, {ReactNode} from 'react'

const RootLayout = ({children, style}: {children: ReactNode, style?: string}) => {
  return (
    <div className={`${style} min-h-screen root-container `}>
      {children}
    </div>
  )

}

export default RootLayout
