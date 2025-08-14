import { ListLeagues } from "./ListLeagues";
import { useState } from "react";
import { SelectLeague } from "./SelectLeague";

export const Leagues = () => {
  const [selectedSport, setSelectedSport] = useState<string>("");

  return (
    <>
      <h1>Leagues</h1>
      <p>Explore various sports leagues from around the world.</p>
      <SelectLeague
        onSelectSport={(sport) => setSelectedSport(sport)}
        value={selectedSport}
      />
      <ListLeagues selectedSport={selectedSport} />
    </>
  );
};
