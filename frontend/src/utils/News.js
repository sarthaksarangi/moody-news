export const news = [
  {
    title: "Local Community Garden Thrives",
    content:
      "A community garden in the downtown area has seen a record number of volunteers this year, with residents coming together to grow vegetables and flowers.",
    emotion: 1,
    url: "https://example.com/local-community-garden-thrives",
    author: "Jane Doe",
    date: "2024-05-01",
  },
  {
    title: "Innovative Start-Up Gains Momentum",
    content:
      "A local start-up has developed a new app that helps people manage their time more efficiently, gaining praise and investment from industry leaders.",
    emotion: 1,
    url: "https://example.com/innovative-start-up-gains-momentum",
    author: "John Smith",
    date: "2024-05-02",
  },
  {
    title: "New Park Opens Downtown",
    content:
      "The city opened a new park downtown today, featuring playgrounds, picnic areas, and a small lake, providing a new space for families to enjoy.",
    emotion: 1,
    url: "https://example.com/new-park-opens-downtown",
    author: "Emily Johnson",
    date: "2024-05-03",
  },
  {
    title: "Economic Growth Steady",
    content:
      "The latest economic report shows steady growth in various sectors, with employment rates holding stable and consumer spending showing moderate increases.",
    emotion: 0,
    url: "https://example.com/economic-growth-steady",
    author: "Michael Brown",
    date: "2024-05-04",
  },
  {
    title: "City Council Approves New Budget",
    content:
      "The city council has approved the new budget for the upcoming fiscal year, focusing on infrastructure improvements and public safety enhancements.",
    emotion: 0,
    url: "https://example.com/city-council-approves-new-budget",
    author: "Linda Williams",
    date: "2024-05-05",
  },
  {
    title: "Weather Forecast Predicts Mild Week",
    content:
      "The weather forecast for the week ahead predicts mild temperatures and partly cloudy skies, with no major storms on the horizon.",
    emotion: 0,
    url: "https://example.com/weather-forecast-predicts-mild-week",
    author: "David Jones",
    date: "2024-05-06",
  },
  {
    title: "Community Mourns Loss of Local Hero",
    content:
      "The community is mourning the loss of a local firefighter who passed away while saving lives during a recent apartment fire.",
    emotion: -1,
    url: "https://example.com/community-mourns-loss-of-local-hero",
    author: "Patricia Davis",
    date: "2024-05-07",
  },
  {
    title: "Beloved Neighborhood Diner Closes",
    content:
      "A beloved neighborhood diner that has served the community for over 50 years is closing its doors due to financial difficulties.",
    emotion: -1,
    url: "https://example.com/beloved-neighborhood-diner-closes",
    author: "Robert Garcia",
    date: "2024-05-08",
  },
  {
    title: "Natural Disaster Strikes Coastal Town",
    content:
      "A coastal town has been hit hard by a recent natural disaster, with many homes destroyed and residents displaced.",
    emotion: -1,
    url: "https://example.com/natural-disaster-strikes-coastal-town",
    author: "Maria Martinez",
    date: "2024-05-09",
  },
];

export const emotions = {
  1: "Happy",
  0: "Neutral",
  "-1": "Sad",
};

export const updatedNews = news.map((item) => ({
  ...item,
  emotion: emotions[item.emotion],
}));
