import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className='min-h-screen w-full bg-[#E9ECF1] px-0 sm:flex sm:items-center sm:justify-center sm:px-4 sm:py-6'>
      <div className='mx-auto flex min-h-screen w-full max-w-[375px] flex-col bg-[#F7F8F9] px-5 pb-10 pt-10 sm:min-h-[812px] sm:rounded-[14px]'>
        <div className='mt-auto'>
          <h1 className='text-[18px] leading-[21px] font-semibold text-[#1D2226]'>Welcome to PopX</h1>
          <p className='mt-[10px] max-w-[290px] text-[14px] leading-[22px] font-normal text-[#1D2226]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className='mt-[30px] flex flex-col gap-[10px]'>
          <Link to="/signup">
            <Button className='w-full rounded-[6px] text-[16px] leading-[17px] font-medium'>
              Create Account
            </Button>
          </Link>

          <Link to="/login">
            <Button variant='secondary' className='w-full rounded-[6px] text-[16px] leading-[17px] font-medium'>
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}