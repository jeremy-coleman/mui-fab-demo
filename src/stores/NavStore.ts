import {observable, action} from 'mobx';


export class NavStore {
  @observable route: string;
  @observable chartDrawerRoute: string;
  @observable mlDrawerRoute: string;

  constructor(){
    this.route = 'home'
 };

  @action.bound goTo = (inputRoute: string) => this.route = inputRoute;
  @action.bound goToChartDrawer = (inputRoute: string) => this.chartDrawerRoute = inputRoute;
  @action.bound goToMlDrawer = (inputRoute: string) => this.mlDrawerRoute = inputRoute;

}



