
import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>Good: {votes.good}</p>

      <p className={css.stat}>Neutral: {votes.neutral}</p>

      <p className={css.stat}>Bad: {votes.bad}</p>
      <p className={css.stat}>Total: {totalVotes}</p>

      <p className={css.stat}>Positive: {positiveRate}%</p>
    </div>
  );
}