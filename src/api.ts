const Api = () => [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Fight Club",
  "Star Wars: Episode V - The Empire Strikes Back",
  "The Lord of the Rings: The Fellowship of the Ring",
  "One Flew Over the Cuckoo's Nest",
  "Inception",
  "Goodfellas",
  "Star Wars",
  "Seven Samurai",
  "Forrest Gump",
  "The Matrix",
  "The Lord of the Rings: The Two Towers",
  "City of God",
  "Se7en",
  "The Silence of the Lambs",
  "Once Upon a Time in the West",
  "Casablanca",
  "The Usual Suspects",
  "Raiders of the Lost Ark",
  "Rear Window",
  "It's a Wonderful Life",
  "Psycho",
  "Léon: The Professional",
  "Sunset Blvd.",
  "American History X",
  "Apocalypse Now",
  "Terminator 2: Judgment Day",
  "Saving Private Ryan",
  "Memento",
  "City Lights",
  "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  "Alien",
  "Modern Times",
  "Spirited Away",
  "North by Northwest",
  "Back to the Future",
  "Life Is Beautiful",
  "The Shining",
  "The Pianist",
  "Citizen Kane",
  "The Departed",
  "M",
  "Paths of Glory",
  "Vertigo",
  "Django Unchained",
  "Double Indemnity",
  "The Dark Knight Rises",
  "Aliens",
  "Taxi Driver",
  "American Beauty",
  "The Green Mile",
  "Gladiator",
  "The Intouchables",
  "WALL·E",
  "The Lives of Others",
  "Toy Story 3",
  "The Great Dictator",
  "The Prestige",
  "A Clockwork Orange",
  "Lawrence of Arabia",
  "Amélie",
  "To Kill a Mockingbird",
  "Reservoir Dogs",
  "Das Boot",
  "The Lion King",
];

export const searchMovieApi = (
  value: string,
  caseSensetive = true
): Promise<ReadonlyArray<string>> => {
  const normalizedValue = caseSensetive ? value : value.toLowerCase();
  const movies = Api();
  return Promise.resolve(
    movies.filter(
      (m) => caseSensetive? (m.startsWith(normalizedValue) && normalizedValue !== "") : (m.toLowerCase().startsWith(normalizedValue) && normalizedValue !== "")
    )
  );
};
