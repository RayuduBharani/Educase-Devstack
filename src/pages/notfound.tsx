import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex h-screen w-80 flex-col bg-secondary p-5 shadow-md max-sm:w-full'>
        <div className='mt-auto mb-auto text-center'>
          <p className='text-sm font-semibold tracking-[0.2em] text-primary/80'>404</p>
          <h1 className='mt-2 text-2xl font-bold text-foreground'>Page not found</h1>
          <p className='mt-3 text-sm text-muted-foreground'>
            The page you are looking for does not exist.
          </p>
        </div>

        <Button
          type='button'
          onClick={() => navigate('/')}
          className='mb-2 h-10 w-full rounded-md text-sm font-semibold'
        >
          Back to Welcome
        </Button>
      </div>
    </div>
  )
}
