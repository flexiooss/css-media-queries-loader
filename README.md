# css-media-queries-loader
Variabilise style mediaqueries at webpack compilation

Rename your css file like : 
- my-style-theme.mobile.css
- my-other-style-theme.foo.css
- my-best-style-theme.bar.css

> :relaxed: the `bar` key is not referenced in the loader options, the style will be compiled without mediaqueries

### Webpack configuration

```javascript
{
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'css-media-queries-loader',
        options: {
          mobile: 'screen max-width(440px)',
          foo: 'print, screen min-width(20cm)'
        }
      }
    ]
  }
```

### The goal is to try to transform...

`my-style-theme.mobile.css`
##### Before
```css
.my-class{
  margin: 0;
}
```
##### After
```css
@media screen max-width(440px){
  .my-class{
    margin: 0;
  }
}
```
