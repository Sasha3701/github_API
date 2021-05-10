import { useReducer } from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../githubTypes'
import { GithubContext } from './githubContext'
import { GithubReducer } from './githubReducer'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const GithubState = ({children}) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const getUser = async name => {
        setLoading()
        const response = await axios.get(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()
        const response = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const search = async value => {
        setLoading()
        const response = await axios.get(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const setLoading = () => dispatch({type: SET_LOADING})

    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const {user, users, loading, repos} = state

    return (
        <GithubContext.Provider value={{
            setLoading, search, getRepos, getUser, clearUsers,
            users, user, loading, repos
        }}>
            {children}
        </GithubContext.Provider>
    )
}