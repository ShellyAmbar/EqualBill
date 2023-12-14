//import {  makeAutoObservable,  } from 'mobx';

class AuthStore {
  public rememberMe: boolean = false;
  constructor() {
    //   makeAutoObservable(this);
  }

  setRememberMe(rememberMe: boolean) {
    this.rememberMe = rememberMe;
  }
}
export default new AuthStore();
