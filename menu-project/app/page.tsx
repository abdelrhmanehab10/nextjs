"use client"

import { Inter } from 'next/font/google'
import Header from './components/Header'
import Menu from './components/menu/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
    </>
  )
}
