import { Link } from 'react-router-dom'
import classes from './header.module.scss'
import { paths } from '@utils/router'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__icon}>
        <Link to={paths.HOME_PAGE}>Home</Link>
      </div>
    </header>
  )
}
