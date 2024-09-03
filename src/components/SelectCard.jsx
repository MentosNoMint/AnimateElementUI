import '../App.css'

function SelectCard() {
    return (
        <div className='flex flex-col'>
            <div className='flex gap-[20px] flex-wrap justify-center'>
                <div className='bg-[#E8F1CD] w-[373px] h-[170px] rounded-[18px] flex cursor-pointer'>
                    <div className='flex flex-col h-full min-w-[203px]'>
                        <h1 className='font-semibold text-[20px] ml-[25px] mt-[20px]'>Разработчик игр</h1>
                        <p className='opacity-[0.8] font-medium ml-[25px] max-w-[152px] text-[13px]'>Научитесь создавать игры и 3D модели</p>
                        <div className='flex ml-[25px] h-full items-end'>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>11 классов</span>
                            </div>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center ml-[5px] mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>9 классов</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-end justify-end relative'>
                        <img src="img/gamepad.svg" alt="gamepad" className='mb-[-16px] mr-[-20px] absolute' />
                    </div>
                </div>
                <div className='bg-[#CDEBF1] w-[373px] h-[170px] rounded-[18px] flex cursor-pointer'>
                    <div className='flex flex-col h-full min-w-[203px]'>
                        <h1 className='font-semibold text-[20px] ml-[25px] mt-[20px]'>Разработчик веб</h1>
                        <p className='opacity-[0.8] font-medium ml-[25px] max-w-[152px] text-[13px]'>Научитесь создавать веб-сайты</p>
                        <div className='flex ml-[25px] h-full items-end'>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>11 классов</span>
                            </div>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center ml-[5px] mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>9 классов</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-end justify-end relative'>
                        <img src="img/labtop.svg" alt="gamepad" className='mb-[-16px] mr-[-14px] absolute' />
                    </div>
                </div>
            </div>
            <div className='flex gap-[20px] mt-[20px] flex-wrap justify-center'>
                <div className='bg-[#F1EDCD] w-[373px] h-[170px] rounded-[18px] flex cursor-pointer'>
                    <div className='flex flex-col h-full min-w-[203px]'>
                        <h1 className='font-semibold text-[20px] ml-[25px] mt-[20px]'>Разработчик 1C</h1>
                        <p className='opacity-[0.8] font-medium ml-[25px] max-w-[152px] text-[13px]'>Научитесь работать с таблицами в 1C</p>
                        <div className='flex ml-[25px] h-full items-end'>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>11 классов</span>
                            </div>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center ml-[5px] mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>9 классов</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-end justify-end relative'>
                        <img src="img/table.svg" alt="gamepad" className='mb-[-16px] mr-[-14px] absolute' />
                    </div>
                </div>
                <div className='bg-[#CDD1F1] w-[373px] h-[170px] rounded-[18px] flex cursor-pointer'>
                    <div className='flex flex-col h-full min-w-[203px]'>
                        <h1 className='font-semibold text-[20px] ml-[25px] mt-[20px]'>Разработчик икс</h1>
                        <p className='opacity-[0.8] font-medium ml-[25px] max-w-[152px] text-[13px]'>Научитесь работать с программой икс</p>
                        <div className='flex ml-[25px] h-full items-end'>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>11 классов</span>
                            </div>
                            <div className='bg-[#FFE178] rounded-[46px] flex justify-center items-center ml-[5px] mb-[14px]'>
                                <span className='text-[14px] px-[8px] py-[4px] font-medium'>9 классов</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-end justify-end relative'>
                        <img src="img/book.svg" alt="gamepad" className='mb-[-16px] mr-[-14px] absolute' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SelectCard