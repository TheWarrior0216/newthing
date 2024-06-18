import { AppState } from "../AppState.js";
import { drawPage } from "../controllers/PlayerControler.js";
class PlayerService {
  scorePoint(name) {
    const player = AppState.players.find((player) => player.name == name)
    player.score++
    drawPage()
  }
}

export const idek = new PlayerService()