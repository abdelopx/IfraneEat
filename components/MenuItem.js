import React from 'react'
import Image from 'next/image'



function MenuItem({dish}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white drop-shadow-2xl transition hover:scale-105 ease-in duration-300">
          <Image
            className="max-w-100"
            src={`/${dish.image}.jpg`}
            alt=""
            width={330}
            height={220}
          />
          <div className="max-w-xs flex flex-col items-center p-5">
            <h2 className="text-xl text-black font-medium mb-2">
              {dish.name} ({dish.price} MAD)
            </h2>
            <p className="text-base italic text-green-500 font-light text-center">
              Ingredients: {dish.ingredients}
            </p>
          </div>
        </div>
  )
}

export default MenuItem