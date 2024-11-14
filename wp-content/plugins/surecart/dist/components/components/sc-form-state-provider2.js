import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{v,c as checkoutMachine}from"./store3.js";import{u as updateFormState}from"./mutations5.js";import{d as defineCustomElement$2}from"./sc-block-ui2.js";import{d as defineCustomElement$1}from"./sc-spinner2.js";const ScFormStateProvider=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scSetCheckoutFormState=createEvent(this,"scSetCheckoutFormState",7),this._stateService=v(checkoutMachine),this.checkoutState=checkoutMachine.initialState}setState(e){const{send:t}=this._stateService;return updateFormState(e),t(e)}handleCheckoutStateChange(e){this.scSetCheckoutFormState.emit(e.value)}componentWillLoad(){this._stateService.subscribe((e=>this.checkoutState=e)),this._stateService.start()}disconnectedCallback(){this._stateService.stop()}handleSetStateEvent(e){this.setState(e.detail)}async handlePaid(){this.setState("PAID")}render(){return"expired"===this.checkoutState.value?h("sc-block-ui",null,h("div",null,wp.i18n.__("Please refresh the page.","surecart"))):h("slot",null)}static get watchers(){return{checkoutState:["handleCheckoutStateChange"]}}},[1,"sc-form-state-provider",{checkoutState:[32]},[[0,"scSetState","handleSetStateEvent"],[0,"scPaid","handlePaid"]]]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-form-state-provider","sc-block-ui","sc-spinner"].forEach((e=>{switch(e){case"sc-form-state-provider":customElements.get(e)||customElements.define(e,ScFormStateProvider);break;case"sc-block-ui":customElements.get(e)||defineCustomElement$2();break;case"sc-spinner":customElements.get(e)||defineCustomElement$1()}}))}export{ScFormStateProvider as S,defineCustomElement as d};