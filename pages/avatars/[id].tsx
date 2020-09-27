import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export const AvatarPage: NextPage = props => {
  const router = useRouter()

  return <span>{JSON.stringify(router.query, null, 2)}</span>
}

export default AvatarPage
