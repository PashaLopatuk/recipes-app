import type {FC, ReactNode} from 'react'
import SpinnerIcon from "@/shared/assets/spinner";

type LoaderProps = {
  children?: ReactNode;
  isLoading?: boolean;
  fallback?: ReactNode;
}


const Loader: FC<LoaderProps> = (
  {
    isLoading=true,
    children,
    fallback
  }) => {
  return (
    <>
      {!isLoading ? (
        <>{children}</>
      ) : (
        (fallback) ? (fallback) : (
          <div className="min-h-[10rem] w-full flex justify-center items-center">
            <SpinnerIcon className="h-8 w-8 animate-spin"/>
          </div>
        )
      )}
    </>
  );
}

export default Loader