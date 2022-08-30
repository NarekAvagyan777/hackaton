import React from 'react'
import MainLayout from '../../layouts/MainLayout'

export default function Tractors() {
  return (
    <MainLayout>
        <div className='px-6 py-6 border-2 rounded my-6 mx-6'>
            <div className='mb-20'>
                <h1 className='text-2xl'>Tractors</h1>
            </div>

            <div>
                <div className='bg-gray-200 grid grid-cols-6'>
                    <div className='p-2 flex flex-col border border-gray-300'>
                        <div>Name</div>
                        <input type="text" className='inputWithAutoWidth' />
                    </div>
                    <div className='p-2 flex flex-col border border-gray-300'>
                        <div>Vin</div>
                        <input type="text" className='inputWithAutoWidth' />
                    </div>
                    <div className='p-2 flex flex-col border border-gray-300'>
                        <div>Year</div>
                        <input type="text" className='inputWithAutoWidth' />
                    </div>
                    <div className='p-2 flex flex-col border border-gray-300'>
                        <div>Model</div>
                        <input type="text" className='inputWithAutoWidth' />
                    </div>
                    <div className='p-2 flex flex-col border border-gray-300'>
                        <div>Status</div>
                        <input type="text" className='inputWithAutoWidth' />
                    </div>
                    <div className='p-2 flex flex-col justify-center border border-gray-300'>
                        <div>Edit</div>
                    </div>
                </div>

                <div>
                    {}
                </div>
            </div>
        </div>
    </MainLayout>
  )
}
