import{L as Ne,D as q,G as Se,H as le,u as g,O as Te,a4 as J,a8 as Q,r as De,ae as Y,S as Z,a6 as w}from"./Icon-c17b099f.js";import{h as Ce,u as Fe}from"./Tooltip-7915c0e9.js";import{j as Pe,X as ee}from"./index-b92a2438.js";import{_ as _e}from"./Input-4ef7b5e6.js";import{i as Oe}from"./light-6413ae5a.js";import{d as j,h as u,r as R,a1 as ke,a0 as Ae,c as Ue,n as $e}from"./vue-i18n.runtime.esm-bundler-151cb611.js";const Ee=j({name:"Add",render(){return u("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),He=j({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});function Le(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function je(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function H(n){return n==null?!0:!Number.isNaN(n)}function ne(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function L(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const ze=Ne([q("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),q("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),te=800,re=100,Ge=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Ye=j({name:"InputNumber",props:Ge,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:D}=Se(n),a=le("InputNumber","-input-number",ze,Oe,n,p),{localeRef:v}=Ce("InputNumber"),M=Pe(n),{mergedSizeRef:ie,mergedDisabledRef:ue,mergedStatusRef:ae}=M,c=R(null),z=R(null),G=R(null),C=R(n.defaultValue),oe=ke(n,"value"),d=Fe(oe,C),h=R(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:F(r));return Math.max(...t)},de=g(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),N=g(()=>{const e=L(n.step);return e!==null?e===0?1:Math.abs(e):1}),K=g(()=>{const e=L(n.min);return e!==null?e:null}),W=g(()=>{const e=L(n.max);return e!==null?e:null}),V=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":r,onUpdateValue:l,onChange:s}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=M;s&&w(s,e),l&&w(l,e),r&&w(r,e),C.value=e,f(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:l})=>{const{value:s}=h;if(l&&je(s))return!1;const f=(n.parse||Le)(s);if(f===null)return t&&V(null),null;if(H(f)){const x=F(f),{precision:B}=n;if(B!==void 0&&B<x&&!r)return!1;let m=parseFloat((f+e).toFixed(B??se(f)));if(H(m)){const{value:$}=W,{value:E}=K;if($!==null&&m>$){if(!t||l)return!1;m=$}if(E!==null&&m<E){if(!t||l)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&V(m),m)}}return!1},b=()=>{const{value:e}=d;if(H(e)){const{format:t,precision:r}=n;t?h.value=t(e):e===null||r===void 0||F(e)>r?h.value=ne(e,void 0):h.value=ne(e,r)}else h.value=String(e)};b();const fe=g(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=N;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),_=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=N;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=M;t&&w(t,e),r()}function me(e){var t,r;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const l=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(l!==!1){const x=(r=c.value)===null||r===void 0?void 0:r.inputElRef;x&&(x.value=String(l||"")),d.value===l&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:f}=M;s&&w(s,e),f(),$e(()=>{b()})}function ve(e){const{onClear:t}=n;t&&w(t,e)}function O(){const{value:e}=_;if(!e){U();return}const{value:t}=d;if(t===null)n.validator||V(X());else{const{value:r}=N;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function k(){const{value:e}=P;if(!e){A();return}const{value:t}=d;if(t===null)n.validator||V(X());else{const{value:r}=N;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const he=ce,ge=me;function X(){if(n.validator)return null;const{value:e}=K,{value:t}=W;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){ve(e),V(null)}function be(e){var t,r,l;!((t=G.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=z.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(l=c.value)===null||l===void 0||l.activate()}let I=null,y=null,S=null;function A(){S&&(window.clearTimeout(S),S=null),I&&(window.clearInterval(I),I=null)}function U(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function xe(){A(),S=window.setTimeout(()=>{I=window.setInterval(()=>{k()},re)},te),Q("mouseup",document,A,{once:!0})}let T=null;function we(){U(),T=window.setTimeout(()=>{y=window.setInterval(()=>{O()},re)},te),Q("mouseup",document,U,{once:!0})}const Ve=()=>{y||O()},Ie=()=>{I||k()};function ye(e){var t,r;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=c.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!_.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&O()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&k()}}function Be(e){h.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ae(d,()=>{b()});const Re={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Me=Te("InputNumber",D,p);return Object.assign(Object.assign({},Re),{rtlEnabled:Me,inputInstRef:c,minusButtonInstRef:z,addButtonInstRef:G,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:C,mergedValue:d,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:ie,mergedDisabled:ue,displayedValue:h,addable:_,minusable:P,mergedStatus:ae,handleFocus:he,handleBlur:ge,handleClear:pe,handleMouseDown:be,handleAddClick:Ve,handleMinusClick:Ie,handleAddMousedown:we,handleMinusMousedown:xe,handleKeyDown:ye,handleUpdateDisplayedValue:Be,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Ue(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,r,l,s]=De(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${l})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>u(ee,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Y(i["minus-icon"],()=>[u(Z,{clsPrefix:n},{default:()=>u(He,null)})])}),D=()=>u(ee,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Y(i["add-icon"],()=>[u(Z,{clsPrefix:n},{default:()=>u(Ee,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(_e,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),J(i.prefix,v=>v?u("span",{class:`${n}-input-number-prefix`},v):null)]:(a=i.prefix)===null||a===void 0?void 0:a.call(i)},suffix:()=>{var a;return this.showButton?[J(i.suffix,v=>v?u("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,D()]:(a=i.suffix)===null||a===void 0?void 0:a.call(i)}}))}});export{Ye as _};
