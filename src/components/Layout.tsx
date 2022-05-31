export default function Layout({ children }: {children: JSX.Element[]}) {
  return (
    <main className='m-6 flex items-center flex-col' >
        {children}
    </main>
  )
}
