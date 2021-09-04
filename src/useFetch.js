import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://reqres.in/api/users?page=2'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const getUser = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(paginate(users.data))
    setLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])
  return { loading, users }
}