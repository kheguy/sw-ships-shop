import API from '@/api/index.js'

import * as types from './types'

export default {
    [types.GET_ALL_STARSHIPS]: async (store, data) => {
        const STARSHIPS = await API.starships.list()
        return STARSHIPS
    }
}