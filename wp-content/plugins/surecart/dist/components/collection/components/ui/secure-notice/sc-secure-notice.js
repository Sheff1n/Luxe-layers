import{h}from"@stencil/core";export class ScSecureNotice{render(){return h("div",{class:"notice",part:"base"},h("svg",{class:"notice__icon",part:"icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512",fill:"currentColor"},h("path",{d:"M368,192H352V112a96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Zm-48,0H192V112a64,64,0,1,1,128,0Z"})),h("span",{class:"notice__text",part:"text"},h("slot",{name:"prefix"}),h("slot",null),h("slot",{name:"suffix"})))}static get is(){return"sc-secure-notice"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-secure-notice.scss"]}}static get styleUrls(){return{$:["sc-secure-notice.css"]}}}