(()=>{var Pd=Object.defineProperty;var Ld=(i,t)=>{for(var e in t)Pd(i,e,{get:t[e],enumerable:!0})};var Dd=0,hh=1,Ud=2;var Mu=1,pl=2,Yn=3,wi=0,De=1,_e=2,Si=0,bi=1,wn=2,uh=3,dh=4,Nd=5,Xi=100,Fd=101,Od=102,Bd=103,kd=104,zd=200,Hd=201,Vd=202,Gd=203,$a=204,Ja=205,Wd=206,Xd=207,qd=208,Yd=209,Zd=210,$d=211,Jd=212,Kd=213,Qd=214,Ka=0,Qa=1,ja=2,ws=3,tc=4,ec=5,nc=6,ic=7,Su=0,jd=1,tf=2,Ei=0,ef=1,nf=2,sf=3,ml=4,rf=5,of=6,af=7;var bu=300,Ts=301,As=302,sc=303,rc=304,ko=306,jn=1e3,$n=1001,oc=1002,nn=1003,cf=1004;var Pr=1005;var Un=1006,_a=1007;var Yi=1008;var ti=1009,Eu=1010,wu=1011,rr=1012,gl=1013,Zi=1014,Nn=1015,xr=1016,xl=1017,_l=1018,Rs=1020,Tu=35902,Au=1021,Ru=1022,En=1023,Cu=1024,Iu=1025,Ss=1026,Cs=1027,vl=1028,yl=1029,Pu=1030,Ml=1031;var Sl=1033,ao=33776,co=33777,lo=33778,ho=33779,ac=35840,cc=35841,lc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,xc=37811,_c=37812,vc=37813,yc=37814,Mc=37815,Sc=37816,bc=37817,Ec=37818,wc=37819,Tc=37820,Ac=37821,uo=36492,Rc=36494,Cc=36495,Lu=36283,Ic=36284,Pc=36285,Lc=36286;var fo=2300,Dc=2301,va=2302,fh=2400,ph=2401,mh=2402;var lf=3200,hf=3201;var Du=0,uf=1,yi="",Te="srgb",Us="srgb-linear",zo="linear",le="srgb";var ns=7680;var gh=519,df=512,ff=513,pf=514,Uu=515,mf=516,gf=517,xf=518,_f=519,Uc=35044,Ns=35048;var xh="300 es",Jn=2e3,po=2001,Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=1234567,nr=Math.PI/180,or=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function bl(i,t){return(i%t+t)%t}function vf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yf(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function Mf(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function Sf(i,t=1){return t-Math.abs(bl(i,t*2)-t)}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tf(i,t){return i+Math.random()*(t-i)}function Af(i){return i*(.5-Math.random())}function Rf(i){i!==void 0&&(_h=i);let t=_h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(i){return i*nr}function If(i){return i*or}function Pf(i){return(i&i-1)===0&&i!==0}function Lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nu={DEG2RAD:nr,RAD2DEG:or,generateUUID:Kn,clamp:Be,euclideanModulo:bl,mapLinear:vf,inverseLerp:yf,lerp:ir,damp:Mf,pingpong:Sf,smoothstep:bf,smootherstep:Ef,randInt:wf,randFloat:Tf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:If,isPowerOfTwo:Pf,ceilPowerOfTwo:Lf,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Uf,normalize:se,denormalize:bn},Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],v=s[0],g=s[3],f=s[6],M=s[1],b=s[4],_=s[7],R=s[2],T=s[5],C=s[8];return r[0]=o*v+a*M+c*R,r[3]=o*g+a*b+c*T,r[6]=o*f+a*_+c*C,r[1]=l*v+h*M+u*R,r[4]=l*g+h*b+u*T,r[7]=l*f+h*_+u*C,r[2]=d*v+p*M+x*R,r[5]=d*g+p*b+x*T,r[8]=d*f+p*_+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ya=new zt;function Fu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=mo("canvas");return i.style.display="block",i}var vh={};function tr(i){i in vh||(vh[i]=!0,console.warn(i))}function Ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Of(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jt={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yh=[.64,.33,.3,.6,.15,.06],Mh=[.2126,.7152,.0722],Sh=[.3127,.329],bh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Us]:{primaries:yh,whitePoint:Sh,transfer:zo,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:Mh,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:yh,whitePoint:Sh,transfer:le,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:Mh,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});var is,Nc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=mo("canvas")),is.width=t.width,is.height=t.height;let n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,go=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ma(s[o].image)):r.push(Ma(s[o]))}else r=Ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ma(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zf=0,Ze=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=Un,o=Yi,a=En,c=ti,l=i.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Kn(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=bu;Ze.DEFAULT_ANISOTROPY=1;var Se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],x=c[9],v=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(p+1)/2,R=(f+1)/2,T=(h+d)/4,C=(u+v)/4,P=(x+g)/4;return b>_&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new go(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Fc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oc=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==x){let g=1-a,f=c*d+l*p+h*x+u*v,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let R=Math.sqrt(b),T=Math.atan2(R,f*M);g=Math.sin(g*T)/R,a=Math.sin(a*T)/R}let _=a*M;if(c=c*g+d*_,l=l*g+p*_,h=h*g+x*_,u=u*g+v*_,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*p-l*d,t[e+1]=c*x+h*d+l*u-a*p,t[e+2]=l*x+h*p+a*d-c*u,t[e+3]=h*x-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"YZX":this._x=d*h*u+l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u-d*p*x;break;case"XZY":this._x=d*h*u-l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sa=new I,wh=new un,ni=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Dr.subVectors(this.max,Ws),ss.subVectors(t.a,Ws),rs.subVectors(t.b,Ws),os.subVectors(t.c,Ws),pi.subVectors(rs,ss),mi.subVectors(os,rs),Bi.subVectors(ss,os);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Bi.z,Bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Bi.z,0,-Bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Bi.y,Bi.x,0];return!ba(e,ss,rs,os,Dr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ss,rs,os,Dr))?!1:(Ur.crossVectors(pi,mi),e=[Ur.x,Ur.y,Ur.z],ba(e,ss,rs,os,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Lr=new ni,ss=new I,rs=new I,os=new I,pi=new I,mi=new I,Bi=new I,Ws=new I,Dr=new I,Ur=new I,ki=new I;function ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Hf=new ni,Xs=new I,Ea=new I,ii=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Ea)),this.expandByPoint(Xs.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new I,wa=new I,Nr=new I,gi=new I,Ta=new I,Fr=new I,Aa=new I,ar=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wa.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(wa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=gi.dot(this.direction),c=-gi.dot(Nr),l=gi.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*c-a,d=o*a-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wa).addScaledVector(Nr,d),p}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Ta.subVectors(e,t),Fr.subVectors(n,t),Aa.crossVectors(Ta,Fr);let o=this.direction.dot(Aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);let c=a*this.direction.dot(Fr.crossVectors(gi,Fr));if(c<0)return null;let l=a*this.direction.dot(Ta.cross(gi));if(l<0||c+l>o)return null;let h=-a*gi.dot(Aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,x,v,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,x,v,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,x=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+x*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,x=l*h,v=l*u;e[0]=d+v*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,x=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,x=a*h,v=a*u;e[0]=c*h,e[4]=x*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,x=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+x,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*c,p=o*l,x=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Gf)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),xi.crossVectors(n,tn),xi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),xi.crossVectors(n,tn)),xi.normalize(),Or.crossVectors(tn,xi),s[0]=xi.x,s[4]=Or.x,s[8]=tn.x,s[1]=xi.y,s[5]=Or.y,s[9]=tn.y,s[2]=xi.z,s[6]=Or.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],v=n[6],g=n[10],f=n[14],M=n[3],b=n[7],_=n[11],R=n[15],T=s[0],C=s[4],P=s[8],w=s[12],y=s[1],L=s[5],k=s[9],O=s[13],G=s[2],K=s[6],W=s[10],et=s[14],X=s[3],at=s[7],pt=s[11],wt=s[15];return r[0]=o*T+a*y+c*G+l*X,r[4]=o*C+a*L+c*K+l*at,r[8]=o*P+a*k+c*W+l*pt,r[12]=o*w+a*O+c*et+l*wt,r[1]=h*T+u*y+d*G+p*X,r[5]=h*C+u*L+d*K+p*at,r[9]=h*P+u*k+d*W+p*pt,r[13]=h*w+u*O+d*et+p*wt,r[2]=x*T+v*y+g*G+f*X,r[6]=x*C+v*L+g*K+f*at,r[10]=x*P+v*k+g*W+f*pt,r[14]=x*w+v*O+g*et+f*wt,r[3]=M*T+b*y+_*G+R*X,r[7]=M*C+b*L+_*K+R*at,r[11]=M*P+b*k+_*W+R*pt,r[15]=M*w+b*O+_*et+R*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],v=t[7],g=t[11],f=t[15];return x*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+v*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+g*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],v=t[13],g=t[14],f=t[15],M=u*g*l-v*d*l+v*c*p-a*g*p-u*c*f+a*d*f,b=x*d*l-h*g*l-x*c*p+o*g*p+h*c*f-o*d*f,_=h*v*l-x*u*l+x*a*p-o*v*p-h*a*f+o*u*f,R=x*u*c-h*v*c-x*a*d+o*v*d+h*a*g-o*u*g,T=e*M+n*b+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=M*C,t[1]=(v*d*r-u*g*r-v*s*p+n*g*p+u*s*f-n*d*f)*C,t[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*f+n*c*f)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*C,t[4]=b*C,t[5]=(h*g*r-x*d*r+x*s*p-e*g*p-h*s*f+e*d*f)*C,t[6]=(x*c*r-o*g*r-x*s*l+e*g*l+o*s*f-e*c*f)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*C,t[8]=_*C,t[9]=(x*u*r-h*v*r-x*n*p+e*v*p+h*n*f-e*u*f)*C,t[10]=(o*v*r-x*a*r+x*n*l-e*v*l-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*C,t[12]=R*C,t[13]=(h*v*s-x*u*s+x*n*d-e*v*d-h*n*g+e*u*g)*C,t[14]=(x*a*s-o*v*s-x*n*c+e*v*c+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,x=r*u,v=o*h,g=o*u,f=a*u,M=c*l,b=c*h,_=c*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+_)*R,s[2]=(x-b)*R,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(d+f))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(x+b)*C,s[9]=(g-M)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let l=1/r,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(a===Jn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===po)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,x,v;if(a===Jn)x=(o+r)*u,v=-2*u;else if(a===po)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new I,Mn=new re,Vf=new I(0,0,0),Gf=new I(1,1,1),xi=new I,Or=new I,tn=new I,Th=new re,Ah=new un,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,Rh=new I,cs=new un,Wn=new re,Br=new I,qs=new I,Xf=new I,qf=new un,Ch=new I(1,0,0),Ih=new I(0,1,0),Ph=new I(0,0,1),Lh={type:"added"},Yf={type:"removed"},ls={type:"childadded",child:null},Ra={type:"childremoved",child:null},Ae=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Fn,n=new un,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new zt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(qs,Br,this.up):Wn.lookAt(Br,qs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Wn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new I,Xn=new I,Ca=new I,qn=new I,hs=new I,us=new I,Dh=new I,Ia=new I,Pa=new I,La=new I,Da=new Se,Ua=new Se,Na=new Se,Mi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Xn.subVectors(n,e),Ca.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(Xn),c=Sn.dot(Ca),l=Xn.dot(Xn),h=Xn.dot(Ca),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,x=(o*h-a*c)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Da.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Da,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Xn.subVectors(t,e),Sn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;hs.subVectors(s,n),us.subVectors(r,n),Ia.subVectors(t,n);let c=hs.dot(Ia),l=us.dot(Ia);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,s);let h=hs.dot(Pa),u=us.dot(Pa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(hs,o);La.subVectors(t,r);let p=hs.dot(La),x=us.dot(La);if(x>=0&&p<=x)return e.copy(r);let v=p*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(us,a);let g=h*x-p*u;if(g<=0&&u-h>=0&&p-x>=0)return Dh.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(Dh,a);let f=1/(g+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=bl(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fa(o,r,t+1/3),this.g=Fa(o,r,t),this.b=Fa(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Jt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Be(Oe.r*255,0,255))*65536+Math.round(Be(Oe.g*255,0,255))*256+Math.round(Be(Oe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Te){Jt.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(kr);let n=ir(_i.h,kr.h,e),s=ir(_i.s,kr.s,e),r=ir(_i.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Et;Et.NAMES=Ou;var Zf=0,On=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Kn(),this.name="",this.blending=bi,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ja,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ue=class extends On{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new I,zr=new Nt,Qt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uc&&(t.usage=this.usage),t}};var vo=class extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yo=class extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=0,hn=new re,Oa=new Ae,ds=new I,en=new ni,Ys=new ni,Pe=new I,ve=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?yo:vo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(en.min,Ys.min),en.expandByPoint(Pe),Pe.addVectors(en.max,Ys.max),en.expandByPoint(Pe)):(en.expandByPoint(Ys.min),en.expandByPoint(Ys.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pe.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(t,l),Pe.add(ds)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;let l=new I,h=new I,u=new I,d=new Nt,p=new Nt,x=new Nt,v=new I,g=new I;function f(P,w,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),x.sub(d);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(L),a[P].add(v),a[w].add(v),a[y].add(v),c[P].add(g),c[w].add(g),c[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,w=M.length;P<w;++P){let y=M[P],L=y.start,k=y.count;for(let O=L,G=L+k;O<G;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let b=new I,_=new I,R=new I,T=new I;function C(P){R.fromBufferAttribute(s,P),T.copy(R);let w=a[P];b.copy(w),b.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(T,w);let L=_.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,L)}for(let P=0,w=M.length;P<w;++P){let y=M[P],L=y.start,k=y.count;for(let O=L,G=L+k;O<G;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,x=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let f=0;f<h;f++)d[x++]=l[p++]}return new Qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new re,zi=new ar,Hr=new ii,Nh=new I,Vr=new I,Gr=new I,Wr=new I,Ba=new I,Xr=new I,Fh=new I,qr=new I,Ut=class extends Ae{constructor(t=new ve,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ba.fromBufferAttribute(u,t),o?Xr.addScaledVector(Ba,h):Xr.addScaledVector(Ba.sub(e),h))}e.add(Xr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Hr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Hr,Nh)===null||zi.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Uh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){let g=d[x],f=o[g.materialIndex],M=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,R=b;_<R;_+=3){let T=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=Yr(this,f,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=x,f=v;g<f;g+=3){let M=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);s=Yr(this,o,t,n,l,h,u,M,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){let g=d[x],f=o[g.materialIndex],M=Math.max(g.start,p.start),b=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,R=b;_<R;_+=3){let T=_,C=_+1,P=_+2;s=Yr(this,f,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=x,f=v;g<f;g+=3){let M=g,b=g+1,_=g+2;s=Yr(this,o,t,n,l,h,u,M,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Jf(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===wi,a),c===null)return null;qr.copy(a),qr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qr);return l<e.near||l>e.far?null:{distance:l,point:qr.clone(),object:i}}function Yr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Vr),i.getVertexPosition(c,Gr),i.getVertexPosition(l,Wr);let h=Jf(i,t,e,n,Vr,Gr,Wr,Fh);if(h){let u=new I;Mi.getBarycoord(Fh,Vr,Gr,Wr,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,c,l,u,new Nt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,c,l,u,new Nt)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Mi.getNormal(Vr,Gr,Wr,d.normal),h.face=d,h.barycoord=u}return h}var $e=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function x(v,g,f,M,b,_,R,T,C,P,w){let y=_/C,L=R/P,k=_/2,O=R/2,G=T/2,K=C+1,W=P+1,et=0,X=0,at=new I;for(let pt=0;pt<W;pt++){let wt=pt*L-O;for(let Vt=0;Vt<K;Vt++){let he=Vt*y-k;at[v]=he*M,at[g]=wt*b,at[f]=G,l.push(at.x,at.y,at.z),at[v]=0,at[g]=0,at[f]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(Vt/C),u.push(1-pt/P),et+=1}}for(let pt=0;pt<P;pt++)for(let wt=0;wt<C;wt++){let Vt=d+wt+K*pt,he=d+wt+K*(pt+1),Z=d+(wt+1)+K*(pt+1),it=d+(wt+1)+K*pt;c.push(Vt,he,it),c.push(he,Z,it),X+=6}a.addGroup(p,X,w),p+=X,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function Kf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Qf={clone:Is,merge:Ve},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends On{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mo=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new I,Oh=new Nt,Bh=new Nt,Ge=class extends Mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,Bc=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new Ge(fs,ps,t,e);r.layers=this.layers,this.add(r);let o=new Ge(fs,ps,t,e);o.layers=this.layers,this.add(o);let a=new Ge(fs,ps,t,e);a.layers=this.layers,this.add(a);let c=new Ge(fs,ps,t,e);c.layers=this.layers,this.add(c);let l=new Ge(fs,ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},So=class extends Ze{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kc=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Si});r.uniforms.tEquirect.value=e;let o=new Ut(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Un),new Bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ka=new I,ep=new I,np=new zt,Zn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ka.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||np.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new ii,Zr=new I,cr=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],v=s[10],g=s[11],f=s[12],M=s[13],b=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-p,_-f).normalize(),n[1].setComponents(c+r,d+l,g+p,_+f).normalize(),n[2].setComponents(c+o,d+h,g+x,_+M).normalize(),n[3].setComponents(c-o,d-h,g-x,_-M).normalize(),n[4].setComponents(c-a,d-u,g-v,_-b).normalize(),e===Jn)n[5].setComponents(c+a,d+u,g+v,_+b).normalize();else if(e===po)n[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ku(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ip(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){let x=u[d],v=u[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){let v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sn=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],x=[],v=[],g=[];for(let f=0;f<h;f++){let M=f*d-o;for(let b=0;b<l;b++){let _=b*u-r;x.push(_,-M,0),v.push(0,0,1),g.push(b/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let b=M+l*f,_=M+l*(f+1),R=M+1+l*(f+1),T=M+1+l*f;p.push(b,_,T),p.push(_,R,T)}this.setIndex(p),this.setAttribute("position",new ee(x,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,_p=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Vm=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,M0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,b0=`#define NORMAL
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
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
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
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,A0=`#define STANDARD
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
}`,R0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,C0=`#define TOON
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
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,P0=`uniform float size;
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N0=`uniform float rotation;
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
}`,F0=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:xp,bumpmap_pars_fragment:_p,clipping_planes_fragment:vp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:bp,color_pars_fragment:Ep,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Pp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Jp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Zp,lights_pars_begin:$p,lights_toon_fragment:Kp,lights_toon_pars_fragment:Qp,lights_phong_fragment:jp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:lm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:vm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:bm,normal_pars_vertex:Em,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Im,opaque_fragment:Pm,packing:Lm,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:$m,tonemapping_pars_fragment:Jm,transmission_fragment:Km,transmission_pars_fragment:Qm,uv_pars_fragment:jm,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:o0,cube_vert:a0,cube_frag:c0,depth_vert:l0,depth_frag:h0,distanceRGBA_vert:u0,distanceRGBA_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:x0,meshbasic_frag:_0,meshlambert_vert:v0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:b0,meshnormal_frag:E0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:I0,points_vert:P0,points_frag:L0,shadow_vert:D0,shadow_frag:U0,sprite_vert:N0,sprite_frag:F0},st={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ve([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ve([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ve([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ve([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ve([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ve([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ve([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ve([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ve([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ve([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ve([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ve([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ve([st.lights,st.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Dn.physical={uniforms:Ve([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var $r={r:0,b:0,g:0},Vi=new Fn,O0=new re;function B0(i,t,e,n,s,r,o){let a=new Et(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function x(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function v(M){let b=!1,_=x(M);_===null?f(a,c):_&&_.isColor&&(f(_,1),b=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,b){let _=x(b);_&&(_.isCubeTexture||_.mapping===ko)?(h===void 0&&(h=new Ut(new $e(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Is(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(b.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Vi)),h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==le,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ut(new sn(2,2),new Je({name:"BackgroundMaterial",uniforms:Is(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,b){M.getRGB($r,Bu(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),c=b,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:v,addToRenderList:g}}function k0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,L,k,O,G){let K=!1,W=u(O,k,L);r!==W&&(r=W,l(r.object)),K=p(y,O,k,G),K&&x(y,O,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(y,L,k,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,k){let O=k.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let K=G[L.id];K===void 0&&(K={},G[L.id]=K);let W=K[O];return W===void 0&&(W=d(c()),K[O]=W),W}function d(y){let L=[],k=[],O=[];for(let G=0;G<e;G++)L[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,L,k,O){let G=r.attributes,K=L.attributes,W=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let pt=G[X],wt=K[X];if(wt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),pt===void 0||pt.attribute!==wt||wt&&pt.data!==wt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function x(y,L,k,O){let G={},K=L.attributes,W=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let pt=K[X];pt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let wt={};wt.attribute=pt,pt&&pt.data&&(wt.data=pt.data),G[X]=wt,W++}r.attributes=G,r.attributesNum=W,r.index=O}function v(){let y=r.newAttributes;for(let L=0,k=y.length;L<k;L++)y[L]=0}function g(y){f(y,0)}function f(y,L){let k=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;k[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),G[y]!==L&&(i.vertexAttribDivisor(y,L),G[y]=L)}function M(){let y=r.newAttributes,L=r.enabledAttributes;for(let k=0,O=L.length;k<O;k++)L[k]!==y[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function b(y,L,k,O,G,K,W){W===!0?i.vertexAttribIPointer(y,L,k,G,K):i.vertexAttribPointer(y,L,k,O,G,K)}function _(y,L,k,O){v();let G=O.attributes,K=k.getAttributes(),W=L.defaultAttributeValues;for(let et in K){let X=K[et];if(X.location>=0){let at=G[et];if(at===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){let pt=at.normalized,wt=at.itemSize,Vt=t.get(at);if(Vt===void 0)continue;let he=Vt.buffer,Z=Vt.type,it=Vt.bytesPerElement,Mt=Z===i.INT||Z===i.UNSIGNED_INT||at.gpuType===gl;if(at.isInterleavedBufferAttribute){let ct=at.data,Pt=ct.stride,Ft=at.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)f(X.location+Gt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)g(X.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Gt=0;Gt<X.locationSize;Gt++)b(X.location+Gt,wt/X.locationSize,Z,pt,Pt*it,(Ft+wt/X.locationSize*Gt)*it,Mt)}else{if(at.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)f(X.location+ct,at.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ct=0;ct<X.locationSize;ct++)g(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ct=0;ct<X.locationSize;ct++)b(X.location+ct,wt/X.locationSize,Z,pt,wt*it,wt/X.locationSize*ct*it,Mt)}}else if(W!==void 0){let pt=W[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(X.location,pt);break;case 3:i.vertexAttrib3fv(X.location,pt);break;case 4:i.vertexAttrib4fv(X.location,pt);break;default:i.vertexAttrib1fv(X.location,pt)}}}}M()}function R(){P();for(let y in n){let L=n[y];for(let k in L){let O=L[k];for(let G in O)h(O[G].object),delete O[G];delete L[k]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let L=n[y.id];for(let k in L){let O=L[k];for(let G in O)h(O[G].object),delete O[G];delete L[k]}delete n[y.id]}function C(y){for(let L in n){let k=n[L];if(k[y.id]===void 0)continue;let O=k[y.id];for(let G in O)h(O[G].object),delete O[G];delete k[y.id]}}function P(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function z0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*d[v];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ti&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function V0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Zn,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,_=f.clippingState||null;c.value=_,_=h(x,d,b,p);for(let R=0;R!==b;++R)_[R]=e[R];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,x!==!0||g===null){let f=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,_=p;b!==v;++b,_+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function G0(i){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=Ts:a===rc&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===sc||a===rc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new kc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bo=class extends Mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,kh=[.125,.215,.35,.446,.526,.582],qi=20,za=new bo,zh=new Et,Ha=null,Va=0,Ga=0,Wa=!1,Wi=(1+Math.sqrt(5))/2,ms=1/Wi,Hh=[new I(-Wi,ms,0),new I(Wi,ms,0),new I(-ms,0,Wi),new I(ms,0,Wi),new I(0,Wi,-ms),new I(0,Wi,ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Va,Ga),this._renderer.xr.enabled=Wa,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:xr,format:En,colorSpace:Us,depthBuffer:!1},s=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=X0(r,t,e)}return s}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s){let a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zh),h.toneMapping=Ei,h.autoClear=!1;let p=new Ue({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),x=new Ut(new $e,p),v=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(zh),v=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let b=this._cubeSize;Jr(s,M*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Jr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hh[(s-r-1)%Hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ut(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):qi;g>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);let f=[],M=0;for(let C=0;C<qi;++C){let P=C/v,w=Math.exp(-P*P/2);f.push(w),C===0?M+=w:C<g&&(M+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-n;let _=this._sizeLods[s],R=3*_*(s>b-Ms?s-b+Ms:0),T=4*(this._cubeSize-_);Jr(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(u,za)}};function W0(i){let t=[],e=[],n=[],s=i,r=i-Ms+1+kh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ms?c=kh[o-i+Ms-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,v=3,g=2,f=1,M=new Float32Array(v*x*p),b=new Float32Array(g*x*p),_=new Float32Array(f*x*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,P=T>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(w,v*x*T),b.set(d,g*x*T);let y=[T,T,T,T,T,T];_.set(y,f*x*T)}let R=new ve;R.setAttribute("position",new Qt(M,v)),R.setAttribute("uv",new Qt(b,g)),R.setAttribute("faceIndex",new Qt(_,f)),t.push(R),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vh(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function X0(i,t,e){let n=new Float32Array(qi),s=new I(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gh(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Wh(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function q0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===sc||c===rc,h=c===Ts||c===As;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ps(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ps(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Y0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Z0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let v=d.morphAttributes[x];for(let g=0,f=v.length;g<f;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let v=p[x];for(let g=0,f=v.length;g<f;g++)t.update(v[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,x=u.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let b=0,_=M.length;b<_;b+=3){let R=M[b+0],T=M[b+1],C=M[b+2];d.push(R,T,T,C,C,R)}}else if(x!==void 0){let M=x.array;v=x.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let R=b+0,T=b+1,C=b+2;d.push(R,T,T,C,C,R)}}else return;let g=new(Fu(d)?yo:vo)(d,1);g.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*o,x),e.update(p,n,x))}function h(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let g=0;for(let f=0;f<x;f++)g+=p[f];e.update(g,n,1)}function u(d,p,x,v){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,x);let f=0;for(let M=0;M<x;M++)f+=p[M]*v[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function J0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function K0(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;p===!0&&(b=1),x===!0&&(b=2),v===!0&&(b=3);let _=a.attributes.position.count*b,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*R*4*u),C=new xo(T,_,R,u);C.type=Nn,C.needsUpdate=!0;let P=b*4;for(let y=0;y<u;y++){let L=g[y],k=f[y],O=M[y],G=_*R*4*y;for(let K=0;K<L.count;K++){let W=K*P;p===!0&&(s.fromBufferAttribute(L,K),T[G+W+0]=s.x,T[G+W+1]=s.y,T[G+W+2]=s.z,T[G+W+3]=0),x===!0&&(s.fromBufferAttribute(k,K),T[G+W+4]=s.x,T[G+W+5]=s.y,T[G+W+6]=s.z,T[G+W+7]=0),v===!0&&(s.fromBufferAttribute(O,K),T[G+W+8]=s.x,T[G+W+9]=s.y,T[G+W+10]=s.z,T[G+W+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Nt(_,R)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Q0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Eo=class extends Ze{constructor(t,e,n,s,r,o,a,c,l,h=Ss){if(h!==Ss&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Zi),n===void 0&&h===Cs&&(n=Rs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zu=new Ze,Xh=new Eo(1,1),Hu=new xo,Vu=new Oc,Gu=new So,qh=[],Yh=[],Zh=new Float32Array(16),$h=new Float32Array(9),Jh=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Ce(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),Ce(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Ce(e,n)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=Uu,r=Xh):r=zu,e.setTexture2D(t||r,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function _g(i){switch(i){case 5126:return j0;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}function vg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function bg(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function Ag(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zu,r[o])}function Ng(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,r[o])}function Og(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hu,r[o])}function Bg(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}var zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},Hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}},Vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xa=/(\w+)(\])?(\[|\.)?/g;function Kh(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){let n=i.name,s=n.length;for(Xa.lastIndex=0;;){let r=Xa.exec(n),o=Xa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kh(e,l===void 0?new zc(a,i,t):new Hc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Vc(a),Kh(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);kg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Qh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,Hg=0;function Vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var jh=new zt;function Gg(i){Jt._getMatrix(jh,Jt.workingColorSpace,i);let t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(t),o)}else return s}function Wg(i,t){let e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case sf:e="Cineon";break;case ml:e="ACESFilmic";break;case of:e="AgX";break;case af:e="Neutral";break;case rf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Kr=new I;function qg(){Jt.getLuminanceCoefficients(Kr);let i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function er(i){return i!==""}function eu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(Jg,Qg)}var Kg=new Map;function Qg(i,t){let e=Ot[t];if(e===void 0){let n=Kg.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace(jg,tx)}function tx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ex(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function nx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ix(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===As&&(t="ENVMAP_MODE_REFRACTION"),t}function sx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Su:t="ENVMAP_BLENDING_MULTIPLY";break;case jd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function rx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ox(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ex(e),l=nx(e),h=ix(e),u=sx(e),d=rx(e),p=Yg(e),x=Zg(r),v=s.createProgram(),g,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(er).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(er).join(`
`),f.length>0&&(f+=`
`)):(g=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Gc(o),o=eu(o,e),o=nu(o,e),a=Gc(a),a=eu(a,e),a=nu(a,e),o=iu(o),a=iu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=M+g+o,_=M+f+a,R=Qh(s,s.VERTEX_SHADER,b),T=Qh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(T).trim(),K=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{let et=tu(s,R,"vertex"),X=tu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+et+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||G==="")&&(W=!1);W&&(L.diagnostics={runnable:K,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:G,prefix:f}})}s.deleteShader(R),s.deleteShader(T),P=new Es(s,v),w=$g(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,zg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var ax=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xc(t),e.set(t,n)),n}},Xc=class{constructor(t){this.id=ax++,this.code=t,this.usedTimes=0}};function cx(i,t,e,n,s,r,o){let a=new _o,c=new Wc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,y,L,k,O){let G=k.fog,K=O.geometry,W=w.isMeshStandardMaterial?k.environment:null,et=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),X=et&&et.mapping===ko?et.image.height:null,at=x[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,wt=pt!==void 0?pt.length:0,Vt=0;K.morphAttributes.position!==void 0&&(Vt=1),K.morphAttributes.normal!==void 0&&(Vt=2),K.morphAttributes.color!==void 0&&(Vt=3);let he,Z,it,Mt;if(at){let ie=Dn[at];he=ie.vertexShader,Z=ie.fragmentShader}else he=w.vertexShader,Z=w.fragmentShader,c.update(w),it=c.getVertexShaderID(w),Mt=c.getFragmentShaderID(w);let ct=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,Gt=O.isBatchedMesh===!0,xe=!!w.map,Zt=!!w.matcap,Ee=!!et,F=!!w.aoMap,cn=!!w.lightMap,Wt=!!w.bumpMap,Xt=!!w.normalMap,Ct=!!w.displacementMap,fe=!!w.emissiveMap,At=!!w.metalnessMap,A=!!w.roughnessMap,S=w.anisotropy>0,B=w.clearcoat>0,$=w.dispersion>0,Q=w.iridescence>0,Y=w.sheen>0,St=w.transmission>0,lt=S&&!!w.anisotropyMap,mt=B&&!!w.clearcoatMap,$t=B&&!!w.clearcoatNormalMap,j=B&&!!w.clearcoatRoughnessMap,gt=Q&&!!w.iridescenceMap,It=Q&&!!w.iridescenceThicknessMap,Lt=Y&&!!w.sheenColorMap,xt=Y&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Ht=!!w.specularColorMap,ue=!!w.specularIntensityMap,D=St&&!!w.transmissionMap,ot=St&&!!w.thicknessMap,V=!!w.gradientMap,J=!!w.alphaMap,ft=w.alphaTest>0,ut=!!w.alphaHash,Bt=!!w.extensions,Me=Ei;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Me=i.toneMapping);let Ne={shaderID:at,shaderType:w.type,shaderName:w.name,vertexShader:he,fragmentShader:Z,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:xe,matcap:Zt,envMap:Ee,envMapMode:Ee&&et.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:cn,bumpMap:Wt,normalMap:Xt,displacementMap:d&&Ct,emissiveMap:fe,normalMapObjectSpace:Xt&&w.normalMapType===uf,normalMapTangentSpace:Xt&&w.normalMapType===Du,metalnessMap:At,roughnessMap:A,anisotropy:S,anisotropyMap:lt,clearcoat:B,clearcoatMap:mt,clearcoatNormalMap:$t,clearcoatRoughnessMap:j,dispersion:$,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:It,sheen:Y,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:qt,specularColorMap:Ht,specularIntensityMap:ue,transmission:St,transmissionMap:D,thicknessMap:ot,gradientMap:V,opaque:w.transparent===!1&&w.blending===bi&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:w.combine,mapUv:xe&&v(w.map.channel),aoMapUv:F&&v(w.aoMap.channel),lightMapUv:cn&&v(w.lightMap.channel),bumpMapUv:Wt&&v(w.bumpMap.channel),normalMapUv:Xt&&v(w.normalMap.channel),displacementMapUv:Ct&&v(w.displacementMap.channel),emissiveMapUv:fe&&v(w.emissiveMap.channel),metalnessMapUv:At&&v(w.metalnessMap.channel),roughnessMapUv:A&&v(w.roughnessMap.channel),anisotropyMapUv:lt&&v(w.anisotropyMap.channel),clearcoatMapUv:mt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:$t&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(w.sheenRoughnessMap.channel),specularMapUv:qt&&v(w.specularMap.channel),specularColorMapUv:Ht&&v(w.specularColorMap.channel),specularIntensityMapUv:ue&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:ot&&v(w.thicknessMap.channel),alphaMapUv:J&&v(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(xe||J),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:xe&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===le,decodeVideoTextureEmissive:fe&&w.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(w.emissiveMap.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_e,flipSided:w.side===De,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function f(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)y.push(L),y.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(y,w),b(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function b(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let y=x[w.type],L;if(y){let k=Dn[y];L=Qf.clone(k.uniforms)}else L=w.uniforms;return L}function R(w,y){let L;for(let k=0,O=h.length;k<O;k++){let G=h[k];if(G.cacheKey===y){L=G,++L.usedTimes;break}}return L===void 0&&(L=new ox(i,y,w,r),h.push(L)),L}function T(w){if(--w.usedTimes===0){let y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function lx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ou(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,x,v,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=v,f.group=g),t++,f}function a(u,d,p,x,v,g){let f=o(u,d,p,x,v,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,x,v,g){let f=o(u,d,p,x,v,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||hx),n.length>1&&n.sort(d||ru),s.length>1&&s.sort(d||ru)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ux(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ou,i.set(n,[o])):s>=r.length?(o=new ou,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function dx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Et};break;case"SpotLight":e={position:new I,direction:new I,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var px=0;function mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gx(i){let t=new dx,e=fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new re,o=new re;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,x=0,v=0,g=0,f=0,M=0,b=0,_=0,R=0,T=0,C=0;l.sort(mx);for(let w=0,y=l.length;w<y;w++){let L=l[w],k=L.color,O=L.intensity,G=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],O);C++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,X=e.get(L);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=W,p++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(k).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[v]=W;let et=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,et.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=et.matrix,L.castShadow){let X=e.get(L);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=K,_++}v++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(k).multiplyScalar(O),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=W,g++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let et=L.shadow,X=e.get(L);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=L.shadow.matrix,b++}n.point[x]=W,x++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(O),W.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[f]=W,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=p,P.pointLength=x,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=C,n.version=px++)}function c(l,h){let u=0,d=0,p=0,x=0,v=0,g=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){let b=l[f];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function au(i){let t=new gx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new au(i),t.set(s,[a])):r>=o.length?(a=new au(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var qc=class extends On{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yc=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yx(i,t,e){let n=new cr,s=new Nt,r=new Nt,o=new Se,a=new qc({depthPacking:hf}),c=new Yc,l={},h=e.maxTextureSize,u={[wi]:De,[De]:wi,[_e]:_e},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:_x,fragmentShader:vx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new ve;x.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ut(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let f=this.type;this.render=function(T,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=f!==Yn&&this.type===Yn,G=f===Yn&&this.type!==Yn;for(let K=0,W=T.length;K<W;K++){let et=T[K],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let at=X.getFrameExtents();if(s.multiply(at),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,X.mapSize.y=r.y)),X.map===null||O===!0||G===!0){let wt=this.type!==Yn?{minFilter:nn,magFilter:nn}:{};X.map!==null&&X.map.dispose(),X.map=new ei(s.x,s.y,wt),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let pt=X.getViewportCount();for(let wt=0;wt<pt;wt++){let Vt=X.getViewport(wt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),k.viewport(o),X.updateMatrices(et,wt),n=X.getFrustum(),_(C,P,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===Yn&&M(X,P),X.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(w,y,L)};function M(T,C){let P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,p,v,null)}function b(T,C,P,w){let y=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=y.uuid,O=C.uuid,G=l[k];G===void 0&&(G={},l[k]=G);let K=G[O];K===void 0&&(K=y.clone(),G[O]=K,C.addEventListener("dispose",R)),y=K}if(y.visible=C.visible,y.wireframe=C.wireframe,w===Yn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=i.properties.get(y);k.light=P}return y}function _(T,C,P,w,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let O=t.update(T),G=T.material;if(Array.isArray(G)){let K=O.groups;for(let W=0,et=K.length;W<et;W++){let X=K[W],at=G[X.materialIndex];if(at&&at.visible){let pt=b(T,at,w,y);T.onBeforeShadow(i,T,C,P,O,pt,X),i.renderBufferDirect(P,null,O,pt,T,X),T.onAfterShadow(i,T,C,P,O,pt,X)}}}else if(G.visible){let K=b(T,G,w,y);T.onBeforeShadow(i,T,C,P,O,K,null),i.renderBufferDirect(P,null,O,K,T,null),T.onAfterShadow(i,T,C,P,O,K,null)}}let k=T.children;for(let O=0,G=k.length;O<G;O++)_(k[O],C,P,w,y)}function R(T){T.target.removeEventListener("dispose",R);for(let P in l){let w=l[P],y=T.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}var Mx={[Ka]:Qa,[ja]:nc,[tc]:ic,[ws]:ec,[Qa]:Ka,[nc]:ja,[ic]:tc,[ec]:ws};function Sx(i,t){function e(){let D=!1,ot=new Se,V=null,J=new Se(0,0,0,0);return{setMask:function(ft){V!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,Bt,Me,Ne){Ne===!0&&(ft*=Me,ut*=Me,Bt*=Me),ot.set(ft,ut,Bt,Me),J.equals(ot)===!1&&(i.clearColor(ft,ut,Bt,Me),J.copy(ot))},reset:function(){D=!1,V=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,V=null,J=null,ft=null;return{setReversed:function(ut){if(ot!==ut){let Bt=t.get("EXT_clip_control");ot?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let Me=ft;ft=null,this.setClear(Me)}ot=ut},getReversed:function(){return ot},setTest:function(ut){ut?ct(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ut){V!==ut&&!D&&(i.depthMask(ut),V=ut)},setFunc:function(ut){if(ot&&(ut=Mx[ut]),J!==ut){switch(ut){case Ka:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(ot&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){D=!1,V=null,J=null,ft=null,ot=!1}}}function s(){let D=!1,ot=null,V=null,J=null,ft=null,ut=null,Bt=null,Me=null,Ne=null;return{setTest:function(ie){D||(ie?ct(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ie){ot!==ie&&!D&&(i.stencilMask(ie),ot=ie)},setFunc:function(ie,_n,zn){(V!==ie||J!==_n||ft!==zn)&&(i.stencilFunc(ie,_n,zn),V=ie,J=_n,ft=zn)},setOp:function(ie,_n,zn){(ut!==ie||Bt!==_n||Me!==zn)&&(i.stencilOp(ie,_n,zn),ut=ie,Bt=_n,Me=zn)},setLocked:function(ie){D=ie},setClear:function(ie){Ne!==ie&&(i.clearStencil(ie),Ne=ie)},reset:function(){D=!1,ot=null,V=null,J=null,ft=null,ut=null,Bt=null,Me=null,Ne=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],x=null,v=!1,g=null,f=null,M=null,b=null,_=null,R=null,T=null,C=new Et(0,0,0),P=0,w=!1,y=null,L=null,k=null,O=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,et=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=et>=2);let at=null,pt={},wt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),he=new Se().fromArray(wt),Z=new Se().fromArray(Vt);function it(D,ot,V,J){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<V;Bt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let Mt={};Mt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(ws),Wt(!1),Xt(hh),ct(i.CULL_FACE),F(Si);function ct(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Pt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ft(D,ot){return u[D]!==ot?(i.bindFramebuffer(D,ot),u[D]=ot,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Gt(D,ot){let V=p,J=!1;if(D){V=d.get(ot),V===void 0&&(V=[],d.set(ot,V));let ft=D.textures;if(V.length!==ft.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Bt=ft.length;ut<Bt;ut++)V[ut]=i.COLOR_ATTACHMENT0+ut;V.length=ft.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function xe(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let Zt={[Xi]:i.FUNC_ADD,[Fd]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};Zt[Bd]=i.MIN,Zt[kd]=i.MAX;let Ee={[zd]:i.ZERO,[Hd]:i.ONE,[Vd]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[qd]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[Yd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,ot,V,J,ft,ut,Bt,Me,Ne,ie){if(D===Si){v===!0&&(Pt(i.BLEND),v=!1);return}if(v===!1&&(ct(i.BLEND),v=!0),D!==Nd){if(D!==g||ie!==w){if((f!==Xi||_!==Xi)&&(i.blendEquation(i.FUNC_ADD),f=Xi,_=Xi),ie)switch(D){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,b=null,R=null,T=null,C.set(0,0,0),P=0,g=D,w=ie}return}ft=ft||ot,ut=ut||V,Bt=Bt||J,(ot!==f||ft!==_)&&(i.blendEquationSeparate(Zt[ot],Zt[ft]),f=ot,_=ft),(V!==M||J!==b||ut!==R||Bt!==T)&&(i.blendFuncSeparate(Ee[V],Ee[J],Ee[ut],Ee[Bt]),M=V,b=J,R=ut,T=Bt),(Me.equals(C)===!1||Ne!==P)&&(i.blendColor(Me.r,Me.g,Me.b,Ne),C.copy(Me),P=Ne),g=D,w=!1}function cn(D,ot){D.side===_e?Pt(i.CULL_FACE):ct(i.CULL_FACE);let V=D.side===De;ot&&(V=!V),Wt(V),D.blending===bi&&D.transparent===!1?F(Si):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Xt(D){D!==Dd?(ct(i.CULL_FACE),D!==L&&(D===hh?i.cullFace(i.BACK):D===Ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=D}function Ct(D){D!==k&&(W&&i.lineWidth(D),k=D)}function fe(D,ot,V){D?(ct(i.POLYGON_OFFSET_FILL),(O!==ot||G!==V)&&(i.polygonOffset(ot,V),O=ot,G=V)):Pt(i.POLYGON_OFFSET_FILL)}function At(D){D?ct(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+K-1),at!==D&&(i.activeTexture(D),at=D)}function S(D,ot,V){V===void 0&&(at===null?V=i.TEXTURE0+K-1:V=at);let J=pt[V];J===void 0&&(J={type:void 0,texture:void 0},pt[V]=J),(J.type!==D||J.texture!==ot)&&(at!==V&&(i.activeTexture(V),at=V),i.bindTexture(D,ot||Mt[D]),J.type=D,J.texture=ot)}function B(){let D=pt[at];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){he.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function xt(D){Z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function qt(D,ot){let V=l.get(ot);V===void 0&&(V=new WeakMap,l.set(ot,V));let J=V.get(D);J===void 0&&(J=i.getUniformBlockIndex(ot,D.name),V.set(D,J))}function Ht(D,ot){let J=l.get(ot).get(D);c.get(ot)!==J&&(i.uniformBlockBinding(ot,J,D.__bindingPointIndex),c.set(ot,J))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,pt={},u={},d=new WeakMap,p=[],x=null,v=!1,g=null,f=null,M=null,b=null,_=null,R=null,T=null,C=new Et(0,0,0),P=0,w=!1,y=null,L=null,k=null,O=null,G=null,he.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Pt,bindFramebuffer:Ft,drawBuffers:Gt,useProgram:xe,setBlending:F,setMaterial:cn,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Ct,setPolygonOffset:fe,setScissorTest:At,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:gt,texImage3D:It,updateUBOMapping:qt,uniformBlockBinding:Ht,texStorage2D:$t,texStorage3D:j,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Lt,viewport:xt,reset:ue}}function cu(i,t,e,n){let s=bx(n);switch(e){case Au:return i*t;case Cu:return i*t;case Iu:return i*t*2;case vl:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case Pu:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Ru:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case ao:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case ac:case lc:return Math.max(i,8)*Math.max(t,8)/2;case uc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uo:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lu:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bx(i){switch(i){case ti:case Eu:return{byteLength:1,components:1};case rr:case wu:case xr:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case Zi:case gl:case Nn:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ex(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return p?new OffscreenCanvas(A,S):mo("canvas")}function v(A,S,B){let $=1,Q=At(A);if((Q.width>B||Q.height>B)&&($=B/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Y=Math.floor($*Q.width),St=Math.floor($*Q.height);u===void 0&&(u=x(Y,St));let lt=S?x(Y,St):u;return lt.width=Y,lt.height=St,lt.getContext("2d").drawImage(A,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+St+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function g(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,B,$,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){let St=Q?zo:Jt.getTransfer($);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=St===le?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(A,S){let B;return A?S===null||S===Zi||S===Rs?B=i.DEPTH24_STENCIL8:S===Nn?B=i.DEPTH32F_STENCIL8:S===rr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zi||S===Rs?B=i.DEPTH_COMPONENT24:S===Nn?B=i.DEPTH_COMPONENT32F:S===rr&&(B=i.DEPTH_COMPONENT16),B}function R(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function C(A){let S=A.target;S.removeEventListener("dispose",C),y(S)}function P(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,$=d.get(B);if($){let Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(A),Object.keys($).length===0&&d.delete(B)}n.remove(A)}function w(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,$=d.get(B);delete $[S.__cacheKey],o.memory.textures--}function y(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=A.textures;for(let $=0,Q=B.length;$<Q;$++){let Y=n.get(B[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(A)}let L=0;function k(){L=0}function O(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function G(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function K(A,S){let B=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,A,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function W(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function et(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function X(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){it(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let at={[jn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},pt={[nn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},wt={[df]:i.NEVER,[_f]:i.ALWAYS,[ff]:i.LESS,[Uu]:i.LEQUAL,[pf]:i.EQUAL,[xf]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function Vt(A,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===_a||S.magFilter===Pr||S.magFilter===Yi||S.minFilter===Un||S.minFilter===_a||S.minFilter===Pr||S.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,at[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,at[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,at[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Pr&&S.minFilter!==Yi||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function he(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let $=S.source,Q=d.get($);Q===void 0&&(Q={},d.set($,Q));let Y=G(S);if(Y!==A.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[Y].usedTimes++;let St=Q[A.__cacheKey];St!==void 0&&(Q[A.__cacheKey].usedTimes--,St.usedTimes===0&&w(S)),A.__cacheKey=Y,A.__webglTexture=Q[Y].texture}return B}function Z(A,S,B){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let Q=he(A,S),Y=S.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+B);let St=n.get(Y);if(Y.version!==St.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let lt=Jt.getPrimaries(Jt.workingColorSpace),mt=S.colorSpace===yi?null:Jt.getPrimaries(S.colorSpace),$t=S.colorSpace===yi||lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let j=v(S.image,!1,s.maxTextureSize);j=fe(S,j);let gt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),Lt=b(S.internalFormat,gt,It,S.colorSpace,S.isVideoTexture);Vt($,S);let xt,qt=S.mipmaps,Ht=S.isVideoTexture!==!0,ue=St.__version===void 0||Q===!0,D=Y.dataReady,ot=R(S,j);if(S.isDepthTexture)Lt=_(S.format===Cs,S.type),ue&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Lt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Lt,j.width,j.height,0,gt,It,null));else if(S.isDataTexture)if(qt.length>0){Ht&&ue&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,qt[0].width,qt[0].height);for(let V=0,J=qt.length;V<J;V++)xt=qt[V],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,gt,It,xt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,xt.width,xt.height,0,gt,It,xt.data);S.generateMipmaps=!1}else Ht?(ue&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,j.width,j.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,gt,It,j.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,j.width,j.height,0,gt,It,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,qt[0].width,qt[0].height,j.depth);for(let V=0,J=qt.length;V<J;V++)if(xt=qt[V],S.format!==En)if(gt!==null)if(Ht){if(D)if(S.layerUpdates.size>0){let ft=cu(xt.width,xt.height,S.format,S.type);for(let ut of S.layerUpdates){let Bt=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ut,xt.width,xt.height,1,gt,Bt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,j.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Lt,xt.width,xt.height,j.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,j.depth,gt,It,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Lt,xt.width,xt.height,j.depth,0,gt,It,xt.data)}else{Ht&&ue&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,qt[0].width,qt[0].height);for(let V=0,J=qt.length;V<J;V++)xt=qt[V],S.format!==En?gt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,xt.width,xt.height,gt,It,xt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,xt.width,xt.height,0,gt,It,xt.data)}else if(S.isDataArrayTexture)if(Ht){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,j.width,j.height,j.depth),D)if(S.layerUpdates.size>0){let V=cu(j.width,j.height,S.format,S.type);for(let J of S.layerUpdates){let ft=j.data.subarray(J*V/j.data.BYTES_PER_ELEMENT,(J+1)*V/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,gt,It,ft)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,gt,It,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,j.width,j.height,j.depth,0,gt,It,j.data);else if(S.isData3DTexture)Ht?(ue&&e.texStorage3D(i.TEXTURE_3D,ot,Lt,j.width,j.height,j.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,gt,It,j.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,j.width,j.height,j.depth,0,gt,It,j.data);else if(S.isFramebufferTexture){if(ue)if(Ht)e.texStorage2D(i.TEXTURE_2D,ot,Lt,j.width,j.height);else{let V=j.width,J=j.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,Lt,V,J,0,gt,It,null),V>>=1,J>>=1}}else if(qt.length>0){if(Ht&&ue){let V=At(qt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Lt,V.width,V.height)}for(let V=0,J=qt.length;V<J;V++)xt=qt[V],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt,It,xt):e.texImage2D(i.TEXTURE_2D,V,Lt,gt,It,xt);S.generateMipmaps=!1}else if(Ht){if(ue){let V=At(j);e.texStorage2D(i.TEXTURE_2D,ot,Lt,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,It,j)}else e.texImage2D(i.TEXTURE_2D,0,Lt,gt,It,j);g(S)&&f($),St.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function it(A,S,B){if(S.image.length!==6)return;let $=he(A,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let Y=n.get(Q);if(Q.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+B);let St=Jt.getPrimaries(Jt.workingColorSpace),lt=S.colorSpace===yi?null:Jt.getPrimaries(S.colorSpace),mt=S.colorSpace===yi||St===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let $t=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!$t&&!j?gt[J]=v(S.image[J],!0,s.maxCubemapSize):gt[J]=j?S.image[J].image:S.image[J],gt[J]=fe(S,gt[J]);let It=gt[0],Lt=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),qt=b(S.internalFormat,Lt,xt,S.colorSpace),Ht=S.isVideoTexture!==!0,ue=Y.__version===void 0||$===!0,D=Q.dataReady,ot=R(S,It);Vt(i.TEXTURE_CUBE_MAP,S);let V;if($t){Ht&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,qt,It.width,It.height);for(let J=0;J<6;J++){V=gt[J].mipmaps;for(let ft=0;ft<V.length;ft++){let ut=V[ft];S.format!==En?Lt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Lt,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,qt,ut.width,ut.height,0,Lt,xt,ut.data)}}}else{if(V=S.mipmaps,Ht&&ue){V.length>0&&ot++;let J=At(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,qt,J.width,J.height)}for(let J=0;J<6;J++)if(j){Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Lt,xt,gt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,gt[J].width,gt[J].height,0,Lt,xt,gt[J].data);for(let ft=0;ft<V.length;ft++){let Bt=V[ft].image[J].image;Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Bt.width,Bt.height,Lt,xt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,qt,Bt.width,Bt.height,0,Lt,xt,Bt.data)}}else{Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,xt,gt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Lt,xt,gt[J]);for(let ft=0;ft<V.length;ft++){let ut=V[ft];Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Lt,xt,ut.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,qt,Lt,xt,ut.image[J])}}}g(S)&&f(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Mt(A,S,B,$,Q,Y){let St=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),mt=b(B.internalFormat,St,lt,B.colorSpace),$t=n.get(S),j=n.get(B);if(j.__renderTarget=S,!$t.__hasExternalTextures){let gt=Math.max(1,S.width>>Y),It=Math.max(1,S.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,mt,gt,It,S.depth,0,St,lt,null):e.texImage2D(Q,Y,mt,gt,It,0,St,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,j.__webglTexture,0,Wt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,j.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=_(S.stencilBuffer,Q),St=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Wt(S);Xt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,A)}else{let $=S.textures;for(let Q=0;Q<$.length;Q++){let Y=$[Q],St=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),mt=b(Y.internalFormat,St,lt,Y.colorSpace),$t=Wt(S);B&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,mt,S.width,S.height):Xt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let Q=$.__webglTexture,Y=Wt(S);if(S.depthTexture.format===Ss)Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Cs)Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[$],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,S,B){let $=n.get(A);S!==void 0&&Mt($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ft(A)}function xe(A){let S=A.texture,B=n.get(A),$=n.get(S);A.addEventListener("dispose",C);let Q=A.textures,Y=A.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let mt=0;mt<S.mipmaps.length;mt++)B.__webglFramebuffer[lt][mt]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(St)for(let lt=0,mt=Q.length;lt<mt;lt++){let $t=n.get(Q[lt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Xt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){let mt=Q[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);let $t=r.convert(mt.format,mt.colorSpace),j=r.convert(mt.type),gt=b(mt.internalFormat,$t,j,mt.colorSpace,A.isXRRenderTarget===!0),It=Wt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)Mt(B.__webglFramebuffer[lt][mt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else Mt(B.__webglFramebuffer[lt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,mt=Q.length;lt<mt;lt++){let $t=Q[lt],j=n.get($t);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Vt(i.TEXTURE_2D,$t),Mt(B.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g($t)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Vt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)Mt(B.__webglFramebuffer[mt],A,S,i.COLOR_ATTACHMENT0,lt,mt);else Mt(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,lt,0);g(S)&&f(lt),e.unbindTexture()}A.depthBuffer&&Ft(A)}function Zt(A){let S=A.textures;for(let B=0,$=S.length;B<$;B++){let Q=S[B];if(g(Q)){let Y=M(A),St=n.get(Q).__webglTexture;e.bindTexture(Y,St),f(Y),e.unbindTexture()}}}let Ee=[],F=[];function cn(A){if(A.samples>0){if(Xt(A)===!1){let S=A.textures,B=A.width,$=A.height,Q=i.COLOR_BUFFER_BIT,Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(A),lt=S.length>1;if(lt)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let $t=n.get(S[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Q,i.NEAREST),c===!0&&(Ee.length=0,F.length=0,Ee.push(i.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ee.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let $t=n.get(S[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Wt(A){return Math.min(s.maxSamples,A.samples)}function Xt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function fe(A,S){let B=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Us&&B!==yi&&(Jt.getTransfer(B)===le?($!==En||Q!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function At(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Xt}function wx(i,t){function e(n,s=yi){let r,o=Jt.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.BYTE;if(n===wu)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===Au)return i.ALPHA;if(n===Ru)return i.RGB;if(n===En)return i.RGBA;if(n===Cu)return i.LUMINANCE;if(n===Iu)return i.LUMINANCE_ALPHA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Pu)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===ao||n===co||n===lo||n===ho)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===cc||n===lc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Ec||n===wc||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===Rc||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===Ic||n===Pc||n===Lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zc=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tx={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),f=this._getHandJoint(l,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jc=class extends Ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,x=null,v=new $c,g=e.getContextAttributes(),f=null,M=null,b=[],_=[],R=new Nt,T=null,C=new Ge;C.viewport=new Se;let P=new Ge;P.viewport=new Se;let w=[C,P],y=new Zc,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=b[Z];return it===void 0&&(it=new sr,b[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=b[Z];return it===void 0&&(it=new sr,b[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=b[Z];return it===void 0&&(it=new sr,b[Z]=it),it.getHandSpace()};function O(Z){let it=_.indexOf(Z.inputSource);if(it===-1)return;let Mt=b[it];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,l||o),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<b.length;Z++){let it=_[Z];it!==null&&(_[Z]=null,b[Z].disconnect(it))}L=null,k=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ei(p.framebufferWidth,p.framebufferHeight,{format:En,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,Mt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Cs:Ss,Mt=g.stencil?Rs:Zi);let Pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ei(d.textureWidth,d.textureHeight,{format:En,type:ti,depthTexture:new Eo(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Z){for(let it=0;it<Z.removed.length;it++){let Mt=Z.removed[it],ct=_.indexOf(Mt);ct>=0&&(_[ct]=null,b[ct].disconnect(Mt))}for(let it=0;it<Z.added.length;it++){let Mt=Z.added[it],ct=_.indexOf(Mt);if(ct===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=_.length){_.push(Mt),ct=Ft;break}else if(_[Ft]===null){_[Ft]=Mt,ct=Ft;break}if(ct===-1)break}let Pt=b[ct];Pt&&Pt.connect(Mt)}}let W=new I,et=new I;function X(Z,it,Mt){W.setFromMatrixPosition(it.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);let ct=W.distanceTo(et),Pt=it.projectionMatrix.elements,Ft=Mt.projectionMatrix.elements,Gt=Pt[14]/(Pt[10]-1),xe=Pt[14]/(Pt[10]+1),Zt=(Pt[9]+1)/Pt[5],Ee=(Pt[9]-1)/Pt[5],F=(Pt[8]-1)/Pt[0],cn=(Ft[8]+1)/Ft[0],Wt=Gt*F,Xt=Gt*cn,Ct=ct/(-F+cn),fe=Ct*-F;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(fe),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let At=Gt+Ct,A=xe+Ct,S=Wt-fe,B=Xt+(ct-fe),$=Zt*xe/A*At,Q=Ee*xe/A*At;Z.projectionMatrix.makePerspective(S,B,$,Q,At,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function at(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,Mt=Z.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),y.near=P.near=C.near=it,y.far=P.far=C.far=Mt,(L!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,k=y.far),C.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;let ct=Z.parent,Pt=y.cameras;at(y,ct);for(let Ft=0;Ft<Pt.length;Ft++)at(Pt[Ft],ct);Pt.length===2?X(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),pt(Z,y,ct)};function pt(Z,it,Mt){Mt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=or*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let wt=null;function Vt(Z,it){if(h=it.getViewerPose(l||o),x=it,h!==null){let Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ct=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Ft=0;Ft<Mt.length;Ft++){let Gt=Mt[Ft],xe=null;if(p!==null)xe=p.getViewport(Gt);else{let Ee=u.getViewSubImage(d,Gt);xe=Ee.viewport,Ft===0&&(t.setRenderTargetTextures(M,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(M))}let Zt=w[Ft];Zt===void 0&&(Zt=new Ge,Zt.layers.enable(Ft),Zt.viewport=new Se,w[Ft]=Zt),Zt.matrix.fromArray(Gt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Gt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ft===0&&(y.matrix.copy(Zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Zt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Ft=u.getDepthInformation(Mt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,s.renderState)}}for(let Mt=0;Mt<b.length;Mt++){let ct=_[Mt],Pt=b[Mt];ct!==null&&Pt!==void 0&&Pt.update(ct,it,l||o)}wt&&wt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),x=null}let he=new ku;he.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){wt=Z},this.dispose=function(){}}},Gi=new Fn,Cx=new re;function Ix(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Bu(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,b,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),v(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,M,b):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===De&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===De&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let M=t.get(f),b=M.envMap,_=M.envMapRotation;b&&(g.envMap.value=b,Gi.copy(_),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Gi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,M,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=b*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){let M=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Px(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let _=b.program;n.uniformBlockBinding(M,_)}function l(M,b){let _=s[M.id];_===void 0&&(x(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));let R=b.program;n.updateUBOMapping(M,R);let T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let b=u();M.__bindingPointIndex=b;let _=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let b=s[M.id],_=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=_.length;T<C;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,y=P.length;w<y;w++){let L=P[w];if(p(L,T,w,R)===!0){let k=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],G=0;for(let K=0;K<O.length;K++){let W=O[K],et=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+G,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,G),G+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,_,R){let T=M.value,C=b+"_"+_;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{let P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(M){let b=M.uniforms,_=0,R=16;for(let C=0,P=b.length;C<P;C++){let w=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,L=w.length;y<L;y++){let k=w[y],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,K=O.length;G<K;G++){let W=O[G],et=v(W),X=_%R,at=X%et.boundary,pt=X+at;_+=at,pt!==0&&R-pt<et.storage&&(_+=R-pt),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=et.storage}}}let T=_%R;return T>0&&(_+=R-T),M.__size=_,M.__cache={},this}function v(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){let b=M.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var wo=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),v=new Int32Array(4),g=null,f=null,M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=Ei,this.toneMappingExposure=1;let _=this,R=!1,T=0,C=0,P=null,w=-1,y=null,L=new Se,k=new Se,O=null,G=new Et(0),K=0,W=e.width,et=e.height,X=1,at=null,pt=null,wt=new Se(0,0,W,et),Vt=new Se(0,0,W,et),he=!1,Z=new cr,it=!1,Mt=!1,ct=new re,Pt=new re,Ft=new I,Gt=new Se,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Ee(){return P===null?X:1}let F=n;function cn(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let U="webgl2";if(F=cn(U,E),F===null)throw cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Wt,Xt,Ct,fe,At,A,S,B,$,Q,Y,St,lt,mt,$t,j,gt,It,Lt,xt,qt,Ht,ue,D;function ot(){Wt=new Y0(F),Wt.init(),Ht=new wx(F,Wt),Xt=new H0(F,Wt,t,Ht),Ct=new Sx(F,Wt),Xt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),fe=new J0(F),At=new lx,A=new Ex(F,Wt,Ct,At,Xt,Ht,fe),S=new G0(_),B=new q0(_),$=new ip(F),ue=new k0(F,$),Q=new Z0(F,$,fe,ue),Y=new Q0(F,Q,$,fe),Lt=new K0(F,Xt,A),j=new V0(At),St=new cx(_,S,B,Wt,Xt,ue,j),lt=new Ix(_,At),mt=new ux,$t=new xx(Wt),It=new B0(_,S,B,Ct,Y,p,c),gt=new yx(_,Y,Xt),D=new Px(F,fe,Xt,Ct),xt=new z0(F,Wt,fe),qt=new $0(F,Wt,fe),fe.programs=St.programs,_.capabilities=Xt,_.extensions=Wt,_.properties=At,_.renderLists=mt,_.shadowMap=gt,_.state=Ct,_.info=fe}ot();let V=new Jc(_,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(W,et,!1))},this.getSize=function(E){return E.set(W,et)},this.setSize=function(E,U,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,et=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*X,et*X).floor()},this.setDrawingBufferSize=function(E,U,z){W=E,et=U,X=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,U,z,H){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,U,z,H),Ct.viewport(L.copy(wt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,U,z,H){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,U,z,H),Ct.scissor(k.copy(Vt).multiplyScalar(X).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){Ct.setScissorTest(he=E)},this.setOpaqueSort=function(E){at=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(E=!0,U=!0,z=!0){let H=0;if(E){let N=!1;if(P!==null){let nt=P.texture.format;N=nt===Sl||nt===Ml||nt===yl}if(N){let nt=P.texture.type,dt=nt===ti||nt===Zi||nt===rr||nt===Rs||nt===xl||nt===_l,_t=It.getClearColor(),vt=It.getClearAlpha(),Dt=_t.r,kt=_t.g,yt=_t.b;dt?(x[0]=Dt,x[1]=kt,x[2]=yt,x[3]=vt,F.clearBufferuiv(F.COLOR,0,x)):(v[0]=Dt,v[1]=kt,v[2]=yt,v[3]=vt,F.clearBufferiv(F.COLOR,0,v))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),$t.dispose(),At.dispose(),S.dispose(),B.dispose(),Y.dispose(),ue.dispose(),D.dispose(),St.dispose(),V.dispose(),V.removeEventListener("sessionstart",nh),V.removeEventListener("sessionend",ih),Oi.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=fe.autoReset,U=gt.enabled,z=gt.autoUpdate,H=gt.needsUpdate,N=gt.type;ot(),fe.autoReset=E,gt.enabled=U,gt.autoUpdate=z,gt.needsUpdate=H,gt.type=N}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){let U=E.target;U.removeEventListener("dispose",Bt),Me(U)}function Me(E){Ne(E),At.remove(E)}function Ne(E){let U=At.get(E).programs;U!==void 0&&(U.forEach(function(z){St.releaseProgram(z)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,H,N,nt){U===null&&(U=xe);let dt=N.isMesh&&N.matrixWorld.determinant()<0,_t=Rd(E,U,z,H,N);Ct.setMaterial(H,dt);let vt=z.index,Dt=1;if(H.wireframe===!0){if(vt=Q.getWireframeAttribute(z),vt===void 0)return;Dt=2}let kt=z.drawRange,yt=z.attributes.position,Kt=kt.start*Dt,de=(kt.start+kt.count)*Dt;nt!==null&&(Kt=Math.max(Kt,nt.start*Dt),de=Math.min(de,(nt.start+nt.count)*Dt)),vt!==null?(Kt=Math.max(Kt,0),de=Math.min(de,vt.count)):yt!=null&&(Kt=Math.max(Kt,0),de=Math.min(de,yt.count));let pe=de-Kt;if(pe<0||pe===1/0)return;ue.setup(N,H,_t,z,vt);let Ye,jt=xt;if(vt!==null&&(Ye=$.get(vt),jt=qt,jt.setIndex(Ye)),N.isMesh)H.wireframe===!0?(Ct.setLineWidth(H.wireframeLinewidth*Ee()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(N.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),Ct.setLineWidth(bt*Ee()),N.isLineSegments?jt.setMode(F.LINES):N.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else N.isPoints?jt.setMode(F.POINTS):N.isSprite&&jt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let bt=N._multiDrawStarts,Hn=N._multiDrawCounts,te=N._multiDrawCount,vn=vt?$.get(vt).bytesPerElement:1,es=At.get(H).currentProgram.getUniforms();for(let je=0;je<te;je++)es.setValue(F,"_gl_DrawID",je),jt.render(bt[je]/vn,Hn[je])}else if(N.isInstancedMesh)jt.renderInstances(Kt,pe,N.count);else if(z.isInstancedBufferGeometry){let bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Hn=Math.min(z.instanceCount,bt);jt.renderInstances(Kt,pe,Hn)}else jt.render(Kt,pe)};function ie(E,U,z){E.transparent===!0&&E.side===_e&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,Ir(E,U,z),E.side=wi,E.needsUpdate=!0,Ir(E,U,z),E.side=_e):Ir(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),f=$t.get(z),f.init(U),b.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let nt=N.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let _t=nt[dt];ie(_t,z,N),H.add(_t)}else ie(nt,z,N),H.add(nt)}),b.pop(),f=null,H},this.compileAsync=function(E,U,z=null){let H=this.compile(E,U,z);return new Promise(N=>{function nt(){if(H.forEach(function(dt){At.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){N(E);return}setTimeout(nt,10)}Wt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let _n=null;function zn(E){_n&&_n(E)}function nh(){Oi.stop()}function ih(){Oi.start()}let Oi=new ku;Oi.setAnimationLoop(zn),typeof self!="undefined"&&Oi.setContext(self),this.setAnimationLoop=function(E){_n=E,V.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},V.addEventListener("sessionstart",nh),V.addEventListener("sessionend",ih),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,P),f=$t.get(E,b.length),f.init(U),b.push(f),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,it=j.init(this.clippingPlanes,Mt),g=mt.get(E,M.length),g.init(),M.push(g),V.enabled===!0&&V.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&xa(nt,U,-1/0,_.sortObjects)}xa(E,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(at,pt),Zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Zt&&It.addToRenderList(g,E),this.info.render.frame++,it===!0&&j.beginShadows();let z=f.state.shadowsArray;gt.render(z,E,U),it===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(f.setupLights(),U.isArrayCamera){let nt=U.cameras;if(N.length>0)for(let dt=0,_t=nt.length;dt<_t;dt++){let vt=nt[dt];rh(H,N,E,vt)}Zt&&It.render(E);for(let dt=0,_t=nt.length;dt<_t;dt++){let vt=nt[dt];sh(g,E,vt,vt.viewport)}}else N.length>0&&rh(H,N,E,U),Zt&&It.render(E),sh(g,E,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,U),ue.resetDefaultState(),w=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],it===!0&&j.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function xa(E,U,z,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){H&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);let dt=Y.update(E),_t=E.material;_t.visible&&g.push(E,dt,_t,z,Gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let dt=Y.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Gt.copy(dt.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(_t)){let vt=dt.groups;for(let Dt=0,kt=vt.length;Dt<kt;Dt++){let yt=vt[Dt],Kt=_t[yt.materialIndex];Kt&&Kt.visible&&g.push(E,dt,Kt,z,Gt.z,yt)}}else _t.visible&&g.push(E,dt,_t,z,Gt.z,null)}}let nt=E.children;for(let dt=0,_t=nt.length;dt<_t;dt++)xa(nt[dt],U,z,H)}function sh(E,U,z,H){let N=E.opaque,nt=E.transmissive,dt=E.transparent;f.setupLightsView(z),it===!0&&j.setGlobalState(_.clippingPlanes,z),H&&Ct.viewport(L.copy(H)),N.length>0&&Cr(N,U,z),nt.length>0&&Cr(nt,U,z),dt.length>0&&Cr(dt,U,z),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function rh(E,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?xr:ti,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let nt=f.state.transmissionRenderTarget[H.id],dt=H.viewport||L;nt.setSize(dt.z,dt.w);let _t=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(G),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Zt&&It.render(z);let vt=_.toneMapping;_.toneMapping=Ei;let Dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),it===!0&&j.setGlobalState(_.clippingPlanes,H),Cr(E,z,H),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let yt=0,Kt=U.length;yt<Kt;yt++){let de=U[yt],pe=de.object,Ye=de.geometry,jt=de.material,bt=de.group;if(jt.side===_e&&pe.layers.test(H.layers)){let Hn=jt.side;jt.side=De,jt.needsUpdate=!0,oh(pe,z,H,Ye,jt,bt),jt.side=Hn,jt.needsUpdate=!0,kt=!0}}kt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}_.setRenderTarget(_t),_.setClearColor(G,K),Dt!==void 0&&(H.viewport=Dt),_.toneMapping=vt}function Cr(E,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){let dt=E[N],_t=dt.object,vt=dt.geometry,Dt=H===null?dt.material:H,kt=dt.group;_t.layers.test(z.layers)&&oh(_t,U,z,vt,Dt,kt)}}function oh(E,U,z,H,N,nt){E.onBeforeRender(_,U,z,H,N,nt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(_,U,z,H,E,nt),N.transparent===!0&&N.side===_e&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,_.renderBufferDirect(z,U,H,N,E,nt),N.side=wi,N.needsUpdate=!0,_.renderBufferDirect(z,U,H,N,E,nt),N.side=_e):_.renderBufferDirect(z,U,H,N,E,nt),E.onAfterRender(_,U,z,H,N,nt)}function Ir(E,U,z){U.isScene!==!0&&(U=xe);let H=At.get(E),N=f.state.lights,nt=f.state.shadowsArray,dt=N.state.version,_t=St.getParameters(E,N.state,nt,U,z),vt=St.getProgramCacheKey(_t),Dt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Bt),Dt=new Map,H.programs=Dt);let kt=Dt.get(vt);if(kt!==void 0){if(H.currentProgram===kt&&H.lightsStateVersion===dt)return ch(E,_t),kt}else _t.uniforms=St.getUniforms(E),E.onBeforeCompile(_t,_),kt=St.acquireProgram(_t,vt),Dt.set(vt,kt),H.uniforms=_t.uniforms;let yt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=j.uniform),ch(E,_t),H.needsLights=Id(E),H.lightsStateVersion=dt,H.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=kt,H.uniformsList=null,kt}function ah(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Es.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ch(E,U){let z=At.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Rd(E,U,z,H,N){U.isScene!==!0&&(U=xe),A.resetTextureUnits();let nt=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,_t=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Us,vt=(H.isMeshStandardMaterial?B:S).get(H.envMap||dt),Dt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,de=!!z.morphAttributes.color,pe=Ei;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=_.toneMapping);let Ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=Ye!==void 0?Ye.length:0,bt=At.get(H),Hn=f.state.lights;if(it===!0&&(Mt===!0||E!==y)){let ln=E===y&&H.id===w;j.setState(H,E,ln)}let te=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Hn.state.version||bt.outputColorSpace!==_t||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==vt||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==j.numPlanes||bt.numIntersection!==j.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==kt||bt.morphTargets!==yt||bt.morphNormals!==Kt||bt.morphColors!==de||bt.toneMapping!==pe||bt.morphTargetsCount!==jt)&&(te=!0):(te=!0,bt.__version=H.version);let vn=bt.currentProgram;te===!0&&(vn=Ir(H,U,N));let es=!1,je=!1,Vs=!1,me=vn.getUniforms(),Ln=bt.uniforms;if(Ct.useProgram(vn.program)&&(es=!0,je=!0,Vs=!0),H.id!==w&&(w=H.id,je=!0),es||y!==E){Ct.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),Of(ct),Bf(ct),me.setValue(F,"projectionMatrix",ct)):me.setValue(F,"projectionMatrix",E.projectionMatrix),me.setValue(F,"viewMatrix",E.matrixWorldInverse);let di=me.map.cameraPosition;di!==void 0&&di.setValue(F,Ft.setFromMatrixPosition(E.matrixWorld)),Xt.logarithmicDepthBuffer&&me.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,je=!0,Vs=!0)}if(N.isSkinnedMesh){me.setOptional(F,N,"bindMatrix"),me.setOptional(F,N,"bindMatrixInverse");let ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),me.setValue(F,"boneTexture",ln.boneTexture,A))}N.isBatchedMesh&&(me.setOptional(F,N,"batchingTexture"),me.setValue(F,"batchingTexture",N._matricesTexture,A),me.setOptional(F,N,"batchingIdTexture"),me.setValue(F,"batchingIdTexture",N._indirectTexture,A),me.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(F,"batchingColorTexture",N._colorsTexture,A));let Gs=z.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Lt.update(N,z,vn),(je||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,me.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ln.envMap.value=vt,Ln.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ln.envMapIntensity.value=U.environmentIntensity),je&&(me.setValue(F,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&Cd(Ln,Vs),nt&&H.fog===!0&&lt.refreshFogUniforms(Ln,nt),lt.refreshMaterialUniforms(Ln,H,X,et,f.state.transmissionRenderTarget[E.id]),Es.upload(F,ah(bt),Ln,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Es.upload(F,ah(bt),Ln,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(F,"center",N.center),me.setValue(F,"modelViewMatrix",N.modelViewMatrix),me.setValue(F,"normalMatrix",N.normalMatrix),me.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let ln=H.uniformsGroups;for(let di=0,fi=ln.length;di<fi;di++){let lh=ln[di];D.update(lh,vn),D.bind(lh,vn)}}return vn}function Cd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Id(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,z){At.get(E.texture).__webglTexture=U,At.get(E.depthTexture).__webglTexture=z;let H=At.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let z=At.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){P=E,T=U,C=z;let H=!0,N=null,nt=!1,dt=!1;if(E){let vt=At.get(E);if(vt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(vt.__hasExternalTextures)A.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let yt=E.depthTexture;if(vt.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(E.width!==yt.image.width||E.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);let kt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?N=kt[U][z]:N=kt[U],nt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=At.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[z]:N=kt,L.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else L.copy(wt).multiplyScalar(X).floor(),k.copy(Vt).multiplyScalar(X).floor(),O=he;if(Ct.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&Ct.drawBuffers(E,N),Ct.viewport(L),Ct.scissor(k),Ct.setScissorTest(O),nt){let vt=At.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,z)}else if(dt){let vt=At.get(E.texture),Dt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,z||0,Dt)}w=-1},this.readRenderTargetPixels=function(E,U,z,H,N,nt,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){Ct.bindFramebuffer(F.FRAMEBUFFER,_t);try{let vt=E.texture,Dt=vt.format,kt=vt.type;if(!Xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&z>=0&&z<=E.height-N&&F.readPixels(U,z,H,N,Ht.convert(Dt),Ht.convert(kt),nt)}finally{let vt=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,H,N,nt,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){let vt=E.texture,Dt=vt.format,kt=vt.type;if(!Xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&z>=0&&z<=E.height-N){Ct.bindFramebuffer(F.FRAMEBUFFER,_t);let yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),F.readPixels(U,z,H,N,Ht.convert(Dt),Ht.convert(kt),0);let Kt=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Kt);let de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ff(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(yt),F.deleteSync(de),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-z),N=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),dt=U!==null?U.x:0,_t=U!==null?U.y:0;A.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,dt,_t,N,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,H=null,N=0){E.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let nt,dt,_t,vt,Dt,kt,yt,Kt,de,pe=E.isCompressedTexture?E.mipmaps[N]:E.image;z!==null?(nt=z.max.x-z.min.x,dt=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,vt=z.min.x,Dt=z.min.y,kt=z.isBox3?z.min.z:0):(nt=pe.width,dt=pe.height,_t=pe.depth||1,vt=0,Dt=0,kt=0),H!==null?(yt=H.x,Kt=H.y,de=H.z):(yt=0,Kt=0,de=0);let Ye=Ht.convert(U.format),jt=Ht.convert(U.type),bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Hn=F.getParameter(F.UNPACK_ROW_LENGTH),te=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vn=F.getParameter(F.UNPACK_SKIP_PIXELS),es=F.getParameter(F.UNPACK_SKIP_ROWS),je=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);let Vs=E.isDataArrayTexture||E.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ln=At.get(E),Gs=At.get(U),ln=At.get(Ln.__renderTarget),di=At.get(Gs.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<_t;fi++)Vs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(E).__webglTexture,N,kt+fi),E.isDepthTexture?(me&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(U).__webglTexture,N,de+fi),F.blitFramebuffer(vt,Dt,nt,dt,yt,Kt,nt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):me?F.copyTexSubImage3D(bt,N,yt,Kt,de+fi,vt,Dt,nt,dt):F.copyTexSubImage2D(bt,N,yt,Kt,de+fi,vt,Dt,nt,dt);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(bt,N,yt,Kt,de,nt,dt,_t,Ye,jt,pe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,yt,Kt,de,nt,dt,_t,Ye,pe.data):F.texSubImage3D(bt,N,yt,Kt,de,nt,dt,_t,Ye,jt,pe):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,yt,Kt,nt,dt,Ye,jt,pe.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,yt,Kt,pe.width,pe.height,Ye,pe.data):F.texSubImage2D(F.TEXTURE_2D,N,yt,Kt,nt,dt,Ye,jt,pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Hn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,te),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vn),F.pixelStorei(F.UNPACK_SKIP_ROWS,es),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je),N===0&&U.generateMipmaps&&F.generateMipmap(bt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,H=null,N=0){return E.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,H,N)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,Ct.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var To=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},He=new I,lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hr=class extends On{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,Zs=new I,xs=new I,_s=new I,vs=new Nt,$s=new Nt,Wu=new re,Qr=new I,Js=new I,jr=new I,lu=new Nt,qa=new Nt,hu=new Nt,Ro=class extends Ae{constructor(t=new hr){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new lr(n,3,0,!1)),gs.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;to(Qr.set(-.5,-.5,0),_s,o,xs,s,r),to(Js.set(.5,-.5,0),_s,o,xs,s,r),to(jr.set(.5,.5,0),_s,o,xs,s,r),lu.set(0,0),qa.set(1,0),hu.set(1,1);let a=t.ray.intersectTriangle(Qr,Js,jr,!1,Zs);if(a===null&&(to(Js.set(-.5,.5,0),_s,o,xs,s,r),qa.set(0,1),a=t.ray.intersectTriangle(Qr,jr,Js,!1,Zs),a===null))return;let c=t.ray.origin.distanceTo(Zs);c<t.near||c>t.far||e.push({distance:c,point:Zs.clone(),uv:Mi.getInterpolation(Zs,Qr,Js,jr,lu,qa,hu,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function to(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*vs.x-s*vs.y,$s.y=s*vs.x+r*vs.y):$s.copy(vs),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(Wu)}var Kc=class extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=nn,h=nn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends Qt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new re,uu=new re,eo=[],du=new ni,Lx=new re,Ks=new Ut,Qs=new ii,Co=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),du.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),Qs.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),uu.multiplyMatrices(n,ys),Ks.matrixWorld=uu,Ks.raycast(t,eo);for(let o=0,a=eo.length;o<a;o++){let c=eo[o];c.instanceId=r,c.object=this,e.push(c)}eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kc(new Float32Array(s*this.count),s,this.count,vl,Nn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var dr=class extends On{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Io=new I,Po=new I,fu=new re,js=new ar,no=new ii,Ya=new I,pu=new I,Qc=class extends Ae{constructor(t=new ve,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Io.fromBufferAttribute(e,s-1),Po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Io.distanceTo(Po);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;fu.copy(s).invert(),js.copy(t.ray).applyMatrix4(fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=p,g=x-1;v<g;v+=l){let f=h.getX(v),M=h.getX(v+1),b=io(this,t,js,c,f,M);b&&e.push(b)}if(this.isLineLoop){let v=h.getX(x-1),g=h.getX(p),f=io(this,t,js,c,v,g);f&&e.push(f)}}else{let p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=p,g=x-1;v<g;v+=l){let f=io(this,t,js,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){let v=io(this,t,js,c,x-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function io(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Io.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),e.distanceSqToSegment(Io,Po,Ya,pu)>n)return;Ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ya);if(!(c<t.near||c>t.far))return{distance:c,point:pu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var mu=new I,gu=new I,Lo=class extends Qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mu.fromBufferAttribute(e,s),gu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mu.distanceTo(gu);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jc=class extends On{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xu=new re,tl=new ar,so=new ii,ro=new I,Do=class extends Ae{constructor(t=new ve,e=new jc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;xu.copy(s).invert(),tl.copy(t.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=d,v=p;x<v;x++){let g=l.getX(x);ro.fromBufferAttribute(u,g),_u(ro,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,v=p;x<v;x++)ro.fromBufferAttribute(u,x),_u(ro,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _u(i,t,e,n,s,r,o){let a=tl.distanceSqToPoint(i);if(a<e){let c=new I;tl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ai=class extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fr=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Le=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,v=[],g=n/2,f=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(p,2));function M(){let _=new I,R=new I,T=0,C=(e-t)/n;for(let P=0;P<=r;P++){let w=[],y=P/r,L=y*(e-t)+t;for(let k=0;k<=s;k++){let O=k/s,G=O*c+a,K=Math.sin(G),W=Math.cos(G);R.x=L*K,R.y=-y*n+g,R.z=L*W,u.push(R.x,R.y,R.z),_.set(K,C,W).normalize(),d.push(_.x,_.y,_.z),p.push(O,1-y),w.push(x++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let y=v[w][P],L=v[w+1][P],k=v[w+1][P+1],O=v[w][P+1];(t>0||w!==0)&&(h.push(y,L,O),T+=3),(e>0||w!==r-1)&&(h.push(L,k,O),T+=3)}l.addGroup(f,T,0),f+=T}function b(_){let R=x,T=new Nt,C=new I,P=0,w=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*y,0),d.push(0,y,0),p.push(.5,.5),x++;let L=x;for(let k=0;k<=s;k++){let G=k/s*c+a,K=Math.cos(G),W=Math.sin(G);C.x=w*W,C.y=g*y,C.z=w*K,u.push(C.x,C.y,C.z),d.push(0,y,0),T.x=K*.5+.5,T.y=W*.5*y+.5,p.push(T.x,T.y),x++}for(let k=0;k<s;k++){let O=R+k,G=L+k;_===!0?h.push(G,G+1,O):h.push(G+1,G,O),P+=3}l.addGroup(f,P,_===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tn=class i extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},el=class i extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new I,_=new I,R=new I;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],_),p(e[T+2],R),c(b,_,R,M)}function c(M,b,_,R){let T=R+1,C=[];for(let P=0;P<=T;P++){C[P]=[];let w=M.clone().lerp(_,P/T),y=b.clone().lerp(_,P/T),L=T-P;for(let k=0;k<=L;k++)k===0&&P===T?C[P][k]=w:C[P][k]=w.clone().lerp(y,k/L)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){let y=Math.floor(w/2);w%2===0?(d(C[P][y+1]),d(C[P+1][y]),d(C[P][y])):(d(C[P][y+1]),d(C[P+1][y+1]),d(C[P+1][y]))}}function l(M){let b=new I;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let M=new I;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=g(M)/2/Math.PI+.5,R=f(M)/Math.PI+.5;o.push(_,1-R)}x(),u()}function u(){for(let M=0;M<o.length;M+=6){let b=o[M+0],_=o[M+2],R=o[M+4],T=Math.max(b,_,R),C=Math.min(b,_,R);T>.9&&C<.1&&(b<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,b){let _=M*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function x(){let M=new I,b=new I,_=new I,R=new I,T=new Nt,C=new Nt,P=new Nt;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),R.copy(M).add(b).add(_).divideScalar(3);let L=g(R);v(T,y+0,M,L),v(C,y+2,b,L),v(P,y+4,_,L)}}function v(M,b,_,R){R<0&&M.x===1&&(o[b]=M.x-1),_.x===0&&_.z===0&&(o[b]=R/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var pr=class i extends el{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Uo=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new I,x=new Nt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let f=r+g/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let v=0;v<s;v++){let g=v*(n+1);for(let f=0;f<n;f++){let M=f+g,b=M,_=M+n+1,R=M+n+2,T=M+1;a.push(b,_,T),a.push(_,R,T)}}this.setIndex(a),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var dn=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,p=[],x=[],v=[],g=[];for(let f=0;f<=n;f++){let M=[],b=f/n,_=0;f===0&&o===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+b*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+_,1-b),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let b=h[f][M+1],_=h[f][M],R=h[f+1][M],T=h[f+1][M+1];(f!==0||o>0)&&p.push(b,_,T),(f!==n-1||c<Math.PI)&&p.push(_,R,T)}this.setIndex(p),this.setAttribute("position",new ee(x,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mr=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let v=x/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let v=(s+1)*p+x-1,g=(s+1)*(p-1)+x-1,f=(s+1)*(p-1)+x,M=(s+1)*p+x;o.push(v,g,M),o.push(g,f,M)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var be=class extends On{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},No=class extends be{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function oo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nl=class extends Ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=t,a=2*e-n;break;case mh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ph:o=t,c=2*n-e;break;case mh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),v=x*x,g=v*x,f=-d*g+2*d*v-d*x,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*x+1,b=(-1-p)*g+(1.5+p)*v+.5*x,_=p*g-p*v;for(let R=0;R!==a;++R)r[R]=f*o[h+R]+M*o[l+R]+b*o[c+R]+_*o[u+R];return r}},il=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},sl=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oo(e,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oo(t.times,Array),values:oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case Dc:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return Dc;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let x=0;x!==n;++x){let v=e[u+x];if(v!==e[d+x]||v!==e[p+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Dc;var $i=class extends An{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=fo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends An{};rl.prototype.ValueTypeName="color";var ol=class extends An{};ol.prototype.ValueTypeName="number";var al=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)un.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fo=class extends An{InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends An{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=fo;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends An{};cl.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},Ux=new ll,hl=class{constructor(t){this.manager=t!==void 0?t:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Bo=class extends Oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Za=new re,vu=new I,yu=new I,ul=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yu),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var dl=class extends ul{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new dl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wl="\\[\\]\\.:\\/",Nx=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",Fx="[^"+wl.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",Tl),Bx=/(WCOD+)?/.source.replace("WCOD",Fx),kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),Hx=new RegExp("^"+Ox+Bx+kx+zx+"$"),Vx=["material","materials","bones","map"],fl=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=fl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var m={d:0,speed:0,gear:0,mounted:!0,mountT:1,mountDir:0,clock:0,hp:100,maxHp:100,kills:0,escaped:0,total:0,shots:0,hits:0,view:0,enemies:[],projs:[],pickups:[],arches:[],scene:null,camera:null,renderer:null,timeU:{value:0},quality:3,state:"title",shake:0,slow:1,aim:null,lastEnemyHitT:0};var W_=new I;var Rt=(i,t,e)=>Math.min(e,Math.max(t,i)),ne=(i,t,e)=>i+(t-i)*e,si=(i,t,e,n)=>ne(i,t,1-Math.exp(-e*n)),rt=(i,t)=>i+Math.random()*(t-i),Al=i=>i[Math.floor(Math.random()*i.length)],qo=(i,t,e)=>{let n=Rt((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Yo(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Vo(i,t){let e=Math.imul(i|0,374761393)+Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function Ci(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Vo(e,n),l=Vo(e+1,n),h=Vo(e,n+1),u=Vo(e+1,n+1);return ne(ne(c,l,o),ne(h,u,o),a)}function Zo(i,t,e=4){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*Ci(i*r,t*r),r*=2,s*=.5;return n}var Go=new I,Wo=new I,Ki=new I,Xo=new I;function _r(i,t,e,n,s,r){Go.subVectors(t,i);let o=Go.length(),a=e+n-.002;o>a&&(Go.multiplyScalar(a/o),o=a),o<.05&&(o=.05),Wo.copy(Go).normalize();let c=(e*e-n*n+o*o)/(2*o),l=Math.sqrt(Math.max(0,e*e-c*c));return Ki.copy(s),Ki.addScaledVector(Wo,-Ki.dot(Wo)),Ki.lengthSq()<1e-6&&Ki.set(0,0,1),Ki.normalize(),r.copy(i).addScaledVector(Wo,c).addScaledVector(Ki,l),r}var Gx=new I(0,1,0);function Bn(i,t,e,n){Xo.subVectors(e,t);let s=Xo.length();i.position.copy(t).addScaledVector(Xo,.5),s>1e-5&&i.quaternion.setFromUnitVectors(Gx,Xo.multiplyScalar(1/s)),i.scale.set(n,s,n)}function Ke(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Rl(i,t,e,n,s=!0,r=!0){for(let o=s?-1:0;o<=(s?1:0);o++)for(let a=r?-1:0;a<=(r?1:0);a++)i.save(),i.translate(o*t,a*e),n(),i.restore()}function fn(i,{repeat:t=!0,srgb:e=!0,aniso:n=4}={}){let s=new Ai(i);return t&&(s.wrapS=s.wrapT=jn),e&&(s.colorSpace=Te),s.anisotropy=n,s}var Cl=1.4,Rn=[-4.2,-1.4,1.4,4.2],Xu=[0,9,17,26,35,44],vr=330,qu=50,Os=[{id:"ak",name:"AK-47",mag:30,reserve:1/0,max:1/0,rate:.1,range:130,spread:.014,reload:1.5,kind:"bullet",auto:!0,dmg:{walker:34,truck:5,armor:4,chopper:12}},{id:"smg",name:"VECTOR SMG",mag:35,reserve:1/0,max:1/0,rate:.065,range:75,spread:.022,reload:1.3,kind:"bullet",auto:!0,dmg:{walker:22,truck:3,armor:2,chopper:8}},{id:"shotgun",name:"SPAS-12",mag:6,reserve:24,max:48,rate:.75,range:48,spread:.055,pellets:8,reload:1.9,kind:"bullet",auto:!1,dmg:{walker:22,truck:2,armor:1.5,chopper:3}},{id:"sniper",name:"AWM SNIPER",mag:5,reserve:15,max:30,rate:1.05,range:280,spread:.0025,reload:2.2,kind:"bullet",auto:!1,zoom:!0,dmg:{walker:170,truck:30,armor:24,chopper:230}},{id:"rocket",name:"RPG-7",mag:1,reserve:6,max:14,rate:1.4,range:190,aoe:8,reload:1.6,kind:"rocket",auto:!1,speed:115,dmg:{walker:220,truck:340,armor:380,chopper:390}},{id:"frag",name:"M79 FRAG",mag:1,reserve:8,max:16,rate:1,range:110,aoe:10,reload:1.3,kind:"frag",auto:!1,speed:62,dmg:{walker:170,truck:130,armor:110,chopper:300}},{id:"nuke",name:"TACTICAL NUKE",mag:1,reserve:1,max:2,rate:3,range:300,aoe:58,reload:3,kind:"nuke",auto:!1,speed:95,minRange:85,dmg:{walker:99999,truck:3e3,armor:3e3,chopper:3e3}}],yr={terrorist:{cls:"walker",name:"TERRORIST",hp:100,r:.55,speed:2.4,range:85,standoff:[38,62],dmg:5,rate:[.32,.6],gun:"ak",best:["sniper","ak"]},pirate:{cls:"walker",name:"ROAD PIRATE",hp:110,r:.55,speed:3.4,range:40,standoff:[18,30],dmg:11,rate:[1.1,1.7],gun:"shotgun",best:["shotgun","ak"]},kidnapper:{cls:"walker",name:"KIDNAPPER",hp:90,r:.55,speed:6,range:34,standoff:[7,13],dmg:3.2,rate:[.13,.22],gun:"smg",best:["smg","ak"]},gunman:{cls:"walker",name:"UNKNOWN GUNMAN",hp:100,r:.55,speed:2.8,range:65,standoff:[28,48],dmg:5.5,rate:[.4,.8],gun:"ak",best:["sniper","ak"]},truck:{cls:"truck",name:"ENEMY TRUCK",hp:1200,r:2.1,best:["nuke","rocket"]},armor:{cls:"armor",name:"ARMORED CAR",hp:1500,r:1.9,best:["rocket","nuke"]},chopper:{cls:"chopper",name:"ATTACK CHOPPER",hp:700,r:2.2,best:["sniper","rocket","frag"]}};function Yu(){let i=[],t=(s,r,o={})=>i.push({t:s,type:r,...o}),e=(s,r,o)=>t(s,"group",{kinds:r,n:o});t(1,"msg",{text:"SHIFT GEAR UP TO START RIDING",sub:"Use \u25C0 \u25B6 to change lanes and dodge \xB7 aim is automatic",time:5}),e(9,["terrorist"],3),t(14,"crate"),e(24,["terrorist","gunman"],4),e(37,["kidnapper"],3),e(44,["terrorist"],3),e(55,["pirate"],4),t(61,"med"),t(67,"truck",{guards:2,msg:"ROADBLOCK AHEAD \u2014 USE NUKE OR ROCKETS"}),t(82,"crate"),e(86,["gunman"],4),e(95,["terrorist","pirate"],4),t(103,"armor"),e(108,["terrorist"],3),t(118,"chopper",{msg:"ATTACK CHOPPER \u2014 SNIPER / ROCKET / FRAG"}),t(124,"crate"),e(134,["kidnapper","pirate"],4),t(142,"med"),t(153,"truck",{guards:3}),e(160,["gunman","terrorist"],4),t(170,"chopper"),t(176,"crate"),e(184,["kidnapper"],5),t(192,"armor"),e(204,["terrorist","pirate","gunman"],5),t(212,"med"),t(216,"truck",{guards:2}),e(228,["kidnapper","gunman"],5),t(233,"crate"),t(238,"chopper"),e(246,["pirate","terrorist"],4),e(255,["terrorist","gunman","kidnapper"],6),t(258,"armor"),t(266,"crate"),t(272,"chopper"),t(277,"chopper"),e(284,["pirate","gunman"],5),t(288,"truck",{guards:3}),t(294,"med"),t(303,"crate"),t(305,"msg",{text:"WARLORD CONVOY INBOUND",sub:"Destroy them all to finish the mission",time:5}),t(309,"truck",{guards:2,final:!0}),t(312,"armor",{final:!0}),e(314,["terrorist","kidnapper","gunman","pirate"],6),t(318,"chopper",{final:!0}),i.sort((s,r)=>s.t-r.t);let n=0;for(let s of i)s.type==="group"?n+=s.n:(s.type==="truck"||s.type==="armor"||s.type==="chopper")&&(n+=1);return{ev:i,total:n}}function kn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ve,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Zu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][d]);let x=Zu(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Zu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Qt(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<e;x++){let v=h.getComponent(d,x);a.setComponent(d+u,x,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Mr(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,b=a.length;M<b;M++){let _=a[M],R=i.attributes[_];c[_]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let T=i.morphAttributes[_];T&&(l[_]||(l[_]=[]),T.forEach((C,P)=>{let w=new C.array.constructor(C.count*C.itemSize);l[_][P]=new C.constructor(w,C.itemSize,C.normalized)}))}let p=t*.5,x=Math.log10(1/t),v=Math.pow(10,x),g=p*v;for(let M=0;M<r;M++){let b=n?n.getX(M):M,_="";for(let R=0,T=a.length;R<T;R++){let C=a[R],P=i.getAttribute(C),w=P.itemSize;for(let y=0;y<w;y++)_+=`${~~(P[u[y]](b)*v+g)},`}if(_ in e)h.push(e[_]);else{for(let R=0,T=a.length;R<T;R++){let C=a[R],P=i.getAttribute(C),w=i.morphAttributes[C],y=P.itemSize,L=c[C],k=l[C];for(let O=0;O<y;O++){let G=u[O],K=d[O];if(L[K](o,P[G](b)),w)for(let W=0,et=w.length;W<et;W++)k[W][K](o,w[W][G](b))}}e[_]=o,h.push(o),o++}}let f=i.clone();for(let M in i.attributes){let b=c[M];if(f.setAttribute(M,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),M in l)for(let _=0;_<l[M].length;_++){let R=l[M][_];f.morphAttributes[M][_]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return f.setIndex(h),f}var ri=60,Wx=9,Il=11846848,$u=new I(-.42,.47,-.78).normalize();function Ii(i,t){let e=Math.abs(i);if(e<6.8)return 0;if(e<9)return-.12*(e-6.8)/2.2;let n=qo(9,48,e),s=Zo(i*.03+11.3,t*.03,3),r=(Ci(i*.22,t*.22)-.5)*.55*qo(9,16,e);return-.12+n*(s*15-2)+r}function Xx(){let[e,n]=Ke(1024,614),s=1024/20;n.clearRect(0,0,1024,614);let r=n.createLinearGradient(0,0,1024,0),o=0,a=.12,c=.28,l=.72,h=.88,u=1;r.addColorStop(o,"rgba(120,98,66,0)"),r.addColorStop(a,"rgba(120,98,66,0.85)"),r.addColorStop(c,"rgba(96,82,60,1)"),r.addColorStop(l,"rgba(96,82,60,1)"),r.addColorStop(h,"rgba(120,98,66,0.85)"),r.addColorStop(u,"rgba(120,98,66,0)"),n.fillStyle=r,n.fillRect(0,0,1024,614);let d=(10-6.2)*s,p=(10+6.2)*s;n.fillStyle="#3b3c3e",n.fillRect(d,0,p-d,614),Rl(n,1024,614,()=>{for(let g=0;g<12;g++)n.fillStyle=`rgba(${40+Math.random()*30},${40+Math.random()*30},${42+Math.random()*30},0.45)`,n.fillRect(d+Math.random()*(p-d-120),Math.random()*614,60+Math.random()*200,20+Math.random()*90);for(let g of[-3.1,-1.5,1.5,3.1])n.fillStyle="rgba(22,22,24,0.22)",n.fillRect((10+g-.35)*s,0,.7*s,614);n.strokeStyle="rgba(15,15,16,0.7)",n.lineWidth=1.2;for(let g=0;g<14;g++){let f=d+Math.random()*(p-d),M=Math.random()*614;n.beginPath(),n.moveTo(f,M);for(let b=0;b<7;b++)f+=(Math.random()-.5)*40,M+=Math.random()*38,n.lineTo(f,M);n.stroke()}for(let g=0;g<5;g++)n.fillStyle="rgba(12,12,14,0.35)",n.beginPath(),n.ellipse(d+Math.random()*(p-d),Math.random()*614,10+Math.random()*28,6+Math.random()*14,Math.random(),0,6.3),n.fill();for(let g of[0,1])for(let f=0;f<90;f++){let M=g?p-Math.random()*70:d+Math.random()*70;n.fillStyle=`rgba(150,124,86,${Math.random()*.25})`,n.beginPath(),n.ellipse(M,Math.random()*614,3+Math.random()*14,2+Math.random()*6,0,0,6.3),n.fill()}},!1,!0);let x=n.getImageData(d,0,p-d,614);for(let g=0;g<x.data.length;g+=4){let f=(Math.random()-.5)*26;x.data[g]+=f,x.data[g+1]+=f,x.data[g+2]+=f}n.putImageData(x,d,0),n.fillStyle="#d9d6c4",n.fillRect((10-5.65)*s,0,.16*s,614),n.fillRect((10+5.5)*s,0,.16*s,614),n.fillStyle="#e7d58a";for(let g=0;g<2;g++)n.fillRect((10-.08)*s,g*6*s+0*s,.16*s,3*s*(614/(12*s)));n.globalCompositeOperation="destination-out";for(let g=0;g<260;g++)n.fillStyle=`rgba(0,0,0,${Math.random()*.5})`,n.fillRect(Math.random()*1024,Math.random()*614,2+Math.random()*10,1+Math.random()*6);n.globalCompositeOperation="source-over";let v=fn(e,{aniso:8});return v.wrapS=$n,v}function qx(){let[t,e]=Ke(512,512);return e.fillStyle="#4c6a2c",e.fillRect(0,0,512,512),Rl(e,512,512,()=>{for(let n=0;n<260;n++){let s=8+Math.random()*40,r=28+Math.random()*14;e.fillStyle=`hsla(${78+Math.random()*30},${35+Math.random()*25}%,${r}%,${.12+Math.random()*.18})`,e.beginPath(),e.arc(Math.random()*512,Math.random()*512,s,0,6.3),e.fill()}for(let n=0;n<18;n++)e.fillStyle=`rgba(${96+Math.random()*30},${72+Math.random()*20},44,${.12+Math.random()*.2})`,e.beginPath(),e.ellipse(Math.random()*512,Math.random()*512,10+Math.random()*40,6+Math.random()*20,Math.random()*3,0,6.3),e.fill();for(let n=0;n<1500;n++){let s=Math.random()*512,r=Math.random()*512;e.strokeStyle=`hsla(${70+Math.random()*50},${40+Math.random()*30}%,${20+Math.random()*30}%,0.55)`,e.lineWidth=1,e.beginPath(),e.moveTo(s,r),e.lineTo(s+(Math.random()-.5)*5,r-3-Math.random()*7),e.stroke()}}),fn(t,{aniso:8})}function Yx(){let[i,t]=Ke(128,128);for(let e=0;e<26;e++){let n=14+Math.random()*100,s=50+Math.random()*74,r=(Math.random()-.5)*50,o=t.createLinearGradient(0,128,0,128-s);o.addColorStop(0,"#2c4a18"),o.addColorStop(1,`hsl(${85+Math.random()*25},55%,${38+Math.random()*14}%)`),t.fillStyle=o,t.beginPath(),t.moveTo(n-3,128),t.quadraticCurveTo(n+r*.3,128-s*.55,n+r,128-s),t.quadraticCurveTo(n+r*.3+3,128-s*.5,n+3,128),t.fill()}return fn(i,{repeat:!1})}function Zx(){let[i,t]=Ke(256,128);for(let e=0;e<40;e++){let n=40+Math.random()*176,s=50+Math.random()*40,r=18+Math.random()*34,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,256,128)}return fn(i,{repeat:!1})}var Pi=i=>(i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=Mr(i),i.computeVertexNormals(),i);function Cn(i,t,e=.15,n=0,s=1,r=.75,o=1.15){let a=i.attributes.position,c=new Float32Array(a.count*3),l=new Et(t);for(let h=0;h<a.count;h++){let u=a.getY(h),p=(1+(Ci(a.getX(h)*3.1+a.getZ(h)*1.7,u*2.9)-.5)*e*2)*ne(r,o,Rt((u-n)/(s-n),0,1));c[h*3]=l.r*p,c[h*3+1]=l.g*p,c[h*3+2]=l.b*p}return i.setAttribute("color",new Qt(c,3)),i}function ju(i,t,e,n,s,r=.14){let o=new pr(i,t);o.deleteAttribute("uv"),o.deleteAttribute("normal"),o=Mr(o);let a=o.attributes.position;for(let c=0;c<a.count;c++){let l=a.getX(c),h=a.getY(c),u=a.getZ(c),d=1+(Ci(l*1.7+n,u*1.7+h*1.3)-.5)*.55;a.setXYZ(c,l*d,h*d*e,u*d)}return o.computeVertexNormals(),Cn(o,s,r,-i,i,.7,1.2)}function $x(){let[i,t]=Ke(256,256),e=(n,s,r,o,a,c,l,h)=>{t.save(),t.translate(n,s),t.rotate(r);let u=t.createLinearGradient(0,-a,0,a);u.addColorStop(0,`hsl(${c},${l}%,${h+10}%)`),u.addColorStop(1,`hsl(${c+4},${l}%,${h-8}%)`),t.fillStyle=u,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(o*.5,-a,o,0),t.quadraticCurveTo(o*.5,a,0,0),t.fill(),t.strokeStyle=`hsla(${c-8},${l-10}%,${h+22}%,.55)`,t.lineWidth=.9,t.beginPath(),t.moveTo(0,0),t.lineTo(o*.92,0),t.stroke(),t.restore()};for(let n=0;n<160;n++)e(Math.random()*256,Math.random()*232,Math.random()*6.28,26+Math.random()*14,7+Math.random()*5,100+Math.random()*18,40+Math.random()*18,14+Math.random()*8);for(let n=0;n<260;n++)e(Math.random()*256,Math.random()*232,Math.random()*6.28,24+Math.random()*14,7+Math.random()*5,92+Math.random()*30,42+Math.random()*22,24+Math.random()*20);return t.fillStyle="#fff",t.fillRect(0,240,16,16),t.clearRect(0,232,256,8),fn(i,{aniso:4})}function Jx(){let[i,t]=Ke(256,256);t.strokeStyle="#4a3523",t.lineWidth=3,t.beginPath(),t.moveTo(128,232),t.lineTo(128,4),t.stroke();for(let e=228;e>6;e-=2.2){let n=.35+.65*(e/232);for(let s of[-1,1]){let r=(46+Math.random()*26)*n,o=.5+Math.random()*.35,a=128,c=a+s*Math.sin(o+.4)*r,l=e+Math.cos(o)*r*.55-6;t.strokeStyle=`hsl(${112+Math.random()*20},${34+Math.random()*16}%,${15+Math.random()*12}%)`,t.lineWidth=1.7,t.beginPath(),t.moveTo(a,e),t.lineTo(c,l),t.stroke(),Math.random()<.35&&(t.strokeStyle=`hsl(${95+Math.random()*15},45%,${30+Math.random()*8}%)`,t.beginPath(),t.moveTo(c-s*6,l-2),t.lineTo(c,l),t.stroke())}}return t.fillStyle="#fff",t.fillRect(0,240,16,16),t.clearRect(0,232,256,8),fn(i,{aniso:4})}var Ju=.03;function Kx(i,t,e){let n=i.attributes.position.count,s=new Float32Array(n*2);for(let r=0;r<n;r++)s[r*2]=t,s[r*2+1]=e;return i.setAttribute("uv",new Qt(s,2)),i}var Bs=i=>Kx(i,Ju,Ju);function td(i,t,e,n,s,r,o=.18){let a=Yo(s),c=[],l=new Et;for(let h=0;h<i;h++){let u,d,p;do u=a()*2-1,d=a()*2-1,p=a()*2-1;while(u*u+d*d+p*p>1||u*u+d*d+p*p<.18);let x=new sn(n*(.8+a()*.5),n*(.8+a()*.5));x.rotateZ(a()*6.28),x.rotateX((a()-.5)*2.6),x.rotateY(a()*6.28);let v=t[0]+u*e[0],g=t[1]+d*e[1],f=t[2]+p*e[2];x.translate(v,g,f);let M=x.attributes.position,b=x.attributes.normal,_=x.attributes.uv,R=new Float32Array(M.count*3),T=.72+.5*Rt((d+1)/2,0,1)*(.7+a()*.6),C=(a()-.5)*o;l.set(r);for(let P=0;P<M.count;P++){let w=M.getX(P)-t[0],y=M.getY(P)-(t[1]-e[1]*.35),L=M.getZ(P)-t[2],k=Math.hypot(w,y,L)||1;b.setXYZ(P,w/k,y/k,L/k),_.setXY(P,_.getX(P),.1+_.getY(P)*.88),R[P*3]=l.r*T*(1+C),R[P*3+1]=l.g*T,R[P*3+2]=l.b*T*(1-C)}x.setAttribute("color",new Qt(R,3)),c.push(x)}return c}function Qx(){let i=[],t=Yo(77),e=new Le(.11,.3,11,7,1,!0);e.translate(0,5.5,0),i.push(Bs(Cn(Pi(e),4929062,.14,0,11,.7,1)));let n=new Tn(1.3,8.4,8,1,!0);n.translate(0,6.2,0),i.push(Bs(Cn(Pi(n),1913624,.1,2,10,.55,.8)));let s=new Et;for(let r=0;r<11;r++){let o=r/10,a=1.9+o*8.2,c=2.7*Math.pow(1-o,.85)+.55,l=r>7?5:7;for(let h=0;h<l;h++){let u=h/l*Math.PI*2+r*.9+(t()-.5)*.5,d=c*(.95+t()*.25),p=1.5*(.8+.4*(1-o)),x=new sn(p,d,1,3),v=x.attributes.position,g=x.attributes.normal,f=x.attributes.uv,M=new Float32Array(v.count*3),b=.8+t()*.35+(1-o)*.05;s.set(16777215);for(let _=0;_<v.count;_++){let R=v.getX(_),T=Rt((v.getY(_)+d/2)/d,0,1);v.setXYZ(_,R*(1-.25*T),-T*d*.32-T*T*.25,T*d),f.setXY(_,f.getX(_),.1+T*.88);let C=R,P=T*d;g.setXYZ(_,C*.15,.75,.55+0*P);let w=b*(.7+.45*(1-T*.5))*(.85+o*.2);M[_*3]=w,M[_*3+1]=w,M[_*3+2]=w}x.rotateY(u),x.translate(0,a+(t()-.5)*.25,0),x.setAttribute("color",new Qt(M,3)),i.push(x)}}return kn(i)}function jx(){let i=[],t=new Le(.2,.46,4.6,8,2,!0);t.translate(0,2.3,0);{let e=t.attributes.position;for(let n=0;n<e.count;n++){let s=Math.atan2(e.getZ(n),e.getX(n)),r=1+Math.sin(s*5+e.getY(n))*.07+(e.getY(n)<.5?.25*(.5-e.getY(n)):0);e.setX(n,e.getX(n)*r),e.setZ(n,e.getZ(n)*r)}}i.push(Bs(Cn(Pi(t),5915955,.2,0,4.6,.6,1)));for(let[e,n]of[[.9,2.4],[-.8,2.2],[.2,2]]){let s=new Le(.09,.2,n,6,1,!0);s.translate(0,n/2,0),s.rotateZ(-e),s.rotateY(e*4),s.translate(0,4,0),i.push(Bs(Cn(Pi(s),5193004,.1,3.4,6.4,.8,1)))}return i.push(...[[0,6.3,0,2.2],[0,6,0,1.7]].map(([e,n,s,r])=>Bs(ju(r,1,.85,3.3,2048537,.1)).translate(e,n,s))),i.push(...td(54,[0,6.4,0],[3.1,2.5,3.1],2.5,5,6986298,.2)),kn(i)}function t_(){let i=[],s=o=>new I(1.1*o*o,o*7.2,0);for(let o=0;o<8;o++){let a=s(o/8),l=s((o+1)/8).clone().sub(a),h=l.length(),u=new Le(.15-o*.006,.19-o*.006,h*1.04,6,1,!0);u.translate(0,h/2,0),u.applyQuaternion(new un().setFromUnitVectors(new I(0,1,0),l.normalize())),u.translate(a.x,a.y,a.z),i.push(Cn(Pi(u),o%2?7825754:9075560,.1,0,7.2,.8,1))}let r=s(1);for(let o=0;o<11;o++){let a=o/11*Math.PI*2+o%2*.2,c=3.6+o%3*.4,l=new sn(1,c,3,9),h=l.attributes.position;for(let d=0;d<h.count;d++){let p=h.getX(d),x=Rt((h.getY(d)+c/2)/c,0,1),v=Math.pow(1-x,.55)*.55+.04,g=x*c*.92,f=Math.sin(x*Math.PI*.55)*1.1-x*x*1.5+Math.abs(p)*v*.4;h.setXYZ(d,p*v*2,f,g)}l.deleteAttribute("uv"),l.deleteAttribute("normal");let u=Mr(l);u.computeVertexNormals();{let d=u.attributes.normal;for(let p=0;p<d.count;p++){let x=Math.abs(d.getY(p))+.9,v=d.getX(p),g=d.getZ(p),f=Math.hypot(v,x,g);d.setXYZ(p,v/f,x/f,g/f)}}u.rotateY(a),u.translate(r.x,r.y,0),i.push(Cn(u,o%2?4160042:3107362,.15,0,2,.7,1.2))}return kn(i)}function e_(){let i=[Bs(ju(.55,1,.8,2,1916183,.1)).translate(0,.35,0)];return i.push(...td(20,[0,.55,0],[.9,.55,.9],.95,21,6986298,.25)),kn(i)}function n_(){let i=new pr(.8,1);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=Mr(i);let t=i.attributes.position;for(let e=0;e<t.count;e++){let n=1+(Ci(t.getX(e)*2.2+4,t.getZ(e)*2.2+t.getY(e))-.5)*.7;t.setXYZ(e,t.getX(e)*n*1.2,t.getY(e)*n*.7,t.getZ(e)*n)}return i.computeVertexNormals(),Cn(i,8091757,.2,-.6,.6,.75,1.15)}function i_(){let i=[];for(let t=0;t<3;t++){let e=new sn(1.5,1.2);e.translate(0,.6,0),e.rotateY(t*Math.PI/3),i.push(e)}return kn(i)}function s_(){let i=[],t=new Le(.11,.16,8.2,6,1,!0);t.translate(0,4.1,0),i.push(Cn(Pi(t),5719343,.12,0,8,.8,1));let e=new $e(2.2,.12,.12);e.translate(0,7.6,0),i.push(Cn(Pi(e.toNonIndexed()),4864552,.05,7,8,1,1));for(let n of[-.9,0,.9]){let s=new Le(.04,.05,.2,5,1,!0);s.translate(n,7.78,0),i.push(Cn(Pi(s),9083040,.05,7,8,1,1))}return kn(i)}var Ku=[9.2,11,14,18,23,29,37,48,64,86,115,160],Pl=[...Ku.slice().reverse().map(i=>-i),-7.6,-6.8,-3.4,0,3.4,6.8,7.6,...Ku],Qu=15,$o=class{constructor(t,e,n){this.scene=t,this.renderer=e,this.camera=n,this.chunks=[],t.fog=new To(Il,30,320),this.bg=new Ls,this.buildSky(),this.buildLights(),this.buildMaterials();for(let s=0;s<Wx;s++)this.chunks.push(new Ll(this,s-1));this.fireCooldown=0}buildLights(){let t=new Bo(13624319,4148518,.85);this.scene.add(t);let e=new gr(16773330,2.7);e.position.copy($u).multiplyScalar(90).add(new I(Cl,0,0)),e.target.position.set(Cl,0,-15),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-34,n.right=34,n.top=40,n.bottom=-40,n.near=20,n.far=220,e.shadow.bias=-4e-4,e.shadow.normalBias=.05,this.scene.add(e,e.target);let s=new gr(15002879,.45);s.position.set(-12,24,60),this.scene.add(s),this.sun=e,this.hemi=t}buildSky(){let t=new Je({side:De,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:$u},top:{value:new Et(4027064)},mid:{value:new Et(9417944)},hor:{value:new Et(Il)}},vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 sunDir,top,mid,hor;
        void main(){ float h=clamp(vP.y,0.0,1.0);
          vec3 c=mix(hor,mid,smoothstep(0.0,0.22,h)); c=mix(c,top,smoothstep(0.2,0.75,h));
          float s=max(dot(normalize(vP),sunDir),0.0);
          c+=vec3(1.0,0.86,0.62)*(pow(s,420.0)*2.2+pow(s,24.0)*0.35+pow(s,5.0)*0.12);
          c=mix(c,hor,smoothstep(0.02,-0.1,vP.y)); c=mix(c,vec3(0.22,0.32,0.18),smoothstep(-0.05,-0.5,vP.y)); gl_FragColor=vec4(c,1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new Ut(new dn(640,32,16),t),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.bg.add(this.sky),this.clouds=new Yt;let e=Zx();for(let s=0;s<16;s++){let r=new Ro(new hr({map:e,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),o=s/16*Math.PI*2+Math.random()*.3,a=600;r.position.set(Math.sin(o)*a,130+Math.random()*130,-Math.cos(o)*a),r.scale.set(300+Math.random()*260,110+Math.random()*60,1),r.renderOrder=-9,this.clouds.add(r)}this.bg.add(this.clouds),this.ridges=[];let n=(s,r,o,a,c)=>{let[l,h]=Ke(2048,256),u=h.createLinearGradient(0,0,0,256);u.addColorStop(0,o),u.addColorStop(1,"#"+new Et(Il).getHexString()),h.fillStyle=u,h.beginPath(),h.moveTo(0,256);for(let x=0;x<=2048;x+=4){let v=x/2048*10,g=150-(Zo(v+a,a,4)-.2)*170;c&&(g-=(Ci(x*.35,a)>.4?1:0)*(6+Ci(x*.7,3)*10)),h.lineTo(x,g)}h.lineTo(2048,256),h.fill();let d=fn(l,{repeat:!1});d.wrapS=jn;let p=new Ut(new Le(s,s,r,48,1,!0),new Ue({map:d,transparent:!0,side:De,fog:!1,depthWrite:!1}));p.renderOrder=-8,p.frustumCulled=!1,p.position.y=r/2-12,this.bg.add(p),this.ridges.push(p)};n(560,150,"#8fa8a6",3.7,!1),n(500,120,"#6f8c82",9.1,!0),n(430,90,"#557564",15.3,!0)}buildMaterials(){let t=(s,r,o)=>{let a=s.onBeforeCompile;return s.onBeforeCompile=c=>{a&&a.call(s,c),c.uniforms.uTime=m.timeU,c.vertexShader=`uniform float uTime;
`+c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            float ph = instanceMatrix[3].x*0.21 + instanceMatrix[3].z*0.17;
          #else
            float ph = 0.0;
          #endif
          float hh = max(transformed.y, 0.0);
          transformed.x += sin(uTime*${o.toFixed(2)} + ph)*hh*${r};
          transformed.z += cos(uTime*${(o*.8).toFixed(2)} + ph*1.3)*hh*${(r*.7).toFixed(4)};`)},s};this.leafTex=$x(),this.needleTex=Jx();let e=s=>{let r=s.onBeforeCompile;return s.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_begin>",Ot.normal_fragment_begin.replace("normal *= faceDirection;",""))},s.userData.fol=!0,s};this.mats={tree:t(e(new be({map:this.leafTex,vertexColors:!0,alphaTest:.5,side:_e,roughness:.85})),.005,1.3),pine:t(e(new be({map:this.needleTex,vertexColors:!0,alphaTest:.5,side:_e,roughness:.9})),.004,1.2),palm:t(new be({vertexColors:!0,roughness:.85,side:_e}),.008,1.7),bush:t(e(new be({map:this.leafTex,vertexColors:!0,alphaTest:.5,side:_e,roughness:.9})),.025,1.9),fern:t(new be({map:Yx(),alphaTest:.5,side:_e,roughness:1}),.09,2.4),rock:new be({vertexColors:!0,roughness:1}),pole:new be({vertexColors:!0,roughness:.9}),ground:(()=>{let s=qx();return new be({map:s,bumpMap:s,bumpScale:2.2,vertexColors:!0,roughness:1})})(),road:new be({map:Xx(),roughness:.92,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}),wire:new dr({color:1382426})},this.geos={pine:Qx(),broad:jx(),palm:t_(),bush:e_(),rock:n_(),fern:i_(),pole:s_()};let n=[];for(let s of[-.9,0,.9])for(let r=0;r<2;r++){let o=-r*30,a=null;for(let c=0;c<=10;c++){let l=c/10,h=7.78-Math.sin(l*Math.PI)*.9,u=new I(-9.2+s,h+.12,o-l*30);a&&n.push(a,u),a=u}}this.wireGeo=new ve().setFromPoints(n),this.wreckGeo=null}setQuality(t){m.quality=t,m.density=[.5,.65,.85,1][t];let e=[.75,1,1.25,Math.min(window.devicePixelRatio||1,2)][t];this.renderer.setPixelRatio(e),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.shadowMap.enabled=t>=2,this.sun.castShadow=t>=2,this.sun.shadow.mapSize.set(t===3?2048:1024,t===3?2048:1024),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.scene.fog.far=t===0?220:300,this.scene.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})}update(t,e,n){m.timeU.value+=t;let s=Math.floor((e-ri*1.6)/ri);for(let r of this.chunks)if(r.k<s){let o=-1e9;for(let a of this.chunks)o=Math.max(o,a.k);r.build(o+1)}for(let r of this.chunks){let o=r.k*ri-e;r.group.position.z=-o,r.group.visible=o<340,r.wreck.visible&&o>-40&&o<150&&(r.fireT-=t)}this.sky.position.copy(n),this.clouds.position.set(n.x,0,n.z),this.clouds.rotation.y+=t*.003;for(let r of this.ridges)r.position.x=n.x,r.position.z=n.z}fires(){let t=[];for(let e of this.chunks)if(e.wreck.visible&&e.fireS!==void 0){let n=e.fireS-m.d;n>-30&&n<160&&t.push(e)}return t}},Ll=class{constructor(t,e){this.w=t,this.k=e-99999,this.group=new Yt,t.scene.add(this.group);let n=new ve,s=Pl.length,r=Qu;n.setAttribute("position",new Qt(new Float32Array(s*(r+1)*3),3)),n.setAttribute("normal",new Qt(new Float32Array(s*(r+1)*3),3)),n.setAttribute("uv",new Qt(new Float32Array(s*(r+1)*2),2)),n.setAttribute("color",new Qt(new Float32Array(s*(r+1)*3),3));let o=[];for(let M=0;M<r;M++)for(let b=0;b<s-1;b++){let _=M*s+b,R=_+1,T=_+s,C=T+1;o.push(_,R,T,R,C,T)}n.setIndex(o),this.ground=new Ut(n,t.mats.ground),this.ground.receiveShadow=!0,this.ground.frustumCulled=!1,this.group.add(this.ground);let a=new sn(20,ri);a.rotateX(-Math.PI/2),a.translate(0,.02,-ri/2);let c=a.attributes.uv;for(let M=0;M<c.count;M++)c.setY(M,c.getY(M)*(ri/12));this.road=new Ut(a,t.mats.road),this.road.receiveShadow=!0,this.road.renderOrder=1,this.group.add(this.road);let l=(M,b,_,R=!0)=>{let T=new Co(M,b,_);return T.castShadow=R,T.receiveShadow=!1,T.frustumCulled=!1,T.instanceMatrix.setUsage(Ns),T.count=0,T.setColorAt(0,new Et(1,1,1)),this.group.add(T),T},h=t.geos,u=t.mats;this.pine=l(h.pine,u.pine,30),this.broad=l(h.broad,u.tree,30),this.palm=l(h.palm,u.palm,7),this.bush=l(h.bush,u.bush,100),this.fern=l(h.fern,u.fern,170,!1),this.rock=l(h.rock,u.rock,8),this.poles=l(h.pole,u.pole,2);let d=new Lo(t.wireGeo,u.wire);d.frustumCulled=!1,this.group.add(d),this.wreck=new Yt,this.wreck.visible=!1;let p=new be({color:2761504,roughness:.9,metalness:.3}),x=new Ut(new $e(1.9,.7,4.2),p);x.position.y=.6,x.castShadow=!0;let v=new Ut(new $e(1.7,.6,2),p);v.position.set(0,1.2,.2),v.castShadow=!0;let g=new be({color:657930,roughness:.4}),f=new Le(.34,.34,.24,10);f.rotateZ(Math.PI/2),this.wreck.add(x,v);for(let[M,b]of[[-.9,-1.3],[.9,-1.3],[-.9,1.3],[.9,1.3]]){let _=new Ut(f,g);_.position.set(M,.34,b),this.wreck.add(_)}this.group.add(this.wreck),this.fireS=void 0,this.col=new Et,this.dummy=new Ae,this.build(e)}build(t){this.k=t;let e=Yo(t*7919+13),n=Pl.length,s=Qu,r=this.ground.geometry.attributes.position,o=this.ground.geometry.attributes.normal,a=this.ground.geometry.attributes.uv,c=this.ground.geometry.attributes.color,l=t*ri,h=.6,u=new Et;for(let f=0;f<=s;f++){let M=f/s*ri,b=l+M;for(let _=0;_<n;_++){let R=Pl[_],T=f*n+_,C=Ii(R,b);r.setXYZ(T,R,C,-M);let P=(Ii(R+h,b)-Ii(R-h,b))/(2*h),w=(Ii(R,b+h)-Ii(R,b-h))/(2*h),y=new I(-P,1,w).normalize();o.setXYZ(T,y.x,y.y,y.z),a.setXY(T,R/9,b/9);let L=Math.abs(R),k=Zo(R*.05+3,b*.05,3),O=qo(11,7.2,L)*.7;u.setRGB(ne(.78,1.15,k)+O*.25,ne(.8,1.12,k)-O*.08,ne(.7,.95,k)-O*.25),c.setXYZ(T,u.r,u.g,u.b)}}r.needsUpdate=o.needsUpdate=a.needsUpdate=c.needsUpdate=!0;let d=this.dummy,p=this.col,x=(f,M,b)=>{let _=0;M=Math.floor(M*(m.density||1));for(let R=0;R<M;R++){let T=b();if(!T)continue;let C=e()*ri,P=T.x;d.position.set(P,Ii(P,l+C)+(T.dy||0),-C),d.rotation.set(T.rx||0,e()*6.283,T.rz||0),d.scale.set(T.sx,T.sy,T.sz),d.updateMatrix(),f.setMatrixAt(_,d.matrix);let w=T.b||.78+e()*.42,y=(e()-.5)*.26;p.setRGB(w*(1+y),w,w*(1-y)),f.setColorAt(_,p),_++}f.count=_,f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0)},v=()=>e()<.5?-1:1;x(this.pine,30,()=>{let f=.8+e()*.95;return{x:v()*(10+Math.pow(e(),1.3)*80),sx:f*(.9+e()*.3),sy:f,sz:f*(.9+e()*.3)}}),x(this.broad,30,()=>{let f=.85+e()*.75;return{x:v()*(9.6+Math.pow(e(),1.3)*60),sx:f,sy:f*(.9+e()*.3),sz:f}}),x(this.palm,7,()=>{let f=.8+e()*.6;return{x:v()*(10+e()*38),sx:f,sy:f,sz:f,rz:(e()-.5)*.08}}),x(this.bush,100,()=>{let f=.7+e()*1.5;return{x:v()*(7.8+Math.pow(e(),1.7)*40),sx:f,sy:f*(.8+e()*.5),sz:f*(.8+e()*.5)}}),x(this.fern,170,()=>{let f=.6+e()*1.1;return{x:v()*(7.2+Math.pow(e(),1.6)*26),sx:f,sy:f*(.8+e()*.6),sz:f,b:.8+e()*.4}}),x(this.rock,8,()=>{let f=.5+Math.pow(e(),2)*2.4;return{x:v()*(8.2+e()*40),sx:f,sy:f,sz:f,dy:-.1,b:.8+e()*.4}});for(let f=0;f<2;f++)d.position.set(-9.2,Ii(-9.2,l+f*30),-f*30),d.rotation.set(0,0,0),d.scale.set(1,1,1),d.updateMatrix(),this.poles.setMatrixAt(f,d.matrix),p.setRGB(1,1,1),this.poles.setColorAt(f,p);this.poles.count=2,this.poles.instanceMatrix.needsUpdate=!0,this.poles.instanceColor&&(this.poles.instanceColor.needsUpdate=!0);let g=e()<.17&&t>1;if(this.wreck.visible=g,this.fireS=void 0,g){let f=8+e()*44,M=(e()<.5?-1:1)*(8.8+e()*1.2);this.wreck.position.set(M,Ii(M,l+f),-f),this.wreck.rotation.set((e()-.5)*.2,e()*6.28,(e()-.5)*.15),this.fireS=l+f,this.fireX=M,this.fireY=this.wreck.position.y+1.1}}};var r_=`attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(-mv.z,0.1); }`,o_=`uniform sampler2D map; varying vec4 vC;
void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC.rgb*t.rgb, vC.a*t.a); }`;function ed(i){let[t,e]=Ke(64,64);if(i==="soft"){let s=e.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,0.65)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,64,64)}else{for(let r=0;r<14;r++){let o=32+(Math.random()-.5)*22,a=32+(Math.random()-.5)*22,c=10+Math.random()*14,l=e.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,"rgba(255,255,255,0.5)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,0,64,64)}let s=e.createRadialGradient(32,32,14,32,32,32);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=s,e.fillRect(0,0,64,64)}let n=new Ai(t);return n.colorSpace=Te,n}var Jo=class{constructor(t,e,n,s){this.cap=e,this.i=0,this.px=new Float32Array(e),this.py=new Float32Array(e),this.ps=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vs=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.col=new Float32Array(e*3),this.a=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let r=new ve;this.apos=new Qt(new Float32Array(e*3),3).setUsage(Ns),this.asize=new Qt(new Float32Array(e),1).setUsage(Ns),this.acol=new Qt(new Float32Array(e*4),4).setUsage(Ns),r.setAttribute("position",this.apos),r.setAttribute("aSize",this.asize),r.setAttribute("aColor",this.acol),this.mat=new Je({uniforms:{map:{value:s},uScale:{value:500}},vertexShader:r_,fragmentShader:o_,transparent:!0,depthWrite:!1,blending:n?wn:bi}),this.pts=new Do(r,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=n?6:5,t.add(this.pts)}emit(t,e,n,s,r,o,a,c,l,h,u,d,p,x=0,v=0){let g=this.i;this.i=(this.i+1)%this.cap,this.px[g]=t,this.py[g]=e,this.ps[g]=n,this.vx[g]=s,this.vy[g]=r,this.vs[g]=o,this.life[g]=this.max[g]=l,this.s0[g]=a,this.s1[g]=c,this.col[g*3]=h,this.col[g*3+1]=u,this.col[g*3+2]=d,this.a[g]=p,this.grav[g]=x,this.drag[g]=v}update(t,e,n){this.mat.uniforms.uScale.value=n;let s=this.apos.array,r=this.asize.array,o=this.acol.array;for(let a=0;a<this.cap;a++){if(this.life[a]<=0){r[a]=0;continue}this.life[a]-=t;let c=this.drag[a]>0?Math.exp(-this.drag[a]*t):1;this.vx[a]*=c,this.vy[a]=this.vy[a]*c-this.grav[a]*t,this.vs[a]*=c,this.px[a]+=this.vx[a]*t,this.py[a]+=this.vy[a]*t,this.ps[a]+=this.vs[a]*t,this.py[a]<.05&&this.grav[a]>0&&(this.py[a]=.05,this.vy[a]*=-.3,this.vx[a]*=.6,this.vs[a]*=.6);let l=1-this.life[a]/this.max[a];s[a*3]=this.px[a],s[a*3+1]=this.py[a],s[a*3+2]=-(this.ps[a]-e),r[a]=ne(this.s0[a],this.s1[a],l);let h=l<.08?l/.08:1-(l-.08)/.92;o[a*4]=this.col[a*3],o[a*4+1]=this.col[a*3+1],o[a*4+2]=this.col[a*3+2],o[a*4+3]=this.a[a]*h*h*(3-2*h)*1+this.a[a]*h*0}this.apos.needsUpdate=this.asize.needsUpdate=this.acol.needsUpdate=!0}},Ko=class{constructor(t){this.scene=t;let e=ed("soft"),n=ed("puff");this.smoke=new Jo(t,700,!1,n),this.fire=new Jo(t,700,!0,e),this.tracers=[];let s=new $e(1,1,1);this.tMats={p:new Ue({color:16771488,transparent:!0,opacity:.9,blending:wn,depthWrite:!1,fog:!1}),e:new Ue({color:16738874,transparent:!0,opacity:.9,blending:wn,depthWrite:!1,fog:!1})};for(let r=0;r<48;r++){let o=new Ut(s,this.tMats.p);o.visible=!1,o.frustumCulled=!1,t.add(o),this.tracers.push({m:o,on:!1,a:[0,0,0],b:[0,0,0],t:0,dur:0,len:5,w:.05})}this.nukes=[],this.domeMat=new Ue({color:16752704,transparent:!0,opacity:.8,blending:wn,depthWrite:!1,fog:!1}),this.dome=new Ut(new dn(1,28,18),this.domeMat),this.dome.visible=!1,this.dome.frustumCulled=!1,t.add(this.dome),this.ringMat=new Ue({color:16773312,transparent:!0,opacity:.7,blending:wn,depthWrite:!1,side:_e,fog:!1}),this.ring=new Ut(new Uo(.92,1,64),this.ringMat),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,this.ring.frustumCulled=!1,t.add(this.ring)}clear(){this.smoke.life.fill(0),this.fire.life.fill(0);for(let t of this.tracers)t.on=!1,t.m.visible=!1;this.nukes.length=0,this.dome.visible=!1,this.ring.visible=!1}flash(t,e,n,s=1){this.fire.emit(t,e,n,0,0,0,.12*s,.4*s,.06,1,.8,.45,.9)}puff(t,e,n,s=3,r=.55){for(let o=0;o<s;o++)this.smoke.emit(t+rt(-.2,.2),e,n+rt(-.2,.2),rt(-1,1),rt(.5,2),rt(-1,1),.3,1.2,rt(.5,.9),r*1.1,r,r*.85,.5,0,1)}sparks(t,e,n,s=6){for(let r=0;r<s;r++)this.fire.emit(t,e,n,rt(-4,4),rt(1,5),rt(-4,4),.14,.05,rt(.2,.5),1,rt(.6,.9),.3,1,14,.5)}dust(t,e,n,s,r=1){for(let o=0;o<r;o++)this.smoke.emit(t+rt(-.3,.3),e+.1,n,rt(-.6,.6),rt(.3,1.2),-s*.15+rt(-1,1),.4,1.9,rt(.7,1.2),.62,.55,.42,.42,0,.8)}fireAt(t,e,n,s=1){this.fire.emit(t+rt(-.4,.4)*s,e,n+rt(-.4,.4)*s,rt(-.3,.3),rt(1.8,3.4),rt(-.3,.3),.9*s,.15,rt(.45,.8),1,rt(.4,.62),.12,.95,-1.5,.3)}smokeAt(t,e,n,s=1,r=.2){this.smoke.emit(t+rt(-.4,.4),e,n+rt(-.4,.4),rt(-.5,.5)+.8,rt(1.8,3.2),rt(-.5,.5),.9*s,4.5*s,rt(2.4,3.8),r,r,r*1.05,.7,-.3,.2)}explode(t,e,n,s=1){this.fire.emit(t,e+.5*s,n,0,0,0,3*s,11*s,.18,1,.9,.6,1);let r=Math.floor(11*s+4);for(let o=0;o<r;o++){let a=Math.random()*6.28,c=Math.random()*1.2,l=rt(2,9)*s;this.fire.emit(t,e+.4,n,Math.cos(a)*l*Math.cos(c),Math.sin(c)*l*.9+1.5,Math.sin(a)*l*Math.cos(c),rt(1.5,3)*s,rt(3,6)*s,rt(.45,.95),1,rt(.45,.7),.14,.95,-1.2,1.6)}for(let o=0;o<Math.floor(8*s+3);o++){let a=Math.random()*6.28,c=rt(1,5)*s;this.smoke.emit(t,e+.6,n,Math.cos(a)*c,rt(1.5,5)*s*.8,Math.sin(a)*c,rt(1.5,2.5)*s,rt(5,9)*s,rt(1.8,3.4),.13,.12,.12,.85,-.4,.8)}this.sparks(t,e+.5,n,Math.floor(10*s));for(let o=0;o<Math.floor(5*s);o++){let a=Math.random()*6.28,c=rt(3,11)*s;this.smoke.emit(t,e+.4,n,Math.cos(a)*c,rt(3,10)*s,Math.sin(a)*c,.2,.2,rt(.8,1.6),.1,.09,.08,1,16,0)}}nuke(t,e,n){this.nukes.push({x:t,y:e,s:n,t:0}),this.explode(t,e,n,3.5)}tracer(t,e,n="p",s=520,r=7,o=.05){for(let a of this.tracers)if(!a.on){a.on=!0,a.m.visible=!0,a.m.material=this.tMats[n],a.a=[t.x,t.y,t.s],a.b=[e.x,e.y,e.s];let c=Math.hypot(e.x-t.x,e.y-t.y,e.s-t.s);a.dur=Math.max(c/s,.04),a.t=0,a.len=Math.min(r,c),a.w=o,a.distv=c;return}}update(t,e,n,s){let r=s.domElement.height/(2*Math.tan(Nu.degToRad(n.fov)/2));this.smoke.update(t,e,r),this.fire.update(t,e,r);for(let o of this.tracers){if(!o.on)continue;o.t+=t;let a=o.t/o.dur;if(a>=1.15){o.on=!1,o.m.visible=!1;continue}let c=Rt(a,0,1),l=Rt(a-o.len/Math.max(o.distv,.1),0,1),h=ne(o.a[0],o.b[0],c),u=ne(o.a[1],o.b[1],c),d=ne(o.a[2],o.b[2],c),p=ne(o.a[0],o.b[0],l),x=ne(o.a[1],o.b[1],l),v=ne(o.a[2],o.b[2],l),g=o.m;g.position.set((h+p)/2,(u+x)/2,-((d+v)/2-e));let f=Math.max(Math.hypot(h-p,u-x,d-v),.2);g.scale.set(o.w,o.w,f),g.lookAt(h,u,-(d-e))}if(this.nukes.length){let o=this.nukes[0];o.t+=t;let a=o.t;this.dome.visible=a<2.2,this.ring.visible=a<1.8;let c=58*(1-Math.pow(1-Math.min(a/1.1,1),3));this.dome.position.set(o.x,o.y+c*.35,-(o.s-e)),this.dome.scale.set(c,c*.8,c),this.domeMat.opacity=Rt(1-a/2.1,0,1)*.85,this.domeMat.color.setHSL(.08-a*.02,1,.45+.25*(1-Rt(a/1.2,0,1)));let l=100*(1-Math.pow(1-Math.min(a/1.6,1),2));if(this.ring.position.set(o.x,.3,-(o.s-e)),this.ring.scale.set(l,l,l),this.ringMat.opacity=Rt(1-a/1.7,0,1)*.7,a<3.6)for(let h=0;h<6;h++){let u=a*18*Math.random();this.smoke.emit(o.x+rt(-5,5),o.y+u,o.s+rt(-5,5),rt(-1.5,1.5),rt(4,9),rt(-1.5,1.5),8,26,rt(3,5),.2,.17,.15,.7,0,.3),a<2&&this.fire.emit(o.x+rt(-6,6),o.y+u*.7,o.s+rt(-6,6),0,rt(3,8),0,8,20,rt(.6,1.2),1,.5,.15,.7,0,.4)}a>3.8&&(this.nukes.shift(),this.dome.visible=!1,this.ring.visible=!1)}}};var nd=[{src:"audio/hit_em_up.mp3",title:"Hit 'Em Up"},{src:"audio/like_toy_soldier.mp3",title:"Like Toy Soldiers"}],Qo=class{constructor(){this.ctx=null,this.musicVol=.55,this.sfxOn=!0,this.musicOn=!0,this.cur=-1,this.onTrack=null,this.heli=0}init(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.85;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=6,this.master.connect(n),n.connect(e.destination);let s=e.sampleRate*2,r=e.createBuffer(1,s,e.sampleRate),o=r.getChannelData(0);for(let p=0;p<s;p++)o[p]=Math.random()*2-1;this.noise=r,this.eg=e.createGain(),this.eg.gain.value=0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=520,this.elp=a,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="square",this.o1.connect(a),this.o2.connect(a),a.connect(this.eg),this.eg.connect(this.master),this.o1.start(),this.o2.start(),this.hg=e.createGain(),this.hg.gain.value=0;let c=e.createBufferSource();c.buffer=r,c.loop=!0;let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=220;let h=e.createGain();h.gain.value=.5;let u=e.createOscillator();u.frequency.value=19;let d=e.createGain();d.gain.value=.5,u.connect(d),d.connect(h.gain),c.connect(l),l.connect(h),h.connect(this.hg),this.hg.connect(this.master),c.start(),u.start(),this.startMusic()}startMusic(){this.tracks=nd.map(t=>{let e=new Audio(t.src);return e.preload="auto",e.loop=!0,e.volume=0,e}),this.pick()}pick(){if(!this.tracks)return;for(let e of this.tracks)e.pause(),e.volume=0;this.cur=Math.floor(Math.random()*this.tracks.length);let t=this.tracks[this.cur];t.currentTime=0,t.loop=!0,t.volume=this.musicOn?this.musicVol:0,t.play().catch(()=>{}),this.onTrack&&this.onTrack(nd[this.cur].title)}setMusic(t,e){if(t!==void 0&&(this.musicOn=t),e!==void 0&&(this.musicVol=e),this.tracks)for(let n of this.tracks)n.volume=this.musicOn?this.musicVol:0}duck(t,e){if(!this.tracks||!this.musicOn)return;let n=this.tracks[this.cur];n.volume=this.musicVol*t,setTimeout(()=>{n.volume=this.musicVol},e)}suspend(t){try{t?(this.ctx&&this.ctx.suspend(),this.tracks&&this.tracks[this.cur].pause()):this.ctx&&this.ctx.resume()}catch{}}pauseMusic(t){if(!this.tracks)return;let e=this.tracks[this.cur];t?e.pause():e.play().catch(()=>{})}_noise(t,e,n,s,r,o,a,c=0,l){let h=this.ctx,u=h.createBufferSource();u.buffer=this.noise,u.playbackRate.value=.8+Math.random()*.4;let d=h.createBiquadFilter();d.type=n,d.frequency.setValueAtTime(s,t),l&&d.frequency.exponentialRampToValueAtTime(l,t+e),d.Q.value=r;let p=h.createGain();if(p.gain.setValueAtTime(o,t),p.gain.exponentialRampToValueAtTime(.001,t+a),u.connect(d),d.connect(p),h.createStereoPanner){let x=h.createStereoPanner();x.pan.value=Rt(c,-1,1),p.connect(x),x.connect(this.master)}else p.connect(this.master);u.start(t),u.stop(t+e+.05)}_tone(t,e,n,s,r,o){let a=this.ctx,c=a.createOscillator();c.type=r,c.frequency.setValueAtTime(e,t),c.frequency.exponentialRampToValueAtTime(Math.max(n,1),t+s);let l=a.createGain();l.gain.setValueAtTime(o,t),l.gain.exponentialRampToValueAtTime(.001,t+s),c.connect(l),l.connect(this.master),c.start(t),c.stop(t+s+.02)}_vol(t){return 1/(1+t/45)}shot(t,e=0,n=0){if(!this.ctx||!this.sfxOn)return;let s=this.ctx.currentTime,r=this._vol(e);switch(t){case"ak":this._noise(s,.12,"bandpass",1800,.7,.55*r,.12,n),this._tone(s,160,50,.1,"triangle",.45*r);break;case"smg":this._noise(s,.08,"bandpass",2600,.8,.4*r,.07,n),this._tone(s,220,80,.06,"triangle",.28*r);break;case"shotgun":this._noise(s,.3,"lowpass",2400,.5,.9*r,.28,n,300),this._tone(s,110,35,.2,"sine",.7*r);break;case"sniper":this._noise(s,.6,"lowpass",3200,.6,1*r,.55,n,200),this._tone(s,90,28,.35,"sine",.85*r);break;case"rocket":this._noise(s,.7,"bandpass",700,.5,.8*r,.7,n,2400),this._tone(s,140,40,.3,"sine",.6*r);break;case"frag":this._tone(s,220,60,.18,"square",.35*r),this._noise(s,.2,"lowpass",900,.5,.5*r,.2,n);break;case"nuke":this._noise(s,1.2,"bandpass",500,.4,.8,1.2,n,3e3),this._tone(s,90,30,.8,"sawtooth",.4);break;case"enemy":this._noise(s,.1,"bandpass",1500,.7,.3*r,.1,n);break;case"mg":this._noise(s,.09,"bandpass",1100,.7,.4*r,.09,n),this._tone(s,120,40,.08,"triangle",.3*r);break}}explosion(t=1,e=0,n=0){if(!this.ctx||!this.sfxOn)return;let s=this.ctx.currentTime,r=this._vol(e*.6)*Math.min(t,1.6);this._noise(s,1.8*t,"lowpass",1400,.4,1.1*r,1.6*t,n,80),this._tone(s,90,22,.9*t,"sine",.9*r),this._noise(s+.05,.4,"highpass",2500,.5,.3*r,.35,n)}nuke(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;this._noise(t,5,"lowpass",900,.4,1.5,4.6,0,50),this._tone(t,60,14,3,"sine",1.2),this._noise(t,1,"highpass",1800,.5,.6,.8),this.duck(.15,4500)}hit(){!this.ctx||!this.sfxOn||this._tone(this.ctx.currentTime,1500,900,.05,"square",.08)}hurt(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;this._tone(t,180,70,.18,"sawtooth",.35),this._noise(t,.1,"lowpass",700,.5,.4,.1)}pickup(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;this._tone(t,660,660,.08,"triangle",.25),this._tone(t+.08,990,990,.14,"triangle",.25)}checkpoint(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;[523,659,784,1046].forEach((e,n)=>this._tone(t+n*.09,e,e,.22,"triangle",.28))}click(){!this.ctx||!this.sfxOn||this._tone(this.ctx.currentTime,900,600,.04,"square",.1)}gear(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;this._tone(t,240,120,.07,"square",.12),this._noise(t,.05,"bandpass",1200,1,.15,.05)}empty(){!this.ctx||!this.sfxOn||this._tone(this.ctx.currentTime,400,380,.04,"square",.08)}reload(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;this._tone(t,500,300,.05,"square",.1),this._tone(t+.25,700,500,.05,"square",.1)}crash(){if(!this.ctx||!this.sfxOn)return;let t=this.ctx.currentTime;this._noise(t,.5,"lowpass",1500,.5,1,.5,0,200),this._tone(t,120,40,.3,"sawtooth",.6)}engine(t,e,n,s){if(!this.ctx)return;let r=this.ctx.currentTime,o=34+t*2.6+(n?6:0)+(e?e%2*2:0);this.o1.frequency.setTargetAtTime(o,r,.08),this.o2.frequency.setTargetAtTime(o*.5,r,.08),this.elp.frequency.setTargetAtTime(380+t*22,r,.1),this.eg.gain.setTargetAtTime(s&&this.sfxOn?n?.11:.05:0,r,.15)}setHeli(t){this.ctx&&this.hg.gain.setTargetAtTime(this.sfxOn?Rt(t,0,1)*.55:0,this.ctx.currentTime,.2)}muteSfx(t){this.sfxOn=!t}};var Dl=new Map;function tt(i,t=.7,e=0,n={}){let s=`${i}|${t}|${e}|${JSON.stringify(n)}`;return Dl.has(s)||Dl.set(s,new be({color:i,roughness:t,metalness:e,...n})),Dl.get(s)}var id=new I(0,0,-1),Sr=new Le(1,1,1,8),Fl=new dn(1,14,10),Ol=new $e(1,1,1);function ke(i,t,e,n=0,s=0,r=0,o=0,a=0,c=0,l=1,h=1,u=1,d=!0){let p=new Ut(t,e);return p.position.set(n,s,r),p.rotation.set(o,a,c),p.scale.set(l,h,u),p.castShadow=d,i.add(p),p}var q=(i,t,e,n,s,r,o,a,c=0,l=0,h=0)=>ke(i,Ol,s,r,o,a,c,l,h,t,e,n),oe=(i,t,e,n,s,r,o)=>ke(i,Sr,n,s,r,o,Math.PI/2,0,0,t,e,t),pn=(i,t,e,n,s,r,o)=>ke(i,Sr,n,s,r,o,0,0,0,t,e,t),Li=(i,t,e,n,s,r,o)=>ke(i,Sr,n,s,r,o,0,0,Math.PI/2,t,e,t),ae=(i,t,e,n,s,r,o=1,a=1,c=1)=>ke(i,Fl,e,n,s,r,0,0,0,t*o,t*a,t*c);function Ie(i,t,e,n,s){let r=new Ut(Sr,s);return Bn(r,t,e,n),r.castShadow=!0,i.add(r),r}var ht=(i,t,e)=>new I(i,t,e),a_=new be({vertexColors:!0,roughness:.6,metalness:.12});function c_(i){i.updateMatrixWorld(!0);let t=[];i.traverse(n=>{if(!n.isMesh)return;let s=n.geometry.clone();s.deleteAttribute("uv"),s.applyMatrix4(n.matrixWorld);let r=n.material.color||new Et(8947848),o=s.attributes.position.count,a=new Float32Array(o*3);for(let c=0;c<o;c++)a[c*3]=r.r,a[c*3+1]=r.g,a[c*3+2]=r.b;s.setAttribute("color",new Qt(a,3)),t.push(s)});let e=new Ut(kn(t),a_);return e.castShadow=!0,e}var ye=()=>tt(1776928,.5,.6),rn=()=>tt(5922662,.4,.85),ks=()=>tt(8014370,.7,0),sd=()=>tt(4870960,.7,.2);function Hs(i,t=!0){let e=new Yt,n=ht(0,.03,-.8),s=ht(0,-.03,-.38),r=!1;switch(i){case"ak":q(e,.05,.075,.34,ye(),0,.03,-.16),q(e,.056,.055,.22,ks(),0,.015,-.4),oe(e,.011,.34,rn(),0,.04,-.66),oe(e,.008,.26,rn(),0,.075,-.52),oe(e,.017,.05,ye(),0,.04,-.84),q(e,.04,.18,.07,ye(),0,-.1,-.22,-.35),q(e,.045,.09,.26,ks(),0,0,.15),q(e,.04,.1,.05,ks(),0,-.08,-.03,.3),q(e,.01,.03,.01,rn(),0,.085,-.8),n=ht(0,.04,-.87),s=ht(0,-.03,-.4);break;case"smg":q(e,.05,.085,.28,ye(),0,.03,-.12),q(e,.035,.2,.05,ye(),0,-.14,-.1,.06),q(e,.04,.1,.05,ye(),0,-.06,.02,.2),oe(e,.02,.22,ye(),0,.04,-.38),q(e,.035,.05,.2,ye(),0,0,.2),q(e,.03,.03,.12,rn(),0,.085,-.1),n=ht(0,.04,-.5),s=ht(0,-.04,-.28);break;case"shotgun":q(e,.05,.075,.32,ye(),0,.03,-.14),oe(e,.016,.6,rn(),0,.05,-.55),oe(e,.02,.3,ye(),0,0,-.45),q(e,.056,.05,.2,ks(),0,0,-.4),q(e,.05,.11,.3,ye(),0,0,.2,.15),q(e,.04,.1,.05,ye(),0,-.08,-.02,.3),n=ht(0,.05,-.86),s=ht(0,-.02,-.42);break;case"sniper":q(e,.05,.08,.5,ye(),0,.03,-.2),oe(e,.013,.6,rn(),0,.045,-.78),oe(e,.02,.12,ye(),0,.045,-1.12),oe(e,.035,.3,ye(),0,.12,-.22),oe(e,.045,.05,rn(),0,.12,-.4),oe(e,.04,.05,rn(),0,.12,-.06),q(e,.05,.12,.34,sd(),0,0,.3,.1),q(e,.035,.18,.05,ye(),0,-.1,-.15),q(e,.01,.2,.01,rn(),.03,-.06,-.85,.3),q(e,.01,.2,.01,rn(),-.03,-.06,-.85,.3),n=ht(0,.045,-1.2),s=ht(0,-.04,-.55);break;case"rocket":r=!0,oe(e,.06,1,sd(),0,.05,-.1),oe(e,.085,.15,ye(),0,.05,.42),ke(e,new Tn(.075,.28,10),tt(2830109,.6,.2),0,.05,-.74,-Math.PI/2,0,0),q(e,.04,.1,.05,ye(),0,-.07,0,.2),q(e,.04,.1,.05,ye(),0,-.07,-.35,.1),q(e,.02,.06,.12,rn(),0,.14,-.1),n=ht(0,.05,-.9),s=ht(0,-.04,-.35);break;case"frag":oe(e,.04,.5,ye(),0,.04,-.4),oe(e,.052,.12,rn(),0,.04,-.1),q(e,.05,.09,.3,ks(),0,0,.14,.05),q(e,.04,.1,.05,ks(),0,-.08,-.02,.3),q(e,.02,.07,.02,rn(),0,.1,-.2),n=ht(0,.04,-.66),s=ht(0,-.03,-.3);break;case"nuke":{r=!0,oe(e,.09,.95,tt(2961462,.5,.5),0,.06,-.05),ke(e,new Tn(.1,.34,12),tt(13117470,.4,.3),0,.06,-.69,-Math.PI/2,0,0),oe(e,.095,.08,tt(15778841,.5,.2),0,.06,-.38),oe(e,.095,.08,tt(15778841,.5,.2),0,.06,-.2),oe(e,.12,.14,ye(),0,.06,.45),q(e,.04,.1,.05,ye(),0,-.08,0,.2),q(e,.04,.1,.05,ye(),0,-.08,-.4,.1),n=ht(0,.06,-.9),s=ht(0,-.05,-.4);break}}if(e.userData={muzzle:n,fore:s,shoulder:r},!t)return e;let o=c_(e);return o.userData=e.userData,o}var Ul={};function l_(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function h_(i,t=1){let e=new Ai(i);return e.wrapS=e.wrapT=jn,e.colorSpace=Te,e.anisotropy=4,e.repeat.set(t,t),e}function oi(i){if(Ul[i])return Ul[i];let[t,e]=l_(256,256);if(i==="camo"){e.fillStyle="#4b5532",e.fillRect(0,0,256,256);let n=["#2f3a22","#6b6a3f","#1f2418","#7d7448"];for(let s of n)for(let r=0;r<26;r++)e.fillStyle=s,e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,14+Math.random()*30,8+Math.random()*16,Math.random()*3,0,6.3),e.fill()}else if(i==="denim"){e.fillStyle="#566a8c",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"10,20,40"},${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,1,3+Math.random()*4)}else{e.fillStyle="#d8d8d8",e.fillRect(0,0,256,256);for(let n=0;n<3200;n++){let s=140+Math.random()*110;e.fillStyle=`rgba(${s},${s},${s},${Math.random()*.35})`,e.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*3)}if(i==="grunge"){for(let n=0;n<70;n++){let s=Math.random()*256,r=30+Math.random()*120,o=e.createLinearGradient(0,0,0,r);o.addColorStop(0,"rgba(70,52,34,0.30)"),o.addColorStop(1,"rgba(70,52,34,0)"),e.fillStyle=o,e.fillRect(s,Math.random()*256,1+Math.random()*5,r)}for(let n=0;n<30;n++)e.fillStyle=`rgba(110,60,30,${.1+Math.random()*.25})`,e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,3+Math.random()*14,2+Math.random()*8,Math.random()*3,0,6.3),e.fill();for(let n=0;n<40;n++){e.strokeStyle="rgba(235,235,235,0.5)",e.lineWidth=.8,e.beginPath();let s=Math.random()*256,r=Math.random()*256;e.moveTo(s,r),e.lineTo(s+(Math.random()-.5)*24,r+(Math.random()-.5)*24),e.stroke()}}}return Ul[i]=h_(t)}var zs=new Map;function ai(i,t){return zs.has(i)||zs.set(i,new be(t)),zs.get(i)}function rd(i,t){return zs.has(i)||zs.set(i,new No(t)),zs.get(i)}function Nl(i,t=.6,e=.35){return ai(`paint${i}|${t}`,{color:i,roughness:t,metalness:e,map:oi("grunge"),bumpMap:oi("grunge"),bumpScale:.6})}function u_(i,t){let e=new Yt,n=tt(1382170,.9),s=ai("bandana",{color:11544095,roughness:.9,map:oi("weave")}),r=ai("wool",{color:4869973,roughness:1,map:oi("weave")}),o=ai("hood",{color:2764082,roughness:.95,map:oi("weave")}),a=tt(854794,.9),c=tt(920072,.3),l=tt(15262424,.4),h=i!=="balaclava"&&i!=="skimask"&&i!=="helmet";ae(e,.105,t,0,.012,.005,.92,1.12,1),ae(e,.078,t,0,-.07,-.03,1,.78,1);for(let u of[-1,1])ae(e,.026,t,u*.098,-.012,.012,.55,1,.8),i!=="helmet"&&(ae(e,.013,l,u*.039,.028,-.093,1,.7,.6),ae(e,.008,c,u*.039,.028,-.099),q(e,.05,.011,.012,a,u*.04,.055,-.096,0,0,u*-.12));switch(ke(e,new Tn(.018,.05,6),t,0,-.022,-.105,-Math.PI/2-.35,0,0),q(e,.05,.008,.01,tt(5909026,.6),0,-.088,-.092),i){case"balaclava":ae(e,.118,n,0,.01,.006,.93,1.13,1.02),ae(e,.088,n,0,-.07,-.024,1,.8,1),q(e,.17,.046,.03,t,0,.026,-.094),q(e,.012,.03,.02,n,0,.026,-.108);for(let u of[-1,1])ae(e,.013,l,u*.04,.028,-.108,1,.7,.5),ae(e,.008,c,u*.04,.028,-.114);break;case"bandana":ke(e,new dn(.118,14,10,0,Math.PI*2,0,1.2),s,0,.022,.006,0,0,0,.94,1.12,1),q(e,.06,.09,.02,s,0,-.02,.122,.2),q(e,.04,.07,.015,s,.04,-.06,.125,.2,0,.5),q(e,.052,.05,.015,n,.04,.03,-.105),q(e,.22,.01,.01,n,0,.06,-.06),ke(e,new dn(.083,12,8,0,Math.PI*2,1.3,1.8),tt(1774609,1),0,-.065,-.03,0,0,0,1.02,.9,1.04),pn(e,.14,.015,ai("hat",{color:3877402,roughness:.95,map:oi("weave")}),0,.085,0);break;case"skimask":ae(e,.118,r,0,.01,.006,.93,1.13,1.02),ae(e,.088,r,0,-.07,-.024,1,.8,1),q(e,.17,.046,.03,t,0,.026,-.094),q(e,.06,.03,.02,t,0,-.07,-.1);for(let u of[-1,1])ae(e,.013,l,u*.04,.028,-.108,1,.7,.5),ae(e,.008,c,u*.04,.028,-.114);pn(e,.03,.05,r,0,.125,0);break;case"hood":ae(e,.14,o,0,.015,.03,1,1.08,1.08),ae(e,.09,tt(657157,1),0,0,-.075,1,1.15,.9),q(e,.12,.05,.02,n,0,.03,-.11);break;case"helmet":ke(e,new dn(.138,18,12),rd("helm",{color:1447962,roughness:.22,metalness:.5,clearcoat:1,clearcoatRoughness:.08}),0,.015,.012,0,0,0,1,.97,1.12),q(e,.2,.065,.08,rd("visor",{color:12091423,roughness:.05,metalness:.9,transparent:!0,opacity:.82}),0,.012,-.108),q(e,.12,.06,.06,tt(1447962,.4,.3),0,-.075,-.09),q(e,.03,.03,.3,tt(2764081,.3,.5),0,.14,0);break}return h&&ke(e,new dn(.107,14,8,0,Math.PI*2,0,1),a,0,.018,.012,0,0,0,.93,1.12,1.02),e}var d_=new Le(1,.78,1,12),Qi=class{constructor(t){var x,v,g,f,M,b;this.o=t,this.root=new Yt;let e=ai(`skin${(x=t.skin)!=null?x:7029801}`,{color:(v=t.skin)!=null?v:7029801,roughness:.62}),n=(_,R,T)=>ai(`${_}${R}${T}`,{color:T==="camo"?16777215:R,roughness:.92,map:oi(T||"weave")}),s=n("sh",(g=t.shirt)!=null?g:3159098,t.camo?"camo":"weave"),r=n("pa",(f=t.pants)!=null?f:2303531,t.camo?"camo":t.denim?"denim":"weave"),o=ai(`gear${t.vest}`,{color:(M=t.vest)!=null?M:3883565,roughness:.85,map:oi("weave")}),a=tt((b=t.glove)!=null?b:1381653,.8),c=this.torso=new Yt;if(this.root.add(c),ae(c,1,s,0,.31,0,.215,.27,.135),ae(c,1,s,0,.1,0,.185,.2,.12),ae(c,1,r,0,-.02,0,.19,.14,.13),ae(c,.078,s,-.225,.5,0),ae(c,.078,s,.225,.5,0),ae(c,1,s,0,.53,.01,.12,.055,.09),pn(c,.05,.1,e,0,.6,0),q(c,.4,.05,.22,tt(1775378,.7),0,.045,0),q(c,.05,.045,.02,tt(10127962,.3,.8),0,.045,-.115),t.vest!==null&&t.vest!==void 0){q(c,.4,.36,.215,o,0,.34,0);for(let _ of[-1,0,1])q(c,.1,.12,.05,o,_*.12,.27,-.13);q(c,.12,.05,.045,tt(1776928,.6,.3),-.12,.4,-.125);for(let _ of[-1,1])q(c,.07,.3,.215,o,_*.13,.5,0)}t.pack&&(q(c,.32,.42,.17,ai(`pack${t.pack}`,{color:t.pack,roughness:.95,map:oi("weave")}),0,.3,.2),q(c,.26,.14,.04,tt(2303516,.9),0,.2,.3)),this.head=u_(t.head||"balaclava",e),this.head.position.set(0,.74,0),c.add(this.head);let l=_=>{let R=new Ut(d_,_);return R.castShadow=!0,this.root.add(R),R};this.L={thL:l(r),shL:l(r),thR:l(r),shR:l(r),uaL:l(s),faL:l(s),uaR:l(s),faR:l(s)};let h=(_,R)=>{let T=new Ut(Fl,_);return T.scale.setScalar(R),T.castShadow=!0,this.root.add(T),T};this.J={kL:h(r,.07),kR:h(r,.07),eL:h(s,.052),eR:h(s,.052),hipL:h(r,.095),hipR:h(r,.095)};let u=tt(1446671,.75),d=tt(723723,.9),p=()=>{let _=new Yt;return q(_,.105,.14,.12,u,0,.09,.05),q(_,.105,.075,.2,u,0,.04,-.05),ae(_,1,u,0,.04,-.14,.052,.04,.06),q(_,.115,.025,.3,d,0,0,-.04),this.root.add(_),_};this.bootL=p(),this.bootR=p(),this.handL=ae(this.root,1,a,0,0,0,.042,.048,.05),this.handR=ae(this.root,1,a,0,0,0,.042,.048,.05),this.gun=Hs(t.gun||"ak"),this.root.add(this.gun),this.e={};for(let _ of["eL","eR","kL","kR","sL","sR","hL","hR"])this.e[_]=new I;this.tmp=new I,this.tmp2=new I,this.phase=Math.random()*6,this.P={pelvis:ht(0,.93,0),footL:ht(-.12,.06,0),footR:ht(.12,.06,0)}}setGun(t){this.root.remove(this.gun),this.gun=Hs(t),this.root.add(this.gun),this.gunType=t}setPose(t){let e=this.torso,n=this.e;e.position.copy(t.pelvis),e.rotation.set(t.pitch||0,t.yaw||0,0,"YXZ"),e.updateMatrix(),n.sL.set(-.225,.5,0).applyMatrix4(e.matrix),n.sR.set(.225,.5,0).applyMatrix4(e.matrix);let s=this.tmp.set(t.pelvis.x-.1,t.pelvis.y-.05,t.pelvis.z),r=this.tmp2.set(t.pelvis.x+.1,t.pelvis.y-.05,t.pelvis.z),o=t.footL.clone();o.y+=.1;let a=t.footR.clone();a.y+=.1,_r(s,o,.45,.43,t.kneePoleL||ht(-.2,.1,-1),n.kL),Bn(this.L.thL,s,n.kL,.082),Bn(this.L.shL,n.kL,o,.062),_r(r,a,.45,.43,t.kneePoleR||ht(.2,.1,-1),n.kR),Bn(this.L.thR,r,n.kR,.082),Bn(this.L.shR,n.kR,a,.062),this.J.kL.position.copy(n.kL),this.J.kR.position.copy(n.kR),this.J.hipL.position.copy(s),this.J.hipR.position.copy(r),this.bootL.position.set(t.footL.x,t.footL.y-.01,t.footL.z),this.bootR.position.set(t.footR.x,t.footR.y-.01,t.footR.z),this.bootL.rotation.x=Rt((t.footL.y-.06)*-1.2,-.5,.5),this.bootR.rotation.x=Rt((t.footR.y-.06)*-1.2,-.5,.5);let c,l,h=this.gun,u=h.userData;if(t.aim){let d=t.aim,p=ht(0,0,0).copy(n.sR).addScaledVector(d,u.shoulder?.02:.26);p.y-=u.shoulder?-.04:.09,h.position.copy(p),h.quaternion.setFromUnitVectors(id,d),c=p.clone(),l=p.clone().addScaledVector(d,-u.fore.z).add(ht(0,u.shoulder?-.02:-.04,0)),u.shoulder&&(c.addScaledVector(d,-.02),c.y-=.1)}else{let d=ht(.12,-.7,-.7).normalize(),p=ht(0,0,0).copy(n.sR).add(ht(.08,-.38,-.2));h.position.copy(p),h.quaternion.setFromUnitVectors(id,d),c=p.clone(),l=p.clone().addScaledVector(d,-u.fore.z*.8)}t.handLFree&&(l=t.handLFree),_r(n.sL,l,.29,.28,ht(-.6,-.5,.5),n.eL),Bn(this.L.uaL,n.sL,n.eL,.056),Bn(this.L.faL,n.eL,l,.046),_r(n.sR,c,.29,.28,ht(.6,-.5,.5),n.eR),Bn(this.L.uaR,n.sR,n.eR,.056),Bn(this.L.faR,n.eR,c,.046),this.J.eL.position.copy(n.eL),this.J.eR.position.copy(n.eR),this.handL.position.copy(l),this.handR.position.copy(c)}walk(t,e,n,s=1){this.phase+=t*(n?11:7)*s;let r=Math.sin(this.phase),o=Math.cos(this.phase),a=n?.5:.32,c=this.P;c.pelvis.set(0,.93-.025*Math.abs(o)-(n?.06:0),0),c.footL.set(-.12,.06+Math.max(0,r)*.16,-r*a),c.footR.set(.12,.06+Math.max(0,-r)*.16,r*a),c.pitch=n?.28:.1,c.yaw=e?Rt(Math.atan2(-e.x,-e.z),-.9,.9)*.6:Math.sin(this.phase)*.12,c.aim=e,c.kneePoleL=null,c.kneePoleR=null,c.handLFree=null,this.setPose(c)}stand(t,e,n=0){let s=this.P,r=Math.sin(t*2.2)*.006;s.pelvis.set(0,.93-.2*n+r,0),s.footL.set(-.2,.06,.05+n*.05),s.footR.set(.2,.06,-.22),s.pitch=.08+n*.12,s.yaw=e?Rt(Math.atan2(-e.x,-e.z),-.9,.9)*.7:.2,s.aim=e,s.kneePoleL=ht(-.5,0,-1),s.kneePoleR=ht(.3,0,-1),s.handLFree=null,this.setPose(s)}};function od(i,t,e){let n=new Yt,s=new Ut(new mr(i-t*.55,t*.55,12,36),tt(1052946,.95));s.rotation.y=Math.PI/2,s.castShadow=!0,n.add(s);let r=new Ut(new mr(i-t*1.05,.012,6,36),tt(12172996,.25,.95));r.rotation.y=Math.PI/2,n.add(r);let o=[];for(let l=0;l<30;l++){let h=l/30*Math.PI*2,u=new $e(t*.95,.03,.045);u.rotateX(-h),u.translate(0,Math.sin(h)*(i+.002),Math.cos(h)*(i+.002)),u.deleteAttribute("uv"),o.push(u)}let a=new Ut(kn(o),tt(657931,1));a.castShadow=!0,n.add(a);let c=new Ut(new fr(i-t*1.1,28),new be({map:e,alphaTest:.4,side:_e,roughness:.4,metalness:.8}));return c.rotation.y=Math.PI/2,n.add(c),Li(n,.05,.14,tt(12962254,.3,.9),0,0,0),n}function f_(){let[i,t]=Ke(256,256);t.strokeStyle="#d6dadd",t.lineWidth=2.2;for(let e=0;e<36;e++){let n=e/36*Math.PI*2,s=(e%2?1:-1)*.34;t.beginPath(),t.moveTo(128+Math.cos(n+s)*14,128+Math.sin(n+s)*14),t.lineTo(128+Math.cos(n)*126,128+Math.sin(n)*126),t.stroke()}return fn(i,{repeat:!1})}function ad(){let i=new Yt,t=new Yt;i.add(t);let e=tt(12749083,.28,.75),n=tt(1776928,.45,.7),s=tt(13225683,.18,1),r=tt(1381912,.6,.5),o=tt(4861466,.8,.05),a=tt(11542042,.4,.2),c=f_(),l=.34,h=l,u=od(l,.12,c),d=od(l,.13,c);u.position.set(0,h,-.74),d.position.set(0,h,.72),i.add(u,d);let p=ht(0,1.02,-.5);for(let R of[-.1,.1])Ie(t,ht(R,1,-.52),ht(R*1,h+.02,-.74),.026,s),Ie(t,ht(R,.78,-.58),ht(R,.74,-.58),.034,e);Ie(t,ht(-.43,1.12,-.36),ht(-.14,1.07,-.46),.017,r),Ie(t,ht(.43,1.12,-.36),ht(.14,1.07,-.46),.017,r),Ie(t,ht(-.14,1.07,-.46),ht(.14,1.07,-.46),.017,r),Li(t,.022,.12,tt(789516,.9),-.45,1.12,-.36),Li(t,.022,.12,tt(789516,.9),.45,1.12,-.36),Ie(t,ht(-.43,1.12,-.36),ht(-.5,1.28,-.4),.01,r),Ie(t,ht(.43,1.12,-.36),ht(.5,1.28,-.4),.01,r),q(t,.1,.06,.012,s,-.5,1.3,-.4),q(t,.1,.06,.012,s,.5,1.3,-.4),oe(t,.125,.12,s,0,1,-.66);let x=ke(t,Sr,tt(16774084,.1,0,{emissive:16771496,emissiveIntensity:1.6}),0,1,-.725,Math.PI/2,0,0,.105,.02,.105),v=new Ut(new Le(.39,.39,.1,16,1,!0,Math.PI*.2,Math.PI*.75),tt(12749083,.28,.75,{side:_e}));v.rotation.z=Math.PI/2,v.position.set(0,h,-.74),v.castShadow=!0,t.add(v),Ie(t,p,ht(0,.92,.5),.028,n),Ie(t,ht(0,.98,-.45),ht(0,.46,-.05),.03,n),Ie(t,ht(0,.46,-.05),ht(0,.5,.45),.03,n),Ie(t,ht(0,.88,.2),ht(0,.5,.45),.024,n);for(let R of[-.1,.1])Ie(t,ht(R,.45,.4),ht(R,h,.72),.026,n),Ie(t,ht(R,.84,.35),ht(R,h+.1,.7),.014,s),Ie(t,ht(R,.84,.35),ht(R,.5,.58),.02,a);q(t,.3,.3,.42,tt(3816770,.5,.8),0,.5,.05),pn(t,.115,.28,tt(7172728,.4,.9),0,.78,-.12);for(let R=0;R<5;R++)pn(t,.135,.012,tt(8291466,.4,.9),0,.68+R*.045,-.12);Li(t,.09,.4,tt(2895667,.5,.8),0,.55,.22),q(t,.2,.08,.3,r,0,.32,0),ae(t,.2,e,0,1.02,-.2,1,.85,2.05),q(t,.2,.02,.2,tt(15986660,.4),0,1.12,-.18),q(t,.15,.1,.1,o,-.13,.98,-.18),q(t,.15,.1,.1,o,.13,.98,-.18),q(t,.3,.09,.66,o,0,.93,.4,.04),q(t,.2,.05,.3,r,0,1,.3),q(t,.24,.03,.5,e,0,.82,.88,-.35),q(t,.1,.07,.03,tt(3194928,.5),0,.64,1.12);let g=ke(t,Ol,tt(16722464,.3,0,{emissive:16718352,emissiveIntensity:.4}),0,.77,1.1,0,0,0,.12,.05,.04);Ie(t,ht(.14,.62,-.1),ht(.2,.43,.3),.032,s),Ie(t,ht(.2,.43,.3),ht(.23,.44,.95),.05,s),oe(t,.062,.12,r,.235,.44,1),Li(t,.016,.1,s,.24,.36,.12),Li(t,.016,.1,s,-.24,.36,.12),Ie(t,ht(-.12,.45,.1),ht(-.3,.1,.1),.012,r);let[f,M]=Ke(64,128),b=M.createRadialGradient(32,64,4,32,64,60);b.addColorStop(0,"rgba(0,0,0,0.55)"),b.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=b,M.fillRect(0,0,64,128);let _=new Ut(new sn(1.1,2.6),new Ue({map:fn(f,{repeat:!1}),transparent:!0,depthWrite:!1,fog:!0}));return _.rotation.x=-Math.PI/2,_.position.set(0,.04,0),_.renderOrder=2,i.add(_),i.userData={wF:u,wR:d,body:t,lens:x,tail:g,blob:_},i}function cd(i,t){let e=new Yt;Li(e,i,t,tt(1184532,.95),0,0,0),Li(e,i*.55,t*1.02,tt(7040882,.5,.6),0,0,0);for(let n=0;n<8;n++){let s=n/8*Math.PI*2;ke(e,Ol,tt(657930,1),0,Math.sin(s)*i,Math.cos(s)*i,-s,0,0,t*1.04,.07,.12)}return e}var jo=(i,t)=>Nl(i,t,.25);function ld(){let i=new Yt,t=Nl(10132116,.95,0),e=tt(12071455,.8),n=Nl(10504732,.6,.4);for(let s of[-7.5,6.5]){for(let r=-5.2;r<=5.3;r+=1.75)q(i,1.6,.42,.7,t,r,.21,s),q(i,1.6,.5,.36,t,r,.65,s),q(i,1.2,.12,.38,e,r,.5,s-.01);for(let r of[-3,.2,3.4])pn(i,.28,.9,n,r,.45+.5,s+.9),pn(i,.29,.1,tt(15658734,.7),r,1.15,s+.9)}return i.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),i}function hd(){let i=new Yt,t=new Yt;i.add(t);let e=jo(9071156,.75),n=jo(6244902,.8),s=tt(5134901,.95),r=tt(1447706,.7,.4),o=tt(1779248,.2,.7);q(t,2.3,.5,7.4,r,0,.95,.1),q(t,2.4,1.9,1.8,e,0,2,-2.45),q(t,2.3,.8,1.2,e,0,1.45,-3.55),q(t,2.1,.8,.06,o,0,2.5,-3.36,-.22),q(t,.06,.7,1.2,o,-1.21,2.45,-2.45),q(t,.06,.7,1.2,o,1.21,2.45,-2.45),q(t,2.6,.35,.4,r,0,.95,-4.2);for(let l=-2;l<=2;l++)q(t,.07,.6,.06,r,l*.35,1.45,-4.17);q(t,.34,.2,.08,tt(16773312,.2,0,{emissive:16770720,emissiveIntensity:1.2}),-.85,1.55,-4.17),q(t,.34,.2,.08,tt(16773312,.2,0,{emissive:16770720,emissiveIntensity:1.2}),.85,1.55,-4.17),q(t,2.4,.15,5,n,0,1.3,1.3),q(t,.1,.95,5,n,-1.2,1.8,1.3),q(t,.1,.95,5,n,1.2,1.8,1.3),q(t,2.4,.95,.1,n,0,1.8,3.8),q(t,1,.8,1,tt(7166517,.9),-.6,1.85,2.7),q(t,.9,.6,.9,s,.6,1.75,3),q(t,.8,.5,.8,tt(3752490,.9),.55,2.25,3,0,.4,0),q(t,.2,.2,3,r,0,2.95,-1.3),q(t,.15,.3,.15,r,0,3.05,-1.5);let a=Hs("ak");a.scale.setScalar(1.6),a.position.set(0,3.25,-1.5),t.add(a),pn(t,.08,1.6,r,1,2.5,-1.4),i.userData.wheels=[];for(let l of[-2.8,1.1,2.7])for(let h of[-1.18,1.18]){let u=cd(.62,.34);u.position.set(h,.62,l),t.add(u),i.userData.wheels.push(u)}for(let l of[-1,1])for(let h of[-.2])q(t,.1,.3,1.4,r,l,1.2,h);t.traverse(l=>{l.isMesh&&(l.castShadow=!0)});let c=new Qi({head:"balaclava",shirt:2895912,pants:2435114,vest:3881516,gun:"ak"});return c.root.position.set(0,1.38,-.8),i.add(c.root),i.userData.barrier=ld(),i.add(i.userData.barrier),i.userData.gunner=c,i.userData.mg=a,i.userData.muzzle=ht(0,3.3,-2.5),i.userData.height=3.4,i}function ud(){let i=new Yt,t=jo(4870712,.7),e=jo(3817772,.75),n=tt(1382170,.7,.4);q(i,2.5,1,5.4,t,0,1.2,0),q(i,2.5,.9,1.7,t,0,1.45,-2.9,.5),q(i,2.6,.5,5,e,0,.75,.1),q(i,2.3,.8,1,t,0,1,-3.3,.2),q(i,1.7,.08,.5,n,0,1.85,-2.5,.5);for(let r of[-1.2,.4,1.8])q(i,.05,.28,.6,n,-1.27,1.45,r),q(i,.05,.28,.6,n,1.27,1.45,r);q(i,2.7,.2,.3,n,0,.55,-3.9);let s=new Yt;s.position.set(0,1.95,.4),i.add(s),pn(s,.95,.55,e,0,.25,0),q(s,.5,.4,.6,t,0,.35,-.8),oe(s,.07,1.6,n,0,.38,-1.7),oe(s,.11,.4,n,0,.38,-1),q(s,.3,.1,.4,tt(16773312,.2,0,{emissive:16770720,emissiveIntensity:.5}),.5,.5,-.8),pn(s,.25,.12,n,-.4,.58,.2),q(i,.1,1.2,.04,n,1,3.1,2.2).rotation.z=.05,q(i,2.1,.5,.9,tt(6049587,.9),0,1.95,2,0,0,0),i.userData.wheels=[];for(let r of[-2.2,-.7,.9,2.3])for(let o of[-1.3,1.3]){let a=cd(.62,.42);a.position.set(o,.62,r),i.add(a),i.userData.wheels.push(a)}return q(i,.34,.2,.08,tt(16773312,.2,0,{emissive:16770720,emissiveIntensity:1.2}),-.9,1,-3.82),q(i,.34,.2,.08,tt(16773312,.2,0,{emissive:16770720,emissiveIntensity:1.2}),.9,1,-3.82),i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),i.userData.barrier=ld(),i.add(i.userData.barrier),i.userData.turret=s,i.userData.muzzle=ht(0,2.4,-2.9),i.userData.height=2.6,i}function dd(){let i=new Yt,t=tt(2501423,.45,.5),e=tt(1250583,.6,.5),n=tt(1715005,.08,.9,{transparent:!0,opacity:.88});ae(i,1,t,0,0,.2,1.05,.95,2.4),ae(i,1,n,0,.28,-1.5,.82,.62,1.1);let s=new Ut(new Le(.15,.36,4.8,8),t);s.rotation.x=Math.PI/2,s.position.set(0,.35,4),s.castShadow=!0,i.add(s),q(i,.08,1.4,.95,t,0,1,6.2,-.35),q(i,1.7,.06,.5,t,0,.5,5.8),q(i,.5,.18,.4,tt(11542042,.5),0,1.5,6.5,-.3);let r=new Yt;r.position.set(.2,.95,6.35),i.add(r);for(let l=0;l<2;l++)q(r,.03,1.3,.1,e,0,0,0,l*Math.PI/2);pn(i,.16,.55,e,0,1.25,.2);let o=new Yt;o.position.set(0,1.55,.2),i.add(o);for(let l=0;l<4;l++){let h=l*Math.PI/2;q(o,4.6,.035,.28,e,Math.cos(h)*2.65,0,-Math.sin(h)*2.65,0,h,0)}pn(o,.3,.1,e,0,0,0);let a=new Ut(new fr(5,32),new Ue({color:2236962,transparent:!0,opacity:.1,side:_e,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.56,a.position.z=.2,i.add(a);for(let l of[-.95,.95])oe(i,.04,3.2,e,l,-1.2,.2),Ie(i,ht(l,-1.2,-.7),ht(l*.6,-.55,-.6),.035,e),Ie(i,ht(l,-1.2,1.1),ht(l*.6,-.55,1),.035,e);q(i,3.8,.08,.55,t,0,-.1,.1);for(let l of[-1.5,1.5])oe(i,.17,1.2,tt(3817285,.5,.5),l,-.25,-.4),oe(i,.17,.08,e,l,-.25,-1);oe(i,.06,.8,e,0,-.75,-1.9),oe(i,.12,.25,e,0,-.75,-1.4);let c=ke(i,Fl,tt(16719904,.3,0,{emissive:16711680,emissiveIntensity:2}),0,-.9,.5,0,0,0,.07,.07,.07);return i.userData={rotor:o,tr:r,disc:a,muzzle:ht(0,-.75,-2.2),nav:c,height:2.4},i.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i}function ta(i){let t=new Yt;i==="med"?(q(t,.9,.6,.6,tt(15856110,.5),0,.5,0),q(t,.5,.14,.62,tt(13639712,.5),0,.5,0),q(t,.14,.5,.62,tt(13639712,.5),0,.5,0)):(q(t,1.1,.65,.7,tt(5595194,.8),0,.5,0),q(t,1.14,.1,.74,tt(3357218,.8),0,.82,0),q(t,.5,.2,.04,tt(15909198,.6),0,.55,.36),q(t,.1,.35,.02,tt(15909198,.6),-.4,.5,.36));let e=i==="med"?4259728:16765774,n=new Ut(new Le(.5,.5,14,14,1,!0),new Ue({color:e,transparent:!0,opacity:.18,blending:wn,depthWrite:!1,side:_e,fog:!1}));return n.position.y=7,t.add(n),t.userData.beam=n,t.traverse(s=>{s.isMesh&&s!==n&&(s.castShadow=!0)}),t}function Bl(i,t=15909198,e=!1){let n=new Yt,s=tt(2830133,.5,.7);for(let u of[-7.6,7.6])q(n,.5,8,.5,s,u,4,0),q(n,1.1,.4,1.1,tt(5593696,.8),u,.2,0);q(n,16.2,1.3,.5,s,0,8.1,0);let[r,o]=Ke(1024,128);if(o.fillStyle="#16191d",o.fillRect(0,0,1024,128),e){for(let u=0;u<64;u++)for(let d=0;d<8;d++)(u+d)%2===0&&(o.fillStyle="#e8e8e8",o.fillRect(u*16,d*16,16,16));o.fillStyle="rgba(10,10,10,0.72)",o.fillRect(180,18,664,92)}o.fillStyle="#"+t.toString(16).padStart(6,"0"),o.font='bold 78px Impact, "Arial Narrow", sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText(i,512,70);let a=new Ut(new sn(15.4,1.9),new Ue({map:fn(r,{repeat:!1}),side:_e,fog:!0}));a.position.set(0,8.1,.28),n.add(a);let c=a.clone();c.position.z=-.28,n.add(c);let l=tt(t,.3,0,{emissive:t,emissiveIntensity:2});for(let u=0;u<9;u++)ae(n,.14,l,-7+u*1.75,7.35,0);let h=new Tn(.28,.7,3);for(let u=0;u<17;u++){let d=new Ut(h,tt(u%2?t:15658734,.7));d.position.set(-7.6+u*.95,7.2-Math.sin(u/16*Math.PI)*.15,.1),d.rotation.z=Math.PI,n.add(d)}return n}function kl(i){let t=new Yt;if(i==="frag")return ae(t,.1,tt(3490602,.5,.4),0,0,0),q(t,.03,.05,.03,tt(10066329,.4,.8),0,.1,0),t;let e=i==="nuke"?2.6:1;oe(t,.09*e,.9*e,i==="nuke"?tt(15132390,.4,.3):tt(4870960,.6,.3),0,0,0);let n=new Ut(new Tn(.09*e,.35*e,10),tt(i==="nuke"?13117470:2830109,.4,.3));n.rotation.x=-Math.PI/2,n.position.z=-.62*e,t.add(n);for(let r=0;r<4;r++)q(t,.01,.2*e,.22*e,tt(2237478,.6,.4),0,0,.4*e,0,0,r*Math.PI/2).translateY(.1*e);let s=new Ut(new Tn(.1*e,.9*e,8),new Ue({color:16756800,transparent:!0,opacity:.9,blending:wn,depthWrite:!1,fog:!1}));return s.rotation.x=Math.PI/2,s.position.z=.9*e,t.add(s),t.userData.flame=s,t}var Jl={};Ld(Jl,{blast:()=>pd,damageEnemy:()=>Gl,hurt:()=>ra,initWeapons:()=>ia,newMission:()=>br,playerX:()=>ze,relOf:()=>In,resetMission:()=>Yl,respawn:()=>Zl,selectWeapon:()=>Vl,spawnPickup:()=>na,tryFire:()=>Wl,updateAim:()=>oa,updateEnemies:()=>aa,updateMission:()=>$l,updateReload:()=>Xl,weapon:()=>mn});var p_={terrorist:{head:"balaclava",shirt:2303531,pants:2764069,vest:3883565,gun:"ak",pack:2830115},pirate:{head:"bandana",shirt:7031338,pants:3686486,vest:null,gun:"shotgun",skin:9067068},kidnapper:{head:"skimask",shirt:2767448,pants:1974308,vest:null,gun:"smg",glove:2236962},gunman:{head:"hood",shirt:3816770,pants:1776671,vest:null,gun:"ak"}},m_={walker:1.1,truck:1.9,armor:1.5,chopper:0},g_=new be({color:986637,roughness:1}),ze=()=>ne(m.bx-1.7,m.bx,m.mountT*m.mountT*(3-2*m.mountT)),zl=()=>Rn[Math.floor(Math.random()*Rn.length)],In=i=>i.s-m.d,Di=i=>({x:i.x,y:i.y+(m_[i.cls]||1),s:i.s});function ia(){m.weapons=Os.map(i=>({def:i,mag:i.mag,reserve:i.reserve,reloadT:0})),m.wi=0,m.fireCd=0}var mn=()=>m.weapons[m.wi];function Vl(i){i<0&&(i=m.weapons.length-1),i>=m.weapons.length&&(i=0),i!==m.wi&&(m.wi=i,m.fireCd=.25,m.snd.click(),m.ui.weaponChanged())}function ea(i){i.reloadT>0||i.reserve<=0||i.mag>=i.def.mag||(i.reloadT=i.def.reload,m.snd.reload())}function sa(i){return i.obj.userData.e=i,m.root.add(i.obj),m.enemies.push(i),i}function fd(i,t,e){let n=yr[i],s=new Qi(p_[i]);s.root.rotation.y=Math.PI;let r={kind:i,def:n,cls:"walker",x:e,y:0,s:m.d+t,hp:n.hp,maxhp:n.hp,r:n.r,hum:s,obj:s.root,standoff:rt(n.standoff[0],n.standoff[1]),fireT:rt(.5,1.4),t:Math.random()*6,x0:e,dead:!1,deadT:0,flinch:0,burst:0,final:!1};return r.rate=n.rate,s.stand(0,null),sa(r)}function x_(i){let t=hd(),e=205,n={kind:"truck",def:yr.truck,cls:"truck",x:rt(-.6,.6),y:0,s:m.d+e,hp:1200,maxhp:1200,r:2.2,obj:t,yaw:rt(.2,.4)*(Math.random()<.5?-1:1),halfLen:4,dead:!1,deadT:0,fireT:1,burst:0,t:0,flinch:0,final:!!i.final,state:"park",gunner:t.userData.gunner};t.rotation.y=Math.PI+n.yaw,t.userData.gunner.stand(0,null),sa(n);for(let s=0;s<(i.guards||0);s++)fd(Al(["terrorist","pirate","gunman"]),e-6-Math.random()*8,rt(-6,6));return m.weapons[6].reserve<1&&(m.weapons[6].reserve=1),m.weapons[4].reserve<3&&(m.weapons[4].reserve=3),na("crate",120),n}function __(i){let t=ud(),e={kind:"armor",def:yr.armor,cls:"armor",x:rt(-1.5,.5),y:0,s:m.d+215,hp:1500,maxhp:1500,r:1.9,obj:t,yaw:rt(.15,.35)*(Math.random()<.5?-1:1),halfLen:2.9,dead:!1,deadT:0,fireT:1.5,burst:0,t:0,flinch:0,final:!!i.final,state:"drive",speed:12};return t.rotation.y=Math.PI+e.yaw,m.weapons[4].reserve<3&&(m.weapons[4].reserve=3),sa(e)}function v_(i){let t=dd(),e={kind:"chopper",def:yr.chopper,cls:"chopper",x:0,y:32,s:m.d+260,hp:700,maxhp:700,r:2.4,obj:t,dead:!1,deadT:0,fireT:3,burst:0,rocketT:6,t:Math.random()*10,rel:260,flinch:0,final:!!i.final,state:"fly",vy:0,spin:0,px:0};return t.rotation.y=Math.PI,m.weapons[3].reserve<4&&(m.weapons[3].reserve=4),sa(e)}function na(i,t){let e=ta(i);m.root.add(e),m.pickups.push({kind:i,x:zl(),s:m.d+t,obj:e})}function y_(i){switch(i.type){case"msg":m.ui.banner(i.text,i.sub,i.time||4);break;case"group":{for(let t=0;t<i.n;t++){let e=i.kinds[t%i.kinds.length],n=e==="gunman"?Al([-1,1])*rt(8,11):e==="terrorist"?rt(-5.5,5.5):rt(-6,6);fd(e,150+t*9+Math.random()*14,n)}break}case"truck":x_(i),i.msg&&m.ui.banner("ROADBLOCK AHEAD","Best weapon: NUKE / RPG",4);break;case"armor":__(i),m.ui.banner("ARMORED CAR","Best weapon: RPG / NUKE",3.5);break;case"chopper":v_(i),m.ui.banner("ATTACK CHOPPER","Best weapon: SNIPER / RPG / FRAG",3.5);break;case"crate":na("crate",130);break;case"med":na("med",130);break}}function M_(i){let t=Di(i);return{x:t.x,y:t.y+(i.cls==="walker"?.9:2),s:t.s}}function Gl(i,t,e=!1,n=!0){i.dead||t<=0||(i.hp-=t,i.flinch=.14,n&&(m.ui.hitmarker(i.hp<=0),m.snd.hit(),m.ui.dmgPop(M_(i),t,e)),i.hp<=0&&S_(i))}function S_(i){i.dead=!0,i.deadT=0,m.kills++,m.ui.feed(i.def.name);let t=Di(i),e=In(i);if(i.cls==="walker")m.fx.puff(i.x,.8,i.s,4,.4),Math.random()<.12&&m.pickups.push({kind:"crate",x:zl(),s:i.s,obj:(()=>{let n=ta("crate");return m.root.add(n),n})()});else{let n=i.cls==="truck"?2.4:i.cls==="armor"?2.1:2;m.fx.explode(t.x,t.y,t.s,n),m.snd.explosion(n,Math.abs(e),Rt((t.x-m.bx)/40,-1,1)),m.shake=Math.max(m.shake,Rt(1-Math.abs(e)/120,.2,1)),i.cls==="chopper"?(i.state="falling",i.vy=0,i.spin=rt(4,8)*(Math.random()<.5?1:-1)):(i.obj.traverse(s=>{s.isMesh&&(s.material=g_)}),i.gunner&&(i.gunner.root.visible=!1),i.obj.userData.barrier&&(i.obj.userData.barrier.visible=!1),Math.random()<.7&&m.pickups.push({kind:"crate",x:zl(),s:i.s-8,obj:(()=>{let s=ta("crate");return m.root.add(s),s})()}))}}function pd(i,t,e,n,s){let r=n.def||n,o=r.aoe||8,a=r.id==="nuke";if(a?(m.fx.nuke(i,t,e),m.snd.nuke(),m.ui.flashWhite(),m.shake=1.6,m.slow=.35,setTimeout(()=>{m.slow=1},900)):(m.fx.explode(i,t,e,r.id==="frag"?.8:1.1),m.snd.explosion(1,Math.abs(e-m.d),Rt((i-m.bx)/40,-1,1)),m.shake=Math.max(m.shake,Rt(1-Math.abs(e-m.d)/90,0,.8))),s==="p")for(let h of m.enemies){if(h.dead)continue;let u=Di(h),d=Math.hypot(u.x-i,u.y-t,u.s-e)-h.r*.6;d<o&&Gl(h,r.dmg[h.cls]*(a?1:Rt(1-d/o*.55,.3,1)),!1,!0)}let c=ze(),l=Math.hypot(c-i,1.2-t,m.d-e);l<o*(a?.9:.7)&&ra(s==="p"?18*(1-l/o)*(a?5:1):24,!0)}function ra(i,t){m.state==="play"&&(m.hp-=i,m.ui.hurt(i),t||m.snd.hurt(),m.shake=Math.max(m.shake,.25),m.hp<=0&&(m.hp=0,m.state="dead",m.ui.showDead()))}function b_(){return{x:ze()+.15,y:m.mounted||m.mountT>.5?1.45:1.55,s:m.d-.6}}function oa(){let i=mn(),t=i.def,e=ze(),n=null,s=1e9;for(let r of m.enemies){if(r.dead)continue;let o=Di(r),a=o.s-m.d;if(a<-2)continue;let c=Math.hypot(a,o.x-e,o.y-1.4);if(c>t.range||Math.atan2(Math.abs(o.x-e),Math.max(a,.01))>1.35||t.minRange&&c<t.minRange)continue;let l=Math.min((t.dmg[r.cls]||1)/r.maxhp,1.5),h=c/(.25+l)*(r.cls==="chopper"?.7:1);h<s&&(s=h,n={e:r,dist:c,rel:a})}m.aim=n}function Wl(i){var o;let t=mn(),e=t.def;if(m.fireCd>0||m.mountT>0&&m.mountT<1||t.reloadT>0)return;if(t.mag<=0){t.reserve>0?ea(t):(m.snd.empty(),m.fireCd=.3,m.ui.toast("OUT OF AMMO \u2014 SWITCH WEAPON"));return}if(e.id==="nuke"&&!m.aim){m.ui.toast("NO TARGET \u2014 NUKE NEEDS 85 m+ DISTANCE"),m.fireCd=.6;return}let n=b_(),s=(o=m.aim)==null?void 0:o.e,r=ze();if(t.mag--,t.reserve!==1/0&&t.mag,m.fireCd=e.rate,m.shots++,m.recoil=1,m.snd.shot(e.id),m.ui.ammoChanged(),e.kind==="bullet"){let a=e.pellets||1,c=m.mounted?1+m.speed*.03:.45;m.fx.flash(n.x,n.y,n.s-.5,e.id==="sniper"?1.8:1),m.fx.smoke.emit(n.x,n.y,n.s-.4,0,.3,1,.2,.7,.4,.7,.7,.7,.25,0,2);let l=!1;for(let h=0;h<a;h++){let u,d=!1;if(s){let p=Di(s),x=Math.hypot(p.s-n.s,p.x-n.x,p.y-n.y),v=e.spread*c*x,g=(Math.random()+Math.random()-1)*v*1.6,f=(Math.random()+Math.random()-1)*v*1.6,M=s.cls==="walker"?s.r*.95:s.r*1.5,b=s.cls==="walker"?p.y+.1:p.y;if(d=Math.hypot(g,f)<M,u={x:p.x+g,y:b+f,s:p.s},d){let _=s.cls==="walker"&&e.id!=="shotgun"&&Math.random()<.14;Gl(s,e.dmg[s.cls]*(_?2:1),_,!0),m.hits++,l=!0,s.cls!=="walker"?m.fx.sparks(u.x,u.y,u.s-.5,4):m.fx.puff(u.x,u.y,u.s,1,.5)}else{let _=1+30/x;u={x:n.x+(u.x-n.x)*_,y:n.y+(u.y-n.y)*_,s:n.s+(u.s-n.s)*_}}}else{let p=e.spread*c*140;u={x:n.x+(Math.random()-.5)*p,y:1.2+(Math.random()-.5)*p,s:n.s+140}}m.fx.tracer(n,u,"p",e.id==="sniper"?900:560,e.id==="sniper"?14:8,e.id==="sniper"?.08:.045)}t.mag<=0&&ea(t)}else{let a=s?(()=>{let u=Di(s);return new I(u.x-n.x,u.y-n.y,u.s-n.s).normalize()})():new I(0,.04,1);m.fx.flash(n.x,n.y,n.s-.9,2.2),m.fx.puff(n.x,n.y-.2,n.s+.6,4,.8);let c=kl(e.kind);m.root.add(c);let l=e.speed,h={owner:"p",def:e,kind:e.kind,x:n.x,y:n.y,s:n.s,vx:a.x*l,vy:a.y*l+(e.kind==="frag"?7:0),vs:a.z*l+m.speed,target:s,mesh:c,t:0,spd:l};m.projs.push(h),t.mag<=0&&ea(t)}}function Xl(i){for(let e of m.weapons)if(e.reloadT>0&&(e.reloadT-=i,e.reloadT<=0)){let n=Math.min(e.def.mag-e.mag,e.reserve);e.mag+=n,e.reserve!==1/0&&(e.reserve-=n),m.ui.ammoChanged()}let t=mn();t.mag<=0&&t.reloadT<=0&&t.reserve>0&&ea(t)}function E_(i){for(let t=m.projs.length-1;t>=0;t--){let e=m.projs[t];e.t+=i;let n,s,r,o=1.5;if(e.owner==="p")if(e.target&&!e.target.dead){let l=Di(e.target);n=l.x,s=l.y,r=l.s,o=Math.max(e.target.r,1.8)}else e.target&&e.target.dead&&e.target.state==="falling"&&(n=e.target.x,s=e.target.y,r=e.target.s);else n=ze(),s=1.2,r=m.d;if(n!==void 0){let l=n-e.x,h=s-e.y,u=r-e.s,d=Math.hypot(l,h,u)||1,p=Math.hypot(e.vx,e.vy,e.vs)||1,x=1-Math.exp(-(e.owner==="e"?.5:e.kind==="frag"?3:e.kind==="nuke"?3.5:6)*i),v=ne(e.vx/p,l/d,x),g=ne(e.vy/p,h/d,x),f=ne(e.vs/p,u/d,x),M=Math.hypot(v,g,f)||1,b=Math.max(e.spd,e.owner==="p"?p*.98:e.spd);e.vx=v/M*b,e.vy=g/M*b,e.vs=f/M*b}e.kind==="frag"&&(e.vy-=3.5*i),e.x+=e.vx*i,e.y+=e.vy*i,e.s+=e.vs*i;let a=e.kind==="nuke"?2.5:1;m.fx.smoke.emit(e.x,e.y,e.s,0,0,-e.vs*.05,.25*a,1.2*a,.8,.8,.8,.78,.45,0,1),e.kind!=="frag"&&m.fx.fire.emit(e.x,e.y,e.s-e.vs*.015,0,0,0,.5*a,.1,.12,1,.7,.3,.9),e.mesh.position.set(e.x,e.y,-(e.s-m.d)),e.mesh.lookAt(e.x+e.vx,e.y+e.vy,-(e.s+e.vs-m.d)),e.kind==="frag"&&(e.mesh.rotation.x+=e.t*10),e.mesh.userData.flame&&e.mesh.userData.flame.scale.set(1,.7+Math.random()*.6,1);let c=!1;if(e.owner==="p"){for(let l of m.enemies){if(l.dead)continue;let h=Di(l);if(Math.hypot(h.x-e.x,h.y-e.y,h.s-e.s)<Math.max(l.r+.6,1.8)+(e.kind==="nuke"?1:0)){c=!0;break}}e.y<=.15&&(c=!0),e.t>6&&(c=!0)}else(Math.hypot(n-e.x,s-e.y,r-e.s)<2||e.s<m.d-5||e.y<=.1)&&(c=!0);c&&(m.projs.splice(t,1),m.root.remove(e.mesh),pd(e.x,Math.max(e.y,.4),e.s,e.owner==="p"?e.def:{id:"erocket",aoe:3.6,dmg:{}},e.owner))}}var Hl=new I;function ql(i,t,e,n,s="enemy",r="enemy"){let o=ze(),a=In(i),c=Rt(1.25-Math.abs(a)/150,.2,1),l=(m.mounted?1-Math.min(.7,m.speed/55):1)*(1-Math.min(.55,Math.abs(m.bvx||0)*.14)),h=Math.random()<n*c*l,u=o+(h?0:rt(-2.5,2.5)),d=1.2+(h?0:rt(-1.2,1.2));m.fx.tracer(t,{x:u+0,y:d,s:m.d+(h?0:rt(-2,6))},"e",300,6,.04),m.fx.flash(t.x,t.y,t.s,.7),m.snd.shot(r,Math.abs(a),Rt((i.x-o)/40,-1,1)),h&&(ra(e),m.fx.sparks(u,d,m.d-.6,2))}function w_(i,t){let e=i.def,n=In(i),s=ze();if(i.t+=t,i.dead){i.deadT+=t;let h=Rt(i.deadT/.5,0,1);return i.obj.rotation.x=h*Math.PI/2*.98,i.obj.position.y=.12*h,i.deadT>4}let r=!1,o=i.standoff;if(n>o?(i.s-=e.speed*t,r=!0):i.kind==="gunman"&&(i.x=Rt(i.x0+Math.sin(i.t*.9+i.x0)*2.2,-11,11)),n<-30)return m.escaped++,!0;i.obj.position.set(i.x,i.y,-(i.s-m.d)),i.obj.rotation.y=Math.PI;let a=In(i),c=a<1,l=null;if(c||(l=Hl.set(-(s-i.x),1.35-1.45,-a).normalize().clone()),r&&i.kind!=="terrorist"?i.hum.walk(t,n<e.range?l:null,i.kind==="kidnapper"):r?i.hum.walk(t,n<e.range+15?l:null,!1):i.hum.stand(i.t,l,i.kind==="terrorist"?.3:.1),i.flinch>0&&(i.flinch-=t,i.obj.position.z+=i.flinch*1.2),!c&&n<e.range&&(i.fireT-=t,i.fireT<=0)){i.fireT=rt(e.rate[0],e.rate[1]),(i.kind==="kidnapper"||i.kind==="terrorist")&&(i.burst++,i.burst>(i.kind==="kidnapper"?10:5)&&(i.burst=0,i.fireT=rt(1,2)));let h={x:i.x+(s-i.x)*.02,y:1.4,s:i.s-.7},u=i.kind==="pirate"?n<28?1.6:.5:1;ql(i,h,e.dmg,.34*u,"enemy",i.kind==="pirate"?"shotgun":i.kind==="kidnapper"?"smg":"enemy")}return!1}function T_(i,t){let e=In(i),n=ze(),s=i.obj;if(i.t+=t,i.dead)return i.deadT+=t,Math.random()<t*14&&m.fx.fireAt(i.x,i.cls==="truck"?2.4:1.8,i.s,1.4),Math.random()<t*8&&m.fx.smokeAt(i.x,2.2,i.s,1.6,.12),s.position.set(i.x,0,-e),e<-70;if(i.cls==="armor"&&i.state==="drive"){i.s-=i.speed*t,e<50&&(i.state="hold");for(let a of s.userData.wheels)a.rotation.x+=i.speed*t/.62}s.position.set(i.x,0,-e),i.flinch>0&&(i.flinch-=t,s.position.y=Math.sin(i.t*60)*.02);let r=i.hp/i.maxhp;if(r<.55&&Math.random()<t*8&&m.fx.smokeAt(i.x+(i.cls==="truck",0),2,i.s-3,1,.25),r<.25&&Math.random()<t*10&&m.fx.fireAt(i.x,2,i.s-3,1),i.cls==="armor"){let a=s.userData.turret;a.rotation.y=Rt(Math.atan2(-(n-i.x)*1,-e)*0,-1,1)}if(i.cls==="truck"){let a=i.gunner;Hl.set(-(n-i.x),1.2-3.1,-e).normalize(),a.stand(i.t,Hl.clone(),0),s.userData.mg.visible=!1,a.gun.scale.setScalar(1.5)}m.mounted&&m.speed>1.5&&Math.abs(e)<i.halfLen+.8&&Math.abs(n-i.x)<6.4&&(m.d-=9,m.speed=0,m.gear=0,m.ui.gearChanged(),m.shake=1.2,m.snd.crash(),ra(30),m.fx.sparks(n,.8,m.d+2,14),m.ui.toast("CRASH! DESTROY THE ROADBLOCK"));let o=i.cls==="truck"?125:130;if(e<o&&e>0&&(i.fireT-=t,i.fireT<=0)){i.burst++,i.fireT=.13,i.burst>9&&(i.burst=0,i.fireT=rt(1.4,2.4));let a={x:i.x+(i.cls==="armor",0),y:i.cls==="truck"?3.2:2.4,s:i.s-3};ql(i,a,i.cls==="truck"?4.2:5,.26,"enemy","mg")}return e<-60?(m.escaped++,!0):!1}function A_(i,t){let e=i.obj,n=ze();i.t+=t;let s=e.userData;if(s.rotor.rotation.y+=t*38,s.tr.rotation.x+=t*50,s.nav.visible=Math.floor(i.t*2)%2===0,i.state==="falling")return i.vy-=16*t,i.y+=i.vy*t,i.s+=m.speed*.6*t,e.rotation.z+=i.spin*t,e.rotation.y+=i.spin*.2*t,Math.random()<t*40&&m.fx.fireAt(i.x,i.y,i.s,1.6),Math.random()<t*40&&m.fx.smokeAt(i.x,i.y,i.s,1.5,.1),e.position.set(i.x,i.y,-In(i)),i.y<1.2?(m.fx.explode(i.x,1,i.s,2.6),m.snd.explosion(2,Math.abs(In(i))),m.shake=Math.max(m.shake,.6),!0):!1;let r=i.final?60+Math.sin(i.t*.5)*20:78+Math.sin(i.t*.45+i.px)*26;i.rel=i.rel+Rt(r-i.rel,-34*t,34*t);let o=Math.sin(i.t*.35+i.px)*9+m.bx*.5,a=i.x;if(i.x=si(i.x,o,1,t),i.y=si(i.y,15+Math.sin(i.t*.7)*3,1.2,t),i.s=m.d+i.rel,e.position.set(i.x,i.y,-i.rel),e.rotation.y=Math.PI,e.rotation.x=Rt((r-i.rel)*-.004,-.2,.2)+.06,e.rotation.z=Rt((i.x-a)/t*.03,-.35,.35),i.flinch>0&&(i.flinch-=t,e.rotation.z+=Math.sin(i.t*50)*.03),Math.random()<t*8&&i.hp/i.maxhp<.5&&m.fx.smokeAt(i.x,i.y,i.s+2,.7,.2),i.fireT-=t,i.fireT<=0&&i.rel<140&&(i.burst++,i.fireT=.07,i.burst>14&&(i.burst=0,i.fireT=rt(2,3.2)),ql(i,{x:i.x,y:i.y-.75,s:i.s-2.2},3.2,.2,"enemy","mg")),i.rocketT-=t,i.rocketT<=0&&i.rel<130){i.rocketT=rt(6,9);let c=kl("rocket");m.root.add(c);let l=n-(i.x+1.5),h=1.2-i.y,u=m.d-i.s,d=Math.hypot(l,h,u),p=62;m.projs.push({owner:"e",kind:"rocket",x:i.x+1.5,y:i.y-.25,s:i.s-1.2,vx:l/d*p,vy:h/d*p,vs:u/d*p,target:null,mesh:c,t:0,spd:p}),m.snd.shot("rocket",i.rel)}}function aa(i){for(let t=m.enemies.length-1;t>=0;t--){let e=m.enemies[t],n=!1;e.cls==="walker"?n=w_(e,i):e.cls==="chopper"?n=A_(e,i):n=T_(e,i),n&&(m.root.remove(e.obj),m.enemies.splice(t,1))}E_(i);for(let t=m.pickups.length-1;t>=0;t--){let e=m.pickups[t],n=e.s-m.d;e.obj.position.set(e.x,0,-n),e.obj.rotation.y+=i*1.5,e.obj.userData.beam.rotation.y=0,Math.abs(n)<3&&Math.abs(e.x-m.bx)<(m.mountT>.9?1.5:3.2)?(m.root.remove(e.obj),m.pickups.splice(t,1),m.snd.pickup(),e.kind==="med"?(m.hp=Math.min(m.maxHp,m.hp+40),m.ui.toast("+40 HEALTH")):(R_(1),m.ui.toast("AMMO RESUPPLY")),m.ui.ammoChanged()):n<-25&&(m.root.remove(e.obj),m.pickups.splice(t,1))}}function R_(i){let t={shotgun:8,sniper:5,rocket:3,frag:4,nuke:0};for(let e of m.weapons){let n=t[e.def.id];n&&(e.reserve=Math.min(e.def.max,e.reserve+n*i))}Math.random()<.3&&m.weapons[6].reserve<2&&m.weapons[6].reserve++}function Yl(){for(let i of m.enemies)m.root.remove(i.obj);m.enemies.length=0;for(let i of m.projs)m.root.remove(i.mesh);m.projs.length=0;for(let i of m.pickups)m.root.remove(i.obj);m.pickups.length=0;for(let i of m.arches)m.root.remove(i.obj);m.arches.length=0,m.fx.clear()}function br(){let{ev:i,total:t}=Yu();m.timeline=i,m.total=t,m.evIdx=0,Yl(),m.d=0,m.speed=0,m.gear=0,m.mounted=!0,m.mountT=1,m.wantDismount=!1,m.lane=2,m.bx=Rn[2],m.bvx=0,m.snd.pick&&m.snd.pick(),m.clock=0,m.hp=m.maxHp,m.kills=0,m.escaped=0,m.shots=0,m.hits=0,m.nextCp=1,m.cpSpawned=!1,m.finishSpawned=!1,m.cpNum=0,ia(),m.save={clock:0,d:0,evIdx:0,kills:0,escaped:0,hp:m.hp,n:0,ammo:m.weapons.map(e=>[e.mag,e.reserve])},m.state="play",m.ui.newMission()}function Zl(){Yl();let i=m.save;m.d=i.d+4,m.speed=0,m.gear=0,m.lane=2,m.bx=Rn[2],m.bvx=0,m.mounted=!0,m.mountT=1,m.wantDismount=!1,m.clock=i.clock,m.evIdx=i.evIdx,m.kills=i.kills,m.escaped=i.escaped,m.hp=m.maxHp,m.weapons.forEach((t,e)=>{t.mag=i.ammo[e][0],t.reserve=i.ammo[e][1],t.reloadT=0}),m.nextCp=i.n+1,m.cpSpawned=!1,m.finishSpawned=!1,m.state="play",m.ui.respawned(),m.ui.ammoChanged()}function C_(){let i=0;for(let t of m.enemies)t.final&&!(t.dead&&t.cls!=="chopper")&&(t.dead||i++);return i}function $l(i){for(m.clock+=i;m.evIdx<m.timeline.length&&m.timeline[m.evIdx].t<=m.clock;)y_(m.timeline[m.evIdx++]);if(m.nextCp<=6&&!m.cpSpawned&&m.clock>=m.nextCp*qu-4){m.cpSpawned=!0;let t=Bl(`CHECKPOINT ${m.nextCp}`,15909198);m.root.add(t),m.arches.push({kind:"cp",n:m.nextCp,s:m.d+Rt(m.speed*4,45,170),obj:t})}if(!m.finishSpawned&&m.clock>=vr-8&&m.evIdx>=m.timeline.length&&C_()===0){m.finishSpawned=!0;let t=Bl("MISSION COMPLETE",8257434,!0);m.root.add(t),m.arches.push({kind:"finish",s:m.d+Rt(m.speed*4,60,180),obj:t}),m.ui.banner("ROUTE CLEAR","Ride through the finish gate",4)}for(let t=m.arches.length-1;t>=0;t--){let e=m.arches[t],n=e.s-m.d;if(e.obj.position.set(0,0,-n),n<=0&&m.mountT>.9){if(e.kind==="cp"){m.cpNum=e.n,m.nextCp=e.n+1,m.cpSpawned=!1,m.hp=Math.min(m.maxHp,m.hp+60);let s={shotgun:16,sniper:10,rocket:5,frag:6,nuke:1};for(let r of m.weapons){let o=s[r.def.id];o&&r.reserve<o&&(r.reserve=o)}m.save={clock:m.clock,d:e.s,evIdx:m.evIdx,kills:m.kills,escaped:m.escaped,hp:m.hp,n:e.n,ammo:m.weapons.map(r=>[r.mag,r.reserve])},m.snd.checkpoint(),m.ui.banner(`CHECKPOINT ${e.n} SAVED`,"Health & ammo resupplied",3),m.ui.ammoChanged()}else m.state="win",m.ui.showWin();m.root.remove(e.obj),m.arches.splice(t,1)}else n<-40&&(m.root.remove(e.obj),m.arches.splice(t,1),e.kind==="cp"&&(m.cpSpawned=!1,m.nextCp=e.n+1))}}var Tt=i=>document.getElementById(i),I_={ak:'<path d="M2 8h12l5-3h20l3-2h20v3h-7l-3 3h-8l-2 10h-6l1-10H19l-5 4H2z"/>',smg:'<path d="M6 7h30l3 3h10v3h-9v10h-6V13H10l-4 3z"/>',shotgun:'<path d="M2 11h38l2-3h20v3H44l-2 2H30l-3 3H2z"/>',sniper:'<path d="M2 12h14l4-3h12V6h6v3h22v3H36l-3 4h-6l-2-4H2z"/>',rocket:'<path d="M4 9h44l8-3v12l-8-3H4z"/>',frag:'<path d="M6 10h30l2-2h20v5H40l-2 3H6z"/>',nuke:'<circle cx="32" cy="12" r="3"/><path d="M32 9 L24 1 A11 11 0 0 1 40 1Z" transform="translate(0 2)"/><path d="M32 9 L24 1 A11 11 0 0 1 40 1Z" transform="rotate(120 32 12) translate(0 2)"/><path d="M32 9 L24 1 A11 11 0 0 1 40 1Z" transform="rotate(240 32 12) translate(0 2)"/>'},We=280,on=1.4,Kl;var md,ua,gd,ca=0,la=0,Er=0,ha=0,wr=[],ji,gn,Ui=new I;function xd(i,t){Kl=i,gn=t,md=Tt("mm").getContext("2d"),ua=Tt("compass"),gd=ua.getContext("2d"),ji=Tt("lock");let e=Tt("wbar");Os.forEach((o,a)=>{let c=document.createElement("div");c.className="slot",c.innerHTML=`<i class="num">${a+1}</i><svg viewBox="0 0 64 24">${I_[o.id]}</svg><span class="am"></span>`,c.addEventListener("pointerdown",l=>{l.preventDefault(),gn.select(a)}),e.appendChild(c),wr.push(c)});let n=(o,a,c)=>{o.addEventListener("pointerdown",h=>{var u;h.preventDefault(),(u=o.setPointerCapture)==null||u.call(o,h.pointerId),o.classList.add("press"),a()});let l=h=>{o.classList.remove("press"),c&&c()};o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l),o.addEventListener("lostpointercapture",l)};n(Tt("bShoot"),()=>{m.shootHeld=!0},()=>{m.shootHeld=!1});let s=Tt("gear");s.addEventListener("pointerdown",o=>{o.preventDefault();let a=s.getBoundingClientRect();(o.clientY-a.top<a.height/2?gn.gearUp:gn.gearDown)(),s.classList.add(o.clientY-a.top<a.height/2?"pu":"pd")});let r=()=>s.classList.remove("pu","pd");s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),s.addEventListener("pointerleave",r),n(Tt("bLeft"),()=>gn.laneLeft()),n(Tt("bRight"),()=>gn.laneRight()),n(Tt("bDown"),()=>gn.dismount()),n(Tt("bUp"),()=>gn.mount()),Tt("btnView").addEventListener("pointerdown",o=>{o.preventDefault(),gn.view()}),Tt("btnPause").addEventListener("pointerdown",o=>{o.preventDefault(),gn.pause()}),window.addEventListener("contextmenu",o=>o.preventDefault())}var Pn={banner(i,t="",e=3){let n=Tt("banner");n.querySelector("b").textContent=i,n.querySelector("span").textContent=t,n.classList.add("on"),ca=e},toast(i){let t=Tt("toast");t.textContent=i,t.classList.add("on"),la=2},feed(i){let t=Tt("feed"),e=document.createElement("div");for(e.innerHTML=`<b>\u2715</b> ${i}`,t.appendChild(e),setTimeout(()=>e.remove(),3300);t.children.length>4;)t.firstChild.remove()},hitmarker(i){let t=Tt("hitm");t.classList.remove("on","kill"),t.offsetWidth,t.classList.add("on"),i&&t.classList.add("kill")},dmgPop(i,t,e){if(Ui.set(i.x,i.y,-(i.s-m.d)).project(Kl),Ui.z>1)return;let n=document.createElement("div");n.className="dpop"+(e?" crit":""),n.textContent=Math.round(t)+(e?"!":""),n.style.left=(Ui.x*.5+.5)*innerWidth+"px",n.style.top=(-Ui.y*.5+.5)*innerHeight+"px",Tt("center").appendChild(n),setTimeout(()=>n.remove(),850)},flashWhite(){ha=1},hurt(i){Er=Math.min(.9,Er+.25+i*.03)},gearChanged(){Tt("gearn").textContent=m.gear?m.gear:"N",document.querySelectorAll("#gearpips i").forEach((i,t)=>i.classList.toggle("on",t<m.gear))},weaponChanged(){wr.forEach((i,t)=>i.classList.toggle("act",t===m.wi)),this.ammoChanged()},ammoChanged(){wr.forEach((i,t)=>{let e=m.weapons[t],n=e.reserve===1/0?"\u221E":e.reserve;i.querySelector(".am").textContent=t===m.wi?`${e.mag}/${n}`:n,i.classList.toggle("empty",e.mag<=0&&e.reserve<=0)})},newMission(){Tt("end").classList.add("hide"),this.gearChanged(),this.weaponChanged(),Tt("track").classList.toggle("on",!1)},respawned(){Tt("end").classList.add("hide"),this.gearChanged(),this.weaponChanged(),this.banner("BACK IN THE FIGHT",`Checkpoint ${m.save.n||"START"}`,2.5)},showDead(){Tt("endTitle").textContent="YOU WERE TAKEN DOWN",Tt("endSub").textContent=m.save.n?`Respawn at checkpoint ${m.save.n}`:"Restart from the beginning",Tt("endStats").innerHTML=`<div><b>${m.kills}</b>KILLS</div><div><b>${m.cpNum}</b>CHECKPOINT</div>`;let i=Tt("endBtn");i.textContent="RESPAWN",i.onclick=()=>gn.respawn(),Tt("end").classList.remove("hide")},showWin(){let i=m.total?m.kills/m.total:1,t=i>=.85?3:i>=.6?2:1;Tt("endTitle").textContent="MISSION COMPLETE",Tt("endSub").textContent="\u2605".repeat(t)+"\u2606".repeat(3-t)+"  The forest road is clear.";let e=Math.floor(m.clock/60),n=Math.floor(m.clock%60).toString().padStart(2,"0");Tt("endStats").innerHTML=`<div><b>${m.kills}/${m.total}</b>HOSTILES DOWN</div><div><b>${m.shots?Math.round(m.hits/m.shots*100):0}%</b>ACCURACY</div><div><b>${e}:${n}</b>TIME</div>`;let s=Tt("endBtn");s.textContent="PLAY AGAIN",s.onclick=()=>gn.restart(),Tt("end").classList.remove("hide")},track(i){let t=Tt("track");t.textContent="\u266A "+i,t.classList.add("on"),clearTimeout(this._tt),this._tt=setTimeout(()=>t.classList.remove("on"),5e3)},update(i){ca>0&&(ca-=i,ca<=0&&Tt("banner").classList.remove("on")),la>0&&(la-=i,la<=0&&Tt("toast").classList.remove("on")),Er=Math.max(0,Er-i*1.6);let t=m.hp<30?.25+.2*Math.sin(performance.now()/180):0;Tt("hurtfx").style.opacity=Math.max(Er,t),ha=Math.max(0,ha-i*.8),Tt("whitefx").style.opacity=ha,Tt("alive").textContent=Math.max(0,m.total-m.kills-m.escaped),Tt("kills").textContent=m.kills;let e=Math.max(0,vr-m.clock),n=Math.floor(e/60),s=Math.floor(e%60).toString().padStart(2,"0");Tt("timer").textContent=`${n.toString().padStart(2,"0")}:${s}`,Tt("progbar").style.width=Rt(m.clock/vr,0,1)*100+"%";let r=Tt("hpbar");r.firstElementChild.style.width=Rt(m.hp/m.maxHp,0,1)*100+"%",r.classList.toggle("low",m.hp<30);let o=mn(),a=Tt("reload");a.classList.toggle("on",o.reloadT>0),o.reloadT>0&&(a.firstElementChild.style.width=(1-o.reloadT/o.def.reload)*100+"%"),Tt("bDown").classList.toggle("dis",!m.mounted),Tt("bUp").classList.toggle("dis",m.mounted),Tt("gear").classList.toggle("dis",!m.mounted),Tt("bLeft").classList.toggle("dis",!m.mounted),Tt("bRight").classList.toggle("dis",!m.mounted),Tt("app").classList.toggle("pointer",m.view===1),Tt("app").classList.toggle("zoom",!!(m.view===1&&o.def.zoom&&m.mountT>.5));let c=m.aim;if(c&&m.state==="play"){let l=c.e;if(Ui.set(l.x,l.y+(l.cls==="walker"?1:l.cls==="chopper"?0:1.8),-(l.s-m.d)).project(Kl),Ui.z<1){ji.style.display="block",ji.style.left=(Ui.x*.5+.5)*innerWidth+"px",ji.style.top=(-Ui.y*.5+.5)*innerHeight+"px";let h=Rt((l.cls==="walker"?1500:4200)/Math.max(c.dist,20),34,l.cls==="walker"?90:190);ji.style.setProperty("--s",h+"px"),Tt("lockname").textContent=`${l.def.name} \xB7 ${Math.round(c.dist)}m`,Tt("lockhp").firstElementChild.style.width=Rt(l.hp/l.maxhp,0,1)*100+"%";let u=l.def.best.map(d=>Os.find(p=>p.id===d).name).join(" / ");Tt("lockbest").textContent=l.cls==="walker"?"":"BEST: "+u,wr.forEach((d,p)=>d.classList.toggle("rec",l.cls!=="walker"&&l.def.best.includes(Os[p].id)&&m.weapons[p].reserve>0))}else ji.style.display="none"}else ji.style.display="none",wr.forEach(l=>l.classList.remove("rec"));this.minimap(),this.compass()},minimap(){let i=md;i.clearRect(0,0,We,We),i.fillStyle="#1b2a1c",i.fillRect(0,0,We,We);let t=We/2,e=We*.8,n=ze();i.strokeStyle="rgba(255,255,255,.07)",i.lineWidth=1;let s=m.d%40*on;for(let o=-s;o<We+60;o+=40*on)i.beginPath(),i.moveTo(0,e-o+.5),i.lineTo(We,e-o+.5),i.stroke();for(let o=0;o<We;o+=40*on)i.beginPath(),i.moveTo(o+.5,0),i.lineTo(o+.5,We),i.stroke();i.fillStyle="#35523a";for(let o=0;o<18;o++){let a=o*97%280,c=(o*53%280+m.d*on%280)%280;i.globalAlpha=.25,i.beginPath(),i.arc(a,c,14+o%3*6,0,6.3),i.fill()}i.globalAlpha=1,i.fillStyle="#5a5d60",i.fillRect(t-6*on,0,12*on,We),i.strokeStyle="rgba(255,230,150,.6)",i.setLineDash([8,10]),i.beginPath(),i.moveTo(t,0),i.lineTo(t,We),i.stroke(),i.setLineDash([]);let r=(o,a)=>[t+o*on,e-a*on];for(let o of m.arches){let[,a]=r(0,o.s-m.d);i.fillStyle=o.kind==="cp"?"#f2c14e":"#7dff9a",i.fillRect(t-7*on,a-2,14*on,4)}for(let o of m.pickups){let[a,c]=r(o.x,o.s-m.d);i.fillStyle=o.kind==="med"?"#40ff90":"#ffd34e",i.fillRect(a-4,c-4,8,8)}for(let o of m.enemies){if(o.dead&&o.cls!=="walker")continue;let[a,c]=r(o.x,In(o));c<-10||c>We+10||(i.fillStyle=o.dead?"#666":"#ff4a38",o.cls==="walker"?(i.beginPath(),i.arc(a,c,4,0,6.3),i.fill()):o.cls==="chopper"?(i.fillStyle="#ff9a2a",i.beginPath(),i.moveTo(a,c-8),i.lineTo(a+7,c+6),i.lineTo(a-7,c+6),i.closePath(),i.fill()):i.fillRect(a-6,c-6,12,12))}i.fillStyle="#fff",i.beginPath(),i.moveTo(t+n*on,e-9),i.lineTo(t+n*on+7,e+8),i.lineTo(t+n*on-7,e+8),i.closePath(),i.fill(),i.strokeStyle="rgba(0,0,0,.6)",i.lineWidth=3,i.strokeRect(0,0,We,We)},compass(){let i=gd,t=ua.width,e=ua.height;i.clearRect(0,0,t,e);let n=5;i.fillStyle="rgba(0,0,0,.35)",i.fillRect(0,10,t,24),i.strokeStyle="rgba(255,255,255,.8)",i.fillStyle="#fff",i.font="bold 16px sans-serif",i.textAlign="center",i.lineWidth=2;for(let r=-70;r<=70;r+=5){let o=t/2+r*n,a=r%15===0;i.beginPath(),i.moveTo(o,34),i.lineTo(o,a?24:29),i.stroke(),r%45===0&&r!==0&&i.fillText(r>0?r===45?"NE":"E":r===-45?"NW":"W",o,21)}i.fillStyle="#f2c14e",i.font="bold 20px sans-serif",i.fillText("N",t/2,21),i.beginPath(),i.moveTo(t/2-6,2),i.lineTo(t/2+6,2),i.lineTo(t/2,10),i.fill();let s=ze();for(let r of m.enemies){if(r.dead)continue;let o=In(r);if(o<1)continue;let a=Math.atan2(r.x-s,o)*57.3;if(Math.abs(a)>70)continue;i.fillStyle="#ff4a38";let c=t/2+a*n;i.beginPath(),i.moveTo(c-5,12),i.lineTo(c+5,12),i.lineTo(c,22),i.fill()}}};var an=i=>document.getElementById(i),pa=matchMedia("(pointer:coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),P_=an("c"),qe=new wo({canvas:P_,antialias:!pa,powerPreference:"high-performance"});qe.outputColorSpace=Te;qe.toneMapping=ml;qe.toneMappingExposure=.95;qe.autoClear=!1;qe.setClearColor(11846848,1);qe.shadowMap.type=pl;var Ni=new Ls,ce=new Ge(60,innerWidth/innerHeight,.25,700);Ni.add(ce);m.scene=Ni;m.camera=ce;m.renderer=qe;m.root=new Yt;Ni.add(m.root);m.density=pa?.6:1;var Fi=new $o(Ni,qe,ce);{let i=new Ps(qe);Ni.environment=i.fromScene(Fi.bg,.03,1,2e3).texture,Ni.environmentIntensity=.55,i.dispose()}m.fx=new Ko(Ni);m.snd=new Qo;m.ui=Pn;m.snd.onTrack=i=>Pn.track(i);Fi.setQuality(pa?1:3);var hi=new Yt;hi.position.x=Rn[2];m.lane=2;m.bx=Rn[2];m.bvx=0;m.root.add(hi);var da=ad();hi.add(da);var Rr=new Qi({head:"helmet",shirt:10695210,pants:5917237,vest:null,pack:3883304,glove:4862752,gun:"ak",skin:8015408});hi.add(Rr.root);var ma=Hs("ak");ma.position.set(.02,.32,.34);ma.rotation.set(.1,0,.8);ma.scale.setScalar(.95);Rr.torso.add(ma);var Xe=null,_d="";function ga(){let i=mn().def.id;i!==_d&&(_d=i,Xe&&ce.remove(Xe),Xe=Hs(i),Xe.scale.setScalar(1.15),Xe.position.set(.2,-.2,-.45),Xe.userData.base=Xe.position.clone(),ce.add(Xe),Rr.setGun(i))}var Ed={},Qe={gearUp(){m.state!=="play"||!m.mounted||m.mountT<.9||(m.wantDismount=!1,m.gear<5&&(m.gear++,m.snd.gear(),Pn.gearChanged()))},gearDown(){m.state!=="play"||!m.mounted||m.mountT<.9||m.gear>0&&(m.gear--,m.snd.gear(),Pn.gearChanged())},laneLeft(){m.state!=="play"||!m.mounted||m.mountT<.9||m.lane>0&&(m.lane--,m.snd.gear())},laneRight(){m.state!=="play"||!m.mounted||m.mountT<.9||m.lane<Rn.length-1&&(m.lane++,m.snd.gear())},dismount(){m.state!=="play"||!m.mounted||(m.gear=0,m.wantDismount=!0,Pn.gearChanged(),Pn.toast("BRAKING\u2026"))},mount(){m.state!=="play"||m.mounted||(m.mounted=!0,m.wantDismount=!1)},select(i){m.state==="play"&&Vl(i)},view(){m.view=1-m.view,m.snd.click()},pause(){m.state==="play"?(m.state="pause",an("pause").classList.remove("hide"),m.snd.pauseMusic(!0)):m.state==="pause"&&th()},respawn(){Zl()},restart(){br(),ga()}};xd(ce,Qe);function th(){m.state="play",an("pause").classList.add("hide"),m.snd.pauseMusic(!1)}addEventListener("keydown",i=>{if(!i.repeat)switch(Ed[i.code]=!0,i.code){case"KeyW":case"ArrowUp":Qe.gearUp();break;case"KeyS":case"ArrowDown":Qe.gearDown();break;case"KeyA":case"ArrowLeft":Qe.laneLeft();break;case"KeyD":case"ArrowRight":Qe.laneRight();break;case"Space":case"KeyJ":m.shootHeld=!0,i.preventDefault();break;case"KeyQ":Qe.select(m.wi-1);break;case"KeyE":Qe.select(m.wi+1);break;case"KeyC":Qe.view();break;case"KeyF":m.mounted?Qe.dismount():Qe.mount();break;case"KeyP":case"Escape":Qe.pause();break;default:if(i.code.startsWith("Digit")){let t=+i.code.slice(5)-1;t>=0&&t<7&&Qe.select(t)}}});addEventListener("keyup",i=>{Ed[i.code]=!1,(i.code==="Space"||i.code==="KeyJ")&&(m.shootHeld=!1)});document.addEventListener("visibilitychange",()=>{document.hidden?(m.state==="play"&&Qe.pause(),m.snd.suspend&&m.snd.suspend(!0)):(m.snd.suspend&&m.snd.suspend(!1),m.state==="pause"&&m.snd.pauseMusic(!0))});document.addEventListener("pause",()=>{m.state==="play"&&Qe.pause(),m.snd.suspend&&m.snd.suspend(!0)});document.addEventListener("resume",()=>{m.snd.suspend&&m.snd.suspend(!1)});addEventListener("resize",()=>{qe.setSize(innerWidth,innerHeight,!1),ce.aspect=innerWidth/innerHeight,ce.updateProjectionMatrix()});an("btnStart").addEventListener("click",async()=>{var i;m.snd.init();try{let t=document.documentElement;t.requestFullscreen&&await t.requestFullscreen(),(i=screen.orientation)!=null&&i.lock&&await screen.orientation.lock("landscape")}catch{}an("title").classList.add("hide"),an("app").classList.remove("menu"),br(),ga()});an("pResume").addEventListener("click",th);an("pRestart").addEventListener("click",()=>{th(),br(),ga()});an("pMusic").addEventListener("click",i=>{m.snd.setMusic(!m.snd.musicOn),i.target.textContent="MUSIC: "+(m.snd.musicOn?"ON":"OFF")});an("pSfx").addEventListener("click",i=>{m.snd.muteSfx(m.snd.sfxOn),i.target.textContent="SFX: "+(m.snd.sfxOn?"ON":"OFF")});var eh=["LOW","MEDIUM","HIGH","ULTRA"];an("pQual").addEventListener("click",i=>{li.locked=!0,Fi.setQuality((m.quality+1)%4),i.target.textContent="GRAPHICS: "+eh[m.quality]});an("pQual").textContent="GRAPHICS: "+eh[m.quality];var ci=new I,Tr=new I(0,1.3,-20),fa=new I,vd=new un,yd=new re,ui=new I(0,0,-1);var Md=0,ts=0,Sd=-1,Ql=0,jl=60,wd=i=>i*i*(3-2*i),L_=new I(0,.84,.3),D_=new I(-1.7,.93,0),U_=new I(-.25,.4,.1),N_=new I(.25,.4,.1),F_=new I(-1.9,.06,.05),O_=new I(-1.5,.06,-.25),B_=new I(-.43,1.1,-.36),Hv=new I(.43,1.1,-.36),xn={pelvis:new I,footL:new I,footR:new I};function k_(i,t){let e=wd(m.mountT),n=Math.sin(Math.PI*m.mountT);xn.pelvis.lerpVectors(D_,L_,e),xn.pelvis.y+=n*.3,xn.footL.lerpVectors(F_,U_,e),xn.footL.y+=n*.35*(m.mountDir,1),xn.footR.lerpVectors(O_,N_,e),xn.footR.y+=n*.2;let s=e<.5?.25*(1-e*2):0,r,o=m.aim;if(o){let l={x:o.e.x,y:o.e.y+(o.e.cls==="walker"?1.1:o.e.cls==="chopper"?0:1.9),s:o.e.s};r=fa.set(l.x-m.bx-xn.pelvis.x,l.y-1.45,-(l.s-m.d)).normalize()}else r=fa.set(.05,-.12,-1).normalize();ui.lerp(r,1-Math.exp(-14*i)).normalize();let a=Math.atan2(-ui.x,-ui.z);Ql=si(Ql,Rt(a,-1.1,1.1)*.55,10,i),xn.pelvis.y-=s*.2;let c=ne(.1,.42,e)+(m.recoil||0)*.04+(m.mounted?0:s*.1);Object.assign(xn,{yaw:Ql,pitch:c,aim:ui,kneePoleL:new I(-.35,.1,-1),kneePoleR:new I(.35,.1,-1),handLFree:e>.6?B_:null}),e<.6&&(xn.kneePoleL.set(-.5,0,-1),xn.kneePoleR.set(.3,0,-1)),Rr.setPose(xn),Rr.root.visible=!(m.view===1&&m.mountT>.5)}function z_(i,t){let e=ze(),n=m.shake,s=(Math.random()-.5)*n*.12,r=(Math.random()-.5)*n*.12,o=wd(m.mountT),a=fa.set(ne(e+.55,m.bx*.92,o),ne(1.8,1.85,o),ne(3.4,4.1+m.speed*.02,o)),c=new I(ne(e,m.bx,o)*.9,1.25,-16),l=60+m.speed*.22;if(m.view===0)ci.lerp(a,1-Math.exp(-6*i)),Tr.lerp(c,1-Math.exp(-7*i)),ce.position.set(ci.x+s,ci.y+r,ci.z),ce.lookAt(Tr.x,Tr.y,Tr.z),ce.position.y+=Math.sin(t*9)*.006*Math.min(m.speed/20,1);else{let h=new I(ze()+(m.mounted,0),ne(1.7,1.52,o),ne(-.1,-.12,o));ci.lerp(h,1-Math.exp(-14*i)),ce.position.set(ci.x+s,ci.y+r,ci.z);let u=fa.copy(ui).multiplyScalar(30).add(ce.position).setY(ce.position.y+ui.y*30);yd.lookAt(ce.position,new I(ce.position.x+ui.x*30,ce.position.y+ui.y*30+0,ce.position.z+ui.z*30),new I(0,1,0)),vd.setFromRotationMatrix(yd),ce.quaternion.slerp(vd,1-Math.exp(-12*i)),Tr.set(ce.position.x,1.3,ce.position.z-20),l=mn().def.zoom?20:68}if(jl=si(jl,l,9,i),ce.fov=jl,ce.updateProjectionMatrix(),Xe){let h=m.view===1&&m.mountT>.5&&!mn().def.zoom;Xe.visible=h,ts=si(ts,0,12,i),m.recoil&&(ts=Math.max(ts,m.recoil*.07)),Xe.position.set(Xe.userData.base.x,Xe.userData.base.y+ts*.4+Math.sin(t*2)*.002,Xe.userData.base.z+ts),Xe.rotation.x=ts*1.4}}var li={acc:0,n:0,locked:!1},bd=performance.now(),Ar=0,H_=0;function Td(i){requestAnimationFrame(Td);let t=Math.min((i-bd)/1e3,window.__dtCap||.06);if(bd=i,!li.locked&&t>0&&(li.acc+=t,li.n++,li.acc>3)){let e=li.n/li.acc;e<38&&m.quality>0?(Fi.setQuality(m.quality-1),an("pQual").textContent="GRAPHICS: "+eh[m.quality]):e>58&&m.quality<2,li.acc=0,li.n=0}Ad(t),qe.clear(),qe.render(Fi.bg,ce),qe.clearDepth(),qe.render(Ni,ce)}function Ad(i){let t=i*(m.state==="play"?m.slow:1);Ar+=t;let e=m.state==="play",n=m.state==="title";if(m.state==="play"||m.state==="dead"||m.state==="win"){e&&$l(t);let s=m.mounted&&m.mountT>.95,r=m.state==="dead"?0:s?Xu[m.gear]:0,o=r>m.speed?6.5:15;Md=m.speed,m.speed+=Rt(r-m.speed,-o*t,o*t),m.state==="win"&&(m.speed=Math.max(m.speed,14)),m.wantDismount&&m.speed<1.2&&m.mounted&&(m.mounted=!1,m.wantDismount=!1),m.d+=m.speed*t;{let c=Rn[m.lane],l=m.bx;m.bx+=Rt(c-m.bx,-7.5*t,7.5*t),m.bvx=(m.bx-l)/Math.max(t,.001)}let a=(m.mounted?1:0)-m.mountT;m.mountT=Rt(m.mountT+Math.sign(a)*Math.min(Math.abs(a),t*1.5),0,1),e?(oa(),m.shootHeld&&Wl(t),m.fireCd=Math.max(0,m.fireCd-t),Xl(t),aa(t)):m.state!=="win"?oa():aa(t)}else n&&(H_+=t,m.speed=13,m.d+=m.speed*t,m.mountT=1,m.aim=null);if(m.recoil=Math.max(0,(m.recoil||0)-t*8),m.state!=="pause"){mn().def.id!==Sd&&(Sd=mn().def.id,ga());let s=da.userData,r=m.speed*t/.34;s.wF.rotation.x-=r,s.wR.rotation.x-=r;let o=Math.sin(Ar*14)*.006*Math.min(m.speed/12,1)+Math.sin(Ar*5.3)*.004*Math.min(m.speed/20,1);hi.position.x=m.bx,hi.position.y=o,hi.rotation.z=si(hi.rotation.z,Rt(-m.bvx*.035,-.28,.28),10,t),hi.rotation.y=Rt(-m.bvx*.012,-.12,.12);let a=(m.speed-Md)/Math.max(t,.001);da.rotation.x=si(da.rotation.x,Rt(-a*.004,-.06,.05),6,t),s.tail.material.emissiveIntensity=a<-3?3:.4,m.speed>4&&Math.random()<t*26&&m.fx.dust(m.bx+(Math.random()-.5)*.4,.05,m.d+.8,m.speed),k_(t,Ar),z_(t,Ar),m.shake=Math.max(0,m.shake-t*2.8);for(let l of Fi.fires())Math.random()<t*22&&m.fx.fireAt(l.fireX,l.fireY,l.fireS,1),Math.random()<t*9&&m.fx.smokeAt(l.fireX,l.fireY+.4,l.fireS,1.2,.18);Fi.update(t,m.d,ce.position);let c=0;for(let l of m.enemies)l.cls==="chopper"&&!l.dead&&(c=Math.max(c,1-Rt(Math.abs(l.s-m.d)/220,0,1)));m.snd.setHeli(c),m.snd.engine(m.speed,m.gear,m.mounted,m.state!=="pause"&&m.state!=="dead"),m.fx.update(t,m.d,ce,qe),n||Pn.update(i)}}ce.position.set(Rn[2],2,5);ci.copy(ce.position);ia();m.ui.ammoChanged=Pn.ammoChanged.bind(Pn);Pn.gearChanged();requestAnimationFrame(Td);window.__sim=(i,t=.05)=>{for(let e=0;e<i;e++)Ad(t)};window.__G=m;window.__world=Fi;window.__game=Jl;})();
