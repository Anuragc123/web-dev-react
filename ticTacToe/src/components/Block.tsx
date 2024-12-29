import React from 'react'

interface BlockProps{
    value:string | null
    onClick?:()=>void
}
const Block : React.FC<BlockProps>=(props) => {
  return (
    <div className=' border-2 border-solid border-black h-[100px] w-[100px] flex justify-center items-center  text-3xl font-bold'
    
    onClick={props.onClick}>
        {props.value}
    </div>
  )
}

export default Block