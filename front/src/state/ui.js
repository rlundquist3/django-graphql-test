import { observable, computed, action, toJS } from 'mobx';

export default class UIState {
  @observable test = 'test';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}
