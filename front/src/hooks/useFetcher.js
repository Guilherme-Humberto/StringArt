import useSwr from 'swr'
import api from '../services/api'

export default function useFetcher(url) {
    const { data } = useSwr(url, async url => {
        const response = await api.get(url)
        return response.data
    })

    return { data }
}