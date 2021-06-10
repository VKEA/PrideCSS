## PrideCSS, a BEM-compliant SCSS library for adding pride flags

[![Build Status](https://travis-ci.com/VKEA/PrideCSS.svg?branch=master)](https://travis-ci.com/VKEA/PrideCSS)

PrideCSS is a SCSS library for adding pride flags to your HTML elements.

You'll need to compile it to CSS to use it on a website, or use a CDN, which will be updated in the future.

## Usage

PrideCSS class names start with the word `pride`, followed by Block Element Modifier (BEM) modifiers.

Example

```html
<div class="pride--nb"></div>
```

You can use different modifiers like `horizontal`, `radial` or `bottomleft` to specify the direction of the pride gradient.

Examples

```html
<div class="pride--radial--lesbian"></div>
<div class="pride--horizontal--gay"></div>
<div class="pride--topright--ace"></div>
```

## Modifiers

### Pride flags
- agender
- agender2
- androgyne
- androgyne2
- aro
- aro2
- aro3
- ace
- bear
- bi
- demiboy
- demigender
- demigirl
- gay
- genderfluid
- genderqueer
- gilbertbaker
- intersex
- lesbian
- lesbian2
- lesbian3
- maverique
- mlm
- mlm2
- mlm3
- neutrois
- nb
- nb2
- nb3
- pan
- philadelphia
- polygender
- polysexual
- sapphic
- trans
- twink

### Gradient directions
- {name}
- horizontal--{name}
- topleft--{name}
- topright--{name}
- bottomright--{name}
- bottomleft--{name}
- radial--{name}
- radial--top--{name}
- radial--bottom--{name}
- radial--left--{name}
- radial--right--{name}
- radial--topleft--{name}
- radial--topright--{name}
- radial--bottomright--{name}
- radial--bottomleft--{name}
- border--thin--{name}
- border--thin--{name}
- border--thick--{name}
- border--dummythicc--{name}

## CDN

This is on a personal site, not ideal, but it's something:
<https://ztfreak.kho.nu/pridecss/releases/2.1.css>