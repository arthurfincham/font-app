<div align="center">

<img src="public/fontLogo.svg" width="200px">

# The Only Fonts You Need

## [Live Preview]()

![](https://img.shields.io/github/last-commit/arthurfincham/font-app)
![](https://img.shields.io/github/languages/count/arthurfincham/font-app)
![](https://img.shields.io/github/languages/code-size/arthurfincham/font-app)

</div>

#### Table of Contents

- [Motivation](#Motivation)
- [Features](#Features)
- [Install](#Install)
- [Stack](#Stack)

## Motivation

Over the holidays I started learning more about Fonts; Serif, Sans Serif, Display, etc... What became clear was that there were too many to choose from. Then I came across this video:

[Designers Only Need These 6 Fonts. Trash the Rest.](https://www.youtube.com/watch?v=_4cW79vF1mU)

My idea for this project was to create a preview app that only has fonts that a designer might _need_. Another important point is that the fonts are readily available (and free). Fonts like Futura are classics but cannot be found for free - I looked for free alteratives on Google Fonts.

## Features: user can....

#### dynamically preview their text

<div align="center">

<img src="public/gifs/previewText.gif" width="500">

</div>

To prevent the input field from rerendering after typing a character I used the useEffect and useRef hooks alongside useState.

#### toggle font weight, size and italic

<div align="center">

<img src="public/gifs/fontWeightSize.gif" width="500">

</div>

The first build of the project fell victim to _prop drilling_; for instance the props for the toolbar looking like this...

```javascript
const navProps = {
  setBodyColor,
  bodyColor,
  setTextColor,
  textColor,
  setFontSize,
  fontSize,
  updatePreviewText,
  previewText,
  setFontWeight,
  fontWeight,
  setCodeDisplay,
  codeDisplay,
  setFontItalic,
  fontItalic,
  previewInput,
};
```

After some research on the useContext hook, I wrapped the project in a provider which gives global state and saves the waterfall of props.

#### create a custom theme

<div align="center">

<img src="public/gifs/customTheme.gif" width="500">

</div>

The theme is also controlled with useContext. The preview table component takes a style prop which has variables defined by useContext.

```javascript
...
const colorTheme = createTheme({
    body: myBodyColor,
    text: myTextColor,
  });

  return (
    <ThemeProvider theme={colorTheme}>
...
```

#### click to copy the HTML and CSS for their current configuration

<div align="center">

<img src="public/gifs/customTags.gif" width="500">

</div>

I used [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) which has a great [demo page](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/) to preview highlighting themes.

And a package called [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard) for the click to copy feature.

## Install

## Stack

- React
- Jest
- Enzyme
- Material UI
- Heroku
