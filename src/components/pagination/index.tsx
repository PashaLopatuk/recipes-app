'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {FC, Fragment} from 'react'
import {normalize} from "@/shared/utils/normalize";
import {parseAsInteger, useQueryState} from "nuqs";


type PropsType = {
  pageCount: number
}

const PAGE_MAX_NUMBER = 3


const Index: FC<PropsType> = (
  {
    pageCount,
  }) => {
  const [currentPage, setCurrentPage] = useQueryState('page', {
    ...parseAsInteger,
    shallow: false,
    scroll: true
  })

  const pageArray = Array
    .from({
      length: normalize(pageCount, 1, PAGE_MAX_NUMBER) + 2,
    }, (_, index) => ({page: index }))
    .filter((el, index) => index > 0)

  console.log('pageArray: ', pageArray)

  const pageOnClick = (page: number) => {
    setCurrentPage(page).then()
  }

  const nextPageOnClick = (() => {
    setCurrentPage(data => data ? data + 1: 2).then()
  })

  const prevPageOnClick = (() => {
    setCurrentPage(data => data && data > 1 ? data - 1 : 1).then()
  })


  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            isDisabled={!!currentPage && currentPage <= 1}
            onClick={prevPageOnClick}
          />
        </PaginationItem>

        {pageArray.map((_, pageNumber) => (
          <Fragment key={pageNumber}>
            {pageNumber ? (
              <PaginationItem>
                <PaginationLink
                  onClick={() => {
                    pageOnClick(pageNumber)
                  }}
                  isActive={(currentPage ?? 1) === pageNumber}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ) : (<Fragment/>)}
          </Fragment>
        ))}
        {(pageCount > PAGE_MAX_NUMBER) && (
          <PaginationItem>
            <PaginationEllipsis/>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            isDisabled={!!currentPage && pageCount <= currentPage}
            onClick={nextPageOnClick}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default Index