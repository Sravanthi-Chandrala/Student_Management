import Navbar from '@/src/components/navbar/navbar'
import Sidebar from '@/src/components/sidebar/sidebar'
import Table from '@/src/components/tables/tabel'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-row w-full bg-blue-50">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col items-start overflow-x-hidden">
        <Navbar />
        <Table />
      </div>
    </div>
  )
}

export default Page;