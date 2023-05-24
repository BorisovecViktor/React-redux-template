import { Route, Routes } from 'react-router-dom'
import { HomePage, FirstPage } from '@pages/index'

export const paths = {
  HOME_PAGE: '/',
  FIRST_PAGE: '/first-page',
}

export const AppRoute = () => (
  <Routes>
    <Route element={<HomePage />} path={paths.HOME_PAGE} />
    <Route element={<FirstPage />} path={paths.FIRST_PAGE} />
  </Routes>
)
