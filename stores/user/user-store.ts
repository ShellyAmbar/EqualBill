import { makeAutoObservable } from 'mobx';
import { Group, User } from './interfaces';

class UserStore {
  public user: User = { name: 'sheli"', phone: '+972536200540', id: 'AiLcHqmsY1VHl1C5RqaXoV0PVI92', url: '' };
  public userGroups: Group[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }

  setUserGroups(groups: Group[]) {
    console.log('groups', groups);

    this.userGroups = [...groups];
  }
}
export default new UserStore();
