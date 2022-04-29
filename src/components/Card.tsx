import React from 'react'

const Card:React.FC<{ card_colors: string, underline_color:string,card_text:string, value:string}> = ({card_colors,underline_color,card_text,value}) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
    <div className={`bg-gradient-to-b ${card_colors} rounded-lg shadow-xl p-5`}>
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className={`rounded-full p-5 ${underline_color}`}></div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h2 className="font-bold uppercase text-gray-600">
            {card_text}
          </h2>
          <p className="font-bold text-3xl">
           {value}{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card