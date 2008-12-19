/*

OpenLayers.js -- OpenLayers Map Viewer Library

Copyright 2005-2008 MetaCarta, Inc., released under the Clear BSD license.
Please see http://svn.openlayers.org/trunk/openlayers/license.txt
for the full text of the license.

Includes compressed code under the following licenses:

(For uncompressed versions of the code used please see the
OpenLayers SVN repository: <http://openlayers.org/>)

*/

/* Contains portions of Prototype.js:
*
* Prototype JavaScript framework, version 1.4.0
*  (c) 2005 Sam Stephenson <sam@conio.net>
*
*  Prototype is freely distributable under the terms of an MIT-style license.
*  For details, see the Prototype web site: http://prototype.conio.net/
*
*--------------------------------------------------------------------------*/

/**  
*  
*  Contains portions of Rico <http://openrico.org/>
* 
*  Copyright 2005 Sabre Airline Solutions  
*  
*  Licensed under the Apache License, Version 2.0 (the "License");
you
*  may not use this file except in compliance with the License. You
*  may obtain a copy of the License at
*  
*         http://www.apache.org/licenses/LICENSE-2.0  
*  
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*  implied. See the License for the specific language governing
*  permissions and limitations under the License. 
*
**/

/**
* Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
* Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
*
* Licensed under the Apache License, Version 2.0 (the "License");

* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* http://www.apache.org/licenses/LICENSE-2.0
*/

/**
* Contains portions of Gears <http://code.google.com/apis/gears/>
*
* Copyright 2007, Google Inc.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*  1. Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*  2. Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*  3. Neither the name of Google Inc. nor the names of its contributors may be
*     used to endorse or promote products derived from this software without
*     specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
* WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
* EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS;

* OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
* WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
* OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
* ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
* Sets up google.gears.*, which is *the only* supported way to access Gears.
*
* Circumvent this file at your own risk!
*
* In the future, Gears may automatically define google.gears.* without this
* file. Gears may use these objects to transparently fix bugs and compatibility
* issues. Applications that use the code below will continue to work seamlessly
* when that happens.
*/
var OpenLayers = { singleFile: true };
(function() {
    var singleFile = (typeof OpenLayers == "object" && OpenLayers.singleFile);
    window.OpenLayers = { _scriptName: (!singleFile) ? "lib/OpenLayers.js" : "OpenLayers.js", _getScriptLocation: function() {
        var scriptLocation = "";
        var scriptName = OpenLayers._scriptName;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0, len = scripts.length;
i < len;
i++) {
            var src = scripts[i].getAttribute('src');
            if (src) {
                var index = src.lastIndexOf(scriptName);
                var pathLength = src.lastIndexOf('?');
                if (pathLength < 0) {
                    pathLength = src.length;
                }
                if ((index > -1) && (index + scriptName.length == pathLength)) {
                    scriptLocation = src.slice(0, pathLength - scriptName.length);
                    break;
                } 
            } 
        }
        return scriptLocation;
    } 
    };
    if (!singleFile) {
        var jsfiles = new Array("OpenLayers/Util.js", "OpenLayers/BaseTypes.js", "OpenLayers/BaseTypes/Class.js", "OpenLayers/BaseTypes/Bounds.js", "OpenLayers/BaseTypes/Element.js", "OpenLayers/BaseTypes/LonLat.js", "OpenLayers/BaseTypes/Pixel.js", "OpenLayers/BaseTypes/Size.js", "OpenLayers/Console.js", "OpenLayers/Tween.js", "Rico/Corner.js", "Rico/Color.js", "Gears/gears_init.js", "OpenLayers/Ajax.js", "OpenLayers/Request.js", "OpenLayers/Request/XMLHttpRequest.js", "OpenLayers/Events.js", "OpenLayers/Projection.js", "OpenLayers/Map.js", "OpenLayers/Layer.js", "OpenLayers/Icon.js", "OpenLayers/Marker.js", "OpenLayers/Marker/Box.js", "OpenLayers/Popup.js", "OpenLayers/Tile.js", "OpenLayers/Tile/Image.js", "OpenLayers/Tile/WFS.js", "OpenLayers/Layer/Image.js", "OpenLayers/Layer/SphericalMercator.js", "OpenLayers/Layer/EventPane.js", "OpenLayers/Layer/FixedZoomLevels.js", "OpenLayers/Layer/Google.js", "OpenLayers/Layer/VirtualEarth.js", "OpenLayers/Layer/Yahoo.js", "OpenLayers/Layer/HTTPRequest.js", "OpenLayers/Layer/Grid.js", "OpenLayers/Layer/MapGuide.js", "OpenLayers/Layer/MapServer.js", "OpenLayers/Layer/MapServer/Untiled.js", "OpenLayers/Layer/KaMap.js", "OpenLayers/Layer/KaMapCache.js", "OpenLayers/Layer/MultiMap.js", "OpenLayers/Layer/Markers.js", "OpenLayers/Layer/Text.js", "OpenLayers/Layer/WorldWind.js", "OpenLayers/Layer/WMS.js", "OpenLayers/Layer/WMS/Untiled.js", "OpenLayers/Layer/GeoRSS.js", "OpenLayers/Layer/Boxes.js", "OpenLayers/Layer/TMS.js", "OpenLayers/Layer/TileCache.js", "OpenLayers/Popup/Anchored.js", "OpenLayers/Popup/AnchoredBubble.js", "OpenLayers/Popup/Framed.js", "OpenLayers/Popup/FramedCloud.js", "OpenLayers/Feature.js", "OpenLayers/Feature/Vector.js", "OpenLayers/Feature/WFS.js", "OpenLayers/Handler.js", "OpenLayers/Handler/Click.js", "OpenLayers/Handler/Hover.js", "OpenLayers/Handler/Point.js", "OpenLayers/Handler/Path.js", "OpenLayers/Handler/Polygon.js", "OpenLayers/Handler/Feature.js", "OpenLayers/Handler/Drag.js", "OpenLayers/Handler/RegularPolygon.js", "OpenLayers/Handler/Box.js", "OpenLayers/Handler/MouseWheel.js", "OpenLayers/Handler/Keyboard.js", "OpenLayers/Control.js", "OpenLayers/Control/Attribution.js", "OpenLayers/Control/Button.js", "OpenLayers/Control/ZoomBox.js", "OpenLayers/Control/ZoomToMaxExtent.js", "OpenLayers/Control/DragPan.js", "OpenLayers/Control/Navigation.js", "OpenLayers/Control/MouseDefaults.js", "OpenLayers/Control/MousePosition.js", "OpenLayers/Control/OverviewMap.js", "OpenLayers/Control/KeyboardDefaults.js", "OpenLayers/Control/PanZoom.js", "OpenLayers/Control/PanZoomBar.js", "OpenLayers/Control/ArgParser.js", "OpenLayers/Control/Permalink.js", "OpenLayers/Control/Scale.js", "OpenLayers/Control/ScaleLine.js", "OpenLayers/Control/LayerSwitcher.js", "OpenLayers/Control/DrawFeature.js", "OpenLayers/Control/DragFeature.js", "OpenLayers/Control/ModifyFeature.js", "OpenLayers/Control/Panel.js", "OpenLayers/Control/SelectFeature.js", "OpenLayers/Control/NavigationHistory.js", "OpenLayers/Control/Measure.js", "OpenLayers/Geometry.js", "OpenLayers/Geometry/Rectangle.js", "OpenLayers/Geometry/Collection.js", "OpenLayers/Geometry/Point.js", "OpenLayers/Geometry/MultiPoint.js", "OpenLayers/Geometry/Curve.js", "OpenLayers/Geometry/LineString.js", "OpenLayers/Geometry/LinearRing.js", "OpenLayers/Geometry/Polygon.js", "OpenLayers/Geometry/MultiLineString.js", "OpenLayers/Geometry/MultiPolygon.js", "OpenLayers/Geometry/Surface.js", "OpenLayers/Renderer.js", "OpenLayers/Renderer/Elements.js", "OpenLayers/Renderer/SVG.js", "OpenLayers/Renderer/Canvas.js", "OpenLayers/Renderer/VML.js", "OpenLayers/Layer/Vector.js", "OpenLayers/Strategy.js", "OpenLayers/Strategy/Fixed.js", "OpenLayers/Strategy/Cluster.js", "OpenLayers/Strategy/Paging.js", "OpenLayers/Strategy/BBOX.js", "OpenLayers/Protocol.js", "OpenLayers/Protocol/HTTP.js", "OpenLayers/Protocol/SQL.js", "OpenLayers/Protocol/SQL/Gears.js", "OpenLayers/Layer/PointTrack.js", "OpenLayers/Layer/GML.js", "OpenLayers/Style.js", "OpenLayers/StyleMap.js", "OpenLayers/Rule.js", "OpenLayers/Filter.js", "OpenLayers/Filter/FeatureId.js", "OpenLayers/Filter/Logical.js", "OpenLayers/Filter/Comparison.js", "OpenLayers/Filter/Spatial.js", "OpenLayers/Format.js", "OpenLayers/Format/XML.js", "OpenLayers/Format/GML.js", "OpenLayers/Format/GML/Base.js", "OpenLayers/Format/GML/v2.js", "OpenLayers/Format/GML/v3.js", "OpenLayers/Format/KML.js", "OpenLayers/Format/GeoRSS.js", "OpenLayers/Format/WFS.js", "OpenLayers/Format/WKT.js", "OpenLayers/Format/OSM.js", "OpenLayers/Format/GPX.js", "OpenLayers/Format/SLD.js", "OpenLayers/Format/SLD/v1.js", "OpenLayers/Format/SLD/v1_0_0.js", "OpenLayers/Format/SLD/v1.js", "OpenLayers/Format/Filter.js", "OpenLayers/Format/Filter/v1.js", "OpenLayers/Format/Filter/v1_0_0.js", "OpenLayers/Format/Text.js", "OpenLayers/Format/JSON.js", "OpenLayers/Format/GeoJSON.js", "OpenLayers/Format/WMC.js", "OpenLayers/Format/WMC/v1.js", "OpenLayers/Format/WMC/v1_0_0.js", "OpenLayers/Format/WMC/v1_1_0.js", "OpenLayers/Layer/WFS.js", "OpenLayers/Control/MouseToolbar.js", "OpenLayers/Control/NavToolbar.js", "OpenLayers/Control/PanPanel.js", "OpenLayers/Control/Pan.js", "OpenLayers/Control/ZoomIn.js", "OpenLayers/Control/ZoomOut.js", "OpenLayers/Control/ZoomPanel.js", "OpenLayers/Control/EditingToolbar.js", "OpenLayers/Lang.js", "OpenLayers/Lang/en.js");
        var agent = navigator.userAgent;
        var docWrite = (agent.match("MSIE") || agent.match("Safari"));
        if (docWrite) {
            var allScriptTags = new Array(jsfiles.length);
        }
        var host = OpenLayers._getScriptLocation() + "lib/";
        for (var i = 0, len = jsfiles.length;
i < len;
i++) {
            if (docWrite) {
                allScriptTags[i] = "<script src='" + host + jsfiles[i] + "'></script>";
            } else {
                var s = document.createElement("script");
                s.src = host + jsfiles[i];
                var h = document.getElementsByTagName("head").length ? document.getElementsByTagName("head")[0] : document.body;
                h.appendChild(s);
            } 
        }
        if (docWrite) {
            document.write(allScriptTags.join(""));
        } 
    } 
})();
OpenLayers.VERSION_NUMBER = "$Revision: 8012 $";
OpenLayers.String = { startsWith: function(str, sub) {
    return (str.indexOf(sub) == 0);
}, contains: function(str, sub) {
    return (str.indexOf(sub) != -1);
}, trim: function(str) {
    return str.replace(/^\s*(.*?)\s*$/, "$1");
}, camelize: function(str) {
    var oStringList = str.split('-');
    var camelizedString = oStringList[0];
    for (var i = 1, len = oStringList.length;
i < len;
i++) {
        var s = oStringList[i];
        camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
    }
    return camelizedString;
}, format: function(template, context, args) {
    if (!context) {
        context = window;
    }
    var tokens = template.split("${");
    var item, last, replacement;
    for (var i = 1, len = tokens.length;
i < len;
i++) {
        item = tokens[i];
        last = item.indexOf("}");
        if (last > 0) {
            replacement = context[item.substring(0, last)];
            if (typeof replacement == "function") {
                replacement = args ? replacement.apply(null, args) : replacement();
            }
            tokens[i] = replacement + item.substring(++last);
        } else {
            tokens[i] = "${" + item;
        } 
    }
    return tokens.join("");
}, numberRegEx: /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/, isNumeric: function(value) {
    return OpenLayers.String.numberRegEx.test(value);
} 
};
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(sStart) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.String.startsWith' }));
        return OpenLayers.String.startsWith(this, sStart);
    };
}
if (!String.prototype.contains) {
    String.prototype.contains = function(str) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.String.contains' }));
        return OpenLayers.String.contains(this, str);
    };
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.String.trim' }));
        return OpenLayers.String.trim(this);
    };
}
if (!String.prototype.camelize) {
    String.prototype.camelize = function() {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.String.camelize' }));
        return OpenLayers.String.camelize(this);
    };
}
OpenLayers.Number = { decimalSeparator: ".", thousandsSeparator: ",", limitSigDigs: function(num, sig) {
    var fig = 0;
    if (sig > 0) {
        fig = parseFloat(num.toPrecision(sig));
    }
    return fig;
}, format: function(num, dec, tsep, dsep) {
    dec = (typeof dec != "undefined") ? dec : 0;
    tsep = (typeof tsep != "undefined") ? tsep : OpenLayers.Number.thousandsSeparator;
    dsep = (typeof dsep != "undefined") ? dsep : OpenLayers.Number.decimalSeparator;
    if (dec != null) {
        num = parseFloat(num.toFixed(dec));
    }
    var parts = num.toString().split(".");
    if (parts.length == 1 && dec == null) {
        dec = 0;
    }
    var integer = parts[0];
    if (tsep) {
        var thousands = /(-?[0-9]+)([0-9]{3})/;
        while (thousands.test(integer)) {
            integer = integer.replace(thousands, "$1" + tsep + "$2");
        } 
    }
    var str;
    if (dec == 0) {
        str = integer;
    } else {
        var rem = parts.length > 1 ? parts[1] : "0";
        if (dec != null) {
            rem = rem + new Array(dec - rem.length + 1).join("0");
        }
        str = integer + dsep + rem;
    }
    return str;
} 
};
if (!Number.prototype.limitSigDigs) {
    Number.prototype.limitSigDigs = function(sig) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.Number.limitSigDigs' }));
        return OpenLayers.Number.limitSigDigs(this, sig);
    };
}
OpenLayers.Function = { bind: function(func, object) {
    var args = Array.prototype.slice.apply(arguments, [2]);
    return function() {
        var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
        return func.apply(object, newArgs);
    };
}, bindAsEventListener: function(func, object) {
    return function(event) {
        return func.call(object, event || window.event);
    };
} 
};
if (!Function.prototype.bind) {
    Function.prototype.bind = function() {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.Function.bind' }));
        Array.prototype.unshift.apply(arguments, [this]);
        return OpenLayers.Function.bind.apply(null, arguments);
    };
}
if (!Function.prototype.bindAsEventListener) {
    Function.prototype.bindAsEventListener = function(object) {
        OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.Function.bindAsEventListener' }));
        return OpenLayers.Function.bindAsEventListener(this, object);
    };
}
OpenLayers.Array = { filter: function(array, callback, caller) {
    var selected = [];
    if (Array.prototype.filter) {
        selected = array.filter(callback, caller);
    } else {
        var len = array.length;
        if (typeof callback != "function") {
            throw new TypeError();
        }
        for (var i = 0;
i < len;
i++) {
            if (i in array) {
                var val = array[i];
                if (callback.call(caller, val, i, array)) {
                    selected.push(val);
                } 
            } 
        } 
    }
    return selected;
} 
};
OpenLayers.Class = function() {
    var Class = function() {
        if (arguments && arguments[0] != OpenLayers.Class.isPrototype) {
            this.initialize.apply(this, arguments);
        } 
    };
    var extended = {};
    var parent;
    for (var i = 0, len = arguments.length;
i < len;
++i) {
        if (typeof arguments[i] == "function") {
            parent = arguments[i].prototype;
        } else {
            parent = arguments[i];
        }
        OpenLayers.Util.extend(extended, parent);
    }
    Class.prototype = extended;
    return Class;
};
OpenLayers.Class.isPrototype = function() { };
OpenLayers.Class.create = function() {
    return function() {
        if (arguments && arguments[0] != OpenLayers.Class.isPrototype) {
            this.initialize.apply(this, arguments);
        } 
    };
};
OpenLayers.Class.inherit = function() {
    var superClass = arguments[0];
    var proto = new superClass(OpenLayers.Class.isPrototype);
    for (var i = 1, len = arguments.length;
i < len;
i++) {
        if (typeof arguments[i] == "function") {
            var mixin = arguments[i];
            arguments[i] = new mixin(OpenLayers.Class.isPrototype);
        }
        OpenLayers.Util.extend(proto, arguments[i]);
    }
    return proto;
};
OpenLayers.Util = {};
OpenLayers.Util.getElement = function() {
    var elements = [];
    for (var i = 0, len = arguments.length;
i < len;
i++) {
        var element = arguments[i];
        if (typeof element == 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length == 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
};
if ($ == null) {
    var $ = OpenLayers.Util.getElement;
}
OpenLayers.Util.extend = function(destination, source) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            var value = source[property];
            if (value !== undefined) {
                destination[property] = value;
            } 
        }
        var sourceIsEvt = typeof window.Event == "function" && source instanceof window.Event;
        if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty('toString')) {
            destination.toString = source.toString;
        } 
    }
    return destination;
};
OpenLayers.Util.removeItem = function(array, item) {
    for (var i = array.length - 1;
i >= 0;
i--) {
        if (array[i] == item) {
            array.splice(i, 1);
        } 
    }
    return array;
};
OpenLayers.Util.clearArray = function(array) {
    OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'array = []' }));
    array.length = 0;
};
OpenLayers.Util.indexOf = function(array, obj) {
    for (var i = 0, len = array.length;
i < len;
i++) {
        if (array[i] == obj) {
            return i;
        } 
    }
    return -1;
};
OpenLayers.Util.modifyDOMElement = function(element, id, px, sz, position, border, overflow, opacity) {
    if (id) {
        element.id = id;
    }
    if (px) {
        element.style.left = px.x + "px";
        element.style.top = px.y + "px";
    }
    if (sz) {
        element.style.width = sz.w + "px";
        element.style.height = sz.h + "px";
    }
    if (position) {
        element.style.position = position;
    }
    if (border) {
        element.style.border = border;
    }
    if (overflow) {
        element.style.overflow = overflow;
    }
    if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
        element.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
        element.style.opacity = opacity;
    } else if (parseFloat(opacity) == 1.0) {
        element.style.filter = '';
        element.style.opacity = '';
    } 
};
OpenLayers.Util.createDiv = function(id, px, sz, imgURL, position, border, overflow, opacity) {
    var dom = document.createElement('div');
    if (imgURL) {
        dom.style.backgroundImage = 'url(' + imgURL + ')';
    }
    if (!id) {
        id = OpenLayers.Util.createUniqueID("OpenLayersDiv");
    }
    if (!position) {
        position = "absolute";
    }
    OpenLayers.Util.modifyDOMElement(dom, id, px, sz, position, border, overflow, opacity);
    return dom;
};
OpenLayers.Util.createImage = function(id, px, sz, imgURL, position, border, opacity, delayDisplay) {
    var image = document.createElement("img");
    if (!id) {
        id = OpenLayers.Util.createUniqueID("OpenLayersDiv");
    }
    if (!position) {
        position = "relative";
    }
    OpenLayers.Util.modifyDOMElement(image, id, px, sz, position, border, null, opacity);
    if (delayDisplay) {
        image.style.display = "none";
        OpenLayers.Event.observe(image, "load", OpenLayers.Function.bind(OpenLayers.Util.onImageLoad, image));
        OpenLayers.Event.observe(image, "error", OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError, image));
    }
    image.style.alt = id;
    image.galleryImg = "no";
    if (imgURL) {
        image.src = imgURL;
    }
    return image;
};
OpenLayers.Util.setOpacity = function(element, opacity) {
    OpenLayers.Util.modifyDOMElement(element, null, null, null, null, null, null, opacity);
};
OpenLayers.Util.onImageLoad = function() {
    if (!this.viewRequestID || (this.map && this.viewRequestID == this.map.viewRequestID)) {
        this.style.backgroundColor = null;
        this.style.display = "";
    } 
};
OpenLayers.Util.onImageLoadErrorColor = "pink";
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 0;
OpenLayers.Util.onImageLoadError = function() {
    this._attempts = (this._attempts) ? (this._attempts + 1) : 1;
    if (this._attempts <= OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
        var urls = this.urls;
        if (urls && urls instanceof Array && urls.length > 1) {
            var src = this.src.toString();
            var current_url, k;
            for (k = 0;
current_url = urls[k];
k++) {
                if (src.indexOf(current_url) != -1) {
                    break;
                } 
            }
            var guess = Math.floor(urls.length * Math.random());
            var new_url = urls[guess];
            k = 0;
            while (new_url == current_url && k++ < 4) {
                guess = Math.floor(urls.length * Math.random());
                new_url = urls[guess];
            }
            this.src = src.replace(current_url, new_url);
        } else {
            this.src = this.src;
        } 
    } else {
        this.style.backgroundColor = OpenLayers.Util.onImageLoadErrorColor;
    }
    this.style.display = "";
};
OpenLayers.Util.alphaHack = function() {
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
    var filter = false;
    try {
        filter = !!(document.body.filters);
    } catch (e) { }
    return (filter && (version >= 5.5) && (version < 7));
};
OpenLayers.Util.modifyAlphaImageDiv = function(div, id, px, sz, imgURL, position, border, sizing, opacity) {
    OpenLayers.Util.modifyDOMElement(div, id, px, sz, position, null, null, opacity);
    var img = div.childNodes[0];
    if (imgURL) {
        img.src = imgURL;
    }
    OpenLayers.Util.modifyDOMElement(img, div.id + "_innerImage", null, sz, "relative", border);
    if (OpenLayers.Util.alphaHack()) {
        if (div.style.display != "none") {
            div.style.display = "inline-block";
        }
        if (sizing == null) {
            sizing = "scale";
        }
        div.style.filter = "progid:DXImageTransform.Microsoft" + ".AlphaImageLoader(src='" + img.src + "', " + "sizingMethod='" + sizing + "')";
        if (parseFloat(div.style.opacity) >= 0.0 && parseFloat(div.style.opacity) < 1.0) {
            div.style.filter += " alpha(opacity=" + div.style.opacity * 100 + ")";
        }
        img.style.filter = "alpha(opacity=0)";
    } 
};
OpenLayers.Util.createAlphaImageDiv = function(id, px, sz, imgURL, position, border, sizing, opacity, delayDisplay) {
    var div = OpenLayers.Util.createDiv();
    var img = OpenLayers.Util.createImage(null, null, null, null, null, null, null, false);
    div.appendChild(img);
    if (delayDisplay) {
        img.style.display = "none";
        OpenLayers.Event.observe(img, "load", OpenLayers.Function.bind(OpenLayers.Util.onImageLoad, div));
        OpenLayers.Event.observe(img, "error", OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError, div));
    }
    OpenLayers.Util.modifyAlphaImageDiv(div, id, px, sz, imgURL, position, border, sizing, opacity);
    return div;
};
OpenLayers.Util.upperCaseObject = function(object) {
    var uObject = {};
    for (var key in object) {
        uObject[key.toUpperCase()] = object[key];
    }
    return uObject;
};
OpenLayers.Util.applyDefaults = function(to, from) {
    to = to || {};
    var fromIsEvt = typeof window.Event == "function" && from instanceof window.Event;
    for (var key in from) {
        if (to[key] === undefined || (!fromIsEvt && from.hasOwnProperty && from.hasOwnProperty(key) && !to.hasOwnProperty(key))) {
            to[key] = from[key];
        } 
    }
    if (!fromIsEvt && from && from.hasOwnProperty && from.hasOwnProperty('toString') && !to.hasOwnProperty('toString')) {
        to.toString = from.toString;
    }
    return to;
};
OpenLayers.Util.getParameterString = function(params) {
    var paramsArray = [];
    for (var key in params) {
        var value = params[key];
        if ((value != null) && (typeof value != 'function')) {
            var encodedValue;
            if (typeof value == 'object' && value.constructor == Array) {
                var encodedItemArray = [];
                for (var itemIndex = 0, len = value.length;
itemIndex < len;
itemIndex++) {
                    encodedItemArray.push(encodeURIComponent(value[itemIndex]));
                }
                encodedValue = encodedItemArray.join(",");
            }
            else {
                encodedValue = encodeURIComponent(value);
            }
            paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
        } 
    }
    return paramsArray.join("&");
};
OpenLayers.ImgPath = '';
OpenLayers.Util.getImagesLocation = function() {
    return OpenLayers.ImgPath || (OpenLayers._getScriptLocation() + "img/");
};
OpenLayers.Util.Try = function() {
    var returnValue = null;
    for (var i = 0, len = arguments.length;
i < len;
i++) {
        var lambda = arguments[i];
        try {
            returnValue = lambda();
            break;
        } catch (e) { } 
    }
    return returnValue;
};
OpenLayers.Util.getNodes = function(p, tagName) {
    var nodes = OpenLayers.Util.Try(function() {
        return OpenLayers.Util._getNodes(p.documentElement.childNodes, tagName);
    }, function() {
        return OpenLayers.Util._getNodes(p.childNodes, tagName);
    });
    return nodes;
};
OpenLayers.Util._getNodes = function(nodes, tagName) {
    var retArray = [];
    for (var i = 0, len = nodes.length;
i < len;
i++) {
        if (nodes[i].nodeName == tagName) {
            retArray.push(nodes[i]);
        } 
    }
    return retArray;
};
OpenLayers.Util.getTagText = function(parent, item, index) {
    var result = OpenLayers.Util.getNodes(parent, item);
    if (result && (result.length > 0)) {
        if (!index) {
            index = 0;
        }
        if (result[index].childNodes.length > 1) {
            return result.childNodes[1].nodeValue;
        }
        else if (result[index].childNodes.length == 1) {
            return result[index].firstChild.nodeValue;
        } 
    } else {
        return "";
    } 
};
OpenLayers.Util.getXmlNodeValue = function(node) {
    var val = null;
    OpenLayers.Util.Try(function() {
        val = node.text;
        if (!val) {
            val = node.textContent;
        }
        if (!val) {
            val = node.firstChild.nodeValue;
        } 
    }, function() {
        val = node.textContent;
    });
    return val;
};
OpenLayers.Util.mouseLeft = function(evt, div) {
    var target = (evt.relatedTarget) ? evt.relatedTarget : evt.toElement;
    while (target != div && target != null) {
        target = target.parentNode;
    }
    return (target != div);
};
OpenLayers.Util.rad = function(x) {
    return x * Math.PI / 180;
};
OpenLayers.Util.distVincenty = function(p1, p2) {
    var a = 6378137, b = 6356752.3142, f = 1 / 298.257223563;
    var L = OpenLayers.Util.rad(p2.lon - p1.lon);
    var U1 = Math.atan((1 - f) * Math.tan(OpenLayers.Util.rad(p1.lat)));
    var U2 = Math.atan((1 - f) * Math.tan(OpenLayers.Util.rad(p2.lat)));
    var sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
    var sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);
    var lambda = L, lambdaP = 2 * Math.PI;
    var iterLimit = 20;
    while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0) {
        var sinLambda = Math.sin(lambda), cosLambda = Math.cos(lambda);
        var sinSigma = Math.sqrt((cosU2 * sinLambda) * (cosU2 * sinLambda) +
(cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
        if (sinSigma == 0) {
            return 0;
        }
        var cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        var sigma = Math.atan2(sinSigma, cosSigma);
        var alpha = Math.asin(cosU1 * cosU2 * sinLambda / sinSigma);
        var cosSqAlpha = Math.cos(alpha) * Math.cos(alpha);
        var cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
        var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        lambdaP = lambda;
        lambda = L + (1 - C) * f * Math.sin(alpha) * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    }
    if (iterLimit == 0) {
        return NaN;
    }
    var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    var s = b * A * (sigma - deltaSigma);
    var d = s.toFixed(3) / 1000;
    return d;
};
OpenLayers.Util.getParameters = function(url) {
    url = url || window.location.href;
    var paramsString = "";
    if (OpenLayers.String.contains(url, '?')) {
        var start = url.indexOf('?') + 1;
        var end = OpenLayers.String.contains(url, "#") ? url.indexOf('#') : url.length;
        paramsString = url.substring(start, end);
    }
    var parameters = {};
    var pairs = paramsString.split(/[&;]/);
    for (var i = 0, len = pairs.length;
i < len;
++i) {
        var keyValue = pairs[i].split('=');
        if (keyValue[0]) {
            var key = decodeURIComponent(keyValue[0]);
            var value = keyValue[1] || '';
            value = value.split(",");
            for (var j = 0, jlen = value.length;
j < jlen;
j++) {
                value[j] = decodeURIComponent(value[j]);
            }
            if (value.length == 1) {
                value = value[0];
            }
            parameters[key] = value;
        } 
    }
    return parameters;
};
OpenLayers.Util.getArgs = function(url) {
    OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated", { 'newMethod': 'OpenLayers.Util.getParameters' }));
    return OpenLayers.Util.getParameters(url);
};
OpenLayers.Util.lastSeqID = 0;
OpenLayers.Util.createUniqueID = function(prefix) {
    if (prefix == null) {
        prefix = "id_";
    }
    OpenLayers.Util.lastSeqID += 1;
    return prefix + OpenLayers.Util.lastSeqID;
};
OpenLayers.INCHES_PER_UNIT = { 'inches': 1.0, 'ft': 12.0, 'mi': 63360.0, 'm': 39.3701, 'km': 39370.1, 'dd': 4374754, 'yd': 36 };
OpenLayers.INCHES_PER_UNIT["in"] = OpenLayers.INCHES_PER_UNIT.inches;
OpenLayers.INCHES_PER_UNIT["degrees"] = OpenLayers.INCHES_PER_UNIT.dd;
OpenLayers.INCHES_PER_UNIT["nmi"] = 1852 * OpenLayers.INCHES_PER_UNIT.m;
OpenLayers.DOTS_PER_INCH = 72;
OpenLayers.Util.normalizeScale = function(scale) {
    var normScale = (scale > 1.0) ? (1.0 / scale) : scale;
    return normScale;
};
OpenLayers.Util.getResolutionFromScale = function(scale, units) {
    if (units == null) {
        units = "degrees";
    }
    var normScale = OpenLayers.Util.normalizeScale(scale);
    var resolution = 1 / (normScale * OpenLayers.INCHES_PER_UNIT[units] * OpenLayers.DOTS_PER_INCH);
    return resolution;
};
OpenLayers.Util.getScaleFromResolution = function(resolution, units) {
    if (units == null) {
        units = "degrees";
    }
    var scale = resolution * OpenLayers.INCHES_PER_UNIT[units] * OpenLayers.DOTS_PER_INCH;
    return scale;
};
OpenLayers.Util.safeStopPropagation = function(evt) {
    OpenLayers.Event.stop(evt, true);
};
OpenLayers.Util.pagePosition = function(forElement) {
    var valueT = 0, valueL = 0;
    var element = forElement;
    var child = forElement;
    while (element) {
        if (element == document.body) {
            if (OpenLayers.Element.getStyle(child, 'position') == 'absolute') {
                break;
            } 
        }
        valueT += element.offsetTop || 0;
        valueL += element.offsetLeft || 0;
        child = element;
        try {
            element = element.offsetParent;
        } catch (e) {
            OpenLayers.Console.error(OpenLayers.i18n("pagePositionFailed", { 'elemId': element.id }));
            break;
        } 
    }
    element = forElement;
    while (element) {
        valueT -= element.scrollTop || 0;
        valueL -= element.scrollLeft || 0;
        element = element.parentNode;
    }
    return [valueL, valueT];
};
OpenLayers.Util.isEquivalentUrl = function(url1, url2, options) {
    options = options || {};
    OpenLayers.Util.applyDefaults(options, { ignoreCase: true, ignorePort80: true, ignoreHash: true });
    var urlObj1 = OpenLayers.Util.createUrlObject(url1, options);
    var urlObj2 = OpenLayers.Util.createUrlObject(url2, options);
    for (var key in urlObj1) {
        if (options.test) {
            OpenLayers.Console.userError(key + "\n1:" + urlObj1[key] + "\n2:" + urlObj2[key]);
        }
        var val1 = urlObj1[key];
        var val2 = urlObj2[key];
        switch (key) {
            case "args": break;
            case "host": case "port": case "protocol": if ((val1 == "") || (val2 == "")) {
                    break;
                }
            default: if ((key != "args") && (urlObj1[key] != urlObj2[key])) {
                    return false;
                }
                break;
        } 
    }
    for (var key in urlObj1.args) {
        if (urlObj1.args[key] != urlObj2.args[key]) {
            return false;
        }
        delete urlObj2.args[key];
    }
    for (var key in urlObj2.args) {
        return false;
    }
    return true;
};
OpenLayers.Util.createUrlObject = function(url, options) {
    options = options || {};
    var urlObject = {};
    if (options.ignoreCase) {
        url = url.toLowerCase();
    }
    var a = document.createElement('a');
    a.href = url;
    urlObject.host = a.host;
    var port = a.port;
    if (port.length <= 0) {
        var newHostLength = urlObject.host.length - (port.length);
        urlObject.host = urlObject.host.substring(0, newHostLength);
    }
    urlObject.protocol = a.protocol;
    urlObject.port = ((port == "80") && (options.ignorePort80)) ? "" : port;
    urlObject.hash = (options.ignoreHash) ? "" : a.hash;
    var queryString = a.search;
    if (!queryString) {
        var qMark = url.indexOf("?");
        queryString = (qMark != -1) ? url.substr(qMark) : "";
    }
    urlObject.args = OpenLayers.Util.getParameters(queryString);
    if (((urlObject.protocol == "file:") && (url.indexOf("file:") != -1)) || ((urlObject.protocol != "file:") && (urlObject.host != ""))) {
        urlObject.pathname = a.pathname;
        var qIndex = urlObject.pathname.indexOf("?");
        if (qIndex != -1) {
            urlObject.pathname = urlObject.pathname.substring(0, qIndex);
        } 
    } else {
        var relStr = OpenLayers.Util.removeTail(url);
        var backs = 0;
        do {
            var index = relStr.indexOf("../");
            if (index == 0) {
                backs++;
                relStr = relStr.substr(3);
            } else if (index >= 0) {
                var prevChunk = relStr.substr(0, index - 1);
                var slash = prevChunk.indexOf("/");
                prevChunk = (slash != -1) ? prevChunk.substr(0, slash + 1) : "";
                var postChunk = relStr.substr(index + 3);
                relStr = prevChunk + postChunk;
            } 
        } while (index != -1)
        var windowAnchor = document.createElement("a");
        var windowUrl = window.location.href;
        if (options.ignoreCase) {
            windowUrl = windowUrl.toLowerCase();
        }
        windowAnchor.href = windowUrl;
        urlObject.protocol = windowAnchor.protocol;
        var splitter = (windowAnchor.pathname.indexOf("/") != -1) ? "/" : "\\";
        var dirs = windowAnchor.pathname.split(splitter);
        dirs.pop();
        while ((backs > 0) && (dirs.length > 0)) {
            dirs.pop();
            backs--;
        }
        relStr = dirs.join("/") + "/" + relStr;
        urlObject.pathname = relStr;
    }
    if ((urlObject.protocol == "file:") || (urlObject.protocol == "")) {
        urlObject.host = "localhost";
    }
    return urlObject;
};
OpenLayers.Util.removeTail = function(url) {
    var head = null;
    var qMark = url.indexOf("?");
    var hashMark = url.indexOf("#");
    if (qMark == -1) {
        head = (hashMark != -1) ? url.substr(0, hashMark) : url;
    } else {
        head = (hashMark != -1) ? url.substr(0, Math.min(qMark, hashMark)) : url.substr(0, qMark);
    }
    return head;
};
OpenLayers.Util.getBrowserName = function() {
    var browserName = "";
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("opera") != -1) {
        browserName = "opera";
    } else if (ua.indexOf("msie") != -1) {
        browserName = "msie";
    } else if (ua.indexOf("safari") != -1) {
        browserName = "safari";
    } else if (ua.indexOf("mozilla") != -1) {
        if (ua.indexOf("firefox") != -1) {
            browserName = "firefox";
        } else {
            browserName = "mozilla";
        } 
    }
    return browserName;
};
OpenLayers.Util.getRenderedDimensions = function(contentHTML, size, options) {
    var w, h;
    var container = document.createElement("div");
    container.style.overflow = "";
    container.style.position = "absolute";
    container.style.left = "-9999px";
    if (size) {
        if (size.w) {
            w = size.w;
            container.style.width = w + "px";
        } else if (size.h) {
            h = size.h;
            container.style.height = h + "px";
        } 
    }
    if (options && options.displayClass) {
        container.className = options.displayClass;
    }
    var content = document.createElement("div");
    content.innerHTML = contentHTML;
    container.appendChild(content);
    document.body.appendChild(container);
    if (!w) {
        w = parseInt(content.scrollWidth);
        container.style.width = w + "px";
    }
    if (!h) {
        h = parseInt(content.scrollHeight);
    }
    container.removeChild(content);
    document.body.removeChild(container);
    return new OpenLayers.Size(w, h);
};
OpenLayers.Util.getScrollbarWidth = function() {
    var scrollbarWidth = OpenLayers.Util._scrollbarWidth;
    if (scrollbarWidth == null) {
        var scr = null;
        var inn = null;
        var wNoScroll = 0;
        var wScroll = 0;
        scr = document.createElement('div');
        scr.style.position = 'absolute';
        scr.style.top = '-1000px';
        scr.style.left = '-1000px';
        scr.style.width = '100px';
        scr.style.height = '50px';
        scr.style.overflow = 'hidden';
        inn = document.createElement('div');
        inn.style.width = '100%';
        inn.style.height = '200px';
        scr.appendChild(inn);
        document.body.appendChild(scr);
        wNoScroll = inn.offsetWidth;
        scr.style.overflow = 'scroll';
        wScroll = inn.offsetWidth;
        document.body.removeChild(document.body.lastChild);
        OpenLayers.Util._scrollbarWidth = (wNoScroll - wScroll);
        scrollbarWidth = OpenLayers.Util._scrollbarWidth;
    }
    return scrollbarWidth;
};
OpenLayers.Rico = new Object();
OpenLayers.Rico.Corner = { round: function(e, options) {
    e = OpenLayers.Util.getElement(e);
    this._setOptions(options);
    var color = this.options.color;
    if (this.options.color == "fromElement") {
        color = this._background(e);
    }
    var bgColor = this.options.bgColor;
    if (this.options.bgColor == "fromParent") {
        bgColor = this._background(e.offsetParent);
    }
    this._roundCornersImpl(e, color, bgColor);
}, changeColor: function(theDiv, newColor) {
    theDiv.style.backgroundColor = newColor;
    var spanElements = theDiv.parentNode.getElementsByTagName("span");
    for (var currIdx = 0;
currIdx < spanElements.length;
currIdx++) {
        spanElements[currIdx].style.backgroundColor = newColor;
    } 
}, changeOpacity: function(theDiv, newOpacity) {
    var mozillaOpacity = newOpacity;
    var ieOpacity = 'alpha(opacity=' + newOpacity * 100 + ')';
    theDiv.style.opacity = mozillaOpacity;
    theDiv.style.filter = ieOpacity;
    var spanElements = theDiv.parentNode.getElementsByTagName("span");
    for (var currIdx = 0;
currIdx < spanElements.length;
currIdx++) {
        spanElements[currIdx].style.opacity = mozillaOpacity;
        spanElements[currIdx].style.filter = ieOpacity;
    } 
}, reRound: function(theDiv, options) {
    var topRico = theDiv.parentNode.childNodes[0];
    var bottomRico = theDiv.parentNode.childNodes[2];
    theDiv.parentNode.removeChild(topRico);
    theDiv.parentNode.removeChild(bottomRico);
    this.round(theDiv.parentNode, options);
}, _roundCornersImpl: function(e, color, bgColor) {
    if (this.options.border) {
        this._renderBorder(e, bgColor);
    }
    if (this._isTopRounded()) {
        this._roundTopCorners(e, color, bgColor);
    }
    if (this._isBottomRounded()) {
        this._roundBottomCorners(e, color, bgColor);
    } 
}, _renderBorder: function(el, bgColor) {
    var borderValue = "1px solid " + this._borderColor(bgColor);
    var borderL = "border-left: " + borderValue;
    var borderR = "border-right: " + borderValue;
    var style = "style='" + borderL + ";" + borderR + "'";
    el.innerHTML = "<div " + style + ">" + el.innerHTML + "</div>";
}, _roundTopCorners: function(el, color, bgColor) {
    var corner = this._createCorner(bgColor);
    for (var i = 0;
i < this.options.numSlices;
i++) {
        corner.appendChild(this._createCornerSlice(color, bgColor, i, "top"));
    }
    el.style.paddingTop = 0;
    el.insertBefore(corner, el.firstChild);
}, _roundBottomCorners: function(el, color, bgColor) {
    var corner = this._createCorner(bgColor);
    for (var i = (this.options.numSlices - 1);
i >= 0;
i--) {
        corner.appendChild(this._createCornerSlice(color, bgColor, i, "bottom"));
    }
    el.style.paddingBottom = 0;
    el.appendChild(corner);
}, _createCorner: function(bgColor) {
    var corner = document.createElement("div");
    corner.style.backgroundColor = (this._isTransparent() ? "transparent" : bgColor);
    return corner;
}, _createCornerSlice: function(color, bgColor, n, position) {
    var slice = document.createElement("span");
    var inStyle = slice.style;
    inStyle.backgroundColor = color;
    inStyle.display = "block";
    inStyle.height = "1px";
    inStyle.overflow = "hidden";
    inStyle.fontSize = "1px";
    var borderColor = this._borderColor(color, bgColor);
    if (this.options.border && n == 0) {
        inStyle.borderTopStyle = "solid";
        inStyle.borderTopWidth = "1px";
        inStyle.borderLeftWidth = "0px";
        inStyle.borderRightWidth = "0px";
        inStyle.borderBottomWidth = "0px";
        inStyle.height = "0px";
        inStyle.borderColor = borderColor;
    }
    else if (borderColor) {
        inStyle.borderColor = borderColor;
        inStyle.borderStyle = "solid";
        inStyle.borderWidth = "0px 1px";
    }
    if (!this.options.compact && (n == (this.options.numSlices - 1))) {
        inStyle.height = "2px";
    }
    this._setMargin(slice, n, position);
    this._setBorder(slice, n, position);
    return slice;
}, _setOptions: function(options) {
    this.options = { corners: "all", color: "fromElement", bgColor: "fromParent", blend: true, border: false, compact: false };
    OpenLayers.Util.extend(this.options, options || {});
    this.options.numSlices = this.options.compact ? 2 : 4;
    if (this._isTransparent()) {
        this.options.blend = false;
    } 
}, _whichSideTop: function() {
    if (this._hasString(this.options.corners, "all", "top")) {
        return "";
    }
    if (this.options.corners.indexOf("tl") >= 0 && this.options.corners.indexOf("tr") >= 0) {
        return "";
    }
    if (this.options.corners.indexOf("tl") >= 0) {
        return "left";
    } else if (this.options.corners.indexOf("tr") >= 0) {
        return "right";
    }
    return "";
}, _whichSideBottom: function() {
    if (this._hasString(this.options.corners, "all", "bottom")) {
        return "";
    }
    if (this.options.corners.indexOf("bl") >= 0 && this.options.corners.indexOf("br") >= 0) {
        return "";
    }
    if (this.options.corners.indexOf("bl") >= 0) {
        return "left";
    } else if (this.options.corners.indexOf("br") >= 0) {
        return "right";
    }
    return "";
}, _borderColor: function(color, bgColor) {
    if (color == "transparent") {
        return bgColor;
    } else if (this.options.border) {
        return this.options.border;
    } else if (this.options.blend) {
        return this._blend(bgColor, color);
    } else {
        return "";
    } 
}, _setMargin: function(el, n, corners) {
    var marginSize = this._marginSize(n);
    var whichSide = corners == "top" ? this._whichSideTop() : this._whichSideBottom();
    if (whichSide == "left") {
        el.style.marginLeft = marginSize + "px";
        el.style.marginRight = "0px";
    }
    else if (whichSide == "right") {
        el.style.marginRight = marginSize + "px";
        el.style.marginLeft = "0px";
    }
    else {
        el.style.marginLeft = marginSize + "px";
        el.style.marginRight = marginSize + "px";
    } 
}, _setBorder: function(el, n, corners) {
    var borderSize = this._borderSize(n);
    var whichSide = corners == "top" ? this._whichSideTop() : this._whichSideBottom();
    if (whichSide == "left") {
        el.style.borderLeftWidth = borderSize + "px";
        el.style.borderRightWidth = "0px";
    }
    else if (whichSide == "right") {
        el.style.borderRightWidth = borderSize + "px";
        el.style.borderLeftWidth = "0px";
    }
    else {
        el.style.borderLeftWidth = borderSize + "px";
        el.style.borderRightWidth = borderSize + "px";
    }
    if (this.options.border != false) {
        el.style.borderLeftWidth = borderSize + "px";
        el.style.borderRightWidth = borderSize + "px";
    } 
}, _marginSize: function(n) {
    if (this._isTransparent()) {
        return 0;
    }
    var marginSizes = [5, 3, 2, 1];
    var blendedMarginSizes = [3, 2, 1, 0];
    var compactMarginSizes = [2, 1];
    var smBlendedMarginSizes = [1, 0];
    if (this.options.compact && this.options.blend) {
        return smBlendedMarginSizes[n];
    } else if (this.options.compact) {
        return compactMarginSizes[n];
    } else if (this.options.blend) {
        return blendedMarginSizes[n];
    } else {
        return marginSizes[n];
    } 
}, _borderSize: function(n) {
    var transparentBorderSizes = [5, 3, 2, 1];
    var blendedBorderSizes = [2, 1, 1, 1];
    var compactBorderSizes = [1, 0];
    var actualBorderSizes = [0, 2, 0, 0];
    if (this.options.compact && (this.options.blend || this._isTransparent())) {
        return 1;
    } else if (this.options.compact) {
        return compactBorderSizes[n];
    } else if (this.options.blend) {
        return blendedBorderSizes[n];
    } else if (this.options.border) {
        return actualBorderSizes[n];
    } else if (this._isTransparent()) {
        return transparentBorderSizes[n];
    }
    return 0;
}, _hasString: function(str) {
    for (var i = 1;
i < arguments.length;
i++) if (str.indexOf(arguments[i]) >= 0) {
        return true;
    } return false;
}, _blend: function(c1, c2) {
    var cc1 = OpenLayers.Rico.Color.createFromHex(c1);
    cc1.blend(OpenLayers.Rico.Color.createFromHex(c2));
    return cc1;
}, _background: function(el) {
    try {
        return OpenLayers.Rico.Color.createColorFromBackground(el).asHex();
    } catch (err) {
        return "#ffffff";
    } 
}, _isTransparent: function() {
    return this.options.color == "transparent";
}, _isTopRounded: function() {
    return this._hasString(this.options.corners, "all", "top", "tl", "tr");
}, _isBottomRounded: function() {
    return this._hasString(this.options.corners, "all", "bottom", "bl", "br");
}, _hasSingleTextChild: function(el) {
    return el.childNodes.length == 1 && el.childNodes[0].nodeType == 3;
} 
};
(function() {
    if (window.google && google.gears) {
        return;
    }
    var factory = null;
    if (typeof GearsFactory != 'undefined') {
        factory = new GearsFactory();
    } else {
        try {
            factory = new ActiveXObject('Gears.Factory');
            if (factory.getBuildInfo().indexOf('ie_mobile') != -1) {
                factory.privateSetGlobalObject(this);
            } 
        } catch (e) {
            if ((typeof navigator.mimeTypes != 'undefined') && navigator.mimeTypes["application/x-googlegears"]) {
                factory = document.createElement("object");
                factory.style.display = "none";
                factory.width = 0;
                factory.height = 0;
                factory.type = "application/x-googlegears";
                document.documentElement.appendChild(factory);
            } 
        } 
    }
    if (!factory) {
        return;
    }
    if (!window.google) {
        google = {};
    }
    if (!google.gears) {
        google.gears = { factory: factory };
    } 
})();
OpenLayers.Bounds = OpenLayers.Class({ left: null, bottom: null, right: null, top: null, initialize: function(left, bottom, right, top) {
    if (left != null) {
        this.left = parseFloat(left);
    }
    if (bottom != null) {
        this.bottom = parseFloat(bottom);
    }
    if (right != null) {
        this.right = parseFloat(right);
    }
    if (top != null) {
        this.top = parseFloat(top);
    } 
}, clone: function() {
    return new OpenLayers.Bounds(this.left, this.bottom, this.right, this.top);
}, equals: function(bounds) {
    var equals = false;
    if (bounds != null) {
        equals = ((this.left == bounds.left) && (this.right == bounds.right) && (this.top == bounds.top) && (this.bottom == bounds.bottom));
    }
    return equals;
}, toString: function() {
    return ("left-bottom=(" + this.left + "," + this.bottom + ")"
+ " right-top=(" + this.right + "," + this.top + ")");
}, toArray: function() {
    return [this.left, this.bottom, this.right, this.top];
}, toBBOX: function(decimal) {
    if (decimal == null) {
        decimal = 6;
    }
    var mult = Math.pow(10, decimal);
    var bbox = Math.round(this.left * mult) / mult + "," +
Math.round(this.bottom * mult) / mult + "," +
Math.round(this.right * mult) / mult + "," +
Math.round(this.top * mult) / mult;
    return bbox;
}, toGeometry: function() {
    return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left, this.bottom), new OpenLayers.Geometry.Point(this.right, this.bottom), new OpenLayers.Geometry.Point(this.right, this.top), new OpenLayers.Geometry.Point(this.left, this.top)])]);
}, getWidth: function() {
    return (this.right - this.left);
}, getHeight: function() {
    return (this.top - this.bottom);
}, getSize: function() {
    return new OpenLayers.Size(this.getWidth(), this.getHeight());
}, getCenterPixel: function() {
    return new OpenLayers.Pixel((this.left + this.right) / 2, (this.bottom + this.top) / 2);
}, getCenterLonLat: function() {
    return new OpenLayers.LonLat((this.left + this.right) / 2, (this.bottom + this.top) / 2);
}, scale: function(ratio, origin) {
    if (origin == null) {
        origin = this.getCenterLonLat();
    }
    var bounds = [];
    var origx, origy;
    if (origin.CLASS_NAME == "OpenLayers.LonLat") {
        origx = origin.lon;
        origy = origin.lat;
    } else {
        origx = origin.x;
        origy = origin.y;
    }
    var left = (this.left - origx) * ratio + origx;
    var bottom = (this.bottom - origy) * ratio + origy;
    var right = (this.right - origx) * ratio + origx;
    var top = (this.top - origy) * ratio + origy;
    return new OpenLayers.Bounds(left, bottom, right, top);
}, add: function(x, y) {
    if ((x == null) || (y == null)) {
        var msg = OpenLayers.i18n("boundsAddError");
        OpenLayers.Console.error(msg);
        return null;
    }
    return new OpenLayers.Bounds(this.left + x, this.bottom + y, this.right + x, this.top + y);
}, extend: function(object) {
    var bounds = null;
    if (object) {
        switch (object.CLASS_NAME) {
            case "OpenLayers.LonLat": bounds = new OpenLayers.Bounds(object.lon, object.lat, object.lon, object.lat);
                break;
            case "OpenLayers.Geometry.Point": bounds = new OpenLayers.Bounds(object.x, object.y, object.x, object.y);
                break;
            case "OpenLayers.Bounds": bounds = object;
                break;
        }
        if (bounds) {
            if ((this.left == null) || (bounds.left < this.left)) {
                this.left = bounds.left;
            }
            if ((this.bottom == null) || (bounds.bottom < this.bottom)) {
                this.bottom = bounds.bottom;
            }
            if ((this.right == null) || (bounds.right > this.right)) {
                this.right = bounds.right;
            }
            if ((this.top == null) || (bounds.top > this.top)) {
                this.top = bounds.top;
            } 
        } 
    } 
}, containsLonLat: function(ll, inclusive) {
    return this.contains(ll.lon, ll.lat, inclusive);
}, containsPixel: function(px, inclusive) {
    return this.contains(px.x, px.y, inclusive);
}, contains: function(x, y, inclusive) {
    if (inclusive == null) {
        inclusive = true;
    }
    var contains = false;
    if (inclusive) {
        contains = ((x >= this.left) && (x <= this.right) && (y >= this.bottom) && (y <= this.top));
    } else {
        contains = ((x > this.left) && (x < this.right) && (y > this.bottom) && (y < this.top));
    }
    return contains;
}, intersectsBounds: function(bounds, inclusive) {
    if (inclusive == null) {
        inclusive = true;
    }
    var inBottom = (bounds.bottom == this.bottom && bounds.top == this.top) ? true : (((bounds.bottom > this.bottom) && (bounds.bottom < this.top)) || ((this.bottom > bounds.bottom) && (this.bottom < bounds.top)));
    var inTop = (bounds.bottom == this.bottom && bounds.top == this.top) ? true : (((bounds.top > this.bottom) && (bounds.top < this.top)) || ((this.top > bounds.bottom) && (this.top < bounds.top)));
    var inRight = (bounds.right == this.right && bounds.left == this.left) ? true : (((bounds.right > this.left) && (bounds.right < this.right)) || ((this.right > bounds.left) && (this.right < bounds.right)));
    var inLeft = (bounds.right == this.right && bounds.left == this.left) ? true : (((bounds.left > this.left) && (bounds.left < this.right)) || ((this.left > bounds.left) && (this.left < bounds.right)));
    return (this.containsBounds(bounds, true, inclusive) || bounds.containsBounds(this, true, inclusive) || ((inTop || inBottom) && (inLeft || inRight)));
}, containsBounds: function(bounds, partial, inclusive) {
    if (partial == null) {
        partial = false;
    }
    if (inclusive == null) {
        inclusive = true;
    }
    var inLeft;
    var inTop;
    var inRight;
    var inBottom;
    if (inclusive) {
        inLeft = (bounds.left >= this.left) && (bounds.left <= this.right);
        inTop = (bounds.top >= this.bottom) && (bounds.top <= this.top);
        inRight = (bounds.right >= this.left) && (bounds.right <= this.right);
        inBottom = (bounds.bottom >= this.bottom) && (bounds.bottom <= this.top);
    } else {
        inLeft = (bounds.left > this.left) && (bounds.left < this.right);
        inTop = (bounds.top > this.bottom) && (bounds.top < this.top);
        inRight = (bounds.right > this.left) && (bounds.right < this.right);
        inBottom = (bounds.bottom > this.bottom) && (bounds.bottom < this.top);
    }
    return (partial) ? (inTop || inBottom) && (inLeft || inRight) : (inTop && inLeft && inBottom && inRight);
}, determineQuadrant: function(lonlat) {
    var quadrant = "";
    var center = this.getCenterLonLat();
    quadrant += (lonlat.lat < center.lat) ? "b" : "t";
    quadrant += (lonlat.lon < center.lon) ? "l" : "r";
    return quadrant;
}, transform: function(source, dest) {
    var ll = OpenLayers.Projection.transform({ 'x': this.left, 'y': this.bottom }, source, dest);
    var lr = OpenLayers.Projection.transform({ 'x': this.right, 'y': this.bottom }, source, dest);
    var ul = OpenLayers.Projection.transform({ 'x': this.left, 'y': this.top }, source, dest);
    var ur = OpenLayers.Projection.transform({ 'x': this.right, 'y': this.top }, source, dest);
    this.left = Math.min(ll.x, ul.x);
    this.bottom = Math.min(ll.y, lr.y);
    this.right = Math.max(lr.x, ur.x);
    this.top = Math.max(ul.y, ur.y);
    return this;
}, wrapDateLine: function(maxExtent, options) {
    options = options || {};
    var leftTolerance = options.leftTolerance || 0;
    var rightTolerance = options.rightTolerance || 0;
    var newBounds = this.clone();
    if (maxExtent) {
        while (newBounds.left < maxExtent.left && (newBounds.right - rightTolerance) <= maxExtent.left) {
            newBounds = newBounds.add(maxExtent.getWidth(), 0);
        }
        while ((newBounds.left + leftTolerance) >= maxExtent.right && newBounds.right > maxExtent.right) {
            newBounds = newBounds.add(-maxExtent.getWidth(), 0);
        } 
    }
    return newBounds;
}, CLASS_NAME: "OpenLayers.Bounds"
});
OpenLayers.Bounds.fromString = function(str) {
    var bounds = str.split(",");
    return OpenLayers.Bounds.fromArray(bounds);
};
OpenLayers.Bounds.fromArray = function(bbox) {
    return new OpenLayers.Bounds(parseFloat(bbox[0]), parseFloat(bbox[1]), parseFloat(bbox[2]), parseFloat(bbox[3]));
};
OpenLayers.Bounds.fromSize = function(size) {
    return new OpenLayers.Bounds(0, size.h, size.w, 0);
};
OpenLayers.Bounds.oppositeQuadrant = function(quadrant) {
    var opp = "";
    opp += (quadrant.charAt(0) == 't') ? 'b' : 't';
    opp += (quadrant.charAt(1) == 'l') ? 'r' : 'l';
    return opp;
};
OpenLayers.Element = { visible: function(element) {
    return OpenLayers.Util.getElement(element).style.display != 'none';
}, toggle: function() {
    for (var i = 0, len = arguments.length;
i < len;
i++) {
        var element = OpenLayers.Util.getElement(arguments[i]);
        var display = OpenLayers.Element.visible(element) ? 'hide' : 'show';
        OpenLayers.Element[display](element);
    } 
}, hide: function() {
    for (var i = 0, len = arguments.length;
i < len;
i++) {
        var element = OpenLayers.Util.getElement(arguments[i]);
        element.style.display = 'none';
    } 
}, show: function() {
    for (var i = 0, len = arguments.length;
i < len;
i++) {
        var element = OpenLayers.Util.getElement(arguments[i]);
        element.style.display = '';
    } 
}, remove: function(element) {
    element = OpenLayers.Util.getElement(element);
    element.parentNode.removeChild(element);
}, getHeight: function(element) {
    element = OpenLayers.Util.getElement(element);
    return element.offsetHeight;
}, getDimensions: function(element) {
    element = OpenLayers.Util.getElement(element);
    if (OpenLayers.Element.getStyle(element, 'display') != 'none') {
        return { width: element.offsetWidth, height: element.offsetHeight };
    }
    var els = element.style;
    var originalVisibility = els.visibility;
    var originalPosition = els.position;
    els.visibility = 'hidden';
    els.position = 'absolute';
    els.display = '';
    var originalWidth = element.clientWidth;
    var originalHeight = element.clientHeight;
    els.display = 'none';
    els.position = originalPosition;
    els.visibility = originalVisibility;
    return { width: originalWidth, height: originalHeight };
}, hasClass: function(element, name) {
    var names = element.className;
    return (!!names && new RegExp("(^|\\s)" + name + "(\\s|$)").test(names));
}, addClass: function(element, name) {
    if (!OpenLayers.Element.hasClass(element, name)) {
        element.className += (element.className ? " " : "") + name;
    }
    return element;
}, removeClass: function(element, name) {
    var names = element.className;
    if (names) {
        element.className = OpenLayers.String.trim(names.replace(new RegExp("(^|\\s+)" + name + "(\\s+|$)"), " "));
    }
    return element;
}, toggleClass: function(element, name) {
    if (OpenLayers.Element.hasClass(element, name)) {
        OpenLayers.Element.removeClass(element, name);
    } else {
        OpenLayers.Element.addClass(element, name);
    }
    return element;
}, getStyle: function(element, style) {
    element = OpenLayers.Util.getElement(element);
    var value = null;
    if (element && element.style) {
        value = element.style[OpenLayers.String.camelize(style)];
        if (!value) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css.getPropertyValue(style) : null;
            } else if (element.currentStyle) {
                value = element.currentStyle[OpenLayers.String.camelize(style)];
            } 
        }
        var positions = ['left', 'top', 'right', 'bottom'];
        if (window.opera && (OpenLayers.Util.indexOf(positions, style) != -1) && (OpenLayers.Element.getStyle(element, 'position') == 'static')) {
            value = 'auto';
        } 
    }
    return value == 'auto' ? null : value;
} 
};
OpenLayers.LonLat = OpenLayers.Class({ lon: 0.0, lat: 0.0, initialize: function(lon, lat) {
    this.lon = parseFloat(lon);
    this.lat = parseFloat(lat);
}, toString: function() {
    return ("lon=" + this.lon + ",lat=" + this.lat);
}, toShortString: function() {
    return (this.lon + ", " + this.lat);
}, clone: function() {
    return new OpenLayers.LonLat(this.lon, this.lat);
}, add: function(lon, lat) {
    if ((lon == null) || (lat == null)) {
        var msg = OpenLayers.i18n("lonlatAddError");
        OpenLayers.Console.error(msg);
        return null;
    }
    return new OpenLayers.LonLat(this.lon + lon, this.lat + lat);
}, equals: function(ll) {
    var equals = false;
    if (ll != null) {
        equals = ((this.lon == ll.lon && this.lat == ll.lat) || (isNaN(this.lon) && isNaN(this.lat) && isNaN(ll.lon) && isNaN(ll.lat)));
    }
    return equals;
}, transform: function(source, dest) {
    var point = OpenLayers.Projection.transform({ 'x': this.lon, 'y': this.lat }, source, dest);
    this.lon = point.x;
    this.lat = point.y;
    return this;
}, wrapDateLine: function(maxExtent) {
    var newLonLat = this.clone();
    if (maxExtent) {
        while (newLonLat.lon < maxExtent.left) {
            newLonLat.lon += maxExtent.getWidth();
        }
        while (newLonLat.lon > maxExtent.right) {
            newLonLat.lon -= maxExtent.getWidth();
        } 
    }
    return newLonLat;
}, CLASS_NAME: "OpenLayers.LonLat"
});
OpenLayers.LonLat.fromString = function(str) {
    var pair = str.split(",");
    return new OpenLayers.LonLat(parseFloat(pair[0]), parseFloat(pair[1]));
};
OpenLayers.Pixel = OpenLayers.Class({ x: 0.0, y: 0.0, initialize: function(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
}, toString: function() {
    return ("x=" + this.x + ",y=" + this.y);
}, clone: function() {
    return new OpenLayers.Pixel(this.x, this.y);
}, equals: function(px) {
    var equals = false;
    if (px != null) {
        equals = ((this.x == px.x && this.y == px.y) || (isNaN(this.x) && isNaN(this.y) && isNaN(px.x) && isNaN(px.y)));
    }
    return equals;
}, add: function(x, y) {
    if ((x == null) || (y == null)) {
        var msg = OpenLayers.i18n("pixelAddError");
        OpenLayers.Console.error(msg);
        return null;
    }
    return new OpenLayers.Pixel(this.x + x, this.y + y);
}, offset: function(px) {
    var newPx = this.clone();
    if (px) {
        newPx = this.add(px.x, px.y);
    }
    return newPx;
}, CLASS_NAME: "OpenLayers.Pixel"
});
OpenLayers.Size = OpenLayers.Class({ w: 0.0, h: 0.0, initialize: function(w, h) {
    this.w = parseFloat(w);
    this.h = parseFloat(h);
}, toString: function() {
    return ("w=" + this.w + ",h=" + this.h);
}, clone: function() {
    return new OpenLayers.Size(this.w, this.h);
}, equals: function(sz) {
    var equals = false;
    if (sz != null) {
        equals = ((this.w == sz.w && this.h == sz.h) || (isNaN(this.w) && isNaN(this.h) && isNaN(sz.w) && isNaN(sz.h)));
    }
    return equals;
}, CLASS_NAME: "OpenLayers.Size"
});
OpenLayers.Console = { log: function() { }, debug: function() { }, info: function() { }, warn: function() { }, error: function() { }, userError: function(error) {
    alert(error);
}, assert: function() { }, dir: function() { }, dirxml: function() { }, trace: function() { }, group: function() { }, groupEnd: function() { }, time: function() { }, timeEnd: function() { }, profile: function() { }, profileEnd: function() { }, count: function() { }, CLASS_NAME: "OpenLayers.Console"
};
(function() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0, len = scripts.length;
i < len;
++i) {
        if (scripts[i].src.indexOf("firebug.js") != -1) {
            if (console) {
                OpenLayers.Util.extend(OpenLayers.Console, console);
                break;
            } 
        } 
    } 
})();
OpenLayers.Control = OpenLayers.Class({ id: null, map: null, div: null, type: null, allowSelection: false, displayClass: "", title: "", active: null, handler: null, eventListeners: null, events: null, EVENT_TYPES: ["activate", "deactivate"], initialize: function(options) {
    this.displayClass = this.CLASS_NAME.replace("OpenLayers.", "ol").replace(/\./g, "");
    OpenLayers.Util.extend(this, options);
    this.events = new OpenLayers.Events(this, null, this.EVENT_TYPES);
    if (this.eventListeners instanceof Object) {
        this.events.on(this.eventListeners);
    }
    if (this.id == null) {
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    } 
}, destroy: function() {
    if (this.events) {
        if (this.eventListeners) {
            this.events.un(this.eventListeners);
        }
        this.events.destroy();
        this.events = null;
    }
    this.eventListeners = null;
    if (this.handler) {
        this.handler.destroy();
        this.handler = null;
    }
    if (this.handlers) {
        for (var key in this.handlers) {
            if (this.handlers.hasOwnProperty(key) && typeof this.handlers[key].destroy == "function") {
                this.handlers[key].destroy();
            } 
        }
        this.handlers = null;
    }
    if (this.map) {
        this.map.removeControl(this);
        this.map = null;
    } 
}, setMap: function(map) {
    this.map = map;
    if (this.handler) {
        this.handler.setMap(map);
    } 
}, draw: function(px) {
    if (this.div == null) {
        this.div = OpenLayers.Util.createDiv(this.id);
        this.div.className = this.displayClass;
        if (!this.allowSelection) {
            this.div.className += " olControlNoSelect";
            this.div.setAttribute("unselectable", "on", 0);
            this.div.onselectstart = function() {
                return (false);
            };
        }
        if (this.title != "") {
            this.div.title = this.title;
        } 
    }
    if (px != null) {
        this.position = px.clone();
    }
    this.moveTo(this.position);
    return this.div;
}, moveTo: function(px) {
    if ((px != null) && (this.div != null)) {
        this.div.style.left = px.x + "px";
        this.div.style.top = px.y + "px";
    } 
}, activate: function() {
    if (this.active) {
        return false;
    }
    if (this.handler) {
        this.handler.activate();
    }
    this.active = true;
    this.events.triggerEvent("activate");
    return true;
}, deactivate: function() {
    if (this.active) {
        if (this.handler) {
            this.handler.deactivate();
        }
        this.active = false;
        this.events.triggerEvent("deactivate");
        return true;
    }
    return false;
}, CLASS_NAME: "OpenLayers.Control"
});
OpenLayers.Control.TYPE_BUTTON = 1;
OpenLayers.Control.TYPE_TOGGLE = 2;
OpenLayers.Control.TYPE_TOOL = 3;
OpenLayers.Icon = OpenLayers.Class({ url: null, size: null, offset: null, calculateOffset: null, imageDiv: null, px: null, initialize: function(url, size, offset, calculateOffset) {
    this.url = url;
    this.size = (size) ? size : new OpenLayers.Size(20, 20);
    this.offset = offset ? offset : new OpenLayers.Pixel(-(this.size.w / 2), -(this.size.h / 2));
    this.calculateOffset = calculateOffset;
    var id = OpenLayers.Util.createUniqueID("OL_Icon_");
    this.imageDiv = OpenLayers.Util.createAlphaImageDiv(id);
}, destroy: function() {
    OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);
    this.imageDiv.innerHTML = "";
    this.imageDiv = null;
}, clone: function() {
    return new OpenLayers.Icon(this.url, this.size, this.offset, this.calculateOffset);
}, setSize: function(size) {
    if (size != null) {
        this.size = size;
    }
    this.draw();
}, setUrl: function(url) {
    if (url != null) {
        this.url = url;
    }
    this.draw();
}, draw: function(px) {
    OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv, null, null, this.size, this.url, "absolute");
    this.moveTo(px);
    return this.imageDiv;
}, setOpacity: function(opacity) {
    OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv, null, null, null, null, null, null, null, opacity);
}, moveTo: function(px) {
    if (px != null) {
        this.px = px;
    }
    if (this.imageDiv != null) {
        if (this.px == null) {
            this.display(false);
        } else {
            if (this.calculateOffset) {
                this.offset = this.calculateOffset(this.size);
            }
            var offsetPx = this.px.offset(this.offset);
            OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv, null, offsetPx);
        } 
    } 
}, display: function(display) {
    this.imageDiv.style.display = (display) ? "" : "none";
}, CLASS_NAME: "OpenLayers.Icon"
});
OpenLayers.Lang = { code: null, defaultCode: "en", getCode: function() {
    if (!OpenLayers.Lang.code) {
        OpenLayers.Lang.setCode();
    }
    return OpenLayers.Lang.code;
}, setCode: function(code) {
    var lang;
    if (!code) {
        code = (OpenLayers.Util.getBrowserName() == "msie") ? navigator.userLanguage : navigator.language;
    }
    var parts = code.split('-');
    parts[0] = parts[0].toLowerCase();
    if (typeof OpenLayers.Lang[parts[0]] == "object") {
        lang = parts[0];
    }
    if (parts[1]) {
        var testLang = parts[0] + '-' + parts[1].toUpperCase();
        if (typeof OpenLayers.Lang[testLang] == "object") {
            lang = testLang;
        } 
    }
    if (!lang) {
        OpenLayers.Console.warn('Failed to find OpenLayers.Lang.' + parts.join("-") + ' dictionary, falling back to default language');
        lang = OpenLayers.Lang.defaultCode;
    }
    OpenLayers.Lang.code = lang;
}, translate: function(key, context) {
    var dictionary = OpenLayers.Lang[OpenLayers.Lang.getCode()];
    var message = dictionary[key];
    if (!message) {
        message = key;
    }
    if (context) {
        message = OpenLayers.String.format(message, context);
    }
    return message;
} 
};
OpenLayers.i18n = OpenLayers.Lang.translate;
OpenLayers.Popup = OpenLayers.Class({ events: null, id: "", lonlat: null, div: null, contentSize: null, size: null, contentHTML: null, backgroundColor: "", opacity: "", border: "", contentDiv: null, groupDiv: null, closeDiv: null, autoSize: false, minSize: null, maxSize: null, displayClass: "olPopup", contentDisplayClass: "olPopupContent", padding: 0, fixPadding: function() {
    if (typeof this.padding == "number") {
        this.padding = new OpenLayers.Bounds(this.padding, this.padding, this.padding, this.padding);
    } 
}, panMapIfOutOfView: false, map: null, initialize: function(id, lonlat, contentSize, contentHTML, closeBox, closeBoxCallback) {
    if (id == null) {
        id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    }
    this.id = id;
    this.lonlat = lonlat;
    this.contentSize = (contentSize != null) ? contentSize : new OpenLayers.Size(OpenLayers.Popup.WIDTH, OpenLayers.Popup.HEIGHT);
    if (contentHTML != null) {
        this.contentHTML = contentHTML;
    }
    this.backgroundColor = OpenLayers.Popup.COLOR;
    this.opacity = OpenLayers.Popup.OPACITY;
    this.border = OpenLayers.Popup.BORDER;
    this.div = OpenLayers.Util.createDiv(this.id, null, null, null, null, null, "hidden");
    this.div.className = this.displayClass;
    var groupDivId = this.id + "_GroupDiv";
    this.groupDiv = OpenLayers.Util.createDiv(groupDivId, null, null, null, "relative", null, "hidden");
    var id = this.div.id + "_contentDiv";
    this.contentDiv = OpenLayers.Util.createDiv(id, null, this.contentSize.clone(), null, "relative");
    this.contentDiv.className = this.contentDisplayClass;
    this.groupDiv.appendChild(this.contentDiv);
    this.div.appendChild(this.groupDiv);
    if (closeBox) {
        this.addCloseBox(closeBoxCallback);
    }
    this.registerEvents();
}, destroy: function() {
    this.id = null;
    this.lonlat = null;
    this.size = null;
    this.contentHTML = null;
    this.backgroundColor = null;
    this.opacity = null;
    this.border = null;
    this.events.destroy();
    this.events = null;
    if (this.closeDiv) {
        OpenLayers.Event.stopObservingElement(this.closeDiv);
        this.groupDiv.removeChild(this.closeDiv);
    }
    this.closeDiv = null;
    this.div.removeChild(this.groupDiv);
    this.groupDiv = null;
    if (this.map != null) {
        this.map.removePopup(this);
    }
    this.map = null;
    this.div = null;
    this.autoSize = null;
    this.minSize = null;
    this.maxSize = null;
    this.padding = null;
    this.panMapIfOutOfView = null;
}, draw: function(px) {
    if (px == null) {
        if ((this.lonlat != null) && (this.map != null)) {
            px = this.map.getLayerPxFromLonLat(this.lonlat);
        } 
    }
    if (OpenLayers.Util.getBrowserName() == 'firefox') {
        this.map.events.register("movestart", this, function() {
            var style = document.defaultView.getComputedStyle(this.contentDiv, null);
            var currentOverflow = style.getPropertyValue("overflow");
            if (currentOverflow != "hidden") {
                this.contentDiv._oldOverflow = currentOverflow;
                this.contentDiv.style.overflow = "hidden";
            } 
        });
        this.map.events.register("moveend", this, function() {
            var oldOverflow = this.contentDiv._oldOverflow;
            if (oldOverflow) {
                this.contentDiv.style.overflow = oldOverflow;
                this.contentDiv._oldOverflow = null;
            } 
        });
    }
    this.moveTo(px);
    if (!this.autoSize && !this.size) {
        this.setSize(this.contentSize);
    }
    this.setBackgroundColor();
    this.setOpacity();
    this.setBorder();
    this.setContentHTML();
    if (this.panMapIfOutOfView) {
        this.panIntoView();
    }
    return this.div;
}, updatePosition: function() {
    if ((this.lonlat) && (this.map)) {
        var px = this.map.getLayerPxFromLonLat(this.lonlat);
        if (px) {
            this.moveTo(px);
        } 
    } 
}, moveTo: function(px) {
    if ((px != null) && (this.div != null)) {
        this.div.style.left = px.x + "px";
        this.div.style.top = px.y + "px";
    } 
}, visible: function() {
    return OpenLayers.Element.visible(this.div);
}, toggle: function() {
    if (this.visible()) {
        this.hide();
    } else {
        this.show();
    } 
}, show: function() {
    OpenLayers.Element.show(this.div);
    if (this.panMapIfOutOfView) {
        this.panIntoView();
    } 
}, hide: function() {
    OpenLayers.Element.hide(this.div);
}, setSize: function(contentSize) {
    this.size = contentSize.clone();
    var contentDivPadding = this.getContentDivPadding();
    var wPadding = contentDivPadding.left + contentDivPadding.right;
    var hPadding = contentDivPadding.top + contentDivPadding.bottom;
    this.fixPadding();
    wPadding += this.padding.left + this.padding.right;
    hPadding += this.padding.top + this.padding.bottom;
    if (this.closeDiv) {
        var closeDivWidth = parseInt(this.closeDiv.style.width);
        wPadding += closeDivWidth + contentDivPadding.right;
    }
    this.size.w += wPadding;
    this.size.h += hPadding;
    if (OpenLayers.Util.getBrowserName() == "msie") {
        this.contentSize.w += contentDivPadding.left + contentDivPadding.right;
        this.contentSize.h += contentDivPadding.bottom + contentDivPadding.top;
    }
    if (this.div != null) {
        this.div.style.width = this.size.w + "px";
        this.div.style.height = this.size.h + "px";
    }
    if (this.contentDiv != null) {
        this.contentDiv.style.width = contentSize.w + "px";
        this.contentDiv.style.height = contentSize.h + "px";
    } 
}, updateSize: function() {
    var preparedHTML = "<div class='" + this.contentDisplayClass + "'>" +
this.contentDiv.innerHTML + "<div>";
    var realSize = OpenLayers.Util.getRenderedDimensions(preparedHTML, null, { displayClass: this.displayClass });
    var safeSize = this.getSafeContentSize(realSize);
    var newSize = null;
    if (safeSize.equals(realSize)) {
        newSize = realSize;
    } else {
        var fixedSize = new OpenLayers.Size();
        fixedSize.w = (safeSize.w < realSize.w) ? safeSize.w : null;
        fixedSize.h = (safeSize.h < realSize.h) ? safeSize.h : null;
        if (fixedSize.w && fixedSize.h) {
            newSize = safeSize;
        } else {
            var clippedSize = OpenLayers.Util.getRenderedDimensions(preparedHTML, fixedSize, { displayClass: this.contentDisplayClass });
            var currentOverflow = OpenLayers.Element.getStyle(this.contentDiv, "overflow");
            if ((currentOverflow != "hidden") && (clippedSize.equals(safeSize))) {
                var scrollBar = OpenLayers.Util.getScrollbarWidth();
                if (fixedSize.w) {
                    clippedSize.h += scrollBar;
                } else {
                    clippedSize.w += scrollBar;
                } 
            }
            newSize = this.getSafeContentSize(clippedSize);
        } 
    }
    this.setSize(newSize);
}, setBackgroundColor: function(color) {
    if (color != undefined) {
        this.backgroundColor = color;
    }
    if (this.div != null) {
        this.div.style.backgroundColor = this.backgroundColor;
    } 
}, setOpacity: function(opacity) {
    if (opacity != undefined) {
        this.opacity = opacity;
    }
    if (this.div != null) {
        this.div.style.opacity = this.opacity;
        this.div.style.filter = 'alpha(opacity=' + this.opacity * 100 + ')';
    } 
}, setBorder: function(border) {
    if (border != undefined) {
        this.border = border;
    }
    if (this.div != null) {
        this.div.style.border = this.border;
    } 
}, setContentHTML: function(contentHTML) {
    if (contentHTML != null) {
        this.contentHTML = contentHTML;
    }
    if ((this.contentDiv != null) && (this.contentHTML != null) && (this.contentHTML != this.contentDiv.innerHTML)) {
        this.contentDiv.innerHTML = this.contentHTML;
        if (this.autoSize) {
            this.registerImageListeners();
            this.updateSize();
        } 
    } 
}, registerImageListeners: function() {
    var onImgLoad = function() {
        this.popup.updateSize();
        if (this.popup.visible() && this.popup.panMapIfOutOfView) {
            this.popup.panIntoView();
        }
        OpenLayers.Event.stopObserving(this.img, "load", this.img._onImageLoad);
    };
    var images = this.contentDiv.getElementsByTagName("img");
    for (var i = 0, len = images.length;
i < len;
i++) {
        var img = images[i];
        if (img.width == 0 || img.height == 0) {
            var context = { 'popup': this, 'img': img };
            img._onImgLoad = OpenLayers.Function.bind(onImgLoad, context);
            OpenLayers.Event.observe(img, 'load', img._onImgLoad);
        } 
    } 
}, getSafeContentSize: function(size) {
    var safeContentSize = size.clone();
    var contentDivPadding = this.getContentDivPadding();
    var wPadding = contentDivPadding.left + contentDivPadding.right;
    var hPadding = contentDivPadding.top + contentDivPadding.bottom;
    this.fixPadding();
    wPadding += this.padding.left + this.padding.right;
    hPadding += this.padding.top + this.padding.bottom;
    if (this.closeDiv) {
        var closeDivWidth = parseInt(this.closeDiv.style.width);
        wPadding += closeDivWidth + contentDivPadding.right;
    }
    if (this.minSize) {
        safeContentSize.w = Math.max(safeContentSize.w, (this.minSize.w - wPadding));
        safeContentSize.h = Math.max(safeContentSize.h, (this.minSize.h - hPadding));
    }
    if (this.maxSize) {
        safeContentSize.w = Math.min(safeContentSize.w, (this.maxSize.w - wPadding));
        safeContentSize.h = Math.min(safeContentSize.h, (this.maxSize.h - hPadding));
    }
    if (this.map && this.map.size) {
        var maxY = this.map.size.h -
this.map.paddingForPopups.top -
this.map.paddingForPopups.bottom -
hPadding;
        var maxX = this.map.size.w -
this.map.paddingForPopups.left -
this.map.paddingForPopups.right -
wPadding;
        safeContentSize.w = Math.min(safeContentSize.w, maxX);
        safeContentSize.h = Math.min(safeContentSize.h, maxY);
    }
    return safeContentSize;
}, getContentDivPadding: function() {
    var contentDivPadding = this._contentDivPadding;
    if (!contentDivPadding) {
        this.div.style.display = "none";
        document.body.appendChild(this.div);
        contentDivPadding = new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv, "padding-left"), OpenLayers.Element.getStyle(this.contentDiv, "padding-bottom"), OpenLayers.Element.getStyle(this.contentDiv, "padding-right"), OpenLayers.Element.getStyle(this.contentDiv, "padding-top"));
        this._contentDivPadding = contentDivPadding;
        document.body.removeChild(this.div);
        this.div.style.display = "";
    }
    return contentDivPadding;
}, addCloseBox: function(callback) {
    this.closeDiv = OpenLayers.Util.createDiv(this.id + "_close", null, new OpenLayers.Size(17, 17));
    this.closeDiv.className = "olPopupCloseBox";
    var contentDivPadding = this.getContentDivPadding();
    this.closeDiv.style.right = contentDivPadding.right + "px";
    this.closeDiv.style.top = contentDivPadding.top + "px";
    this.groupDiv.appendChild(this.closeDiv);
    var closePopup = callback || function(e) {
        this.hide();
        OpenLayers.Event.stop(e);
    };
    OpenLayers.Event.observe(this.closeDiv, "click", OpenLayers.Function.bindAsEventListener(closePopup, this));
}, panIntoView: function() {
    var mapSize = this.map.getSize();
    var origTL = this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left), parseInt(this.div.style.top)));
    var newTL = origTL.clone();
    if (origTL.x < this.map.paddingForPopups.left) {
        newTL.x = this.map.paddingForPopups.left;
    } else
        if ((origTL.x + this.size.w) > (mapSize.w - this.map.paddingForPopups.right)) {
        newTL.x = mapSize.w - this.map.paddingForPopups.right - this.size.w;
    }
    if (origTL.y < this.map.paddingForPopups.top) {
        newTL.y = this.map.paddingForPopups.top;
    } else
        if ((origTL.y + this.size.h) > (mapSize.h - this.map.paddingForPopups.bottom)) {
        newTL.y = mapSize.h - this.map.paddingForPopups.bottom - this.size.h;
    }
    var dx = origTL.x - newTL.x;
    var dy = origTL.y - newTL.y;
    this.map.pan(dx, dy);
}, registerEvents: function() {
    this.events = new OpenLayers.Events(this, this.div, null, true);
    this.events.on({ "mousedown": this.onmousedown, "mousemove": this.onmousemove, "mouseup": this.onmouseup, "click": this.onclick, "mouseout": this.onmouseout, "dblclick": this.ondblclick, scope: this });
}, onmousedown: function(evt) {
    this.mousedown = true;
    OpenLayers.Event.stop(evt, true);
}, onmousemove: function(evt) {
    if (this.mousedown) {
        OpenLayers.Event.stop(evt, true);
    } 
}, onmouseup: function(evt) {
    if (this.mousedown) {
        this.mousedown = false;
        OpenLayers.Event.stop(evt, true);
    } 
}, onclick: function(evt) {
    OpenLayers.Event.stop(evt, true);
}, onmouseout: function(evt) {
    this.mousedown = false;
}, ondblclick: function(evt) {
    OpenLayers.Event.stop(evt, true);
}, CLASS_NAME: "OpenLayers.Popup"
});
OpenLayers.Popup.WIDTH = 200;
OpenLayers.Popup.HEIGHT = 200;
OpenLayers.Popup.COLOR = "white";
OpenLayers.Popup.OPACITY = 1;
OpenLayers.Popup.BORDER = "0px";
OpenLayers.Protocol = OpenLayers.Class({ format: null, options: null, autoDestroy: true, initialize: function(options) {
    options = options || {};
    OpenLayers.Util.extend(this, options);
    this.options = options;
}, destroy: function() {
    this.options = null;
    this.format = null;
}, read: function() { }, create: function() { }, update: function() { }, "delete": function() { }, commit: function() { }, CLASS_NAME: "OpenLayers.Protocol"
});
OpenLayers.Protocol.Response = OpenLayers.Class({ code: null, requestType: null, last: true, features: null, reqFeatures: null, priv: null, initialize: function(options) {
    OpenLayers.Util.extend(this, options);
}, success: function() {
    return this.code > 0;
}, CLASS_NAME: "OpenLayers.Protocol.Response"
});
OpenLayers.Protocol.Response.SUCCESS = 1;
OpenLayers.Protocol.Response.FAILURE = 0;
OpenLayers.Renderer = OpenLayers.Class({ container: null, extent: null, locked: false, size: null, resolution: null, map: null, initialize: function(containerID, options) {
    this.container = OpenLayers.Util.getElement(containerID);
}, destroy: function() {
    this.container = null;
    this.extent = null;
    this.size = null;
    this.resolution = null;
    this.map = null;
}, supported: function() {
    return false;
}, setExtent: function(extent, resolutionChanged) {
    this.extent = extent.clone();
    if (resolutionChanged) {
        this.resolution = null;
    } 
}, setSize: function(size) {
    this.size = size.clone();
    this.resolution = null;
}, getResolution: function() {
    this.resolution = this.resolution || this.map.getResolution();
    return this.resolution;
}, drawFeature: function(feature, style) {
    if (style == null) {
        style = feature.style;
    }
    if (feature.geometry) {
        var bounds = feature.geometry.getBounds();
        if (bounds) {
            if (!bounds.intersectsBounds(this.extent)) {
                style = { display: "none" };
            }
            return this.drawGeometry(feature.geometry, style, feature.id);
        } 
    } 
}, drawGeometry: function(geometry, style, featureId) { }, clear: function() { }, getFeatureIdFromEvent: function(evt) { }, eraseFeatures: function(features) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    for (var i = 0, len = features.length;
i < len;
++i) {
        this.eraseGeometry(features[i].geometry);
    } 
}, eraseGeometry: function(geometry) { }, CLASS_NAME: "OpenLayers.Renderer"
});
OpenLayers.Request = { DEFAULT_CONFIG: { method: "GET", url: window.location.href, async: true, user: undefined, password: undefined, params: null, proxy: OpenLayers.ProxyHost, headers: {}, data: null, callback: function() { }, success: null, failure: null, scope: null }, issue: function(config) {
    var defaultConfig = OpenLayers.Util.extend(this.DEFAULT_CONFIG, { proxy: OpenLayers.ProxyHost });
    config = OpenLayers.Util.applyDefaults(config, defaultConfig);
    var request = new OpenLayers.Request.XMLHttpRequest();
    var url = config.url;
    if (config.params) {
        var paramString = OpenLayers.Util.getParameterString(config.params);
        if (paramString.length > 0) {
            var separator = (url.indexOf('?') > -1) ? '&' : '?';
            url += separator + paramString;
        } 
    }
    if (config.proxy && (url.indexOf("http") == 0)) {
        url = config.proxy + encodeURIComponent(url);
    }
    request.open(config.method, url, config.async, config.user, config.password);
    for (var header in config.headers) {
        request.setRequestHeader(header, config.headers[header]);
    }
    var complete = (config.scope) ? OpenLayers.Function.bind(config.callback, config.scope) : config.callback;
    var success;
    if (config.success) {
        success = (config.scope) ? OpenLayers.Function.bind(config.success, config.scope) : config.success;
    }
    var failure;
    if (config.failure) {
        failure = (config.scope) ? OpenLayers.Function.bind(config.failure, config.scope) : config.failure;
    }
    request.onreadystatechange = function() {
        if (request.readyState == OpenLayers.Request.XMLHttpRequest.DONE) {
            complete(request);
            if (success && (!request.status || (request.status >= 200 && request.status < 300))) {
                success(request);
            }
            if (failure && (request.status && (request.status < 200 || request.status >= 300))) {
                failure(request);
            } 
        } 
    };
    request.send(config.data);
    return request;
}, GET: function(config) {
    config = OpenLayers.Util.extend(config, { method: "GET" });
    return OpenLayers.Request.issue(config);
}, POST: function(config) {
    config = OpenLayers.Util.extend(config, { method: "POST" });
    config.headers = config.headers ? config.headers : {};
    if (!("CONTENT-TYPE" in OpenLayers.Util.upperCaseObject(config.headers))) {
        config.headers["Content-Type"] = "application/xml";
    }
    return OpenLayers.Request.issue(config);
}, PUT: function(config) {
    config = OpenLayers.Util.extend(config, { method: "PUT" });
    config.headers = config.headers ? config.headers : {};
    if (!("CONTENT-TYPE" in OpenLayers.Util.upperCaseObject(config.headers))) {
        config.headers["Content-Type"] = "application/xml";
    }
    return OpenLayers.Request.issue(config);
}, DELETE: function(config) {
    config = OpenLayers.Util.extend(config, { method: "DELETE" });
    return OpenLayers.Request.issue(config);
}, HEAD: function(config) {
    config = OpenLayers.Util.extend(config, { method: "HEAD" });
    return OpenLayers.Request.issue(config);
}, OPTIONS: function(config) {
    config = OpenLayers.Util.extend(config, { method: "OPTIONS" });
    return OpenLayers.Request.issue(config);
} 
};
OpenLayers.Strategy = OpenLayers.Class({ layer: null, options: null, active: null, autoActivate: true, autoDestroy: true, initialize: function(options) {
    OpenLayers.Util.extend(this, options);
    this.options = options;
    this.active = false;
}, destroy: function() {
    this.deactivate();
    this.layer = null;
    this.options = null;
}, setLayer: function(layer) {
    this.layer = layer;
}, activate: function() {
    if (!this.active) {
        this.active = true;
        return true;
    }
    return false;
}, deactivate: function() {
    if (this.active) {
        this.active = false;
        return true;
    }
    return false;
}, CLASS_NAME: "OpenLayers.Strategy"
});
OpenLayers.Tween = OpenLayers.Class({ INTERVAL: 10, easing: null, begin: null, finish: null, duration: null, callbacks: null, time: null, interval: null, playing: false, initialize: function(easing) {
    this.easing = (easing) ? easing : OpenLayers.Easing.Expo.easeOut;
}, start: function(begin, finish, duration, options) {
    this.playing = true;
    this.begin = begin;
    this.finish = finish;
    this.duration = duration;
    this.callbacks = options.callbacks;
    this.time = 0;
    if (this.interval) {
        window.clearInterval(this.interval);
        this.interval = null;
    }
    if (this.callbacks && this.callbacks.start) {
        this.callbacks.start.call(this, this.begin);
    }
    this.interval = window.setInterval(OpenLayers.Function.bind(this.play, this), this.INTERVAL);
}, stop: function() {
    if (!this.playing) {
        return;
    }
    if (this.callbacks && this.callbacks.done) {
        this.callbacks.done.call(this, this.finish);
    }
    window.clearInterval(this.interval);
    this.interval = null;
    this.playing = false;
}, play: function() {
    var value = {};
    for (var i in this.begin) {
        var b = this.begin[i];
        var f = this.finish[i];
        if (b == null || f == null || isNaN(b) || isNaN(f)) {
            OpenLayers.Console.error('invalid value for Tween');
        }
        var c = f - b;
        value[i] = this.easing.apply(this, [this.time, b, c, this.duration]);
    }
    this.time++;
    if (this.callbacks && this.callbacks.eachStep) {
        this.callbacks.eachStep.call(this, value);
    }
    if (this.time > this.duration) {
        if (this.callbacks && this.callbacks.done) {
            this.callbacks.done.call(this, this.finish);
            this.playing = false;
        }
        window.clearInterval(this.interval);
        this.interval = null;
    } 
}, CLASS_NAME: "OpenLayers.Tween"
});
OpenLayers.Easing = { CLASS_NAME: "OpenLayers.Easing" };
OpenLayers.Easing.Linear = { easeIn: function(t, b, c, d) {
    return c * t / d + b;
}, easeOut: function(t, b, c, d) {
    return c * t / d + b;
}, easeInOut: function(t, b, c, d) {
    return c * t / d + b;
}, CLASS_NAME: "OpenLayers.Easing.Linear"
};
OpenLayers.Easing.Expo = { easeIn: function(t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}, easeOut: function(t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}, easeInOut: function(t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}, CLASS_NAME: "OpenLayers.Easing.Expo"
};
OpenLayers.Easing.Quad = { easeIn: function(t, b, c, d) {
    return c * (t /= d) * t + b;
}, easeOut: function(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}, easeInOut: function(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}, CLASS_NAME: "OpenLayers.Easing.Quad"
};
OpenLayers.Rico.Color = OpenLayers.Class({ initialize: function(red, green, blue) {
    this.rgb = { r: red, g: green, b: blue };
}, setRed: function(r) {
    this.rgb.r = r;
}, setGreen: function(g) {
    this.rgb.g = g;
}, setBlue: function(b) {
    this.rgb.b = b;
}, setHue: function(h) {
    var hsb = this.asHSB();
    hsb.h = h;
    this.rgb = OpenLayers.Rico.Color.HSBtoRGB(hsb.h, hsb.s, hsb.b);
}, setSaturation: function(s) {
    var hsb = this.asHSB();
    hsb.s = s;
    this.rgb = OpenLayers.Rico.Color.HSBtoRGB(hsb.h, hsb.s, hsb.b);
}, setBrightness: function(b) {
    var hsb = this.asHSB();
    hsb.b = b;
    this.rgb = OpenLayers.Rico.Color.HSBtoRGB(hsb.h, hsb.s, hsb.b);
}, darken: function(percent) {
    var hsb = this.asHSB();
    this.rgb = OpenLayers.Rico.Color.HSBtoRGB(hsb.h, hsb.s, Math.max(hsb.b - percent, 0));
}, brighten: function(percent) {
    var hsb = this.asHSB();
    this.rgb = OpenLayers.Rico.Color.HSBtoRGB(hsb.h, hsb.s, Math.min(hsb.b + percent, 1));
}, blend: function(other) {
    this.rgb.r = Math.floor((this.rgb.r + other.rgb.r) / 2);
    this.rgb.g = Math.floor((this.rgb.g + other.rgb.g) / 2);
    this.rgb.b = Math.floor((this.rgb.b + other.rgb.b) / 2);
}, isBright: function() {
    var hsb = this.asHSB();
    return this.asHSB().b > 0.5;
}, isDark: function() {
    return !this.isBright();
}, asRGB: function() {
    return "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
}, asHex: function() {
    return "#" + this.rgb.r.toColorPart() + this.rgb.g.toColorPart() + this.rgb.b.toColorPart();
}, asHSB: function() {
    return OpenLayers.Rico.Color.RGBtoHSB(this.rgb.r, this.rgb.g, this.rgb.b);
}, toString: function() {
    return this.asHex();
} 
});
OpenLayers.Rico.Color.createFromHex = function(hexCode) {
    if (hexCode.length == 4) {
        var shortHexCode = hexCode;
        var hexCode = '#';
        for (var i = 1;
i < 4;
i++) {
            hexCode += (shortHexCode.charAt(i) +
shortHexCode.charAt(i));
        } 
    }
    if (hexCode.indexOf('#') == 0) {
        hexCode = hexCode.substring(1);
    }
    var red = hexCode.substring(0, 2);
    var green = hexCode.substring(2, 4);
    var blue = hexCode.substring(4, 6);
    return new OpenLayers.Rico.Color(parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16));
};
OpenLayers.Rico.Color.createColorFromBackground = function(elem) {
    var actualColor = RicoUtil.getElementsComputedStyle(OpenLayers.Util.getElement(elem), "backgroundColor", "background-color");
    if (actualColor == "transparent" && elem.parentNode) {
        return OpenLayers.Rico.Color.createColorFromBackground(elem.parentNode);
    }
    if (actualColor == null) {
        return new OpenLayers.Rico.Color(255, 255, 255);
    }
    if (actualColor.indexOf("rgb(") == 0) {
        var colors = actualColor.substring(4, actualColor.length - 1);
        var colorArray = colors.split(",");
        return new OpenLayers.Rico.Color(parseInt(colorArray[0]), parseInt(colorArray[1]), parseInt(colorArray[2]));
    }
    else if (actualColor.indexOf("#") == 0) {
        return OpenLayers.Rico.Color.createFromHex(actualColor);
    }
    else {
        return new OpenLayers.Rico.Color(255, 255, 255);
    } 
};
OpenLayers.Rico.Color.HSBtoRGB = function(hue, saturation, brightness) {
    var red = 0;
    var green = 0;
    var blue = 0;
    if (saturation == 0) {
        red = parseInt(brightness * 255.0 + 0.5);
        green = red;
        blue = red;
    }
    else {
        var h = (hue - Math.floor(hue)) * 6.0;
        var f = h - Math.floor(h);
        var p = brightness * (1.0 - saturation);
        var q = brightness * (1.0 - saturation * f);
        var t = brightness * (1.0 - (saturation * (1.0 - f)));
        switch (parseInt(h)) {
            case 0: red = (brightness * 255.0 + 0.5);
                green = (t * 255.0 + 0.5);
                blue = (p * 255.0 + 0.5);
                break;
            case 1: red = (q * 255.0 + 0.5);
                green = (brightness * 255.0 + 0.5);
                blue = (p * 255.0 + 0.5);
                break;
            case 2: red = (p * 255.0 + 0.5);
                green = (brightness * 255.0 + 0.5);
                blue = (t * 255.0 + 0.5);
                break;
            case 3: red = (p * 255.0 + 0.5);
                green = (q * 255.0 + 0.5);
                blue = (brightness * 255.0 + 0.5);
                break;
            case 4: red = (t * 255.0 + 0.5);
                green = (p * 255.0 + 0.5);
                blue = (brightness * 255.0 + 0.5);
                break;
            case 5: red = (brightness * 255.0 + 0.5);
                green = (p * 255.0 + 0.5);
                blue = (q * 255.0 + 0.5);
                break;
        } 
    }
    return { r: parseInt(red), g: parseInt(green), b: parseInt(blue) };
};
OpenLayers.Rico.Color.RGBtoHSB = function(r, g, b) {
    var hue;
    var saturation;
    var brightness;
    var cmax = (r > g) ? r : g;
    if (b > cmax) {
        cmax = b;
    }
    var cmin = (r < g) ? r : g;
    if (b < cmin) {
        cmin = b;
    }
    brightness = cmax / 255.0;
    if (cmax != 0) {
        saturation = (cmax - cmin) / cmax;
    } else {
        saturation = 0;
    }
    if (saturation == 0) {
        hue = 0;
    } else {
        var redc = (cmax - r) / (cmax - cmin);
        var greenc = (cmax - g) / (cmax - cmin);
        var bluec = (cmax - b) / (cmax - cmin);
        if (r == cmax) {
            hue = bluec - greenc;
        } else if (g == cmax) {
            hue = 2.0 + redc - bluec;
        } else {
            hue = 4.0 + greenc - redc;
        }
        hue = hue / 6.0;
        if (hue < 0) {
            hue = hue + 1.0;
        } 
    }
    return { h: hue, s: saturation, b: brightness };
};
OpenLayers.Control.ArgParser = OpenLayers.Class(OpenLayers.Control, { center: null, zoom: null, layers: null, displayProjection: null, initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, setMap: function(map) {
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
    for (var i = 0, len = this.map.controls.length;
i < len;
i++) {
        var control = this.map.controls[i];
        if ((control != this) && (control.CLASS_NAME == "OpenLayers.Control.ArgParser")) {
            if (control.displayProjection != this.displayProjection) {
                this.displayProjection = control.displayProjection;
            }
            break;
        } 
    }
    if (i == this.map.controls.length) {
        var args = OpenLayers.Util.getParameters();
        if (args.layers) {
            this.layers = args.layers;
            this.map.events.register('addlayer', this, this.configureLayers);
            this.configureLayers();
        }
        if (args.lat && args.lon) {
            this.center = new OpenLayers.LonLat(parseFloat(args.lon), parseFloat(args.lat));
            if (args.zoom) {
                this.zoom = parseInt(args.zoom);
            }
            this.map.events.register('changebaselayer', this, this.setCenter);
            this.setCenter();
        } 
    } 
}, setCenter: function() {
    if (this.map.baseLayer) {
        this.map.events.unregister('changebaselayer', this, this.setCenter);
        if (this.displayProjection) {
            this.center.transform(this.displayProjection, this.map.getProjectionObject());
        }
        this.map.setCenter(this.center, this.zoom);
    } 
}, configureLayers: function() {
    if (this.layers.length == this.map.layers.length) {
        this.map.events.unregister('addlayer', this, this.configureLayers);
        for (var i = 0, len = this.layers.length;
i < len;
i++) {
            var layer = this.map.layers[i];
            var c = this.layers.charAt(i);
            if (c == "B") {
                this.map.setBaseLayer(layer);
            } else if ((c == "T") || (c == "F")) {
                layer.setVisibility(c == "T");
            } 
        } 
    } 
}, CLASS_NAME: "OpenLayers.Control.ArgParser"
});
OpenLayers.Control.Attribution = OpenLayers.Class(OpenLayers.Control, { separator: ", ", initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    this.map.events.un({ "removelayer": this.updateAttribution, "addlayer": this.updateAttribution, "changelayer": this.updateAttribution, "changebaselayer": this.updateAttribution, scope: this });
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    this.map.events.on({ 'changebaselayer': this.updateAttribution, 'changelayer': this.updateAttribution, 'addlayer': this.updateAttribution, 'removelayer': this.updateAttribution, scope: this });
    this.updateAttribution();
    return this.div;
}, updateAttribution: function() {
    var attributions = [];
    if (this.map && this.map.layers) {
        for (var i = 0, len = this.map.layers.length;
i < len;
i++) {
            var layer = this.map.layers[i];
            if (layer.attribution && layer.getVisibility()) {
                attributions.push(layer.attribution);
            } 
        }
        this.div.innerHTML = attributions.join(this.separator);
    } 
}, CLASS_NAME: "OpenLayers.Control.Attribution"
});
OpenLayers.Control.Button = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_BUTTON, trigger: function() { }, CLASS_NAME: "OpenLayers.Control.Button" });
OpenLayers.Control.LayerSwitcher = OpenLayers.Class(OpenLayers.Control, { activeColor: "darkblue", layerStates: null, layersDiv: null, baseLayersDiv: null, baseLayers: null, dataLbl: null, dataLayersDiv: null, dataLayers: null, minimizeDiv: null, maximizeDiv: null, ascending: true, initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
    this.layerStates = [];
}, destroy: function() {
    OpenLayers.Event.stopObservingElement(this.div);
    OpenLayers.Event.stopObservingElement(this.minimizeDiv);
    OpenLayers.Event.stopObservingElement(this.maximizeDiv);
    this.clearLayersArray("base");
    this.clearLayersArray("data");
    this.map.events.un({ "addlayer": this.redraw, "changelayer": this.redraw, "removelayer": this.redraw, "changebaselayer": this.redraw, scope: this });
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, setMap: function(map) {
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
    this.map.events.on({ "addlayer": this.redraw, "changelayer": this.redraw, "removelayer": this.redraw, "changebaselayer": this.redraw, scope: this });
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this);
    this.loadContents();
    if (!this.outsideViewport) {
        this.minimizeControl();
    }
    this.redraw();
    return this.div;
}, clearLayersArray: function(layersType) {
    var layers = this[layersType + "Layers"];
    if (layers) {
        for (var i = 0, len = layers.length;
i < len;
i++) {
            var layer = layers[i];
            OpenLayers.Event.stopObservingElement(layer.inputElem);
            OpenLayers.Event.stopObservingElement(layer.labelSpan);
        } 
    }
    this[layersType + "LayersDiv"].innerHTML = "";
    this[layersType + "Layers"] = [];
}, checkRedraw: function() {
    var redraw = false;
    if (!this.layerStates.length || (this.map.layers.length != this.layerStates.length)) {
        redraw = true;
    } else {
        for (var i = 0, len = this.layerStates.length;
i < len;
i++) {
            var layerState = this.layerStates[i];
            var layer = this.map.layers[i];
            if ((layerState.name != layer.name) || (layerState.inRange != layer.inRange) || (layerState.id != layer.id) || (layerState.visibility != layer.visibility)) {
                redraw = true;
                break;
            } 
        } 
    }
    return redraw;
}, redraw: function() {
    if (!this.checkRedraw()) {
        return this.div;
    }
    this.clearLayersArray("base");
    this.clearLayersArray("data");
    var containsOverlays = false;
    var containsBaseLayers = false;
    var len = this.map.layers.length;
    this.layerStates = new Array(len);
    for (var i = 0;
i < len;
i++) {
        var layer = this.map.layers[i];
        this.layerStates[i] = { 'name': layer.name, 'visibility': layer.visibility, 'inRange': layer.inRange, 'id': layer.id };
    }
    var layers = this.map.layers.slice();
    if (!this.ascending) {
        layers.reverse();
    }
    for (var i = 0, len = layers.length;
i < len;
i++) {
        var layer = layers[i];
        var baseLayer = layer.isBaseLayer;
        if (layer.displayInLayerSwitcher) {
            if (baseLayer) {
                containsBaseLayers = true;
            } else {
                containsOverlays = true;
            }
            var checked = (baseLayer) ? (layer == this.map.baseLayer) : layer.getVisibility();
            var inputElem = document.createElement("input");
            inputElem.id = this.id + "_input_" + layer.name;
            inputElem.name = (baseLayer) ? "baseLayers" : layer.name;
            inputElem.type = (baseLayer) ? "radio" : "checkbox";
            inputElem.value = layer.name;
            inputElem.checked = checked;
            inputElem.defaultChecked = checked;
            if (!baseLayer && !layer.inRange) {
                inputElem.disabled = true;
            }
            var context = { 'inputElem': inputElem, 'layer': layer, 'layerSwitcher': this };
            OpenLayers.Event.observe(inputElem, "mouseup", OpenLayers.Function.bindAsEventListener(this.onInputClick, context));
            var labelSpan = document.createElement("span");
            if (!baseLayer && !layer.inRange) {
                labelSpan.style.color = "gray";
            }
            labelSpan.innerHTML = layer.name;
            labelSpan.style.verticalAlign = (baseLayer) ? "bottom" : "baseline";
            OpenLayers.Event.observe(labelSpan, "click", OpenLayers.Function.bindAsEventListener(this.onInputClick, context));
            var br = document.createElement("br");
            var groupArray = (baseLayer) ? this.baseLayers : this.dataLayers;
            groupArray.push({ 'layer': layer, 'inputElem': inputElem, 'labelSpan': labelSpan });
            var groupDiv = (baseLayer) ? this.baseLayersDiv : this.dataLayersDiv;
            groupDiv.appendChild(inputElem);
            groupDiv.appendChild(labelSpan);
            groupDiv.appendChild(br);
        } 
    }
    this.dataLbl.style.display = (containsOverlays) ? "" : "none";
    this.baseLbl.style.display = (containsBaseLayers) ? "" : "none";
    return this.div;
}, onInputClick: function(e) {
    if (!this.inputElem.disabled) {
        if (this.inputElem.type == "radio") {
            this.inputElem.checked = true;
            this.layer.map.setBaseLayer(this.layer);
        } else {
            this.inputElem.checked = !this.inputElem.checked;
            this.layerSwitcher.updateMap();
        } 
    }
    OpenLayers.Event.stop(e);
}, onLayerClick: function(e) {
    this.updateMap();
}, updateMap: function() {
    for (var i = 0, len = this.baseLayers.length;
i < len;
i++) {
        var layerEntry = this.baseLayers[i];
        if (layerEntry.inputElem.checked) {
            this.map.setBaseLayer(layerEntry.layer, false);
        } 
    }
    for (var i = 0, len = this.dataLayers.length;
i < len;
i++) {
        var layerEntry = this.dataLayers[i];
        layerEntry.layer.setVisibility(layerEntry.inputElem.checked);
    } 
}, maximizeControl: function(e) {
    this.div.style.width = "20em";
    this.div.style.height = "";
    this.showControls(false);
    if (e != null) {
        OpenLayers.Event.stop(e);
    } 
}, minimizeControl: function(e) {
    this.div.style.width = "0px";
    this.div.style.height = "0px";
    this.showControls(true);
    if (e != null) {
        OpenLayers.Event.stop(e);
    } 
}, showControls: function(minimize) {
    this.maximizeDiv.style.display = minimize ? "" : "none";
    this.minimizeDiv.style.display = minimize ? "none" : "";
    this.layersDiv.style.display = minimize ? "none" : "";
}, loadContents: function() {
    this.div.style.position = "absolute";
    this.div.style.top = "25px";
    this.div.style.right = "0px";
    this.div.style.left = "";
    this.div.style.fontFamily = "sans-serif";
    this.div.style.fontWeight = "bold";
    this.div.style.marginTop = "3px";
    this.div.style.marginLeft = "3px";
    this.div.style.marginBottom = "3px";
    this.div.style.fontSize = "smaller";
    this.div.style.color = "white";
    this.div.style.backgroundColor = "transparent";
    OpenLayers.Event.observe(this.div, "mouseup", OpenLayers.Function.bindAsEventListener(this.mouseUp, this));
    OpenLayers.Event.observe(this.div, "click", this.ignoreEvent);
    OpenLayers.Event.observe(this.div, "mousedown", OpenLayers.Function.bindAsEventListener(this.mouseDown, this));
    OpenLayers.Event.observe(this.div, "dblclick", this.ignoreEvent);
    this.layersDiv = document.createElement("div");
    this.layersDiv.id = this.id + "_layersDiv";
    this.layersDiv.style.paddingTop = "5px";
    this.layersDiv.style.paddingLeft = "10px";
    this.layersDiv.style.paddingBottom = "5px";
    this.layersDiv.style.paddingRight = "75px";
    this.layersDiv.style.backgroundColor = this.activeColor;
    this.layersDiv.style.width = "100%";
    this.layersDiv.style.height = "100%";
    this.baseLbl = document.createElement("div");
    this.baseLbl.innerHTML = OpenLayers.i18n("baseLayer");
    this.baseLbl.style.marginTop = "3px";
    this.baseLbl.style.marginLeft = "3px";
    this.baseLbl.style.marginBottom = "3px";
    this.baseLayersDiv = document.createElement("div");
    this.baseLayersDiv.style.paddingLeft = "10px";
    this.dataLbl = document.createElement("div");
    this.dataLbl.innerHTML = OpenLayers.i18n("overlays");
    this.dataLbl.style.marginTop = "3px";
    this.dataLbl.style.marginLeft = "3px";
    this.dataLbl.style.marginBottom = "3px";
    this.dataLayersDiv = document.createElement("div");
    this.dataLayersDiv.style.paddingLeft = "10px";
    if (this.ascending) {
        this.layersDiv.appendChild(this.baseLbl);
        this.layersDiv.appendChild(this.baseLayersDiv);
        this.layersDiv.appendChild(this.dataLbl);
        this.layersDiv.appendChild(this.dataLayersDiv);
    } else {
        this.layersDiv.appendChild(this.dataLbl);
        this.layersDiv.appendChild(this.dataLayersDiv);
        this.layersDiv.appendChild(this.baseLbl);
        this.layersDiv.appendChild(this.baseLayersDiv);
    }
    this.div.appendChild(this.layersDiv);
    OpenLayers.Rico.Corner.round(this.div, { corners: "tl bl", bgColor: "transparent", color: this.activeColor, blend: false });
    OpenLayers.Rico.Corner.changeOpacity(this.layersDiv, 0.75);
    var imgLocation = OpenLayers.Util.getImagesLocation();
    var sz = new OpenLayers.Size(18, 18);
    var img = imgLocation + 'layer-switcher-maximize.png';
    this.maximizeDiv = OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv", null, sz, img, "absolute");
    this.maximizeDiv.style.top = "5px";
    this.maximizeDiv.style.right = "0px";
    this.maximizeDiv.style.left = "";
    this.maximizeDiv.style.display = "none";
    OpenLayers.Event.observe(this.maximizeDiv, "click", OpenLayers.Function.bindAsEventListener(this.maximizeControl, this));
    this.div.appendChild(this.maximizeDiv);
    var img = imgLocation + 'layer-switcher-minimize.png';
    var sz = new OpenLayers.Size(18, 18);
    this.minimizeDiv = OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv", null, sz, img, "absolute");
    this.minimizeDiv.style.top = "5px";
    this.minimizeDiv.style.right = "0px";
    this.minimizeDiv.style.left = "";
    this.minimizeDiv.style.display = "none";
    OpenLayers.Event.observe(this.minimizeDiv, "click", OpenLayers.Function.bindAsEventListener(this.minimizeControl, this));
    this.div.appendChild(this.minimizeDiv);
}, ignoreEvent: function(evt) {
    OpenLayers.Event.stop(evt);
}, mouseDown: function(evt) {
    this.isMouseDown = true;
    this.ignoreEvent(evt);
}, mouseUp: function(evt) {
    if (this.isMouseDown) {
        this.isMouseDown = false;
        this.ignoreEvent(evt);
    } 
}, CLASS_NAME: "OpenLayers.Control.LayerSwitcher"
});
OpenLayers.Control.MouseDefaults = OpenLayers.Class(OpenLayers.Control, { performedDrag: false, wheelObserver: null, initialize: function() {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    if (this.handler) {
        this.handler.destroy();
    }
    this.handler = null;
    this.map.events.un({ "click": this.defaultClick, "dblclick": this.defaultDblClick, "mousedown": this.defaultMouseDown, "mouseup": this.defaultMouseUp, "mousemove": this.defaultMouseMove, "mouseout": this.defaultMouseOut, scope: this });
    OpenLayers.Event.stopObserving(window, "DOMMouseScroll", this.wheelObserver);
    OpenLayers.Event.stopObserving(window, "mousewheel", this.wheelObserver);
    OpenLayers.Event.stopObserving(document, "mousewheel", this.wheelObserver);
    this.wheelObserver = null;
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, draw: function() {
    this.map.events.on({ "click": this.defaultClick, "dblclick": this.defaultDblClick, "mousedown": this.defaultMouseDown, "mouseup": this.defaultMouseUp, "mousemove": this.defaultMouseMove, "mouseout": this.defaultMouseOut, scope: this });
    this.registerWheelEvents();
}, registerWheelEvents: function() {
    this.wheelObserver = OpenLayers.Function.bindAsEventListener(this.onWheelEvent, this);
    OpenLayers.Event.observe(window, "DOMMouseScroll", this.wheelObserver);
    OpenLayers.Event.observe(window, "mousewheel", this.wheelObserver);
    OpenLayers.Event.observe(document, "mousewheel", this.wheelObserver);
}, defaultClick: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    var notAfterDrag = !this.performedDrag;
    this.performedDrag = false;
    return notAfterDrag;
}, defaultDblClick: function(evt) {
    var newCenter = this.map.getLonLatFromViewPortPx(evt.xy);
    this.map.setCenter(newCenter, this.map.zoom + 1);
    OpenLayers.Event.stop(evt);
    return false;
}, defaultMouseDown: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    this.mouseDragStart = evt.xy.clone();
    this.performedDrag = false;
    if (evt.shiftKey) {
        this.map.div.style.cursor = "crosshair";
        this.zoomBox = OpenLayers.Util.createDiv('zoomBox', this.mouseDragStart, null, null, "absolute", "2px solid red");
        this.zoomBox.style.backgroundColor = "white";
        this.zoomBox.style.filter = "alpha(opacity=50)";
        this.zoomBox.style.opacity = "0.50";
        this.zoomBox.style.fontSize = "1px";
        this.zoomBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
        this.map.viewPortDiv.appendChild(this.zoomBox);
    }
    document.onselectstart = function() {
        return false;
    };
    OpenLayers.Event.stop(evt);
}, defaultMouseMove: function(evt) {
    this.mousePosition = evt.xy.clone();
    if (this.mouseDragStart != null) {
        if (this.zoomBox) {
            var deltaX = Math.abs(this.mouseDragStart.x - evt.xy.x);
            var deltaY = Math.abs(this.mouseDragStart.y - evt.xy.y);
            this.zoomBox.style.width = Math.max(1, deltaX) + "px";
            this.zoomBox.style.height = Math.max(1, deltaY) + "px";
            if (evt.xy.x < this.mouseDragStart.x) {
                this.zoomBox.style.left = evt.xy.x + "px";
            }
            if (evt.xy.y < this.mouseDragStart.y) {
                this.zoomBox.style.top = evt.xy.y + "px";
            } 
        } else {
            var deltaX = this.mouseDragStart.x - evt.xy.x;
            var deltaY = this.mouseDragStart.y - evt.xy.y;
            var size = this.map.getSize();
            var newXY = new OpenLayers.Pixel(size.w / 2 + deltaX, size.h / 2 + deltaY);
            var newCenter = this.map.getLonLatFromViewPortPx(newXY);
            this.map.setCenter(newCenter, null, true);
            this.mouseDragStart = evt.xy.clone();
            this.map.div.style.cursor = "move";
        }
        this.performedDrag = true;
    } 
}, defaultMouseUp: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    if (this.zoomBox) {
        this.zoomBoxEnd(evt);
    } else {
        if (this.performedDrag) {
            this.map.setCenter(this.map.center);
        } 
    }
    document.onselectstart = null;
    this.mouseDragStart = null;
    this.map.div.style.cursor = "";
}, defaultMouseOut: function(evt) {
    if (this.mouseDragStart != null && OpenLayers.Util.mouseLeft(evt, this.map.div)) {
        if (this.zoomBox) {
            this.removeZoomBox();
        }
        this.mouseDragStart = null;
    } 
}, defaultWheelUp: function(evt) {
    if (this.map.getZoom() <= this.map.getNumZoomLevels()) {
        this.map.setCenter(this.map.getLonLatFromPixel(evt.xy), this.map.getZoom() + 1);
    } 
}, defaultWheelDown: function(evt) {
    if (this.map.getZoom() > 0) {
        this.map.setCenter(this.map.getLonLatFromPixel(evt.xy), this.map.getZoom() - 1);
    } 
}, zoomBoxEnd: function(evt) {
    if (this.mouseDragStart != null) {
        if (Math.abs(this.mouseDragStart.x - evt.xy.x) > 5 || Math.abs(this.mouseDragStart.y - evt.xy.y) > 5) {
            var start = this.map.getLonLatFromViewPortPx(this.mouseDragStart);
            var end = this.map.getLonLatFromViewPortPx(evt.xy);
            var top = Math.max(start.lat, end.lat);
            var bottom = Math.min(start.lat, end.lat);
            var left = Math.min(start.lon, end.lon);
            var right = Math.max(start.lon, end.lon);
            var bounds = new OpenLayers.Bounds(left, bottom, right, top);
            this.map.zoomToExtent(bounds);
        } else {
            var end = this.map.getLonLatFromViewPortPx(evt.xy);
            this.map.setCenter(new OpenLayers.LonLat((end.lon), (end.lat)), this.map.getZoom() + 1);
        }
        this.removeZoomBox();
    } 
}, removeZoomBox: function() {
    this.map.viewPortDiv.removeChild(this.zoomBox);
    this.zoomBox = null;
}, onWheelEvent: function(e) {
    var inMap = false;
    var elem = OpenLayers.Event.element(e);
    while (elem != null) {
        if (this.map && elem == this.map.div) {
            inMap = true;
            break;
        }
        elem = elem.parentNode;
    }
    if (inMap) {
        var delta = 0;
        if (!e) {
            e = window.event;
        }
        if (e.wheelDelta) {
            delta = e.wheelDelta / 120;
            if (window.opera && window.opera.version() < 9.2) {
                delta = -delta;
            } 
        } else if (e.detail) {
            delta = -e.detail / 3;
        }
        if (delta) {
            e.xy = this.mousePosition;
            if (delta < 0) {
                this.defaultWheelDown(e);
            } else {
                this.defaultWheelUp(e);
            } 
        }
        OpenLayers.Event.stop(e);
    } 
}, CLASS_NAME: "OpenLayers.Control.MouseDefaults"
});
OpenLayers.Control.MousePosition = OpenLayers.Class(OpenLayers.Control, { element: null, prefix: '', separator: ', ', suffix: '', numDigits: 5, granularity: 10, lastXy: null, displayProjection: null, initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    if (this.map) {
        this.map.events.unregister('mousemove', this, this.redraw);
    }
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    if (!this.element) {
        this.div.left = "";
        this.div.top = "";
        this.element = this.div;
    }
    this.redraw();
    return this.div;
}, redraw: function(evt) {
    var lonLat;
    if (evt == null) {
        lonLat = new OpenLayers.LonLat(0, 0);
    } else {
        if (this.lastXy == null || Math.abs(evt.xy.x - this.lastXy.x) > this.granularity || Math.abs(evt.xy.y - this.lastXy.y) > this.granularity) {
            this.lastXy = evt.xy;
            return;
        }
        lonLat = this.map.getLonLatFromPixel(evt.xy);
        if (!lonLat) {
            return;
        }
        if (this.displayProjection) {
            lonLat.transform(this.map.getProjectionObject(), this.displayProjection);
        }
        this.lastXy = evt.xy;
    }
    var newHtml = this.formatOutput(lonLat);
    if (newHtml != this.element.innerHTML) {
        this.element.innerHTML = newHtml;
    } 
}, formatOutput: function(lonLat) {
    var digits = parseInt(this.numDigits);
    var newHtml = this.prefix +
lonLat.lon.toFixed(digits) +
this.separator +
lonLat.lat.toFixed(digits) +
this.suffix;
    return newHtml;
}, setMap: function() {
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
    this.map.events.register('mousemove', this, this.redraw);
}, CLASS_NAME: "OpenLayers.Control.MousePosition"
});
OpenLayers.Control.NavigationHistory = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_TOGGLE, previous: null, previousOptions: null, next: null, nextOptions: null, limit: 50, activateOnDraw: true, clearOnDeactivate: false, registry: null, nextStack: null, previousStack: null, listeners: null, restoring: false, initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.registry = OpenLayers.Util.extend({ "moveend": function() {
        return { center: this.map.getCenter(), resolution: this.map.getResolution() };
    } 
    }, this.registry);
    this.clear();
    var previousOptions = { trigger: OpenLayers.Function.bind(this.previousTrigger, this), displayClass: this.displayClass + " " + this.displayClass + "Previous" };
    OpenLayers.Util.extend(previousOptions, this.previousOptions);
    this.previous = new OpenLayers.Control.Button(previousOptions);
    var nextOptions = { trigger: OpenLayers.Function.bind(this.nextTrigger, this), displayClass: this.displayClass + " " + this.displayClass + "Next" };
    OpenLayers.Util.extend(nextOptions, this.nextOptions);
    this.next = new OpenLayers.Control.Button(nextOptions);
}, onPreviousChange: function(state, length) {
    if (state && !this.previous.active) {
        this.previous.activate();
    } else if (!state && this.previous.active) {
        this.previous.deactivate();
    } 
}, onNextChange: function(state, length) {
    if (state && !this.next.active) {
        this.next.activate();
    } else if (!state && this.next.active) {
        this.next.deactivate();
    } 
}, destroy: function() {
    OpenLayers.Control.prototype.destroy.apply(this);
    this.previous.destroy();
    this.next.destroy();
    this.deactivate();
    for (var prop in this) {
        this[prop] = null;
    } 
}, setMap: function(map) {
    this.map = map;
    this.next.setMap(map);
    this.previous.setMap(map);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    this.next.draw();
    this.previous.draw();
    if (this.activateOnDraw) {
        this.activate();
    } 
}, previousTrigger: function() {
    var current = this.previousStack.shift();
    var state = this.previousStack.shift();
    if (state != undefined) {
        this.nextStack.unshift(current);
        this.previousStack.unshift(state);
        this.restoring = true;
        this.restore(state);
        this.restoring = false;
        this.onNextChange(this.nextStack[0], this.nextStack.length);
        this.onPreviousChange(this.previousStack[1], this.previousStack.length - 1);
    } else {
        this.previousStack.unshift(current);
    }
    return state;
}, nextTrigger: function() {
    var state = this.nextStack.shift();
    if (state != undefined) {
        this.previousStack.unshift(state);
        this.restoring = true;
        this.restore(state);
        this.restoring = false;
        this.onNextChange(this.nextStack[0], this.nextStack.length);
        this.onPreviousChange(this.previousStack[1], this.previousStack.length - 1);
    }
    return state;
}, clear: function() {
    this.previousStack = [];
    this.nextStack = [];
}, restore: function(state) {
    var zoom = this.map.getZoomForResolution(state.resolution);
    this.map.setCenter(state.center, zoom);
}, setListeners: function() {
    this.listeners = {};
    for (var type in this.registry) {
        this.listeners[type] = OpenLayers.Function.bind(function() {
            if (!this.restoring) {
                var state = this.registry[type].apply(this, arguments);
                this.previousStack.unshift(state);
                if (this.previousStack.length > 1) {
                    this.onPreviousChange(this.previousStack[1], this.previousStack.length - 1);
                }
                if (this.previousStack.length > (this.limit + 1)) {
                    this.previousStack.pop();
                }
                if (this.nextStack.length > 0) {
                    this.nextStack = [];
                    this.onNextChange(null, 0);
                } 
            }
            return true;
        }, this);
    } 
}, activate: function() {
    var activated = false;
    if (this.map) {
        if (OpenLayers.Control.prototype.activate.apply(this)) {
            if (this.listeners == null) {
                this.setListeners();
            }
            for (var type in this.listeners) {
                this.map.events.register(type, this, this.listeners[type]);
            }
            activated = true;
            if (this.previousStack.length == 0) {
                this.initStack();
            } 
        } 
    }
    return activated;
}, initStack: function() {
    if (this.map.getCenter()) {
        this.listeners.moveend();
    } 
}, deactivate: function() {
    var deactivated = false;
    if (this.map) {
        if (OpenLayers.Control.prototype.deactivate.apply(this)) {
            for (var type in this.listeners) {
                this.map.events.unregister(type, this, this.listeners[type]);
            }
            if (this.clearOnDeactivate) {
                this.clear();
            }
            deactivated = true;
        } 
    }
    return deactivated;
}, CLASS_NAME: "OpenLayers.Control.NavigationHistory"
});
OpenLayers.Control.Pan = OpenLayers.Class(OpenLayers.Control, { slideFactor: 50, direction: null, type: OpenLayers.Control.TYPE_BUTTON, initialize: function(direction, options) {
    this.direction = direction;
    this.CLASS_NAME += this.direction;
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
}, trigger: function() {
    switch (this.direction) {
        case OpenLayers.Control.Pan.NORTH: this.map.pan(0, -this.slideFactor);
            break;
        case OpenLayers.Control.Pan.SOUTH: this.map.pan(0, this.slideFactor);
            break;
        case OpenLayers.Control.Pan.WEST: this.map.pan(-this.slideFactor, 0);
            break;
        case OpenLayers.Control.Pan.EAST: this.map.pan(this.slideFactor, 0);
            break;
    } 
}, CLASS_NAME: "OpenLayers.Control.Pan"
});
OpenLayers.Control.Pan.NORTH = "North";
OpenLayers.Control.Pan.SOUTH = "South";
OpenLayers.Control.Pan.EAST = "East";
OpenLayers.Control.Pan.WEST = "West";
OpenLayers.Control.PanZoom = OpenLayers.Class(OpenLayers.Control, { slideFactor: 50, buttons: null, position: null, initialize: function(options) {
    this.position = new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X, OpenLayers.Control.PanZoom.Y);
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
    while (this.buttons.length) {
        var btn = this.buttons.shift();
        btn.map = null;
        OpenLayers.Event.stopObservingElement(btn);
    }
    this.buttons = null;
    this.position = null;
}, draw: function(px) {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    px = this.position;
    this.buttons = [];
    var sz = new OpenLayers.Size(18, 18);
    var centered = new OpenLayers.Pixel(px.x + sz.w / 2, px.y);
    this._addButton("panup", "north-mini.png", centered, sz);
    px.y = centered.y + sz.h;
    this._addButton("panleft", "west-mini.png", px, sz);
    this._addButton("panright", "east-mini.png", px.add(sz.w, 0), sz);
    this._addButton("pandown", "south-mini.png", centered.add(0, sz.h * 2), sz);
    this._addButton("zoomin", "zoom-plus-mini.png", centered.add(0, sz.h * 3 + 5), sz);
    this._addButton("zoomworld", "zoom-world-mini.png", centered.add(0, sz.h * 4 + 5), sz);
    this._addButton("zoomout", "zoom-minus-mini.png", centered.add(0, sz.h * 5 + 5), sz);
    return this.div;
}, _addButton: function(id, img, xy, sz) {
    var imgLocation = OpenLayers.Util.getImagesLocation() + img;
    var btn = OpenLayers.Util.createAlphaImageDiv(this.id + "_" + id, xy, sz, imgLocation, "absolute");
    this.div.appendChild(btn);
    OpenLayers.Event.observe(btn, "mousedown", OpenLayers.Function.bindAsEventListener(this.buttonDown, btn));
    OpenLayers.Event.observe(btn, "dblclick", OpenLayers.Function.bindAsEventListener(this.doubleClick, btn));
    OpenLayers.Event.observe(btn, "click", OpenLayers.Function.bindAsEventListener(this.doubleClick, btn));
    btn.action = id;
    btn.map = this.map;
    btn.slideFactor = this.slideFactor;
    this.buttons.push(btn);
    return btn;
}, doubleClick: function(evt) {
    OpenLayers.Event.stop(evt);
    return false;
}, buttonDown: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    switch (this.action) {
        case "panup": this.map.pan(0, -this.slideFactor);
            break;
        case "pandown": this.map.pan(0, this.slideFactor);
            break;
        case "panleft": this.map.pan(-this.slideFactor, 0);
            break;
        case "panright": this.map.pan(this.slideFactor, 0);
            break;
        case "zoomin": this.map.zoomIn();
            break;
        case "zoomout": this.map.zoomOut();
            break;
        case "zoomworld": this.map.zoomToMaxExtent();
            break;
    }
    OpenLayers.Event.stop(evt);
}, CLASS_NAME: "OpenLayers.Control.PanZoom"
});
OpenLayers.Control.PanZoom.X = 4;
OpenLayers.Control.PanZoom.Y = 4;
OpenLayers.Control.Panel = OpenLayers.Class(OpenLayers.Control, { controls: null, defaultControl: null, initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.controls = [];
}, destroy: function() {
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
    for (var i = this.controls.length - 1;
i >= 0;
i--) {
        if (this.controls[i].events) {
            this.controls[i].events.un({ "activate": this.redraw, "deactivate": this.redraw, scope: this });
        }
        OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);
        this.controls[i].panel_div = null;
    } 
}, activate: function() {
    if (OpenLayers.Control.prototype.activate.apply(this, arguments)) {
        for (var i = 0, len = this.controls.length;
i < len;
i++) {
            if (this.controls[i] == this.defaultControl) {
                this.controls[i].activate();
            } 
        }
        this.redraw();
        return true;
    } else {
        return false;
    } 
}, deactivate: function() {
    if (OpenLayers.Control.prototype.deactivate.apply(this, arguments)) {
        for (var i = 0, len = this.controls.length;
i < len;
i++) {
            this.controls[i].deactivate();
        }
        return true;
    } else {
        return false;
    } 
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    for (var i = 0, len = this.controls.length;
i < len;
i++) {
        this.map.addControl(this.controls[i]);
        this.controls[i].deactivate();
        this.controls[i].events.on({ "activate": this.redraw, "deactivate": this.redraw, scope: this });
    }
    this.activate();
    return this.div;
}, redraw: function() {
    this.div.innerHTML = "";
    if (this.active) {
        for (var i = 0, len = this.controls.length;
i < len;
i++) {
            var element = this.controls[i].panel_div;
            if (this.controls[i].active) {
                element.className = this.controls[i].displayClass + "ItemActive";
            } else {
                element.className = this.controls[i].displayClass + "ItemInactive";
            }
            this.div.appendChild(element);
        } 
    } 
}, activateControl: function(control) {
    if (!this.active) {
        return false;
    }
    if (control.type == OpenLayers.Control.TYPE_BUTTON) {
        control.trigger();
        this.redraw();
        return;
    }
    if (control.type == OpenLayers.Control.TYPE_TOGGLE) {
        if (control.active) {
            control.deactivate();
        } else {
            control.activate();
        }
        this.redraw();
        return;
    }
    for (var i = 0, len = this.controls.length;
i < len;
i++) {
        if (this.controls[i] != control) {
            if (this.controls[i].type != OpenLayers.Control.TYPE_TOGGLE) {
                this.controls[i].deactivate();
            } 
        } 
    }
    control.activate();
}, addControls: function(controls) {
    if (!(controls instanceof Array)) {
        controls = [controls];
    }
    this.controls = this.controls.concat(controls);
    for (var i = 0, len = controls.length;
i < len;
i++) {
        var element = document.createElement("div");
        var textNode = document.createTextNode(" ");
        controls[i].panel_div = element;
        if (controls[i].title != "") {
            controls[i].panel_div.title = controls[i].title;
        }
        OpenLayers.Event.observe(controls[i].panel_div, "click", OpenLayers.Function.bind(this.onClick, this, controls[i]));
        OpenLayers.Event.observe(controls[i].panel_div, "mousedown", OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));
    }
    if (this.map) {
        for (var i = 0, len = controls.length;
i < len;
i++) {
            this.map.addControl(controls[i]);
            controls[i].deactivate();
            controls[i].events.on({ "activate": this.redraw, "deactivate": this.redraw, scope: this });
        }
        this.redraw();
    } 
}, onClick: function(ctrl, evt) {
    OpenLayers.Event.stop(evt ? evt : window.event);
    this.activateControl(ctrl);
}, getControlsBy: function(property, match) {
    var test = (typeof match.test == "function");
    var found = OpenLayers.Array.filter(this.controls, function(item) {
        return item[property] == match || (test && match.test(item[property]));
    });
    return found;
}, getControlsByName: function(match) {
    return this.getControlsBy("name", match);
}, getControlsByClass: function(match) {
    return this.getControlsBy("CLASS_NAME", match);
}, CLASS_NAME: "OpenLayers.Control.Panel"
});
OpenLayers.Control.Scale = OpenLayers.Class(OpenLayers.Control, { element: null, initialize: function(element, options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.element = OpenLayers.Util.getElement(element);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    if (!this.element) {
        this.element = document.createElement("div");
        this.div.appendChild(this.element);
    }
    this.map.events.register('moveend', this, this.updateScale);
    this.updateScale();
    return this.div;
}, updateScale: function() {
    var scale = this.map.getScale();
    if (!scale) {
        return;
    }
    if (scale >= 9500 && scale <= 950000) {
        scale = Math.round(scale / 1000) + "K";
    } else if (scale >= 950000) {
        scale = Math.round(scale / 1000000) + "M";
    } else {
        scale = Math.round(scale);
    }
    this.element.innerHTML = OpenLayers.i18n("scale", { 'scaleDenom': scale });
}, CLASS_NAME: "OpenLayers.Control.Scale"
});
OpenLayers.Control.ScaleLine = OpenLayers.Class(OpenLayers.Control, { maxWidth: 100, topOutUnits: "km", topInUnits: "m", bottomOutUnits: "mi", bottomInUnits: "ft", eTop: null, eBottom: null, initialize: function(options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    if (!this.eTop) {
        this.div.style.display = "block";
        this.div.style.position = "absolute";
        this.eTop = document.createElement("div");
        this.eTop.className = this.displayClass + "Top";
        var theLen = this.topInUnits.length;
        this.div.appendChild(this.eTop);
        if ((this.topOutUnits == "") || (this.topInUnits == "")) {
            this.eTop.style.visibility = "hidden";
        } else {
            this.eTop.style.visibility = "visible";
        }
        this.eBottom = document.createElement("div");
        this.eBottom.className = this.displayClass + "Bottom";
        this.div.appendChild(this.eBottom);
        if ((this.bottomOutUnits == "") || (this.bottomInUnits == "")) {
            this.eBottom.style.visibility = "hidden";
        } else {
            this.eBottom.style.visibility = "visible";
        } 
    }
    this.map.events.register('moveend', this, this.update);
    this.update();
    return this.div;
}, getBarLen: function(maxLen) {
    var digits = parseInt(Math.log(maxLen) / Math.log(10));
    var pow10 = Math.pow(10, digits);
    var firstChar = parseInt(maxLen / pow10);
    var barLen;
    if (firstChar > 5) {
        barLen = 5;
    } else if (firstChar > 2) {
        barLen = 2;
    } else {
        barLen = 1;
    }
    return barLen * pow10;
}, update: function() {
    var res = this.map.getResolution();
    if (!res) {
        return;
    }
    var curMapUnits = this.map.getUnits();
    var inches = OpenLayers.INCHES_PER_UNIT;
    var maxSizeData = this.maxWidth * res * inches[curMapUnits];
    var topUnits;
    var bottomUnits;
    if (maxSizeData > 100000) {
        topUnits = this.topOutUnits;
        bottomUnits = this.bottomOutUnits;
    } else {
        topUnits = this.topInUnits;
        bottomUnits = this.bottomInUnits;
    }
    var topMax = maxSizeData / inches[topUnits];
    var bottomMax = maxSizeData / inches[bottomUnits];
    var topRounded = this.getBarLen(topMax);
    var bottomRounded = this.getBarLen(bottomMax);
    topMax = topRounded / inches[curMapUnits] * inches[topUnits];
    bottomMax = bottomRounded / inches[curMapUnits] * inches[bottomUnits];
    var topPx = topMax / res;
    var bottomPx = bottomMax / res;
    this.eTop.style.width = Math.round(topPx) + "px";
    this.eBottom.style.width = Math.round(bottomPx) + "px";
    this.eTop.innerHTML = topRounded + " " + topUnits;
    this.eBottom.innerHTML = bottomRounded + " " + bottomUnits;
}, CLASS_NAME: "OpenLayers.Control.ScaleLine"
});
OpenLayers.Control.ZoomIn = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_BUTTON, trigger: function() {
    this.map.zoomIn();
}, CLASS_NAME: "OpenLayers.Control.ZoomIn"
});
OpenLayers.Control.ZoomOut = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_BUTTON, trigger: function() {
    this.map.zoomOut();
}, CLASS_NAME: "OpenLayers.Control.ZoomOut"
});
OpenLayers.Control.ZoomToMaxExtent = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_BUTTON, trigger: function() {
    if (this.map) {
        this.map.zoomToMaxExtent();
    } 
}, CLASS_NAME: "OpenLayers.Control.ZoomToMaxExtent"
});
OpenLayers.Event = { observers: false, KEY_BACKSPACE: 8, KEY_TAB: 9, KEY_RETURN: 13, KEY_ESC: 27, KEY_LEFT: 37, KEY_UP: 38, KEY_RIGHT: 39, KEY_DOWN: 40, KEY_DELETE: 46, element: function(event) {
    return event.target || event.srcElement;
}, isLeftClick: function(event) {
    return (((event.which) && (event.which == 1)) || ((event.button) && (event.button == 1)));
}, isRightClick: function(event) {
    return (((event.which) && (event.which == 3)) || ((event.button) && (event.button == 2)));
}, stop: function(event, allowDefault) {
    if (!allowDefault) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        } 
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    } 
}, findElement: function(event, tagName) {
    var element = OpenLayers.Event.element(event);
    while (element.parentNode && (!element.tagName || (element.tagName.toUpperCase() != tagName.toUpperCase()))) {
        element = element.parentNode;
    }
    return element;
}, observe: function(elementParam, name, observer, useCapture) {
    var element = OpenLayers.Util.getElement(elementParam);
    useCapture = useCapture || false;
    if (name == 'keypress' && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || element.attachEvent)) {
        name = 'keydown';
    }
    if (!this.observers) {
        this.observers = {};
    }
    if (!element._eventCacheID) {
        var idPrefix = "eventCacheID_";
        if (element.id) {
            idPrefix = element.id + "_" + idPrefix;
        }
        element._eventCacheID = OpenLayers.Util.createUniqueID(idPrefix);
    }
    var cacheID = element._eventCacheID;
    if (!this.observers[cacheID]) {
        this.observers[cacheID] = [];
    }
    this.observers[cacheID].push({ 'element': element, 'name': name, 'observer': observer, 'useCapture': useCapture });
    if (element.addEventListener) {
        element.addEventListener(name, observer, useCapture);
    } else if (element.attachEvent) {
        element.attachEvent('on' + name, observer);
    } 
}, stopObservingElement: function(elementParam) {
    var element = OpenLayers.Util.getElement(elementParam);
    var cacheID = element._eventCacheID;
    this._removeElementObservers(OpenLayers.Event.observers[cacheID]);
}, _removeElementObservers: function(elementObservers) {
    if (elementObservers) {
        for (var i = elementObservers.length - 1;
i >= 0;
i--) {
            var entry = elementObservers[i];
            var args = new Array(entry.element, entry.name, entry.observer, entry.useCapture);
            var removed = OpenLayers.Event.stopObserving.apply(this, args);
        } 
    } 
}, stopObserving: function(elementParam, name, observer, useCapture) {
    useCapture = useCapture || false;
    var element = OpenLayers.Util.getElement(elementParam);
    var cacheID = element._eventCacheID;
    if (name == 'keypress') {
        if (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || element.detachEvent) {
            name = 'keydown';
        } 
    }
    var foundEntry = false;
    var elementObservers = OpenLayers.Event.observers[cacheID];
    if (elementObservers) {
        var i = 0;
        while (!foundEntry && i < elementObservers.length) {
            var cacheEntry = elementObservers[i];
            if ((cacheEntry.name == name) && (cacheEntry.observer == observer) && (cacheEntry.useCapture == useCapture)) {
                elementObservers.splice(i, 1);
                if (elementObservers.length == 0) {
                    delete OpenLayers.Event.observers[cacheID];
                }
                foundEntry = true;
                break;
            }
            i++;
        } 
    }
    if (foundEntry) {
        if (element.removeEventListener) {
            element.removeEventListener(name, observer, useCapture);
        } else if (element && element.detachEvent) {
            element.detachEvent('on' + name, observer);
        } 
    }
    return foundEntry;
}, unloadCache: function() {
    if (OpenLayers.Event && OpenLayers.Event.observers) {
        for (var cacheID in OpenLayers.Event.observers) {
            var elementObservers = OpenLayers.Event.observers[cacheID];
            OpenLayers.Event._removeElementObservers.apply(this, [elementObservers]);
        }
        OpenLayers.Event.observers = false;
    } 
}, CLASS_NAME: "OpenLayers.Event"
};
OpenLayers.Event.observe(window, 'unload', OpenLayers.Event.unloadCache, false);
if (window.Event) {
    OpenLayers.Util.applyDefaults(window.Event, OpenLayers.Event);
} else {
    var Event = OpenLayers.Event;
}
OpenLayers.Events = OpenLayers.Class({ BROWSER_EVENTS: ["mouseover", "mouseout", "mousedown", "mouseup", "mousemove", "click", "dblclick", "rightclick", "dblrightclick", "resize", "focus", "blur"], listeners: null, object: null, element: null, eventTypes: null, eventHandler: null, fallThrough: null, includeXY: false, initialize: function(object, element, eventTypes, fallThrough, options) {
    OpenLayers.Util.extend(this, options);
    this.object = object;
    this.element = element;
    this.fallThrough = fallThrough;
    this.listeners = {};
    this.eventHandler = OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent, this);
    this.eventTypes = [];
    if (eventTypes != null) {
        for (var i = 0, len = eventTypes.length;
i < len;
i++) {
            this.addEventType(eventTypes[i]);
        } 
    }
    if (this.element != null) {
        this.attachToElement(element);
    } 
}, destroy: function() {
    if (this.element) {
        OpenLayers.Event.stopObservingElement(this.element);
    }
    this.element = null;
    this.listeners = null;
    this.object = null;
    this.eventTypes = null;
    this.fallThrough = null;
    this.eventHandler = null;
}, addEventType: function(eventName) {
    if (!this.listeners[eventName]) {
        this.eventTypes.push(eventName);
        this.listeners[eventName] = [];
    } 
}, attachToElement: function(element) {
    for (var i = 0, len = this.BROWSER_EVENTS.length;
i < len;
i++) {
        var eventType = this.BROWSER_EVENTS[i];
        this.addEventType(eventType);
        OpenLayers.Event.observe(element, eventType, this.eventHandler);
    }
    OpenLayers.Event.observe(element, "dragstart", OpenLayers.Event.stop);
}, on: function(object) {
    for (var type in object) {
        if (type != "scope") {
            this.register(type, object.scope, object[type]);
        } 
    } 
}, register: function(type, obj, func) {
    if ((func != null) && (OpenLayers.Util.indexOf(this.eventTypes, type) != -1)) {
        if (obj == null) {
            obj = this.object;
        }
        var listeners = this.listeners[type];
        listeners.push({ obj: obj, func: func });
    } 
}, registerPriority: function(type, obj, func) {
    if (func != null) {
        if (obj == null) {
            obj = this.object;
        }
        var listeners = this.listeners[type];
        if (listeners != null) {
            listeners.unshift({ obj: obj, func: func });
        } 
    } 
}, un: function(object) {
    for (var type in object) {
        if (type != "scope") {
            this.unregister(type, object.scope, object[type]);
        } 
    } 
}, unregister: function(type, obj, func) {
    if (obj == null) {
        obj = this.object;
    }
    var listeners = this.listeners[type];
    if (listeners != null) {
        for (var i = 0, len = listeners.length;
i < len;
i++) {
            if (listeners[i].obj == obj && listeners[i].func == func) {
                listeners.splice(i, 1);
                break;
            } 
        } 
    } 
}, remove: function(type) {
    if (this.listeners[type] != null) {
        this.listeners[type] = [];
    } 
}, triggerEvent: function(type, evt) {
    if (evt == null) {
        evt = {};
    }
    evt.object = this.object;
    evt.element = this.element;
    if (!evt.type) {
        evt.type = type;
    }
    var listeners = (this.listeners[type]) ? this.listeners[type].slice() : null;
    if ((listeners != null) && (listeners.length > 0)) {
        var continueChain;
        for (var i = 0, len = listeners.length;
i < len;
i++) {
            var callback = listeners[i];
            continueChain = callback.func.apply(callback.obj, [evt]);
            if ((continueChain != undefined) && (continueChain == false)) {
                break;
            } 
        }
        if (!this.fallThrough) {
            OpenLayers.Event.stop(evt, true);
        } 
    }
    return continueChain;
}, handleBrowserEvent: function(evt) {
    if (this.includeXY) {
        evt.xy = this.getMousePosition(evt);
    }
    this.triggerEvent(evt.type, evt);
}, clearMouseCache: function() {
    this.element.scrolls = null;
    this.element.lefttop = null;
    this.element.offsets = null;
}, getMousePosition: function(evt) {
    if (!this.includeXY) {
        this.clearMouseCache();
    } else if (!this.element.hasScrollEvent) {
        OpenLayers.Event.observe(window, 'scroll', OpenLayers.Function.bind(this.clearMouseCache, this));
        this.element.hasScrollEvent = true;
    }
    if (!this.element.scrolls) {
        this.element.scrolls = [];
        this.element.scrolls[0] = (document.documentElement.scrollLeft || document.body.scrollLeft);
        this.element.scrolls[1] = (document.documentElement.scrollTop || document.body.scrollTop);
    }
    if (!this.element.lefttop) {
        this.element.lefttop = [];
        this.element.lefttop[0] = (document.documentElement.clientLeft || 0);
        this.element.lefttop[1] = (document.documentElement.clientTop || 0);
    }
    if (!this.element.offsets) {
        this.element.offsets = OpenLayers.Util.pagePosition(this.element);
        this.element.offsets[0] += this.element.scrolls[0];
        this.element.offsets[1] += this.element.scrolls[1];
    }
    return new OpenLayers.Pixel((evt.clientX + this.element.scrolls[0]) - this.element.offsets[0]
- this.element.lefttop[0], (evt.clientY + this.element.scrolls[1]) - this.element.offsets[1]
- this.element.lefttop[1]);
}, CLASS_NAME: "OpenLayers.Events"
});
OpenLayers.Format = OpenLayers.Class({ options: null, externalProjection: null, internalProjection: null, initialize: function(options) {
    OpenLayers.Util.extend(this, options);
    this.options = options;
}, destroy: function() { }, read: function(data) {
    OpenLayers.Console.userError(OpenLayers.i18n("readNotImplemented"));
}, write: function(object) {
    OpenLayers.Console.userError(OpenLayers.i18n("writeNotImplemented"));
}, CLASS_NAME: "OpenLayers.Format"
});
OpenLayers.Lang.en = { 'unhandledRequest': "Unhandled request return ${statusText}", 'permalink': "Permalink", 'overlays': "Overlays", 'baseLayer': "Base Layer", 'sameProjection': "The overview map only works when it is in the same projection as the main map", 'readNotImplemented': "Read not implemented.", 'writeNotImplemented': "Write not implemented.", 'noFID': "Can't update a feature for which there is no FID.", 'errorLoadingGML': "Error in loading GML file ${url}", 'browserNotSupported': "Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}", 'componentShouldBe': "addFeatures : component should be an ${geomType}", 'getFeatureError': "getFeatureFromEvent called on layer with no renderer. This usually means you " + "destroyed a layer, but not some handler which is associated with it.", 'minZoomLevelError': "The minZoomLevel property is only intended for use " + "with the FixedZoomLevels-descendent layers. That this " + "wfs layer checks for minZoomLevel is a relic of the" + "past. We cannot, however, remove it without possibly " + "breaking OL based applications that may depend on it." + " Therefore we are deprecating it -- the minZoomLevel " + "check below will be removed at 3.0. Please instead " + "use min/max resolution setting as described here: " + "http://trac.openlayers.org/wiki/SettingZoomLevels", 'commitSuccess': "WFS Transaction: SUCCESS ${response}", 'commitFailed': "WFS Transaction: FAILED ${response}", 'googleWarning': "The Google Layer was unable to load correctly.<br><br>" + "To get rid of this message, select a new BaseLayer " + "in the layer switcher in the upper-right corner.<br><br>" + "Most likely, this is because the Google Maps library " + "script was either not included, or does not contain the " + "correct API key for your site.<br><br>" + "Developers: For help getting this working correctly, " + "<a href='http://trac.openlayers.org/wiki/Google' " + "target='_blank'>click here</a>", 'getLayerWarning': "The ${layerType} Layer was unable to load correctly.<br><br>" + "To get rid of this message, select a new BaseLayer " + "in the layer switcher in the upper-right corner.<br><br>" + "Most likely, this is because the ${layerLib} library " + "script was not correctly included.<br><br>" + "Developers: For help getting this working correctly, " + "<a href='http://trac.openlayers.org/wiki/${layerLib}' " + "target='_blank'>click here</a>", 'scale': "Scale = 1 : ${scaleDenom}", 'layerAlreadyAdded': "You tried to add the layer: ${layerName} to the map, but it has already been added", 'reprojectDeprecated': "You are using the 'reproject' option " + "on the ${layerName} layer. This option is deprecated: " + "its use was designed to support displaying data over commercial " + "basemaps, but that functionality should now be achieved by using " + "Spherical Mercator support. More information is available from " + "http://trac.openlayers.org/wiki/SphericalMercator.", 'methodDeprecated': "This method has been deprecated and will be removed in 3.0. " + "Please use ${newMethod} instead.", 'boundsAddError': "You must pass both x and y values to the add function.", 'lonlatAddError': "You must pass both lon and lat values to the add function.", 'pixelAddError': "You must pass both x and y values to the add function.", 'unsupportedGeometryType': "Unsupported geometry type: ${geomType}", 'pagePositionFailed': "OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.", 'end': '', 'filterEvaluateNotImplemented': "evaluate is not implemented for this filter type." };
OpenLayers.Popup.Anchored = OpenLayers.Class(OpenLayers.Popup, { relativePosition: null, anchor: null, initialize: function(id, lonlat, contentSize, contentHTML, anchor, closeBox, closeBoxCallback) {
    var newArguments = [id, lonlat, contentSize, contentHTML, closeBox, closeBoxCallback];
    OpenLayers.Popup.prototype.initialize.apply(this, newArguments);
    this.anchor = (anchor != null) ? anchor : { size: new OpenLayers.Size(0, 0), offset: new OpenLayers.Pixel(0, 0) };
}, destroy: function() {
    this.anchor = null;
    this.relativePosition = null;
    OpenLayers.Popup.prototype.destroy.apply(this, arguments);
}, show: function() {
    this.updatePosition();
    OpenLayers.Popup.prototype.show.apply(this, arguments);
}, moveTo: function(px) {
    var oldRelativePosition = this.relativePosition;
    this.relativePosition = this.calculateRelativePosition(px);
    var newPx = this.calculateNewPx(px);
    var newArguments = new Array(newPx);
    OpenLayers.Popup.prototype.moveTo.apply(this, newArguments);
    if (this.relativePosition != oldRelativePosition) {
        this.updateRelativePosition();
    } 
}, setSize: function(contentSize) {
    OpenLayers.Popup.prototype.setSize.apply(this, arguments);
    if ((this.lonlat) && (this.map)) {
        var px = this.map.getLayerPxFromLonLat(this.lonlat);
        this.moveTo(px);
    } 
}, calculateRelativePosition: function(px) {
    var lonlat = this.map.getLonLatFromLayerPx(px);
    var extent = this.map.getExtent();
    var quadrant = extent.determineQuadrant(lonlat);
    return OpenLayers.Bounds.oppositeQuadrant(quadrant);
}, updateRelativePosition: function() { }, calculateNewPx: function(px) {
    var newPx = px.offset(this.anchor.offset);
    var size = this.size || this.contentSize;
    var top = (this.relativePosition.charAt(0) == 't');
    newPx.y += (top) ? -size.h : this.anchor.size.h;
    var left = (this.relativePosition.charAt(1) == 'l');
    newPx.x += (left) ? -size.w : this.anchor.size.w;
    return newPx;
}, CLASS_NAME: "OpenLayers.Popup.Anchored"
});
OpenLayers.Projection = OpenLayers.Class({ proj: null, projCode: null, initialize: function(projCode, options) {
    OpenLayers.Util.extend(this, options);
    this.projCode = projCode;
    if (window.Proj4js) {
        this.proj = new Proj4js.Proj(projCode);
    } 
}, getCode: function() {
    return this.proj ? this.proj.srsCode : this.projCode;
}, getUnits: function() {
    return this.proj ? this.proj.units : null;
}, toString: function() {
    return this.getCode();
}, equals: function(projection) {
    if (projection && projection.getCode) {
        return this.getCode() == projection.getCode();
    } else {
        return false;
    } 
}, destroy: function() {
    delete this.proj;
    delete this.projCode;
}, CLASS_NAME: "OpenLayers.Projection"
});
OpenLayers.Projection.transforms = {};
OpenLayers.Projection.addTransform = function(from, to, method) {
    if (!OpenLayers.Projection.transforms[from]) {
        OpenLayers.Projection.transforms[from] = {};
    }
    OpenLayers.Projection.transforms[from][to] = method;
};
OpenLayers.Projection.transform = function(point, source, dest) {
    if (source.proj && dest.proj) {
        point = Proj4js.transform(source.proj, dest.proj, point);
    } else if (source && dest && OpenLayers.Projection.transforms[source.getCode()] && OpenLayers.Projection.transforms[source.getCode()][dest.getCode()]) {
        OpenLayers.Projection.transforms[source.getCode()][dest.getCode()](point);
    }
    return point;
};
OpenLayers.Protocol.SQL = OpenLayers.Class(OpenLayers.Protocol, { databaseName: 'ol', tableName: "ol_vector_features", postReadFiltering: true, initialize: function(options) {
    OpenLayers.Protocol.prototype.initialize.apply(this, [options]);
}, destroy: function() {
    OpenLayers.Protocol.prototype.destroy.apply(this);
}, supported: function() {
    return false;
}, evaluateFilter: function(feature, filter) {
    return filter && this.postReadFiltering ? filter.evaluate(feature) : true;
}, CLASS_NAME: "OpenLayers.Protocol.SQL"
});
OpenLayers.Renderer.Canvas = OpenLayers.Class(OpenLayers.Renderer, { root: null, canvas: null, features: null, geometryMap: null, initialize: function(containerID) {
    OpenLayers.Renderer.prototype.initialize.apply(this, arguments);
    this.root = document.createElement("canvas");
    this.container.appendChild(this.root);
    this.canvas = this.root.getContext("2d");
    this.features = {};
    this.geometryMap = {};
}, eraseGeometry: function(geometry) {
    this.eraseFeatures(this.features[this.geometryMap[geometry.id]][0]);
}, supported: function() {
    var canvas = document.createElement("canvas");
    return !!canvas.getContext;
}, setExtent: function(extent) {
    this.extent = extent.clone();
    this.resolution = null;
    this.redraw();
}, setSize: function(size) {
    this.size = size.clone();
    this.root.style.width = size.w + "px";
    this.root.style.height = size.h + "px";
    this.root.width = size.w;
    this.root.height = size.h;
    this.resolution = null;
}, drawFeature: function(feature, style) {
    if (style == null) {
        style = feature.style;
    }
    style = OpenLayers.Util.extend({ 'fillColor': '#000000', 'strokeColor': '#000000', 'strokeWidth': 2, 'fillOpacity': 1, 'strokeOpacity': 1 }, style);
    this.features[feature.id] = [feature, style];
    this.geometryMap[feature.geometry.id] = feature.id;
    this.redraw();
}, drawGeometry: function(geometry, style) {
    var className = geometry.CLASS_NAME;
    if ((className == "OpenLayers.Geometry.Collection") || (className == "OpenLayers.Geometry.MultiPoint") || (className == "OpenLayers.Geometry.MultiLineString") || (className == "OpenLayers.Geometry.MultiPolygon")) {
        for (var i = 0;
i < geometry.components.length;
i++) {
            this.drawGeometry(geometry.components[i], style);
        }
        return;
    };
    switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point": this.drawPoint(geometry, style);
            break;
        case "OpenLayers.Geometry.LineString": this.drawLineString(geometry, style);
            break;
        case "OpenLayers.Geometry.LinearRing": this.drawLinearRing(geometry, style);
            break;
        case "OpenLayers.Geometry.Polygon": this.drawPolygon(geometry, style);
            break;
        default: break;
    } 
}, drawExternalGraphic: function(pt, style) {
    var img = new Image();
    img.src = style.externalGraphic;
    var width = style.graphicWidth || style.graphicHeight;
    var height = style.graphicHeight || style.graphicWidth;
    width = width ? width : style.pointRadius * 2;
    height = height ? height : style.pointRadius * 2;
    var xOffset = (style.graphicXOffset != undefined) ? style.graphicXOffset : -(0.5 * width);
    var yOffset = (style.graphicYOffset != undefined) ? style.graphicYOffset : -(0.5 * height);
    var opacity = style.graphicOpacity || style.fillOpacity;
    var context = { img: img, x: (pt[0] + xOffset), y: (pt[1] + yOffset), width: width, height: height, canvas: this.canvas };
    img.onload = OpenLayers.Function.bind(function() {
        this.canvas.drawImage(this.img, this.x, this.y, this.width, this.height);
    }, context);
}, setCanvasStyle: function(type, style) {
    if (type == "fill") {
        this.canvas.globalAlpha = style['fillOpacity'];
        this.canvas.fillStyle = style['fillColor'];
    } else if (type == "stroke") {
        this.canvas.globalAlpha = style['strokeOpacity'];
        this.canvas.strokeStyle = style['strokeColor'];
        this.canvas.lineWidth = style['strokeWidth'];
    } else {
        this.canvas.globalAlpha = 0;
        this.canvas.lineWidth = 1;
    } 
}, drawPoint: function(geometry, style) {
    var pt = this.getLocalXY(geometry);
    if (style.externalGraphic) {
        this.drawExternalGraphic(pt, style);
    } else {
        this.setCanvasStyle("fill", style);
        this.canvas.beginPath();
        this.canvas.arc(pt[0], pt[1], 6, 0, Math.PI * 2, true);
        this.canvas.fill();
        this.setCanvasStyle("stroke", style);
        this.canvas.beginPath();
        this.canvas.arc(pt[0], pt[1], 6, 0, Math.PI * 2, true);
        this.canvas.stroke();
        this.setCanvasStyle("reset");
    } 
}, drawLineString: function(geometry, style) {
    this.setCanvasStyle("stroke", style);
    this.canvas.beginPath();
    var start = this.getLocalXY(geometry.components[0]);
    this.canvas.moveTo(start[0], start[1]);
    for (var i = 1;
i < geometry.components.length;
i++) {
        var pt = this.getLocalXY(geometry.components[i]);
        this.canvas.lineTo(pt[0], pt[1]);
    }
    this.canvas.stroke();
    this.setCanvasStyle("reset");
}, drawLinearRing: function(geometry, style) {
    this.setCanvasStyle("fill", style);
    this.canvas.beginPath();
    var start = this.getLocalXY(geometry.components[0]);
    this.canvas.moveTo(start[0], start[1]);
    for (var i = 1;
i < geometry.components.length - 1;
i++) {
        var pt = this.getLocalXY(geometry.components[i]);
        this.canvas.lineTo(pt[0], pt[1]);
    }
    this.canvas.fill();
    var oldWidth = this.canvas.lineWidth;
    this.setCanvasStyle("stroke", style);
    this.canvas.beginPath();
    var start = this.getLocalXY(geometry.components[0]);
    this.canvas.moveTo(start[0], start[1]);
    for (var i = 1;
i < geometry.components.length;
i++) {
        var pt = this.getLocalXY(geometry.components[i]);
        this.canvas.lineTo(pt[0], pt[1]);
    }
    this.canvas.stroke();
    this.setCanvasStyle("reset");
}, drawPolygon: function(geometry, style) {
    this.drawLinearRing(geometry.components[0], style);
    for (var i = 1;
i < geometry.components.length;
i++) {
        this.drawLinearRing(geometry.components[i], { fillOpacity: 0, strokeWidth: 0, strokeOpacity: 0, strokeColor: '#000000', fillColor: '#000000' });
    } 
}, getLocalXY: function(point) {
    var resolution = this.getResolution();
    var extent = this.extent;
    var x = (point.x / resolution + (-extent.left / resolution));
    var y = ((extent.top / resolution) - point.y / resolution);
    return [x, y];
}, clear: function() {
    this.canvas.clearRect(0, 0, this.root.width, this.root.height);
}, getFeatureIdFromEvent: function(evt) {
    var loc = this.map.getLonLatFromPixel(evt.xy);
    var resolution = this.getResolution();
    var bounds = new OpenLayers.Bounds(loc.lon - resolution * 5, loc.lat - resolution * 5, loc.lon + resolution * 5, loc.lat + resolution * 5);
    var geom = bounds.toGeometry();
    for (var feat in this.features) {
        if (!this.features.hasOwnProperty(feat)) {
            continue;
        }
        if (this.features[feat][0].geometry.intersects(geom)) {
            return feat;
        } 
    }
    return null;
}, eraseFeatures: function(features) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    for (var i = 0;
i < features.length;
++i) {
        delete this.features[features[i].id];
    }
    this.redraw();
}, redraw: function() {
    if (!this.locked) {
        this.clear();
        for (var id in this.features) {
            if (!this.features.hasOwnProperty(id)) {
                continue;
            }
            if (!this.features[id][0].geometry) {
                continue;
            }
            this.drawGeometry(this.features[id][0].geometry, this.features[id][1]);
        } 
    } 
}, CLASS_NAME: "OpenLayers.Renderer.Canvas"
});
OpenLayers.ElementsIndexer = OpenLayers.Class({ maxZIndex: null, order: null, indices: null, compare: null, initialize: function(yOrdering) {
    this.compare = yOrdering ? OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_Y_ORDER : OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER_DRAWING_ORDER;
    this.order = [];
    this.indices = {};
    this.maxZIndex = 0;
}, insert: function(newNode) {
    if (this.exists(newNode)) {
        this.remove(newNode);
    }
    var nodeId = newNode.id;
    this.determineZIndex(newNode);
    var leftIndex = -1;
    var rightIndex = this.order.length;
    var middle;
    while (rightIndex - leftIndex > 1) {
        middle = parseInt((leftIndex + rightIndex) / 2);
        var placement = this.compare(this, newNode, OpenLayers.Util.getElement(this.order[middle]));
        if (placement > 0) {
            leftIndex = middle;
        } else {
            rightIndex = middle;
        } 
    }
    this.order.splice(rightIndex, 0, nodeId);
    this.indices[nodeId] = this.getZIndex(newNode);
    var nextIndex = rightIndex + 1;
    return nextIndex < this.order.length ? OpenLayers.Util.getElement(this.order[nextIndex]) : null;
}, remove: function(node) {
    var nodeId = node.id;
    var arrayIndex = OpenLayers.Util.indexOf(this.order, nodeId);
    if (arrayIndex >= 0) {
        this.order.splice(arrayIndex, 1);
        delete this.indices[nodeId];
        if (this.order.length > 0) {
            var lastId = this.order[this.order.length - 1];
            this.maxZIndex = this.indices[lastId];
        } else {
            this.maxZIndex = 0;
        } 
    } 
}, clear: function() {
    this.order = [];
    this.indices = {};
    this.maxZIndex = 0;
}, exists: function(node) {
    return (this.indices[node.id] != null);
}, getZIndex: function(node) {
    return node._style.graphicZIndex;
}, determineZIndex: function(node) {
    var zIndex = node._style.graphicZIndex;
    if (zIndex == null) {
        zIndex = this.maxZIndex;
        node._style.graphicZIndex = zIndex;
    } else if (zIndex > this.maxZIndex) {
        this.maxZIndex = zIndex;
    } 
}, CLASS_NAME: "OpenLayers.ElementsIndexer"
});
OpenLayers.ElementsIndexer.IndexingMethods = { Z_ORDER: function(indexer, newNode, nextNode) {
    var newZIndex = indexer.getZIndex(newNode);
    var returnVal = 0;
    if (nextNode) {
        var nextZIndex = indexer.getZIndex(nextNode);
        returnVal = newZIndex - nextZIndex;
    }
    return returnVal;
}, Z_ORDER_DRAWING_ORDER: function(indexer, newNode, nextNode) {
    var returnVal = OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer, newNode, nextNode);
    if (nextNode && returnVal == 0) {
        returnVal = 1;
    }
    return returnVal;
}, Z_ORDER_Y_ORDER: function(indexer, newNode, nextNode) {
    var returnVal = OpenLayers.ElementsIndexer.IndexingMethods.Z_ORDER(indexer, newNode, nextNode);
    if (nextNode && returnVal == 0) {
        var newLat = newNode._geometry.getBounds().bottom;
        var nextLat = nextNode._geometry.getBounds().bottom;
        var result = nextLat - newLat;
        returnVal = (result == 0) ? 1 : result;
    }
    return returnVal;
} 
};
OpenLayers.Renderer.Elements = OpenLayers.Class(OpenLayers.Renderer, { rendererRoot: null, root: null, xmlns: null, indexer: null, BACKGROUND_ID_SUFFIX: "_background", minimumSymbolizer: { strokeLinecap: "round", strokeOpacity: 1, strokeDashstyle: "solid", fillOpacity: 1, pointRadius: 0 }, initialize: function(containerID, options) {
    OpenLayers.Renderer.prototype.initialize.apply(this, arguments);
    this.rendererRoot = this.createRenderRoot();
    this.root = this.createRoot();
    this.rendererRoot.appendChild(this.root);
    this.container.appendChild(this.rendererRoot);
    if (options && (options.zIndexing || options.yOrdering)) {
        this.indexer = new OpenLayers.ElementsIndexer(options.yOrdering);
    } 
}, destroy: function() {
    this.clear();
    this.rendererRoot = null;
    this.root = null;
    this.xmlns = null;
    OpenLayers.Renderer.prototype.destroy.apply(this, arguments);
}, clear: function() {
    if (this.root) {
        while (this.root.childNodes.length > 0) {
            this.root.removeChild(this.root.firstChild);
        } 
    }
    if (this.indexer) {
        this.indexer.clear();
    } 
}, getNodeType: function(geometry, style) { }, drawGeometry: function(geometry, style, featureId) {
    var className = geometry.CLASS_NAME;
    var rendered = true;
    if ((className == "OpenLayers.Geometry.Collection") || (className == "OpenLayers.Geometry.MultiPoint") || (className == "OpenLayers.Geometry.MultiLineString") || (className == "OpenLayers.Geometry.MultiPolygon")) {
        for (var i = 0, len = geometry.components.length;
i < len;
i++) {
            rendered = rendered && this.drawGeometry(geometry.components[i], style, featureId);
        }
        return rendered;
    };
    rendered = false;
    if (style.display != "none") {
        if (style.backgroundGraphic) {
            this.redrawBackgroundNode(geometry.id, geometry, style, featureId);
        }
        rendered = this.redrawNode(geometry.id, geometry, style, featureId);
    }
    if (rendered == false) {
        var node = document.getElementById(geometry.id);
        if (node) {
            if (node._style.backgroundGraphic) {
                node.parentNode.removeChild(document.getElementById(geometry.id + this.BACKGROUND_ID_SUFFIX));
            }
            node.parentNode.removeChild(node);
        } 
    }
    return rendered;
}, redrawNode: function(id, geometry, style, featureId) {
    var node = this.nodeFactory(id, this.getNodeType(geometry, style));
    node._featureId = featureId;
    node._geometry = geometry;
    node._geometryClass = geometry.CLASS_NAME;
    node._style = style;
    var drawResult = this.drawGeometryNode(node, geometry, style);
    if (drawResult === false) {
        return false;
    }
    node = drawResult.node;
    var insert = this.indexer ? this.indexer.insert(node) : null;
    if (insert) {
        this.root.insertBefore(node, insert);
    } else {
        this.root.appendChild(node);
    }
    this.postDraw(node);
    return drawResult.complete;
}, redrawBackgroundNode: function(id, geometry, style, featureId) {
    var backgroundStyle = OpenLayers.Util.extend({}, style);
    backgroundStyle.externalGraphic = backgroundStyle.backgroundGraphic;
    backgroundStyle.graphicXOffset = backgroundStyle.backgroundXOffset;
    backgroundStyle.graphicYOffset = backgroundStyle.backgroundYOffset;
    backgroundStyle.graphicZIndex = backgroundStyle.backgroundGraphicZIndex;
    backgroundStyle.backgroundGraphic = null;
    backgroundStyle.backgroundXOffset = null;
    backgroundStyle.backgroundYOffset = null;
    backgroundStyle.backgroundGraphicZIndex = null;
    return this.redrawNode(id + this.BACKGROUND_ID_SUFFIX, geometry, backgroundStyle, null);
}, drawGeometryNode: function(node, geometry, style) {
    style = style || node._style;
    OpenLayers.Util.applyDefaults(style, this.minimumSymbolizer);
    var options = { 'isFilled': true, 'isStroked': !!style.strokeWidth };
    var drawn;
    switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point": drawn = this.drawPoint(node, geometry);
            break;
        case "OpenLayers.Geometry.LineString": options.isFilled = false;
            drawn = this.drawLineString(node, geometry);
            break;
        case "OpenLayers.Geometry.LinearRing": drawn = this.drawLinearRing(node, geometry);
            break;
        case "OpenLayers.Geometry.Polygon": drawn = this.drawPolygon(node, geometry);
            break;
        case "OpenLayers.Geometry.Surface": drawn = this.drawSurface(node, geometry);
            break;
        case "OpenLayers.Geometry.Rectangle": drawn = this.drawRectangle(node, geometry);
            break;
        default: break;
    }
    node._style = style;
    node._options = options;
    if (drawn != false) {
        return { node: this.setStyle(node, style, options, geometry), complete: drawn };
    } else {
        return false;
    } 
}, postDraw: function(node) { }, drawPoint: function(node, geometry) { }, drawLineString: function(node, geometry) { }, drawLinearRing: function(node, geometry) { }, drawPolygon: function(node, geometry) { }, drawRectangle: function(node, geometry) { }, drawCircle: function(node, geometry) { }, drawSurface: function(node, geometry) { }, getFeatureIdFromEvent: function(evt) {
    var target = evt.target;
    var useElement = target && target.correspondingUseElement;
    var node = useElement ? useElement : (target || evt.srcElement);
    var featureId = node._featureId;
    return featureId;
}, eraseGeometry: function(geometry) {
    if ((geometry.CLASS_NAME == "OpenLayers.Geometry.MultiPoint") || (geometry.CLASS_NAME == "OpenLayers.Geometry.MultiLineString") || (geometry.CLASS_NAME == "OpenLayers.Geometry.MultiPolygon") || (geometry.CLASS_NAME == "OpenLayers.Geometry.Collection")) {
        for (var i = 0, len = geometry.components.length;
i < len;
i++) {
            this.eraseGeometry(geometry.components[i]);
        } 
    } else {
        var element = OpenLayers.Util.getElement(geometry.id);
        if (element && element.parentNode) {
            if (element.geometry) {
                element.geometry.destroy();
                element.geometry = null;
            }
            element.parentNode.removeChild(element);
            if (this.indexer) {
                this.indexer.remove(element);
            }
            if (element._style.backgroundGraphic) {
                var backgroundId = geometry.id + this.BACKGROUND_ID_SUFFIX;
                var bElem = OpenLayers.Util.getElement(backgroundId);
                if (bElem && bElem.parentNode) {
                    bElem.parentNode.removeChild(bElem);
                } 
            } 
        } 
    } 
}, nodeFactory: function(id, type) {
    var node = OpenLayers.Util.getElement(id);
    if (node) {
        if (!this.nodeTypeCompare(node, type)) {
            node.parentNode.removeChild(node);
            node = this.nodeFactory(id, type);
        } 
    } else {
        node = this.createNode(type, id);
    }
    return node;
}, nodeTypeCompare: function(node, type) { }, createNode: function(type, id) { }, isComplexSymbol: function(graphicName) {
    return (graphicName != "circle") && !!graphicName;
}, CLASS_NAME: "OpenLayers.Renderer.Elements"
});
OpenLayers.Renderer.symbol = { "star": [350, 75, 379, 161, 469, 161, 397, 215, 423, 301, 350, 250, 277, 301, 303, 215, 231, 161, 321, 161, 350, 75], "cross": [4, 0, 6, 0, 6, 4, 10, 4, 10, 6, 6, 6, 6, 10, 4, 10, 4, 6, 0, 6, 0, 4, 4, 4, 4, 0], "x": [0, 0, 25, 0, 50, 35, 75, 0, 100, 0, 65, 50, 100, 100, 75, 100, 50, 65, 25, 100, 0, 100, 35, 50, 0, 0], "square": [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], "triangle": [0, 10, 10, 10, 5, 0, 0, 10] };
(function() {
    var oXMLHttpRequest = window.XMLHttpRequest;
    var bGecko = !!window.controllers, bIE = window.document.all && !window.opera;
    function cXMLHttpRequest() {
        this._object = oXMLHttpRequest ? new oXMLHttpRequest : new window.ActiveXObject('Microsoft.XMLHTTP');
    };
    if (bGecko && oXMLHttpRequest.wrapped)
        cXMLHttpRequest.wrapped = oXMLHttpRequest.wrapped;
    cXMLHttpRequest.UNSENT = 0;
    cXMLHttpRequest.OPENED = 1;
    cXMLHttpRequest.HEADERS_RECEIVED = 2;
    cXMLHttpRequest.LOADING = 3;
    cXMLHttpRequest.DONE = 4;
    cXMLHttpRequest.prototype.readyState = cXMLHttpRequest.UNSENT;
    cXMLHttpRequest.prototype.responseText = "";
    cXMLHttpRequest.prototype.responseXML = null;
    cXMLHttpRequest.prototype.status = 0;
    cXMLHttpRequest.prototype.statusText = "";
    cXMLHttpRequest.prototype.onreadystatechange = null;
    cXMLHttpRequest.onreadystatechange = null;
    cXMLHttpRequest.onopen = null;
    cXMLHttpRequest.onsend = null;
    cXMLHttpRequest.onabort = null;
    cXMLHttpRequest.prototype.open = function(sMethod, sUrl, bAsync, sUser, sPassword) {
        this._async = bAsync;
        var oRequest = this, nState = this.readyState;
        if (bIE) {
            var fOnUnload = function() {
                if (oRequest._object.readyState != cXMLHttpRequest.DONE)
                    fCleanTransport(oRequest);
            };
            if (bAsync)
                window.attachEvent("onunload", fOnUnload);
        }
        this._object.onreadystatechange = function() {
            if (bGecko && !bAsync)
                return;
            oRequest.readyState = oRequest._object.readyState;
            fSynchronizeValues(oRequest);
            if (oRequest._aborted) {
                oRequest.readyState = cXMLHttpRequest.UNSENT;
                return;
            }
            if (oRequest.readyState == cXMLHttpRequest.DONE) {
                fCleanTransport(oRequest);
                if (bIE && bAsync)
                    window.detachEvent("onunload", fOnUnload);
            }
            if (nState != oRequest.readyState)
                fReadyStateChange(oRequest);
            nState = oRequest.readyState;
        };
        if (cXMLHttpRequest.onopen)
            cXMLHttpRequest.onopen.apply(this, arguments);
        this._object.open(sMethod, sUrl, bAsync, sUser, sPassword);
        if (!bAsync && bGecko) {
            this.readyState = cXMLHttpRequest.OPENED;
            fReadyStateChange(this);
        } 
    };
    cXMLHttpRequest.prototype.send = function(vData) {
        if (cXMLHttpRequest.onsend)
            cXMLHttpRequest.onsend.apply(this, arguments);
        if (vData && vData.nodeType) {
            vData = window.XMLSerializer ? new window.XMLSerializer().serializeToString(vData) : vData.xml;
            if (!this._headers["Content-Type"])
                this._object.setRequestHeader("Content-Type", "application/xml");
        }
        this._object.send(vData);
        if (bGecko && !this._async) {
            this.readyState = cXMLHttpRequest.OPENED;
            fSynchronizeValues(this);
            while (this.readyState < cXMLHttpRequest.DONE) {
                this.readyState++;
                fReadyStateChange(this);
                if (this._aborted)
                    return;
            } 
        } 
    };
    cXMLHttpRequest.prototype.abort = function() {
        if (cXMLHttpRequest.onabort)
            cXMLHttpRequest.onabort.apply(this, arguments);
        if (this.readyState > cXMLHttpRequest.UNSENT)
            this._aborted = true;
        this._object.abort();
        fCleanTransport(this);
    };
    cXMLHttpRequest.prototype.getAllResponseHeaders = function() {
        return this._object.getAllResponseHeaders();
    };
    cXMLHttpRequest.prototype.getResponseHeader = function(sName) {
        return this._object.getResponseHeader(sName);
    };
    cXMLHttpRequest.prototype.setRequestHeader = function(sName, sValue) {
        if (!this._headers)
            this._headers = {};
        this._headers[sName] = sValue;
        return this._object.setRequestHeader(sName, sValue);
    };
    cXMLHttpRequest.prototype.toString = function() {
        return '[' + "object" + ' ' + "XMLHttpRequest" + ']';
    };
    cXMLHttpRequest.toString = function() {
        return '[' + "XMLHttpRequest" + ']';
    };
    function fReadyStateChange(oRequest) {
        if (oRequest.onreadystatechange)
            oRequest.onreadystatechange.apply(oRequest);
        if (cXMLHttpRequest.onreadystatechange)
            cXMLHttpRequest.onreadystatechange.apply(oRequest);
    };
    function fGetDocument(oRequest) {
        var oDocument = oRequest.responseXML;
        if (bIE && oDocument && !oDocument.documentElement && oRequest.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)) {
            oDocument = new ActiveXObject('Microsoft.XMLDOM');
            oDocument.loadXML(oRequest.responseText);
        }
        if (oDocument)
            if ((bIE && oDocument.parseError != 0) || (oDocument.documentElement && oDocument.documentElement.tagName == "parsererror"))
            return null;
        return oDocument;
    };
    function fSynchronizeValues(oRequest) {
        try {
            oRequest.responseText = oRequest._object.responseText;
        } catch (e) { }
        try {
            oRequest.responseXML = fGetDocument(oRequest._object);
        } catch (e) { }
        try {
            oRequest.status = oRequest._object.status;
        } catch (e) { }
        try {
            oRequest.statusText = oRequest._object.statusText;
        } catch (e) { } 
    };
    function fCleanTransport(oRequest) {
        oRequest._object.onreadystatechange = new window.Function;
        delete oRequest._headers;
    };
    if (!window.Function.prototype.apply) {
        window.Function.prototype.apply = function(oRequest, oArguments) {
            if (!oArguments)
                oArguments = [];
            oRequest.__func = this;
            oRequest.__func(oArguments[0], oArguments[1], oArguments[2], oArguments[3], oArguments[4]);
            delete oRequest.__func;
        };
    };
    OpenLayers.Request.XMLHttpRequest = cXMLHttpRequest;
})();
OpenLayers.Strategy.Cluster = OpenLayers.Class(OpenLayers.Strategy, { layer: null, distance: 20, features: null, clusters: null, clustering: false, resolution: null, initialize: function(options) {
    OpenLayers.Strategy.prototype.initialize.apply(this, [options]);
}, activate: function() {
    var activated = OpenLayers.Strategy.prototype.activate.call(this);
    if (activated) {
        this.layer.events.on({ "beforefeaturesadded": this.cacheFeatures, scope: this });
        this.layer.map.events.on({ "zoomend": this.cluster, scope: this });
    }
    return activated;
}, deactivate: function() {
    var deactivated = OpenLayers.Strategy.prototype.deactivate.call(this);
    if (deactivated) {
        this.clearCache();
        this.layer.events.un({ "beforefeaturesadded": this.cacheFeatures, scope: this });
        this.layer.map.events.un({ "zoomend": this.cluster, scope: this });
    }
    return deactivated;
}, cacheFeatures: function(event) {
    var propagate = true;
    if (!this.clustering) {
        this.clearCache();
        this.features = event.features;
        this.cluster();
        propagate = false;
    }
    return propagate;
}, clearCache: function() {
    if (this.features) {
        for (var i = 0;
i < this.features.length;
++i) {
            this.features[i].destroy();
        } 
    }
    this.features = null;
}, cluster: function() {
    if (this.features) {
        var resolution = this.layer.getResolution();
        if (resolution != this.resolution || !this.clustersExist()) {
            this.resolution = resolution;
            var clusters = [];
            var feature, clustered, cluster;
            for (var i = 0;
i < this.features.length;
++i) {
                feature = this.features[i];
                clustered = false;
                for (var j = 0;
j < clusters.length;
++j) {
                    cluster = clusters[j];
                    if (this.shouldCluster(cluster, feature)) {
                        this.addToCluster(cluster, feature);
                        clustered = true;
                        break;
                    } 
                }
                if (!clustered) {
                    clusters.push(this.createCluster(this.features[i]));
                } 
            }
            this.layer.destroyFeatures();
            if (clusters.length > 0) {
                this.clustering = true;
                this.layer.addFeatures(clusters);
                this.clustering = false;
            }
            this.clusters = clusters;
        } 
    } 
}, clustersExist: function() {
    var exist = false;
    if (this.clusters && this.clusters.length > 0 && this.clusters.length == this.layer.features.length) {
        exist = true;
        for (var i = 0;
i < this.clusters.length;
++i) {
            if (this.clusters[i] != this.layer.features[i]) {
                exist = false;
                break;
            } 
        } 
    }
    return exist;
}, shouldCluster: function(cluster, feature) {
    var cc = cluster.geometry.getBounds().getCenterLonLat();
    var fc = feature.geometry.getBounds().getCenterLonLat();
    var distance = (Math.sqrt(Math.pow((cc.lon - fc.lon), 2) + Math.pow((cc.lat - fc.lat), 2)) / this.resolution);
    return (distance <= this.distance);
}, addToCluster: function(cluster, feature) {
    cluster.cluster.push(feature);
    cluster.attributes.count += 1;
}, createCluster: function(feature) {
    var center = feature.geometry.getBounds().getCenterLonLat();
    var cluster = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(center.lon, center.lat), { count: 1 });
    cluster.cluster = [feature];
    return cluster;
}, CLASS_NAME: "OpenLayers.Strategy.Cluster"
});
OpenLayers.Strategy.Fixed = OpenLayers.Class(OpenLayers.Strategy, { initialize: function(options) {
    OpenLayers.Strategy.prototype.initialize.apply(this, [options]);
}, destroy: function() {
    OpenLayers.Strategy.prototype.destroy.apply(this, arguments);
}, activate: function() {
    if (OpenLayers.Strategy.prototype.activate.apply(this, arguments)) {
        this.layer.protocol.read({ callback: this.merge, scope: this });
        return true;
    }
    return false;
}, merge: function(resp) {
    var features = resp.features;
    if (features && features.length > 0) {
        this.layer.addFeatures(features);
    } 
}, CLASS_NAME: "OpenLayers.Strategy.Fixed"
});
OpenLayers.Strategy.Paging = OpenLayers.Class(OpenLayers.Strategy, { layer: null, features: null, length: 10, num: null, paging: false, initialize: function(options) {
    OpenLayers.Strategy.prototype.initialize.apply(this, [options]);
}, activate: function() {
    var activated = OpenLayers.Strategy.prototype.activate.call(this);
    if (activated) {
        this.layer.events.on({ "beforefeaturesadded": this.cacheFeatures, scope: this });
    }
    return activated;
}, deactivate: function() {
    var deactivated = OpenLayers.Strategy.prototype.deactivate.call(this);
    if (deactivated) {
        this.clearCache();
        this.layer.events.un({ "beforefeaturesadded": this.cacheFeatures, scope: this });
    }
    return deactivated;
}, cacheFeatures: function(event) {
    if (!this.paging) {
        this.clearCache();
        this.features = event.features;
        this.pageNext(event);
    } 
}, clearCache: function() {
    if (this.features) {
        for (var i = 0;
i < this.features.length;
++i) {
            this.features[i].destroy();
        } 
    }
    this.features = null;
    this.num = null;
}, pageCount: function() {
    var numFeatures = this.features ? this.features.length : 0;
    return Math.ceil(numFeatures / this.length);
}, pageNum: function() {
    return this.num;
}, pageLength: function(newLength) {
    if (newLength && newLength > 0) {
        this.length = newLength;
    }
    return this.length;
}, pageNext: function(event) {
    var changed = false;
    if (this.features) {
        if (this.num === null) {
            this.num = -1;
        }
        var start = (this.num + 1) * this.length;
        changed = this.page(start, event);
    }
    return changed;
}, pagePrevious: function() {
    var changed = false;
    if (this.features) {
        if (this.num === null) {
            this.num = this.pageCount();
        }
        var start = (this.num - 1) * this.length;
        changed = this.page(start);
    }
    return changed;
}, page: function(start, event) {
    var changed = false;
    if (this.features) {
        if (start >= 0 && start < this.features.length) {
            var num = Math.floor(start / this.length);
            if (num != this.num) {
                this.paging = true;
                var features = this.features.slice(start, start + this.length);
                this.layer.removeFeatures(this.layer.features);
                this.num = num;
                if (event && event.features) {
                    event.features = features;
                } else {
                    this.layer.addFeatures(features);
                }
                this.paging = false;
                changed = true;
            } 
        } 
    }
    return changed;
}, CLASS_NAME: "OpenLayers.Strategy.Paging"
});
OpenLayers.Tile = OpenLayers.Class({ EVENT_TYPES: ["loadstart", "loadend", "reload", "unload"], events: null, id: null, layer: null, url: null, bounds: null, size: null, position: null, isLoading: false, initialize: function(layer, position, bounds, url, size) {
    this.layer = layer;
    this.position = position.clone();
    this.bounds = bounds.clone();
    this.url = url;
    this.size = size.clone();
    this.id = OpenLayers.Util.createUniqueID("Tile_");
    this.events = new OpenLayers.Events(this, null, this.EVENT_TYPES);
}, unload: function() {
    if (this.isLoading) {
        this.isLoading = false;
        this.events.triggerEvent("unload");
    } 
}, destroy: function() {
    this.layer = null;
    this.bounds = null;
    this.size = null;
    this.position = null;
    this.events.destroy();
    this.events = null;
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Tile(this.layer, this.position, this.bounds, this.url, this.size);
    }
    OpenLayers.Util.applyDefaults(obj, this);
    return obj;
}, draw: function() {
    var maxExtent = this.layer.maxExtent;
    var withinMaxExtent = (maxExtent && this.bounds.intersectsBounds(maxExtent, false));
    this.shouldDraw = (withinMaxExtent || this.layer.displayOutsideMaxExtent);
    this.clear();
    return this.shouldDraw;
}, moveTo: function(bounds, position, redraw) {
    if (redraw == null) {
        redraw = true;
    }
    this.bounds = bounds.clone();
    this.position = position.clone();
    if (redraw) {
        this.draw();
    } 
}, clear: function() { }, getBoundsFromBaseLayer: function(position) {
    var msg = OpenLayers.i18n('reprojectDeprecated', { 'layerName': this.layer.name });
    OpenLayers.Console.warn(msg);
    var topLeft = this.layer.map.getLonLatFromLayerPx(position);
    var bottomRightPx = position.clone();
    bottomRightPx.x += this.size.w;
    bottomRightPx.y += this.size.h;
    var bottomRight = this.layer.map.getLonLatFromLayerPx(bottomRightPx);
    if (topLeft.lon > bottomRight.lon) {
        if (topLeft.lon < 0) {
            topLeft.lon = -180 - (topLeft.lon + 180);
        } else {
            bottomRight.lon = 180 + bottomRight.lon + 180;
        } 
    }
    var bounds = new OpenLayers.Bounds(topLeft.lon, bottomRight.lat, bottomRight.lon, topLeft.lat);
    return bounds;
}, showTile: function() {
    if (this.shouldDraw) {
        this.show();
    } 
}, show: function() { }, hide: function() { }, CLASS_NAME: "OpenLayers.Tile"
});
OpenLayers.ProxyHost = "";
OpenLayers.nullHandler = function(request) {
    OpenLayers.Console.userError(OpenLayers.i18n("unhandledRequest", { 'statusText': request.statusText }));
};
OpenLayers.loadURL = function(uri, params, caller, onComplete, onFailure) {
    if (typeof params == 'string') {
        params = OpenLayers.Util.getParameters(params);
    }
    var success = (onComplete) ? onComplete : OpenLayers.nullHandler;
    var failure = (onFailure) ? onFailure : OpenLayers.nullHandler;
    return OpenLayers.Request.GET({ url: uri, params: params, success: success, failure: failure, scope: caller });
};
OpenLayers.parseXMLString = function(text) {
    var index = text.indexOf('<');
    if (index > 0) {
        text = text.substring(index);
    }
    var ajaxResponse = OpenLayers.Util.Try(function() {
        var xmldom = new ActiveXObject('Microsoft.XMLDOM');
        xmldom.loadXML(text);
        return xmldom;
    }, function() {
        return new DOMParser().parseFromString(text, 'text/xml');
    }, function() {
        var req = new XMLHttpRequest();
        req.open("GET", "data:" + "text/xml" + ";charset=utf-8," + encodeURIComponent(text), false);
        if (req.overrideMimeType) {
            req.overrideMimeType("text/xml");
        }
        req.send(null);
        return req.responseXML;
    });
    return ajaxResponse;
};
OpenLayers.Ajax = { emptyFunction: function() { }, getTransport: function() {
    return OpenLayers.Util.Try(function() {
        return new XMLHttpRequest();
    }, function() {
        return new ActiveXObject('Msxml2.XMLHTTP');
    }, function() {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }) || false;
}, activeRequestCount: 0
};
OpenLayers.Ajax.Responders = { responders: [], register: function(responderToAdd) {
    for (var i = 0;
i < this.responders.length;
i++) {
        if (responderToAdd == this.responders[i]) {
            return;
        } 
    }
    this.responders.push(responderToAdd);
}, unregister: function(responderToRemove) {
    OpenLayers.Util.removeItem(this.reponders, responderToRemove);
}, dispatch: function(callback, request, transport) {
    var responder;
    for (var i = 0;
i < this.responders.length;
i++) {
        responder = this.responders[i];
        if (responder[callback] && typeof responder[callback] == 'function') {
            try {
                responder[callback].apply(responder, [request, transport]);
            } catch (e) { } 
        } 
    } 
} 
};
OpenLayers.Ajax.Responders.register({ onCreate: function() {
    OpenLayers.Ajax.activeRequestCount++;
}, onComplete: function() {
    OpenLayers.Ajax.activeRequestCount--;
} 
});
OpenLayers.Ajax.Base = OpenLayers.Class({ initialize: function(options) {
    this.options = { method: 'post', asynchronous: true, contentType: 'application/xml', parameters: '' };
    OpenLayers.Util.extend(this.options, options || {});
    this.options.method = this.options.method.toLowerCase();
    if (typeof this.options.parameters == 'string') {
        this.options.parameters = OpenLayers.Util.getParameters(this.options.parameters);
    } 
} 
});
OpenLayers.Ajax.Request = OpenLayers.Class(OpenLayers.Ajax.Base, { _complete: false, initialize: function(url, options) {
    OpenLayers.Ajax.Base.prototype.initialize.apply(this, [options]);
    if (OpenLayers.ProxyHost && OpenLayers.String.startsWith(url, "http")) {
        url = OpenLayers.ProxyHost + encodeURIComponent(url);
    }
    this.transport = OpenLayers.Ajax.getTransport();
    this.request(url);
}, request: function(url) {
    this.url = url;
    this.method = this.options.method;
    var params = OpenLayers.Util.extend({}, this.options.parameters);
    if (this.method != 'get' && this.method != 'post') {
        params['_method'] = this.method;
        this.method = 'post';
    }
    this.parameters = params;
    if (params = OpenLayers.Util.getParameterString(params)) {
        if (this.method == 'get') {
            this.url += ((this.url.indexOf('?') > -1) ? '&' : '?') + params;
        } else if (/Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
            params += '&_=';
        } 
    }
    try {
        var response = new OpenLayers.Ajax.Response(this);
        if (this.options.onCreate) {
            this.options.onCreate(response);
        }
        OpenLayers.Ajax.Responders.dispatch('onCreate', this, response);
        this.transport.open(this.method.toUpperCase(), this.url, this.options.asynchronous);
        if (this.options.asynchronous) {
            window.setTimeout(OpenLayers.Function.bind(this.respondToReadyState, this, 1), 10);
        }
        this.transport.onreadystatechange = OpenLayers.Function.bind(this.onStateChange, this);
        this.setRequestHeaders();
        this.body = this.method == 'post' ? (this.options.postBody || params) : null;
        this.transport.send(this.body);
        if (!this.options.asynchronous && this.transport.overrideMimeType) {
            this.onStateChange();
        } 
    } catch (e) {
        this.dispatchException(e);
    } 
}, onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState > 1 && !((readyState == 4) && this._complete)) {
        this.respondToReadyState(this.transport.readyState);
    } 
}, setRequestHeaders: function() {
    var headers = { 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'text/javascript, text/html, application/xml, text/xml, */*', 'OpenLayers': true };
    if (this.method == 'post') {
        headers['Content-type'] = this.options.contentType +
(this.options.encoding ? '; charset=' + this.options.encoding : '');
        if (this.transport.overrideMimeType && (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0, 2005])[1] < 2005) {
            headers['Connection'] = 'close';
        } 
    }
    if (typeof this.options.requestHeaders == 'object') {
        var extras = this.options.requestHeaders;
        if (typeof extras.push == 'function') {
            for (var i = 0, length = extras.length;
i < length;
i += 2) {
                headers[extras[i]] = extras[i + 1];
            } 
        } else {
            for (var i in extras) {
                headers[i] = extras[i];
            } 
        } 
    }
    for (var name in headers) {
        this.transport.setRequestHeader(name, headers[name]);
    } 
}, success: function() {
    var status = this.getStatus();
    return !status || (status >= 200 && status < 300);
}, getStatus: function() {
    try {
        return this.transport.status || 0;
    } catch (e) {
        return 0;
    } 
}, respondToReadyState: function(readyState) {
    var state = OpenLayers.Ajax.Request.Events[readyState];
    var response = new OpenLayers.Ajax.Response(this);
    if (state == 'Complete') {
        try {
            this._complete = true;
            (this.options['on' + response.status] || this.options['on' + (this.success() ? 'Success' : 'Failure')] || OpenLayers.Ajax.emptyFunction)(response);
        } catch (e) {
            this.dispatchException(e);
        }
        var contentType = response.getHeader('Content-type');
    }
    try {
        (this.options['on' + state] || OpenLayers.Ajax.emptyFunction)(response);
        OpenLayers.Ajax.Responders.dispatch('on' + state, this, response);
    } catch (e) {
        this.dispatchException(e);
    }
    if (state == 'Complete') {
        this.transport.onreadystatechange = OpenLayers.Ajax.emptyFunction;
    } 
}, getHeader: function(name) {
    try {
        return this.transport.getResponseHeader(name);
    } catch (e) {
        return null;
    } 
}, dispatchException: function(exception) {
    var handler = this.options.onException;
    if (handler) {
        handler(this, exception);
        OpenLayers.Ajax.Responders.dispatch('onException', this, exception);
    } else {
        var listener = false;
        var responders = OpenLayers.Ajax.Responders.responders;
        for (var i = 0;
i < responders.length;
i++) {
            if (responders[i].onException) {
                listener = true;
                break;
            } 
        }
        if (listener) {
            OpenLayers.Ajax.Responders.dispatch('onException', this, exception);
        } else {
            throw exception;
        } 
    } 
} 
});
OpenLayers.Ajax.Request.Events = ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];
OpenLayers.Ajax.Response = OpenLayers.Class({ status: 0, statusText: '', initialize: function(request) {
    this.request = request;
    var transport = this.transport = request.transport, readyState = this.readyState = transport.readyState;
    if ((readyState > 2 && !(!!(window.attachEvent && !window.opera))) || readyState == 4) {
        this.status = this.getStatus();
        this.statusText = this.getStatusText();
        this.responseText = transport.responseText == null ? '' : String(transport.responseText);
    }
    if (readyState == 4) {
        var xml = transport.responseXML;
        this.responseXML = xml === undefined ? null : xml;
    } 
}, getStatus: OpenLayers.Ajax.Request.prototype.getStatus, getStatusText: function() {
    try {
        return this.transport.statusText || '';
    } catch (e) {
        return '';
    } 
}, getHeader: OpenLayers.Ajax.Request.prototype.getHeader, getResponseHeader: function(name) {
    return this.transport.getResponseHeader(name);
} 
});
OpenLayers.Ajax.getElementsByTagNameNS = function(parentnode, nsuri, nsprefix, tagname) {
    var elem = null;
    if (parentnode.getElementsByTagNameNS) {
        elem = parentnode.getElementsByTagNameNS(nsuri, tagname);
    } else {
        elem = parentnode.getElementsByTagName(nsprefix + ':' + tagname);
    }
    return elem;
};
OpenLayers.Ajax.serializeXMLToString = function(xmldom) {
    var serializer = new XMLSerializer();
    var data = serializer.serializeToString(xmldom);
    return data;
};
OpenLayers.Control.MouseToolbar = OpenLayers.Class(OpenLayers.Control.MouseDefaults, { mode: null, buttons: null, direction: "vertical", buttonClicked: null, initialize: function(position, direction) {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
    this.position = new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X, OpenLayers.Control.MouseToolbar.Y);
    if (position) {
        this.position = position;
    }
    if (direction) {
        this.direction = direction;
    }
    this.measureDivs = [];
}, destroy: function() {
    for (var btnId in this.buttons) {
        var btn = this.buttons[btnId];
        btn.map = null;
        btn.events.destroy();
    }
    OpenLayers.Control.MouseDefaults.prototype.destroy.apply(this, arguments);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    OpenLayers.Control.MouseDefaults.prototype.draw.apply(this, arguments);
    this.buttons = {};
    var sz = new OpenLayers.Size(28, 28);
    var centered = new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X, 0);
    this._addButton("zoombox", "drag-rectangle-off.png", "drag-rectangle-on.png", centered, sz, "Shift->Drag to zoom to area");
    centered = centered.add((this.direction == "vertical" ? 0 : sz.w), (this.direction == "vertical" ? sz.h : 0));
    this._addButton("pan", "panning-hand-off.png", "panning-hand-on.png", centered, sz, "Drag the map to pan.");
    centered = centered.add((this.direction == "vertical" ? 0 : sz.w), (this.direction == "vertical" ? sz.h : 0));
    this.switchModeTo("pan");
    return this.div;
}, _addButton: function(id, img, activeImg, xy, sz, title) {
    var imgLocation = OpenLayers.Util.getImagesLocation() + img;
    var activeImgLocation = OpenLayers.Util.getImagesLocation() + activeImg;
    var btn = OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MouseToolbar_" + id, xy, sz, imgLocation, "absolute");
    this.div.appendChild(btn);
    btn.imgLocation = imgLocation;
    btn.activeImgLocation = activeImgLocation;
    btn.events = new OpenLayers.Events(this, btn, null, true);
    btn.events.on({ "mousedown": this.buttonDown, "mouseup": this.buttonUp, "dblclick": OpenLayers.Event.stop, scope: this });
    btn.action = id;
    btn.title = title;
    btn.alt = title;
    btn.map = this.map;
    this.buttons[id] = btn;
    return btn;
}, buttonDown: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    this.buttonClicked = evt.element.action;
    OpenLayers.Event.stop(evt);
}, buttonUp: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    if (this.buttonClicked != null) {
        if (this.buttonClicked == evt.element.action) {
            this.switchModeTo(evt.element.action);
        }
        OpenLayers.Event.stop(evt);
        this.buttonClicked = null;
    } 
}, defaultDblClick: function(evt) {
    this.switchModeTo("pan");
    this.performedDrag = false;
    var newCenter = this.map.getLonLatFromViewPortPx(evt.xy);
    this.map.setCenter(newCenter, this.map.zoom + 1);
    OpenLayers.Event.stop(evt);
    return false;
}, defaultMouseDown: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    this.mouseDragStart = evt.xy.clone();
    this.performedDrag = false;
    this.startViaKeyboard = false;
    if (evt.shiftKey && this.mode != "zoombox") {
        this.switchModeTo("zoombox");
        this.startViaKeyboard = true;
    } else if (evt.altKey && this.mode != "measure") {
        this.switchModeTo("measure");
    } else if (!this.mode) {
        this.switchModeTo("pan");
    }
    switch (this.mode) {
        case "zoombox": this.map.div.style.cursor = "crosshair";
            this.zoomBox = OpenLayers.Util.createDiv('zoomBox', this.mouseDragStart, null, null, "absolute", "2px solid red");
            this.zoomBox.style.backgroundColor = "white";
            this.zoomBox.style.filter = "alpha(opacity=50)";
            this.zoomBox.style.opacity = "0.50";
            this.zoomBox.style.fontSize = "1px";
            this.zoomBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
            this.map.viewPortDiv.appendChild(this.zoomBox);
            this.performedDrag = true;
            break;
        case "measure": var distance = "";
            if (this.measureStart) {
                var measureEnd = this.map.getLonLatFromViewPortPx(this.mouseDragStart);
                distance = OpenLayers.Util.distVincenty(this.measureStart, measureEnd);
                distance = Math.round(distance * 100) / 100;
                distance = distance + "km";
                this.measureStartBox = this.measureBox;
            }
            this.measureStart = this.map.getLonLatFromViewPortPx(this.mouseDragStart);
            ;
            this.measureBox = OpenLayers.Util.createDiv(null, this.mouseDragStart.add(-2 - parseInt(this.map.layerContainerDiv.style.left), -2 - parseInt(this.map.layerContainerDiv.style.top)), null, null, "absolute");
            this.measureBox.style.width = "4px";
            this.measureBox.style.height = "4px";
            this.measureBox.style.fontSize = "1px";
            this.measureBox.style.backgroundColor = "red";
            this.measureBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
            this.map.layerContainerDiv.appendChild(this.measureBox);
            if (distance) {
                this.measureBoxDistance = OpenLayers.Util.createDiv(null, this.mouseDragStart.add(-2 - parseInt(this.map.layerContainerDiv.style.left), 2 - parseInt(this.map.layerContainerDiv.style.top)), null, null, "absolute");
                this.measureBoxDistance.innerHTML = distance;
                this.measureBoxDistance.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
                this.map.layerContainerDiv.appendChild(this.measureBoxDistance);
                this.measureDivs.push(this.measureBoxDistance);
            }
            this.measureBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
            this.map.layerContainerDiv.appendChild(this.measureBox);
            this.measureDivs.push(this.measureBox);
            break;
        default: this.map.div.style.cursor = "move";
            break;
    }
    document.onselectstart = function() {
        return false;
    };
    OpenLayers.Event.stop(evt);
}, switchModeTo: function(mode) {
    if (mode != this.mode) {
        if (this.mode && this.buttons[this.mode]) {
            OpenLayers.Util.modifyAlphaImageDiv(this.buttons[this.mode], null, null, null, this.buttons[this.mode].imgLocation);
        }
        if (this.mode == "measure" && mode != "measure") {
            for (var i = 0, len = this.measureDivs.length;
i < len;
i++) {
                if (this.measureDivs[i]) {
                    this.map.layerContainerDiv.removeChild(this.measureDivs[i]);
                } 
            }
            this.measureDivs = [];
            this.measureStart = null;
        }
        this.mode = mode;
        if (this.buttons[mode]) {
            OpenLayers.Util.modifyAlphaImageDiv(this.buttons[mode], null, null, null, this.buttons[mode].activeImgLocation);
        }
        switch (this.mode) {
            case "zoombox": this.map.div.style.cursor = "crosshair";
                break;
            default: this.map.div.style.cursor = "";
                break;
        } 
    } 
}, leaveMode: function() {
    this.switchModeTo("pan");
}, defaultMouseMove: function(evt) {
    if (this.mouseDragStart != null) {
        switch (this.mode) {
            case "zoombox": var deltaX = Math.abs(this.mouseDragStart.x - evt.xy.x);
                var deltaY = Math.abs(this.mouseDragStart.y - evt.xy.y);
                this.zoomBox.style.width = Math.max(1, deltaX) + "px";
                this.zoomBox.style.height = Math.max(1, deltaY) + "px";
                if (evt.xy.x < this.mouseDragStart.x) {
                    this.zoomBox.style.left = evt.xy.x + "px";
                }
                if (evt.xy.y < this.mouseDragStart.y) {
                    this.zoomBox.style.top = evt.xy.y + "px";
                }
                break;
            default: var deltaX = this.mouseDragStart.x - evt.xy.x;
                var deltaY = this.mouseDragStart.y - evt.xy.y;
                var size = this.map.getSize();
                var newXY = new OpenLayers.Pixel(size.w / 2 + deltaX, size.h / 2 + deltaY);
                var newCenter = this.map.getLonLatFromViewPortPx(newXY);
                this.map.setCenter(newCenter, null, true);
                this.mouseDragStart = evt.xy.clone();
        }
        this.performedDrag = true;
    } 
}, defaultMouseUp: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    switch (this.mode) {
        case "zoombox": this.zoomBoxEnd(evt);
            if (this.startViaKeyboard) {
                this.leaveMode();
            }
            break;
        case "pan": if (this.performedDrag) {
                this.map.setCenter(this.map.center);
            } 
    }
    document.onselectstart = null;
    this.mouseDragStart = null;
    this.map.div.style.cursor = "default";
}, defaultMouseOut: function(evt) {
    if (this.mouseDragStart != null && OpenLayers.Util.mouseLeft(evt, this.map.div)) {
        if (this.zoomBox) {
            this.removeZoomBox();
            if (this.startViaKeyboard) {
                this.leaveMode();
            } 
        }
        this.mouseDragStart = null;
        this.map.div.style.cursor = "default";
    } 
}, defaultClick: function(evt) {
    if (this.performedDrag) {
        this.performedDrag = false;
        return false;
    } 
}, CLASS_NAME: "OpenLayers.Control.MouseToolbar"
});
OpenLayers.Control.MouseToolbar.X = 6;
OpenLayers.Control.MouseToolbar.Y = 300;
OpenLayers.Control.PanPanel = OpenLayers.Class(OpenLayers.Control.Panel, { initialize: function(options) {
    OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
    this.addControls([new OpenLayers.Control.Pan(OpenLayers.Control.Pan.NORTH), new OpenLayers.Control.Pan(OpenLayers.Control.Pan.SOUTH), new OpenLayers.Control.Pan(OpenLayers.Control.Pan.EAST), new OpenLayers.Control.Pan(OpenLayers.Control.Pan.WEST)]);
}, CLASS_NAME: "OpenLayers.Control.PanPanel"
});
OpenLayers.Control.PanZoomBar = OpenLayers.Class(OpenLayers.Control.PanZoom, { zoomStopWidth: 18, zoomStopHeight: 11, slider: null, sliderEvents: null, zoomBarDiv: null, divEvents: null, zoomWorldIcon: false, initialize: function() {
    OpenLayers.Control.PanZoom.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    this.div.removeChild(this.slider);
    this.slider = null;
    this.sliderEvents.destroy();
    this.sliderEvents = null;
    this.div.removeChild(this.zoombarDiv);
    this.zoomBarDiv = null;
    this.divEvents.destroy();
    this.divEvents = null;
    this.map.events.un({ "zoomend": this.moveZoomBar, "changebaselayer": this.redraw, scope: this });
    OpenLayers.Control.PanZoom.prototype.destroy.apply(this, arguments);
}, setMap: function(map) {
    OpenLayers.Control.PanZoom.prototype.setMap.apply(this, arguments);
    this.map.events.register("changebaselayer", this, this.redraw);
}, redraw: function() {
    if (this.div != null) {
        this.div.innerHTML = "";
    }
    this.draw();
}, draw: function(px) {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    px = this.position.clone();
    this.buttons = [];
    var sz = new OpenLayers.Size(18, 18);
    var centered = new OpenLayers.Pixel(px.x + sz.w / 2, px.y);
    var wposition = sz.w;
    if (this.zoomWorldIcon) {
        centered = new OpenLayers.Pixel(px.x + sz.w, px.y);
    }
    this._addButton("panup", "north-mini.png", centered, sz);
    px.y = centered.y + sz.h;
    this._addButton("panleft", "west-mini.png", px, sz);
    if (this.zoomWorldIcon) {
        this._addButton("zoomworld", "zoom-world-mini.png", px.add(sz.w, 0), sz);
        wposition *= 2;
    }
    this._addButton("panright", "east-mini.png", px.add(wposition, 0), sz);
    this._addButton("pandown", "south-mini.png", centered.add(0, sz.h * 2), sz);
    this._addButton("zoomin", "zoom-plus-mini.png", centered.add(0, sz.h * 3 + 5), sz);
    centered = this._addZoomBar(centered.add(0, sz.h * 4 + 5));
    this._addButton("zoomout", "zoom-minus-mini.png", centered, sz);
    return this.div;
}, _addZoomBar: function(centered) {
    var imgLocation = OpenLayers.Util.getImagesLocation();
    var id = this.id + "_" + this.map.id;
    var zoomsToEnd = this.map.getNumZoomLevels() - 1 - this.map.getZoom();
    var slider = OpenLayers.Util.createAlphaImageDiv(id, centered.add(-1, zoomsToEnd * this.zoomStopHeight), new OpenLayers.Size(20, 9), imgLocation + "slider.png", "absolute");
    this.slider = slider;
    this.sliderEvents = new OpenLayers.Events(this, slider, null, true, { includeXY: true });
    this.sliderEvents.on({ "mousedown": this.zoomBarDown, "mousemove": this.zoomBarDrag, "mouseup": this.zoomBarUp, "dblclick": this.doubleClick, "click": this.doubleClick });
    var sz = new OpenLayers.Size();
    sz.h = this.zoomStopHeight * this.map.getNumZoomLevels();
    sz.w = this.zoomStopWidth;
    var div = null;
    if (OpenLayers.Util.alphaHack()) {
        var id = this.id + "_" + this.map.id;
        div = OpenLayers.Util.createAlphaImageDiv(id, centered, new OpenLayers.Size(sz.w, this.zoomStopHeight), imgLocation + "zoombar.png", "absolute", null, "crop");
        div.style.height = sz.h + "px";
    } else {
        div = OpenLayers.Util.createDiv('OpenLayers_Control_PanZoomBar_Zoombar' + this.map.id, centered, sz, imgLocation + "zoombar.png");
    }
    this.zoombarDiv = div;
    this.divEvents = new OpenLayers.Events(this, div, null, true, { includeXY: true });
    this.divEvents.on({ "mousedown": this.divClick, "mousemove": this.passEventToSlider, "dblclick": this.doubleClick, "click": this.doubleClick });
    this.div.appendChild(div);
    this.startTop = parseInt(div.style.top);
    this.div.appendChild(slider);
    this.map.events.register("zoomend", this, this.moveZoomBar);
    centered = centered.add(0, this.zoomStopHeight * this.map.getNumZoomLevels());
    return centered;
}, passEventToSlider: function(evt) {
    this.sliderEvents.handleBrowserEvent(evt);
}, divClick: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    var y = evt.xy.y;
    var top = OpenLayers.Util.pagePosition(evt.object)[1];
    var levels = (y - top) / this.zoomStopHeight;
    if (!this.map.fractionalZoom) {
        levels = Math.floor(levels);
    }
    var zoom = (this.map.getNumZoomLevels() - 1) - levels;
    zoom = Math.min(Math.max(zoom, 0), this.map.getNumZoomLevels() - 1);
    this.map.zoomTo(zoom);
    OpenLayers.Event.stop(evt);
}, zoomBarDown: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    this.map.events.on({ "mousemove": this.passEventToSlider, "mouseup": this.passEventToSlider, scope: this });
    this.mouseDragStart = evt.xy.clone();
    this.zoomStart = evt.xy.clone();
    this.div.style.cursor = "move";
    this.zoombarDiv.offsets = null;
    OpenLayers.Event.stop(evt);
}, zoomBarDrag: function(evt) {
    if (this.mouseDragStart != null) {
        var deltaY = this.mouseDragStart.y - evt.xy.y;
        var offsets = OpenLayers.Util.pagePosition(this.zoombarDiv);
        if ((evt.clientY - offsets[1]) > 0 && (evt.clientY - offsets[1]) < parseInt(this.zoombarDiv.style.height) - 2) {
            var newTop = parseInt(this.slider.style.top) - deltaY;
            this.slider.style.top = newTop + "px";
        }
        this.mouseDragStart = evt.xy.clone();
        OpenLayers.Event.stop(evt);
    } 
}, zoomBarUp: function(evt) {
    if (!OpenLayers.Event.isLeftClick(evt)) {
        return;
    }
    if (this.zoomStart) {
        this.div.style.cursor = "";
        this.map.events.un({ "mouseup": this.passEventToSlider, "mousemove": this.passEventToSlider, scope: this });
        var deltaY = this.zoomStart.y - evt.xy.y;
        var zoomLevel = this.map.zoom;
        if (this.map.fractionalZoom) {
            zoomLevel += deltaY / this.zoomStopHeight;
            zoomLevel = Math.min(Math.max(zoomLevel, 0), this.map.getNumZoomLevels() - 1);
        } else {
            zoomLevel += Math.round(deltaY / this.zoomStopHeight);
        }
        this.map.zoomTo(zoomLevel);
        this.moveZoomBar();
        this.mouseDragStart = null;
        OpenLayers.Event.stop(evt);
    } 
}, moveZoomBar: function() {
    var newTop = ((this.map.getNumZoomLevels() - 1) - this.map.getZoom()) * this.zoomStopHeight + this.startTop + 1;
    this.slider.style.top = newTop + "px";
}, CLASS_NAME: "OpenLayers.Control.PanZoomBar"
});
OpenLayers.Control.Permalink = OpenLayers.Class(OpenLayers.Control, { argParserClass: OpenLayers.Control.ArgParser, element: null, base: '', displayProjection: null, initialize: function(element, base, options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.element = OpenLayers.Util.getElement(element);
    this.base = base || document.location.href;
}, destroy: function() {
    if (this.element.parentNode == this.div) {
        this.div.removeChild(this.element);
    }
    this.element = null;
    this.map.events.unregister('moveend', this, this.updateLink);
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, setMap: function(map) {
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
    for (var i = 0, len = this.map.controls.length;
i < len;
i++) {
        var control = this.map.controls[i];
        if (control.CLASS_NAME == this.argParserClass.CLASS_NAME) {
            if (control.displayProjection != this.displayProjection) {
                this.displayProjection = control.displayProjection;
            }
            break;
        } 
    }
    if (i == this.map.controls.length) {
        this.map.addControl(new this.argParserClass({ 'displayProjection': this.displayProjection }));
    } 
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    if (!this.element) {
        this.div.className = this.displayClass;
        this.element = document.createElement("a");
        this.element.innerHTML = OpenLayers.i18n("permalink");
        this.element.href = "";
        this.div.appendChild(this.element);
    }
    this.map.events.on({ 'moveend': this.updateLink, 'changelayer': this.updateLink, 'changebaselayer': this.updateLink, scope: this });
    this.updateLink();
    return this.div;
}, updateLink: function() {
    var href = this.base;
    if (href.indexOf('?') != -1) {
        href = href.substring(0, href.indexOf('?'));
    }
    href += '?' + OpenLayers.Util.getParameterString(this.createParams());
    this.element.href = href;
}, createParams: function(center, zoom, layers) {
    center = center || this.map.getCenter();
    var params = OpenLayers.Util.getParameters(this.base);
    if (center) {
        params.zoom = zoom || this.map.getZoom();
        var lat = center.lat;
        var lon = center.lon;
        if (this.displayProjection) {
            var mapPosition = OpenLayers.Projection.transform({ x: lon, y: lat }, this.map.getProjectionObject(), this.displayProjection);
            lon = mapPosition.x;
            lat = mapPosition.y;
        }
        params.lat = Math.round(lat * 100000) / 100000;
        params.lon = Math.round(lon * 100000) / 100000;
        layers = layers || this.map.layers;
        params.layers = '';
        for (var i = 0, len = layers.length;
i < len;
i++) {
            var layer = layers[i];
            if (layer.isBaseLayer) {
                params.layers += (layer == this.map.baseLayer) ? "B" : "0";
            } else {
                params.layers += (layer.getVisibility()) ? "T" : "F";
            } 
        } 
    }
    return params;
}, CLASS_NAME: "OpenLayers.Control.Permalink"
});
OpenLayers.Control.ZoomPanel = OpenLayers.Class(OpenLayers.Control.Panel, { initialize: function(options) {
    OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
    this.addControls([new OpenLayers.Control.ZoomIn(), new OpenLayers.Control.ZoomToMaxExtent(), new OpenLayers.Control.ZoomOut()]);
}, CLASS_NAME: "OpenLayers.Control.ZoomPanel"
});
OpenLayers.Format.JSON = OpenLayers.Class(OpenLayers.Format, { indent: "    ", space: " ", newline: "\n", level: 0, pretty: false, initialize: function(options) {
    OpenLayers.Format.prototype.initialize.apply(this, [options]);
}, read: function(json, filter) {
    try {
        if (/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            var object = eval('(' + json + ')');
            if (typeof filter === 'function') {
                function walk(k, v) {
                    if (v && typeof v === 'object') {
                        for (var i in v) {
                            if (v.hasOwnProperty(i)) {
                                v[i] = walk(i, v[i]);
                            } 
                        } 
                    }
                    return filter(k, v);
                }
                object = walk('', object);
            }
            return object;
        } 
    } catch (e) { }
    return null;
}, write: function(value, pretty) {
    this.pretty = !!pretty;
    var json = null;
    var type = typeof value;
    if (this.serialize[type]) {
        json = this.serialize[type].apply(this, [value]);
    }
    return json;
}, writeIndent: function() {
    var pieces = [];
    if (this.pretty) {
        for (var i = 0;
i < this.level;
++i) {
            pieces.push(this.indent);
        } 
    }
    return pieces.join('');
}, writeNewline: function() {
    return (this.pretty) ? this.newline : '';
}, writeSpace: function() {
    return (this.pretty) ? this.space : '';
}, serialize: { 'object': function(object) {
    if (object == null) {
        return "null";
    }
    if (object.constructor == Date) {
        return this.serialize.date.apply(this, [object]);
    }
    if (object.constructor == Array) {
        return this.serialize.array.apply(this, [object]);
    }
    var pieces = ['{'];
    this.level += 1;
    var key, keyJSON, valueJSON;
    var addComma = false;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            keyJSON = OpenLayers.Format.JSON.prototype.write.apply(this, [key, this.pretty]);
            valueJSON = OpenLayers.Format.JSON.prototype.write.apply(this, [object[key], this.pretty]);
            if (keyJSON != null && valueJSON != null) {
                if (addComma) {
                    pieces.push(',');
                }
                pieces.push(this.writeNewline(), this.writeIndent(), keyJSON, ':', this.writeSpace(), valueJSON);
                addComma = true;
            } 
        } 
    }
    this.level -= 1;
    pieces.push(this.writeNewline(), this.writeIndent(), '}');
    return pieces.join('');
}, 'array': function(array) {
    var json;
    var pieces = ['['];
    this.level += 1;
    for (var i = 0, len = array.length;
i < len;
++i) {
        json = OpenLayers.Format.JSON.prototype.write.apply(this, [array[i], this.pretty]);
        if (json != null) {
            if (i > 0) {
                pieces.push(',');
            }
            pieces.push(this.writeNewline(), this.writeIndent(), json);
        } 
    }
    this.level -= 1;
    pieces.push(this.writeNewline(), this.writeIndent(), ']');
    return pieces.join('');
}, 'string': function(string) {
    var m = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' };
    if (/["\\\x00-\x1f]/.test(string)) {
        return '"' + string.replace(/([\x00-\x1f\\"])/g, function(a, b) {
            var c = m[b];
            if (c) {
                return c;
            }
            c = b.charCodeAt();
            return '\\u00' +
Math.floor(c / 16).toString(16) +
(c % 16).toString(16);
        }) + '"';
    }
    return '"' + string + '"';
}, 'number': function(number) {
    return isFinite(number) ? String(number) : "null";
}, 'boolean': function(bool) {
    return String(bool);
}, 'date': function(date) {
    function format(number) {
        return (number < 10) ? '0' + number : number;
    }
    return '"' + date.getFullYear() + '-' +
format(date.getMonth() + 1) + '-' +
format(date.getDate()) + 'T' +
format(date.getHours()) + ':' +
format(date.getMinutes()) + ':' +
format(date.getSeconds()) + '"';
} 
}, CLASS_NAME: "OpenLayers.Format.JSON"
});
OpenLayers.Format.XML = OpenLayers.Class(OpenLayers.Format, { namespaces: null, namespaceAlias: null, defaultPrefix: null, readers: {}, writers: {}, xmldom: null, initialize: function(options) {
    if (window.ActiveXObject) {
        this.xmldom = new ActiveXObject("Microsoft.XMLDOM");
    }
    OpenLayers.Format.prototype.initialize.apply(this, [options]);
    this.namespaces = OpenLayers.Util.extend({}, this.namespaces);
    this.namespaceAlias = {};
    for (var alias in this.namespaces) {
        this.namespaceAlias[this.namespaces[alias]] = alias;
    } 
}, destroy: function() {
    this.xmldom = null;
    OpenLayers.Format.prototype.destroy.apply(this, arguments);
}, setNamespace: function(alias, uri) {
    this.namespaces[alias] = uri;
    this.namespaceAlias[uri] = alias;
}, read: function(text) {
    var index = text.indexOf('<');
    if (index > 0) {
        text = text.substring(index);
    }
    var node = OpenLayers.Util.Try(OpenLayers.Function.bind((function() {
        var xmldom;
        if (window.ActiveXObject && !this.xmldom) {
            xmldom = new ActiveXObject("Microsoft.XMLDOM");
        } else {
            xmldom = this.xmldom;
        }
        xmldom.loadXML(text);
        return xmldom;
    }), this), function() {
        return new DOMParser().parseFromString(text, 'text/xml');
    }, function() {
        var req = new XMLHttpRequest();
        req.open("GET", "data:" + "text/xml" + ";charset=utf-8," + encodeURIComponent(text), false);
        if (req.overrideMimeType) {
            req.overrideMimeType("text/xml");
        }
        req.send(null);
        return req.responseXML;
    });
    return node;
}, write: function(node) {
    var data;
    if (this.xmldom) {
        data = node.xml;
    } else {
        var serializer = new XMLSerializer();
        if (node.nodeType == 1) {
            var doc = document.implementation.createDocument("", "", null);
            if (doc.importNode) {
                node = doc.importNode(node, true);
            }
            doc.appendChild(node);
            data = serializer.serializeToString(doc);
        } else {
            data = serializer.serializeToString(node);
        } 
    }
    return data;
}, createElementNS: function(uri, name) {
    var element;
    if (this.xmldom) {
        if (typeof uri == "string") {
            element = this.xmldom.createNode(1, name, uri);
        } else {
            element = this.xmldom.createNode(1, name, "");
        } 
    } else {
        element = document.createElementNS(uri, name);
    }
    return element;
}, createTextNode: function(text) {
    var node;
    if (this.xmldom) {
        node = this.xmldom.createTextNode(text);
    } else {
        node = document.createTextNode(text);
    }
    return node;
}, getElementsByTagNameNS: function(node, uri, name) {
    var elements = [];
    if (node.getElementsByTagNameNS) {
        elements = node.getElementsByTagNameNS(uri, name);
    } else {
        var allNodes = node.getElementsByTagName("*");
        var potentialNode, fullName;
        for (var i = 0, len = allNodes.length;
i < len;
++i) {
            potentialNode = allNodes[i];
            fullName = (potentialNode.prefix) ? (potentialNode.prefix + ":" + name) : name;
            if ((name == "*") || (fullName == potentialNode.nodeName)) {
                if ((uri == "*") || (uri == potentialNode.namespaceURI)) {
                    elements.push(potentialNode);
                } 
            } 
        } 
    }
    return elements;
}, getAttributeNodeNS: function(node, uri, name) {
    var attributeNode = null;
    if (node.getAttributeNodeNS) {
        attributeNode = node.getAttributeNodeNS(uri, name);
    } else {
        var attributes = node.attributes;
        var potentialNode, fullName;
        for (var i = 0, len = attributes.length;
i < len;
++i) {
            potentialNode = attributes[i];
            if (potentialNode.namespaceURI == uri) {
                fullName = (potentialNode.prefix) ? (potentialNode.prefix + ":" + name) : name;
                if (fullName == potentialNode.nodeName) {
                    attributeNode = potentialNode;
                    break;
                } 
            } 
        } 
    }
    return attributeNode;
}, getAttributeNS: function(node, uri, name) {
    var attributeValue = "";
    if (node.getAttributeNS) {
        attributeValue = node.getAttributeNS(uri, name) || "";
    } else {
        var attributeNode = this.getAttributeNodeNS(node, uri, name);
        if (attributeNode) {
            attributeValue = attributeNode.nodeValue;
        } 
    }
    return attributeValue;
}, getChildValue: function(node, def) {
    var value = def || "";
    if (node) {
        var child = node.firstChild;
        if (child) {
            value = child.nodeValue || value;
        } 
    }
    return value;
}, concatChildValues: function(node, def) {
    var value = "";
    var child = node.firstChild;
    var childValue;
    while (child) {
        childValue = child.nodeValue;
        if (childValue) {
            value += childValue;
        }
        child = child.nextSibling;
    }
    if (value == "" && def != undefined) {
        value = def;
    }
    return value;
}, hasAttributeNS: function(node, uri, name) {
    var found = false;
    if (node.hasAttributeNS) {
        found = node.hasAttributeNS(uri, name);
    } else {
        found = !!this.getAttributeNodeNS(node, uri, name);
    }
    return found;
}, setAttributeNS: function(node, uri, name, value) {
    if (node.setAttributeNS) {
        node.setAttributeNS(uri, name, value);
    } else {
        if (this.xmldom) {
            if (uri) {
                var attribute = node.ownerDocument.createNode(2, name, uri);
                attribute.nodeValue = value;
                node.setAttributeNode(attribute);
            } else {
                node.setAttribute(name, value);
            } 
        } else {
            throw "setAttributeNS not implemented";
        } 
    } 
}, createElementNSPlus: function(name, options) {
    options = options || {};
    var loc = name.indexOf(":");
    var uri = options.uri || this.namespaces[options.prefix];
    if (!uri) {
        loc = name.indexOf(":");
        uri = this.namespaces[name.substring(0, loc)];
    }
    if (!uri) {
        uri = this.namespaces[this.defaultPrefix];
    }
    var node = this.createElementNS(uri, name);
    if (options.attributes) {
        this.setAttributes(node, options.attributes);
    }
    if (options.value) {
        node.appendChild(this.createTextNode(options.value));
    }
    return node;
}, setAttributes: function(node, obj) {
    var value, loc, alias, uri;
    for (var name in obj) {
        if (obj[name] != null && obj[name].toString) {
            value = obj[name].toString();
            uri = this.namespaces[name.substring(0, name.indexOf(":"))] || null;
            this.setAttributeNS(node, uri, name, value);
        } 
    } 
}, readNode: function(node, obj) {
    if (!obj) {
        obj = {};
    }
    var group = this.readers[this.namespaceAlias[node.namespaceURI]];
    if (group) {
        var local = node.localName || node.nodeName.split(":").pop();
        var reader = group[local] || group["*"];
        if (reader) {
            reader.apply(this, [node, obj]);
        } 
    }
    return obj;
}, readChildNodes: function(node, obj) {
    if (!obj) {
        obj = {};
    }
    var children = node.childNodes;
    var child;
    for (var i = 0, len = children.length;
i < len;
++i) {
        child = children[i];
        if (child.nodeType == 1) {
            this.readNode(child, obj);
        } 
    }
    return obj;
}, writeNode: function(name, obj, parent) {
    var prefix, local;
    var split = name.indexOf(":");
    if (split > 0) {
        prefix = name.substring(0, split);
        local = name.substring(split + 1);
    } else {
        if (parent) {
            prefix = this.namespaceAlias[parent.namespaceURI];
        } else {
            prefix = this.defaultPrefix;
        }
        local = name;
    }
    var child = this.writers[prefix][local].apply(this, [obj]);
    if (parent) {
        parent.appendChild(child);
    }
    return child;
}, CLASS_NAME: "OpenLayers.Format.XML"
});
OpenLayers.Handler = OpenLayers.Class({ id: null, control: null, map: null, keyMask: null, active: false, evt: null, initialize: function(control, callbacks, options) {
    OpenLayers.Util.extend(this, options);
    this.control = control;
    this.callbacks = callbacks;
    if (control.map) {
        this.setMap(control.map);
    }
    OpenLayers.Util.extend(this, options);
    this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
}, setMap: function(map) {
    this.map = map;
}, checkModifiers: function(evt) {
    if (this.keyMask == null) {
        return true;
    }
    var keyModifiers = (evt.shiftKey ? OpenLayers.Handler.MOD_SHIFT : 0) | (evt.ctrlKey ? OpenLayers.Handler.MOD_CTRL : 0) | (evt.altKey ? OpenLayers.Handler.MOD_ALT : 0);
    return (keyModifiers == this.keyMask);
}, activate: function() {
    if (this.active) {
        return false;
    }
    var events = OpenLayers.Events.prototype.BROWSER_EVENTS;
    for (var i = 0, len = events.length;
i < len;
i++) {
        if (this[events[i]]) {
            this.register(events[i], this[events[i]]);
        } 
    }
    this.active = true;
    return true;
}, deactivate: function() {
    if (!this.active) {
        return false;
    }
    var events = OpenLayers.Events.prototype.BROWSER_EVENTS;
    for (var i = 0, len = events.length;
i < len;
i++) {
        if (this[events[i]]) {
            this.unregister(events[i], this[events[i]]);
        } 
    }
    this.active = false;
    return true;
}, callback: function(name, args) {
    if (name && this.callbacks[name]) {
        this.callbacks[name].apply(this.control, args);
    } 
}, register: function(name, method) {
    this.map.events.registerPriority(name, this, method);
    this.map.events.registerPriority(name, this, this.setEvent);
}, unregister: function(name, method) {
    this.map.events.unregister(name, this, method);
    this.map.events.unregister(name, this, this.setEvent);
}, setEvent: function(evt) {
    this.evt = evt;
    return true;
}, destroy: function() {
    this.deactivate();
    this.control = this.map = null;
}, CLASS_NAME: "OpenLayers.Handler"
});
OpenLayers.Handler.MOD_NONE = 0;
OpenLayers.Handler.MOD_SHIFT = 1;
OpenLayers.Handler.MOD_CTRL = 2;
OpenLayers.Handler.MOD_ALT = 4;
OpenLayers.Map = OpenLayers.Class({ Z_INDEX_BASE: { BaseLayer: 100, Overlay: 325, Feature: 725, Popup: 750, Control: 1000 }, EVENT_TYPES: ["preaddlayer", "addlayer", "removelayer", "changelayer", "movestart", "move", "moveend", "zoomend", "popupopen", "popupclose", "addmarker", "removemarker", "clearmarkers", "mouseover", "mouseout", "mousemove", "dragstart", "drag", "dragend", "changebaselayer"], id: null, fractionalZoom: false, events: null, div: null, dragging: false, size: null, viewPortDiv: null, layerContainerOrigin: null, layerContainerDiv: null, layers: null, controls: null, popups: null, baseLayer: null, center: null, resolution: null, zoom: 0, panRatio: 1.5, viewRequestID: 0, tileSize: null, projection: "EPSG:4326", units: 'degrees', resolutions: null, maxResolution: 1.40625, minResolution: null, maxScale: null, minScale: null, maxExtent: null, minExtent: null, restrictedExtent: null, numZoomLevels: 16, theme: null, displayProjection: null, fallThrough: true, panTween: null, eventListeners: null, panMethod: OpenLayers.Easing.Expo.easeOut, paddingForPopups: null, initialize: function(div, options) {
    this.tileSize = new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH, OpenLayers.Map.TILE_HEIGHT);
    this.maxExtent = new OpenLayers.Bounds(-180, -90, 180, 90);
    this.paddingForPopups = new OpenLayers.Bounds(15, 15, 15, 15);
    this.theme = OpenLayers._getScriptLocation() + 'theme/default/style.css';
    OpenLayers.Util.extend(this, options);
    this.id = OpenLayers.Util.createUniqueID("OpenLayers.Map_");
    this.div = OpenLayers.Util.getElement(div);
    OpenLayers.Element.addClass(this.div, 'olMap');
    var id = this.div.id + "_OpenLayers_ViewPort";
    this.viewPortDiv = OpenLayers.Util.createDiv(id, null, null, null, "relative", null, "hidden");
    this.viewPortDiv.style.width = "100%";
    this.viewPortDiv.style.height = "100%";
    this.viewPortDiv.className = "olMapViewport";
    this.div.appendChild(this.viewPortDiv);
    id = this.div.id + "_OpenLayers_Container";
    this.layerContainerDiv = OpenLayers.Util.createDiv(id);
    this.layerContainerDiv.style.zIndex = this.Z_INDEX_BASE['Popup'] - 1;
    this.viewPortDiv.appendChild(this.layerContainerDiv);
    this.events = new OpenLayers.Events(this, this.div, this.EVENT_TYPES, this.fallThrough, { includeXY: true });
    this.updateSize();
    if (this.eventListeners instanceof Object) {
        this.events.on(this.eventListeners);
    }
    this.events.register("movestart", this, this.updateSize);
    if (OpenLayers.String.contains(navigator.appName, "Microsoft")) {
        this.events.register("resize", this, this.updateSize);
    } else {
        this.updateSizeDestroy = OpenLayers.Function.bind(this.updateSize, this);
        OpenLayers.Event.observe(window, 'resize', this.updateSizeDestroy);
    }
    if (this.theme) {
        var addNode = true;
        var nodes = document.getElementsByTagName('link');
        for (var i = 0, len = nodes.length;
i < len;
++i) {
            if (OpenLayers.Util.isEquivalentUrl(nodes.item(i).href, this.theme)) {
                addNode = false;
                break;
            } 
        }
        if (addNode) {
            var cssNode = document.createElement('link');
            cssNode.setAttribute('rel', 'stylesheet');
            cssNode.setAttribute('type', 'text/css');
            cssNode.setAttribute('href', this.theme);
            document.getElementsByTagName('head')[0].appendChild(cssNode);
        } 
    }
    this.layers = [];
    if (this.controls == null) {
        if (OpenLayers.Control != null) {
            this.controls = [new OpenLayers.Control.Navigation(), new OpenLayers.Control.PanZoom(), new OpenLayers.Control.ArgParser(), new OpenLayers.Control.Attribution()];
        } else {
            this.controls = [];
        } 
    }
    for (var i = 0, len = this.controls.length;
i < len;
i++) {
        this.addControlToMap(this.controls[i]);
    }
    this.popups = [];
    this.unloadDestroy = OpenLayers.Function.bind(this.destroy, this);
    OpenLayers.Event.observe(window, 'unload', this.unloadDestroy);
}, unloadDestroy: null, updateSizeDestroy: null, destroy: function() {
    if (!this.unloadDestroy) {
        return false;
    }
    OpenLayers.Event.stopObserving(window, 'unload', this.unloadDestroy);
    this.unloadDestroy = null;
    if (this.updateSizeDestroy) {
        OpenLayers.Event.stopObserving(window, 'resize', this.updateSizeDestroy);
    } else {
        this.events.unregister("resize", this, this.updateSize);
    }
    this.paddingForPopups = null;
    if (this.controls != null) {
        for (var i = this.controls.length - 1;
i >= 0;
--i) {
            this.controls[i].destroy();
        }
        this.controls = null;
    }
    if (this.layers != null) {
        for (var i = this.layers.length - 1;
i >= 0;
--i) {
            this.layers[i].destroy(false);
        }
        this.layers = null;
    }
    if (this.viewPortDiv) {
        this.div.removeChild(this.viewPortDiv);
    }
    this.viewPortDiv = null;
    if (this.eventListeners) {
        this.events.un(this.eventListeners);
        this.eventListeners = null;
    }
    this.events.destroy();
    this.events = null;
}, setOptions: function(options) {
    OpenLayers.Util.extend(this, options);
}, getTileSize: function() {
    return this.tileSize;
}, getBy: function(array, property, match) {
    var test = (typeof match.test == "function");
    var found = OpenLayers.Array.filter(this[array], function(item) {
        return item[property] == match || (test && match.test(item[property]));
    });
    return found;
}, getLayersBy: function(property, match) {
    return this.getBy("layers", property, match);
}, getLayersByName: function(match) {
    return this.getLayersBy("name", match);
}, getLayersByClass: function(match) {
    return this.getLayersBy("CLASS_NAME", match);
}, getControlsBy: function(property, match) {
    return this.getBy("controls", property, match);
}, getControlsByClass: function(match) {
    return this.getControlsBy("CLASS_NAME", match);
}, getLayer: function(id) {
    var foundLayer = null;
    for (var i = 0, len = this.layers.length;
i < len;
i++) {
        var layer = this.layers[i];
        if (layer.id == id) {
            foundLayer = layer;
            break;
        } 
    }
    return foundLayer;
}, setLayerZIndex: function(layer, zIdx) {
    layer.setZIndex(this.Z_INDEX_BASE[layer.isBaseLayer ? 'BaseLayer' : 'Overlay']
+ zIdx * 5);
}, resetLayersZIndex: function() {
    for (var i = 0, len = this.layers.length;
i < len;
i++) {
        var layer = this.layers[i];
        this.setLayerZIndex(layer, i);
    } 
}, addLayer: function(layer) {
    for (var i = 0, len = this.layers.length;
i < len;
i++) {
        if (this.layers[i] == layer) {
            var msg = OpenLayers.i18n('layerAlreadyAdded', { 'layerName': layer.name });
            OpenLayers.Console.warn(msg);
            return false;
        } 
    }
    this.events.triggerEvent("preaddlayer", { layer: layer });
    layer.div.className = "olLayerDiv";
    layer.div.style.overflow = "";
    this.setLayerZIndex(layer, this.layers.length);
    if (layer.isFixed) {
        this.viewPortDiv.appendChild(layer.div);
    } else {
        this.layerContainerDiv.appendChild(layer.div);
    }
    this.layers.push(layer);
    layer.setMap(this);
    if (layer.isBaseLayer) {
        if (this.baseLayer == null) {
            this.setBaseLayer(layer);
        } else {
            layer.setVisibility(false);
        } 
    } else {
        layer.redraw();
    }
    this.events.triggerEvent("addlayer", { layer: layer });
}, addLayers: function(layers) {
    for (var i = 0, len = layers.length;
i < len;
i++) {
        this.addLayer(layers[i]);
    } 
}, removeLayer: function(layer, setNewBaseLayer) {
    if (setNewBaseLayer == null) {
        setNewBaseLayer = true;
    }
    if (layer.isFixed) {
        this.viewPortDiv.removeChild(layer.div);
    } else {
        this.layerContainerDiv.removeChild(layer.div);
    }
    OpenLayers.Util.removeItem(this.layers, layer);
    layer.removeMap(this);
    layer.map = null;
    if (this.baseLayer == layer) {
        this.baseLayer = null;
        if (setNewBaseLayer) {
            for (var i = 0, len = this.layers.length;
i < len;
i++) {
                var iLayer = this.layers[i];
                if (iLayer.isBaseLayer) {
                    this.setBaseLayer(iLayer);
                    break;
                } 
            } 
        } 
    }
    this.resetLayersZIndex();
    this.events.triggerEvent("removelayer", { layer: layer });
}, getNumLayers: function() {
    return this.layers.length;
}, getLayerIndex: function(layer) {
    return OpenLayers.Util.indexOf(this.layers, layer);
}, setLayerIndex: function(layer, idx) {
    var base = this.getLayerIndex(layer);
    if (idx < 0) {
        idx = 0;
    } else if (idx > this.layers.length) {
        idx = this.layers.length;
    }
    if (base != idx) {
        this.layers.splice(base, 1);
        this.layers.splice(idx, 0, layer);
        for (var i = 0, len = this.layers.length;
i < len;
i++) {
            this.setLayerZIndex(this.layers[i], i);
        }
        this.events.triggerEvent("changelayer", { layer: layer, property: "order" });
    } 
}, raiseLayer: function(layer, delta) {
    var idx = this.getLayerIndex(layer) + delta;
    this.setLayerIndex(layer, idx);
}, setBaseLayer: function(newBaseLayer) {
    var oldExtent = null;
    if (this.baseLayer) {
        oldExtent = this.baseLayer.getExtent();
    }
    if (newBaseLayer != this.baseLayer) {
        if (OpenLayers.Util.indexOf(this.layers, newBaseLayer) != -1) {
            if (this.baseLayer != null) {
                this.baseLayer.setVisibility(false);
            }
            this.baseLayer = newBaseLayer;
            this.viewRequestID++;
            this.baseLayer.visibility = true;
            var center = this.getCenter();
            if (center != null) {
                var newCenter = (oldExtent) ? oldExtent.getCenterLonLat() : center;
                var newZoom = (oldExtent) ? this.getZoomForExtent(oldExtent, true) : this.getZoomForResolution(this.resolution, true);
                this.setCenter(newCenter, newZoom, false, true);
            }
            this.events.triggerEvent("changebaselayer", { layer: this.baseLayer });
        } 
    } 
}, addControl: function(control, px) {
    this.controls.push(control);
    this.addControlToMap(control, px);
}, addControlToMap: function(control, px) {
    control.outsideViewport = (control.div != null);
    if (this.displayProjection && !control.displayProjection) {
        control.displayProjection = this.displayProjection;
    }
    control.setMap(this);
    var div = control.draw(px);
    if (div) {
        if (!control.outsideViewport) {
            div.style.zIndex = this.Z_INDEX_BASE['Control'] +
this.controls.length;
            this.viewPortDiv.appendChild(div);
        } 
    } 
}, getControl: function(id) {
    var returnControl = null;
    for (var i = 0, len = this.controls.length;
i < len;
i++) {
        var control = this.controls[i];
        if (control.id == id) {
            returnControl = control;
            break;
        } 
    }
    return returnControl;
}, removeControl: function(control) {
    if ((control) && (control == this.getControl(control.id))) {
        if (control.div && (control.div.parentNode == this.viewPortDiv)) {
            this.viewPortDiv.removeChild(control.div);
        }
        OpenLayers.Util.removeItem(this.controls, control);
    } 
}, addPopup: function(popup, exclusive) {
    if (exclusive) {
        for (var i = this.popups.length - 1;
i >= 0;
--i) {
            this.removePopup(this.popups[i]);
        } 
    }
    popup.map = this;
    this.popups.push(popup);
    var popupDiv = popup.draw();
    if (popupDiv) {
        popupDiv.style.zIndex = this.Z_INDEX_BASE['Popup'] +
this.popups.length;
        this.layerContainerDiv.appendChild(popupDiv);
    } 
}, removePopup: function(popup) {
    OpenLayers.Util.removeItem(this.popups, popup);
    if (popup.div) {
        try {
            this.layerContainerDiv.removeChild(popup.div);
        }
        catch (e) { } 
    }
    popup.map = null;
}, getSize: function() {
    var size = null;
    if (this.size != null) {
        size = this.size.clone();
    }
    return size;
}, updateSize: function() {
    this.events.clearMouseCache();
    var newSize = this.getCurrentSize();
    var oldSize = this.getSize();
    if (oldSize == null) {
        this.size = oldSize = newSize;
    }
    if (!newSize.equals(oldSize)) {
        this.size = newSize;
        for (var i = 0, len = this.layers.length;
i < len;
i++) {
            this.layers[i].onMapResize();
        }
        if (this.baseLayer != null) {
            var center = new OpenLayers.Pixel(newSize.w / 2, newSize.h / 2);
            var centerLL = this.getLonLatFromViewPortPx(center);
            var zoom = this.getZoom();
            this.zoom = null;
            this.setCenter(this.getCenter(), zoom);
        } 
    } 
}, getCurrentSize: function() {
    var size = new OpenLayers.Size(this.div.clientWidth, this.div.clientHeight);
    if (size.w == 0 && size.h == 0 || isNaN(size.w) && isNaN(size.h)) {
        var dim = OpenLayers.Element.getDimensions(this.div);
        size.w = dim.width;
        size.h = dim.height;
    }
    if (size.w == 0 && size.h == 0 || isNaN(size.w) && isNaN(size.h)) {
        size.w = parseInt(this.div.style.width);
        size.h = parseInt(this.div.style.height);
    }
    return size;
}, calculateBounds: function(center, resolution) {
    var extent = null;
    if (center == null) {
        center = this.getCenter();
    }
    if (resolution == null) {
        resolution = this.getResolution();
    }
    if ((center != null) && (resolution != null)) {
        var size = this.getSize();
        var w_deg = size.w * resolution;
        var h_deg = size.h * resolution;
        extent = new OpenLayers.Bounds(center.lon - w_deg / 2, center.lat - h_deg / 2, center.lon + w_deg / 2, center.lat + h_deg / 2);
    }
    return extent;
}, getCenter: function() {
    return this.center;
}, getZoom: function() {
    return this.zoom;
}, pan: function(dx, dy, options) {
    options = OpenLayers.Util.applyDefaults(options, { animate: true, dragging: false });
    var centerPx = this.getViewPortPxFromLonLat(this.getCenter());
    var newCenterPx = centerPx.add(dx, dy);
    if (!options.dragging || !newCenterPx.equals(centerPx)) {
        var newCenterLonLat = this.getLonLatFromViewPortPx(newCenterPx);
        if (options.animate) {
            this.panTo(newCenterLonLat);
        } else {
            this.setCenter(newCenterLonLat, null, options.dragging);
        } 
    } 
}, panTo: function(lonlat) {
    if (this.panMethod && this.getExtent().scale(this.panRatio).containsLonLat(lonlat)) {
        if (!this.panTween) {
            this.panTween = new OpenLayers.Tween(this.panMethod);
        }
        var center = this.getCenter();
        if (lonlat.lon == center.lon && lonlat.lat == center.lat) {
            return;
        }
        var from = { lon: center.lon, lat: center.lat };
        var to = { lon: lonlat.lon, lat: lonlat.lat };
        this.panTween.start(from, to, 50, { callbacks: { start: OpenLayers.Function.bind(function(lonlat) {
            this.events.triggerEvent("movestart");
        }, this), eachStep: OpenLayers.Function.bind(function(lonlat) {
            lonlat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
            this.moveTo(lonlat, this.zoom, { 'dragging': true, 'noEvent': true });
        }, this), done: OpenLayers.Function.bind(function(lonlat) {
            lonlat = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
            this.moveTo(lonlat, this.zoom, { 'noEvent': true });
            this.events.triggerEvent("moveend");
        }, this)}
        });
    } else {
        this.setCenter(lonlat);
    } 
}, setCenter: function(lonlat, zoom, dragging, forceZoomChange) {
    this.moveTo(lonlat, zoom, { 'dragging': dragging, 'forceZoomChange': forceZoomChange, 'caller': 'setCenter' });
}, moveTo: function(lonlat, zoom, options) {
    if (!options) {
        options = {};
    }
    var dragging = options.dragging;
    var forceZoomChange = options.forceZoomChange;
    var noEvent = options.noEvent;
    if (this.panTween && options.caller == "setCenter") {
        this.panTween.stop();
    }
    if (!this.center && !this.isValidLonLat(lonlat)) {
        lonlat = this.maxExtent.getCenterLonLat();
    }
    if (this.restrictedExtent != null) {
        if (lonlat == null) {
            lonlat = this.getCenter();
        }
        if (zoom == null) {
            zoom = this.getZoom();
        }
        var resolution = this.getResolutionForZoom(zoom);
        var extent = this.calculateBounds(lonlat, resolution);
        if (!this.restrictedExtent.containsBounds(extent)) {
            var maxCenter = this.restrictedExtent.getCenterLonLat();
            if (extent.getWidth() > this.restrictedExtent.getWidth()) {
                lonlat = new OpenLayers.LonLat(maxCenter.lon, lonlat.lat);
            } else if (extent.left < this.restrictedExtent.left) {
                lonlat = lonlat.add(this.restrictedExtent.left -
extent.left, 0);
            } else if (extent.right > this.restrictedExtent.right) {
                lonlat = lonlat.add(this.restrictedExtent.right -
extent.right, 0);
            }
            if (extent.getHeight() > this.restrictedExtent.getHeight()) {
                lonlat = new OpenLayers.LonLat(lonlat.lon, maxCenter.lat);
            } else if (extent.bottom < this.restrictedExtent.bottom) {
                lonlat = lonlat.add(0, this.restrictedExtent.bottom -
extent.bottom);
            }
            else if (extent.top > this.restrictedExtent.top) {
                lonlat = lonlat.add(0, this.restrictedExtent.top -
extent.top);
            } 
        } 
    }
    var zoomChanged = forceZoomChange || ((this.isValidZoomLevel(zoom)) && (zoom != this.getZoom()));
    var centerChanged = (this.isValidLonLat(lonlat)) && (!lonlat.equals(this.center));
    if (zoomChanged || centerChanged || !dragging) {
        if (!this.dragging && !noEvent) {
            this.events.triggerEvent("movestart");
        }
        if (centerChanged) {
            if ((!zoomChanged) && (this.center)) {
                this.centerLayerContainer(lonlat);
            }
            this.center = lonlat.clone();
        }
        if ((zoomChanged) || (this.layerContainerOrigin == null)) {
            this.layerContainerOrigin = this.center.clone();
            this.layerContainerDiv.style.left = "0px";
            this.layerContainerDiv.style.top = "0px";
        }
        if (zoomChanged) {
            this.zoom = zoom;
            this.resolution = this.getResolutionForZoom(zoom);
            this.viewRequestID++;
        }
        var bounds = this.getExtent();
        this.baseLayer.moveTo(bounds, zoomChanged, dragging);
        bounds = this.baseLayer.getExtent();
        for (var i = 0, len = this.layers.length;
i < len;
i++) {
            var layer = this.layers[i];
            if (!layer.isBaseLayer) {
                var inRange = layer.calculateInRange();
                if (layer.inRange != inRange) {
                    layer.inRange = inRange;
                    if (!inRange) {
                        layer.display(false);
                    }
                    this.events.triggerEvent("changelayer", { layer: layer, property: "visibility" });
                }
                if (inRange && layer.visibility) {
                    layer.moveTo(bounds, zoomChanged, dragging);
                    layer.events.triggerEvent("moveend", { "zoomChanged": zoomChanged });
                } 
            } 
        }
        if (zoomChanged) {
            for (var i = 0, len = this.popups.length;
i < len;
i++) {
                this.popups[i].updatePosition();
            } 
        }
        this.events.triggerEvent("move");
        if (zoomChanged) {
            this.events.triggerEvent("zoomend");
        } 
    }
    if (!dragging && !noEvent) {
        this.events.triggerEvent("moveend");
    }
    this.dragging = !!dragging;
}, centerLayerContainer: function(lonlat) {
    var originPx = this.getViewPortPxFromLonLat(this.layerContainerOrigin);
    var newPx = this.getViewPortPxFromLonLat(lonlat);
    if ((originPx != null) && (newPx != null)) {
        this.layerContainerDiv.style.left = Math.round(originPx.x - newPx.x) + "px";
        this.layerContainerDiv.style.top = Math.round(originPx.y - newPx.y) + "px";
    } 
}, isValidZoomLevel: function(zoomLevel) {
    return ((zoomLevel != null) && (zoomLevel >= 0) && (zoomLevel < this.getNumZoomLevels()));
}, isValidLonLat: function(lonlat) {
    var valid = false;
    if (lonlat != null) {
        var maxExtent = this.getMaxExtent();
        valid = maxExtent.containsLonLat(lonlat);
    }
    return valid;
}, getProjection: function() {
    var projection = this.getProjectionObject();
    return projection ? projection.getCode() : null;
}, getProjectionObject: function() {
    var projection = null;
    if (this.baseLayer != null) {
        projection = this.baseLayer.projection;
    }
    return projection;
}, getMaxResolution: function() {
    var maxResolution = null;
    if (this.baseLayer != null) {
        maxResolution = this.baseLayer.maxResolution;
    }
    return maxResolution;
}, getMaxExtent: function(options) {
    var maxExtent = null;
    if (options && options.restricted && this.restrictedExtent) {
        maxExtent = this.restrictedExtent;
    } else if (this.baseLayer != null) {
        maxExtent = this.baseLayer.maxExtent;
    }
    return maxExtent;
}, getNumZoomLevels: function() {
    var numZoomLevels = null;
    if (this.baseLayer != null) {
        numZoomLevels = this.baseLayer.numZoomLevels;
    }
    return numZoomLevels;
}, getExtent: function() {
    var extent = null;
    if (this.baseLayer != null) {
        extent = this.baseLayer.getExtent();
    }
    return extent;
}, getResolution: function() {
    var resolution = null;
    if (this.baseLayer != null) {
        resolution = this.baseLayer.getResolution();
    }
    return resolution;
}, getUnits: function() {
    var units = null;
    if (this.baseLayer != null) {
        units = this.baseLayer.units;
    }
    return units;
}, getScale: function() {
    var scale = null;
    if (this.baseLayer != null) {
        var res = this.getResolution();
        var units = this.baseLayer.units;
        scale = OpenLayers.Util.getScaleFromResolution(res, units);
    }
    return scale;
}, getZoomForExtent: function(bounds, closest) {
    var zoom = null;
    if (this.baseLayer != null) {
        zoom = this.baseLayer.getZoomForExtent(bounds, closest);
    }
    return zoom;
}, getResolutionForZoom: function(zoom) {
    var resolution = null;
    if (this.baseLayer) {
        resolution = this.baseLayer.getResolutionForZoom(zoom);
    }
    return resolution;
}, getZoomForResolution: function(resolution, closest) {
    var zoom = null;
    if (this.baseLayer != null) {
        zoom = this.baseLayer.getZoomForResolution(resolution, closest);
    }
    return zoom;
}, zoomTo: function(zoom) {
    if (this.isValidZoomLevel(zoom)) {
        this.setCenter(null, zoom);
    } 
}, zoomIn: function() {
    this.zoomTo(this.getZoom() + 1);
}, zoomOut: function() {
    this.zoomTo(this.getZoom() - 1);
}, zoomToExtent: function(bounds, closest) {
    var center = bounds.getCenterLonLat();
    if (this.baseLayer.wrapDateLine) {
        var maxExtent = this.getMaxExtent();
        bounds = bounds.clone();
        while (bounds.right < bounds.left) {
            bounds.right += maxExtent.getWidth();
        }
        center = bounds.getCenterLonLat().wrapDateLine(maxExtent);
    }
    this.setCenter(center, this.getZoomForExtent(bounds, closest));
}, zoomToMaxExtent: function(options) {
    var restricted = (options) ? options.restricted : true;
    var maxExtent = this.getMaxExtent({ 'restricted': restricted });
    this.zoomToExtent(maxExtent);
}, zoomToScale: function(scale, closest) {
    var res = OpenLayers.Util.getResolutionFromScale(scale, this.baseLayer.units);
    var size = this.getSize();
    var w_deg = size.w * res;
    var h_deg = size.h * res;
    var center = this.getCenter();
    var extent = new OpenLayers.Bounds(center.lon - w_deg / 2, center.lat - h_deg / 2, center.lon + w_deg / 2, center.lat + h_deg / 2);
    this.zoomToExtent(extent, closest);
}, getLonLatFromViewPortPx: function(viewPortPx) {
    var lonlat = null;
    if (this.baseLayer != null) {
        lonlat = this.baseLayer.getLonLatFromViewPortPx(viewPortPx);
    }
    return lonlat;
}, getViewPortPxFromLonLat: function(lonlat) {
    var px = null;
    if (this.baseLayer != null) {
        px = this.baseLayer.getViewPortPxFromLonLat(lonlat);
    }
    return px;
}, getLonLatFromPixel: function(px) {
    return this.getLonLatFromViewPortPx(px);
}, getPixelFromLonLat: function(lonlat) {
    var px = this.getViewPortPxFromLonLat(lonlat);
    px.x = Math.round(px.x);
    px.y = Math.round(px.y);
    return px;
}, getViewPortPxFromLayerPx: function(layerPx) {
    var viewPortPx = null;
    if (layerPx != null) {
        var dX = parseInt(this.layerContainerDiv.style.left);
        var dY = parseInt(this.layerContainerDiv.style.top);
        viewPortPx = layerPx.add(dX, dY);
    }
    return viewPortPx;
}, getLayerPxFromViewPortPx: function(viewPortPx) {
    var layerPx = null;
    if (viewPortPx != null) {
        var dX = -parseInt(this.layerContainerDiv.style.left);
        var dY = -parseInt(this.layerContainerDiv.style.top);
        layerPx = viewPortPx.add(dX, dY);
        if (isNaN(layerPx.x) || isNaN(layerPx.y)) {
            layerPx = null;
        } 
    }
    return layerPx;
}, getLonLatFromLayerPx: function(px) {
    px = this.getViewPortPxFromLayerPx(px);
    return this.getLonLatFromViewPortPx(px);
}, getLayerPxFromLonLat: function(lonlat) {
    var px = this.getPixelFromLonLat(lonlat);
    return this.getLayerPxFromViewPortPx(px);
}, CLASS_NAME: "OpenLayers.Map"
});
OpenLayers.Map.TILE_WIDTH = 256;
OpenLayers.Map.TILE_HEIGHT = 256;
OpenLayers.Marker = OpenLayers.Class({ icon: null, lonlat: null, events: null, map: null, initialize: function(lonlat, icon) {
    this.lonlat = lonlat;
    var newIcon = (icon) ? icon : OpenLayers.Marker.defaultIcon();
    if (this.icon == null) {
        this.icon = newIcon;
    } else {
        this.icon.url = newIcon.url;
        this.icon.size = newIcon.size;
        this.icon.offset = newIcon.offset;
        this.icon.calculateOffset = newIcon.calculateOffset;
    }
    this.events = new OpenLayers.Events(this, this.icon.imageDiv, null);
}, destroy: function() {
    this.map = null;
    this.events.destroy();
    this.events = null;
    if (this.icon != null) {
        this.icon.destroy();
        this.icon = null;
    } 
}, draw: function(px) {
    return this.icon.draw(px);
}, moveTo: function(px) {
    if ((px != null) && (this.icon != null)) {
        this.icon.moveTo(px);
    }
    this.lonlat = this.map.getLonLatFromLayerPx(px);
}, onScreen: function() {
    var onScreen = false;
    if (this.map) {
        var screenBounds = this.map.getExtent();
        onScreen = screenBounds.containsLonLat(this.lonlat);
    }
    return onScreen;
}, inflate: function(inflate) {
    if (this.icon) {
        var newSize = new OpenLayers.Size(this.icon.size.w * inflate, this.icon.size.h * inflate);
        this.icon.setSize(newSize);
    } 
}, setOpacity: function(opacity) {
    this.icon.setOpacity(opacity);
}, setUrl: function(url) {
    this.icon.setUrl(url);
}, display: function(display) {
    this.icon.display(display);
}, CLASS_NAME: "OpenLayers.Marker"
});
OpenLayers.Marker.defaultIcon = function() {
    var url = OpenLayers.Util.getImagesLocation() + "marker.png";
    var size = new OpenLayers.Size(21, 25);
    var calculateOffset = function(size) {
        return new OpenLayers.Pixel(-(size.w / 2), -size.h);
    };
    return new OpenLayers.Icon(url, size, null, calculateOffset);
};
OpenLayers.Popup.AnchoredBubble = OpenLayers.Class(OpenLayers.Popup.Anchored, { rounded: false, initialize: function(id, lonlat, contentSize, contentHTML, anchor, closeBox, closeBoxCallback) {
    this.padding = new OpenLayers.Bounds(0, OpenLayers.Popup.AnchoredBubble.CORNER_SIZE, 0, OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);
    OpenLayers.Popup.Anchored.prototype.initialize.apply(this, arguments);
}, draw: function(px) {
    OpenLayers.Popup.Anchored.prototype.draw.apply(this, arguments);
    this.setContentHTML();
    this.setBackgroundColor();
    this.setOpacity();
    return this.div;
}, updateRelativePosition: function() {
    this.setRicoCorners();
}, setSize: function(contentSize) {
    OpenLayers.Popup.Anchored.prototype.setSize.apply(this, arguments);
    this.setRicoCorners();
}, setBackgroundColor: function(color) {
    if (color != undefined) {
        this.backgroundColor = color;
    }
    if (this.div != null) {
        if (this.contentDiv != null) {
            this.div.style.background = "transparent";
            OpenLayers.Rico.Corner.changeColor(this.groupDiv, this.backgroundColor);
        } 
    } 
}, setOpacity: function(opacity) {
    OpenLayers.Popup.Anchored.prototype.setOpacity.call(this, opacity);
    if (this.div != null) {
        if (this.groupDiv != null) {
            OpenLayers.Rico.Corner.changeOpacity(this.groupDiv, this.opacity);
        } 
    } 
}, setBorder: function(border) {
    this.border = 0;
}, setRicoCorners: function() {
    var corners = this.getCornersToRound(this.relativePosition);
    var options = { corners: corners, color: this.backgroundColor, bgColor: "transparent", blend: false };
    if (!this.rounded) {
        OpenLayers.Rico.Corner.round(this.div, options);
        this.rounded = true;
    } else {
        OpenLayers.Rico.Corner.reRound(this.groupDiv, options);
        this.setBackgroundColor();
        this.setOpacity();
    } 
}, getCornersToRound: function() {
    var corners = ['tl', 'tr', 'bl', 'br'];
    var corner = OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);
    OpenLayers.Util.removeItem(corners, corner);
    return corners.join(" ");
}, CLASS_NAME: "OpenLayers.Popup.AnchoredBubble"
});
OpenLayers.Popup.AnchoredBubble.CORNER_SIZE = 5;
OpenLayers.Popup.Framed = OpenLayers.Class(OpenLayers.Popup.Anchored, { imageSrc: null, imageSize: null, isAlphaImage: false, positionBlocks: null, blocks: null, fixedRelativePosition: false, initialize: function(id, lonlat, contentSize, contentHTML, anchor, closeBox, closeBoxCallback) {
    OpenLayers.Popup.Anchored.prototype.initialize.apply(this, arguments);
    if (this.fixedRelativePosition) {
        this.updateRelativePosition();
        this.calculateRelativePosition = function(px) {
            return this.relativePosition;
        };
    }
    this.contentDiv.style.position = "absolute";
    this.contentDiv.style.zIndex = 1;
    if (closeBox) {
        this.closeDiv.style.zIndex = 1;
    }
    this.groupDiv.style.position = "absolute";
    this.groupDiv.style.top = "0px";
    this.groupDiv.style.left = "0px";
    this.groupDiv.style.height = "100%";
    this.groupDiv.style.width = "100%";
}, destroy: function() {
    this.imageSrc = null;
    this.imageSize = null;
    this.isAlphaImage = null;
    this.fixedRelativePosition = false;
    this.positionBlocks = null;
    for (var i = 0;
i < this.blocks.length;
i++) {
        var block = this.blocks[i];
        if (block.image) {
            block.div.removeChild(block.image);
        }
        block.image = null;
        if (block.div) {
            this.groupDiv.removeChild(block.div);
        }
        block.div = null;
    }
    this.blocks = null;
    OpenLayers.Popup.Anchored.prototype.destroy.apply(this, arguments);
}, setBackgroundColor: function(color) { }, setBorder: function() { }, setOpacity: function(opacity) { }, setSize: function(contentSize) {
    OpenLayers.Popup.Anchored.prototype.setSize.apply(this, arguments);
    this.updateBlocks();
}, updateRelativePosition: function() {
    this.padding = this.positionBlocks[this.relativePosition].padding;
    if (this.closeDiv) {
        var contentDivPadding = this.getContentDivPadding();
        this.closeDiv.style.right = contentDivPadding.right +
this.padding.right + "px";
        this.closeDiv.style.top = contentDivPadding.top +
this.padding.top + "px";
    }
    this.updateBlocks();
}, calculateNewPx: function(px) {
    var newPx = OpenLayers.Popup.Anchored.prototype.calculateNewPx.apply(this, arguments);
    newPx = newPx.offset(this.positionBlocks[this.relativePosition].offset);
    return newPx;
}, createBlocks: function() {
    this.blocks = [];
    var firstPosition = null;
    for (var key in this.positionBlocks) {
        firstPosition = key;
        break;
    }
    var position = this.positionBlocks[firstPosition];
    for (var i = 0;
i < position.blocks.length;
i++) {
        var block = {};
        this.blocks.push(block);
        var divId = this.id + '_FrameDecorationDiv_' + i;
        block.div = OpenLayers.Util.createDiv(divId, null, null, null, "absolute", null, "hidden", null);
        var imgId = this.id + '_FrameDecorationImg_' + i;
        var imageCreator = (this.isAlphaImage) ? OpenLayers.Util.createAlphaImageDiv : OpenLayers.Util.createImage;
        block.image = imageCreator(imgId, null, this.imageSize, this.imageSrc, "absolute", null, null, null);
        block.div.appendChild(block.image);
        this.groupDiv.appendChild(block.div);
    } 
}, updateBlocks: function() {
    if (!this.blocks) {
        this.createBlocks();
    }
    if (this.size && this.relativePosition) {
        var position = this.positionBlocks[this.relativePosition];
        for (var i = 0;
i < position.blocks.length;
i++) {
            var positionBlock = position.blocks[i];
            var block = this.blocks[i];
            var l = positionBlock.anchor.left;
            var b = positionBlock.anchor.bottom;
            var r = positionBlock.anchor.right;
            var t = positionBlock.anchor.top;
            var w = (isNaN(positionBlock.size.w)) ? this.size.w - (r + l) : positionBlock.size.w;
            var h = (isNaN(positionBlock.size.h)) ? this.size.h - (b + t) : positionBlock.size.h;
            block.div.style.width = w + 'px';
            block.div.style.height = h + 'px';
            block.div.style.left = (l != null) ? l + 'px' : '';
            block.div.style.bottom = (b != null) ? b + 'px' : '';
            block.div.style.right = (r != null) ? r + 'px' : '';
            block.div.style.top = (t != null) ? t + 'px' : '';
            block.image.style.left = positionBlock.position.x + 'px';
            block.image.style.top = positionBlock.position.y + 'px';
        }
        this.contentDiv.style.left = this.padding.left + "px";
        this.contentDiv.style.top = this.padding.top + "px";
    } 
}, CLASS_NAME: "OpenLayers.Popup.Framed"
});
OpenLayers.Renderer.SVG = OpenLayers.Class(OpenLayers.Renderer.Elements, { xmlns: "http://www.w3.org/2000/svg", xlinkns: "http://www.w3.org/1999/xlink", MAX_PIXEL: 15000, translationParameters: null, symbolSize: {}, initialize: function(containerID) {
    if (!this.supported()) {
        return;
    }
    OpenLayers.Renderer.Elements.prototype.initialize.apply(this, arguments);
    this.translationParameters = { x: 0, y: 0 };
}, destroy: function() {
    OpenLayers.Renderer.Elements.prototype.destroy.apply(this, arguments);
}, supported: function() {
    var svgFeature = "http://www.w3.org/TR/SVG11/feature#";
    return (document.implementation && (document.implementation.hasFeature("org.w3c.svg", "1.0") || document.implementation.hasFeature(svgFeature + "SVG", "1.1") || document.implementation.hasFeature(svgFeature + "BasicStructure", "1.1")));
}, inValidRange: function(x, y, xyOnly) {
    var left = x + (xyOnly ? 0 : this.translationParameters.x);
    var top = y + (xyOnly ? 0 : this.translationParameters.y);
    return (left >= -this.MAX_PIXEL && left <= this.MAX_PIXEL && top >= -this.MAX_PIXEL && top <= this.MAX_PIXEL);
}, setExtent: function(extent, resolutionChanged) {
    OpenLayers.Renderer.Elements.prototype.setExtent.apply(this, arguments);
    var resolution = this.getResolution();
    var left = -extent.left / resolution;
    var top = extent.top / resolution;
    if (resolutionChanged) {
        this.left = left;
        this.top = top;
        var extentString = "0 0 " + this.size.w + " " + this.size.h;
        this.rendererRoot.setAttributeNS(null, "viewBox", extentString);
        this.translate(0, 0);
        return true;
    } else {
        var inRange = this.translate(left - this.left, top - this.top);
        if (!inRange) {
            this.setExtent(extent, true);
        }
        return inRange;
    } 
}, translate: function(x, y) {
    if (!this.inValidRange(x, y, true)) {
        return false;
    } else {
        var transformString = "";
        if (x || y) {
            transformString = "translate(" + x + "," + y + ")";
        }
        this.root.setAttributeNS(null, "transform", transformString);
        this.translationParameters = { x: x, y: y };
        return true;
    } 
}, setSize: function(size) {
    OpenLayers.Renderer.prototype.setSize.apply(this, arguments);
    this.rendererRoot.setAttributeNS(null, "width", this.size.w);
    this.rendererRoot.setAttributeNS(null, "height", this.size.h);
}, getNodeType: function(geometry, style) {
    var nodeType = null;
    switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point": if (style.externalGraphic) {
                nodeType = "image";
            } else if (this.isComplexSymbol(style.graphicName)) {
                nodeType = "use";
            } else {
                nodeType = "circle";
            }
            break;
        case "OpenLayers.Geometry.Rectangle": nodeType = "rect";
            break;
        case "OpenLayers.Geometry.LineString": nodeType = "polyline";
            break;
        case "OpenLayers.Geometry.LinearRing": nodeType = "polygon";
            break;
        case "OpenLayers.Geometry.Polygon": case "OpenLayers.Geometry.Curve": case "OpenLayers.Geometry.Surface": nodeType = "path";
            break;
        default: break;
    }
    return nodeType;
}, setStyle: function(node, style, options) {
    style = style || node._style;
    options = options || node._options;
    var r = parseFloat(node.getAttributeNS(null, "r"));
    var widthFactor = 1;
    var pos;
    if (node._geometryClass == "OpenLayers.Geometry.Point" && r) {
        if (style.externalGraphic) {
            pos = this.getPosition(node);
            if (style.graphicWidth && style.graphicHeight) {
                node.setAttributeNS(null, "preserveAspectRatio", "none");
            }
            var width = style.graphicWidth || style.graphicHeight;
            var height = style.graphicHeight || style.graphicWidth;
            width = width ? width : style.pointRadius * 2;
            height = height ? height : style.pointRadius * 2;
            var xOffset = (style.graphicXOffset != undefined) ? style.graphicXOffset : -(0.5 * width);
            var yOffset = (style.graphicYOffset != undefined) ? style.graphicYOffset : -(0.5 * height);
            var opacity = style.graphicOpacity || style.fillOpacity;
            node.setAttributeNS(null, "x", (pos.x + xOffset).toFixed());
            node.setAttributeNS(null, "y", (pos.y + yOffset).toFixed());
            node.setAttributeNS(null, "width", width);
            node.setAttributeNS(null, "height", height);
            node.setAttributeNS(this.xlinkns, "href", style.externalGraphic);
            node.setAttributeNS(null, "style", "opacity: " + opacity);
        } else if (this.isComplexSymbol(style.graphicName)) {
            var offset = style.pointRadius * 3;
            var size = offset * 2;
            var id = this.importSymbol(style.graphicName);
            var href = "#" + id;
            pos = this.getPosition(node);
            widthFactor = this.symbolSize[id] / size;
            if (node.getAttributeNS(this.xlinkns, "href") != href) {
                node.setAttributeNS(this.xlinkns, "href", href);
            } else if (size != parseFloat(node.getAttributeNS(null, "width"))) {
                node.style.visibility = "hidden";
                this.container.scrollLeft = this.container.scrollLeft;
            }
            node.setAttributeNS(null, "width", size);
            node.setAttributeNS(null, "height", size);
            node.setAttributeNS(null, "x", pos.x - offset);
            node.setAttributeNS(null, "y", pos.y - offset);
            node.style.visibility = "";
        } else {
            node.setAttributeNS(null, "r", style.pointRadius);
        }
        if (typeof style.rotation != "undefined" && pos) {
            var rotation = OpenLayers.String.format("rotate(${0} ${1} ${2})", [style.rotation, pos.x, pos.y]);
            node.setAttributeNS(null, "transform", rotation);
        } 
    }
    if (options.isFilled) {
        node.setAttributeNS(null, "fill", style.fillColor);
        node.setAttributeNS(null, "fill-opacity", style.fillOpacity);
    } else {
        node.setAttributeNS(null, "fill", "none");
    }
    if (options.isStroked) {
        node.setAttributeNS(null, "stroke", style.strokeColor);
        node.setAttributeNS(null, "stroke-opacity", style.strokeOpacity);
        node.setAttributeNS(null, "stroke-width", style.strokeWidth * widthFactor);
        node.setAttributeNS(null, "stroke-linecap", style.strokeLinecap);
        node.setAttributeNS(null, "stroke-linejoin", "round");
        node.setAttributeNS(null, "stroke-dasharray", this.dashStyle(style, widthFactor));
    } else {
        node.setAttributeNS(null, "stroke", "none");
    }
    if (style.pointerEvents) {
        node.setAttributeNS(null, "pointer-events", style.pointerEvents);
    }
    if (style.cursor != null) {
        node.setAttributeNS(null, "cursor", style.cursor);
    }
    return node;
}, dashStyle: function(style, widthFactor) {
    var w = style.strokeWidth * widthFactor;
    switch (style.strokeDashstyle) {
        case 'solid': return 'none';
        case 'dot': return [1, 4 * w].join();
        case 'dash': return [4 * w, 4 * w].join();
        case 'dashdot': return [4 * w, 4 * w, 1, 4 * w].join();
        case 'longdash': return [8 * w, 4 * w].join();
        case 'longdashdot': return [8 * w, 4 * w, 1, 4 * w].join();
        default: return style.strokeDashstyle.replace(/ /g, ",");
    } 
}, createNode: function(type, id) {
    var node = document.createElementNS(this.xmlns, type);
    if (id) {
        node.setAttributeNS(null, "id", id);
    }
    return node;
}, nodeTypeCompare: function(node, type) {
    return (type == node.nodeName);
}, createRenderRoot: function() {
    return this.nodeFactory(this.container.id + "_svgRoot", "svg");
}, createRoot: function() {
    return this.nodeFactory(this.container.id + "_root", "g");
}, createDefs: function() {
    var defs = this.nodeFactory("ol-renderer-defs", "defs");
    this.rendererRoot.appendChild(defs);
    return defs;
}, drawPoint: function(node, geometry) {
    return this.drawCircle(node, geometry, 1);
}, drawCircle: function(node, geometry, radius) {
    var resolution = this.getResolution();
    var x = (geometry.x / resolution + this.left);
    var y = (this.top - geometry.y / resolution);
    if (this.inValidRange(x, y)) {
        node.setAttributeNS(null, "cx", x);
        node.setAttributeNS(null, "cy", y);
        node.setAttributeNS(null, "r", radius);
        return node;
    } else {
        return false;
    } 
}, drawLineString: function(node, geometry) {
    var componentsResult = this.getComponentsString(geometry.components);
    if (componentsResult.path) {
        node.setAttributeNS(null, "points", componentsResult.path);
        return (componentsResult.complete ? node : null);
    } else {
        return false;
    } 
}, drawLinearRing: function(node, geometry) {
    var componentsResult = this.getComponentsString(geometry.components);
    if (componentsResult.path) {
        node.setAttributeNS(null, "points", componentsResult.path);
        return (componentsResult.complete ? node : null);
    } else {
        return false;
    } 
}, drawPolygon: function(node, geometry) {
    var d = "";
    var draw = true;
    var complete = true;
    var linearRingResult, path;
    for (var j = 0, len = geometry.components.length;
j < len;
j++) {
        d += " M";
        linearRingResult = this.getComponentsString(geometry.components[j].components, " ");
        path = linearRingResult.path;
        if (path) {
            d += " " + path;
            complete = linearRingResult.complete && complete;
        } else {
            draw = false;
        } 
    }
    d += " z";
    if (draw) {
        node.setAttributeNS(null, "d", d);
        node.setAttributeNS(null, "fill-rule", "evenodd");
        return complete ? node : null;
    } else {
        return false;
    } 
}, drawRectangle: function(node, geometry) {
    var resolution = this.getResolution();
    var x = (geometry.x / resolution + this.left);
    var y = (this.top - geometry.y / resolution);
    if (this.inValidRange(x, y)) {
        node.setAttributeNS(null, "x", x);
        node.setAttributeNS(null, "y", y);
        node.setAttributeNS(null, "width", geometry.width / resolution);
        node.setAttributeNS(null, "height", geometry.height / resolution);
        return node;
    } else {
        return false;
    } 
}, drawSurface: function(node, geometry) {
    var d = null;
    var draw = true;
    for (var i = 0, len = geometry.components.length;
i < len;
i++) {
        if ((i % 3) == 0 && (i / 3) == 0) {
            var component = this.getShortString(geometry.components[i]);
            if (!component) {
                draw = false;
            }
            d = "M " + component;
        } else if ((i % 3) == 1) {
            var component = this.getShortString(geometry.components[i]);
            if (!component) {
                draw = false;
            }
            d += " C " + component;
        } else {
            var component = this.getShortString(geometry.components[i]);
            if (!component) {
                draw = false;
            }
            d += " " + component;
        } 
    }
    d += " Z";
    if (draw) {
        node.setAttributeNS(null, "d", d);
        return node;
    } else {
        return false;
    } 
}, getComponentsString: function(components, separator) {
    var renderCmp = [];
    var complete = true;
    var len = components.length;
    var strings = [];
    var str, component, j;
    for (var i = 0;
i < len;
i++) {
        component = components[i];
        renderCmp.push(component);
        str = this.getShortString(component);
        if (str) {
            strings.push(str);
        } else {
            if (i > 0) {
                if (this.getShortString(components[i - 1])) {
                    strings.push(this.clipLine(components[i], components[i - 1]));
                } 
            }
            if (i < len - 1) {
                if (this.getShortString(components[i + 1])) {
                    strings.push(this.clipLine(components[i], components[i + 1]));
                } 
            }
            complete = false;
        } 
    }
    return { path: strings.join(separator || ","), complete: complete };
}, clipLine: function(badComponent, goodComponent) {
    if (goodComponent.equals(badComponent)) {
        return "";
    }
    var resolution = this.getResolution();
    var maxX = this.MAX_PIXEL - this.translationParameters.x;
    var maxY = this.MAX_PIXEL - this.translationParameters.y;
    var x1 = goodComponent.x / resolution + this.left;
    var y1 = this.top - goodComponent.y / resolution;
    var x2 = badComponent.x / resolution + this.left;
    var y2 = this.top - badComponent.y / resolution;
    var k;
    if (x2 < -maxX || x2 > maxX) {
        k = (y2 - y1) / (x2 - x1);
        x2 = x2 < 0 ? -maxX : maxX;
        y2 = y1 + (x2 - x1) * k;
    }
    if (y2 < -maxY || y2 > maxY) {
        k = (x2 - x1) / (y2 - y1);
        y2 = y2 < 0 ? -maxY : maxY;
        x2 = x1 + (y2 - y1) * k;
    }
    return x2 + "," + y2;
}, getShortString: function(point) {
    var resolution = this.getResolution();
    var x = (point.x / resolution + this.left);
    var y = (this.top - point.y / resolution);
    if (this.inValidRange(x, y)) {
        return x + "," + y;
    } else {
        return false;
    } 
}, getPosition: function(node) {
    return ({ x: parseFloat(node.getAttributeNS(null, "cx")), y: parseFloat(node.getAttributeNS(null, "cy")) });
}, importSymbol: function(graphicName) {
    if (!this.defs) {
        this.defs = this.createDefs();
    }
    var id = this.container.id + "-" + graphicName;
    if (document.getElementById(id) != null) {
        return id;
    }
    var symbol = OpenLayers.Renderer.symbol[graphicName];
    if (!symbol) {
        throw new Error(graphicName + ' is not a valid symbol name');
        return;
    }
    var symbolNode = this.nodeFactory(id, "symbol");
    var node = this.nodeFactory(null, "polygon");
    symbolNode.appendChild(node);
    var symbolExtent = new OpenLayers.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0);
    var points = "";
    var x, y;
    for (var i = 0;
i < symbol.length;
i = i + 2) {
        x = symbol[i];
        y = symbol[i + 1];
        symbolExtent.left = Math.min(symbolExtent.left, x);
        symbolExtent.bottom = Math.min(symbolExtent.bottom, y);
        symbolExtent.right = Math.max(symbolExtent.right, x);
        symbolExtent.top = Math.max(symbolExtent.top, y);
        points += " " + x + "," + y;
    }
    node.setAttributeNS(null, "points", points);
    var width = symbolExtent.getWidth();
    var height = symbolExtent.getHeight();
    var viewBox = [symbolExtent.left - width, symbolExtent.bottom - height, width * 3, height * 3];
    symbolNode.setAttributeNS(null, "viewBox", viewBox.join(" "));
    this.symbolSize[id] = Math.max(width, height) * 3;
    this.defs.appendChild(symbolNode);
    return symbolNode.id;
}, CLASS_NAME: "OpenLayers.Renderer.SVG"
});
OpenLayers.Renderer.VML = OpenLayers.Class(OpenLayers.Renderer.Elements, { xmlns: "urn:schemas-microsoft-com:vml", symbolCache: {}, offset: null, initialize: function(containerID) {
    if (!this.supported()) {
        return;
    }
    if (!document.namespaces.olv) {
        document.namespaces.add("olv", this.xmlns);
        var style = document.createStyleSheet();
        style.addRule('olv\\:*', "behavior: url(#default#VML);" + "position: absolute;display: inline-block;");
    }
    OpenLayers.Renderer.Elements.prototype.initialize.apply(this, arguments);
    this.offset = { x: 0, y: 0 };
}, destroy: function() {
    OpenLayers.Renderer.Elements.prototype.destroy.apply(this, arguments);
}, supported: function() {
    return !!(document.namespaces);
}, setExtent: function(extent, resolutionChanged) {
    OpenLayers.Renderer.Elements.prototype.setExtent.apply(this, arguments);
    var resolution = this.getResolution();
    var left = extent.left / resolution;
    var top = extent.top / resolution - this.size.h;
    if (resolutionChanged) {
        this.offset = { x: left, y: top };
        left = 0;
        top = 0;
    } else {
        left = left - this.offset.x;
        top = top - this.offset.y;
    }
    var org = left + " " + top;
    this.root.setAttribute("coordorigin", org);
    var size = this.size.w + " " + this.size.h;
    this.root.setAttribute("coordsize", size);
    this.root.style.flip = "y";
    return true;
}, setSize: function(size) {
    OpenLayers.Renderer.prototype.setSize.apply(this, arguments);
    this.rendererRoot.style.width = this.size.w + "px";
    this.rendererRoot.style.height = this.size.h + "px";
    this.root.style.width = this.size.w + "px";
    this.root.style.height = this.size.h + "px";
}, getNodeType: function(geometry, style) {
    var nodeType = null;
    switch (geometry.CLASS_NAME) {
        case "OpenLayers.Geometry.Point": if (style.externalGraphic) {
                nodeType = "olv:rect";
            } else if (this.isComplexSymbol(style.graphicName)) {
                nodeType = "olv:shape";
            } else {
                nodeType = "olv:oval";
            }
            break;
        case "OpenLayers.Geometry.Rectangle": nodeType = "olv:rect";
            break;
        case "OpenLayers.Geometry.LineString": case "OpenLayers.Geometry.LinearRing": case "OpenLayers.Geometry.Polygon": case "OpenLayers.Geometry.Curve": case "OpenLayers.Geometry.Surface": nodeType = "olv:shape";
            break;
        default: break;
    }
    return nodeType;
}, setStyle: function(node, style, options, geometry) {
    style = style || node._style;
    options = options || node._options;
    var widthFactor = 1;
    if (node._geometryClass == "OpenLayers.Geometry.Point") {
        if (style.externalGraphic) {
            var width = style.graphicWidth || style.graphicHeight;
            var height = style.graphicHeight || style.graphicWidth;
            width = width ? width : style.pointRadius * 2;
            height = height ? height : style.pointRadius * 2;
            var resolution = this.getResolution();
            var xOffset = (style.graphicXOffset != undefined) ? style.graphicXOffset : -(0.5 * width);
            var yOffset = (style.graphicYOffset != undefined) ? style.graphicYOffset : -(0.5 * height);
            node.style.left = ((geometry.x / resolution - this.offset.x) + xOffset).toFixed();
            node.style.top = ((geometry.y / resolution - this.offset.y) - (yOffset + height)).toFixed();
            node.style.width = width + "px";
            node.style.height = height + "px";
            node.style.flip = "y";
            style.fillColor = "none";
            options.isStroked = false;
        } else if (this.isComplexSymbol(style.graphicName)) {
            var cache = this.importSymbol(style.graphicName);
            var symbolExtent = cache.extent;
            var width = symbolExtent.getWidth();
            var height = symbolExtent.getHeight();
            node.setAttribute("path", cache.path);
            node.setAttribute("coordorigin", symbolExtent.left + "," +
symbolExtent.bottom);
            node.setAttribute("coordsize", width + "," + height);
            node.style.left = symbolExtent.left + "px";
            node.style.top = symbolExtent.bottom + "px";
            node.style.width = width + "px";
            node.style.height = height + "px";
            this.drawCircle(node, geometry, style.pointRadius);
            node.style.flip = "y";
        } else {
            this.drawCircle(node, geometry, style.pointRadius);
        } 
    }
    if (options.isFilled) {
        node.setAttribute("fillcolor", style.fillColor);
    } else {
        node.setAttribute("filled", "false");
    }
    var fills = node.getElementsByTagName("fill");
    var fill = (fills.length == 0) ? null : fills[0];
    if (!options.isFilled) {
        if (fill) {
            node.removeChild(fill);
        } 
    } else {
        if (!fill) {
            fill = this.createNode('olv:fill', node.id + "_fill");
        }
        fill.setAttribute("opacity", style.fillOpacity);
        if (node._geometryClass == "OpenLayers.Geometry.Point" && style.externalGraphic) {
            if (style.graphicOpacity) {
                fill.setAttribute("opacity", style.graphicOpacity);
            }
            fill.setAttribute("src", style.externalGraphic);
            fill.setAttribute("type", "frame");
            if (!(style.graphicWidth && style.graphicHeight)) {
                fill.aspect = "atmost";
            } 
        }
        if (fill.parentNode != node) {
            node.appendChild(fill);
        } 
    }
    if (typeof style.rotation != "undefined") {
        if (style.externalGraphic) {
            this.graphicRotate(node, xOffset, yOffset);
            fill.setAttribute("opacity", 0);
        } else {
            node.style.rotation = style.rotation;
        } 
    }
    if (options.isStroked) {
        node.setAttribute("strokecolor", style.strokeColor);
        node.setAttribute("strokeweight", style.strokeWidth + "px");
    } else {
        node.setAttribute("stroked", "false");
    }
    var strokes = node.getElementsByTagName("stroke");
    var stroke = (strokes.length == 0) ? null : strokes[0];
    if (!options.isStroked) {
        if (stroke) {
            node.removeChild(stroke);
        } 
    } else {
        if (!stroke) {
            stroke = this.createNode('olv:stroke', node.id + "_stroke");
            node.appendChild(stroke);
        }
        stroke.setAttribute("opacity", style.strokeOpacity);
        stroke.setAttribute("endcap", !style.strokeLinecap || style.strokeLinecap == 'butt' ? 'flat' : style.strokeLinecap);
        stroke.setAttribute("dashstyle", this.dashStyle(style));
    }
    if (style.cursor != "inherit" && style.cursor != null) {
        node.style.cursor = style.cursor;
    }
    return node;
}, graphicRotate: function(node, xOffset, yOffset) {
    var style = style || node._style;
    var options = node._options;
    var aspectRatio, size;
    if (!(style.graphicWidth && style.graphicHeight)) {
        var img = new Image();
        img.onreadystatechange = OpenLayers.Function.bind(function() {
            if (img.readyState == "complete" || img.readyState == "interactive") {
                aspectRatio = img.width / img.height;
                size = Math.max(style.pointRadius * 2, style.graphicWidth || 0, style.graphicHeight || 0);
                xOffset = xOffset * aspectRatio;
                style.graphicWidth = size * aspectRatio;
                style.graphicHeight = size;
                this.graphicRotate(node, xOffset, yOffset);
            } 
        }, this);
        img.src = style.externalGraphic;
        return;
    } else {
        size = Math.max(style.graphicWidth, style.graphicHeight);
        aspectRatio = style.graphicWidth / style.graphicHeight;
    }
    var width = Math.round(style.graphicWidth || size * aspectRatio);
    var height = Math.round(style.graphicHeight || size);
    node.style.width = width + "px";
    node.style.height = height + "px";
    var image = document.getElementById(node.id + "_image");
    if (!image) {
        image = this.createNode("olv:imagedata", node.id + "_image");
        node.appendChild(image);
    }
    image.style.width = width + "px";
    image.style.height = height + "px";
    image.src = style.externalGraphic;
    image.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(" + "src='', sizingMethod='scale')";
    var rotation = style.rotation * Math.PI / 180;
    var sintheta = Math.sin(rotation);
    var costheta = Math.cos(rotation);
    var filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + costheta + ",M12=" + (-sintheta) + ",M21=" + sintheta + ",M22=" + costheta + ",SizingMethod='auto expand')\n";
    var opacity = style.graphicOpacity || style.fillOpacity;
    if (opacity && opacity != 1) {
        filter += "progid:DXImageTransform.Microsoft.BasicImage(opacity=" +
opacity + ")\n";
    }
    node.style.filter = filter;
    var centerPoint = new OpenLayers.Geometry.Point(-xOffset, -yOffset);
    var imgBox = new OpenLayers.Bounds(0, 0, width, height).toGeometry();
    imgBox.rotate(style.rotation, centerPoint);
    var imgBounds = imgBox.getBounds();
    node.style.left = Math.round(parseInt(node.style.left) + imgBounds.left) + "px";
    node.style.top = Math.round(parseInt(node.style.top) - imgBounds.bottom) + "px";
}, postDraw: function(node) {
    var fillColor = node._style.fillColor;
    var strokeColor = node._style.strokeColor;
    if (fillColor == "none" && node.getAttribute("fillcolor") != fillColor) {
        node.setAttribute("fillcolor", fillColor);
    }
    if (strokeColor == "none" && node.getAttribute("strokecolor") != strokeColor) {
        node.setAttribute("strokecolor", strokeColor);
    } 
}, setNodeDimension: function(node, geometry) {
    var bbox = geometry.getBounds();
    if (bbox) {
        var resolution = this.getResolution();
        var scaledBox = new OpenLayers.Bounds((bbox.left / resolution - this.offset.x).toFixed(), (bbox.bottom / resolution - this.offset.y).toFixed(), (bbox.right / resolution - this.offset.x).toFixed(), (bbox.top / resolution - this.offset.y).toFixed());
        node.style.left = scaledBox.left + "px";
        node.style.top = scaledBox.top + "px";
        node.style.width = scaledBox.getWidth() + "px";
        node.style.height = scaledBox.getHeight() + "px";
        node.coordorigin = scaledBox.left + " " + scaledBox.top;
        node.coordsize = scaledBox.getWidth() + " " + scaledBox.getHeight();
    } 
}, dashStyle: function(style) {
    var dash = style.strokeDashstyle;
    switch (dash) {
        case 'solid': case 'dot': case 'dash': case 'dashdot': case 'longdash': case 'longdashdot': return dash;
        default: var parts = dash.split(/[ ,]/);
            if (parts.length == 2) {
                if (1 * parts[0] >= 2 * parts[1]) {
                    return "longdash";
                }
                return (parts[0] == 1 || parts[1] == 1) ? "dot" : "dash";
            } else if (parts.length == 4) {
                return (1 * parts[0] >= 2 * parts[1]) ? "longdashdot" : "dashdot";
            }
            return "solid";
    } 
}, createNode: function(type, id) {
    var node = document.createElement(type);
    if (id) {
        node.setAttribute('id', id);
    }
    node.setAttribute('unselectable', 'on', 0);
    node.onselectstart = function() {
        return (false);
    };
    return node;
}, nodeTypeCompare: function(node, type) {
    var subType = type;
    var splitIndex = subType.indexOf(":");
    if (splitIndex != -1) {
        subType = subType.substr(splitIndex + 1);
    }
    var nodeName = node.nodeName;
    splitIndex = nodeName.indexOf(":");
    if (splitIndex != -1) {
        nodeName = nodeName.substr(splitIndex + 1);
    }
    return (subType == nodeName);
}, createRenderRoot: function() {
    return this.nodeFactory(this.container.id + "_vmlRoot", "div");
}, createRoot: function() {
    return this.nodeFactory(this.container.id + "_root", "olv:group");
}, drawPoint: function(node, geometry) {
    return this.drawCircle(node, geometry, 1);
}, drawCircle: function(node, geometry, radius) {
    if (!isNaN(geometry.x) && !isNaN(geometry.y)) {
        var resolution = this.getResolution();
        node.style.left = ((geometry.x / resolution - this.offset.x).toFixed() - radius) + "px";
        node.style.top = ((geometry.y / resolution - this.offset.y).toFixed() - radius) + "px";
        var diameter = radius * 2;
        node.style.width = diameter + "px";
        node.style.height = diameter + "px";
        return node;
    }
    return false;
}, drawLineString: function(node, geometry) {
    return this.drawLine(node, geometry, false);
}, drawLinearRing: function(node, geometry) {
    return this.drawLine(node, geometry, true);
}, drawLine: function(node, geometry, closeLine) {
    this.setNodeDimension(node, geometry);
    var resolution = this.getResolution();
    var numComponents = geometry.components.length;
    var parts = new Array(numComponents);
    var comp, x, y;
    for (var i = 0;
i < numComponents;
i++) {
        comp = geometry.components[i];
        x = (comp.x / resolution - this.offset.x);
        y = (comp.y / resolution - this.offset.y);
        parts[i] = " " + x.toFixed() + "," + y.toFixed() + " l ";
    }
    var end = (closeLine) ? " x e" : " e";
    node.path = "m" + parts.join("") + end;
    return node;
}, drawPolygon: function(node, geometry) {
    this.setNodeDimension(node, geometry);
    var resolution = this.getResolution();
    var path = [];
    var linearRing, i, j, len, ilen, comp, x, y;
    for (j = 0, len = geometry.components.length;
j < len;
j++) {
        linearRing = geometry.components[j];
        path.push("m");
        for (i = 0, ilen = linearRing.components.length;
i < ilen;
i++) {
            comp = linearRing.components[i];
            x = comp.x / resolution - this.offset.x;
            y = comp.y / resolution - this.offset.y;
            path.push(" " + x.toFixed() + "," + y.toFixed());
            if (i == 0) {
                path.push(" l");
            } 
        }
        path.push(" x ");
    }
    path.push("e");
    node.path = path.join("");
    return node;
}, drawRectangle: function(node, geometry) {
    var resolution = this.getResolution();
    node.style.left = (geometry.x / resolution - this.offset.x) + "px";
    node.style.top = (geometry.y / resolution - this.offset.y) + "px";
    node.style.width = geometry.width / resolution + "px";
    node.style.height = geometry.height / resolution + "px";
    return node;
}, drawSurface: function(node, geometry) {
    this.setNodeDimension(node, geometry);
    var resolution = this.getResolution();
    var path = [];
    var comp, x, y;
    for (var i = 0, len = geometry.components.length;
i < len;
i++) {
        comp = geometry.components[i];
        x = comp.x / resolution - this.offset.x;
        y = comp.y / resolution - this.offset.y;
        if ((i % 3) == 0 && (i / 3) == 0) {
            path.push("m");
        } else if ((i % 3) == 1) {
            path.push(" c");
        }
        path.push(" " + x + "," + y);
    }
    path.push(" x e");
    node.path = path.join("");
    return node;
}, importSymbol: function(graphicName) {
    var id = this.container.id + "-" + graphicName;
    var cache = this.symbolCache[id];
    if (cache) {
        return cache;
    }
    var symbol = OpenLayers.Renderer.symbol[graphicName];
    if (!symbol) {
        throw new Error(graphicName + ' is not a valid symbol name');
        return;
    }
    var symbolExtent = new OpenLayers.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0);
    var pathitems = ["m"];
    for (var i = 0;
i < symbol.length;
i = i + 2) {
        x = symbol[i];
        y = symbol[i + 1];
        symbolExtent.left = Math.min(symbolExtent.left, x);
        symbolExtent.bottom = Math.min(symbolExtent.bottom, y);
        symbolExtent.right = Math.max(symbolExtent.right, x);
        symbolExtent.top = Math.max(symbolExtent.top, y);
        pathitems.push(x);
        pathitems.push(y);
        if (i == 0) {
            pathitems.push("l");
        } 
    }
    pathitems.push("x e");
    var path = pathitems.join(" ");
    cache = { path: path, extent: symbolExtent };
    this.symbolCache[id] = cache;
    return cache;
}, CLASS_NAME: "OpenLayers.Renderer.VML"
});
OpenLayers.Tile.Image = OpenLayers.Class(OpenLayers.Tile, { url: null, imgDiv: null, frame: null, layerAlphaHack: null, isBackBuffer: false, lastRatio: 1, isFirstDraw: true, backBufferTile: null, initialize: function(layer, position, bounds, url, size) {
    OpenLayers.Tile.prototype.initialize.apply(this, arguments);
    this.url = url;
    this.frame = document.createElement('div');
    this.frame.style.overflow = 'hidden';
    this.frame.style.position = 'absolute';
    this.layerAlphaHack = this.layer.alpha && OpenLayers.Util.alphaHack();
}, destroy: function() {
    if (this.imgDiv != null) {
        if (this.layerAlphaHack) {
            OpenLayers.Event.stopObservingElement(this.imgDiv.childNodes[0].id);
        } else {
            OpenLayers.Event.stopObservingElement(this.imgDiv.id);
        }
        if (this.imgDiv.parentNode == this.frame) {
            this.frame.removeChild(this.imgDiv);
            this.imgDiv.map = null;
        }
        this.imgDiv.urls = null;
    }
    this.imgDiv = null;
    if ((this.frame != null) && (this.frame.parentNode == this.layer.div)) {
        this.layer.div.removeChild(this.frame);
    }
    this.frame = null;
    if (this.backBufferTile) {
        this.backBufferTile.destroy();
        this.backBufferTile = null;
    }
    this.layer.events.unregister("loadend", this, this.resetBackBuffer);
    OpenLayers.Tile.prototype.destroy.apply(this, arguments);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Tile.Image(this.layer, this.position, this.bounds, this.url, this.size);
    }
    obj = OpenLayers.Tile.prototype.clone.apply(this, [obj]);
    obj.imgDiv = null;
    return obj;
}, draw: function() {
    if (this.layer != this.layer.map.baseLayer && this.layer.reproject) {
        this.bounds = this.getBoundsFromBaseLayer(this.position);
    }
    var drawTile = OpenLayers.Tile.prototype.draw.apply(this, arguments);
    if (OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS, this.layer.transitionEffect) != -1) {
        if (drawTile) {
            if (!this.backBufferTile) {
                this.backBufferTile = this.clone();
                this.backBufferTile.hide();
                this.backBufferTile.isBackBuffer = true;
                this.events.register('loadend', this, this.resetBackBuffer);
                this.layer.events.register("loadend", this, this.resetBackBuffer);
            }
            this.startTransition();
        } else {
            if (this.backBufferTile) {
                this.backBufferTile.clear();
            } 
        } 
    } else {
        if (drawTile && this.isFirstDraw) {
            this.events.register('loadend', this, this.showTile);
            this.isFirstDraw = false;
        } 
    }
    if (!drawTile) {
        return false;
    }
    if (this.isLoading) {
        this.events.triggerEvent("reload");
    } else {
        this.isLoading = true;
        this.events.triggerEvent("loadstart");
    }
    return this.renderTile();
}, resetBackBuffer: function() {
    this.showTile();
    if (this.backBufferTile && (this.isFirstDraw || !this.layer.numLoadingTiles)) {
        this.isFirstDraw = false;
        var maxExtent = this.layer.maxExtent;
        var withinMaxExtent = (maxExtent && this.bounds.intersectsBounds(maxExtent, false));
        if (withinMaxExtent) {
            this.backBufferTile.position = this.position;
            this.backBufferTile.bounds = this.bounds;
            this.backBufferTile.size = this.size;
            this.backBufferTile.imageSize = this.layer.imageSize || this.size;
            this.backBufferTile.imageOffset = this.layer.imageOffset;
            this.backBufferTile.resolution = this.layer.getResolution();
            this.backBufferTile.renderTile();
        } 
    } 
}, renderTile: function() {
    if (this.imgDiv == null) {
        this.initImgDiv();
    }
    this.imgDiv.viewRequestID = this.layer.map.viewRequestID;
    if (this.layer.url instanceof Array) {
        this.imgDiv.urls = this.layer.url.slice();
    }
    this.url = this.layer.getURL(this.bounds);
    OpenLayers.Util.modifyDOMElement(this.frame, null, this.position, this.size);
    var imageSize = this.layer.getImageSize();
    if (this.layerAlphaHack) {
        OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv, null, null, imageSize, this.url);
    } else {
        OpenLayers.Util.modifyDOMElement(this.imgDiv, null, null, imageSize);
        this.imgDiv.src = this.url;
    }
    return true;
}, clear: function() {
    if (this.imgDiv) {
        this.hide();
        if (OpenLayers.Tile.Image.useBlankTile) {
            this.imgDiv.src = OpenLayers.Util.getImagesLocation() + "blank.gif";
        } 
    } 
}, initImgDiv: function() {
    var offset = this.layer.imageOffset;
    var size = this.layer.getImageSize();
    if (this.layerAlphaHack) {
        this.imgDiv = OpenLayers.Util.createAlphaImageDiv(null, offset, size, null, "relative", null, null, null, true);
    } else {
        this.imgDiv = OpenLayers.Util.createImage(null, offset, size, null, "relative", null, null, true);
    }
    this.imgDiv.className = 'olTileImage';
    this.frame.style.zIndex = this.isBackBuffer ? 0 : 1;
    this.frame.appendChild(this.imgDiv);
    this.layer.div.appendChild(this.frame);
    if (this.layer.opacity != null) {
        OpenLayers.Util.modifyDOMElement(this.imgDiv, null, null, null, null, null, null, this.layer.opacity);
    }
    this.imgDiv.map = this.layer.map;
    var onload = function() {
        if (this.isLoading) {
            this.isLoading = false;
            this.events.triggerEvent("loadend");
        } 
    };
    if (this.layerAlphaHack) {
        OpenLayers.Event.observe(this.imgDiv.childNodes[0], 'load', OpenLayers.Function.bind(onload, this));
    } else {
        OpenLayers.Event.observe(this.imgDiv, 'load', OpenLayers.Function.bind(onload, this));
    }
    var onerror = function() {
        if (this.imgDiv._attempts > OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
            onload.call(this);
        } 
    };
    OpenLayers.Event.observe(this.imgDiv, "error", OpenLayers.Function.bind(onerror, this));
}, checkImgURL: function() {
    if (this.layer) {
        var loaded = this.layerAlphaHack ? this.imgDiv.firstChild.src : this.imgDiv.src;
        if (!OpenLayers.Util.isEquivalentUrl(loaded, this.url)) {
            this.hide();
        } 
    } 
}, startTransition: function() {
    if (!this.backBufferTile || !this.backBufferTile.imgDiv) {
        return;
    }
    var ratio = 1;
    if (this.backBufferTile.resolution) {
        ratio = this.backBufferTile.resolution / this.layer.getResolution();
    }
    if (ratio != this.lastRatio) {
        if (this.layer.transitionEffect == 'resize') {
            var upperLeft = new OpenLayers.LonLat(this.backBufferTile.bounds.left, this.backBufferTile.bounds.top);
            var size = new OpenLayers.Size(this.backBufferTile.size.w * ratio, this.backBufferTile.size.h * ratio);
            var px = this.layer.map.getLayerPxFromLonLat(upperLeft);
            OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame, null, px, size);
            var imageSize = this.backBufferTile.imageSize;
            imageSize = new OpenLayers.Size(imageSize.w * ratio, imageSize.h * ratio);
            var imageOffset = this.backBufferTile.imageOffset;
            if (imageOffset) {
                imageOffset = new OpenLayers.Pixel(imageOffset.x * ratio, imageOffset.y * ratio);
            }
            OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv, null, imageOffset, imageSize);
            this.backBufferTile.show();
        } 
    } else {
        if (this.layer.singleTile) {
            this.backBufferTile.show();
        } else {
            this.backBufferTile.hide();
        } 
    }
    this.lastRatio = ratio;
}, show: function() {
    this.frame.style.display = '';
    if (OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS, this.layer.transitionEffect) != -1) {
        if (navigator.userAgent.toLowerCase().indexOf("gecko") != -1) {
            this.frame.scrollLeft = this.frame.scrollLeft;
        } 
    } 
}, hide: function() {
    this.frame.style.display = 'none';
}, CLASS_NAME: "OpenLayers.Tile.Image"
});
OpenLayers.Tile.Image.useBlankTile = (OpenLayers.Util.getBrowserName() == "safari" || OpenLayers.Util.getBrowserName() == "opera");
OpenLayers.Tile.WFS = OpenLayers.Class(OpenLayers.Tile, { features: null, url: null, request: null, initialize: function(layer, position, bounds, url, size) {
    OpenLayers.Tile.prototype.initialize.apply(this, arguments);
    this.url = url;
    this.features = [];
}, destroy: function() {
    OpenLayers.Tile.prototype.destroy.apply(this, arguments);
    this.destroyAllFeatures();
    this.features = null;
    this.url = null;
    if (this.request) {
        this.request.abort();
        this.request = null;
    } 
}, clear: function() {
    this.destroyAllFeatures();
}, draw: function() {
    if (OpenLayers.Tile.prototype.draw.apply(this, arguments)) {
        if (this.isLoading) {
            this.events.triggerEvent("reload");
        } else {
            this.isLoading = true;
            this.events.triggerEvent("loadstart");
        }
        this.loadFeaturesForRegion(this.requestSuccess);
    } 
}, loadFeaturesForRegion: function(success, failure) {
    if (this.request) {
        this.request.abort();
    }
    this.request = OpenLayers.Request.GET({ url: this.url, success: success, failure: failure, scope: this });
}, requestSuccess: function(request) {
    if (this.features) {
        var doc = request.responseXML;
        if (!doc || !doc.documentElement) {
            doc = request.responseText;
        }
        if (this.layer.vectorMode) {
            this.layer.addFeatures(this.layer.formatObject.read(doc));
        } else {
            var xml = new OpenLayers.Format.XML();
            if (typeof doc == "string") {
                doc = xml.read(doc);
            }
            var resultFeatures = xml.getElementsByTagNameNS(doc, "http://www.opengis.net/gml", "featureMember");
            this.addResults(resultFeatures);
        } 
    }
    if (this.events) {
        this.events.triggerEvent("loadend");
    }
    this.request = null;
}, addResults: function(results) {
    for (var i = 0;
i < results.length;
i++) {
        var feature = new this.layer.featureClass(this.layer, results[i]);
        this.features.push(feature);
    } 
}, destroyAllFeatures: function() {
    while (this.features.length > 0) {
        var feature = this.features.shift();
        feature.destroy();
    } 
}, CLASS_NAME: "OpenLayers.Tile.WFS"
});
OpenLayers.Control.OverviewMap = OpenLayers.Class(OpenLayers.Control, { element: null, ovmap: null, size: new OpenLayers.Size(180, 90), layers: null, minRectSize: 15, minRectDisplayClass: "RectReplacement", minRatio: 8, maxRatio: 32, mapOptions: null, handlers: null, resolutionFactor: 1, initialize: function(options) {
    this.layers = [];
    this.handlers = {};
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
}, destroy: function() {
    if (!this.mapDiv) {
        return;
    }
    this.handlers.click.destroy();
    this.mapDiv.removeChild(this.extentRectangle);
    this.extentRectangle = null;
    this.rectEvents.destroy();
    this.rectEvents = null;
    this.ovmap.destroy();
    this.ovmap = null;
    this.element.removeChild(this.mapDiv);
    this.mapDiv = null;
    this.div.removeChild(this.element);
    this.element = null;
    if (this.maximizeDiv) {
        OpenLayers.Event.stopObservingElement(this.maximizeDiv);
        this.div.removeChild(this.maximizeDiv);
        this.maximizeDiv = null;
    }
    if (this.minimizeDiv) {
        OpenLayers.Event.stopObservingElement(this.minimizeDiv);
        this.div.removeChild(this.minimizeDiv);
        this.minimizeDiv = null;
    }
    this.map.events.un({ "moveend": this.update, "changebaselayer": this.baseLayerDraw, scope: this });
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, draw: function() {
    OpenLayers.Control.prototype.draw.apply(this, arguments);
    if (!(this.layers.length > 0)) {
        if (this.map.baseLayer) {
            var layer = this.map.baseLayer.clone();
            this.layers = [layer];
        } else {
            this.map.events.register("changebaselayer", this, this.baseLayerDraw);
            return this.div;
        } 
    }
    this.element = document.createElement('div');
    this.element.className = this.displayClass + 'Element';
    this.element.style.display = 'none';
    this.mapDiv = document.createElement('div');
    this.mapDiv.style.width = this.size.w + 'px';
    this.mapDiv.style.height = this.size.h + 'px';
    this.mapDiv.style.position = 'relative';
    this.mapDiv.style.overflow = 'hidden';
    this.mapDiv.id = OpenLayers.Util.createUniqueID('overviewMap');
    this.extentRectangle = document.createElement('div');
    this.extentRectangle.style.position = 'absolute';
    this.extentRectangle.style.zIndex = 1000;
    this.extentRectangle.className = this.displayClass + 'ExtentRectangle';
    this.mapDiv.appendChild(this.extentRectangle);
    this.element.appendChild(this.mapDiv);
    this.div.appendChild(this.element);
    if (!this.outsideViewport) {
        this.div.className += " " + this.displayClass + 'Container';
        var imgLocation = OpenLayers.Util.getImagesLocation();
        var img = imgLocation + 'layer-switcher-maximize.png';
        this.maximizeDiv = OpenLayers.Util.createAlphaImageDiv(this.displayClass + 'MaximizeButton', null, new OpenLayers.Size(18, 18), img, 'absolute');
        this.maximizeDiv.style.display = 'none';
        this.maximizeDiv.className = this.displayClass + 'MaximizeButton';
        OpenLayers.Event.observe(this.maximizeDiv, 'click', OpenLayers.Function.bindAsEventListener(this.maximizeControl, this));
        this.div.appendChild(this.maximizeDiv);
        var img = imgLocation + 'layer-switcher-minimize.png';
        this.minimizeDiv = OpenLayers.Util.createAlphaImageDiv('OpenLayers_Control_minimizeDiv', null, new OpenLayers.Size(18, 18), img, 'absolute');
        this.minimizeDiv.style.display = 'none';
        this.minimizeDiv.className = this.displayClass + 'MinimizeButton';
        OpenLayers.Event.observe(this.minimizeDiv, 'click', OpenLayers.Function.bindAsEventListener(this.minimizeControl, this));
        this.div.appendChild(this.minimizeDiv);
        var eventsToStop = ['dblclick', 'mousedown'];
        for (var i = 0, len = eventsToStop.length;
i < len;
i++) {
            OpenLayers.Event.observe(this.maximizeDiv, eventsToStop[i], OpenLayers.Event.stop);
            OpenLayers.Event.observe(this.minimizeDiv, eventsToStop[i], OpenLayers.Event.stop);
        }
        this.minimizeControl();
    } else {
        this.element.style.display = '';
    }
    if (this.map.getExtent()) {
        this.update();
    }
    this.map.events.register('moveend', this, this.update);
    return this.div;
}, baseLayerDraw: function() {
    this.draw();
    this.map.events.unregister("changebaselayer", this, this.baseLayerDraw);
}, rectDrag: function(px) {
    var deltaX = this.handlers.drag.last.x - px.x;
    var deltaY = this.handlers.drag.last.y - px.y;
    if (deltaX != 0 || deltaY != 0) {
        var rectTop = this.rectPxBounds.top;
        var rectLeft = this.rectPxBounds.left;
        var rectHeight = Math.abs(this.rectPxBounds.getHeight());
        var rectWidth = this.rectPxBounds.getWidth();
        var newTop = Math.max(0, (rectTop - deltaY));
        newTop = Math.min(newTop, this.ovmap.size.h - this.hComp - rectHeight);
        var newLeft = Math.max(0, (rectLeft - deltaX));
        newLeft = Math.min(newLeft, this.ovmap.size.w - this.wComp - rectWidth);
        this.setRectPxBounds(new OpenLayers.Bounds(newLeft, newTop + rectHeight, newLeft + rectWidth, newTop));
    } 
}, mapDivClick: function(evt) {
    var pxCenter = this.rectPxBounds.getCenterPixel();
    var deltaX = evt.xy.x - pxCenter.x;
    var deltaY = evt.xy.y - pxCenter.y;
    var top = this.rectPxBounds.top;
    var left = this.rectPxBounds.left;
    var height = Math.abs(this.rectPxBounds.getHeight());
    var width = this.rectPxBounds.getWidth();
    var newTop = Math.max(0, (top + deltaY));
    newTop = Math.min(newTop, this.ovmap.size.h - height);
    var newLeft = Math.max(0, (left + deltaX));
    newLeft = Math.min(newLeft, this.ovmap.size.w - width);
    this.setRectPxBounds(new OpenLayers.Bounds(newLeft, newTop + height, newLeft + width, newTop));
    this.updateMapToRect();
}, maximizeControl: function(e) {
    this.element.style.display = '';
    this.showToggle(false);
    if (e != null) {
        OpenLayers.Event.stop(e);
    } 
}, minimizeControl: function(e) {
    this.element.style.display = 'none';
    this.showToggle(true);
    if (e != null) {
        OpenLayers.Event.stop(e);
    } 
}, showToggle: function(minimize) {
    this.maximizeDiv.style.display = minimize ? '' : 'none';
    this.minimizeDiv.style.display = minimize ? 'none' : '';
}, update: function() {
    if (this.ovmap == null) {
        this.createMap();
    }
    if (!this.isSuitableOverview()) {
        this.updateOverview();
    }
    this.updateRectToMap();
}, isSuitableOverview: function() {
    var mapExtent = this.map.getExtent();
    var maxExtent = this.map.maxExtent;
    var testExtent = new OpenLayers.Bounds(Math.max(mapExtent.left, maxExtent.left), Math.max(mapExtent.bottom, maxExtent.bottom), Math.min(mapExtent.right, maxExtent.right), Math.min(mapExtent.top, maxExtent.top));
    if (this.ovmap.getProjection() != this.map.getProjection()) {
        testExtent = testExtent.transform(this.map.getProjectionObject(), this.ovmap.getProjectionObject());
    }
    var resRatio = this.ovmap.getResolution() / this.map.getResolution();
    return ((resRatio > this.minRatio) && (resRatio <= this.maxRatio) && (this.ovmap.getExtent().containsBounds(testExtent)));
}, updateOverview: function() {
    var mapRes = this.map.getResolution();
    var targetRes = this.ovmap.getResolution();
    var resRatio = targetRes / mapRes;
    if (resRatio > this.maxRatio) {
        targetRes = this.minRatio * mapRes;
    } else if (resRatio <= this.minRatio) {
        targetRes = this.maxRatio * mapRes;
    }
    var center;
    if (this.ovmap.getProjection() != this.map.getProjection()) {
        center = this.map.center.clone();
        center.transform(this.map.getProjectionObject(), this.ovmap.getProjectionObject());
    } else {
        center = this.map.center;
    }
    this.ovmap.setCenter(center, this.ovmap.getZoomForResolution(targetRes * this.resolutionFactor));
    this.updateRectToMap();
}, createMap: function() {
    var options = OpenLayers.Util.extend({ controls: [], maxResolution: 'auto', fallThrough: false }, this.mapOptions);
    this.ovmap = new OpenLayers.Map(this.mapDiv, options);
    OpenLayers.Event.stopObserving(window, 'unload', this.ovmap.unloadDestroy);
    this.ovmap.addLayers(this.layers);
    this.ovmap.zoomToMaxExtent();
    this.wComp = parseInt(OpenLayers.Element.getStyle(this.extentRectangle, 'border-left-width')) +
parseInt(OpenLayers.Element.getStyle(this.extentRectangle, 'border-right-width'));
    this.wComp = (this.wComp) ? this.wComp : 2;
    this.hComp = parseInt(OpenLayers.Element.getStyle(this.extentRectangle, 'border-top-width')) +
parseInt(OpenLayers.Element.getStyle(this.extentRectangle, 'border-bottom-width'));
    this.hComp = (this.hComp) ? this.hComp : 2;
    this.handlers.drag = new OpenLayers.Handler.Drag(this, { move: this.rectDrag, done: this.updateMapToRect }, { map: this.ovmap });
    this.handlers.click = new OpenLayers.Handler.Click(this, { "click": this.mapDivClick }, { "single": true, "double": false, "stopSingle": true, "stopDouble": true, "pixelTolerance": 1, map: this.ovmap });
    this.handlers.click.activate();
    this.rectEvents = new OpenLayers.Events(this, this.extentRectangle, null, true);
    this.rectEvents.register("mouseover", this, function(e) {
        if (!this.handlers.drag.active && !this.map.dragging) {
            this.handlers.drag.activate();
        } 
    });
    this.rectEvents.register("mouseout", this, function(e) {
        if (!this.handlers.drag.dragging) {
            this.handlers.drag.deactivate();
        } 
    });
    if (this.ovmap.getProjection() != this.map.getProjection()) {
        var sourceUnits = this.map.getProjectionObject().getUnits() || this.map.units || this.map.baseLayer.units;
        var targetUnits = this.ovmap.getProjectionObject().getUnits() || this.ovmap.units || this.ovmap.baseLayer.units;
        this.resolutionFactor = sourceUnits && targetUnits ? OpenLayers.INCHES_PER_UNIT[sourceUnits] / OpenLayers.INCHES_PER_UNIT[targetUnits] : 1;
    } 
}, updateRectToMap: function() {
    var bounds;
    if (this.ovmap.getProjection() != this.map.getProjection()) {
        bounds = this.map.getExtent().transform(this.map.getProjectionObject(), this.ovmap.getProjectionObject());
    } else {
        bounds = this.map.getExtent();
    }
    var pxBounds = this.getRectBoundsFromMapBounds(bounds);
    if (pxBounds) {
        this.setRectPxBounds(pxBounds);
    } 
}, updateMapToRect: function() {
    var lonLatBounds = this.getMapBoundsFromRectBounds(this.rectPxBounds);
    if (this.ovmap.getProjection() != this.map.getProjection()) {
        lonLatBounds = lonLatBounds.transform(this.ovmap.getProjectionObject(), this.map.getProjectionObject());
    }
    this.map.panTo(lonLatBounds.getCenterLonLat());
}, setRectPxBounds: function(pxBounds) {
    var top = Math.max(pxBounds.top, 0);
    var left = Math.max(pxBounds.left, 0);
    var bottom = Math.min(pxBounds.top + Math.abs(pxBounds.getHeight()), this.ovmap.size.h - this.hComp);
    var right = Math.min(pxBounds.left + pxBounds.getWidth(), this.ovmap.size.w - this.wComp);
    var width = Math.max(right - left, 0);
    var height = Math.max(bottom - top, 0);
    if (width < this.minRectSize || height < this.minRectSize) {
        this.extentRectangle.className = this.displayClass +
this.minRectDisplayClass;
        var rLeft = left + (width / 2) - (this.minRectSize / 2);
        var rTop = top + (height / 2) - (this.minRectSize / 2);
        this.extentRectangle.style.top = Math.round(rTop) + 'px';
        this.extentRectangle.style.left = Math.round(rLeft) + 'px';
        this.extentRectangle.style.height = this.minRectSize + 'px';
        this.extentRectangle.style.width = this.minRectSize + 'px';
    } else {
        this.extentRectangle.className = this.displayClass + 'ExtentRectangle';
        this.extentRectangle.style.top = Math.round(top) + 'px';
        this.extentRectangle.style.left = Math.round(left) + 'px';
        this.extentRectangle.style.height = Math.round(height) + 'px';
        this.extentRectangle.style.width = Math.round(width) + 'px';
    }
    this.rectPxBounds = new OpenLayers.Bounds(Math.round(left), Math.round(bottom), Math.round(right), Math.round(top));
}, getRectBoundsFromMapBounds: function(lonLatBounds) {
    var leftBottomLonLat = new OpenLayers.LonLat(lonLatBounds.left, lonLatBounds.bottom);
    var rightTopLonLat = new OpenLayers.LonLat(lonLatBounds.right, lonLatBounds.top);
    var leftBottomPx = this.getOverviewPxFromLonLat(leftBottomLonLat);
    var rightTopPx = this.getOverviewPxFromLonLat(rightTopLonLat);
    var bounds = null;
    if (leftBottomPx && rightTopPx) {
        bounds = new OpenLayers.Bounds(leftBottomPx.x, leftBottomPx.y, rightTopPx.x, rightTopPx.y);
    }
    return bounds;
}, getMapBoundsFromRectBounds: function(pxBounds) {
    var leftBottomPx = new OpenLayers.Pixel(pxBounds.left, pxBounds.bottom);
    var rightTopPx = new OpenLayers.Pixel(pxBounds.right, pxBounds.top);
    var leftBottomLonLat = this.getLonLatFromOverviewPx(leftBottomPx);
    var rightTopLonLat = this.getLonLatFromOverviewPx(rightTopPx);
    return new OpenLayers.Bounds(leftBottomLonLat.lon, leftBottomLonLat.lat, rightTopLonLat.lon, rightTopLonLat.lat);
}, getLonLatFromOverviewPx: function(overviewMapPx) {
    var size = this.ovmap.size;
    var res = this.ovmap.getResolution();
    var center = this.ovmap.getExtent().getCenterLonLat();
    var delta_x = overviewMapPx.x - (size.w / 2);
    var delta_y = overviewMapPx.y - (size.h / 2);
    return new OpenLayers.LonLat(center.lon + delta_x * res, center.lat - delta_y * res);
}, getOverviewPxFromLonLat: function(lonlat) {
    var res = this.ovmap.getResolution();
    var extent = this.ovmap.getExtent();
    var px = null;
    if (extent) {
        px = new OpenLayers.Pixel(Math.round(1 / res * (lonlat.lon - extent.left)), Math.round(1 / res * (extent.top - lonlat.lat)));
    }
    return px;
}, CLASS_NAME: 'OpenLayers.Control.OverviewMap'
});
OpenLayers.Feature = OpenLayers.Class({ layer: null, id: null, lonlat: null, data: null, marker: null, popupClass: OpenLayers.Popup.AnchoredBubble, popup: null, initialize: function(layer, lonlat, data) {
    this.layer = layer;
    this.lonlat = lonlat;
    this.data = (data != null) ? data : {};
    this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
}, destroy: function() {
    if ((this.layer != null) && (this.layer.map != null)) {
        if (this.popup != null) {
            this.layer.map.removePopup(this.popup);
        } 
    }
    this.layer = null;
    this.id = null;
    this.lonlat = null;
    this.data = null;
    if (this.marker != null) {
        this.destroyMarker(this.marker);
        this.marker = null;
    }
    if (this.popup != null) {
        this.destroyPopup(this.popup);
        this.popup = null;
    } 
}, onScreen: function() {
    var onScreen = false;
    if ((this.layer != null) && (this.layer.map != null)) {
        var screenBounds = this.layer.map.getExtent();
        onScreen = screenBounds.containsLonLat(this.lonlat);
    }
    return onScreen;
}, createMarker: function() {
    if (this.lonlat != null) {
        this.marker = new OpenLayers.Marker(this.lonlat, this.data.icon);
    }
    return this.marker;
}, destroyMarker: function() {
    this.marker.destroy();
}, createPopup: function(closeBox) {
    if (this.lonlat != null) {
        var id = this.id + "_popup";
        var anchor = (this.marker) ? this.marker.icon : null;
        if (!this.popup) {
            this.popup = new this.popupClass(id, this.lonlat, this.data.popupSize, this.data.popupContentHTML, anchor, closeBox);
        }
        if (this.data.overflow != null) {
            this.popup.contentDiv.style.overflow = this.data.overflow;
        }
        this.popup.feature = this;
    }
    return this.popup;
}, destroyPopup: function() {
    if (this.popup) {
        this.popup.feature = null;
        this.popup.destroy();
        this.popup = null;
    } 
}, CLASS_NAME: "OpenLayers.Feature"
});
OpenLayers.Format.WMC = OpenLayers.Class({ defaultVersion: "1.1.0", version: null, layerOptions: null, parser: null, initialize: function(options) {
    OpenLayers.Util.extend(this, options);
    this.options = options;
}, read: function(data, options) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    var root = data.documentElement;
    var version = this.version;
    if (!version) {
        version = root.getAttribute("version");
        if (!version) {
            version = this.defaultVersion;
        } 
    }
    if (!this.parser || this.parser.VERSION != version) {
        var format = OpenLayers.Format.WMC["v" + version.replace(/\./g, "_")];
        if (!format) {
            throw "Can't find a WMC parser for version " +
version;
        }
        this.parser = new format(this.options);
    }
    var context = this.parser.read(data, options);
    var map;
    if (options.map) {
        this.context = context;
        if (options.map instanceof OpenLayers.Map) {
            map = this.mergeContextToMap(context, options.map);
        } else {
            map = this.contextToMap(context, options.map);
        } 
    } else {
        map = context;
    }
    return map;
}, contextToMap: function(context, id) {
    var map = new OpenLayers.Map(id, { maxExtent: context.maxExtent, projection: context.projection });
    map.addLayers(context.layers);
    map.setCenter(context.bounds.getCenterLonLat(), map.getZoomForExtent(context.bounds, true));
    return map;
}, mergeContextToMap: function(context, map) {
    map.addLayers(context.layers);
    return map;
}, write: function(obj, options) {
    if (obj.CLASS_NAME == "OpenLayers.Map") {
        obj = this.mapToContext(obj);
    }
    var version = (options && options.version) || this.version || this.defaultVersion;
    if (!this.parser || this.parser.VERSION != version) {
        var format = OpenLayers.Format.WMC["v" + version.replace(/\./g, "_")];
        if (!format) {
            throw "Can't find a WMS capabilities parser for version " +
version;
        }
        this.parser = new format(this.options);
    }
    var wmc = this.parser.write(obj, options);
    return wmc;
}, mapToContext: function(map) {
    var context = { bounds: map.getExtent(), maxExtent: map.maxExtent, projection: map.projection, layers: map.layers, size: map.getSize() };
    return context;
}, CLASS_NAME: "OpenLayers.Format.WMC"
});
OpenLayers.Format.WMC.v1 = OpenLayers.Class(OpenLayers.Format.XML, { namespaces: { ol: "http://openlayers.org/context", wmc: "http://www.opengis.net/context", sld: "http://www.opengis.net/sld", xlink: "http://www.w3.org/1999/xlink", xsi: "http://www.w3.org/2001/XMLSchema-instance" }, schemaLocation: "", getNamespacePrefix: function(uri) {
    var prefix = null;
    if (uri == null) {
        prefix = this.namespaces[this.defaultPrefix];
    } else {
        for (prefix in this.namespaces) {
            if (this.namespaces[prefix] == uri) {
                break;
            } 
        } 
    }
    return prefix;
}, defaultPrefix: "wmc", rootPrefix: null, defaultStyleName: "", defaultStyleTitle: "Default", initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, read: function(data) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    var root = data.documentElement;
    this.rootPrefix = root.prefix;
    var context = { version: root.getAttribute("version") };
    this.runChildNodes(context, root);
    return context;
}, runChildNodes: function(obj, node) {
    var children = node.childNodes;
    var childNode, processor, prefix, local;
    for (var i = 0, len = children.length;
i < len;
++i) {
        childNode = children[i];
        if (childNode.nodeType == 1) {
            prefix = this.getNamespacePrefix(childNode.namespaceURI);
            local = childNode.nodeName.split(":").pop();
            processor = this["read_" + prefix + "_" + local];
            if (processor) {
                processor.apply(this, [obj, childNode]);
            } 
        } 
    } 
}, read_wmc_General: function(context, node) {
    this.runChildNodes(context, node);
}, read_wmc_BoundingBox: function(context, node) {
    context.projection = node.getAttribute("SRS");
    context.bounds = new OpenLayers.Bounds(parseFloat(node.getAttribute("minx")), parseFloat(node.getAttribute("miny")), parseFloat(node.getAttribute("maxx")), parseFloat(node.getAttribute("maxy")));
}, read_wmc_LayerList: function(context, node) {
    context.layers = [];
    this.runChildNodes(context, node);
}, read_wmc_Layer: function(context, node) {
    var layerInfo = { params: {}, options: { visibility: (node.getAttribute("hidden") != "1"), queryable: (node.getAttribute("queryable") == "1") }, formats: [], styles: [] };
    this.runChildNodes(layerInfo, node);
    layerInfo.params.layers = layerInfo.name;
    layerInfo.options.maxExtent = layerInfo.maxExtent;
    var layer = this.getLayerFromInfo(layerInfo);
    context.layers.push(layer);
}, getLayerFromInfo: function(layerInfo) {
    var options = layerInfo.options;
    if (this.layerOptions) {
        OpenLayers.Util.applyDefaults(options, this.layerOptions);
    }
    var layer = new OpenLayers.Layer.WMS(layerInfo.title, layerInfo.href, layerInfo.params, options);
    return layer;
}, read_wmc_Extension: function(obj, node) {
    this.runChildNodes(obj, node);
}, read_ol_units: function(layerInfo, node) {
    layerInfo.options.units = this.getChildValue(node);
}, read_ol_maxExtent: function(obj, node) {
    var bounds = new OpenLayers.Bounds(node.getAttribute("minx"), node.getAttribute("miny"), node.getAttribute("maxx"), node.getAttribute("maxy"));
    obj.maxExtent = bounds;
}, read_ol_transparent: function(layerInfo, node) {
    layerInfo.params.transparent = this.getChildValue(node);
}, read_ol_numZoomLevels: function(layerInfo, node) {
    layerInfo.options.numZoomLevels = parseInt(this.getChildValue(node));
}, read_ol_opacity: function(layerInfo, node) {
    layerInfo.options.opacity = parseFloat(this.getChildValue(node));
}, read_ol_singleTile: function(layerInfo, node) {
    layerInfo.options.singleTile = (this.getChildValue(node) == "true");
}, read_ol_isBaseLayer: function(layerInfo, node) {
    layerInfo.options.isBaseLayer = (this.getChildValue(node) == "true");
}, read_ol_displayInLayerSwitcher: function(layerInfo, node) {
    layerInfo.options.displayInLayerSwitcher = (this.getChildValue(node) == "true");
}, read_wmc_Server: function(layerInfo, node) {
    layerInfo.params.version = node.getAttribute("version");
    this.runChildNodes(layerInfo, node);
}, read_wmc_FormatList: function(layerInfo, node) {
    this.runChildNodes(layerInfo, node);
}, read_wmc_Format: function(layerInfo, node) {
    var format = this.getChildValue(node);
    layerInfo.formats.push(format);
    if (node.getAttribute("current") == "1") {
        layerInfo.params.format = format;
    } 
}, read_wmc_StyleList: function(layerInfo, node) {
    this.runChildNodes(layerInfo, node);
}, read_wmc_Style: function(layerInfo, node) {
    var style = {};
    this.runChildNodes(style, node);
    if (node.getAttribute("current") == "1") {
        if (style.href) {
            layerInfo.params.sld = style.href;
        } else if (style.body) {
            layerInfo.params.sld_body = style.body;
        } else {
            layerInfo.params.styles = style.name;
        } 
    }
    layerInfo.styles.push(style);
}, read_wmc_SLD: function(style, node) {
    this.runChildNodes(style, node);
}, read_sld_StyledLayerDescriptor: function(sld, node) {
    var xml = OpenLayers.Format.XML.prototype.write.apply(this, [node]);
    sld.body = xml;
}, read_wmc_OnlineResource: function(obj, node) {
    obj.href = this.getAttributeNS(node, this.namespaces.xlink, "href");
}, read_wmc_Name: function(obj, node) {
    var name = this.getChildValue(node);
    if (name) {
        obj.name = name;
    } 
}, read_wmc_Title: function(obj, node) {
    var title = this.getChildValue(node);
    if (title) {
        obj.title = title;
    } 
}, read_wmc_MetadataURL: function(layerInfo, node) {
    var metadataURL = {};
    var links = node.getElementsByTagName("OnlineResource");
    if (links.length > 0) {
        this.read_wmc_OnlineResource(metadataURL, links[0]);
    }
    layerInfo.options.metadataURL = metadataURL.href;
}, read_wmc_Abstract: function(obj, node) {
    var abst = this.getChildValue(node);
    if (abst) {
        obj["abstract"] = abst;
    } 
}, read_wmc_LatLonBoundingBox: function(layer, node) {
    layer.llbbox = [parseFloat(node.getAttribute("minx")), parseFloat(node.getAttribute("miny")), parseFloat(node.getAttribute("maxx")), parseFloat(node.getAttribute("maxy"))];
}, read_wmc_LegendURL: function(style, node) {
    var legend = { width: node.getAttribute('width'), height: node.getAttribute('height') };
    var links = node.getElementsByTagName("OnlineResource");
    if (links.length > 0) {
        this.read_wmc_OnlineResource(legend, links[0]);
    }
    style.legend = legend;
}, write: function(context, options) {
    var root = this.createElementDefaultNS("ViewContext");
    this.setAttributes(root, { version: this.VERSION, id: (options && typeof options.id == "string") ? options.id : OpenLayers.Util.createUniqueID("OpenLayers_Context_") });
    this.setAttributeNS(root, this.namespaces.xsi, "xsi:schemaLocation", this.schemaLocation);
    root.appendChild(this.write_wmc_General(context));
    root.appendChild(this.write_wmc_LayerList(context));
    return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
}, createElementDefaultNS: function(name, childValue, attributes) {
    var node = this.createElementNS(this.namespaces[this.defaultPrefix], name);
    if (childValue) {
        node.appendChild(this.createTextNode(childValue));
    }
    if (attributes) {
        this.setAttributes(node, attributes);
    }
    return node;
}, setAttributes: function(node, obj) {
    var value;
    for (var name in obj) {
        value = obj[name].toString();
        if (value.match(/[A-Z]/)) {
            this.setAttributeNS(node, null, name, value);
        } else {
            node.setAttribute(name, value);
        } 
    } 
}, write_wmc_General: function(context) {
    var node = this.createElementDefaultNS("General");
    if (context.size) {
        node.appendChild(this.createElementDefaultNS("Window", null, { width: context.size.w, height: context.size.h }));
    }
    var bounds = context.bounds;
    node.appendChild(this.createElementDefaultNS("BoundingBox", null, { minx: bounds.left.toPrecision(10), miny: bounds.bottom.toPrecision(10), maxx: bounds.right.toPrecision(10), maxy: bounds.top.toPrecision(10), SRS: context.projection }));
    node.appendChild(this.createElementDefaultNS("Title", context.title));
    node.appendChild(this.write_ol_MapExtension(context));
    return node;
}, write_ol_MapExtension: function(context) {
    var node = this.createElementDefaultNS("Extension");
    var bounds = context.maxExtent;
    if (bounds) {
        var maxExtent = this.createElementNS(this.namespaces.ol, "ol:maxExtent");
        this.setAttributes(maxExtent, { minx: bounds.left.toPrecision(10), miny: bounds.bottom.toPrecision(10), maxx: bounds.right.toPrecision(10), maxy: bounds.top.toPrecision(10) });
        node.appendChild(maxExtent);
    }
    return node;
}, write_wmc_LayerList: function(context) {
    var list = this.createElementDefaultNS("LayerList");
    var layer;
    for (var i = 0, len = context.layers.length;
i < len;
++i) {
        layer = context.layers[i];
        if (layer instanceof OpenLayers.Layer.WMS) {
            list.appendChild(this.write_wmc_Layer(layer));
        } 
    }
    return list;
}, write_wmc_Layer: function(layer) {
    var node = this.createElementDefaultNS("Layer", null, { queryable: layer.queryable ? "1" : "0", hidden: layer.visibility ? "0" : "1" });
    node.appendChild(this.write_wmc_Server(layer));
    node.appendChild(this.createElementDefaultNS("Name", layer.params["LAYERS"]));
    node.appendChild(this.createElementDefaultNS("Title", layer.name));
    if (layer.metadataURL) {
        node.appendChild(this.write_wmc_MetadataURL(layer));
    }
    node.appendChild(this.write_wmc_FormatList(layer));
    node.appendChild(this.write_wmc_StyleList(layer));
    node.appendChild(this.write_wmc_LayerExtension(layer));
    return node;
}, write_wmc_LayerExtension: function(layer) {
    var node = this.createElementDefaultNS("Extension");
    var bounds = layer.maxExtent;
    var maxExtent = this.createElementNS(this.namespaces.ol, "ol:maxExtent");
    this.setAttributes(maxExtent, { minx: bounds.left.toPrecision(10), miny: bounds.bottom.toPrecision(10), maxx: bounds.right.toPrecision(10), maxy: bounds.top.toPrecision(10) });
    node.appendChild(maxExtent);
    var param = layer.params["TRANSPARENT"];
    if (param) {
        var trans = this.createElementNS(this.namespaces.ol, "ol:transparent");
        trans.appendChild(this.createTextNode(param));
        node.appendChild(trans);
    }
    var properties = ["numZoomLevels", "units", "isBaseLayer", "opacity", "displayInLayerSwitcher", "singleTile"];
    var child;
    for (var i = 0, len = properties.length;
i < len;
++i) {
        child = this.createOLPropertyNode(layer, properties[i]);
        if (child) {
            node.appendChild(child);
        } 
    }
    return node;
}, createOLPropertyNode: function(obj, prop) {
    var node = null;
    if (obj[prop] != null) {
        node = this.createElementNS(this.namespaces.ol, "ol:" + prop);
        node.appendChild(this.createTextNode(obj[prop].toString()));
    }
    return node;
}, write_wmc_Server: function(layer) {
    var node = this.createElementDefaultNS("Server");
    this.setAttributes(node, { service: "OGC:WMS", version: layer.params["VERSION"] });
    node.appendChild(this.write_wmc_OnlineResource(layer.url));
    return node;
}, write_wmc_MetadataURL: function(layer) {
    var node = this.createElementDefaultNS("MetadataURL");
    node.appendChild(this.write_wmc_OnlineResource(layer.metadataURL));
    return node;
}, write_wmc_FormatList: function(layer) {
    var node = this.createElementDefaultNS("FormatList");
    node.appendChild(this.createElementDefaultNS("Format", layer.params["FORMAT"], { current: "1" }));
    return node;
}, write_wmc_StyleList: function(layer) {
    var node = this.createElementDefaultNS("StyleList");
    var style = this.createElementDefaultNS("Style", null, { current: "1" });
    if (layer.params["SLD"]) {
        var sld = this.createElementDefaultNS("SLD");
        var link = this.write_wmc_OnlineResource(layer.params["SLD"]);
        sld.appendChild(link);
        style.appendChild(sld);
    } else if (layer.params["SLD_BODY"]) {
        var sld = this.createElementDefaultNS("SLD");
        var body = layer.params["SLD_BODY"];
        var doc = OpenLayers.Format.XML.prototype.read.apply(this, [body]);
        var imported = doc.documentElement;
        if (sld.ownerDocument && sld.ownerDocument.importNode) {
            imported = sld.ownerDocument.importNode(imported, true);
        }
        sld.appendChild(imported);
        style.appendChild(sld);
    } else {
        var name = layer.params["STYLES"] ? layer.params["STYLES"] : this.defaultStyleName;
        style.appendChild(this.createElementDefaultNS("Name", name));
        style.appendChild(this.createElementDefaultNS("Title", this.defaultStyleTitle));
    }
    node.appendChild(style);
    return node;
}, write_wmc_OnlineResource: function(href) {
    var node = this.createElementDefaultNS("OnlineResource");
    this.setAttributeNS(node, this.namespaces.xlink, "xlink:type", "simple");
    this.setAttributeNS(node, this.namespaces.xlink, "xlink:href", href);
    return node;
}, CLASS_NAME: "OpenLayers.Format.WMC.v1"
});
OpenLayers.Handler.Click = OpenLayers.Class(OpenLayers.Handler, { delay: 300, single: true, 'double': false, pixelTolerance: 0, stopSingle: false, stopDouble: false, timerId: null, down: null, rightclickTimerId: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    if (this.pixelTolerance != null) {
        this.mousedown = function(evt) {
            this.down = evt.xy;
            return true;
        };
    } 
}, mousedown: null, mouseup: function(evt) {
    var propagate = true;
    if (this.checkModifiers(evt) && this.control.handleRightClicks && OpenLayers.Event.isRightClick(evt)) {
        propogate = this.rightclick(evt);
    }
    return propagate;
}, rightclick: function(evt) {
    if (this.passesTolerance(evt)) {
        if (this.rightclickTimerId != null) {
            this.clearTimer();
            this.callback('dblrightclick', [evt]);
            return !this.stopDouble;
        } else {
            var clickEvent = this['double'] ? OpenLayers.Util.extend({}, evt) : this.callback('rightclick', [evt]);
            var delayedRightCall = OpenLayers.Function.bind(this.delayedRightCall, this, clickEvent);
            this.rightclickTimerId = window.setTimeout(delayedRightCall, this.delay);
        } 
    }
    return !this.stopSingle;
}, delayedRightCall: function(evt) {
    this.rightclickTimerId = null;
    if (evt) {
        this.callback('rightclick', [evt]);
    }
    return !this.stopSingle;
}, dblclick: function(evt) {
    if (this.passesTolerance(evt)) {
        if (this["double"]) {
            this.callback('dblclick', [evt]);
        }
        this.clearTimer();
    }
    return !this.stopDouble;
}, click: function(evt) {
    if (this.passesTolerance(evt)) {
        if (this.timerId != null) {
            this.clearTimer();
        } else {
            var clickEvent = this.single ? OpenLayers.Util.extend({}, evt) : null;
            this.timerId = window.setTimeout(OpenLayers.Function.bind(this.delayedCall, this, clickEvent), this.delay);
        } 
    }
    return !this.stopSingle;
}, passesTolerance: function(evt) {
    var passes = true;
    if (this.pixelTolerance != null && this.down) {
        var dpx = Math.sqrt(Math.pow(this.down.x - evt.xy.x, 2) +
Math.pow(this.down.y - evt.xy.y, 2));
        if (dpx > this.pixelTolerance) {
            passes = false;
        } 
    }
    return passes;
}, clearTimer: function() {
    if (this.timerId != null) {
        window.clearTimeout(this.timerId);
        this.timerId = null;
    } 
}, delayedCall: function(evt) {
    this.timerId = null;
    if (evt) {
        this.callback('click', [evt]);
    } 
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        this.clearTimer();
        this.down = null;
        deactivated = true;
    }
    return deactivated;
}, CLASS_NAME: "OpenLayers.Handler.Click"
});
OpenLayers.Handler.Drag = OpenLayers.Class(OpenLayers.Handler, { started: false, stopDown: true, dragging: false, last: null, start: null, oldOnselectstart: null, interval: 0, timeoutId: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
}, down: function(evt) { }, move: function(evt) { }, up: function(evt) { }, out: function(evt) { }, mousedown: function(evt) {
    var propagate = true;
    this.dragging = false;
    if (this.checkModifiers(evt) && OpenLayers.Event.isLeftClick(evt)) {
        this.started = true;
        this.start = evt.xy;
        this.last = evt.xy;
        this.map.div.style.cursor = "move";
        this.down(evt);
        this.callback("down", [evt.xy]);
        OpenLayers.Event.stop(evt);
        if (!this.oldOnselectstart) {
            this.oldOnselectstart = (document.onselectstart) ? document.onselectstart : function() {
                return true;
            };
            document.onselectstart = function() {
                return false;
            };
        }
        propagate = !this.stopDown;
    } else {
        this.started = false;
        this.start = null;
        this.last = null;
    }
    return propagate;
}, mousemove: function(evt) {
    if (this.started && !this.timeoutId && (evt.xy.x != this.last.x || evt.xy.y != this.last.y)) {
        if (this.interval > 0) {
            this.timeoutId = setTimeout(OpenLayers.Function.bind(this.removeTimeout, this), this.interval);
        }
        this.dragging = true;
        this.move(evt);
        this.callback("move", [evt.xy]);
        if (!this.oldOnselectstart) {
            this.oldOnselectstart = document.onselectstart;
            document.onselectstart = function() {
                return false;
            };
        }
        this.last = this.evt.xy;
    }
    return true;
}, removeTimeout: function() {
    this.timeoutId = null;
}, mouseup: function(evt) {
    if (this.started) {
        var dragged = (this.start != this.last);
        this.started = false;
        this.dragging = false;
        this.map.div.style.cursor = "";
        this.up(evt);
        this.callback("up", [evt.xy]);
        if (dragged) {
            this.callback("done", [evt.xy]);
        }
        document.onselectstart = this.oldOnselectstart;
    }
    return true;
}, mouseout: function(evt) {
    if (this.started && OpenLayers.Util.mouseLeft(evt, this.map.div)) {
        var dragged = (this.start != this.last);
        this.started = false;
        this.dragging = false;
        this.map.div.style.cursor = "";
        this.out(evt);
        this.callback("out", []);
        if (dragged) {
            this.callback("done", [evt.xy]);
        }
        if (document.onselectstart) {
            document.onselectstart = this.oldOnselectstart;
        } 
    }
    return true;
}, click: function(evt) {
    return (this.start == this.last);
}, activate: function() {
    var activated = false;
    if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        this.dragging = false;
        activated = true;
    }
    return activated;
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        this.started = false;
        this.dragging = false;
        this.start = null;
        this.last = null;
        deactivated = true;
    }
    return deactivated;
}, CLASS_NAME: "OpenLayers.Handler.Drag"
});
OpenLayers.Handler.Feature = OpenLayers.Class(OpenLayers.Handler, { EVENTMAP: { 'click': { 'in': 'click', 'out': 'clickout' }, 'mousemove': { 'in': 'over', 'out': 'out' }, 'dblclick': { 'in': 'dblclick', 'out': null }, 'mousedown': { 'in': null, 'out': null }, 'mouseup': { 'in': null, 'out': null} }, feature: null, lastFeature: null, down: null, up: null, clickoutTolerance: 4, geometryTypes: null, stopClick: true, stopDown: true, stopUp: false, initialize: function(control, layer, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, [control, callbacks, options]);
    this.layer = layer;
}, mousedown: function(evt) {
    this.down = evt.xy;
    return this.handle(evt) ? !this.stopDown : true;
}, mouseup: function(evt) {
    this.up = evt.xy;
    return this.handle(evt) ? !this.stopUp : true;
}, click: function(evt) {
    return this.handle(evt) ? !this.stopClick : true;
}, mousemove: function(evt) {
    if (!this.callbacks['over'] && !this.callbacks['out']) {
        return true;
    }
    this.handle(evt);
    return true;
}, dblclick: function(evt) {
    return !this.handle(evt);
}, geometryTypeMatches: function(feature) {
    return this.geometryTypes == null || OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) > -1;
}, handle: function(evt) {
    var type = evt.type;
    var handled = false;
    var previouslyIn = !!(this.feature);
    var click = (type == "click" || type == "dblclick");
    this.feature = this.layer.getFeatureFromEvent(evt);
    if (this.feature) {
        var inNew = (this.feature != this.lastFeature);
        if (this.geometryTypeMatches(this.feature)) {
            if (previouslyIn && inNew) {
                this.triggerCallback(type, 'out', [this.lastFeature]);
                this.triggerCallback(type, 'in', [this.feature]);
            } else if (!previouslyIn || click) {
                this.triggerCallback(type, 'in', [this.feature]);
            }
            this.lastFeature = this.feature;
            handled = true;
        } else {
            if (previouslyIn && inNew || (click && this.lastFeature)) {
                this.triggerCallback(type, 'out', [this.lastFeature]);
            }
            this.feature = null;
        } 
    } else {
        if (previouslyIn || (click && this.lastFeature)) {
            this.triggerCallback(type, 'out', [this.lastFeature]);
        } 
    }
    return handled;
}, triggerCallback: function(type, mode, args) {
    var key = this.EVENTMAP[type][mode];
    if (key) {
        if (type == 'click' && mode == 'out' && this.up && this.down) {
            var dpx = Math.sqrt(Math.pow(this.up.x - this.down.x, 2) +
Math.pow(this.up.y - this.down.y, 2));
            if (dpx <= this.clickoutTolerance) {
                this.callback(key, args);
            } 
        } else {
            this.callback(key, args);
        } 
    } 
}, activate: function() {
    var activated = false;
    if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        this.moveLayerToTop();
        this.map.events.on({ "removelayer": this.handleMapEvents, "changelayer": this.handleMapEvents, scope: this });
        activated = true;
    }
    return activated;
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        this.moveLayerBack();
        this.feature = null;
        this.lastFeature = null;
        this.down = null;
        this.up = null;
        this.map.events.un({ "removelayer": this.handleMapEvents, "changelayer": this.handleMapEvents, scope: this });
        deactivated = true;
    }
    return deactivated;
}, handleMapEvents: function(evt) {
    if (!evt.property || evt.property == "order") {
        this.moveLayerToTop();
    } 
}, moveLayerToTop: function() {
    var index = Math.max(this.map.Z_INDEX_BASE['Feature'] - 1, this.layer.getZIndex()) + 1;
    this.layer.setZIndex(index);
}, moveLayerBack: function() {
    var index = this.layer.getZIndex() - 1;
    if (index >= this.map.Z_INDEX_BASE['Feature']) {
        this.layer.setZIndex(index);
    } else {
        this.map.setLayerZIndex(this.layer, this.map.getLayerIndex(this.layer));
    } 
}, CLASS_NAME: "OpenLayers.Handler.Feature"
});
OpenLayers.Handler.Hover = OpenLayers.Class(OpenLayers.Handler, { delay: 500, pixelTolerance: null, stopMove: false, px: null, timerId: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
}, mousemove: function(evt) {
    if (this.passesTolerance(evt.xy)) {
        this.clearTimer();
        this.callback('move', [evt]);
        this.px = evt.xy;
        evt = OpenLayers.Util.extend({}, evt);
        this.timerId = window.setTimeout(OpenLayers.Function.bind(this.delayedCall, this, evt), this.delay);
    }
    return !this.stopMove;
}, mouseout: function(evt) {
    if (OpenLayers.Util.mouseLeft(evt, this.map.div)) {
        this.clearTimer();
        this.callback('move', [evt]);
    }
    return true;
}, passesTolerance: function(px) {
    var passes = true;
    if (this.pixelTolerance && this.px) {
        var dpx = Math.sqrt(Math.pow(this.px.x - px.x, 2) +
Math.pow(this.px.y - px.y, 2));
        if (dpx < this.pixelTolerance) {
            passes = false;
        } 
    }
    return passes;
}, clearTimer: function() {
    if (this.timerId != null) {
        window.clearTimeout(this.timerId);
        this.timerId = null;
    } 
}, delayedCall: function(evt) {
    this.callback('pause', [evt]);
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        this.clearTimer();
        deactivated = true;
    }
    return deactivated;
}, CLASS_NAME: "OpenLayers.Handler.Hover"
});
OpenLayers.Handler.Keyboard = OpenLayers.Class(OpenLayers.Handler, { KEY_EVENTS: ["keydown", "keyup"], eventListener: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    this.eventListener = OpenLayers.Function.bindAsEventListener(this.handleKeyEvent, this);
}, destroy: function() {
    this.deactivate();
    this.eventListener = null;
    OpenLayers.Handler.prototype.destroy.apply(this, arguments);
}, activate: function() {
    if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        for (var i = 0, len = this.KEY_EVENTS.length;
i < len;
i++) {
            OpenLayers.Event.observe(document, this.KEY_EVENTS[i], this.eventListener);
        }
        return true;
    } else {
        return false;
    } 
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        for (var i = 0, len = this.KEY_EVENTS.length;
i < len;
i++) {
            OpenLayers.Event.stopObserving(document, this.KEY_EVENTS[i], this.eventListener);
        }
        deactivated = true;
    }
    return deactivated;
}, handleKeyEvent: function(evt) {
    if (this.checkModifiers(evt)) {
        this.callback(evt.type, [evt]);
    } 
}, CLASS_NAME: "OpenLayers.Handler.Keyboard"
});
OpenLayers.Handler.MouseWheel = OpenLayers.Class(OpenLayers.Handler, { wheelListener: null, mousePosition: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    this.wheelListener = OpenLayers.Function.bindAsEventListener(this.onWheelEvent, this);
}, destroy: function() {
    OpenLayers.Handler.prototype.destroy.apply(this, arguments);
    this.wheelListener = null;
}, onWheelEvent: function(e) {
    if (!this.map || !this.checkModifiers(e)) {
        return;
    }
    var overScrollableDiv = false;
    var overLayerDiv = false;
    var overMapDiv = false;
    var elem = OpenLayers.Event.element(e);
    while ((elem != null) && !overMapDiv && !overScrollableDiv) {
        if (!overScrollableDiv) {
            try {
                if (elem.currentStyle) {
                    overflow = elem.currentStyle["overflow"];
                } else {
                    var style = document.defaultView.getComputedStyle(elem, null);
                    var overflow = style.getPropertyValue("overflow");
                }
                overScrollableDiv = (overflow && (overflow == "auto") || (overflow == "scroll"));
            } catch (err) { } 
        }
        if (!overLayerDiv) {
            for (var i = 0, len = this.map.layers.length;
i < len;
i++) {
                if (elem == this.map.layers[i].div || elem == this.map.layers[i].pane) {
                    overLayerDiv = true;
                    break;
                } 
            } 
        }
        overMapDiv = (elem == this.map.div);
        elem = elem.parentNode;
    }
    if (!overScrollableDiv && overMapDiv) {
        if (overLayerDiv) {
            this.wheelZoom(e);
        }
        OpenLayers.Event.stop(e);
    } 
}, wheelZoom: function(e) {
    var delta = 0;
    if (!e) {
        e = window.event;
    }
    if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera && window.opera.version() < 9.2) {
            delta = -delta;
        } 
    } else if (e.detail) {
        delta = -e.detail / 3;
    }
    if (delta) {
        if (this.mousePosition) {
            e.xy = this.mousePosition;
        }
        if (!e.xy) {
            e.xy = this.map.getPixelFromLonLat(this.map.getCenter());
        }
        if (delta < 0) {
            this.callback("down", [e, delta]);
        } else {
            this.callback("up", [e, delta]);
        } 
    } 
}, mousemove: function(evt) {
    this.mousePosition = evt.xy;
}, activate: function(evt) {
    if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        var wheelListener = this.wheelListener;
        OpenLayers.Event.observe(window, "DOMMouseScroll", wheelListener);
        OpenLayers.Event.observe(window, "mousewheel", wheelListener);
        OpenLayers.Event.observe(document, "mousewheel", wheelListener);
        return true;
    } else {
        return false;
    } 
}, deactivate: function(evt) {
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        var wheelListener = this.wheelListener;
        OpenLayers.Event.stopObserving(window, "DOMMouseScroll", wheelListener);
        OpenLayers.Event.stopObserving(window, "mousewheel", wheelListener);
        OpenLayers.Event.stopObserving(document, "mousewheel", wheelListener);
        return true;
    } else {
        return false;
    } 
}, CLASS_NAME: "OpenLayers.Handler.MouseWheel"
});
OpenLayers.Layer = OpenLayers.Class({ id: null, name: null, div: null, opacity: null, alwaysInRange: null, EVENT_TYPES: ["loadstart", "loadend", "loadcancel", "visibilitychanged", "moveend"], events: null, map: null, isBaseLayer: false, alpha: false, displayInLayerSwitcher: true, visibility: true, attribution: null, inRange: false, imageSize: null, imageOffset: null, options: null, eventListeners: null, gutter: 0, projection: null, units: null, scales: null, resolutions: null, maxExtent: null, minExtent: null, maxResolution: null, minResolution: null, numZoomLevels: null, minScale: null, maxScale: null, displayOutsideMaxExtent: false, wrapDateLine: false, transitionEffect: null, SUPPORTED_TRANSITIONS: ['resize'], initialize: function(name, options) {
    this.addOptions(options);
    this.name = name;
    if (this.id == null) {
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
        this.div = OpenLayers.Util.createDiv(this.id);
        this.div.style.width = "100%";
        this.div.style.height = "100%";
        this.events = new OpenLayers.Events(this, this.div, this.EVENT_TYPES);
        if (this.eventListeners instanceof Object) {
            this.events.on(this.eventListeners);
        } 
    }
    if (this.wrapDateLine) {
        this.displayOutsideMaxExtent = true;
    } 
}, destroy: function(setNewBaseLayer) {
    if (setNewBaseLayer == null) {
        setNewBaseLayer = true;
    }
    if (this.map != null) {
        this.map.removeLayer(this, setNewBaseLayer);
    }
    this.projection = null;
    this.map = null;
    this.name = null;
    this.div = null;
    this.options = null;
    if (this.events) {
        if (this.eventListeners) {
            this.events.un(this.eventListeners);
        }
        this.events.destroy();
    }
    this.eventListeners = null;
    this.events = null;
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer(this.name, this.options);
    }
    OpenLayers.Util.applyDefaults(obj, this);
    obj.map = null;
    return obj;
}, setName: function(newName) {
    if (newName != this.name) {
        this.name = newName;
        if (this.map != null) {
            this.map.events.triggerEvent("changelayer", { layer: this, property: "name" });
        } 
    } 
}, addOptions: function(newOptions) {
    if (this.options == null) {
        this.options = {};
    }
    OpenLayers.Util.extend(this.options, newOptions);
    OpenLayers.Util.extend(this, newOptions);
}, onMapResize: function() { }, redraw: function() {
    var redrawn = false;
    if (this.map) {
        this.inRange = this.calculateInRange();
        var extent = this.getExtent();
        if (extent && this.inRange && this.visibility) {
            this.moveTo(extent, true, false);
            redrawn = true;
        } 
    }
    return redrawn;
}, moveTo: function(bounds, zoomChanged, dragging) {
    var display = this.visibility;
    if (!this.isBaseLayer) {
        display = display && this.inRange;
    }
    this.display(display);
}, setMap: function(map) {
    if (this.map == null) {
        this.map = map;
        this.maxExtent = this.maxExtent || this.map.maxExtent;
        this.projection = this.projection || this.map.projection;
        if (this.projection && typeof this.projection == "string") {
            this.projection = new OpenLayers.Projection(this.projection);
        }
        this.units = this.projection.getUnits() || this.units || this.map.units;
        this.initResolutions();
        if (!this.isBaseLayer) {
            this.inRange = this.calculateInRange();
            var show = ((this.visibility) && (this.inRange));
            this.div.style.display = show ? "" : "none";
        }
        this.setTileSize();
    } 
}, removeMap: function(map) { }, getImageSize: function() {
    return (this.imageSize || this.tileSize);
}, setTileSize: function(size) {
    var tileSize = (size) ? size : ((this.tileSize) ? this.tileSize : this.map.getTileSize());
    this.tileSize = tileSize;
    if (this.gutter) {
        this.imageOffset = new OpenLayers.Pixel(-this.gutter, -this.gutter);
        this.imageSize = new OpenLayers.Size(tileSize.w + (2 * this.gutter), tileSize.h + (2 * this.gutter));
    } 
}, getVisibility: function() {
    return this.visibility;
}, setVisibility: function(visibility) {
    if (visibility != this.visibility) {
        this.visibility = visibility;
        this.display(visibility);
        this.redraw();
        if (this.map != null) {
            this.map.events.triggerEvent("changelayer", { layer: this, property: "visibility" });
        }
        this.events.triggerEvent("visibilitychanged");
    } 
}, display: function(display) {
    var inRange = this.calculateInRange();
    if (display != (this.div.style.display != "none")) {
        this.div.style.display = (display && inRange) ? "block" : "none";
    } 
}, calculateInRange: function() {
    var inRange = false;
    if (this.alwaysInRange) {
        inRange = true;
    } else {
        if (this.map) {
            var resolution = this.map.getResolution();
            inRange = ((resolution >= this.minResolution) && (resolution <= this.maxResolution));
        } 
    }
    return inRange;
}, setIsBaseLayer: function(isBaseLayer) {
    if (isBaseLayer != this.isBaseLayer) {
        this.isBaseLayer = isBaseLayer;
        if (this.map != null) {
            this.map.events.triggerEvent("changebaselayer", { layer: this });
        } 
    } 
}, initResolutions: function() {
    var props = new Array('projection', 'units', 'scales', 'resolutions', 'maxScale', 'minScale', 'maxResolution', 'minResolution', 'minExtent', 'maxExtent', 'numZoomLevels', 'maxZoomLevel');
    var notScaleProps = ['projection', 'units'];
    var useInRange = false;
    var confProps = {};
    for (var i = 0, len = props.length;
i < len;
i++) {
        var property = props[i];
        if (this.options[property] && OpenLayers.Util.indexOf(notScaleProps, property) == -1) {
            useInRange = true;
        }
        confProps[property] = this.options[property] || this.map[property];
    }
    if (this.alwaysInRange == null) {
        this.alwaysInRange = !useInRange;
    }
    if ((this.options.minScale != null || this.options.maxScale != null) && this.options.scales == null) {
        confProps.scales = null;
    }
    if ((this.options.minResolution != null || this.options.maxResolution != null) && this.options.resolutions == null) {
        confProps.resolutions = null;
    }
    if ((!confProps.numZoomLevels) && (confProps.maxZoomLevel)) {
        confProps.numZoomLevels = confProps.maxZoomLevel + 1;
    }
    if ((confProps.scales != null) || (confProps.resolutions != null)) {
        if (confProps.scales != null) {
            confProps.resolutions = [];
            for (var i = 0, len = confProps.scales.length;
i < len;
i++) {
                var scale = confProps.scales[i];
                confProps.resolutions[i] = OpenLayers.Util.getResolutionFromScale(scale, confProps.units);
            } 
        }
        confProps.numZoomLevels = confProps.resolutions.length;
    } else {
        if (confProps.minScale) {
            confProps.maxResolution = OpenLayers.Util.getResolutionFromScale(confProps.minScale, confProps.units);
        } else if (confProps.maxResolution == "auto") {
            var viewSize = this.map.getSize();
            var wRes = confProps.maxExtent.getWidth() / viewSize.w;
            var hRes = confProps.maxExtent.getHeight() / viewSize.h;
            confProps.maxResolution = Math.max(wRes, hRes);
        }
        if (confProps.maxScale != null) {
            confProps.minResolution = OpenLayers.Util.getResolutionFromScale(confProps.maxScale, confProps.units);
        } else if ((confProps.minResolution == "auto") && (confProps.minExtent != null)) {
            var viewSize = this.map.getSize();
            var wRes = confProps.minExtent.getWidth() / viewSize.w;
            var hRes = confProps.minExtent.getHeight() / viewSize.h;
            confProps.minResolution = Math.max(wRes, hRes);
        }
        if (confProps.minResolution != null && this.options.numZoomLevels == undefined) {
            var ratio = confProps.maxResolution / confProps.minResolution;
            confProps.numZoomLevels = Math.floor(Math.log(ratio) / Math.log(2)) + 1;
        }
        confProps.resolutions = new Array(confProps.numZoomLevels);
        var base = 2;
        if (typeof confProps.minResolution == "number" && confProps.numZoomLevels > 1) {
            base = Math.pow((confProps.maxResolution / confProps.minResolution), (1 / (confProps.numZoomLevels - 1)));
        }
        for (var i = 0;
i < confProps.numZoomLevels;
i++) {
            var res = confProps.maxResolution / Math.pow(base, i);
            confProps.resolutions[i] = res;
        } 
    }
    confProps.resolutions.sort(function(a, b) {
        return (b - a);
    });
    this.resolutions = confProps.resolutions;
    this.maxResolution = confProps.resolutions[0];
    var lastIndex = confProps.resolutions.length - 1;
    this.minResolution = confProps.resolutions[lastIndex];
    this.scales = [];
    for (var i = 0, len = confProps.resolutions.length;
i < len;
i++) {
        this.scales[i] = OpenLayers.Util.getScaleFromResolution(confProps.resolutions[i], confProps.units);
    }
    this.minScale = this.scales[0];
    this.maxScale = this.scales[this.scales.length - 1];
    this.numZoomLevels = confProps.numZoomLevels;
}, getResolution: function() {
    var zoom = this.map.getZoom();
    return this.getResolutionForZoom(zoom);
}, getExtent: function() {
    return this.map.calculateBounds();
}, getZoomForExtent: function(extent, closest) {
    var viewSize = this.map.getSize();
    var idealResolution = Math.max(extent.getWidth() / viewSize.w, extent.getHeight() / viewSize.h);
    return this.getZoomForResolution(idealResolution, closest);
}, getDataExtent: function() { }, getResolutionForZoom: function(zoom) {
    zoom = Math.max(0, Math.min(zoom, this.resolutions.length - 1));
    var resolution;
    if (this.map.fractionalZoom) {
        var low = Math.floor(zoom);
        var high = Math.ceil(zoom);
        resolution = this.resolutions[high] +
((zoom - low) * (this.resolutions[low] - this.resolutions[high]));
    } else {
        resolution = this.resolutions[Math.round(zoom)];
    }
    return resolution;
}, getZoomForResolution: function(resolution, closest) {
    var zoom;
    if (this.map.fractionalZoom) {
        var lowZoom = 0;
        var highZoom = this.resolutions.length - 1;
        var highRes = this.resolutions[lowZoom];
        var lowRes = this.resolutions[highZoom];
        var res;
        for (var i = 0, len = this.resolutions.length;
i < len;
++i) {
            res = this.resolutions[i];
            if (res >= resolution) {
                highRes = res;
                lowZoom = i;
            }
            if (res <= resolution) {
                lowRes = res;
                highZoom = i;
                break;
            } 
        }
        var dRes = highRes - lowRes;
        if (dRes > 0) {
            zoom = lowZoom + ((resolution - lowRes) / dRes);
        } else {
            zoom = lowZoom;
        } 
    } else {
        var diff;
        var minDiff = Number.POSITIVE_INFINITY;
        for (var i = 0, len = this.resolutions.length;
i < len;
i++) {
            if (closest) {
                diff = Math.abs(this.resolutions[i] - resolution);
                if (diff > minDiff) {
                    break;
                }
                minDiff = diff;
            } else {
                if (this.resolutions[i] < resolution) {
                    break;
                } 
            } 
        }
        zoom = Math.max(0, i - 1);
    }
    return zoom;
}, getLonLatFromViewPortPx: function(viewPortPx) {
    var lonlat = null;
    if (viewPortPx != null) {
        var size = this.map.getSize();
        var center = this.map.getCenter();
        if (center) {
            var res = this.map.getResolution();
            var delta_x = viewPortPx.x - (size.w / 2);
            var delta_y = viewPortPx.y - (size.h / 2);
            lonlat = new OpenLayers.LonLat(center.lon + delta_x * res, center.lat - delta_y * res);
            if (this.wrapDateLine) {
                lonlat = lonlat.wrapDateLine(this.maxExtent);
            } 
        } 
    }
    return lonlat;
}, getViewPortPxFromLonLat: function(lonlat) {
    var px = null;
    if (lonlat != null) {
        var resolution = this.map.getResolution();
        var extent = this.map.getExtent();
        px = new OpenLayers.Pixel((1 / resolution * (lonlat.lon - extent.left)), (1 / resolution * (extent.top - lonlat.lat)));
    }
    return px;
}, setOpacity: function(opacity) {
    if (opacity != this.opacity) {
        this.opacity = opacity;
        for (var i = 0, len = this.div.childNodes.length;
i < len;
++i) {
            var element = this.div.childNodes[i].firstChild;
            OpenLayers.Util.modifyDOMElement(element, null, null, null, null, null, null, opacity);
        } 
    } 
}, getZIndex: function() {
    return this.div.style.zIndex;
}, setZIndex: function(zIndex) {
    this.div.style.zIndex = zIndex;
}, adjustBounds: function(bounds) {
    if (this.gutter) {
        var mapGutter = this.gutter * this.map.getResolution();
        bounds = new OpenLayers.Bounds(bounds.left - mapGutter, bounds.bottom - mapGutter, bounds.right + mapGutter, bounds.top + mapGutter);
    }
    if (this.wrapDateLine) {
        var wrappingOptions = { 'rightTolerance': this.getResolution() };
        bounds = bounds.wrapDateLine(this.maxExtent, wrappingOptions);
    }
    return bounds;
}, CLASS_NAME: "OpenLayers.Layer"
});
OpenLayers.Marker.Box = OpenLayers.Class(OpenLayers.Marker, { bounds: null, div: null, initialize: function(bounds, borderColor, borderWidth) {
    this.bounds = bounds;
    this.div = OpenLayers.Util.createDiv();
    this.div.style.overflow = 'hidden';
    this.events = new OpenLayers.Events(this, this.div, null);
    this.setBorder(borderColor, borderWidth);
}, destroy: function() {
    this.bounds = null;
    this.div = null;
    OpenLayers.Marker.prototype.destroy.apply(this, arguments);
}, setBorder: function(color, width) {
    if (!color) {
        color = "red";
    }
    if (!width) {
        width = 2;
    }
    this.div.style.border = width + "px solid " + color;
}, draw: function(px, sz) {
    OpenLayers.Util.modifyDOMElement(this.div, null, px, sz);
    return this.div;
}, onScreen: function() {
    var onScreen = false;
    if (this.map) {
        var screenBounds = this.map.getExtent();
        onScreen = screenBounds.containsBounds(this.bounds, true, true);
    }
    return onScreen;
}, display: function(display) {
    this.div.style.display = (display) ? "" : "none";
}, CLASS_NAME: "OpenLayers.Marker.Box"
});
OpenLayers.Popup.FramedCloud = OpenLayers.Class(OpenLayers.Popup.Framed, { contentDisplayClass: "olFramedCloudPopupContent", autoSize: true, panMapIfOutOfView: true, imageSize: new OpenLayers.Size(676, 736), isAlphaImage: false, fixedRelativePosition: false, positionBlocks: { "tl": { 'offset': new OpenLayers.Pixel(44, 0), 'padding': new OpenLayers.Bounds(8, 40, 8, 9), 'blocks': [{ size: new OpenLayers.Size('auto', 'auto'), anchor: new OpenLayers.Bounds(0, 51, 22, 0), position: new OpenLayers.Pixel(0, 0) }, { size: new OpenLayers.Size(22, 'auto'), anchor: new OpenLayers.Bounds(null, 50, 0, 0), position: new OpenLayers.Pixel(-638, 0) }, { size: new OpenLayers.Size('auto', 21), anchor: new OpenLayers.Bounds(0, 32, 80, null), position: new OpenLayers.Pixel(0, -629) }, { size: new OpenLayers.Size(22, 21), anchor: new OpenLayers.Bounds(null, 32, 0, null), position: new OpenLayers.Pixel(-638, -629) }, { size: new OpenLayers.Size(81, 54), anchor: new OpenLayers.Bounds(null, 0, 0, null), position: new OpenLayers.Pixel(0, -668)}] }, "tr": { 'offset': new OpenLayers.Pixel(-45, 0), 'padding': new OpenLayers.Bounds(8, 40, 8, 9), 'blocks': [{ size: new OpenLayers.Size('auto', 'auto'), anchor: new OpenLayers.Bounds(0, 51, 22, 0), position: new OpenLayers.Pixel(0, 0) }, { size: new OpenLayers.Size(22, 'auto'), anchor: new OpenLayers.Bounds(null, 50, 0, 0), position: new OpenLayers.Pixel(-638, 0) }, { size: new OpenLayers.Size('auto', 21), anchor: new OpenLayers.Bounds(0, 32, 22, null), position: new OpenLayers.Pixel(0, -629) }, { size: new OpenLayers.Size(22, 21), anchor: new OpenLayers.Bounds(null, 32, 0, null), position: new OpenLayers.Pixel(-638, -629) }, { size: new OpenLayers.Size(81, 54), anchor: new OpenLayers.Bounds(0, 0, null, null), position: new OpenLayers.Pixel(-215, -668)}] }, "bl": { 'offset': new OpenLayers.Pixel(45, 0), 'padding': new OpenLayers.Bounds(8, 9, 8, 40), 'blocks': [{ size: new OpenLayers.Size('auto', 'auto'), anchor: new OpenLayers.Bounds(0, 21, 22, 32), position: new OpenLayers.Pixel(0, 0) }, { size: new OpenLayers.Size(22, 'auto'), anchor: new OpenLayers.Bounds(null, 21, 0, 32), position: new OpenLayers.Pixel(-638, 0) }, { size: new OpenLayers.Size('auto', 21), anchor: new OpenLayers.Bounds(0, 0, 22, null), position: new OpenLayers.Pixel(0, -629) }, { size: new OpenLayers.Size(22, 21), anchor: new OpenLayers.Bounds(null, 0, 0, null), position: new OpenLayers.Pixel(-638, -629) }, { size: new OpenLayers.Size(81, 54), anchor: new OpenLayers.Bounds(null, null, 0, 0), position: new OpenLayers.Pixel(-101, -674)}] }, "br": { 'offset': new OpenLayers.Pixel(-44, 0), 'padding': new OpenLayers.Bounds(8, 9, 8, 40), 'blocks': [{ size: new OpenLayers.Size('auto', 'auto'), anchor: new OpenLayers.Bounds(0, 21, 22, 32), position: new OpenLayers.Pixel(0, 0) }, { size: new OpenLayers.Size(22, 'auto'), anchor: new OpenLayers.Bounds(null, 21, 0, 32), position: new OpenLayers.Pixel(-638, 0) }, { size: new OpenLayers.Size('auto', 21), anchor: new OpenLayers.Bounds(0, 0, 22, null), position: new OpenLayers.Pixel(0, -629) }, { size: new OpenLayers.Size(22, 21), anchor: new OpenLayers.Bounds(null, 0, 0, null), position: new OpenLayers.Pixel(-638, -629) }, { size: new OpenLayers.Size(81, 54), anchor: new OpenLayers.Bounds(0, null, null, 0), position: new OpenLayers.Pixel(-311, -674)}]} }, minSize: new OpenLayers.Size(105, 10), maxSize: new OpenLayers.Size(600, 660), initialize: function(id, lonlat, contentSize, contentHTML, anchor, closeBox, closeBoxCallback) {
    this.imageSrc = OpenLayers.Util.getImagesLocation() + 'cloud-popup-relative.png';
    OpenLayers.Popup.Framed.prototype.initialize.apply(this, arguments);
    this.contentDiv.className = this.contentDisplayClass;
}, destroy: function() {
    OpenLayers.Popup.Framed.prototype.destroy.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Popup.FramedCloud"
});
OpenLayers.Control.DragFeature = OpenLayers.Class(OpenLayers.Control, { geometryTypes: null, onStart: function(feature, pixel) { }, onDrag: function(feature, pixel) { }, onComplete: function(feature, pixel) { }, layer: null, feature: null, dragCallbacks: {}, featureCallbacks: {}, lastPixel: null, initialize: function(layer, options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.layer = layer;
    this.handlers = { drag: new OpenLayers.Handler.Drag(this, OpenLayers.Util.extend({ down: this.downFeature, move: this.moveFeature, up: this.upFeature, out: this.cancel, done: this.doneDragging }, this.dragCallbacks)), feature: new OpenLayers.Handler.Feature(this, this.layer, OpenLayers.Util.extend({ over: this.overFeature, out: this.outFeature }, this.featureCallbacks), { geometryTypes: this.geometryTypes }) };
}, destroy: function() {
    this.layer = null;
    OpenLayers.Control.prototype.destroy.apply(this, []);
}, activate: function() {
    return (this.handlers.feature.activate() && OpenLayers.Control.prototype.activate.apply(this, arguments));
}, deactivate: function() {
    this.handlers.drag.deactivate();
    this.handlers.feature.deactivate();
    this.feature = null;
    this.dragging = false;
    this.lastPixel = null;
    return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
}, overFeature: function(feature) {
    if (!this.handlers.drag.dragging) {
        this.feature = feature;
        this.handlers.drag.activate();
        this.over = true;
        this.map.div.style.cursor = "move";
    } else {
        if (this.feature.id == feature.id) {
            this.over = true;
        } else {
            this.over = false;
        } 
    } 
}, downFeature: function(pixel) {
    this.lastPixel = pixel;
    this.onStart(this.feature, pixel);
}, moveFeature: function(pixel) {
    var res = this.map.getResolution();
    this.feature.geometry.move(res * (pixel.x - this.lastPixel.x), res * (this.lastPixel.y - pixel.y));
    this.layer.drawFeature(this.feature);
    this.lastPixel = pixel;
    this.onDrag(this.feature, pixel);
}, upFeature: function(pixel) {
    if (!this.over) {
        this.handlers.drag.deactivate();
        this.feature = null;
        this.map.div.style.cursor = "default";
    } else {
        this.map.div.style.cursor = "move";
    } 
}, doneDragging: function(pixel) {
    this.onComplete(this.feature, pixel);
}, outFeature: function(feature) {
    if (!this.handlers.drag.dragging) {
        this.over = false;
        this.handlers.drag.deactivate();
        this.map.div.style.cursor = "default";
        this.feature = null;
    } else {
        if (this.feature.id == feature.id) {
            this.over = false;
        } 
    } 
}, cancel: function() {
    this.handlers.drag.deactivate();
    this.over = false;
}, setMap: function(map) {
    this.handlers.drag.setMap(map);
    this.handlers.feature.setMap(map);
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Control.DragFeature"
});
OpenLayers.Control.DragPan = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_TOOL, panned: false, interval: 25, draw: function() {
    this.handler = new OpenLayers.Handler.Drag(this, { "move": this.panMap, "done": this.panMapDone }, { interval: this.interval });
}, panMap: function(xy) {
    this.panned = true;
    this.map.pan(this.handler.last.x - xy.x, this.handler.last.y - xy.y, { dragging: this.handler.dragging, animate: false });
}, panMapDone: function(xy) {
    if (this.panned) {
        this.panMap(xy);
        this.panned = false;
    } 
}, CLASS_NAME: "OpenLayers.Control.DragPan"
});
OpenLayers.Control.KeyboardDefaults = OpenLayers.Class(OpenLayers.Control, { slideFactor: 75, initialize: function() {
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    if (this.handler) {
        this.handler.destroy();
    }
    this.handler = null;
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, draw: function() {
    this.handler = new OpenLayers.Handler.Keyboard(this, { "keydown": this.defaultKeyPress });
    this.activate();
}, defaultKeyPress: function(evt) {
    switch (evt.keyCode) {
        case OpenLayers.Event.KEY_LEFT: this.map.pan(-this.slideFactor, 0);
            break;
        case OpenLayers.Event.KEY_RIGHT: this.map.pan(this.slideFactor, 0);
            break;
        case OpenLayers.Event.KEY_UP: this.map.pan(0, -this.slideFactor);
            break;
        case OpenLayers.Event.KEY_DOWN: this.map.pan(0, this.slideFactor);
            break;
        case 33: var size = this.map.getSize();
            this.map.pan(0, -0.75 * size.h);
            break;
        case 34: var size = this.map.getSize();
            this.map.pan(0, 0.75 * size.h);
            break;
        case 35: var size = this.map.getSize();
            this.map.pan(0.75 * size.w, 0);
            break;
        case 36: var size = this.map.getSize();
            this.map.pan(-0.75 * size.w, 0);
            break;
        case 43: case 61: case 187: case 107: this.map.zoomIn();
            break;
        case 45: case 109: case 189: case 95: this.map.zoomOut();
            break;
    } 
}, CLASS_NAME: "OpenLayers.Control.KeyboardDefaults"
});
OpenLayers.State = { UNKNOWN: 'Unknown', INSERT: 'Insert', UPDATE: 'Update', DELETE: 'Delete' };
OpenLayers.Feature.Vector = OpenLayers.Class(OpenLayers.Feature, { fid: null, geometry: null, attributes: null, state: null, style: null, renderIntent: "default", initialize: function(geometry, attributes, style) {
    OpenLayers.Feature.prototype.initialize.apply(this, [null, null, attributes]);
    this.lonlat = null;
    this.geometry = geometry ? geometry : null;
    this.state = null;
    this.attributes = {};
    if (attributes) {
        this.attributes = OpenLayers.Util.extend(this.attributes, attributes);
    }
    this.style = style ? style : null;
}, destroy: function() {
    if (this.layer) {
        this.layer.removeFeatures(this);
        this.layer = null;
    }
    this.geometry = null;
    OpenLayers.Feature.prototype.destroy.apply(this, arguments);
}, clone: function() {
    return new OpenLayers.Feature.Vector(this.geometry ? this.geometry.clone() : null, this.attributes, this.style);
}, onScreen: function(boundsOnly) {
    var onScreen = false;
    if (this.layer && this.layer.map) {
        var screenBounds = this.layer.map.getExtent();
        if (boundsOnly) {
            var featureBounds = this.geometry.getBounds();
            onScreen = screenBounds.intersectsBounds(featureBounds);
        } else {
            var screenPoly = screenBounds.toGeometry();
            onScreen = screenPoly.intersects(this.geometry);
        } 
    }
    return onScreen;
}, createMarker: function() {
    return null;
}, destroyMarker: function() { }, createPopup: function() {
    return null;
}, atPoint: function(lonlat, toleranceLon, toleranceLat) {
    var atPoint = false;
    if (this.geometry) {
        atPoint = this.geometry.atPoint(lonlat, toleranceLon, toleranceLat);
    }
    return atPoint;
}, destroyPopup: function() { }, move: function(location) {
    if (!this.layer || !this.geometry.move) {
        return;
    }
    var pixel;
    if (location.CLASS_NAME == "OpenLayers.LonLat") {
        pixel = this.layer.getViewPortPxFromLonLat(location);
    } else {
        pixel = location;
    }
    var lastPixel = this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());
    var res = this.layer.map.getResolution();
    this.geometry.move(res * (pixel.x - lastPixel.x), res * (lastPixel.y - pixel.y));
    this.layer.drawFeature(this);
    return lastPixel;
}, toState: function(state) {
    if (state == OpenLayers.State.UPDATE) {
        switch (this.state) {
            case OpenLayers.State.UNKNOWN: case OpenLayers.State.DELETE: this.state = state;
                break;
            case OpenLayers.State.UPDATE: case OpenLayers.State.INSERT: break;
        } 
    } else if (state == OpenLayers.State.INSERT) {
        switch (this.state) {
            case OpenLayers.State.UNKNOWN: break;
            default: this.state = state;
                break;
        } 
    } else if (state == OpenLayers.State.DELETE) {
        switch (this.state) {
            case OpenLayers.State.INSERT: break;
            case OpenLayers.State.DELETE: break;
            case OpenLayers.State.UNKNOWN: case OpenLayers.State.UPDATE: this.state = state;
                break;
        } 
    } else if (state == OpenLayers.State.UNKNOWN) {
        this.state = state;
    } 
}, CLASS_NAME: "OpenLayers.Feature.Vector"
});
OpenLayers.Feature.Vector.style = { 'default': { fillColor: "#ee9900", fillOpacity: 0.4, hoverFillColor: "white", hoverFillOpacity: 0.8, strokeColor: "#ee9900", strokeOpacity: 1, strokeWidth: 1, strokeLinecap: "round", strokeDashstyle: "solid", hoverStrokeColor: "red", hoverStrokeOpacity: 1, hoverStrokeWidth: 0.2, pointRadius: 6, hoverPointRadius: 1, hoverPointUnit: "%", pointerEvents: "visiblePainted", cursor: "inherit" }, 'select': { fillColor: "blue", fillOpacity: 0.4, hoverFillColor: "white", hoverFillOpacity: 0.8, strokeColor: "blue", strokeOpacity: 1, strokeWidth: 2, strokeLinecap: "round", strokeDashstyle: "solid", hoverStrokeColor: "red", hoverStrokeOpacity: 1, hoverStrokeWidth: 0.2, pointRadius: 6, hoverPointRadius: 1, hoverPointUnit: "%", pointerEvents: "visiblePainted", cursor: "pointer" }, 'temporary': { fillColor: "yellow", fillOpacity: 0.2, hoverFillColor: "white", hoverFillOpacity: 0.8, strokeColor: "yellow", strokeOpacity: 1, strokeLinecap: "round", strokeWidth: 4, strokeDashstyle: "solid", hoverStrokeColor: "red", hoverStrokeOpacity: 1, hoverStrokeWidth: 0.2, pointRadius: 6, hoverPointRadius: 1, hoverPointUnit: "%", pointerEvents: "visiblePainted", cursor: "inherit"} };
OpenLayers.Feature.WFS = OpenLayers.Class(OpenLayers.Feature, { initialize: function(layer, xmlNode) {
    var newArguments = arguments;
    var data = this.processXMLNode(xmlNode);
    newArguments = new Array(layer, data.lonlat, data);
    OpenLayers.Feature.prototype.initialize.apply(this, newArguments);
    this.createMarker();
    this.layer.addMarker(this.marker);
}, destroy: function() {
    if (this.marker != null) {
        this.layer.removeMarker(this.marker);
    }
    OpenLayers.Feature.prototype.destroy.apply(this, arguments);
}, processXMLNode: function(xmlNode) {
    var point = OpenLayers.Ajax.getElementsByTagNameNS(xmlNode, "http://www.opengis.net/gml", "gml", "Point");
    var text = OpenLayers.Util.getXmlNodeValue(OpenLayers.Ajax.getElementsByTagNameNS(point[0], "http://www.opengis.net/gml", "gml", "coordinates")[0]);
    var floats = text.split(",");
    return { lonlat: new OpenLayers.LonLat(parseFloat(floats[0]), parseFloat(floats[1])), id: null };
}, CLASS_NAME: "OpenLayers.Feature.WFS"
});
OpenLayers.Format.WMC.v1_0_0 = OpenLayers.Class(OpenLayers.Format.WMC.v1, { VERSION: "1.0.0", schemaLocation: "http://www.opengis.net/context http://schemas.opengis.net/context/1.0.0/context.xsd", initialize: function(options) {
    OpenLayers.Format.WMC.v1.prototype.initialize.apply(this, [options]);
}, CLASS_NAME: "OpenLayers.Format.WMC.v1_0_0"
});
OpenLayers.Format.WMC.v1_1_0 = OpenLayers.Class(OpenLayers.Format.WMC.v1, { VERSION: "1.1.0", schemaLocation: "http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd", initialize: function(options) {
    OpenLayers.Format.WMC.v1.prototype.initialize.apply(this, [options]);
}, read_sld_MinScaleDenominator: function(layerInfo, node) {
    layerInfo.options.maxScale = this.getChildValue(node);
}, read_sld_MaxScaleDenominator: function(layerInfo, node) {
    layerInfo.options.minScale = this.getChildValue(node);
}, write_wmc_Layer: function(layer) {
    var node = OpenLayers.Format.WMC.v1.prototype.write_wmc_Layer.apply(this, [layer]);
    if (layer.options.resolutions || layer.options.scales || layer.options.minResolution || layer.options.maxScale) {
        var minSD = this.createElementNS(this.namespaces.sld, "sld:MinScaleDenominator");
        minSD.appendChild(this.createTextNode(layer.maxScale.toPrecision(10)));
        node.insertBefore(minSD, node.childNodes[3]);
    }
    if (layer.options.resolutions || layer.options.scales || layer.options.maxResolution || layer.options.minScale) {
        var maxSD = this.createElementNS(this.namespaces.sld, "sld:MaxScaleDenominator");
        maxSD.appendChild(this.createTextNode(layer.minScale.toPrecision(10)));
        node.insertBefore(maxSD, node.childNodes[4]);
    }
    return node;
}, CLASS_NAME: "OpenLayers.Format.WMC.v1_1_0"
});
OpenLayers.Handler.Box = OpenLayers.Class(OpenLayers.Handler, { dragHandler: null, boxDivClassName: 'olHandlerBoxZoomBox', boxCharacteristics: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    var callbacks = { "down": this.startBox, "move": this.moveBox, "out": this.removeBox, "up": this.endBox };
    this.dragHandler = new OpenLayers.Handler.Drag(this, callbacks, { keyMask: this.keyMask });
}, setMap: function(map) {
    OpenLayers.Handler.prototype.setMap.apply(this, arguments);
    if (this.dragHandler) {
        this.dragHandler.setMap(map);
    } 
}, startBox: function(xy) {
    this.zoomBox = OpenLayers.Util.createDiv('zoomBox', this.dragHandler.start);
    this.zoomBox.className = this.boxDivClassName;
    this.zoomBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
    this.map.viewPortDiv.appendChild(this.zoomBox);
    this.map.div.style.cursor = "crosshair";
}, moveBox: function(xy) {
    var startX = this.dragHandler.start.x;
    var startY = this.dragHandler.start.y;
    var deltaX = Math.abs(startX - xy.x);
    var deltaY = Math.abs(startY - xy.y);
    this.zoomBox.style.width = Math.max(1, deltaX) + "px";
    this.zoomBox.style.height = Math.max(1, deltaY) + "px";
    this.zoomBox.style.left = xy.x < startX ? xy.x + "px" : startX + "px";
    this.zoomBox.style.top = xy.y < startY ? xy.y + "px" : startY + "px";
    var box = this.getBoxCharacteristics(deltaX, deltaY);
    if (box.newBoxModel) {
        if (xy.x > startX) {
            this.zoomBox.style.width = Math.max(1, deltaX - box.xOffset) + "px";
        }
        if (xy.y > startY) {
            this.zoomBox.style.height = Math.max(1, deltaY - box.yOffset) + "px";
        } 
    } 
}, endBox: function(end) {
    var result;
    if (Math.abs(this.dragHandler.start.x - end.x) > 5 || Math.abs(this.dragHandler.start.y - end.y) > 5) {
        var start = this.dragHandler.start;
        var top = Math.min(start.y, end.y);
        var bottom = Math.max(start.y, end.y);
        var left = Math.min(start.x, end.x);
        var right = Math.max(start.x, end.x);
        result = new OpenLayers.Bounds(left, bottom, right, top);
    } else {
        result = this.dragHandler.start.clone();
    }
    this.removeBox();
    this.map.div.style.cursor = "";
    this.callback("done", [result]);
}, removeBox: function() {
    this.map.viewPortDiv.removeChild(this.zoomBox);
    this.zoomBox = null;
    this.boxCharacteristics = null;
}, activate: function() {
    if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        this.dragHandler.activate();
        return true;
    } else {
        return false;
    } 
}, deactivate: function() {
    if (OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        this.dragHandler.deactivate();
        return true;
    } else {
        return false;
    } 
}, getBoxCharacteristics: function(dx, dy) {
    if (!this.boxCharacteristics) {
        var xOffset = parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-left-width")) + parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-right-width")) + 1;
        var yOffset = parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-top-width")) + parseInt(OpenLayers.Element.getStyle(this.zoomBox, "border-bottom-width")) + 1;
        var newBoxModel = OpenLayers.Util.getBrowserName() == "msie" ? document.compatMode != "BackCompat" : true;
        this.boxCharacteristics = { xOffset: xOffset, yOffset: yOffset, newBoxModel: newBoxModel };
    }
    return this.boxCharacteristics;
}, CLASS_NAME: "OpenLayers.Handler.Box"
});
OpenLayers.Handler.RegularPolygon = OpenLayers.Class(OpenLayers.Handler.Drag, { sides: 4, radius: null, snapAngle: null, snapToggle: 'shiftKey', persist: false, irregular: false, angle: null, fixedRadius: false, feature: null, layer: null, origin: null, initialize: function(control, callbacks, options) {
    this.style = OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'], {});
    OpenLayers.Handler.prototype.initialize.apply(this, [control, callbacks, options]);
    this.options = (options) ? options : new Object();
}, setOptions: function(newOptions) {
    OpenLayers.Util.extend(this.options, newOptions);
    OpenLayers.Util.extend(this, newOptions);
}, activate: function() {
    var activated = false;
    if (OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        var options = { displayInLayerSwitcher: false, calculateInRange: function() {
            return true;
        } 
        };
        this.layer = new OpenLayers.Layer.Vector(this.CLASS_NAME, options);
        this.map.addLayer(this.layer);
        activated = true;
    }
    return activated;
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Handler.Drag.prototype.deactivate.apply(this, arguments)) {
        if (this.dragging) {
            this.cancel();
        }
        if (this.layer.map != null) {
            this.layer.destroy(false);
            if (this.feature) {
                this.feature.destroy();
            } 
        }
        this.layer = null;
        this.feature = null;
        deactivated = true;
    }
    return deactivated;
}, down: function(evt) {
    this.fixedRadius = !!(this.radius);
    var maploc = this.map.getLonLatFromPixel(evt.xy);
    this.origin = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
    if (!this.fixedRadius || this.irregular) {
        this.radius = this.map.getResolution();
    }
    if (this.persist) {
        this.clear();
    }
    this.feature = new OpenLayers.Feature.Vector();
    this.createGeometry();
    this.layer.addFeatures([this.feature], { silent: true });
    this.layer.drawFeature(this.feature, this.style);
}, move: function(evt) {
    var maploc = this.map.getLonLatFromPixel(evt.xy);
    var point = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
    if (this.irregular) {
        var ry = Math.sqrt(2) * Math.abs(point.y - this.origin.y) / 2;
        this.radius = Math.max(this.map.getResolution() / 2, ry);
    } else if (this.fixedRadius) {
        this.origin = point;
    } else {
        this.calculateAngle(point, evt);
        this.radius = Math.max(this.map.getResolution() / 2, point.distanceTo(this.origin));
    }
    this.modifyGeometry();
    if (this.irregular) {
        var dx = point.x - this.origin.x;
        var dy = point.y - this.origin.y;
        var ratio;
        if (dy == 0) {
            ratio = dx / (this.radius * Math.sqrt(2));
        } else {
            ratio = dx / dy;
        }
        this.feature.geometry.resize(1, this.origin, ratio);
        this.feature.geometry.move(dx / 2, dy / 2);
    }
    this.layer.drawFeature(this.feature, this.style);
}, up: function(evt) {
    this.finalize();
}, out: function(evt) {
    this.finalize();
}, createGeometry: function() {
    this.angle = Math.PI * ((1 / this.sides) - (1 / 2));
    if (this.snapAngle) {
        this.angle += this.snapAngle * (Math.PI / 180);
    }
    this.feature.geometry = OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin, this.radius, this.sides, this.snapAngle);
}, modifyGeometry: function() {
    var angle, dx, dy, point;
    var ring = this.feature.geometry.components[0];
    if (ring.components.length != (this.sides + 1)) {
        this.createGeometry();
        ring = this.feature.geometry.components[0];
    }
    for (var i = 0;
i < this.sides;
++i) {
        point = ring.components[i];
        angle = this.angle + (i * 2 * Math.PI / this.sides);
        point.x = this.origin.x + (this.radius * Math.cos(angle));
        point.y = this.origin.y + (this.radius * Math.sin(angle));
        point.clearBounds();
    } 
}, calculateAngle: function(point, evt) {
    var alpha = Math.atan2(point.y - this.origin.y, point.x - this.origin.x);
    if (this.snapAngle && (this.snapToggle && !evt[this.snapToggle])) {
        var snapAngleRad = (Math.PI / 180) * this.snapAngle;
        this.angle = Math.round(alpha / snapAngleRad) * snapAngleRad;
    } else {
        this.angle = alpha;
    } 
}, cancel: function() {
    this.callback("cancel", null);
    this.finalize();
}, finalize: function() {
    this.origin = null;
    this.radius = this.options.radius;
}, clear: function() {
    this.layer.renderer.clear();
    this.layer.destroyFeatures();
}, callback: function(name, args) {
    if (this.callbacks[name]) {
        this.callbacks[name].apply(this.control, [this.feature.geometry.clone()]);
    }
    if (!this.persist && (name == "done" || name == "cancel")) {
        this.clear();
    } 
}, CLASS_NAME: "OpenLayers.Handler.RegularPolygon"
});
OpenLayers.Layer.EventPane = OpenLayers.Class(OpenLayers.Layer, { smoothDragPan: true, isBaseLayer: true, isFixed: true, pane: null, mapObject: null, initialize: function(name, options) {
    OpenLayers.Layer.prototype.initialize.apply(this, arguments);
    if (this.pane == null) {
        this.pane = OpenLayers.Util.createDiv(this.div.id + "_EventPane");
    } 
}, destroy: function() {
    this.mapObject = null;
    OpenLayers.Layer.prototype.destroy.apply(this, arguments);
}, setMap: function(map) {
    OpenLayers.Layer.prototype.setMap.apply(this, arguments);
    this.pane.style.zIndex = parseInt(this.div.style.zIndex) + 1;
    this.pane.style.display = this.div.style.display;
    this.pane.style.width = "100%";
    this.pane.style.height = "100%";
    if (OpenLayers.Util.getBrowserName() == "msie") {
        this.pane.style.background = "url(" + OpenLayers.Util.getImagesLocation() + "blank.gif)";
    }
    if (this.isFixed) {
        this.map.viewPortDiv.appendChild(this.pane);
    } else {
        this.map.layerContainerDiv.appendChild(this.pane);
    }
    this.loadMapObject();
    if (this.mapObject == null) {
        this.loadWarningMessage();
    } 
}, removeMap: function(map) {
    if (this.pane && this.pane.parentNode) {
        this.pane.parentNode.removeChild(this.pane);
        this.pane = null;
    }
    OpenLayers.Layer.prototype.removeMap.apply(this, arguments);
}, loadWarningMessage: function() {
    this.div.style.backgroundColor = "darkblue";
    var viewSize = this.map.getSize();
    var msgW = Math.min(viewSize.w, 300);
    var msgH = Math.min(viewSize.h, 200);
    var size = new OpenLayers.Size(msgW, msgH);
    var centerPx = new OpenLayers.Pixel(viewSize.w / 2, viewSize.h / 2);
    var topLeft = centerPx.add(-size.w / 2, -size.h / 2);
    var div = OpenLayers.Util.createDiv(this.name + "_warning", topLeft, size, null, null, null, "auto");
    div.style.padding = "7px";
    div.style.backgroundColor = "yellow";
    div.innerHTML = this.getWarningHTML();
    this.div.appendChild(div);
}, getWarningHTML: function() {
    return "";
}, display: function(display) {
    OpenLayers.Layer.prototype.display.apply(this, arguments);
    this.pane.style.display = this.div.style.display;
}, setZIndex: function(zIndex) {
    OpenLayers.Layer.prototype.setZIndex.apply(this, arguments);
    this.pane.style.zIndex = parseInt(this.div.style.zIndex) + 1;
}, moveTo: function(bounds, zoomChanged, dragging) {
    OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
    if (this.mapObject != null) {
        var newCenter = this.map.getCenter();
        var newZoom = this.map.getZoom();
        if (newCenter != null) {
            var moOldCenter = this.getMapObjectCenter();
            var oldCenter = this.getOLLonLatFromMapObjectLonLat(moOldCenter);
            var moOldZoom = this.getMapObjectZoom();
            var oldZoom = this.getOLZoomFromMapObjectZoom(moOldZoom);
            if (!(newCenter.equals(oldCenter)) || !(newZoom == oldZoom)) {
                if (dragging && this.dragPanMapObject && this.smoothDragPan) {
                    var oldPx = this.map.getViewPortPxFromLonLat(oldCenter);
                    var newPx = this.map.getViewPortPxFromLonLat(newCenter);
                    this.dragPanMapObject(newPx.x - oldPx.x, oldPx.y - newPx.y);
                } else {
                    var center = this.getMapObjectLonLatFromOLLonLat(newCenter);
                    var zoom = this.getMapObjectZoomFromOLZoom(newZoom);
                    this.setMapObjectCenter(center, zoom, dragging);
                } 
            } 
        } 
    } 
}, getLonLatFromViewPortPx: function(viewPortPx) {
    var lonlat = null;
    if ((this.mapObject != null) && (this.getMapObjectCenter() != null)) {
        var moPixel = this.getMapObjectPixelFromOLPixel(viewPortPx);
        var moLonLat = this.getMapObjectLonLatFromMapObjectPixel(moPixel);
        lonlat = this.getOLLonLatFromMapObjectLonLat(moLonLat);
    }
    return lonlat;
}, getViewPortPxFromLonLat: function(lonlat) {
    var viewPortPx = null;
    if ((this.mapObject != null) && (this.getMapObjectCenter() != null)) {
        var moLonLat = this.getMapObjectLonLatFromOLLonLat(lonlat);
        var moPixel = this.getMapObjectPixelFromMapObjectLonLat(moLonLat);
        viewPortPx = this.getOLPixelFromMapObjectPixel(moPixel);
    }
    return viewPortPx;
}, getOLLonLatFromMapObjectLonLat: function(moLonLat) {
    var olLonLat = null;
    if (moLonLat != null) {
        var lon = this.getLongitudeFromMapObjectLonLat(moLonLat);
        var lat = this.getLatitudeFromMapObjectLonLat(moLonLat);
        olLonLat = new OpenLayers.LonLat(lon, lat);
    }
    return olLonLat;
}, getMapObjectLonLatFromOLLonLat: function(olLonLat) {
    var moLatLng = null;
    if (olLonLat != null) {
        moLatLng = this.getMapObjectLonLatFromLonLat(olLonLat.lon, olLonLat.lat);
    }
    return moLatLng;
}, getOLPixelFromMapObjectPixel: function(moPixel) {
    var olPixel = null;
    if (moPixel != null) {
        var x = this.getXFromMapObjectPixel(moPixel);
        var y = this.getYFromMapObjectPixel(moPixel);
        olPixel = new OpenLayers.Pixel(x, y);
    }
    return olPixel;
}, getMapObjectPixelFromOLPixel: function(olPixel) {
    var moPixel = null;
    if (olPixel != null) {
        moPixel = this.getMapObjectPixelFromXY(olPixel.x, olPixel.y);
    }
    return moPixel;
}, CLASS_NAME: "OpenLayers.Layer.EventPane"
});
OpenLayers.Layer.FixedZoomLevels = OpenLayers.Class({ initialize: function() { }, initResolutions: function() {
    var props = new Array('minZoomLevel', 'maxZoomLevel', 'numZoomLevels');
    for (var i = 0, len = props.length;
i < len;
i++) {
        var property = props[i];
        this[property] = (this.options[property] != null) ? this.options[property] : this.map[property];
    }
    if ((this.minZoomLevel == null) || (this.minZoomLevel < this.MIN_ZOOM_LEVEL)) {
        this.minZoomLevel = this.MIN_ZOOM_LEVEL;
    }
    var desiredZoomLevels;
    var limitZoomLevels = this.MAX_ZOOM_LEVEL - this.minZoomLevel + 1;
    if (((this.options.numZoomLevels == null) && (this.options.maxZoomLevel != null)) || ((this.numZoomLevels == null) && (this.maxZoomLevel != null))) {
        desiredZoomLevels = this.maxZoomLevel - this.minZoomLevel + 1;
    } else {
        desiredZoomLevels = this.numZoomLevels;
    }
    if (desiredZoomLevels != null) {
        this.numZoomLevels = Math.min(desiredZoomLevels, limitZoomLevels);
    } else {
        this.numZoomLevels = limitZoomLevels;
    }
    this.maxZoomLevel = this.minZoomLevel + this.numZoomLevels - 1;
    if (this.RESOLUTIONS != null) {
        var resolutionsIndex = 0;
        this.resolutions = [];
        for (var i = this.minZoomLevel;
i <= this.maxZoomLevel;
i++) {
            this.resolutions[resolutionsIndex++] = this.RESOLUTIONS[i];
        }
        this.maxResolution = this.resolutions[0];
        this.minResolution = this.resolutions[this.resolutions.length - 1];
    } 
}, getResolution: function() {
    if (this.resolutions != null) {
        return OpenLayers.Layer.prototype.getResolution.apply(this, arguments);
    } else {
        var resolution = null;
        var viewSize = this.map.getSize();
        var extent = this.getExtent();
        if ((viewSize != null) && (extent != null)) {
            resolution = Math.max(extent.getWidth() / viewSize.w, extent.getHeight() / viewSize.h);
        }
        return resolution;
    } 
}, getExtent: function() {
    var extent = null;
    var size = this.map.getSize();
    var tlPx = new OpenLayers.Pixel(0, 0);
    var tlLL = this.getLonLatFromViewPortPx(tlPx);
    var brPx = new OpenLayers.Pixel(size.w, size.h);
    var brLL = this.getLonLatFromViewPortPx(brPx);
    if ((tlLL != null) && (brLL != null)) {
        extent = new OpenLayers.Bounds(tlLL.lon, brLL.lat, brLL.lon, tlLL.lat);
    }
    return extent;
}, getZoomForResolution: function(resolution) {
    if (this.resolutions != null) {
        return OpenLayers.Layer.prototype.getZoomForResolution.apply(this, arguments);
    } else {
        var extent = OpenLayers.Layer.prototype.getExtent.apply(this, []);
        return this.getZoomForExtent(extent);
    } 
}, getOLZoomFromMapObjectZoom: function(moZoom) {
    var zoom = null;
    if (moZoom != null) {
        zoom = moZoom - this.minZoomLevel;
    }
    return zoom;
}, getMapObjectZoomFromOLZoom: function(olZoom) {
    var zoom = null;
    if (olZoom != null) {
        zoom = olZoom + this.minZoomLevel;
    }
    return zoom;
}, CLASS_NAME: "FixedZoomLevels.js"
});
OpenLayers.Layer.HTTPRequest = OpenLayers.Class(OpenLayers.Layer, { URL_HASH_FACTOR: (Math.sqrt(5) - 1) / 2, url: null, params: null, reproject: false, initialize: function(name, url, params, options) {
    var newArguments = arguments;
    newArguments = [name, options];
    OpenLayers.Layer.prototype.initialize.apply(this, newArguments);
    this.url = url;
    this.params = OpenLayers.Util.extend({}, params);
}, destroy: function() {
    this.url = null;
    this.params = null;
    OpenLayers.Layer.prototype.destroy.apply(this, arguments);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.HTTPRequest(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.prototype.clone.apply(this, [obj]);
    return obj;
}, setUrl: function(newUrl) {
    this.url = newUrl;
}, mergeNewParams: function(newParams) {
    this.params = OpenLayers.Util.extend(this.params, newParams);
    return this.redraw();
}, redraw: function(force) {
    if (force) {
        return this.mergeNewParams({ "_olSalt": Math.random() });
    } else {
        return OpenLayers.Layer.prototype.redraw.apply(this, []);
    } 
}, selectUrl: function(paramString, urls) {
    var product = 1;
    for (var i = 0, len = paramString.length;
i < len;
i++) {
        product *= paramString.charCodeAt(i) * this.URL_HASH_FACTOR;
        product -= Math.floor(product);
    }
    return urls[Math.floor(product * urls.length)];
}, getFullRequestString: function(newParams, altUrl) {
    var url = altUrl || this.url;
    var allParams = OpenLayers.Util.extend({}, this.params);
    allParams = OpenLayers.Util.extend(allParams, newParams);
    var paramsString = OpenLayers.Util.getParameterString(allParams);
    if (url instanceof Array) {
        url = this.selectUrl(paramsString, url);
    }
    var urlParams = OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));
    for (var key in allParams) {
        if (key.toUpperCase() in urlParams) {
            delete allParams[key];
        } 
    }
    paramsString = OpenLayers.Util.getParameterString(allParams);
    var requestString = url;
    if (paramsString != "") {
        var lastServerChar = url.charAt(url.length - 1);
        if ((lastServerChar == "&") || (lastServerChar == "?")) {
            requestString += paramsString;
        } else {
            if (url.indexOf('?') == -1) {
                requestString += '?' + paramsString;
            } else {
                requestString += '&' + paramsString;
            } 
        } 
    }
    return requestString;
}, CLASS_NAME: "OpenLayers.Layer.HTTPRequest"
});
OpenLayers.Layer.Image = OpenLayers.Class(OpenLayers.Layer, { isBaseLayer: true, url: null, extent: null, size: null, tile: null, aspectRatio: null, initialize: function(name, url, extent, size, options) {
    this.url = url;
    this.extent = extent;
    this.size = size;
    OpenLayers.Layer.prototype.initialize.apply(this, [name, options]);
    this.aspectRatio = (this.extent.getHeight() / this.size.h) / (this.extent.getWidth() / this.size.w);
}, destroy: function() {
    if (this.tile) {
        this.tile.destroy();
        this.tile = null;
    }
    OpenLayers.Layer.prototype.destroy.apply(this, arguments);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.Image(this.name, this.url, this.extent, this.size, this.options);
    }
    obj = OpenLayers.Layer.prototype.clone.apply(this, [obj]);
    return obj;
}, setMap: function(map) {
    if (this.options.maxResolution == null) {
        this.options.maxResolution = this.aspectRatio * this.extent.getWidth() / this.size.w;
    }
    OpenLayers.Layer.prototype.setMap.apply(this, arguments);
}, moveTo: function(bounds, zoomChanged, dragging) {
    OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
    var firstRendering = (this.tile == null);
    if (zoomChanged || firstRendering) {
        this.setTileSize();
        var ul = new OpenLayers.LonLat(this.extent.left, this.extent.top);
        var ulPx = this.map.getLayerPxFromLonLat(ul);
        if (firstRendering) {
            this.tile = new OpenLayers.Tile.Image(this, ulPx, this.extent, null, this.tileSize);
        } else {
            this.tile.size = this.tileSize.clone();
            this.tile.position = ulPx.clone();
        }
        this.tile.draw();
    } 
}, setTileSize: function() {
    var tileWidth = this.extent.getWidth() / this.map.getResolution();
    var tileHeight = this.extent.getHeight() / this.map.getResolution();
    this.tileSize = new OpenLayers.Size(tileWidth, tileHeight);
}, setUrl: function(newUrl) {
    this.url = newUrl;
    this.tile.draw();
}, getURL: function(bounds) {
    return this.url;
}, CLASS_NAME: "OpenLayers.Layer.Image"
});
OpenLayers.Layer.Markers = OpenLayers.Class(OpenLayers.Layer, { isBaseLayer: false, markers: null, drawn: false, initialize: function(name, options) {
    OpenLayers.Layer.prototype.initialize.apply(this, arguments);
    this.markers = [];
}, destroy: function() {
    this.clearMarkers();
    this.markers = null;
    OpenLayers.Layer.prototype.destroy.apply(this, arguments);
}, setOpacity: function(opacity) {
    if (opacity != this.opacity) {
        this.opacity = opacity;
        for (var i = 0, len = this.markers.length;
i < len;
i++) {
            this.markers[i].setOpacity(this.opacity);
        } 
    } 
}, moveTo: function(bounds, zoomChanged, dragging) {
    OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
    if (zoomChanged || !this.drawn) {
        for (var i = 0, len = this.markers.length;
i < len;
i++) {
            this.drawMarker(this.markers[i]);
        }
        this.drawn = true;
    } 
}, addMarker: function(marker) {
    this.markers.push(marker);
    if (this.opacity != null) {
        marker.setOpacity(this.opacity);
    }
    if (this.map && this.map.getExtent()) {
        marker.map = this.map;
        this.drawMarker(marker);
    } 
}, removeMarker: function(marker) {
    if (this.markers && this.markers.length) {
        OpenLayers.Util.removeItem(this.markers, marker);
        if ((marker.icon != null) && (marker.icon.imageDiv != null) && (marker.icon.imageDiv.parentNode == this.div)) {
            this.div.removeChild(marker.icon.imageDiv);
            marker.drawn = false;
        } 
    } 
}, clearMarkers: function() {
    if (this.markers != null) {
        while (this.markers.length > 0) {
            this.removeMarker(this.markers[0]);
        } 
    } 
}, drawMarker: function(marker) {
    var px = this.map.getLayerPxFromLonLat(marker.lonlat);
    if (px == null) {
        marker.display(false);
    } else {
        var markerImg = marker.draw(px);
        if (!marker.drawn) {
            this.div.appendChild(markerImg);
            marker.drawn = true;
        } 
    } 
}, getDataExtent: function() {
    var maxExtent = null;
    if (this.markers && (this.markers.length > 0)) {
        var maxExtent = new OpenLayers.Bounds();
        for (var i = 0, len = this.markers.length;
i < len;
i++) {
            var marker = this.markers[i];
            maxExtent.extend(marker.lonlat);
        } 
    }
    return maxExtent;
}, CLASS_NAME: "OpenLayers.Layer.Markers"
});
OpenLayers.Layer.SphericalMercator = { getExtent: function() {
    var extent = null;
    if (this.sphericalMercator) {
        extent = this.map.calculateBounds();
    } else {
        extent = OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);
    }
    return extent;
}, initMercatorParameters: function() {
    this.RESOLUTIONS = [];
    var maxResolution = 156543.0339;
    for (var zoom = 0;
zoom <= this.MAX_ZOOM_LEVEL;
++zoom) {
        this.RESOLUTIONS[zoom] = maxResolution / Math.pow(2, zoom);
    }
    this.units = "m";
    this.projection = "EPSG:900913";
}, forwardMercator: function(lon, lat) {
    var x = lon * 20037508.34 / 180;
    var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
    y = y * 20037508.34 / 180;
    return new OpenLayers.LonLat(x, y);
}, inverseMercator: function(x, y) {
    var lon = (x / 20037508.34) * 180;
    var lat = (y / 20037508.34) * 180;
    lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);
    return new OpenLayers.LonLat(lon, lat);
}, projectForward: function(point) {
    var lonlat = OpenLayers.Layer.SphericalMercator.forwardMercator(point.x, point.y);
    point.x = lonlat.lon;
    point.y = lonlat.lat;
    return point;
}, projectInverse: function(point) {
    var lonlat = OpenLayers.Layer.SphericalMercator.inverseMercator(point.x, point.y);
    point.x = lonlat.lon;
    point.y = lonlat.lat;
    return point;
} 
};
OpenLayers.Projection.addTransform("EPSG:4326", "EPSG:900913", OpenLayers.Layer.SphericalMercator.projectForward);
OpenLayers.Projection.addTransform("EPSG:900913", "EPSG:4326", OpenLayers.Layer.SphericalMercator.projectInverse);
OpenLayers.Control.DrawFeature = OpenLayers.Class(OpenLayers.Control, { layer: null, callbacks: null, EVENT_TYPES: ["featureadded"], featureAdded: function() { }, handlerOptions: null, initialize: function(layer, handler, options) {
    this.EVENT_TYPES = OpenLayers.Control.DrawFeature.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.callbacks = OpenLayers.Util.extend({ done: this.drawFeature }, this.callbacks);
    this.layer = layer;
    this.handler = new handler(this, this.callbacks, this.handlerOptions);
}, drawFeature: function(geometry) {
    var feature = new OpenLayers.Feature.Vector(geometry);
    this.layer.addFeatures([feature]);
    this.featureAdded(feature);
    this.events.triggerEvent("featureadded", { feature: feature });
}, CLASS_NAME: "OpenLayers.Control.DrawFeature"
});
OpenLayers.Control.Measure = OpenLayers.Class(OpenLayers.Control, { EVENT_TYPES: ['measure', 'measurepartial'], handlerOptions: null, callbacks: null, displaySystem: 'metric', displaySystemUnits: { geographic: ['dd'], english: ['mi', 'ft', 'in'], metric: ['km', 'm'] }, initialize: function(handler, options) {
    this.EVENT_TYPES = OpenLayers.Control.Measure.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES);
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.callbacks = OpenLayers.Util.extend({ done: this.measureComplete, point: this.measurePartial }, this.callbacks);
    this.handler = new handler(this, this.callbacks, this.handlerOptions);
}, updateHandler: function(handler, options) {
    var active = this.active;
    if (active) {
        this.deactivate();
    }
    this.handler = new handler(this, this.callbacks, options);
    if (active) {
        this.activate();
    } 
}, measureComplete: function(geometry) {
    this.measure(geometry, "measure");
}, measurePartial: function(point, geometry) {
    this.measure(geometry, "measurepartial");
}, measure: function(geometry, eventType) {
    var stat, order;
    if (geometry.CLASS_NAME.indexOf('LineString') > -1) {
        stat = this.getBestLength(geometry);
        order = 1;
    } else {
        stat = this.getBestArea(geometry);
        order = 2;
    }
    this.events.triggerEvent(eventType, { measure: stat[0], units: stat[1], order: order, geometry: geometry });
}, getBestArea: function(geometry) {
    var units = this.displaySystemUnits[this.displaySystem];
    var unit, area;
    for (var i = 0, len = units.length;
i < len;
++i) {
        unit = units[i];
        area = this.getArea(geometry, unit);
        if (area > 1) {
            break;
        } 
    }
    return [area, unit];
}, getArea: function(geometry, units) {
    var area = geometry.getArea();
    var inPerDisplayUnit = OpenLayers.INCHES_PER_UNIT[units];
    if (inPerDisplayUnit) {
        var inPerMapUnit = OpenLayers.INCHES_PER_UNIT[this.map.getUnits()];
        area *= Math.pow((inPerMapUnit / inPerDisplayUnit), 2);
    }
    return area;
}, getBestLength: function(geometry) {
    var units = this.displaySystemUnits[this.displaySystem];
    var unit, length;
    for (var i = 0, len = units.length;
i < len;
++i) {
        unit = units[i];
        length = this.getLength(geometry, unit);
        if (length > 1) {
            break;
        } 
    }
    return [length, unit];
}, getLength: function(geometry, units) {
    var length = geometry.getLength();
    var inPerDisplayUnit = OpenLayers.INCHES_PER_UNIT[units];
    if (inPerDisplayUnit) {
        var inPerMapUnit = OpenLayers.INCHES_PER_UNIT[this.map.getUnits()];
        length *= (inPerMapUnit / inPerDisplayUnit);
    }
    return length;
}, CLASS_NAME: "OpenLayers.Control.Measure"
});
OpenLayers.Control.SelectFeature = OpenLayers.Class(OpenLayers.Control, { multipleKey: null, toggleKey: null, multiple: false, clickout: true, toggle: false, hover: false, box: false, onSelect: function() { }, onUnselect: function() { }, geometryTypes: null, layer: null, callbacks: null, selectStyle: null, renderIntent: "select", handlers: null, initialize: function(layer, options) {
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    this.layer = layer;
    var callbacks = { click: this.clickFeature, clickout: this.clickoutFeature };
    if (this.hover) {
        callbacks.over = this.overFeature;
        callbacks.out = this.outFeature;
    }
    this.callbacks = OpenLayers.Util.extend(callbacks, this.callbacks);
    this.handlers = { feature: new OpenLayers.Handler.Feature(this, layer, this.callbacks, { geometryTypes: this.geometryTypes }) };
    if (this.box) {
        this.handlers.box = new OpenLayers.Handler.Box(this, { done: this.selectBox }, { boxDivClassName: "olHandlerBoxSelectFeature" });
    } 
}, activate: function() {
    if (!this.active) {
        this.handlers.feature.activate();
        if (this.box && this.handlers.box) {
            this.handlers.box.activate();
        } 
    }
    return OpenLayers.Control.prototype.activate.apply(this, arguments);
}, deactivate: function() {
    if (this.active) {
        this.handlers.feature.deactivate();
        if (this.handlers.box) {
            this.handlers.box.deactivate();
        } 
    }
    return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
}, unselectAll: function(options) {
    var feature;
    for (var i = this.layer.selectedFeatures.length - 1;
i >= 0;
--i) {
        feature = this.layer.selectedFeatures[i];
        if (!options || options.except != feature) {
            this.unselect(feature);
        } 
    } 
}, clickFeature: function(feature) {
    if (!this.hover) {
        var selected = (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) > -1);
        if (selected) {
            if (this.toggleSelect()) {
                this.unselect(feature);
            } else if (!this.multipleSelect()) {
                this.unselectAll({ except: feature });
            } 
        } else {
            if (!this.multipleSelect()) {
                this.unselectAll({ except: feature });
            }
            this.select(feature);
        } 
    } 
}, multipleSelect: function() {
    return this.multiple || this.handlers.feature.evt[this.multipleKey];
}, toggleSelect: function() {
    return this.toggle || this.handlers.feature.evt[this.toggleKey];
}, clickoutFeature: function(feature) {
    if (!this.hover && this.clickout) {
        this.unselectAll();
    } 
}, overFeature: function(feature) {
    if (this.hover && (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) == -1)) {
        this.select(feature);
    } 
}, outFeature: function(feature) {
    if (this.hover) {
        this.unselect(feature);
    } 
}, select: function(feature) {
    var cont = this.layer.events.triggerEvent("beforefeatureselected", { feature: feature });
    if (cont !== false) {
        this.layer.selectedFeatures.push(feature);
        var selectStyle = this.selectStyle || this.renderIntent;
        this.layer.drawFeature(feature, selectStyle);
        this.layer.events.triggerEvent("featureselected", { feature: feature });
        this.onSelect(feature);
    } 
}, unselect: function(feature) {
    this.layer.drawFeature(feature, "default");
    OpenLayers.Util.removeItem(this.layer.selectedFeatures, feature);
    this.layer.events.triggerEvent("featureunselected", { feature: feature });
    this.onUnselect(feature);
}, selectBox: function(position) {
    if (position instanceof OpenLayers.Bounds) {
        var minXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left, position.bottom));
        var maxXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right, position.top));
        var bounds = new OpenLayers.Bounds(minXY.lon, minXY.lat, maxXY.lon, maxXY.lat);
        if (!this.multipleSelect()) {
            this.unselectAll();
        }
        var prevMultiple = this.multiple;
        this.multiple = true;
        for (var i = 0, len = this.layer.features.length;
i < len;
++i) {
            var feature = this.layer.features[i];
            if (this.geometryTypes == null || OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) > -1) {
                if (bounds.toGeometry().intersects(feature.geometry)) {
                    if (OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) == -1) {
                        this.select(feature);
                    } 
                } 
            } 
        }
        this.multiple = prevMultiple;
    } 
}, setMap: function(map) {
    this.handlers.feature.setMap(map);
    if (this.box) {
        this.handlers.box.setMap(map);
    }
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Control.SelectFeature"
});
OpenLayers.Control.ZoomBox = OpenLayers.Class(OpenLayers.Control, { type: OpenLayers.Control.TYPE_TOOL, out: false, draw: function() {
    this.handler = new OpenLayers.Handler.Box(this, { done: this.zoomBox }, { keyMask: this.keyMask });
}, zoomBox: function(position) {
    if (position instanceof OpenLayers.Bounds) {
        if (!this.out) {
            var minXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left, position.bottom));
            var maxXY = this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right, position.top));
            var bounds = new OpenLayers.Bounds(minXY.lon, minXY.lat, maxXY.lon, maxXY.lat);
        } else {
            var pixWidth = Math.abs(position.right - position.left);
            var pixHeight = Math.abs(position.top - position.bottom);
            var zoomFactor = Math.min((this.map.size.h / pixHeight), (this.map.size.w / pixWidth));
            var extent = this.map.getExtent();
            var center = this.map.getLonLatFromPixel(position.getCenterPixel());
            var xmin = center.lon - (extent.getWidth() / 2) * zoomFactor;
            var xmax = center.lon + (extent.getWidth() / 2) * zoomFactor;
            var ymin = center.lat - (extent.getHeight() / 2) * zoomFactor;
            var ymax = center.lat + (extent.getHeight() / 2) * zoomFactor;
            var bounds = new OpenLayers.Bounds(xmin, ymin, xmax, ymax);
        }
        this.map.zoomToExtent(bounds);
    } else {
        if (!this.out) {
            this.map.setCenter(this.map.getLonLatFromPixel(position), this.map.getZoom() + 1);
        } else {
            this.map.setCenter(this.map.getLonLatFromPixel(position), this.map.getZoom() - 1);
        } 
    } 
}, CLASS_NAME: "OpenLayers.Control.ZoomBox"
});
OpenLayers.Format.WKT = OpenLayers.Class(OpenLayers.Format, { initialize: function(options) {
    this.regExes = { 'typeStr': /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/, 'spaces': /\s+/, 'parenComma': /\)\s*,\s*\(/, 'doubleParenComma': /\)\s*\)\s*,\s*\(\s*\(/, 'trimParens': /^\s*\(?(.*?)\)?\s*$/ };
    OpenLayers.Format.prototype.initialize.apply(this, [options]);
}, read: function(wkt) {
    var features, type, str;
    var matches = this.regExes.typeStr.exec(wkt);
    if (matches) {
        type = matches[1].toLowerCase();
        str = matches[2];
        if (this.parse[type]) {
            features = this.parse[type].apply(this, [str]);
        }
        if (this.internalProjection && this.externalProjection) {
            if (features && features.CLASS_NAME == "OpenLayers.Feature.Vector") {
                features.geometry.transform(this.externalProjection, this.internalProjection);
            } else if (features && type != "geometrycollection" && typeof features == "object") {
                for (var i = 0, len = features.length;
i < len;
i++) {
                    var component = features[i];
                    component.geometry.transform(this.externalProjection, this.internalProjection);
                } 
            } 
        } 
    }
    return features;
}, write: function(features) {
    var collection, geometry, type, data, isCollection;
    if (features.constructor == Array) {
        collection = features;
        isCollection = true;
    } else {
        collection = [features];
        isCollection = false;
    }
    var pieces = [];
    if (isCollection) {
        pieces.push('GEOMETRYCOLLECTION(');
    }
    for (var i = 0, len = collection.length;
i < len;
++i) {
        if (isCollection && i > 0) {
            pieces.push(',');
        }
        geometry = collection[i].geometry;
        type = geometry.CLASS_NAME.split('.')[2].toLowerCase();
        if (!this.extract[type]) {
            return null;
        }
        if (this.internalProjection && this.externalProjection) {
            geometry = geometry.clone();
            geometry.transform(this.internalProjection, this.externalProjection);
        }
        data = this.extract[type].apply(this, [geometry]);
        pieces.push(type.toUpperCase() + '(' + data + ')');
    }
    if (isCollection) {
        pieces.push(')');
    }
    return pieces.join('');
}, extract: { 'point': function(point) {
    return point.x + ' ' + point.y;
}, 'multipoint': function(multipoint) {
    var array = [];
    for (var i = 0, len = multipoint.components.length;
i < len;
++i) {
        array.push(this.extract.point.apply(this, [multipoint.components[i]]));
    }
    return array.join(',');
}, 'linestring': function(linestring) {
    var array = [];
    for (var i = 0, len = linestring.components.length;
i < len;
++i) {
        array.push(this.extract.point.apply(this, [linestring.components[i]]));
    }
    return array.join(',');
}, 'multilinestring': function(multilinestring) {
    var array = [];
    for (var i = 0, len = multilinestring.components.length;
i < len;
++i) {
        array.push('(' +
this.extract.linestring.apply(this, [multilinestring.components[i]]) + ')');
    }
    return array.join(',');
}, 'polygon': function(polygon) {
    var array = [];
    for (var i = 0, len = polygon.components.length;
i < len;
++i) {
        array.push('(' +
this.extract.linestring.apply(this, [polygon.components[i]]) + ')');
    }
    return array.join(',');
}, 'multipolygon': function(multipolygon) {
    var array = [];
    for (var i = 0, len = multipolygon.components.length;
i < len;
++i) {
        array.push('(' +
this.extract.polygon.apply(this, [multipolygon.components[i]]) + ')');
    }
    return array.join(',');
} 
}, parse: { 'point': function(str) {
    var coords = OpenLayers.String.trim(str).split(this.regExes.spaces);
    return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0], coords[1]));
}, 'multipoint': function(str) {
    var points = OpenLayers.String.trim(str).split(',');
    var components = [];
    for (var i = 0, len = points.length;
i < len;
++i) {
        components.push(this.parse.point.apply(this, [points[i]]).geometry);
    }
    return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(components));
}, 'linestring': function(str) {
    var points = OpenLayers.String.trim(str).split(',');
    var components = [];
    for (var i = 0, len = points.length;
i < len;
++i) {
        components.push(this.parse.point.apply(this, [points[i]]).geometry);
    }
    return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(components));
}, 'multilinestring': function(str) {
    var line;
    var lines = OpenLayers.String.trim(str).split(this.regExes.parenComma);
    var components = [];
    for (var i = 0, len = lines.length;
i < len;
++i) {
        line = lines[i].replace(this.regExes.trimParens, '$1');
        components.push(this.parse.linestring.apply(this, [line]).geometry);
    }
    return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(components));
}, 'polygon': function(str) {
    var ring, linestring, linearring;
    var rings = OpenLayers.String.trim(str).split(this.regExes.parenComma);
    var components = [];
    for (var i = 0, len = rings.length;
i < len;
++i) {
        ring = rings[i].replace(this.regExes.trimParens, '$1');
        linestring = this.parse.linestring.apply(this, [ring]).geometry;
        linearring = new OpenLayers.Geometry.LinearRing(linestring.components);
        components.push(linearring);
    }
    return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(components));
}, 'multipolygon': function(str) {
    var polygon;
    var polygons = OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);
    var components = [];
    for (var i = 0, len = polygons.length;
i < len;
++i) {
        polygon = polygons[i].replace(this.regExes.trimParens, '$1');
        components.push(this.parse.polygon.apply(this, [polygon]).geometry);
    }
    return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(components));
}, 'geometrycollection': function(str) {
    str = str.replace(/,\s*([A-Za-z])/g, '|$1');
    var wktArray = OpenLayers.String.trim(str).split('|');
    var components = [];
    for (var i = 0, len = wktArray.length;
i < len;
++i) {
        components.push(OpenLayers.Format.WKT.prototype.read.apply(this, [wktArray[i]]));
    }
    return components;
} 
}, CLASS_NAME: "OpenLayers.Format.WKT"
});
OpenLayers.Layer.Boxes = OpenLayers.Class(OpenLayers.Layer.Markers, { initialize: function(name, options) {
    OpenLayers.Layer.Markers.prototype.initialize.apply(this, arguments);
}, drawMarker: function(marker) {
    var bounds = marker.bounds;
    var topleft = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.left, bounds.top));
    var botright = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.right, bounds.bottom));
    if (botright == null || topleft == null) {
        marker.display(false);
    } else {
        var sz = new OpenLayers.Size(Math.max(1, botright.x - topleft.x), Math.max(1, botright.y - topleft.y));
        var markerDiv = marker.draw(topleft, sz);
        if (!marker.drawn) {
            this.div.appendChild(markerDiv);
            marker.drawn = true;
        } 
    } 
}, removeMarker: function(marker) {
    OpenLayers.Util.removeItem(this.markers, marker);
    if ((marker.div != null) && (marker.div.parentNode == this.div)) {
        this.div.removeChild(marker.div);
    } 
}, CLASS_NAME: "OpenLayers.Layer.Boxes"
});
OpenLayers.Layer.GeoRSS = OpenLayers.Class(OpenLayers.Layer.Markers, { location: null, features: null, formatOptions: null, selectedFeature: null, icon: null, popupSize: null, useFeedTitle: true, initialize: function(name, location, options) {
    OpenLayers.Layer.Markers.prototype.initialize.apply(this, [name, options]);
    this.location = location;
    this.features = [];
}, destroy: function() {
    OpenLayers.Layer.Markers.prototype.destroy.apply(this, arguments);
    this.clearFeatures();
    this.features = null;
}, loadRSS: function() {
    if (!this.loaded) {
        this.events.triggerEvent("loadstart");
        OpenLayers.Request.GET({ url: this.location, success: this.parseData, scope: this });
        this.loaded = true;
    } 
}, moveTo: function(bounds, zoomChanged, minor) {
    OpenLayers.Layer.Markers.prototype.moveTo.apply(this, arguments);
    if (this.visibility && !this.loaded) {
        this.loadRSS();
    } 
}, parseData: function(ajaxRequest) {
    var doc = ajaxRequest.responseXML;
    if (!doc || !doc.documentElement) {
        doc = OpenLayers.Format.XML.prototype.read(ajaxRequest.responseText);
    }
    if (this.useFeedTitle) {
        var name = null;
        try {
            name = doc.getElementsByTagNameNS('*', 'title')[0].firstChild.nodeValue;
        }
        catch (e) {
            name = doc.getElementsByTagName('title')[0].firstChild.nodeValue;
        }
        if (name) {
            this.setName(name);
        } 
    }
    var options = {};
    OpenLayers.Util.extend(options, this.formatOptions);
    if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
        options.externalProjection = this.projection;
        options.internalProjection = this.map.getProjectionObject();
    }
    var format = new OpenLayers.Format.GeoRSS(options);
    var features = format.read(doc);
    for (var i = 0, len = features.length;
i < len;
i++) {
        var data = {};
        var feature = features[i];
        if (!feature.geometry) {
            continue;
        }
        var title = feature.attributes.title ? feature.attributes.title : "Untitled";
        var description = feature.attributes.description ? feature.attributes.description : "No description.";
        var link = feature.attributes.link ? feature.attributes.link : "";
        var location = feature.geometry.getBounds().getCenterLonLat();
        data.icon = this.icon == null ? OpenLayers.Marker.defaultIcon() : this.icon.clone();
        data.popupSize = this.popupSize ? this.popupSize.clone() : new OpenLayers.Size(250, 120);
        if (title || description) {
            data.title = title;
            data.description = description;
            var contentHTML = '<div class="olLayerGeoRSSClose">[x]</div>';
            contentHTML += '<div class="olLayerGeoRSSTitle">';
            if (link) {
                contentHTML += '<a class="link" href="' + link + '" target="_blank">';
            }
            contentHTML += title;
            if (link) {
                contentHTML += '</a>';
            }
            contentHTML += '</div>';
            contentHTML += '<div style="" class="olLayerGeoRSSDescription">';
            contentHTML += description;
            contentHTML += '</div>';
            data['popupContentHTML'] = contentHTML;
        }
        var feature = new OpenLayers.Feature(this, location, data);
        this.features.push(feature);
        var marker = feature.createMarker();
        marker.events.register('click', feature, this.markerClick);
        this.addMarker(marker);
    }
    this.events.triggerEvent("loadend");
}, markerClick: function(evt) {
    var sameMarkerClicked = (this == this.layer.selectedFeature);
    this.layer.selectedFeature = (!sameMarkerClicked) ? this : null;
    for (var i = 0, len = this.layer.map.popups.length;
i < len;
i++) {
        this.layer.map.removePopup(this.layer.map.popups[i]);
    }
    if (!sameMarkerClicked) {
        var popup = this.createPopup();
        OpenLayers.Event.observe(popup.div, "click", OpenLayers.Function.bind(function() {
            for (var i = 0, len = this.layer.map.popups.length;
i < len;
i++) {
                this.layer.map.removePopup(this.layer.map.popups[i]);
            } 
        }, this));
        this.layer.map.addPopup(popup);
    }
    OpenLayers.Event.stop(evt);
}, clearFeatures: function() {
    if (this.features != null) {
        while (this.features.length > 0) {
            var feature = this.features[0];
            OpenLayers.Util.removeItem(this.features, feature);
            feature.destroy();
        } 
    } 
}, CLASS_NAME: "OpenLayers.Layer.GeoRSS"
});
OpenLayers.Layer.Google = OpenLayers.Class(OpenLayers.Layer.EventPane, OpenLayers.Layer.FixedZoomLevels, { MIN_ZOOM_LEVEL: 0, MAX_ZOOM_LEVEL: 19, RESOLUTIONS: [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.00002145767211914062, 0.00001072883605957031, 0.00000536441802978515, 0.00000268220901489257], type: null, sphericalMercator: false, dragObject: null, initialize: function(name, options) {
    OpenLayers.Layer.EventPane.prototype.initialize.apply(this, arguments);
    OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this, arguments);
    this.addContainerPxFunction();
    if (this.sphericalMercator) {
        OpenLayers.Util.extend(this, OpenLayers.Layer.SphericalMercator);
        this.initMercatorParameters();
    } 
}, loadMapObject: function() {
    try {
        this.mapObject = new GMap2(this.div);
        if (typeof this.mapObject.getDragObject == "function") {
            this.dragObject = this.mapObject.getDragObject();
        } else {
            this.dragPanMapObject = null;
        }
        var poweredBy = this.div.lastChild;
        this.div.removeChild(poweredBy);
        this.pane.appendChild(poweredBy);
        poweredBy.className = "olLayerGooglePoweredBy gmnoprint";
        poweredBy.style.left = "";
        poweredBy.style.bottom = "";
        var termsOfUse = this.div.lastChild;
        this.div.removeChild(termsOfUse);
        this.pane.appendChild(termsOfUse);
        termsOfUse.className = "olLayerGoogleCopyright";
        termsOfUse.style.right = "";
        termsOfUse.style.bottom = "";
    } catch (e) {
        OpenLayers.Console.error(e);
    } 
}, setMap: function(map) {
    OpenLayers.Layer.EventPane.prototype.setMap.apply(this, arguments);
    if (this.type != null) {
        this.map.events.register("moveend", this, this.setMapType);
    } 
}, setMapType: function() {
    if (this.mapObject.getCenter() != null) {
        if (OpenLayers.Util.indexOf(this.mapObject.getMapTypes(), this.type) == -1) {
            this.mapObject.addMapType(this.type);
        }
        this.mapObject.setMapType(this.type);
        this.map.events.unregister("moveend", this, this.setMapType);
    } 
}, onMapResize: function() {
    if (this.visibility) {
        this.mapObject.checkResize();
    } else {
        this.windowResized = true;
    } 
}, display: function(display) {
    OpenLayers.Layer.EventPane.prototype.display.apply(this, arguments);
    if (this.div.style.display == "block" && this.windowResized) {
        this.mapObject.checkResize();
        this.windowResized = false;
    } 
}, getOLBoundsFromMapObjectBounds: function(moBounds) {
    var olBounds = null;
    if (moBounds != null) {
        var sw = moBounds.getSouthWest();
        var ne = moBounds.getNorthEast();
        if (this.sphericalMercator) {
            sw = this.forwardMercator(sw.lng(), sw.lat());
            ne = this.forwardMercator(ne.lng(), ne.lat());
        } else {
            sw = new OpenLayers.LonLat(sw.lng(), sw.lat());
            ne = new OpenLayers.LonLat(ne.lng(), ne.lat());
        }
        olBounds = new OpenLayers.Bounds(sw.lon, sw.lat, ne.lon, ne.lat);
    }
    return olBounds;
}, getMapObjectBoundsFromOLBounds: function(olBounds) {
    var moBounds = null;
    if (olBounds != null) {
        var sw = this.sphericalMercator ? this.inverseMercator(olBounds.bottom, olBounds.left) : new OpenLayers.LonLat(olBounds.bottom, olBounds.left);
        var ne = this.sphericalMercator ? this.inverseMercator(olBounds.top, olBounds.right) : new OpenLayers.LonLat(olBounds.top, olBounds.right);
        moBounds = new GLatLngBounds(new GLatLng(sw.lat, sw.lon), new GLatLng(ne.lat, ne.lon));
    }
    return moBounds;
}, addContainerPxFunction: function() {
    if ((typeof GMap2 != "undefined") && !GMap2.prototype.fromLatLngToContainerPixel) {
        GMap2.prototype.fromLatLngToContainerPixel = function(gLatLng) {
            var gPoint = this.fromLatLngToDivPixel(gLatLng);
            var div = this.getContainer().firstChild.firstChild;
            gPoint.x += div.offsetLeft;
            gPoint.y += div.offsetTop;
            return gPoint;
        };
    } 
}, getWarningHTML: function() {
    return OpenLayers.i18n("googleWarning");
}, setMapObjectCenter: function(center, zoom) {
    this.mapObject.setCenter(center, zoom);
}, dragPanMapObject: function(dX, dY) {
    this.dragObject.moveBy(new GSize(-dX, dY));
}, getMapObjectCenter: function() {
    return this.mapObject.getCenter();
}, getMapObjectZoom: function() {
    return this.mapObject.getZoom();
}, getMapObjectLonLatFromMapObjectPixel: function(moPixel) {
    return this.mapObject.fromContainerPixelToLatLng(moPixel);
}, getMapObjectPixelFromMapObjectLonLat: function(moLonLat) {
    return this.mapObject.fromLatLngToContainerPixel(moLonLat);
}, getMapObjectZoomFromMapObjectBounds: function(moBounds) {
    return this.mapObject.getBoundsZoomLevel(moBounds);
}, getLongitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.lng(), moLonLat.lat()).lon : moLonLat.lng();
}, getLatitudeFromMapObjectLonLat: function(moLonLat) {
    var lat = this.sphericalMercator ? this.forwardMercator(moLonLat.lng(), moLonLat.lat()).lat : moLonLat.lat();
    return lat;
}, getMapObjectLonLatFromLonLat: function(lon, lat) {
    var gLatLng;
    if (this.sphericalMercator) {
        var lonlat = this.inverseMercator(lon, lat);
        gLatLng = new GLatLng(lonlat.lat, lonlat.lon);
    } else {
        gLatLng = new GLatLng(lat, lon);
    }
    return gLatLng;
}, getXFromMapObjectPixel: function(moPixel) {
    return moPixel.x;
}, getYFromMapObjectPixel: function(moPixel) {
    return moPixel.y;
}, getMapObjectPixelFromXY: function(x, y) {
    return new GPoint(x, y);
}, CLASS_NAME: "OpenLayers.Layer.Google"
});
OpenLayers.Layer.Grid = OpenLayers.Class(OpenLayers.Layer.HTTPRequest, { tileSize: null, grid: null, singleTile: false, ratio: 1.5, buffer: 2, numLoadingTiles: 0, initialize: function(name, url, params, options) {
    OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this, arguments);
    this.events.addEventType("tileloaded");
    this.grid = [];
}, destroy: function() {
    this.clearGrid();
    this.grid = null;
    this.tileSize = null;
    OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this, arguments);
}, clearGrid: function() {
    if (this.grid) {
        for (var iRow = 0, len = this.grid.length;
iRow < len;
iRow++) {
            var row = this.grid[iRow];
            for (var iCol = 0, clen = row.length;
iCol < clen;
iCol++) {
                var tile = row[iCol];
                this.removeTileMonitoringHooks(tile);
                tile.destroy();
            } 
        }
        this.grid = [];
    } 
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.Grid(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this, [obj]);
    if (this.tileSize != null) {
        obj.tileSize = this.tileSize.clone();
    }
    obj.grid = [];
    return obj;
}, moveTo: function(bounds, zoomChanged, dragging) {
    OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this, arguments);
    bounds = bounds || this.map.getExtent();
    if (bounds != null) {
        var forceReTile = !this.grid.length || zoomChanged;
        var tilesBounds = this.getTilesBounds();
        if (this.singleTile) {
            if (forceReTile || (!dragging && !tilesBounds.containsBounds(bounds))) {
                this.initSingleTile(bounds);
            } 
        } else {
            if (forceReTile || !tilesBounds.containsBounds(bounds, true)) {
                this.initGriddedTiles(bounds);
            } else {
                this.moveGriddedTiles(bounds);
            } 
        } 
    } 
}, setTileSize: function(size) {
    if (this.singleTile) {
        size = this.map.getSize().clone();
        size.h = parseInt(size.h * this.ratio);
        size.w = parseInt(size.w * this.ratio);
    }
    OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this, [size]);
}, getGridBounds: function() {
    var msg = "The getGridBounds() function is deprecated. It will be " + "removed in 3.0. Please use getTilesBounds() instead.";
    OpenLayers.Console.warn(msg);
    return this.getTilesBounds();
}, getTilesBounds: function() {
    var bounds = null;
    if (this.grid.length) {
        var bottom = this.grid.length - 1;
        var bottomLeftTile = this.grid[bottom][0];
        var right = this.grid[0].length - 1;
        var topRightTile = this.grid[0][right];
        bounds = new OpenLayers.Bounds(bottomLeftTile.bounds.left, bottomLeftTile.bounds.bottom, topRightTile.bounds.right, topRightTile.bounds.top);
    }
    return bounds;
}, initSingleTile: function(bounds) {
    var center = bounds.getCenterLonLat();
    var tileWidth = bounds.getWidth() * this.ratio;
    var tileHeight = bounds.getHeight() * this.ratio;
    var tileBounds = new OpenLayers.Bounds(center.lon - (tileWidth / 2), center.lat - (tileHeight / 2), center.lon + (tileWidth / 2), center.lat + (tileHeight / 2));
    var ul = new OpenLayers.LonLat(tileBounds.left, tileBounds.top);
    var px = this.map.getLayerPxFromLonLat(ul);
    if (!this.grid.length) {
        this.grid[0] = [];
    }
    var tile = this.grid[0][0];
    if (!tile) {
        tile = this.addTile(tileBounds, px);
        this.addTileMonitoringHooks(tile);
        tile.draw();
        this.grid[0][0] = tile;
    } else {
        tile.moveTo(tileBounds, px);
    }
    this.removeExcessTiles(1, 1);
}, calculateGridLayout: function(bounds, extent, resolution) {
    var tilelon = resolution * this.tileSize.w;
    var tilelat = resolution * this.tileSize.h;
    var offsetlon = bounds.left - extent.left;
    var tilecol = Math.floor(offsetlon / tilelon) - this.buffer;
    var tilecolremain = offsetlon / tilelon - tilecol;
    var tileoffsetx = -tilecolremain * this.tileSize.w;
    var tileoffsetlon = extent.left + tilecol * tilelon;
    var offsetlat = bounds.top - (extent.bottom + tilelat);
    var tilerow = Math.ceil(offsetlat / tilelat) + this.buffer;
    var tilerowremain = tilerow - offsetlat / tilelat;
    var tileoffsety = -tilerowremain * this.tileSize.h;
    var tileoffsetlat = extent.bottom + tilerow * tilelat;
    return { tilelon: tilelon, tilelat: tilelat, tileoffsetlon: tileoffsetlon, tileoffsetlat: tileoffsetlat, tileoffsetx: tileoffsetx, tileoffsety: tileoffsety };
}, initGriddedTiles: function(bounds) {
    var viewSize = this.map.getSize();
    var minRows = Math.ceil(viewSize.h / this.tileSize.h) +
Math.max(1, 2 * this.buffer);
    var minCols = Math.ceil(viewSize.w / this.tileSize.w) +
Math.max(1, 2 * this.buffer);
    var extent = this.maxExtent;
    var resolution = this.map.getResolution();
    var tileLayout = this.calculateGridLayout(bounds, extent, resolution);
    var tileoffsetx = Math.round(tileLayout.tileoffsetx);
    var tileoffsety = Math.round(tileLayout.tileoffsety);
    var tileoffsetlon = tileLayout.tileoffsetlon;
    var tileoffsetlat = tileLayout.tileoffsetlat;
    var tilelon = tileLayout.tilelon;
    var tilelat = tileLayout.tilelat;
    this.origin = new OpenLayers.Pixel(tileoffsetx, tileoffsety);
    var startX = tileoffsetx;
    var startLon = tileoffsetlon;
    var rowidx = 0;
    var layerContainerDivLeft = parseInt(this.map.layerContainerDiv.style.left);
    var layerContainerDivTop = parseInt(this.map.layerContainerDiv.style.top);
    do {
        var row = this.grid[rowidx++];
        if (!row) {
            row = [];
            this.grid.push(row);
        }
        tileoffsetlon = startLon;
        tileoffsetx = startX;
        var colidx = 0;
        do {
            var tileBounds = new OpenLayers.Bounds(tileoffsetlon, tileoffsetlat, tileoffsetlon + tilelon, tileoffsetlat + tilelat);
            var x = tileoffsetx;
            x -= layerContainerDivLeft;
            var y = tileoffsety;
            y -= layerContainerDivTop;
            var px = new OpenLayers.Pixel(x, y);
            var tile = row[colidx++];
            if (!tile) {
                tile = this.addTile(tileBounds, px);
                this.addTileMonitoringHooks(tile);
                row.push(tile);
            } else {
                tile.moveTo(tileBounds, px, false);
            }
            tileoffsetlon += tilelon;
            tileoffsetx += this.tileSize.w;
        } while ((tileoffsetlon <= bounds.right + tilelon * this.buffer) || colidx < minCols)
        tileoffsetlat -= tilelat;
        tileoffsety += this.tileSize.h;
    } while ((tileoffsetlat >= bounds.bottom - tilelat * this.buffer) || rowidx < minRows)
    this.removeExcessTiles(rowidx, colidx);
    this.spiralTileLoad();
}, spiralTileLoad: function() {
    var tileQueue = [];
    var directions = ["right", "down", "left", "up"];
    var iRow = 0;
    var iCell = -1;
    var direction = OpenLayers.Util.indexOf(directions, "right");
    var directionsTried = 0;
    while (directionsTried < directions.length) {
        var testRow = iRow;
        var testCell = iCell;
        switch (directions[direction]) {
            case "right": testCell++;
                break;
            case "down": testRow++;
                break;
            case "left": testCell--;
                break;
            case "up": testRow--;
                break;
        }
        var tile = null;
        if ((testRow < this.grid.length) && (testRow >= 0) && (testCell < this.grid[0].length) && (testCell >= 0)) {
            tile = this.grid[testRow][testCell];
        }
        if ((tile != null) && (!tile.queued)) {
            tileQueue.unshift(tile);
            tile.queued = true;
            directionsTried = 0;
            iRow = testRow;
            iCell = testCell;
        } else {
            direction = (direction + 1) % 4;
            directionsTried++;
        } 
    }
    for (var i = 0, len = tileQueue.length;
i < len;
i++) {
        var tile = tileQueue[i];
        tile.draw();
        tile.queued = false;
    } 
}, addTile: function(bounds, position) { }, addTileMonitoringHooks: function(tile) {
    tile.onLoadStart = function() {
        if (this.numLoadingTiles == 0) {
            this.events.triggerEvent("loadstart");
        }
        this.numLoadingTiles++;
    };
    tile.events.register("loadstart", this, tile.onLoadStart);
    tile.onLoadEnd = function() {
        this.numLoadingTiles--;
        this.events.triggerEvent("tileloaded");
        if (this.numLoadingTiles == 0) {
            this.events.triggerEvent("loadend");
        } 
    };
    tile.events.register("loadend", this, tile.onLoadEnd);
    tile.events.register("unload", this, tile.onLoadEnd);
}, removeTileMonitoringHooks: function(tile) {
    tile.unload();
    tile.events.un({ "loadstart": tile.onLoadStart, "loadend": tile.onLoadEnd, "unload": tile.onLoadEnd, scope: this });
}, moveGriddedTiles: function(bounds) {
    var buffer = this.buffer || 1;
    while (true) {
        var tlLayer = this.grid[0][0].position;
        var tlViewPort = this.map.getViewPortPxFromLayerPx(tlLayer);
        if (tlViewPort.x > -this.tileSize.w * (buffer - 1)) {
            this.shiftColumn(true);
        } else if (tlViewPort.x < -this.tileSize.w * buffer) {
            this.shiftColumn(false);
        } else if (tlViewPort.y > -this.tileSize.h * (buffer - 1)) {
            this.shiftRow(true);
        } else if (tlViewPort.y < -this.tileSize.h * buffer) {
            this.shiftRow(false);
        } else {
            break;
        } 
    };
}, shiftRow: function(prepend) {
    var modelRowIndex = (prepend) ? 0 : (this.grid.length - 1);
    var grid = this.grid;
    var modelRow = grid[modelRowIndex];
    var resolution = this.map.getResolution();
    var deltaY = (prepend) ? -this.tileSize.h : this.tileSize.h;
    var deltaLat = resolution * -deltaY;
    var row = (prepend) ? grid.pop() : grid.shift();
    for (var i = 0, len = modelRow.length;
i < len;
i++) {
        var modelTile = modelRow[i];
        var bounds = modelTile.bounds.clone();
        var position = modelTile.position.clone();
        bounds.bottom = bounds.bottom + deltaLat;
        bounds.top = bounds.top + deltaLat;
        position.y = position.y + deltaY;
        row[i].moveTo(bounds, position);
    }
    if (prepend) {
        grid.unshift(row);
    } else {
        grid.push(row);
    } 
}, shiftColumn: function(prepend) {
    var deltaX = (prepend) ? -this.tileSize.w : this.tileSize.w;
    var resolution = this.map.getResolution();
    var deltaLon = resolution * deltaX;
    for (var i = 0, len = this.grid.length;
i < len;
i++) {
        var row = this.grid[i];
        var modelTileIndex = (prepend) ? 0 : (row.length - 1);
        var modelTile = row[modelTileIndex];
        var bounds = modelTile.bounds.clone();
        var position = modelTile.position.clone();
        bounds.left = bounds.left + deltaLon;
        bounds.right = bounds.right + deltaLon;
        position.x = position.x + deltaX;
        var tile = prepend ? this.grid[i].pop() : this.grid[i].shift();
        tile.moveTo(bounds, position);
        if (prepend) {
            row.unshift(tile);
        } else {
            row.push(tile);
        } 
    } 
}, removeExcessTiles: function(rows, columns) {
    while (this.grid.length > rows) {
        var row = this.grid.pop();
        for (var i = 0, l = row.length;
i < l;
i++) {
            var tile = row[i];
            this.removeTileMonitoringHooks(tile);
            tile.destroy();
        } 
    }
    while (this.grid[0].length > columns) {
        for (var i = 0, l = this.grid.length;
i < l;
i++) {
            var row = this.grid[i];
            var tile = row.pop();
            this.removeTileMonitoringHooks(tile);
            tile.destroy();
        } 
    } 
}, onMapResize: function() {
    if (this.singleTile) {
        this.clearGrid();
        this.setTileSize();
    } 
}, getTileBounds: function(viewPortPx) {
    var maxExtent = this.maxExtent;
    var resolution = this.getResolution();
    var tileMapWidth = resolution * this.tileSize.w;
    var tileMapHeight = resolution * this.tileSize.h;
    var mapPoint = this.getLonLatFromViewPortPx(viewPortPx);
    var tileLeft = maxExtent.left + (tileMapWidth * Math.floor((mapPoint.lon -
maxExtent.left) / tileMapWidth));
    var tileBottom = maxExtent.bottom + (tileMapHeight * Math.floor((mapPoint.lat -
maxExtent.bottom) / tileMapHeight));
    return new OpenLayers.Bounds(tileLeft, tileBottom, tileLeft + tileMapWidth, tileBottom + tileMapHeight);
}, CLASS_NAME: "OpenLayers.Layer.Grid"
});
OpenLayers.Layer.MultiMap = OpenLayers.Class(OpenLayers.Layer.EventPane, OpenLayers.Layer.FixedZoomLevels, { MIN_ZOOM_LEVEL: 1, MAX_ZOOM_LEVEL: 17, RESOLUTIONS: [9, 1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125], type: null, initialize: function(name, options) {
    OpenLayers.Layer.EventPane.prototype.initialize.apply(this, arguments);
    OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this, arguments);
    if (this.sphericalMercator) {
        OpenLayers.Util.extend(this, OpenLayers.Layer.SphericalMercator);
        this.initMercatorParameters();
        this.RESOLUTIONS.unshift(10);
    } 
}, loadMapObject: function() {
    try {
        this.mapObject = new MultimapViewer(this.div);
    } catch (e) { } 
}, getWarningHTML: function() {
    return OpenLayers.i18n("getLayerWarning", { 'layerType': "MM", 'layerLib': "MultiMap" });
}, setMapObjectCenter: function(center, zoom) {
    this.mapObject.goToPosition(center, zoom);
}, getMapObjectCenter: function() {
    return this.mapObject.getCurrentPosition();
}, getMapObjectZoom: function() {
    return this.mapObject.getZoomFactor();
}, getMapObjectLonLatFromMapObjectPixel: function(moPixel) {
    moPixel.x = moPixel.x - (this.map.getSize().w / 2);
    moPixel.y = moPixel.y - (this.map.getSize().h / 2);
    return this.mapObject.getMapPositionAt(moPixel);
}, getMapObjectPixelFromMapObjectLonLat: function(moLonLat) {
    return this.mapObject.geoPosToContainerPixels(moLonLat);
}, getLongitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.lon, moLonLat.lat).lon : moLonLat.lon;
}, getLatitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.lon, moLonLat.lat).lat : moLonLat.lat;
}, getMapObjectLonLatFromLonLat: function(lon, lat) {
    var mmLatLon;
    if (this.sphericalMercator) {
        var lonlat = this.inverseMercator(lon, lat);
        mmLatLon = new MMLatLon(lonlat.lat, lonlat.lon);
    } else {
        mmLatLon = new MMLatLon(lat, lon);
    }
    return mmLatLon;
}, getXFromMapObjectPixel: function(moPixel) {
    return moPixel.x;
}, getYFromMapObjectPixel: function(moPixel) {
    return moPixel.y;
}, getMapObjectPixelFromXY: function(x, y) {
    return new MMPoint(x, y);
}, CLASS_NAME: "OpenLayers.Layer.MultiMap"
});
OpenLayers.Layer.Text = OpenLayers.Class(OpenLayers.Layer.Markers, { location: null, features: null, formatOptions: null, selectedFeature: null, initialize: function(name, options) {
    OpenLayers.Layer.Markers.prototype.initialize.apply(this, arguments);
    this.features = new Array();
}, destroy: function() {
    OpenLayers.Layer.Markers.prototype.destroy.apply(this, arguments);
    this.clearFeatures();
    this.features = null;
}, loadText: function() {
    if (!this.loaded) {
        if (this.location != null) {
            var onFail = function(e) {
                this.events.triggerEvent("loadend");
            };
            this.events.triggerEvent("loadstart");
            OpenLayers.Request.GET({ url: this.location, success: this.parseData, failure: onFail, scope: this });
            this.loaded = true;
        } 
    } 
}, moveTo: function(bounds, zoomChanged, minor) {
    OpenLayers.Layer.Markers.prototype.moveTo.apply(this, arguments);
    if (this.visibility && !this.loaded) {
        this.loadText();
    } 
}, parseData: function(ajaxRequest) {
    var text = ajaxRequest.responseText;
    var options = {};
    OpenLayers.Util.extend(options, this.formatOptions);
    if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
        options.externalProjection = this.projection;
        options.internalProjection = this.map.getProjectionObject();
    }
    var parser = new OpenLayers.Format.Text(options);
    features = parser.read(text);
    for (var i = 0, len = features.length;
i < len;
i++) {
        var data = {};
        var feature = features[i];
        var location;
        var iconSize, iconOffset;
        location = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
        if (feature.style.graphicWidth && feature.style.graphicHeight) {
            iconSize = new OpenLayers.Size(feature.style.graphicWidth, feature.style.graphicHeight);
        }
        if (feature.style.graphicXOffset !== undefined && feature.style.graphicYOffset !== undefined) {
            iconOffset = new OpenLayers.Pixel(feature.style.graphicXOffset, feature.style.graphicYOffset);
        }
        if (feature.style.externalGraphic != null) {
            data.icon = new OpenLayers.Icon(feature.style.externalGraphic, iconSize, iconOffset);
        } else {
            data.icon = OpenLayers.Marker.defaultIcon();
            if (iconSize != null) {
                data.icon.setSize(iconSize);
            } 
        }
        if ((feature.attributes.title != null) && (feature.attributes.description != null)) {
            data['popupContentHTML'] = '<h2>' + feature.attributes.title + '</h2>' + '<p>' + feature.attributes.description + '</p>';
        }
        data['overflow'] = feature.attributes.overflow || "auto";
        var markerFeature = new OpenLayers.Feature(this, location, data);
        this.features.push(markerFeature);
        var marker = markerFeature.createMarker();
        if ((feature.attributes.title != null) && (feature.attributes.description != null)) {
            marker.events.register('click', markerFeature, this.markerClick);
        }
        this.addMarker(marker);
    }
    this.events.triggerEvent("loadend");
}, markerClick: function(evt) {
    var sameMarkerClicked = (this == this.layer.selectedFeature);
    this.layer.selectedFeature = (!sameMarkerClicked) ? this : null;
    for (var i = 0, len = this.layer.map.popups.length;
i < len;
i++) {
        this.layer.map.removePopup(this.layer.map.popups[i]);
    }
    if (!sameMarkerClicked) {
        this.layer.map.addPopup(this.createPopup());
    }
    OpenLayers.Event.stop(evt);
}, clearFeatures: function() {
    if (this.features != null) {
        while (this.features.length > 0) {
            var feature = this.features[0];
            OpenLayers.Util.removeItem(this.features, feature);
            feature.destroy();
        } 
    } 
}, CLASS_NAME: "OpenLayers.Layer.Text"
});
OpenLayers.Layer.VirtualEarth = OpenLayers.Class(OpenLayers.Layer.EventPane, OpenLayers.Layer.FixedZoomLevels, { MIN_ZOOM_LEVEL: 1, MAX_ZOOM_LEVEL: 17, RESOLUTIONS: [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.00002145767211914062], type: null, sphericalMercator: false, initialize: function(name, options) {
    OpenLayers.Layer.EventPane.prototype.initialize.apply(this, arguments);
    OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this, arguments);
    if (this.sphericalMercator) {
        OpenLayers.Util.extend(this, OpenLayers.Layer.SphericalMercator);
        this.initMercatorParameters();
    } 
}, loadMapObject: function() {
    var veDiv = OpenLayers.Util.createDiv(this.name);
    var sz = this.map.getSize();
    veDiv.style.width = sz.w + "px";
    veDiv.style.height = sz.h + "px";
    this.div.appendChild(veDiv);
    try {
        this.mapObject = new VEMap(this.name);
    } catch (e) { }
    if (this.mapObject != null) {
        try {
            this.mapObject.LoadMap(null, null, this.type, true);
            this.mapObject.AttachEvent("onmousedown", function() {
                return true;
            });
        } catch (e) { }
        this.mapObject.HideDashboard();
    }
    if (!this.mapObject || !this.mapObject.vemapcontrol || !this.mapObject.vemapcontrol.PanMap || (typeof this.mapObject.vemapcontrol.PanMap != "function")) {
        this.dragPanMapObject = null;
    } 
}, getWarningHTML: function() {
    return OpenLayers.i18n("getLayerWarning", { 'layerType': 'VE', 'layerLib': 'VirtualEarth' });
}, setMapObjectCenter: function(center, zoom) {
    this.mapObject.SetCenterAndZoom(center, zoom);
}, getMapObjectCenter: function() {
    return this.mapObject.GetCenter();
}, dragPanMapObject: function(dX, dY) {
    this.mapObject.vemapcontrol.PanMap(dX, -dY);
}, getMapObjectZoom: function() {
    return this.mapObject.GetZoomLevel();
}, getMapObjectLonLatFromMapObjectPixel: function(moPixel) {
    return (typeof VEPixel != 'undefined') ? this.mapObject.PixelToLatLong(moPixel) : this.mapObject.PixelToLatLong(moPixel.x, moPixel.y);
}, getMapObjectPixelFromMapObjectLonLat: function(moLonLat) {
    return this.mapObject.LatLongToPixel(moLonLat);
}, getLongitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.Longitude, moLonLat.Latitude).lon : moLonLat.Longitude;
}, getLatitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.Longitude, moLonLat.Latitude).lat : moLonLat.Latitude;
}, getMapObjectLonLatFromLonLat: function(lon, lat) {
    var veLatLong;
    if (this.sphericalMercator) {
        var lonlat = this.inverseMercator(lon, lat);
        veLatLong = new VELatLong(lonlat.lat, lonlat.lon);
    } else {
        veLatLong = new VELatLong(lat, lon);
    }
    return veLatLong;
}, getXFromMapObjectPixel: function(moPixel) {
    return moPixel.x;
}, getYFromMapObjectPixel: function(moPixel) {
    return moPixel.y;
}, getMapObjectPixelFromXY: function(x, y) {
    return (typeof VEPixel != 'undefined') ? new VEPixel(x, y) : new Msn.VE.Pixel(x, y);
}, CLASS_NAME: "OpenLayers.Layer.VirtualEarth"
});
OpenLayers.Layer.Yahoo = OpenLayers.Class(OpenLayers.Layer.EventPane, OpenLayers.Layer.FixedZoomLevels, { MIN_ZOOM_LEVEL: 0, MAX_ZOOM_LEVEL: 15, RESOLUTIONS: [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125], type: null, sphericalMercator: false, initialize: function(name, options) {
    OpenLayers.Layer.EventPane.prototype.initialize.apply(this, arguments);
    OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this, arguments);
    if (this.sphericalMercator) {
        OpenLayers.Util.extend(this, OpenLayers.Layer.SphericalMercator);
        this.initMercatorParameters();
    } 
}, loadMapObject: function() {
    try {
        var size = this.getMapObjectSizeFromOLSize(this.map.getSize());
        this.mapObject = new YMap(this.div, this.type, size);
        this.mapObject.disableKeyControls();
        this.mapObject.disableDragMap();
        if (!this.mapObject.moveByXY || (typeof this.mapObject.moveByXY != "function")) {
            this.dragPanMapObject = null;
        } 
    } catch (e) { } 
}, onMapResize: function() {
    try {
        var size = this.getMapObjectSizeFromOLSize(this.map.getSize());
        this.mapObject.resizeTo(size);
    } catch (e) { } 
}, setMap: function(map) {
    OpenLayers.Layer.EventPane.prototype.setMap.apply(this, arguments);
    this.map.events.register("moveend", this, this.fixYahooEventPane);
}, fixYahooEventPane: function() {
    var yahooEventPane = OpenLayers.Util.getElement("ygddfdiv");
    if (yahooEventPane != null) {
        if (yahooEventPane.parentNode != null) {
            yahooEventPane.parentNode.removeChild(yahooEventPane);
        }
        this.map.events.unregister("moveend", this, this.fixYahooEventPane);
    } 
}, getWarningHTML: function() {
    return OpenLayers.i18n("getLayerWarning", { 'layerType': 'Yahoo', 'layerLib': 'Yahoo' });
}, getOLZoomFromMapObjectZoom: function(moZoom) {
    var zoom = null;
    if (moZoom != null) {
        zoom = OpenLayers.Layer.FixedZoomLevels.prototype.getOLZoomFromMapObjectZoom.apply(this, [moZoom]);
        zoom = 18 - zoom;
    }
    return zoom;
}, getMapObjectZoomFromOLZoom: function(olZoom) {
    var zoom = null;
    if (olZoom != null) {
        zoom = OpenLayers.Layer.FixedZoomLevels.prototype.getMapObjectZoomFromOLZoom.apply(this, [olZoom]);
        zoom = 18 - zoom;
    }
    return zoom;
}, setMapObjectCenter: function(center, zoom) {
    this.mapObject.drawZoomAndCenter(center, zoom);
}, getMapObjectCenter: function() {
    return this.mapObject.getCenterLatLon();
}, dragPanMapObject: function(dX, dY) {
    this.mapObject.moveByXY({ 'x': -dX, 'y': dY });
}, getMapObjectZoom: function() {
    return this.mapObject.getZoomLevel();
}, getMapObjectLonLatFromMapObjectPixel: function(moPixel) {
    return this.mapObject.convertXYLatLon(moPixel);
}, getMapObjectPixelFromMapObjectLonLat: function(moLonLat) {
    return this.mapObject.convertLatLonXY(moLonLat);
}, getLongitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.Lon, moLonLat.Lat).lon : moLonLat.Lon;
}, getLatitudeFromMapObjectLonLat: function(moLonLat) {
    return this.sphericalMercator ? this.forwardMercator(moLonLat.Lon, moLonLat.Lat).lat : moLonLat.Lat;
}, getMapObjectLonLatFromLonLat: function(lon, lat) {
    var yLatLong;
    if (this.sphericalMercator) {
        var lonlat = this.inverseMercator(lon, lat);
        yLatLong = new YGeoPoint(lonlat.lat, lonlat.lon);
    } else {
        yLatLong = new YGeoPoint(lat, lon);
    }
    return yLatLong;
}, getXFromMapObjectPixel: function(moPixel) {
    return moPixel.x;
}, getYFromMapObjectPixel: function(moPixel) {
    return moPixel.y;
}, getMapObjectPixelFromXY: function(x, y) {
    return new YCoordPoint(x, y);
}, getMapObjectSizeFromOLSize: function(olSize) {
    return new YSize(olSize.w, olSize.h);
}, CLASS_NAME: "OpenLayers.Layer.Yahoo"
});
OpenLayers.Protocol.HTTP = OpenLayers.Class(OpenLayers.Protocol, { url: null, headers: null, params: null, callback: null, scope: null, initialize: function(options) {
    this.params = {};
    this.headers = {};
    OpenLayers.Protocol.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    this.params = null;
    this.headers = null;
    OpenLayers.Protocol.prototype.destroy.apply(this);
}, createCallback: function(method, response, options) {
    return OpenLayers.Function.bind(function() {
        method.apply(this, [response, options]);
    }, this);
}, read: function(options) {
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = new OpenLayers.Protocol.Response({ requestType: "read" });
    if (options.filter && options.filter instanceof OpenLayers.Filter.Spatial) {
        if (options.filter.type == OpenLayers.Filter.Spatial.BBOX) {
            options.params = OpenLayers.Util.extend(options.params, { bbox: options.filter.value.toArray() });
        } 
    }
    resp.priv = OpenLayers.Request.GET({ url: options.url, callback: this.createCallback(this.handleRead, resp, options), params: options.params, headers: options.headers });
    return resp;
}, handleRead: function(resp, options) {
    this.handleResponse(resp, options);
}, create: function(features, options) {
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = new OpenLayers.Protocol.Response({ reqFeatures: features, requestType: "create" });
    resp.priv = OpenLayers.Request.POST({ url: options.url, callback: this.createCallback(this.handleCreate, resp, options), headers: options.headers, data: this.format.write(features) });
    return resp;
}, handleCreate: function(resp, options) {
    this.handleResponse(resp, options);
}, update: function(feature, options) {
    var url = options.url || feature.url || this.options.url;
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = new OpenLayers.Protocol.Response({ reqFeatures: feature, requestType: "update" });
    resp.priv = OpenLayers.Request.PUT({ url: url, callback: this.createCallback(this.handleUpdate, resp, options), headers: options.headers, data: this.format.write(feature) });
    return resp;
}, handleUpdate: function(resp, options) {
    this.handleResponse(resp, options);
}, "delete": function(feature, options) {
    var url = options.url || feature.url || this.options.url;
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = new OpenLayers.Protocol.Response({ reqFeatures: feature, requestType: "delete" });
    resp.priv = OpenLayers.Request.DELETE({ url: url, callback: this.createCallback(this.handleDelete, resp, options), headers: options.headers });
    return resp;
}, handleDelete: function(resp, options) {
    this.handleResponse(resp, options);
}, handleResponse: function(resp, options) {
    var request = resp.priv;
    if (options.callback) {
        if (request.status >= 200 && request.status < 300) {
            if (resp.requestType != "delete") {
                resp.features = this.parseFeatures(request);
            }
            resp.code = OpenLayers.Protocol.Response.SUCCESS;
        } else {
            resp.code = OpenLayers.Protocol.Response.FAILURE;
        }
        options.callback.call(options.scope, resp);
    } 
}, parseFeatures: function(request) {
    var doc = request.responseXML;
    if (!doc || !doc.documentElement) {
        doc = request.responseText;
    }
    if (!doc || doc.length <= 0) {
        return null;
    }
    return this.format.read(doc);
}, commit: function(features, options) {
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = [], nResponses = 0;
    var types = {};
    types[OpenLayers.State.INSERT] = [];
    types[OpenLayers.State.UPDATE] = [];
    types[OpenLayers.State.DELETE] = [];
    var feature, list;
    for (var i = 0, len = features.length;
i < len;
++i) {
        feature = features[i];
        list = types[feature.state];
        if (list) {
            list.push(feature);
        } 
    }
    var nRequests = (types[OpenLayers.State.INSERT].length > 0 ? 1 : 0) +
types[OpenLayers.State.UPDATE].length +
types[OpenLayers.State.DELETE].length;
    function callback(response) {
        nResponses++;
        response.last = (nResponses >= nRequests);
        this.callUserCallback(response, options);
    }
    var queue = types[OpenLayers.State.INSERT];
    if (queue.length > 0) {
        resp.push(this.create(queue, OpenLayers.Util.applyDefaults({ callback: callback, scope: this }, options.create || {})));
    }
    queue = types[OpenLayers.State.UPDATE];
    for (var i = queue.length - 1;
i >= 0;
--i) {
        resp.push(this.update(queue[i], OpenLayers.Util.applyDefaults({ callback: callback, scope: this }, options.update || {})));
    }
    queue = types[OpenLayers.State.DELETE];
    for (var i = queue.length - 1;
i >= 0;
--i) {
        resp.push(this["delete"](queue[i], OpenLayers.Util.applyDefaults({ callback: callback, scope: this }, options["delete"] || {})));
    }
    return resp;
}, callUserCallback: function(resp, options) {
    var opt = options[resp.requestType];
    if (opt && opt.callback) {
        opt.callback.call(opt.scope, resp);
    }
    if (resp.last && options.callback) {
        options.callback.call(options.scope);
    } 
}, CLASS_NAME: "OpenLayers.Protocol.HTTP"
});
OpenLayers.Style = OpenLayers.Class({ name: null, title: null, description: null, layerName: null, isDefault: false, rules: null, context: null, defaultStyle: null, propertyStyles: null, initialize: function(style, options) {
    this.rules = [];
    this.setDefaultStyle(style || OpenLayers.Feature.Vector.style["default"]);
    OpenLayers.Util.extend(this, options);
}, destroy: function() {
    for (var i = 0, len = this.rules.length;
i < len;
i++) {
        this.rules[i].destroy();
        this.rules[i] = null;
    }
    this.rules = null;
    this.defaultStyle = null;
}, createSymbolizer: function(feature) {
    var style = this.createLiterals(OpenLayers.Util.extend({}, this.defaultStyle), feature);
    var rules = this.rules;
    var rule, context;
    var elseRules = [];
    var appliedRules = false;
    for (var i = 0, len = rules.length;
i < len;
i++) {
        rule = rules[i];
        var applies = rule.evaluate(feature);
        if (applies) {
            if (rule instanceof OpenLayers.Rule && rule.elseFilter) {
                elseRules.push(rule);
            } else {
                appliedRules = true;
                this.applySymbolizer(rule, style, feature);
            } 
        } 
    }
    if (appliedRules == false && elseRules.length > 0) {
        appliedRules = true;
        for (var i = 0, len = elseRules.length;
i < len;
i++) {
            this.applySymbolizer(elseRules[i], style, feature);
        } 
    }
    if (rules.length > 0 && appliedRules == false) {
        style.display = "none";
    } else {
        style.display = "";
    }
    return style;
}, applySymbolizer: function(rule, style, feature) {
    var symbolizerPrefix = feature.geometry ? this.getSymbolizerPrefix(feature.geometry) : OpenLayers.Style.SYMBOLIZER_PREFIXES[0];
    var symbolizer = rule.symbolizer[symbolizerPrefix] || rule.symbolizer;
    return this.createLiterals(OpenLayers.Util.extend(style, symbolizer), feature);
}, createLiterals: function(style, feature) {
    var context = this.context || feature.attributes || feature.data;
    for (var i in this.propertyStyles) {
        style[i] = OpenLayers.Style.createLiteral(style[i], context, feature);
    }
    return style;
}, findPropertyStyles: function() {
    var propertyStyles = {};
    var style = this.defaultStyle;
    this.addPropertyStyles(propertyStyles, style);
    var rules = this.rules;
    var symbolizer, value;
    for (var i = 0, len = rules.length;
i < len;
i++) {
        var symbolizer = rules[i].symbolizer;
        for (var key in symbolizer) {
            value = symbolizer[key];
            if (typeof value == "object") {
                this.addPropertyStyles(propertyStyles, value);
            } else {
                this.addPropertyStyles(propertyStyles, symbolizer);
                break;
            } 
        } 
    }
    return propertyStyles;
}, addPropertyStyles: function(propertyStyles, symbolizer) {
    var property;
    for (var key in symbolizer) {
        property = symbolizer[key];
        if (typeof property == "string" && property.match(/\$\{\w+\}/)) {
            propertyStyles[key] = true;
        } 
    }
    return propertyStyles;
}, addRules: function(rules) {
    this.rules = this.rules.concat(rules);
    this.propertyStyles = this.findPropertyStyles();
}, setDefaultStyle: function(style) {
    this.defaultStyle = style;
    this.propertyStyles = this.findPropertyStyles();
}, getSymbolizerPrefix: function(geometry) {
    var prefixes = OpenLayers.Style.SYMBOLIZER_PREFIXES;
    for (var i = 0, len = prefixes.length;
i < len;
i++) {
        if (geometry.CLASS_NAME.indexOf(prefixes[i]) != -1) {
            return prefixes[i];
        } 
    } 
}, CLASS_NAME: "OpenLayers.Style"
});
OpenLayers.Style.createLiteral = function(value, context, feature) {
    if (typeof value == "string" && value.indexOf("${") != -1) {
        value = OpenLayers.String.format(value, context, [feature]);
        value = (isNaN(value) || !value) ? value : parseFloat(value);
    }
    return value;
};
OpenLayers.Style.SYMBOLIZER_PREFIXES = ['Point', 'Line', 'Polygon', 'Text'];
OpenLayers.Control.ModifyFeature = OpenLayers.Class(OpenLayers.Control, { geometryTypes: null, clickout: true, toggle: true, layer: null, feature: null, vertices: null, virtualVertices: null, selectControl: null, dragControl: null, handlers: null, deleteCodes: null, virtualStyle: null, mode: null, radiusHandle: null, dragHandle: null, onModificationStart: function() { }, onModification: function() { }, onModificationEnd: function() { }, initialize: function(layer, options) {
    this.layer = layer;
    this.vertices = [];
    this.virtualVertices = [];
    this.virtualStyle = OpenLayers.Util.extend({}, this.layer.style || this.layer.styleMap.createSymbolizer());
    this.virtualStyle.fillOpacity = 0.3;
    this.virtualStyle.strokeOpacity = 0.3;
    this.deleteCodes = [46, 68];
    this.mode = OpenLayers.Control.ModifyFeature.RESHAPE;
    OpenLayers.Control.prototype.initialize.apply(this, [options]);
    if (!(this.deleteCodes instanceof Array)) {
        this.deleteCodes = [this.deleteCodes];
    }
    var control = this;
    var selectOptions = { geometryTypes: this.geometryTypes, clickout: this.clickout, toggle: this.toggle };
    this.selectControl = new OpenLayers.Control.SelectFeature(layer, selectOptions);
    this.layer.events.on({ "beforefeatureselected": this.beforeSelectFeature, "featureselected": this.selectFeature, "featureunselected": this.unselectFeature, scope: this });
    var dragOptions = { geometryTypes: ["OpenLayers.Geometry.Point"], snappingOptions: this.snappingOptions, onStart: function(feature, pixel) {
        control.dragStart.apply(control, [feature, pixel]);
    }, onDrag: function(feature) {
        control.dragVertex.apply(control, [feature]);
    }, onComplete: function(feature) {
        control.dragComplete.apply(control, [feature]);
    } 
    };
    this.dragControl = new OpenLayers.Control.DragFeature(layer, dragOptions);
    var keyboardOptions = { keydown: this.handleKeypress };
    this.handlers = { keyboard: new OpenLayers.Handler.Keyboard(this, keyboardOptions) };
}, destroy: function() {
    this.layer.events.un({ "beforefeatureselected": this.beforeSelectFeature, "featureselected": this.selectFeature, "featureunselected": this.unselectFeature, scope: this });
    this.layer = null;
    this.selectControl.destroy();
    this.dragControl.destroy();
    OpenLayers.Control.prototype.destroy.apply(this, []);
}, activate: function() {
    return (this.selectControl.activate() && this.handlers.keyboard.activate() && OpenLayers.Control.prototype.activate.apply(this, arguments));
}, deactivate: function() {
    var deactivated = false;
    if (OpenLayers.Control.prototype.deactivate.apply(this, arguments)) {
        this.layer.removeFeatures(this.vertices, { silent: true });
        this.layer.removeFeatures(this.virtualVertices, { silent: true });
        this.vertices = [];
        this.dragControl.deactivate();
        if (this.feature && this.feature.geometry) {
            this.selectControl.unselect.apply(this.selectControl, [this.feature]);
        }
        this.selectControl.deactivate();
        this.handlers.keyboard.deactivate();
        deactivated = true;
    }
    return deactivated;
}, beforeSelectFeature: function(object) {
    return this.layer.events.triggerEvent("beforefeaturemodified", { feature: object.feature });
}, selectFeature: function(object) {
    this.feature = object.feature;
    this.resetVertices();
    this.dragControl.activate();
    this.onModificationStart(this.feature);
}, unselectFeature: function(object) {
    this.layer.removeFeatures(this.vertices, { silent: true });
    this.vertices = [];
    this.layer.destroyFeatures(this.virtualVertices, { silent: true });
    this.virtualVertices = [];
    if (this.dragHandle) {
        this.layer.destroyFeatures([this.dragHandle], { silent: true });
        delete this.dragHandle;
    }
    if (this.radiusHandle) {
        this.layer.destroyFeatures([this.radiusHandle], { silent: true });
        delete this.radiusHandle;
    }
    this.feature = null;
    this.dragControl.deactivate();
    this.onModificationEnd(object.feature);
    this.layer.events.triggerEvent("afterfeaturemodified", { feature: object.feature });
}, dragStart: function(feature, pixel) {
    if (feature != this.feature && !feature.geometry.parent && feature != this.dragHandle && feature != this.radiusHandle) {
        if (this.feature) {
            this.selectControl.clickFeature.apply(this.selectControl, [this.feature]);
        }
        if (this.geometryTypes == null || OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) != -1) {
            this.selectControl.clickFeature.apply(this.selectControl, [feature]);
            this.dragControl.overFeature.apply(this.dragControl, [feature]);
            this.dragControl.lastPixel = pixel;
            this.dragControl.handlers.drag.started = true;
            this.dragControl.handlers.drag.start = pixel;
            this.dragControl.handlers.drag.last = pixel;
        } 
    } 
}, dragVertex: function(vertex) {
    if (this.feature.geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
        if (this.feature != vertex) {
            this.feature = vertex;
        } 
    } else {
        if (vertex._index) {
            vertex.geometry.parent.addComponent(vertex.geometry, vertex._index);
            delete vertex._index;
            OpenLayers.Util.removeItem(this.virtualVertices, vertex);
            this.vertices.push(vertex);
        } else if (vertex == this.dragHandle) {
            this.layer.removeFeatures(this.vertices, { silent: true });
            this.vertices = [];
            if (this.radiusHandle) {
                this.layer.destroyFeatures([this.radiusHandle], { silent: true });
                this.radiusHandle = null;
            } 
        }
        if (this.virtualVertices.length > 0) {
            this.layer.destroyFeatures(this.virtualVertices, { silent: true });
            this.virtualVertices = [];
        }
        this.layer.drawFeature(this.feature, this.selectControl.renderIntent);
    }
    this.layer.drawFeature(vertex);
}, dragComplete: function(vertex) {
    this.resetVertices();
    this.onModification(this.feature);
    this.layer.events.triggerEvent("featuremodified", { feature: this.feature });
}, resetVertices: function() {
    if (this.dragControl.feature) {
        this.dragControl.outFeature(this.dragControl.feature);
    }
    if (this.vertices.length > 0) {
        this.layer.removeFeatures(this.vertices, { silent: true });
        this.vertices = [];
    }
    if (this.virtualVertices.length > 0) {
        this.layer.removeFeatures(this.virtualVertices, { silent: true });
        this.virtualVertices = [];
    }
    if (this.dragHandle) {
        this.layer.destroyFeatures([this.dragHandle], { silent: true });
        this.dragHandle = null;
    }
    if (this.radiusHandle) {
        this.layer.destroyFeatures([this.radiusHandle], { silent: true });
        this.radiusHandle = null;
    }
    if (this.feature && this.feature.geometry.CLASS_NAME != "OpenLayers.Geometry.Point") {
        if ((this.mode & OpenLayers.Control.ModifyFeature.DRAG)) {
            this.collectDragHandle();
        }
        if ((this.mode & (OpenLayers.Control.ModifyFeature.ROTATE | OpenLayers.Control.ModifyFeature.RESIZE))) {
            this.collectRadiusHandle();
        }
        if ((this.mode & OpenLayers.Control.ModifyFeature.RESHAPE)) {
            this.collectVertices();
        } 
    } 
}, handleKeypress: function(evt) {
    var code = evt.keyCode;
    if (this.feature && OpenLayers.Util.indexOf(this.deleteCodes, code) != -1) {
        var vertex = this.dragControl.feature;
        if (vertex && OpenLayers.Util.indexOf(this.vertices, vertex) != -1 && !this.dragControl.handlers.drag.dragging && vertex.geometry.parent) {
            vertex.geometry.parent.removeComponent(vertex.geometry);
            this.layer.drawFeature(this.feature, this.selectControl.renderIntent);
            this.resetVertices();
            this.onModification(this.feature);
            this.layer.events.triggerEvent("featuremodified", { feature: this.feature });
        } 
    } 
}, collectVertices: function() {
    this.vertices = [];
    this.virtualVertices = [];
    var control = this;
    function collectComponentVertices(geometry) {
        var i, vertex, component, len;
        if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
            vertex = new OpenLayers.Feature.Vector(geometry);
            control.vertices.push(vertex);
        } else {
            var numVert = geometry.components.length;
            if (geometry.CLASS_NAME == "OpenLayers.Geometry.LinearRing") {
                numVert -= 1;
            }
            for (i = 0;
i < numVert;
++i) {
                component = geometry.components[i];
                if (component.CLASS_NAME == "OpenLayers.Geometry.Point") {
                    vertex = new OpenLayers.Feature.Vector(component);
                    control.vertices.push(vertex);
                } else {
                    collectComponentVertices(component);
                } 
            }
            if (geometry.CLASS_NAME != "OpenLayers.Geometry.MultiPoint") {
                for (i = 0, len = geometry.components.length;
i < len - 1;
++i) {
                    var prevVertex = geometry.components[i];
                    var nextVertex = geometry.components[i + 1];
                    if (prevVertex.CLASS_NAME == "OpenLayers.Geometry.Point" && nextVertex.CLASS_NAME == "OpenLayers.Geometry.Point") {
                        var x = (prevVertex.x + nextVertex.x) / 2;
                        var y = (prevVertex.y + nextVertex.y) / 2;
                        var point = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(x, y), null, control.virtualStyle);
                        point.geometry.parent = geometry;
                        point._index = i + 1;
                        control.virtualVertices.push(point);
                    } 
                } 
            } 
        } 
    }
    collectComponentVertices.call(this, this.feature.geometry);
    this.layer.addFeatures(this.virtualVertices, { silent: true });
    this.layer.addFeatures(this.vertices, { silent: true });
}, collectDragHandle: function() {
    var geometry = this.feature.geometry;
    var center = geometry.getBounds().getCenterLonLat();
    var originGeometry = new OpenLayers.Geometry.Point(center.lon, center.lat);
    var origin = new OpenLayers.Feature.Vector(originGeometry);
    originGeometry.move = function(x, y) {
        OpenLayers.Geometry.Point.prototype.move.call(this, x, y);
        geometry.move(x, y);
    };
    this.dragHandle = origin;
    this.layer.addFeatures([this.dragHandle], { silent: true });
}, collectRadiusHandle: function() {
    var geometry = this.feature.geometry;
    var bounds = geometry.getBounds();
    var center = bounds.getCenterLonLat();
    var originGeometry = new OpenLayers.Geometry.Point(center.lon, center.lat);
    var radiusGeometry = new OpenLayers.Geometry.Point(bounds.right, bounds.bottom);
    var radius = new OpenLayers.Feature.Vector(radiusGeometry);
    var resize = (this.mode & OpenLayers.Control.ModifyFeature.RESIZE);
    var rotate = (this.mode & OpenLayers.Control.ModifyFeature.ROTATE);
    radiusGeometry.move = function(x, y) {
        OpenLayers.Geometry.Point.prototype.move.call(this, x, y);
        var dx1 = this.x - originGeometry.x;
        var dy1 = this.y - originGeometry.y;
        var dx0 = dx1 - x;
        var dy0 = dy1 - y;
        if (rotate) {
            var a0 = Math.atan2(dy0, dx0);
            var a1 = Math.atan2(dy1, dx1);
            var angle = a1 - a0;
            angle *= 180 / Math.PI;
            geometry.rotate(angle, originGeometry);
        }
        if (resize) {
            var l0 = Math.sqrt((dx0 * dx0) + (dy0 * dy0));
            var l1 = Math.sqrt((dx1 * dx1) + (dy1 * dy1));
            geometry.resize(l1 / l0, originGeometry);
        } 
    };
    this.radiusHandle = radius;
    this.layer.addFeatures([this.radiusHandle], { silent: true });
}, setMap: function(map) {
    this.selectControl.setMap(map);
    this.dragControl.setMap(map);
    OpenLayers.Control.prototype.setMap.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Control.ModifyFeature"
});
OpenLayers.Control.ModifyFeature.RESHAPE = 1;
OpenLayers.Control.ModifyFeature.RESIZE = 2;
OpenLayers.Control.ModifyFeature.ROTATE = 4;
OpenLayers.Control.ModifyFeature.DRAG = 8;
OpenLayers.Control.Navigation = OpenLayers.Class(OpenLayers.Control, { dragPan: null, dragPanOptions: null, zoomBox: null, zoomWheelEnabled: true, handleRightClicks: false, initialize: function(options) {
    this.handlers = {};
    OpenLayers.Control.prototype.initialize.apply(this, arguments);
}, destroy: function() {
    this.deactivate();
    if (this.dragPan) {
        this.dragPan.destroy();
    }
    this.dragPan = null;
    if (this.zoomBox) {
        this.zoomBox.destroy();
    }
    this.zoomBox = null;
    OpenLayers.Control.prototype.destroy.apply(this, arguments);
}, activate: function() {
    this.dragPan.activate();
    if (this.zoomWheelEnabled) {
        this.handlers.wheel.activate();
    }
    this.handlers.click.activate();
    this.zoomBox.activate();
    return OpenLayers.Control.prototype.activate.apply(this, arguments);
}, deactivate: function() {
    this.zoomBox.deactivate();
    this.dragPan.deactivate();
    this.handlers.click.deactivate();
    this.handlers.wheel.deactivate();
    return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
}, draw: function() {
    if (this.handleRightClicks) {
        this.map.div.oncontextmenu = function() {
            return false;
        };
    }
    var clickCallbacks = { 'dblclick': this.defaultDblClick, 'dblrightclick': this.defaultDblRightClick };
    var clickOptions = { 'double': true, 'stopDouble': true };
    this.handlers.click = new OpenLayers.Handler.Click(this, clickCallbacks, clickOptions);
    this.dragPan = new OpenLayers.Control.DragPan(OpenLayers.Util.extend({ map: this.map }, this.dragPanOptions));
    this.zoomBox = new OpenLayers.Control.ZoomBox({ map: this.map, keyMask: OpenLayers.Handler.MOD_SHIFT });
    this.dragPan.draw();
    this.zoomBox.draw();
    this.handlers.wheel = new OpenLayers.Handler.MouseWheel(this, { "up": this.wheelUp, "down": this.wheelDown });
    this.activate();
}, defaultDblClick: function(evt) {
    var newCenter = this.map.getLonLatFromViewPortPx(evt.xy);
    this.map.setCenter(newCenter, this.map.zoom + 1);
}, defaultDblRightClick: function(evt) {
    var newCenter = this.map.getLonLatFromViewPortPx(evt.xy);
    this.map.setCenter(newCenter, this.map.zoom - 1);
}, wheelChange: function(evt, deltaZ) {
    var newZoom = this.map.getZoom() + deltaZ;
    if (!this.map.isValidZoomLevel(newZoom)) {
        return;
    }
    var size = this.map.getSize();
    var deltaX = size.w / 2 - evt.xy.x;
    var deltaY = evt.xy.y - size.h / 2;
    var newRes = this.map.baseLayer.getResolutionForZoom(newZoom);
    var zoomPoint = this.map.getLonLatFromPixel(evt.xy);
    var newCenter = new OpenLayers.LonLat(zoomPoint.lon + deltaX * newRes, zoomPoint.lat + deltaY * newRes);
    this.map.setCenter(newCenter, newZoom);
}, wheelUp: function(evt) {
    this.wheelChange(evt, 1);
}, wheelDown: function(evt) {
    this.wheelChange(evt, -1);
}, disableZoomWheel: function() {
    this.zoomWheelEnabled = false;
    this.handlers.wheel.deactivate();
}, enableZoomWheel: function() {
    this.zoomWheelEnabled = true;
    if (this.active) {
        this.handlers.wheel.activate();
    } 
}, CLASS_NAME: "OpenLayers.Control.Navigation"
});
OpenLayers.Filter = OpenLayers.Class({ initialize: function(options) {
    OpenLayers.Util.extend(this, options);
}, destroy: function() { }, evaluate: function(context) {
    return true;
}, CLASS_NAME: "OpenLayers.Filter"
});
OpenLayers.Geometry = OpenLayers.Class({ id: null, parent: null, bounds: null, initialize: function() {
    this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
}, destroy: function() {
    this.id = null;
    this.bounds = null;
}, clone: function() {
    return new OpenLayers.Geometry();
}, setBounds: function(bounds) {
    if (bounds) {
        this.bounds = bounds.clone();
    } 
}, clearBounds: function() {
    this.bounds = null;
    if (this.parent) {
        this.parent.clearBounds();
    } 
}, extendBounds: function(newBounds) {
    var bounds = this.getBounds();
    if (!bounds) {
        this.setBounds(newBounds);
    } else {
        this.bounds.extend(newBounds);
    } 
}, getBounds: function() {
    if (this.bounds == null) {
        this.calculateBounds();
    }
    return this.bounds;
}, calculateBounds: function() { }, atPoint: function(lonlat, toleranceLon, toleranceLat) {
    var atPoint = false;
    var bounds = this.getBounds();
    if ((bounds != null) && (lonlat != null)) {
        var dX = (toleranceLon != null) ? toleranceLon : 0;
        var dY = (toleranceLat != null) ? toleranceLat : 0;
        var toleranceBounds = new OpenLayers.Bounds(this.bounds.left - dX, this.bounds.bottom - dY, this.bounds.right + dX, this.bounds.top + dY);
        atPoint = toleranceBounds.containsLonLat(lonlat);
    }
    return atPoint;
}, getLength: function() {
    return 0.0;
}, getArea: function() {
    return 0.0;
}, toString: function() {
    return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));
}, CLASS_NAME: "OpenLayers.Geometry"
});
OpenLayers.Geometry.segmentsIntersect = function(seg1, seg2, point) {
    var intersection = false;
    var x11_21 = seg1.x1 - seg2.x1;
    var y11_21 = seg1.y1 - seg2.y1;
    var x12_11 = seg1.x2 - seg1.x1;
    var y12_11 = seg1.y2 - seg1.y1;
    var y22_21 = seg2.y2 - seg2.y1;
    var x22_21 = seg2.x2 - seg2.x1;
    var d = (y22_21 * x12_11) - (x22_21 * y12_11);
    var n1 = (x22_21 * y11_21) - (y22_21 * x11_21);
    var n2 = (x12_11 * y11_21) - (y12_11 * x11_21);
    if (d == 0) {
        if (n1 == 0 && n2 == 0) {
            intersection = true;
        } 
    } else {
        var along1 = n1 / d;
        var along2 = n2 / d;
        if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
            if (!point) {
                intersection = true;
            } else {
                var x = seg1.x1 + (along1 * x12_11);
                var y = seg1.y1 + (along1 * y12_11);
                intersection = new OpenLayers.Geometry.Point(x, y);
            } 
        } 
    }
    return intersection;
};
OpenLayers.Layer.KaMap = OpenLayers.Class(OpenLayers.Layer.Grid, { isBaseLayer: true, units: null, resolution: OpenLayers.DOTS_PER_INCH, DEFAULT_PARAMS: { i: 'jpeg', map: '' }, initialize: function(name, url, params, options) {
    var newArguments = [];
    newArguments.push(name, url, params, options);
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
    this.params = OpenLayers.Util.applyDefaults(this.params, this.DEFAULT_PARAMS);
}, getURL: function(bounds) {
    bounds = this.adjustBounds(bounds);
    var mapRes = this.map.getResolution();
    var scale = Math.round((this.map.getScale() * 10000)) / 10000;
    var pX = Math.round(bounds.left / mapRes);
    var pY = -Math.round(bounds.top / mapRes);
    return this.getFullRequestString({ t: pY, l: pX, s: scale });
}, addTile: function(bounds, position) {
    var url = this.getURL(bounds);
    return new OpenLayers.Tile.Image(this, position, bounds, url, this.tileSize);
}, calculateGridLayout: function(bounds, extent, resolution) {
    var tilelon = resolution * this.tileSize.w;
    var tilelat = resolution * this.tileSize.h;
    var offsetlon = bounds.left;
    var tilecol = Math.floor(offsetlon / tilelon) - this.buffer;
    var tilecolremain = offsetlon / tilelon - tilecol;
    var tileoffsetx = -tilecolremain * this.tileSize.w;
    var tileoffsetlon = tilecol * tilelon;
    var offsetlat = bounds.top;
    var tilerow = Math.ceil(offsetlat / tilelat) + this.buffer;
    var tilerowremain = tilerow - offsetlat / tilelat;
    var tileoffsety = -(tilerowremain + 1) * this.tileSize.h;
    var tileoffsetlat = tilerow * tilelat;
    return { tilelon: tilelon, tilelat: tilelat, tileoffsetlon: tileoffsetlon, tileoffsetlat: tileoffsetlat, tileoffsetx: tileoffsetx, tileoffsety: tileoffsety };
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.KaMap(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
    if (this.tileSize != null) {
        obj.tileSize = this.tileSize.clone();
    }
    obj.grid = [];
    return obj;
}, getTileBounds: function(viewPortPx) {
    var resolution = this.getResolution();
    var tileMapWidth = resolution * this.tileSize.w;
    var tileMapHeight = resolution * this.tileSize.h;
    var mapPoint = this.getLonLatFromViewPortPx(viewPortPx);
    var tileLeft = tileMapWidth * Math.floor(mapPoint.lon / tileMapWidth);
    var tileBottom = tileMapHeight * Math.floor(mapPoint.lat / tileMapHeight);
    return new OpenLayers.Bounds(tileLeft, tileBottom, tileLeft + tileMapWidth, tileBottom + tileMapHeight);
}, CLASS_NAME: "OpenLayers.Layer.KaMap"
});
OpenLayers.Layer.MapGuide = OpenLayers.Class(OpenLayers.Layer.Grid, { isBaseLayer: true, singleTile: false, TILE_PARAMS: { operation: 'GETTILEIMAGE', version: '1.2.0' }, SINGLE_TILE_PARAMS: { operation: 'GETMAPIMAGE', format: 'PNG', locale: 'en', clip: '1', version: '1.0.0' }, defaultSize: new OpenLayers.Size(300, 300), initialize: function(name, url, params, options) {
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, arguments);
    if (options == null || options.isBaseLayer == null) {
        this.isBaseLayer = ((this.transparent != "true") && (this.transparent != true));
    }
    if (this.singleTile) {
        OpenLayers.Util.applyDefaults(this.params, this.SINGLE_TILE_PARAMS);
    } else {
        OpenLayers.Util.applyDefaults(this.params, this.TILE_PARAMS);
        this.setTileSize(this.defaultSize);
    } 
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.MapGuide(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
    return obj;
}, addTile: function(bounds, position) {
    return new OpenLayers.Tile.Image(this, position, bounds, null, this.tileSize);
}, getURL: function(bounds) {
    var url;
    var center = bounds.getCenterLonLat();
    var mapSize = this.map.getCurrentSize();
    if (this.singleTile) {
        var params = {};
        params.setdisplaydpi = OpenLayers.DOTS_PER_INCH;
        params.setdisplayheight = mapSize.h * this.ratio;
        params.setdisplaywidth = mapSize.w * this.ratio;
        params.setviewcenterx = center.lon;
        params.setviewcentery = center.lat;
        params.setviewscale = this.map.getScale();
        if (!this.isBaseLayer) {
            this.params.operation = "GETDYNAMICMAPOVERLAYIMAGE";
            var getVisParams = {};
            getVisParams = OpenLayers.Util.extend(getVisParams, params);
            getVisParams.operation = "GETVISIBLEMAPEXTENT";
            getVisParams.version = "1.0.0";
            getVisParams.session = this.params.session;
            getVisParams.mapName = this.params.mapName;
            getVisParams.format = 'text/xml';
            url = this.getFullRequestString(getVisParams);
            OpenLayers.Request.GET({ url: url, async: false });
        }
        url = this.getFullRequestString(params);
    } else {
        var currentRes = this.map.getResolution();
        var colidx = Math.floor((bounds.left - this.maxExtent.left) / currentRes);
        colidx = Math.round(colidx / this.tileSize.w);
        var rowidx = Math.floor((this.maxExtent.top - bounds.top) / currentRes);
        rowidx = Math.round(rowidx / this.tileSize.h);
        url = this.getFullRequestString({ tilecol: colidx, tilerow: rowidx, scaleindex: this.resolutions.length - this.map.zoom - 1 });
    }
    return url;
}, getFullRequestString: function(newParams, altUrl) {
    var url = (altUrl == null) ? this.url : altUrl;
    if (typeof url == "object") {
        url = url[Math.floor(Math.random() * url.length)];
    }
    var requestString = url;
    var allParams = OpenLayers.Util.extend({}, this.params);
    allParams = OpenLayers.Util.extend(allParams, newParams);
    var urlParams = OpenLayers.Util.upperCaseObject(OpenLayers.Util.getArgs(url));
    for (var key in allParams) {
        if (key.toUpperCase() in urlParams) {
            delete allParams[key];
        } 
    }
    var paramsString = OpenLayers.Util.getParameterString(allParams);
    paramsString = paramsString.replace(/,/g, "+");
    if (paramsString != "") {
        var lastServerChar = url.charAt(url.length - 1);
        if ((lastServerChar == "&") || (lastServerChar == "?")) {
            requestString += paramsString;
        } else {
            if (url.indexOf('?') == -1) {
                requestString += '?' + paramsString;
            } else {
                requestString += '&' + paramsString;
            } 
        } 
    }
    return requestString;
}, calculateGridLayout: function(bounds, extent, resolution) {
    var tilelon = resolution * this.tileSize.w;
    var tilelat = resolution * this.tileSize.h;
    var offsetlon = bounds.left - extent.left;
    var tilecol = Math.floor(offsetlon / tilelon) - this.buffer;
    var tilecolremain = offsetlon / tilelon - tilecol;
    var tileoffsetx = -tilecolremain * this.tileSize.w;
    var tileoffsetlon = extent.left + tilecol * tilelon;
    var offsetlat = extent.top - bounds.top + tilelat;
    var tilerow = Math.floor(offsetlat / tilelat) - this.buffer;
    var tilerowremain = tilerow - offsetlat / tilelat;
    var tileoffsety = tilerowremain * this.tileSize.h;
    var tileoffsetlat = extent.top - tilelat * tilerow;
    return { tilelon: tilelon, tilelat: tilelat, tileoffsetlon: tileoffsetlon, tileoffsetlat: tileoffsetlat, tileoffsetx: tileoffsetx, tileoffsety: tileoffsety };
}, CLASS_NAME: "OpenLayers.Layer.MapGuide"
});
OpenLayers.Layer.MapServer = OpenLayers.Class(OpenLayers.Layer.Grid, { DEFAULT_PARAMS: { mode: "map", map_imagetype: "png" }, initialize: function(name, url, params, options) {
    var newArguments = [];
    newArguments.push(name, url, params, options);
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
    this.params = OpenLayers.Util.applyDefaults(this.params, this.DEFAULT_PARAMS);
    if (options == null || options.isBaseLayer == null) {
        this.isBaseLayer = ((this.params.transparent != "true") && (this.params.transparent != true));
    } 
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.MapServer(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
    return obj;
}, addTile: function(bounds, position) {
    return new OpenLayers.Tile.Image(this, position, bounds, null, this.tileSize);
}, getURL: function(bounds) {
    bounds = this.adjustBounds(bounds);
    var extent = [bounds.left, bounds.bottom, bounds.right, bounds.top];
    var imageSize = this.getImageSize();
    var url = this.getFullRequestString({ mapext: extent, imgext: extent, map_size: [imageSize.w, imageSize.h], imgx: imageSize.w / 2, imgy: imageSize.h / 2, imgxy: [imageSize.w, imageSize.h] });
    return url;
}, getFullRequestString: function(newParams, altUrl) {
    var url = (altUrl == null) ? this.url : altUrl;
    var allParams = OpenLayers.Util.extend({}, this.params);
    allParams = OpenLayers.Util.extend(allParams, newParams);
    var paramsString = OpenLayers.Util.getParameterString(allParams);
    if (url instanceof Array) {
        url = this.selectUrl(paramsString, url);
    }
    var urlParams = OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));
    for (var key in allParams) {
        if (key.toUpperCase() in urlParams) {
            delete allParams[key];
        } 
    }
    paramsString = OpenLayers.Util.getParameterString(allParams);
    var requestString = url;
    paramsString = paramsString.replace(/,/g, "+");
    if (paramsString != "") {
        var lastServerChar = url.charAt(url.length - 1);
        if ((lastServerChar == "&") || (lastServerChar == "?")) {
            requestString += paramsString;
        } else {
            if (url.indexOf('?') == -1) {
                requestString += '?' + paramsString;
            } else {
                requestString += '&' + paramsString;
            } 
        } 
    }
    return requestString;
}, CLASS_NAME: "OpenLayers.Layer.MapServer"
});
OpenLayers.Layer.TMS = OpenLayers.Class(OpenLayers.Layer.Grid, { serviceVersion: "1.0.0", isBaseLayer: true, tileOrigin: null, initialize: function(name, url, options) {
    var newArguments = [];
    newArguments.push(name, url, {}, options);
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
}, destroy: function() {
    OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.TMS(this.name, this.url, this.options);
    }
    obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
    return obj;
}, getURL: function(bounds) {
    bounds = this.adjustBounds(bounds);
    var res = this.map.getResolution();
    var x = Math.round((bounds.left - this.tileOrigin.lon) / (res * this.tileSize.w));
    var y = Math.round((bounds.bottom - this.tileOrigin.lat) / (res * this.tileSize.h));
    var z = this.map.getZoom();
    var path = this.serviceVersion + "/" + this.layername + "/" + z + "/" + x + "/" + y + "." + this.type;
    var url = this.url;
    if (url instanceof Array) {
        url = this.selectUrl(path, url);
    }
    return url + path;
}, addTile: function(bounds, position) {
    return new OpenLayers.Tile.Image(this, position, bounds, null, this.tileSize);
}, setMap: function(map) {
    OpenLayers.Layer.Grid.prototype.setMap.apply(this, arguments);
    if (!this.tileOrigin) {
        this.tileOrigin = new OpenLayers.LonLat(this.map.maxExtent.left, this.map.maxExtent.bottom);
    } 
}, CLASS_NAME: "OpenLayers.Layer.TMS"
});
OpenLayers.Layer.TileCache = OpenLayers.Class(OpenLayers.Layer.Grid, { isBaseLayer: true, tileOrigin: null, format: 'image/png', initialize: function(name, url, layername, options) {
    this.layername = layername;
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, [name, url, {}, options]);
    this.extension = this.format.split('/')[1].toLowerCase();
    this.extension = (this.extension == 'jpg') ? 'jpeg' : this.extension;
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.TileCache(this.name, this.url, this.layername, this.options);
    }
    obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
    return obj;
}, getURL: function(bounds) {
    var res = this.map.getResolution();
    var bbox = this.maxExtent;
    var size = this.tileSize;
    var tileX = Math.round((bounds.left - bbox.left) / (res * size.w));
    var tileY = Math.round((bounds.bottom - bbox.bottom) / (res * size.h));
    var tileZ = this.map.zoom;
    function zeroPad(number, length) {
        number = String(number);
        var zeros = [];
        for (var i = 0;
i < length;
++i) {
            zeros.push('0');
        }
        return zeros.join('').substring(0, length - number.length) + number;
    }
    var components = [this.layername, zeroPad(tileZ, 2), zeroPad(parseInt(tileX / 1000000), 3), zeroPad((parseInt(tileX / 1000) % 1000), 3), zeroPad((parseInt(tileX) % 1000), 3), zeroPad(parseInt(tileY / 1000000), 3), zeroPad((parseInt(tileY / 1000) % 1000), 3), zeroPad((parseInt(tileY) % 1000), 3) + '.' + this.extension];
    var path = components.join('/');
    var url = this.url;
    if (url instanceof Array) {
        url = this.selectUrl(path, url);
    }
    url = (url.charAt(url.length - 1) == '/') ? url : url + '/';
    return url + path;
}, addTile: function(bounds, position) {
    var url = this.getURL(bounds);
    return new OpenLayers.Tile.Image(this, position, bounds, url, this.tileSize);
}, setMap: function(map) {
    OpenLayers.Layer.Grid.prototype.setMap.apply(this, arguments);
    if (!this.tileOrigin) {
        this.tileOrigin = new OpenLayers.LonLat(this.map.maxExtent.left, this.map.maxExtent.bottom);
    } 
}, CLASS_NAME: "OpenLayers.Layer.TileCache"
});
OpenLayers.Layer.WMS = OpenLayers.Class(OpenLayers.Layer.Grid, { DEFAULT_PARAMS: { service: "WMS", version: "1.1.1", request: "GetMap", styles: "", exceptions: "application/vnd.ogc.se_inimage", format: "image/jpeg" }, reproject: false, isBaseLayer: true, encodeBBOX: false, initialize: function(name, url, params, options) {
    var newArguments = [];
    params = OpenLayers.Util.upperCaseObject(params);
    newArguments.push(name, url, params, options);
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
    OpenLayers.Util.applyDefaults(this.params, OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));
    if (this.params.TRANSPARENT && this.params.TRANSPARENT.toString().toLowerCase() == "true") {
        if ((options == null) || (!options.isBaseLayer)) {
            this.isBaseLayer = false;
        }
        if (this.params.FORMAT == "image/jpeg") {
            this.params.FORMAT = OpenLayers.Util.alphaHack() ? "image/gif" : "image/png";
        } 
    } 
}, destroy: function() {
    OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.WMS(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);
    return obj;
}, getURL: function(bounds) {
    bounds = this.adjustBounds(bounds);
    var imageSize = this.getImageSize();
    var newParams = { 'BBOX': this.encodeBBOX ? bounds.toBBOX() : bounds.toArray(), 'WIDTH': imageSize.w, 'HEIGHT': imageSize.h };
    var requestString = this.getFullRequestString(newParams);
    return requestString;
}, addTile: function(bounds, position) {
    return new OpenLayers.Tile.Image(this, position, bounds, null, this.tileSize);
}, mergeNewParams: function(newParams) {
    var upperParams = OpenLayers.Util.upperCaseObject(newParams);
    var newArguments = [upperParams];
    return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this, newArguments);
}, getFullRequestString: function(newParams, altUrl) {
    var projectionCode = this.map.getProjection();
    this.params.SRS = (projectionCode == "none") ? null : projectionCode;
    return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Layer.WMS"
});
OpenLayers.Layer.WorldWind = OpenLayers.Class(OpenLayers.Layer.Grid, { DEFAULT_PARAMS: {}, isBaseLayer: true, lzd: null, zoomLevels: null, initialize: function(name, url, lzd, zoomLevels, params, options) {
    this.lzd = lzd;
    this.zoomLevels = zoomLevels;
    var newArguments = [];
    newArguments.push(name, url, params, options);
    OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
    this.params = OpenLayers.Util.applyDefaults(this.params, this.DEFAULT_PARAMS);
}, addTile: function(bounds, position) {
    return new OpenLayers.Tile.Image(this, position, bounds, null, this.tileSize);
}, getZoom: function() {
    var zoom = this.map.getZoom();
    var extent = this.map.getMaxExtent();
    zoom = zoom - Math.log(this.maxResolution / (this.lzd / 512)) / Math.log(2);
    return zoom;
}, getURL: function(bounds) {
    bounds = this.adjustBounds(bounds);
    var zoom = this.getZoom();
    var extent = this.map.getMaxExtent();
    var deg = this.lzd / Math.pow(2, this.getZoom());
    var x = Math.floor((bounds.left - extent.left) / deg);
    var y = Math.floor((bounds.bottom - extent.bottom) / deg);
    if (this.map.getResolution() <= (this.lzd / 512) && this.getZoom() <= this.zoomLevels) {
        return this.getFullRequestString({ L: zoom, X: x, Y: y });
    } else {
        return OpenLayers.Util.getImagesLocation() + "blank.gif";
    } 
}, CLASS_NAME: "OpenLayers.Layer.WorldWind"
});
OpenLayers.Protocol.SQL.Gears = OpenLayers.Class(OpenLayers.Protocol.SQL, { FID_PREFIX: '__gears_fid__', NULL_GEOMETRY: '__gears_null_geometry__', NULL_FEATURE_STATE: '__gears_null_feature_state__', jsonParser: null, wktParser: null, fidRegExp: null, saveFeatureState: true, typeOfFid: "string", db: null, initialize: function(options) {
    if (!this.supported()) {
        return;
    }
    OpenLayers.Protocol.SQL.prototype.initialize.apply(this, [options]);
    this.jsonParser = new OpenLayers.Format.JSON();
    this.wktParser = new OpenLayers.Format.WKT();
    this.fidRegExp = new RegExp('^' + this.FID_PREFIX);
    this.initializeDatabase();
}, initializeDatabase: function() {
    this.db = google.gears.factory.create('beta.database');
    this.db.open(this.databaseName);
    this.db.execute("CREATE TABLE IF NOT EXISTS " + this.tableName + " (fid TEXT UNIQUE, geometry TEXT, properties TEXT," + "  state TEXT)");
}, destroy: function() {
    this.db.close();
    this.db = null;
    this.jsonParser = null;
    this.wktParser = null;
    OpenLayers.Protocol.SQL.prototype.destroy.apply(this);
}, supported: function() {
    return !!(window.google && google.gears);
}, read: function(options) {
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var feature, features = [];
    var rs = this.db.execute("SELECT * FROM " + this.tableName);
    while (rs.isValidRow()) {
        feature = this.unfreezeFeature(rs);
        if (this.evaluateFilter(feature, options.filter)) {
            if (!options.noFeatureStateReset) {
                feature.state = null;
            }
            features.push(feature);
        }
        rs.next();
    }
    rs.close();
    var resp = new OpenLayers.Protocol.Response({ code: OpenLayers.Protocol.Response.SUCCESS, requestType: "read", features: features });
    if (options && options.callback) {
        options.callback.call(options.scope, resp);
    }
    return resp;
}, unfreezeFeature: function(row) {
    var feature;
    var wkt = row.fieldByName('geometry');
    if (wkt == this.NULL_GEOMETRY) {
        feature = new OpenLayers.Feature.Vector();
    } else {
        feature = this.wktParser.read(wkt);
    }
    feature.attributes = this.jsonParser.read(row.fieldByName('properties'));
    feature.fid = this.extractFidFromField(row.fieldByName('fid'));
    var state = row.fieldByName('state');
    if (state == this.NULL_FEATURE_STATE) {
        state = null;
    }
    feature.state = state;
    return feature;
}, extractFidFromField: function(field) {
    if (!field.match(this.fidRegExp) && this.typeOfFid == "number") {
        field = parseFloat(field);
    }
    return field;
}, create: function(features, options) {
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = this.createOrUpdate(features);
    resp.requestType = "create";
    if (options && options.callback) {
        options.callback.call(options.scope, resp);
    }
    return resp;
}, update: function(features, options) {
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var resp = this.createOrUpdate(features);
    resp.requestType = "update";
    if (options && options.callback) {
        options.callback.call(options.scope, resp);
    }
    return resp;
}, createOrUpdate: function(features) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    var i, len = features.length, feature;
    var insertedFeatures = new Array(len);
    for (i = 0;
i < len;
i++) {
        feature = features[i];
        var params = this.freezeFeature(feature);
        this.db.execute("REPLACE INTO " + this.tableName + " (fid, geometry, properties, state)" + " VALUES (?, ?, ?, ?)", params);
        var clone = feature.clone();
        clone.fid = this.extractFidFromField(params[0]);
        insertedFeatures[i] = clone;
    }
    return new OpenLayers.Protocol.Response({ code: OpenLayers.Protocol.Response.SUCCESS, features: insertedFeatures, reqFeatures: features });
}, freezeFeature: function(feature) {
    feature.fid = feature.fid != null ? "" + feature.fid : OpenLayers.Util.createUniqueID(this.FID_PREFIX);
    var geometry = feature.geometry != null ? feature.geometry.toString() : this.NULL_GEOMETRY;
    var properties = this.jsonParser.write(feature.attributes);
    var state = this.getFeatureStateForFreeze(feature);
    return [feature.fid, geometry, properties, state];
}, getFeatureStateForFreeze: function(feature) {
    var state;
    if (!this.saveFeatureState) {
        state = this.NULL_FEATURE_STATE;
    } else if (this.createdOffline(feature)) {
        state = OpenLayers.State.INSERT;
    } else {
        state = feature.state;
    }
    return state;
}, "delete": function(features, options) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    options = OpenLayers.Util.applyDefaults(options, this.options);
    var i, len, feature;
    for (i = 0, len = features.length;
i < len;
i++) {
        feature = features[i];
        if (this.saveFeatureState && !this.createdOffline(feature)) {
            var toDelete = feature.clone();
            toDelete.fid = feature.fid;
            if (toDelete.geometry) {
                toDelete.geometry.destroy();
                toDelete.geometry = null;
            }
            toDelete.state = feature.state;
            this.createOrUpdate(toDelete);
        } else {
            this.db.execute("DELETE FROM " + this.tableName + " WHERE fid = ?", [feature.fid]);
        } 
    }
    var resp = new OpenLayers.Protocol.Response({ code: OpenLayers.Protocol.Response.SUCCESS, requestType: "delete", reqFeatures: features });
    if (options && options.callback) {
        options.callback.call(options.scope, resp);
    }
    return resp;
}, createdOffline: function(feature) {
    return (typeof feature.fid == "string" && !!(feature.fid.match(this.fidRegExp)));
}, commit: function(features, options) {
    var opt, resp = [], nRequests = 0, nResponses = 0;
    function callback(resp) {
        if (++nResponses < nRequests) {
            resp.last = false;
        }
        this.callUserCallback(options, resp);
    }
    var feature, toCreate = [], toUpdate = [], toDelete = [];
    for (var i = features.length - 1;
i >= 0;
i--) {
        feature = features[i];
        switch (feature.state) {
            case OpenLayers.State.INSERT: toCreate.push(feature);
                break;
            case OpenLayers.State.UPDATE: toUpdate.push(feature);
                break;
            case OpenLayers.State.DELETE: toDelete.push(feature);
                break;
        } 
    }
    if (toCreate.length > 0) {
        nRequests++;
        opt = OpenLayers.Util.applyDefaults({ "callback": callback, "scope": this }, options.create);
        resp.push(this.create(toCreate, opt));
    }
    if (toUpdate.length > 0) {
        nRequests++;
        opt = OpenLayers.Util.applyDefaults({ "callback": callback, "scope": this }, options.update);
        resp.push(this.update(toUpdate, opt));
    }
    if (toDelete.length > 0) {
        nRequests++;
        opt = OpenLayers.Util.applyDefaults({ "callback": callback, "scope": this }, options["delete"]);
        resp.push(this["delete"](toDelete, opt));
    }
    return resp;
}, clear: function() {
    this.db.execute("DELETE FROM " + this.tableName);
}, callUserCallback: function(options, resp) {
    var opt = options[resp.requestType];
    if (opt && opt.callback) {
        opt.callback.call(opt.scope, resp);
    }
    if (resp.last && options.callback) {
        options.callback.call(options.scope);
    } 
}, CLASS_NAME: "OpenLayers.Protocol.SQL.Gears"
});
OpenLayers.Rule = OpenLayers.Class({ id: null, name: 'default', title: null, description: null, context: null, filter: null, elseFilter: false, symbolizer: null, minScaleDenominator: null, maxScaleDenominator: null, initialize: function(options) {
    this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
    this.symbolizer = {};
    OpenLayers.Util.extend(this, options);
}, destroy: function() {
    for (var i in this.symbolizer) {
        this.symbolizer[i] = null;
    }
    this.symbolizer = null;
}, evaluate: function(feature) {
    var context = this.getContext(feature);
    var applies = true;
    if (this.minScaleDenominator || this.maxScaleDenominator) {
        var scale = feature.layer.map.getScale();
    }
    if (this.minScaleDenominator) {
        applies = scale >= OpenLayers.Style.createLiteral(this.minScaleDenominator, context);
    }
    if (applies && this.maxScaleDenominator) {
        applies = scale < OpenLayers.Style.createLiteral(this.maxScaleDenominator, context);
    }
    if (applies && this.filter) {
        if (this.filter.CLASS_NAME == "OpenLayers.Filter.FeatureId") {
            applies = this.filter.evaluate(feature);
        } else {
            applies = this.filter.evaluate(context);
        } 
    }
    return applies;
}, getContext: function(feature) {
    var context = this.context;
    if (!context) {
        context = feature.attributes || feature.data;
    }
    if (typeof this.context == "function") {
        context = this.context(feature);
    }
    return context;
}, CLASS_NAME: "OpenLayers.Rule"
});
OpenLayers.StyleMap = OpenLayers.Class({ styles: null, extendDefault: true, initialize: function(style, options) {
    this.styles = { "default": new OpenLayers.Style(OpenLayers.Feature.Vector.style["default"]), "select": new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"]), "temporary": new OpenLayers.Style(OpenLayers.Feature.Vector.style["temporary"]) };
    if (style instanceof OpenLayers.Style) {
        this.styles["default"] = style;
        this.styles["select"] = style;
        this.styles["temporary"] = style;
    } else if (typeof style == "object") {
        for (var key in style) {
            if (style[key] instanceof OpenLayers.Style) {
                this.styles[key] = style[key];
            } else if (typeof style[key] == "object") {
                this.styles[key] = new OpenLayers.Style(style[key]);
            } else {
                this.styles["default"] = new OpenLayers.Style(style);
                this.styles["select"] = new OpenLayers.Style(style);
                this.styles["temporary"] = new OpenLayers.Style(style);
                break;
            } 
        } 
    }
    OpenLayers.Util.extend(this, options);
}, destroy: function() {
    for (var key in this.styles) {
        this.styles[key].destroy();
    }
    this.styles = null;
}, createSymbolizer: function(feature, intent) {
    if (!feature) {
        feature = new OpenLayers.Feature.Vector();
    }
    if (!this.styles[intent]) {
        intent = "default";
    }
    feature.renderIntent = intent;
    var defaultSymbolizer = {};
    if (this.extendDefault && intent != "default") {
        defaultSymbolizer = this.styles["default"].createSymbolizer(feature);
    }
    return OpenLayers.Util.extend(defaultSymbolizer, this.styles[intent].createSymbolizer(feature));
}, addUniqueValueRules: function(renderIntent, property, symbolizers, context) {
    var rules = [];
    for (var value in symbolizers) {
        rules.push(new OpenLayers.Rule({ symbolizer: symbolizers[value], context: context, filter: new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.EQUAL_TO, property: property, value: value }) }));
    }
    this.styles[renderIntent].addRules(rules);
}, CLASS_NAME: "OpenLayers.StyleMap"
});
OpenLayers.Control.NavToolbar = OpenLayers.Class(OpenLayers.Control.Panel, { initialize: function(options) {
    OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
    this.addControls([new OpenLayers.Control.Navigation(), new OpenLayers.Control.ZoomBox()]);
}, draw: function() {
    var div = OpenLayers.Control.Panel.prototype.draw.apply(this, arguments);
    this.activateControl(this.controls[0]);
    return div;
}, CLASS_NAME: "OpenLayers.Control.NavToolbar"
});
OpenLayers.Filter.Comparison = OpenLayers.Class(OpenLayers.Filter, { type: null, property: null, value: null, lowerBoundary: null, upperBoundary: null, initialize: function(options) {
    OpenLayers.Filter.prototype.initialize.apply(this, [options]);
}, evaluate: function(context) {
    switch (this.type) {
        case OpenLayers.Filter.Comparison.EQUAL_TO: case OpenLayers.Filter.Comparison.LESS_THAN: case OpenLayers.Filter.Comparison.GREATER_THAN: case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO: case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO: return this.binaryCompare(context, this.property, this.value);
        case OpenLayers.Filter.Comparison.BETWEEN: var result = context[this.property] >= this.lowerBoundary;
            result = result && context[this.property] <= this.upperBoundary;
            return result;
        case OpenLayers.Filter.Comparison.LIKE: var regexp = new RegExp(this.value, "gi");
            return regexp.test(context[this.property]);
    } 
}, value2regex: function(wildCard, singleChar, escapeChar) {
    if (wildCard == ".") {
        var msg = "'.' is an unsupported wildCard character for " + "OpenLayers.Filter.Comparison";
        OpenLayers.Console.error(msg);
        return null;
    }
    wildCard = wildCard ? wildCard : "*";
    singleChar = singleChar ? singleChar : ".";
    escapeChar = escapeChar ? escapeChar : "!";
    this.value = this.value.replace(new RegExp("\\" + escapeChar + "(.|$)", "g"), "\\$1");
    this.value = this.value.replace(new RegExp("\\" + singleChar, "g"), ".");
    this.value = this.value.replace(new RegExp("\\" + wildCard, "g"), ".*");
    this.value = this.value.replace(new RegExp("\\\\.\\*", "g"), "\\" + wildCard);
    this.value = this.value.replace(new RegExp("\\\\\\.", "g"), "\\" + singleChar);
    return this.value;
}, regex2value: function() {
    var value = this.value;
    value = value.replace(/!/g, "!!");
    value = value.replace(/(\\)?\\\./g, function($0, $1) {
        return $1 ? $0 : "!.";
    });
    value = value.replace(/(\\)?\\\*/g, function($0, $1) {
        return $1 ? $0 : "!*";
    });
    value = value.replace(/\\\\/g, "\\");
    value = value.replace(/\.\*/g, "*");
    return value;
}, binaryCompare: function(context, property, value) {
    switch (this.type) {
        case OpenLayers.Filter.Comparison.EQUAL_TO: return context[property] == value;
        case OpenLayers.Filter.Comparison.NOT_EQUAL_TO: return context[property] != value;
        case OpenLayers.Filter.Comparison.LESS_THAN: return context[property] < value;
        case OpenLayers.Filter.Comparison.GREATER_THAN: return context[property] > value;
        case OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO: return context[property] <= value;
        case OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO: return context[property] >= value;
    } 
}, CLASS_NAME: "OpenLayers.Filter.Comparison"
});
OpenLayers.Filter.Comparison.EQUAL_TO = "==";
OpenLayers.Filter.Comparison.NOT_EQUAL_TO = "!=";
OpenLayers.Filter.Comparison.LESS_THAN = "<";
OpenLayers.Filter.Comparison.GREATER_THAN = ">";
OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO = "<=";
OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO = ">=";
OpenLayers.Filter.Comparison.BETWEEN = "..";
OpenLayers.Filter.Comparison.LIKE = "~";
OpenLayers.Filter.FeatureId = OpenLayers.Class(OpenLayers.Filter, { fids: null, initialize: function(options) {
    this.fids = [];
    OpenLayers.Filter.prototype.initialize.apply(this, [options]);
}, evaluate: function(feature) {
    for (var i = 0, len = this.fids.length;
i < len;
i++) {
        var fid = feature.fid || feature.id;
        if (fid == this.fids[i]) {
            return true;
        } 
    }
    return false;
}, CLASS_NAME: "OpenLayers.Filter.FeatureId"
});
OpenLayers.Filter.Logical = OpenLayers.Class(OpenLayers.Filter, { filters: null, type: null, initialize: function(options) {
    this.filters = [];
    OpenLayers.Filter.prototype.initialize.apply(this, [options]);
}, destroy: function() {
    this.filters = null;
    OpenLayers.Filter.prototype.destroy.apply(this);
}, evaluate: function(context) {
    switch (this.type) {
        case OpenLayers.Filter.Logical.AND: for (var i = 0, len = this.filters.length;
i < len;
i++) {
                if (this.filters[i].evaluate(context) == false) {
                    return false;
                } 
            }
            return true;
        case OpenLayers.Filter.Logical.OR: for (var i = 0, len = this.filters.length;
i < len;
i++) {
                if (this.filters[i].evaluate(context) == true) {
                    return true;
                } 
            }
            return false;
        case OpenLayers.Filter.Logical.NOT: return (!this.filters[0].evaluate(context));
    } 
}, CLASS_NAME: "OpenLayers.Filter.Logical"
});
OpenLayers.Filter.Logical.AND = "&&";
OpenLayers.Filter.Logical.OR = "||";
OpenLayers.Filter.Logical.NOT = "!";
OpenLayers.Filter.Spatial = OpenLayers.Class(OpenLayers.Filter, { type: null, property: null, value: null, distance: null, distanceUnits: null, initialize: function(options) {
    OpenLayers.Filter.prototype.initialize.apply(this, [options]);
}, evaluate: function(feature) {
    var intersect = false;
    switch (this.type) {
        case OpenLayers.Filter.Spatial.BBOX: case OpenLayers.Filter.Spatial.INTERSECTS: if (feature.geometry) {
                var geom = this.value;
                if (this.value.CLASS_NAME == "OpenLayers.Bounds") {
                    geom = this.value.toGeometry();
                }
                if (feature.geometry.intersects(geom)) {
                    intersect = true;
                } 
            }
            break;
        default: OpenLayers.Console.error(OpenLayers.i18n("filterEvaluateNotImplemented"));
            break;
    }
    return intersect;
}, CLASS_NAME: "OpenLayers.Filter.Spatial"
});
OpenLayers.Filter.Spatial.BBOX = "BBOX";
OpenLayers.Filter.Spatial.INTERSECTS = "INTERSECTS";
OpenLayers.Filter.Spatial.DWITHIN = "DWITHIN";
OpenLayers.Geometry.Collection = OpenLayers.Class(OpenLayers.Geometry, { components: null, componentTypes: null, initialize: function(components) {
    OpenLayers.Geometry.prototype.initialize.apply(this, arguments);
    this.components = [];
    if (components != null) {
        this.addComponents(components);
    } 
}, destroy: function() {
    this.components.length = 0;
    this.components = null;
}, clone: function() {
    var geometry = eval("new " + this.CLASS_NAME + "()");
    for (var i = 0, len = this.components.length;
i < len;
i++) {
        geometry.addComponent(this.components[i].clone());
    }
    OpenLayers.Util.applyDefaults(geometry, this);
    return geometry;
}, getComponentsString: function() {
    var strings = [];
    for (var i = 0, len = this.components.length;
i < len;
i++) {
        strings.push(this.components[i].toShortString());
    }
    return strings.join(",");
}, calculateBounds: function() {
    this.bounds = null;
    if (this.components && this.components.length > 0) {
        this.setBounds(this.components[0].getBounds());
        for (var i = 1, len = this.components.length;
i < len;
i++) {
            this.extendBounds(this.components[i].getBounds());
        } 
    } 
}, addComponents: function(components) {
    if (!(components instanceof Array)) {
        components = [components];
    }
    for (var i = 0, len = components.length;
i < len;
i++) {
        this.addComponent(components[i]);
    } 
}, addComponent: function(component, index) {
    var added = false;
    if (component) {
        if (this.componentTypes == null || (OpenLayers.Util.indexOf(this.componentTypes, component.CLASS_NAME) > -1)) {
            if (index != null && (index < this.components.length)) {
                var components1 = this.components.slice(0, index);
                var components2 = this.components.slice(index, this.components.length);
                components1.push(component);
                this.components = components1.concat(components2);
            } else {
                this.components.push(component);
            }
            component.parent = this;
            this.clearBounds();
            added = true;
        } 
    }
    return added;
}, removeComponents: function(components) {
    if (!(components instanceof Array)) {
        components = [components];
    }
    for (var i = components.length - 1;
i >= 0;
--i) {
        this.removeComponent(components[i]);
    } 
}, removeComponent: function(component) {
    OpenLayers.Util.removeItem(this.components, component);
    this.clearBounds();
}, getLength: function() {
    var length = 0.0;
    for (var i = 0, len = this.components.length;
i < len;
i++) {
        length += this.components[i].getLength();
    }
    return length;
}, getArea: function() {
    var area = 0.0;
    for (var i = 0, len = this.components.length;
i < len;
i++) {
        area += this.components[i].getArea();
    }
    return area;
}, move: function(x, y) {
    for (var i = 0, len = this.components.length;
i < len;
i++) {
        this.components[i].move(x, y);
    } 
}, rotate: function(angle, origin) {
    for (var i = 0, len = this.components.length;
i < len;
++i) {
        this.components[i].rotate(angle, origin);
    } 
}, resize: function(scale, origin, ratio) {
    for (var i = 0;
i < this.components.length;
++i) {
        this.components[i].resize(scale, origin, ratio);
    } 
}, equals: function(geometry) {
    var equivalent = true;
    if (!geometry || !geometry.CLASS_NAME || (this.CLASS_NAME != geometry.CLASS_NAME)) {
        equivalent = false;
    } else if (!(geometry.components instanceof Array) || (geometry.components.length != this.components.length)) {
        equivalent = false;
    } else {
        for (var i = 0, len = this.components.length;
i < len;
++i) {
            if (!this.components[i].equals(geometry.components[i])) {
                equivalent = false;
                break;
            } 
        } 
    }
    return equivalent;
}, transform: function(source, dest) {
    if (source && dest) {
        for (var i = 0, len = this.components.length;
i < len;
i++) {
            var component = this.components[i];
            component.transform(source, dest);
        }
        this.bounds = null;
    }
    return this;
}, intersects: function(geometry) {
    var intersect = false;
    for (var i = 0, len = this.components.length;
i < len;
++i) {
        intersect = geometry.intersects(this.components[i]);
        if (intersect) {
            break;
        } 
    }
    return intersect;
}, CLASS_NAME: "OpenLayers.Geometry.Collection"
});
OpenLayers.Geometry.Point = OpenLayers.Class(OpenLayers.Geometry, { x: null, y: null, initialize: function(x, y) {
    OpenLayers.Geometry.prototype.initialize.apply(this, arguments);
    this.x = parseFloat(x);
    this.y = parseFloat(y);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Geometry.Point(this.x, this.y);
    }
    OpenLayers.Util.applyDefaults(obj, this);
    return obj;
}, calculateBounds: function() {
    this.bounds = new OpenLayers.Bounds(this.x, this.y, this.x, this.y);
}, distanceTo: function(point) {
    var distance = 0.0;
    if ((this.x != null) && (this.y != null) && (point != null) && (point.x != null) && (point.y != null)) {
        var dx2 = Math.pow(this.x - point.x, 2);
        var dy2 = Math.pow(this.y - point.y, 2);
        distance = Math.sqrt(dx2 + dy2);
    }
    return distance;
}, equals: function(geom) {
    var equals = false;
    if (geom != null) {
        equals = ((this.x == geom.x && this.y == geom.y) || (isNaN(this.x) && isNaN(this.y) && isNaN(geom.x) && isNaN(geom.y)));
    }
    return equals;
}, toShortString: function() {
    return (this.x + ", " + this.y);
}, move: function(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    this.clearBounds();
}, rotate: function(angle, origin) {
    angle *= Math.PI / 180;
    var radius = this.distanceTo(origin);
    var theta = angle + Math.atan2(this.y - origin.y, this.x - origin.x);
    this.x = origin.x + (radius * Math.cos(theta));
    this.y = origin.y + (radius * Math.sin(theta));
    this.clearBounds();
}, resize: function(scale, origin, ratio) {
    ratio = (ratio == undefined) ? 1 : ratio;
    this.x = origin.x + (scale * ratio * (this.x - origin.x));
    this.y = origin.y + (scale * (this.y - origin.y));
    this.clearBounds();
}, intersects: function(geometry) {
    var intersect = false;
    if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
        intersect = this.equals(geometry);
    } else {
        intersect = geometry.intersects(this);
    }
    return intersect;
}, transform: function(source, dest) {
    if ((source && dest)) {
        OpenLayers.Projection.transform(this, source, dest);
        this.bounds = null;
    }
    return this;
}, CLASS_NAME: "OpenLayers.Geometry.Point"
});
OpenLayers.Geometry.Rectangle = OpenLayers.Class(OpenLayers.Geometry, { x: null, y: null, width: null, height: null, initialize: function(x, y, width, height) {
    OpenLayers.Geometry.prototype.initialize.apply(this, arguments);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}, calculateBounds: function() {
    this.bounds = new OpenLayers.Bounds(this.x, this.y, this.x + this.width, this.y + this.height);
}, getLength: function() {
    var length = (2 * this.width) + (2 * this.height);
    return length;
}, getArea: function() {
    var area = this.width * this.height;
    return area;
}, CLASS_NAME: "OpenLayers.Geometry.Rectangle"
});
OpenLayers.Geometry.Surface = OpenLayers.Class(OpenLayers.Geometry, { initialize: function() {
    OpenLayers.Geometry.prototype.initialize.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Geometry.Surface"
});
OpenLayers.Layer.KaMapCache = OpenLayers.Class(OpenLayers.Layer.KaMap, { IMAGE_EXTENSIONS: { 'jpeg': 'jpg', 'gif': 'gif', 'png': 'png', 'png8': 'png', 'png24': 'png', 'dithered': 'png' }, DEFAULT_FORMAT: 'jpeg', initialize: function(name, url, params, options) {
    OpenLayers.Layer.KaMap.prototype.initialize.apply(this, arguments);
    this.extension = this.IMAGE_EXTENSIONS[this.params.i.toLowerCase() || DEFAULT_FORMAT];
}, getURL: function(bounds) {
    bounds = this.adjustBounds(bounds);
    var mapRes = this.map.getResolution();
    var scale = Math.round((this.map.getScale() * 10000)) / 10000;
    var pX = Math.round(bounds.left / mapRes);
    var pY = -Math.round(bounds.top / mapRes);
    var metaX = Math.floor(pX / this.tileSize.w / this.params.metaTileSize.w) * this.tileSize.w * this.params.metaTileSize.w;
    var metaY = Math.floor(pY / this.tileSize.h / this.params.metaTileSize.h) * this.tileSize.h * this.params.metaTileSize.h;
    var url = this.url;
    if (url instanceof Array) {
        url = this.selectUrl(paramsString, url);
    }
    var components = [url, "/", this.params.map, "/", scale, "/", this.params.g.replace(/\s/g, '_'), "/def/t", metaY, "/l", metaX, "/t", pY, "l", pX, ".", this.extension];
    return components.join("");
}, CLASS_NAME: "OpenLayers.Layer.KaMapCache"
});
OpenLayers.Layer.MapServer.Untiled = OpenLayers.Class(OpenLayers.Layer.MapServer, { singleTile: true, initialize: function(name, url, params, options) {
    OpenLayers.Layer.MapServer.prototype.initialize.apply(this, arguments);
    var msg = "The OpenLayers.Layer.MapServer.Untiled class is deprecated and " + "will be removed in 3.0. Instead, you should use the " + "normal OpenLayers.Layer.MapServer class, passing it the option " + "'singleTile' as true.";
    OpenLayers.Console.warn(msg);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.MapServer.Untiled(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.MapServer.prototype.clone.apply(this, [obj]);
    return obj;
}, CLASS_NAME: "OpenLayers.Layer.MapServer.Untiled"
});
OpenLayers.Layer.Vector = OpenLayers.Class(OpenLayers.Layer, { EVENT_TYPES: ["beforefeatureadded", "beforefeaturesadded", "featureadded", "featuresadded", "beforefeatureremoved", "featureremoved", "featuresremoved", "beforefeatureselected", "featureselected", "featureunselected", "beforefeaturemodified", "featuremodified", "afterfeaturemodified", "refresh"], isBaseLayer: false, isFixed: false, isVector: true, features: null, selectedFeatures: null, unrenderedFeatures: null, reportError: true, style: null, styleMap: null, strategies: null, protocol: null, renderers: ['SVG', 'VML', 'Canvas'], renderer: null, rendererOptions: null, geometryType: null, drawn: false, initialize: function(name, options) {
    this.EVENT_TYPES = OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES);
    OpenLayers.Layer.prototype.initialize.apply(this, arguments);
    if (!this.renderer || !this.renderer.supported()) {
        this.assignRenderer();
    }
    if (!this.renderer || !this.renderer.supported()) {
        this.renderer = null;
        this.displayError();
    }
    if (!this.styleMap) {
        this.styleMap = new OpenLayers.StyleMap();
    }
    this.features = [];
    this.selectedFeatures = [];
    this.unrenderedFeatures = {};
    if (this.strategies) {
        for (var i = 0, len = this.strategies.length;
i < len;
i++) {
            this.strategies[i].setLayer(this);
        } 
    } 
}, destroy: function() {
    if (this.strategies) {
        var strategy, i, len;
        for (i = 0, len = this.strategies.length;
i < len;
i++) {
            strategy = this.strategies[i];
            if (strategy.autoDestroy) {
                strategy.destroy();
            } 
        }
        this.strategies = null;
    }
    if (this.protocol) {
        if (this.protocol.autoDestroy) {
            this.protocol.destroy();
        }
        this.protocol = null;
    }
    this.destroyFeatures();
    this.features = null;
    this.selectedFeatures = null;
    this.unrenderedFeatures = null;
    if (this.renderer) {
        this.renderer.destroy();
    }
    this.renderer = null;
    this.geometryType = null;
    this.drawn = null;
    OpenLayers.Layer.prototype.destroy.apply(this, arguments);
}, refresh: function(obj) {
    if (this.inRange && this.visibility) {
        this.events.triggerEvent("refresh", obj);
    } 
}, assignRenderer: function() {
    for (var i = 0, len = this.renderers.length;
i < this.renderers.length;
i++) {
        var rendererClass = OpenLayers.Renderer[this.renderers[i]];
        if (rendererClass && rendererClass.prototype.supported()) {
            this.renderer = new rendererClass(this.div, this.rendererOptions);
            break;
        } 
    } 
}, displayError: function() {
    if (this.reportError) {
        OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported", { 'renderers': this.renderers.join("\n") }));
    } 
}, setMap: function(map) {
    OpenLayers.Layer.prototype.setMap.apply(this, arguments);
    if (!this.renderer) {
        this.map.removeLayer(this);
    } else {
        this.renderer.map = this.map;
        this.renderer.setSize(this.map.getSize());
    }
    if (this.strategies) {
        var strategy, i, len;
        for (i = 0, len = this.strategies.length;
i < len;
i++) {
            strategy = this.strategies[i];
            if (strategy.autoActivate) {
                strategy.activate();
            } 
        } 
    } 
}, removeMap: function(map) {
    if (this.strategies) {
        var strategy, i, len;
        for (i = 0, len = this.strategies.length;
i < len;
i++) {
            strategy = this.strategies[i];
            if (strategy.autoActivate) {
                strategy.deactivate();
            } 
        } 
    } 
}, onMapResize: function() {
    OpenLayers.Layer.prototype.onMapResize.apply(this, arguments);
    this.renderer.setSize(this.map.getSize());
}, moveTo: function(bounds, zoomChanged, dragging) {
    OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
    var coordSysUnchanged = true;
    if (!dragging) {
        this.renderer.root.style.visibility = "hidden";
        this.div.style.left = -parseInt(this.map.layerContainerDiv.style.left) + "px";
        this.div.style.top = -parseInt(this.map.layerContainerDiv.style.top) + "px";
        var extent = this.map.getExtent();
        coordSysUnchanged = this.renderer.setExtent(extent, zoomChanged);
        this.renderer.root.style.visibility = "visible";
        if (navigator.userAgent.toLowerCase().indexOf("gecko") != -1) {
            this.div.scrollLeft = this.div.scrollLeft;
        }
        if (!zoomChanged && coordSysUnchanged) {
            for (var i in this.unrenderedFeatures) {
                var feature = this.unrenderedFeatures[i];
                this.drawFeature(feature);
            } 
        } 
    }
    if (!this.drawn || zoomChanged || !coordSysUnchanged) {
        this.drawn = true;
        var feature;
        for (var i = 0, len = this.features.length;
i < len;
i++) {
            if (i != (this.features.length - 1)) {
                this.renderer.locked = true;
            } else {
                this.renderer.locked = false;
            }
            feature = this.features[i];
            this.drawFeature(feature);
        } 
    } 
}, addFeatures: function(features, options) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    var notify = !options || !options.silent;
    if (notify) {
        var event = { features: features };
        var ret = this.events.triggerEvent("beforefeaturesadded", event);
        if (ret === false) {
            return;
        }
        features = event.features;
    }
    for (var i = 0, len = features.length;
i < len;
i++) {
        if (i != (features.length - 1)) {
            this.renderer.locked = true;
        } else {
            this.renderer.locked = false;
        }
        var feature = features[i];
        if (this.geometryType && !(feature.geometry instanceof this.geometryType)) {
            var throwStr = OpenLayers.i18n('componentShouldBe', { 'geomType': this.geometryType.prototype.CLASS_NAME });
            throw throwStr;
        }
        this.features.push(feature);
        feature.layer = this;
        if (!feature.style && this.style) {
            feature.style = OpenLayers.Util.extend({}, this.style);
        }
        if (notify) {
            if (this.events.triggerEvent("beforefeatureadded", { feature: feature }) === false) {
                continue;
            };
            this.preFeatureInsert(feature);
        }
        if (this.drawn) {
            this.drawFeature(feature);
        }
        if (notify) {
            this.events.triggerEvent("featureadded", { feature: feature });
            this.onFeatureInsert(feature);
        } 
    }
    if (notify) {
        this.events.triggerEvent("featuresadded", { features: features });
    } 
}, removeFeatures: function(features, options) {
    if (!features || features.length === 0) {
        return;
    }
    if (!(features instanceof Array)) {
        features = [features];
    }
    var notify = !options || !options.silent;
    for (var i = features.length - 1;
i >= 0;
i--) {
        if (i != 0 && features[i - 1].geometry) {
            this.renderer.locked = true;
        } else {
            this.renderer.locked = false;
        }
        var feature = features[i];
        delete this.unrenderedFeatures[feature.id];
        if (notify) {
            this.events.triggerEvent("beforefeatureremoved", { feature: feature });
        }
        this.features = OpenLayers.Util.removeItem(this.features, feature);
        feature.layer = null;
        if (feature.geometry) {
            this.renderer.eraseGeometry(feature.geometry);
        }
        if (OpenLayers.Util.indexOf(this.selectedFeatures, feature) != -1) {
            OpenLayers.Util.removeItem(this.selectedFeatures, feature);
        }
        if (notify) {
            this.events.triggerEvent("featureremoved", { feature: feature });
        } 
    }
    if (notify) {
        this.events.triggerEvent("featuresremoved", { features: features });
    } 
}, destroyFeatures: function(features, options) {
    var all = (features == undefined);
    if (all) {
        features = this.features;
    }
    if (features) {
        this.removeFeatures(features, options);
        for (var i = features.length - 1;
i >= 0;
i--) {
            features[i].destroy();
        } 
    } 
}, drawFeature: function(feature, style) {
    if (typeof style != "object") {
        var renderIntent = typeof style == "string" ? style : feature.renderIntent;
        style = feature.style || this.style;
        if (!style) {
            style = this.styleMap.createSymbolizer(feature, renderIntent);
        } 
    }
    if (!this.renderer.drawFeature(feature, style)) {
        this.unrenderedFeatures[feature.id] = feature;
    } else {
        delete this.unrenderedFeatures[feature.id];
    };
}, eraseFeatures: function(features) {
    this.renderer.eraseFeatures(features);
}, getFeatureFromEvent: function(evt) {
    if (!this.renderer) {
        OpenLayers.Console.error(OpenLayers.i18n("getFeatureError"));
        return null;
    }
    var featureId = this.renderer.getFeatureIdFromEvent(evt);
    return this.getFeatureById(featureId);
}, getFeatureById: function(featureId) {
    var feature = null;
    for (var i = 0, len = this.features.length;
i < len;
++i) {
        if (this.features[i].id == featureId) {
            feature = this.features[i];
            break;
        } 
    }
    return feature;
}, onFeatureInsert: function(feature) { }, preFeatureInsert: function(feature) { }, getDataExtent: function() {
    var maxExtent = null;
    if (this.features && (this.features.length > 0)) {
        var maxExtent = this.features[0].geometry.getBounds();
        for (var i = 0, len = this.features.length;
i < len;
i++) {
            maxExtent.extend(this.features[i].geometry.getBounds());
        } 
    }
    return maxExtent;
}, CLASS_NAME: "OpenLayers.Layer.Vector"
});
OpenLayers.Layer.WMS.Untiled = OpenLayers.Class(OpenLayers.Layer.WMS, { singleTile: true, initialize: function(name, url, params, options) {
    OpenLayers.Layer.WMS.prototype.initialize.apply(this, arguments);
    var msg = "The OpenLayers.Layer.WMS.Untiled class is deprecated and " + "will be removed in 3.0. Instead, you should use the " + "normal OpenLayers.Layer.WMS class, passing it the option " + "'singleTile' as true.";
    OpenLayers.Console.warn(msg);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.WMS.Untiled(this.name, this.url, this.params, this.options);
    }
    obj = OpenLayers.Layer.WMS.prototype.clone.apply(this, [obj]);
    return obj;
}, CLASS_NAME: "OpenLayers.Layer.WMS.Untiled"
});
OpenLayers.Format.Filter = OpenLayers.Class(OpenLayers.Format.XML, { defaultVersion: "1.0.0", version: null, parser: null, initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, write: function(filter, options) {
    var version = (options && options.version) || this.version || this.defaultVersion;
    if (!this.parser || this.parser.VERSION != version) {
        var format = OpenLayers.Format.Filter["v" + version.replace(/\./g, "_")];
        if (!format) {
            throw "Can't find a Filter parser for version " +
version;
        }
        this.parser = new format(this.options);
    }
    return this.parser.write(filter);
}, read: function(data) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    var root = data.nodeType == 9 ? data.documentElement : data;
    var version = this.version;
    if (!version) {
        version = this.defaultVersion;
    }
    if (!this.parser || this.parser.VERSION != version) {
        var format = OpenLayers.Format.Filter["v" + version.replace(/\./g, "_")];
        if (!format) {
            throw "Can't find a Filter parser for version " +
version;
        }
        this.parser = new format(this.options);
    }
    var filter = this.parser.read(data);
    return filter;
}, CLASS_NAME: "OpenLayers.Format.Filter"
});
OpenLayers.Format.SLD = OpenLayers.Class(OpenLayers.Format.XML, { defaultVersion: "1.0.0", version: null, parser: null, initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, write: function(sld, options) {
    var version = (options && options.version) || this.version || this.defaultVersion;
    if (!this.parser || this.parser.VERSION != version) {
        var format = OpenLayers.Format.SLD["v" + version.replace(/\./g, "_")];
        if (!format) {
            throw "Can't find a SLD parser for version " +
version;
        }
        this.parser = new format(this.options);
    }
    var root = this.parser.write(sld);
    return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
}, read: function(data) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    var root = data.documentElement;
    var version = this.version;
    if (!version) {
        version = root.getAttribute("version");
        if (!version) {
            version = this.defaultVersion;
        } 
    }
    if (!this.parser || this.parser.VERSION != version) {
        var format = OpenLayers.Format.SLD["v" + version.replace(/\./g, "_")];
        if (!format) {
            throw "Can't find a SLD parser for version " +
version;
        }
        this.parser = new format(this.options);
    }
    var sld = this.parser.read(data);
    return sld;
}, CLASS_NAME: "OpenLayers.Format.SLD"
});
OpenLayers.Format.Text = OpenLayers.Class(OpenLayers.Format, { initialize: function(options) {
    OpenLayers.Format.prototype.initialize.apply(this, [options]);
}, read: function(text) {
    var lines = text.split('\n');
    var columns;
    var features = [];
    for (var lcv = 0;
lcv < (lines.length - 1);
lcv++) {
        var currLine = lines[lcv].replace(/^\s*/, '').replace(/\s*$/, '');
        if (currLine.charAt(0) != '#') {
            if (!columns) {
                columns = currLine.split('\t');
            } else {
                var vals = currLine.split('\t');
                var geometry = new OpenLayers.Geometry.Point(0, 0);
                var attributes = {};
                var style = {};
                var icon, iconSize, iconOffset, overflow;
                var set = false;
                for (var valIndex = 0;
valIndex < vals.length;
valIndex++) {
                    if (vals[valIndex]) {
                        if (columns[valIndex] == 'point') {
                            var coords = vals[valIndex].split(',');
                            geometry.y = parseFloat(coords[0]);
                            geometry.x = parseFloat(coords[1]);
                            set = true;
                        } else if (columns[valIndex] == 'lat') {
                            geometry.y = parseFloat(vals[valIndex]);
                            set = true;
                        } else if (columns[valIndex] == 'lon') {
                            geometry.x = parseFloat(vals[valIndex]);
                            set = true;
                        } else if (columns[valIndex] == 'title')
                            attributes['title'] = vals[valIndex];
                        else if (columns[valIndex] == 'image' || columns[valIndex] == 'icon')
                            style['externalGraphic'] = vals[valIndex];
                        else if (columns[valIndex] == 'iconSize') {
                            var size = vals[valIndex].split(',');
                            style['graphicWidth'] = parseFloat(size[0]);
                            style['graphicHeight'] = parseFloat(size[1]);
                        } else if (columns[valIndex] == 'iconOffset') {
                            var offset = vals[valIndex].split(',');
                            style['graphicXOffset'] = parseFloat(offset[0]);
                            style['graphicYOffset'] = parseFloat(offset[1]);
                        } else if (columns[valIndex] == 'description') {
                            attributes['description'] = vals[valIndex];
                        } else if (columns[valIndex] == 'overflow') {
                            attributes['overflow'] = vals[valIndex];
                        } 
                    } 
                }
                if (set) {
                    if (this.internalProjection && this.externalProjection) {
                        geometry.transform(this.externalProjection, this.internalProjection);
                    }
                    var feature = new OpenLayers.Feature.Vector(geometry, attributes, style);
                    features.push(feature);
                } 
            } 
        } 
    }
    return features;
}, CLASS_NAME: "OpenLayers.Format.Text"
});
OpenLayers.Geometry.MultiLineString = OpenLayers.Class(OpenLayers.Geometry.Collection, { componentTypes: ["OpenLayers.Geometry.LineString"], initialize: function(components) {
    OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Geometry.MultiLineString"
});
OpenLayers.Geometry.MultiPoint = OpenLayers.Class(OpenLayers.Geometry.Collection, { componentTypes: ["OpenLayers.Geometry.Point"], initialize: function(components) {
    OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
}, addPoint: function(point, index) {
    this.addComponent(point, index);
}, removePoint: function(point) {
    this.removeComponent(point);
}, CLASS_NAME: "OpenLayers.Geometry.MultiPoint"
});
OpenLayers.Geometry.MultiPolygon = OpenLayers.Class(OpenLayers.Geometry.Collection, { componentTypes: ["OpenLayers.Geometry.Polygon"], initialize: function(components) {
    OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
}, CLASS_NAME: "OpenLayers.Geometry.MultiPolygon"
});
OpenLayers.Geometry.Polygon = OpenLayers.Class(OpenLayers.Geometry.Collection, { componentTypes: ["OpenLayers.Geometry.LinearRing"], initialize: function(components) {
    OpenLayers.Geometry.Collection.prototype.initialize.apply(this, arguments);
}, getArea: function() {
    var area = 0.0;
    if (this.components && (this.components.length > 0)) {
        area += Math.abs(this.components[0].getArea());
        for (var i = 1, len = this.components.length;
i < len;
i++) {
            area -= Math.abs(this.components[i].getArea());
        } 
    }
    return area;
}, containsPoint: function(point) {
    var numRings = this.components.length;
    var contained = false;
    if (numRings > 0) {
        contained = this.components[0].containsPoint(point);
        if (contained !== 1) {
            if (contained && numRings > 1) {
                var hole;
                for (var i = 1;
i < numRings;
++i) {
                    hole = this.components[i].containsPoint(point);
                    if (hole) {
                        if (hole === 1) {
                            contained = 1;
                        } else {
                            contained = false;
                        }
                        break;
                    } 
                } 
            } 
        } 
    }
    return contained;
}, intersects: function(geometry) {
    var intersect = false;
    var i, len;
    if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
        intersect = this.containsPoint(geometry);
    } else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LineString" || geometry.CLASS_NAME == "OpenLayers.Geometry.LinearRing") {
        for (i = 0, len = this.components.length;
i < len;
++i) {
            intersect = geometry.intersects(this.components[i]);
            if (intersect) {
                break;
            } 
        }
        if (!intersect) {
            for (i = 0, len = geometry.components.length;
i < len;
++i) {
                intersect = this.containsPoint(geometry.components[i]);
                if (intersect) {
                    break;
                } 
            } 
        } 
    } else {
        for (i = 0, len = geometry.components.length;
i < len;
++i) {
            intersect = this.intersects(geometry.components[i]);
            if (intersect) {
                break;
            } 
        } 
    }
    if (!intersect && geometry.CLASS_NAME == "OpenLayers.Geometry.Polygon") {
        var ring = this.components[0];
        for (i = 0, len = ring.components.length;
i < len;
++i) {
            intersect = geometry.containsPoint(ring.components[i]);
            if (intersect) {
                break;
            } 
        } 
    }
    return intersect;
}, CLASS_NAME: "OpenLayers.Geometry.Polygon"
});
OpenLayers.Geometry.Polygon.createRegularPolygon = function(origin, radius, sides, rotation) {
    var angle = Math.PI * ((1 / sides) - (1 / 2));
    if (rotation) {
        angle += (rotation / 180) * Math.PI;
    }
    var rotatedAngle, x, y;
    var points = [];
    for (var i = 0;
i < sides;
++i) {
        rotatedAngle = angle + (i * 2 * Math.PI / sides);
        x = origin.x + (radius * Math.cos(rotatedAngle));
        y = origin.y + (radius * Math.sin(rotatedAngle));
        points.push(new OpenLayers.Geometry.Point(x, y));
    }
    var ring = new OpenLayers.Geometry.LinearRing(points);
    return new OpenLayers.Geometry.Polygon([ring]);
};
OpenLayers.Handler.Point = OpenLayers.Class(OpenLayers.Handler, { point: null, layer: null, multi: false, drawing: false, mouseDown: false, lastDown: null, lastUp: null, persist: false, layerOptions: null, initialize: function(control, callbacks, options) {
    this.style = OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'], {});
    OpenLayers.Handler.prototype.initialize.apply(this, arguments);
}, activate: function() {
    if (!OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        return false;
    }
    var options = OpenLayers.Util.extend({ displayInLayerSwitcher: false, calculateInRange: function() {
        return true;
    } 
    }, this.layerOptions);
    this.layer = new OpenLayers.Layer.Vector(this.CLASS_NAME, options);
    this.map.addLayer(this.layer);
    return true;
}, createFeature: function() {
    this.point = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point());
    this.layer.addFeatures([this.point], { silent: true });
}, deactivate: function() {
    if (!OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
        return false;
    }
    if (this.drawing) {
        this.cancel();
    }
    this.destroyFeature();
    if (this.layer.map != null) {
        this.layer.destroy(false);
    }
    this.layer = null;
    return true;
}, destroyFeature: function() {
    if (this.layer) {
        this.layer.destroyFeatures();
    }
    this.point = null;
}, finalize: function(cancel) {
    var key = cancel ? "cancel" : "done";
    this.drawing = false;
    this.mouseDown = false;
    this.lastDown = null;
    this.lastUp = null;
    this.callback(key, [this.geometryClone()]);
    if (cancel || !this.persist) {
        this.destroyFeature();
    } 
}, cancel: function() {
    this.finalize(true);
}, click: function(evt) {
    OpenLayers.Event.stop(evt);
    return false;
}, dblclick: function(evt) {
    OpenLayers.Event.stop(evt);
    return false;
}, drawFeature: function() {
    this.layer.drawFeature(this.point, this.style);
}, getGeometry: function() {
    var geometry = this.point.geometry;
    if (this.multi) {
        geometry = new OpenLayers.Geometry.MultiPoint([geometry]);
    }
    return geometry;
}, geometryClone: function() {
    return this.getGeometry().clone();
}, mousedown: function(evt) {
    if (!this.checkModifiers(evt)) {
        return true;
    }
    if (this.lastDown && this.lastDown.equals(evt.xy)) {
        return true;
    }
    if (this.lastDown == null) {
        if (this.persist) {
            this.destroyFeature();
        }
        this.createFeature();
    }
    this.lastDown = evt.xy;
    this.drawing = true;
    var lonlat = this.map.getLonLatFromPixel(evt.xy);
    this.point.geometry.x = lonlat.lon;
    this.point.geometry.y = lonlat.lat;
    this.point.geometry.clearBounds();
    this.drawFeature();
    return false;
}, mousemove: function(evt) {
    if (this.drawing) {
        var lonlat = this.map.getLonLatFromPixel(evt.xy);
        this.point.geometry.x = lonlat.lon;
        this.point.geometry.y = lonlat.lat;
        this.point.geometry.clearBounds();
        this.drawFeature();
    }
    return true;
}, mouseup: function(evt) {
    if (this.drawing) {
        this.finalize();
        return false;
    } else {
        return true;
    } 
}, CLASS_NAME: "OpenLayers.Handler.Point"
});
OpenLayers.Layer.GML = OpenLayers.Class(OpenLayers.Layer.Vector, { loaded: false, format: null, formatOptions: null, initialize: function(name, url, options) {
    var newArguments = [];
    newArguments.push(name, options);
    OpenLayers.Layer.Vector.prototype.initialize.apply(this, newArguments);
    this.url = url;
}, setVisibility: function(visibility, noEvent) {
    OpenLayers.Layer.Vector.prototype.setVisibility.apply(this, arguments);
    if (this.visibility && !this.loaded) {
        this.loadGML();
    } 
}, moveTo: function(bounds, zoomChanged, minor) {
    OpenLayers.Layer.Vector.prototype.moveTo.apply(this, arguments);
    if (this.visibility && !this.loaded) {
        this.events.triggerEvent("loadstart");
        this.loadGML();
    } 
}, loadGML: function() {
    if (!this.loaded) {
        OpenLayers.Request.GET({ url: this.url, success: this.requestSuccess, failure: this.requestFailure, scope: this });
        this.loaded = true;
    } 
}, setUrl: function(url) {
    this.url = url;
    this.destroyFeatures();
    this.loaded = false;
    this.events.triggerEvent("loadstart");
    this.loadGML();
}, requestSuccess: function(request) {
    var doc = request.responseXML;
    if (!doc || !doc.documentElement) {
        doc = request.responseText;
    }
    var options = {};
    OpenLayers.Util.extend(options, this.formatOptions);
    if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
        options.externalProjection = this.projection;
        options.internalProjection = this.map.getProjectionObject();
    }
    var gml = this.format ? new this.format(options) : new OpenLayers.Format.GML(options);
    this.addFeatures(gml.read(doc));
    this.events.triggerEvent("loadend");
}, requestFailure: function(request) {
    OpenLayers.Console.userError(OpenLayers.i18n("errorLoadingGML", { 'url': this.url }));
    this.events.triggerEvent("loadend");
}, CLASS_NAME: "OpenLayers.Layer.GML"
});
OpenLayers.Layer.PointTrack = OpenLayers.Class(OpenLayers.Layer.Vector, { dataFrom: null, initialize: function(name, options) {
    OpenLayers.Layer.Vector.prototype.initialize.apply(this, arguments);
}, addNodes: function(pointFeatures) {
    if (pointFeatures.length < 2) {
        OpenLayers.Console.error("At least two point features have to be added to create" + "a line from");
        return;
    }
    var lines = new Array(pointFeatures.length - 1);
    var pointFeature, startPoint, endPoint;
    for (var i = 0, len = pointFeatures.length;
i < len;
i++) {
        pointFeature = pointFeatures[i];
        endPoint = pointFeature.geometry;
        if (!endPoint) {
            var lonlat = pointFeature.lonlat;
            endPoint = new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat);
        } else if (endPoint.CLASS_NAME != "OpenLayers.Geometry.Point") {
            OpenLayers.Console.error("Only features with point geometries are supported.");
            return;
        }
        if (i > 0) {
            var attributes = (this.dataFrom != null) ? (pointFeatures[i + this.dataFrom].data || pointFeatures[i + this.dataFrom].attributes) : null;
            var line = new OpenLayers.Geometry.LineString([startPoint, endPoint]);
            lines[i - 1] = new OpenLayers.Feature.Vector(line, attributes);
        }
        startPoint = endPoint;
    }
    this.addFeatures(lines);
}, CLASS_NAME: "OpenLayers.Layer.PointTrack"
});
OpenLayers.Layer.PointTrack.dataFrom = { 'SOURCE_NODE': -1, 'TARGET_NODE': 0 };
OpenLayers.Layer.WFS = OpenLayers.Class(OpenLayers.Layer.Vector, OpenLayers.Layer.Markers, { isBaseLayer: false, tile: null, ratio: 2, DEFAULT_PARAMS: { service: "WFS", version: "1.0.0", request: "GetFeature" }, featureClass: null, format: null, formatObject: null, formatOptions: null, vectorMode: true, encodeBBOX: false, extractAttributes: false, initialize: function(name, url, params, options) {
    if (options == undefined) {
        options = {};
    }
    if (options.featureClass || !OpenLayers.Layer.Vector || !OpenLayers.Feature.Vector) {
        this.vectorMode = false;
    }
    OpenLayers.Util.extend(options, { 'reportError': false });
    var newArguments = [];
    newArguments.push(name, options);
    OpenLayers.Layer.Vector.prototype.initialize.apply(this, newArguments);
    if (!this.renderer || !this.vectorMode) {
        this.vectorMode = false;
        if (!options.featureClass) {
            options.featureClass = OpenLayers.Feature.WFS;
        }
        OpenLayers.Layer.Markers.prototype.initialize.apply(this, newArguments);
    }
    if (this.params && this.params.typename && !this.options.typename) {
        this.options.typename = this.params.typename;
    }
    if (!this.options.geometry_column) {
        this.options.geometry_column = "the_geom";
    }
    this.params = OpenLayers.Util.applyDefaults(params, OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));
    this.url = url;
}, destroy: function() {
    if (this.vectorMode) {
        OpenLayers.Layer.Vector.prototype.destroy.apply(this, arguments);
    } else {
        OpenLayers.Layer.Markers.prototype.destroy.apply(this, arguments);
    }
    if (this.tile) {
        this.tile.destroy();
    }
    this.tile = null;
    this.ratio = null;
    this.featureClass = null;
    this.format = null;
    if (this.formatObject && this.formatObject.destroy) {
        this.formatObject.destroy();
    }
    this.formatObject = null;
    this.formatOptions = null;
    this.vectorMode = null;
    this.encodeBBOX = null;
    this.extractAttributes = null;
}, setMap: function(map) {
    if (this.vectorMode) {
        OpenLayers.Layer.Vector.prototype.setMap.apply(this, arguments);
        var options = { 'extractAttributes': this.extractAttributes };
        OpenLayers.Util.extend(options, this.formatOptions);
        if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
            options.externalProjection = this.projection;
            options.internalProjection = this.map.getProjectionObject();
        }
        this.formatObject = this.format ? new this.format(options) : new OpenLayers.Format.GML(options);
    } else {
        OpenLayers.Layer.Markers.prototype.setMap.apply(this, arguments);
    } 
}, moveTo: function(bounds, zoomChanged, dragging) {
    if (this.vectorMode) {
        OpenLayers.Layer.Vector.prototype.moveTo.apply(this, arguments);
    } else {
        OpenLayers.Layer.Markers.prototype.moveTo.apply(this, arguments);
    }
    if (dragging) {
        return false;
    }
    if (zoomChanged) {
        if (this.vectorMode) {
            this.renderer.clear();
        } 
    }
    if (this.options.minZoomLevel) {
        OpenLayers.Console.warn(OpenLayers.i18n('minZoomLevelError'));
        if (this.map.getZoom() < this.options.minZoomLevel) {
            return null;
        } 
    }
    if (bounds == null) {
        bounds = this.map.getExtent();
    }
    var firstRendering = (this.tile == null);
    var outOfBounds = (!firstRendering && !this.tile.bounds.containsBounds(bounds));
    if (zoomChanged || firstRendering || (!dragging && outOfBounds)) {
        var center = bounds.getCenterLonLat();
        var tileWidth = bounds.getWidth() * this.ratio;
        var tileHeight = bounds.getHeight() * this.ratio;
        var tileBounds = new OpenLayers.Bounds(center.lon - (tileWidth / 2), center.lat - (tileHeight / 2), center.lon + (tileWidth / 2), center.lat + (tileHeight / 2));
        var tileSize = this.map.getSize();
        tileSize.w = tileSize.w * this.ratio;
        tileSize.h = tileSize.h * this.ratio;
        var ul = new OpenLayers.LonLat(tileBounds.left, tileBounds.top);
        var pos = this.map.getLayerPxFromLonLat(ul);
        var url = this.getFullRequestString();
        var params = { BBOX: this.encodeBBOX ? tileBounds.toBBOX() : tileBounds.toArray() };
        if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
            var projectedBounds = tileBounds.clone();
            projectedBounds.transform(this.map.getProjectionObject(), this.projection);
            params.BBOX = this.encodeBBOX ? projectedBounds.toBBOX() : projectedBounds.toArray();
        }
        url += "&" + OpenLayers.Util.getParameterString(params);
        if (!this.tile) {
            this.tile = new OpenLayers.Tile.WFS(this, pos, tileBounds, url, tileSize);
            this.addTileMonitoringHooks(this.tile);
            this.tile.draw();
        } else {
            if (this.vectorMode) {
                this.destroyFeatures();
                this.renderer.clear();
            } else {
                this.clearMarkers();
            }
            this.removeTileMonitoringHooks(this.tile);
            this.tile.destroy();
            this.tile = null;
            this.tile = new OpenLayers.Tile.WFS(this, pos, tileBounds, url, tileSize);
            this.addTileMonitoringHooks(this.tile);
            this.tile.draw();
        } 
    } 
}, addTileMonitoringHooks: function(tile) {
    tile.onLoadStart = function() {
        if (this == this.layer.tile) {
            this.layer.events.triggerEvent("loadstart");
        } 
    };
    tile.events.register("loadstart", tile, tile.onLoadStart);
    tile.onLoadEnd = function() {
        if (this == this.layer.tile) {
            this.layer.events.triggerEvent("tileloaded");
            this.layer.events.triggerEvent("loadend");
        } 
    };
    tile.events.register("loadend", tile, tile.onLoadEnd);
    tile.events.register("unload", tile, tile.onLoadEnd);
}, removeTileMonitoringHooks: function(tile) {
    tile.unload();
    tile.events.un({ "loadstart": tile.onLoadStart, "loadend": tile.onLoadEnd, "unload": tile.onLoadEnd, scope: tile });
}, onMapResize: function() {
    if (this.vectorMode) {
        OpenLayers.Layer.Vector.prototype.onMapResize.apply(this, arguments);
    } else {
        OpenLayers.Layer.Markers.prototype.onMapResize.apply(this, arguments);
    } 
}, mergeNewParams: function(newParams) {
    var upperParams = OpenLayers.Util.upperCaseObject(newParams);
    var newArguments = [upperParams];
    return OpenLayers.Layer.HTTPRequest.prototype.mergeNewParams.apply(this, newArguments);
}, clone: function(obj) {
    if (obj == null) {
        obj = new OpenLayers.Layer.WFS(this.name, this.url, this.params, this.options);
    }
    if (this.vectorMode) {
        obj = OpenLayers.Layer.Vector.prototype.clone.apply(this, [obj]);
    } else {
        obj = OpenLayers.Layer.Markers.prototype.clone.apply(this, [obj]);
    }
    return obj;
}, getFullRequestString: function(newParams, altUrl) {
    var projectionCode = this.projection.getCode() || this.map.getProjection();
    this.params.SRS = (projectionCode == "none") ? null : projectionCode;
    return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this, arguments);
}, commit: function() {
    if (!this.writer) {
        var options = {};
        if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
            options.externalProjection = this.projection;
            options.internalProjection = this.map.getProjectionObject();
        }
        this.writer = new OpenLayers.Format.WFS(options, this);
    }
    var data = this.writer.write(this.features);
    OpenLayers.Request.POST({ url: this.url, data: data, success: this.commitSuccess, failure: this.commitFailure, scope: this });
}, commitSuccess: function(request) {
    var response = request.responseText;
    if (response.indexOf('SUCCESS') != -1) {
        this.commitReport(OpenLayers.i18n("commitSuccess", { 'response': response }));
        for (var i = 0;
i < this.features.length;
i++) {
            this.features[i].state = null;
        } 
    } else if (response.indexOf('FAILED') != -1 || response.indexOf('Exception') != -1) {
        this.commitReport(OpenLayers.i18n("commitFailed", { 'response': response }));
    } 
}, commitFailure: function(request) { }, commitReport: function(string, response) {
    OpenLayers.Console.userError(string);
}, refresh: function() {
    if (this.tile) {
        if (this.vectorMode) {
            this.renderer.clear();
            this.features.length = 0;
        } else {
            this.clearMarkers();
            this.markers.length = 0;
        }
        this.tile.draw();
    } 
}, CLASS_NAME: "OpenLayers.Layer.WFS"
});
OpenLayers.Strategy.BBOX = OpenLayers.Class(OpenLayers.Strategy, { bounds: null, ratio: 2, response: null, initialize: function(options) {
    OpenLayers.Strategy.prototype.initialize.apply(this, [options]);
}, activate: function() {
    var activated = OpenLayers.Strategy.prototype.activate.call(this);
    if (activated) {
        this.layer.events.on({ "moveend": this.update, scope: this });
        this.layer.events.on({ "refresh": this.update, scope: this });
    }
    return activated;
}, deactivate: function() {
    var deactivated = OpenLayers.Strategy.prototype.deactivate.call(this);
    if (deactivated) {
        this.layer.events.un({ "moveend": this.update, scope: this });
        this.layer.events.un({ "refresh": this.update, scope: this });
    }
    return deactivated;
}, update: function(options) {
    var mapBounds = this.layer.map.getExtent();
    if ((options && options.force) || this.invalidBounds(mapBounds)) {
        this.calculateBounds(mapBounds);
        this.triggerRead();
    } 
}, invalidBounds: function(mapBounds) {
    if (!mapBounds) {
        mapBounds = this.layer.map.getExtent();
    }
    return !this.bounds || !this.bounds.containsBounds(mapBounds);
}, calculateBounds: function(mapBounds) {
    if (!mapBounds) {
        mapBounds = this.layer.map.getExtent();
    }
    var center = mapBounds.getCenterLonLat();
    var dataWidth = mapBounds.getWidth() * this.ratio;
    var dataHeight = mapBounds.getHeight() * this.ratio;
    this.bounds = new OpenLayers.Bounds(center.lon - (dataWidth / 2), center.lat - (dataHeight / 2), center.lon + (dataWidth / 2), center.lat + (dataHeight / 2));
}, triggerRead: function() {
    var filter = this.createFilter();
    if (this.response && this.response.priv && typeof this.response.priv.abort == "function") {
        this.response.priv.abort();
    }
    this.response = this.layer.protocol.read({ filter: filter, callback: this.merge, scope: this });
}, createFilter: function() {
    var filter = new OpenLayers.Filter.Spatial({ type: OpenLayers.Filter.Spatial.BBOX, value: this.bounds, projection: this.layer.projection });
    if (this.layer.filter) {
        filter = new OpenLayers.Filter.Logical({ type: OpenLayers.Filter.Logical.AND, filters: [this.layer.filter, filter] });
    }
    return filter;
}, merge: function(resp) {
    this.layer.destroyFeatures();
    var features = resp.features;
    if (features && features.length > 0) {
        this.layer.addFeatures(features);
    } 
}, CLASS_NAME: "OpenLayers.Strategy.BBOX"
});
OpenLayers.Format.Filter.v1 = OpenLayers.Class(OpenLayers.Format.XML, { namespaces: { ogc: "http://www.opengis.net/ogc", xlink: "http://www.w3.org/1999/xlink", xsi: "http://www.w3.org/2001/XMLSchema-instance" }, defaultPrefix: "ogc", schemaLocation: null, initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, read: function(data) {
    var obj = {};
    var filter = this.readers.ogc["Filter"].apply(this, [data, obj]);
    return obj.filter;
}, readers: { "ogc": { "Filter": function(node, parent) {
    var obj = { fids: [], filters: [] };
    this.readChildNodes(node, obj);
    if (obj.fids.length > 0) {
        parent.filter = new OpenLayers.Filter.FeatureId({ fids: obj.fids });
    } else if (obj.filters.length > 0) {
        parent.filter = obj.filters[0];
    } 
}, "FeatureId": function(node, obj) {
    var fid = node.getAttribute("fid");
    if (fid) {
        obj.fids.push(fid);
    } 
}, "And": function(node, obj) {
    var filter = new OpenLayers.Filter.Logical({ type: OpenLayers.Filter.Logical.AND });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "Or": function(node, obj) {
    var filter = new OpenLayers.Filter.Logical({ type: OpenLayers.Filter.Logical.OR });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "Not": function(node, obj) {
    var filter = new OpenLayers.Filter.Logical({ type: OpenLayers.Filter.Logical.NOT });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsEqualTo": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.EQUAL_TO });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsNotEqualTo": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.NOT_EQUAL_TO });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsLessThan": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.LESS_THAN });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsGreaterThan": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.GREATER_THAN });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsLessThanOrEqualTo": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsGreaterThanOrEqualTo": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsBetween": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.BETWEEN });
    this.readChildNodes(node, filter);
    obj.filters.push(filter);
}, "PropertyIsLike": function(node, obj) {
    var filter = new OpenLayers.Filter.Comparison({ type: OpenLayers.Filter.Comparison.LIKE });
    this.readChildNodes(node, filter);
    var wildCard = node.getAttribute("wildCard");
    var singleChar = node.getAttribute("singleChar");
    var esc = node.getAttribute("escape");
    filter.value2regex(wildCard, singleChar, esc);
    obj.filters.push(filter);
}, "Literal": function(node, obj) {
    obj.value = this.getChildValue(node);
}, "PropertyName": function(node, filter) {
    filter.property = this.getChildValue(node);
}, "LowerBoundary": function(node, filter) {
    filter.lowerBoundary = this.readOgcExpression(node);
}, "UpperBoundary": function(node, filter) {
    filter.upperBoundary = this.readOgcExpression(node);
} }
}, readOgcExpression: function(node) {
    var obj = {};
    this.readChildNodes(node, obj);
    var value = obj.value;
    if (!value) {
        value = this.getChildValue(node);
    }
    return value;
}, write: function(filter) {
    return this.writers.ogc["Filter"].apply(this, [filter]);
}, writers: { "ogc": { "Filter": function(filter) {
    var node = this.createElementNSPlus("ogc:Filter");
    var sub = filter.CLASS_NAME.split(".").pop();
    if (sub == "FeatureId") {
        for (var i = 0;
i < filter.fids.length;
++i) {
            this.writeNode(node, "FeatureId", filter.fids[i]);
        } 
    } else {
        this.writeNode(node, this.getFilterType(filter), filter);
    }
    return node;
}, "FeatureId": function(fid) {
    return this.createElementNSPlus("ogc:FeatureId", { attributes: { fid: fid} });
}, "And": function(filter) {
    var node = this.createElementNSPlus("ogc:And");
    var childFilter;
    for (var i = 0;
i < filter.filters.length;
++i) {
        childFilter = filter.filters[i];
        this.writeNode(node, this.getFilterType(childFilter), childFilter);
    }
    return node;
}, "Or": function(filter) {
    var node = this.createElementNSPlus("ogc:Or");
    var childFilter;
    for (var i = 0;
i < filter.filters.length;
++i) {
        childFilter = filter.filters[i];
        this.writeNode(node, this.getFilterType(childFilter), childFilter);
    }
    return node;
}, "Not": function(filter) {
    var node = this.createElementNSPlus("ogc:Not");
    var childFilter = filter.filters[0];
    this.writeNode(node, this.getFilterType(childFilter), childFilter);
    return node;
}, "PropertyIsEqualTo": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsEqualTo");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.value);
    return node;
}, "PropertyIsNotEqualTo": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsNotEqualTo");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.value);
    return node;
}, "PropertyIsLessThan": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsLessThan");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.value);
    return node;
}, "PropertyIsGreaterThan": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsGreaterThan");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.value);
    return node;
}, "PropertyIsLessThanOrEqualTo": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsLessThanOrEqualTo");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.value);
    return node;
}, "PropertyIsGreaterThanOrEqualTo": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsGreaterThanOrEqualTo");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.value);
    return node;
}, "PropertyIsBetween": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsBetween");
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "LowerBoundary", filter);
    this.writeNode(node, "UpperBoundary", filter);
    return node;
}, "PropertyIsLike": function(filter) {
    var node = this.createElementNSPlus("ogc:PropertyIsLike", { attributes: { wildCard: "*", singleChar: ".", escape: "!"} });
    this.writeNode(node, "PropertyName", filter);
    this.writeNode(node, "Literal", filter.regex2value());
    return node;
}, "PropertyName": function(filter) {
    return this.createElementNSPlus("ogc:PropertyName", { value: filter.property });
}, "Literal": function(value) {
    return this.createElementNSPlus("ogc:Literal", { value: value });
}, "LowerBoundary": function(filter) {
    var node = this.createElementNSPlus("ogc:LowerBoundary");
    this.writeNode(node, "Literal", filter.lowerBoundary);
    return node;
}, "UpperBoundary": function(filter) {
    var node = this.createElementNSPlus("ogc:UpperBoundary");
    this.writeNode(node, "Literal", filter.upperBoundary);
    return node;
}, "BBOX": function(filter) {
    var node = this.createElementNSPlus("ogc:BBOX");
    this.writeNode(node, "PropertyName", filter);
    var gml = new OpenLayers.Format.GML();
    node.appendChild(gml.buildGeometryNode(filter.value));
    return node;
}, "DWITHIN": function(filter) {
    var node = this.createElementNSPlus("ogc:DWithin");
    this.writeNode(node, "PropertyName", filter);
    var gml = new OpenLayers.Format.GML();
    node.appendChild(gml.buildGeometryNode(filter.value));
    this.writeNode(node, "Distance", filter);
    return node;
}, "INTERSECTS": function(filter) {
    var node = this.createElementNSPlus("ogc:Intersects");
    this.writeNode(node, "PropertyName", filter);
    var gml = new OpenLayers.Format.GML();
    node.appendChild(gml.buildGeometryNode(filter.value));
    return node;
}, "Distance": function(filter) {
    return this.createElementNSPlus("ogc:Distance", { attributes: { units: filter.distanceUnits }, value: filter.distance });
} }
}, getFilterType: function(filter) {
    var filterType = this.filterMap[filter.type];
    if (!filterType) {
        throw "Filter writing not supported for rule type: " + filter.type;
    }
    return filterType;
}, filterMap: { "&&": "And", "||": "Or", "!": "Not", "==": "PropertyIsEqualTo", "!=": "PropertyIsNotEqualTo", "<": "PropertyIsLessThan", ">": "PropertyIsGreaterThan", "<=": "PropertyIsLessThanOrEqualTo", ">=": "PropertyIsGreaterThanOrEqualTo", "..": "PropertyIsBetween", "~": "PropertyIsLike", "BBOX": "BBOX", "DWITHIN": "DWITHIN", "INTERSECTS": "INTERSECTS" }, getNamespacePrefix: function(uri) {
    var prefix = null;
    if (uri == null) {
        prefix = this.namespaces[this.defaultPrefix];
    } else {
        var gotPrefix = false;
        for (prefix in this.namespaces) {
            if (this.namespaces[prefix] == uri) {
                gotPrefix = true;
                break;
            } 
        }
        if (!gotPrefix) {
            prefix = null;
        } 
    }
    return prefix;
}, readChildNodes: function(node, obj) {
    var children = node.childNodes;
    var child, group, reader, prefix, local;
    for (var i = 0;
i < children.length;
++i) {
        child = children[i];
        if (child.nodeType == 1) {
            prefix = this.getNamespacePrefix(child.namespaceURI);
            local = child.nodeName.split(":").pop();
            group = this.readers[prefix];
            if (group) {
                reader = group[local];
                if (reader) {
                    reader.apply(this, [child, obj]);
                } 
            } 
        } 
    } 
}, writeNode: function(parent, name, obj) {
    var prefix, local;
    var split = name.indexOf(":");
    if (split > 0) {
        prefix = name.substring(0, split);
        local = name.substring(split + 1);
    } else {
        prefix = this.getNamespacePrefix(parent.namespaceURI);
        local = name;
    }
    var child = this.writers[prefix][local].apply(this, [obj]);
    parent.appendChild(child);
    return child;
}, createElementNSPlus: function(name, options) {
    options = options || {};
    var loc = name.indexOf(":");
    var uri = options.uri || this.namespaces[options.prefix];
    if (!uri) {
        loc = name.indexOf(":");
        uri = this.namespaces[name.substring(0, loc)];
    }
    if (!uri) {
        uri = this.namespaces[this.defaultPrefix];
    }
    var node = this.createElementNS(uri, name);
    if (options.attributes) {
        this.setAttributes(node, options.attributes);
    }
    if (options.value) {
        node.appendChild(this.createTextNode(options.value));
    }
    return node;
}, setAttributes: function(node, obj) {
    var value, loc, alias, uri;
    for (var name in obj) {
        value = obj[name].toString();
        uri = this.namespaces[name.substring(0, name.indexOf(":"))] || null;
        this.setAttributeNS(node, uri, name, value);
    } 
}, CLASS_NAME: "OpenLayers.Format.Filter.v1"
});
OpenLayers.Format.SLD.v1 = OpenLayers.Class(OpenLayers.Format.XML, { namespaces: { sld: "http://www.opengis.net/sld", ogc: "http://www.opengis.net/ogc", xlink: "http://www.w3.org/1999/xlink", xsi: "http://www.w3.org/2001/XMLSchema-instance" }, defaultPrefix: "sld", schemaLocation: null, defaultSymbolizer: { fillColor: "#808080", fillOpacity: 1, strokeColor: "#000000", strokeOpacity: 1, strokeWidth: 1, strokeDashstyle: "solid", pointRadius: 3, graphicName: "square" }, initialize: function(options) {
    this.readers["ogc"] = OpenLayers.Format.Filter.v1.prototype.readers["ogc"];
    this.writers["ogc"] = OpenLayers.Format.Filter.v1.prototype.writers["ogc"];
    this.readOgcExpression = OpenLayers.Format.Filter.v1.prototype.readOgcExpression;
    this.getFilterType = OpenLayers.Format.Filter.v1.prototype.getFilterType;
    this.filterMap = OpenLayers.Format.Filter.v1.prototype.filterMap;
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, read: function(data) {
    var sld = { namedLayers: {} };
    this.readChildNodes(data, sld);
    return sld;
}, readers: { "sld": { "StyledLayerDescriptor": function(node, sld) {
    sld.version = node.getAttribute("version");
    this.readChildNodes(node, sld);
}, "Name": function(node, obj) {
    obj.name = this.getChildValue(node);
}, "Title": function(node, obj) {
    obj.title = this.getChildValue(node);
}, "Abstract": function(node, obj) {
    obj.description = this.getChildValue(node);
}, "NamedLayer": function(node, sld) {
    var layer = { userStyles: [], namedStyles: [] };
    this.readChildNodes(node, layer);
    for (var i = 0, len = layer.userStyles.length;
i < len;
++i) {
        layer.userStyles[i].layerName = layer.name;
    }
    sld.namedLayers[layer.name] = layer;
}, "NamedStyle": function(node, layer) {
    layer.namedStyles.push(this.getChildName(node.firstChild));
}, "UserStyle": function(node, layer) {
    var style = new OpenLayers.Style(this.defaultSymbolizer);
    this.readChildNodes(node, style);
    layer.userStyles.push(style);
}, "IsDefault": function(node, style) {
    if (this.getChildValue(node) == "1") {
        style.isDefault = true;
    } 
}, "FeatureTypeStyle": function(node, style) {
    var obj = { rules: [] };
    this.readChildNodes(node, obj);
    style.rules = obj.rules;
}, "Rule": function(node, obj) {
    var rule = new OpenLayers.Rule();
    this.readChildNodes(node, rule);
    obj.rules.push(rule);
}, "ElseFilter": function(node, rule) {
    rule.elseFilter = true;
}, "MinScaleDenominator": function(node, rule) {
    rule.minScaleDenominator = this.getChildValue(node);
}, "MaxScaleDenominator": function(node, rule) {
    rule.maxScaleDenominator = this.getChildValue(node);
}, "LineSymbolizer": function(node, rule) {
    var symbolizer = rule.symbolizer["Line"] || {};
    this.readChildNodes(node, symbolizer);
    rule.symbolizer["Line"] = symbolizer;
}, "PolygonSymbolizer": function(node, rule) {
    var symbolizer = rule.symbolizer["Polygon"] || {};
    this.readChildNodes(node, symbolizer);
    rule.symbolizer["Polygon"] = symbolizer;
}, "PointSymbolizer": function(node, rule) {
    var symbolizer = rule.symbolizer["Point"] || {};
    this.readChildNodes(node, symbolizer);
    rule.symbolizer["Point"] = symbolizer;
}, "Stroke": function(node, symbolizer) {
    this.readChildNodes(node, symbolizer);
}, "Fill": function(node, symbolizer) {
    this.readChildNodes(node, symbolizer);
}, "CssParameter": function(node, symbolizer) {
    var cssProperty = node.getAttribute("name");
    var symProperty = this.cssMap[cssProperty];
    if (symProperty) {
        var value = this.readOgcExpression(node);
        if (value) {
            symbolizer[symProperty] = value;
        } 
    } 
}, "Graphic": function(node, symbolizer) {
    var graphic = {};
    this.readChildNodes(node, graphic);
    var properties = ["strokeColor", "strokeWidth", "strokeOpacity", "strokeLinecap", "fillColor", "fillOpacity", "graphicName", "rotation", "graphicFormat"];
    var prop, value;
    for (var i = 0, len = properties.length;
i < len;
++i) {
        prop = properties[i];
        value = graphic[prop];
        if (value != undefined) {
            symbolizer[prop] = value;
        } 
    }
    if (graphic.opacity != undefined) {
        symbolizer.graphicOpacity = graphic.opacity;
    }
    if (graphic.size != undefined) {
        symbolizer.pointRadius = graphic.size / 2;
    }
    if (graphic.href != undefined) {
        symbolizer.externalGraphic = graphic.href;
    }
    if (graphic.rotation != undefined) {
        symbolizer.rotation = graphic.rotation;
    } 
}, "ExternalGraphic": function(node, graphic) {
    this.readChildNodes(node, graphic);
}, "Mark": function(node, graphic) {
    this.readChildNodes(node, graphic);
}, "WellKnownName": function(node, graphic) {
    graphic.graphicName = this.getChildValue(node);
}, "Opacity": function(node, obj) {
    var opacity = this.getChildValue(node);
    if (opacity) {
        obj.opacity = opacity;
    } 
}, "Size": function(node, obj) {
    var size = this.getChildValue(node);
    if (size) {
        obj.size = size;
    } 
}, "Rotation": function(node, obj) {
    var rotation = this.getChildValue(node);
    if (rotation) {
        obj.rotation = rotation;
    } 
}, "OnlineResource": function(node, obj) {
    obj.href = this.getAttributeNS(node, this.namespaces.xlink, "href");
}, "Format": function(node, graphic) {
    graphic.graphicFormat = this.getChildValue(node);
} }
}, cssMap: { "stroke": "strokeColor", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap", "stroke-dasharray": "strokeDashstyle", "fill": "fillColor", "fill-opacity": "fillOpacity", "font-family": "fontFamily", "font-size": "fontSize" }, getCssProperty: function(sym) {
    var css = null;
    for (var prop in this.cssMap) {
        if (this.cssMap[prop] == sym) {
            css = prop;
            break;
        } 
    }
    return css;
}, getGraphicFormat: function(href) {
    var format, regex;
    for (var key in this.graphicFormats) {
        if (this.graphicFormats[key].test(href)) {
            format = key;
            break;
        } 
    }
    return format || this.defautlGraphicFormat;
}, defaultGraphicFormat: "image/png", graphicFormats: { "image/jpeg": /\.jpe?g$/i, "image/gif": /\.gif$/i, "image/png": /\.png$/i }, write: function(sld) {
    return this.writers.sld.StyledLayerDescriptor.apply(this, [sld]);
}, writers: { "sld": { "StyledLayerDescriptor": function(sld) {
    var root = this.createElementNSPlus("StyledLayerDescriptor", { attributes: { "version": this.VERSION, "xsi:schemaLocation": this.schemaLocation} });
    if (sld.name) {
        this.writeNode(root, "Name", sld.name);
    }
    if (sld.title) {
        this.writeNode(root, "Title", sld.title);
    }
    if (sld.description) {
        this.writeNode(root, "Abstract", sld.description);
    }
    for (var name in sld.namedLayers) {
        this.writeNode(root, "NamedLayer", sld.namedLayers[name]);
    }
    return root;
}, "Name": function(name) {
    return this.createElementNSPlus("Name", { value: name });
}, "Title": function(title) {
    return this.createElementNSPlus("Title", { value: title });
}, "Abstract": function(description) {
    return this.createElementNSPlus("Abstract", { value: description });
}, "NamedLayer": function(layer) {
    var node = this.createElementNSPlus("NamedLayer");
    this.writeNode(node, "Name", layer.name);
    if (layer.namedStyles) {
        for (var i = 0, len = layer.namedStyles.length;
i < len;
++i) {
            this.writeNode(node, "NamedStyle", layer.namedStyles[i]);
        } 
    }
    if (layer.userStyles) {
        for (var i = 0, len = layer.userStyles.length;
i < len;
++i) {
            this.writeNode(node, "UserStyle", layer.userStyles[i]);
        } 
    }
    return node;
}, "NamedStyle": function(name) {
    var node = this.createElementNSPlus("NamedStyle");
    this.writeNode(node, "Name", name);
    return node;
}, "UserStyle": function(style) {
    var node = this.createElementNSPlus("UserStyle");
    if (style.name) {
        this.writeNode(node, "Name", style.name);
    }
    if (style.title) {
        this.writeNode(node, "Title", style.title);
    }
    if (style.description) {
        this.writeNode(node, "Abstract", style.description);
    }
    if (style.isDefault) {
        this.writeNode(node, "IsDefault", style.isDefault);
    }
    this.writeNode(node, "FeatureTypeStyle", style);
    return node;
}, "IsDefault": function(bool) {
    return this.createElementNSPlus("IsDefault", { value: (bool) ? "1" : "0" });
}, "FeatureTypeStyle": function(style) {
    var node = this.createElementNSPlus("FeatureTypeStyle");
    for (var i = 0, len = style.rules.length;
i < len;
++i) {
        this.writeNode(node, "Rule", style.rules[i]);
    }
    return node;
}, "Rule": function(rule) {
    var node = this.createElementNSPlus("Rule");
    if (rule.name) {
        this.writeNode(node, "Name", rule.name);
    }
    if (rule.title) {
        this.writeNode(node, "Title", rule.title);
    }
    if (rule.description) {
        this.writeNode(node, "Abstract", rule.description);
    }
    if (rule.elseFilter) {
        this.writeNode(node, "ElseFilter");
    } else if (rule.filter) {
        this.writeNode(node, "ogc:Filter", rule.filter);
    }
    if (rule.minScaleDenominator != undefined) {
        this.writeNode(node, "MinScaleDenominator", rule.minScaleDenominator);
    }
    if (rule.maxScaleDenominator != undefined) {
        this.writeNode(node, "MaxScaleDenominator", rule.maxScaleDenominator);
    }
    var types = OpenLayers.Style.SYMBOLIZER_PREFIXES;
    var type, symbolizer;
    for (var i = 0, len = types.length;
i < len;
++i) {
        type = types[i];
        symbolizer = rule.symbolizer[type];
        if (symbolizer) {
            this.writeNode(node, type + "Symbolizer", symbolizer);
        } 
    }
    return node;
}, "ElseFilter": function() {
    return this.createElementNSPlus("ElseFilter");
}, "MinScaleDenominator": function(scale) {
    return this.createElementNSPlus("MinScaleDenominator", { value: scale });
}, "MaxScaleDenominator": function(scale) {
    return this.createElementNSPlus("MaxScaleDenominator", { value: scale });
}, "LineSymbolizer": function(symbolizer) {
    var node = this.createElementNSPlus("LineSymbolizer");
    this.writeNode(node, "Stroke", symbolizer);
    return node;
}, "Stroke": function(symbolizer) {
    var node = this.createElementNSPlus("Stroke");
    if (symbolizer.strokeColor != undefined) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "strokeColor" });
    }
    if (symbolizer.strokeOpacity != undefined) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "strokeOpacity" });
    }
    if (symbolizer.strokeWidth != undefined) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "strokeWidth" });
    }
    return node;
}, "CssParameter": function(obj) {
    return this.createElementNSPlus("CssParameter", { attributes: { name: this.getCssProperty(obj.key) }, value: obj.symbolizer[obj.key] });
}, "TextSymbolizer": function(symbolizer) {
    var node = this.createElementNSPlus("TextSymbolizer");
    if (symbolizer.label != null) {
        this.writeNode(node, "Label", symbolizer.label);
    }
    if (symbolizer.fontFamily != null || symbolizer.fontSize != null) {
        this.writeNode(node, "Font", symbolizer);
    }
    if (symbolizer.fillColor != null || symbolizer.fillOpacity != null) {
        this.writeNode(node, "Fill", symbolizer);
    }
    return node;
}, "Font": function(symbolizer) {
    var node = this.createElementNSPlus("Font");
    if (symbolizer.fontFamily) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "fontFamily" });
    }
    if (symbolizer.fontSize) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "fontSize" });
    }
    return node;
}, "Label": function(label) {
    var node = this.createElementNSPlus("Label");
    var tokens = label.split("${");
    node.appendChild(this.createTextNode(tokens[0]));
    var item, last;
    for (var i = 1, len = tokens.length;
i < len;
i++) {
        item = tokens[i];
        last = item.indexOf("}");
        if (last > 0) {
            this.writeNode(node, "ogc:PropertyName", { property: item.substring(0, last) });
            node.appendChild(this.createTextNode(item.substring(++last)));
        } else {
            node.appendChild(this.createTextNode("${" + item));
        } 
    }
    return node;
}, "PolygonSymbolizer": function(symbolizer) {
    var node = this.createElementNSPlus("PolygonSymbolizer");
    this.writeNode(node, "Fill", symbolizer);
    this.writeNode(node, "Stroke", symbolizer);
    return node;
}, "Fill": function(symbolizer) {
    var node = this.createElementNSPlus("Fill");
    if (symbolizer.fillColor) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "fillColor" });
    }
    if (symbolizer.fillOpacity) {
        this.writeNode(node, "CssParameter", { symbolizer: symbolizer, key: "fillOpacity" });
    }
    return node;
}, "PointSymbolizer": function(symbolizer) {
    var node = this.createElementNSPlus("PointSymbolizer");
    this.writeNode(node, "Graphic", symbolizer);
    return node;
}, "Graphic": function(symbolizer) {
    var node = this.createElementNSPlus("Graphic");
    if (symbolizer.externalGraphic != undefined) {
        this.writeNode(node, "ExternalGraphic", symbolizer);
    } else if (symbolizer.graphicName) {
        this.writeNode(node, "Mark", symbolizer);
    }
    if (symbolizer.graphicOpacity != undefined) {
        this.writeNode(node, "Opacity", symbolizer.graphicOpacity);
    }
    if (symbolizer.pointRadius != undefined) {
        this.writeNode(node, "Size", symbolizer.pointRadius * 2);
    }
    if (symbolizer.rotation != undefined) {
        this.writeNode(node, "Rotation", symbolizer.rotation);
    }
    return node;
}, "ExternalGraphic": function(symbolizer) {
    var node = this.createElementNSPlus("ExternalGraphic");
    this.writeNode(node, "OnlineResource", symbolizer.externalGraphic);
    var format = symbolizer.graphicFormat || this.getGraphicFormat(symbolizer.externalGraphic);
    this.writeNode(node, "Format", format);
    return node;
}, "Mark": function(symbolizer) {
    var node = this.createElementNSPlus("Mark");
    this.writeNode(node, "WellKnownName", symbolizer.graphicName);
    this.writeNode(node, "Fill", symbolizer);
    this.writeNode(node, "Stroke", symbolizer);
    return node;
}, "WellKnownName": function(name) {
    return this.createElementNSPlus("WellKnownName", { value: name });
}, "Opacity": function(value) {
    return this.createElementNSPlus("Opacity", { value: value });
}, "Size": function(value) {
    return this.createElementNSPlus("Size", { value: value });
}, "Rotation": function(value) {
    return this.createElementNSPlus("Rotation", { value: value });
}, "OnlineResource": function(href) {
    return this.createElementNSPlus("OnlineResource", { attributes: { "xlink:type": "simple", "xlink:href": href} });
}, "Format": function(format) {
    return this.createElementNSPlus("Format", { value: format });
} }
}, getNamespacePrefix: function(uri) {
    var prefix = null;
    if (uri == null) {
        prefix = this.namespaces[this.defaultPrefix];
    } else {
        var gotPrefix = false;
        for (prefix in this.namespaces) {
            if (this.namespaces[prefix] == uri) {
                gotPrefix = true;
                break;
            } 
        }
        if (!gotPrefix) {
            prefix = null;
        } 
    }
    return prefix;
}, readChildNodes: function(node, obj) {
    var children = node.childNodes;
    var child, group, reader, prefix, local;
    for (var i = 0, len = children.length;
i < len;
++i) {
        child = children[i];
        if (child.nodeType == 1) {
            prefix = this.getNamespacePrefix(child.namespaceURI);
            local = child.nodeName.split(":").pop();
            group = this.readers[prefix];
            if (group) {
                reader = group[local];
                if (reader) {
                    reader.apply(this, [child, obj]);
                } 
            } 
        } 
    } 
}, writeNode: function(parent, name, obj) {
    var prefix, local;
    var split = name.indexOf(":");
    if (split > 0) {
        prefix = name.substring(0, split);
        local = name.substring(split + 1);
    } else {
        prefix = this.getNamespacePrefix(parent.namespaceURI);
        local = name;
    }
    var child = this.writers[prefix][local].apply(this, [obj]);
    parent.appendChild(child);
    return child;
}, createElementNSPlus: function(name, options) {
    options = options || {};
    var loc = name.indexOf(":");
    var uri = options.uri || this.namespaces[options.prefix];
    if (!uri) {
        loc = name.indexOf(":");
        uri = this.namespaces[name.substring(0, loc)];
    }
    if (!uri) {
        uri = this.namespaces[this.defaultPrefix];
    }
    var node = this.createElementNS(uri, name);
    if (options.attributes) {
        this.setAttributes(node, options.attributes);
    }
    if (options.value) {
        node.appendChild(this.createTextNode(options.value));
    }
    return node;
}, setAttributes: function(node, obj) {
    var value, loc, alias, uri;
    for (var name in obj) {
        value = obj[name].toString();
        uri = this.namespaces[name.substring(0, name.indexOf(":"))] || null;
        this.setAttributeNS(node, uri, name, value);
    } 
}, CLASS_NAME: "OpenLayers.Format.SLD.v1"
});
OpenLayers.Geometry.Curve = OpenLayers.Class(OpenLayers.Geometry.MultiPoint, { componentTypes: ["OpenLayers.Geometry.Point"], initialize: function(points) {
    OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this, arguments);
}, getLength: function() {
    var length = 0.0;
    if (this.components && (this.components.length > 1)) {
        for (var i = 1, len = this.components.length;
i < len;
i++) {
            length += this.components[i - 1].distanceTo(this.components[i]);
        } 
    }
    return length;
}, CLASS_NAME: "OpenLayers.Geometry.Curve"
});
OpenLayers.Format.Filter.v1_0_0 = OpenLayers.Class(OpenLayers.Format.Filter.v1, { VERSION: "1.0.0", schemaLocation: "http://www.opengis.net/ogc/filter/1.0.0/filter.xsd", initialize: function(options) {
    OpenLayers.Format.Filter.v1.prototype.initialize.apply(this, [options]);
}, CLASS_NAME: "OpenLayers.Format.Filter.v1_0_0"
});
OpenLayers.Format.SLD.v1_0_0 = OpenLayers.Class(OpenLayers.Format.SLD.v1, { VERSION: "1.0.0", schemaLocation: "http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd", initialize: function(options) {
    OpenLayers.Format.SLD.v1.prototype.initialize.apply(this, [options]);
}, CLASS_NAME: "OpenLayers.Format.SLD.v1_0_0"
});
OpenLayers.Geometry.LineString = OpenLayers.Class(OpenLayers.Geometry.Curve, { initialize: function(points) {
    OpenLayers.Geometry.Curve.prototype.initialize.apply(this, arguments);
}, removeComponent: function(point) {
    if (this.components && (this.components.length > 2)) {
        OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this, arguments);
    } 
}, intersects: function(geometry) {
    var intersect = false;
    var type = geometry.CLASS_NAME;
    if (type == "OpenLayers.Geometry.LineString" || type == "OpenLayers.Geometry.LinearRing" || type == "OpenLayers.Geometry.Point") {
        var segs1 = this.getSortedSegments();
        var segs2;
        if (type == "OpenLayers.Geometry.Point") {
            segs2 = [{ x1: geometry.x, y1: geometry.y, x2: geometry.x, y2: geometry.y}];
        } else {
            segs2 = geometry.getSortedSegments();
        }
        var seg1, seg1x1, seg1x2, seg1y1, seg1y2, seg2, seg2y1, seg2y2;
        outer: for (var i = 0, len = segs1.length;
i < len;
++i) {
            seg1 = segs1[i];
            seg1x1 = seg1.x1;
            seg1x2 = seg1.x2;
            seg1y1 = seg1.y1;
            seg1y2 = seg1.y2;
            inner: for (var j = 0, jlen = segs2.length;
j < jlen;
++j) {
                seg2 = segs2[j];
                if (seg2.x1 > seg1x2) {
                    break;
                }
                if (seg2.x2 < seg1x1) {
                    continue;
                }
                seg2y1 = seg2.y1;
                seg2y2 = seg2.y2;
                if (Math.min(seg2y1, seg2y2) > Math.max(seg1y1, seg1y2)) {
                    continue;
                }
                if (Math.max(seg2y1, seg2y2) < Math.min(seg1y1, seg1y2)) {
                    continue;
                }
                if (OpenLayers.Geometry.segmentsIntersect(seg1, seg2)) {
                    intersect = true;
                    break outer;
                } 
            } 
        } 
    } else {
        intersect = geometry.intersects(this);
    }
    return intersect;
}, getSortedSegments: function() {
    var numSeg = this.components.length - 1;
    var segments = new Array(numSeg);
    for (var i = 0;
i < numSeg;
++i) {
        point1 = this.components[i];
        point2 = this.components[i + 1];
        if (point1.x < point2.x) {
            segments[i] = { x1: point1.x, y1: point1.y, x2: point2.x, y2: point2.y };
        } else {
            segments[i] = { x1: point2.x, y1: point2.y, x2: point1.x, y2: point1.y };
        } 
    }
    function byX1(seg1, seg2) {
        return seg1.x1 - seg2.x1;
    }
    return segments.sort(byX1);
}, CLASS_NAME: "OpenLayers.Geometry.LineString"
});
OpenLayers.Format.GML = OpenLayers.Class(OpenLayers.Format.XML, { featureNS: "http://mapserver.gis.umn.edu/mapserver", featurePrefix: "feature", featureName: "featureMember", layerName: "features", geometryName: "geometry", collectionName: "FeatureCollection", gmlns: "http://www.opengis.net/gml", extractAttributes: true, xy: true, initialize: function(options) {
    this.regExes = { trimSpace: (/^\s*|\s*$/g), removeSpace: (/\s*/g), splitSpace: (/\s+/), trimComma: (/\s*,\s*/g) };
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, read: function(data) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    var featureNodes = this.getElementsByTagNameNS(data.documentElement, this.gmlns, this.featureName);
    var features = [];
    for (var i = 0;
i < featureNodes.length;
i++) {
        var feature = this.parseFeature(featureNodes[i]);
        if (feature) {
            features.push(feature);
        } 
    }
    return features;
}, parseFeature: function(node) {
    var order = ["MultiPolygon", "Polygon", "MultiLineString", "LineString", "MultiPoint", "Point", "Envelope", "Box"];
    var type, nodeList, geometry, parser;
    for (var i = 0;
i < order.length;
++i) {
        type = order[i];
        nodeList = this.getElementsByTagNameNS(node, this.gmlns, type);
        if (nodeList.length > 0) {
            var parser = this.parseGeometry[type.toLowerCase()];
            if (parser) {
                geometry = parser.apply(this, [nodeList[0]]);
                if (this.internalProjection && this.externalProjection) {
                    geometry.transform(this.externalProjection, this.internalProjection);
                } 
            } else {
                OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType", { 'geomType': type }));
            }
            break;
        } 
    }
    var attributes;
    if (this.extractAttributes) {
        attributes = this.parseAttributes(node);
    }
    var feature = new OpenLayers.Feature.Vector(geometry, attributes);
    feature.gml = { featureType: node.firstChild.nodeName.split(":")[1], featureNS: node.firstChild.namespaceURI, featureNSPrefix: node.firstChild.prefix };
    var childNode = node.firstChild;
    var fid;
    while (childNode) {
        if (childNode.nodeType == 1) {
            fid = childNode.getAttribute("fid") || childNode.getAttribute("id");
            if (fid) {
                break;
            } 
        }
        childNode = childNode.nextSibling;
    }
    feature.fid = fid;
    return feature;
}, parseGeometry: { point: function(node) {
    var nodeList, coordString;
    var coords = [];
    var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "pos");
    if (nodeList.length > 0) {
        coordString = nodeList[0].firstChild.nodeValue;
        coordString = coordString.replace(this.regExes.trimSpace, "");
        coords = coordString.split(this.regExes.splitSpace);
    }
    if (coords.length == 0) {
        nodeList = this.getElementsByTagNameNS(node, this.gmlns, "coordinates");
        if (nodeList.length > 0) {
            coordString = nodeList[0].firstChild.nodeValue;
            coordString = coordString.replace(this.regExes.removeSpace, "");
            coords = coordString.split(",");
        } 
    }
    if (coords.length == 0) {
        nodeList = this.getElementsByTagNameNS(node, this.gmlns, "coord");
        if (nodeList.length > 0) {
            var xList = this.getElementsByTagNameNS(nodeList[0], this.gmlns, "X");
            var yList = this.getElementsByTagNameNS(nodeList[0], this.gmlns, "Y");
            if (xList.length > 0 && yList.length > 0) {
                coords = [xList[0].firstChild.nodeValue, yList[0].firstChild.nodeValue];
            } 
        } 
    }
    if (coords.length == 2) {
        coords[2] = null;
    }
    if (this.xy) {
        return new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
    }
    else {
        return new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
    } 
}, multipoint: function(node) {
    var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "Point");
    var components = [];
    if (nodeList.length > 0) {
        var point;
        for (var i = 0;
i < nodeList.length;
++i) {
            point = this.parseGeometry.point.apply(this, [nodeList[i]]);
            if (point) {
                components.push(point);
            } 
        } 
    }
    return new OpenLayers.Geometry.MultiPoint(components);
}, linestring: function(node, ring) {
    var nodeList, coordString;
    var coords = [];
    var points = [];
    nodeList = this.getElementsByTagNameNS(node, this.gmlns, "posList");
    if (nodeList.length > 0) {
        coordString = this.concatChildValues(nodeList[0]);
        coordString = coordString.replace(this.regExes.trimSpace, "");
        coords = coordString.split(this.regExes.splitSpace);
        var dim = parseInt(nodeList[0].getAttribute("dimension"));
        var j, x, y, z;
        for (var i = 0;
i < coords.length / dim;
++i) {
            j = i * dim;
            x = coords[j];
            y = coords[j + 1];
            z = (dim == 2) ? null : coords[j + 2];
            if (this.xy) {
                points.push(new OpenLayers.Geometry.Point(x, y, z));
            } else {
                points.push(new OpenLayers.Geometry.Point(y, x, z));
            } 
        } 
    }
    if (coords.length == 0) {
        nodeList = this.getElementsByTagNameNS(node, this.gmlns, "coordinates");
        if (nodeList.length > 0) {
            coordString = this.concatChildValues(nodeList[0]);
            coordString = coordString.replace(this.regExes.trimSpace, "");
            coordString = coordString.replace(this.regExes.trimComma, ",");
            var pointList = coordString.split(this.regExes.splitSpace);
            for (var i = 0;
i < pointList.length;
++i) {
                coords = pointList[i].split(",");
                if (coords.length == 2) {
                    coords[2] = null;
                }
                if (this.xy) {
                    points.push(new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]));
                } else {
                    points.push(new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]));
                } 
            } 
        } 
    }
    var line = null;
    if (points.length != 0) {
        if (ring) {
            line = new OpenLayers.Geometry.LinearRing(points);
        } else {
            line = new OpenLayers.Geometry.LineString(points);
        } 
    }
    return line;
}, multilinestring: function(node) {
    var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "LineString");
    var components = [];
    if (nodeList.length > 0) {
        var line;
        for (var i = 0;
i < nodeList.length;
++i) {
            line = this.parseGeometry.linestring.apply(this, [nodeList[i]]);
            if (line) {
                components.push(line);
            } 
        } 
    }
    return new OpenLayers.Geometry.MultiLineString(components);
}, polygon: function(node) {
    var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "LinearRing");
    var components = [];
    if (nodeList.length > 0) {
        var ring;
        for (var i = 0;
i < nodeList.length;
++i) {
            ring = this.parseGeometry.linestring.apply(this, [nodeList[i], true]);
            if (ring) {
                components.push(ring);
            } 
        } 
    }
    return new OpenLayers.Geometry.Polygon(components);
}, multipolygon: function(node) {
    var nodeList = this.getElementsByTagNameNS(node, this.gmlns, "Polygon");
    var components = [];
    if (nodeList.length > 0) {
        var polygon;
        for (var i = 0;
i < nodeList.length;
++i) {
            polygon = this.parseGeometry.polygon.apply(this, [nodeList[i]]);
            if (polygon) {
                components.push(polygon);
            } 
        } 
    }
    return new OpenLayers.Geometry.MultiPolygon(components);
}, envelope: function(node) {
    var components = [];
    var coordString;
    var envelope;
    var lpoint = this.getElementsByTagNameNS(node, this.gmlns, "lowerCorner");
    if (lpoint.length > 0) {
        var coords = [];
        if (lpoint.length > 0) {
            coordString = lpoint[0].firstChild.nodeValue;
            coordString = coordString.replace(this.regExes.trimSpace, "");
            coords = coordString.split(this.regExes.splitSpace);
        }
        if (coords.length == 2) {
            coords[2] = null;
        }
        if (this.xy) {
            var lowerPoint = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
        } else {
            var lowerPoint = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
        } 
    }
    var upoint = this.getElementsByTagNameNS(node, this.gmlns, "upperCorner");
    if (upoint.length > 0) {
        var coords = [];
        if (upoint.length > 0) {
            coordString = upoint[0].firstChild.nodeValue;
            coordString = coordString.replace(this.regExes.trimSpace, "");
            coords = coordString.split(this.regExes.splitSpace);
        }
        if (coords.length == 2) {
            coords[2] = null;
        }
        if (this.xy) {
            var upperPoint = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
        } else {
            var upperPoint = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
        } 
    }
    if (lowerPoint && upperPoint) {
        components.push(new OpenLayers.Geometry.Point(lowerPoint.x, lowerPoint.y));
        components.push(new OpenLayers.Geometry.Point(upperPoint.x, lowerPoint.y));
        components.push(new OpenLayers.Geometry.Point(upperPoint.x, upperPoint.y));
        components.push(new OpenLayers.Geometry.Point(lowerPoint.x, upperPoint.y));
        components.push(new OpenLayers.Geometry.Point(lowerPoint.x, lowerPoint.y));
        var ring = new OpenLayers.Geometry.LinearRing(components);
        envelope = new OpenLayers.Geometry.Polygon([ring]);
    }
    return envelope;
} 
}, parseAttributes: function(node) {
    var attributes = {};
    var childNode = node.firstChild;
    var children, i, child, grandchildren, grandchild, name, value;
    while (childNode) {
        if (childNode.nodeType == 1) {
            children = childNode.childNodes;
            for (i = 0;
i < children.length;
++i) {
                child = children[i];
                if (child.nodeType == 1) {
                    grandchildren = child.childNodes;
                    if (grandchildren.length == 1) {
                        grandchild = grandchildren[0];
                        if (grandchild.nodeType == 3 || grandchild.nodeType == 4) {
                            name = (child.prefix) ? child.nodeName.split(":")[1] : child.nodeName;
                            value = grandchild.nodeValue.replace(this.regExes.trimSpace, "");
                            attributes[name] = value;
                        } 
                    } 
                } 
            }
            break;
        }
        childNode = childNode.nextSibling;
    }
    return attributes;
}, write: function(features) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    var gml = this.createElementNS("http://www.opengis.net/wfs", "wfs:" + this.collectionName);
    for (var i = 0;
i < features.length;
i++) {
        gml.appendChild(this.createFeatureXML(features[i]));
    }
    return OpenLayers.Format.XML.prototype.write.apply(this, [gml]);
}, createFeatureXML: function(feature) {
    var geometry = feature.geometry;
    var geometryNode = this.buildGeometryNode(geometry);
    var geomContainer = this.createElementNS(this.featureNS, this.featurePrefix + ":" +
this.geometryName);
    geomContainer.appendChild(geometryNode);
    var featureNode = this.createElementNS(this.gmlns, "gml:" + this.featureName);
    var featureContainer = this.createElementNS(this.featureNS, this.featurePrefix + ":" +
this.layerName);
    var fid = feature.fid || feature.id;
    featureContainer.setAttribute("fid", fid);
    featureContainer.appendChild(geomContainer);
    for (var attr in feature.attributes) {
        var attrText = this.createTextNode(feature.attributes[attr]);
        var nodename = attr.substring(attr.lastIndexOf(":") + 1);
        var attrContainer = this.createElementNS(this.featureNS, this.featurePrefix + ":" +
nodename);
        attrContainer.appendChild(attrText);
        featureContainer.appendChild(attrContainer);
    }
    featureNode.appendChild(featureContainer);
    return featureNode;
}, buildGeometryNode: function(geometry) {
    if (this.externalProjection && this.internalProjection) {
        geometry = geometry.clone();
        geometry.transform(this.internalProjection, this.externalProjection);
    }
    var className = geometry.CLASS_NAME;
    var type = className.substring(className.lastIndexOf(".") + 1);
    var builder = this.buildGeometry[type.toLowerCase()];
    return builder.apply(this, [geometry]);
}, buildGeometry: { point: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:Point");
    gml.appendChild(this.buildCoordinatesNode(geometry));
    return gml;
}, multipoint: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:MultiPoint");
    var points = geometry.components;
    var pointMember, pointGeom;
    for (var i = 0;
i < points.length;
i++) {
        pointMember = this.createElementNS(this.gmlns, "gml:pointMember");
        pointGeom = this.buildGeometry.point.apply(this, [points[i]]);
        pointMember.appendChild(pointGeom);
        gml.appendChild(pointMember);
    }
    return gml;
}, linestring: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:LineString");
    gml.appendChild(this.buildCoordinatesNode(geometry));
    return gml;
}, multilinestring: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:MultiLineString");
    var lines = geometry.components;
    var lineMember, lineGeom;
    for (var i = 0;
i < lines.length;
++i) {
        lineMember = this.createElementNS(this.gmlns, "gml:lineStringMember");
        lineGeom = this.buildGeometry.linestring.apply(this, [lines[i]]);
        lineMember.appendChild(lineGeom);
        gml.appendChild(lineMember);
    }
    return gml;
}, linearring: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:LinearRing");
    gml.appendChild(this.buildCoordinatesNode(geometry));
    return gml;
}, polygon: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:Polygon");
    var rings = geometry.components;
    var ringMember, ringGeom, type;
    for (var i = 0;
i < rings.length;
++i) {
        type = (i == 0) ? "outerBoundaryIs" : "innerBoundaryIs";
        ringMember = this.createElementNS(this.gmlns, "gml:" + type);
        ringGeom = this.buildGeometry.linearring.apply(this, [rings[i]]);
        ringMember.appendChild(ringGeom);
        gml.appendChild(ringMember);
    }
    return gml;
}, multipolygon: function(geometry) {
    var gml = this.createElementNS(this.gmlns, "gml:MultiPolygon");
    var polys = geometry.components;
    var polyMember, polyGeom;
    for (var i = 0;
i < polys.length;
++i) {
        polyMember = this.createElementNS(this.gmlns, "gml:polygonMember");
        polyGeom = this.buildGeometry.polygon.apply(this, [polys[i]]);
        polyMember.appendChild(polyGeom);
        gml.appendChild(polyMember);
    }
    return gml;
}, bounds: function(bounds) {
    var gml = this.createElementNS(this.gmlns, "gml:Box");
    gml.appendChild(this.buildCoordinatesNode(bounds));
    return gml;
} 
}, buildCoordinatesNode: function(geometry) {
    var coordinatesNode = this.createElementNS(this.gmlns, "gml:coordinates");
    coordinatesNode.setAttribute("decimal", ".");
    coordinatesNode.setAttribute("cs", ",");
    coordinatesNode.setAttribute("ts", " ");
    var parts = [];
    if (geometry instanceof OpenLayers.Bounds) {
        parts.push(geometry.left + "," + geometry.bottom);
        parts.push(geometry.right + "," + geometry.top);
    } else {
        var points = (geometry.components) ? geometry.components : [geometry];
        for (var i = 0;
i < points.length;
i++) {
            parts.push(points[i].x + "," + points[i].y);
        } 
    }
    var txtNode = this.createTextNode(parts.join(" "));
    coordinatesNode.appendChild(txtNode);
    return coordinatesNode;
}, CLASS_NAME: "OpenLayers.Format.GML"
});
OpenLayers.Format.GPX = OpenLayers.Class(OpenLayers.Format.XML, { extractWaypoints: true, extractTracks: true, extractRoutes: true, extractAttributes: true, initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, read: function(doc) {
    if (typeof doc == "string") {
        doc = OpenLayers.Format.XML.prototype.read.apply(this, [doc]);
    }
    var features = [];
    if (this.extractWaypoints) {
        var waypoints = doc.getElementsByTagName("wpt");
        for (var l = 0, len = waypoints.length;
l < len;
l++) {
            var attrs = {};
            if (this.extractAttributes) {
                attrs = this.parseAttributes(waypoints[l]);
            }
            var wpt = new OpenLayers.Geometry.Point(waypoints[l].getAttribute("lon"), waypoints[l].getAttribute("lat"));
            features.push(new OpenLayers.Feature.Vector(wpt, attrs));
        } 
    }
    if (this.extractTracks) {
        var tracks = doc.getElementsByTagName("trk");
        for (var i = 0, len = tracks.length;
i < len;
i++) {
            var attrs = {};
            if (this.extractAttributes) {
                attrs = this.parseAttributes(tracks[i]);
            }
            var segs = this.getElementsByTagNameNS(tracks[i], tracks[i].namespaceURI, "trkseg");
            for (var j = 0, seglen = segs.length;
j < seglen;
j++) {
                var track = this.extractSegment(segs[j], "trkpt");
                features.push(new OpenLayers.Feature.Vector(track, attrs));
            } 
        } 
    }
    if (this.extractRoutes) {
        var routes = doc.getElementsByTagName("rte");
        for (var k = 0, klen = routes.length;
k < klen;
k++) {
            var attrs = {};
            if (this.extractAttributes) {
                attrs = this.parseAttributes(routes[k]);
            }
            var route = this.extractSegment(routes[k], "rtept");
            features.push(new OpenLayers.Feature.Vector(route, attrs));
        } 
    }
    if (this.internalProjection && this.externalProjection) {
        for (var g = 0, featLength = features.length;
g < featLength;
g++) {
            features[g].geometry.transform(this.externalProjection, this.internalProjection);
        } 
    }
    return features;
}, extractSegment: function(segment, segmentType) {
    var points = this.getElementsByTagNameNS(segment, segment.namespaceURI, segmentType);
    var point_features = [];
    for (var i = 0, len = points.length;
i < len;
i++) {
        point_features.push(new OpenLayers.Geometry.Point(points[i].getAttribute("lon"), points[i].getAttribute("lat")));
    }
    return new OpenLayers.Geometry.LineString(point_features);
}, parseAttributes: function(node) {
    var attributes = {};
    var attrNode = node.firstChild;
    while (attrNode) {
        if (attrNode.nodeType == 1) {
            var value = attrNode.firstChild;
            if (value.nodeType == 3 || value.nodeType == 4) {
                name = (attrNode.prefix) ? attrNode.nodeName.split(":")[1] : attrNode.nodeName;
                attributes[name] = value.nodeValue;
            } 
        }
        attrNode = attrNode.nextSibling;
    }
    return attributes;
}, CLASS_NAME: "OpenLayers.Format.GPX"
});
OpenLayers.Format.GeoJSON = OpenLayers.Class(OpenLayers.Format.JSON, { initialize: function(options) {
    OpenLayers.Format.JSON.prototype.initialize.apply(this, [options]);
}, read: function(json, type, filter) {
    type = (type) ? type : "FeatureCollection";
    var results = null;
    var obj = null;
    if (typeof json == "string") {
        obj = OpenLayers.Format.JSON.prototype.read.apply(this, [json, filter]);
    } else {
        obj = json;
    }
    if (!obj) {
        OpenLayers.Console.error("Bad JSON: " + json);
    } else if (typeof (obj.type) != "string") {
        OpenLayers.Console.error("Bad GeoJSON - no type: " + json);
    } else if (this.isValidType(obj, type)) {
        switch (type) {
            case "Geometry": try {
                    results = this.parseGeometry(obj);
                } catch (err) {
                    OpenLayers.Console.error(err);
                }
                break;
            case "Feature": try {
                    results = this.parseFeature(obj);
                    results.type = "Feature";
                } catch (err) {
                    OpenLayers.Console.error(err);
                }
                break;
            case "FeatureCollection": results = [];
                switch (obj.type) {
                    case "Feature": try {
                            results.push(this.parseFeature(obj));
                        } catch (err) {
                            results = null;
                            OpenLayers.Console.error(err);
                        }
                        break;
                    case "FeatureCollection": for (var i = 0, len = obj.features.length;
i < len;
++i) {
                            try {
                                results.push(this.parseFeature(obj.features[i]));
                            } catch (err) {
                                results = null;
                                OpenLayers.Console.error(err);
                            } 
                        }
                        break;
                    default: try {
                            var geom = this.parseGeometry(obj);
                            results.push(new OpenLayers.Feature.Vector(geom));
                        } catch (err) {
                            results = null;
                            OpenLayers.Console.error(err);
                        } 
                }
                break;
        } 
    }
    return results;
}, isValidType: function(obj, type) {
    var valid = false;
    switch (type) {
        case "Geometry": if (OpenLayers.Util.indexOf(["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "Box", "GeometryCollection"], obj.type) == -1) {
                OpenLayers.Console.error("Unsupported geometry type: " +
obj.type);
            } else {
                valid = true;
            }
            break;
        case "FeatureCollection": valid = true;
            break;
        default: if (obj.type == type) {
                valid = true;
            } else {
                OpenLayers.Console.error("Cannot convert types from " +
obj.type + " to " + type);
            } 
    }
    return valid;
}, parseFeature: function(obj) {
    var feature, geometry, attributes;
    attributes = (obj.properties) ? obj.properties : {};
    try {
        geometry = this.parseGeometry(obj.geometry);
    } catch (err) {
        throw err;
    }
    feature = new OpenLayers.Feature.Vector(geometry, attributes);
    if (obj.id) {
        feature.fid = obj.id;
    }
    return feature;
}, parseGeometry: function(obj) {
    if (obj == null) {
        return null;
    }
    var geometry;
    if (obj.type == "GeometryCollection") {
        if (!(obj.geometries instanceof Array)) {
            throw "GeometryCollection must have geometries array: " + obj;
        }
        var numGeom = obj.geometries.length;
        var components = new Array(numGeom);
        for (var i = 0;
i < numGeom;
++i) {
            components[i] = this.parseGeometry.apply(this, [obj.geometries[i]]);
        }
        geometry = new OpenLayers.Geometry.Collection(components);
    } else {
        if (!(obj.coordinates instanceof Array)) {
            throw "Geometry must have coordinates array: " + obj;
        }
        if (!this.parseCoords[obj.type.toLowerCase()]) {
            throw "Unsupported geometry type: " + obj.type;
        }
        try {
            geometry = this.parseCoords[obj.type.toLowerCase()].apply(this, [obj.coordinates]);
        } catch (err) {
            throw err;
        } 
    }
    if (this.internalProjection && this.externalProjection) {
        geometry.transform(this.externalProjection, this.internalProjection);
    }
    return geometry;
}, parseCoords: { "point": function(array) {
    if (array.length != 2) {
        throw "Only 2D points are supported: " + array;
    }
    return new OpenLayers.Geometry.Point(array[0], array[1]);
}, "multipoint": function(array) {
    var points = [];
    var p = null;
    for (var i = 0, len = array.length;
i < len;
++i) {
        try {
            p = this.parseCoords["point"].apply(this, [array[i]]);
        } catch (err) {
            throw err;
        }
        points.push(p);
    }
    return new OpenLayers.Geometry.MultiPoint(points);
}, "linestring": function(array) {
    var points = [];
    var p = null;
    for (var i = 0, len = array.length;
i < len;
++i) {
        try {
            p = this.parseCoords["point"].apply(this, [array[i]]);
        } catch (err) {
            throw err;
        }
        points.push(p);
    }
    return new OpenLayers.Geometry.LineString(points);
}, "multilinestring": function(array) {
    var lines = [];
    var l = null;
    for (var i = 0, len = array.length;
i < len;
++i) {
        try {
            l = this.parseCoords["linestring"].apply(this, [array[i]]);
        } catch (err) {
            throw err;
        }
        lines.push(l);
    }
    return new OpenLayers.Geometry.MultiLineString(lines);
}, "polygon": function(array) {
    var rings = [];
    var r, l;
    for (var i = 0, len = array.length;
i < len;
++i) {
        try {
            l = this.parseCoords["linestring"].apply(this, [array[i]]);
        } catch (err) {
            throw err;
        }
        r = new OpenLayers.Geometry.LinearRing(l.components);
        rings.push(r);
    }
    return new OpenLayers.Geometry.Polygon(rings);
}, "multipolygon": function(array) {
    var polys = [];
    var p = null;
    for (var i = 0, len = array.length;
i < len;
++i) {
        try {
            p = this.parseCoords["polygon"].apply(this, [array[i]]);
        } catch (err) {
            throw err;
        }
        polys.push(p);
    }
    return new OpenLayers.Geometry.MultiPolygon(polys);
}, "box": function(array) {
    if (array.length != 2) {
        throw "GeoJSON box coordinates must have 2 elements";
    }
    return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(array[0][0], array[0][1]), new OpenLayers.Geometry.Point(array[1][0], array[0][1]), new OpenLayers.Geometry.Point(array[1][0], array[1][1]), new OpenLayers.Geometry.Point(array[0][0], array[1][1]), new OpenLayers.Geometry.Point(array[0][0], array[0][1])])]);
} 
}, write: function(obj, pretty) {
    var geojson = { "type": null };
    if (obj instanceof Array) {
        geojson.type = "FeatureCollection";
        var numFeatures = obj.length;
        geojson.features = new Array(numFeatures);
        for (var i = 0;
i < numFeatures;
++i) {
            var element = obj[i];
            if (!element instanceof OpenLayers.Feature.Vector) {
                var msg = "FeatureCollection only supports collections " + "of features: " + element;
                throw msg;
            }
            geojson.features[i] = this.extract.feature.apply(this, [element]);
        } 
    } else if (obj.CLASS_NAME.indexOf("OpenLayers.Geometry") == 0) {
        geojson = this.extract.geometry.apply(this, [obj]);
    } else if (obj instanceof OpenLayers.Feature.Vector) {
        geojson = this.extract.feature.apply(this, [obj]);
        if (obj.layer && obj.layer.projection) {
            geojson.crs = this.createCRSObject(obj);
        } 
    }
    return OpenLayers.Format.JSON.prototype.write.apply(this, [geojson, pretty]);
}, createCRSObject: function(object) {
    var proj = object.layer.projection.toString();
    var crs = {};
    if (proj.match(/epsg:/i)) {
        var code = parseInt(proj.substring(proj.indexOf(":") + 1));
        if (code == 4326) {
            crs = { "type": "OGC", "properties": { "urn": "urn:ogc:def:crs:OGC:1.3:CRS84"} };
        } else {
            crs = { "type": "EPSG", "properties": { "code": code} };
        } 
    }
    return crs;
}, extract: { 'feature': function(feature) {
    var geom = this.extract.geometry.apply(this, [feature.geometry]);
    return { "type": "Feature", "id": feature.fid == null ? feature.id : feature.fid, "properties": feature.attributes, "geometry": geom };
}, 'geometry': function(geometry) {
    if (geometry == null) {
        return null;
    }
    if (this.internalProjection && this.externalProjection) {
        geometry = geometry.clone();
        geometry.transform(this.internalProjection, this.externalProjection);
    }
    var geometryType = geometry.CLASS_NAME.split('.')[2];
    var data = this.extract[geometryType.toLowerCase()].apply(this, [geometry]);
    var json;
    if (geometryType == "Collection") {
        json = { "type": "GeometryCollection", "geometries": data };
    } else {
        json = { "type": geometryType, "coordinates": data };
    }
    return json;
}, 'point': function(point) {
    return [point.x, point.y];
}, 'multipoint': function(multipoint) {
    var array = [];
    for (var i = 0, len = multipoint.components.length;
i < len;
++i) {
        array.push(this.extract.point.apply(this, [multipoint.components[i]]));
    }
    return array;
}, 'linestring': function(linestring) {
    var array = [];
    for (var i = 0, len = linestring.components.length;
i < len;
++i) {
        array.push(this.extract.point.apply(this, [linestring.components[i]]));
    }
    return array;
}, 'multilinestring': function(multilinestring) {
    var array = [];
    for (var i = 0, len = multilinestring.components.length;
i < len;
++i) {
        array.push(this.extract.linestring.apply(this, [multilinestring.components[i]]));
    }
    return array;
}, 'polygon': function(polygon) {
    var array = [];
    for (var i = 0, len = polygon.components.length;
i < len;
++i) {
        array.push(this.extract.linestring.apply(this, [polygon.components[i]]));
    }
    return array;
}, 'multipolygon': function(multipolygon) {
    var array = [];
    for (var i = 0, len = multipolygon.components.length;
i < len;
++i) {
        array.push(this.extract.polygon.apply(this, [multipolygon.components[i]]));
    }
    return array;
}, 'collection': function(collection) {
    var len = collection.components.length;
    var array = new Array(len);
    for (var i = 0;
i < len;
++i) {
        array[i] = this.extract.geometry.apply(this, [collection.components[i]]);
    }
    return array;
} 
}, CLASS_NAME: "OpenLayers.Format.GeoJSON"
});
OpenLayers.Format.GeoRSS = OpenLayers.Class(OpenLayers.Format.XML, { rssns: "http://backend.userland.com/rss2", featureNS: "http://mapserver.gis.umn.edu/mapserver", georssns: "http://www.georss.org/georss", geons: "http://www.w3.org/2003/01/geo/wgs84_pos#", featureTitle: "Untitled", featureDescription: "No Description", gmlParser: null, xy: false, initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, createGeometryFromItem: function(item) {
    var point = this.getElementsByTagNameNS(item, this.georssns, "point");
    var lat = this.getElementsByTagNameNS(item, this.geons, 'lat');
    var lon = this.getElementsByTagNameNS(item, this.geons, 'long');
    var line = this.getElementsByTagNameNS(item, this.georssns, "line");
    var polygon = this.getElementsByTagNameNS(item, this.georssns, "polygon");
    var where = this.getElementsByTagNameNS(item, this.georssns, "where");
    if (point.length > 0 || (lat.length > 0 && lon.length > 0)) {
        var location;
        if (point.length > 0) {
            location = OpenLayers.String.trim(point[0].firstChild.nodeValue).split(/\s+/);
            if (location.length != 2) {
                location = OpenLayers.String.trim(point[0].firstChild.nodeValue).split(/\s*,\s*/);
            } 
        } else {
            location = [parseFloat(lat[0].firstChild.nodeValue), parseFloat(lon[0].firstChild.nodeValue)];
        }
        var geometry = new OpenLayers.Geometry.Point(parseFloat(location[1]), parseFloat(location[0]));
    } else if (line.length > 0) {
        var coords = OpenLayers.String.trim(this.concatChildValues(line[0])).split(/\s+/);
        var components = [];
        var point;
        for (var i = 0, len = coords.length;
i < len;
i += 2) {
            point = new OpenLayers.Geometry.Point(parseFloat(coords[i + 1]), parseFloat(coords[i]));
            components.push(point);
        }
        geometry = new OpenLayers.Geometry.LineString(components);
    } else if (polygon.length > 0) {
        var coords = OpenLayers.String.trim(this.concatChildValues(polygon[0])).split(/\s+/);
        var components = [];
        var point;
        for (var i = 0, len = coords.length;
i < len;
i += 2) {
            point = new OpenLayers.Geometry.Point(parseFloat(coords[i + 1]), parseFloat(coords[i]));
            components.push(point);
        }
        geometry = new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(components)]);
    } else if (where.length > 0) {
        if (!this.gmlParser) {
            this.gmlParser = new OpenLayers.Format.GML({ 'xy': this.xy });
        }
        var feature = this.gmlParser.parseFeature(where[0]);
        geometry = feature.geometry;
    }
    if (geometry && this.internalProjection && this.externalProjection) {
        geometry.transform(this.externalProjection, this.internalProjection);
    }
    return geometry;
}, createFeatureFromItem: function(item) {
    var geometry = this.createGeometryFromItem(item);
    var title = this.getChildValue(item, "*", "title", this.featureTitle);
    var description = this.getChildValue(item, "*", "description", this.getChildValue(item, "*", "content", this.featureDescription));
    var link = this.getChildValue(item, "*", "link");
    if (!link) {
        try {
            link = this.getElementsByTagNameNS(item, "*", "link")[0].getAttribute("href");
        } catch (e) {
            link = null;
        } 
    }
    var id = this.getChildValue(item, "*", "id", null);
    var data = { "title": title, "description": description, "link": link };
    var feature = new OpenLayers.Feature.Vector(geometry, data);
    feature.fid = id;
    return feature;
}, getChildValue: function(node, nsuri, name, def) {
    var value;
    var eles = this.getElementsByTagNameNS(node, nsuri, name);
    if (eles && eles[0] && eles[0].firstChild && eles[0].firstChild.nodeValue) {
        value = eles[0].firstChild.nodeValue;
    } else {
        value = (def == undefined) ? "" : def;
    }
    return value;
}, read: function(doc) {
    if (typeof doc == "string") {
        doc = OpenLayers.Format.XML.prototype.read.apply(this, [doc]);
    }
    var itemlist = null;
    itemlist = this.getElementsByTagNameNS(doc, '*', 'item');
    if (itemlist.length == 0) {
        itemlist = this.getElementsByTagNameNS(doc, '*', 'entry');
    }
    var numItems = itemlist.length;
    var features = new Array(numItems);
    for (var i = 0;
i < numItems;
i++) {
        features[i] = this.createFeatureFromItem(itemlist[i]);
    }
    return features;
}, write: function(features) {
    var georss;
    if (features instanceof Array) {
        georss = this.createElementNS(this.rssns, "rss");
        for (var i = 0, len = features.length;
i < len;
i++) {
            georss.appendChild(this.createFeatureXML(features[i]));
        } 
    } else {
        georss = this.createFeatureXML(features);
    }
    return OpenLayers.Format.XML.prototype.write.apply(this, [georss]);
}, createFeatureXML: function(feature) {
    var geometryNode = this.buildGeometryNode(feature.geometry);
    var featureNode = this.createElementNS(this.rssns, "item");
    var titleNode = this.createElementNS(this.rssns, "title");
    titleNode.appendChild(this.createTextNode(feature.attributes.title ? feature.attributes.title : ""));
    var descNode = this.createElementNS(this.rssns, "description");
    descNode.appendChild(this.createTextNode(feature.attributes.description ? feature.attributes.description : ""));
    featureNode.appendChild(titleNode);
    featureNode.appendChild(descNode);
    if (feature.attributes.link) {
        var linkNode = this.createElementNS(this.rssns, "link");
        linkNode.appendChild(this.createTextNode(feature.attributes.link));
        featureNode.appendChild(linkNode);
    }
    for (var attr in feature.attributes) {
        if (attr == "link" || attr == "title" || attr == "description") {
            continue;
        }
        var attrText = this.createTextNode(feature.attributes[attr]);
        var nodename = attr;
        if (attr.search(":") != -1) {
            nodename = attr.split(":")[1];
        }
        var attrContainer = this.createElementNS(this.featureNS, "feature:" + nodename);
        attrContainer.appendChild(attrText);
        featureNode.appendChild(attrContainer);
    }
    featureNode.appendChild(geometryNode);
    return featureNode;
}, buildGeometryNode: function(geometry) {
    if (this.internalProjection && this.externalProjection) {
        geometry = geometry.clone();
        geometry.transform(this.internalProjection, this.externalProjection);
    }
    var node;
    if (geometry.CLASS_NAME == "OpenLayers.Geometry.Polygon") {
        node = this.createElementNS(this.georssns, 'georss:polygon');
        node.appendChild(this.buildCoordinatesNode(geometry.components[0]));
    }
    else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LineString") {
        node = this.createElementNS(this.georssns, 'georss:line');
        node.appendChild(this.buildCoordinatesNode(geometry));
    }
    else if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
        node = this.createElementNS(this.georssns, 'georss:point');
        node.appendChild(this.buildCoordinatesNode(geometry));
    } else {
        throw "Couldn't parse " + geometry.CLASS_NAME;
    }
    return node;
}, buildCoordinatesNode: function(geometry) {
    var points = null;
    if (geometry.components) {
        points = geometry.components;
    }
    var path;
    if (points) {
        var numPoints = points.length;
        var parts = new Array(numPoints);
        for (var i = 0;
i < numPoints;
i++) {
            parts[i] = points[i].y + " " + points[i].x;
        }
        path = parts.join(" ");
    } else {
        path = geometry.y + " " + geometry.x;
    }
    return this.createTextNode(path);
}, CLASS_NAME: "OpenLayers.Format.GeoRSS"
});
OpenLayers.Format.KML = OpenLayers.Class(OpenLayers.Format.XML, { kmlns: "http://earth.google.com/kml/2.0", placemarksDesc: "No description available", foldersName: "OpenLayers export", foldersDesc: "Exported on " + new Date(), extractAttributes: true, extractStyles: false, internalns: null, features: null, styles: null, styleBaseUrl: "", fetched: null, maxDepth: 0, initialize: function(options) {
    this.regExes = { trimSpace: (/^\s*|\s*$/g), removeSpace: (/\s*/g), splitSpace: (/\s+/), trimComma: (/\s*,\s*/g), kmlColor: (/(\w{2})(\w{2})(\w{2})(\w{2})/), kmlIconPalette: (/root:\/\/icons\/palette-(\d+)(\.\w+)/), straightBracket: (/\$\[(.*?)\]/g) };
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
}, read: function(data) {
    this.features = [];
    this.styles = {};
    this.fetched = {};
    var options = { depth: this.maxDepth, styleBaseUrl: this.styleBaseUrl };
    return this.parseData(data, options);
}, parseData: function(data, options) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    var types = ["Link", "NetworkLink", "Style", "StyleMap", "Placemark"];
    for (var i = 0, len = types.length;
i < len;
++i) {
        var type = types[i];
        var nodes = this.getElementsByTagNameNS(data, "*", type);
        if (nodes.length == 0) {
            continue;
        }
        switch (type.toLowerCase()) {
            case "link": case "networklink": this.parseLinks(nodes, options);
                break;
            case "style": if (this.extractStyles) {
                    this.parseStyles(nodes, options);
                }
                break;
            case "stylemap": if (this.extractStyles) {
                    this.parseStyleMaps(nodes, options);
                }
                break;
            case "placemark": this.parseFeatures(nodes, options);
                break;
        } 
    }
    return this.features;
}, parseLinks: function(nodes, options) {
    if (options.depth >= this.maxDepth) {
        return false;
    }
    var newOptions = OpenLayers.Util.extend({}, options);
    newOptions.depth++;
    for (var i = 0, len = nodes.length;
i < len;
i++) {
        var href = this.parseProperty(nodes[i], "*", "href");
        if (href && !this.fetched[href]) {
            this.fetched[href] = true;
            var data = this.fetchLink(href);
            if (data) {
                this.parseData(data, newOptions);
            } 
        } 
    } 
}, fetchLink: function(href) {
    var request = OpenLayers.Request.GET({ url: href, async: false });
    if (request) {
        return request.responseText;
    } 
}, parseStyles: function(nodes, options) {
    for (var i = 0, len = nodes.length;
i < len;
i++) {
        var style = this.parseStyle(nodes[i]);
        if (style) {
            styleName = (options.styleBaseUrl || "") + "#" + style.id;
            this.styles[styleName] = style;
        } 
    } 
}, parseStyle: function(node) {
    var style = {};
    var types = ["LineStyle", "PolyStyle", "IconStyle", "BalloonStyle"];
    var type, nodeList, geometry, parser;
    for (var i = 0, len = types.length;
i < len;
++i) {
        type = types[i];
        styleTypeNode = this.getElementsByTagNameNS(node, "*", type)[0];
        if (!styleTypeNode) {
            continue;
        }
        switch (type.toLowerCase()) {
            case "linestyle": var color = this.parseProperty(styleTypeNode, "*", "color");
                if (color) {
                    var matches = (color.toString()).match(this.regExes.kmlColor);
                    var alpha = matches[1];
                    style["strokeOpacity"] = parseInt(alpha, 16) / 255;
                    var b = matches[2];
                    var g = matches[3];
                    var r = matches[4];
                    style["strokeColor"] = "#" + r + g + b;
                }
                var width = this.parseProperty(styleTypeNode, "*", "width");
                if (width) {
                    style["strokeWidth"] = width;
                }
            case "polystyle": var color = this.parseProperty(styleTypeNode, "*", "color");
                if (color) {
                    var matches = (color.toString()).match(this.regExes.kmlColor);
                    var alpha = matches[1];
                    style["fillOpacity"] = parseInt(alpha, 16) / 255;
                    var b = matches[2];
                    var g = matches[3];
                    var r = matches[4];
                    style["fillColor"] = "#" + r + g + b;
                }
                break;
            case "iconstyle": var scale = parseFloat(this.parseProperty(styleTypeNode, "*", "scale") || 1);
                var width = 32 * scale;
                var height = 32 * scale;
                var iconNode = this.getElementsByTagNameNS(styleTypeNode, "*", "Icon")[0];
                if (iconNode) {
                    var href = this.parseProperty(iconNode, "*", "href");
                    if (href) {
                        var w = this.parseProperty(iconNode, "*", "w");
                        var h = this.parseProperty(iconNode, "*", "h");
                        var google = "http://maps.google.com/mapfiles/kml";
                        if (OpenLayers.String.startsWith(href, google) && !w && !h) {
                            w = 64;
                            h = 64;
                            scale = scale / 2;
                        }
                        w = w || h;
                        h = h || w;
                        if (w) {
                            width = parseInt(w) * scale;
                        }
                        if (h) {
                            height = parseInt(h) * scale;
                        }
                        var matches = href.match(this.regExes.kmlIconPalette);
                        if (matches) {
                            var palette = matches[1];
                            var file_extension = matches[2];
                            var x = this.parseProperty(iconNode, "*", "x");
                            var y = this.parseProperty(iconNode, "*", "y");
                            var posX = x ? x / 32 : 0;
                            var posY = y ? (7 - y / 32) : 7;
                            var pos = posY * 8 + posX;
                            href = "http://maps.google.com/mapfiles/kml/pal"
+ palette + "/icon" + pos + file_extension;
                        }
                        style["graphicOpacity"] = 1;
                        style["externalGraphic"] = href;
                    } 
                }
                var hotSpotNode = this.getElementsByTagNameNS(styleTypeNode, "*", "hotSpot")[0];
                if (hotSpotNode) {
                    var x = parseFloat(hotSpotNode.getAttribute("x"));
                    var y = parseFloat(hotSpotNode.getAttribute("y"));
                    var xUnits = hotSpotNode.getAttribute("xunits");
                    if (xUnits == "pixels") {
                        style["graphicXOffset"] = -x * scale;
                    }
                    else if (xUnits == "insetPixels") {
                        style["graphicXOffset"] = -width + (x * scale);
                    }
                    else if (xUnits == "fraction") {
                        style["graphicXOffset"] = -width * x;
                    }
                    var yUnits = hotSpotNode.getAttribute("yunits");
                    if (yUnits == "pixels") {
                        style["graphicYOffset"] = -height + (y * scale) + 1;
                    }
                    else if (yUnits == "insetPixels") {
                        style["graphicYOffset"] = -(y * scale) + 1;
                    }
                    else if (yUnits == "fraction") {
                        style["graphicYOffset"] = -height * (1 - y) + 1;
                    } 
                }
                style["graphicWidth"] = width;
                style["graphicHeight"] = height;
                break;
            case "balloonstyle": var balloonStyle = OpenLayers.Util.getXmlNodeValue(styleTypeNode);
                if (balloonStyle) {
                    style["balloonStyle"] = balloonStyle.replace(this.regExes.straightBracket, "${$1}");
                }
                break;
            default: 
        } 
    }
    if (!style["strokeColor"] && style["fillColor"]) {
        style["strokeColor"] = style["fillColor"];
    }
    var id = node.getAttribute("id");
    if (id && style) {
        style.id = id;
    }
    return style;
}, parseStyleMaps: function(nodes, options) {
    for (var i = 0, len = nodes.length;
i < len;
i++) {
        var node = nodes[i];
        var pairs = this.getElementsByTagNameNS(node, "*", "Pair");
        var id = node.getAttribute("id");
        for (var j = 0, jlen = pairs.length;
j < jlen;
j++) {
            var pair = pairs[j];
            var key = this.parseProperty(pair, "*", "key");
            var styleUrl = this.parseProperty(pair, "*", "styleUrl");
            if (styleUrl && key == "normal") {
                this.styles[(options.styleBaseUrl || "") + "#" + id] = this.styles[(options.styleBaseUrl || "") + styleUrl];
            }
            if (styleUrl && key == "highlight") { } 
        } 
    } 
}, parseFeatures: function(nodes, options) {
    var features = new Array(nodes.length);
    for (var i = 0, len = nodes.length;
i < len;
i++) {
        var featureNode = nodes[i];
        var feature = this.parseFeature.apply(this, [featureNode]);
        if (feature) {
            if (this.extractStyles && feature.attributes && feature.attributes.styleUrl) {
                feature.style = this.getStyle(feature.attributes.styleUrl);
            }
            if (this.extractStyles) {
                var inlineStyleNode = this.getElementsByTagNameNS(featureNode, "*", "Style")[0];
                if (inlineStyleNode) {
                    var inlineStyle = this.parseStyle(inlineStyleNode);
                    if (inlineStyle) {
                        feature.style = OpenLayers.Util.extend(feature.style, inlineStyle);
                    } 
                } 
            }
            features[i] = feature;
        } else {
            throw "Bad Placemark: " + i;
        } 
    }
    this.features = this.features.concat(features);
}, parseFeature: function(node) {
    var order = ["MultiGeometry", "Polygon", "LineString", "Point"];
    var type, nodeList, geometry, parser;
    for (var i = 0, len = order.length;
i < len;
++i) {
        type = order[i];
        this.internalns = node.namespaceURI ? node.namespaceURI : this.kmlns;
        nodeList = this.getElementsByTagNameNS(node, this.internalns, type);
        if (nodeList.length > 0) {
            var parser = this.parseGeometry[type.toLowerCase()];
            if (parser) {
                geometry = parser.apply(this, [nodeList[0]]);
                if (this.internalProjection && this.externalProjection) {
                    geometry.transform(this.externalProjection, this.internalProjection);
                } 
            } else {
                OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType", { 'geomType': type }));
            }
            break;
        } 
    }
    var attributes;
    if (this.extractAttributes) {
        attributes = this.parseAttributes(node);
    }
    var feature = new OpenLayers.Feature.Vector(geometry, attributes);
    var fid = node.getAttribute("id") || node.getAttribute("name");
    if (fid != null) {
        feature.fid = fid;
    }
    return feature;
}, getStyle: function(styleUrl, options) {
    var styleBaseUrl = OpenLayers.Util.removeTail(styleUrl);
    var newOptions = OpenLayers.Util.extend({}, options);
    newOptions.depth++;
    newOptions.styleBaseUrl = styleBaseUrl;
    if (!this.styles[styleUrl] && !OpenLayers.String.startsWith(styleUrl, "#") && newOptions.depth <= this.maxDepth && !this.fetched[styleBaseUrl]) {
        var data = this.fetchLink(styleBaseUrl);
        if (data) {
            this.parseData(data, newOptions);
        } 
    }
    var style = this.styles[styleUrl];
    return style;
}, parseGeometry: { point: function(node) {
    var nodeList = this.getElementsByTagNameNS(node, this.internalns, "coordinates");
    var coords = [];
    if (nodeList.length > 0) {
        var coordString = nodeList[0].firstChild.nodeValue;
        coordString = coordString.replace(this.regExes.removeSpace, "");
        coords = coordString.split(",");
    }
    var point = null;
    if (coords.length > 1) {
        if (coords.length == 2) {
            coords[2] = null;
        }
        point = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
    } else {
        throw "Bad coordinate string: " + coordString;
    }
    return point;
}, linestring: function(node, ring) {
    var nodeList = this.getElementsByTagNameNS(node, this.internalns, "coordinates");
    var line = null;
    if (nodeList.length > 0) {
        var coordString = this.concatChildValues(nodeList[0]);
        coordString = coordString.replace(this.regExes.trimSpace, "");
        coordString = coordString.replace(this.regExes.trimComma, ",");
        var pointList = coordString.split(this.regExes.splitSpace);
        var numPoints = pointList.length;
        var points = new Array(numPoints);
        var coords, numCoords;
        for (var i = 0;
i < numPoints;
++i) {
            coords = pointList[i].split(",");
            numCoords = coords.length;
            if (numCoords > 1) {
                if (coords.length == 2) {
                    coords[2] = null;
                }
                points[i] = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
            } else {
                throw "Bad LineString point coordinates: " +
pointList[i];
            } 
        }
        if (numPoints) {
            if (ring) {
                line = new OpenLayers.Geometry.LinearRing(points);
            } else {
                line = new OpenLayers.Geometry.LineString(points);
            } 
        } else {
            throw "Bad LineString coordinates: " + coordString;
        } 
    }
    return line;
}, polygon: function(node) {
    var nodeList = this.getElementsByTagNameNS(node, this.internalns, "LinearRing");
    var numRings = nodeList.length;
    var components = new Array(numRings);
    if (numRings > 0) {
        var ring;
        for (var i = 0, len = nodeList.length;
i < len;
++i) {
            ring = this.parseGeometry.linestring.apply(this, [nodeList[i], true]);
            if (ring) {
                components[i] = ring;
            } else {
                throw "Bad LinearRing geometry: " + i;
            } 
        } 
    }
    return new OpenLayers.Geometry.Polygon(components);
}, multigeometry: function(node) {
    var child, parser;
    var parts = [];
    var children = node.childNodes;
    for (var i = 0, len = children.length;
i < len;
++i) {
        child = children[i];
        if (child.nodeType == 1) {
            var type = (child.prefix) ? child.nodeName.split(":")[1] : child.nodeName;
            var parser = this.parseGeometry[type.toLowerCase()];
            if (parser) {
                parts.push(parser.apply(this, [child]));
            } 
        } 
    }
    return new OpenLayers.Geometry.Collection(parts);
} 
}, parseAttributes: function(node) {
    var attributes = {};
    var child, grandchildren, grandchild;
    var children = node.childNodes;
    for (var i = 0, len = children.length;
i < len;
++i) {
        child = children[i];
        if (child.nodeType == 1) {
            grandchildren = child.childNodes;
            if (grandchildren.length == 1 || grandchildren.length == 3) {
                var grandchild;
                switch (grandchildren.length) {
                    case 1: grandchild = grandchildren[0];
                        break;
                    case 3: default: grandchild = grandchildren[1];
                        break;
                }
                if (grandchild.nodeType == 3 || grandchild.nodeType == 4) {
                    var name = (child.prefix) ? child.nodeName.split(":")[1] : child.nodeName;
                    var value = OpenLayers.Util.getXmlNodeValue(grandchild);
                    if (value) {
                        value = value.replace(this.regExes.trimSpace, "");
                        attributes[name] = value;
                    } 
                } 
            } 
        } 
    }
    return attributes;
}, parseProperty: function(xmlNode, namespace, tagName) {
    var value;
    var nodeList = this.getElementsByTagNameNS(xmlNode, namespace, tagName);
    try {
        value = OpenLayers.Util.getXmlNodeValue(nodeList[0]);
    } catch (e) {
        value = null;
    }
    return value;
}, write: function(features) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    var kml = this.createElementNS(this.kmlns, "kml");
    var folder = this.createFolderXML();
    for (var i = 0, len = features.length;
i < len;
++i) {
        folder.appendChild(this.createPlacemarkXML(features[i]));
    }
    kml.appendChild(folder);
    return OpenLayers.Format.XML.prototype.write.apply(this, [kml]);
}, createFolderXML: function() {
    var folderName = this.createElementNS(this.kmlns, "name");
    var folderNameText = this.createTextNode(this.foldersName);
    folderName.appendChild(folderNameText);
    var folderDesc = this.createElementNS(this.kmlns, "description");
    var folderDescText = this.createTextNode(this.foldersDesc);
    folderDesc.appendChild(folderDescText);
    var folder = this.createElementNS(this.kmlns, "Folder");
    folder.appendChild(folderName);
    folder.appendChild(folderDesc);
    return folder;
}, createPlacemarkXML: function(feature) {
    var placemarkName = this.createElementNS(this.kmlns, "name");
    var name = (feature.attributes.name) ? feature.attributes.name : feature.id;
    placemarkName.appendChild(this.createTextNode(name));
    var placemarkDesc = this.createElementNS(this.kmlns, "description");
    var desc = (feature.attributes.description) ? feature.attributes.description : this.placemarksDesc;
    placemarkDesc.appendChild(this.createTextNode(desc));
    var placemarkNode = this.createElementNS(this.kmlns, "Placemark");
    if (feature.fid != null) {
        placemarkNode.setAttribute("id", feature.fid);
    }
    placemarkNode.appendChild(placemarkName);
    placemarkNode.appendChild(placemarkDesc);
    var geometryNode = this.buildGeometryNode(feature.geometry);
    placemarkNode.appendChild(geometryNode);
    return placemarkNode;
}, buildGeometryNode: function(geometry) {
    if (this.internalProjection && this.externalProjection) {
        geometry = geometry.clone();
        geometry.transform(this.internalProjection, this.externalProjection);
    }
    var className = geometry.CLASS_NAME;
    var type = className.substring(className.lastIndexOf(".") + 1);
    var builder = this.buildGeometry[type.toLowerCase()];
    var node = null;
    if (builder) {
        node = builder.apply(this, [geometry]);
    }
    return node;
}, buildGeometry: { point: function(geometry) {
    var kml = this.createElementNS(this.kmlns, "Point");
    kml.appendChild(this.buildCoordinatesNode(geometry));
    return kml;
}, multipoint: function(geometry) {
    return this.buildGeometry.collection.apply(this, [geometry]);
}, linestring: function(geometry) {
    var kml = this.createElementNS(this.kmlns, "LineString");
    kml.appendChild(this.buildCoordinatesNode(geometry));
    return kml;
}, multilinestring: function(geometry) {
    return this.buildGeometry.collection.apply(this, [geometry]);
}, linearring: function(geometry) {
    var kml = this.createElementNS(this.kmlns, "LinearRing");
    kml.appendChild(this.buildCoordinatesNode(geometry));
    return kml;
}, polygon: function(geometry) {
    var kml = this.createElementNS(this.kmlns, "Polygon");
    var rings = geometry.components;
    var ringMember, ringGeom, type;
    for (var i = 0, len = rings.length;
i < len;
++i) {
        type = (i == 0) ? "outerBoundaryIs" : "innerBoundaryIs";
        ringMember = this.createElementNS(this.kmlns, type);
        ringGeom = this.buildGeometry.linearring.apply(this, [rings[i]]);
        ringMember.appendChild(ringGeom);
        kml.appendChild(ringMember);
    }
    return kml;
}, multipolygon: function(geometry) {
    return this.buildGeometry.collection.apply(this, [geometry]);
}, collection: function(geometry) {
    var kml = this.createElementNS(this.kmlns, "MultiGeometry");
    var child;
    for (var i = 0, len = geometry.components.length;
i < len;
++i) {
        child = this.buildGeometryNode.apply(this, [geometry.components[i]]);
        if (child) {
            kml.appendChild(child);
        } 
    }
    return kml;
} 
}, buildCoordinatesNode: function(geometry) {
    var coordinatesNode = this.createElementNS(this.kmlns, "coordinates");
    var path;
    var points = geometry.components;
    if (points) {
        var point;
        var numPoints = points.length;
        var parts = new Array(numPoints);
        for (var i = 0;
i < numPoints;
++i) {
            point = points[i];
            parts[i] = point.x + "," + point.y;
        }
        path = parts.join(" ");
    } else {
        path = geometry.x + "," + geometry.y;
    }
    var txtNode = this.createTextNode(path);
    coordinatesNode.appendChild(txtNode);
    return coordinatesNode;
}, CLASS_NAME: "OpenLayers.Format.KML"
});
OpenLayers.Format.OSM = OpenLayers.Class(OpenLayers.Format.XML, { checkTags: false, interestingTagsExclude: null, areaTags: null, initialize: function(options) {
    var layer_defaults = { 'interestingTagsExclude': ['source', 'source_ref', 'source:ref', 'history', 'attribution', 'created_by'], 'areaTags': ['area', 'building', 'leisure', 'tourism', 'ruins', 'historic', 'landuse', 'military', 'natural', 'sport'] };
    layer_defaults = OpenLayers.Util.extend(layer_defaults, options);
    var interesting = {};
    for (var i = 0;
i < layer_defaults.interestingTagsExclude.length;
i++) {
        interesting[layer_defaults.interestingTagsExclude[i]] = true;
    }
    layer_defaults.interestingTagsExclude = interesting;
    var area = {};
    for (var i = 0;
i < layer_defaults.areaTags.length;
i++) {
        area[layer_defaults.areaTags[i]] = true;
    }
    layer_defaults.areaTags = area;
    OpenLayers.Format.XML.prototype.initialize.apply(this, [layer_defaults]);
}, read: function(doc) {
    if (typeof doc == "string") {
        doc = OpenLayers.Format.XML.prototype.read.apply(this, [doc]);
    }
    var nodes = this.getNodes(doc);
    var ways = this.getWays(doc);
    var feat_list = new Array(ways.length);
    for (var i = 0;
i < ways.length;
i++) {
        var point_list = new Array(ways[i].nodes.length);
        var poly = this.isWayArea(ways[i]) ? 1 : 0;
        for (var j = 0;
j < ways[i].nodes.length;
j++) {
            var node = nodes[ways[i].nodes[j]];
            var point = new OpenLayers.Geometry.Point(node.lon, node.lat);
            point.osm_id = parseInt(ways[i].nodes[j]);
            point_list[j] = point;
            node.used = true;
        }
        var geometry = null;
        if (poly) {
            geometry = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(point_list));
        } else {
            geometry = new OpenLayers.Geometry.LineString(point_list);
        }
        if (this.internalProjection && this.externalProjection) {
            geometry.transform(this.externalProjection, this.internalProjection);
        }
        var feat = new OpenLayers.Feature.Vector(geometry, ways[i].tags);
        feat.osm_id = parseInt(ways[i].id);
        feat.fid = "way." + feat.osm_id;
        feat_list[i] = feat;
    }
    for (var node_id in nodes) {
        var node = nodes[node_id];
        if (!node.used || this.checkTags) {
            var tags = null;
            if (this.checkTags) {
                var result = this.getTags(node.node, true);
                if (node.used && !result[1]) {
                    continue;
                }
                tags = result[0];
            } else {
                tags = this.getTags(node.node);
            }
            var feat = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(node['lon'], node['lat']), tags);
            if (this.internalProjection && this.externalProjection) {
                feat.geometry.transform(this.externalProjection, this.internalProjection);
            }
            feat.osm_id = parseInt(node_id);
            feat.fid = "node." + feat.osm_id;
            feat_list.push(feat);
        }
        node.node = null;
    }
    return feat_list;
}, getNodes: function(doc) {
    var node_list = doc.getElementsByTagName("node");
    var nodes = {};
    for (var i = 0;
i < node_list.length;
i++) {
        var node = node_list[i];
        var id = node.getAttribute("id");
        nodes[id] = { 'lat': node.getAttribute("lat"), 'lon': node.getAttribute("lon"), 'node': node };
    }
    return nodes;
}, getWays: function(doc) {
    var way_list = doc.getElementsByTagName("way");
    var return_ways = [];
    for (var i = 0;
i < way_list.length;
i++) {
        var way = way_list[i];
        var way_object = { id: way.getAttribute("id") };
        way_object.tags = this.getTags(way);
        var node_list = way.getElementsByTagName("nd");
        way_object.nodes = new Array(node_list.length);
        for (var j = 0;
j < node_list.length;
j++) {
            way_object.nodes[j] = node_list[j].getAttribute("ref");
        }
        return_ways.push(way_object);
    }
    return return_ways;
}, getTags: function(dom_node, interesting_tags) {
    var tag_list = dom_node.getElementsByTagName("tag");
    var tags = {};
    var interesting = false;
    for (var j = 0;
j < tag_list.length;
j++) {
        var key = tag_list[j].getAttribute("k");
        tags[key] = tag_list[j].getAttribute("v");
        if (interesting_tags) {
            if (!this.interestingTagsExclude[key]) {
                interesting = true;
            } 
        } 
    }
    return interesting_tags ? [tags, interesting] : tags;
}, isWayArea: function(way) {
    var poly_shaped = false;
    var poly_tags = false;
    if (way.nodes[0] == way.nodes[way.nodes.length - 1]) {
        poly_shaped = true;
    }
    if (this.checkTags) {
        for (var key in way.tags) {
            if (this.areaTags[key]) {
                poly_tags = true;
                break;
            } 
        } 
    }
    return poly_shaped && (this.checkTags ? poly_tags : true);
}, write: function(features) {
    if (!(features instanceof Array)) {
        features = [features];
    }
    this.osm_id = 1;
    this.created_nodes = {};
    var root_node = this.createElementNS(null, "osm");
    root_node.setAttribute("version", "0.5");
    root_node.setAttribute("generator", "OpenLayers " + OpenLayers.VERSION_NUMBER);
    for (var i = features.length - 1;
i >= 0;
i--) {
        var nodes = this.createFeatureNodes(features[i]);
        for (var j = 0;
j < nodes.length;
j++) {
            root_node.appendChild(nodes[j]);
        } 
    }
    return OpenLayers.Format.XML.prototype.write.apply(this, [root_node]);
}, createFeatureNodes: function(feature) {
    var nodes = [];
    var className = feature.geometry.CLASS_NAME;
    var type = className.substring(className.lastIndexOf(".") + 1);
    type = type.toLowerCase();
    var builder = this.createXML[type];
    if (builder) {
        nodes = builder.apply(this, [feature]);
    }
    return nodes;
}, createXML: { 'point': function(point) {
    var id = null;
    var geometry = point.geometry ? point.geometry : point;
    var already_exists = false;
    if (point.osm_id) {
        id = point.osm_id;
        if (this.created_nodes[id]) {
            already_exists = true;
        } 
    } else {
        id = -this.osm_id;
        this.osm_id++;
    }
    if (already_exists) {
        node = this.created_nodes[id];
    } else {
        var node = this.createElementNS(null, "node");
    }
    this.created_nodes[id] = node;
    node.setAttribute("id", id);
    node.setAttribute("lon", geometry.x);
    node.setAttribute("lat", geometry.y);
    if (point.attributes) {
        this.serializeTags(point, node);
    }
    this.setState(point, node);
    return already_exists ? [] : [node];
}, linestring: function(feature) {
    var nodes = [];
    var geometry = feature.geometry;
    if (feature.osm_id) {
        id = feature.osm_id;
    } else {
        id = -this.osm_id;
        this.osm_id++;
    }
    var way = this.createElementNS(null, "way");
    way.setAttribute("id", id);
    for (var i = 0;
i < geometry.components.length;
i++) {
        var node = this.createXML['point'].apply(this, [geometry.components[i]]);
        if (node.length) {
            node = node[0];
            var node_ref = node.getAttribute("id");
            nodes.push(node);
        } else {
            node_ref = geometry.components[i].osm_id;
            node = this.created_nodes[node_ref];
        }
        this.setState(feature, node);
        var nd_dom = this.createElementNS(null, "nd");
        nd_dom.setAttribute("ref", node_ref);
        way.appendChild(nd_dom);
    }
    this.serializeTags(feature, way);
    nodes.push(way);
    return nodes;
}, polygon: function(feature) {
    var attrs = OpenLayers.Util.extend({ 'area': 'yes' }, feature.attributes);
    var feat = new OpenLayers.Feature.Vector(feature.geometry.components[0], attrs);
    feat.osm_id = feature.osm_id;
    return this.createXML['linestring'].apply(this, [feat]);
} 
}, serializeTags: function(feature, node) {
    for (var key in feature.attributes) {
        var tag = this.createElementNS(null, "tag");
        tag.setAttribute("k", key);
        tag.setAttribute("v", feature.attributes[key]);
        node.appendChild(tag);
    } 
}, setState: function(feature, node) {
    if (feature.state) {
        var state = null;
        switch (feature.state) {
            case OpenLayers.State.UPDATE: state = "modify";
            case OpenLayers.State.DELETE: state = "delete";
        }
        if (state) {
            node.setAttribute("action", state);
        } 
    } 
}, CLASS_NAME: "OpenLayers.Format.OSM"
});
OpenLayers.Geometry.LinearRing = OpenLayers.Class(OpenLayers.Geometry.LineString, { componentTypes: ["OpenLayers.Geometry.Point"], initialize: function(points) {
    OpenLayers.Geometry.LineString.prototype.initialize.apply(this, arguments);
}, addComponent: function(point, index) {
    var added = false;
    var lastPoint = this.components.pop();
    if (index != null || !point.equals(lastPoint)) {
        added = OpenLayers.Geometry.Collection.prototype.addComponent.apply(this, arguments);
    }
    var firstPoint = this.components[0];
    OpenLayers.Geometry.Collection.prototype.addComponent.apply(this, [firstPoint]);
    return added;
}, removeComponent: function(point) {
    if (this.components.length > 4) {
        this.components.pop();
        OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this, arguments);
        var firstPoint = this.components[0];
        OpenLayers.Geometry.Collection.prototype.addComponent.apply(this, [firstPoint]);
    } 
}, move: function(x, y) {
    for (var i = 0, len = this.components.length;
i < len - 1;
i++) {
        this.components[i].move(x, y);
    } 
}, rotate: function(angle, origin) {
    for (var i = 0, len = this.components.length;
i < len - 1;
++i) {
        this.components[i].rotate(angle, origin);
    } 
}, resize: function(scale, origin, ratio) {
    for (var i = 0, len = this.components.length;
i < len - 1;
++i) {
        this.components[i].resize(scale, origin, ratio);
    } 
}, transform: function(source, dest) {
    if (source && dest) {
        for (var i = 0, len = this.components.length;
i < len - 1;
i++) {
            var component = this.components[i];
            component.transform(source, dest);
        }
        this.bounds = null;
    }
    return this;
}, getArea: function() {
    var area = 0.0;
    if (this.components && (this.components.length > 2)) {
        var sum = 0.0;
        for (var i = 0, len = this.components.length;
i < len - 1;
i++) {
            var b = this.components[i];
            var c = this.components[i + 1];
            sum += (b.x + c.x) * (c.y - b.y);
        }
        area = -sum / 2.0;
    }
    return area;
}, containsPoint: function(point) {
    var approx = OpenLayers.Number.limitSigDigs;
    var digs = 14;
    var px = approx(point.x, digs);
    var py = approx(point.y, digs);
    function getX(y, x1, y1, x2, y2) {
        return (((x1 - x2) * y) + ((x2 * y1) - (x1 * y2))) / (y1 - y2);
    }
    var numSeg = this.components.length - 1;
    var start, end, x1, y1, x2, y2, cx, cy;
    var crosses = 0;
    for (var i = 0;
i < numSeg;
++i) {
        start = this.components[i];
        x1 = approx(start.x, digs);
        y1 = approx(start.y, digs);
        end = this.components[i + 1];
        x2 = approx(end.x, digs);
        y2 = approx(end.y, digs);
        if (y1 == y2) {
            if (py == y1) {
                if (x1 <= x2 && (px >= x1 && px <= x2) || x1 >= x2 && (px <= x1 && px >= x2)) {
                    crosses = -1;
                    break;
                } 
            }
            continue;
        }
        cx = approx(getX(py, x1, y1, x2, y2), digs);
        if (cx == px) {
            if (y1 < y2 && (py >= y1 && py <= y2) || y1 > y2 && (py <= y1 && py >= y2)) {
                crosses = -1;
                break;
            } 
        }
        if (cx <= px) {
            continue;
        }
        if (x1 != x2 && (cx < Math.min(x1, x2) || cx > Math.max(x1, x2))) {
            continue;
        }
        if (y1 < y2 && (py >= y1 && py < y2) || y1 > y2 && (py < y1 && py >= y2)) {
            ++crosses;
        } 
    }
    var contained = (crosses == -1) ? 1 : !!(crosses & 1);
    return contained;
}, intersects: function(geometry) {
    var intersect = false;
    if (geometry.CLASS_NAME == "OpenLayers.Geometry.Point") {
        intersect = this.containsPoint(geometry);
    } else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LineString") {
        intersect = geometry.intersects(this);
    } else if (geometry.CLASS_NAME == "OpenLayers.Geometry.LinearRing") {
        intersect = OpenLayers.Geometry.LineString.prototype.intersects.apply(this, [geometry]);
    } else {
        for (var i = 0, len = geometry.components.length;
i < len;
++i) {
            intersect = geometry.components[i].intersects(this);
            if (intersect) {
                break;
            } 
        } 
    }
    return intersect;
}, CLASS_NAME: "OpenLayers.Geometry.LinearRing"
});
OpenLayers.Handler.Path = OpenLayers.Class(OpenLayers.Handler.Point, { line: null, freehand: false, freehandToggle: 'shiftKey', initialize: function(control, callbacks, options) {
    OpenLayers.Handler.Point.prototype.initialize.apply(this, arguments);
}, createFeature: function() {
    this.line = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString());
    this.point = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point());
    this.layer.addFeatures([this.line, this.point], { silent: true });
}, destroyFeature: function() {
    OpenLayers.Handler.Point.prototype.destroyFeature.apply(this);
    this.line = null;
}, destroyPoint: function() {
    if (this.point) {
        this.layer.destroyFeatures([this.point]);
    } 
}, addPoint: function() {
    this.line.geometry.addComponent(this.point.geometry.clone(), this.line.geometry.components.length);
    this.callback("point", [this.point.geometry, this.getGeometry()]);
}, freehandMode: function(evt) {
    return (this.freehandToggle && evt[this.freehandToggle]) ? !this.freehand : this.freehand;
}, modifyFeature: function() {
    var index = this.line.geometry.components.length - 1;
    this.line.geometry.components[index].x = this.point.geometry.x;
    this.line.geometry.components[index].y = this.point.geometry.y;
    this.line.geometry.components[index].clearBounds();
}, drawFeature: function() {
    this.layer.drawFeature(this.line, this.style);
    this.layer.drawFeature(this.point, this.style);
}, getGeometry: function() {
    var geometry = this.line.geometry;
    if (this.multi) {
        geometry = new OpenLayers.Geometry.MultiLineString([geometry]);
    }
    return geometry;
}, mousedown: function(evt) {
    if (this.lastDown && this.lastDown.equals(evt.xy)) {
        return false;
    }
    if (this.lastDown == null) {
        if (this.persist) {
            this.destroyFeature();
        }
        this.createFeature();
    }
    this.mouseDown = true;
    this.lastDown = evt.xy;
    var lonlat = this.control.map.getLonLatFromPixel(evt.xy);
    this.point.geometry.x = lonlat.lon;
    this.point.geometry.y = lonlat.lat;
    this.point.geometry.clearBounds();
    if ((this.lastUp == null) || !this.lastUp.equals(evt.xy)) {
        this.addPoint();
    }
    this.drawFeature();
    this.drawing = true;
    return false;
}, mousemove: function(evt) {
    if (this.drawing) {
        var lonlat = this.map.getLonLatFromPixel(evt.xy);
        this.point.geometry.x = lonlat.lon;
        this.point.geometry.y = lonlat.lat;
        this.point.geometry.clearBounds();
        if (this.mouseDown && this.freehandMode(evt)) {
            this.addPoint();
        } else {
            this.modifyFeature();
        }
        this.drawFeature();
    }
    return true;
}, mouseup: function(evt) {
    this.mouseDown = false;
    if (this.drawing) {
        if (this.freehandMode(evt)) {
            if (this.persist) {
                this.destroyPoint();
            }
            this.finalize();
        } else {
            if (this.lastUp == null) {
                this.addPoint();
            }
            this.lastUp = evt.xy;
        }
        return false;
    }
    return true;
}, dblclick: function(evt) {
    if (!this.freehandMode(evt)) {
        var index = this.line.geometry.components.length - 1;
        this.line.geometry.removeComponent(this.line.geometry.components[index]);
        if (this.persist) {
            this.destroyPoint();
        }
        this.finalize();
    }
    return false;
}, CLASS_NAME: "OpenLayers.Handler.Path"
});
OpenLayers.Format.GML.Base = OpenLayers.Class(OpenLayers.Format.XML, { namespaces: { gml: "http://www.opengis.net/gml", xlink: "http://www.w3.org/1999/xlink", xsi: "http://www.w3.org/2001/XMLSchema-instance", wfs: "http://www.opengis.net/wfs" }, defaultPrefix: "gml", schemaLocation: null, featureType: null, featureNS: null, geometryName: "geometry", extractAttributes: true, srsName: null, xy: true, regExes: { trimSpace: (/^\s*|\s*$/g), removeSpace: (/\s*/g), splitSpace: (/\s+/), trimComma: (/\s*,\s*/g) }, initialize: function(options) {
    OpenLayers.Format.XML.prototype.initialize.apply(this, [options]);
    this.setNamespace("feature", options.featureNS);
}, read: function(data) {
    if (typeof data == "string") {
        data = OpenLayers.Format.XML.prototype.read.apply(this, [data]);
    }
    if (data && data.nodeType == 9) {
        data = data.documentElement;
    }
    var features = [];
    this.readNode(data, { features: features });
    if (features.length == 0) {
        var elements = this.getElementsByTagNameNS(data, this.namespaces.gml, "featureMember");
        if (elements.length) {
            for (var i = 0, len = elements.length;
i < len;
++i) {
                this.readNode(elements[i], { features: features });
            } 
        } else {
            var elements = this.getElementsByTagNameNS(data, this.namespaces.gml, "featureMembers");
            if (elements.length) {
                this.readNode(elements[0], { features: features });
            } 
        } 
    }
    return features;
}, readers: { "gml": { "featureMember": function(node, obj) {
    this.readChildNodes(node, obj);
}, "featureMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "Point": function(node, container) {
    var obj = { points: [] };
    this.readChildNodes(node, obj);
    if (!container.components) {
        container.components = [];
    }
    container.components.push(obj.points[0]);
}, "coordinates": function(node, obj) {
    var str = this.concatChildValues(node).replace(this.regExes.trimSpace, "");
    str = str.replace(this.regExes.trimComma, ",");
    var pointList = str.split(this.regExes.splitSpace);
    var coords;
    var numPoints = pointList.length;
    var points = new Array(numPoints);
    for (var i = 0;
i < numPoints;
++i) {
        coords = pointList[i].split(",");
        if (this.xy) {
            points[i] = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
        } else {
            points[i] = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
        } 
    }
    obj.points = points;
}, "coord": function(node, obj) {
    var coord = {};
    this.readChildNodes(node, coord);
    if (!obj.points) {
        obj.points = [];
    }
    obj.points.push(new OpenLayers.Geometry.Point(coord.x, coord.y, coord.z));
}, "X": function(node, coord) {
    coord.x = this.getChildValue(node);
}, "Y": function(node, coord) {
    coord.y = this.getChildValue(node);
}, "Z": function(node, coord) {
    coord.z = this.getChildValue(node);
}, "MultiPoint": function(node, container) {
    var obj = { components: [] };
    this.readChildNodes(node, obj);
    container.components = [new OpenLayers.Geometry.MultiPoint(obj.components)];
}, "pointMember": function(node, obj) {
    this.readChildNodes(node, obj);
}, "LineString": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj);
    if (!container.components) {
        container.components = [];
    }
    container.components.push(new OpenLayers.Geometry.LineString(obj.points));
}, "MultiLineString": function(node, container) {
    var obj = { components: [] };
    this.readChildNodes(node, obj);
    container.components = [new OpenLayers.Geometry.MultiLineString(obj.components)];
}, "lineStringMember": function(node, obj) {
    this.readChildNodes(node, obj);
}, "Polygon": function(node, container) {
    var obj = { outer: null, inner: [] };
    this.readChildNodes(node, obj);
    obj.inner.unshift(obj.outer);
    if (!container.components) {
        container.components = [];
    }
    container.components.push(new OpenLayers.Geometry.Polygon(obj.inner));
}, "LinearRing": function(node, obj) {
    var container = {};
    this.readChildNodes(node, container);
    obj.components = [new OpenLayers.Geometry.LinearRing(container.points)];
}, "MultiPolygon": function(node, container) {
    var obj = { components: [] };
    this.readChildNodes(node, obj);
    container.components = [new OpenLayers.Geometry.MultiPolygon(obj.components)];
}, "polygonMember": function(node, obj) {
    this.readChildNodes(node, obj);
}, "GeometryCollection": function(node, container) {
    var obj = { components: [] };
    this.readChildNodes(node, obj);
    container.components = [new OpenLayers.Geometry.Collection(obj.components)];
}, "geometryMember": function(node, obj) {
    this.readChildNodes(node, obj);
} 
}, "feature": { "*": function(node, obj) {
    var name;
    var local = node.localName || node.nodeName.split(":").pop();
    if (local == this.featureType) {
        name = "_typeName";
    } else {
        if (node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
            if (this.extractAttributes) {
                name = "_attribute";
            } 
        } else {
            name = "_geometry";
        } 
    }
    if (name) {
        this.readers.feature[name].apply(this, [node, obj]);
    } 
}, "_typeName": function(node, obj) {
    var container = { components: [], attributes: {} };
    this.readChildNodes(node, container);
    var feature = new OpenLayers.Feature.Vector(container.components[0], container.attributes);
    var fid = node.getAttribute("fid") || this.getAttributeNS(node, this.namespaces["gml"], "id");
    if (fid) {
        feature.fid = fid;
    }
    if (this.internalProjection && this.externalProjection && feature.geometry) {
        feature.geometry.transform(this.externalProjection, this.internalProjection);
    }
    obj.features.push(feature);
}, "_geometry": function(node, obj) {
    this.readChildNodes(node, obj);
}, "_attribute": function(node, obj) {
    var local = node.localName || node.nodeName.split(":").pop();
    var value = this.getChildValue(node);
    obj.attributes[local] = value;
} 
}, "wfs": { "FeatureCollection": function(node, obj) {
    this.readChildNodes(node, obj);
} }
}, write: function(features) {
    var name;
    if (features instanceof Array) {
        name = "featureMembers";
    } else {
        name = "featureMember";
    }
    var root = this.writeNode("gml:" + name, features);
    this.setAttributeNS(root, this.namespaces["xsi"], "xsi:schemaLocation", this.schemaLocation);
    return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
}, writers: { "gml": { "featureMember": function(feature) {
    var node = this.createElementNSPlus("gml:featureMember");
    this.writeNode("feature:_typeName", feature, node);
    return node;
}, "MultiPoint": function(geometry) {
    var node = this.createElementNSPlus("gml:MultiPoint");
    for (var i = 0;
i < geometry.components.length;
++i) {
        this.writeNode("pointMember", geometry.components[i], node);
    }
    return node;
}, "pointMember": function(geometry) {
    var node = this.createElementNSPlus("gml:pointMember");
    this.writeNode("Point", geometry, node);
    return node;
}, "MultiLineString": function(geometry) {
    var node = this.createElementNSPlus("gml:MultiLineString");
    for (var i = 0;
i < geometry.components.length;
++i) {
        this.writeNode("lineStringMember", geometry.components[i], node);
    }
    return node;
}, "lineStringMember": function(geometry) {
    var node = this.createElementNSPlus("gml:lineStringMember");
    this.writeNode("LineString", geometry, node);
    return node;
}, "MultiPolygon": function(geometry) {
    var node = this.createElementNSPlus("gml:MultiPolygon");
    for (var i = 0;
i < geometry.components.length;
++i) {
        this.writeNode("polygonMember", geometry.components[i], node);
    }
    return node;
}, "polygonMember": function(geometry) {
    var node = this.createElementNSPlus("gml:polygonMember");
    this.writeNode("Polygon", geometry, node);
    return node;
}, "GeometryCollection": function(geometry) {
    var node = this.createElementNSPlus("gml:GeometryCollection");
    for (var i = 0, len = geometry.components.length;
i < len;
++i) {
        this.writeNode("geometryMember", geometry.components[i], node);
    }
    return node;
}, "geometryMember": function(geometry) {
    var node = this.createElementNSPlus("gml:geometryMember");
    var child = this.writeNode("feature:_geometry", geometry);
    node.appendChild(child.firstChild);
    return node;
} 
}, "feature": { "_typeName": function(feature) {
    var node = this.createElementNSPlus("feature:" + this.featureType, { attributes: { fid: feature.fid} });
    if (feature.geometry) {
        this.writeNode("feature:_geometry", feature.geometry, node);
    }
    for (var name in feature.attributes) {
        var value = feature.attributes[name];
        if (value != null) { this.writeNode("feature:_attribute", { name: name, value: value }, node) } 
    }
    return node;
}, "_geometry": function(geometry) {
    if (this.externalProjection && this.internalProjection) {
        geometry = geometry.clone().transform(this.internalProjection, this.externalProjection);
    }
    var node = this.createElementNSPlus("feature:" + this.geometryName);
    var type = this.geometryTypes[geometry.CLASS_NAME];
    var child = this.writeNode("gml:" + type, geometry, node);
    if (this.srsName) {
        child.setAttribute("srsName", this.srsName);
    }
    return node;
}, "_attribute": function(obj) {
    return this.createElementNSPlus("feature:" + obj.name, { value: obj.value });
} 
}, "wfs": { "FeatureCollection": function(features) {
    var node = this.createElementNSPlus("wfs:FeatureCollection");
    for (var i = 0, len = features.length;
i < len;
++i) {
        this.writeNode("gml:featureMember", features[i], node);
    }
    return node;
} }
}, geometryTypes: { "OpenLayers.Geometry.Point": "Point", "OpenLayers.Geometry.MultiPoint": "MultiPoint", "OpenLayers.Geometry.LineString": "LineString", "OpenLayers.Geometry.MultiLineString": "MultiLineString", "OpenLayers.Geometry.Polygon": "Polygon", "OpenLayers.Geometry.MultiPolygon": "MultiPolygon", "OpenLayers.Geometry.Collection": "GeometryCollection" }, CLASS_NAME: "OpenLayers.Format.GML.Base"
});
OpenLayers.Format.WFS = OpenLayers.Class(OpenLayers.Format.GML, { layer: null, wfsns: "http://www.opengis.net/wfs", ogcns: "http://www.opengis.net/ogc", initialize: function(options, layer) {
    OpenLayers.Format.GML.prototype.initialize.apply(this, [options]);
    this.layer = layer;
    if (this.layer.featureNS) {
        this.featureNS = this.layer.featureNS;
    }
    if (this.layer.options.geometry_column) {
        this.geometryName = this.layer.options.geometry_column;
    }
    if (this.layer.options.typename) {
        this.featureName = this.layer.options.typename;
    } 
}, write: function(features) {
    var transaction = this.createElementNS(this.wfsns, 'wfs:Transaction');
    transaction.setAttribute("version", "1.0.0");
    transaction.setAttribute("service", "WFS");
    for (var i = 0;
i < features.length;
i++) {
        switch (features[i].state) {
            case OpenLayers.State.INSERT: transaction.appendChild(this.insert(features[i]));
                break;
            case OpenLayers.State.UPDATE: transaction.appendChild(this.update(features[i]));
                break;
            case OpenLayers.State.DELETE: transaction.appendChild(this.remove(features[i]));
                break;
        } 
    }
    return OpenLayers.Format.XML.prototype.write.apply(this, [transaction]);
}, createFeatureXML: function(feature) {
    var geometryNode = this.buildGeometryNode(feature.geometry);
    var geomContainer = this.createElementNS(this.featureNS, "feature:" + this.geometryName);
    geomContainer.appendChild(geometryNode);
    var featureContainer = this.createElementNS(this.featureNS, "feature:" + this.featureName);
    featureContainer.appendChild(geomContainer);
    for (var attr in feature.attributes) {
        var attrText = this.createTextNode(feature.attributes[attr]);
        var nodename = attr;
        if (attr.search(":") != -1) {
            nodename = attr.split(":")[1];
        }
        var attrContainer = this.createElementNS(this.featureNS, "feature:" + nodename);
        attrContainer.appendChild(attrText);
        featureContainer.appendChild(attrContainer);
    }
    return featureContainer;
}, insert: function(feature) {
    var insertNode = this.createElementNS(this.wfsns, 'wfs:Insert');
    insertNode.appendChild(this.createFeatureXML(feature));
    return insertNode;
}, update: function(feature) {
    if (!feature.fid) {
        OpenLayers.Console.userError(OpenLayers.i18n("noFID"));
    }
    var updateNode = this.createElementNS(this.wfsns, 'wfs:Update');
    updateNode.setAttribute("typeName", this.layerName);
    var propertyNode = this.createElementNS(this.wfsns, 'wfs:Property');
    var nameNode = this.createElementNS(this.wfsns, 'wfs:Name');
    var txtNode = this.createTextNode(this.geometryName);
    nameNode.appendChild(txtNode);
    propertyNode.appendChild(nameNode);
    var valueNode = this.createElementNS(this.wfsns, 'wfs:Value');
    var geometryNode = this.buildGeometryNode(feature.geometry);
    if (feature.layer) {
        geometryNode.setAttribute("srsName", feature.layer.projection.getCode());
    }
    valueNode.appendChild(geometryNode);
    propertyNode.appendChild(valueNode);
    updateNode.appendChild(propertyNode);
    for (var propName in feature.attributes) {
        propertyNode = this.createElementNS(this.wfsns, 'wfs:Property');
        nameNode = this.createElementNS(this.wfsns, 'wfs:Name');
        nameNode.appendChild(this.createTextNode(propName));
        propertyNode.appendChild(nameNode);
        valueNode = this.createElementNS(this.wfsns, 'wfs:Value');
        valueNode.appendChild(this.createTextNode(feature.attributes[propName]));
        propertyNode.appendChild(valueNode);
        updateNode.appendChild(propertyNode);
    }
    var filterNode = this.createElementNS(this.ogcns, 'ogc:Filter');
    var filterIdNode = this.createElementNS(this.ogcns, 'ogc:FeatureId');
    filterIdNode.setAttribute("fid", feature.fid);
    filterNode.appendChild(filterIdNode);
    updateNode.appendChild(filterNode);
    return updateNode;
}, remove: function(feature) {
    if (!feature.fid) {
        OpenLayers.Console.userError(OpenLayers.i18n("noFID"));
        return false;
    }
    var deleteNode = this.createElementNS(this.wfsns, 'wfs:Delete');
    deleteNode.setAttribute("typeName", this.layerName);
    var filterNode = this.createElementNS(this.ogcns, 'ogc:Filter');
    var filterIdNode = this.createElementNS(this.ogcns, 'ogc:FeatureId');
    filterIdNode.setAttribute("fid", feature.fid);
    filterNode.appendChild(filterIdNode);
    deleteNode.appendChild(filterNode);
    return deleteNode;
}, destroy: function() {
    this.layer = null;
}, CLASS_NAME: "OpenLayers.Format.WFS"
});
OpenLayers.Handler.Polygon = OpenLayers.Class(OpenLayers.Handler.Path, { polygon: null, initialize: function(control, callbacks, options) {
    OpenLayers.Handler.Path.prototype.initialize.apply(this, arguments);
}, createFeature: function() {
    this.polygon = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon());
    this.line = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LinearRing());
    this.polygon.geometry.addComponent(this.line.geometry);
    this.point = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point());
    this.layer.addFeatures([this.polygon, this.point], { silent: true });
}, destroyFeature: function() {
    OpenLayers.Handler.Path.prototype.destroyFeature.apply(this);
    this.polygon = null;
}, modifyFeature: function() {
    var index = this.line.geometry.components.length - 2;
    this.line.geometry.components[index].x = this.point.geometry.x;
    this.line.geometry.components[index].y = this.point.geometry.y;
    this.line.geometry.components[index].clearBounds();
}, drawFeature: function() {
    this.layer.drawFeature(this.polygon, this.style);
    this.layer.drawFeature(this.point, this.style);
}, getGeometry: function() {
    var geometry = this.polygon.geometry;
    if (this.multi) {
        geometry = new OpenLayers.Geometry.MultiPolygon([geometry]);
    }
    return geometry;
}, dblclick: function(evt) {
    if (!this.freehandMode(evt)) {
        var index = this.line.geometry.components.length - 2;
        this.line.geometry.removeComponent(this.line.geometry.components[index]);
        if (this.persist) {
            this.destroyPoint();
        }
        this.finalize();
    }
    return false;
}, CLASS_NAME: "OpenLayers.Handler.Polygon"
});
OpenLayers.Control.EditingToolbar = OpenLayers.Class(OpenLayers.Control.Panel, { initialize: function(layer, options) {
    OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
    this.addControls([new OpenLayers.Control.Navigation()]);
    var controls = [new OpenLayers.Control.DrawFeature(layer, OpenLayers.Handler.Point, { 'displayClass': 'olControlDrawFeaturePoint' }), new OpenLayers.Control.DrawFeature(layer, OpenLayers.Handler.Path, { 'displayClass': 'olControlDrawFeaturePath' }), new OpenLayers.Control.DrawFeature(layer, OpenLayers.Handler.Polygon, { 'displayClass': 'olControlDrawFeaturePolygon' })];
    for (var i = 0, len = controls.length;
i < len;
i++) {
        controls[i].featureAdded = function(feature) {
            feature.state = OpenLayers.State.INSERT;
        };
    }
    this.addControls(controls);
}, draw: function() {
    var div = OpenLayers.Control.Panel.prototype.draw.apply(this, arguments);
    this.activateControl(this.controls[0]);
    return div;
}, CLASS_NAME: "OpenLayers.Control.EditingToolbar"
});
OpenLayers.Format.GML.v2 = OpenLayers.Class(OpenLayers.Format.GML.Base, { schemaLocation: "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd", initialize: function(options) {
    OpenLayers.Format.GML.Base.prototype.initialize.apply(this, [options]);
}, readers: { "gml": OpenLayers.Util.applyDefaults({ "outerBoundaryIs": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj);
    container.outer = obj.components[0];
}, "innerBoundaryIs": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj);
    container.inner.push(obj.components[0]);
}, "Box": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj);
    if (!container.components) {
        container.components = [];
    }
    var min = obj.points[0];
    var max = obj.points[1];
    container.components.push(new OpenLayers.Bounds(min.x, min.y, max.x, max.y));
} 
}, OpenLayers.Format.GML.Base.prototype.readers["gml"]), "feature": OpenLayers.Format.GML.Base.prototype.readers["feature"], "wfs": OpenLayers.Format.GML.Base.prototype.readers["wfs"]
}, write: function(features) {
    var name;
    if (features instanceof Array) {
        name = "wfs:FeatureCollection";
    } else {
        name = "gml:featureMember";
    }
    var root = this.writeNode(name, features);
    this.setAttributeNS(root, this.namespaces["xsi"], "xsi:schemaLocation", this.schemaLocation);
    return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
}, writers: { "gml": OpenLayers.Util.applyDefaults({ "Point": function(geometry) {
    var node = this.createElementNSPlus("gml:Point");
    this.writeNode("coordinates", [geometry], node);
    return node;
}, "coordinates": function(points) {
    var numPoints = points.length;
    var parts = new Array(numPoints);
    var point;
    for (var i = 0;
i < numPoints;
++i) {
        point = points[i];
        if (this.xy) {
            parts[i] = point.x + "," + point.y;
        } else {
            parts[i] = point.y + "," + point.x;
        }
        if (point.z != undefined) {
            parts[i] += "," + point.z;
        } 
    }
    return this.createElementNSPlus("gml:coordinates", { attributes: { decimal: ".", cs: ",", ts: " " }, value: (numPoints == 1) ? parts[0] : parts.join(" ") });
}, "LineString": function(geometry) {
    var node = this.createElementNSPlus("gml:LineString");
    this.writeNode("coordinates", geometry.components, node);
    return node;
}, "Polygon": function(geometry) {
    var node = this.createElementNSPlus("gml:Polygon");
    this.writeNode("outerBoundaryIs", geometry.components[0], node);
    for (var i = 1;
i < geometry.components.length;
++i) {
        this.writeNode("innerBoundaryIs", geometry.components[i], node);
    }
    return node;
}, "outerBoundaryIs": function(ring) {
    var node = this.createElementNSPlus("gml:outerBoundaryIs");
    this.writeNode("LinearRing", ring, node);
    return node;
}, "innerBoundaryIs": function(ring) {
    var node = this.createElementNSPlus("gml:innerBoundaryIs");
    this.writeNode("LinearRing", ring, node);
    return node;
}, "LinearRing": function(ring) {
    var node = this.createElementNSPlus("gml:LinearRing");
    this.writeNode("coordinates", ring.components, node);
    return node;
}, "Box": function(bounds) {
    var node = this.createElementNSPlus("gml:Box");
    this.writeNode("coordinates", [{ x: bounds.left, y: bounds.bottom }, { x: bounds.right, y: bounds.top}], node);
    if (this.srsName) {
        node.setAttribute("srsName", this.srsName);
    }
    return node;
} 
}, OpenLayers.Format.GML.Base.prototype.writers["gml"]), "feature": OpenLayers.Format.GML.Base.prototype.writers["feature"], "wfs": OpenLayers.Format.GML.Base.prototype.writers["wfs"]
}, CLASS_NAME: "OpenLayers.Format.GML.v2"
});
OpenLayers.Format.GML.v3 = OpenLayers.Class(OpenLayers.Format.GML.Base, { schemaLocation: "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd", initialize: function(options) {
    OpenLayers.Format.GML.Base.prototype.initialize.apply(this, [options]);
}, readers: { "gml": OpenLayers.Util.applyDefaults({ "featureMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "pos": function(node, obj) {
    var str = this.getChildValue(node).replace(this.regExes.trimSpace, "");
    var coords = str.split(this.regExes.splitSpace);
    var point;
    if (this.xy) {
        point = new OpenLayers.Geometry.Point(coords[0], coords[1], coords[2]);
    } else {
        point = new OpenLayers.Geometry.Point(coords[1], coords[0], coords[2]);
    }
    obj.points = [point];
}, "posList": function(node, obj) {
    var str = this.concatChildValues(node).replace(this.regExes.trimSpace, "");
    var coords = str.split(this.regExes.splitSpace);
    var dim = parseInt(node.getAttribute("dimension")) || 2;
    var j, x, y, z;
    var numPoints = coords.length / dim;
    var points = new Array(numPoints);
    for (var i = 0, len = coords.length;
i < len;
i += dim) {
        x = coords[i];
        y = coords[i + 1];
        z = (dim == 2) ? undefined : coords[i + 2];
        if (this.xy) {
            points[i / dim] = new OpenLayers.Geometry.Point(x, y, z);
        } else {
            points[i / dim] = new OpenLayers.Geometry.Point(y, x, z);
        } 
    }
    obj.points = points;
}, "exterior": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj);
    container.outer = obj.components[0];
}, "interior": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj);
    container.inner.push(obj.components[0]);
}, "MultiSurface": function(node, container) {
    var obj = { components: [] };
    this.readChildNodes(node, obj);
    if (obj.components.length > 0) {
        container.components = [new OpenLayers.Geometry.MultiPolygon(obj.components)];
    } 
}, "surfaceMember": function(node, obj) {
    this.readChildNodes(node, obj);
}, "surfaceMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "pointMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "lineStringMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "polygonMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "geometryMembers": function(node, obj) {
    this.readChildNodes(node, obj);
}, "Envelope": function(node, container) {
    var obj = { points: new Array(2) };
    this.readChildNodes(node, obj);
    if (!container.components) {
        container.components = [];
    }
    var min = obj.points[0];
    var max = obj.points[1];
    container.components.push(new OpenLayers.Bounds(min.x, min.y, max.x, max.y));
}, "lowerCorner": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj)
    container.points[0] = obj.points[0];
}, "upperCorner": function(node, container) {
    var obj = {};
    this.readChildNodes(node, obj)
    container.points[1] = obj.points[0];
} 
}, OpenLayers.Format.GML.Base.prototype.readers["gml"]), "feature": OpenLayers.Format.GML.Base.prototype.readers["feature"], "wfs": OpenLayers.Format.GML.Base.prototype.readers["wfs"]
}, write: function(features) {
    var name;
    if (features instanceof Array) {
        name = "featureMembers";
    } else {
        name = "featureMember";
    }
    var root = this.writeNode("gml:" + name, features);
    this.setAttributeNS(root, this.namespaces["xsi"], "xsi:schemaLocation", this.schemaLocation);
    return OpenLayers.Format.XML.prototype.write.apply(this, [root]);
}, writers: { "gml": OpenLayers.Util.applyDefaults({ "featureMembers": function(features) {
    var node = this.createElementNSPlus("gml:featureMembers");
    for (var i = 0, len = features.length;
i < len;
++i) {
        this.writeNode("feature:_typeName", features[i], node);
    }
    return node;
}, "Point": function(geometry) {
    var node = this.createElementNSPlus("gml:Point");
    this.writeNode("pos", geometry, node);
    return node;
}, "pos": function(point) {
    var pos = (this.xy) ? (point.x + " " + point.y) : (point.y + " " + point.x);
    return this.createElementNSPlus("gml:pos", { value: pos });
}, "LineString": function(geometry) {
    var node = this.createElementNSPlus("gml:LineString");
    this.writeNode("posList", geometry.components, node);
    return node;
}, "posList": function(points) {
    var len = points.length;
    var parts = new Array(len);
    var point;
    for (var i = 0;
i < len;
++i) {
        point = points[i];
        if (this.xy) {
            parts[i] = point.x + " " + point.y;
        } else {
            parts[i] = point.y + " " + point.x;
        } 
    }
    return this.createElementNSPlus("gml:posList", { value: parts.join(" ") });
}, "Polygon": function(geometry) {
    var node = this.createElementNSPlus("gml:Polygon");
    this.writeNode("exterior", geometry.components[0], node);
    for (var i = 1, len = geometry.components.length;
i < len;
++i) {
        this.writeNode("interior", geometry.components[i], node);
    }
    return node;
}, "exterior": function(ring) {
    var node = this.createElementNSPlus("gml:exterior");
    this.writeNode("LinearRing", ring, node);
    return node;
}, "interior": function(ring) {
    var node = this.createElementNSPlus("gml:interior");
    this.writeNode("LinearRing", ring, node);
    return node;
}, "LinearRing": function(ring) {
    var node = this.createElementNSPlus("gml:LinearRing");
    this.writeNode("posList", ring.components, node);
    return node;
}, "Envelope": function(bounds) {
    var node = this.createElementNSPlus("gml:Envelope");
    this.writeNode("lowerCorner", bounds, node);
    this.writeNode("upperCorner", bounds, node);
    if (this.srsName) {
        node.setAttribute("srsName", this.srsName);
    }
    return node;
}, "lowerCorner": function(bounds) {
    var node = this.createElementNSPlus("gml:lowerCorner");
    this.writeNode("pos", { x: bounds.left, y: bounds.bottom }, node);
    return node;
}, "upperCorner": function(bounds) {
    var node = this.createElementNSPlus("gml:upperCorner");
    this.writeNode("pos", { x: bounds.right, y: bounds.top }, node);
    return node;
} 
}, OpenLayers.Format.GML.Base.prototype.writers["gml"]), "feature": OpenLayers.Format.GML.Base.prototype.writers["feature"], "wfs": OpenLayers.Format.GML.Base.prototype.writers["wfs"]
}, CLASS_NAME: "OpenLayers.Format.GML.v3"
});
