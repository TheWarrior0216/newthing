import { AppState } from "../AppState.js"
import { idek } from "../services/PlayerService.js"

export class PlayersController {
  constructor() {
    console.log('i am tired')
    const plays = AppState.players
    console.log(plays)
    drawPage()
  }
  scorePoint(name) {
    console.log(name)
    idek.scorePoint(name)
  }
}
export function drawPage() {
  const playersEle = document.getElementById('cardsforPlayers')
  let HtmlString = ''
  AppState.players.forEach((player) => HtmlString += player.playerCard)
  playersEle.innerHTML = HtmlString
}