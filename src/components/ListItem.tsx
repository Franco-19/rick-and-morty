import { Container } from '@mui/system'
import React from 'react'

export default function ListItems({ children }: {children: JSX.Element | JSX.Element[];}) {
  return (
    <section className='my-6 flex justify-center flex-wrap gap-4' >
        { children }
    </section>
  )
}
