import { FormEvent, useState } from 'react'

import { useMyDispatch } from '../redux/hooks'
import { setPage } from '../redux/pokemonRedux'

export const useSearchPageForm = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useMyDispatch()

  const searchPage = (event: FormEvent) => {
    event.preventDefault()
    const searchedPage = ~~inputValue
    if (searchedPage >= 1) dispatch(setPage(searchedPage))
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

  return { inputValue, searchPage, onChange }
}
