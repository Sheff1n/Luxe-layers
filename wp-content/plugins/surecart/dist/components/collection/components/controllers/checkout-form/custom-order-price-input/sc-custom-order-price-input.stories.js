export default{title:"Components/Checkout/Custom Order Price Input"};const Template=({loading:o,label:a,help:e,amount:t,currency:n,ad_hoc_max_amount:c,ad_hoc_min_amount:r})=>(setTimeout((()=>{document.querySelector("sc-custom-order-price-input").price={id:"test",amount:t,currency:n,ad_hoc_max_amount:c,ad_hoc_min_amount:r}})),`<sc-custom-order-price-input ${o&&"loading"} label="${a}" help="${e}"></sc-custom-order-price-input>`);export const Default=Template.bind({});Default.args={loading:!1,label:"US Dollars",help:"Us dollars",currency:"usd",ad_hoc:!0,ad_hoc_min_amount:100,ad_hoc_max_amount:1e4};export const Euros=Template.bind({});Euros.args={loading:!1,currency:"eur",label:"Euros",help:"EU Euros",ad_hoc:!0,ad_hoc_min_amount:100,ad_hoc_max_amount:1e4};export const Loading=Template.bind({});Loading.args={loading:!0,currency:"eur",ad_hoc:!0,ad_hoc_min_amount:100,ad_hoc_max_amount:1e4};