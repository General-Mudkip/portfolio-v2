var N,a,J,te,x,j,K,F,C={},Q=[],ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W=Array.isArray;function w(e,_){for(var t in _)e[t]=_[t];return e}function X(e){var _=e.parentNode;_&&_.removeChild(e)}function oe(e,_,t){var r,o,l,f={};for(l in _)l=="key"?r=_[l]:l=="ref"?o=_[l]:f[l]=_[l];if(arguments.length>2&&(f.children=arguments.length>3?N.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)f[l]===void 0&&(f[l]=e.defaultProps[l]);return L(e,f,r,o,null)}function L(e,_,t,r,o){var l={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++J,__i:-1,__u:0};return o==null&&a.vnode!=null&&a.vnode(l),l}function A(e){return e.children}function M(e,_){this.props=e,this.context=_}function S(e,_){if(_==null)return e.__?S(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?S(e):null}function Y(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Y(e)}}function z(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!H.__r++||j!==a.debounceRendering)&&((j=a.debounceRendering)||K)(H)}function H(){var e,_,t,r,o,l,f,u,c;for(x.sort(F);e=x.shift();)e.__d&&(_=x.length,r=void 0,l=(o=(t=e).__v).__e,u=[],c=[],(f=t.__P)&&((r=w({},o)).__v=o.__v+1,a.vnode&&a.vnode(r),B(f,r,o,t.__n,f.ownerSVGElement!==void 0,32&o.__u?[l]:null,u,l??S(o),!!(32&o.__u),c),r.__.__k[r.__i]=r,_e(u,r,c),r.__e!=l&&Y(r)),x.length>_&&x.sort(F));H.__r=0}function Z(e,_,t,r,o,l,f,u,c,i,p){var n,m,s,h,k,v=r&&r.__k||Q,d=_.length;for(t.__d=c,re(t,_,v),c=t.__d,n=0;n<d;n++)(s=t.__k[n])!=null&&typeof s!="boolean"&&typeof s!="function"&&(m=s.__i===-1?C:v[s.__i]||C,s.__i=n,B(e,s,m,o,l,f,u,c,i,p),h=s.__e,s.ref&&m.ref!=s.ref&&(m.ref&&R(m.ref,null,s),p.push(s.ref,s.__c||h,s)),k==null&&h!=null&&(k=h),65536&s.__u||m.__k===s.__k?c=ee(s,c,e):typeof s.type=="function"&&s.__d!==void 0?c=s.__d:h&&(c=h.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=c,t.__e=k}function re(e,_,t){var r,o,l,f,u,c=_.length,i=t.length,p=i,n=0;for(e.__k=[],r=0;r<c;r++)(o=e.__k[r]=(o=_[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?L(null,o,null,null,o):W(o)?L(A,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?L(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=ie(o,t,f=r+n,p),o.__i=u,l=null,u!==-1&&(p--,(l=t[u])&&(l.__u|=131072)),l==null||l.__v===null?(u==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):u!==f&&(u===f+1?n++:u>f?p>c-f?n+=u-f:n--:n=u<f&&u==f-1?u-f:0,u!==r+n&&(o.__u|=65536))):(l=t[r])&&l.key==null&&l.__e&&(l.__e==e.__d&&(e.__d=S(l)),I(l,l,!1),t[r]=null,p--);if(p)for(r=0;r<i;r++)(l=t[r])!=null&&(131072&l.__u)==0&&(l.__e==e.__d&&(e.__d=S(l)),I(l,l))}function ee(e,_,t){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,_=ee(r[o],_,t));return _}return e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e),_&&_.nextSibling}function le(e,_){return _=_||[],e==null||typeof e=="boolean"||(W(e)?e.some(function(t){le(t,_)}):_.push(e)),_}function ie(e,_,t,r){var o=e.key,l=e.type,f=t-1,u=t+1,c=_[t];if(c===null||c&&o==c.key&&l===c.type)return t;if(r>(c!=null&&(131072&c.__u)==0?1:0))for(;f>=0||u<_.length;){if(f>=0){if((c=_[f])&&(131072&c.__u)==0&&o==c.key&&l===c.type)return f;f--}if(u<_.length){if((c=_[u])&&(131072&c.__u)==0&&o==c.key&&l===c.type)return u;u++}}return-1}function G(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||ne.test(_)?t:t+"px"}function U(e,_,t,r,o){var l;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||G(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||G(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")l=_!==(_=_.replace(/(PointerCapture)$|Capture$/,"$1")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+l]=t,t?r?t.u=r.u:(t.u=Date.now(),e.addEventListener(_,l?q:V,l)):e.removeEventListener(_,l?q:V,l);else{if(o)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function V(e){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(a.event?a.event(e):e)}function q(e){return this.l[e.type+!0](a.event?a.event(e):e)}function B(e,_,t,r,o,l,f,u,c,i){var p,n,m,s,h,k,v,d,y,b,D,P,O,T,$,g=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),l=[u=_.__e=t.__e]),(p=a.__b)&&p(_);e:if(typeof g=="function")try{if(d=_.props,y=(p=g.contextType)&&r[p.__c],b=p?y?y.props.value:p.__:r,t.__c?v=(n=_.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?_.__c=n=new g(d,b):(_.__c=n=new M(d,b),n.constructor=g,n.render=fe),y&&y.sub(n),n.props=d,n.state||(n.state={}),n.context=b,n.__n=r,m=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,g.getDerivedStateFromProps(d,n.__s))),s=n.props,h=n.state,n.__v=_,m)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&d!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(d,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(d,n.__s,b)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(n.props=d,n.state=n.__s,n.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(E){E&&(E.__=_)}),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[],n.__h.length&&f.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(d,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,h,k)})}if(n.context=b,n.props=d,n.__P=e,n.__e=!1,P=a.__r,O=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,P&&P(_),p=n.render(n.props,n.state,n.context),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[]}else do n.__d=!1,P&&P(_),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++O<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),m||n.getSnapshotBeforeUpdate==null||(k=n.getSnapshotBeforeUpdate(s,h)),Z(e,W($=p!=null&&p.type===A&&p.key==null?p.props.children:p)?$:[$],_,t,r,o,l,f,u,c,i),n.base=_.__e,_.__u&=-161,n.__h.length&&f.push(n),v&&(n.__E=n.__=null)}catch(E){_.__v=null,c||l!=null?(_.__e=u,_.__u|=c?160:32,l[l.indexOf(u)]=null):(_.__e=t.__e,_.__k=t.__k),a.__e(E,_,t)}else l==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=se(t.__e,_,t,r,o,l,f,c,i);(p=a.diffed)&&p(_)}function _e(e,_,t){_.__d=void 0;for(var r=0;r<t.length;r++)R(t[r],t[++r],t[++r]);a.__c&&a.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(l){l.call(o)})}catch(l){a.__e(l,o.__v)}})}function se(e,_,t,r,o,l,f,u,c){var i,p,n,m,s,h,k,v=t.props,d=_.props,y=_.type;if(y==="svg"&&(o=!0),l!=null){for(i=0;i<l.length;i++)if((s=l[i])&&"setAttribute"in s==!!y&&(y?s.localName===y:s.nodeType===3)){e=s,l[i]=null;break}}if(e==null){if(y===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,d.is&&d),l=null,u=!1}if(y===null)v===d||u&&e.data===d||(e.data=d);else{if(l=l&&N.call(e.childNodes),v=t.props||C,!u&&l!=null)for(v={},i=0;i<e.attributes.length;i++)v[(s=e.attributes[i]).name]=s.value;for(i in v)s=v[i],i=="children"||(i=="dangerouslySetInnerHTML"?n=s:i==="key"||i in d||U(e,i,null,s,o));for(i in d)s=d[i],i=="children"?m=s:i=="dangerouslySetInnerHTML"?p=s:i=="value"?h=s:i=="checked"?k=s:i==="key"||u&&typeof s!="function"||v[i]===s||U(e,i,s,v[i],o);if(p)u||n&&(p.__html===n.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(n&&(e.innerHTML=""),Z(e,W(m)?m:[m],_,t,r,o&&y!=="foreignObject",l,f,l?l[0]:t.__k&&S(t,0),u,c),l!=null)for(i=l.length;i--;)l[i]!=null&&X(l[i]);u||(i="value",h!==void 0&&(h!==e[i]||y==="progress"&&!h||y==="option"&&h!==v[i])&&U(e,i,h,v[i],!1),i="checked",k!==void 0&&k!==e[i]&&U(e,i,k,v[i],!1))}return e}function R(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){a.__e(r,t)}}function I(e,_,t){var r,o;if(a.unmount&&a.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||R(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){a.__e(l,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&I(r[o],_,t||typeof e.type!="function");t||e.__e==null||X(e.__e),e.__=e.__e=e.__d=void 0}function fe(e,_,t){return this.constructor(e,t)}function ue(e,_,t){var r,o,l,f;a.__&&a.__(e,_),o=(r=typeof t=="function")?null:t&&t.__k||_.__k,l=[],f=[],B(_,e=(!r&&t||_).__k=oe(A,null,[e]),o||C,C,_.ownerSVGElement!==void 0,!r&&t?[t]:o?null:_.firstChild?N.call(_.childNodes):null,l,!r&&t?t:o?o.__e:_.firstChild,r,f),_e(l,e,f)}function ce(e,_){ue(e,_,ce)}N=Q.slice,a={__e:function(e,_,t,r){for(var o,l,f;_=_.__;)if((o=_.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(e)),f=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),f=o.__d),f)return o.__E=o}catch(u){e=u}throw e}},J=0,te=function(e){return e!=null&&e.constructor==null},M.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},t),this.props)),e&&w(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),z(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),z(this))},M.prototype.render=A,x=[],K=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F=function(e,_){return e.__v.__b-_.__v.__b},H.__r=0;export{le as $,ce as B,M as b,a as l,ue as q,te as t,oe as y};
