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

var shadow$dom$IElement$_to_dom$dyn_12487 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12487(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12491 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12491(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11622 = coll;
var G__11623 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11622,G__11623) : shadow.dom.lazy_native_coll_seq.call(null, G__11622,G__11623));
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
var G__11653 = arguments.length;
switch (G__11653) {
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
var G__11663 = arguments.length;
switch (G__11663) {
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
var G__11674 = arguments.length;
switch (G__11674) {
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
var G__11683 = arguments.length;
switch (G__11683) {
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
var G__11700 = arguments.length;
switch (G__11700) {
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
var G__11736 = arguments.length;
switch (G__11736) {
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
}catch (e11747){if((e11747 instanceof Object)){
var e = e11747;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11747;

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
var seq__11782 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11783 = null;
var count__11784 = (0);
var i__11785 = (0);
while(true){
if((i__11785 < count__11784)){
var el = chunk__11783.cljs$core$IIndexed$_nth$arity$2(null, i__11785);
var handler_12523__$1 = ((function (seq__11782,chunk__11783,count__11784,i__11785,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11782,chunk__11783,count__11784,i__11785,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12523__$1);


var G__12525 = seq__11782;
var G__12526 = chunk__11783;
var G__12527 = count__11784;
var G__12528 = (i__11785 + (1));
seq__11782 = G__12525;
chunk__11783 = G__12526;
count__11784 = G__12527;
i__11785 = G__12528;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11782);
if(temp__5804__auto__){
var seq__11782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11782__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11782__$1);
var G__12530 = cljs.core.chunk_rest(seq__11782__$1);
var G__12531 = c__5525__auto__;
var G__12532 = cljs.core.count(c__5525__auto__);
var G__12533 = (0);
seq__11782 = G__12530;
chunk__11783 = G__12531;
count__11784 = G__12532;
i__11785 = G__12533;
continue;
} else {
var el = cljs.core.first(seq__11782__$1);
var handler_12535__$1 = ((function (seq__11782,chunk__11783,count__11784,i__11785,el,seq__11782__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11782,chunk__11783,count__11784,i__11785,el,seq__11782__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12535__$1);


var G__12537 = cljs.core.next(seq__11782__$1);
var G__12538 = null;
var G__12539 = (0);
var G__12540 = (0);
seq__11782 = G__12537;
chunk__11783 = G__12538;
count__11784 = G__12539;
i__11785 = G__12540;
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
var G__11820 = arguments.length;
switch (G__11820) {
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
var seq__11851 = cljs.core.seq(events);
var chunk__11852 = null;
var count__11853 = (0);
var i__11854 = (0);
while(true){
if((i__11854 < count__11853)){
var vec__11875 = chunk__11852.cljs$core$IIndexed$_nth$arity$2(null, i__11854);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11875,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12546 = seq__11851;
var G__12547 = chunk__11852;
var G__12548 = count__11853;
var G__12549 = (i__11854 + (1));
seq__11851 = G__12546;
chunk__11852 = G__12547;
count__11853 = G__12548;
i__11854 = G__12549;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11851);
if(temp__5804__auto__){
var seq__11851__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11851__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11851__$1);
var G__12550 = cljs.core.chunk_rest(seq__11851__$1);
var G__12551 = c__5525__auto__;
var G__12552 = cljs.core.count(c__5525__auto__);
var G__12553 = (0);
seq__11851 = G__12550;
chunk__11852 = G__12551;
count__11853 = G__12552;
i__11854 = G__12553;
continue;
} else {
var vec__11888 = cljs.core.first(seq__11851__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12554 = cljs.core.next(seq__11851__$1);
var G__12555 = null;
var G__12556 = (0);
var G__12557 = (0);
seq__11851 = G__12554;
chunk__11852 = G__12555;
count__11853 = G__12556;
i__11854 = G__12557;
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
var seq__11900 = cljs.core.seq(styles);
var chunk__11901 = null;
var count__11902 = (0);
var i__11903 = (0);
while(true){
if((i__11903 < count__11902)){
var vec__11928 = chunk__11901.cljs$core$IIndexed$_nth$arity$2(null, i__11903);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12561 = seq__11900;
var G__12562 = chunk__11901;
var G__12563 = count__11902;
var G__12564 = (i__11903 + (1));
seq__11900 = G__12561;
chunk__11901 = G__12562;
count__11902 = G__12563;
i__11903 = G__12564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11900);
if(temp__5804__auto__){
var seq__11900__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11900__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11900__$1);
var G__12565 = cljs.core.chunk_rest(seq__11900__$1);
var G__12566 = c__5525__auto__;
var G__12567 = cljs.core.count(c__5525__auto__);
var G__12568 = (0);
seq__11900 = G__12565;
chunk__11901 = G__12566;
count__11902 = G__12567;
i__11903 = G__12568;
continue;
} else {
var vec__11941 = cljs.core.first(seq__11900__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12569 = cljs.core.next(seq__11900__$1);
var G__12570 = null;
var G__12571 = (0);
var G__12572 = (0);
seq__11900 = G__12569;
chunk__11901 = G__12570;
count__11902 = G__12571;
i__11903 = G__12572;
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
var G__11958_12575 = key;
var G__11958_12576__$1 = (((G__11958_12575 instanceof cljs.core.Keyword))?G__11958_12575.fqn:null);
switch (G__11958_12576__$1) {
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
var ks_12584 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12584,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12584,"aria-");
}
})())){
el.setAttribute(ks_12584,value);
} else {
(el[ks_12584] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11986){
var map__11987 = p__11986;
var map__11987__$1 = cljs.core.__destructure_map(map__11987);
var props = map__11987__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11987__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11989 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11989,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11989,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11989,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11992 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11992,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11992;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11995 = arguments.length;
switch (G__11995) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12003){
var vec__12004 = p__12003;
var seq__12005 = cljs.core.seq(vec__12004);
var first__12006 = cljs.core.first(seq__12005);
var seq__12005__$1 = cljs.core.next(seq__12005);
var nn = first__12006;
var first__12006__$1 = cljs.core.first(seq__12005__$1);
var seq__12005__$2 = cljs.core.next(seq__12005__$1);
var np = first__12006__$1;
var nc = seq__12005__$2;
var node = vec__12004;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12009 = nn;
var G__12010 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12009,G__12010) : create_fn.call(null, G__12009,G__12010));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12012 = nn;
var G__12013 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12012,G__12013) : create_fn.call(null, G__12012,G__12013));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12016 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12016,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12016,(1),null);
var seq__12019_12599 = cljs.core.seq(node_children);
var chunk__12020_12600 = null;
var count__12021_12601 = (0);
var i__12022_12602 = (0);
while(true){
if((i__12022_12602 < count__12021_12601)){
var child_struct_12603 = chunk__12020_12600.cljs$core$IIndexed$_nth$arity$2(null, i__12022_12602);
var children_12606 = shadow.dom.dom_node(child_struct_12603);
if(cljs.core.seq_QMARK_(children_12606)){
var seq__12047_12607 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12606));
var chunk__12049_12608 = null;
var count__12050_12609 = (0);
var i__12051_12610 = (0);
while(true){
if((i__12051_12610 < count__12050_12609)){
var child_12611 = chunk__12049_12608.cljs$core$IIndexed$_nth$arity$2(null, i__12051_12610);
if(cljs.core.truth_(child_12611)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12611);


var G__12612 = seq__12047_12607;
var G__12613 = chunk__12049_12608;
var G__12614 = count__12050_12609;
var G__12615 = (i__12051_12610 + (1));
seq__12047_12607 = G__12612;
chunk__12049_12608 = G__12613;
count__12050_12609 = G__12614;
i__12051_12610 = G__12615;
continue;
} else {
var G__12616 = seq__12047_12607;
var G__12617 = chunk__12049_12608;
var G__12618 = count__12050_12609;
var G__12619 = (i__12051_12610 + (1));
seq__12047_12607 = G__12616;
chunk__12049_12608 = G__12617;
count__12050_12609 = G__12618;
i__12051_12610 = G__12619;
continue;
}
} else {
var temp__5804__auto___12620 = cljs.core.seq(seq__12047_12607);
if(temp__5804__auto___12620){
var seq__12047_12622__$1 = temp__5804__auto___12620;
if(cljs.core.chunked_seq_QMARK_(seq__12047_12622__$1)){
var c__5525__auto___12623 = cljs.core.chunk_first(seq__12047_12622__$1);
var G__12624 = cljs.core.chunk_rest(seq__12047_12622__$1);
var G__12625 = c__5525__auto___12623;
var G__12626 = cljs.core.count(c__5525__auto___12623);
var G__12627 = (0);
seq__12047_12607 = G__12624;
chunk__12049_12608 = G__12625;
count__12050_12609 = G__12626;
i__12051_12610 = G__12627;
continue;
} else {
var child_12628 = cljs.core.first(seq__12047_12622__$1);
if(cljs.core.truth_(child_12628)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12628);


var G__12629 = cljs.core.next(seq__12047_12622__$1);
var G__12630 = null;
var G__12631 = (0);
var G__12632 = (0);
seq__12047_12607 = G__12629;
chunk__12049_12608 = G__12630;
count__12050_12609 = G__12631;
i__12051_12610 = G__12632;
continue;
} else {
var G__12633 = cljs.core.next(seq__12047_12622__$1);
var G__12634 = null;
var G__12635 = (0);
var G__12636 = (0);
seq__12047_12607 = G__12633;
chunk__12049_12608 = G__12634;
count__12050_12609 = G__12635;
i__12051_12610 = G__12636;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12606);
}


var G__12638 = seq__12019_12599;
var G__12639 = chunk__12020_12600;
var G__12640 = count__12021_12601;
var G__12641 = (i__12022_12602 + (1));
seq__12019_12599 = G__12638;
chunk__12020_12600 = G__12639;
count__12021_12601 = G__12640;
i__12022_12602 = G__12641;
continue;
} else {
var temp__5804__auto___12642 = cljs.core.seq(seq__12019_12599);
if(temp__5804__auto___12642){
var seq__12019_12644__$1 = temp__5804__auto___12642;
if(cljs.core.chunked_seq_QMARK_(seq__12019_12644__$1)){
var c__5525__auto___12645 = cljs.core.chunk_first(seq__12019_12644__$1);
var G__12646 = cljs.core.chunk_rest(seq__12019_12644__$1);
var G__12647 = c__5525__auto___12645;
var G__12648 = cljs.core.count(c__5525__auto___12645);
var G__12649 = (0);
seq__12019_12599 = G__12646;
chunk__12020_12600 = G__12647;
count__12021_12601 = G__12648;
i__12022_12602 = G__12649;
continue;
} else {
var child_struct_12651 = cljs.core.first(seq__12019_12644__$1);
var children_12652 = shadow.dom.dom_node(child_struct_12651);
if(cljs.core.seq_QMARK_(children_12652)){
var seq__12063_12653 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12652));
var chunk__12065_12654 = null;
var count__12066_12655 = (0);
var i__12067_12656 = (0);
while(true){
if((i__12067_12656 < count__12066_12655)){
var child_12658 = chunk__12065_12654.cljs$core$IIndexed$_nth$arity$2(null, i__12067_12656);
if(cljs.core.truth_(child_12658)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12658);


var G__12660 = seq__12063_12653;
var G__12661 = chunk__12065_12654;
var G__12662 = count__12066_12655;
var G__12663 = (i__12067_12656 + (1));
seq__12063_12653 = G__12660;
chunk__12065_12654 = G__12661;
count__12066_12655 = G__12662;
i__12067_12656 = G__12663;
continue;
} else {
var G__12664 = seq__12063_12653;
var G__12665 = chunk__12065_12654;
var G__12666 = count__12066_12655;
var G__12667 = (i__12067_12656 + (1));
seq__12063_12653 = G__12664;
chunk__12065_12654 = G__12665;
count__12066_12655 = G__12666;
i__12067_12656 = G__12667;
continue;
}
} else {
var temp__5804__auto___12668__$1 = cljs.core.seq(seq__12063_12653);
if(temp__5804__auto___12668__$1){
var seq__12063_12669__$1 = temp__5804__auto___12668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12063_12669__$1)){
var c__5525__auto___12670 = cljs.core.chunk_first(seq__12063_12669__$1);
var G__12671 = cljs.core.chunk_rest(seq__12063_12669__$1);
var G__12672 = c__5525__auto___12670;
var G__12673 = cljs.core.count(c__5525__auto___12670);
var G__12674 = (0);
seq__12063_12653 = G__12671;
chunk__12065_12654 = G__12672;
count__12066_12655 = G__12673;
i__12067_12656 = G__12674;
continue;
} else {
var child_12675 = cljs.core.first(seq__12063_12669__$1);
if(cljs.core.truth_(child_12675)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12675);


var G__12676 = cljs.core.next(seq__12063_12669__$1);
var G__12677 = null;
var G__12678 = (0);
var G__12679 = (0);
seq__12063_12653 = G__12676;
chunk__12065_12654 = G__12677;
count__12066_12655 = G__12678;
i__12067_12656 = G__12679;
continue;
} else {
var G__12680 = cljs.core.next(seq__12063_12669__$1);
var G__12681 = null;
var G__12682 = (0);
var G__12683 = (0);
seq__12063_12653 = G__12680;
chunk__12065_12654 = G__12681;
count__12066_12655 = G__12682;
i__12067_12656 = G__12683;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12652);
}


var G__12684 = cljs.core.next(seq__12019_12644__$1);
var G__12685 = null;
var G__12686 = (0);
var G__12687 = (0);
seq__12019_12599 = G__12684;
chunk__12020_12600 = G__12685;
count__12021_12601 = G__12686;
i__12022_12602 = G__12687;
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
var seq__12084 = cljs.core.seq(node);
var chunk__12085 = null;
var count__12086 = (0);
var i__12087 = (0);
while(true){
if((i__12087 < count__12086)){
var n = chunk__12085.cljs$core$IIndexed$_nth$arity$2(null, i__12087);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12702 = seq__12084;
var G__12703 = chunk__12085;
var G__12704 = count__12086;
var G__12705 = (i__12087 + (1));
seq__12084 = G__12702;
chunk__12085 = G__12703;
count__12086 = G__12704;
i__12087 = G__12705;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12084);
if(temp__5804__auto__){
var seq__12084__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12084__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12084__$1);
var G__12708 = cljs.core.chunk_rest(seq__12084__$1);
var G__12709 = c__5525__auto__;
var G__12710 = cljs.core.count(c__5525__auto__);
var G__12711 = (0);
seq__12084 = G__12708;
chunk__12085 = G__12709;
count__12086 = G__12710;
i__12087 = G__12711;
continue;
} else {
var n = cljs.core.first(seq__12084__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12712 = cljs.core.next(seq__12084__$1);
var G__12713 = null;
var G__12714 = (0);
var G__12715 = (0);
seq__12084 = G__12712;
chunk__12085 = G__12713;
count__12086 = G__12714;
i__12087 = G__12715;
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
var G__12096 = arguments.length;
switch (G__12096) {
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
var G__12099 = arguments.length;
switch (G__12099) {
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
var G__12115 = arguments.length;
switch (G__12115) {
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
var len__5726__auto___12743 = arguments.length;
var i__5727__auto___12744 = (0);
while(true){
if((i__5727__auto___12744 < len__5726__auto___12743)){
args__5732__auto__.push((arguments[i__5727__auto___12744]));

var G__12745 = (i__5727__auto___12744 + (1));
i__5727__auto___12744 = G__12745;
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
var seq__12126_12746 = cljs.core.seq(nodes);
var chunk__12127_12747 = null;
var count__12128_12748 = (0);
var i__12129_12749 = (0);
while(true){
if((i__12129_12749 < count__12128_12748)){
var node_12750 = chunk__12127_12747.cljs$core$IIndexed$_nth$arity$2(null, i__12129_12749);
fragment.appendChild(shadow.dom._to_dom(node_12750));


var G__12752 = seq__12126_12746;
var G__12753 = chunk__12127_12747;
var G__12754 = count__12128_12748;
var G__12755 = (i__12129_12749 + (1));
seq__12126_12746 = G__12752;
chunk__12127_12747 = G__12753;
count__12128_12748 = G__12754;
i__12129_12749 = G__12755;
continue;
} else {
var temp__5804__auto___12757 = cljs.core.seq(seq__12126_12746);
if(temp__5804__auto___12757){
var seq__12126_12758__$1 = temp__5804__auto___12757;
if(cljs.core.chunked_seq_QMARK_(seq__12126_12758__$1)){
var c__5525__auto___12759 = cljs.core.chunk_first(seq__12126_12758__$1);
var G__12761 = cljs.core.chunk_rest(seq__12126_12758__$1);
var G__12762 = c__5525__auto___12759;
var G__12763 = cljs.core.count(c__5525__auto___12759);
var G__12764 = (0);
seq__12126_12746 = G__12761;
chunk__12127_12747 = G__12762;
count__12128_12748 = G__12763;
i__12129_12749 = G__12764;
continue;
} else {
var node_12765 = cljs.core.first(seq__12126_12758__$1);
fragment.appendChild(shadow.dom._to_dom(node_12765));


var G__12766 = cljs.core.next(seq__12126_12758__$1);
var G__12767 = null;
var G__12768 = (0);
var G__12769 = (0);
seq__12126_12746 = G__12766;
chunk__12127_12747 = G__12767;
count__12128_12748 = G__12768;
i__12129_12749 = G__12769;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12123){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12123));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12141_12772 = cljs.core.seq(scripts);
var chunk__12142_12773 = null;
var count__12143_12774 = (0);
var i__12144_12775 = (0);
while(true){
if((i__12144_12775 < count__12143_12774)){
var vec__12155_12776 = chunk__12142_12773.cljs$core$IIndexed$_nth$arity$2(null, i__12144_12775);
var script_tag_12777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155_12776,(0),null);
var script_body_12778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155_12776,(1),null);
eval(script_body_12778);


var G__12781 = seq__12141_12772;
var G__12782 = chunk__12142_12773;
var G__12783 = count__12143_12774;
var G__12784 = (i__12144_12775 + (1));
seq__12141_12772 = G__12781;
chunk__12142_12773 = G__12782;
count__12143_12774 = G__12783;
i__12144_12775 = G__12784;
continue;
} else {
var temp__5804__auto___12785 = cljs.core.seq(seq__12141_12772);
if(temp__5804__auto___12785){
var seq__12141_12786__$1 = temp__5804__auto___12785;
if(cljs.core.chunked_seq_QMARK_(seq__12141_12786__$1)){
var c__5525__auto___12787 = cljs.core.chunk_first(seq__12141_12786__$1);
var G__12788 = cljs.core.chunk_rest(seq__12141_12786__$1);
var G__12789 = c__5525__auto___12787;
var G__12790 = cljs.core.count(c__5525__auto___12787);
var G__12791 = (0);
seq__12141_12772 = G__12788;
chunk__12142_12773 = G__12789;
count__12143_12774 = G__12790;
i__12144_12775 = G__12791;
continue;
} else {
var vec__12159_12792 = cljs.core.first(seq__12141_12786__$1);
var script_tag_12793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159_12792,(0),null);
var script_body_12794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159_12792,(1),null);
eval(script_body_12794);


var G__12796 = cljs.core.next(seq__12141_12786__$1);
var G__12797 = null;
var G__12798 = (0);
var G__12799 = (0);
seq__12141_12772 = G__12796;
chunk__12142_12773 = G__12797;
count__12143_12774 = G__12798;
i__12144_12775 = G__12799;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12163){
var vec__12164 = p__12163;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12164,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12164,(1),null);
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
var G__12171 = arguments.length;
switch (G__12171) {
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
var seq__12182 = cljs.core.seq(style_keys);
var chunk__12183 = null;
var count__12184 = (0);
var i__12185 = (0);
while(true){
if((i__12185 < count__12184)){
var it = chunk__12183.cljs$core$IIndexed$_nth$arity$2(null, i__12185);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12807 = seq__12182;
var G__12808 = chunk__12183;
var G__12809 = count__12184;
var G__12810 = (i__12185 + (1));
seq__12182 = G__12807;
chunk__12183 = G__12808;
count__12184 = G__12809;
i__12185 = G__12810;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12182);
if(temp__5804__auto__){
var seq__12182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12182__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12182__$1);
var G__12812 = cljs.core.chunk_rest(seq__12182__$1);
var G__12813 = c__5525__auto__;
var G__12814 = cljs.core.count(c__5525__auto__);
var G__12815 = (0);
seq__12182 = G__12812;
chunk__12183 = G__12813;
count__12184 = G__12814;
i__12185 = G__12815;
continue;
} else {
var it = cljs.core.first(seq__12182__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12817 = cljs.core.next(seq__12182__$1);
var G__12818 = null;
var G__12819 = (0);
var G__12820 = (0);
seq__12182 = G__12817;
chunk__12183 = G__12818;
count__12184 = G__12819;
i__12185 = G__12820;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12200,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12209 = k12200;
var G__12209__$1 = (((G__12209 instanceof cljs.core.Keyword))?G__12209.fqn:null);
switch (G__12209__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12200,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12212){
var vec__12213 = p__12212;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12199){
var self__ = this;
var G__12199__$1 = this;
return (new cljs.core.RecordIter((0),G__12199__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12201,other12202){
var self__ = this;
var this12201__$1 = this;
return (((!((other12202 == null)))) && ((((this12201__$1.constructor === other12202.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12201__$1.x,other12202.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12201__$1.y,other12202.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12201__$1.__extmap,other12202.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12200){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12226 = k12200;
var G__12226__$1 = (((G__12226 instanceof cljs.core.Keyword))?G__12226.fqn:null);
switch (G__12226__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12200);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12199){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12227 = cljs.core.keyword_identical_QMARK_;
var expr__12228 = k__5309__auto__;
if(cljs.core.truth_((pred__12227.cljs$core$IFn$_invoke$arity$2 ? pred__12227.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12228) : pred__12227.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12228)))){
return (new shadow.dom.Coordinate(G__12199,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12227.cljs$core$IFn$_invoke$arity$2 ? pred__12227.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12228) : pred__12227.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12228)))){
return (new shadow.dom.Coordinate(self__.x,G__12199,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12199),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12199){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12199,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12205){
var extmap__5342__auto__ = (function (){var G__12241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12205,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12205)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12241);
} else {
return G__12241;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12205),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12205),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12250,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12258 = k12250;
var G__12258__$1 = (((G__12258 instanceof cljs.core.Keyword))?G__12258.fqn:null);
switch (G__12258__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12250,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12259){
var vec__12260 = p__12259;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12260,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12260,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12249){
var self__ = this;
var G__12249__$1 = this;
return (new cljs.core.RecordIter((0),G__12249__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12251,other12252){
var self__ = this;
var this12251__$1 = this;
return (((!((other12252 == null)))) && ((((this12251__$1.constructor === other12252.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12251__$1.w,other12252.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12251__$1.h,other12252.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12251__$1.__extmap,other12252.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12250){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12285 = k12250;
var G__12285__$1 = (((G__12285 instanceof cljs.core.Keyword))?G__12285.fqn:null);
switch (G__12285__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12250);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12249){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12286 = cljs.core.keyword_identical_QMARK_;
var expr__12287 = k__5309__auto__;
if(cljs.core.truth_((pred__12286.cljs$core$IFn$_invoke$arity$2 ? pred__12286.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12287) : pred__12286.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12287)))){
return (new shadow.dom.Size(G__12249,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12286.cljs$core$IFn$_invoke$arity$2 ? pred__12286.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12287) : pred__12286.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12287)))){
return (new shadow.dom.Size(self__.w,G__12249,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12249),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12249){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12249,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12254){
var extmap__5342__auto__ = (function (){var G__12298 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12254,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12298);
} else {
return G__12298;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12254),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12254),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__12881 = (i + (1));
var G__12882 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12881;
ret = G__12882;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12316){
var vec__12318 = p__12316;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12318,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12331 = arguments.length;
switch (G__12331) {
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
var G__12905 = ps;
var G__12906 = (i + (1));
el__$1 = G__12905;
i = G__12906;
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
var vec__12351 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12351,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12351,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12351,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12356_12924 = cljs.core.seq(props);
var chunk__12357_12925 = null;
var count__12358_12926 = (0);
var i__12359_12927 = (0);
while(true){
if((i__12359_12927 < count__12358_12926)){
var vec__12376_12929 = chunk__12357_12925.cljs$core$IIndexed$_nth$arity$2(null, i__12359_12927);
var k_12930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12376_12929,(0),null);
var v_12931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12376_12929,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12930);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12930),v_12931);


var G__12933 = seq__12356_12924;
var G__12934 = chunk__12357_12925;
var G__12935 = count__12358_12926;
var G__12936 = (i__12359_12927 + (1));
seq__12356_12924 = G__12933;
chunk__12357_12925 = G__12934;
count__12358_12926 = G__12935;
i__12359_12927 = G__12936;
continue;
} else {
var temp__5804__auto___12938 = cljs.core.seq(seq__12356_12924);
if(temp__5804__auto___12938){
var seq__12356_12939__$1 = temp__5804__auto___12938;
if(cljs.core.chunked_seq_QMARK_(seq__12356_12939__$1)){
var c__5525__auto___12940 = cljs.core.chunk_first(seq__12356_12939__$1);
var G__12941 = cljs.core.chunk_rest(seq__12356_12939__$1);
var G__12942 = c__5525__auto___12940;
var G__12943 = cljs.core.count(c__5525__auto___12940);
var G__12944 = (0);
seq__12356_12924 = G__12941;
chunk__12357_12925 = G__12942;
count__12358_12926 = G__12943;
i__12359_12927 = G__12944;
continue;
} else {
var vec__12383_12945 = cljs.core.first(seq__12356_12939__$1);
var k_12946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12383_12945,(0),null);
var v_12947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12383_12945,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12946);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12946),v_12947);


var G__12949 = cljs.core.next(seq__12356_12939__$1);
var G__12950 = null;
var G__12951 = (0);
var G__12952 = (0);
seq__12356_12924 = G__12949;
chunk__12357_12925 = G__12950;
count__12358_12926 = G__12951;
i__12359_12927 = G__12952;
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
var vec__12391 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391,(1),null);
var seq__12394_12955 = cljs.core.seq(node_children);
var chunk__12396_12956 = null;
var count__12397_12957 = (0);
var i__12398_12958 = (0);
while(true){
if((i__12398_12958 < count__12397_12957)){
var child_struct_12962 = chunk__12396_12956.cljs$core$IIndexed$_nth$arity$2(null, i__12398_12958);
if((!((child_struct_12962 == null)))){
if(typeof child_struct_12962 === 'string'){
var text_12963 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12963),child_struct_12962].join(''));
} else {
var children_12965 = shadow.dom.svg_node(child_struct_12962);
if(cljs.core.seq_QMARK_(children_12965)){
var seq__12437_12966 = cljs.core.seq(children_12965);
var chunk__12439_12967 = null;
var count__12440_12968 = (0);
var i__12441_12969 = (0);
while(true){
if((i__12441_12969 < count__12440_12968)){
var child_12970 = chunk__12439_12967.cljs$core$IIndexed$_nth$arity$2(null, i__12441_12969);
if(cljs.core.truth_(child_12970)){
node.appendChild(child_12970);


var G__12972 = seq__12437_12966;
var G__12973 = chunk__12439_12967;
var G__12974 = count__12440_12968;
var G__12975 = (i__12441_12969 + (1));
seq__12437_12966 = G__12972;
chunk__12439_12967 = G__12973;
count__12440_12968 = G__12974;
i__12441_12969 = G__12975;
continue;
} else {
var G__12976 = seq__12437_12966;
var G__12977 = chunk__12439_12967;
var G__12978 = count__12440_12968;
var G__12979 = (i__12441_12969 + (1));
seq__12437_12966 = G__12976;
chunk__12439_12967 = G__12977;
count__12440_12968 = G__12978;
i__12441_12969 = G__12979;
continue;
}
} else {
var temp__5804__auto___12980 = cljs.core.seq(seq__12437_12966);
if(temp__5804__auto___12980){
var seq__12437_12981__$1 = temp__5804__auto___12980;
if(cljs.core.chunked_seq_QMARK_(seq__12437_12981__$1)){
var c__5525__auto___12982 = cljs.core.chunk_first(seq__12437_12981__$1);
var G__12983 = cljs.core.chunk_rest(seq__12437_12981__$1);
var G__12984 = c__5525__auto___12982;
var G__12985 = cljs.core.count(c__5525__auto___12982);
var G__12986 = (0);
seq__12437_12966 = G__12983;
chunk__12439_12967 = G__12984;
count__12440_12968 = G__12985;
i__12441_12969 = G__12986;
continue;
} else {
var child_12987 = cljs.core.first(seq__12437_12981__$1);
if(cljs.core.truth_(child_12987)){
node.appendChild(child_12987);


var G__12988 = cljs.core.next(seq__12437_12981__$1);
var G__12989 = null;
var G__12990 = (0);
var G__12991 = (0);
seq__12437_12966 = G__12988;
chunk__12439_12967 = G__12989;
count__12440_12968 = G__12990;
i__12441_12969 = G__12991;
continue;
} else {
var G__12993 = cljs.core.next(seq__12437_12981__$1);
var G__12994 = null;
var G__12995 = (0);
var G__12996 = (0);
seq__12437_12966 = G__12993;
chunk__12439_12967 = G__12994;
count__12440_12968 = G__12995;
i__12441_12969 = G__12996;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12965);
}
}


var G__12997 = seq__12394_12955;
var G__12998 = chunk__12396_12956;
var G__12999 = count__12397_12957;
var G__13000 = (i__12398_12958 + (1));
seq__12394_12955 = G__12997;
chunk__12396_12956 = G__12998;
count__12397_12957 = G__12999;
i__12398_12958 = G__13000;
continue;
} else {
var G__13001 = seq__12394_12955;
var G__13002 = chunk__12396_12956;
var G__13003 = count__12397_12957;
var G__13004 = (i__12398_12958 + (1));
seq__12394_12955 = G__13001;
chunk__12396_12956 = G__13002;
count__12397_12957 = G__13003;
i__12398_12958 = G__13004;
continue;
}
} else {
var temp__5804__auto___13005 = cljs.core.seq(seq__12394_12955);
if(temp__5804__auto___13005){
var seq__12394_13006__$1 = temp__5804__auto___13005;
if(cljs.core.chunked_seq_QMARK_(seq__12394_13006__$1)){
var c__5525__auto___13007 = cljs.core.chunk_first(seq__12394_13006__$1);
var G__13008 = cljs.core.chunk_rest(seq__12394_13006__$1);
var G__13009 = c__5525__auto___13007;
var G__13010 = cljs.core.count(c__5525__auto___13007);
var G__13011 = (0);
seq__12394_12955 = G__13008;
chunk__12396_12956 = G__13009;
count__12397_12957 = G__13010;
i__12398_12958 = G__13011;
continue;
} else {
var child_struct_13027 = cljs.core.first(seq__12394_13006__$1);
if((!((child_struct_13027 == null)))){
if(typeof child_struct_13027 === 'string'){
var text_13064 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13064),child_struct_13027].join(''));
} else {
var children_13065 = shadow.dom.svg_node(child_struct_13027);
if(cljs.core.seq_QMARK_(children_13065)){
var seq__12451_13068 = cljs.core.seq(children_13065);
var chunk__12453_13069 = null;
var count__12454_13070 = (0);
var i__12455_13071 = (0);
while(true){
if((i__12455_13071 < count__12454_13070)){
var child_13073 = chunk__12453_13069.cljs$core$IIndexed$_nth$arity$2(null, i__12455_13071);
if(cljs.core.truth_(child_13073)){
node.appendChild(child_13073);


var G__13074 = seq__12451_13068;
var G__13075 = chunk__12453_13069;
var G__13076 = count__12454_13070;
var G__13077 = (i__12455_13071 + (1));
seq__12451_13068 = G__13074;
chunk__12453_13069 = G__13075;
count__12454_13070 = G__13076;
i__12455_13071 = G__13077;
continue;
} else {
var G__13084 = seq__12451_13068;
var G__13085 = chunk__12453_13069;
var G__13086 = count__12454_13070;
var G__13087 = (i__12455_13071 + (1));
seq__12451_13068 = G__13084;
chunk__12453_13069 = G__13085;
count__12454_13070 = G__13086;
i__12455_13071 = G__13087;
continue;
}
} else {
var temp__5804__auto___13088__$1 = cljs.core.seq(seq__12451_13068);
if(temp__5804__auto___13088__$1){
var seq__12451_13089__$1 = temp__5804__auto___13088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12451_13089__$1)){
var c__5525__auto___13091 = cljs.core.chunk_first(seq__12451_13089__$1);
var G__13092 = cljs.core.chunk_rest(seq__12451_13089__$1);
var G__13093 = c__5525__auto___13091;
var G__13094 = cljs.core.count(c__5525__auto___13091);
var G__13095 = (0);
seq__12451_13068 = G__13092;
chunk__12453_13069 = G__13093;
count__12454_13070 = G__13094;
i__12455_13071 = G__13095;
continue;
} else {
var child_13096 = cljs.core.first(seq__12451_13089__$1);
if(cljs.core.truth_(child_13096)){
node.appendChild(child_13096);


var G__13097 = cljs.core.next(seq__12451_13089__$1);
var G__13098 = null;
var G__13099 = (0);
var G__13100 = (0);
seq__12451_13068 = G__13097;
chunk__12453_13069 = G__13098;
count__12454_13070 = G__13099;
i__12455_13071 = G__13100;
continue;
} else {
var G__13102 = cljs.core.next(seq__12451_13089__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__12451_13068 = G__13102;
chunk__12453_13069 = G__13103;
count__12454_13070 = G__13104;
i__12455_13071 = G__13105;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13065);
}
}


var G__13106 = cljs.core.next(seq__12394_13006__$1);
var G__13107 = null;
var G__13108 = (0);
var G__13109 = (0);
seq__12394_12955 = G__13106;
chunk__12396_12956 = G__13107;
count__12397_12957 = G__13108;
i__12398_12958 = G__13109;
continue;
} else {
var G__13114 = cljs.core.next(seq__12394_13006__$1);
var G__13115 = null;
var G__13116 = (0);
var G__13117 = (0);
seq__12394_12955 = G__13114;
chunk__12396_12956 = G__13115;
count__12397_12957 = G__13116;
i__12398_12958 = G__13117;
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
var len__5726__auto___13121 = arguments.length;
var i__5727__auto___13122 = (0);
while(true){
if((i__5727__auto___13122 < len__5726__auto___13121)){
args__5732__auto__.push((arguments[i__5727__auto___13122]));

var G__13124 = (i__5727__auto___13122 + (1));
i__5727__auto___13122 = G__13124;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12467){
var G__12469 = cljs.core.first(seq12467);
var seq12467__$1 = cljs.core.next(seq12467);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12469,seq12467__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
