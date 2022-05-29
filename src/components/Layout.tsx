import React from 'react'
import { JsxElement } from 'typescript'

type LayoutProps = {
    children: JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className='m-6 flex items-center flex-col' >
        {children}
    </main>
  )
}
