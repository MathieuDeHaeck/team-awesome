import {AngularFireModule} from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
};

export default AngularFireModule.initializeApp(firebaseConfig)