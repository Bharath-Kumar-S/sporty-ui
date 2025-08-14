import { useGetLeagues } from "../../hooks/useGetLeagues";

type SelectLeagueProps = {
  onSelectSport: (sport: string) => void;
  value?: string;
};

export const SelectLeague = ({ onSelectSport, value }: SelectLeagueProps) => {
  const { uniqueSports } = useGetLeagues();

  return (
    <div>
      <h3>Select a League</h3>
      {uniqueSports.length > 0 && (
        <select onChange={(e) => onSelectSport(e.target.value)} value={value}>
          <option value="">Select a sport</option>
          {uniqueSports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
