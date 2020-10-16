import app from 'firebase/app';
import config from 'firebaseConf.js';

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;