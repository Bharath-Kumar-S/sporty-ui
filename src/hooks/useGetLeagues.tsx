import { useEffect, useState } from "react";

type League = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
};

export const useGetLeagues = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [uniqueSports, setUniqueSports] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLeagues(data.leagues || []);
        const sports = data.leagues
          ? (Array.from(
              new Set(data.leagues.map((league: League) => league.strSport))
            ) as string[])
          : [];
        setUniqueSports(sports);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  return { leagues, uniqueSports, loading, error };
};
