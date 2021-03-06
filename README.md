# :key: SecurityJS.128
| API |
|------|
| [SecureStorage] |
| [File-accesser] |
| [Clickjacking defense] |
| [Key generator] |

## Welcome to SecurityJS<sup>128</sup>
(**Disclaimer** SecurityJS.[128/256] is only available on sites encrypted with <kbd>[HTTPS](https://en.wikipedia.org/wiki/HTTPS)</kbd>)<hr>
SecurityJS Is a JavaScript library (downloadable/embeddable) that can protect your site with a single file.<br>
This library comes in over 2000 lines of code, but the [minified version](https://parking-master.github.io/SecurityJS.128/download.html?download=js) is much smaller.

### Installing it
Firstly, you can also get it by [CDN](https://www.jsdelivr.com/):
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Parking-Master/SecurityJS.128@latest/SecurityJS.128.js" data-trust="true" async="" defer=""></script>
```
_or_
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Parking-Master/SecurityJS.128@latest/SecurityJS.128.min.js" data-trust="true" async="" defer=""></script>
```
_you'll want to get the `@latest` version for bug fixes and such._

- [Download the full file](https://parking-master.github.io/SecurityJS.128/download.html?download=min)<br>
- [Download the minified file](https://parking-master.github.io/SecurityJS.128/download.html?download=js)<br>
- [Download the package](https://github.com/Parking-Master/SecurityJS.128/releases)<br>

You can [also](https://github.com/Parking-Master/SecurityJS.128/packages/1071332) install it with NPM:
```
npm install parking-master/securityjs.128
```

<hr>

Once SecurityJS is added, you'll see this in the console if it is active:
```
🛈 SecurityJS.128 active
```
### How does it work?
First, SecurityJS connects to a self-hosted database where it can store data like SSL, site verification, etc.<br>
To get if the site is verified/has SSL, it does little things 1-by-1 and all together it adds up. Just like math,<br>
To get to 100 just by adding 1, You would have to add 1, 100 times. Same with this, SecurityJS Checks browser info,<br>
Site encryption type, visitors, protocol, and eventually it adds up like this: `'valid' or 'invalid'?`;
<br>
<br>
Aside from how it works, SecurityJS has many other APIs too like window.secureStorage, frame clickjacking defense, file restricter, etc. You can learn more about the APIs below, or in the [documentation]().

### Why you should have it
Because, SecurityJS is a powerful JS library that comes with 128 bit encryption, and is completely free, it wouldn't hurt to embed with 1 line of code or install it.

## Documentation
### SecurityJS `onexecute()`
Override the default trigger function for when loading is blocked, URI is malformed, etc.
###### Syntax (JavaScript)
```
securityjs.onexecute = function() {
  // Do what you want here...
  alert('SecurityJS is the greatest!');
};
```
##### Output:
<kbd>https://www.example.com/?javascript=void(0)</kbd>
> SecurityJS is the greatest!<br>
> <ul><kbd>OK</kbd></ul>

### X-Frame-Options
##### HTML (meta tag)
(`deny` for all, `sameorigin` for domain only)
###### index.html
```
<meta http-equiv="X-Frame-Options" content="deny" />
```
##### JSON
###### data.json
```
{
"X-Frame-Options": "deny"
}
```
_and_
###### index.html
```
<script type="application/json" src="./data.json"></script>
```
### window.secureStorage API
SecureStorage is a secure way of locking up localStorage and disabling viewing any securestorage/localstorage items.
```
(async function(){
// Use securityjs.generateKey() for your key
const myKey = securityjs.generateKey();
secureStorage.setItem(item, value);
secureStorage.lock();

// To unlock it
secureStorage.unlock(myKey);
// Get the item
secureStorage.getItem(item, value);
})();
```
Make sure to keep it in a local `<anonymous>` function so the key is private.
### Key generators
In the [basic SecurityJS](https://github.com/Parking-Master/Security.js), the most simple way to generate a random key is `generateKey()`
```
securityjs.generateKey();
```
and for a certain length:
```
securityjs.generateKey(100);
```
But in SecurityJS.128, you can generate 128-bit keys and 256-bit keys.
```
securityjs.generate(128);
// Output: Generated 128 bit key (max length approximately 4995 objects in 1ms)
// XPh615YZNAcZ7cSBSe8Ha4iBRJNrk3E7IRJk5rwEBrECTG912CZ3nNWea9PSCXafFGXE_kSqAqxAC7VSOrcg2QAg8uf-K95ifmuudg8rQFFEYNvc3KP1i4Ydxh7Xlb8D
```
256 bit keys:
```
securityjs.generate(256);
// Output: Generated 256 bit key (max length approximately 9985 objects in 2ms)
// M60JiJrCP7TacP-sSrvQDbYyyN7ZBKXIhIJr6cvNYFZStEtP0TdGE:OnAk_nDDWGCW_LK5wyFHJIGFA9VeTSVixUaLigsdXY-m60lXTFXKFgrA-GDTmY2G7ZoCIH590dhEwg:vFeb3lJwGNEPIP0A1QSAQLaVpuXyqU_A0rg8GiW-tpK6W79Kqt4EU7YJuSWuh1wtORYCCmDrTJZDFX1V7OX9PQgNRiKcervzX5J9KJW1-tUOrUDj6ErlYBNvkSW
```
### TurboClear
TurboClear is an API that lets you clear cache, history, and cookies.
```
securityjs.TurboClear(true);
```
`true` will cause it to clear everything.<br>
To clear history, use `history`:
```
securityjs.TurboClear(history);
```
To clear cache, use `cache`:
```
securityjs.TurboClear(cache);
```
To clear cookies, use `cookies`:
```
securityjs.TurboClear(cookies);
```
### File restricter
You can only access files using an IPv4 address, or unique password using this API
```
securityjs.auth('ip', '8.8.8.8');
```
You can add up to 5 IP addresses:
```
securityjs.auth('ip', '1.1.1.1', '2.2.2.2', '3.3.3.3', '4.4.4.4', '5.5.5.5');
```
_or_
```
securityjs.auth('password', 'myuniquepasscode1145');
```
Entering your authorized file ends up like this:
> Enter your passcode to access this file:<br>
> <ul><kbd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</kbd><br><ul><kbd>OK</kbd>&nbsp;&nbsp;<kbd>Cancel</kbd><br></ul>
SecurityJS `restrict()` function works the same as the auth function:
```
securityjs.restrict(type, value);
```
#### More APIs and functions are either in the [Full Documentation](), or are coming soon.
  
###### Copyright (c) Parking-Master/SecurityJS 2021, all rights reserved.

## License
##### [MIT](LICENSE.md) License

Copyright (c) 2021 **Parking Master**

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
