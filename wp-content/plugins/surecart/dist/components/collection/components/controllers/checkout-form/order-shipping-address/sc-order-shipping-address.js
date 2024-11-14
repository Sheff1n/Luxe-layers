import{h}from"@stencil/core";import{state as checkoutState,onChange}from"@store/checkout";import{lockCheckout,unLockCheckout}from"@store/checkout/mutations";import{__}from"@wordpress/i18n";import{createOrUpdateCheckout}from"../../../../services/session";import{fullShippingAddressRequired,shippingAddressRequired}from"@store/checkout/getters";import{formLoading}from"@store/form/getters";export class ScOrderShippingAddress{constructor(){this.names={name:"shipping_name",country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"},this.label=void 0,this.required=!1,this.full=void 0,this.showName=void 0,this.namePlaceholder=__("Name or Company Name","surecart"),this.countryPlaceholder=__("Country","surecart"),this.cityPlaceholder=__("City","surecart"),this.line1Placeholder=__("Address","surecart"),this.line2Placeholder=__("Address Line 2","surecart"),this.postalCodePlaceholder=__("Postal Code/Zip","surecart"),this.statePlaceholder=__("State/Province/Region","surecart"),this.defaultCountry=void 0,this.requireName=!1,this.placeholders={name:__("Name or Company Name","surecart"),country:__("Country","surecart"),city:__("City","surecart"),line_1:__("Address","surecart"),line_2:__("Address Line 2","surecart"),postal_code:__("Postal Code/Zip","surecart"),state:__("State/Province/Region","surecart")},this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}async updateAddressState(e){var t;if(JSON.stringify(e)!==JSON.stringify(this.address)){this.address=e;try{lockCheckout("shipping-address"),checkoutState.checkout=await createOrUpdateCheckout({id:null===(t=checkoutState.checkout)||void 0===t?void 0:t.id,data:{shipping_address:this.address}})}catch(e){console.error(e)}finally{unLockCheckout("shipping-address")}}}async reportValidity(){var e,t;return!this.input||(null===(t=null===(e=this.input)||void 0===e?void 0:e.reportValidity)||void 0===t?void 0:t.call(e))}prefillAddress(){var e;const t=Object.keys(this.address).filter((e=>"country"!==e));t.filter((e=>!this.address[e])).length===t.length&&(this.address={...this.address,...null===(e=checkoutState.checkout)||void 0===e?void 0:e.shipping_address})}componentWillLoad(){var e;this.defaultCountry&&!(null===(e=this.address)||void 0===e?void 0:e.country)&&(this.address.country=this.defaultCountry),this.prefillAddress(),onChange("checkout",(()=>this.prefillAddress()))}render(){return fullShippingAddressRequired()||this.full||this.requireName||this.showName?h("sc-address",{exportparts:"label, help-text, form-control, input__base, select__base, columns, search__base, menu__base",ref:e=>this.input=e,label:this.label||__("Shipping Address","surecart"),placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},names:this.names,required:this.required||shippingAddressRequired(),loading:formLoading(),address:this.address,"show-name":this.showName,"require-name":this.requireName,onScChangeAddress:e=>this.updateAddressState(e.detail)}):h("sc-compact-address",{ref:e=>this.input=e,required:this.required||shippingAddressRequired(),loading:formLoading(),address:this.address,placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},names:this.names,label:this.label,onScChangeAddress:e=>this.updateAddressState(e.detail)})}static get is(){return"sc-order-shipping-address"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-shipping-address.scss"]}}static get styleUrls(){return{$:["sc-order-shipping-address.css"]}}static get properties(){return{label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Label for the field."},attribute:"label",reflect:!1},required:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this required (defaults to false)"},attribute:"required",reflect:!0,defaultValue:"false"},full:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the   address"},attribute:"full",reflect:!1},showName:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the name field."},attribute:"show-name",reflect:!0},namePlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the placeholder fields."},attribute:"name-placeholder",reflect:!1,defaultValue:"__('Name or Company Name', 'surecart')"},countryPlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"country-placeholder",reflect:!1,defaultValue:"__('Country', 'surecart')"},cityPlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"city-placeholder",reflect:!1,defaultValue:"__('City', 'surecart')"},line1Placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"line-1-placeholder",reflect:!1,defaultValue:"__('Address', 'surecart')"},line2Placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"line-2-placeholder",reflect:!1,defaultValue:"__('Address Line 2', 'surecart')"},postalCodePlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"postal-code-placeholder",reflect:!1,defaultValue:"__('Postal Code/Zip', 'surecart')"},statePlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"state-placeholder",reflect:!1,defaultValue:"__('State/Province/Region', 'surecart')"},defaultCountry:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Default country for address"},attribute:"default-country",reflect:!1},requireName:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether to require the name in the address"},attribute:"require-name",reflect:!0,defaultValue:"false"},placeholders:{type:"unknown",mutable:!1,complexType:{original:"Partial<Address>",resolved:"{ name?: string; line_1?: string; line_2?: string; city?: string; state?: string; postal_code?: string; country?: string; constructor?: Function; toString?: () => string; toLocaleString?: () => string; valueOf?: () => Object; hasOwnProperty?: (v: PropertyKey) => boolean; isPrototypeOf?: (v: Object) => boolean; propertyIsEnumerable?: (v: PropertyKey) => boolean; }",references:{Partial:{location:"global"},Address:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"Placeholder values."},defaultValue:"{\n    name: __('Name or Company Name', 'surecart'),\n    country: __('Country', 'surecart'),\n    city: __('City', 'surecart'),\n    line_1: __('Address', 'surecart'),\n    line_2: __('Address Line 2', 'surecart'),\n    postal_code: __('Postal Code/Zip', 'surecart'),\n    state: __('State/Province/Region', 'surecart'),\n  }"}}}static get states(){return{address:{}}}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}}}}}