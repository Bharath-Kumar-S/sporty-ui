type SearchLeagueProps = {
  onSearch: (query: string) => void;
  value?: string;
};

export const SearchLeague = ({ onSearch, value }: SearchLeagueProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search leagues..."
        onChange={(e) => onSearch(e.target.value)}
        value={value}
      />
    </>
  );
};
