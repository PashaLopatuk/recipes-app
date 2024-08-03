import type {FC, ReactNode} from 'react';
import Header from "@/components/layout/Header";
import Providers from "@/shared/providers";

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={'max-w-[1440px] mx-auto'}>
      <Header/>
      <Providers>
        <main>{children}</main>
      </Providers>
    </div>
  )
}

export default Layout