import { ReactNode } from 'react'
import classes from './layout.module.scss'

type Props = Readonly<{
  children: ReactNode
}>

export const Layout = ({ children }: Props) => {
  return <div className={classes.container}>{children}</div>
}
