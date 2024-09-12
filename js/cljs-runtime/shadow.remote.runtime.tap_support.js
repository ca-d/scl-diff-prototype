import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
import "./shadow.remote.runtime.obj_support.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20359,p__20360){
var map__20362 = p__20359;
var map__20362__$1 = cljs.core.__destructure_map(map__20362);
var svc = map__20362__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20362__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20362__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20362__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20363 = p__20360;
var map__20363__$1 = cljs.core.__destructure_map(map__20363);
var msg = map__20363__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20363__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20378,p__20379){
var map__20383 = p__20378;
var map__20383__$1 = cljs.core.__destructure_map(map__20383);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20383__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20384 = p__20379;
var map__20384__$1 = cljs.core.__destructure_map(map__20384);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20389,p__20390){
var map__20392 = p__20389;
var map__20392__$1 = cljs.core.__destructure_map(map__20392);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20392__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20392__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20393 = p__20390;
var map__20393__$1 = cljs.core.__destructure_map(map__20393);
var msg = map__20393__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20393__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20396,tid){
var map__20397 = p__20396;
var map__20397__$1 = cljs.core.__destructure_map(map__20397);
var svc = map__20397__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20415 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20416 = null;
var count__20417 = (0);
var i__20418 = (0);
while(true){
if((i__20418 < count__20417)){
var vec__20442 = chunk__20416.cljs$core$IIndexed$_nth$arity$2(null, i__20418);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20469 = seq__20415;
var G__20470 = chunk__20416;
var G__20471 = count__20417;
var G__20472 = (i__20418 + (1));
seq__20415 = G__20469;
chunk__20416 = G__20470;
count__20417 = G__20471;
i__20418 = G__20472;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20415);
if(temp__5804__auto__){
var seq__20415__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20415__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20415__$1);
var G__20473 = cljs.core.chunk_rest(seq__20415__$1);
var G__20474 = c__5525__auto__;
var G__20475 = cljs.core.count(c__5525__auto__);
var G__20476 = (0);
seq__20415 = G__20473;
chunk__20416 = G__20474;
count__20417 = G__20475;
i__20418 = G__20476;
continue;
} else {
var vec__20450 = cljs.core.first(seq__20415__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20450,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20450,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20477 = cljs.core.next(seq__20415__$1);
var G__20478 = null;
var G__20479 = (0);
var G__20480 = (0);
seq__20415 = G__20477;
chunk__20416 = G__20478;
count__20417 = G__20479;
i__20418 = G__20480;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20401_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20401_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20402_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20402_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20403_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20403_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20404_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20404_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20460){
var map__20461 = p__20460;
var map__20461__$1 = cljs.core.__destructure_map(map__20461);
var svc = map__20461__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20461__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20461__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
