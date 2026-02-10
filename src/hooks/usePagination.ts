"use client";

import { useState } from "react";

interface UsePaginationOptions {
  totalItems: number;
  defaultPage?: number;
  defaultRowsPerPage?: number;
}

export function usePagination({
  totalItems,
  defaultPage = 1,
  defaultRowsPerPage = 10,
}: UsePaginationOptions) {
  const [page, setPage] = useState(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const totalPages = Math.max(1, Math.ceil(totalItems / rowsPerPage));

  const offset = (page - 1) * rowsPerPage;

  const setPageSafe = (nextPage: number) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  const changeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(1);
  };

  return {
    page,
    rowsPerPage,
    totalPages,
    offset,

    setPage: setPageSafe,
    setRowsPerPage: changeRowsPerPage,
  };
}
