export const msInADay = 1000 * 60 * 60 * 24;
export const countdownDate = new Date().getTime() + 7 * msInADay;
export const competitionStartDate = new Date(countdownDate).toUTCString();
export const apiUrl =
  "https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda";
export const errorMessage =
  "Fetch failed - please refresh your browser or check your internet connection";
