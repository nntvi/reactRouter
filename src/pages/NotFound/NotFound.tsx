import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from not found'
      })
    }, 1000)
  }, [])
  return <div>Not found</div>
}
