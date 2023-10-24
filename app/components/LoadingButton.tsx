'use client'

import { useState } from 'react'

enum btnState {
    'INITIAL' = 'Save File',
    'LOADING' = 'Saving',
    'FINISHED' = 'File Saved'
}

const LoadingButton = () => {
  const [buttonState, setButtonState] = useState<btnState>(btnState.INITIAL)

  const [isSaving, setIsSaving] = useState(false)
  const [loading, setLoading] = useState(false)

  const initialButton = () => {
    return {buttonState}
  }

  const loadingButton = () => {
    return {buttonState}
  }

  const finishedButton = () => {
    return {buttonState}
  }

  return (
    <button 
        className='bg-gray-200 text-blue-900 px-4 py-2 rounded-sm'
        onClick={() => console.log('saving')}    
    >{buttonState}</button>
  )
}

export default LoadingButton