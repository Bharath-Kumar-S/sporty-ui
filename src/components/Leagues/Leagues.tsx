import { ListLeagues } from "./ListLeagues";
import { useState } from "react";
import { SelectLeague } from "./SelectLeague";
import { SearchLeague } from "./SearchLeague";

export const Leagues = () => {
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <h1>Leagues</h1>
      <p>Explore various sports leagues from around the world.</p>
      <SelectLeague
        onSelectSport={(sport) => setSelectedSport(sport)}
        value={selectedSport}
      />
      <SearchLeague
        onSearch={(query) => {
          setSearchQuery(query);
        }}
        value={searchQuery}
      />
      <ListLeagues selectedSport={selectedSport} searchQuery={searchQuery} />
    </>
  );
};
