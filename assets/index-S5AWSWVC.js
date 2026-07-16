(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="185",t0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},e0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hf=0,hh=1,Vf=2,n0=3,i0=0,Yr=1,Gf=2,nr=3,Mi=0,tn=1,Vn=2,ri=0,_s=1,Lo=2,uh=3,dh=4,Wf=5,s0=6,Bi=100,Xf=101,Yf=102,qf=103,Kf=104,$f=200,Zf=201,Jf=202,Qf=203,Do=204,No=205,jf=206,tp=207,ep=208,np=209,ip=210,sp=211,rp=212,ap=213,op=214,Uo=0,Fo=1,Oo=2,ys=3,Bo=4,zo=5,ko=6,Ho=7,wa=0,lp=1,cp=2,Xn=0,Dh=1,Nh=2,Uh=3,Al=4,Fh=5,Oh=6,Bh=7,fh="attached",hp="detached",Cl=300,ai=301,Xi=302,qr=303,Kr=304,_r=306,Yi=1e3,xn=1001,sa=1002,Fe=1003,zh=1004,r0=1004,ir=1005,a0=1005,Ae=1006,$r=1007,o0=1007,ii=1008,l0=1008,mn=1009,kh=1010,Hh=1011,lr=1012,Rl=1013,Un=1014,ln=1015,oi=1016,Pl=1017,Il=1018,cr=1020,Vh=35902,Gh=35899,Wh=1021,Xh=1022,cn=1023,li=1026,zi=1027,Ll=1028,Ta=1029,qi=1030,Dl=1031,c0=1032,Nl=1033,Zr=33776,Jr=33777,Qr=33778,jr=33779,Vo=35840,Go=35841,Wo=35842,Xo=35843,Yo=36196,qo=37492,Ko=37496,$o=37488,Zo=37489,ra=37490,Jo=37491,Qo=37808,jo=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,aa=36285,xl=36286,up=2200,dp=2201,fp=2202,oa=2300,_l=2301,Co=2302,ph=2303,ps=2400,ms=2401,la=2402,Ul=2500,Yh=2501,h0=0,u0=1,d0=2,pp=3200,f0=3201,p0=3202,m0=3203,Si=0,mp=1,_i="",rn="srgb",ca="srgb-linear",ha="linear",xe="srgb",g0="",x0="rg",_0="ga",v0=0,ds=7680,y0=7681,M0=7682,S0=7683,b0=34055,w0=34056,T0=5386,E0=512,A0=513,C0=514,R0=515,P0=516,I0=517,L0=518,mh=519,gp=512,xp=513,_p=514,Fl=515,vp=516,yp=517,Ol=518,Mp=519,ua=35044,D0=35048,N0=35040,U0=35045,F0=35049,O0=35041,B0=35046,z0=35050,k0=35042,H0="100",gh="300 es",En=2e3,Ms=2001,V0={COMPUTE:"compute",RENDER:"render"},G0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},W0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},X0={TEXTURE_COMPARE:"depthTextureCompare"};function Y0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const q0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function sr(s,t){return new q0[s](t)}function Sp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function da(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bp(){const s=da("canvas");return s.style.display="block",s}const Hu={};let Ki=null;function K0(s){Ki=s}function $0(){return Ki}function fa(...s){const t="THREE."+s.shift();Ki?Ki("log",t,...s):console.log(t,...s)}function wp(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=wp(s);const t="THREE."+s.shift();if(Ki)Ki("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function It(...s){s=wp(s);const t="THREE."+s.shift();if(Ki)Ki("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Wi(...s){const t=s.join(" ");t in Hu||(Hu[t]=!0,ot(...s))}function Z0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const J0={[Uo]:Fo,[Oo]:ko,[Bo]:Ho,[ys]:zo,[Fo]:Uo,[ko]:Oo,[Ho]:Bo,[zo]:ys};class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const vs=Math.PI/180,hr=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function qh(s,t){return(s%t+t)%t}function Q0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function j0(s,t,e){return s!==t?(e-s)/(t-s):0}function ta(s,t,e){return(1-e)*s+e*t}function tg(s,t,e,n){return ta(s,t,1-Math.exp(-e*n))}function eg(s,t=1){return t-Math.abs(qh(s,t*2)-t)}function ng(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ig(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function sg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function rg(s,t){return s+Math.random()*(t-s)}function ag(s){return s*(.5-Math.random())}function og(s){s!==void 0&&(Vu=s);let t=Vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lg(s){return s*vs}function cg(s){return s*hr}function hg(s){return(s&s-1)===0&&s!==0}function ug(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function dg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fg(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pg={DEG2RAD:vs,RAD2DEG:hr,generateUUID:Cn,clamp:Yt,euclideanModulo:qh,mapLinear:Q0,inverseLerp:j0,lerp:ta,damp:tg,pingpong:eg,smoothstep:ng,smootherstep:ig,randInt:sg,randFloat:rg,randFloatSpread:ag,seededRandom:og,degToRad:lg,radToDeg:cg,isPowerOfTwo:hg,ceilPowerOfTwo:ug,floorPowerOfTwo:dg,setQuaternionFromProperEuler:fg,normalize:ne,denormalize:an};class Q{static{Q.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,o=Math.sin(o*y)/S,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hc.copy(this).projectOnVector(t),this.sub(hc)}reflect(t){return this.sub(hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new P,Gu=new hn;class Qt{static{Qt.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],y=i[1],S=i[4],_=i[7],T=i[2],b=i[5],A=i[8];return r[0]=a*x+o*y+l*T,r[3]=a*g+o*S+l*b,r[6]=a*m+o*_+l*A,r[1]=c*x+h*y+d*T,r[4]=c*g+h*S+d*b,r[7]=c*m+h*_+d*A,r[2]=u*x+f*y+p*T,r[5]=u*g+f*S+p*b,r[8]=u*m+f*_+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uc.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new Qt,Wu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){const s={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?ha:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ca]:{primaries:t,whitePoint:n,transfer:ha,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}const ce=mg();function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class Tp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=da("canvas")),Ns.width=t.width,Ns.height=t.height;const i=Ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gg=0;class ki{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(dc(i[a].image)):r.push(dc(i[a]))}else r=dc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let xg=0;const fc=new P;class Re extends Kn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=xn,i=xn,r=Ae,a=ii,o=cn,l=mn,c=Re.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Cn(),this.name="",this.source=new ki(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){ot(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Cl;Re.DEFAULT_ANISOTROPY=1;class ve{static{ve.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(f+1)/2,T=(m+1)/2,b=(h+u)/4,A=(d+x)/4,v=(p+g)/4;return S>_&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=b/n,r=A/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=v/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=v/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Re(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ki(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends Rn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Bl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class zl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vg extends Rn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new zl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Kt{static{Kt.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,Mg)}lookAt(t,e,n){const i=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ri.crossVectors(n,bn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ri.crossVectors(n,bn)),Ri.normalize(),Ua.crossVectors(bn,Ri),i[0]=Ri.x,i[4]=Ua.x,i[8]=bn.x,i[1]=Ri.y,i[5]=Ua.y,i[9]=bn.y,i[2]=Ri.z,i[6]=Ua.z,i[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],S=n[7],_=n[11],T=n[15],b=i[0],A=i[4],v=i[8],E=i[12],R=i[1],I=i[5],L=i[9],z=i[13],W=i[2],U=i[6],X=i[10],B=i[14],J=i[3],it=i[7],ut=i[11],lt=i[15];return r[0]=a*b+o*R+l*W+c*J,r[4]=a*A+o*I+l*U+c*it,r[8]=a*v+o*L+l*X+c*ut,r[12]=a*E+o*z+l*B+c*lt,r[1]=h*b+d*R+u*W+f*J,r[5]=h*A+d*I+u*U+f*it,r[9]=h*v+d*L+u*X+f*ut,r[13]=h*E+d*z+u*B+f*lt,r[2]=p*b+x*R+g*W+m*J,r[6]=p*A+x*I+g*U+m*it,r[10]=p*v+x*L+g*X+m*ut,r[14]=p*E+x*z+g*B+m*lt,r[3]=y*b+S*R+_*W+T*J,r[7]=y*A+S*I+_*U+T*it,r[11]=y*v+S*L+_*X+T*ut,r[15]=y*E+S*z+_*B+T*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],y=l*f-c*u,S=o*f-c*d,_=o*u-l*d,T=a*f-c*h,b=a*u-l*h,A=a*d-o*h;return e*(x*y-g*S+m*_)-n*(p*y-g*T+m*b)+i*(p*S-x*T+m*A)-r*(p*_-x*b+g*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],y=e*o-n*a,S=e*l-i*a,_=e*c-r*a,T=n*l-i*o,b=n*c-r*o,A=i*c-r*l,v=h*x-d*p,E=h*g-u*p,R=h*m-f*p,I=d*g-u*x,L=d*m-f*x,z=u*m-f*g,W=y*z-S*L+_*I+T*R-b*E+A*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/W;return t[0]=(o*z-l*L+c*I)*U,t[1]=(i*L-n*z-r*I)*U,t[2]=(x*A-g*b+m*T)*U,t[3]=(u*b-d*A-f*T)*U,t[4]=(l*R-a*z-c*E)*U,t[5]=(e*z-i*R+r*E)*U,t[6]=(g*_-p*A-m*S)*U,t[7]=(h*A-u*_+f*S)*U,t[8]=(a*L-o*R+c*v)*U,t[9]=(n*R-e*L-r*v)*U,t[10]=(p*b-x*_+m*y)*U,t[11]=(d*_-h*b-f*y)*U,t[12]=(o*E-a*I-l*v)*U,t[13]=(e*I-n*E+i*v)*U,t[14]=(x*S-p*T-g*y)*U,t[15]=(h*T-d*S+u*y)*U,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,y=l*c,S=l*h,_=l*d,T=n.x,b=n.y,A=n.z;return i[0]=(1-(x+m))*T,i[1]=(f+_)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(u+m))*b,i[6]=(g+y)*b,i[7]=0,i[8]=(p+S)*A,i[9]=(g-y)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Us.set(i[0],i[1],i[2]).length();const o=Us.set(i[4],i[5],i[6]).length(),l=Us.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Bn.copy(this);const c=1/a,h=1/o,d=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,e.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=En,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===En)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=En,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===En)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Us=new P,Bn=new Kt,yg=new P(0,0,0),Mg=new P(1,1,1),Ri=new P,Ua=new P,bn=new P,Yu=new Kt,qu=new hn;class Yn{constructor(t=0,e=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qu.setFromEuler(this),this.setFromQuaternion(qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sg=0;const Ku=new P,Fs=new hn,ui=new Kt,Fa=new P,wr=new P,bg=new P,wg=new hn,$u=new P(1,0,0),Zu=new P(0,1,0),Ju=new P(0,0,1),Qu={type:"added"},Tg={type:"removed"},Os={type:"childadded",child:null},pc={type:"childremoved",child:null};class me extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new Yn,n=new hn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(wr,Fa,this.up):ui.lookAt(Fa,wr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(ui),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qu),Os.child=t,this.dispatchEvent(Os),Os.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tg),pc.child=t,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qu),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class on extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eg={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function mc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=qh(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=mc(a,r,t+1/3),this.g=mc(a,r,t),this.b=mc(a,r,t-1/3)}return ce.colorSpaceToWorking(this,i),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ot("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Ep[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ce.workingToColorSpace(Ze.copy(this),t),Math.round(Yt(Ze.r*255,0,255))*65536+Math.round(Yt(Ze.g*255,0,255))*256+Math.round(Yt(Ze.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,i=Ze.g,r=Ze.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=rn){ce.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,i=Ze.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Oa);const n=ta(Pi.h,Oa.h,e),i=ta(Pi.s,Oa.s,e),r=ta(Pi.l,Oa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new mt;mt.NAMES=Ep;class Hl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(t),this.density=e}clone(){return new Hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ea{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new Ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $h extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zn=new P,di=new P,gc=new P,fi=new P,Bs=new P,zs=new P,ju=new P,xc=new P,_c=new P,vc=new P,yc=new ve,Mc=new ve,Sc=new ve;class gn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){zn.subVectors(i,e),di.subVectors(n,e),gc.subVectors(t,e);const a=zn.dot(zn),o=zn.dot(di),l=zn.dot(gc),c=di.dot(di),h=di.dot(gc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return yc.setScalar(0),Mc.setScalar(0),Sc.setScalar(0),yc.fromBufferAttribute(t,e),Mc.fromBufferAttribute(t,n),Sc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(yc,r.x),a.addScaledVector(Mc,r.y),a.addScaledVector(Sc,r.z),a}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),di.subVectors(t,e),zn.cross(di).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Bs.subVectors(i,n),zs.subVectors(r,n),xc.subVectors(t,n);const l=Bs.dot(xc),c=zs.dot(xc);if(l<=0&&c<=0)return e.copy(n);_c.subVectors(t,i);const h=Bs.dot(_c),d=zs.dot(_c);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Bs,a);vc.subVectors(t,r);const f=Bs.dot(vc),p=zs.dot(vc);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(zs,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return ju.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(ju,o);const m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Bs,a).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class en{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(t.matrixWorld),this.union(Ba)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),za.subVectors(this.max,Tr),ks.subVectors(t.a,Tr),Hs.subVectors(t.b,Tr),Vs.subVectors(t.c,Tr),Ii.subVectors(Hs,ks),Li.subVectors(Vs,Hs),ji.subVectors(ks,Vs);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ji.z,ji.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ji.z,0,-ji.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ji.y,ji.x,0];return!bc(e,ks,Hs,Vs,za)||(e=[1,0,0,0,1,0,0,0,1],!bc(e,ks,Hs,Vs,za))?!1:(ka.crossVectors(Ii,Li),e=[ka.x,ka.y,ka.z],bc(e,ks,Hs,Vs,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pi=[new P,new P,new P,new P,new P,new P,new P,new P],kn=new P,Ba=new en,ks=new P,Hs=new P,Vs=new P,Ii=new P,Li=new P,ji=new P,Tr=new P,za=new P,ka=new P,ts=new P;function bc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ts.fromArray(s,r);const o=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vi=Ag();function Ag(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function dn(s){Math.abs(s)>65504&&ot("DataUtils.toHalfFloat(): Value out of range."),s=Yt(s,-65504,65504),vi.floatView[0]=s;const t=vi.uint32View[0],e=t>>23&511;return vi.baseTable[e]+((t&8388607)>>vi.shiftTable[e])}function Hr(s){const t=s>>10;return vi.uint32View[0]=vi.mantissaTable[vi.offsetTable[t]+(s&1023)]+vi.exponentTable[t],vi.floatView[0]}class Cg{static toHalfFloat(t){return dn(t)}static fromHalfFloat(t){return Hr(t)}}const Oe=new P,Ha=new Q;let Rg=0;class ue extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Pg extends ue{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Ig extends ue{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Lg extends ue{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Dg extends ue{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Zh extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ng extends ue{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Jh extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ug extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Hr(this.array[t*this.itemSize]);return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=dn(e),this}getY(t){let e=Hr(this.array[t*this.itemSize+1]);return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=dn(e),this}getZ(t){let e=Hr(this.array[t*this.itemSize+2]);return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=dn(e),this}getW(t){let e=Hr(this.array[t*this.itemSize+3]);return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=dn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=dn(e),this.array[t+1]=dn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=dn(e),this.array[t+1]=dn(n),this.array[t+2]=dn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=dn(e),this.array[t+1]=dn(n),this.array[t+2]=dn(i),this.array[t+3]=dn(r),this}}class Tt extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Fg=new en,Er=new P,wc=new P;class Xe{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(wc)),this.expandByPoint(Er.copy(t.center).sub(wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Og=0;const Ln=new Kt,Tc=new me,Gs=new P,wn=new en,Ar=new en,Ve=new P;class qt extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y0(t)?Jh:Zh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(wn.min,Ar.min),wn.expandByPoint(Ve),Ve.addVectors(wn.max,Ar.max),wn.expandByPoint(Ve)):(wn.expandByPoint(Ar.min),wn.expandByPoint(Ar.max))}wn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(t,c),Ve.add(Gs)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ue(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new P,l[v]=new P;const c=new P,h=new P,d=new P,u=new Q,f=new Q,p=new Q,x=new P,g=new P;function m(v,E,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[v].add(x),o[E].add(x),o[R].add(x),l[v].add(g),l[E].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){const R=y[v],I=R.start,L=R.count;for(let z=I,W=I+L;z<W;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new P,_=new P,T=new P,b=new P;function A(v){T.fromBufferAttribute(i,v),b.copy(T);const E=o[v];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(b,E);const I=_.dot(l[v])<0?-1:1;a.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,E=y.length;v<E;++v){const R=y[v],I=R.start,L=R.count;for(let z=I,W=I+L;z<W;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new ue(u,h,d)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class Ss{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ss(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Bg=0;class Ye extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=_s,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ot(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pa extends Ye{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const Cr=new P,Xs=new P,Ys=new P,qs=new Q,Rr=new Q,Ap=new Kt,Va=new P,Pr=new P,Ga=new P,td=new Q,Ec=new Q,ed=new Q;class vl extends me{constructor(t=new pa){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new qt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vl(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Ss(n,3,0,!1)),Ws.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new Q(.5,.5),this.count=1}raycast(t,e){t.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Ap.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-Ys.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Wa(Va.set(-.5,-.5,0),Ys,a,Xs,i,r),Wa(Pr.set(.5,-.5,0),Ys,a,Xs,i,r),Wa(Ga.set(.5,.5,0),Ys,a,Xs,i,r),td.set(0,0),Ec.set(1,0),ed.set(1,1);let o=t.ray.intersectTriangle(Va,Pr,Ga,!1,Cr);if(o===null&&(Wa(Pr.set(-.5,.5,0),Ys,a,Xs,i,r),Ec.set(0,1),o=t.ray.intersectTriangle(Va,Ga,Pr,!1,Cr),o===null))return;const l=t.ray.origin.distanceTo(Cr);l<t.near||l>t.far||e.push({distance:l,point:Cr.clone(),uv:gn.getInterpolation(Cr,Va,Pr,Ga,td,Ec,ed,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wa(s,t,e,n,i,r){qs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Rr.x=r*qs.x-i*qs.y,Rr.y=i*qs.x+r*qs.y):Rr.copy(qs),s.copy(t),s.x+=Rr.x,s.y+=Rr.y,s.applyMatrix4(Ap)}const Xa=new P,nd=new P;class Cp extends me{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Xa.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Xa);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Xa.setFromMatrixPosition(t.matrixWorld),nd.setFromMatrixPosition(this.matrixWorld);const n=Xa.distanceTo(nd)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const mi=new P,Ac=new P,Ya=new P,Di=new P,Cc=new P,qa=new P,Rc=new P;class vr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ac.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(Ac);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ya),o=Di.dot(this.direction),l=-Di.dot(Ya),c=Di.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ac).addScaledVector(Ya,u),f}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,i,r){Cc.subVectors(e,t),qa.subVectors(n,t),Rc.crossVectors(Cc,qa);let a=this.direction.dot(Rc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,t);const l=o*this.direction.dot(qa.crossVectors(Di,qa));if(l<0)return null;const c=o*this.direction.dot(Cc.cross(Di));if(c<0||l+c>a)return null;const h=-o*Di.dot(Rc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je extends Ye{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const id=new Kt,es=new vr,Ka=new Xe,sd=new P,$a=new P,Za=new P,Ja=new P,Pc=new P,Qa=new P,rd=new P,ja=new P;class Ht extends me{constructor(t=new qt,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Pc.fromBufferAttribute(d,t),a?Qa.addScaledVector(Pc,h):Qa.addScaledVector(Pc.sub(e),h))}e.add(Qa)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(Ka.containsPoint(es.origin)===!1&&(es.intersectSphere(Ka,sd)===null||es.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(id.copy(r).invert(),es.copy(t.ray).applyMatrix4(id),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,T=S;_<T;_+=3){const b=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);i=to(this,m,t,n,c,h,d,b,A,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const y=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);i=to(this,a,t,n,c,h,d,y,S,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,T=S;_<T;_+=3){const b=_,A=_+1,v=_+2;i=to(this,m,t,n,c,h,d,b,A,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const y=g,S=g+1,_=g+2;i=to(this,a,t,n,c,h,d,y,S,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function zg(s,t,e,n,i,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Mi,o),l===null)return null;ja.copy(o),ja.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:s}}function to(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,$a),s.getVertexPosition(l,Za),s.getVertexPosition(c,Ja);const h=zg(s,t,e,n,$a,Za,Ja,rd);if(h){const d=new P;gn.getBarycoord(rd,$a,Za,Ja,d),i&&(h.uv=gn.getInterpolatedAttribute(i,o,l,c,d,new Q)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,l,c,d,new Q)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};gn.getNormal($a,Za,Ja,u.normal),h.face=u,h.barycoord=d}return h}const Ir=new ve,ad=new ve,od=new ve,kg=new ve,ld=new Kt,eo=new P,Ic=new Xe,cd=new Kt,Lc=new vr;class Rp extends Ht{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xe),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(i),t.ray.intersectsSphere(Ic)!==!1&&(cd.copy(i).invert(),Lc.copy(t.ray).applyMatrix4(cd),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Lc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ot("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ad.fromBufferAttribute(i.attributes.skinIndex,t),od.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Ir.copy(e),e.set(0,0,0,0)):(Ir.set(...e,1),e.set(0,0,0)),Ir.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=od.getComponent(r);if(a!==0){const o=ad.getComponent(r);ld.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(kg.copy(Ir).applyMatrix4(ld),a)}}return e.isVector4&&(e.w=Ir.w),e.applyMatrix4(this.bindMatrixInverse)}}class Qh extends me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nn extends Re{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Fe,h=Fe,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new Kt,Hg=new Kt;class Gl{constructor(t=[],e=[]){this.uuid=Cn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){ot("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Hg;hd.multiplyMatrices(o,e[r]),hd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Nn(e,t,t,cn,ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(ot("Skeleton: No bone found with UUID:",r),a=new Qh),this.bones.push(a),this.boneInverses.push(new Kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class ur extends ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ks=new Kt,ud=new Kt,no=[],dd=new en,Vg=new Kt,Lr=new Ht,Dr=new Xe;class Pp extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),dd.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(dd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Dr.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),ud.multiplyMatrices(n,Ks),Lr.matrixWorld=ud,Lr.raycast(t,no);for(let a=0,o=no.length;a<o;a++){const l=no[a];l.instanceId=r,l.object=this,e.push(l)}no.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(i*this.count),i,this.count,Ll,ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dc=new P,Gg=new P,Wg=new Qt;class xi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Dc.subVectors(n,e).cross(Gg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wg.getNormalMatrix(t),i=this.coplanarPoint(Dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Xe,Xg=new Q(.5,.5),io=new P;class bs{constructor(t=new xi,e=new xi,n=new xi,i=new xi,r=new xi,a=new xi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],S=r[13],_=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,m-p,T-y).normalize(),i[1].setComponents(c+a,f+h,m+p,T+y).normalize(),i[2].setComponents(c+o,f+d,m+x,T+S).normalize(),i[3].setComponents(c-o,f-d,m-x,T-S).normalize(),n)i[4].setComponents(l,u,g,_).normalize(),i[5].setComponents(c-l,f-u,m-g,T-_).normalize();else if(i[4].setComponents(c-l,f-u,m-g,T-_).normalize(),e===En)i[5].setComponents(c+l,f+u,m+g,T+_).normalize();else if(e===Ms)i[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);const e=Xg.distanceTo(t.center);return ns.radius=.7071067811865476+e,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(io.x=i.normal.x>0?t.max.x:t.min.x,io.y=i.normal.y>0?t.max.y:t.min.y,io.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fd=new Kt;class Wl{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new bs),n[i].setFromProjectionMatrix(fd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new bs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new Wl().copy(this)}}function Nc(s,t){return s-t}function Yg(s,t){return s.z-t.z}function qg(s,t){return t.z-s.z}class Kg{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const un=new Kt,$g=new mt(1,1,1),Zg=new bs,Jg=new Wl,so=new en,is=new Xe,Nr=new P,pd=new P,Qg=new P,Uc=new Kg,Je=new Ht,ro=[];function jg(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function ss(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Ip extends Ht{constructor(t,e,n=e*2,i){super(new qt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Nn(e,t,t,cn,ln);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Nn(e,t,t,Ta,Un);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Nn(e,t,t,cn,ln);n.colorSpace=ce.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new ue(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ue(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,un),this.getBoundingBoxAt(r,so).applyMatrix4(un),t.union(so)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,un),this.getBoundingSphereAt(r,is).applyMatrix4(un),t.union(is)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Nc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;un.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&($g.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Nc),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);jg(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+x;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const p=u[f],{array:x,itemSize:g}=p;x.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new en,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Nr.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Xe;this.getBoundingBoxAt(t,so),so.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Nr.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(Nr))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Nc);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);ss(this._multiDrawCounts,i),ss(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ss(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ss(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ss(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new qt,this._initializeGeometry(r));const a=this.geometry;r.index&&ss(r.index.array,a.index.array);for(const o in r.attributes)ss(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Je.material=this.material,Je.geometry.index=a.index,Je.geometry.attributes=a.attributes,Je.geometry.boundingBox===null&&(Je.geometry.boundingBox=new en),Je.geometry.boundingSphere===null&&(Je.geometry.boundingSphere=new Xe);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];Je.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Je.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Je.geometry.boundingBox),this.getBoundingSphereAt(c,Je.geometry.boundingSphere),Je.raycast(t,ro);for(let d=0,u=ro.length;d<u;d++){const f=ro[d];f.object=this,f.batchId=o,e.push(f)}ro.length=0}Je.material=null,Je.geometry.index=null,Je.geometry.attributes={},Je.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,g=n.isArrayCamera?Jg:Zg;f&&(n.isArrayCamera?g.setFromArrayCamera(n):(un.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(un,n.coordinateSystem,n.reversedDepth)));let m=0;if(this.sortObjects){un.copy(this.matrixWorld).invert(),Nr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(un),pd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(un);for(let _=0,T=c.length;_<T;_++)if(c[_].visible&&c[_].active){const b=c[_].geometryIndex;this.getMatrixAt(_,un),this.getBoundingSphereAt(b,is).applyMatrix4(un);let A=!1;if(f&&(A=!g.intersectsSphere(is)),!A){const v=u[b],E=Qg.subVectors(is.center,Nr).dot(pd);Uc.push(v.start,v.count,E,_)}}const y=Uc.list,S=this.customSort;S===null?y.sort(r.transparent?qg:Yg):S.call(this,y,n);for(let _=0,T=y.length;_<T;_++){const b=y[_];h[m]=b.start*o*l,d[m]=b.count*l,x[m]=b.index,m++}Uc.reset()}else for(let y=0,S=c.length;y<S;y++)if(c[y].visible&&c[y].active){const _=c[y].geometryIndex;let T=!1;if(f&&(this.getMatrixAt(y,un),this.getBoundingSphereAt(_,is).applyMatrix4(un),T=!g.intersectsSphere(is)),!T){const b=u[_];h[m]=b.start*o*l,d[m]=b.count*l,x[m]=y,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class qe extends Ye{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yl=new P,Ml=new P,md=new Kt,Ur=new vr,ao=new Xe,Fc=new P,gd=new P;class ci extends me{constructor(t=new qt,e=new qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)yl.fromBufferAttribute(e,i-1),Ml.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yl.distanceTo(Ml);t.setAttribute("lineDistance",new Tt(n,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;md.copy(i).invert(),Ur.copy(t.ray).applyMatrix4(md);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=h.getX(x),y=h.getX(x+1),S=oo(this,t,Ur,l,m,y,x);S&&e.push(S)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(f),m=oo(this,t,Ur,l,x,g,p-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=oo(this,t,Ur,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=oo(this,t,Ur,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function oo(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(yl.fromBufferAttribute(o,i),Ml.fromBufferAttribute(o,r),e.distanceSqToSegment(yl,Ml,Fc,gd)>n)return;Fc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Fc);if(!(c<t.near||c>t.far))return{distance:c,point:gd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const xd=new P,_d=new P;class hi extends ci{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)xd.fromBufferAttribute(e,i),_d.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xd.distanceTo(_d);t.setAttribute("lineDistance",new Tt(n,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lp extends ci{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class jh extends Ye{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vd=new Kt,xh=new vr,lo=new Xe,co=new P;class tu extends me{constructor(t=new qt,e=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;vd.copy(i).invert(),xh.copy(t.ray).applyMatrix4(vd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){const g=c.getX(p);co.fromBufferAttribute(d,g),yd(co,g,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)co.fromBufferAttribute(d,p),yd(co,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yd(s,t,e,n,i,r,a){const o=xh.distanceSqToPoint(s);if(o<e){const l=new P;xh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Dp extends Re{constructor(t,e,n,i,r=Ae,a=Ae,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class tx extends Dp{constructor(t,e,n,i,r,a,o,l){super({},t,e,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class ex extends Re{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Fe,this.minFilter=Fe,this.generateMipmaps=!1,this.needsUpdate=!0}}class Xl extends Re{constructor(t,e,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class nx extends Xl{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=xn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ix extends Xl{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Aa extends Re{constructor(t=[],e=ai,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class As extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sx extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class ws extends Re{constructor(t,e,n=Un,i,r,a,o=Fe,l=Fe,c,h=li,d=1){if(h!==li&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ki(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Np extends ws{constructor(t,e=Un,n=ai,i,r,a=Fe,o=Fe,l,c=li){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class eu extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class An extends qt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function p(x,g,m,y,S,_,T,b,A,v,E){const R=_/A,I=T/v,L=_/2,z=T/2,W=b/2,U=A+1,X=v+1;let B=0,J=0;const it=new P;for(let ut=0;ut<X;ut++){const lt=ut*I-z;for(let wt=0;wt<U;wt++){const re=wt*R-L;it[x]=re*y,it[g]=lt*S,it[m]=W,c.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[m]=b>0?1:-1,h.push(it.x,it.y,it.z),d.push(wt/A),d.push(1-ut/v),B+=1}}for(let ut=0;ut<v;ut++)for(let lt=0;lt<A;lt++){const wt=u+lt+U*ut,re=u+lt+U*(ut+1),Se=u+(lt+1)+U*(ut+1),de=u+(lt+1)+U*ut;l.push(wt,re,de),l.push(re,Se,de),J+=6}o.addGroup(f,J,E),f+=J,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hi extends qt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=i+1,g=new P,m=new P;for(let y=0;y<=p;y++){let S=0,_=0,T=0,b=0;if(y<=n){const E=y/n,R=E*Math.PI/2;_=-h-t*Math.cos(R),T=t*Math.sin(R),b=-t*Math.cos(R),S=E*d}else if(y<=n+r){const E=(y-n)/r;_=-h+E*e,T=t,b=0,S=d+E*u}else{const E=(y-n-r)/n,R=E*Math.PI/2;_=h+t*Math.sin(R),T=t*Math.cos(R),b=t*Math.sin(R),S=d+u+E*d}const A=Math.max(0,Math.min(1,S/f));let v=0;y===0?v=.5/i:y===p&&(v=-.5/i);for(let E=0;E<=i;E++){const R=E/i,I=R*Math.PI*2,L=Math.sin(I),z=Math.cos(I);m.x=-T*z,m.y=_,m.z=T*L,o.push(m.x,m.y,m.z),g.set(-T*z,b,T*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+v,A)}if(y>0){const E=(y-1)*x;for(let R=0;R<i;R++){const I=E+R,L=E+R+1,z=y*x+R,W=y*x+R+1;a.push(I,L,z),a.push(L,W,z)}}}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Cs extends qt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Gn extends qt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const x=[],g=n/2;let m=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function y(){const _=new P,T=new P;let b=0;const A=(e-t)/n;for(let v=0;v<=r;v++){const E=[],R=v/r,I=R*(e-t)+t;for(let L=0;L<=i;L++){const z=L/i,W=z*l+o,U=Math.sin(W),X=Math.cos(W);T.x=I*U,T.y=-R*n+g,T.z=I*X,d.push(T.x,T.y,T.z),_.set(U,A,X).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-R),E.push(p++)}x.push(E)}for(let v=0;v<i;v++)for(let E=0;E<r;E++){const R=x[E][v],I=x[E+1][v],L=x[E+1][v+1],z=x[E][v+1];(t>0||E!==0)&&(h.push(R,I,z),b+=3),(e>0||E!==r-1)&&(h.push(I,L,z),b+=3)}c.addGroup(m,b,0),m+=b}function S(_){const T=p,b=new Q,A=new P;let v=0;const E=_===!0?t:e,R=_===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;const I=p;for(let L=0;L<=i;L++){const W=L/i*l+o,U=Math.cos(W),X=Math.sin(W);A.x=E*X,A.y=g*R,A.z=E*U,d.push(A.x,A.y,A.z),u.push(0,R,0),b.x=U*.5+.5,b.y=X*.5*R+.5,f.push(b.x,b.y),p++}for(let L=0;L<i;L++){const z=T+L,W=I+L;_===!0?h.push(W,W+1,z):h.push(W+1,W,z),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Gn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $i extends qt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new P,_=new P,T=new P;for(let b=0;b<e.length;b+=3)f(e[b+0],S),f(e[b+1],_),f(e[b+2],T),l(S,_,T,y)}function l(y,S,_,T){const b=T+1,A=[];for(let v=0;v<=b;v++){A[v]=[];const E=y.clone().lerp(_,v/b),R=S.clone().lerp(_,v/b),I=b-v;for(let L=0;L<=I;L++)L===0&&v===b?A[v][L]=E:A[v][L]=E.clone().lerp(R,L/I)}for(let v=0;v<b;v++)for(let E=0;E<2*(b-v)-1;E++){const R=Math.floor(E/2);E%2===0?(u(A[v][R+1]),u(A[v+1][R]),u(A[v][R])):(u(A[v][R+1]),u(A[v+1][R+1]),u(A[v+1][R]))}}function c(y){const S=new P;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const _=g(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;a.push(_,1-T)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){const S=a[y+0],_=a[y+2],T=a[y+4],b=Math.max(S,_,T),A=Math.min(S,_,T);b>.9&&A<.1&&(S<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){const _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function p(){const y=new P,S=new P,_=new P,T=new P,b=new Q,A=new Q,v=new Q;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),b.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),T.copy(y).add(S).add(_).divideScalar(3);const I=g(T);x(b,R+0,y,I),x(A,R+2,S,I),x(v,R+4,_,I)}}function x(y,S,_,T){T<0&&y.x===1&&(a[S]=y.x-1),_.x===0&&_.z===0&&(a[S]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.vertices,t.indices,t.radius,t.detail)}}class Yl extends $i{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yl(t.radius,t.detail)}}const ho=new P,uo=new P,Oc=new P,fo=new gn;class Up extends qt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(vs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:g,c:m}=fo;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),fo.getNormal(Oc),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const S=(y+1)%3,_=d[y],T=d[S],b=fo[h[y]],A=fo[h[S]],v=`${_}_${T}`,E=`${T}_${_}`;E in u&&u[E]?(Oc.dot(u[E].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(A.x,A.y,A.z)),u[E]=null):v in u||(u[v]={index0:c[y],index1:c[S],normal:Oc.clone()})}}for(const p in u)if(u[p]){const{index0:x,index1:g}=u[p];ho.fromBufferAttribute(o,x),uo.fromBufferAttribute(o,g),f.push(ho.x,ho.y,ho.z),f.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new Tt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Q:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],a=[],o=new P,l=new Kt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Yt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ql extends $n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fp extends ql{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nu(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Md=new P,Sd=new P,Bc=new nu,zc=new nu,kc=new nu;class iu extends $n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Sd.subVectors(i[0],i[1]).add(i[0]),c=Sd);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Md.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Md),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Bc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),zc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),kc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),kc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Bc.calc(l),zc.calc(l),kc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bd(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function rx(s,t){const e=1-s;return e*e*t}function ax(s,t){return 2*(1-s)*s*t}function ox(s,t){return s*s*t}function ea(s,t,e,n){return rx(s,t)+ax(s,e)+ox(s,n)}function lx(s,t){const e=1-s;return e*e*e*t}function cx(s,t){const e=1-s;return 3*e*e*s*t}function hx(s,t){return 3*(1-s)*s*s*t}function ux(s,t){return s*s*s*t}function na(s,t,e,n,i){return lx(s,t)+cx(s,e)+hx(s,n)+ux(s,i)}class su extends $n{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(na(t,i.x,r.x,a.x,o.x),na(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Op extends $n{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(na(t,i.x,r.x,a.x,o.x),na(t,i.y,r.y,a.y,o.y),na(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends $n{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bp extends $n{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends $n{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ea(t,i.x,r.x,a.x),ea(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends $n{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ea(t,i.x,r.x,a.x),ea(t,i.y,r.y,a.y),ea(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(bd(o,l.x,c.x,h.x,d.x),bd(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Q().fromArray(i))}return this}}var Sl=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:iu,CubicBezierCurve:su,CubicBezierCurve3:Op,EllipseCurve:ql,LineCurve:ru,LineCurve3:Bp,QuadraticBezierCurve:au,QuadraticBezierCurve3:ou,SplineCurve:lu});class zp extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Sl[i.type]().fromJSON(i))}return this}}class ma extends zp{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new au(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new su(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new ql(t,e,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yr extends ma{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ma().fromJSON(i))}return this}}function dx(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=kp(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xx(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ga(r,a,e,o,l,c,0),a}function kp(s,t,e,n,i){let r;if(i===Cx(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=wd(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wd(a/n|0,s[a],s[a+1],r);return r&&dr(r,r.next)&&(_a(r),r=r.next),r}function Ts(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(dr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(_a(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ga(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Sx(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?px(s,n,i,r):fx(s)){t.push(l.i,s.i,c.i),_a(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=mx(Ts(s),t),ga(s,t,e,n,i,r,2)):a===2&&gx(s,t,e,n,i,r):ga(Ts(s),t,e,n,i,r,1);break}}}function fx(s){const t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Vr(i,o,r,l,a,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function px(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Ce(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=_h(f,p,t,e,n),y=_h(x,g,t,e,n);let S=s.prevZ,_=s.nextZ;for(;S&&S.z>=m&&_&&_.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==i&&S!==a&&Vr(o,h,l,d,c,u,S.x,S.y)&&Ce(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&Vr(o,h,l,d,c,u,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==i&&S!==a&&Vr(o,h,l,d,c,u,S.x,S.y)&&Ce(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&Vr(o,h,l,d,c,u,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function mx(s,t){let e=s;do{const n=e.prev,i=e.next.next;!dr(n,i)&&Vp(n,e,e.next,i)&&xa(n,i)&&xa(i,n)&&(t.push(n.i,e.i,i.i),_a(e),_a(e.next),e=s=i),e=e.next}while(e!==s);return Ts(e)}function gx(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tx(a,o)){let l=Gp(a,o);a=Ts(a,a.next),l=Ts(l,l.next),ga(a,t,e,n,i,r,0),ga(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function xx(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=kp(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(wx(c))}i.sort(_x);for(let r=0;r<i.length;r++)e=vx(i[r],e);return e}function _x(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function vx(s,t){const e=yx(s,t);if(!e)return t;const n=Gp(e,s);return Ts(n,n.next),Ts(e,e.next)}function yx(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(dr(s,e))return e;do{if(dr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Hp(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);xa(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Mx(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Mx(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function Sx(s,t,e,n){let i=s;do i.z===0&&(i.z=_h(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,bx(i)}function bx(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function _h(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function wx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hp(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Vr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Hp(s,t,e,n,i,r,a,o)}function Tx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ex(s,t)&&(xa(s,t)&&xa(t,s)&&Ax(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||dr(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function dr(s,t){return s.x===t.x&&s.y===t.y}function Vp(s,t,e,n){const i=mo(Ce(s,t,e)),r=mo(Ce(s,t,n)),a=mo(Ce(e,n,s)),o=mo(Ce(e,n,t));return!!(i!==r&&a!==o||i===0&&po(s,e,t)||r===0&&po(s,n,t)||a===0&&po(e,s,n)||o===0&&po(e,t,n))}function po(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function mo(s){return s>0?1:s<0?-1:0}function Ex(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Vp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function xa(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function Ax(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gp(s,t){const e=vh(s.i,s.x,s.y),n=vh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wd(s,t,e,n){const i=vh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cx(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Rx{static triangulate(t,e,n=2){return dx(t,e,n)}}class Wn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Wn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Td(t),Ed(n,t);let a=t.length;e.forEach(Td);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Ed(n,e[l]);const o=Rx.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Td(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ed(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class fr extends qt{constructor(t=new yr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Px;let S,_=!1,T,b,A,v;if(m){S=m.getSpacedPoints(h),_=!0,u=!1;const j=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,j),b=new P,A=new P,v=new P}u||(g=0,f=0,p=0,x=0);const E=o.extractPoints(c);let R=E.shape;const I=E.holes;if(!Wn.isClockWise(R)){R=R.reverse();for(let j=0,nt=I.length;j<nt;j++){const et=I[j];Wn.isClockWise(et)&&(I[j]=et.reverse())}}function z(j){const et=10000000000000001e-36;let vt=j[0];for(let xt=1;xt<=j.length;xt++){const Gt=xt%j.length,Dt=j[Gt],Zt=Dt.x-vt.x,jt=Dt.y-vt.y,D=Zt*Zt+jt*jt,ye=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(vt.x),Math.abs(vt.y)),le=et*ye*ye;if(D<=le){j.splice(Gt,1),xt--;continue}vt=Dt}}z(R),I.forEach(z);const W=I.length,U=R;for(let j=0;j<W;j++){const nt=I[j];R=R.concat(nt)}function X(j,nt,et){return nt||It("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(nt,et)}const B=R.length;function J(j,nt,et){let vt,xt,Gt;const Dt=j.x-nt.x,Zt=j.y-nt.y,jt=et.x-j.x,D=et.y-j.y,ye=Dt*Dt+Zt*Zt,le=Dt*D-Zt*jt;if(Math.abs(le)>Number.EPSILON){const C=Math.sqrt(ye),M=Math.sqrt(jt*jt+D*D),O=nt.x-Zt/C,V=nt.y+Dt/C,Y=et.x-D/M,rt=et.y+jt/M,at=((Y-O)*D-(rt-V)*jt)/(Dt*D-Zt*jt);vt=O+Dt*at-j.x,xt=V+Zt*at-j.y;const q=vt*vt+xt*xt;if(q<=2)return new Q(vt,xt);Gt=Math.sqrt(q/2)}else{let C=!1;Dt>Number.EPSILON?jt>Number.EPSILON&&(C=!0):Dt<-Number.EPSILON?jt<-Number.EPSILON&&(C=!0):Math.sign(Zt)===Math.sign(D)&&(C=!0),C?(vt=-Zt,xt=Dt,Gt=Math.sqrt(ye)):(vt=Dt,xt=Zt,Gt=Math.sqrt(ye/2))}return new Q(vt/Gt,xt/Gt)}const it=[];for(let j=0,nt=U.length,et=nt-1,vt=j+1;j<nt;j++,et++,vt++)et===nt&&(et=0),vt===nt&&(vt=0),it[j]=J(U[j],U[et],U[vt]);const ut=[];let lt,wt=it.concat();for(let j=0,nt=W;j<nt;j++){const et=I[j];lt=[];for(let vt=0,xt=et.length,Gt=xt-1,Dt=vt+1;vt<xt;vt++,Gt++,Dt++)Gt===xt&&(Gt=0),Dt===xt&&(Dt=0),lt[vt]=J(et[vt],et[Gt],et[Dt]);ut.push(lt),wt=wt.concat(lt)}let re;if(g===0)re=Wn.triangulateShape(U,I);else{const j=[],nt=[];for(let et=0;et<g;et++){const vt=et/g,xt=f*Math.cos(vt*Math.PI/2),Gt=p*Math.sin(vt*Math.PI/2)+x;for(let Dt=0,Zt=U.length;Dt<Zt;Dt++){const jt=X(U[Dt],it[Dt],Gt);Bt(jt.x,jt.y,-xt),vt===0&&j.push(jt)}for(let Dt=0,Zt=W;Dt<Zt;Dt++){const jt=I[Dt];lt=ut[Dt];const D=[];for(let ye=0,le=jt.length;ye<le;ye++){const C=X(jt[ye],lt[ye],Gt);Bt(C.x,C.y,-xt),vt===0&&D.push(C)}vt===0&&nt.push(D)}}re=Wn.triangulateShape(j,nt)}const Se=re.length,de=p+x;for(let j=0;j<B;j++){const nt=u?X(R[j],wt[j],de):R[j];_?(A.copy(T.normals[0]).multiplyScalar(nt.x),b.copy(T.binormals[0]).multiplyScalar(nt.y),v.copy(S[0]).add(A).add(b),Bt(v.x,v.y,v.z)):Bt(nt.x,nt.y,0)}for(let j=1;j<=h;j++)for(let nt=0;nt<B;nt++){const et=u?X(R[nt],wt[nt],de):R[nt];_?(A.copy(T.normals[j]).multiplyScalar(et.x),b.copy(T.binormals[j]).multiplyScalar(et.y),v.copy(S[j]).add(A).add(b),Bt(v.x,v.y,v.z)):Bt(et.x,et.y,d/h*j)}for(let j=g-1;j>=0;j--){const nt=j/g,et=f*Math.cos(nt*Math.PI/2),vt=p*Math.sin(nt*Math.PI/2)+x;for(let xt=0,Gt=U.length;xt<Gt;xt++){const Dt=X(U[xt],it[xt],vt);Bt(Dt.x,Dt.y,d+et)}for(let xt=0,Gt=I.length;xt<Gt;xt++){const Dt=I[xt];lt=ut[xt];for(let Zt=0,jt=Dt.length;Zt<jt;Zt++){const D=X(Dt[Zt],lt[Zt],vt);_?Bt(D.x,D.y+S[h-1].y,S[h-1].x+et):Bt(D.x,D.y,d+et)}}}$(),ct();function $(){const j=i.length/3;if(u){let nt=0,et=B*nt;for(let vt=0;vt<Se;vt++){const xt=re[vt];$t(xt[2]+et,xt[1]+et,xt[0]+et)}nt=h+g*2,et=B*nt;for(let vt=0;vt<Se;vt++){const xt=re[vt];$t(xt[0]+et,xt[1]+et,xt[2]+et)}}else{for(let nt=0;nt<Se;nt++){const et=re[nt];$t(et[2],et[1],et[0])}for(let nt=0;nt<Se;nt++){const et=re[nt];$t(et[0]+B*h,et[1]+B*h,et[2]+B*h)}}n.addGroup(j,i.length/3-j,0)}function ct(){const j=i.length/3;let nt=0;st(U,nt),nt+=U.length;for(let et=0,vt=I.length;et<vt;et++){const xt=I[et];st(xt,nt),nt+=xt.length}n.addGroup(j,i.length/3-j,1)}function st(j,nt){let et=j.length;for(;--et>=0;){const vt=et;let xt=et-1;xt<0&&(xt=j.length-1);for(let Gt=0,Dt=h+g*2;Gt<Dt;Gt++){const Zt=B*Gt,jt=B*(Gt+1),D=nt+vt+Zt,ye=nt+xt+Zt,le=nt+xt+jt,C=nt+vt+jt;Vt(D,ye,le,C)}}}function Bt(j,nt,et){l.push(j),l.push(nt),l.push(et)}function $t(j,nt,et){ge(j),ge(nt),ge(et);const vt=i.length/3,xt=y.generateTopUV(n,i,vt-3,vt-2,vt-1);Jt(xt[0]),Jt(xt[1]),Jt(xt[2])}function Vt(j,nt,et,vt){ge(j),ge(nt),ge(vt),ge(nt),ge(et),ge(vt);const xt=i.length/3,Gt=y.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);Jt(Gt[0]),Jt(Gt[1]),Jt(Gt[3]),Jt(Gt[1]),Jt(Gt[2]),Jt(Gt[3])}function ge(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Jt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ix(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Sl[i.type]().fromJSON(i)),new fr(n,t.options)}}const Px={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-d),new Q(u,1-p),new Q(x,1-m)]:[new Q(o,1-l),new Q(h,1-d),new Q(f,1-p),new Q(g,1-m)]}};function Ix(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kl extends $i{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kl(t.radius,t.detail)}}class $l extends qt{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Yt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,u=new Q,f=new P,p=new P,x=new P;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){const S=n+y*h*i,_=Math.sin(S),T=Math.cos(S);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*T,a.push(d.x,d.y,d.z),u.x=y/e,u.y=b/(t.length-1),o.push(u.x,u.y);const A=l[3*b+0]*_,v=l[3*b+1],E=l[3*b+0]*T;c.push(A,v,E)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const _=S+y*t.length,T=_,b=_+t.length,A=_+t.length+1,v=_+1;r.push(T,b,v),r.push(A,v,b)}this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("uv",new Tt(o,2)),this.setAttribute("normal",new Tt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.points,t.segments,t.phiStart,t.phiLength)}}class Ca extends $i{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class Zi extends qt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const y=m*u-a;for(let S=0;S<c;S++){const _=S*d-r;p.push(_,-y,0),x.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const S=y+c*m,_=y+c*(m+1),T=y+1+c*(m+1),b=y+1+c*m;f.push(S,_,b),f.push(_,T,b)}this.setIndex(f),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vi extends qt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new P,p=new Q;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){const g=x*(n+1);for(let m=0;m<n;m++){const y=m+g,S=y,_=y+n+1,T=y+n+2,b=y+1;o.push(S,_,b),o.push(_,T,b)}}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zl extends qt{constructor(t=new yr([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(i,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(a,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;Wn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Wn.isClockWise(y)===!0&&(p[g]=y.reverse())}const x=Wn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){const y=x[g],S=y[0]+d,_=y[1]+d,T=y[2]+d;n.push(S,_,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Lx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Zl(n,t.curveSegments)}}function Lx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Dn extends qt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const y=[],S=m/n,_=a+S*o,T=t*Math.cos(_),b=Math.sqrt(t*t-T*T);let A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){const E=v/e,R=i+E*r;d.x=-b*Math.cos(R),d.y=T,d.z=b*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(E+A,1-S),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const S=h[m][y+1],_=h[m][y],T=h[m+1][y],b=h[m+1][y+1];(m!==0||a>0)&&f.push(S,_,b),(m!==n-1||l<Math.PI)&&f.push(_,T,b)}this.setIndex(f),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jl extends $i{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jl(t.radius,t.detail)}}class Ra extends qt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let x=0;x<=n;x++){const g=a+x/n*o;for(let m=0;m<=i;m++){const y=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){const m=(i+1)*x+g-1,y=(i+1)*(x-1)+g-1,S=(i+1)*(x-1)+g,_=(i+1)*x+g;l.push(m,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ql extends qt{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],d=new P,u=new P,f=new P,p=new P,x=new P,g=new P,m=new P;for(let S=0;S<=n;++S){const _=S/n*r*Math.PI*2;y(_,r,a,t,f),y(_+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let T=0;T<=i;++T){const b=T/i*Math.PI*2,A=-e*Math.cos(b),v=e*Math.sin(b);d.x=f.x+(A*m.x+v*x.x),d.y=f.y+(A*m.y+v*x.y),d.z=f.z+(A*m.z+v*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(S/n),h.push(T/i)}}for(let S=1;S<=n;S++)for(let _=1;_<=i;_++){const T=(i+1)*(S-1)+(_-1),b=(i+1)*S+(_-1),A=(i+1)*S+_,v=(i+1)*(S-1)+_;o.push(T,b,v),o.push(b,A,v)}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2));function y(S,_,T,b,A){const v=Math.cos(S),E=Math.sin(S),R=T/_*S,I=Math.cos(R);A.x=b*(2+I)*.5*v,A.y=b*(2+I)*E*.5,A.z=b*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Pa extends qt{constructor(t=new ou(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Q;let h=new P;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function x(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),y(),m()}function g(S){h=t.getPointAt(S/e,h);const _=a.normals[S],T=a.binormals[S];for(let b=0;b<=i;b++){const A=b/i*Math.PI*2,v=Math.sin(A),E=-Math.cos(A);l.x=E*_.x+v*T.x,l.y=E*_.y+v*T.y,l.z=E*_.z+v*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=e;S++)for(let _=1;_<=i;_++){const T=(i+1)*(S-1)+(_-1),b=(i+1)*S+(_-1),A=(i+1)*S+_,v=(i+1)*(S-1)+_;p.push(T,b,v),p.push(b,A,v)}}function y(){for(let S=0;S<=e;S++)for(let _=0;_<=i;_++)c.x=S/e,c.y=_/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pa(new Sl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Wp extends qt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new P,r=new P;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),y=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),Ad(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Ad(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Tt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Ad(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Cd=Object.freeze({__proto__:null,BoxGeometry:An,CapsuleGeometry:Hi,CircleGeometry:Cs,ConeGeometry:Rs,CylinderGeometry:Gn,DodecahedronGeometry:Yl,EdgesGeometry:Up,ExtrudeGeometry:fr,IcosahedronGeometry:Kl,LatheGeometry:$l,OctahedronGeometry:Ca,PlaneGeometry:Zi,PolyhedronGeometry:$i,RingGeometry:Vi,ShapeGeometry:Zl,SphereGeometry:Dn,TetrahedronGeometry:Jl,TorusGeometry:Ra,TorusKnotGeometry:Ql,TubeGeometry:Pa,WireframeGeometry:Wp});class Xp extends Ye{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new mt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function pr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Rd(i))i.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Rd(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function sn(s){const t={};for(let e=0;e<s.length;e++){const n=pr(s[e]);for(const i in n)t[i]=n[i]}return t}function Rd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Dx(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Yp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const qp={clone:pr,merge:sn};var Nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Ye{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nx,this.fragmentShader=Ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=Dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new mt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class cu extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hu extends Ye{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kp extends hu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $p extends Ye{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zp extends Ye{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Jp extends Ye{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Be extends Ye{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uu extends Ye{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class du extends Ye{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qp extends Ye{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new mt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Si,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jp extends qe{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function gs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function tm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function yh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function em(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function Fx(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=gs(d,c.times.constructor),c.values=gs(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Ox(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let x;if(r<=o.times[0]){const m=h,y=d-h;x=o.values.slice(m,y)}else if(r>=o.times[p]){const m=p*d+h,y=m+d-h;x=o.values.slice(m,y)}else{const m=o.createInterpolant(),y=h,S=d-h;m.evaluate(r),x=m.resultBuffer.slice(y,S)}l==="quaternion"&&new hn().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+u;if(l==="quaternion")hn.multiplyQuaternionsFlat(c.values,y,x,0,c.values,y);else{const S=f-u*2;for(let _=0;_<S;++_)c.values[y+_]-=x[_]}}}return s.blendMode=Yh,s}class Bx{static convertArray(t,e){return gs(t,e)}static isTypedArray(t){return Sp(t)}static getKeyframeOrder(t){return tm(t)}static sortedArray(t,e,n){return yh(t,e,n)}static flattenJSON(t,e,n,i){em(t,e,n,i)}static subclip(t,e,n,i,r=30){return Fx(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return Ox(t,e,n,i)}}class Mr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class nm extends Mr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ps,endingEnd:ps}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ms:r=t,o=2*e-n;break;case la:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ms:a=t,l=2*n-e;break;case la:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+y*a[c+T]+S*a[l+T]+_*a[d+T];return r}}class fu extends Mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class im extends Mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class sm extends Mr{interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}const u=o*2,f=t-1;for(let p=0;p!==o;++p){const x=a[c+p],g=a[l+p],m=f*u+p*2,y=d[m],S=d[m+1],_=t*u+p*2,T=h[_],b=h[_+1];let A=(n-e)/(i-e),v,E,R,I,L;for(let z=0;z<8;z++){v=A*A,E=v*A,R=1-A,I=R*R,L=I*R;const U=L*e+3*I*A*y+3*R*v*T+E*i-n;if(Math.abs(U)<1e-10)break;const X=3*I*(y-e)+6*R*A*(T-y)+3*v*(i-T);if(Math.abs(X)<1e-10)break;A=A-U/X,A=Math.max(0,Math.min(1,A))}r[p]=L*x+3*I*A*S+3*R*v*b+E*g}return r}}class On{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new im(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new sm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oa:e=this.InterpolantFactoryMethodDiscrete;break;case _l:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Sp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Co,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=_l;class Ps extends On{constructor(t,e,n){super(t,e,n)}}Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=oa;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class pu extends On{constructor(t,e,n,i){super(t,e,n,i)}}pu.prototype.ValueTypeName="color";class jl extends On{constructor(t,e,n,i){super(t,e,n,i)}}jl.prototype.ValueTypeName="number";class rm extends Mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class tc extends On{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new rm(this.times,this.values,this.getValueSize(),t)}}tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends On{constructor(t,e,n){super(t,e,n)}}Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=oa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class mu extends On{constructor(t,e,n,i){super(t,e,n,i)}}mu.prototype.ValueTypeName="vector";class va{constructor(t="",e=-1,n=[],i=Ul){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(kx(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=tm(l);l=yh(l,1,h),c=yh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new jl(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function zx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jl;case"vector":case"vector2":case"vector3":case"vector4":return mu;case"color":return pu;case"quaternion":return tc;case"bool":case"boolean":return Ps;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=zx(s.type);if(s.times===void 0){const e=[],n=[];em(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const si={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Pd(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Pd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Pd(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class gu{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const am=new gu;class Mn{constructor(t){this.manager=t!==void 0?t:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Mn.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi={};class Hx extends Error{constructor(t,e){super(t),this.response=e}}class bi extends Mn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=si.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(gi[t]!==void 0){gi[t].push({onLoad:e,onProgress:n,onError:i});return}gi[t]=[],gi[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ot("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=gi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){y();function y(){d.read().then(({done:S,value:_})=>{if(S)m.close();else{x+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,A=h.length;b<A;b++){const v=h[b];v.onProgress&&v.onProgress(T)}m.enqueue(_),y()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Hx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{si.add(`file:${t}`,c);const h=gi[t];delete gi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=gi[t];if(h===void 0)throw this.manager.itemError(t),c;delete gi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Vx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new bi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):It(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=va.parse(t[n]);e.push(i)}return e}}class Gx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new Xl,l=new bi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Ae),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Ae),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}const $s=new WeakMap;class ya extends Mn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=si.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=$s.get(a);d===void 0&&(d=[],$s.set(a,d)),d.push({onLoad:e,onError:i})}return a}const o=da("img");function l(){h(),e&&e(this);const d=$s.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}$s.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),si.remove(`image:${t}`);const u=$s.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}$s.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Wx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=new Aa;r.colorSpace=rn;const a=new ya(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Xx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Nn,o=new bi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):It(h);return}r._applyTexData(a,c),e&&e(a,c)},n,i),a}createDataTexture(t){const e=new Nn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:xn,t.wrapT=e.wrapT!==void 0?e.wrapT:xn,t.magFilter=e.magFilter!==void 0?e.magFilter:Ae,t.minFilter=e.minFilter!==void 0?e.minFilter:Ae,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=ii),e.mipmapCount===1&&(t.minFilter=Ae),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class Yx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=new Re,a=new ya(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ji extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class xu extends Ji{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Hc=new Kt,Id=new P,Ld=new P;class _u{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Id.setFromMatrixPosition(t.matrixWorld),e.position.copy(Id),Ld.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ld),e.updateMatrixWorld(),Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ms||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const go=new P,xo=new hn,jn=new P;class ec extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,xo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(go,xo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new P,Dd=new Q,Nd=new Q;class Ge extends ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Nd),e.subVectors(Nd,Dd)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class qx extends _u{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=hr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class om extends Ji{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Kx extends _u{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0}}class lm extends Ji{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ia extends ec{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $x extends _u{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vu extends Ji{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new $x}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class cm extends Ji{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hm extends Ji{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class yu{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class um extends Ji{constructor(t=new yu,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const Ud={};class nc extends Mn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new bi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):It(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return nc.createMaterialFromType(t)}static createMaterialFromType(t){const n={ShadowMaterial:Xp,SpriteMaterial:pa,RawShaderMaterial:cu,ShaderMaterial:Pn,PointsMaterial:jh,MeshPhysicalMaterial:Kp,MeshStandardMaterial:hu,MeshPhongMaterial:$p,MeshToonMaterial:Zp,MeshNormalMaterial:Jp,MeshLambertMaterial:Be,MeshDepthMaterial:uu,MeshDistanceMaterial:du,MeshBasicMaterial:je,MeshMatcapMaterial:Qp,LineDashedMaterial:jp,LineBasicMaterial:qe,Material:Ye,...Ud}[t];let i;return n===void 0?(Wi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Ye):i=new n,i}static registerMaterial(t,e){Ud[t]=e}}class Mh{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class dm extends qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class fm extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new bi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):It(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=sr(g.type,m),S=new Vl(y,g.stride);return S.uuid=g.uuid,e[p]=S,S}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=t.isInstancedBufferGeometry?new dm:new qt,o=t.data.index;if(o!==void 0){const f=sr(o.type,o.array);a.setIndex(new ue(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);x=new Ss(g,p.itemSize,p.offset,p.normalized)}else{const g=sr(p.type,p.array),m=p.isInstancedBufferAttribute?ur:ue;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),a.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let S;if(y.isInterleavedBufferAttribute){const _=i(t.data,y.data);S=new Ss(_,y.itemSize,y.offset,y.normalized)}else{const _=sr(y.type,y.array);S=new ue(_,y.itemSize,y.normalized)}y.name!==void 0&&(S.name=y.name),x.push(S)}a.morphAttributes[f]=x}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Xe().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}const Vc={};class Zx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?Mh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new bi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),It("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),It("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Mh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new bi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Vc[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new yr().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new Gl().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new fm;for(let r=0,a=t.length;r<a;r++){let o;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Cd?o=Cd[l.type].fromJSON(l,e):l.type in Vc?o=Vc[l.type].fromJSON(l,e):ot(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new nc;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=va.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:sr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new gu(e);r=new ya(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Nn(m.data,m.width,m.height)))}i[d.uuid]=new ki(f)}else{const f=o(d.url);i[d.uuid]=new ki(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:sr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new ya(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Nn(p.data,p.width,p.height)))}n[l.uuid]=new ki(h)}else{const h=await r(l.url);n[l.uuid]=new ki(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(ot("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&ot('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&ot("ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new Aa,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Nn:h=new Re,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Jx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Fd),h.wrapT=n(o.wrap[1],Fd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Od)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Od)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(u){return e[u]===void 0&&ot("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p];n[g]===void 0&&ot("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&ot("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&ot("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":a=new $h,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new mt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Ea(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Hl(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ge(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Ia(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new cm(t.color,t.intensity);break;case"DirectionalLight":a=new vu(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new lm(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new hm(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new om(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new xu(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new yu().fromArray(t.sh);a=new um(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new Rp(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new Ht(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,x=t.instanceColor;a=new Pp(h,d,f),a.instanceMatrix=new ur(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new ur(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new Ip(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,y=null;return g.boundingBox!==void 0&&(m=new en().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(y=new Xe().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:y}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Xe().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new en().fromJSON(t.boundingBox));break;case"LOD":a=new Cp;break;case"Line":a=new ci(o(t.geometry),l(t.material));break;case"LineLoop":a=new Lp(o(t.geometry),l(t.material));break;case"LineSegments":a=new hi(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new tu(o(t.geometry),l(t.material));break;case"Sprite":a=new vl(l(t.material));break;case"Group":a=new on;break;case"Bone":a=new Qh;break;default:a=new me}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new P().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?ot("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new me}})}}const Jx={UVMapping:Cl,CubeReflectionMapping:ai,CubeRefractionMapping:Xi,EquirectangularReflectionMapping:qr,EquirectangularRefractionMapping:Kr,CubeUVReflectionMapping:_r},Fd={RepeatWrapping:Yi,ClampToEdgeWrapping:xn,MirroredRepeatWrapping:sa},Od={NearestFilter:Fe,NearestMipmapNearestFilter:zh,NearestMipmapLinearFilter:ir,LinearFilter:Ae,LinearMipmapNearestFilter:$r,LinearMipmapLinearFilter:ii},Gc=new WeakMap;class Qx extends Mn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ot("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ot("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=si.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{Gc.has(a)===!0?(i&&i(Gc.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){si.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t)}).catch(function(c){i&&i(c),Gc.set(l,c),si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});si.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let _o;class Mu{static getContext(){return _o===void 0&&(_o=new(window.AudioContext||window.webkitAudioContext)),_o}static setContext(t){_o=t}}class jx extends Mn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new bi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0),h=Mu.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){i?i(l):It(l),r.manager.itemError(t)}}}const Bd=new Kt,zd=new Kt,rs=new Kt;class t_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ge,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ge,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,rs.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(vs*e.fov*.5)/e.zoom;let o,l;zd.elements[12]=-i,Bd.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,rs.elements[0]=2*e.near/(l-o),rs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(rs),o=-a*e.aspect-r,l=a*e.aspect-r,rs.elements[0]=2*e.near/(l-o),rs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(rs)}this.cameraL.matrix.copy(t.matrixWorld).multiply(zd),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Bd),this.cameraR.matrixWorldNeedsUpdate=!0}}const Zs=-90,Js=1;class pm extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(Zs,Js,t,e);i.layers=this.layers,this.add(i);const r=new Ge(Zs,Js,t,e);r.layers=this.layers,this.add(r);const a=new Ge(Zs,Js,t,e);a.layers=this.layers,this.add(a);const o=new Ge(Zs,Js,t,e);o.layers=this.layers,this.add(o);const l=new Ge(Zs,Js,t,e);l.layers=this.layers,this.add(l);const c=new Ge(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class mm extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class gm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=e_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function e_(){this._document.hidden===!1&&this.reset()}const as=new P,Wc=new hn,n_=new P,os=new P,ls=new P;class i_ extends me{constructor(){super(),this.type="AudioListener",this.context=Mu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new gm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(as,Wc,n_),os.set(0,0,-1).applyQuaternion(Wc),ls.set(0,1,0).applyQuaternion(Wc),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(as.x,n),e.positionY.linearRampToValueAtTime(as.y,n),e.positionZ.linearRampToValueAtTime(as.z,n),e.forwardX.linearRampToValueAtTime(os.x,n),e.forwardY.linearRampToValueAtTime(os.y,n),e.forwardZ.linearRampToValueAtTime(os.z,n),e.upX.linearRampToValueAtTime(ls.x,n),e.upY.linearRampToValueAtTime(ls.y,n),e.upZ.linearRampToValueAtTime(ls.z,n)}else e.setPosition(as.x,as.y,as.z),e.setOrientation(os.x,os.y,os.z,ls.x,ls.y,ls.z)}}class xm extends me{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){ot("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){ot("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){ot("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){ot("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){ot("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(ot("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){ot("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(ot("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const cs=new P,kd=new hn,s_=new P,hs=new P;class r_ extends xm{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(cs,kd,s_),hs.set(0,0,1).applyQuaternion(kd);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(cs.x,n),e.positionY.linearRampToValueAtTime(cs.y,n),e.positionZ.linearRampToValueAtTime(cs.z,n),e.orientationX.linearRampToValueAtTime(hs.x,n),e.orientationY.linearRampToValueAtTime(hs.y,n),e.orientationZ.linearRampToValueAtTime(hs.z,n)}else e.setPosition(cs.x,cs.y,cs.z),e.setOrientation(hs.x,hs.y,hs.z)}}class a_{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class _m{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){hn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;hn.multiplyQuaternionsFlat(t,a,t,e,t,n),hn.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Su="\\[\\]\\.:\\/",o_=new RegExp("["+Su+"]","g"),bu="[^"+Su+"]",l_="[^"+Su.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",bu),h_=/(WCOD+)?/.source.replace("WCOD",l_),u_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),f_=new RegExp("^"+c_+h_+u_+d_+"$"),p_=["material","materials","bones","map"];class m_{constructor(t,e,n){const i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pe{constructor(t,e,n){this.path=e,this.parsedPath=n||pe.parseTrackName(e),this.node=pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pe.Composite(t,e,n):new pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(t){const e=f_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);p_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pe.Composite=m_;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class g_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Cn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let x=0,g=a;x!==g;++x)r[x].push(new pe(u,n[x],i[x]))}else if(p<c){o=t[p];const x=--c,g=t[x];e[g.uuid]=p,t[p]=g,e[f]=x,t[x]=u;for(let m=0,y=a;m!==y;++m){const S=r[m],_=S[x];let T=S[p];S[p]=_,T===void 0&&(T=new pe(u,n[m],i[m])),S[x]=T}}else t[p]!==o&&It("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],g=x[d],m=x[h];x[h]=g,x[d]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--a,x=t[p];e[f.uuid]=d,t[d]=f,e[x.uuid]=u,t[u]=x,t.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],S=y[u],_=y[p];y[d]=S,y[u]=_,y.pop()}}else{const u=--a,f=t[u];u>0&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=i;p!==x;++p){const g=n[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new pe(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=t[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class vm{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:ps,endingEnd:ps};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=dp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Yh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ul:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===fp;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===up){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ms,i.endingEnd=ms):(t?i.endingStart=this.zeroSlopeAtStart?ms:ps:i.endingStart=la,e?i.endingEnd=this.zeroSlopeAtEnd?ms:ps:i.endingEnd=la)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const x_=new Float32Array(1);class __ extends Kn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new _m(pe.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new fu(new Float32Array(2),new Float32Array(2),1,x_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?va.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ul),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new vm(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?va.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class v_ extends Kh{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new zl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class wu{constructor(t){this.value=t}clone(){return new wu(this.value.clone===void 0?this.value:this.value.clone())}}let y_=0;class M_ extends Kn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.usage=ua,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class S_ extends Vl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class b_{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Hd=new Kt;class ym{constructor(t,e,n=0,i=1/0){this.ray=new vr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):It("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(t,e=!0,n=[]){return Sh(t,this,n,e),n.sort(Vd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Sh(t[i],this,n,e);return n.sort(Vd),n}}function Vd(s,t){return s.distance-t.distance}function Sh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Sh(r[a],t,e,!0)}}class w_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class T_{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E_{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class Tu{static{Tu.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const Gd=new Q;class Mm{constructor(t=new Q(1/0,1/0),e=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wd=new P,vo=new P,Qs=new P,js=new P,Xc=new P,A_=new P,C_=new P;class R_{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Wd.subVectors(t,this.start),vo.subVectors(this.end,this.start);const n=vo.dot(vo);if(n===0)return 0;let r=vo.dot(Wd)/n;return e&&(r=Yt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=A_,n=C_){const i=10000000000000001e-32;let r,a;const o=this.start,l=t.start,c=this.end,h=t.end;Qs.subVectors(c,o),js.subVectors(h,l),Xc.subVectors(o,l);const d=Qs.dot(Qs),u=js.dot(js),f=js.dot(Xc);if(d<=i&&u<=i)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,a=f/u,a=Yt(a,0,1);else{const p=Qs.dot(Xc);if(u<=i)a=0,r=Yt(-p/d,0,1);else{const x=Qs.dot(js),g=d*u-x*x;g!==0?r=Yt((x*f-p*u)/g,0,1):r=0,a=(x*r+f)/u,a<0?(a=0,r=Yt(-p/d,0,1)):a>1&&(a=1,r=Yt((x-p)/d,0,1))}}return e.copy(o).addScaledVector(Qs,r),n.copy(l).addScaledVector(js,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Xd=new P;class P_ extends me{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new qt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Tt(i,3));const r=new qe({fog:!1,toneMapped:!1});this.cone=new hi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Xd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Xd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ui=new P,yo=new Kt,Yc=new Kt;class I_ extends hi{constructor(t){const e=Sm(t),n=new qt,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Tt(i,3)),n.setAttribute("color",new Tt(r,3));const a=new qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const o=new mt(255),l=new mt(65280);this.setColors(o,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Yc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(yo.multiplyMatrices(Yc,o.matrixWorld),Ui.setFromMatrixPosition(yo),i.setXYZ(a,Ui.x,Ui.y,Ui.z),yo.multiplyMatrices(Yc,o.parent.matrixWorld),Ui.setFromMatrixPosition(yo),i.setXYZ(a+1,Ui.x,Ui.y,Ui.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Sm(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Sm(s.children[e]));return t}class L_ extends Ht{constructor(t,e,n){const i=new Dn(e,4,2),r=new je({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const D_=new P,Yd=new mt,qd=new mt;class N_ extends me{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Ca(e);i.rotateY(Math.PI*.5),this.material=new je({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new ue(a,3)),this.add(new Ht(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Yd.copy(this.light.color),qd.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Yd:qd;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(D_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class U_ extends hi{constructor(t=10,e=10,n=4473924,i=8947848){n=new mt(n),i=new mt(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new qt;h.setAttribute("position",new Tt(l,3)),h.setAttribute("color",new Tt(c,3));const d=new qe({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class F_ extends hi{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new mt(r),a=new mt(a);const o=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);const x=d&1?r:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){const u=d&1?r:a,f=t-t/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new qt;c.setAttribute("position",new Tt(o,3)),c.setAttribute("color",new Tt(l,3));const h=new qe({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Kd=new P,Mo=new P,$d=new P;class O_ extends me{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new qt;i.setAttribute("position",new Tt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new qe({fog:!1,toneMapped:!1});this.lightPlane=new ci(i,r),this.add(this.lightPlane),i=new qt,i.setAttribute("position",new Tt([0,0,0,0,0,1],3)),this.targetLine=new ci(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Kd.setFromMatrixPosition(this.light.matrixWorld),Mo.setFromMatrixPosition(this.light.target.matrixWorld),$d.subVectors(Mo,Kd),this.lightPlane.lookAt(Mo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Mo),this.targetLine.scale.z=$d.length()}}const So=new P,Le=new ec;class B_ extends hi{constructor(t){const e=new qt,n=new qe({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new Tt(i,3)),e.setAttribute("color",new Tt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new mt(16755200),h=new mt(16711680),d=new mt(43775),u=new mt(16777215),f=new mt(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,a;if(Le.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===En)r=-1,a=1;else if(this.camera.coordinateSystem===Ms)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ue("c",e,t,Le,0,0,r),Ue("t",e,t,Le,0,0,a),Ue("n1",e,t,Le,-n,-i,r),Ue("n2",e,t,Le,n,-i,r),Ue("n3",e,t,Le,-n,i,r),Ue("n4",e,t,Le,n,i,r),Ue("f1",e,t,Le,-n,-i,a),Ue("f2",e,t,Le,n,-i,a),Ue("f3",e,t,Le,-n,i,a),Ue("f4",e,t,Le,n,i,a),Ue("u1",e,t,Le,n*.7,i*1.1,r),Ue("u2",e,t,Le,-n*.7,i*1.1,r),Ue("u3",e,t,Le,0,i*2,r),Ue("cf1",e,t,Le,-n,0,a),Ue("cf2",e,t,Le,n,0,a),Ue("cf3",e,t,Le,0,-i,a),Ue("cf4",e,t,Le,0,i,a),Ue("cn1",e,t,Le,-n,0,r),Ue("cn2",e,t,Le,n,0,r),Ue("cn3",e,t,Le,0,-i,r),Ue("cn4",e,t,Le,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ue(s,t,e,n,i,r,a){So.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],So.x,So.y,So.z)}}const bo=new en;class z_ extends hi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new qt;r.setIndex(new ue(n,1)),r.setAttribute("position",new ue(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&bo.setFromObject(this.object),bo.isEmpty())return;const t=bo.min,e=bo.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class k_ extends hi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new qt;r.setIndex(new ue(n,1)),r.setAttribute("position",new Tt(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class H_ extends ci{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new qt;a.setAttribute("position",new Tt(r,3)),a.computeBoundingSphere(),super(a,new qe({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new qt;l.setAttribute("position",new Tt(o,3)),l.computeBoundingSphere(),this.add(new Ht(l,new je({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Zd=new P;let wo,qc;class V_ extends me{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",wo===void 0&&(wo=new qt,wo.setAttribute("position",new Tt([0,0,0,0,1,0],3)),qc=new Rs(.5,1,5,1),qc.translate(0,-.5,0)),this.position.copy(e),this.line=new ci(wo,new qe({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ht(qc,new je({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zd.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zd,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class G_ extends hi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new qt;i.setAttribute("position",new Tt(e,3)),i.setAttribute("color",new Tt(n,3));const r=new qe({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new mt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class W_{constructor(){this.type="ShapePath",this.color=new mt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new ma,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new Q);if(t(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const x=l[p],g=l[(p+1)%f];if(x.y>d!=g.y>d){const m=x.x+(d-x.y)*(g.x-x.x)/(g.y-x.y);u.push(m)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ot('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=Wn.area(c);if(h===0)continue;const d=new Mm;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let h=0;for(let d=l-1;d>=0;d--){const u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new yr;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const h=new ma;h.curves=l.subPath.curves,c.holes.push(h)}return a}}class X_ extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ot("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Y_(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function q_(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function K_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function bh(s,t,e,n){const i=$_(n);switch(e){case Wh:return s*t;case Ll:return s*t/i.components*i.byteLength;case Ta:return s*t/i.components*i.byteLength;case qi:return s*t*2/i.components*i.byteLength;case Dl:return s*t*2/i.components*i.byteLength;case Xh:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case Nl:return s*t*4/i.components*i.byteLength;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Go:case Xo:return Math.max(s,16)*Math.max(t,8)/4;case Vo:case Wo:return Math.max(s,8)*Math.max(t,8)/2;case Yo:case qo:case $o:case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ko:case ra:case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case dl:case fl:case pl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ml:case gl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $_(s){switch(s){case mn:case kh:return{byteLength:1,components:1};case lr:case Hh:case oi:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case Un:case Rl:case ln:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class Z_{static contain(t,e){return Y_(t,e)}static cover(t,e){return q_(t,e)}static fill(t){return K_(t)}static getByteLength(t,e,n,i){return bh(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bm(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function J_(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,av=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Q_,alphahash_pars_fragment:j_,alphamap_fragment:tv,alphamap_pars_fragment:ev,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:sv,aomap_pars_fragment:rv,batching_pars_vertex:av,batching_vertex:ov,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:hv,iridescence_fragment:uv,bumpmap_pars_fragment:dv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:xv,color_pars_fragment:_v,color_pars_vertex:vv,color_vertex:yv,common:Mv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:bv,displacementmap_pars_vertex:wv,displacementmap_vertex:Tv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Av,colorspace_fragment:Cv,colorspace_pars_fragment:Rv,envmap_fragment:Pv,envmap_common_pars_fragment:Iv,envmap_pars_fragment:Lv,envmap_pars_vertex:Dv,envmap_physical_pars_fragment:Wv,envmap_vertex:Nv,fog_vertex:Uv,fog_pars_vertex:Fv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:zv,lightmap_pars_fragment:kv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:Yv,lights_phong_fragment:qv,lights_phong_pars_fragment:Kv,lights_physical_fragment:$v,lights_physical_pars_fragment:Zv,lights_fragment_begin:Jv,lights_fragment_maps:Qv,lights_fragment_end:jv,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:ay,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:hy,morphinstance_vertex:uy,morphcolor_vertex:dy,morphnormal_vertex:fy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:_y,normal_pars_vertex:vy,normal_vertex:yy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:wy,iridescence_pars_fragment:Ty,opaque_fragment:Ey,packing:Ay,premultiplied_alpha_fragment:Cy,project_vertex:Ry,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:ky,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:Yy,transmission_pars_fragment:qy,uv_pars_fragment:Ky,uv_pars_vertex:$y,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Qy,background_frag:jy,backgroundCube_vert:tM,backgroundCube_frag:eM,cube_vert:nM,cube_frag:iM,depth_vert:sM,depth_frag:rM,distance_vert:aM,distance_frag:oM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:hM,linedashed_frag:uM,meshbasic_vert:dM,meshbasic_frag:fM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:xM,meshnormal_vert:_M,meshnormal_frag:vM,meshphong_vert:yM,meshphong_frag:MM,meshphysical_vert:SM,meshphysical_frag:bM,meshtoon_vert:wM,meshtoon_frag:TM,points_vert:EM,points_frag:AM,shadow_vert:CM,shadow_frag:RM,sprite_vert:PM,sprite_frag:IM},gt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Hn={basic:{uniforms:sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:sn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:sn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new mt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:sn([gt.points,gt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:sn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:sn([gt.common,gt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:sn([gt.sprite,gt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:sn([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:sn([gt.lights,gt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Hn.physical={uniforms:sn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const To={r:0,b:0,g:0},LM=new Kt,wm=new Qt;wm.set(-1,0,0,0,1,0,0,0,1);function DM(s,t,e,n,i,r){const a=new mt(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const _=y.backgroundBlurriness>0;S=t.get(S,_)}return S}function p(y){let S=!1;const _=f(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,S){const _=f(S);_&&(_.isCubeTexture||_.mapping===_r)?(c===void 0&&(c=new Ht(new An(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:pr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wm),c.material.toneMapped=ce.getTransfer(_.colorSpace)!==xe,(h!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ht(new Zi(2,2),new Pn({name:"BackgroundMaterial",uniforms:pr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ce.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(To,Yp(s)),e.buffers.color.setClear(To.r,To.g,To.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:x,dispose:m}}function NM(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(I,L,z,W,U){let X=!1;const B=d(I,W,z,L);r!==B&&(r=B,c(r.object)),X=f(I,W,z,U),X&&p(I,W,z,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(I,L,z,W),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,L,z,W){const U=W.wireframe===!0;let X=n[L.id];X===void 0&&(X={},n[L.id]=X);const B=I.isInstancedMesh===!0?I.id:0;let J=X[B];J===void 0&&(J={},X[B]=J);let it=J[z.id];it===void 0&&(it={},J[z.id]=it);let ut=it[U];return ut===void 0&&(ut=u(l()),it[U]=ut),ut}function u(I){const L=[],z=[],W=[];for(let U=0;U<e;U++)L[U]=0,z[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:W,object:I,attributes:{},index:null}}function f(I,L,z,W){const U=r.attributes,X=L.attributes;let B=0;const J=z.getAttributes();for(const it in J)if(J[it].location>=0){const lt=U[it];let wt=X[it];if(wt===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),lt===void 0||lt.attribute!==wt||wt&&lt.data!==wt.data)return!0;B++}return r.attributesNum!==B||r.index!==W}function p(I,L,z,W){const U={},X=L.attributes;let B=0;const J=z.getAttributes();for(const it in J)if(J[it].location>=0){let lt=X[it];lt===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor));const wt={};wt.attribute=lt,lt&&lt.data&&(wt.data=lt.data),U[it]=wt,B++}r.attributes=U,r.attributesNum=B,r.index=W}function x(){const I=r.newAttributes;for(let L=0,z=I.length;L<z;L++)I[L]=0}function g(I){m(I,0)}function m(I,L){const z=r.newAttributes,W=r.enabledAttributes,U=r.attributeDivisors;z[I]=1,W[I]===0&&(s.enableVertexAttribArray(I),W[I]=1),U[I]!==L&&(s.vertexAttribDivisor(I,L),U[I]=L)}function y(){const I=r.newAttributes,L=r.enabledAttributes;for(let z=0,W=L.length;z<W;z++)L[z]!==I[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function S(I,L,z,W,U,X,B){B===!0?s.vertexAttribIPointer(I,L,z,U,X):s.vertexAttribPointer(I,L,z,W,U,X)}function _(I,L,z,W){x();const U=W.attributes,X=z.getAttributes(),B=L.defaultAttributeValues;for(const J in X){const it=X[J];if(it.location>=0){let ut=U[J];if(ut===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),ut!==void 0){const lt=ut.normalized,wt=ut.itemSize,re=t.get(ut);if(re===void 0)continue;const Se=re.buffer,de=re.type,$=re.bytesPerElement,ct=de===s.INT||de===s.UNSIGNED_INT||ut.gpuType===Rl;if(ut.isInterleavedBufferAttribute){const st=ut.data,Bt=st.stride,$t=ut.offset;if(st.isInstancedInterleavedBuffer){for(let Vt=0;Vt<it.locationSize;Vt++)m(it.location+Vt,st.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Vt=0;Vt<it.locationSize;Vt++)g(it.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Vt=0;Vt<it.locationSize;Vt++)S(it.location+Vt,wt/it.locationSize,de,lt,Bt*$,($t+wt/it.locationSize*Vt)*$,ct)}else{if(ut.isInstancedBufferAttribute){for(let st=0;st<it.locationSize;st++)m(it.location+st,ut.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let st=0;st<it.locationSize;st++)g(it.location+st);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let st=0;st<it.locationSize;st++)S(it.location+st,wt/it.locationSize,de,lt,wt*$,wt/it.locationSize*st*$,ct)}}else if(B!==void 0){const lt=B[J];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(it.location,lt);break;case 3:s.vertexAttrib3fv(it.location,lt);break;case 4:s.vertexAttrib4fv(it.location,lt);break;default:s.vertexAttrib1fv(it.location,lt)}}}}y()}function T(){E();for(const I in n){const L=n[I];for(const z in L){const W=L[z];for(const U in W){const X=W[U];for(const B in X)h(X[B].object),delete X[B];delete W[U]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const L=n[I.id];for(const z in L){const W=L[z];for(const U in W){const X=W[U];for(const B in X)h(X[B].object),delete X[B];delete W[U]}}delete n[I.id]}function A(I){for(const L in n){const z=n[L];for(const W in z){const U=z[W];if(U[I.id]===void 0)continue;const X=U[I.id];for(const B in X)h(X[B].object),delete X[B];delete U[I.id]}}}function v(I){for(const L in n){const z=n[L],W=I.isInstancedMesh===!0?I.id:0,U=z[W];if(U!==void 0){for(const X in U){const B=U[X];for(const J in B)h(B[J].object),delete B[J];delete U[X]}delete z[W],Object.keys(z).length===0&&delete n[L]}}}function E(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function UM(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function FM(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!v)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:T,samples:b}}function OM(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new xi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,S=y*4;let _=m.clippingState||null;l.value=_,_=h(p,u,S,f);for(let T=0;T!==S;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,_=f;S!==x;++S,_+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const Gi=4,Jd=[.125,.215,.35,.446,.526,.582],fs=20,BM=256,Fr=new Ia,Qd=new mt;let Kc=null,$c=0,Zc=0,Jc=!1;const zM=new P;class wh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=zM}=r;Kc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kc,$c,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:oi,format:cn,colorSpace:ca,depthBuffer:!1},i=jd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jd(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kM(r)),this._blurMaterial=VM(r,t,e),this._ggxMaterial=HM(r,t,e)}return i}_compileMaterial(t){const e=new Ht(new qt,t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,i,r){const l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Qd),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new An,new je({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(Qd),m=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const T=this._cubeSize;tr(i,_*T,S>2?T:0,T,T),d.setRenderTarget(i),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ai||t.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Gi?n-p+Gi:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,tr(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,Fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,tr(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(o,Fr)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):fs;g>fs&&ot(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const m=[];let y=0;for(let A=0;A<fs;++A){const v=A/x,E=Math.exp(-v*v/2);m.push(E),A===0?y+=E:A<g&&(y+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-n;const _=this._sizeLods[i],T=3*_*(i>S-Gi?i-S+Gi:0),b=4*(this._cubeSize-_);tr(e,T,b,3*_,2*_),l.setRenderTarget(e),l.render(d,Fr)}}function kM(s){const t=[],e=[],n=[];let i=s;const r=s-Gi+1+Jd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Gi?l=Jd[a-s+Gi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*f),S=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,v=b>2?0:-1,E=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];y.set(E,x*p*b),S.set(u,g*p*b);const R=[b,b,b,b,b,b];_.set(R,m*p*b)}const T=new qt;T.setAttribute("position",new ue(y,x)),T.setAttribute("uv",new ue(S,g)),T.setAttribute("faceIndex",new ue(_,m)),n.push(new Ht(T,null)),i>Gi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function jd(s,t,e){const n=new Rn(s,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function HM(s,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function VM(s,t,e){const n=new Float32Array(fs),i=new P(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function tf(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ef(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eu extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Aa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new An(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ri});r.uniforms.tEquirect.value=e;const a=new Ht(i,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ae),new pm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function GM(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===qr||f===Kr)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new Eu(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===qr||f===Kr,x=f===ai||f===Xi;if(p||x){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new wh(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new wh(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===qr?u.mapping=ai:f===Kr&&(u.mapping=Xi),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function WM(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Wi("WebGLRenderer: "+n+" extension not supported."),i}}}function XM(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const y=f.array;x=f.version;for(let S=0,_=y.length;S<_;S+=3){const T=y[S+0],b=y[S+1],A=y[S+2];u.push(T,b,b,A,A,T)}}else{const y=p.array;x=p.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const T=S+0,b=S+1,A=S+2;u.push(T,b,b,A,A,T)}}const g=new(p.count>=65535?Jh:Zh)(u,1);g.version=x;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function YM(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qM(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function KM(s,t,e){const n=new WeakMap,i=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let T=o.attributes.position.count*_,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*b*4*d),v=new Bl(A,T,b,d);v.type=ln,v.needsUpdate=!0;const E=_*4;for(let I=0;I<d;I++){const L=m[I],z=y[I],W=S[I],U=T*b*4*I;for(let X=0;X<L.count;X++){const B=X*E;p===!0&&(i.fromBufferAttribute(L,X),A[U+B+0]=i.x,A[U+B+1]=i.y,A[U+B+2]=i.z,A[U+B+3]=0),x===!0&&(i.fromBufferAttribute(z,X),A[U+B+4]=i.x,A[U+B+5]=i.y,A[U+B+6]=i.z,A[U+B+7]=0),g===!0&&(i.fromBufferAttribute(W,X),A[U+B+8]=i.x,A[U+B+9]=i.y,A[U+B+10]=i.z,A[U+B+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:v,size:new Q(T,b)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function $M(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const ZM={[Dh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Al]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function JM(s,t,e,n,i,r){const a=new Rn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new ws(t,e):void 0}),o=new Rn(t,e,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new qt;l.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const c=new cu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ht(l,c),d=new Ia(-1,1,1,-1,0,1);let u=null,f=null,p=!1,x,g=null,m=[],y=!1;this.setSize=function(S,_){a.setSize(S,_),o.setSize(S,_);for(let T=0;T<m.length;T++){const b=m[T];b.setSize&&b.setSize(S,_)}},this.setEffects=function(S){m=S,y=m.length>0&&m[0].isRenderPass===!0;const _=a.width,T=a.height;for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(_,T)}},this.begin=function(S,_){if(p||S.toneMapping===Xn&&m.length===0)return!1;if(g=_,_!==null){const T=_.width,b=_.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return y===!1&&S.setRenderTarget(a),x=S.toneMapping,S.toneMapping=Xn,!0},this.hasRenderPass=function(){return y},this.end=function(S,_){S.toneMapping=x,p=!0;let T=a,b=o;for(let A=0;A<m.length;A++){const v=m[A];if(v.enabled!==!1&&(v.render(S,b,T,_),v.needsSwap!==!1)){const E=T;T=b,b=E}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},ce.getTransfer(u)===xe&&(c.defines.SRGB_TRANSFER="");const A=ZM[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(g),S.render(h,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Tm=new Re,Th=new ws(1,1),Em=new Bl,Am=new zl,Cm=new Aa,nf=[],sf=[],rf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function Sr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=nf[i];if(r===void 0&&(r=new Float32Array(i),nf[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function He(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sc(s,t){let e=sf[t];e===void 0&&(e=new Int32Array(t),sf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function QM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function jM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),He(e,t)}}function tS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),He(e,t)}}function eS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),He(e,t)}}function nS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;of.set(n),s.uniformMatrix2fv(this.addr,!1,of),He(e,n)}}function iS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;af.set(n),s.uniformMatrix3fv(this.addr,!1,af),He(e,n)}}function sS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;rf.set(n),s.uniformMatrix4fv(this.addr,!1,rf),He(e,n)}}function rS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function aS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),He(e,t)}}function oS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),He(e,t)}}function lS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),He(e,t)}}function cS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),He(e,t)}}function uS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),He(e,t)}}function dS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),He(e,t)}}function fS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Th.compareFunction=e.isReversedDepthBuffer()?Ol:Fl,r=Th):r=Tm,e.setTexture2D(t||r,i)}function pS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Am,i)}function mS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cm,i)}function gS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Em,i)}function xS(s){switch(s){case 5126:return QM;case 35664:return jM;case 35665:return tS;case 35666:return eS;case 35674:return nS;case 35675:return iS;case 35676:return sS;case 5124:case 35670:return rS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return hS;case 36295:return uS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}function _S(s,t){s.uniform1fv(this.addr,t)}function vS(s,t){const e=Sr(t,this.size,2);s.uniform2fv(this.addr,e)}function yS(s,t){const e=Sr(t,this.size,3);s.uniform3fv(this.addr,e)}function MS(s,t){const e=Sr(t,this.size,4);s.uniform4fv(this.addr,e)}function SS(s,t){const e=Sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bS(s,t){const e=Sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wS(s,t){const e=Sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function TS(s,t){s.uniform1iv(this.addr,t)}function ES(s,t){s.uniform2iv(this.addr,t)}function AS(s,t){s.uniform3iv(this.addr,t)}function CS(s,t){s.uniform4iv(this.addr,t)}function RS(s,t){s.uniform1uiv(this.addr,t)}function PS(s,t){s.uniform2uiv(this.addr,t)}function IS(s,t){s.uniform3uiv(this.addr,t)}function LS(s,t){s.uniform4uiv(this.addr,t)}function DS(s,t,e){const n=this.cache,i=t.length,r=sc(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Th:a=Tm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function NS(s,t,e){const n=this.cache,i=t.length,r=sc(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Am,r[a])}function US(s,t,e){const n=this.cache,i=t.length,r=sc(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Cm,r[a])}function FS(s,t,e){const n=this.cache,i=t.length,r=sc(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Em,r[a])}function OS(s){switch(s){case 5126:return _S;case 35664:return vS;case 35665:return yS;case 35666:return MS;case 35674:return SS;case 35675:return bS;case 35676:return wS;case 5124:case 35670:return TS;case 35667:case 35671:return ES;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return PS;case 36295:return IS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return FS}}class BS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xS(e.type)}}class zS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=OS(e.type)}}class kS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function lf(s,t){s.seq.push(t),s.map[t.id]=t}function HS(s,t,e){const n=s.name,i=n.length;for(Qc.lastIndex=0;;){const r=Qc.exec(n),a=Qc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){lf(e,c===void 0?new BS(o,s,t):new zS(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new kS(o),lf(e,d)),e=d}}}class Po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);HS(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function cf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const VS=37297;let GS=0;function WS(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hf=new Qt;function XS(s){ce._getMatrix(hf,ce.workingColorSpace,s);const t=`mat3( ${hf.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(s)){case ha:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function uf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+WS(s.getShaderSource(t),o)}else return r}function YS(s,t){const e=XS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qS={[Dh]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Al]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[Fh]:"Custom"};function KS(s,t){const e=qS[t];return e===void 0?(ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Eo=new P;function $S(){ce.getLuminanceCoefficients(Eo);const s=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function JS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function QS(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Gr(s){return s!==""}function df(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ff(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(s){return s.replace(jS,eb)}const tb=new Map;function eb(s,t){let e=ie[t];if(e===void 0){const n=tb.get(t);if(n!==void 0)e=ie[n],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eh(e)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(s){return s.replace(nb,ib)}function ib(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function mf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const sb={[Yr]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function rb(s){return sb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ab={[ai]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE_UV"};function ob(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ab[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lb={[Xi]:"ENVMAP_MODE_REFRACTION"};function cb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hb={[wa]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function ub(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hb[s.combine]||"ENVMAP_BLENDING_NONE"}function db(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fb(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=rb(e),c=ob(e),h=cb(e),d=ub(e),u=db(e),f=ZS(e),p=JS(r),x=i.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Gr).join(`
`),m.length>0&&(m+=`
`)):(g=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),m=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Xn?KS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,YS("linearToOutputTexel",e.outputColorSpace),$S(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Eh(a),a=df(a,e),a=ff(a,e),o=Eh(o),o=df(o,e),o=ff(o,e),a=pf(a),o=pf(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+g+a,_=y+m+o,T=cf(i,i.VERTEX_SHADER,S),b=cf(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(b)||"",U=L.trim(),X=z.trim(),B=W.trim();let J=!0,it=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,b);else{const ut=uf(i,T,"vertex"),lt=uf(i,b,"fragment");It("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+ut+`
`+lt)}else U!==""?ot("WebGLProgram: Program Info Log:",U):(X===""||B==="")&&(it=!1);it&&(I.diagnostics={runnable:J,programLog:U,vertexShader:{log:X,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(T),i.deleteShader(b),v=new Po(i,x),E=QS(i,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,VS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=GS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gb(t),e.set(t,n)),n}}class gb{constructor(t){this.id=pb++,this.code=t,this.usedTimes=0}}function xb(s){return s===qi||s===ra||s===aa}function _b(s,t,e,n,i,r){const a=new kl,o=new mb,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,R,I,L,z){const W=I.fog,U=L.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=t.get(v.envMap||X,B),it=J&&J.mapping===_r?J.image.height:null,ut=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ot("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const lt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,wt=lt!==void 0?lt.length:0;let re=0;U.morphAttributes.position!==void 0&&(re=1),U.morphAttributes.normal!==void 0&&(re=2),U.morphAttributes.color!==void 0&&(re=3);let Se,de,$,ct;if(ut){const Rt=Hn[ut];Se=Rt.vertexShader,de=Rt.fragmentShader}else{Se=v.vertexShader,de=v.fragmentShader;const Rt=o.getVertexShaderStage(v),Pe=o.getFragmentShaderStage(v);o.update(v,Rt,Pe),$=Rt.id,ct=Pe.id}const st=s.getRenderTarget(),Bt=s.state.buffers.depth.getReversed(),$t=L.isInstancedMesh===!0,Vt=L.isBatchedMesh===!0,ge=!!v.map,Jt=!!v.matcap,j=!!J,nt=!!v.aoMap,et=!!v.lightMap,vt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Gt=!!v.displacementMap,Dt=!!v.emissiveMap,Zt=!!v.metalnessMap,jt=!!v.roughnessMap,D=v.anisotropy>0,ye=v.clearcoat>0,le=v.dispersion>0,C=v.iridescence>0,M=v.sheen>0,O=v.transmission>0,V=D&&!!v.anisotropyMap,Y=ye&&!!v.clearcoatMap,rt=ye&&!!v.clearcoatNormalMap,at=ye&&!!v.clearcoatRoughnessMap,q=C&&!!v.iridescenceMap,Z=C&&!!v.iridescenceThicknessMap,dt=M&&!!v.sheenColorMap,Nt=M&&!!v.sheenRoughnessMap,_t=!!v.specularMap,ft=!!v.specularColorMap,kt=!!v.specularIntensityMap,Xt=O&&!!v.transmissionMap,te=O&&!!v.thicknessMap,N=!!v.gradientMap,ht=!!v.alphaMap,K=v.alphaTest>0,pt=!!v.alphaHash,St=!!v.extensions;let tt=Xn;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(tt=s.toneMapping);const Lt={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:Se,fragmentShader:de,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Vt,batchingColor:Vt&&L._colorsTexture!==null,instancing:$t,instancingColor:$t&&L.instanceColor!==null,instancingMorph:$t&&L.morphTexture!==null,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ge,matcap:Jt,envMap:j,envMapMode:j&&J.mapping,envMapCubeUVHeight:it,aoMap:nt,lightMap:et,bumpMap:vt,normalMap:xt,displacementMap:Gt,emissiveMap:Dt,normalMapObjectSpace:xt&&v.normalMapType===mp,normalMapTangentSpace:xt&&v.normalMapType===Si,packedNormalMap:xt&&v.normalMapType===Si&&xb(v.normalMap.format),metalnessMap:Zt,roughnessMap:jt,anisotropy:D,anisotropyMap:V,clearcoat:ye,clearcoatMap:Y,clearcoatNormalMap:rt,clearcoatRoughnessMap:at,dispersion:le,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:M,sheenColorMap:dt,sheenRoughnessMap:Nt,specularMap:_t,specularColorMap:ft,specularIntensityMap:kt,transmission:O,transmissionMap:Xt,thicknessMap:te,gradientMap:N,opaque:v.transparent===!1&&v.blending===_s&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:K,alphaHash:pt,combine:v.combine,mapUv:ge&&p(v.map.channel),aoMapUv:nt&&p(v.aoMap.channel),lightMapUv:et&&p(v.lightMap.channel),bumpMapUv:vt&&p(v.bumpMap.channel),normalMapUv:xt&&p(v.normalMap.channel),displacementMapUv:Gt&&p(v.displacementMap.channel),emissiveMapUv:Dt&&p(v.emissiveMap.channel),metalnessMapUv:Zt&&p(v.metalnessMap.channel),roughnessMapUv:jt&&p(v.roughnessMap.channel),anisotropyMapUv:V&&p(v.anisotropyMap.channel),clearcoatMapUv:Y&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&p(v.sheenRoughnessMap.channel),specularMapUv:_t&&p(v.specularMap.channel),specularColorMapUv:ft&&p(v.specularColorMap.channel),specularIntensityMapUv:kt&&p(v.specularIntensityMap.channel),transmissionMapUv:Xt&&p(v.transmissionMap.channel),thicknessMapUv:te&&p(v.thicknessMap.channel),alphaMapUv:ht&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||D),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(ge||ht),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Bt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,decodeVideoTexture:ge&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&ce.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:St&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&v.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(E,v),y(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){const E=f[v.type];let R;if(E){const I=Hn[E];R=qp.clone(I.uniforms)}else R=v.uniforms;return R}function _(v,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new fb(s,E,v,i),c.push(R),h.set(E,R)),R}function T(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:A}}function vb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function yb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function gf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=m),t++,y}function l(u,f,p,x,g,m){const y=o(u,f,p,x,g,m);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):e.push(y)}function c(u,f,p,x,g,m){const y=o(u,f,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f,p){e.length>1&&e.sort(u||yb),n.length>1&&n.sort(f||gf),i.length>1&&i.sort(f||gf),p&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Mb(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new xf,s.set(n,[a])):i>=r.length?(a=new xf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new mt};break;case"SpotLight":e={position:new P,direction:new P,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function bb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wb=0;function Tb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Eb(s){const t=new Sb,e=bb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new Kt,a=new Kt;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,S=0,_=0,T=0,b=0,A=0;c.sort(Tb);for(let E=0,R=c.length;E<R;E++){const I=c[E],L=I.color,z=I.intensity,W=I.distance;let U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qi?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=L.r*z,d+=L.g*z,u+=L.b*z;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],z);A++}else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,J=e.get(I);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=X,f++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(L).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[x]=X;const B=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,B.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[x]=B.matrix,I.castShadow){const J=e.get(I);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=U,_++}x++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(L).multiplyScalar(z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=X,g++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const B=I.shadow,J=e.get(I);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=X,p++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(z),X.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=X,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==S||v.numSpotShadows!==_||v.numSpotMaps!==T||v.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,v.directionalLength=f,v.pointLength=p,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=S,v.numSpotShadows=_,v.numSpotMaps=T,v.numLightProbes=A,n.version=wb++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function _f(s){const t=new Eb(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ab(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new _f(s),t.set(i,[o])):r>=a.length?(o=new _f(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ib=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],vf=new Kt,Or=new P,jc=new P;function Lb(s,t,e){let n=new bs;const i=new Q,r=new Q,a=new ve,o=new uu,l=new du,c={},h=e.maxTextureSize,d={[Mi]:tn,[tn]:Mi,[Vn]:Vn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Cb,fragmentShader:Rb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new qt;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(b,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Gf&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yr);const E=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=m!==this.type;z&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(U=>U.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,U=b.length;W<U;W++){const X=b[W],B=X.shadow;if(B===void 0){ot("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const J=B.getFrameExtents();i.multiply(J),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,B.mapSize.y=r.y));const it=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=it,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===nr){if(X.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Rn(i.x,i.y,{format:qi,type:oi,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new ws(i.x,i.y,ln),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=li,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe}else X.isPointLight?(B.map=new Eu(i.x),B.map.depthTexture=new Np(i.x,Un)):(B.map=new Rn(i.x,i.y),B.map.depthTexture=new ws(i.x,i.y,Un)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=li,this.type===Yr?(B.map.depthTexture.compareFunction=it?Ol:Fl,B.map.depthTexture.minFilter=Ae,B.map.depthTexture.magFilter=Ae):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe);B.camera.updateProjectionMatrix()}const ut=B.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ut;lt++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,lt),s.clear();else{lt===0&&(s.setRenderTarget(B.map),s.clear());const wt=B.getViewport(lt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),L.viewport(a)}if(X.isPointLight){const wt=B.camera,re=B.matrix,Se=X.distance||wt.far;Se!==wt.far&&(wt.far=Se,wt.updateProjectionMatrix()),Or.setFromMatrixPosition(X.matrixWorld),wt.position.copy(Or),jc.copy(wt.position),jc.add(Pb[lt]),wt.up.copy(Ib[lt]),wt.lookAt(jc),wt.updateMatrixWorld(),re.makeTranslation(-Or.x,-Or.y,-Or.z),vf.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vf,wt.coordinateSystem,wt.reversedDepth)}else B.updateMatrices(X);n=B.getFrustum(),_(A,v,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===nr&&y(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,R,I)};function y(b,A){const v=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(i.x,i.y,{format:qi,type:oi})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,v,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,v,f,x,null)}function S(b,A,v,E){let R=null;const I=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=R.uuid,z=A.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let U=W[z];U===void 0&&(U=R.clone(),W[z]=U,A.addEventListener("dispose",T)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,E===nr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=s.properties.get(R);L.light=v}return R}function _(b,A,v,E,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===nr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const z=t.update(b),W=b.material;if(Array.isArray(W)){const U=z.groups;for(let X=0,B=U.length;X<B;X++){const J=U[X],it=W[J.materialIndex];if(it&&it.visible){const ut=S(b,it,E,R);b.onBeforeShadow(s,b,A,v,z,ut,J),s.renderBufferDirect(v,null,z,ut,b,J),b.onAfterShadow(s,b,A,v,z,ut,J)}}}else if(W.visible){const U=S(b,W,E,R);b.onBeforeShadow(s,b,A,v,z,U,null),s.renderBufferDirect(v,null,z,U,b,null),b.onAfterShadow(s,b,A,v,z,U,null)}}const L=b.children;for(let z=0,W=L.length;z<W;z++)_(L[z],A,v,E,R)}function T(b){b.target.removeEventListener("dispose",T);for(const v in c){const E=c[v],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Db(s,t){function e(){let N=!1;const ht=new ve;let K=null;const pt=new ve(0,0,0,0);return{setMask:function(St){K!==St&&!N&&(s.colorMask(St,St,St,St),K=St)},setLocked:function(St){N=St},setClear:function(St,tt,Lt,Rt,Pe){Pe===!0&&(St*=Rt,tt*=Rt,Lt*=Rt),ht.set(St,tt,Lt,Rt),pt.equals(ht)===!1&&(s.clearColor(St,tt,Lt,Rt),pt.copy(ht))},reset:function(){N=!1,K=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,K=null,pt=null,St=null;return{setReversed:function(tt){if(ht!==tt){const Lt=t.get("EXT_clip_control");tt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ht=tt;const Rt=St;St=null,this.setClear(Rt)}},getReversed:function(){return ht},setTest:function(tt){tt?st(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(tt){K!==tt&&!N&&(s.depthMask(tt),K=tt)},setFunc:function(tt){if(ht&&(tt=J0[tt]),pt!==tt){switch(tt){case Uo:s.depthFunc(s.NEVER);break;case Fo:s.depthFunc(s.ALWAYS);break;case Oo:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Bo:s.depthFunc(s.EQUAL);break;case zo:s.depthFunc(s.GEQUAL);break;case ko:s.depthFunc(s.GREATER);break;case Ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=tt}},setLocked:function(tt){N=tt},setClear:function(tt){St!==tt&&(St=tt,ht&&(tt=1-tt),s.clearDepth(tt))},reset:function(){N=!1,K=null,pt=null,St=null,ht=!1}}}function i(){let N=!1,ht=null,K=null,pt=null,St=null,tt=null,Lt=null,Rt=null,Pe=null;return{setTest:function(Te){N||(Te?st(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(Te){ht!==Te&&!N&&(s.stencilMask(Te),ht=Te)},setFunc:function(Te,Zn,Jn){(K!==Te||pt!==Zn||St!==Jn)&&(s.stencilFunc(Te,Zn,Jn),K=Te,pt=Zn,St=Jn)},setOp:function(Te,Zn,Jn){(tt!==Te||Lt!==Zn||Rt!==Jn)&&(s.stencilOp(Te,Zn,Jn),tt=Te,Lt=Zn,Rt=Jn)},setLocked:function(Te){N=Te},setClear:function(Te){Pe!==Te&&(s.clearStencil(Te),Pe=Te)},reset:function(){N=!1,ht=null,K=null,pt=null,St=null,tt=null,Lt=null,Rt=null,Pe=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,_=null,T=null,b=null,A=null,v=new mt(0,0,0),E=0,R=!1,I=null,L=null,z=null,W=null,U=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(it)[1]),B=J>=1):it.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),B=J>=2);let ut=null,lt={};const wt=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Se=new ve().fromArray(wt),de=new ve().fromArray(re);function $(N,ht,K,pt){const St=new Uint8Array(4),tt=s.createTexture();s.bindTexture(N,tt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<K;Lt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(ht+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return tt}const ct={};ct[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(s.DEPTH_TEST),a.setFunc(ys),vt(!1),xt(hh),st(s.CULL_FACE),nt(ri);function st(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Bt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function $t(N,ht){return u[N]!==ht?(s.bindFramebuffer(N,ht),u[N]=ht,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Vt(N,ht){let K=p,pt=!1;if(N){K=f.get(ht),K===void 0&&(K=[],f.set(ht,K));const St=N.textures;if(K.length!==St.length||K[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Lt=St.length;tt<Lt;tt++)K[tt]=s.COLOR_ATTACHMENT0+tt;K.length=St.length,pt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,pt=!0);pt&&s.drawBuffers(K)}function ge(N){return x!==N?(s.useProgram(N),x=N,!0):!1}const Jt={[Bi]:s.FUNC_ADD,[Xf]:s.FUNC_SUBTRACT,[Yf]:s.FUNC_REVERSE_SUBTRACT};Jt[qf]=s.MIN,Jt[Kf]=s.MAX;const j={[$f]:s.ZERO,[Zf]:s.ONE,[Jf]:s.SRC_COLOR,[Do]:s.SRC_ALPHA,[ip]:s.SRC_ALPHA_SATURATE,[ep]:s.DST_COLOR,[jf]:s.DST_ALPHA,[Qf]:s.ONE_MINUS_SRC_COLOR,[No]:s.ONE_MINUS_SRC_ALPHA,[np]:s.ONE_MINUS_DST_COLOR,[tp]:s.ONE_MINUS_DST_ALPHA,[sp]:s.CONSTANT_COLOR,[rp]:s.ONE_MINUS_CONSTANT_COLOR,[ap]:s.CONSTANT_ALPHA,[op]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(N,ht,K,pt,St,tt,Lt,Rt,Pe,Te){if(N===ri){g===!0&&(Bt(s.BLEND),g=!1);return}if(g===!1&&(st(s.BLEND),g=!0),N!==Wf){if(N!==m||Te!==R){if((y!==Bi||T!==Bi)&&(s.blendEquation(s.FUNC_ADD),y=Bi,T=Bi),Te)switch(N){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lo:s.blendFunc(s.ONE,s.ONE);break;case uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",N);break}else switch(N){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uh:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",N);break}S=null,_=null,b=null,A=null,v.set(0,0,0),E=0,m=N,R=Te}return}St=St||ht,tt=tt||K,Lt=Lt||pt,(ht!==y||St!==T)&&(s.blendEquationSeparate(Jt[ht],Jt[St]),y=ht,T=St),(K!==S||pt!==_||tt!==b||Lt!==A)&&(s.blendFuncSeparate(j[K],j[pt],j[tt],j[Lt]),S=K,_=pt,b=tt,A=Lt),(Rt.equals(v)===!1||Pe!==E)&&(s.blendColor(Rt.r,Rt.g,Rt.b,Pe),v.copy(Rt),E=Pe),m=N,R=!1}function et(N,ht){N.side===Vn?Bt(s.CULL_FACE):st(s.CULL_FACE);let K=N.side===tn;ht&&(K=!K),vt(K),N.blending===_s&&N.transparent===!1?nt(ri):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(N){I!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),I=N)}function xt(N){N!==Hf?(st(s.CULL_FACE),N!==L&&(N===hh?s.cullFace(s.BACK):N===Vf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),L=N}function Gt(N){N!==z&&(B&&s.lineWidth(N),z=N)}function Dt(N,ht,K){N?(st(s.POLYGON_OFFSET_FILL),(W!==ht||U!==K)&&(W=ht,U=K,a.getReversed()&&(ht=-ht),s.polygonOffset(ht,K))):Bt(s.POLYGON_OFFSET_FILL)}function Zt(N){N?st(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function jt(N){N===void 0&&(N=s.TEXTURE0+X-1),ut!==N&&(s.activeTexture(N),ut=N)}function D(N,ht,K){K===void 0&&(ut===null?K=s.TEXTURE0+X-1:K=ut);let pt=lt[K];pt===void 0&&(pt={type:void 0,texture:void 0},lt[K]=pt),(pt.type!==N||pt.texture!==ht)&&(ut!==K&&(s.activeTexture(K),ut=K),s.bindTexture(N,ht||ct[N]),pt.type=N,pt.texture=ht)}function ye(){const N=lt[ut];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function M(){try{s.texSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function O(){try{s.texSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function rt(){try{s.texStorage2D(...arguments)}catch(N){It("WebGLState:",N)}}function at(){try{s.texStorage3D(...arguments)}catch(N){It("WebGLState:",N)}}function q(){try{s.texImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Z(){try{s.texImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function dt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Nt(N,ht){d[N]!==ht&&(s.pixelStorei(N,ht),d[N]=ht)}function _t(N){Se.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Se.copy(N))}function ft(N){de.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),de.copy(N))}function kt(N,ht){let K=c.get(ht);K===void 0&&(K=new WeakMap,c.set(ht,K));let pt=K.get(N);pt===void 0&&(pt=s.getUniformBlockIndex(ht,N.name),K.set(N,pt))}function Xt(N,ht){const pt=c.get(ht).get(N);l.get(ht)!==pt&&(s.uniformBlockBinding(ht,pt,N.__bindingPointIndex),l.set(ht,pt))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ut=null,lt={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,_=null,T=null,b=null,A=null,v=new mt(0,0,0),E=0,R=!1,I=null,L=null,z=null,W=null,U=null,Se.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Bt,bindFramebuffer:$t,drawBuffers:Vt,useProgram:ge,setBlending:nt,setMaterial:et,setFlipSided:vt,setCullFace:xt,setLineWidth:Gt,setPolygonOffset:Dt,setScissorTest:Zt,activeTexture:jt,bindTexture:D,unbindTexture:ye,compressedTexImage2D:le,compressedTexImage3D:C,texImage2D:q,texImage3D:Z,pixelStorei:Nt,getParameter:dt,updateUBOMapping:kt,uniformBlockBinding:Xt,texStorage2D:rt,texStorage3D:at,texSubImage2D:M,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:_t,viewport:ft,reset:te}}function Nb(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):da("canvas")}function g(C,M,O){let V=1;const Y=le(C);if((Y.width>O||Y.height>O)&&(V=O/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(V*Y.width),at=Math.floor(V*Y.height);u===void 0&&(u=x(rt,at));const q=M?x(rt,at):u;return q.width=rt,q.height=at,q.getContext("2d").drawImage(C,0,0,rt,at),ot("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+rt+"x"+at+")."),q}else return"data"in C&&ot("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps}function y(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,M,O,V,Y,rt=!1){if(C!==null){if(s[C]!==void 0)return s[C];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;V&&(at=t.get("EXT_texture_norm16"),at||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8),O===s.UNSIGNED_SHORT&&at&&(q=at.R16_EXT),O===s.SHORT&&at&&(q=at.R16_SNORM_EXT)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),M===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8),O===s.UNSIGNED_SHORT&&at&&(q=at.RG16_EXT),O===s.SHORT&&at&&(q=at.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(O===s.UNSIGNED_SHORT&&at&&(q=at.RGB16_EXT),O===s.SHORT&&at&&(q=at.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){const Z=rt?ha:ce.getTransfer(Y);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=Z===xe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&at&&(q=at.RGBA16_EXT),O===s.SHORT&&at&&(q=at.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function T(C,M){let O;return C?M===null||M===Un||M===cr?O=s.DEPTH24_STENCIL8:M===ln?O=s.DEPTH32F_STENCIL8:M===lr&&(O=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Un||M===cr?O=s.DEPTH_COMPONENT24:M===ln?O=s.DEPTH_COMPONENT32F:M===lr&&(O=s.DEPTH_COMPONENT16),O}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==Ae?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function v(C){const M=C.target;M.removeEventListener("dispose",v),I(M)}function E(C){const M=n.get(C);if(M.__webglInit===void 0)return;const O=C.source,V=f.get(O);if(V){const Y=V[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(V).length===0&&f.delete(O)}n.remove(C)}function R(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const O=C.source,V=f.get(O);delete V[M.__cacheKey],a.memory.textures--}function I(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let Y=0;Y<M.__webglFramebuffer[V].length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[V][Y]);else s.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)s.deleteFramebuffer(M.__webglFramebuffer[V]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=C.textures;for(let V=0,Y=O.length;V<Y;V++){const rt=n.get(O[V]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(C)}let L=0;function z(){L=0}function W(){return L}function U(C){L=C}function X(){const C=L;return C>=i.maxTextures&&ot("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function J(C,M){const O=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const V=C.image;if(V===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(O,C,M);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function it(C,M){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Bt(O,C,M);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function ut(C,M){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Bt(O,C,M);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function lt(C,M){const O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){$t(O,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const wt={[Yi]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[sa]:s.MIRRORED_REPEAT},re={[Fe]:s.NEAREST,[zh]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[Ae]:s.LINEAR,[$r]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},Se={[gp]:s.NEVER,[Mp]:s.ALWAYS,[xp]:s.LESS,[Fl]:s.LEQUAL,[_p]:s.EQUAL,[Ol]:s.GEQUAL,[vp]:s.GREATER,[yp]:s.NOTEQUAL};function de(C,M){if(M.type===ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ae||M.magFilter===$r||M.magFilter===ir||M.magFilter===ii||M.minFilter===Ae||M.minFilter===$r||M.minFilter===ir||M.minFilter===ii)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,wt[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,wt[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,wt[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fe||M.minFilter!==ir&&M.minFilter!==ii||M.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const V=M.source;let Y=f.get(V);Y===void 0&&(Y={},f.set(V,Y));const rt=B(M);if(rt!==C.__cacheKey){Y[rt]===void 0&&(Y[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[rt].usedTimes++;const at=Y[C.__cacheKey];at!==void 0&&(Y[C.__cacheKey].usedTimes--,at.usedTimes===0&&R(M)),C.__cacheKey=rt,C.__webglTexture=Y[rt].texture}return O}function ct(C,M,O){return Math.floor(Math.floor(C/O)/M)}function st(C,M,O,V){const rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,O,V,M.data);else{rt.sort((Nt,_t)=>Nt.start-_t.start);let at=0;for(let Nt=1;Nt<rt.length;Nt++){const _t=rt[at],ft=rt[Nt],kt=_t.start+_t.count,Xt=ct(ft.start,M.width,4),te=ct(_t.start,M.width,4);ft.start<=kt+1&&Xt===te&&ct(ft.start+ft.count-1,M.width,4)===Xt?_t.count=Math.max(_t.count,ft.start+ft.count-_t.start):(++at,rt[at]=ft)}rt.length=at+1;const q=e.getParameter(s.UNPACK_ROW_LENGTH),Z=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Nt=0,_t=rt.length;Nt<_t;Nt++){const ft=rt[Nt],kt=Math.floor(ft.start/4),Xt=Math.ceil(ft.count/4),te=kt%M.width,N=Math.floor(kt/M.width),ht=Xt,K=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,te),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,te,N,ht,K,O,V,M.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function Bt(C,M,O){let V=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=s.TEXTURE_3D);const Y=$(C,M),rt=M.source;e.bindTexture(V,C.__webglTexture,s.TEXTURE0+O);const at=n.get(rt);if(rt.version!==at.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const K=ce.getPrimaries(ce.workingColorSpace),pt=M.colorSpace===_i?null:ce.getPrimaries(M.colorSpace),St=M.colorSpace===_i||K===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=g(M.image,!1,i.maxTextureSize);Z=ye(M,Z);const dt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let _t=_(M.internalFormat,dt,Nt,M.normalized,M.colorSpace,M.isVideoTexture);de(V,M);let ft;const kt=M.mipmaps,Xt=M.isVideoTexture!==!0,te=at.__version===void 0||Y===!0,N=rt.dataReady,ht=b(M,Z);if(M.isDepthTexture)_t=T(M.format===zi,M.type),te&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,_t,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,_t,Z.width,Z.height,0,dt,Nt,null));else if(M.isDataTexture)if(kt.length>0){Xt&&te&&e.texStorage2D(s.TEXTURE_2D,ht,_t,kt[0].width,kt[0].height);for(let K=0,pt=kt.length;K<pt;K++)ft=kt[K],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,Nt,ft.data):e.texImage2D(s.TEXTURE_2D,K,_t,ft.width,ft.height,0,dt,Nt,ft.data);M.generateMipmaps=!1}else Xt?(te&&e.texStorage2D(s.TEXTURE_2D,ht,_t,Z.width,Z.height),N&&st(M,Z,dt,Nt)):e.texImage2D(s.TEXTURE_2D,0,_t,Z.width,Z.height,0,dt,Nt,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,_t,kt[0].width,kt[0].height,Z.depth);for(let K=0,pt=kt.length;K<pt;K++)if(ft=kt[K],M.format!==cn)if(dt!==null)if(Xt){if(N)if(M.layerUpdates.size>0){const St=bh(ft.width,ft.height,M.format,M.type);for(const tt of M.layerUpdates){const Lt=ft.data.subarray(tt*St/ft.data.BYTES_PER_ELEMENT,(tt+1)*St/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,tt,ft.width,ft.height,1,dt,Lt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,Z.depth,dt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,_t,ft.width,ft.height,Z.depth,0,ft.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,Z.depth,dt,Nt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,_t,ft.width,ft.height,Z.depth,0,dt,Nt,ft.data)}else{Xt&&te&&e.texStorage2D(s.TEXTURE_2D,ht,_t,kt[0].width,kt[0].height);for(let K=0,pt=kt.length;K<pt;K++)ft=kt[K],M.format!==cn?dt!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,K,_t,ft.width,ft.height,0,ft.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,Nt,ft.data):e.texImage2D(s.TEXTURE_2D,K,_t,ft.width,ft.height,0,dt,Nt,ft.data)}else if(M.isDataArrayTexture)if(Xt){if(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,_t,Z.width,Z.height,Z.depth),N)if(M.layerUpdates.size>0){const K=bh(Z.width,Z.height,M.format,M.type);for(const pt of M.layerUpdates){const St=Z.data.subarray(pt*K/Z.data.BYTES_PER_ELEMENT,(pt+1)*K/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,Z.width,Z.height,1,dt,Nt,St)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,dt,Nt,Z.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,Z.width,Z.height,Z.depth,0,dt,Nt,Z.data);else if(M.isData3DTexture)Xt?(te&&e.texStorage3D(s.TEXTURE_3D,ht,_t,Z.width,Z.height,Z.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,dt,Nt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,_t,Z.width,Z.height,Z.depth,0,dt,Nt,Z.data);else if(M.isFramebufferTexture){if(te)if(Xt)e.texStorage2D(s.TEXTURE_2D,ht,_t,Z.width,Z.height);else{let K=Z.width,pt=Z.height;for(let St=0;St<ht;St++)e.texImage2D(s.TEXTURE_2D,St,_t,K,pt,0,dt,Nt,null),K>>=1,pt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),d.add(M),K.onpaint=pt=>{const St=pt.changedElements;for(const tt of d)St.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{const St=s.RGBA,tt=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,tt,Lt,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Xt&&te){const K=le(kt[0]);e.texStorage2D(s.TEXTURE_2D,ht,_t,K.width,K.height)}for(let K=0,pt=kt.length;K<pt;K++)ft=kt[K],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,dt,Nt,ft):e.texImage2D(s.TEXTURE_2D,K,_t,dt,Nt,ft);M.generateMipmaps=!1}else if(Xt){if(te){const K=le(Z);e.texStorage2D(s.TEXTURE_2D,ht,_t,K.width,K.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Nt,Z)}else e.texImage2D(s.TEXTURE_2D,0,_t,dt,Nt,Z);m(M)&&y(V),at.__version=rt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $t(C,M,O){if(M.image.length!==6)return;const V=$(C,M),Y=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const rt=n.get(Y);if(Y.version!==rt.__version||V===!0){e.activeTexture(s.TEXTURE0+O);const at=ce.getPrimaries(ce.workingColorSpace),q=M.colorSpace===_i?null:ce.getPrimaries(M.colorSpace),Z=M.colorSpace===_i||at===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!dt&&!Nt?_t[tt]=g(M.image[tt],!0,i.maxCubemapSize):_t[tt]=Nt?M.image[tt].image:M.image[tt],_t[tt]=ye(M,_t[tt]);const ft=_t[0],kt=r.convert(M.format,M.colorSpace),Xt=r.convert(M.type),te=_(M.internalFormat,kt,Xt,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,ht=rt.__version===void 0||V===!0,K=Y.dataReady;let pt=b(M,ft);de(s.TEXTURE_CUBE_MAP,M);let St;if(dt){N&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,te,ft.width,ft.height);for(let tt=0;tt<6;tt++){St=_t[tt].mipmaps;for(let Lt=0;Lt<St.length;Lt++){const Rt=St[Lt];M.format!==cn?kt!==null?N?K&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,0,0,Rt.width,Rt.height,kt,Rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,te,Rt.width,Rt.height,0,Rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,0,0,Rt.width,Rt.height,kt,Xt,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,te,Rt.width,Rt.height,0,kt,Xt,Rt.data)}}}else{if(St=M.mipmaps,N&&ht){St.length>0&&pt++;const tt=le(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,te,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Nt){N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,kt,Xt,_t[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,_t[tt].width,_t[tt].height,0,kt,Xt,_t[tt].data);for(let Lt=0;Lt<St.length;Lt++){const Pe=St[Lt].image[tt].image;N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,0,0,Pe.width,Pe.height,kt,Xt,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,te,Pe.width,Pe.height,0,kt,Xt,Pe.data)}}else{N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,kt,Xt,_t[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,kt,Xt,_t[tt]);for(let Lt=0;Lt<St.length;Lt++){const Rt=St[Lt];N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,0,0,kt,Xt,Rt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,te,kt,Xt,Rt.image[tt])}}}m(M)&&y(s.TEXTURE_CUBE_MAP),rt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Vt(C,M,O,V,Y,rt){const at=r.convert(O.format,O.colorSpace),q=r.convert(O.type),Z=_(O.internalFormat,at,q,O.normalized,O.colorSpace),dt=n.get(M),Nt=n.get(O);if(Nt.__renderTarget=M,!dt.__hasExternalTextures){const _t=Math.max(1,M.width>>rt),ft=Math.max(1,M.height>>rt);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,rt,Z,_t,ft,M.depth,0,at,q,null):e.texImage2D(Y,rt,Z,_t,ft,0,at,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),jt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,Nt.__webglTexture,0,Zt(M)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,Nt.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(C,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const V=M.depthTexture,Y=V&&V.isDepthTexture?V.type:null,rt=T(M.stencilBuffer,Y),at=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(M),rt,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(M),rt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,rt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,C)}else{const V=M.textures;for(let Y=0;Y<V.length;Y++){const rt=V[Y],at=r.convert(rt.format,rt.colorSpace),q=r.convert(rt.type),Z=_(rt.internalFormat,at,q,rt.normalized,rt.colorSpace);jt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(M),Z,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(M),Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(C,M,O){const V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),de(s.TEXTURE_CUBE_MAP,M.depthTexture);const dt=r.convert(M.depthTexture.format),Nt=r.convert(M.depthTexture.type);let _t;M.depthTexture.format===li?_t=s.DEPTH_COMPONENT24:M.depthTexture.format===zi&&(_t=s.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_t,M.width,M.height,0,dt,Nt,null)}}else J(M.depthTexture,0);const rt=Y.__webglTexture,at=Zt(M),q=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Z=M.depthTexture.format===zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===li)jt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,q,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Z,q,rt,0);else if(M.depthTexture.format===zi)jt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,q,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Z,q,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(C){const M=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=V}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Jt(M.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Jt(M.__webglFramebuffer[0],C,0):Jt(M.__webglFramebuffer,C,0)}else if(O){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=s.createRenderbuffer(),ge(M.__webglDepthbuffer[V],C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,rt)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ge(M.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,rt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,M,O){const V=n.get(C);M!==void 0&&Vt(V.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&j(C)}function et(C){const M=C.texture,O=n.get(C),V=n.get(M);C.addEventListener("dispose",v);const Y=C.textures,rt=C.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=M.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let Z=0;Z<M.mipmaps.length;Z++)O.__webglFramebuffer[q][Z]=s.createFramebuffer()}else O.__webglFramebuffer[q]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)O.__webglFramebuffer[q]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(at)for(let q=0,Z=Y.length;q<Z;q++){const dt=n.get(Y[q]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&jt(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<Y.length;q++){const Z=Y[q];O.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[q]);const dt=r.convert(Z.format,Z.colorSpace),Nt=r.convert(Z.type),_t=_(Z.internalFormat,dt,Nt,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),ft=Zt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,O.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),de(s.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Vt(O.__webglFramebuffer[q][Z],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else Vt(O.__webglFramebuffer[q],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(M)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let q=0,Z=Y.length;q<Z;q++){const dt=Y[q],Nt=n.get(dt);let _t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,Nt.__webglTexture),de(_t,dt),Vt(O.__webglFramebuffer,C,dt,s.COLOR_ATTACHMENT0+q,_t,0),m(dt)&&y(_t)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,V.__webglTexture),de(q,M),M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)Vt(O.__webglFramebuffer[Z],C,M,s.COLOR_ATTACHMENT0,q,Z);else Vt(O.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,q,0);m(M)&&y(q),e.unbindTexture()}C.depthBuffer&&j(C)}function vt(C){const M=C.textures;for(let O=0,V=M.length;O<V;O++){const Y=M[O];if(m(Y)){const rt=S(C),at=n.get(Y).__webglTexture;e.bindTexture(rt,at),y(rt),e.unbindTexture()}}}const xt=[],Gt=[];function Dt(C){if(C.samples>0){if(jt(C)===!1){const M=C.textures,O=C.width,V=C.height;let Y=s.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(C),q=M.length>1;if(q)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const Z=C.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,Y,s.NEAREST),l===!0&&(xt.length=0,Gt.length=0,xt.push(s.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xt.push(rt),Gt.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Zt(C){return Math.min(i.maxSamples,C.samples)}function jt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ye(C,M){const O=C.colorSpace,V=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ca&&O!==_i&&(ce.getTransfer(O)===xe?(V!==cn||Y!==mn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",O)),M}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.getTextureUnits=W,this.setTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=it,this.setTexture3D=ut,this.setTextureCube=lt,this.rebindTextures=nt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rm(s,t){function e(n,i=_i){let r;const a=ce.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===kh)return s.BYTE;if(n===Hh)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===Rl)return s.INT;if(n===Un)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===oi)return s.HALF_FLOAT;if(n===Wh)return s.ALPHA;if(n===Xh)return s.RGB;if(n===cn)return s.RGBA;if(n===li)return s.DEPTH_COMPONENT;if(n===zi)return s.DEPTH_STENCIL;if(n===Ll)return s.RED;if(n===Ta)return s.RED_INTEGER;if(n===qi)return s.RG;if(n===Dl)return s.RG_INTEGER;if(n===Nl)return s.RGBA_INTEGER;if(n===Zr||n===Jr||n===Qr||n===jr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Go||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===qo||n===Ko||n===$o||n===Zo||n===ra||n===Jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===qo)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$o)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qo||n===jo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===aa||n===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:Ub,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bb extends Kn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new Ob,m={},y=e.getContextAttributes();let S=null,_=null;const T=[],b=[],A=new Q;let v=null;const E=new Ge;E.viewport=new ve;const R=new Ge;R.viewport=new ve;const I=[E,R],L=new mm;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=T[$];return ct===void 0&&(ct=new Ro,T[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=T[$];return ct===void 0&&(ct=new Ro,T[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=T[$];return ct===void 0&&(ct=new Ro,T[$]=ct),ct.getHandSpace()};function U($){const ct=b.indexOf($.inputSource);if(ct===-1)return;const st=T[ct];st!==void 0&&(st.update($.inputSource,$.frame,c||a),st.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",B);for(let $=0;$<T.length;$++){const ct=b[$];ct!==null&&(b[$]=null,T[$].disconnect(ct))}z=null,W=null,g.reset();for(const $ in m)delete m[$];t.setRenderTarget(S),f=null,u=null,d=null,i=null,_=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",X),i.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Bt=null,$t=null;y.depth&&($t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=y.stencil?zi:li,Bt=y.stencil?cr:Un);const Vt={colorFormat:e.RGBA8,depthFormat:$t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Rn(u.textureWidth,u.textureHeight,{format:cn,type:mn,depthTexture:new ws(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const st={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Rn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B($){for(let ct=0;ct<$.removed.length;ct++){const st=$.removed[ct],Bt=b.indexOf(st);Bt>=0&&(b[Bt]=null,T[Bt].disconnect(st))}for(let ct=0;ct<$.added.length;ct++){const st=$.added[ct];let Bt=b.indexOf(st);if(Bt===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=b.length){b.push(st),Bt=Vt;break}else if(b[Vt]===null){b[Vt]=st,Bt=Vt;break}if(Bt===-1)break}const $t=T[Bt];$t&&$t.connect(st)}}const J=new P,it=new P;function ut($,ct,st){J.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(st.matrixWorld);const Bt=J.distanceTo(it),$t=ct.projectionMatrix.elements,Vt=st.projectionMatrix.elements,ge=$t[14]/($t[10]-1),Jt=$t[14]/($t[10]+1),j=($t[9]+1)/$t[5],nt=($t[9]-1)/$t[5],et=($t[8]-1)/$t[0],vt=(Vt[8]+1)/Vt[0],xt=ge*et,Gt=ge*vt,Dt=Bt/(-et+vt),Zt=Dt*-et;if(ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Zt),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),$t[10]===-1)$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const jt=ge+Dt,D=Jt+Dt,ye=xt-Zt,le=Gt+(Bt-Zt),C=j*Jt/D*jt,M=nt*Jt/D*jt;$.projectionMatrix.makePerspective(ye,le,C,M,jt,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function lt($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ct=$.near,st=$.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(st=g.depthFar)),L.near=R.near=E.near=ct,L.far=R.far=E.far=st,(z!==L.near||W!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),z=L.near,W=L.far),L.layers.mask=$.layers.mask|6,E.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const Bt=$.parent,$t=L.cameras;lt(L,Bt);for(let Vt=0;Vt<$t.length;Vt++)lt($t[Vt],Bt);$t.length===2?ut(L,E,R):L.projectionMatrix.copy(E.projectionMatrix),wt($,L,Bt)};function wt($,ct,st){st===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(st.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function($){return m[$]};let re=null;function Se($,ct){if(h=ct.getViewerPose(c||a),p=ct,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Bt=!1;st.length!==L.cameras.length&&(L.cameras.length=0,Bt=!0);for(let Jt=0;Jt<st.length;Jt++){const j=st[Jt];let nt=null;if(f!==null)nt=f.getViewport(j);else{const vt=d.getViewSubImage(u,j);nt=vt.viewport,Jt===0&&(t.setRenderTargetTextures(_,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(_))}let et=I[Jt];et===void 0&&(et=new Ge,et.layers.enable(Jt),et.viewport=new ve,I[Jt]=et),et.matrix.fromArray(j.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(j.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(nt.x,nt.y,nt.width,nt.height),Jt===0&&(L.matrix.copy(et.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Bt===!0&&L.cameras.push(et)}const $t=i.enabledFeatures;if($t&&$t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Jt=d.getDepthInformation(st[0]);Jt&&Jt.isValid&&Jt.texture&&g.init(Jt,i.renderState)}if($t&&$t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Jt=0;Jt<st.length;Jt++){const j=st[Jt].camera;if(j){let nt=m[j];nt||(nt=new eu,m[j]=nt);const et=d.getCameraImage(j);nt.sourceTexture=et}}}}for(let st=0;st<T.length;st++){const Bt=b[st],$t=T[st];Bt!==null&&$t!==void 0&&$t.update(Bt,ct,c||a)}re&&re($,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),p=null}const de=new bm;de.setAnimationLoop(Se),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const zb=new Kt,Pm=new Qt;Pm.set(-1,0,0,0,1,0,0,0,1);function kb(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Yp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,S,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(zb.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hb(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){const b=T.program;n.uniformBlockBinding(_,b)}function c(_,T){let b=i[_.id];b===void 0&&(g(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",y));const A=T.program;n.updateUBOMapping(_,A);const v=t.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){const T=d();_.__bindingPointIndex=T;const b=s.createBuffer(),A=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,b),b}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const T=i[_.id],b=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let v=0,E=b.length;v<E;v++){const R=b[v];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],v,I,A);else f(R,v,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,T,b,A){if(x(_,T,b,A)===!0){const v=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){const L=E[I],z=m(L);p(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function p(_,T,b){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,b)}function x(_,T,b,A){const v=_.value,E=T+"_"+b;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const R=A[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(_){const T=_.uniforms;let b=0;const A=16;for(let E=0,R=T.length;E<R;E++){const I=Array.isArray(T[E])?T[E]:[T[E]];for(let L=0,z=I.length;L<z;L++){const W=I[L],U=Array.isArray(W.value)?W.value:[W.value];for(let X=0,B=U.length;X<B;X++){const J=U[X],it=m(J),ut=b%A,lt=ut%it.boundary,wt=ut+lt;b+=lt,wt!==0&&A-wt<it.storage&&(b+=A-wt),W.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=it.storage}}}const v=b%A;return v>0&&(b+=A-v),_.__size=b,_.__cache={},this}function m(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",_),T}function y(_){const T=_.target;T.removeEventListener("dispose",y);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function S(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:S}}const Vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function Gb(){return ti===null&&(ti=new Nn(Vb,16,16,qi,oi),ti.name="DFG_LUT",ti.minFilter=Ae,ti.magFilter=Ae,ti.wrapS=xn,ti.wrapT=xn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Im{constructor(t={}){const{canvas:e=bp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=f,g=new Set([Nl,Dl,Ta]),m=new Set([mn,Un,lr,cr,Pl,Il]),y=new Uint32Array(4),S=new Int32Array(4),_=new P;let T=null,b=null;const A=[],v=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,L=null,z=null,W=null,U=null;this._outputColorSpace=rn;let X=0,B=0,J=null,it=-1,ut=null;const lt=new ve,wt=new ve;let re=null;const Se=new mt(0);let de=0,$=e.width,ct=e.height,st=1,Bt=null,$t=null;const Vt=new ve(0,0,$,ct),ge=new ve(0,0,$,ct);let Jt=!1;const j=new bs;let nt=!1,et=!1;const vt=new Kt,xt=new P,Gt=new ve,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function jt(){return J===null?st:1}let D=n;function ye(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Zn,!1),D===null){const F="webgl2";if(D=ye(F,w),D===null)throw ye(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw It("WebGLRenderer: "+w.message),w}let le,C,M,O,V,Y,rt,at,q,Z,dt,Nt,_t,ft,kt,Xt,te,N,ht,K,pt,St,tt;function Lt(){le=new WM(D),le.init(),pt=new Rm(D,le),C=new FM(D,le,t,pt),M=new Db(D,le),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),z=D.createFramebuffer(),W=D.createFramebuffer(),U=D.createFramebuffer(),O=new qM(D),V=new vb,Y=new Nb(D,le,M,V,C,pt,O),rt=new GM(R),at=new J_(D),St=new NM(D,at),q=new XM(D,at,O,St),Z=new $M(D,q,at,St,O),N=new KM(D,C,Y),kt=new OM(V),dt=new _b(R,rt,le,C,St,kt),Nt=new kb(R,V),_t=new Mb,ft=new Ab(le),te=new DM(R,rt,M,Z,p,l),Xt=new Lb(R,Z,C),tt=new Hb(D,O,C,M),ht=new UM(D,le,O),K=new YM(D,le,O),O.programs=dt.programs,R.capabilities=C,R.extensions=le,R.properties=V,R.renderLists=_t,R.shadowMap=Xt,R.state=M,R.info=O}Lt(),x!==mn&&(E=new JM(x,e.width,e.height,o,i,r));const Rt=new Bb(R,D);this.xr=Rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize($,ct,!1))},this.getSize=function(w){return w.set($,ct)},this.setSize=function(w,F,G=!0){if(Rt.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,ct=F,e.width=Math.floor(w*st),e.height=Math.floor(F*st),G===!0&&(e.style.width=w+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set($*st,ct*st).floor()},this.setDrawingBufferSize=function(w,F,G){$=w,ct=F,st=G,e.width=Math.floor(w*G),e.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===mn){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(lt)},this.getViewport=function(w){return w.copy(Vt)},this.setViewport=function(w,F,G,k){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,F,G,k),M.viewport(lt.copy(Vt).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,F,G,k){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,F,G,k),M.scissor(wt.copy(ge).multiplyScalar(st).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(w){M.setScissorTest(Jt=w)},this.setOpaqueSort=function(w){Bt=w},this.setTransparentSort=function(w){$t=w},this.getClearColor=function(w){return w.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,G=!0){let k=0;if(w){let H=!1;if(J!==null){const Mt=J.texture.format;H=g.has(Mt)}if(H){const Mt=J.texture.type,At=m.has(Mt),yt=te.getClearColor(),Pt=te.getClearAlpha(),Ut=yt.r,ee=yt.g,ae=yt.b;At?(y[0]=Ut,y[1]=ee,y[2]=ae,y[3]=Pt,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=Ut,S[1]=ee,S[2]=ae,S[3]=Pt,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}F&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Zn,!1),te.dispose(),_t.dispose(),ft.dispose(),V.dispose(),rt.dispose(),Z.dispose(),St.dispose(),tt.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Du),Rt.removeEventListener("sessionend",Nu),Qi.stop()};function Pe(w){w.preventDefault(),fa("WebGLRenderer: Context Lost."),I=!0}function Te(){fa("WebGLRenderer: Context Restored."),I=!1;const w=O.autoReset,F=Xt.enabled,G=Xt.autoUpdate,k=Xt.needsUpdate,H=Xt.type;Lt(),O.autoReset=w,Xt.enabled=F,Xt.autoUpdate=G,Xt.needsUpdate=k,Xt.type=H}function Zn(w){It("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jn(w){const F=w.target;F.removeEventListener("dispose",Jn),qm(F)}function qm(w){Km(w),V.remove(w)}function Km(w){const F=V.get(w).programs;F!==void 0&&(F.forEach(function(G){dt.releaseProgram(G)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,k,H,Mt){F===null&&(F=Dt);const At=H.isMesh&&H.matrixWorld.determinantAffine()<0,yt=Jm(w,F,G,k,H);M.setMaterial(k,At);let Pt=G.index,Ut=1;if(k.wireframe===!0){if(Pt=q.getWireframeAttribute(G),Pt===void 0)return;Ut=2}const ee=G.drawRange,ae=G.attributes.position;let zt=ee.start*Ut,Me=(ee.start+ee.count)*Ut;Mt!==null&&(zt=Math.max(zt,Mt.start*Ut),Me=Math.min(Me,(Mt.start+Mt.count)*Ut)),Pt!==null?(zt=Math.max(zt,0),Me=Math.min(Me,Pt.count)):ae!=null&&(zt=Math.max(zt,0),Me=Math.min(Me,ae.count));const De=Me-zt;if(De<0||De===1/0)return;St.setup(H,k,yt,G,Pt);let Ie,be=ht;if(Pt!==null&&(Ie=at.get(Pt),be=K,be.setIndex(Ie)),H.isMesh)k.wireframe===!0?(M.setLineWidth(k.wireframeLinewidth*jt()),be.setMode(D.LINES)):be.setMode(D.TRIANGLES);else if(H.isLine){let Ke=k.linewidth;Ke===void 0&&(Ke=1),M.setLineWidth(Ke*jt()),H.isLineSegments?be.setMode(D.LINES):H.isLineLoop?be.setMode(D.LINE_LOOP):be.setMode(D.LINE_STRIP)}else H.isPoints?be.setMode(D.POINTS):H.isSprite&&be.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(le.get("WEBGL_multi_draw"))be.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ke=H._multiDrawStarts,Et=H._multiDrawCounts,Sn=H._multiDrawCount,fe=Pt?at.get(Pt).bytesPerElement:1,In=V.get(k).currentProgram.getUniforms();for(let Qn=0;Qn<Sn;Qn++)In.setValue(D,"_gl_DrawID",Qn),be.render(Ke[Qn]/fe,Et[Qn])}else if(H.isInstancedMesh)be.renderInstances(zt,De,H.count);else if(G.isInstancedBufferGeometry){const Ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,Ke);be.renderInstances(zt,De,Et)}else be.render(zt,De)};function Lu(w,F,G){w.transparent===!0&&w.side===Vn&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,Na(w,F,G),w.side=Mi,w.needsUpdate=!0,Na(w,F,G),w.side=Vn):Na(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),b=ft.get(G),b.init(F),v.push(b),G.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),w!==G&&w.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const k=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const yt=Mt[At];Lu(yt,G,H),k.add(yt)}else Lu(Mt,G,H),k.add(Mt)}),b=v.pop(),k},this.compileAsync=function(w,F,G=null){const k=this.compile(w,F,G);return new Promise(H=>{function Mt(){if(k.forEach(function(At){V.get(At).currentProgram.isReady()&&k.delete(At)}),k.size===0){H(w);return}setTimeout(Mt,10)}le.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let lc=null;function $m(w){lc&&lc(w)}function Du(){Qi.stop()}function Nu(){Qi.start()}const Qi=new bm;Qi.setAnimationLoop($m),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){lc=w,Rt.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},Rt.addEventListener("sessionstart",Du),Rt.addEventListener("sessionend",Nu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(w,F);const G=Rt.enabled===!0&&Rt.isPresenting===!0,k=E!==null&&(J===null||G)&&E.begin(R,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(F),F=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,J),b=ft.get(w,v.length),b.init(F),b.state.textureUnits=Y.getTextureUnits(),v.push(b),vt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(vt,En,F.reversedDepth),et=this.localClippingEnabled,nt=kt.init(this.clippingPlanes,et),T=_t.get(w,A.length),T.init(),A.push(T),Rt.enabled===!0&&Rt.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&cc(At,F,-1/0,R.sortObjects)}cc(w,F,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Bt,$t,F.reversedDepth),Zt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Zt&&te.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&kt.beginShadows();const H=b.state.shadowsArray;if(Xt.render(H,w,F),nt===!0&&kt.endShadows(),(k&&E.hasRenderPass())===!1){const At=T.opaque,yt=T.transmissive;if(b.setupLights(),F.isArrayCamera){const Pt=F.cameras;if(yt.length>0)for(let Ut=0,ee=Pt.length;Ut<ee;Ut++){const ae=Pt[Ut];Fu(At,yt,w,ae)}Zt&&te.render(w);for(let Ut=0,ee=Pt.length;Ut<ee;Ut++){const ae=Pt[Ut];Uu(T,w,ae,ae.viewport)}}else yt.length>0&&Fu(At,yt,w,F),Zt&&te.render(w),Uu(T,w,F)}J!==null&&B===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),k&&E.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),St.resetDefaultState(),it=-1,ut=null,v.pop(),v.length>0?(b=v[v.length-1],Y.setTextureUnits(b.state.textureUnits),nt===!0&&kt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,L!==null&&L.renderEnd()};function cc(w,F,G,k){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){k&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);const At=Z.update(w),yt=w.material;yt.visible&&T.push(w,At,yt,G,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const At=Z.update(w),yt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Gt.copy(At.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(yt)){const Pt=At.groups;for(let Ut=0,ee=Pt.length;Ut<ee;Ut++){const ae=Pt[Ut],zt=yt[ae.materialIndex];zt&&zt.visible&&T.push(w,At,zt,G,Gt.z,ae)}}else yt.visible&&T.push(w,At,yt,G,Gt.z,null)}}const Mt=w.children;for(let At=0,yt=Mt.length;At<yt;At++)cc(Mt[At],F,G,k)}function Uu(w,F,G,k){const{opaque:H,transmissive:Mt,transparent:At}=w;b.setupLightsView(G),nt===!0&&kt.setGlobalState(R.clippingPlanes,G),k&&M.viewport(lt.copy(k)),H.length>0&&Da(H,F,G),Mt.length>0&&Da(Mt,F,G),At.length>0&&Da(At,F,G),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Fu(w,F,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){const zt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Rn(1,1,{generateMipmaps:!0,type:zt?oi:mn,minFilter:ii,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const Mt=b.state.transmissionRenderTarget[k.id],At=k.viewport||lt;Mt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);const yt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(Se),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),Zt&&te.render(G);const ee=R.toneMapping;R.toneMapping=Xn;const ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),nt===!0&&kt.setGlobalState(R.clippingPlanes,k),Da(w,G,k),Y.updateMultisampleRenderTarget(Mt),Y.updateRenderTargetMipmap(Mt),le.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Me=0,De=F.length;Me<De;Me++){const Ie=F[Me],{object:be,geometry:Ke,material:Et,group:Sn}=Ie;if(Et.side===Vn&&be.layers.test(k.layers)){const fe=Et.side;Et.side=tn,Et.needsUpdate=!0,Ou(be,G,k,Ke,Et,Sn),Et.side=fe,Et.needsUpdate=!0,zt=!0}}zt===!0&&(Y.updateMultisampleRenderTarget(Mt),Y.updateRenderTargetMipmap(Mt))}R.setRenderTarget(yt,Pt,Ut),R.setClearColor(Se,de),ae!==void 0&&(k.viewport=ae),R.toneMapping=ee}function Da(w,F,G){const k=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Mt=w.length;H<Mt;H++){const At=w[H],{object:yt,geometry:Pt,group:Ut}=At;let ee=At.material;ee.allowOverride===!0&&k!==null&&(ee=k),yt.layers.test(G.layers)&&Ou(yt,F,G,Pt,ee,Ut)}}function Ou(w,F,G,k,H,Mt){w.onBeforeRender(R,F,G,k,H,Mt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(R,F,G,k,w,Mt),H.transparent===!0&&H.side===Vn&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,R.renderBufferDirect(G,F,k,H,w,Mt),H.side=Mi,H.needsUpdate=!0,R.renderBufferDirect(G,F,k,H,w,Mt),H.side=Vn):R.renderBufferDirect(G,F,k,H,w,Mt),w.onAfterRender(R,F,G,k,H,Mt)}function Na(w,F,G){F.isScene!==!0&&(F=Dt);const k=V.get(w),H=b.state.lights,Mt=b.state.shadowsArray,At=H.state.version,yt=dt.getParameters(w,H.state,Mt,F,G,b.state.lightProbeGridArray),Pt=dt.getProgramCacheKey(yt);let Ut=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=rt.get(w.envMap||k.environment,ee),k.envMapRotation=k.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Jn),Ut=new Map,k.programs=Ut);let ae=Ut.get(Pt);if(ae!==void 0){if(k.currentProgram===ae&&k.lightsStateVersion===At)return zu(w,yt),ae}else yt.uniforms=dt.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,G,yt),w.onBeforeCompile(yt,R),ae=dt.acquireProgram(yt,Pt),Ut.set(Pt,ae),k.uniforms=yt.uniforms;const zt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=kt.uniform),zu(w,yt),k.needsLights=jm(w),k.lightsStateVersion=At,k.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=ae,k.uniformsList=null,ae}function Bu(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Po.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function zu(w,F){const G=V.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Zm(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let G=0,k=w.length;G<k;G++){const H=w[G];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Jm(w,F,G,k,H){F.isScene!==!0&&(F=Dt),Y.resetTextureUnits();const Mt=F.fog,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,yt=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ce.workingColorSpace,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ut=rt.get(k.envMap||At,Pt),ee=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ae=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),zt=!!G.morphAttributes.position,Me=!!G.morphAttributes.normal,De=!!G.morphAttributes.color;let Ie=Xn;k.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ie=R.toneMapping);const be=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ke=be!==void 0?be.length:0,Et=V.get(k),Sn=b.state.lights;if(nt===!0&&(et===!0||w!==ut)){const Ee=w===ut&&k.id===it;kt.setState(k,w,Ee)}let fe=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Sn.state.version||Et.outputColorSpace!==yt||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Ut||k.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==kt.numPlanes||Et.numIntersection!==kt.numIntersection)||Et.vertexAlphas!==ee||Et.vertexTangents!==ae||Et.morphTargets!==zt||Et.morphNormals!==Me||Et.morphColors!==De||Et.toneMapping!==Ie||Et.morphTargetsCount!==Ke||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Et.__version=k.version);let In=Et.currentProgram;fe===!0&&(In=Na(k,F,H),L&&k.isNodeMaterial&&L.onUpdateProgram(k,In,Et));let Qn=!1,Ei=!1,Ls=!1;const we=In.getUniforms(),Ne=Et.uniforms;if(M.useProgram(In.program)&&(Qn=!0,Ei=!0,Ls=!0),k.id!==it&&(it=k.id,Ei=!0),Et.needsLights){const Ee=Zm(b.state.lightProbeGridArray,H);Et.lightProbeGrid!==Ee&&(Et.lightProbeGrid=Ee,Ei=!0)}if(Qn||ut!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),we.setValue(D,"projectionMatrix",w.projectionMatrix),we.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ci=we.map.cameraPosition;Ci!==void 0&&Ci.setValue(D,xt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&we.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,Ei=!0,Ls=!0)}if(Et.needsLights&&(Sn.state.directionalShadowMap.length>0&&we.setValue(D,"directionalShadowMap",Sn.state.directionalShadowMap,Y),Sn.state.spotShadowMap.length>0&&we.setValue(D,"spotShadowMap",Sn.state.spotShadowMap,Y),Sn.state.pointShadowMap.length>0&&we.setValue(D,"pointShadowMap",Sn.state.pointShadowMap,Y)),H.isSkinnedMesh){we.setOptional(D,H,"bindMatrix"),we.setOptional(D,H,"bindMatrixInverse");const Ee=H.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),we.setValue(D,"boneTexture",Ee.boneTexture,Y))}H.isBatchedMesh&&(we.setOptional(D,H,"batchingTexture"),we.setValue(D,"batchingTexture",H._matricesTexture,Y),we.setOptional(D,H,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",H._indirectTexture,Y),we.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",H._colorsTexture,Y));const Ai=G.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&N.update(H,G,In),(Ei||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,we.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Ne.envMapIntensity.value=F.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=Gb()),Ei){if(we.setValue(D,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&Qm(Ne,Ls),Mt&&k.fog===!0&&Nt.refreshFogUniforms(Ne,Mt),Nt.refreshMaterialUniforms(Ne,k,st,ct,b.state.transmissionRenderTarget[w.id]),Et.needsLights&&Et.lightProbeGrid){const Ee=Et.lightProbeGrid;Ne.probesSH.value=Ee.texture,Ne.probesMin.value.copy(Ee.boundingBox.min),Ne.probesMax.value.copy(Ee.boundingBox.max),Ne.probesResolution.value.copy(Ee.resolution)}Po.upload(D,Bu(Et),Ne,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Po.upload(D,Bu(Et),Ne,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&we.setValue(D,"center",H.center),we.setValue(D,"modelViewMatrix",H.modelViewMatrix),we.setValue(D,"normalMatrix",H.normalMatrix),we.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const Ee=k.uniformsGroups;for(let Ci=0,Ds=Ee.length;Ci<Ds;Ci++){const ku=Ee[Ci];tt.update(ku,In),tt.bind(ku,In)}}return In}function Qm(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function jm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,F,G){const k=V.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=F,V.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const G=V.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){J=w,X=F,B=G;let k=null,H=!1,Mt=!1;if(w){const yt=V.get(w);if(yt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,yt.__webglFramebuffer),lt.copy(w.viewport),wt.copy(w.scissor),re=w.scissorTest,M.viewport(lt),M.scissor(wt),M.setScissorTest(re),it=-1;return}else if(yt.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(yt.__hasExternalTextures)Y.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ee=w.depthTexture;if(yt.__boundDepthTexture!==ee){if(ee!==null&&V.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Mt=!0);const Ut=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?k=Ut[F][G]:k=Ut[F],H=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?k=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[G]:k=Ut,lt.copy(w.viewport),wt.copy(w.scissor),re=w.scissorTest}else lt.copy(Vt).multiplyScalar(st).floor(),wt.copy(ge).multiplyScalar(st).floor(),re=Jt;if(G!==0&&(k=z),M.bindFramebuffer(D.FRAMEBUFFER,k)&&M.drawBuffers(w,k),M.viewport(lt),M.scissor(wt),M.setScissorTest(re),H){const yt=V.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,G)}else if(Mt){const yt=F;for(let Pt=0;Pt<w.textures.length;Pt++){const Ut=V.get(w.textures[Pt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,G,yt)}}else if(w!==null&&G!==0){const yt=V.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,G)}it=-1},this.readRenderTargetPixels=function(w,F,G,k,H,Mt,At,yt=0){if(!(w&&w.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){M.bindFramebuffer(D.FRAMEBUFFER,Pt);try{const Ut=w.textures[yt],ee=Ut.format,ae=Ut.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),!C.textureFormatReadable(ee)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ae)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-k&&G>=0&&G<=w.height-H&&D.readPixels(F,G,k,H,pt.convert(ee),pt.convert(ae),Mt)}finally{const Ut=J!==null?V.get(J).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,k,H,Mt,At,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(F>=0&&F<=w.width-k&&G>=0&&G<=w.height-H){M.bindFramebuffer(D.FRAMEBUFFER,Pt);const Ut=w.textures[yt],ee=Ut.format,ae=Ut.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),!C.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.bufferData(D.PIXEL_PACK_BUFFER,Mt.byteLength,D.STREAM_READ),D.readPixels(F,G,k,H,pt.convert(ee),pt.convert(ae),0);const Me=J!==null?V.get(J).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Me);const De=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Z0(D,De,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Mt),D.deleteBuffer(zt),D.deleteSync(De),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,G=0){const k=Math.pow(2,-G),H=Math.floor(w.image.width*k),Mt=Math.floor(w.image.height*k),At=F!==null?F.x:0,yt=F!==null?F.y:0;Y.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,At,yt,H,Mt),M.unbindTexture()},this.copyTextureToTexture=function(w,F,G=null,k=null,H=0,Mt=0){let At,yt,Pt,Ut,ee,ae,zt,Me,De;const Ie=w.isCompressedTexture?w.mipmaps[Mt]:w.image;if(G!==null)At=G.max.x-G.min.x,yt=G.max.y-G.min.y,Pt=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,ee=G.min.y,ae=G.isBox3?G.min.z:0;else{const Ne=Math.pow(2,-H);At=Math.floor(Ie.width*Ne),yt=Math.floor(Ie.height*Ne),w.isDataArrayTexture?Pt=Ie.depth:w.isData3DTexture?Pt=Math.floor(Ie.depth*Ne):Pt=1,Ut=0,ee=0,ae=0}k!==null?(zt=k.x,Me=k.y,De=k.z):(zt=0,Me=0,De=0);const be=pt.convert(F.format),Ke=pt.convert(F.type);let Et;F.isData3DTexture?(Y.setTexture3D(F,0),Et=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),Et=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),Et=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=M.getParameter(D.UNPACK_ROW_LENGTH),fe=M.getParameter(D.UNPACK_IMAGE_HEIGHT),In=M.getParameter(D.UNPACK_SKIP_PIXELS),Qn=M.getParameter(D.UNPACK_SKIP_ROWS),Ei=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Ie.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ie.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),M.pixelStorei(D.UNPACK_SKIP_ROWS,ee),M.pixelStorei(D.UNPACK_SKIP_IMAGES,ae);const Ls=w.isDataArrayTexture||w.isData3DTexture,we=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ne=V.get(w),Ai=V.get(F),Ee=V.get(Ne.__renderTarget),Ci=V.get(Ai.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,Ee.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ds=0;Ds<Pt;Ds++)Ls&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(w).__webglTexture,H,ae+Ds),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(F).__webglTexture,Mt,De+Ds)),D.blitFramebuffer(Ut,ee,At,yt,zt,Me,At,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||V.has(w)){const Ne=V.get(w),Ai=V.get(F);M.bindFramebuffer(D.READ_FRAMEBUFFER,W),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,U);for(let Ee=0;Ee<Pt;Ee++)Ls?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,H,ae+Ee):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,H),we?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ai.__webglTexture,Mt,De+Ee):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ai.__webglTexture,Mt),H!==0?D.blitFramebuffer(Ut,ee,At,yt,zt,Me,At,yt,D.COLOR_BUFFER_BIT,D.NEAREST):we?D.copyTexSubImage3D(Et,Mt,zt,Me,De+Ee,Ut,ee,At,yt):D.copyTexSubImage2D(Et,Mt,zt,Me,Ut,ee,At,yt);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else we?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Et,Mt,zt,Me,De,At,yt,Pt,be,Ke,Ie.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,Mt,zt,Me,De,At,yt,Pt,be,Ie.data):D.texSubImage3D(Et,Mt,zt,Me,De,At,yt,Pt,be,Ke,Ie):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Mt,zt,Me,At,yt,be,Ke,Ie.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Mt,zt,Me,Ie.width,Ie.height,be,Ie.data):D.texSubImage2D(D.TEXTURE_2D,Mt,zt,Me,At,yt,be,Ke,Ie);M.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),M.pixelStorei(D.UNPACK_SKIP_PIXELS,In),M.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),M.pixelStorei(D.UNPACK_SKIP_IMAGES,Ei),Mt===0&&F.generateMipmaps&&D.generateMipmap(Et),M.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){X=0,B=0,J=null,M.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const Wb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Al,AddEquation:Bi,AddOperation:cp,AdditiveAnimationBlendMode:Yh,AdditiveBlending:Lo,AgXToneMapping:Oh,AlphaFormat:Wh,AlwaysCompare:Mp,AlwaysDepth:Fo,AlwaysStencilFunc:mh,AmbientLight:cm,AnimationAction:vm,AnimationClip:va,AnimationLoader:Vx,AnimationMixer:__,AnimationObjectGroup:g_,AnimationUtils:Bx,ArcCurve:Fp,ArrayCamera:mm,ArrowHelper:V_,AttachedBindMode:fh,Audio:xm,AudioAnalyser:a_,AudioContext:Mu,AudioListener:i_,AudioLoader:jx,AxesHelper:G_,BackSide:tn,BasicDepthPacking:pp,BasicShadowMap:i0,BatchedMesh:Ip,BezierInterpolant:sm,Bone:Qh,BooleanKeyframeTrack:Ps,Box2:Mm,Box3:en,Box3Helper:k_,BoxGeometry:An,BoxHelper:z_,BufferAttribute:ue,BufferGeometry:qt,BufferGeometryLoader:fm,ByteType:kh,Cache:si,Camera:ec,CameraHelper:B_,CanvasTexture:As,CapsuleGeometry:Hi,CatmullRomCurve3:iu,CineonToneMapping:Uh,CircleGeometry:Cs,ClampToEdgeWrapping:xn,Clock:w_,Color:mt,ColorKeyframeTrack:pu,ColorManagement:ce,Compatibility:X0,CompressedArrayTexture:nx,CompressedCubeTexture:ix,CompressedTexture:Xl,CompressedTextureLoader:Gx,ConeGeometry:Rs,ConstantAlphaFactor:ap,ConstantColorFactor:sp,Controls:X_,CubeCamera:pm,CubeDepthTexture:Np,CubeReflectionMapping:ai,CubeRefractionMapping:Xi,CubeTexture:Aa,CubeTextureLoader:Wx,CubeUVReflectionMapping:_r,CubicBezierCurve:su,CubicBezierCurve3:Op,CubicInterpolant:nm,CullFaceBack:hh,CullFaceFront:Vf,CullFaceFrontBack:n0,CullFaceNone:Hf,Curve:$n,CurvePath:zp,CustomBlending:Wf,CustomToneMapping:Fh,CylinderGeometry:Gn,Cylindrical:E_,Data3DTexture:zl,DataArrayTexture:Bl,DataTexture:Nn,DataTextureLoader:Xx,DataUtils:Cg,DecrementStencilOp:S0,DecrementWrapStencilOp:w0,DefaultLoadingManager:am,DepthFormat:li,DepthStencilFormat:zi,DepthTexture:ws,DetachedBindMode:hp,DirectionalLight:vu,DirectionalLightHelper:O_,DiscreteInterpolant:im,DodecahedronGeometry:Yl,DoubleSide:Vn,DstAlphaFactor:jf,DstColorFactor:ep,DynamicCopyUsage:z0,DynamicDrawUsage:D0,DynamicReadUsage:F0,EdgesGeometry:Up,EllipseCurve:ql,EqualCompare:_p,EqualDepth:Bo,EqualStencilFunc:C0,EquirectangularReflectionMapping:qr,EquirectangularRefractionMapping:Kr,Euler:Yn,EventDispatcher:Kn,ExternalTexture:eu,ExtrudeGeometry:fr,FileLoader:bi,Float16BufferAttribute:Ug,Float32BufferAttribute:Tt,FloatType:ln,Fog:Ea,FogExp2:Hl,FramebufferTexture:ex,FrontSide:Mi,Frustum:bs,FrustumArray:Wl,GLBufferAttribute:b_,GLSL1:H0,GLSL3:gh,GreaterCompare:vp,GreaterDepth:ko,GreaterEqualCompare:Ol,GreaterEqualDepth:zo,GreaterEqualStencilFunc:L0,GreaterStencilFunc:P0,GridHelper:U_,Group:on,HTMLTexture:sx,HalfFloatType:oi,HemisphereLight:xu,HemisphereLightHelper:N_,IcosahedronGeometry:Kl,ImageBitmapLoader:Qx,ImageLoader:ya,ImageUtils:Tp,IncrementStencilOp:M0,IncrementWrapStencilOp:b0,InstancedBufferAttribute:ur,InstancedBufferGeometry:dm,InstancedInterleavedBuffer:S_,InstancedMesh:Pp,Int16BufferAttribute:Dg,Int32BufferAttribute:Ng,Int8BufferAttribute:Pg,IntType:Rl,InterleavedBuffer:Vl,InterleavedBufferAttribute:Ss,Interpolant:Mr,InterpolateBezier:ph,InterpolateDiscrete:oa,InterpolateLinear:_l,InterpolateSmooth:Co,InterpolationSamplingMode:W0,InterpolationSamplingType:G0,InvertStencilOp:T0,KeepStencilOp:ds,KeyframeTrack:On,LOD:Cp,LatheGeometry:$l,Layers:kl,LessCompare:xp,LessDepth:Oo,LessEqualCompare:Fl,LessEqualDepth:ys,LessEqualStencilFunc:R0,LessStencilFunc:A0,Light:Ji,LightProbe:um,Line:ci,Line3:R_,LineBasicMaterial:qe,LineCurve:ru,LineCurve3:Bp,LineDashedMaterial:jp,LineLoop:Lp,LineSegments:hi,LinearFilter:Ae,LinearInterpolant:fu,LinearMipMapLinearFilter:l0,LinearMipMapNearestFilter:o0,LinearMipmapLinearFilter:ii,LinearMipmapNearestFilter:$r,LinearSRGBColorSpace:ca,LinearToneMapping:Dh,LinearTransfer:ha,Loader:Mn,LoaderUtils:Mh,LoadingManager:gu,LoopOnce:up,LoopPingPong:fp,LoopRepeat:dp,MOUSE:t0,Material:Ye,MaterialBlending:s0,MaterialLoader:nc,MathUtils:pg,Matrix2:Tu,Matrix3:Qt,Matrix4:Kt,MaxEquation:Kf,Mesh:Ht,MeshBasicMaterial:je,MeshDepthMaterial:uu,MeshDistanceMaterial:du,MeshLambertMaterial:Be,MeshMatcapMaterial:Qp,MeshNormalMaterial:Jp,MeshPhongMaterial:$p,MeshPhysicalMaterial:Kp,MeshStandardMaterial:hu,MeshToonMaterial:Zp,MinEquation:qf,MirroredRepeatWrapping:sa,MixOperation:lp,MultiplyBlending:dh,MultiplyOperation:wa,NearestFilter:Fe,NearestMipMapLinearFilter:a0,NearestMipMapNearestFilter:r0,NearestMipmapLinearFilter:ir,NearestMipmapNearestFilter:zh,NeutralToneMapping:Bh,NeverCompare:gp,NeverDepth:Uo,NeverStencilFunc:E0,NoBlending:ri,NoColorSpace:_i,NoNormalPacking:g0,NoToneMapping:Xn,NormalAnimationBlendMode:Ul,NormalBlending:_s,NormalGAPacking:_0,NormalRGPacking:x0,NotEqualCompare:yp,NotEqualDepth:Ho,NotEqualStencilFunc:I0,NumberKeyframeTrack:jl,Object3D:me,ObjectLoader:Zx,ObjectSpaceNormalMap:mp,OctahedronGeometry:Ca,OneFactor:Zf,OneMinusConstantAlphaFactor:op,OneMinusConstantColorFactor:rp,OneMinusDstAlphaFactor:tp,OneMinusDstColorFactor:np,OneMinusSrcAlphaFactor:No,OneMinusSrcColorFactor:Qf,OrthographicCamera:Ia,PCFShadowMap:Yr,PCFSoftShadowMap:Gf,PMREMGenerator:wh,Path:ma,PerspectiveCamera:Ge,Plane:xi,PlaneGeometry:Zi,PlaneHelper:H_,PointLight:lm,PointLightHelper:L_,Points:tu,PointsMaterial:jh,PolarGridHelper:F_,PolyhedronGeometry:$i,PositionalAudio:r_,PropertyBinding:pe,PropertyMixer:_m,QuadraticBezierCurve:au,QuadraticBezierCurve3:ou,Quaternion:hn,QuaternionKeyframeTrack:tc,QuaternionLinearInterpolant:rm,R11_EAC_Format:$o,RED_GREEN_RGTC2_Format:aa,RED_RGTC1_Format:ml,REVISION:El,RG11_EAC_Format:ra,RGBADepthPacking:f0,RGBAFormat:cn,RGBAIntegerFormat:Nl,RGBA_ASTC_10x10_Format:cl,RGBA_ASTC_10x5_Format:al,RGBA_ASTC_10x6_Format:ol,RGBA_ASTC_10x8_Format:ll,RGBA_ASTC_12x10_Format:hl,RGBA_ASTC_12x12_Format:ul,RGBA_ASTC_4x4_Format:Qo,RGBA_ASTC_5x4_Format:jo,RGBA_ASTC_5x5_Format:tl,RGBA_ASTC_6x5_Format:el,RGBA_ASTC_6x6_Format:nl,RGBA_ASTC_8x5_Format:il,RGBA_ASTC_8x6_Format:sl,RGBA_ASTC_8x8_Format:rl,RGBA_BPTC_Format:dl,RGBA_ETC2_EAC_Format:Ko,RGBA_PVRTC_2BPPV1_Format:Xo,RGBA_PVRTC_4BPPV1_Format:Wo,RGBA_S3TC_DXT1_Format:Jr,RGBA_S3TC_DXT3_Format:Qr,RGBA_S3TC_DXT5_Format:jr,RGBDepthPacking:p0,RGBFormat:Xh,RGBIntegerFormat:c0,RGB_BPTC_SIGNED_Format:fl,RGB_BPTC_UNSIGNED_Format:pl,RGB_ETC1_Format:Yo,RGB_ETC2_Format:qo,RGB_PVRTC_2BPPV1_Format:Go,RGB_PVRTC_4BPPV1_Format:Vo,RGB_S3TC_DXT1_Format:Zr,RGDepthPacking:m0,RGFormat:qi,RGIntegerFormat:Dl,RawShaderMaterial:cu,Ray:vr,Raycaster:ym,RectAreaLight:hm,RedFormat:Ll,RedIntegerFormat:Ta,ReinhardToneMapping:Nh,RenderTarget:Kh,RenderTarget3D:v_,RepeatWrapping:Yi,ReplaceStencilOp:y0,ReverseSubtractEquation:Yf,RingGeometry:Vi,SIGNED_R11_EAC_Format:Zo,SIGNED_RED_GREEN_RGTC2_Format:xl,SIGNED_RED_RGTC1_Format:gl,SIGNED_RG11_EAC_Format:Jo,SRGBColorSpace:rn,SRGBTransfer:xe,Scene:$h,ShaderChunk:ie,ShaderLib:Hn,ShaderMaterial:Pn,ShadowMaterial:Xp,Shape:yr,ShapeGeometry:Zl,ShapePath:W_,ShapeUtils:Wn,ShortType:Hh,Skeleton:Gl,SkeletonHelper:I_,SkinnedMesh:Rp,Source:ki,Sphere:Xe,SphereGeometry:Dn,Spherical:T_,SphericalHarmonics3:yu,SplineCurve:lu,SpotLight:om,SpotLightHelper:P_,Sprite:vl,SpriteMaterial:pa,SrcAlphaFactor:Do,SrcAlphaSaturateFactor:ip,SrcColorFactor:Jf,StaticCopyUsage:B0,StaticDrawUsage:ua,StaticReadUsage:U0,StereoCamera:t_,StreamCopyUsage:k0,StreamDrawUsage:N0,StreamReadUsage:O0,StringKeyframeTrack:Is,SubtractEquation:Xf,SubtractiveBlending:uh,TOUCH:e0,TangentSpaceNormalMap:Si,TetrahedronGeometry:Jl,Texture:Re,TextureLoader:Yx,TextureUtils:Z_,Timer:gm,TimestampQuery:V0,TorusGeometry:Ra,TorusKnotGeometry:Ql,Triangle:gn,TriangleFanDrawMode:d0,TriangleStripDrawMode:u0,TrianglesDrawMode:h0,TubeGeometry:Pa,UVMapping:Cl,Uint16BufferAttribute:Zh,Uint32BufferAttribute:Jh,Uint8BufferAttribute:Ig,Uint8ClampedBufferAttribute:Lg,Uniform:wu,UniformsGroup:M_,UniformsLib:gt,UniformsUtils:qp,UnsignedByteType:mn,UnsignedInt101111Type:Gh,UnsignedInt248Type:cr,UnsignedInt5999Type:Vh,UnsignedIntType:Un,UnsignedShort4444Type:Pl,UnsignedShort5551Type:Il,UnsignedShortType:lr,VSMShadowMap:nr,Vector2:Q,Vector3:P,Vector4:ve,VectorKeyframeTrack:mu,VideoFrameTexture:tx,VideoTexture:Dp,WebGL3DRenderTarget:vg,WebGLArrayRenderTarget:_g,WebGLCoordinateSystem:En,WebGLCubeRenderTarget:Eu,WebGLRenderTarget:Rn,WebGLRenderer:Im,WebGLUtils:Rm,WebGPUCoordinateSystem:Ms,WebXRController:Ro,WireframeGeometry:Wp,WrapAroundEnding:la,ZeroCurvatureEnding:ps,ZeroFactor:$f,ZeroSlopeEnding:ms,ZeroStencilOp:v0,createCanvasElement:bp,error:It,getConsoleFunction:$0,log:fa,setConsoleFunction:K0,warn:ot,warnOnce:Wi},Symbol.toStringTag,{value:"Module"}));class Xb{ctx=null;master=null;sfxGain=null;musicGain=null;sfxMuted=!1;musicMuted=!1;unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.8,this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.18,this.musicGain.connect(this.master),this.startAmbience())}tone(t,e,n={}){if(!this.ctx||!this.sfxGain||this.sfxMuted)return;const i=this.ctx.currentTime+(n.delay??0),r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n.type??"sine",r.frequency.setValueAtTime(t,i),n.slide&&r.frequency.exponentialRampToValueAtTime(Math.max(20,t+n.slide),i+e),a.gain.setValueAtTime(n.vol??.3,i),a.gain.exponentialRampToValueAtTime(.001,i+e),r.connect(a),a.connect(this.sfxGain),r.start(i),r.stop(i+e+.02)}noise(t,e,n){if(!this.ctx||!this.sfxGain||this.sfxMuted)return;const i=this.ctx.currentTime,r=Math.floor(this.ctx.sampleRate*t),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let d=0;d<r;d++)o[d]=(Math.random()*2-1)*(1-d/r);const l=this.ctx.createBufferSource();l.buffer=a;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=n;const h=this.ctx.createGain();h.gain.value=e,l.connect(c),c.connect(h),h.connect(this.sfxGain),l.start(i)}paddleHit(t){this.noise(.06,t?.5:.3,t?900:1400),this.tone(t?180:240,.07,{type:"triangle",vol:t?.4:.25,slide:-60})}bounce(){this.tone(140,.08,{type:"sine",vol:.22,slide:-50})}netHit(){this.noise(.15,.35,500),this.tone(90,.18,{type:"triangle",vol:.3,slide:-30})}perfect(){this.tone(880,.1,{type:"sine",vol:.25}),this.tone(1318,.14,{type:"sine",vol:.22,delay:.06})}pointWin(){this.tone(523,.12,{type:"triangle",vol:.3}),this.tone(659,.12,{type:"triangle",vol:.3,delay:.1}),this.tone(784,.2,{type:"triangle",vol:.3,delay:.2})}pointLose(){this.tone(330,.15,{type:"triangle",vol:.25}),this.tone(247,.25,{type:"triangle",vol:.25,delay:.12})}sideOut(){this.tone(392,.1,{type:"square",vol:.12}),this.tone(523,.12,{type:"square",vol:.12,delay:.09})}gameWin(){[523,659,784,1047].forEach((e,n)=>this.tone(e,.18,{type:"triangle",vol:.3,delay:n*.12}))}levelUp(){[659,784,988,1319].forEach((e,n)=>this.tone(e,.15,{type:"sine",vol:.28,delay:n*.09}))}crowdOoh(){this.noise(.5,.12,350)}whoosh(){this.noise(.12,.15,2200)}startAmbience(){if(!this.ctx||!this.musicGain)return;const t=[261.6,329.6,392];for(const e of t){const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=e;const i=this.ctx.createGain();i.gain.value=.05;const r=this.ctx.createOscillator();r.frequency.value=.07+Math.random()*.06;const a=this.ctx.createGain();a.gain.value=.03,r.connect(a),a.connect(i.gain),n.connect(i),i.connect(this.musicGain),n.start(),r.start()}}toggleMusic(){return this.musicMuted=!this.musicMuted,this.musicGain&&(this.musicGain.gain.value=this.musicMuted?0:.18),this.musicMuted}toggleSfx(){return this.sfxMuted=!this.sfxMuted,this.sfxMuted}}const We=new Xb,Ot={DT:1/120,GRAVITY:9.81,DRAG_K:.044,MAGNUS_K:8e-4,BALL_RADIUS:.037,BOUNCE_COR:.42,BOUNCE_FRICTION_KEEP:.72,BOUNCE_SPIN_KICK:.18,BOUNCE_SIDE_KICK:.1,BOUNCE_SPIN_KEEP:.55,ROLL_VY_THRESHOLD:.6,ROLL_DECEL:3,DEAD_SPEED:.3},Fi={CORD_BAND:.05,CORD_KEEP_MIN:.15,CORD_KEEP_MAX:.45,CORD_DEFLECT_H:.21,CORD_DEFLECT_V:.35,BODY_KEEP:.12},pn={serve:{speedMin:11,speedMax:16,apexMin:1.8,apexMax:2.6,spinMin:0,spinMax:120},drive:{speedMin:15,speedMax:22,apexMin:1.15,apexMax:1.6,spinMin:80,spinMax:200},dink:{speedMin:4,speedMax:7,apexMin:1.2,apexMax:1.5,spinMin:-40,spinMax:-20},drop:{speedMin:7,speedMax:9,apexMin:2.4,apexMax:3,spinMin:-60,spinMax:-30},lob:{speedMin:12,speedMax:14,apexMin:4.2,apexMax:4.8,spinMin:-50,spinMax:-30},smash:{speedMin:24,speedMax:30,apexMin:0,apexMax:0,spinMin:100,spinMax:150},reset:{speedMin:6,speedMax:8,apexMin:1.6,apexMax:2,spinMin:-20,spinMax:0}},ze={SPEED:4.1,ACCEL:10,DECEL:12,START_DELAY:.15,LUNGE_REACH:1.3,LUNGE_RECOVERY:1.5,STRIKE_RADIUS:1.1,STRIKE_Y_MIN:.1,STRIKE_Y_MAX:2.4,BASELINE_READY_Z:6.2,MID_READY_Z:4.5,KITCHEN_READY_Z:2.35,MAX_LATERAL_SHADE:.8},ni={PERFECT:.04,GOOD:.1,OK:.19,SHANK:.3,NOISE_PERFECT:0,NOISE_GOOD:.25,NOISE_OK:.6,NOISE_SHANK:1.5},Wr={POINTS_TO_WIN:11,WIN_BY:2,BEST_OF:3},Ah={POINT_DOWNTIME:1.2,SIM_SPEED:.85};function Yb(s){return Math.min(Math.max((s-2)/5,0),1)}function Oi(s,t,e){return s+(t-s)*e}function Lm(s){const t=Yb(s);return{dupr:s,reactionDelay:Oi(.52,.08,t),moveSpeed:Oi(2.5,4.2,t),aimSigma:Oi(1.15,.2,t),errorRate:Oi(.32,.02,Math.sqrt(t)),shotIQ:Oi(.25,.97,t),aggression:Oi(.25,.92,t),thirdShotDrop:s<3.5?.05:Oi(.35,.85,(s-3.5)/3.5),anticipation:s<4.5?0:Oi(.3,.9,(s-4.5)/2.5)}}const La=[{name:"Pat",dupr:2.4,tierName:"Newbie",color:9358054,blurb:"Just bought a paddle last week."},{name:"Morgan",dupr:3,tierName:"Beginner",color:7653021,blurb:"Knows the rules. Mostly."},{name:"Riley",dupr:3.7,tierName:"Intermediate",color:16044894,blurb:"League night regular."},{name:"Jordan",dupr:4.5,tierName:"Advanced",color:15625293,blurb:"Tournament medalist."},{name:"Alex",dupr:5.5,tierName:"Expert",color:11868062,blurb:"Sponsored. Terrifying."},{name:"Kai",dupr:6.5,tierName:"Pro",color:15087942,blurb:"Touring professional. Good luck."}];class qb{handlers=new Map;on(t,e){let n=this.handlers.get(t);return n||(n=new Set,this.handlers.set(t,n)),n.add(e),()=>n.delete(e)}emit(t,e){const n=this.handlers.get(t);if(n)for(const i of n)i(e)}clear(){this.handlers.clear()}}const se=new qb,yf=.03,Kb=.34,$b=.45;class Zb{pointer=null;el;onGesture=null;onPressStart=null;onDragUpdate=null;onDragEnd=null;constructor(t){this.el=t,t.addEventListener("pointerdown",this.onDown,{passive:!1}),window.addEventListener("pointermove",this.onMove,{passive:!1}),window.addEventListener("pointerup",this.onUp,{passive:!1}),window.addEventListener("pointercancel",this.onCancel,{passive:!1}),window.addEventListener("blur",this.onBlur),window.addEventListener("contextmenu",this.onContextMenu)}dispose(){this.el.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onCancel),window.removeEventListener("blur",this.onBlur),window.removeEventListener("contextmenu",this.onContextMenu)}onBlur=()=>{this.pointer&&this.commit(performance.now())};onContextMenu=t=>{t.preventDefault()};onDown=t=>{if(t.target?.closest?.("button")||t.pointerType==="touch"&&t.clientX<window.innerWidth*$b)return;if(t.button===2){t.preventDefault();const n=performance.now()/1e3;this.onGesture?.({aimX:0,power:.9,flick:.2,curve:0,arc:1,slice:0,isLob:!0,isBlock:!1,isTap:!1,pressTime:n,endTime:n,screenX:t.clientX,screenY:t.clientY});return}if(this.pointer&&t.pointerId!==this.pointer.id&&(this.pointer=null),this.pointer)return;t.preventDefault();try{this.el.setPointerCapture(t.pointerId)}catch{}const e=performance.now();this.pointer={id:t.pointerId,startX:t.clientX,startY:t.clientY,startTime:e,lastX:t.clientX,lastY:t.clientY,peakSpeed:0,prevX:t.clientX,prevY:t.clientY,prevTime:e,path:[{x:t.clientX,y:t.clientY}]},this.onPressStart?.()};onMove=t=>{const e=this.pointer;if(!e||t.pointerId!==e.id)return;t.preventDefault();const n=performance.now(),i=n-e.prevTime;if(i>4){const a=Math.hypot(t.clientX-e.prevX,t.clientY-e.prevY);e.peakSpeed=Math.max(e.peakSpeed,a/i),e.prevX=t.clientX,e.prevY=t.clientY,e.prevTime=n}e.lastX=t.clientX,e.lastY=t.clientY;const r=e.path[e.path.length-1];Math.hypot(t.clientX-r.x,t.clientY-r.y)>=6&&(e.path.push({x:t.clientX,y:t.clientY}),e.path.length>96&&e.path.shift()),this.onDragUpdate?.(this.measure(e,n))};onUp=t=>{const e=this.pointer;!e||t.pointerId!==e.id||(t.preventDefault(),e.lastX=t.clientX,e.lastY=t.clientY,this.commit(performance.now()))};onCancel=t=>{this.pointer&&t.pointerId===this.pointer.id&&(this.pointer=null,this.onDragEnd?.())};analyzePath(t){const e=t.path;let n=0,i=0,r=null;for(let c=1;c<e.length;c++){const h=e[c].x-e[c-1].x,d=e[c].y-e[c-1].y,u=Math.hypot(h,d);if(u<2)continue;n+=u;const f=Math.atan2(d,h);if(r!==null){let p=f-r;for(;p>Math.PI;)p-=2*Math.PI;for(;p<-Math.PI;)p+=2*Math.PI;i+=p}r=f}let a=0,o=0;if(e.length>=3){const c=Math.min(e[0].y,e[e.length-1].y),h=Math.max(e[0].y,e[e.length-1].y);let d=1/0,u=-1/0;for(const p of e)d=Math.min(d,p.y),u=Math.max(u,p.y);const f=Math.max(window.innerHeight,1);a=Math.max(0,Math.min(1,(c-d)/f/.22)),o=Math.max(0,Math.min(1,(u-h)/f/.14))}let l=0;if(e.length>=3&&n>30){const c=e[0],h=e[e.length-1],d=h.x-c.x,u=h.y-c.y,f=Math.hypot(d,u);if(f>20){let p=0,x=0;for(let g=1;g<e.length-1;g++){const m=e[g],S=(d*(m.y-c.y)-u*(m.x-c.x))/f;Math.abs(S)>p&&(p=Math.abs(S),x=S)}l=Math.max(-1,Math.min(1,x/(f*.3)))}}return{turn:i,pathLen:n,curve:l,arc:a,slice:o}}measure(t,e){const n=Math.max(window.innerHeight,1),i=t.lastX-t.startX,r=t.startY-t.lastY,a=Math.hypot(i,r)/n,{turn:o,pathLen:l,curve:c,arc:h,slice:d}=this.analyzePath(t),u=a<yf&&l<n*yf*1.5,f=Math.min(1,t.peakSpeed/1.8),p=Math.abs(i),x=Math.hypot(t.lastX-t.startX,t.lastY-t.startY),g=!u&&Math.abs(o)>4.5&&l>90&&x<l*.5,m=!u&&!g&&r>p*2.5&&a>.2&&f<.55,y=g||m,S=!u&&!y&&r<0&&-r>p*1.2&&a>.04,_=S&&f<.5,T=S&&f>=.5?Math.min(1,f):0,b=!u&&!y&&!S&&p>Math.abs(r)*1.6&&a>.05;let A=0,v=0,E=0,R=d;if(y)A=g?0:Math.max(-1,Math.min(1,i/(n*.25))),v=.9,E=g?Math.max(-1,Math.min(1,o/7)):c;else if(_)A=Math.max(-1,Math.min(1,i/(n*.2))),v=Math.min(.3,a*.8),E=0;else if(S)A=Math.max(-1,Math.min(1,i/(n*.2))),v=Math.min(.75,.35+f*.4),R=Math.max(R,T),E=0;else if(b)A=Math.sign(i)*.3,v=Math.min(.85,.3+f*.5),E=Math.sign(i)*Math.min(1,p/(n*.2));else if(!u){const I=Math.atan2(i,Math.max(r,1));A=Math.max(-1,Math.min(1,I/(Math.PI/4)));const L=Math.min(1,a/Kb);v=Math.min(1,.62*f+.45*L),E=c}return{aimX:A,power:v,flick:f,curve:E,arc:h,slice:R,isLob:y,isBlock:_,isTap:u,pressTime:t.startTime/1e3,endTime:e/1e3,screenX:t.lastX,screenY:t.lastY}}commit(t){const e=this.pointer;e&&(this.pointer=null,this.onDragEnd?.(),this.onGesture?.(this.measure(e,t)))}}class Jb{held=new Set;spaceDownAt=0;onGesture=null;moveVector(){let t=0,e=0;(this.held.has("ArrowLeft")||this.held.has("a"))&&(t-=1),(this.held.has("ArrowRight")||this.held.has("d"))&&(t+=1),(this.held.has("ArrowUp")||this.held.has("w"))&&(e-=1),(this.held.has("ArrowDown")||this.held.has("s"))&&(e+=1);const n=Math.hypot(t,e);return n>1?{x:t/n,z:e/n}:{x:t,z:e}}keydown=t=>{if(t.repeat)return;const e=t.key.length===1?t.key.toLowerCase():t.key;this.held.add(e),e===" "?(this.spaceDownAt=performance.now(),t.preventDefault()):e==="l"?this.emit({power:.9,isLob:!0},performance.now()):e==="b"?this.emit({power:.15,isBlock:!0},performance.now()):e.startsWith("Arrow")&&t.preventDefault()};keyup=t=>{const e=t.key.length===1?t.key.toLowerCase():t.key;if(this.held.delete(e),e===" "){const n=(performance.now()-this.spaceDownAt)/1e3;n<.15?this.emit({isTap:!0},this.spaceDownAt):this.emit({power:Math.min(1,n/.5),flick:Math.min(1,n/.4)},this.spaceDownAt),t.preventDefault()}};emit(t,e){this.onGesture?.({aimX:0,power:0,flick:0,curve:0,arc:0,slice:0,isLob:!1,isBlock:!1,isTap:!1,pressTime:e/1e3,endTime:performance.now()/1e3,screenX:window.innerWidth/2,screenY:window.innerHeight/2,...t})}attach(){window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup)}}class Qb{constructor(t){this.callbacks=t}accumulator=0;lastTime=0;rafId=0;running=!1;freezeTimer=0;fpsSamples=[];fpsSampleTime=0;onFpsSample=null;start(){if(this.running)return;this.running=!0,this.lastTime=performance.now(),this.accumulator=0;const t=e=>{if(!this.running)return;this.rafId=requestAnimationFrame(t);let n=(e-this.lastTime)/1e3;if(this.lastTime=e,n>.25&&(n=.25),this.freezeTimer>0)this.freezeTimer-=n;else for(this.accumulator+=n*Ah.SIM_SPEED;this.accumulator>=Ot.DT;)this.callbacks.simulate(Ot.DT),this.accumulator-=Ot.DT;const i=this.freezeTimer>0?1:this.accumulator/Ot.DT;this.callbacks.render(i,n),this.trackFps(n)};this.rafId=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}freeze(t){this.freezeTimer=Math.max(this.freezeTimer,t)}trackFps(t){if(!(t<=0)&&(this.fpsSamples.push(1/t),this.fpsSampleTime+=t,this.fpsSampleTime>=2&&this.fpsSamples.length>0)){const e=this.fpsSamples.reduce((n,i)=>n+i,0)/this.fpsSamples.length;this.onFpsSample?.(e),this.fpsSamples.length=0,this.fpsSampleTime=0}}}const oe={SKY_TOP:8308963,SUN:16774358,COURT_BLUE:2785217,KITCHEN_GREEN:4171370,COURT_LINE:16777215,COURT_APRON:4890211,GRASS:7326330,GRASS_DARK:5550178,TREE_TRUNK:9067060,TREE_LEAF:5025616,TREE_LEAF_LIGHT:6732650,FENCE:10148840,BLEACHER:15262416,NET_POST:3622735,NET_TAPE:16777215,BALL:16375883,SKIN:16766384,SHORTS:2962486,SHOE:16119285,PADDLE_FACE:46296,TRAIL:16774064,TRAIL_FIRE:16743229,CONFETTI:[16335172,15954476,16369487,9485933,5731728,11868062]},th=14,eh=48;function jb(){const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,64),t.fillStyle="rgba(120,105,20,0.55)";for(let n=0;n<4;n++)for(let i=0;i<8;i++){const r=i*16+(n%2===0?4:12),a=10+n*14;t.beginPath(),t.arc(r,a,2.6,0,Math.PI*2),t.fill()}const e=new As(s);return e.wrapS=Yi,e}class t1{group;mesh;blob;trail;trailPositions;trailHistory=[];trailMat;marker;markerPulse=0;markerShown=!1;aimRing;timingOuter;timingInner;flightLine;flightMat;flightPositions;spinAxis=new P;constructor(t){this.group=new on,this.mesh=new Ht(new Dn(Ot.BALL_RADIUS*1.35,16,12),new Be({color:oe.BALL,map:jb(),emissive:4867094})),this.group.add(this.mesh),this.blob=new Ht(new Cs(.09,16),new je({color:0,transparent:!0,opacity:.3,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.005,this.group.add(this.blob),this.trailPositions=new Float32Array(th*3);const e=new qt;e.setAttribute("position",new ue(this.trailPositions,3)),this.trailMat=new qe({color:oe.TRAIL,transparent:!0,opacity:0}),this.trail=new ci(e,this.trailMat),this.trail.frustumCulled=!1,this.group.add(this.trail),this.marker=new Ht(new Vi(.12,.2,24),new je({color:16777215,transparent:!0,opacity:0,depthWrite:!1})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.01,this.group.add(this.marker),this.aimRing=new Ht(new Vi(.16,.26,24),new je({color:8255999,transparent:!0,opacity:0,depthWrite:!1})),this.aimRing.rotation.x=-Math.PI/2,this.aimRing.position.y=.012,this.group.add(this.aimRing),this.flightPositions=new Float32Array(eh*3);const n=new qt;n.setAttribute("position",new ue(this.flightPositions,3)),this.flightMat=new qe({color:8255999,transparent:!0,opacity:0,blending:Lo,depthWrite:!1}),this.flightLine=new ci(n,this.flightMat),this.flightLine.frustumCulled=!1,this.group.add(this.flightLine),this.timingOuter=new Ht(new Vi(.92,1,32),new je({color:16777215,transparent:!0,opacity:0,depthWrite:!1})),this.timingOuter.rotation.x=-Math.PI/2,this.timingOuter.position.y=.014,this.group.add(this.timingOuter),this.timingInner=new Ht(new Vi(.3,.36,28),new je({color:16765286,transparent:!0,opacity:0,depthWrite:!1})),this.timingInner.rotation.x=-Math.PI/2,this.timingInner.position.y=.013,this.group.add(this.timingInner),t.add(this.group)}showFlightPreview(t){if(t.length<2){this.hideFlightPreview();return}for(let e=0;e<eh;e++){const n=t[Math.min(Math.floor(e/(eh-1)*(t.length-1)),t.length-1)];this.flightPositions[e*3]=n.x,this.flightPositions[e*3+1]=n.y,this.flightPositions[e*3+2]=n.z}this.flightLine.geometry.getAttribute("position").needsUpdate=!0,this.flightMat.opacity=.85}hideFlightPreview(){this.flightMat.opacity=0}showAimPreview(t,e){this.aimRing.position.set(t,.012,e),this.aimRing.material.opacity=.55}hideAimPreview(){this.aimRing.material.opacity=0}setTiming(t){const e=this.timingOuter.material,n=this.timingInner.material;if(!t||t.remaining<-.15||t.remaining>1.6){e.opacity=0,n.opacity=0;return}const i=Math.max(t.remaining,0);this.timingOuter.position.set(t.x,.014,t.z),this.timingInner.position.set(t.x,.013,t.z);const r=.36+Math.min(i,1.2)*2.4*.36;this.timingOuter.scale.setScalar(r/.96);const a=Math.abs(t.remaining);e.color.setHex(a<=.04?16765286:a<=.1?10220141:16777215),e.opacity=.65,n.opacity=.5}update(t,e,n,i){if(this.mesh.position.set(t.x,Math.max(t.y,Ot.BALL_RADIUS),t.z),this.mesh.scale.setScalar(1+Math.max(0,-t.z)*.055),i){const l=Math.hypot(i.x,i.y,i.z);l>5&&(this.spinAxis.set(i.x/l,i.y/l,i.z/l),this.mesh.rotateOnWorldAxis(this.spinAxis,Math.min(l,60)*n*.5))}const r=Math.max(t.y,0),a=1+r*.18,o=Math.max(.06,.32-r*.05);this.blob.position.set(t.x,.005,t.z),this.blob.scale.setScalar(a),this.blob.material.opacity=o,this.trailHistory.push({...t}),this.trailHistory.length>th&&this.trailHistory.shift();for(let l=0;l<th;l++){const c=this.trailHistory[Math.min(l,this.trailHistory.length-1)]??t;this.trailPositions[l*3]=c.x,this.trailPositions[l*3+1]=c.y,this.trailPositions[l*3+2]=c.z}if(this.trail.geometry.getAttribute("position").needsUpdate=!0,this.trailMat.opacity=e>6?Math.min(.7,e/30):0,this.trailMat.color.setHex(e>22?oe.TRAIL_FIRE:oe.TRAIL),this.markerShown){this.markerPulse+=n;const l=this.marker.material;l.opacity=.55+Math.sin(this.markerPulse*6)*.15,this.marker.scale.setScalar(1+Math.sin(this.markerPulse*6)*.08)}}showLandingMarker(t,e,n){this.marker.position.set(t,.01,e),this.marker.material.color.setHex(n?16777215:16733508),this.markerShown=!0,this.markerPulse=0,this.marker.scale.setScalar(1)}hideLandingMarker(){this.markerShown=!1,this.marker.material.opacity=0}clearTrail(){this.trailHistory.length=0,this.trailMat.opacity=0}}const e1={height:5,back:12.8,fov:58,lookY:.5,lookZ:-2.4},Mf={height:3.6,back:10.4,fov:46,lookY:.8,lookZ:-1.2};class n1{camera;params=Mf;followX=0;shakeAmp=0;shakeTime=0;pushIn=0;pushTarget=0;fovOffset=0;fovOffsetTarget=0;constructor(t){this.camera=new Ge(50,t,.1,120),this.setAspect(t),this.snap(0)}setAspect(t){this.params=t<.9?e1:Mf,this.camera.aspect=t,this.camera.updateProjectionMatrix()}snap(t){this.followX=t*.45,this.apply(0)}update(t,e){const n=e*.45,i=1-Math.exp(-4*t);this.followX+=(n-this.followX)*i,this.pushIn+=(this.pushTarget-this.pushIn)*(1-Math.exp(-8*t)),this.pushTarget>0&&(this.pushTarget=Math.max(0,this.pushTarget-t*2.5)),this.fovOffset+=(this.fovOffsetTarget-this.fovOffset)*(1-Math.exp(-5*t)),this.shakeTime>0&&(this.shakeTime-=t,this.shakeTime<=0&&(this.shakeAmp=0)),this.apply(performance.now()/1e3)}apply(t){const e=this.params,n=this.pushIn*.9;let i=this.followX,r=e.height,a=e.back-n;if(this.shakeAmp>0&&this.shakeTime>0){const l=this.shakeTime;i+=Math.sin(t*157)*this.shakeAmp*l,r+=Math.cos(t*173)*this.shakeAmp*l*.7}this.camera.position.set(i,r,a),this.camera.lookAt(this.followX*.55,e.lookY,e.lookZ);const o=e.fov+this.pushIn*3+this.fovOffset;Math.abs(this.camera.fov-o)>.01&&(this.camera.fov=o,this.camera.updateProjectionMatrix())}smashPushIn(){this.pushTarget=1}shake(t,e=.15){this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeTime=Math.max(this.shakeTime,e)}setDinkLens(t){this.fovOffsetTarget=t?-5:0}}class ar{group;torso;head;armR;armL;legR;legL;paddle;anim="idle";animTime=0;swingDuration=.35;runPhase=0;moveSpeed=0;facing;blob;constructor(t,e,n){this.facing=n,this.group=new on;const i=new mt(e),r=i.clone().multiplyScalar(.72),a=new Be({color:i}),o=new Be({color:r}),l=new Be({color:oe.SKIN}),c=new Be({color:oe.SHORTS}),h=new Be({color:oe.SHOE}),d=new Be({color:3356733});this.torso=new Ht(new Hi(.2,.3,4,12),a),this.torso.position.y=.86,this.torso.castShadow=!0,this.group.add(this.torso);const u=new Ht(new Gn(.205,.215,.1,12),o);u.position.y=.66,this.group.add(u);const f=new Ht(new Gn(.19,.17,.22,12),c);f.position.y=.52,this.group.add(f),this.head=new on,this.head.position.y=1.42;const p=new Ht(new Dn(.21,16,12),l);p.castShadow=!0,this.head.add(p);const x=new Ht(new Dn(.215,14,8,0,Math.PI*2,0,Math.PI*.48),a);x.position.y=.045,this.head.add(x);const g=new Ht(new Gn(.19,.21,.035,12,1,!1,-.7,1.4),o);g.position.set(0,.09,.13),g.rotation.x=.12,this.head.add(g);for(const R of[-1,1]){const I=new Ht(new Dn(.028,8,6),d);I.position.set(R*.075,.01,.185),this.head.add(I);const L=new Ht(new An(.06,.016,.01),d);L.position.set(R*.075,.075,.19),this.head.add(L)}const m=new Ht(new An(.07,.018,.01),new Be({color:12017229}));m.position.set(0,-.085,.195),this.head.add(m),this.group.add(this.head);const y=R=>{const I=new on;I.position.set(R*.11,.46,0);const L=new Ht(new Hi(.07,.24,4,8),l);L.position.y=-.19,I.add(L);const z=new Ht(new An(.15,.09,.24),h);return z.position.set(0,-.4,.04),I.add(z),I};this.legR=y(1),this.legL=y(-1),this.group.add(this.legR,this.legL);const S=R=>{const I=new on;I.position.set(R*.26,1.08,0);const L=new Ht(new Hi(.065,.1,4,8),a);L.position.y=-.08,I.add(L);const z=new Ht(new Hi(.055,.2,4,8),l);return z.position.y=-.26,I.add(z),I};this.armR=S(1),this.armL=S(-1),this.group.add(this.armR,this.armL),this.paddle=new on;const _=new Ht(new Gn(.021,.023,.14,8),d);_.position.y=-.42;for(let R=0;R<3;R++){const I=new Ht(new Ra(.0225,.004,5,10),new Be({color:5533306}));I.rotation.x=Math.PI/2,I.position.y=-.37-R*.04,this.paddle.add(I)}const T=new Ht(new Dn(.026,8,6),d);T.position.y=-.49,T.scale.y=.6;const b=(R,I,L)=>{const z=new yr,W=-R/2,U=0;return z.moveTo(W+L,U),z.lineTo(W+R-L,U),z.quadraticCurveTo(W+R,U,W+R,U+L),z.lineTo(W+R,U+I-L*1.6),z.quadraticCurveTo(W+R,U+I,W+R-L*1.6,U+I),z.lineTo(W+L*1.6,U+I),z.quadraticCurveTo(W,U+I,W,U+I-L*1.6),z.lineTo(W,U+L),z.quadraticCurveTo(W,U,W+L,U),z},A=new Ht(new fr(b(.21,.27,.055),{depth:.016,bevelEnabled:!0,bevelSize:.006,bevelThickness:.004,bevelSegments:2}),d);A.position.set(0,-.64,-.012);const v=new Ht(new fr(b(.19,.25,.05),{depth:.02,bevelEnabled:!1}),new Be({color:oe.PADDLE_FACE}));v.position.set(0,-.63,-.01);const E=new Ht(new An(.15,.035,.006),new Be({color:16777215}));E.position.set(0,-.5,.014),this.paddle.add(_,T,A,v,E),this.armR.add(this.paddle),this.blob=new Ht(new Cs(.36,20),new je({color:0,transparent:!0,opacity:.22,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.012,this.group.add(this.blob),this.group.rotation.y=n===1?Math.PI:0,t.add(this.group)}setAnim(t){this.anim!==t&&(this.anim=t,this.animTime=0)}swing(){this.anim="swing",this.animTime=this.swingDuration*.28}static damp(t,e,n,i){return t+(e-t)*(1-Math.exp(-n*i))}update(t,e,n,i){this.group.position.x=e.x,this.group.position.z=e.z,this.moveSpeed=n,this.animTime+=t,(this.anim==="swing"||this.anim==="lunge")&&this.animTime>this.swingDuration?this.anim=this.moveSpeed>.4?"run":"idle":this.anim==="idle"&&this.moveSpeed>.4?this.anim="run":this.anim==="run"&&this.moveSpeed<=.4&&(this.anim="idle");const r=this.animTime;let a=.5,o=-.25,l=.5,c=.25,h=0,d=0,u=0,f=0,p=0,x=0,g=0,m=10;switch(this.anim){case"idle":{g=Math.sin(r*2.2)*.02,a=.5+Math.sin(r*2.2)*.04,l=.5+Math.sin(r*2.2+.4)*.04,x=-.15,this.group.position.y=ar.damp(this.group.position.y,0,12,t);break}case"run":{this.runPhase+=t*(6+this.moveSpeed*2.2);const S=this.runPhase;g=Math.abs(Math.sin(S))*.05,h=Math.sin(S)*.85,d=-Math.sin(S)*.85,a=-Math.sin(S)*.5+.3,l=Math.sin(S)*.5+.3,m=14;break}case"swing":{const S=Math.min(r/this.swingDuration,1),_=S<.3?-S/.3:Math.sin((S-.3)/.7*Math.PI);a=.4-_*1.9,o=-.3-_*.5,f=S>=1?0:_*.5*-this.facing,x=-.5+_*1.1,m=26;break}case"lunge":{const S=Math.min(r/this.swingDuration,1),_=Math.sin(S*Math.PI);p=_*.35,a=.2-_*1.2,o=-.9*_,m=20;break}case"celebrate":{const S=Math.abs(Math.sin(r*6))*.18;this.group.position.y=S,this.blob.position.y=.012-S,a=Math.PI*.9+Math.sin(r*12)*.2,l=Math.PI*.9+Math.cos(r*12)*.2,m=16;break}case"dejected":{u=.25,a=.1,l=.1,m=6;break}}if(i&&this.anim!=="lunge"&&this.anim!=="celebrate"){const S=this.facing,_=-i.z*S/4.2,T=i.x*S/4.2;u+=Math.max(-.16,Math.min(.16,_*.55)),p+=Math.max(-.12,Math.min(.12,-T*.45))}const y=(S,_)=>ar.damp(S,_,m,t);this.armR.rotation.x=y(this.armR.rotation.x,a),this.armR.rotation.z=y(this.armR.rotation.z,o),this.armL.rotation.x=y(this.armL.rotation.x,l),this.armL.rotation.z=y(this.armL.rotation.z,c),this.legR.rotation.x=y(this.legR.rotation.x,h),this.legL.rotation.x=y(this.legL.rotation.x,d),this.torso.rotation.x=y(this.torso.rotation.x,u),this.torso.rotation.y=y(this.torso.rotation.y,f),this.group.rotation.z=y(this.group.rotation.z,p),this.paddle.rotation.x=y(this.paddle.rotation.x,x),this.torso.position.y=.86+g,this.head.position.y=ar.damp(this.head.position.y,(this.anim==="dejected"?1.35:1.42)+g,m,t)}}const Br=240;class i1{points;particles=[];positions;colors;sizes;geo;constructor(t){this.positions=new Float32Array(Br*3),this.colors=new Float32Array(Br*3),this.sizes=new Float32Array(Br);for(let n=0;n<Br;n++)this.particles.push({alive:!1,x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,r:1,g:1,b:1,gravity:0}),this.positions[n*3+1]=-10;this.geo=new qt,this.geo.setAttribute("position",new ue(this.positions,3)),this.geo.setAttribute("color",new ue(this.colors,3)),this.geo.setAttribute("psize",new ue(this.sizes,1));const e=new Pn({transparent:!0,depthWrite:!1,vertexShader:`
        attribute float psize;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = psize * (140.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.28, d);
          gl_FragColor = vec4(vColor, a);
        }
      `,vertexColors:!0});this.points=new tu(this.geo,e),this.points.frustumCulled=!1,t.add(this.points)}spawn(t,e){let n=0;for(const i of this.particles){if(n>=t)break;i.alive||(e(i),i.alive=!0,n++)}}hitPop(t,e,n,i){const r=new mt(i?oe.TRAIL_FIRE:16777215);this.spawn(i?14:8,a=>{const o=Math.random()*Math.PI*2,l=1.5+Math.random()*(i?3.5:2);a.x=t,a.y=e,a.z=n,a.vx=Math.cos(o)*l,a.vy=Math.random()*2.2,a.vz=Math.sin(o)*l,a.life=a.maxLife=.3+Math.random()*.25,a.size=i?.5:.35,a.r=r.r,a.g=r.g,a.b=r.b,a.gravity=4})}chalkPuff(t,e){this.spawn(10,n=>{const i=Math.random()*Math.PI*2,r=.4+Math.random()*.9;n.x=t,n.y=.03,n.z=e,n.vx=Math.cos(i)*r,n.vy=.5+Math.random()*1.2,n.vz=Math.sin(i)*r,n.life=n.maxLife=.45+Math.random()*.3,n.size=.4,n.r=1,n.g=1,n.b=1,n.gravity=1.2})}bounceDust(t,e){this.spawn(5,n=>{const i=Math.random()*Math.PI*2,r=.3+Math.random()*.5;n.x=t,n.y=.02,n.z=e,n.vx=Math.cos(i)*r,n.vy=.3+Math.random()*.5,n.vz=Math.sin(i)*r,n.life=n.maxLife=.3,n.size=.25,n.r=.85,n.g=.82,n.b=.75,n.gravity=1.5})}confetti(t,e){this.spawn(70,n=>{const i=new mt(oe.CONFETTI[Math.floor(Math.random()*oe.CONFETTI.length)]),r=Math.random()*Math.PI*2,a=1+Math.random()*3;n.x=t+(Math.random()-.5)*2,n.y=2+Math.random()*2.5,n.z=e+(Math.random()-.5)*2,n.vx=Math.cos(r)*a,n.vy=1+Math.random()*3,n.vz=Math.sin(r)*a,n.life=n.maxLife=1.4+Math.random()*.8,n.size=.4,n.r=i.r,n.g=i.g,n.b=i.b,n.gravity=3.2})}update(t){const e=this.positions,n=this.colors,i=this.sizes;for(let r=0;r<Br;r++){const a=this.particles[r];if(!a.alive)continue;if(a.life-=t,a.life<=0){a.alive=!1,e[r*3+1]=-10;continue}a.vy-=a.gravity*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.y<.01&&(a.y=.01,a.vy=0,a.vx*=.9,a.vz*=.9);const o=a.life/a.maxLife;e[r*3]=a.x,e[r*3+1]=a.y,e[r*3+2]=a.z,n[r*3]=a.r,n[r*3+1]=a.g,n[r*3+2]=a.b,i[r]=a.size*(.4+o*.6)}this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("color").needsUpdate=!0,this.geo.getAttribute("psize").needsUpdate=!0}}function s1(s){const t=new Im({canvas:s,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.shadowMap.enabled=!1,t.toneMapping=Al,t.toneMappingExposure=1.12,t.outputColorSpace=rn;const e={renderer:t,degraded:!1,resize(){const n=window.innerWidth,i=window.innerHeight;return t.setSize(n,i,!1),n/i},degrade(){e.degraded||(e.degraded=!0,t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.resize())}};return e.resize(),e}function Dm(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new qt;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Sf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);const p=Sf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Sf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ue(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){const x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Ct={HALF_LENGTH:6.7056,HALF_WIDTH:3.048,KITCHEN_DEPTH:2.1336,NET_HEIGHT_POST:.914,NET_HEIGHT_CENTER:.86,NET_HALF_SPAN:3.35,LINE_WIDTH:.05};function r1(s){return s>0?"player":"opponent"}function fn(s){return s==="player"?"opponent":"player"}function Ti(s){return s==="player"?1:-1}function bl(s){const t=Math.min(Math.abs(s)/Ct.NET_HALF_SPAN,1);return Ct.NET_HEIGHT_CENTER+(Ct.NET_HEIGHT_POST-Ct.NET_HEIGHT_CENTER)*t*t}function a1(s,t){return Math.abs(s)<=Ct.HALF_WIDTH&&Math.abs(t)<=Ct.HALF_LENGTH}function rc(s,t,e){if(Math.abs(s)>Ct.HALF_WIDTH)return!1;const n=Ti(e),i=t*n;return i>=0&&i<=Ct.KITCHEN_DEPTH}function o1(s,t,e,n){const i=Ti(e),r=t*i;if(r<=Ct.KITCHEN_DEPTH||r>Ct.HALF_LENGTH||Math.abs(s)>Ct.HALF_WIDTH)return!1;const a=e==="player"?s<0:s>0;return n==="right"?a:!a}function Es(s,t,e=0){const n=new mt(t),i=s.getAttribute("position").count,r=new Float32Array(i*3);for(let a=0;a<i;a++){const o=e?(Math.random()-.5)*e:0;r[a*3]=Math.min(1,Math.max(0,n.r+o)),r[a*3+1]=Math.min(1,Math.max(0,n.g+o)),r[a*3+2]=Math.min(1,Math.max(0,n.b+o))}return s.setAttribute("color",new ue(r,3)),s}function ei(s,t,e,n,i,r,a,o=0){const l=new An(s,t,e);return o&&l.rotateY(o),l.translate(i,r,a),Es(l,n)}function ia(s,t,e,n,i,r){const a=new Zi(s,t);return a.rotateX(-Math.PI/2),a.translate(n,i,r),Es(a,e)}function nh(s,t,e,n,i,r,a=7){const o=new Rs(s,t,a);return o.translate(n,i,r),Es(o,e,.04)}function zr(s,t,e,n,i,r,a,o=7){const l=new Gn(s,t,e,o);return l.translate(i,r,a),Es(l,n)}function us(s,t,e,n,i,r=8,a=1){const o=new Dn(s,r,Math.max(4,r-2));return a!==1&&o.scale(1,a,1),o.translate(e,n,i),Es(o,t,.05)}function l1(){const s=document.createElement("canvas");s.width=512,s.height=512;const t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,512,512);for(let n=0;n<2600;n++){const i=235+Math.floor(Math.random()*20);t.fillStyle=`rgba(${i},${i},${i},${.25+Math.random()*.3})`,t.fillRect(Math.random()*512,Math.random()*512,1.5,1.5)}const e=new As(s);return e.wrapS=e.wrapT=Yi,e.repeat.set(3,6),e.anisotropy=8,e}function c1(){const s=[],t=Ct.HALF_WIDTH,e=Ct.HALF_LENGTH,n=Ct.KITCHEN_DEPTH,i=Ct.LINE_WIDTH,r=.002;for(const d of[1,-1])s.push(ia(t*2,n,oe.KITCHEN_GREEN,0,0,d*(n/2))),s.push(ia(t*2,e-n,oe.COURT_BLUE,0,0,d*(n+(e-n)/2)));const a=[[i,e*2,-t+i/2,0],[i,e*2,t-i/2,0],[t*2,i,0,-e+i/2],[t*2,i,0,e-i/2],[t*2,i,0,-n],[t*2,i,0,n]],o=e-n;a.push([i,o,0,-4.419599999999999]),a.push([i,o,0,n+o/2]);for(const[d,u,f,p]of a)s.push(ia(d,u,oe.COURT_LINE,f,r,p));const l=Dm(s,!1),c=new Be({vertexColors:!0,map:l1()});c.polygonOffset=!0,c.polygonOffsetFactor=-1,c.polygonOffsetUnits=-2;const h=new Ht(l,c);return h.receiveShadow=!0,h}function h1(){const s=[];s.push(ia(24,34,oe.COURT_APRON,0,-.04,0)),s.push(ia(140,140,oe.GRASS,0,-.07,0));const t=[[-18,-12,7],[15,10,5],[-12,18,6],[20,-18,8],[0,-26,9],[26,2,6]];for(const[a,o,l]of t){const c=new Cs(l,10);c.rotateX(-Math.PI/2),c.translate(a,-.015,o),s.push(Es(c,oe.GRASS_DARK,.02))}const e=[[-34,-42,22,.28,8375947],[20,-48,28,.24,7652479],[48,-34,18,.3,8836242],[-52,-20,24,.26,7652479],[56,8,22,.24,8375947],[-48,22,20,.28,8836242],[10,52,26,.22,7652479],[-24,48,20,.26,8375947]];for(const[a,o,l,c,h]of e)s.push(us(l,h,a,-l*c*.35,o,12,c));const n=[[-10,-14,1.3],[-13,-6,1.1],[-12,4,1.4],[-11,12,1],[10,-13,1.2],[13,-4,1.35],[12,6,1.05],[11,13,1.25],[-19,-22,1.5],[19,-24,1.6],[-22,10,1.4],[23,14,1.5]];for(const[a,o,l]of n)s.push(zr(.18*l,.24*l,1.6*l,oe.TREE_TRUNK,a,.8*l,o,6)),s.push(nh(1.5*l,2.6*l,oe.TREE_LEAF,a,2.6*l,o)),s.push(nh(1.1*l,2*l,oe.TREE_LEAF_LIGHT,a,3.6*l,o));const i=[[-6,-18,1.2],[6,-19,1.4],[-7,17,1.3],[7,18,1.1],[16,-16,1.3],[-16,-17,1.1]];for(const[a,o,l]of i)s.push(zr(.16*l,.22*l,1.2*l,oe.TREE_TRUNK,a,.6*l,o,6)),s.push(us(1.5*l,oe.TREE_LEAF,a,2.2*l,o,9,.85)),s.push(us(1*l,oe.TREE_LEAF_LIGHT,a+.6*l,2.7*l,o+.3*l,8,.8));for(const a of[-1,1]){const o=a*7.2;for(let l=0;l<4;l++){s.push(ei(1,.45,12,oe.BLEACHER,o+a*l*1,.225+l*.45,0));for(let h=0;h<11;h++)if((h+l)%2===0){const d=-5.5+h*1.1+l%2*.4,u=oe.CONFETTI[(h+l*3)%oe.CONFETTI.length];s.push(us(.2,u,o+a*l*1,.45*(l+1)+.26,d,6,1.2)),s.push(us(.11,oe.SKIN,o+a*l*1,.45*(l+1)+.56,d,6))}}s.push(ei(4.4,.08,12.6,5155017,o+a*1.5,2.6,0));for(const l of[-5.8,5.8])s.push(zr(.05,.05,2.6,3622735,o+a*3.2,1.3,l,6))}const r=.5;for(const a of[-1,1]){s.push(ei(.08,1,26,oe.FENCE,a*11.5,r,0)),s.push(ei(21,1,.08,oe.FENCE,0,r,a*13.5));for(let o=0;o<7;o++)s.push(ei(.12,1.1,.12,8370377,a*11.5,.55,-12+o*4)),s.push(ei(.12,1.1,.12,8370377,-9+o*3,.55,a*13.5))}for(const a of[-1,1])for(const o of[-1,1]){const l=a*9.6,c=o*10.5;s.push(zr(.07,.1,6.2,5533306,l,3.1,c,7)),s.push(us(.28,16774080,l,6.3,c,8));for(let h=1;h<=4;h++){const d=oe.CONFETTI[(h+(a>0?1:0)+(o>0?2:0))%oe.CONFETTI.length],u=l-a*h*.55,f=5.9-h*.12,p=new Rs(.11,.3,4);p.rotateX(Math.PI),p.translate(u,f,c-o*h*.1),s.push(Es(p,d))}}for(const a of[-4.5,0,4.5]){s.push(ei(1.4,.5,.5,10775370,a,.25,-12.6));for(let o=0;o<4;o++){const l=oe.CONFETTI[(o+Math.abs(a)|0)%oe.CONFETTI.length];s.push(us(.12,l,a-.5+o*.34,.62,-12.6,6))}s.push(ei(1.3,.14,.42,6732650,a,.53,-12.6))}for(const a of[-1,1]){const o=a*6.4;s.push(zr(.05,.05,2.2,9268835,o,1.1,11.2,6)),s.push(nh(1.4,.7,a>0?15954476:5731728,o,2.35,11.2,8)),s.push(ei(1.6,.1,.5,14142664,o,.45,12.2)),s.push(ei(1.6,.1,.12,14142664,o,.85,12.42))}return s}function u1(){const s=Dm(h1(),!1),t=new Be({vertexColors:!0}),e=new Ht(s,t);return e.receiveShadow=!0,e}function d1(){const s=new on,t=new Dn(95,20,12),e=t.getAttribute("position"),n=new Float32Array(e.count*3),i=new mt(5220568),r=new mt(oe.SKY_TOP),a=new mt(15398907);for(let f=0;f<e.count;f++){const p=e.getY(f)/95,x=p>.35?i.clone().lerp(r,(1-p)/.65):r.clone().lerp(a,Math.min(1,(.35-p)/.5));n[f*3]=x.r,n[f*3+1]=x.g,n[f*3+2]=x.b}t.setAttribute("color",new ue(n,3));const o=new Ht(t,new je({vertexColors:!0,side:tn,fog:!1,depthWrite:!1}));o.renderOrder=-10,s.add(o);const l=f1(),c=new pa({map:l,transparent:!0,opacity:.92,fog:!1,depthWrite:!1}),h=[[-30,22,-70,22],[18,26,-75,28],[48,19,-60,18],[-55,24,-40,20],[0,30,-80,34]];for(const[f,p,x,g]of h){const m=new vl(c);m.position.set(f,p,x),m.scale.set(g,g*.42,1),m.renderOrder=-9,s.add(m)}const d=new pa({map:p1(),transparent:!0,opacity:.95,fog:!1,depthWrite:!1}),u=new vl(d);return u.position.set(34,42,-55),u.scale.set(22,22,1),u.renderOrder=-9,s.add(u),s}function f1(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d"),e=[[70,80,42],[120,62,52],[175,78,44],[105,90,40],[150,92,36]];for(const[n,i,r]of e){const a=t.createRadialGradient(n,i,2,n,i,r);a.addColorStop(0,"rgba(255,255,255,0.95)"),a.addColorStop(.7,"rgba(255,255,255,0.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,256,128)}return new As(s)}function p1(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,250,224,1)"),e.addColorStop(.35,"rgba(255,242,180,0.7)"),e.addColorStop(1,"rgba(255,240,170,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new As(s)}function m1(){const s=document.createElement("canvas");s.width=1024,s.height=160;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,160);e.addColorStop(0,"#ffd166"),e.addColorStop(1,"#f4a83a"),t.fillStyle=e,t.fillRect(0,0,1024,160),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(0,0,1024,14),t.font='900 92px "Trebuchet MS", sans-serif',t.textAlign="center",t.textBaseline="middle",t.lineWidth=10,t.strokeStyle="rgba(120,70,0,0.45)",t.strokeText("PICKLE SMASH 3D",512,86),t.fillStyle="#ffffff",t.fillText("PICKLE SMASH 3D",512,86);const n=new As(s);n.anisotropy=8;const i=new on,r=new Ht(new An(9,1.35,.12),new Be({color:14264639}));r.position.set(0,1.5,-12.45),i.add(r);const a=new Ht(new Zi(8.9,1.28),new Be({map:n}));return a.position.set(0,1.5,-12.38),i.add(a),i}function g1(){const s=new on,t=new Be({color:oe.NET_POST});for(const p of[-1,1]){const x=new Ht(new Gn(.04,.05,Ct.NET_HEIGHT_POST+.05,8),t);x.position.set(p*Ct.NET_HALF_SPAN,(Ct.NET_HEIGHT_POST+.05)/2,0),x.castShadow=!0,s.add(x)}const e=24,n=[],i=[],r=[];for(let p=0;p<=e;p++){const x=-3.35+p/e*Ct.NET_HALF_SPAN*2,g=bl(x);if(n.push(x,0,0,x,g,0),i.push(p/e,0,p/e,1),p<e){const m=p*2;r.push(m,m+2,m+1,m+1,m+2,m+3)}}const a=new qt;a.setAttribute("position",new Tt(n,3)),a.setAttribute("uv",new Tt(i,2)),a.setIndex(r),a.computeVertexNormals();const o=x1(),l=new je({map:o,transparent:!0,side:Vn,depthWrite:!1,opacity:.75}),c=new Ht(a,l);s.add(c);const h=[];for(let p=0;p<=e;p++){const x=-3.35+p/e*Ct.NET_HALF_SPAN*2;h.push(new P(x,bl(x),0))}const d=new iu(h),u=new Pa(d,e,.025,6,!1),f=new Ht(u,new Be({color:oe.NET_TAPE}));return s.add(f),s}function x1(){const s=document.createElement("canvas");s.width=256,s.height=64;const t=s.getContext("2d");t.clearRect(0,0,256,64),t.strokeStyle="#dde7ec",t.globalAlpha=.65,t.lineWidth=1;for(let n=0;n<=256;n+=6)t.beginPath(),t.moveTo(n,0),t.lineTo(n,64),t.stroke();for(let n=0;n<=64;n+=6)t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke();const e=new As(s);return e.wrapS=Yi,e.repeat.set(4,1),e.anisotropy=8,e.generateMipmaps=!1,e.minFilter=Ae,e}function _1(s){const t=new xu(oe.SKY_TOP,13615264,1.25);s.add(t);const e=new vu(oe.SUN,1.9);e.position.set(6,14,8),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);const n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=4,n.far=40,n.updateProjectionMatrix(),e.shadow.bias=-.002,e.shadow.radius=0,s.add(e),s.add(e.target)}function v1(){const s=new $h;return s.background=new mt(oe.SKY_TOP),s.fog=new Ea(14479863,42,110),s.add(d1()),s.add(u1()),s.add(c1()),s.add(m1()),s.add(g1()),_1(s),s}function Ft(s=0,t=0,e=0){return{x:s,y:t,z:e}}function Xr(s,t){return s.x=t.x,s.y=t.y,s.z=t.z,s}function Ao(s){return{x:s.x,y:s.y,z:s.z}}function y1(s,t){return{x:s.y*t.z-s.z*t.y,y:s.z*t.x-s.x*t.z,z:s.x*t.y-s.y*t.x}}function Wt(s,t,e){return s<t?t:s>e?e:s}function _e(s,t,e){return s+(t-s)*e}function Qe(s,t){return s+Math.random()*(t-s)}function Ma(){return(Math.random()+Math.random()+Math.random()+Math.random()-2)*Math.sqrt(3)}function Ch(){return{pos:Ft(0,1,5),vel:Ft(),spin:Ft(),phase:"held",prevPos:Ft(0,1,5),bounces:0,pendingBounce:null,pendingNet:null}}function er(s,t,e,n){Xr(s.pos,t),Xr(s.prevPos,t),Xr(s.vel,e),Xr(s.spin,n),s.phase="flight",s.bounces=0,s.pendingBounce=null,s.pendingNet=null}function Sa(s,t,e=!1){if(s.phase==="held"||s.phase==="dead")return;if(Xr(s.prevPos,s.pos),s.phase==="rolling"){M1(s,t);return}const n=s.vel,i=Math.hypot(n.x,n.y,n.z);let r=0,a=-9.81,o=0;if(i>1e-6){const c=Ot.DRAG_K*i;r-=c*n.x,a-=c*n.y,o-=c*n.z;const h=y1(s.spin,n);r+=Ot.MAGNUS_K*h.x,a+=Ot.MAGNUS_K*h.y,o+=Ot.MAGNUS_K*h.z}n.x+=r*t,n.y+=a*t,n.z+=o*t,s.pos.x+=n.x*t,s.pos.y+=n.y*t,s.pos.z+=n.z*t;const l=Math.exp(-.08*i*t);s.spin.x*=l,s.spin.y*=l,s.spin.z*=l,b1(s,e),S1(s)}function M1(s,t){const e=s.vel,n=Math.hypot(e.x,e.z);if(n<=Ot.DEAD_SPEED){s.phase="dead",e.x=0,e.y=0,e.z=0;return}const r=Math.max(0,n-Ot.ROLL_DECEL*t)/n;e.x*=r,e.z*=r,s.pos.x+=e.x*t,s.pos.z+=e.z*t,s.pos.y=Ot.BALL_RADIUS}function S1(s){if(s.pos.y>Ot.BALL_RADIUS||s.vel.y>=0)return;const t=s.vel;s.pos.y=Ot.BALL_RADIUS,s.bounces++;const e=s.pos.x,n=s.pos.z,i=Math.abs(e)<=Ct.HALF_WIDTH&&Math.abs(n)<=Ct.HALF_LENGTH,r=i&&(Math.abs(Math.abs(e)-Ct.HALF_WIDTH)<Ot.BALL_RADIUS+Ct.LINE_WIDTH||Math.abs(Math.abs(n)-Ct.HALF_LENGTH)<Ot.BALL_RADIUS+Ct.LINE_WIDTH||Math.abs(Math.abs(n)-Ct.KITCHEN_DEPTH)<Ot.BALL_RADIUS+Ct.LINE_WIDTH);s.pendingBounce={x:e,z:n,side:r1(n),inCourt:i,onLine:r},t.y=-t.y*Ot.BOUNCE_COR;const a=Math.hypot(t.x,t.z);if(a>1e-6){const o=t.x/a,l=t.z/a,c=s.spin.x*l-s.spin.z*o,h=Ot.BOUNCE_SPIN_KICK*Ot.BALL_RADIUS*c,d=Math.max(0,a*Ot.BOUNCE_FRICTION_KEEP+h),u=Ot.BOUNCE_SIDE_KICK*Ot.BALL_RADIUS*s.spin.y;t.x=o*d+-l*u,t.z=l*d+o*u}s.spin.x*=Ot.BOUNCE_SPIN_KEEP,s.spin.y*=Ot.BOUNCE_SPIN_KEEP,s.spin.z*=Ot.BOUNCE_SPIN_KEEP,t.y<Ot.ROLL_VY_THRESHOLD&&(t.y=0,s.phase="rolling")}function b1(s,t){const e=s.prevPos.z,n=s.pos.z;if(e===n||e*n>0)return;const i=e/(e-n),r=s.prevPos.x+(s.pos.x-s.prevPos.x)*i,a=s.prevPos.y+(s.pos.y-s.prevPos.y)*i;if(Math.abs(r)>Ct.NET_HALF_SPAN)return;const o=bl(r);if(a>=o+Ot.BALL_RADIUS)return;const l=s.vel,c=a>o-Fi.CORD_BAND;if(c){const h=t?(Fi.CORD_KEEP_MIN+Fi.CORD_KEEP_MAX)/2:Qe(Fi.CORD_KEEP_MIN,Fi.CORD_KEEP_MAX),d=t?!0:Math.random()<.5,u=Math.hypot(l.x,l.y,l.z)*h,f=Math.sign(d?n-e:e-n),p=t?0:Qe(-.21,Fi.CORD_DEFLECT_H),x=t?.3:Qe(0,Fi.CORD_DEFLECT_V);l.x=u*Math.sin(p),l.y=u*Math.sin(x)*.5,l.z=f*u*Math.cos(p),s.pos.x=r,s.pos.y=Math.max(a,o+Ot.BALL_RADIUS*.5),s.pos.z=f*.02,s.spin.x=0,s.spin.y=0,s.spin.z=0}else{const h=Math.hypot(l.x,l.y,l.z)*Fi.BODY_KEEP,d=Math.sign(e);l.x=0,l.y=-Math.abs(h)*.3,l.z=d*h,s.pos.x=r,s.pos.y=Wt(a,Ot.BALL_RADIUS,o),s.pos.z=d*.05}s.pendingNet={cord:c,x:r}}function w1(s,t){return{x:s.prevPos.x+(s.pos.x-s.prevPos.x)*t,y:s.prevPos.y+(s.pos.y-s.prevPos.y)*t,z:s.prevPos.z+(s.pos.z-s.prevPos.z)*t}}function Nm(s){return{pos:Ao(s.pos),vel:Ao(s.vel),spin:Ao(s.spin),phase:s.phase,prevPos:Ao(s.prevPos),bounces:s.bounces,pendingBounce:null,pendingNet:null}}const Au=5,Um=4;function wl(s,t,e){const n=Ch();er(n,s,t,e);const i=[{pos:{...s},t:0}];let r=1/0,a=0,o=0,l=!1;for(;a<Au;){const h=n.pos.z;if(Sa(n,Ot.DT,!0),a+=Ot.DT,o++,n.pendingNet){l=!0,r=Math.min(r,-.01);break}const d=n.pos.z;if(h*d<=0&&h!==d){const u=h/(h-d),f=n.prevPos.x+(n.pos.x-n.prevPos.x)*u,p=n.prevPos.y+(n.pos.y-n.prevPos.y)*u;r=Math.min(r,p-bl(f))}if(o%Um===0&&i.push({pos:{...n.pos},t:a}),n.pendingBounce)break}const c=n.pendingBounce?Ft(n.pendingBounce.x,Ot.BALL_RADIUS,n.pendingBounce.z):{...n.pos};return i.push({pos:{...c},t:a}),{velocity:{...t},spin:{...e},flightTime:a,netClearance:r===1/0?999:r,landing:c,samples:i,willFault:l,converged:!1}}function mr(s,t,e,n,i=.12,r=0){const a=t.x-s.x,o=t.z-s.z,l=Math.hypot(a,o),c=l>1e-6?a/l:0,h=l>1e-6?o/l:1,d=Ft(h*n,r,-c*n);let u=Math.max(e,s.y+.05),f=null;for(let p=0;p<6;p++){const x=T1(s,t,u,d,c,h,l);if(f=x,!x.willFault&&x.netClearance>i)break;u+=.12+p*.08}return Fm(f,s,t)}function Fm(s,t,e){const n=Math.hypot(s.landing.x-e.x,s.landing.z-e.z);s.converged=!s.willFault&&n<.3;const i=Math.sign(e.z);i!==0&&Math.sign(s.landing.z)!==i&&(s.willFault=!0);const r=Math.abs(e.x)<=Ct.HALF_WIDTH&&Math.abs(e.z)<=Ct.HALF_LENGTH,a=Math.abs(s.landing.x)<=Ct.HALF_WIDTH&&Math.abs(s.landing.z)<=Ct.HALF_LENGTH;return r&&!a&&(s.willFault=!0),s}function Cu(s,t,e,n,i=.04,r=0){const a=t.x-s.x,o=t.z-s.z,l=Math.hypot(a,o),c=l>1e-6?a/l:0,h=l>1e-6?o/l:1,d=Ft(h*n,r,-c*n),u=(f,p)=>wl(s,Ft(c*p*Math.cos(f),p*Math.sin(f),h*p*Math.cos(f)),d);for(const f of[e,e*.85]){let p=null,x=1/0,g=0;for(let m=0;m<=16;m++){const y=-.9+m/16*1.5,S=u(y,f);if(S.willFault||S.netClearance<=i)continue;const _=Math.hypot(S.landing.x-t.x,S.landing.z-t.z);_<x&&(x=_,p=S,g=y)}if(p){for(const m of[-.045,.045]){const y=u(g+m,f);if(y.willFault||y.netClearance<=i)continue;const S=Math.hypot(y.landing.x-t.x,y.landing.z-t.z);S<x&&(x=S,p=y)}return Fm(p,s,t)}}return mr(s,t,Math.max(s.y+.2,1),n,.12,r)}function T1(s,t,e,n,i,r,a){const o=Ot.GRAVITY,l=s.y,c=t.y,h=Math.max(e-l,.02),d=Math.sqrt(2*o*h),u=d/o,f=Math.max(e-c,.02),p=Math.sqrt(2*f/o),x=u+p;let g=a/x,m=g,y=E1(s,g,d,i,r,n,a);g=g*(1+Wt(-y/Math.max(a,.5),-.4,.6));let S=null;for(let T=0;T<6;T++){const b=wl(s,Ft(i*g,d,r*g),n),v=Math.hypot(b.landing.x-s.x,b.landing.z-s.z)-a;if(S=b,Math.abs(v)<.05)break;const E=v-y;let R;Math.abs(E)>1e-6?R=g-v*((g-m)/E):R=g*(1-Wt(v/Math.max(a,.5),-.3,.3)),m=g,y=v,g=Wt(R,.5,45)}const _=S;if(Math.abs(n.y)>1){const T=A1(s,t,_.landing);if(Math.abs(T)>.05){const b=C1(_.velocity,-T/Math.max(a,1));return wl(s,b,n)}}return _}function E1(s,t,e,n,i,r,a){const o=wl(s,Ft(n*t,e,i*t),r);return Math.hypot(o.landing.x-s.x,o.landing.z-s.z)-a}function A1(s,t,e){const n=t.x-s.x,i=t.z-s.z,r=Math.hypot(n,i)||1,a=-i/r,o=n/r;return(e.x-t.x)*a+(e.z-t.z)*o}function C1(s,t){const e=Math.cos(t),n=Math.sin(t);return Ft(s.x*e-s.z*n,s.y,s.x*n+s.z*e)}function R1(s){if(s.phase!=="flight")return null;const t=Nm(s),e=[];let n=0,i=0;for(;n<Au;){if(Sa(t,Ot.DT,!0),n+=Ot.DT,i++,i%Um===0&&e.push({pos:{...t.pos},t:n}),t.pendingBounce)return{pos:Ft(t.pendingBounce.x,Ot.BALL_RADIUS,t.pendingBounce.z),t:n,samples:e};if(t.pendingNet&&!t.pendingNet.cord)return{pos:{...t.pos},t:n,samples:e};t.pendingNet=null}return null}function P1(s,t,e={}){if(s.phase!=="flight")return null;const n=e.minY??.15,i=e.maxY??1.5,r=Nm(s);let a=0,o=r.bounces>0,l=null,c=null;for(;a<Au&&(Sa(r,Ot.DT,!0),a+=Ot.DT,!(r.pendingNet&&!r.pendingNet.cord||(r.pendingNet=null,r.pendingBounce&&(o=!0,Math.sign(r.pendingBounce.z)===t&&!c&&(c={pos:{...r.pos},t:a}),r.pendingBounce=null,r.phase!=="flight"))));)if(Math.sign(r.pos.z)===t&&!(e.afterBounce&&!o)&&r.pos.y>=n&&r.pos.y<=i){if(r.vel.y<=.5)return{pos:{...r.pos},t:a};l||(l={pos:{...r.pos},t:a})}return l??c}function I1(s){return{skill:Lm(s),mercySigma:0,playerLossStreak:0}}function bf(s,t){if(t){s.playerLossStreak=0,s.mercySigma=0;return}s.playerLossStreak++,s.skill.dupr<=3.5&&s.playerLossStreak>=3&&(s.mercySigma=.35)}function L1(s,t){const{skill:e}=s,n=t.contact,i=n.y>1&&Math.abs(n.z)<4.5,r=t.isReaching?e.errorRate:e.errorRate*.25,a=Math.random()<r,o=Math.random()<e.shotIQ;let l;i&&Math.random()<e.aggression?l="smash":t.isThirdShot?l=Math.random()<e.thirdShotDrop?"drop":"drive":t.aiAtKitchen&&t.playerAtKitchen?l=o&&Math.random()<.15&&e.dupr>=4?"drive":"dink":t.playerAtKitchen&&!t.aiAtKitchen&&o?e.dupr>=4&&Math.random()<.25?l="lob":l=Math.random()<.7?"drop":"drive":l="drive";const c=D1(s,l,t,o),h=l==="dink"?1:l==="drive"?1.3:l==="smash"||l==="lob"?1.6:1.2;let d=(e.aimSigma+s.mercySigma)*h;t.moveSpeed>2&&(d+=.4),t.isReaching&&(d+=.3);const u=(e.dupr-2)/5,f=_e(1.7,Ct.HALF_WIDTH-.12,Wt(u,0,1)),p=_e(Ct.HALF_LENGTH-1.2,Ct.HALF_LENGTH-.15,Wt(u,0,1));c.x=Wt(c.x+Ma()*d,-f,f),c.z=Wt(c.z+Ma()*d*.9,.9,p);const x=pn[l],g=l==="smash"?0:_e(.6,0,Wt(u,0,1)),m=l==="smash"?Math.max(n.y*.55,.5):Qe(x.apexMin,x.apexMax)+g,y=Qe(x.spinMin,x.spinMax);let S=l==="smash"?Cu(n,c,Qe(pn.smash.speedMin,pn.smash.speedMax),y):mr(n,c,m,y);if(S.willFault||!S.converged){const _=Ft(c.x*.9,c.y,Wt(c.z*.85,.9,Ct.HALF_LENGTH-.3)),T=mr(n,_,m+.25,y*.5);T.willFault||(S=T)}return{kind:l,shot:S,whiffed:a}}function D1(s,t,e,n){const i=e.playerPos.x,r=n?Wt(-Math.sign(i||.1)*_e(.8,2.3,s.skill.aggression),-2.5,2.5):Qe(-1,1);switch(t){case"dink":return Ft(n?r*.5:Qe(-.8,.8),Ot.BALL_RADIUS,Qe(.8,1.9));case"drop":return Ft(r*.5,Ot.BALL_RADIUS,Qe(1,1.9));case"lob":return Ft(r*.6,Ot.BALL_RADIUS,Qe(5,6.2));case"smash":return Ft(r,Ot.BALL_RADIUS,Qe(2.2,4.4));case"drive":default:{const a=n?Qe(4.8,6):Qe(3.5,5.5);return Ft(r,Ot.BALL_RADIUS,a)}}}function N1(s,t,e){const{skill:n}=s,i=e==="right"?-1:1,r=_e(4,6,n.shotIQ*.7+Math.random()*.3),a=i*Qe(.5,2.3),o=Ft(Wt(a+Ma()*(n.aimSigma+s.mercySigma)*.8,i*.2,i*2.8),Ot.BALL_RADIUS,r);Math.sign(o.x)!==i&&(o.x=i*.4);const l=Qe(2,2.6),c=_e(0,120,n.shotIQ)*Math.random();return mr(t,o,l,c)}function U1(s){return Ft(s==="right"?.8:-.8,0,-7.005599999999999)}function F1(s){return Ft(s==="right"?1.6:-1.6,0,-6.4056)}function wf(s,t){const e=Ti(s)*ze.BASELINE_READY_Z;return{side:s,pos:Ft(0,0,e),prevPos:Ft(0,0,e),vel:Ft(),speed:0,maxSpeed:t,intent:"ready",target:Ft(0,0,e),reactionTimer:0,strikePoint:null,strikeTime:0,mustLetBounce:!1,kitchenClamp:!0,lungeTimer:0,controlMode:"auto",manualInput:{x:0,z:0}}}function O1(s,t,e,n){s.reactionTimer=e,s.mustLetBounce=n,s.intent="intercept",Rh(s,t)}function Rh(s,t){const e=Ti(s.side),n=P1(t,e,{minY:.15,maxY:1.5,afterBounce:s.mustLetBounce});n?(s.strikePoint=n.pos,s.strikeTime=n.t,s.target=Ft(n.pos.x,0,n.pos.z),s.mustLetBounce&&(s.target.z+=e*.8)):s.strikePoint=null}function ih(s,t,e){const n=Ti(s.side);let i;t==="dink"||t==="drop"?i=ze.KITCHEN_READY_Z:t==="drive"||t==="smash"||t==="reset"?i=Math.min(Math.abs(s.pos.z),ze.MID_READY_Z):i=ze.MID_READY_Z;const r=Wt(-e*.35,-.8,ze.MAX_LATERAL_SHADE);s.intent="recover",s.target=Ft(r,0,n*i),s.strikePoint=null}function Tf(s,t,e){if(s.prevPos.x=s.pos.x,s.prevPos.z=s.pos.z,s.lungeTimer>0&&(s.lungeTimer-=t),s.controlMode==="manual"){B1(s,t,e);return}if(s.reactionTimer>0){s.reactionTimer-=t,Ef(s,t);return}const n=s.target.x-s.pos.x,i=s.target.z-s.pos.z,r=Math.hypot(n,i);if(r<.04){Ef(s,t);return}const a=Math.min(s.maxSpeed,r*6);s.speed=Math.min(s.speed+ze.ACCEL*t,a);const o=1/r;s.vel.x=n*o*s.speed,s.vel.z=i*o*s.speed,s.pos.x+=s.vel.x*t,s.pos.z+=s.vel.z*t,Om(s,e)}function B1(s,t,e){const n=s.manualInput,i=Math.min(1,Math.hypot(n.x,n.z));let r=n.x*s.maxSpeed,a=n.z*s.maxSpeed;if(i<.45&&s.strikePoint){const l=s.strikePoint.x-s.pos.x,c=s.strikePoint.z-s.pos.z,h=Math.hypot(l,c);if(h>.05&&h<1.3){const d=Math.min(2.2,h*4.5);r+=l/h*d,a+=c/h*d}}const o=(Math.hypot(r,a)>s.speed?ze.ACCEL:ze.DECEL)*t;s.vel.x+=Wt(r-s.vel.x,-o,o),s.vel.z+=Wt(a-s.vel.z,-o,o),s.speed=Math.hypot(s.vel.x,s.vel.z),s.pos.x+=s.vel.x*t,s.pos.z+=s.vel.z*t,Om(s,e)}function Om(s,t){const e=Ti(s.side);if(s.pos.z*e<.3&&(s.pos.z=e*.3),Math.abs(s.pos.z)>Ct.HALF_LENGTH+2&&(s.pos.z=e*(Ct.HALF_LENGTH+2)),s.pos.x=Wt(s.pos.x,-3.048-1.5,Ct.HALF_WIDTH+1.5),!t&&s.intent!=="intercept"){const n=Ct.KITCHEN_DEPTH+.15;Math.abs(s.pos.z)<n&&(s.pos.z=e*n)}else if(!t&&s.strikePoint&&Math.abs(s.strikePoint.z)<Ct.KITCHEN_DEPTH&&!s.mustLetBounce&&s.strikePoint.y>.05){const i=Ct.KITCHEN_DEPTH+.15;Math.abs(s.pos.z)<i&&(s.pos.z=e*i)}}function Ef(s,t){if(s.speed=Math.max(0,s.speed-ze.DECEL*t),s.speed>0){const e=Math.hypot(s.vel.x,s.vel.z);e>1e-5&&(s.vel.x=s.vel.x/e*s.speed,s.vel.z=s.vel.z/e*s.speed,s.pos.x+=s.vel.x*t,s.pos.z+=s.vel.z*t)}}function sh(s,t){const e=t.pos.x-s.pos.x,n=t.pos.z-s.pos.z,i=Math.hypot(e,n),r=s.lungeTimer<=0?ze.LUNGE_REACH:ze.STRIKE_RADIUS;return i<=r&&t.pos.y>=ze.STRIKE_Y_MIN&&t.pos.y<=ze.STRIKE_Y_MAX&&Math.sign(t.pos.z)===Ti(s.side)}function Af(s,t){return{x:s.prevPos.x+(s.pos.x-s.prevPos.x)*t,y:0,z:s.prevPos.z+(s.pos.z-s.prevPos.z)*t}}const Tn={NET:"NET FAULT",OUT:"OUT OF BOUNDS",KITCHEN_SERVE:"SERVE IN KITCHEN",KITCHEN_VOLLEY:"KITCHEN VOLLEY",KITCHEN_MOMENTUM:"KITCHEN MOMENTUM",DOUBLE_BOUNCE:"TWO-BOUNCE VIOLATION",NOT_RETURNED:"NOT RETURNED"};function z1(s="player"){return{serveState:"waiting",serving:s,bounceCount:{player:0,opponent:0},doubleBounceCleared:{player:!1,opponent:!1},rallyCount:0,kitchenBounce:{player:!1,opponent:!1},momentumWatch:null}}function k1(s,t){s.serveState="waiting",s.bounceCount={player:0,opponent:0},s.doubleBounceCleared={player:!1,opponent:!1},s.rallyCount=0,s.kitchenBounce={player:!1,opponent:!1},s.momentumWatch=null,t!==void 0&&(s.serving=t)}function H1(s){s.serveState="served"}function Cf(s,t,e,n){s.bounceCount[n]++,rc(t,e,n)&&(s.kitchenBounce[n]=!0),s.serveState==="served"&&(s.serveState="in_play")}function Rf(s,t){if(s.rallyCount++,s.rallyCount<=2&&!s.doubleBounceCleared[t]&&s.bounceCount[t]===0)return{fault:!0,reason:Tn.DOUBLE_BOUNCE,against:t};s.bounceCount[t]>0&&(s.doubleBounceCleared[t]=!0);const e=fn(t);return s.bounceCount[e]=0,s.kitchenBounce[e]=!1,{fault:!1}}function Pf(s,t,e,n){return rc(e,n,t)?s.bounceCount[t]===0?{fault:!0,reason:Tn.KITCHEN_VOLLEY,against:t}:{fault:!1}:{fault:!1}}function If(s,t){s.momentumWatch={side:t,timer:.5}}function V1(s,t,e,n){const i=s.momentumWatch;return i?(i.timer-=t,i.timer<=0?(s.momentumWatch=null,{fault:!1}):rc(e,n,i.side)?(s.momentumWatch=null,{fault:!0,reason:Tn.KITCHEN_MOMENTUM,against:i.side}):{fault:!1}):{fault:!1}}function G1(s,t,e,n){const i=fn(e);return a1(s,t)?rc(s,t,i)?{fault:!0,reason:Tn.KITCHEN_SERVE,against:e}:o1(s,t,i,n)?{fault:!1}:{fault:!0,reason:Tn.OUT,against:e}:{fault:!0,reason:Tn.OUT,against:e}}function W1(s){return s%2===0?"right":"left"}function X1(s="player"){return{player:0,opponent:0,serving:s,games:[0,0]}}function Y1(s,t){return t===s.serving?(s[t]++,{sideOut:!1}):(s.serving=t,{sideOut:!0})}function q1(s){const{player:t,opponent:e}=s;return t>=Wr.POINTS_TO_WIN&&t-e>=Wr.WIN_BY?"player":e>=Wr.POINTS_TO_WIN&&e-t>=Wr.WIN_BY?"opponent":null}function K1(s){const t=Math.ceil(Wr.BEST_OF/2);return s.games[0]>=t?"player":s.games[1]>=t?"opponent":null}function kr(s){return Wt(s??0,-1,1)*240}function rh(s){return s.y>1.05&&Math.abs(s.z)<3.6}function ah(s,t,e,n){const r=-Ti(t),a=Math.abs(e.z)<3.2;if(s.worldTarget){const y=Wt(s.worldTarget.x,-2.748,Ct.HALF_WIDTH-.3),S=Wt(Math.abs(s.worldTarget.z),.8,Ct.HALF_LENGTH-.3),_=Ft(y,Ot.BALL_RADIUS,r*S),T=Wt(s.arc??0,0,1),b=kr(s.curve);if(s.isLob||T>.55)return{kind:"lob",target:_,apex:_e(3.4,4.8,T),spin:-40,side:b*.7,drawn:!0};if(rh(e)&&T<.25)return{kind:"smash",target:_,apex:0,spin:120,side:b,speed:_e(24,30,.7),drawn:!0};if(S<Ct.KITCHEN_DEPTH+.3){const R=a?"dink":"drop",I=pn[R];return{kind:R,target:_,apex:_e(I.apexMin,I.apexMax,Math.max(T,.3)),spin:_e(I.spinMin,I.spinMax,.5),side:b*.5,drawn:!0}}const A=(S-Ct.KITCHEN_DEPTH)/(Ct.HALF_LENGTH-Ct.KITCHEN_DEPTH),v=Wt(s.slice??0,0,1),E=_e(pn.drive.spinMin,pn.drive.spinMax,Math.max(s.flick,A*.5));return{kind:"drive",target:_,apex:_e(1.15,3.2,Math.pow(T,1.2))*_e(1,.94,s.flick),spin:v>.2?-_e(60,190,v):E,side:b,drawn:!0}}const l=Wt(s.aimX,-1,1)*(Ct.HALF_WIDTH-.45);if(s.isTap)return rh(e)?Lf(r,l*.6,.6):a?{kind:"dink",target:Ft(l*.6,Ot.BALL_RADIUS,r*1.3),apex:1.35,spin:-30}:n?{kind:"drop",target:Ft(l*.6,Ot.BALL_RADIUS,r*1.5),apex:2.6,spin:-45}:{kind:"drive",target:Ft(l*.7,Ot.BALL_RADIUS,r*5),apex:1.6,spin:100};if(s.isLob)return{kind:"lob",target:Ft(l,Ot.BALL_RADIUS,r*5.6),apex:4.5,spin:-40,side:kr(s.curve)*.7};if(s.isBlock){const y=pn.reset;return{kind:"reset",target:Ft(l*.8,Ot.BALL_RADIUS,r*_e(1.5,2.6,Wt(s.power/.3,0,1))),apex:_e(y.apexMin,y.apexMax,.5),spin:-25}}if(rh(e)&&s.power>.2)return Lf(r,l,s.power,e,kr(s.curve));const c=Wt(s.power,0,1),h=_e(.9,5.9,Math.pow(c,1.15)),d=Ft(l*_e(.8,1,c),Ot.BALL_RADIUS,r*h);if(h<2.1){const y=a?"dink":"drop",S=pn[y],_=(h-.9)/1.2;return{kind:y,target:d,apex:_e(S.apexMin,S.apexMax,_),spin:_e(S.spinMin,S.spinMax,.5),side:kr(s.curve)*.5}}const u=Wt((h-2.1)/(5.9-2.1),0,1),f=_e(2.4,1.25,u)*_e(1,.92,s.flick),p=Wt(s.slice??0,0,1),x=-30,g=_e(pn.drive.spinMin,pn.drive.spinMax,s.flick),m=p>.2?-_e(60,190,p):_e(x,g,Wt(u*2,0,1));return{kind:"drive",target:d,apex:f,spin:m,side:kr(s.curve)}}function Lf(s,t,e,n,i=0){const r=_e(2.4,4.6,Wt(e,0,1));return{kind:"smash",target:Ft(Wt(t,-2.648,Ct.HALF_WIDTH-.4),Ot.BALL_RADIUS,s*r),apex:0,spin:120,side:i,speed:_e(pn.smash.speedMin,pn.smash.speedMax,Wt(e,0,1))}}function $1(s){const t=Math.abs(s);return t<=ni.PERFECT?"perfect":t<=ni.GOOD?"good":t<=ni.OK?"ok":t<=ni.SHANK?"shank":"miss"}function oh(s,t,e,n){const{target:i,apex:r,spin:a}=s;let o=ni.NOISE_GOOD,l=1,c=1,h=1;switch(e){case"perfect":o=ni.NOISE_PERFECT,l=1.06,c=.86;break;case"good":o=ni.NOISE_GOOD;break;case"ok":o=ni.NOISE_OK,l=.8,c=1.18,h=.3;break;case"shank":case"miss":o=ni.NOISE_SHANK,l=.72,c=1.15,h=0;break}const d=s.drawn===!0;d&&(l=e==="perfect"?1.02:1,o=e==="perfect"?0:e==="good"?.06:e==="ok"?.15:.35,c=e==="perfect"?.92:e==="good"?1:e==="ok"?1.16:1.3,h=e==="ok"?.6:e==="shank"||e==="miss"?.4:1);const u=d?0:Wt(-n*5,-1,1)*.5,f=Math.sign(i.z)||1,p=Math.abs(i.z)*l+Ma()*o*.8,x=Ct.HALF_LENGTH-(e==="shank"||e==="miss"?.1:.25),g=e==="shank"||e==="miss"?Ct.HALF_WIDTH+.8:Ct.HALF_WIDTH-.2,m=Ft(Wt(i.x+Ma()*o+u,-g,g),i.y,f*Wt(p,.7,x)),y=(s.side??0)*Math.max(h,.5);if(s.kind==="smash"&&s.speed){const S=s.speed*(e==="perfect"?1.05:e==="ok"?.85:e==="shank"?.75:1);return Cu(t,m,S,a*h,.04,y)}return mr(t,m,r*c,a*h,.12,y)}function Df(s){switch(s){case"perfect":return"good";case"good":return"ok";default:return"shank"}}class Bm{phase="awaiting_serve";time=0;ball;player;ai;aiBrain;rules;score;config;lastHitter=null;serveBox="right";gameFirstServer;awaitingServeLanding=!1;playerPlan={idealTime:0,planned:!1};pendingShot=null;aiServeTimer=0;pointOverTimer=0;replanTimer=0;aiWhiffedThisApproach=!1;pointStartRally=0;wallAtStep=0;lastFaultText=null;lastPointWinner=null;rallyRushScore=0;onRequestFreeze=null;constructor(t){this.config=t,this.ball=Ch(),this.player=wf("player",ze.SPEED),this.aiBrain=I1(t.aiDupr),this.ai=wf("opponent",this.aiBrain.skill.moveSpeed),this.gameFirstServer=t.playerServesFirst?"player":"opponent",this.rules=z1(this.gameFirstServer),this.score=X1(this.gameFirstServer),this.setupServe()}setupServe(){this.phase="awaiting_serve";const t=this.score.serving;if(k1(this.rules,t),this.serveBox=W1(this.score[t]),this.awaitingServeLanding=!1,this.lastHitter=null,this.pendingShot=null,this.playerPlan.planned=!1,this.aiWhiffedThisApproach=!1,this.ball=Ch(),t==="player"){const e=this.serveBox==="right"?-.8:.8;this.player.pos=Ft(e,0,Ct.HALF_LENGTH+.3),this.player.target=Ft(e,0,Ct.HALF_LENGTH+.3),this.player.intent="ready";const n=F1(this.serveBox);this.ai.pos=Ft(n.x,0,n.z),this.ai.target=Ft(n.x,0,n.z),this.ball.pos=Ft(e+.35,.85,Ct.HALF_LENGTH+.15),this.ball.prevPos={...this.ball.pos}}else{const e=U1(this.serveBox);this.ai.pos=Ft(e.x,0,e.z),this.ai.target=Ft(e.x,0,e.z);const n=this.serveBox==="right"?-1.6:1.6;this.player.pos=Ft(n,0,Ct.HALF_LENGTH-.3),this.player.target=Ft(n,0,Ct.HALF_LENGTH-.3),this.ball.pos=Ft(e.x-.35,.85,e.z+.15),this.ball.prevPos={...this.ball.pos},this.aiServeTimer=1.4+Math.random()*.8}}get playerIsServing(){return this.phase==="awaiting_serve"&&this.score.serving==="player"}handleGesture(t,e){if(this.phase==="awaiting_serve"){this.score.serving==="player"&&this.playerServe(t);return}if(this.phase!=="rally"||this.lastHitter==="player")return;const n=e!==void 0&&this.wallAtStep>0?this.time+Wt((e-this.wallAtStep)*Ah.SIM_SPEED,-.05,.08):this.time;if(this.player.mustLetBounce&&this.rules.bounceCount.player===0){this.pendingShot={intent:t,pressSimTime:n,expiresAt:this.time+1.6};return}const{quality:i,delta:r}=this.gradePress(n);if(i==="miss"){se.emit("whiff",{late:!0});return}if(sh(this.player,this.ball))this.executePlayerShot(t,i,r);else{const a=this.playerPlan.planned?this.playerPlan.idealTime:this.time+.6;this.pendingShot={intent:t,pressSimTime:n,expiresAt:Math.max(a+.35,this.time+ni.SHANK+.25)}}}gradePress(t){if(!this.playerPlan.planned)return{quality:"good",delta:0};const e=t-this.playerPlan.idealTime;return e<-.19?{quality:"ok",delta:0}:{quality:$1(e),delta:e}}serveTarget(t){const e=this.serveBox==="right"?1:-1;if(t.worldTarget){const[a,o]=e===1?[.35,2.7]:[-2.7,-.35];return Ft(Wt(t.worldTarget.x,a,o),Ot.BALL_RADIUS,-Wt(Math.abs(t.worldTarget.z),Ct.KITCHEN_DEPTH+.5,Ct.HALF_LENGTH-.35))}const n=Wt(t.aimX,-1,1),i=e*Wt(1.4+n*e*1.2,.35,2.7),r=t.isTap?5:3.4+Wt(t.power,0,1)*2.5;return Ft(i,Ot.BALL_RADIUS,-r)}playerServe(t){const e=this.serveTarget(t),n=Wt(t.arc??0,0,1),i=Wt(t.slice??0,0,1),r=t.isTap?2.3:Wt(2-t.power*.4+n*2.4,1.6,4.4),a=i>.2?-_e(40,150,i):t.flick*pn.serve.spinMax,o=Wt(t.curve??0,-1,1)*130,l=Ft(this.player.pos.x,.75,this.player.pos.z),c=oh({kind:"serve",target:e,apex:r,spin:a,side:o,drawn:t.worldTarget!==void 0},l,"good",0);er(this.ball,l,c.velocity,c.spin),this.startRallyAfterServe("player")}aiServe(){const t=Ft(this.ai.pos.x,.75,this.ai.pos.z),e=N1(this.aiBrain,t,this.serveBox);er(this.ball,t,e.velocity,e.spin),this.startRallyAfterServe("opponent")}startRallyAfterServe(t){H1(this.rules),this.phase="rally",this.lastHitter=t,this.awaitingServeLanding=!0,this.pointStartRally=0,se.emit("serve",{side:t}),se.emit("hit",{side:t,shot:"serve",speed:Math.hypot(this.ball.vel.x,this.ball.vel.y,this.ball.vel.z),pos:{...this.ball.pos}});const e=fn(t);this.planFor(e,!0);const n=t==="player"?this.player:this.ai;n.controlMode==="auto"&&ih(n,"serve",this.ball.pos.x)}executePlayerShot(t,e,n){const i=Ft(this.ball.pos.x,Wt(this.ball.pos.y,.2,2.3),this.ball.pos.z),a=Math.hypot(this.ball.pos.x-this.player.pos.x,this.ball.pos.z-this.player.pos.z)>ze.STRIKE_RADIUS;a&&(this.player.lungeTimer=ze.LUNGE_RECOVERY),a&&(e=Df(e)),this.player.speed>3&&(e=Df(e));const o=this.rules.bounceCount.player===0,l=Pf(this.rules,"player",this.player.pos.x,this.player.pos.z);if(l.fault){this.endPoint("opponent",l.reason);return}const c=Rf(this.rules,"player");if(c.fault){this.endPoint("opponent",c.reason);return}o&&If(this.rules,"player");const h=Math.abs(this.ai.pos.z)<3.2,d=ah(t,"player",i,h),u=oh(d,i,e,n);er(this.ball,i,u.velocity,u.spin),this.lastHitter="player",this.pendingShot=null,this.playerPlan.planned=!1,this.pointStartRally++,se.emit("hit",{side:"player",shot:d.kind,speed:Math.hypot(u.velocity.x,u.velocity.y,u.velocity.z),timing:e,timingDelta:n,pos:{...i}}),e==="perfect"&&this.onRequestFreeze?.(.05),d.kind==="smash"&&this.onRequestFreeze?.(.05),this.player.controlMode==="auto"?ih(this.player,d.kind,d.target.x):this.player.strikePoint=null,this.planFor("opponent",!1)}executeAiShot(){const t=Ft(this.ball.pos.x,Wt(this.ball.pos.y,.2,2.3),this.ball.pos.z),n=Math.hypot(this.ball.pos.x-this.ai.pos.x,this.ball.pos.z-this.ai.pos.z)>ze.STRIKE_RADIUS;n&&(this.ai.lungeTimer=ze.LUNGE_RECOVERY);const i=Pf(this.rules,"opponent",this.ai.pos.x,this.ai.pos.z);if(i.fault){this.endPoint("player",i.reason);return}const r=this.rules.bounceCount.opponent===0,a=Rf(this.rules,"opponent");if(a.fault){this.endPoint("player",a.reason);return}r&&If(this.rules,"opponent");const o=L1(this.aiBrain,{contact:t,playerPos:{...this.player.pos},isThirdShot:this.rules.rallyCount===2,playerAtKitchen:Math.abs(this.player.pos.z)<3.2,aiAtKitchen:Math.abs(this.ai.pos.z)<3.2,moveSpeed:this.ai.speed,isReaching:n});if(o.whiffed){const l=Ft(t.x+(Math.random()-.5)*4,Ot.BALL_RADIUS,Ti("player")*(1+Math.random()*3)),c=oh({kind:"reset",target:l,apex:1.2+Math.random(),spin:0},t,"shank",.2);er(this.ball,t,c.velocity,c.spin)}else er(this.ball,t,o.shot.velocity,o.shot.spin);this.lastHitter="opponent",this.pointStartRally++,se.emit("hit",{side:"opponent",shot:o.kind,speed:Math.hypot(this.ball.vel.x,this.ball.vel.y,this.ball.vel.z),pos:{...t}}),ih(this.ai,o.kind,o.whiffed?0:o.shot.landing.x),this.planFor("player",!1)}planFor(t,e){const n=t==="player"?this.player:this.ai,i=e||this.rules.rallyCount<=1&&!this.rules.doubleBounceCleared[t],r=t==="player"?ze.START_DELAY:this.aiBrain.skill.reactionDelay;O1(n,this.ball,r,i),t==="player"?n.strikePoint?(this.playerPlan.idealTime=this.time+n.strikeTime,this.playerPlan.planned=!0):this.playerPlan.planned=!1:this.aiWhiffedThisApproach=!1}update(t){switch(this.time+=t,this.phase){case"awaiting_serve":this.updateAwaitingServe(t);break;case"rally":this.updateRally(t);break;case"point_over":this.pointOverTimer-=t,this.stepDeadBall(t),this.stepMovers(t),this.pointOverTimer<=0&&this.advanceAfterPoint();break;case"game_over":case"match_over":this.stepDeadBall(t),this.stepMovers(t);break}this.wallAtStep=typeof performance<"u"?performance.now()/1e3:0}stepDeadBall(t){this.ball.phase==="held"||this.ball.phase==="dead"||(Sa(this.ball,t),this.ball.pendingBounce=null,this.ball.pendingNet=null)}updateAwaitingServe(t){this.stepMovers(t),this.score.serving==="opponent"&&(this.aiServeTimer-=t,this.aiServeTimer<=0&&this.aiServe())}updateRally(t){const e=this.ball.pos.z;Sa(this.ball,t),this.stepMovers(t);const n=this.ball.pos.z;if(e*n<0&&this.lastHitter&&!this.ball.pendingNet){const i=e/(e-n),r=this.ball.prevPos.x+(this.ball.pos.x-this.ball.prevPos.x)*i;Math.abs(r)>Ct.NET_HALF_SPAN&&se.emit("atp",{side:this.lastHitter})}if(this.rules.momentumWatch){const i=this.rules.momentumWatch.side==="player"?this.player:this.ai,r=V1(this.rules,t,i.pos.x,i.pos.z);if(r.fault){this.endPoint(fn(r.against),r.reason);return}}if(this.ball.pendingNet){const i=this.ball.pendingNet;if(this.ball.pendingNet=null,se.emit("net",{cord:i.cord,x:i.x}),i.cord)this.replanAfterDeflection();else{this.endPoint(fn(this.lastHitter),Tn.NET);return}}if(this.ball.pendingBounce){const i=this.ball.pendingBounce;if(this.ball.pendingBounce=null,se.emit("bounce",{x:i.x,z:i.z,onLine:i.onLine,inCourt:i.inCourt,side:i.side}),this.awaitingServeLanding){this.awaitingServeLanding=!1;const r=G1(i.x,i.z,this.lastHitter,this.serveBox);if(r.fault){this.endPoint(fn(this.lastHitter),r.reason);return}Cf(this.rules,i.x,i.z,i.side)}else{const r=this.lastHitter,a=fn(r);if(i.side===r&&this.rules.bounceCount[a]===0){this.endPoint(a,Tn.OUT);return}if(i.side===r){this.endPoint(r,Tn.NOT_RETURNED);return}if(!i.inCourt){this.rules.bounceCount[a]===0?this.endPoint(a,Tn.OUT):this.endPoint(r,Tn.NOT_RETURNED);return}if(Cf(this.rules,i.x,i.z,i.side),this.rules.bounceCount[i.side]>=2){this.endPoint(fn(i.side),Tn.NOT_RETURNED);return}if(i.side===a){const o=a==="player"?this.player:this.ai;o.mustLetBounce=!1}}}if(this.ball.phase==="dead"||this.ball.phase==="rolling"){const i=this.ball.pos.z>0?"player":"opponent";this.endPoint(fn(i),Tn.NOT_RETURNED);return}if(this.pendingShot){if(this.time>this.pendingShot.expiresAt)this.pendingShot=null,se.emit("whiff",{late:!1});else if(sh(this.player,this.ball)&&this.lastHitter!=="player"&&!(this.player.mustLetBounce&&this.rules.bounceCount.player===0)){const i=this.pendingShot;this.pendingShot=null;const{quality:r,delta:a}=this.gradePress(i.pressSimTime);this.executePlayerShot(i.intent,r==="miss"?"shank":r,a);return}}if(this.lastHitter==="player"&&!this.aiWhiffedThisApproach&&sh(this.ai,this.ball)&&!(this.ai.mustLetBounce&&this.rules.bounceCount.opponent===0)){this.executeAiShot();return}if(this.replanTimer-=t,this.replanTimer<=0){this.replanTimer=.15;const i=this.lastHitter?fn(this.lastHitter):null;if(i==="player"&&this.player.intent==="intercept"){if(Rh(this.player,this.ball),this.player.strikePoint){const r=this.time+this.player.strikeTime,a=this.playerPlan.idealTime-this.time;(!this.playerPlan.planned||Math.abs(r-this.playerPlan.idealTime)>.12&&a>.3)&&(this.playerPlan.idealTime=r),this.playerPlan.planned=!0}}else i==="opponent"&&this.ai.intent==="intercept"&&Rh(this.ai,this.ball)}}replanAfterDeflection(){this.lastHitter&&this.planFor(fn(this.lastHitter),!1)}stepMovers(t){Tf(this.player,t,this.rules.kitchenBounce.player),Tf(this.ai,t,this.rules.kitchenBounce.opponent)}endPoint(t,e){if(this.phase!=="rally"&&this.phase!=="awaiting_serve")return;this.phase="point_over",this.pointOverTimer=Ah.POINT_DOWNTIME,this.lastFaultText=e,this.lastPointWinner=t;const n=this.pointStartRally;if(this.config.rallyRush){this.rallyRushScore=Math.max(this.rallyRushScore,n),bf(this.aiBrain,t==="player"),se.emit("pointWon",{winner:t,wasSideOut:!1,rallyLength:n}),se.emit("fault",{against:fn(t),reason:e});return}const{sideOut:i}=Y1(this.score,t);bf(this.aiBrain,t==="player"),se.emit("pointWon",{winner:t,wasSideOut:i,rallyLength:n}),se.emit("fault",{against:fn(t),reason:e})}advanceAfterPoint(){if(this.config.rallyRush){this.score.serving="player",this.setupServe();return}const t=q1(this.score);if(t){this.score.games[t==="player"?0:1]++;const e=K1(this.score);if(e){this.phase="match_over",se.emit("matchWon",{winner:e});return}this.phase="game_over",se.emit("gameWon",{winner:t});return}this.setupServe()}startNextGame(){this.gameFirstServer=fn(this.gameFirstServer),this.score.player=0,this.score.opponent=0,this.score.serving=this.gameFirstServer,this.setupServe()}playerRenderPos(t){return Af(this.player,t)}aiRenderPos(t){return Af(this.ai,t)}getPlayerTiming(){return this.phase!=="rally"||this.lastHitter!=="opponent"||!this.playerPlan.planned||!this.player.strikePoint?null:{point:this.player.strikePoint,remaining:this.playerPlan.idealTime-this.time}}previewTarget(t){const e=this.previewDecision(t);return e?e.target:null}previewKind(t){if(this.phase==="awaiting_serve")return this.score.serving==="player"?"serve":null;const e=this.previewDecision(t);return e?e.kind:null}previewDecision(t){if(this.phase==="awaiting_serve")return this.score.serving==="player"?{kind:"serve",target:this.serveTarget(t)}:null;if(this.phase!=="rally"||this.lastHitter!=="opponent")return null;const e=this.player.strikePoint??Ft(this.player.pos.x,.8,this.player.pos.z),n=Math.abs(this.ai.pos.z)<3.2,i=ah(t,"player",e,n);return{kind:i.kind,target:i.target}}previewFlight(t){let e,n;if(this.phase==="awaiting_serve"&&this.score.serving==="player"){n=Ft(this.player.pos.x,.75,this.player.pos.z);const a=Wt(t.arc??0,0,1),o=Wt(t.slice??0,0,1);e={kind:"serve",target:this.serveTarget(t),apex:Wt(2-Wt(t.power,0,1)*.4+a*2.4,1.6,4.4),spin:o>.2?-_e(40,150,o):t.flick*pn.serve.spinMax,side:Wt(t.curve??0,-1,1)*130}}else if(this.phase==="rally"&&this.lastHitter==="opponent"){n=this.player.strikePoint?Ft(this.player.strikePoint.x,Wt(this.player.strikePoint.y,.2,2.3),this.player.strikePoint.z):Ft(this.player.pos.x,.8,this.player.pos.z);const a=Math.abs(this.ai.pos.z)<3.2;e=ah(t,"player",n,a)}else return null;const i=e.side??0;return(e.kind==="smash"&&e.speed?Cu(n,e.target,e.speed,e.spin,.04,i):mr(n,e.target,e.apex,e.spin,.12,i)).samples.map(a=>a.pos)}}const Nf="pickle-smash-3d.v1";function Uf(){return{version:1,xp:0,level:1,ladderProgress:-1,achievements:[],bests:{longestRally:0,mostPerfectsInMatch:0,rallyRush:0},daily:{lastCompletedDate:"",streak:0},totals:{matchesWon:0,pointsWon:0,perfects:0,dinkRalliesWon:0},settings:{avatar:0,sfxMuted:!1,musicMuted:!1}}}function Ph(s){return Math.round(100*Math.pow(1.35,s-1))}const Ih=[{id:"first-point",title:"First Blood",desc:"Win your first point",xp:25},{id:"first-match",title:"On the Board",desc:"Win your first match",xp:100},{id:"perfect-1",title:"Sweet Spot",desc:"Hit a PERFECT shot",xp:25},{id:"perfect-streak-5",title:"Sniper",desc:"5 PERFECT hits in a row",xp:120},{id:"rally-15",title:"Grinder",desc:"Survive a 15-hit rally",xp:60},{id:"rally-30",title:"Marathon",desc:"Survive a 30-hit rally",xp:150},{id:"ace",title:"Ace!",desc:"Win a point directly on serve",xp:80},{id:"smash-winner",title:"Boom",desc:"Win a point with a smash",xp:40},{id:"shutout",title:"Pickled!",desc:"Win a game 11-0",xp:200},{id:"comeback",title:"Comeback Kid",desc:"Win a game after trailing by 5",xp:150},{id:"beat-newbie",title:"Warming Up",desc:"Beat Pat (DUPR 2.4)",xp:50},{id:"beat-pro",title:"Giant Slayer",desc:"Beat Kai, the 6.5 pro",xp:500},{id:"dink-master",title:"Kitchen Master",desc:"Win 10 kitchen dink exchanges",xp:100},{id:"atp",title:"Around the Post!",desc:"Hit the legendary ATP",xp:150},{id:"level-5",title:"Regular",desc:"Reach level 5",xp:100},{id:"level-10",title:"Club Legend",desc:"Reach level 10",xp:250},{id:"streak-3",title:"Habit Forming",desc:"3-day daily challenge streak",xp:100},{id:"streak-7",title:"Dedicated",desc:"7-day daily challenge streak",xp:250},{id:"rush-15",title:"Rushing",desc:"Rally Rush score of 15",xp:80},{id:"rush-30",title:"Unstoppable",desc:"Rally Rush score of 30",xp:200}],Ff=[{id:"d-perfects-10",text:"Hit 10 PERFECT shots today",check:s=>s.perfects>=10},{id:"d-points-15",text:"Win 15 points today",check:s=>s.pointsWon>=15},{id:"d-match",text:"Win a match today",check:s=>s.matchesWon>=1},{id:"d-rally-12",text:"Play a 12-hit rally",check:s=>s.longestRally>=12},{id:"d-rush-10",text:"Score 10 in Rally Rush",check:s=>s.rallyRush>=10},{id:"d-dinks-8",text:"Land 8 dinks today",check:s=>s.dinksLanded>=8}];function Io(){const s=new Date;return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function zm(s){let t=0;for(let e=0;e<s.length;e++)t=t*31+s.charCodeAt(e)>>>0;return Ff[t%Ff.length]}class Z1{save;day={perfects:0,pointsWon:0,matchesWon:0,longestRally:0,rallyRush:0,dinksLanded:0};combo=0;perfectStreak=0;perfectsThisMatch=0;dinkExchangeHits=0;lastShotWasServe=!1;lastShotWasSmash=!1;maxDeficit=0;dailyDone=!1;constructor(){this.save=this.load(),this.dailyDone=this.save.daily.lastCompletedDate===Io(),this.wireEvents()}load(){try{const t=localStorage.getItem(Nf);if(t){const e=JSON.parse(t);if(e.version===1)return{...Uf(),...e}}}catch{}return Uf()}persist(){try{localStorage.setItem(Nf,JSON.stringify(this.save))}catch{}}addXp(t,e){for(this.save.xp+=t,se.emit("xp",{amount:t,reason:e});this.save.xp>=Ph(this.save.level);)this.save.xp-=Ph(this.save.level),this.save.level++,se.emit("levelUp",{level:this.save.level}),this.save.level===5&&this.unlock("level-5"),this.save.level===10&&this.unlock("level-10");this.persist()}unlock(t){if(this.save.achievements.includes(t))return;const e=Ih.find(n=>n.id===t);e&&(this.save.achievements.push(t),se.emit("achievement",{id:t,title:e.title}),this.save.xp+=e.xp,this.persist())}checkDaily(){if(this.dailyDone||!zm(Io()).check(this.day))return;this.dailyDone=!0;const e=Io(),n=(()=>{const i=new Date;return i.setDate(i.getDate()-1),`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})();this.save.daily.streak=this.save.daily.lastCompletedDate===n?this.save.daily.streak+1:1,this.save.daily.lastCompletedDate=e,this.save.daily.streak>=3&&this.unlock("streak-3"),this.save.daily.streak>=7&&this.unlock("streak-7"),this.addXp(75,"Daily challenge"),this.persist()}startMatch(){this.perfectsThisMatch=0,this.combo=0,this.perfectStreak=0,this.maxDeficit=0}noteScore(t,e){this.maxDeficit=Math.max(this.maxDeficit,e-t)}get comebackArmed(){return this.maxDeficit>=5}wireEvents(){se.on("hit",t=>{if(t.side!=="player"){this.dinkExchangeHits=t.shot==="dink"?this.dinkExchangeHits+1:0;return}this.lastShotWasServe=t.shot==="serve",this.lastShotWasSmash=t.shot==="smash",t.shot==="dink"?(this.dinkExchangeHits++,this.day.dinksLanded++):t.shot!=="serve"&&(this.dinkExchangeHits=0),this.addXp(1,"Rally hit"),t.timing==="perfect"?(this.day.perfects++,this.save.totals.perfects++,this.perfectsThisMatch++,this.perfectStreak++,this.combo++,this.addXp(5,"PERFECT"),this.unlock("perfect-1"),this.perfectStreak>=5&&this.unlock("perfect-streak-5")):t.timing==="good"?(this.combo++,this.perfectStreak=0):(this.combo=0,this.perfectStreak=0),se.emit("comboChanged",{count:this.combo}),this.checkDaily()}),se.on("pointWon",t=>{this.day.longestRally=Math.max(this.day.longestRally,t.rallyLength),this.save.bests.longestRally=Math.max(this.save.bests.longestRally,t.rallyLength),t.rallyLength>=15&&this.unlock("rally-15"),t.rallyLength>=30&&this.unlock("rally-30"),t.winner==="player"?(this.day.pointsWon++,this.save.totals.pointsWon++,this.addXp(10,"Point won"),this.unlock("first-point"),this.lastShotWasServe&&t.rallyLength<=1&&this.unlock("ace"),this.lastShotWasSmash&&(this.unlock("smash-winner"),se.emit("smashWinner",{side:"player"})),this.dinkExchangeHits>=4&&(this.save.totals.dinkRalliesWon++,this.save.totals.dinkRalliesWon>=10&&this.unlock("dink-master"))):(this.combo=0,this.perfectStreak=0,se.emit("comboChanged",{count:0})),this.dinkExchangeHits=0,this.checkDaily(),this.persist()}),se.on("atp",t=>{t.side==="player"&&this.unlock("atp")}),se.on("gameWon",t=>{t.winner==="player"&&(this.addXp(50,"Game won"),this.comebackArmed&&this.unlock("comeback"))}),se.on("matchWon",t=>{t.winner==="player"&&(this.day.matchesWon++,this.save.totals.matchesWon++,this.save.bests.mostPerfectsInMatch=Math.max(this.save.bests.mostPerfectsInMatch,this.perfectsThisMatch),this.addXp(150,"Match won"),this.unlock("first-match")),this.checkDaily(),this.persist()})}ladderWin(t){t>this.save.ladderProgress&&(this.save.ladderProgress=t,t===0&&this.unlock("beat-newbie"),t===5&&this.unlock("beat-pro"),this.persist())}noteRallyRush(t){this.day.rallyRush=Math.max(this.day.rallyRush,t),t>this.save.bests.rallyRush&&(this.save.bests.rallyRush=t),t>=15&&this.unlock("rush-15"),t>=30&&this.unlock("rush-30"),this.checkDaily(),this.persist()}}const J1=`
.hud { position: absolute; inset: 0; pointer-events: none; overflow: hidden;
  font-family: 'Trebuchet MS','Segoe UI',system-ui,sans-serif; }
.hud * { pointer-events: none; }

.score-card { position: absolute; top: calc(10px + env(safe-area-inset-top)); left: 50%;
  transform: translateX(-50%); background: rgba(255,255,255,0.92); border-radius: 16px;
  padding: 6px 18px; display: flex; align-items: center; gap: 14px;
  box-shadow: 0 4px 14px rgba(0,40,80,0.18); }
.score-num { font-size: 26px; font-weight: 800; color: #1a3a5c; min-width: 30px; text-align: center; }
.score-name { font-size: 11px; font-weight: 700; color: #7a8ca0; text-transform: uppercase; letter-spacing: 0.06em; }
.score-side { display: flex; flex-direction: column; align-items: center; position: relative; }
.serve-dot { position: absolute; top: -4px; right: -10px; width: 8px; height: 8px; border-radius: 50%;
  background: #ffd166; box-shadow: 0 0 6px #ffd166; opacity: 0; transition: opacity 0.2s; }
.serve-dot.on { opacity: 1; }
.score-games { font-size: 10px; color: #9fb0c2; font-weight: 700; }
.score-vs { font-size: 12px; color: #b7c4d1; font-weight: 700; }

.banner { position: absolute; top: 24%; left: 50%; transform: translateX(-50%) scale(0.6);
  font-size: clamp(26px, 7vw, 48px); font-weight: 900; letter-spacing: 0.04em;
  color: #fff; -webkit-text-stroke: 2px rgba(20,50,90,0.35);
  text-shadow: 0 4px 16px rgba(0,30,70,0.35); opacity: 0; white-space: nowrap;
  transition: transform 0.18s cubic-bezier(.2,1.6,.4,1), opacity 0.18s; }
.banner.show { opacity: 1; transform: translateX(-50%) scale(1); }
.banner.gold { color: #ffd166; -webkit-text-stroke: 2px rgba(120,70,0,0.4); }
.banner.red { color: #ff6b6b; }

.popup { position: absolute; font-weight: 900; color: #ffd166; opacity: 0;
  -webkit-text-stroke: 1.5px rgba(120,70,0,0.4); text-shadow: 0 3px 10px rgba(0,30,70,0.3);
  transform: rotate(-6deg) scale(0.5); font-size: clamp(20px, 5vw, 34px); white-space: nowrap; }
@keyframes popup-in {
  0% { opacity: 0; transform: rotate(-6deg) scale(0.5); }
  20% { opacity: 1; transform: rotate(-6deg) scale(1.15); }
  35% { transform: rotate(-6deg) scale(1); }
  80% { opacity: 1; }
  100% { opacity: 0; transform: rotate(-6deg) scale(1) translateY(-18px); }
}

.combo { position: absolute; right: calc(12px + env(safe-area-inset-right)); top: 30%;
  display: flex; flex-direction: column; align-items: center; opacity: 0; transition: opacity 0.25s; }
.combo.show { opacity: 1; }
.combo-num { font-size: 30px; font-weight: 900; color: #ffd166;
  -webkit-text-stroke: 1.5px rgba(120,70,0,0.4); }
.combo-label { font-size: 10px; font-weight: 800; color: #fff; letter-spacing: 0.1em;
  text-shadow: 0 2px 6px rgba(0,30,70,0.4); }

.rally { position: absolute; left: calc(12px + env(safe-area-inset-left)); top: 30%;
  font-size: 13px; font-weight: 800; color: rgba(255,255,255,0.95);
  text-shadow: 0 2px 6px rgba(0,30,70,0.4); opacity: 0; transition: opacity 0.3s; }
.rally.show { opacity: 1; }

.prompt { position: absolute; bottom: 16%; left: 50%; transform: translateX(-50%);
  font-size: clamp(15px, 4vw, 20px); font-weight: 800; color: #fff;
  background: rgba(20,60,110,0.55); border-radius: 24px; padding: 10px 22px;
  opacity: 0; transition: opacity 0.3s; animation: prompt-bob 1.6s ease-in-out infinite; }
.prompt.show { opacity: 1; }
@keyframes prompt-bob { 0%,100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-6px); } }

.fault-text { position: absolute; top: 33%; left: 50%; transform: translateX(-50%);
  font-size: clamp(13px, 3.5vw, 17px); font-weight: 700; color: rgba(255,255,255,0.92);
  background: rgba(180,60,60,0.75); border-radius: 18px; padding: 6px 16px; opacity: 0;
  transition: opacity 0.2s; white-space: nowrap; }
.fault-text.show { opacity: 1; }

.xp-float { position: absolute; font-size: 13px; font-weight: 800; color: #b6f26d;
  text-shadow: 0 2px 6px rgba(0,40,20,0.5); opacity: 0; }
@keyframes xp-rise { 0% { opacity: 0; transform: translateY(0); }
  15% { opacity: 1; } 100% { opacity: 0; transform: translateY(-42px); } }

.gesture-chip { position: fixed; transform: translate(-50%, -100%); padding: 6px 14px;
  border-radius: 14px; background: rgba(20,40,70,0.85); color: #fff; font-size: 15px;
  font-weight: 900; letter-spacing: 0.05em; white-space: nowrap; opacity: 0;
  transition: opacity 0.08s; z-index: 60; box-shadow: 0 3px 12px rgba(0,20,50,0.4); }
.gesture-chip.show { opacity: 1; }

.trail-dot { position: fixed; width: 12px; height: 12px; border-radius: 50%;
  background: rgba(255,255,255,0.85); box-shadow: 0 0 8px rgba(125,249,255,0.8);
  transform: translate(-50%,-50%); pointer-events: none; z-index: 55;
  animation: trail-fade 0.4s ease-out forwards; }
@keyframes trail-fade { 0% { opacity: 0.9; } 100% { opacity: 0; transform: translate(-50%,-50%) scale(0.3); } }

.shot-label { position: absolute; left: 50%; top: 66%; transform: translateX(-50%) scale(0.7);
  font-size: clamp(15px, 4vw, 22px); font-weight: 900; letter-spacing: 0.08em; color: #fff;
  -webkit-text-stroke: 1px rgba(20,50,90,0.4); text-shadow: 0 2px 8px rgba(0,30,70,0.4);
  opacity: 0; white-space: nowrap; }
@keyframes shot-label-in { 0% { opacity: 0; transform: translateX(-50%) scale(0.7); }
  20% { opacity: 1; transform: translateX(-50%) scale(1.05); } 35% { transform: translateX(-50%) scale(1); }
  75% { opacity: 1; } 100% { opacity: 0; transform: translateX(-50%) translateY(-14px) scale(1); } }
`;class km{root;scorePlayer;scoreAi;gamesEl;serveDotPlayer;serveDotAi;banner;prompt;faultText;combo;comboNum;rally;bannerTimer=0;faultTimer=0;gestureChip;lastTrailAt=0;constructor(t,e,n){const i=document.createElement("style");i.textContent=J1,document.head.appendChild(i),this.root=document.createElement("div"),this.root.className="hud",this.root.innerHTML=`
      <div class="score-card">
        <div class="score-side">
          <div class="serve-dot" data-el="dotP"></div>
          <div class="score-num" data-el="scoreP">0</div>
          <div class="score-name">${e}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center">
          <div class="score-vs">VS</div>
          <div class="score-games" data-el="games">0 - 0</div>
        </div>
        <div class="score-side">
          <div class="serve-dot" data-el="dotA"></div>
          <div class="score-num" data-el="scoreA">0</div>
          <div class="score-name">${n}</div>
        </div>
      </div>
      <div class="banner" data-el="banner"></div>
      <div class="fault-text" data-el="fault"></div>
      <div class="prompt" data-el="prompt"></div>
      <div class="combo" data-el="combo">
        <div class="combo-num" data-el="comboNum">0</div>
        <div class="combo-label">COMBO</div>
      </div>
      <div class="rally" data-el="rally"></div>
      <div class="gesture-chip" data-el="chip"></div>
    `,t.appendChild(this.root);const r=a=>this.root.querySelector(`[data-el="${a}"]`);this.gestureChip=r("chip"),this.scorePlayer=r("scoreP"),this.scoreAi=r("scoreA"),this.gamesEl=r("games"),this.serveDotPlayer=r("dotP"),this.serveDotAi=r("dotA"),this.banner=r("banner"),this.prompt=r("prompt"),this.faultText=r("fault"),this.combo=r("combo"),this.comboNum=r("comboNum"),this.rally=r("rally")}setScore(t,e,n,i){this.scorePlayer.textContent=String(t),this.scoreAi.textContent=String(e),this.gamesEl.textContent=`${i[0]} - ${i[1]}`,this.serveDotPlayer.classList.toggle("on",n==="player"),this.serveDotAi.classList.toggle("on",n==="opponent")}showBanner(t,e="default",n=1.2){this.banner.textContent=t,this.banner.className=`banner show${e==="gold"?" gold":e==="red"?" red":""}`,this.bannerTimer=n}showFault(t,e=1.6){this.faultText.textContent=t,this.faultText.classList.add("show"),this.faultTimer=e}showPrompt(t){this.prompt.textContent=t,this.prompt.classList.add("show")}hidePrompt(){this.prompt.classList.remove("show")}setCombo(t){this.comboNum.textContent=String(t),this.combo.classList.toggle("show",t>=2)}setRally(t){this.rally.textContent=`RALLY ${t}`,this.rally.classList.toggle("show",t>=6)}timingPopup(t){t==="perfect"?this.spawnPopup("PERFECT!",50,58,"#ffd166"):t==="good"&&this.spawnPopup("NICE!",50,58,"#b6f26d")}spawnPopup(t,e,n,i){const r=document.createElement("div");r.className="popup",r.textContent=t,r.style.left=`${e}%`,r.style.top=`${n}%`,r.style.transform="translateX(-50%)",i&&(r.style.color=i),r.style.animation="popup-in 0.9s ease-out forwards",this.root.appendChild(r),setTimeout(()=>r.remove(),950)}showGestureChip(t,e,n){this.gestureChip.textContent=t,this.gestureChip.style.left=`${e}px`,this.gestureChip.style.top=`${n-46}px`,this.gestureChip.classList.add("show")}hideGestureChip(){this.gestureChip.classList.remove("show")}spawnTrailDot(t,e){const n=performance.now();if(n-this.lastTrailAt<24)return;this.lastTrailAt=n;const i=document.createElement("div");i.className="trail-dot",i.style.left=`${t}px`,i.style.top=`${e}px`,this.root.appendChild(i),setTimeout(()=>i.remove(),420)}shotLabel(t,e){const n=document.createElement("div");n.className="shot-label",n.textContent=t,n.style.color=e,n.style.animation="shot-label-in 0.8s ease-out forwards",this.root.appendChild(n),setTimeout(()=>n.remove(),850)}xpFloat(t){const e=document.createElement("div");e.className="xp-float",e.textContent=t,e.style.left=`${46+Math.random()*8}%`,e.style.top="62%",e.style.animation="xp-rise 1.1s ease-out forwards",this.root.appendChild(e),setTimeout(()=>e.remove(),1150)}update(t){this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&this.banner.classList.remove("show")),this.faultTimer>0&&(this.faultTimer-=t,this.faultTimer<=0&&this.faultText.classList.remove("show"))}destroy(){this.root.remove()}}const Q1=`
.screen { position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 14px;
  background: linear-gradient(180deg, rgba(28,78,130,0.28), rgba(10,40,80,0.55));
  font-family: 'Trebuchet MS','Segoe UI',system-ui,sans-serif;
  padding: max(16px, env(safe-area-inset-top)) 16px max(16px, env(safe-area-inset-bottom));
  overflow-y: auto; }
.title-logo { font-size: clamp(38px, 11vw, 72px); font-weight: 900; color: #fff;
  letter-spacing: 0.02em; -webkit-text-stroke: 2.5px rgba(20,50,90,0.35);
  text-shadow: 0 6px 22px rgba(0,30,70,0.45); transform: rotate(-2deg); text-align: center; line-height: 1; }
.title-logo .accent { color: #ffd166; }
.subtitle { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.9);
  text-shadow: 0 2px 8px rgba(0,30,70,0.4); }
.btn { pointer-events: auto; cursor: pointer; border: none; border-radius: 18px;
  padding: 14px 34px; font-size: 19px; font-weight: 800; color: #1a3a5c;
  background: #ffd166; box-shadow: 0 5px 0 #d9a93f, 0 8px 20px rgba(0,30,70,0.3);
  font-family: inherit; transition: transform 0.08s; touch-action: manipulation; }
.btn:active { transform: translateY(3px); box-shadow: 0 2px 0 #d9a93f; }
.btn.secondary { background: rgba(255,255,255,0.92); box-shadow: 0 5px 0 #b9c6d4, 0 8px 20px rgba(0,30,70,0.25); font-size: 15px; padding: 10px 24px; }
.level-chip { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.92);
  border-radius: 14px; padding: 6px 14px; font-weight: 800; color: #1a3a5c; font-size: 13px; }
.xp-bar { width: 90px; height: 8px; border-radius: 4px; background: #dfe7ee; overflow: hidden; }
.xp-fill { height: 100%; background: linear-gradient(90deg, #74c69d, #b6f26d); border-radius: 4px; }
.daily-chip { background: rgba(255,255,255,0.92); border-radius: 14px; padding: 8px 16px;
  font-size: 13px; font-weight: 700; color: #1a3a5c; display: flex; align-items: center; gap: 8px; }
.daily-chip .done { color: #2d9d5c; }
.streak { color: #ee6c4d; font-weight: 900; }

.ladder { display: flex; flex-direction: column; gap: 8px; width: min(400px, 92vw); }
.rung { pointer-events: auto; cursor: pointer; display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,0.94); border: none; border-radius: 16px; padding: 10px 16px;
  font-family: inherit; text-align: left; transition: transform 0.08s;
  box-shadow: 0 3px 10px rgba(0,30,70,0.2); touch-action: manipulation; }
.rung:active { transform: scale(0.98); }
.rung.locked { opacity: 0.45; filter: grayscale(0.7); }
.rung-avatar { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 20px; }
.rung-info { flex: 1; min-width: 0; }
.rung-name { font-weight: 800; color: #1a3a5c; font-size: 16px; }
.rung-blurb { font-size: 11px; color: #7a8ca0; }
.rung-dupr { font-weight: 900; color: #2a7fc1; font-size: 15px; flex-shrink: 0; }
.rung-trophy { font-size: 18px; }

.end-card { background: rgba(255,255,255,0.95); border-radius: 22px; padding: 22px 30px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  box-shadow: 0 10px 40px rgba(0,30,70,0.4); max-width: 88vw; }
.end-title { font-size: clamp(26px, 7vw, 40px); font-weight: 900; color: #1a3a5c; }
.end-title.win { color: #2d9d5c; }
.end-title.lose { color: #c0504d; }
.end-sub { font-size: 15px; font-weight: 700; color: #7a8ca0; }
.end-stats { display: flex; gap: 18px; margin: 6px 0; }
.end-stat { display: flex; flex-direction: column; align-items: center; }
.end-stat-num { font-size: 22px; font-weight: 900; color: #2a7fc1; }
.end-stat-label { font-size: 10px; font-weight: 700; color: #9fb0c2; text-transform: uppercase; }

.toast { position: absolute; top: calc(64px + env(safe-area-inset-top)); left: 50%;
  transform: translateX(-50%) translateY(-18px); background: rgba(255,255,255,0.96);
  border-radius: 16px; padding: 10px 20px; display: flex; align-items: center; gap: 10px;
  box-shadow: 0 8px 26px rgba(0,30,70,0.35); opacity: 0; transition: all 0.3s cubic-bezier(.2,1.4,.4,1);
  z-index: 50; }
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast-icon { font-size: 22px; }
.toast-title { font-weight: 900; color: #1a3a5c; font-size: 14px; }
.toast-sub { font-size: 11px; color: #7a8ca0; font-weight: 700; }
.mode-row { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.hidden { display: none !important; }
`;class j1{container;current=null;onChoice=null;constructor(t){const e=document.createElement("style");e.textContent=Q1,document.head.appendChild(e),this.container=t}show(t){this.clear(),this.current=t,this.container.appendChild(t)}clear(){this.current?.remove(),this.current=null}title(t){const e=t.save,n=Ph(e.level),i=Math.min(100,e.xp/n*100),r=zm(Io()),a=document.createElement("div");a.className="screen",a.innerHTML=`
      <div class="title-logo">PICKLE<br><span class="accent">SMASH</span> 3D</div>
      <div class="subtitle">Swipe to smash. Rule the kitchen.</div>
      <div class="level-chip">LV ${e.level}
        <div class="xp-bar"><div class="xp-fill" style="width:${i}%"></div></div>
      </div>
      <div class="daily-chip">
        <span>📅 ${r.text}</span>
        ${t.dailyDone?'<span class="done">✓ DONE</span>':""}
        ${e.daily.streak>0?`<span class="streak">🔥${e.daily.streak}</span>`:""}
      </div>
      <button class="btn" data-act="play">PLAY</button>
      <div class="mode-row">
        <button class="btn secondary" data-act="rush">⚡ RALLY RUSH${e.bests.rallyRush>0?` · BEST ${e.bests.rallyRush}`:""}</button>
        <button class="btn secondary" data-act="trophies">🏆 ${e.achievements.length}/${Ih.length}</button>
      </div>
    `,a.querySelector('[data-act="play"]').addEventListener("click",()=>this.ladder(t)),a.querySelector('[data-act="rush"]').addEventListener("click",()=>this.onChoice?.({action:"rallyRush"})),a.querySelector('[data-act="trophies"]').addEventListener("click",()=>this.trophies(t)),this.show(a)}ladder(t){const e=t.save.ladderProgress+1,n=document.createElement("div");n.className="screen";const i=La.map((r,a)=>{const o=a>e,l=a<=t.save.ladderProgress;return`
        <button class="rung${o?" locked":""}" data-idx="${a}" ${o?"disabled":""}>
          <div class="rung-avatar" style="background:#${r.color.toString(16).padStart(6,"0")}33">${o?"🔒":"🧑"}</div>
          <div class="rung-info">
            <div class="rung-name">${r.name} · ${r.tierName}</div>
            <div class="rung-blurb">${r.blurb}</div>
          </div>
          <div class="rung-dupr">${r.dupr.toFixed(1)}</div>
          ${l?'<div class="rung-trophy">🏆</div>':""}
        </button>`}).join("");n.innerHTML=`
      <div class="subtitle" style="font-size:20px;font-weight:900">ROAD TO PRO</div>
      <div class="subtitle">Beat each opponent to unlock the next</div>
      <div class="ladder">${i}</div>
      <button class="btn secondary" data-act="back">← BACK</button>
    `,n.querySelectorAll(".rung:not(.locked)").forEach(r=>{r.addEventListener("click",()=>{const a=Number(r.dataset.idx);this.onChoice?.({action:"match",opponentIndex:a})})}),n.querySelector('[data-act="back"]').addEventListener("click",()=>this.title(t)),this.show(n)}trophies(t){const e=document.createElement("div");e.className="screen";const n=Ih.map(i=>{const r=t.save.achievements.includes(i.id);return`
        <div class="rung${r?"":" locked"}" style="cursor:default">
          <div class="rung-avatar">${r?"🏆":"🔒"}</div>
          <div class="rung-info">
            <div class="rung-name">${i.title}</div>
            <div class="rung-blurb">${i.desc}</div>
          </div>
          <div class="rung-dupr">+${i.xp}</div>
        </div>`}).join("");e.innerHTML=`
      <div class="subtitle" style="font-size:20px;font-weight:900">TROPHIES</div>
      <div class="ladder" style="max-height:60vh;overflow-y:auto">${n}</div>
      <button class="btn secondary" data-act="back">← BACK</button>
    `,e.querySelector('[data-act="back"]').addEventListener("click",()=>this.title(t)),this.show(e)}gameEnd(t,e,n){const i=document.createElement("div");i.className="screen",i.innerHTML=`
      <div class="end-card">
        <div class="end-title ${t?"win":"lose"}">${t?"GAME WON!":"GAME LOST"}</div>
        <div class="end-sub">${e} · Games ${n}</div>
        <button class="btn" data-act="next">NEXT GAME</button>
      </div>
    `,i.querySelector('[data-act="next"]').addEventListener("click",()=>this.onChoice?.({action:"nextGame"})),this.show(i)}matchEnd(t,e,n,i){const r=document.createElement("div");r.className="screen",r.innerHTML=`
      <div class="end-card">
        <div class="end-title ${t?"win":"lose"}">${t?"🏆 VICTORY!":"DEFEAT"}</div>
        <div class="end-sub">${t?`You beat ${e}!`:`${e} takes it.`}</div>
        ${i?'<div class="end-sub" style="color:#ee6c4d;font-weight:900">★ NEW RECORD ★</div>':""}
        <div class="end-stats">
          <div class="end-stat"><div class="end-stat-num">${n.perfects}</div><div class="end-stat-label">Perfects</div></div>
          <div class="end-stat"><div class="end-stat-num">${n.longestRally}</div><div class="end-stat-label">Best rally</div></div>
        </div>
        <div class="mode-row">
          <button class="btn" data-act="rematch">${t?"PLAY NEXT":"REMATCH"}</button>
          <button class="btn secondary" data-act="menu">MENU</button>
        </div>
      </div>
    `,r.querySelector('[data-act="rematch"]').addEventListener("click",()=>this.onChoice?.({action:"rematch"})),r.querySelector('[data-act="menu"]').addEventListener("click",()=>this.onChoice?.({action:"title"})),this.show(r)}rallyRushEnd(t,e,n){const i=document.createElement("div");i.className="screen",i.innerHTML=`
      <div class="end-card">
        <div class="end-title">⚡ ${t}</div>
        <div class="end-sub">${n?"★ NEW RECORD ★":`Best: ${e}`}</div>
        <div class="mode-row">
          <button class="btn" data-act="again">GO AGAIN</button>
          <button class="btn secondary" data-act="share">SHARE</button>
          <button class="btn secondary" data-act="menu">MENU</button>
        </div>
      </div>
    `,i.querySelector('[data-act="again"]').addEventListener("click",()=>this.onChoice?.({action:"rallyRush"})),i.querySelector('[data-act="menu"]').addEventListener("click",()=>this.onChoice?.({action:"title"})),i.querySelector('[data-act="share"]').addEventListener("click",()=>{tw(t)}),this.show(i)}toast(t,e,n){const i=document.createElement("div");i.className="toast",i.innerHTML=`
      <div class="toast-icon">${t}</div>
      <div><div class="toast-title">${e}</div><div class="toast-sub">${n}</div></div>
    `,this.container.appendChild(i),requestAnimationFrame(()=>i.classList.add("show")),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),350)},2400)}}async function tw(s){const t=`I scored ${s} in Rally Rush on Pickle Smash 3D! 🏓 Can you beat it?`,e=location.href;try{navigator.share?await navigator.share({title:"Pickle Smash 3D",text:t,url:e}):await navigator.clipboard.writeText(`${t} ${e}`)}catch{}}const ew=document.getElementById("game-canvas"),Ru=document.getElementById("ui-root"),Hm=window.matchMedia("(pointer: coarse)").matches,ba=s1(ew),br=v1(),_n=new n1(window.innerWidth/window.innerHeight),vn=new t1(br),wi=new i1(br),Pu=new ar(br,4770532,1),Tl=new ar(br,15625293,-1),yn=new Z1,Fn=new j1(Ru);let he=null,qn="title",bt=null,gr=0,or=0,xs=0,lh=0,Lh=!1;function Of(s){gr=s;const t=La[s];qn="match",Fn.clear(),he?.destroy(),he=new km(Ru,"YOU",t.name.toUpperCase()),bt=new Bm({aiDupr:t.dupr,playerServesFirst:!0}),yn.startMatch(),bt.onRequestFreeze=e=>oc.freeze(e),xr(),_n.snap(0),Fn.toast("🎮","Swing your paddle","Flick = drive · push = dink · chop = slice · scoop = lob · across = spin")}function nw(){qn="rallyRush",or=0,xs=0,Fn.clear(),he?.destroy(),he=new km(Ru,"YOU","RUSH"),bt=new Bm({aiDupr:3,playerServesFirst:!0,rallyRush:!0}),yn.startMatch(),bt.onRequestFreeze=s=>oc.freeze(s),he.showBanner("RALLY RUSH!","gold",1.4),he.setScore(0,0,"player",[0,0]),_n.snap(0)}function iw(){qn="title",bt=null,he?.destroy(),he=null,Fn.title(yn)}function xr(){!bt||!he||(qn==="rallyRush"?he.setScore(or,0,"player",[0,0]):he.setScore(bt.score.player,bt.score.opponent,bt.score.serving,bt.score.games))}se.on("hit",s=>{const t=s.speed>18;if(We.paddleHit(t),wi.hitPop(s.pos.x,s.pos.y,s.pos.z,t),(s.side==="player"?Pu:Tl).swing(),s.shot==="smash"?(_n.smashPushIn(),_n.shake(.05,.12),We.whoosh()):t&&_n.shake(.03,.1),s.side==="player"&&s.shot!=="serve"){const e=Ym[s.shot];e&&he?.shotLabel(e.name,e.color)}if(s.side==="player"&&s.timing&&(he?.timingPopup(s.timing),s.timing==="perfect"&&We.perfect(),(s.timing==="ok"||s.timing==="shank")&&s.timingDelta!==void 0&&he?.spawnPopup(s.timingDelta<0?"EARLY!":"LATE!",50,64,"#cfd8dc")),s.side==="opponent"&&bt?Lh=!1:s.side==="player"&&vn.hideLandingMarker(),qn==="rallyRush"&&s.side==="player"&&s.shot!=="serve"&&(or++,xs=Math.max(xs,or),xr(),bt)){const e=Math.min(6.5,3+or*.12);bt.aiBrain.skill=Lm(e),bt.ai.maxSpeed=bt.aiBrain.skill.moveSpeed}});se.on("bounce",s=>{We.bounce(),wi.bounceDust(s.x,s.z),vn.hideLandingMarker(),s.onLine&&(wi.chalkPuff(s.x,s.z),he?.spawnPopup("IN!",50,40,"#b6f26d"))});se.on("net",s=>{We.netHit(),s.cord?(_n.shake(.06,.15),We.crowdOoh()):he?.spawnPopup("NET!",50,44,"#ff6b6b")});se.on("atp",s=>{he?.spawnPopup("AROUND THE POST!!",50,36,"#ffd166"),_n.shake(.06,.2),We.crowdOoh(),s.side==="player"&&wi.confetti(0,3)});se.on("whiff",s=>{he?.spawnPopup(s.late?"TOO LATE!":"MISSED!",50,60,"#cfd8dc")});se.on("fault",s=>{qn!=="rallyRush"&&he?.showFault(s.reason)});se.on("pointWon",s=>{if(xr(),yn.noteScore(bt?.score.player??0,bt?.score.opponent??0),he?.setRally(0),qn==="rallyRush"){if(s.winner==="opponent"){yn.noteRallyRush(xs);const t=xs>=yn.save.bests.rallyRush&&xs>0;setTimeout(()=>{Fn.rallyRushEnd(xs,yn.save.bests.rallyRush,t),qn="title",bt=null,he?.destroy(),he=null},900)}else or=0,xr();return}s.winner==="player"?(We.pointWin(),Pu.setAnim("celebrate"),Tl.setAnim("dejected"),s.rallyLength>=8&&wi.confetti(0,3)):(We.pointLose(),Tl.setAnim("celebrate")),s.wasSideOut&&(We.sideOut(),he?.showBanner(s.winner==="player"?"SIDE OUT →":"← SIDE OUT","default",1.1))});se.on("rallyMilestone",s=>{We.crowdOoh(),he?.setRally(s.count)});se.on("gameWon",s=>{if(We.gameWin(),!bt)return;const t=`${bt.score.player} - ${bt.score.opponent}`,e=`${bt.score.games[0]} - ${bt.score.games[1]}`;wi.confetti(0,s.winner==="player"?3:-3),setTimeout(()=>Fn.gameEnd(s.winner==="player",t,e),800)});se.on("matchWon",s=>{if(We.gameWin(),!bt)return;const t=s.winner==="player";t&&(yn.ladderWin(gr),wi.confetti(0,3));const e=yn.save.bests.mostPerfectsInMatch>0;setTimeout(()=>{Fn.matchEnd(t,La[gr].name,{perfects:yn.save.bests.mostPerfectsInMatch,longestRally:yn.save.bests.longestRally},e&&t)},1e3)});se.on("comboChanged",s=>he?.setCombo(s.count));se.on("xp",s=>{s.amount>=5&&he?.xpFloat(`+${s.amount} XP`)});se.on("levelUp",s=>{We.levelUp(),Fn.toast("⭐",`LEVEL ${s.level}!`,"Keep smashing"),wi.confetti(0,4)});se.on("achievement",s=>{We.levelUp(),Fn.toast("🏆",s.title,"Achievement unlocked")});const ac=new Zb(document.body),Vm=new Jb;Vm.attach();const Bf=new ym,sw=new xi(new P(0,1,0),0),ch=new P;function Gm(s,t){return Bf.setFromCamera(new Q(s/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),_n.camera),Bf.ray.intersectPlane(sw,ch)?{x:ch.x,z:ch.z}:null}function Wm(s){const t={...s};if(s.isTap){const e=Gm(s.screenX,s.screenY);e&&e.z<-.2&&(t.worldTarget=e)}return t}function Xm(s){We.unlock(),!(!bt||qn!=="match"&&qn!=="rallyRush")&&(bt.handleGesture(Wm(s),s.pressTime),xr())}ac.onGesture=Xm;Vm.onGesture=Xm;ac.onPressStart=()=>We.unlock();const Ym={serve:{name:"SERVE",color:"#ffd166"},drive:{name:"DRIVE",color:"#ff9f43"},dink:{name:"DINK",color:"#8ce99a"},drop:{name:"DROP",color:"#69db7c"},lob:{name:"LOB",color:"#c792ea"},smash:{name:"SMASH",color:"#ff6b6b"},reset:{name:"BLOCK",color:"#66d9e8"}};let rw=0;ac.onDragUpdate=s=>{if(!bt)return;const t=Wm(s),e=bt.previewTarget(t);if(e?vn.showAimPreview(e.x,e.z):vn.hideAimPreview(),(rw++&1)===0){const i=s.isTap?null:bt.previewFlight(t);i?vn.showFlightPreview(i):vn.hideFlightPreview()}he?.spawnTrailDot(s.screenX,s.screenY);const n=bt.previewKind(t);if(n&&!s.isTap){const i=Ym[n]??{name:n.toUpperCase()},r=Math.abs(s.curve)>.2?s.curve>0?" bends right ⤚":" ⤙ bends left":"",a=s.slice>.2&&Math.abs(s.curve)<=.2?" ✂ slice":"";he?.showGestureChip(i.name+r+a,s.screenX,s.screenY)}else he?.hideGestureChip()};ac.onDragEnd=()=>{vn.hideAimPreview(),vn.hideFlightPreview(),he?.hideGestureChip()};Hm||window.addEventListener("pointermove",s=>{if(s.buttons!==0||!bt)return;const t=Gm(s.clientX,s.clientY);if(t&&t.z<-.2){const e=bt.previewTarget({aimX:0,power:.5,flick:0,isLob:!1,isTap:!0,worldTarget:t});if(e){vn.showAimPreview(e.x,e.z);return}}vn.hideAimPreview()});Fn.onChoice=s=>{switch(We.unlock(),s.action){case"match":Of(s.opponentIndex);break;case"rallyRush":nw();break;case"rematch":Of(Math.min(gr+(yn.save.ladderProgress>=gr?1:0),La.length-1));break;case"nextGame":bt&&(Fn.clear(),bt.startNextGame(),xr());break;case"title":iw();break}};let zf=0;const oc=new Qb({simulate(s){bt&&(bt.update(s),bt.rules.rallyCount>=8&&bt.rules.rallyCount!==zf&&bt.rules.rallyCount%4===0&&(zf=bt.rules.rallyCount,se.emit("rallyMilestone",{count:bt.rules.rallyCount})),bt.rules.rallyCount<8&&he?.setRally(bt.rules.rallyCount))},render(s,t){if(bt){const e=w1(bt.ball,s),n=Math.hypot(bt.ball.vel.x,bt.ball.vel.y,bt.ball.vel.z);vn.update(e,n,t,bt.ball.spin);const i=bt.playerRenderPos(s),r=bt.aiRenderPos(s);if(Pu.update(t,i,bt.player.speed,bt.player.vel),Tl.update(t,r,bt.ai.speed,bt.ai.vel),_n.update(t,i.x),yn.save.totals.perfects<25){const o=bt.getPlayerTiming();vn.setTiming(o?{x:o.point.x,z:o.point.z,remaining:o.remaining}:null)}else vn.setTiming(null);if(bt.lastHitter==="opponent"&&bt.ball.phase==="flight"&&!Lh){const o=R1(bt.ball);if(o){const l=Math.abs(o.pos.x)<=3.05&&Math.abs(o.pos.z)<=6.71;vn.showLandingMarker(o.pos.x,o.pos.z,l),Lh=!0}}if(bt.playerIsServing){const o=`${bt.score.player}–${bt.score.opponent}`;he?.showPrompt(`${o} · ${Hm?"Swipe up to serve!":"Click your target to serve!"}`)}else if(bt.phase==="awaiting_serve"&&qn!=="rallyRush"){const o=`${bt.score.opponent}–${bt.score.player}`;he?.showPrompt(`${La[gr]?.name??"Opponent"} serves · ${o}`)}else bt.phase==="rally"&&bt.lastHitter==="opponent"&&bt.player.mustLetBounce&&bt.rules.bounceCount.player===0?he?.showPrompt("LET IT BOUNCE!"):he?.hidePrompt();lh=Math.abs(bt.player.pos.z)<3.2&&Math.abs(bt.ai.pos.z)<3.2?lh+t:0,_n.setDinkLens(lh>2)}else _n.update(t,Math.sin(performance.now()/4e3)*1.2);he?.update(t),wi.update(t),ba.renderer.render(br,_n.camera)}});let kf=0;oc.onFpsSample=s=>{kf++,kf<=5&&s<48&&!ba.degraded&&ba.degrade()};function Iu(){const s=ba.resize();_n.setAspect(s)}window.addEventListener("resize",Iu);window.visualViewport?.addEventListener("resize",Iu);Iu();Fn.title(yn);oc.start();Object.assign(window,{__debug:{scene:br,rig:_n,renderer:ba.renderer,getMatch:()=>bt,THREE:Wb}});
