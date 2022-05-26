import { Container } from '@mui/system'
import React from 'react'

type ListItemsProps = {
    children: JSX.Element;
}

export default function ListItems({ children }: ListItemsProps) {
  return (
    <section className='mx-4' >
        { children }
    </section>
  )
}
