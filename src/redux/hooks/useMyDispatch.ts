import { useDispatch } from 'react-redux'

import { StoreDispatch } from '../types/StoreDispatch'

export const useMyDispatch = useDispatch<StoreDispatch>
