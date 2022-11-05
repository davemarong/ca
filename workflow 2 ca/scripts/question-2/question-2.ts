enum GameGenre {
  Action = "ACTION",
  Adventure = "ADVENTURE",
  Sport = "SPORT",
}

interface Game {
  name: string;
  genre: GameGenre;
  onlinePlay?: boolean;
}

const createGame = ({ name, genre, onlinePlay = false }: Game): void => {
  console.log("=============");
  console.log("Game created:");
  console.log("-------------");
  console.log("Name:", name);
  console.log("Genre:", genre);
  console.log("Online play:", onlinePlay);
};

// 4. Change these function calls to use the enum you created in step 1
createGame({ name: "Fun action game", genre: GameGenre.Action });
createGame({
  name: "Fun adventure game",
  genre: GameGenre.Adventure,
  onlinePlay: true,
});
