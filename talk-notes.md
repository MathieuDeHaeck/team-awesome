# Talk notes

* `cd Desktop`
* `ng new team-awesome --skip-npm`
* `cd team-awesome`
* `yarn`
* `yarn add @angular/material firebase angularfire2 -S`
* `ws .`
* `ng serve`

http://localhost:4200

in app.module
```
import { MaterialModule } from '@angular/material';

MaterialModule.forRoot()
```

Create new file `awesome.theme.scss`

Add in angular-cli.json `awesome.theme.scss`

in awesome.theme.scss
```
@import '~@angular/material/core/theming/all-theme';
// Plus imports for other components in your app.

// Include the base styles for Angular Material core. We include this here so that you only
// have to load a single css file for Angular Material in your app.
@include md-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue.
$ida-primary: md-palette($md-red);
$ida-accent:  md-palette($md-red, A200, A100, A400);

// The warn palette is optional (defaults to red).
$ida-warn:    md-palette($md-red);

// Create the theme object (a Sass map containing all of the palettes).
$ida-theme: md-light-theme($ida-primary, $ida-accent, $ida-warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($ida-theme);
```

in style.scss
```
/* You can add global styles to this file, and also import other style files */
body {
  margin: 0;
  background-color: #fafafa;
  padding-top: 64px;
}

md-toolbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}

.awesome-list {
  margin: 24px auto 0;

  @media only screen and(min-width: 500px) {
    width: 500px;
  }

}

a {
  color: #ec3a3c;
}

md-card {
  margin: 12px;
}
```

in app.components.ts
`title = '#TeamAwesome';`

in app.components.html
```
<md-toolbar color="primary">
  {{title}}
</md-toolbar>
```


Create new file: `firebase.ts`
In file:
```
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
```

in app.module.ts
```
import firebase from './firebase';
```

in app.component.ts
```
import { AngularFire, FirebaseListObservable } from 'angularfire2';


contacts: FirebaseListObservable<any[]>;

  constructor(af: AngularFire){
    this.contacts = af.database.list('/contacts');
  }
```

in app.component.html
```
<div class="awesome-list">
  <md-card *ngFor="let contact of contacts | async">
    <md-card-title>{{contact.firstName}} {{ contact.lastName }}</md-card-title>
    <md-card-subtitle *ngIf="contact.jobTitle">{{ contact.jobTitle }}</md-card-subtitle>
    <md-card-content>
      <p>Email: <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
      <p>Phone: <a href="tel:{{ contact.phone }}">{{ contact.phone }}</a></p>
      <p *ngIf="contact.skype">Skype: <span>{{ contact.skype }}</span></p>
    </md-card-content>
  </md-card>
</div>
```
