import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'react-router-dom'

/**
 * - Cách này được gọi là custom hook
 */
export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObject = Object.fromEntries([...searchParams])
  return searchParamsObject
}

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
