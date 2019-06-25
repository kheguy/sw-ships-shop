import axios from 'axios'

import {DOMAIN, STARSHIPS} from '@/api/urls'

export default {
    list() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${DOMAIN}${STARSHIPS}`
            })
            .then((response) => {
                resolve(response.data.results)
            })
            .catch((error) => {
                reject(new Error(error))
            })
        })
    }
}