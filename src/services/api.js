const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function getUsers(signal) {
  const res = await fetch(`${BASE_URL}/users`, { signal })
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export async function getUserById(id, signal) {
  const res = await fetch(`${BASE_URL}/users/${id}`, { signal })
  if (!res.ok) throw new Error('Failed to fetch user detail')
  return res.json()
}