import { palette } from "../styles/palette"
import { createMuiTheme as Mui } from "@material-ui/core/styles"
import { observable, computed, action } from "mobx"
import {loadTheme} from 'office-ui-fabric-react'
import * as _ from 'lodash'

export class ToggleOpenValue {
  @observable open = false

  @action
  openDrawer = (open: boolean) => {
    this.open = open
  }

  @action
  closeDrawer = () => {
    this.open = false
  }

  @action
  toggleDrawer = () => {
    this.open = !this.open
  }
}

export class TabValue {
  @observable tabValue = 0
  @action
  setTab(event, tabValue) {
    this.tabValue = tabValue
  }
}

class UiStore {
  @observable title = "Demo"

  @observable themeId = "myriad"
  @observable themeDialogToggle = new ToggleOpenValue()

  @observable menuDrawerToggle = new ToggleOpenValue()
  @observable DrawerToggle = new ToggleOpenValue()
  @observable FormDrawerToggle = new ToggleOpenValue()

  @observable appBarSettingsMenuToggle = new ToggleOpenValue()

  @observable appTabs = new TabValue()

  @observable isThemeDialogOpen = false


  constructor() {}

  @computed
  get muiTheme() {
    const basicTheme =  Mui({
      palette: {
        primary: {
          main: palette[this.themeId].primary,
        },
        secondary: {
          main: palette[this.themeId].secondary,
        }
      }
    })
    basicTheme["shape"] = {
      borderRadius: 4
    }
    return basicTheme
  }
  
  @computed
  get fabricTheme(){
    let fabricTheme = loadTheme({
      palette:{
          themePrimary: palette[this.themeId].primary
          //themeSecondary: string;
      }
    })
    return fabricTheme
    
  }

 

@computed get combinedTheme(){
  let combinedTheme = _.merge(this.muiTheme, this.fabricTheme)
  return combinedTheme
}



  @action
  updateTheme(themeId) {
    this.themeId = themeId
  }



  @action
  openThemeDialog() {
    this.isThemeDialogOpen = true
  }

  @action
  closeThemeDialog() {
    this.isThemeDialogOpen = false
  }





  @observable uiError: Error
  @action
  onError = (error: Error) => {
    this.uiError = error
  }
}

export { UiStore }