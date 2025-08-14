import React, { useEffect } from "react";

export const useGetBadge = (id: number) => {
  const [badge, setBadge] = React.useState<string | null>(null);

  useEffect(() => {
    const getBadge = async () => {
      if (!id) return null;
      const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${id}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const fetchedBadge = data.seasons ? data.seasons[0].strBadge : null;
      setBadge(fetchedBadge);
    };

    getBadge().catch((error) => {
      console.error("Error fetching badge:", error);
      setBadge(null);
    });
  }, [id]);

  return badge;
};
