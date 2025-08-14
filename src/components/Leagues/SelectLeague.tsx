import { useGetLeagues } from "../../hooks/useGetLeagues";

type SelectLeagueProps = {
  onSelectSport: (sport: string) => void;
  value?: string;
};

export const SelectLeague = ({ onSelectSport, value }: SelectLeagueProps) => {
  const { uniqueSports } = useGetLeagues();

  return (
    <div>
      <h4>Select a League</h4>

      <select onChange={(e) => onSelectSport(e.target.value)} value={value}>
        <option value="">Select a sport</option>
        {uniqueSports.length > 0 &&
          uniqueSports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
      </select>
    </div>
  );
};
