import { ChoicesWord } from "../types/choice";

const checkResult = (
  userChoice: ChoicesWord["choice"],
  houseChoice: ChoicesWord["choice"]
) => {
  switch (userChoice) {
    case "rock":
      if (houseChoice === "lizard" || houseChoice === "scissors") return "win";
      else if (userChoice === houseChoice) return "draw";
      else return "lose";
    case "paper":
      if (houseChoice === "rock" || houseChoice === "spock") return "win";
      else if (userChoice === houseChoice) return "draw";
      else return "lose";
    case "scissors":
      if (houseChoice === "paper" || houseChoice === "lizard") return "win";
      else if (userChoice === houseChoice) return "draw";
      else return "lose";
    case "lizard":
      if (houseChoice === "paper" || houseChoice === "spock") return "win";
      else if (userChoice === houseChoice) return "draw";
      else return "lose";
    case "spock":
      if (houseChoice === "scissors" || houseChoice === "rock") return "win";
      else if (userChoice === houseChoice) return "draw";
      else return "lose";
  }
};

export default checkResult;
