// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: 'AIzaSyABpAqRnLI9c3rCxTRiYipnYed7wxXyGjQ',
    authDomain: 'experiment-41240.firebaseapp.com',
    databaseURL: 'https://experiment-41240.firebaseio.com',
    projectId: 'experiment-41240',
    storageBucket: 'experiment-41240.appspot.com',
    messagingSenderId: '528113382467'
  }
};
