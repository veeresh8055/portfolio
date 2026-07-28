const cache = new Map()

export async function fetchContributionData(username, year = "all") {
  const baseUrl = import.meta.env.VITE_GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"
  const url = `${baseUrl}/v4/${username}?y=${year}&t=${Date.now()}`

  try {
    const response = await fetch(url, { cache: "no-store" })
    return response.ok ? response.json() : { total: {}, contributions: [] }
  } catch {
    return { total: {}, contributions: [] }
  }
}

export async function getCachedContributionData(username, year = new Date().getFullYear()) {
  const cacheKey = `${username}-${year}`

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)
  }

  const promise = fetchContributionData(username, year)

  cache.set(cacheKey, promise)
  return promise
}

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
