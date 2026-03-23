import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!data.email || !data.password) {
      toast.error('All fields are required')
      return
    }

    if (!data.email.includes('@')) {
      toast.error('Enter a valid email')
      return
    }

    if (data.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    const storedData = localStorage.getItem('userData')

    if (storedData) {
      const parsedData = JSON.parse(storedData)

      if (
        parsedData.email === data.email &&
        parsedData.password === data.password
      ) {
        toast.success('Login successful!')
        navigate('/home')
      } else {
        toast.error('Invalid email or password')
      }
    } else {
      toast.error('No account found. Please sign up first.')
    }
  }

  return (
    <div className='min-h-screen w-full bg-[#E9ECF1] px-0 sm:flex sm:items-center sm:justify-center sm:px-4 sm:py-6'>
      <div className='mx-auto flex min-h-screen w-full max-w-[375px] flex-col bg-[#F7F8F9] px-5 pb-10 pt-10 shadow-none sm:min-h-[812px] sm:rounded-[14px] sm:shadow-[0_16px_44px_rgba(17,24,39,0.16)]'>
        <h1 className='max-w-[220px] text-[18px] leading-[21px] font-semibold text-[#1D2226]'>Sign in to your PopX account</h1>
        <p className='mt-[14px] max-w-[250px] text-[14px] leading-[22px] font-normal text-[#1D2226]'>
          Enter your credentials to access your PopX account.
        </p>

        <form className='mt-[32px] flex flex-1 flex-col' onSubmit={submitForm}>
          <div className='relative'>
            <Label htmlFor='email' className='absolute -top-[8px] left-[10px] bg-[#F7F8F9] px-1 text-[15px] leading-[19px] font-medium text-[#6C25FF]'>
              Email address
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter email address'
              value={data.email}
              onChange={handleInput}
            />
          </div>

          <div className='relative mt-5'>
            <Label htmlFor='password' className='absolute -top-[8px] left-[10px] bg-[#F7F8F9] px-1 text-[15px] leading-[19px] font-medium text-[#6C25FF]'>
              Password
            </Label>
            <Input
              id='password'
              type='password'
              placeholder='Enter password'
              value={data.password}
              onChange={handleInput}
            />
          </div>

          <Button className='mt-[14px] w-full' type='submit'>
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}