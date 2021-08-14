import { Logo } from '../components/Logo'
import { SearchArea } from '../components/SearchArea'

import Head from 'next/head'
import { RepositoryList } from '../components/RepositoryList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | search_repo</title>
      </Head>

      <Logo />
      <SearchArea />

      <RepositoryList />
    </>
  )
}
