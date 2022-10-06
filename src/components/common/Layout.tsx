import { memo } from 'react'
// import Footer from './Footer'
import { routes } from '../../data/routes'
import { NavBar } from './NavBar'

type Props = {
  readonly children: React.ReactNode
}

export const Layout = memo<Props>(({ children }) => {
  return (
    <>
      <div className="relative h-full w-full overflow-hidden bg-slate-400 transition-colors duration-300 dark:bg-slate-900">
        <header>
          <NavBar routes={routes} />
        </header>
        <main>{children}</main>
      </div>
    </>
  )
})

Layout.displayName = 'Layout'
