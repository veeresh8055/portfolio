const cache = new Map()

export async function getCachedContributions(username) {
  if (cache.has(username)) {
    return cache.get(username)
  }

  const url = `${import.meta.env.VITE_GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${username}?y=last`
  const promise = fetch(url)
    .then((res) => {
      if (!res.ok) {
        return []
      }

      return res.json()
    })
    .then((data) => data.contributions ?? [])
    .catch(() => [])

  cache.set(username, promise)
  return promise
}
