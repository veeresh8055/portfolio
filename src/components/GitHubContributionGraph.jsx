import { useCallback, useEffect, useMemo, useState } from "react"

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@/components/kibo-ui/contribution-graph"
import { cn } from "@/lib/utils"
import { fetchContributionData } from "@/lib/get-cached-contributions"

const username = "veeresh8055"
const githubProfileUrl = `https://github.com/${username}`
const contributionLevels = [
  "bg-[#ebedf0] dark:bg-[#161b22]",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
]

export default function GitHubContributionGraph() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const refreshContributions = useCallback(async () => {
    const response = await fetchContributionData(username, "all")
    setData(response.contributions ?? [])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    refreshContributions()

    const interval = window.setInterval(refreshContributions, 5 * 60 * 1000)
    const refreshOnFocus = () => refreshContributions()
    window.addEventListener("focus", refreshOnFocus)

    return () => {
      window.clearInterval(interval)
      window.removeEventListener("focus", refreshOnFocus)
    }
  }, [refreshContributions])

  const totalCount = useMemo(() => data.reduce((total, day) => total + day.count, 0), [data])

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-5 sm:pb-10 lg:px-7">
                  
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-5 shadow-sm sm:p-6">
        {isLoading ? (
          <div className="flex h-36 items-center justify-center text-sm text-muted-foreground">Loading GitHub contributions…</div>
        ) : data.length > 0 ? (
          <ContributionGraph data={data}>
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <ContributionGraphBlock
                  activity={activity}
                  className={cn(
                    'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                    'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                    'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                    'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                    'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                  )}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter className="mt-3 items-center border-t border-border/60 pt-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{totalCount.toLocaleString("en-IN")}</span> contributions on{" "}
                <a className="font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground" href={githubProfileUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                .
              </p>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Contribution intensity: less to more">
                <span>Less</span>
                <div className="flex gap-1" aria-hidden="true">
                  {contributionLevels.map((color, index) => (
                    <span key={index} className={`size-3 rounded-sm ${color}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </ContributionGraphFooter>
          </ContributionGraph>
        ) : (
          <p className="text-sm text-muted-foreground">GitHub contribution data is currently unavailable.</p>
        )}
      </div>
    </section>
  )
}
