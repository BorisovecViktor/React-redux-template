import { Route, Routes } from 'react-router-dom'
import { HomePage } from '@pages/index'

export const paths = {
  HOME_PAGE: '/',
}

export const AppRoute = () => (
  <Routes>
    <Route element={<HomePage />} path={paths.HOME_PAGE} />
  </Routes>
)
