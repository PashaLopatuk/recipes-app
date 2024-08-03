import type {FC, ReactNode} from 'react';
import Header from "@/components/layout/Header";
import Providers from "@/shared/providers";

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header/>
      <Providers>
        <main>{children}</main>
      </Providers>
    </>
  )
}

export default Layout