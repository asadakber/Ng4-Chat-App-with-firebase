// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: "AIzaSyB37zpSW28LhYT_yMvz3YsQ_r-e6Dw9vw4",
    authDomain: "patient-app-20f0d.firebaseapp.com",
    databaseURL: "https://patient-app-20f0d.firebaseio.com",
    projectId: "patient-app-20f0d",
    storageBucket: "patient-app-20f0d.appspot.com",
    messagingSenderId: "701807238669"
  }
};
