enum Choices {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
  Lizard = 4,
  Spock = 5,
}

export interface ChoicesWord {
  choice: "rock" | "paper" | "scissors" | "lizard" | "spock" | "";
}

export default Choices;
