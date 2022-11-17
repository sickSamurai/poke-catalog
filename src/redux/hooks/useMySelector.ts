import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { StoreState } from '../types/StoreState'

export const useMySelector: TypedUseSelectorHook<StoreState> = useSelector
