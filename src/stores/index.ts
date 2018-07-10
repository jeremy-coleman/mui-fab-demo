import { UiStore } from "./UiStore"
import {NavStore} from './NavStore'

export interface IStore {
  uiStore: UiStore
  nav: NavStore
}

class Store implements IStore {
  uiStore = new UiStore()
  nav = new NavStore()
}

export const store = new Store()
