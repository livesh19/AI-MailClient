'use client'
import React from 'react'
import { Button } from './ui/button'
import { getAurinkoAuthUrl } from '@/lib/aurinko'

const LinkAccountButton = () => {
  return (
    <Button onClick={async () =>{
        const authUrl = await getAurinkoAuthUrl('Google')
        window.location.href = authUrl
        console.log(authUrl)
    }}>
        Link
    </Button>
  )
}   

export default LinkAccountButton
