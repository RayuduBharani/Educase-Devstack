import { Camera, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroImage from '@/assets/Ellipse.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function Home() {

  const navigate = useNavigate()
  const logout = () => {
    toast.success('Logged out successfully!')
    navigate('/')
  }
  return (
    <div className='min-h-screen w-full bg-[#E9ECF1] px-0 sm:flex sm:items-center sm:justify-center sm:px-4 sm:py-6'>
      <div className='mx-auto min-h-screen w-full max-w-[375px] bg-[#F7F8F9] px-5 pb-10 pt-7 shadow-none sm:min-h-[812px] sm:rounded-[14px] sm:shadow-[0_16px_44px_rgba(17,24,39,0.16)]'>
        <header className='border-b border-[#E0E0E0] pb-[16px] flex items-center justify-between'>
          <h1 className='text-[18px] leading-[21px] font-normal text-[#1D2226]'>
            Account Settings
          </h1>
          <Button
            type='button'
            size='icon'
            onClick={logout}
          >
            <LogOut className='h-[12px] w-[12px] rounded-none' />
          </Button>
        </header>

        <section className='pt-[30px]'>
          <div className='flex items-start gap-5'>

            <div className='relative'>
              <img
                src={heroImage}
                alt="Profile"
                className='h-[76px] w-[76px] rounded-full object-cover'
              />

              <Button
                type='button'
                size='icon'
                className='absolute bottom-0 right-0 h-[23px] w-[23px] bg-[#6C25FF] text-white hover:bg-[#5D1EF2]'
              >
                <Camera className='h-[12px] w-[12px]' />
              </Button>
            </div>

            <div>
              <h2 className='text-[15px] leading-[19px] font-medium text-[#1D2226]'>
                Marry Doe
              </h2>
              <p className='mt-[4px] text-[14px] leading-[19px] font-normal text-[#1D2226]'>
                marry@gmail.com
              </p>
            </div>
          </div>

          <p className='mt-[28px] border-t border-dashed border-[#CBCBCB] pt-[24px] text-[14px] leading-[22px] text-[#1D2226]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque odit non, ex fugit fugiat dignissimos rerum ea adipisci cum dolores aliquid unde autem minima excepturi! Consequatur sunt quo ex!
          </p>
        </section>
      </div>
    </div>
  )
}