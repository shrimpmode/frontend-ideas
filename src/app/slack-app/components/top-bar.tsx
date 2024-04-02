export const TopBar = () => {
    return (
        <div className='border-0 border-b-2 border-black h-8 flex items-center justify-between'>
            <div className='px-2 flex gap-2'>
                <div className='h-3 w-3 bg-black rounded-full'></div>
                <div className='h-3 w-3 border-2 border-black rounded-full'></div>
                <div className='h-3 w-3 border-2 border-black rounded-full'></div>
            </div>
            <div className='flex font-medium'>
                Slack
            </div>
            <div></div>
        </div>
    )
}