import { observable, computed } from 'mobx';
import { persist } from 'mobx-persist';

class Account {
  @persist @observable firstname = null;
  @persist @observable lastname = null;
  @persist @observable uid = null;
}

export default Account;