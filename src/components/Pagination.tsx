import { Button } from '../styles/Button'

type RenderActualPageProps = {
    number: number;
}

export default function Pagination() {

    const handleButtonClick = () => {
        console.log('clicked')
    }

    const RenderActualPage = ({ number }: RenderActualPageProps) => {
        return (
            <button className='text-slate-700 font-semibold rounded-full hover:bg-yellow-200 w-10 transition-all duration-200' >
                { number }
            </button>
        )
    }

  return (
    <div className='flex gap-3' >
        <button onClick={handleButtonClick} className={ Button }>{"<"}</button>
        <RenderActualPage number={1} />
        <RenderActualPage number={2} />
        <RenderActualPage number={3} />
        <button className={ Button }>{">"}</button>
    </div>
  )
}
