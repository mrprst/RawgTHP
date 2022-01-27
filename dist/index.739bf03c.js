// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l4AUa":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexScss = require("../style/index.scss");
var _routes = require("./routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
const callRoute = ()=>{
    const { hash  } = window.location;
    const pathParts = hash.substring(1).split('/');
    const pageName = pathParts[0];
    const pageArgument = pathParts[1] || '';
    const pageFunction = _routesDefault.default[pageName];
    if (pageFunction !== undefined) pageFunction(pageArgument);
};
window.addEventListener('hashchange', ()=>callRoute()
);
window.addEventListener('DOMContentLoaded', ()=>callRoute()
);

},{"../style/index.scss":"hN3b2","./routes":"1LP9D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hN3b2":[function() {},{}],"1LP9D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pageDetail = require("./PageDetail");
var _pageDetailDefault = parcelHelpers.interopDefault(_pageDetail);
var _pagelist = require("./Pagelist");
var _pagelistDefault = parcelHelpers.interopDefault(_pagelist);
const routes = {
    '': _pagelistDefault.default,
    'pagelist': _pagelistDefault.default,
    'pagedetail': _pageDetailDefault.default
};
exports.default = routes;

},{"./PageDetail":"8Dyl6","./Pagelist":"c8We6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Dyl6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import { Test } from "./Pagelist.js"
// console.log(Test())
const PageDetail = (argument1)=>{
    const preparePage = ()=>{
        const cleanedArgument = argument1.replace(/\s+/g, "-");
        const displayGame = (gameData)=>{
            const { background_image , website , name , rating , ratings_count , description , released , developers , platforms , publishers , genres , tags , stores , background_image_additional , id: id1  } = gameData;
            console.log(gameData);
            const headerDOM = document.querySelector(".heading--bottom");
            const dropdownDOM = document.querySelector(".games--dropdown");
            const heroDOM = document.querySelector(".page-hero");
            const articleDOM = document.querySelector(".page-detail .article");
            const buyDOM = document.querySelector(".page-detail .buy");
            const screenshotsDOM = document.querySelector(".page-detail .screenshots");
            const trailersDOM = document.querySelector(".page-detail .trailers");
            const showmoreDOM = document.querySelector("#show-more");
            headerDOM.remove();
            dropdownDOM.remove();
            showmoreDOM.remove();
            heroDOM.innerHTML = `
      <img class="hero-image" src="${background_image}">
      <a href="${website}" target="_blank">
        <div href="${website}" class="check-website">
          <span>Check Website</span>
          <span>▶</span>
        </div>
      </a>
      `;
            function getTrailer(id) {
                fetch(`https://api.rawg.io/api/games/${id}/movies?key=c0beb5c7d4924ac181a43fb802a18fbd`).then((response)=>{
                    return response.json();
                }).then((response)=>{
                    showTrailer(trailersDOM.querySelector("div.video-links"), response);
                }).catch((error)=>{
                    console.error('Response error:', error.message);
                });
            }
            articleDOM.querySelector(".article--top h1.title").innerHTML = name;
            articleDOM.querySelector(".article--top p.rating").innerHTML = `${rating}/5 - ${ratings_count} votes`;
            articleDOM.querySelector(".article--middle p.description").innerHTML = description;
            articleDOM.querySelector(".article--bottom p.released").innerHTML += released;
            articleDOM.querySelector(".article--bottom p.developers").innerHTML += `<a href='#pagelist/&dates=&developers=${developers[0].id}'>${nodeDetails(developers)}</a>`;
            articleDOM.querySelector(".article--bottom p.platforms").innerHTML += `<a href='#pagelist/&dates=&platform=${platforms[0].id}'>${gamePlatforms(platforms).join(",&nbsp")}</a>`;
            articleDOM.querySelector(".article--bottom p.publishers").innerHTML += `<a href='#pagelist/&dates=&publishers=${publishers[0].id}'>${nodeDetails(publishers).join(",&nbsp")}</a>`;
            articleDOM.querySelector(".article--bottom p.genres").innerHTML += `<a href='#pagelist/&dates=&genres=${genres[0].id}'>${nodeDetails(genres).join(",&nbsp")}</a>`;
            let smallTagList = nodeDetails(tags).slice(0, 9);
            articleDOM.querySelector(".article--bottom p.tags").innerHTML += `<a href='#pagelist/&dates=&tags=${tags[0].id}'>${smallTagList.join(",&nbsp")}</a>`;
            buyDOM.querySelector("div.buy-links").innerHTML = storesPlatforms(stores).join("");
            screenshotsDOM.querySelector("div.screenshots-links").innerHTML = `<img class="screenshots-img" src="${background_image}" /><img class="screenshots-img" src="${background_image_additional}" />`;
            trailersDOM.querySelector("div.video-links").innerHTML = getTrailer(id1);
        };
        const fetchGame = (url, argument)=>{
            fetch(`${url}/${argument}?key=774be2a6817d4369bef88bd479e5ab73`).then((response)=>response.json()
            ).then((responseData)=>{
                displayGame(responseData);
            });
        };
        fetchGame("https://api.rawg.io/api/games", cleanedArgument);
    };
    const render = ()=>{
        pageContent.innerHTML = `
      <section class="page-hero">
      </section>
      <section class="page-detail">
        <div class="article">
          <div class="article--top">
            <h1 class="title"></h1>
            <p class="rating"></p>
          </div>
          <div class="article--middle">
            <p class="description"></p>
          </div>
          <div class="article--bottom">
            <p class="released" style="width: 25%"><b>Release Date</b><br></p>
            <p class="developers" style="width: 25%"><b>Developer</b><br></p>
            <p class="platforms" style="width: 25%"><b>Platforms</b><br></p>
            <p class="publishers" style="width: 25%"><b>Publisher</b><br></p>
            <p class="genres" style="width: 50%"><b>Genre</b><br></p>
            <p class="tags" style="width: 50%"><b>Tags</b><br></p>
          </div>
        </div>
        <div class="buy">
          <h1>BUY</h1>
          <div class="buy-links"></div>
        </div>
        <div class="screenshots">
          <h1>SCREENSHOTS</h1>
          <div class="screenshots-links"></div>
        </div>
        <div class="trailers">
          <h1>TRAILERS</h1>
          <div class="video-links"></div>
        </div>
        <div class="similar">
          <h1>SIMILAR GAMES</h1>
        </div>
      </section>
    `;
        preparePage();
    };
    render();
};
function gamePlatforms(node) {
    arrPlatforms = [];
    node.forEach((e)=>{
        arrPlatforms.push(`${e.platform.name}`);
    });
    return arrPlatforms;
}
function nodeDetails(node) {
    arrNode = [];
    node.forEach((e)=>{
        arrNode.push(`${e.name}`);
    });
    return arrNode;
}
function storesPlatforms(node) {
    arrPlatforms = [];
    node.forEach((e)=>{
        arrPlatforms.push(`<a href="https://${e.store.domain}" target="_blank"><p class="store-links">${e.store.name}</p></a>`);
    });
    return arrPlatforms;
}
const showTrailer = (placeholder, response)=>{
    if (response.results.length > 0) placeholder.innerHTML = `<video controls width="100%"><source src="${response.results[Object.keys(response.results)[0]].data.max}" type="video/mp4">Sorry, your browser doesn't support embedded videos.</video>`;
    else placeholder.innerHTML = `<p>No trailer available</p>`;
};
exports.default = PageDetail;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c8We6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const showMore = document.getElementById('show-more');
const pageContent = document.getElementById('pageContent');
const choosePlatform = document.getElementById('platform');
const showmoreDOM = document.querySelector("#show-more");
let page = 1;
// function Test () {
//   console.log("test")
// }
// Test()
const PageList = (argument1 = '')=>{
    const preparePage = ()=>{
        const cleanedArgument = argument1.replace(/\s+/g, "-");
        const displayResults = (articles)=>{
            const resultsContent = articles.map((article)=>`<article class="cardGame">
              <div class="game--details" id="${article.id}">
              <a href="#pagedetail/${article.id}">
                <img class="game--image" src="${article.background_image}" >
                <div class="game--moredetails">
                  <p>${article.released}</p>
                  <p>${article.rating}/5 - ${article.ratings_count} votes</p>
                  <p class="game--tags">${GameTags(article).join(",&nbsp")}</p>
                </div>
              </a>
              </div>
              <a href="#pagedetail/${article.id}"><h2 class="game--title">${article.name}</h2></a>
              <div class="game-platforms"></div>
        </article>`
            );
            const resultsContainer = document.querySelector(".page-list .articles");
            resultsContainer.innerHTML += resultsContent.join("\n");
            articles.forEach((e)=>{
                let gameId = document.getElementById(e.id);
                GamePlatforms(e, gameId.nextElementSibling.nextElementSibling);
            });
        };
        const fetchList = (url, argument, pagenumber)=>{
            const finalURL = argument ? `${url}&search=${argument}&page=${pagenumber}` : `${url}&page=${pagenumber}&dates=2021-06-01,2022-12-01&ordering=-added`;
            fetch(finalURL).then((response)=>response.json()
            ).then((responseData)=>{
                displayResults(responseData.results);
            });
        };
        fetchList("https://api.rawg.io/api/games?key=774be2a6817d4369bef88bd479e5ab73&page_size=9", cleanedArgument, page);
        showMore.addEventListener('click', ()=>{
            if (page < 2) {
                page += 1;
                fetchList("https://api.rawg.io/api/games?key=774be2a6817d4369bef88bd479e5ab73&page_size=9", cleanedArgument, page);
            } else {
                fetchList("https://api.rawg.io/api/games?key=774be2a6817d4369bef88bd479e5ab73&page_size=9", cleanedArgument, page);
                showmoreDOM.remove();
            }
        });
    };
    const render = ()=>{
        pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles"></div>
      </section>
    `;
        preparePage();
    };
    render();
};
///////////////////// AUTO PLATFORM DROPDOWN /////////////////////////
const Platforms = ()=>{
    let platformDropdown = document.querySelector("#platform");
    fetch('https://api.rawg.io/api/platforms/lists/parents?key=774be2a6817d4369bef88bd479e5ab73').then((response)=>response.json()
    ).then((response)=>{
        response.results.forEach((element)=>{
            platformDropdown.innerHTML += `
      <option value="${element.id}">${element.name}</option>
      `;
        });
    });
};
Platforms();
////////////////////// GET SUB NODE INFOS //////////////////
function GamePlatforms(game, container) {
    const gamePlatformsContent = game.parent_platforms.map((e)=>`<a href='#pagelist/&dates=&platform=${e.platform.id}'><i class="fab fa-${e.platform.slug}"></i>`
    );
    container.innerHTML += gamePlatformsContent.join("\n");
}
function GameTags(game) {
    arrPlatforms = [];
    game.tags.forEach((e)=>{
        e.language == "eng" && arrPlatforms.push(e.name);
    });
    return arrPlatforms.slice(0, 9);
}
////////////// SEARCH MODULE /////////////////
let submitButton = document.getElementById("search-button");
let searchContent = document.getElementById("site-search");
submitButton.addEventListener('click', ()=>{
    searchContent.value == "" || changeUrl(searchContent.value);
});
searchContent.addEventListener('keypress', (e)=>e.key === 'Enter' ? changeUrl(searchContent.value) : null
);
function changeUrl(value) {
    var queryParams = "http://localhost:1234/#pagelist/";
    let newUrl = queryParams.concat(value + "&ordering=-added");
    window.location.href = newUrl;
}
exports.default = PageList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequire191b")

//# sourceMappingURL=index.739bf03c.js.map
