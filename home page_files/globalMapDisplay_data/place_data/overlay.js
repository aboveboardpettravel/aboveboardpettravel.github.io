var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

google.maps.__gjsload__('overlay', function(_){var Ps=function(a){this.h=a},ala=function(){},Qs=function(a){a.lo=a.lo||new ala;return a.lo},bla=function(a){this.Ma=new _.ri(function(){var b=a.lo;if(a.getPanes()){if(a.getProjection()){if(!b.jn&&a.onAdd)a.onAdd();b.jn=!0;a.draw()}}else{if(b.jn)if(a.onRemove)a.onRemove();else a.remove();b.jn=!1}},0)},cla=function(a,b){function c(){return _.si(e.Ma)}var d=Qs(a),e=d.Yl;e||(e=d.Yl=new bla(a));_.ab(d.Xa||[],_.F.removeListener);var f=d.Wa=d.Wa||new _.qr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Nr=d.Nr||new Ps(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Xa=[_.F.addListener(a,"panes_changed",c),_.F.addListener(g,"zoom_changed",c),_.F.addListener(g,"offset_changed",c),_.F.addListener(b,"projection_changed",c),_.F.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.sf&&_.og(b,"Ox")},gla=function(a){if(a){var b=a.getMap();if(dla(a)!==b&&b&&b instanceof _.sf){var c=b.__gm;c.overlayLayer?a.__gmop=new ela(b,a,c.overlayLayer):c.j.then(function(d){d=d.Ya;var e=new Rs(b,d);d.jb(e);c.overlayLayer=e;fla(a);gla(a)})}}},fla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.l.Uf(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},dla=function(a){return(a=a.__gmop)?a.map:null},ela=function(a,
b,c){this.map=a;this.h=b;this.l=c;this.j=!1;_.og(this.map,"Ox");c.xf(this)},hla=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},Rs=function(a,b){this.m=a;this.l=b;this.h=null;this.j=[]};_.C(Ps,_.G);Ps.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ie(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var Ss={};_.C(bla,_.G);Ss.xf=function(a){if(a){var b=a.getMap();(Qs(a).vr||null)!==b&&(b&&cla(a,b),Qs(a).vr=b)}};Ss.Uf=function(a){var b=Qs(a),c=b.Wa;c&&c.unbindAll();(c=b.Nr)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Xa&&_.ab(b.Xa,_.F.removeListener);b.Xa=null;b.Yl&&(b.Yl.Ma.Hd(),b.Yl=null);delete Qs(a).vr};var Ts={};ela.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};Rs.prototype.dispose=function(){};Rs.prototype.Ac=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.sn(this.m,this.l,function(){});k.Ac(a,b,c,d,e,f,g,h);a=_.A(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,hla(b,k),b.draw()};Rs.prototype.xf=function(a){this.j.push(a);this.h&&hla(a,this.h);this.l.refresh()};Rs.prototype.Uf=function(a){_.kb(this.j,a)};Ts.xf=gla;Ts.Uf=fla;_.bf("overlay",{vp:function(a){if(a){(0,Ss.Uf)(a);(0,Ts.Uf)(a);var b=a.getMap();b&&(b instanceof _.sf?(0,Ts.xf)(a):(0,Ss.xf)(a))}},preventMapHitsFrom:function(a){_.Wn(a,{onClick:function(b){return _.Bn(b.event)},vd:function(b){return _.yn(b)},Bh:function(b){return _.zn(b)},Ud:function(b){return _.zn(b)},Cd:function(b){return _.An(b)}}).xi(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.jf);a.addEventListener("contextmenu",_.jf);a.addEventListener("dblclick",_.jf);a.addEventListener("mousedown",
_.jf);a.addEventListener("mousemove",_.jf);a.addEventListener("MSPointerDown",_.jf);a.addEventListener("pointerdown",_.jf);a.addEventListener("touchstart",_.jf);a.addEventListener("wheel",_.jf)}});});


}
/*
     FILE ARCHIVED ON 01:20:31 Mar 15, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:35:33 Mar 15, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 167.319
  exclusion.robots: 0.144
  exclusion.robots.policy: 0.132
  RedisCDXSource: 0.667
  esindex: 0.009
  LoadShardBlock: 137.647 (3)
  PetaboxLoader3.datanode: 152.751 (5)
  CDXLines.iter: 18.808 (3)
  load_resource: 228.659 (2)
  PetaboxLoader3.resolve: 205.182 (2)
*/