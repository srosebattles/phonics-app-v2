import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LetterTray } from '../src/components/LetterTray'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LetterTray />
    </div>
  )
}

export default Home
