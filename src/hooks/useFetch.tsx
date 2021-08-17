import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(async (response) => {
                const json = await response.json()
                setValue(json)
            })
            .catch((error) => {
                setError(error)
            })
    }, [url])


    return { value, error }
}