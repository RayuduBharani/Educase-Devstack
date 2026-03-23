import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function SignUp() {
  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '',
  })
  const navigate = useNavigate()

  const requiredFields = [
    { id: 'fullName', label: 'Full Name', placeholder: 'Enter your name', type: 'text' },
    { id: 'phoneNumber', label: 'Phone number', placeholder: 'Enter your phone number', type: 'tel' },
    { id: 'email', label: 'Email address', placeholder: 'Enter your email', type: 'email' },
    { id: 'password', label: 'Password', placeholder: 'Enter your password', type: 'password' },
  ]

  const agencyOptions = [
    { id: 'No', label: 'No' },
    { id: 'Yes', label: 'Yes' },
  ]

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleRadio = (value: string) => {
    setData((prev) => ({
      ...prev,
      isAgency: value,
    }))
  }

const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  if (!data.fullName || !data.phoneNumber || !data.email || !data.password || !data.isAgency) {
    toast.error('Please fill all required fields')
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    toast.error('Invalid email format')
    return
  }

  if (!/^\d{10}$/.test(data.phoneNumber)) {
    toast.error('Phone number must be 10 digits')
    return
  }

  if (data.password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return
  }

  localStorage.setItem('userData', JSON.stringify(data))
  toast.success('Account created successfully!')
  navigate('/login')
}

  return (
    <div className='min-h-screen w-full bg-[#E9ECF1] px-0 sm:flex sm:items-center sm:justify-center sm:px-4 sm:py-6'>
      <div className='mx-auto flex min-h-screen w-full max-w-[375px] flex-col bg-[#F7F8F9] px-5 pb-10 pt-10 sm:min-h-[812px] sm:rounded-[14px] sm:shadow-[0_16px_44px_rgba(17,24,39,0.16)]'>
        <h1 className='max-w-[220px] text-[18px] font-semibold text-[#1D2226]'>
          Create your PopX account
        </h1>

        <form className='mt-[32px] flex flex-1 flex-col' onSubmit={submitForm}>
          {requiredFields.map((field, index) => (
            <div key={field.id} className={index === 0 ? 'relative' : 'relative mt-5'}>
              <Label
                htmlFor={field.id}
                className='absolute-top-[8px] left-[10px] bg-[#F7F8F9] px-1 text-[13px] font-medium text-[#6C25FF]'
              >
                {field.label}
                <span className='text-red-500'>*</span>
              </Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={data[field.id as keyof typeof data]}
                onChange={handleInput}
              />
            </div>
          ))}

          <div className='relative mt-5'>
            <Label
              htmlFor='companyName'
              className='absolute-top-[8px] left-[10px] bg-[#F7F8F9] px-1 text-[13px] font-medium text-[#6C25FF]'
            >
              Company name
            </Label>
            <Input
              id='companyName'
              placeholder='Enter company name'
              value={data.companyName}
              onChange={handleInput}
            />
          </div>

          <div className='mt-6'>
            <p className='text-[15px] font-medium text-[#1D2226]'>
              Are you an Agency?<span className='text-red-500'>*</span>
            </p>

            <div className='mt-[10px] flex gap-6'>
              {agencyOptions.map((option) => (
                <div key={option.id} className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='isAgency'
                    value={option.id}
                    checked={data.isAgency === option.id}
                    onChange={() => handleRadio(option.id)}
                    className='h-[20px] w-[20px] cursor-pointer accent-[#6C25FF]'
                  />
                  <Label className='cursor-pointer text-[14px] text-[#1D2226]'>
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button type='submit' className='mt-auto w-full'>Create Account</Button>
        </form>
      </div>
    </div>
  )
}