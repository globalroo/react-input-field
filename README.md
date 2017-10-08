# react-input-field [![Build Status](https://travis-ci.org/globalroo/react-input-field.svg?branch=master)](https://travis-ci.org/globalroo/react-input-field)[![Dependency Status](https://dependencyci.com/github/globalroo/react-input-field/badge)](https://dependencyci.com/github/globalroo/react-input-field)[![codecov](https://codecov.io/gh/globalroo/react-input-field/branch/master/graph/badge.svg)](https://codecov.io/gh/globalroo/react-input-field)

> React Input Field

```sh
npm install yarn -g
yarn
yarn test (tdd)
yarn testcov (coverage - generated to ./coverage)
yarn start or
yarn build (for a production version - generated to ./build)
```
## Brief description

A React textfield mimicking the behaviour of the HTML 5 <input type="search" />

The input is augmented by wrapping it in a Hoverable component for the mouseenter and mouseleave events and injecting state into the childen components. Similar to the render props technique used here: https://github.com/globalroo/react-video-render-prop/. React.cloneElement is used here instead.

Live demo: https://globalroo.github.io/react-input-field/
