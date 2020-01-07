class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key, value) => localStorage.setItem(key, value);

  get = key => this.getLocalStorage(key);

  getLocalStorage = key => {
    const ret = localStorage.getItem(key);
    if (ret) {
      return ret;
    }
    return null;
  };

  login = async (email, password) => {
    console.log(email + password);

    // login process, expecting true or false

    this.set('isLoggedIn', true);
    this.state = {
      id: "1",
      name: "Tak"
    };

    return false;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false);

      // logout process
    }
  };
}

export default new User();