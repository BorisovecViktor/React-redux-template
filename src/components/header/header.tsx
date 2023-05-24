import { Link } from 'react-router-dom'
import classes from './header.module.scss'
import { paths } from '@utils/router'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__icon}>
        <h2>navbar</h2>
      </div>
      <nav>
        <ul className={classes.header__nav}>
          <li className={classes.header__nav__item}>
            <Link to={paths.HOME_PAGE}>Home</Link>
          </li>
          <li className={classes.header__nav__item}>
            <Link to={paths.FIRST_PAGE}>First page</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
