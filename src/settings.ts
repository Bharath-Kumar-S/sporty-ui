import dotenv from "dotenv";
dotenv.config();

// fallback urls for leagues and badges
// these can be overridden by environment variables
// LEAGUE_URL and BADGE_URL
// in the .env file or in the environment where the app is running

export const settings = {
  leaguesUrl:
    process.env.LEAGUE_URL ||
    "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php",
  badgeUrl:
    process.env.LEAGUE_URL ||
    "https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php",
};
