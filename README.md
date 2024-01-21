# @builtwithjavascript/user-maven-scripts
Hook useUserMavenScripts to dynamically build client head scripts for User Maven app analytics

[![npm version](https://badge.fury.io/js/@builtwithjavascript%2Fuser-maven-scripts.svg)](https://badge.fury.io/js/@builtwithjavascript%2Fuser-maven-scripts)

## code base
TypeScript

## Description
Contains hooks:
- useUserMavenScripts

## How to use

### install:
```
npm i -D @builtwithjavascript/user-maven-scripts
```

### consume:
```
import { useUserMavenScripts } from '@builtwithjavascript/user-maven-scripts'

const userMavenKey = 'your-usermaven-key'
const headScripts = useUserMavenScripts(userMavenKey)

// then you can use in nuxt.config.ts etc, for example:

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: headScripts,
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    }
  },
})

```
