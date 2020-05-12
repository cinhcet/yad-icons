# yad-icons

Icons as native web-components.

When installing this software via `npm install` (or by running `node convert.js`), all icons from https://github.com/Templarian/MaterialDesign-JS as part of the Material Design Icons project (http://materialdesignicons.com/) are converted to native web-components.

The converted icons can be found in the folder `components` with the naming scheme
```
yad-icon-mdi-NAME.js
```
where `NAME` corresponds to the name of the icon found in http://materialdesignicons.com/

To set the size of the icon, use the css custom property `--yad-icon-size` and to change the color, use `fill`.

## Example
Import `yad-icons/components/yad-icon-mdi-lightbulb.js`
and then
```
<yad-icon-mdi-lightbulb style="--yad-icon-size: 40px; fill: orange;"></yad-icon-mdi-lightbulb>
```
will give you an orange lightbulb, size 40px.

## Note
Do not redistribute the converted icons without taking the licences of the original icons, see https://github.com/Templarian/MaterialDesign, into account.
