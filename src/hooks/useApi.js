import {} from 'react'
import useFetch from './useFetch'

export const BASE_URL = 'http://localhost:8000/api'
// const routes = ['index', 'store', 'update', 'delete', 'show'];


const useApi = (resource, custom = {}) => {
    const { loading, get, post, put, del } = useFetch()

    const url = (URL) => BASE_URL + `/${resource}` + URL;
    
    return {
        loading,
        url,
        index() {
            return get(url(`/`))
        },

        show(id) {
            return get(url(`/${id}`))
        },
        
        store(body) {
            return post(url(`/`), { body })
        },
        
        update(id, body) {
            return put(url(`/${id}`), { body })
        },

        destroy(id) {
            return del(url(`/${id}`))
        },
        ...custom
    }

}

export const useDptApi = () => {
    const { loading, get } = useFetch()
    const endpoints = useApi('departments')

    return { 
        ...endpoints,
        loading: loading || endpoints.loading,
        listModules(id) {
            const url = endpoints.url(`/${id}/modules`)
            // console.log({url})
            return get(url)
        }
    }
}

export const useStudentApi = () => {
    const { loading, post, get } = useFetch()
    const endpoints = useApi('students')

    return {
        ...endpoints,
        loading: loading || endpoints.loading,
        storeMarks(id, body) {
            return post(endpoints.url(`/${id}/marks`), { body })
        },

        listMarks(id) {
            return get(endpoints.url(`/${id}/marks`))
        }
    }
}

export const useTeacherApi = () => {
    const endpoints = useApi('teachers')

    return { ...endpoints }
}

export const useModuleApi = () => {
    const { post, get } = useFetch()
    const endpoints = useApi('modules')

    return {
        ...endpoints,
        storeMarks(id, body) {
            return post(endpoints.url(`/${id}/marks`), { body })
        },

        listMarks(id) {
            return get(endpoints.url(`/${id}/marks`))
        }
    }
}

export const useMarks = () => {

    const endpoints = useApi('marks')
    
    return { ...endpoints }

}

export default useApi
