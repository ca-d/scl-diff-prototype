import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.dom.dom.js";
import "./goog.dom.forms.js";
import "./goog.dom.classlist.js";
import "./goog.style.style.js";
import "./goog.string.string.js";
import "./clojure.string.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_14775 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_14775(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_14779 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_14779(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13308 = coll;
var G__13309 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13308,G__13309) : shadow.dom.lazy_native_coll_seq.call(null, G__13308,G__13309));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13329 = arguments.length;
switch (G__13329) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13338 = arguments.length;
switch (G__13338) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13347 = arguments.length;
switch (G__13347) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13349 = arguments.length;
switch (G__13349) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13367 = arguments.length;
switch (G__13367) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13374 = arguments.length;
switch (G__13374) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e13379){if((e13379 instanceof Object)){
var e = e13379;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13379;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13384 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13385 = null;
var count__13386 = (0);
var i__13387 = (0);
while(true){
if((i__13387 < count__13386)){
var el = chunk__13385.cljs$core$IIndexed$_nth$arity$2(null, i__13387);
var handler_14840__$1 = ((function (seq__13384,chunk__13385,count__13386,i__13387,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13384,chunk__13385,count__13386,i__13387,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14840__$1);


var G__14853 = seq__13384;
var G__14854 = chunk__13385;
var G__14855 = count__13386;
var G__14856 = (i__13387 + (1));
seq__13384 = G__14853;
chunk__13385 = G__14854;
count__13386 = G__14855;
i__13387 = G__14856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13384);
if(temp__5804__auto__){
var seq__13384__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13384__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13384__$1);
var G__14859 = cljs.core.chunk_rest(seq__13384__$1);
var G__14860 = c__5525__auto__;
var G__14861 = cljs.core.count(c__5525__auto__);
var G__14862 = (0);
seq__13384 = G__14859;
chunk__13385 = G__14860;
count__13386 = G__14861;
i__13387 = G__14862;
continue;
} else {
var el = cljs.core.first(seq__13384__$1);
var handler_14863__$1 = ((function (seq__13384,chunk__13385,count__13386,i__13387,el,seq__13384__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__13384,chunk__13385,count__13386,i__13387,el,seq__13384__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14863__$1);


var G__14864 = cljs.core.next(seq__13384__$1);
var G__14865 = null;
var G__14866 = (0);
var G__14867 = (0);
seq__13384 = G__14864;
chunk__13385 = G__14865;
count__13386 = G__14866;
i__13387 = G__14867;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13403 = arguments.length;
switch (G__13403) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13411 = cljs.core.seq(events);
var chunk__13412 = null;
var count__13413 = (0);
var i__13414 = (0);
while(true){
if((i__13414 < count__13413)){
var vec__13439 = chunk__13412.cljs$core$IIndexed$_nth$arity$2(null, i__13414);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13439,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14877 = seq__13411;
var G__14878 = chunk__13412;
var G__14879 = count__13413;
var G__14880 = (i__13414 + (1));
seq__13411 = G__14877;
chunk__13412 = G__14878;
count__13413 = G__14879;
i__13414 = G__14880;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13411);
if(temp__5804__auto__){
var seq__13411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13411__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13411__$1);
var G__14882 = cljs.core.chunk_rest(seq__13411__$1);
var G__14883 = c__5525__auto__;
var G__14884 = cljs.core.count(c__5525__auto__);
var G__14885 = (0);
seq__13411 = G__14882;
chunk__13412 = G__14883;
count__13413 = G__14884;
i__13414 = G__14885;
continue;
} else {
var vec__13454 = cljs.core.first(seq__13411__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14889 = cljs.core.next(seq__13411__$1);
var G__14890 = null;
var G__14891 = (0);
var G__14892 = (0);
seq__13411 = G__14889;
chunk__13412 = G__14890;
count__13413 = G__14891;
i__13414 = G__14892;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13466 = cljs.core.seq(styles);
var chunk__13467 = null;
var count__13468 = (0);
var i__13469 = (0);
while(true){
if((i__13469 < count__13468)){
var vec__13500 = chunk__13467.cljs$core$IIndexed$_nth$arity$2(null, i__13469);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13500,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__14896 = seq__13466;
var G__14897 = chunk__13467;
var G__14898 = count__13468;
var G__14899 = (i__13469 + (1));
seq__13466 = G__14896;
chunk__13467 = G__14897;
count__13468 = G__14898;
i__13469 = G__14899;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13466);
if(temp__5804__auto__){
var seq__13466__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13466__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13466__$1);
var G__14900 = cljs.core.chunk_rest(seq__13466__$1);
var G__14901 = c__5525__auto__;
var G__14902 = cljs.core.count(c__5525__auto__);
var G__14903 = (0);
seq__13466 = G__14900;
chunk__13467 = G__14901;
count__13468 = G__14902;
i__13469 = G__14903;
continue;
} else {
var vec__13505 = cljs.core.first(seq__13466__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__14911 = cljs.core.next(seq__13466__$1);
var G__14912 = null;
var G__14913 = (0);
var G__14914 = (0);
seq__13466 = G__14911;
chunk__13467 = G__14912;
count__13468 = G__14913;
i__13469 = G__14914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13513_14915 = key;
var G__13513_14916__$1 = (((G__13513_14915 instanceof cljs.core.Keyword))?G__13513_14915.fqn:null);
switch (G__13513_14916__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_14923 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_14923,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_14923,"aria-");
}
})())){
el.setAttribute(ks_14923,value);
} else {
(el[ks_14923] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13534){
var map__13535 = p__13534;
var map__13535__$1 = cljs.core.__destructure_map(map__13535);
var props = map__13535__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13540,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13543 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13543,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13543;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13548 = arguments.length;
switch (G__13548) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13570){
var vec__13571 = p__13570;
var seq__13572 = cljs.core.seq(vec__13571);
var first__13573 = cljs.core.first(seq__13572);
var seq__13572__$1 = cljs.core.next(seq__13572);
var nn = first__13573;
var first__13573__$1 = cljs.core.first(seq__13572__$1);
var seq__13572__$2 = cljs.core.next(seq__13572__$1);
var np = first__13573__$1;
var nc = seq__13572__$2;
var node = vec__13571;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13575 = nn;
var G__13576 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13575,G__13576) : create_fn.call(null, G__13575,G__13576));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13577 = nn;
var G__13578 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13577,G__13578) : create_fn.call(null, G__13577,G__13578));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13587 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13587,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13587,(1),null);
var seq__13591_14976 = cljs.core.seq(node_children);
var chunk__13592_14977 = null;
var count__13593_14978 = (0);
var i__13594_14979 = (0);
while(true){
if((i__13594_14979 < count__13593_14978)){
var child_struct_14981 = chunk__13592_14977.cljs$core$IIndexed$_nth$arity$2(null, i__13594_14979);
var children_14982 = shadow.dom.dom_node(child_struct_14981);
if(cljs.core.seq_QMARK_(children_14982)){
var seq__13658_14983 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_14982));
var chunk__13660_14984 = null;
var count__13661_14985 = (0);
var i__13662_14986 = (0);
while(true){
if((i__13662_14986 < count__13661_14985)){
var child_14988 = chunk__13660_14984.cljs$core$IIndexed$_nth$arity$2(null, i__13662_14986);
if(cljs.core.truth_(child_14988)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14988);


var G__14989 = seq__13658_14983;
var G__14990 = chunk__13660_14984;
var G__14991 = count__13661_14985;
var G__14992 = (i__13662_14986 + (1));
seq__13658_14983 = G__14989;
chunk__13660_14984 = G__14990;
count__13661_14985 = G__14991;
i__13662_14986 = G__14992;
continue;
} else {
var G__14993 = seq__13658_14983;
var G__14994 = chunk__13660_14984;
var G__14995 = count__13661_14985;
var G__14996 = (i__13662_14986 + (1));
seq__13658_14983 = G__14993;
chunk__13660_14984 = G__14994;
count__13661_14985 = G__14995;
i__13662_14986 = G__14996;
continue;
}
} else {
var temp__5804__auto___14998 = cljs.core.seq(seq__13658_14983);
if(temp__5804__auto___14998){
var seq__13658_14999__$1 = temp__5804__auto___14998;
if(cljs.core.chunked_seq_QMARK_(seq__13658_14999__$1)){
var c__5525__auto___15000 = cljs.core.chunk_first(seq__13658_14999__$1);
var G__15001 = cljs.core.chunk_rest(seq__13658_14999__$1);
var G__15002 = c__5525__auto___15000;
var G__15003 = cljs.core.count(c__5525__auto___15000);
var G__15004 = (0);
seq__13658_14983 = G__15001;
chunk__13660_14984 = G__15002;
count__13661_14985 = G__15003;
i__13662_14986 = G__15004;
continue;
} else {
var child_15005 = cljs.core.first(seq__13658_14999__$1);
if(cljs.core.truth_(child_15005)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15005);


var G__15006 = cljs.core.next(seq__13658_14999__$1);
var G__15007 = null;
var G__15008 = (0);
var G__15009 = (0);
seq__13658_14983 = G__15006;
chunk__13660_14984 = G__15007;
count__13661_14985 = G__15008;
i__13662_14986 = G__15009;
continue;
} else {
var G__15011 = cljs.core.next(seq__13658_14999__$1);
var G__15012 = null;
var G__15013 = (0);
var G__15014 = (0);
seq__13658_14983 = G__15011;
chunk__13660_14984 = G__15012;
count__13661_14985 = G__15013;
i__13662_14986 = G__15014;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_14982);
}


var G__15015 = seq__13591_14976;
var G__15016 = chunk__13592_14977;
var G__15017 = count__13593_14978;
var G__15018 = (i__13594_14979 + (1));
seq__13591_14976 = G__15015;
chunk__13592_14977 = G__15016;
count__13593_14978 = G__15017;
i__13594_14979 = G__15018;
continue;
} else {
var temp__5804__auto___15020 = cljs.core.seq(seq__13591_14976);
if(temp__5804__auto___15020){
var seq__13591_15023__$1 = temp__5804__auto___15020;
if(cljs.core.chunked_seq_QMARK_(seq__13591_15023__$1)){
var c__5525__auto___15024 = cljs.core.chunk_first(seq__13591_15023__$1);
var G__15025 = cljs.core.chunk_rest(seq__13591_15023__$1);
var G__15026 = c__5525__auto___15024;
var G__15027 = cljs.core.count(c__5525__auto___15024);
var G__15028 = (0);
seq__13591_14976 = G__15025;
chunk__13592_14977 = G__15026;
count__13593_14978 = G__15027;
i__13594_14979 = G__15028;
continue;
} else {
var child_struct_15029 = cljs.core.first(seq__13591_15023__$1);
var children_15030 = shadow.dom.dom_node(child_struct_15029);
if(cljs.core.seq_QMARK_(children_15030)){
var seq__13693_15031 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15030));
var chunk__13695_15032 = null;
var count__13697_15033 = (0);
var i__13698_15034 = (0);
while(true){
if((i__13698_15034 < count__13697_15033)){
var child_15035 = chunk__13695_15032.cljs$core$IIndexed$_nth$arity$2(null, i__13698_15034);
if(cljs.core.truth_(child_15035)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15035);


var G__15036 = seq__13693_15031;
var G__15037 = chunk__13695_15032;
var G__15038 = count__13697_15033;
var G__15039 = (i__13698_15034 + (1));
seq__13693_15031 = G__15036;
chunk__13695_15032 = G__15037;
count__13697_15033 = G__15038;
i__13698_15034 = G__15039;
continue;
} else {
var G__15041 = seq__13693_15031;
var G__15042 = chunk__13695_15032;
var G__15043 = count__13697_15033;
var G__15044 = (i__13698_15034 + (1));
seq__13693_15031 = G__15041;
chunk__13695_15032 = G__15042;
count__13697_15033 = G__15043;
i__13698_15034 = G__15044;
continue;
}
} else {
var temp__5804__auto___15045__$1 = cljs.core.seq(seq__13693_15031);
if(temp__5804__auto___15045__$1){
var seq__13693_15046__$1 = temp__5804__auto___15045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13693_15046__$1)){
var c__5525__auto___15047 = cljs.core.chunk_first(seq__13693_15046__$1);
var G__15048 = cljs.core.chunk_rest(seq__13693_15046__$1);
var G__15049 = c__5525__auto___15047;
var G__15050 = cljs.core.count(c__5525__auto___15047);
var G__15051 = (0);
seq__13693_15031 = G__15048;
chunk__13695_15032 = G__15049;
count__13697_15033 = G__15050;
i__13698_15034 = G__15051;
continue;
} else {
var child_15053 = cljs.core.first(seq__13693_15046__$1);
if(cljs.core.truth_(child_15053)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15053);


var G__15054 = cljs.core.next(seq__13693_15046__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__13693_15031 = G__15054;
chunk__13695_15032 = G__15055;
count__13697_15033 = G__15056;
i__13698_15034 = G__15057;
continue;
} else {
var G__15058 = cljs.core.next(seq__13693_15046__$1);
var G__15059 = null;
var G__15060 = (0);
var G__15061 = (0);
seq__13693_15031 = G__15058;
chunk__13695_15032 = G__15059;
count__13697_15033 = G__15060;
i__13698_15034 = G__15061;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15030);
}


var G__15063 = cljs.core.next(seq__13591_15023__$1);
var G__15064 = null;
var G__15065 = (0);
var G__15066 = (0);
seq__13591_14976 = G__15063;
chunk__13592_14977 = G__15064;
count__13593_14978 = G__15065;
i__13594_14979 = G__15066;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__13762 = cljs.core.seq(node);
var chunk__13763 = null;
var count__13764 = (0);
var i__13765 = (0);
while(true){
if((i__13765 < count__13764)){
var n = chunk__13763.cljs$core$IIndexed$_nth$arity$2(null, i__13765);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15074 = seq__13762;
var G__15075 = chunk__13763;
var G__15076 = count__13764;
var G__15077 = (i__13765 + (1));
seq__13762 = G__15074;
chunk__13763 = G__15075;
count__13764 = G__15076;
i__13765 = G__15077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13762);
if(temp__5804__auto__){
var seq__13762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13762__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13762__$1);
var G__15078 = cljs.core.chunk_rest(seq__13762__$1);
var G__15079 = c__5525__auto__;
var G__15080 = cljs.core.count(c__5525__auto__);
var G__15081 = (0);
seq__13762 = G__15078;
chunk__13763 = G__15079;
count__13764 = G__15080;
i__13765 = G__15081;
continue;
} else {
var n = cljs.core.first(seq__13762__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__15083 = cljs.core.next(seq__13762__$1);
var G__15084 = null;
var G__15085 = (0);
var G__15086 = (0);
seq__13762 = G__15083;
chunk__13763 = G__15084;
count__13764 = G__15085;
i__13765 = G__15086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__13799 = arguments.length;
switch (G__13799) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__13818 = arguments.length;
switch (G__13818) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__13846 = arguments.length;
switch (G__13846) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15105 = arguments.length;
var i__5727__auto___15106 = (0);
while(true){
if((i__5727__auto___15106 < len__5726__auto___15105)){
args__5732__auto__.push((arguments[i__5727__auto___15106]));

var G__15108 = (i__5727__auto___15106 + (1));
i__5727__auto___15106 = G__15108;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__13875_15110 = cljs.core.seq(nodes);
var chunk__13876_15111 = null;
var count__13877_15112 = (0);
var i__13878_15113 = (0);
while(true){
if((i__13878_15113 < count__13877_15112)){
var node_15116 = chunk__13876_15111.cljs$core$IIndexed$_nth$arity$2(null, i__13878_15113);
fragment.appendChild(shadow.dom._to_dom(node_15116));


var G__15117 = seq__13875_15110;
var G__15118 = chunk__13876_15111;
var G__15119 = count__13877_15112;
var G__15120 = (i__13878_15113 + (1));
seq__13875_15110 = G__15117;
chunk__13876_15111 = G__15118;
count__13877_15112 = G__15119;
i__13878_15113 = G__15120;
continue;
} else {
var temp__5804__auto___15121 = cljs.core.seq(seq__13875_15110);
if(temp__5804__auto___15121){
var seq__13875_15123__$1 = temp__5804__auto___15121;
if(cljs.core.chunked_seq_QMARK_(seq__13875_15123__$1)){
var c__5525__auto___15125 = cljs.core.chunk_first(seq__13875_15123__$1);
var G__15126 = cljs.core.chunk_rest(seq__13875_15123__$1);
var G__15127 = c__5525__auto___15125;
var G__15128 = cljs.core.count(c__5525__auto___15125);
var G__15129 = (0);
seq__13875_15110 = G__15126;
chunk__13876_15111 = G__15127;
count__13877_15112 = G__15128;
i__13878_15113 = G__15129;
continue;
} else {
var node_15130 = cljs.core.first(seq__13875_15123__$1);
fragment.appendChild(shadow.dom._to_dom(node_15130));


var G__15131 = cljs.core.next(seq__13875_15123__$1);
var G__15132 = null;
var G__15133 = (0);
var G__15134 = (0);
seq__13875_15110 = G__15131;
chunk__13876_15111 = G__15132;
count__13877_15112 = G__15133;
i__13878_15113 = G__15134;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq13863){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13863));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__13900_15138 = cljs.core.seq(scripts);
var chunk__13901_15139 = null;
var count__13902_15140 = (0);
var i__13903_15141 = (0);
while(true){
if((i__13903_15141 < count__13902_15140)){
var vec__13912_15142 = chunk__13901_15139.cljs$core$IIndexed$_nth$arity$2(null, i__13903_15141);
var script_tag_15143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912_15142,(0),null);
var script_body_15144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912_15142,(1),null);
eval(script_body_15144);


var G__15146 = seq__13900_15138;
var G__15147 = chunk__13901_15139;
var G__15148 = count__13902_15140;
var G__15149 = (i__13903_15141 + (1));
seq__13900_15138 = G__15146;
chunk__13901_15139 = G__15147;
count__13902_15140 = G__15148;
i__13903_15141 = G__15149;
continue;
} else {
var temp__5804__auto___15151 = cljs.core.seq(seq__13900_15138);
if(temp__5804__auto___15151){
var seq__13900_15152__$1 = temp__5804__auto___15151;
if(cljs.core.chunked_seq_QMARK_(seq__13900_15152__$1)){
var c__5525__auto___15153 = cljs.core.chunk_first(seq__13900_15152__$1);
var G__15155 = cljs.core.chunk_rest(seq__13900_15152__$1);
var G__15156 = c__5525__auto___15153;
var G__15157 = cljs.core.count(c__5525__auto___15153);
var G__15158 = (0);
seq__13900_15138 = G__15155;
chunk__13901_15139 = G__15156;
count__13902_15140 = G__15157;
i__13903_15141 = G__15158;
continue;
} else {
var vec__13921_15159 = cljs.core.first(seq__13900_15152__$1);
var script_tag_15160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921_15159,(0),null);
var script_body_15161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13921_15159,(1),null);
eval(script_body_15161);


var G__15162 = cljs.core.next(seq__13900_15152__$1);
var G__15163 = null;
var G__15164 = (0);
var G__15165 = (0);
seq__13900_15138 = G__15162;
chunk__13901_15139 = G__15163;
count__13902_15140 = G__15164;
i__13903_15141 = G__15165;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__13925){
var vec__13926 = p__13925;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13926,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13926,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__13947 = arguments.length;
switch (G__13947) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14008 = cljs.core.seq(style_keys);
var chunk__14009 = null;
var count__14010 = (0);
var i__14011 = (0);
while(true){
if((i__14011 < count__14010)){
var it = chunk__14009.cljs$core$IIndexed$_nth$arity$2(null, i__14011);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15182 = seq__14008;
var G__15183 = chunk__14009;
var G__15184 = count__14010;
var G__15185 = (i__14011 + (1));
seq__14008 = G__15182;
chunk__14009 = G__15183;
count__14010 = G__15184;
i__14011 = G__15185;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14008);
if(temp__5804__auto__){
var seq__14008__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14008__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14008__$1);
var G__15187 = cljs.core.chunk_rest(seq__14008__$1);
var G__15188 = c__5525__auto__;
var G__15189 = cljs.core.count(c__5525__auto__);
var G__15190 = (0);
seq__14008 = G__15187;
chunk__14009 = G__15188;
count__14010 = G__15189;
i__14011 = G__15190;
continue;
} else {
var it = cljs.core.first(seq__14008__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15191 = cljs.core.next(seq__14008__$1);
var G__15192 = null;
var G__15193 = (0);
var G__15194 = (0);
seq__14008 = G__15191;
chunk__14009 = G__15192;
count__14010 = G__15193;
i__14011 = G__15194;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14040,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14083 = k14040;
var G__14083__$1 = (((G__14083 instanceof cljs.core.Keyword))?G__14083.fqn:null);
switch (G__14083__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14040,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14101){
var vec__14104 = p__14101;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14039){
var self__ = this;
var G__14039__$1 = this;
return (new cljs.core.RecordIter((0),G__14039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14041,other14042){
var self__ = this;
var this14041__$1 = this;
return (((!((other14042 == null)))) && ((((this14041__$1.constructor === other14042.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14041__$1.x,other14042.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14041__$1.y,other14042.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14041__$1.__extmap,other14042.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14040){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14193 = k14040;
var G__14193__$1 = (((G__14193 instanceof cljs.core.Keyword))?G__14193.fqn:null);
switch (G__14193__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14040);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14039){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14196 = cljs.core.keyword_identical_QMARK_;
var expr__14197 = k__5309__auto__;
if(cljs.core.truth_((pred__14196.cljs$core$IFn$_invoke$arity$2 ? pred__14196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14197) : pred__14196.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__14197)))){
return (new shadow.dom.Coordinate(G__14039,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14196.cljs$core$IFn$_invoke$arity$2 ? pred__14196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14197) : pred__14196.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__14197)))){
return (new shadow.dom.Coordinate(self__.x,G__14039,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14039),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14039){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14039,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14059){
var extmap__5342__auto__ = (function (){var G__14241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14059,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14059)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14241);
} else {
return G__14241;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14059),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14059),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14301,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14320 = k14301;
var G__14320__$1 = (((G__14320 instanceof cljs.core.Keyword))?G__14320.fqn:null);
switch (G__14320__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14301,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14328){
var vec__14329 = p__14328;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14329,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14329,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14300){
var self__ = this;
var G__14300__$1 = this;
return (new cljs.core.RecordIter((0),G__14300__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14302,other14303){
var self__ = this;
var this14302__$1 = this;
return (((!((other14303 == null)))) && ((((this14302__$1.constructor === other14303.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14302__$1.w,other14303.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14302__$1.h,other14303.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14302__$1.__extmap,other14303.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14301){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14371 = k14301;
var G__14371__$1 = (((G__14371 instanceof cljs.core.Keyword))?G__14371.fqn:null);
switch (G__14371__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14301);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14300){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14374 = cljs.core.keyword_identical_QMARK_;
var expr__14375 = k__5309__auto__;
if(cljs.core.truth_((pred__14374.cljs$core$IFn$_invoke$arity$2 ? pred__14374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14375) : pred__14374.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__14375)))){
return (new shadow.dom.Size(G__14300,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14374.cljs$core$IFn$_invoke$arity$2 ? pred__14374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14375) : pred__14374.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__14375)))){
return (new shadow.dom.Size(self__.w,G__14300,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14300),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14300){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14300,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14309){
var extmap__5342__auto__ = (function (){var G__14405 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14309,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14309)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14405);
} else {
return G__14405;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14309),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14309),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__15328 = (i + (1));
var G__15329 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15328;
ret = G__15329;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14442){
var vec__14443 = p__14442;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14451 = arguments.length;
switch (G__14451) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15359 = ps;
var G__15360 = (i + (1));
el__$1 = G__15359;
i = G__15360;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14505 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14513_15399 = cljs.core.seq(props);
var chunk__14514_15400 = null;
var count__14515_15401 = (0);
var i__14516_15402 = (0);
while(true){
if((i__14516_15402 < count__14515_15401)){
var vec__14538_15403 = chunk__14514_15400.cljs$core$IIndexed$_nth$arity$2(null, i__14516_15402);
var k_15404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538_15403,(0),null);
var v_15405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538_15403,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15404);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15404),v_15405);


var G__15410 = seq__14513_15399;
var G__15411 = chunk__14514_15400;
var G__15412 = count__14515_15401;
var G__15413 = (i__14516_15402 + (1));
seq__14513_15399 = G__15410;
chunk__14514_15400 = G__15411;
count__14515_15401 = G__15412;
i__14516_15402 = G__15413;
continue;
} else {
var temp__5804__auto___15417 = cljs.core.seq(seq__14513_15399);
if(temp__5804__auto___15417){
var seq__14513_15418__$1 = temp__5804__auto___15417;
if(cljs.core.chunked_seq_QMARK_(seq__14513_15418__$1)){
var c__5525__auto___15419 = cljs.core.chunk_first(seq__14513_15418__$1);
var G__15421 = cljs.core.chunk_rest(seq__14513_15418__$1);
var G__15422 = c__5525__auto___15419;
var G__15423 = cljs.core.count(c__5525__auto___15419);
var G__15424 = (0);
seq__14513_15399 = G__15421;
chunk__14514_15400 = G__15422;
count__14515_15401 = G__15423;
i__14516_15402 = G__15424;
continue;
} else {
var vec__14554_15426 = cljs.core.first(seq__14513_15418__$1);
var k_15427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_15426,(0),null);
var v_15428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_15426,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15427);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15427),v_15428);


var G__15435 = cljs.core.next(seq__14513_15418__$1);
var G__15436 = null;
var G__15437 = (0);
var G__15438 = (0);
seq__14513_15399 = G__15435;
chunk__14514_15400 = G__15436;
count__14515_15401 = G__15437;
i__14516_15402 = G__15438;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14586 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14586,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14586,(1),null);
var seq__14592_15444 = cljs.core.seq(node_children);
var chunk__14594_15445 = null;
var count__14595_15447 = (0);
var i__14596_15448 = (0);
while(true){
if((i__14596_15448 < count__14595_15447)){
var child_struct_15449 = chunk__14594_15445.cljs$core$IIndexed$_nth$arity$2(null, i__14596_15448);
if((!((child_struct_15449 == null)))){
if(typeof child_struct_15449 === 'string'){
var text_15453 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15453),child_struct_15449].join(''));
} else {
var children_15456 = shadow.dom.svg_node(child_struct_15449);
if(cljs.core.seq_QMARK_(children_15456)){
var seq__14696_15457 = cljs.core.seq(children_15456);
var chunk__14698_15458 = null;
var count__14699_15459 = (0);
var i__14700_15460 = (0);
while(true){
if((i__14700_15460 < count__14699_15459)){
var child_15463 = chunk__14698_15458.cljs$core$IIndexed$_nth$arity$2(null, i__14700_15460);
if(cljs.core.truth_(child_15463)){
node.appendChild(child_15463);


var G__15467 = seq__14696_15457;
var G__15468 = chunk__14698_15458;
var G__15469 = count__14699_15459;
var G__15470 = (i__14700_15460 + (1));
seq__14696_15457 = G__15467;
chunk__14698_15458 = G__15468;
count__14699_15459 = G__15469;
i__14700_15460 = G__15470;
continue;
} else {
var G__15472 = seq__14696_15457;
var G__15473 = chunk__14698_15458;
var G__15474 = count__14699_15459;
var G__15475 = (i__14700_15460 + (1));
seq__14696_15457 = G__15472;
chunk__14698_15458 = G__15473;
count__14699_15459 = G__15474;
i__14700_15460 = G__15475;
continue;
}
} else {
var temp__5804__auto___15476 = cljs.core.seq(seq__14696_15457);
if(temp__5804__auto___15476){
var seq__14696_15477__$1 = temp__5804__auto___15476;
if(cljs.core.chunked_seq_QMARK_(seq__14696_15477__$1)){
var c__5525__auto___15478 = cljs.core.chunk_first(seq__14696_15477__$1);
var G__15479 = cljs.core.chunk_rest(seq__14696_15477__$1);
var G__15480 = c__5525__auto___15478;
var G__15481 = cljs.core.count(c__5525__auto___15478);
var G__15482 = (0);
seq__14696_15457 = G__15479;
chunk__14698_15458 = G__15480;
count__14699_15459 = G__15481;
i__14700_15460 = G__15482;
continue;
} else {
var child_15484 = cljs.core.first(seq__14696_15477__$1);
if(cljs.core.truth_(child_15484)){
node.appendChild(child_15484);


var G__15487 = cljs.core.next(seq__14696_15477__$1);
var G__15488 = null;
var G__15489 = (0);
var G__15490 = (0);
seq__14696_15457 = G__15487;
chunk__14698_15458 = G__15488;
count__14699_15459 = G__15489;
i__14700_15460 = G__15490;
continue;
} else {
var G__15492 = cljs.core.next(seq__14696_15477__$1);
var G__15493 = null;
var G__15494 = (0);
var G__15495 = (0);
seq__14696_15457 = G__15492;
chunk__14698_15458 = G__15493;
count__14699_15459 = G__15494;
i__14700_15460 = G__15495;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15456);
}
}


var G__15496 = seq__14592_15444;
var G__15497 = chunk__14594_15445;
var G__15498 = count__14595_15447;
var G__15499 = (i__14596_15448 + (1));
seq__14592_15444 = G__15496;
chunk__14594_15445 = G__15497;
count__14595_15447 = G__15498;
i__14596_15448 = G__15499;
continue;
} else {
var G__15500 = seq__14592_15444;
var G__15501 = chunk__14594_15445;
var G__15502 = count__14595_15447;
var G__15503 = (i__14596_15448 + (1));
seq__14592_15444 = G__15500;
chunk__14594_15445 = G__15501;
count__14595_15447 = G__15502;
i__14596_15448 = G__15503;
continue;
}
} else {
var temp__5804__auto___15506 = cljs.core.seq(seq__14592_15444);
if(temp__5804__auto___15506){
var seq__14592_15509__$1 = temp__5804__auto___15506;
if(cljs.core.chunked_seq_QMARK_(seq__14592_15509__$1)){
var c__5525__auto___15511 = cljs.core.chunk_first(seq__14592_15509__$1);
var G__15513 = cljs.core.chunk_rest(seq__14592_15509__$1);
var G__15514 = c__5525__auto___15511;
var G__15515 = cljs.core.count(c__5525__auto___15511);
var G__15516 = (0);
seq__14592_15444 = G__15513;
chunk__14594_15445 = G__15514;
count__14595_15447 = G__15515;
i__14596_15448 = G__15516;
continue;
} else {
var child_struct_15519 = cljs.core.first(seq__14592_15509__$1);
if((!((child_struct_15519 == null)))){
if(typeof child_struct_15519 === 'string'){
var text_15521 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15521),child_struct_15519].join(''));
} else {
var children_15522 = shadow.dom.svg_node(child_struct_15519);
if(cljs.core.seq_QMARK_(children_15522)){
var seq__14720_15523 = cljs.core.seq(children_15522);
var chunk__14722_15524 = null;
var count__14723_15525 = (0);
var i__14724_15526 = (0);
while(true){
if((i__14724_15526 < count__14723_15525)){
var child_15530 = chunk__14722_15524.cljs$core$IIndexed$_nth$arity$2(null, i__14724_15526);
if(cljs.core.truth_(child_15530)){
node.appendChild(child_15530);


var G__15531 = seq__14720_15523;
var G__15532 = chunk__14722_15524;
var G__15533 = count__14723_15525;
var G__15534 = (i__14724_15526 + (1));
seq__14720_15523 = G__15531;
chunk__14722_15524 = G__15532;
count__14723_15525 = G__15533;
i__14724_15526 = G__15534;
continue;
} else {
var G__15535 = seq__14720_15523;
var G__15536 = chunk__14722_15524;
var G__15537 = count__14723_15525;
var G__15538 = (i__14724_15526 + (1));
seq__14720_15523 = G__15535;
chunk__14722_15524 = G__15536;
count__14723_15525 = G__15537;
i__14724_15526 = G__15538;
continue;
}
} else {
var temp__5804__auto___15541__$1 = cljs.core.seq(seq__14720_15523);
if(temp__5804__auto___15541__$1){
var seq__14720_15543__$1 = temp__5804__auto___15541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14720_15543__$1)){
var c__5525__auto___15545 = cljs.core.chunk_first(seq__14720_15543__$1);
var G__15546 = cljs.core.chunk_rest(seq__14720_15543__$1);
var G__15547 = c__5525__auto___15545;
var G__15548 = cljs.core.count(c__5525__auto___15545);
var G__15549 = (0);
seq__14720_15523 = G__15546;
chunk__14722_15524 = G__15547;
count__14723_15525 = G__15548;
i__14724_15526 = G__15549;
continue;
} else {
var child_15551 = cljs.core.first(seq__14720_15543__$1);
if(cljs.core.truth_(child_15551)){
node.appendChild(child_15551);


var G__15552 = cljs.core.next(seq__14720_15543__$1);
var G__15553 = null;
var G__15554 = (0);
var G__15555 = (0);
seq__14720_15523 = G__15552;
chunk__14722_15524 = G__15553;
count__14723_15525 = G__15554;
i__14724_15526 = G__15555;
continue;
} else {
var G__15556 = cljs.core.next(seq__14720_15543__$1);
var G__15557 = null;
var G__15558 = (0);
var G__15559 = (0);
seq__14720_15523 = G__15556;
chunk__14722_15524 = G__15557;
count__14723_15525 = G__15558;
i__14724_15526 = G__15559;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15522);
}
}


var G__15562 = cljs.core.next(seq__14592_15509__$1);
var G__15563 = null;
var G__15564 = (0);
var G__15565 = (0);
seq__14592_15444 = G__15562;
chunk__14594_15445 = G__15563;
count__14595_15447 = G__15564;
i__14596_15448 = G__15565;
continue;
} else {
var G__15567 = cljs.core.next(seq__14592_15509__$1);
var G__15568 = null;
var G__15569 = (0);
var G__15570 = (0);
seq__14592_15444 = G__15567;
chunk__14594_15445 = G__15568;
count__14595_15447 = G__15569;
i__14596_15448 = G__15570;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15581 = arguments.length;
var i__5727__auto___15582 = (0);
while(true){
if((i__5727__auto___15582 < len__5726__auto___15581)){
args__5732__auto__.push((arguments[i__5727__auto___15582]));

var G__15583 = (i__5727__auto___15582 + (1));
i__5727__auto___15582 = G__15583;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq14745){
var G__14746 = cljs.core.first(seq14745);
var seq14745__$1 = cljs.core.next(seq14745);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14746,seq14745__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
