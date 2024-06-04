// https://github.com/GoogleChrome/web-vitals
// prettier-ignore
// eslint-disable-next-line
var webVitals=function(e){"use strict";var t,n,r,i,a,o=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(e){if("loading"===document.readyState)return"loading";var t=o();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},c=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},s=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:c(r)+(r.className&&r.className.trim().length?"."+r.className.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},f=-1,d=function(){return f},l=function(e){addEventListener("pageshow",(function(t){t.persisted&&(f=t.timeStamp,e(t))}),!0)},m=function(){var e=o();return e&&e.activationStart||0},v=function(e,t){var n=o(),r="navigate";return d()>=0?r="back-forward-cache":n&&(document.prerendering||m()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},h=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},g=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},T=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},y=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},S=-1,E=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},C=function(e){"hidden"===document.visibilityState&&S>-1&&(S="visibilitychange"===e.type?e.timeStamp:0,L())},b=function(){addEventListener("visibilitychange",C,!0),addEventListener("prerenderingchange",C,!0)},L=function(){removeEventListener("visibilitychange",C,!0),removeEventListener("prerenderingchange",C,!0)},w=function(){return S<0&&(S=E(),b(),l((function(){setTimeout((function(){S=E(),b()}),0)}))),{get firstHiddenTime(){return S}}},F=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},M=[1800,3e3],P=function(e,t){t=t||{},F((function(){var n,r=w(),i=v("FCP"),a=p("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-m(),0),i.entries.push(e),n(!0)))}))}));a&&(n=h(e,i,M,t.reportAllChanges),l((function(r){i=v("FCP"),n=h(e,i,M,t.reportAllChanges),g((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},I=[.1,.25],A={passive:!0,capture:!0},x=new Date,B=function(e,i){t||(t=i,n=e,r=new Date,N(removeEventListener),D())},D=function(){if(n>=0&&n<r-x){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};i.forEach((function(t){t(e)})),i=[]}},k=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){B(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,A),removeEventListener("pointercancel",r,A)};addEventListener("pointerup",n,A),addEventListener("pointercancel",r,A)}(t,e):B(t,e)}},N=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,k,A)}))},R=[100,300],q=function(e,r){r=r||{},F((function(){var a,o=w(),u=v("FID"),c=function(e){e.startTime<o.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),a(!0))},s=function(e){e.forEach(c)},f=p("first-input",s);a=h(e,u,R,r.reportAllChanges),f&&T(y((function(){s(f.takeRecords()),f.disconnect()}))),f&&l((function(){var o;u=v("FID"),a=h(e,u,R,r.reportAllChanges),i=[],n=-1,t=null,N(addEventListener),o=c,i.push(o),D()}))}))},H=0,O=1/0,_=0,j=function(e){e.forEach((function(e){e.interactionId&&(O=Math.min(O,e.interactionId),_=Math.max(_,e.interactionId),H=_?(_-O)/7+1:0)}))},V=function(){return a?H:performance.interactionCount||0},U=function(){"interactionCount"in performance||a||(a=p("event",j,{type:"event",buffered:!0,durationThreshold:0}))},z=[200,500],G=0,J=function(){return V()-G},K=[],Q={},W=function(e){var t=K[K.length-1],n=Q[e.interactionId];if(n||K.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};Q[r.id]=r,K.push(r)}K.sort((function(e,t){return t.latency-e.latency})),K.splice(10).forEach((function(e){delete Q[e.id]}))}},X=function(e,t){t=t||{},F((function(){U();var n,r=v("INP"),i=function(e){e.forEach((function(e){(e.interactionId&&W(e),"first-input"===e.entryType)&&(!K.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&W(e))}));var t,i=(t=Math.min(K.length-1,Math.floor(J()/50)),K[t]);i&&i.latency!==r.value&&(r.value=i.latency,r.entries=i.entries,n())},a=p("event",i,{durationThreshold:t.durationThreshold||40});n=h(e,r,z,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),T((function(){i(a.takeRecords()),r.value<0&&J()>0&&(r.value=0,r.entries=[]),n(!0)})),l((function(){K=[],G=V(),r=v("INP"),n=h(e,r,z,t.reportAllChanges)})))}))},Y=[2500,4e3],Z={},$=[800,1800],ee=function e(t){document.prerendering?F((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},te=function(e,t){t=t||{};var n=v("TTFB"),r=h(e,n,$,t.reportAllChanges);ee((function(){var i=o();if(i){var a=i.responseStart;if(a<=0||a>performance.now())return;n.value=Math.max(a-m(),0),n.entries=[i],r(!0),l((function(){n=v("TTFB",0),(r=h(e,n,$,t.reportAllChanges))(!0)}))}}))};return e.CLSThresholds=I,e.FCPThresholds=M,e.FIDThresholds=R,e.INPThresholds=z,e.LCPThresholds=Y,e.TTFBThresholds=$,e.onCLS=function(e,t){!function(e,t){t=t||{},P(y((function(){var n,r=v("CLS",0),i=0,a=[],o=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=a[0],n=a[a.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,a.push(e)):(i=e.value,a=[e])}})),i>r.value&&(r.value=i,r.entries=a,n())},u=p("layout-shift",o);u&&(n=h(e,r,I,t.reportAllChanges),T((function(){o(u.takeRecords()),n(!0)})),l((function(){i=0,r=v("CLS",0),n=h(e,r,I,t.reportAllChanges),g((function(){return n()}))})),setTimeout(n,0))})))}((function(t){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:s(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:u(t.startTime)})}}var r;e.attribution={}}(t),e(t)}),t)},e.onFCP=function(e,t){P((function(t){!function(e){if(e.entries.length){var t=o(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:u(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:u(d())}}(t),e(t)}),t)},e.onFID=function(e,t){q((function(t){!function(e){var t=e.entries[0];e.attribution={eventTarget:s(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:u(t.startTime)}}(t),e(t)}),t)},e.onINP=function(e,t){X((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:s(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:u(t.startTime)}}else e.attribution={}}(t),e(t)}),t)},e.onLCP=function(e,t){!function(e,t){t=t||{},F((function(){var n,r=w(),i=v("LCP"),a=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-m(),0),i.entries=[t],n())},o=p("largest-contentful-paint",a);if(o){n=h(e,i,Y,t.reportAllChanges);var u=y((function(){Z[i.id]||(a(o.takeRecords()),o.disconnect(),Z[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,u,!0)})),T(u),l((function(r){i=v("LCP"),n=h(e,i,Y,t.reportAllChanges),g((function(){i.value=performance.now()-r.timeStamp,Z[i.id]=!0,n(!0)}))}))}}))}((function(t){!function(e){if(e.entries.length){var t=o();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),u=Math.max(a,i?(i.requestStart||i.startTime)-n:0),c=Math.max(u,i?i.responseEnd-n:0),f=Math.max(c,r?r.startTime-n:0),d={element:s(r.element),timeToFirstByte:a,resourceLoadDelay:u-a,resourceLoadTime:c-u,elementRenderDelay:f-c,navigationEntry:t,lcpEntry:r};return r.url&&(d.url=r.url),i&&(d.lcpResourceEntry=i),void(e.attribution=d)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(t),e(t)}),t)},e.onTTFB=function(e,t){te((function(t){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(t),e(t)}),t)},Object.defineProperty(e,"__esModule",{value:!0}),e}({});

const SUPPORTS_LCP = !!window.LargestContentfulPaint;
const SUPPORTS_INP = SUPPORTS_LCP;

const REPORT_ANYWAY_AFTER_SECONDS = 5;

class DiscourseClientPerformance {
  observer = null;

  static start() {
    this.instance = new DiscourseClientPerformance();
    this.instance.listenForPerformanceEntries();
  }

  constructor() {
    this.path = window.location.pathname;

    window.addEventListener("beforeunload", () => {
      if (performance.now() > REPORT_ANYWAY_AFTER_SECONDS * 1000) {
        this.report();
      }
    });
  }

  listenForPerformanceEntries() {
    this.observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(this.handlePerformanceEntry.bind(this));
      this.reportIfReady();
    });

    this.observer.observe({
      buffered: true,
      type: "navigation",
    });

    this.observer.observe({
      buffered: true,
      type: "paint",
    });

    this.observer.observe({
      buffered: true,
      type: "mark",
    });

    // Safari bug? Doesn't seem to support `buffered: true` on "paint" events
    // so we have to check if it already fired. No harm in running this
    // in other browsers as well.
    const paintEvents = performance.getEntriesByType("paint");
    paintEvents.forEach(this.handlePerformanceEntry.bind(this));

    webVitals.onLCP(this.handleWebVital.bind(this));
    webVitals.onINP(this.handleWebVital.bind(this));

    this.reportIfReady();
  }

  handlePerformanceEntry(e) {
    if (e.entryType === "navigation") {
      this.navigationEntry = e;
    } else if (e.entryType === "paint" && e.name === "first-contentful-paint") {
      this.firstContentfulPaintEntry = e;
    } else if (e.entryType === "mark" && e.name === "discourse-init") {
      this.discourseInitEntry = e;
    } else if (e.entryType === "mark" && e.name === "discourse-paint") {
      this.discoursePaintEntry = e;
    }
    this.reportIfReady();
  }

  handleWebVital(e) {
    if (e.name === "LCP") {
      this.largestContentfulPaint = e;
    } else if (e.name === "INP") {
      this.interactionNextPaint = e;
    }
    this.reportIfReady();
  }

  reportIfReady() {
    if (
      this.navigationEntry &&
      this.firstContentfulPaintEntry &&
      this.discourseInitEntry &&
      this.discoursePaintEntry &&
      (!SUPPORTS_LCP || this.largestContentfulPaint) &&
      (!SUPPORTS_INP || this.interactionNextPaint)
    ) {
      this.report();
    }
  }

  report() {
    if (this.reported) {
      return;
    }
    this.reported = true;

    const data = {};

    data["time_to_first_byte"] = this.navigationEntry?.responseStart;
    data["discourse_init"] = this.discourseInitEntry?.startTime;
    data["discourse_paint"] = this.discoursePaintEntry?.startTime;
    data["dom_content_loaded"] =
      this.navigationEntry?.domContentLoadedEventStart;
    data["first_contentful_paint"] = this.firstContentfulPaintEntry?.startTime;
    if (SUPPORTS_LCP) {
      data["largest_contentful_paint"] = this.largestContentfulPaint?.value;
    }
    if (SUPPORTS_INP) {
      data["interaction_next_paint"] = this.interactionNextPaint?.value;
      data["interaction_next_paint_target"] =
        this.interactionNextPaint?.attribution.eventTarget;
    }


    data["path"] = this.path;

    const assetStats = this.getAssetStatsByDomain();

    data["assets"] = {
      local: assetStats.get(document.location.host),
    };

    const siteInfo = document.getElementById("data-discourse-setup").dataset;
    if (siteInfo.cdn) {
      data["assets"]["app_cdn"] = assetStats.get(new URL(siteInfo.cdn).host);
    }
    if (siteInfo.s3Cdn) {
      data["assets"]["s3_cdn"] = assetStats.get(new URL(siteInfo.s3Cdn).host);
    }

    const body = new FormData();
    body.append("data", JSON.stringify(data));

    navigator.sendBeacon("/client-performance/report.json", body);
  }

  getAssetStatsByDomain() {
    const domResourceUrls = new Set();

    document.querySelectorAll("SCRIPT, LINK[rel=stylesheet]").forEach((el) => {
      if (el.async) {
        return;
      }
      const src = el.src || el.href;
      if (!src) {
        return;
      }
      domResourceUrls.add(new URL(src, window.location).toString());
    });

    const resourcePerformanceInfos = new Map();

    performance.getEntriesByType("resource").forEach((r) => {
      if (!domResourceUrls.has(r.name)) {
        return;
      }

      if (r.responseEnd) {
        resourcePerformanceInfos.set(r.name, {
          duration: r.responseEnd - r.startTime,
          finishedAt: r.responseEnd,
          status: "success",
        });
      } else {
        resourcePerformanceInfos.set(r.name, { status: "fail" });
      }
    });

    for (const url of domResourceUrls) {
      if (!resourcePerformanceInfos.has(url)) {
        resourcePerformanceInfos.set(url, { status: "pending" });
      }
    }

    const domainData = new Map();

    for (const [url, resourceInfo] of resourcePerformanceInfos) {
      const domain = new URL(url).host;

      let thisDomainData = domainData.get(domain);
      if (!thisDomainData) {
        thisDomainData = {
          success_count: 0,
          fail_count: 0,
          pending_count: 0,
          max_duration: 0,
          domain,
        };
        domainData.set(domain, thisDomainData);
      }

      thisDomainData[`${resourceInfo.status}_count`] += 1;
      if (resourceInfo.duration) {
        thisDomainData.max_duration = Math.max(
          thisDomainData.max_duration,
          Math.round(resourceInfo.duration) / 1000
        );
      }
    }

    return domainData;
  }

  round(value, precision = 1) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}

DiscourseClientPerformance.start();
