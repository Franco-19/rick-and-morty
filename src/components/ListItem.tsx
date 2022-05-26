import { Container } from '@mui/system'
import React from 'react'

type ListItemsProps = {
    children: JSX.Element;
}

export default function ListItems({ children }: ListItemsProps) {
  return (
    <section className='m-6 flex flex-wrap gap-4 justify-center' >
        { children }
    </section>
  )
}
