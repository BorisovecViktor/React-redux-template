import { Layout } from '@components/layout'
import { AppRoute } from '@utils/router'
import { Header } from './components/header'

export const App = () => {
  return (
    <Layout>
      <Header />
      <AppRoute />
    </Layout>
  )
}
