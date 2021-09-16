## Icon Uses

There are 4 different ways to use the Icon component: fonts, svg, images, and mask. Each has a purpose so make sure you read

```javascript
import Icon from 'components/Icon'
```

### Fonts

This a webfont creted using fontello. Using fonts makes is super easy to change colors and sizes by just changing the font size. This is the most common method you should use in the app.

```javascript
<Icon type="clock" />
<Icon type="clock" color="red" />
<Icon type="clock" color="blue" />
<Icon type="clock" color="hotpink" style={{ backgroundColor: 'black' }} />
<Icon type="clock" style={{ border: '1px solid black', padding: 3 }} />
```

### Image Source

You can also use the svg to be a background image. This will allow you to do things like make an icon will a set width. Cons for this are you cannot change the color of the icon. This one is probably the most A11Y compliant solution as you are using images for icons which should be given an alt prop.

```javascript
<Icon image="demodevices" style={{ width: 50 }} />
<Icon image="demodevices" />
<Icon image="demodevices" />
<Icon image="demodevices" style={{ border: '1px solid black', padding: 3 }} />
```

### SVG Nodes

This will render actual svg markup into the page giving you full control of style using css selectors. A con of this is performance. SVG files average 5 - 10 DOM nodes each. If you have a large list of content to render, you could easily be adding 10,000 DOM nodes to the page.

```javascript
<Icon svg="demodevices" />
```

### CSS Mask

The css mask uses an svg. You will need to set width and height for these as the div that has the mask applied does not know the image size. A plus for this is that you get to cache the image, not add a ton of markup but still control color via the background-color css prop.

```javascript
<Icon mask="daily" color="red" style={{ width: 50, height: 50 }} />
<Icon mask="daily" color="orange" style={{ width: 50, height: 50 }} />
```

## Apple Fonts

We get the apple fonts from the apple font api. To see these locally you must use a apple.com domain. You can do this in your hosts file.

## RMM Font Updates

1. Go to Fontello.com
2. Drag the contents of `static/images/rmm-font-svgs` to the custom icons section of fontello.
3. Verify that the fonts you dragged are present. An easy way to do this iswhen you select the icon on fontello. Icon selection is required to include it in the webfont that will be downloaded.
4. Click the settings icon and set the css prefix to `rmm-`
5. Name the webfont `rmm-icons`
6. Download the webfont package and unzip the file
7. Delete all the files in `static/assets/fonts/rmm-icons`
8. Move the contents from the unzipped `fontello-whatevs/font` directory into `static/assets/fonts/rmm-icons` replacing the old webfont
9. Delete all of the `rmm-iconname` classes from `static/scss/fonts/_rmm-icons.scss`
10. Update, if needed, the relations the new font has to the app interface in `RMM` in `static/js/components/Icon/Icon.js`. Do not change the keys, only the values to match class names in `static/scss/fonts/_rmm-icons.scss`
11. Make sure you rebuild the style files `npm run build` and clear your cache
