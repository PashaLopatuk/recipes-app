import React from 'react';

import type {FC, ReactNode} from 'react'
import QueryProvider from "@/shared/providers/QueryProvider";

type ProviderProps = Readonly<{
  children: ReactNode
}>

const Providers:FC<ProviderProps> = ({children}) => {
  return (
    <>
      <QueryProvider>
        {children}
      </QueryProvider>
    </>
  )
}

export default Providers;