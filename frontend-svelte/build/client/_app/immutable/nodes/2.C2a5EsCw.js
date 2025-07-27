import"../chunks/DsnmJJEf.js";import{d as he,a as pe,s as ee,o as ge}from"../chunks/BUVVZkht.js";import{aB as _e,N as ae,O as me,X as $,R as N,Z as be,a0 as xe,a as b,b as we,al as ye,am as Ce,an as G,W,Y as S,T as ke,a1 as Ae,a7 as F,aq as Ee,ao as Te,aC as Le,aw as Re,aD as X,a5 as re,K as Ne,aE as Pe,ar as te,as as Ue,aF as Ie,aG as Me,aH as q,aI as le,V as He,aJ as Se,a4 as Be,aK as je,e as ze,aL as De,aM as Oe,aN as $e,aO as We,at as qe,B as se,ax as z,c as Ve,w as oe,m as j,E as J,o as B,F as ie,G as k,q as C,r as x,s as D,aP as Ye}from"../chunks/DLl5_3dh.js";import{p as ne}from"../chunks/Dj0ihnNm.js";function Fe(e,r,a,t=!0){t&&a();for(var l of r)e.addEventListener(l,a);_e(()=>{for(var s of r)e.removeEventListener(s,a)})}function Je(e,r){return r}function Ke(e,r,a){for(var t=e.items,l=[],s=r.length,o=0;o<s;o++)Se(r[o].e,l,!0);var u=s>0&&l.length===0&&a!==null;if(u){var p=a.parentNode;Be(p),p.append(a),t.clear(),P(e,r[0].prev,r[s-1].next)}je(l,()=>{for(var c=0;c<s;c++){var h=r[c];u||(t.delete(h.k),P(e,h.prev,h.next)),le(h.e,!u)}})}function Ge(e,r,a,t,l,s=null){var o=e,u={flags:r,items:new Map,first:null};{var p=e;o=N?$(be(p)):p.appendChild(ae())}N&&xe();var c=null,h=!1,E=new Map,i=we(()=>{var f=a();return Ne(f)?f:f==null?[]:re(f)}),_,n;function d(){Xe(n,_,u,E,o,l,r,t,a),s!==null&&(_.length===0?c?te(c):c=F(()=>s(o)):c!==null&&Ue(c,()=>{c=null}))}me(()=>{n??=ze,_=b(i);var f=_.length;if(h&&f===0)return;h=f===0;let L=!1;if(N){var T=ye(o)===Ce;T!==(f===0)&&(o=G(),$(o),W(!1),L=!0)}if(N){for(var v=null,w,g=0;g<f;g++){if(S.nodeType===ke&&S.data===Ae){o=S,L=!0,W(!1);break}var R=_[g],y=t(R,g);w=K(S,u,v,null,R,y,g,l,r,a),u.items.set(y,w),v=w}f>0&&$(G())}if(N)f===0&&s&&(c=F(()=>s(o)));else if(Ee()){var A=new Set,m=Te;for(g=0;g<f;g+=1){R=_[g],y=t(R,g);var M=u.items.get(y)??E.get(y);M?ue(M,R,g):(w=K(null,u,null,null,R,y,g,l,r,a,!0),E.set(y,w)),A.add(y)}for(const[U,H]of u.items)A.has(U)||m.skipped_effects.add(H.e);m.add_callback(d)}else d();L&&W(!0),b(i)}),N&&(o=S)}function Xe(e,r,a,t,l,s,o,u,p){var c=r.length,h=a.items,E=a.first,i=E,_,n=null,d=[],f=[],L,T,v,w;for(w=0;w<c;w+=1){if(L=r[w],T=u(L,w),v=h.get(T),v===void 0){var g=t.get(T);if(g!==void 0){t.delete(T),h.set(T,g);var R=n?n.next:i;P(a,n,g),P(a,g,R),V(g,R,l),n=g}else{var y=i?i.e.nodes_start:l;n=K(y,a,n,n===null?a.first:n.next,L,T,w,s,o,p)}h.set(T,n),d=[],f=[],i=n.next;continue}if(ue(v,L,w),(v.e.f&q)!==0&&te(v.e),v!==i){if(_!==void 0&&_.has(v)){if(d.length<f.length){var A=f[0],m;n=A.prev;var M=d[0],U=d[d.length-1];for(m=0;m<d.length;m+=1)V(d[m],A,l);for(m=0;m<f.length;m+=1)_.delete(f[m]);P(a,M.prev,U.next),P(a,n,M),P(a,U,A),i=A,n=U,w-=1,d=[],f=[]}else _.delete(v),V(v,i,l),P(a,v.prev,v.next),P(a,v,n===null?a.first:n.next),P(a,n,v),n=v;continue}for(d=[],f=[];i!==null&&i.k!==T;)(i.e.f&q)===0&&(_??=new Set).add(i),f.push(i),i=i.next;if(i===null)continue;v=i}d.push(v),n=v,i=v.next}if(i!==null||_!==void 0){for(var H=_===void 0?[]:re(_);i!==null;)(i.e.f&q)===0&&H.push(i),i=i.next;var fe=H.length;if(fe>0){var ce=c===0?l:null;Ke(a,H,ce)}}e.first=a.first&&a.first.e,e.last=n&&n.e;for(var ve of t.values())le(ve.e);t.clear()}function ue(e,r,a,t){Le(e.v,r),e.i=a}function K(e,r,a,t,l,s,o,u,p,c,h){var E=(p&Ie)!==0,i=(p&Me)===0,_=E?i?Re(l,!1,!1):X(l):l,n=(p&Pe)===0?o:X(o),d={i:n,v:_,k:s,a:null,e:null,prev:a,next:t};try{if(e===null){var f=document.createDocumentFragment();f.append(e=ae())}return d.e=F(()=>u(e,_,n,c),N),d.e.prev=a&&a.e,d.e.next=t&&t.e,a===null?h||(r.first=d):(a.next=d,a.e.next=d.e),t!==null&&(t.prev=d,t.e.prev=d.e),d}finally{}}function V(e,r,a){for(var t=e.next?e.next.e.nodes_start:a,l=r?r.e.nodes_start:a,s=e.e.nodes_start;s!==null&&s!==t;){var o=He(s);l.before(s),s=o}}function P(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function de(e){var r,a,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(r=0;r<l;r++)e[r]&&(a=de(e[r]))&&(t&&(t+=" "),t+=a)}else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function Ze(){for(var e,r,a=0,t="",l=arguments.length;a<l;a++)(e=arguments[a])&&(r=de(e))&&(t&&(t+=" "),t+=r);return t}function Qe(e){return typeof e=="object"?Ze(e):e??""}function ea(e,r,a){var t=e==null?"":""+e;return t===""?null:t}function aa(e,r){return e==null?null:String(e)}function O(e,r,a,t,l,s){var o=e.__className;if(N||o!==a||o===void 0){var u=ea(a);(!N||u!==e.getAttribute("class"))&&(u==null?e.removeAttribute("class"):e.className=u),e.__className=a}return s}function I(e,r,a,t){var l=e.__style;if(N||l!==r){var s=aa(r);(!N||s!==e.getAttribute("style"))&&(s==null?e.removeAttribute("style"):e.style.cssText=s),e.__style=r}return t}const ra=Symbol("is custom element"),ta=Symbol("is html");function Y(e,r,a,t){var l=la(e);N&&(l[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||l[r]!==(l[r]=a)&&(r==="loading"&&(e[De]=a),a==null?e.removeAttribute(r):typeof a!="string"&&sa(e).includes(r)?e[r]=a:e.setAttribute(r,a))}function la(e){return e.__attributes??={[ra]:e.nodeName.includes("-"),[ta]:e.namespaceURI===Oe}}var Z=new Map;function sa(e){var r=Z.get(e.nodeName);if(r)return r;Z.set(e.nodeName,r=[]);for(var a,t=e,l=Element.prototype;l!==t;){a=We(t);for(var s in a)a[s].set&&r.push(s);t=$e(t)}return r}function oa(e,r,a=r){var t=r(),l=()=>{t!==e.paused&&a(t=e.paused)};Fe(e,["play","pause","canplay"],l,t==null),qe(()=>{(t=!!r())!==e.paused&&(t?e.pause():e.play().catch(()=>{a(t=!0)}))})}const ia=""+new URL("../assets/album-cover.2zubXIYP.avif",import.meta.url).href,na=""+new URL("../assets/album-cover-japan.0DIi6ff5.avif",import.meta.url).href,ua=""+new URL("../assets/album-cover-piano.BVPyx2Dh.avif",import.meta.url).href,da=""+new URL("../assets/album-cover-catcat.JwsNv4fV.avif",import.meta.url).href,fa=""+new URL("../assets/album-texture.rwR0OP_z.avif",import.meta.url).href,ca=""+new URL("../assets/album-cracks.Dy4k1dqy.avif",import.meta.url).href,va=""+new URL("../assets/vinyl.C7Bhu67P.avif",import.meta.url).href,ha=""+new URL("../assets/creators.A65BnIKR.avif",import.meta.url).href;var pa=j(`<style>#cover {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-image: url();
        background-size: 100% 100%;
        box-shadow: 5px 0 20px 0 rgba(0,0,0,0.6),
                    inset 0 0 10px 5px rgba(255,255,255,0.2),
              inset 0 0 4px 2px rgba(0,0,0,0.2);
        border-radius: 4px;
        object-fit: cover;
      }
      #cover-before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 4px;
        mix-blend-mode: screen;
        opacity: 0.5;
        content: '';
      }
      #cover-after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 4px;
        mix-blend-mode: screen;
        opacity: 0.2;
        content: '';
      }
      #vinyl {
          position: absolute;
          top: 2.5%;
          left: 2.5%;
          z-index: 0;
          width: 95%;
          height: 95%;
          display: block;
          background-size: 106% 106%;
          background-position: center;
          box-shadow: 0 0 20px 4px rgba(0,0,0,0.6);
          border-radius: 50%;
          content: '';
          &.playing {
            animation: 5s linear spinThat infinite, ease-out getOut 1s forwards;
          }

          &.pausing {
            animation: 5s linear spinThat 0s paused, ease-in getIn 1s forwards;
          }

          &::before {
            position: absolute;
            top: 2.5%;
            left: 2.5%;
            z-index: 10;
            width: 95%;
            height: 95%;
            /* background-image: url('http://www.designresourcebox.com/ths/diverse/blacktextures/82267467.jpg'); //dead link */
            background-size: 100% 100%;
            border-radius: 50%;
            mix-blend-mode: screen;
            opacity: 0.3;
            content: '';
          }
          #print {
            position: absolute;
            top: 33%;
            left: 33%;
            height: 34%;
            width: 34%;
            box-shadow: inset 0 0 0 5px rgba(150,150,150,0.5);
            /* background-image: url('http://assets.teamrock.com/image/14d29742-c6f7-43f6-bbe1-6bf7b3b34c6f?w=800'); //dead link */
        background-size: cover;
            border-radius: 50%;
          }
      }

      @keyframes getOut {
        0% {
          left: 0;
        }
        100% {
          left: 50%;
        }
      }
      @keyframes getIn {
        0% {
          left: 50%;
        }
        100% {
          left: 0;
        }
      }
      @keyframes spinThat {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }</style>`),ga=(e,r,a)=>{D(r,b(a),!0)},_a=j("<option> </option>"),ma=j('<div class="w-full h-fit gap-4 flex flex-col text-white gap-y-6 "><div class="flex flex-col justify-center items-center bg-amber-400 py-8"><h2 class="text-3xl mb-4 font-bold font-charmonman">เจ้าภาพงานบุญ</h2> <img alt="creators" class="h-64"/></div> <div><div class="flex justify-center items-center w-full px-8  "><div class="relative w-80 h-80"><div id="album" class="relative top-0 left-0 h-full w-full"><div id="cover-before"></div> <div id="cover"><div id="print"></div></div> <div id="cover-after"></div> <div id="vinyl"><div id="print"></div></div></div></div></div> <div class="flex items-center justify-center gap-x-4"><p class="text-2xl font-bold font-charmonman">ควบคุมการปลุกเสก</p> <audio controls></audio></div> <div class="flex items-center justify-center gap-x-4"><a class="text-xl font-charmonman px-6 py-4 bg-white outline rounded-md text-black">นิมนต์เสียงมาเจิมเครื่องคุณ</a></div> <div class="flex items-center justify-center gap-x-4"><select class="w-48" name="audioMix"></select></div></div></div>');function ba(e,r){se(r,!0);let a=z(!1);ne(r,"theme",3,"");const t={label:"Normal",value:"",audioPath:"original.wav",containterClasses:"bg-gray-900 text-white",albumCoverUrl:ia};let l=z(Ve(t));oe(()=>{console.log(b(l))});const s=[t,{label:"Japan",value:"japan",audioPath:"bg1.wav",containterClasses:"bg-red-900 text-white",albumCoverUrl:na},{label:"Piano",value:"piano",audioPath:"bg3.wav",containterClasses:"bg-indigo-900 text-white",albumCoverUrl:ua},{label:"Cat Cat",value:"catcat",audioPath:"uia_audio.wav",containterClasses:"bg-amber-700 text-white",albumCoverUrl:da}];var o=ma();pe(y=>{var A=pa();B(y,A)});var u=C(o),p=k(C(u),2);x(u);var c=k(u,2),h=C(c),E=C(h),i=C(E),_=C(i),n=k(_,2),d=k(n,2),f=k(d,2);x(i),x(E),x(h);var L=k(h,2),T=k(C(L),2);x(L);var v=k(L,2),w=C(v);x(v);var g=k(v,2),R=C(g);Ge(R,21,()=>s,Je,(y,A)=>{var m=_a();m.__click=[ga,l,A];var M=C(m,!0);x(m);var U={};J(()=>{ee(M,b(A).label),U!==(U=b(A).value)&&(m.value=(m.__value=b(A).value)??"")}),B(y,m)}),x(R),x(g),x(c),x(o),J(()=>{Y(p,"src",ha),O(c,1,`h-fit gap-4 flex flex-col text-white gap-y-6 py-12 ${b(l).containterClasses??""}`),I(_,`background-image: url(${fa});`),I(n,`background-image: url(${b(l).albumCoverUrl??""});`),I(d,`background-image: url(${ca});`),O(f,1,Qe(b(a)?"pausing":"playing")),I(f,`background-image: url(${va});`),Y(T,"src",`${r.audioBasePath}/${b(l).audioPath}`),Y(w,"href",`${r.audioBasePath}/${b(l).audioPath}`)}),oa(T,()=>b(a),y=>D(a,y)),B(e,o),ie()}he(["click"]);const Q=""+new URL("../assets/border-a-hb-h60.C73kcS7p.svg",import.meta.url).href,xa=""+new URL("../assets/border-a-vl-h60.DobfYuy1.svg",import.meta.url).href,wa=""+new URL("../assets/border-a-vr-h60.Cxy_C9AV.svg",import.meta.url).href;var ya=j('<div class="w-full h-full min-h-screen"><div class="relative w-full h-full"><div class="flex w-full items-center justify-center py-24 px-16"><div class="prose w-full"><h1 class="text-center text-blue-800 font-charmonman">บทนมัสการอันศักด์สิทธิ์</h1> <p class="text-center text-blue-800 text-lg"> </p> <h2 class="text-center text-blue-800 font-charmonman">สาธุ</h2></div></div> <div></div> <div></div> <div class="absolute top-0 left-0 h-full bg-repeat-y"></div> <div class="absolute top-0 right-0 h-full bg-repeat-y"></div></div></div>');function Ca(e,r){let a=ne(r,"text",19,()=>`
อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ

อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ

อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ

อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
    `);var t=ya(),l=C(t),s=C(l),o=C(s),u=k(C(o),2),p=C(u,!0);x(u),Ye(2),x(o),x(s);var c=k(s,2);O(c,1,"absolute px-[60px] top-0 left-0 w-full rotate-180 bg-repeat-x");var h=k(c,2);O(h,1,"absolute px-[60px] bottom-0 left-0 w-full bg-repeat-x");var E=k(h,2),i=k(E,2);x(l),x(t),J(()=>{ee(p,a()),I(c,`background-image: url(${Q}); height: 60px;`),I(h,`background-image: url(${Q}); height: 60px;`),I(E,`background-image: url(${xa}); width: 60px;`),I(i,`background-image: url(${wa}); width: 60px;`)}),B(e,t)}var ka=j('<div class="w-full h-full min-h-screen grid grid-cols-2 gap-x-4 p-4"><!> <!></div>');function Ra(e,r){se(r,!0);let a=z(""),t="http://localhost:8000",l=z("");oe(()=>{b(a)&&(console.log("Fetching from path:",b(a)),fetch(b(a)).then(p=>p.text()).then(p=>{D(l,p,!0)}).catch(p=>console.error("Error fetching paliscript:",p)))}),ge(()=>{const p=new URL(window.location.href),h=new URLSearchParams(p.search).get("paliscriptPath");h?(D(a,h,!0),console.log("Set path from query param:",b(a))):console.log("No paliscriptPath in query parameters")});var s=ka(),o=C(s);Ca(o,{get text(){return b(l)}});var u=k(o,2);ba(u,{audioBasePath:t}),x(s),B(e,s),ie()}export{Ra as component};
