export const styles = `
@font-face {
  font-family: 'Apple Icons';
  font-style: normal;
  font-weight: 400;
  src: local('☺'),
    url('/fonts/apple-icons/v1/appleicons_text.woff') format('woff'),
    url('/fonts/apple-icons/v1/appleicons_text.ttf') format('truetype')
  ;
}

[class^='marcom-']::before,
[class*=' marcom-']::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-family: 'Apple Icons';
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1em;
  text-decoration: inherit;
  text-transform: none;
  width: 1em;
}

.marcom-apple:before { content: '\uF8FF'; }
.marcom-calendar-check:before { content: '\uF274'; }
.marcom-calendar:before { content: '\ue849'; }
.marcom-check:before { content: '\uF042'; }
.marcom-checkcircle:before { content: '\uF026'; }
.marcom-checksolid:before { content: '\uF058'; }
.marcom-chevrondown:before { content: '\uF000'; }
.marcom-chevrondowncircle:before { content: '\uF001'; }
.marcom-chevronleft:before { content: '\uF002'; }
.marcom-chevronleftcircle:before { content: '\uF005'; }
.marcom-chevronright:before { content: '\uF004'; }
.marcom-chevronrightcircle:before { content: '\uF003'; }
.marcom-chevronup:before { content: '\uF006'; }
.marcom-chevronupcircle:before { content: '\uF007'; }
.marcom-circle:before { content: '\uF057'; }
.marcom-clock:before { content: '\uE83C'; }
.marcom-close:before { content: '\uF009'; }
.marcom-downloadcircle:before { content: '\uF010'; }
.marcom-downloadsolid:before { content: '\uF011'; }
.marcom-editpencil:before { content: '\uE801'; }
.marcom-exclamation:before { content: '\uF055'; }
.marcom-exclamationcircle:before { content: '\uF051'; }
.marcom-exclamationsolid:before { content: '\uF052'; }
.marcom-external:before { content: '\uF012'; }
.marcom-facebook:before { content: '\uF030'; }
.marcom-favorite:before { content: '\uF048'; }
.marcom-grid:before { content: '\uF025'; }
.marcom-infocircle:before { content: '\uF013'; }
.marcom-instagram:before { content: '\uF041'; }
.marcom-link:before { content: '\uF031'; }
.marcom-linkedin:before { content: '\uF043'; }
.marcom-listcircle:before { content: '\uF014'; }
.marcom-locales:before { content: '\uE800'; }
.marcom-mail:before { content: '\uF032'; }
.marcom-minus:before { content: '\uF047'; }
.marcom-minuscircle:before { content: '\uF046'; }
.marcom-minussolid:before { content: '\uF050'; }
.marcom-more:before { content: '\uE843'; }
.marcom-paddledown:before { content: '\uF015'; }
.marcom-paddleleft:before { content: '\uF016'; }
.marcom-paddleright:before { content: '\uF017'; }
.marcom-paddleup:before { content: '\uF018'; }
.marcom-pausecircle:before { content: '\uF019'; }
.marcom-pinterest:before { content: '\uF033'; }
.marcom-playalt:before { content: '\uF021'; }
.marcom-playcircle:before { content: '\uF020'; }
.marcom-playsolid:before { content: '\uF021'; }
.marcom-plus:before { content: '\uF045'; }
.marcom-pluscircle:before { content: '\uF023'; }
.marcom-plussolid:before { content: '\uF054'; }
.marcom-profile:before { content: '\uE83D'; }
.marcom-qqweibo:before { content: '\uF034'; }
.marcom-questioncircle:before { content: '\uF056'; }
.marcom-questionsolid:before { content: '\uF053'; }
.marcom-qzone:before { content: '\uF035'; }
.marcom-renren:before { content: '\uF036'; }
.marcom-replay:before { content: '\uF022'; }
.marcom-replaycircle:before { content: '\uF029'; }
.marcom-reset:before { content: '\uF024'; }
.marcom-resetcircle:before { content: '\uF008'; }
.marcom-resetsolid:before { content: '\uF049'; }
.marcom-screen:before { content: '\uE841' }
.marcom-searchicon:before { content: '\uE845'; }
.marcom-share:before { content: '\uF037'; }
.marcom-snapchat:before { content: '\uF044'; }
.marcom-sortable:before { content: '\uE83F'; }
.marcom-stopcircle:before { content: '\uF027'; }
.marcom-stopsolid:before { content: '\uF028'; }
.marcom-tags:before { content: '\uE846'; }
.marcom-tumblr:before { content: '\uF038'; }
.marcom-twitter:before { content: '\uF039'; }
.marcom-uploadsolid:before { content: '\uE83E'; }
.marcom-weibo:before { content: '\uF040'; }
`
