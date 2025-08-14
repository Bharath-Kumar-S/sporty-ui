import { useMemo } from "react";
import { useGetLeagues } from "../../hooks/useGetLeagues";

type ListLeaguesProps = {
  selectedSport?: string;
};

export const ListLeagues = ({ selectedSport }: ListLeaguesProps) => {
  const { leagues, loading, error } = useGetLeagues();

  const filteredLeagues = useMemo(() => {
    return selectedSport
      ? leagues.filter((league) => league.strSport === selectedSport)
      : leagues;
  }, [leagues, selectedSport]);

  return (
    <div>
      ListLeagues
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {filteredLeagues.map((league) => (
          <li key={league.idLeague}>{league.strLeague}</li>
        ))}
      </ul>
      {leagues.length === 0 && !loading && <p>No leagues found.</p>}
    </div>
  );
};
