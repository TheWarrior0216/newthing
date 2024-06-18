import { Player } from "./models/PlayerClass.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [new Player('jake'), new Player('Aspen')]
}

export const AppState = createObservableProxy(new ObservableAppState())