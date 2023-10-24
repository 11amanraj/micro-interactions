'use client'

import { useState } from 'react'

enum btnState {
    'INITIAL' = 'Save File',
    'LOADING' = 'Saving',
    'FINISHED' = 'File Saved'
}

const LoadingButton = () => {
  const [loading, setLoading] = useState(false)
  const [buttonState, setButtonState] = useState<btnState>(btnState.INITIAL)

  return (
    <button 
        className='bg-gray-200 text-blue-900 px-4 py-2 rounded-sm'
        onClick={() => console.log('saving')}    
    >{buttonState}</button>
  )
}

export default LoadingButton