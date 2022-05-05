import React from 'react'
import Card from './Card'
const Overview:React.FC<{balance:string}> = ({balance}) => {
  return (
    <div
    id="main"
    className="main-content flex-1 w-11/12 pt-3 bg-gray-100 md:mt-2 pb-24 md:pb-5 rounded-xl"
  >
    <div className="bg-gray-700 pt-3">
      <div className=" bg-gray-500 rounded-t-xl p-4 shadow text-2xl text-white">
        <h1 className="font-bold pl-2">Overview</h1>
      </div>
    </div>

    <div className="flex flex-wrap pr-4">
      <Card
        card_colors="from-green-200 to-green-100 border-b-4 border-green-600"
        underline_color="bg-green-600"
        card_text="ETH Avaliable"
        value={balance.substring(0, 6)}
      />
      <Card
        card_colors="from-pink-200 to-pink-100 border-b-4 border-pink-500"
        underline_color="bg-pink-600"
        card_text="Collections"
        value={balance.substring(0, 6)}
      />
      <Card
        card_colors="from-yellow-200 to-yellow-100 border-b-4 border-yellow-600"
        underline_color="bg-yellow-600"
        card_text="NFT"
        value={balance.substring(0, 6)}
      />
      <Card
        card_colors="from-blue-200 to-blue-100 border-b-4 border-blue-500"
        underline_color="bg-blue-600"
        card_text="Total Transactions"
        value={balance.substring(0, 6)}
      />
      <Card
        card_colors="from-indigo-200 to-indigo-100 border-b-4 border-indigo-500"
        underline_color="bg-indigo-600"
        card_text="Approved Transactions"
        value={balance.substring(0, 6)}
      />
      <Card
        card_colors="from-red-200 to-red-100 border-b-4 border-red-500"
        underline_color="bg-red-600"
        card_text="Failed Transactions"
        value={balance.substring(0, 6)}
      />
    </div>
  </div>
  )
}

export default Overview