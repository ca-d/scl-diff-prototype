import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14019){
var map__14020 = p__14019;
var map__14020__$1 = cljs.core.__destructure_map(map__14020);
var runtime = map__14020__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14020__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14326 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14326)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14029 = runtime;
var G__14030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14326);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14029,G__14030) : shadow.remote.runtime.shared.process.call(null, G__14029,G__14030));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14036,res){
var map__14037 = p__14036;
var map__14037__$1 = cljs.core.__destructure_map(map__14037);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14044 = res;
var G__14044__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14044,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14044);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14044__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14044__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14058 = arguments.length;
switch (G__14058) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14074,msg,handlers,timeout_after_ms){
var map__14076 = p__14074;
var map__14076__$1 = cljs.core.__destructure_map(map__14076);
var runtime = map__14076__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14076__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14335 = arguments.length;
var i__5727__auto___14336 = (0);
while(true){
if((i__5727__auto___14336 < len__5726__auto___14335)){
args__5732__auto__.push((arguments[i__5727__auto___14336]));

var G__14337 = (i__5727__auto___14336 + (1));
i__5727__auto___14336 = G__14337;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14109,ev,args){
var map__14110 = p__14109;
var map__14110__$1 = cljs.core.__destructure_map(map__14110);
var runtime = map__14110__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14110__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14111 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14114 = null;
var count__14115 = (0);
var i__14116 = (0);
while(true){
if((i__14116 < count__14115)){
var ext = chunk__14114.cljs$core$IIndexed$_nth$arity$2(null, i__14116);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14342 = seq__14111;
var G__14343 = chunk__14114;
var G__14344 = count__14115;
var G__14345 = (i__14116 + (1));
seq__14111 = G__14342;
chunk__14114 = G__14343;
count__14115 = G__14344;
i__14116 = G__14345;
continue;
} else {
var G__14346 = seq__14111;
var G__14347 = chunk__14114;
var G__14348 = count__14115;
var G__14349 = (i__14116 + (1));
seq__14111 = G__14346;
chunk__14114 = G__14347;
count__14115 = G__14348;
i__14116 = G__14349;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14111);
if(temp__5804__auto__){
var seq__14111__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14111__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14111__$1);
var G__14350 = cljs.core.chunk_rest(seq__14111__$1);
var G__14351 = c__5525__auto__;
var G__14352 = cljs.core.count(c__5525__auto__);
var G__14353 = (0);
seq__14111 = G__14350;
chunk__14114 = G__14351;
count__14115 = G__14352;
i__14116 = G__14353;
continue;
} else {
var ext = cljs.core.first(seq__14111__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14354 = cljs.core.next(seq__14111__$1);
var G__14355 = null;
var G__14356 = (0);
var G__14357 = (0);
seq__14111 = G__14354;
chunk__14114 = G__14355;
count__14115 = G__14356;
i__14116 = G__14357;
continue;
} else {
var G__14359 = cljs.core.next(seq__14111__$1);
var G__14360 = null;
var G__14361 = (0);
var G__14362 = (0);
seq__14111 = G__14359;
chunk__14114 = G__14360;
count__14115 = G__14361;
i__14116 = G__14362;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14092){
var G__14093 = cljs.core.first(seq14092);
var seq14092__$1 = cljs.core.next(seq14092);
var G__14094 = cljs.core.first(seq14092__$1);
var seq14092__$2 = cljs.core.next(seq14092__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14093,G__14094,seq14092__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14138,p__14139){
var map__14140 = p__14138;
var map__14140__$1 = cljs.core.__destructure_map(map__14140);
var runtime = map__14140__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14140__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14142 = p__14139;
var map__14142__$1 = cljs.core.__destructure_map(map__14142);
var msg = map__14142__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14142__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14150 = cljs.core.deref(state_ref);
var map__14150__$1 = cljs.core.__destructure_map(map__14150);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14150__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14150__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14155,msg){
var map__14157 = p__14155;
var map__14157__$1 = cljs.core.__destructure_map(map__14157);
var runtime = map__14157__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14173,key,p__14174){
var map__14180 = p__14173;
var map__14180__$1 = cljs.core.__destructure_map(map__14180);
var state = map__14180__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14180__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14181 = p__14174;
var map__14181__$1 = cljs.core.__destructure_map(map__14181);
var spec = map__14181__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14181__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14181__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14210,key,spec){
var map__14212 = p__14210;
var map__14212__$1 = cljs.core.__destructure_map(map__14212);
var runtime = map__14212__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14387 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14387 == null)){
} else {
var on_welcome_14388 = temp__5808__auto___14387;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14388.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14388.cljs$core$IFn$_invoke$arity$0() : on_welcome_14388.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14216_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14216_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14217_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14217_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14218_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14218_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14220_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14220_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14221_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14221_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14259,key){
var map__14260 = p__14259;
var map__14260__$1 = cljs.core.__destructure_map(map__14260);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14268,msg){
var map__14270 = p__14268;
var map__14270__$1 = cljs.core.__destructure_map(map__14270);
var runtime = map__14270__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14270__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14278,p__14279){
var map__14280 = p__14278;
var map__14280__$1 = cljs.core.__destructure_map(map__14280);
var runtime = map__14280__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14281 = p__14279;
var map__14281__$1 = cljs.core.__destructure_map(map__14281);
var msg = map__14281__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14281__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14281__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14284 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14286 = null;
var count__14287 = (0);
var i__14288 = (0);
while(true){
if((i__14288 < count__14287)){
var map__14313 = chunk__14286.cljs$core$IIndexed$_nth$arity$2(null, i__14288);
var map__14313__$1 = cljs.core.__destructure_map(map__14313);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14313__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14436 = seq__14284;
var G__14437 = chunk__14286;
var G__14438 = count__14287;
var G__14439 = (i__14288 + (1));
seq__14284 = G__14436;
chunk__14286 = G__14437;
count__14287 = G__14438;
i__14288 = G__14439;
continue;
} else {
var G__14441 = seq__14284;
var G__14442 = chunk__14286;
var G__14443 = count__14287;
var G__14444 = (i__14288 + (1));
seq__14284 = G__14441;
chunk__14286 = G__14442;
count__14287 = G__14443;
i__14288 = G__14444;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14284);
if(temp__5804__auto__){
var seq__14284__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14284__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14284__$1);
var G__14449 = cljs.core.chunk_rest(seq__14284__$1);
var G__14450 = c__5525__auto__;
var G__14451 = cljs.core.count(c__5525__auto__);
var G__14452 = (0);
seq__14284 = G__14449;
chunk__14286 = G__14450;
count__14287 = G__14451;
i__14288 = G__14452;
continue;
} else {
var map__14314 = cljs.core.first(seq__14284__$1);
var map__14314__$1 = cljs.core.__destructure_map(map__14314);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14314__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14455 = cljs.core.next(seq__14284__$1);
var G__14456 = null;
var G__14457 = (0);
var G__14458 = (0);
seq__14284 = G__14455;
chunk__14286 = G__14456;
count__14287 = G__14457;
i__14288 = G__14458;
continue;
} else {
var G__14459 = cljs.core.next(seq__14284__$1);
var G__14460 = null;
var G__14461 = (0);
var G__14462 = (0);
seq__14284 = G__14459;
chunk__14286 = G__14460;
count__14287 = G__14461;
i__14288 = G__14462;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
