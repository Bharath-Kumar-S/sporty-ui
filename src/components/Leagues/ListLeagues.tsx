import { useMemo } from "react";
import { useGetLeagues } from "../../hooks/useGetLeagues";

type ListLeaguesProps = {
  selectedSport?: string;
  searchQuery?: string;
};

export const ListLeagues = ({
  selectedSport,
  searchQuery,
}: ListLeaguesProps) => {
  const { leagues, loading, error } = useGetLeagues();

  const filteredLeagues = useMemo(() => {
    return selectedSport
      ? leagues.filter((league) => league.strSport === selectedSport)
      : leagues;
  }, [leagues, selectedSport]);

  const searchedLeagues = useMemo(() => {
    return searchQuery
      ? filteredLeagues.filter((league) =>
          league.strLeague.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : filteredLeagues;
  }, [filteredLeagues, searchQuery]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>League Name</th>
            <th>Sport</th>
            <th>Alternate Name</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={3}>Loading leagues...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={3}>Error: {error.message}</td>
            </tr>
          )}
          {searchedLeagues.length === 0 && !loading && (
            <tr>
              <td colSpan={3}>No leagues found for the selected sport.</td>
            </tr>
          )}
          {searchedLeagues.map((league) => (
            <tr key={league.idLeague}>
              <td>{league.strLeague}</td>
              <td>{league.strSport}</td>
              <td>{league.strLeagueAlternate || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
