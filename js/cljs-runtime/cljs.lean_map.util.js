import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.lean_map.core.js";
import "./goog.object.object.js";
goog.provide('cljs.lean_map.util');
goog.scope(function(){
  cljs.lean_map.util.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.lean_map.util.use_lean_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.lean_map.util.cljs_persistent_assoc = cljs.lean_map.util.goog$module$goog$object.clone(cljs.core.PersistentArrayMap.prototype).cljs$core$IAssociative$_assoc$arity$3;
cljs.lean_map.util.cljs_transient_assoc = cljs.lean_map.util.goog$module$goog$object.clone(cljs.core.TransientArrayMap.prototype).cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
cljs.lean_map.util.array__GT_transient_lean_map = (function cljs$lean_map$util$array__GT_transient_lean_map(len,arr){
var out = cljs.core.transient$(cljs.lean_map.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__22605 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__22606 = (i + (2));
out = G__22605;
i = G__22606;
continue;
} else {
return out;
}
break;
}
});
cljs.lean_map.util.lean_transient_assoc = (function cljs$lean_map$util$lean_transient_assoc(tcoll,key,val){
if(cljs.core.truth_(tcoll.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll,key);
if((idx === (-1))){
if(((tcoll.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
(tcoll.len = (tcoll.len + (2)));

tcoll.arr.push(key);

tcoll.arr.push(val);

return tcoll;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.lean_map.util.array__GT_transient_lean_map(tcoll.len,tcoll.arr),key,val);
}
} else {
if((val === (tcoll.arr[(idx + (1))]))){
return tcoll;
} else {
(tcoll.arr[(idx + (1))] = val);

return tcoll;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});
cljs.lean_map.util.lean_persistent_assoc = (function cljs$lean_map$util$lean_persistent_assoc(coll,k,v){
var idx = cljs.core.array_map_index_of(coll,k);
if((idx === (-1))){
if((coll.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = cljs.core.array_map_extend_kv(coll,k,v);
return (new cljs.core.PersistentArrayMap(cljs.core.meta,(coll.cnt + (1)),arr,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.lean_map.core.PersistentHashMap.EMPTY,coll),k,v),cljs.core.meta);
}
} else {
if((v === (coll.arr[(idx + (1))]))){
return coll;
} else {
var arr = (function (){var G__22603 = cljs.core.aclone(coll.arr);
(G__22603[(idx + (1))] = v);

return G__22603;
})();
return (new cljs.core.PersistentArrayMap(cljs.core.meta,coll.cnt,arr,null));

}
}
});
cljs.lean_map.util.empty = cljs.lean_map.core.PersistentHashMap.EMPTY;
/**
 * keyval => key val
 *   Returns a new lean map with supplied mappings.
 */
cljs.lean_map.util.hash_map = (function cljs$lean_map$util$hash_map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22607 = arguments.length;
var i__5727__auto___22608 = (0);
while(true){
if((i__5727__auto___22608 < len__5726__auto___22607)){
args__5732__auto__.push((arguments[i__5727__auto___22608]));

var G__22609 = (i__5727__auto___22608 + (1));
i__5727__auto___22608 = G__22609;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return cljs.lean_map.util.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(cljs.lean_map.util.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.lean_map.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__22610 = cljs.core.nnext(in$);
var G__22611 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__22610;
out = G__22611;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}));

(cljs.lean_map.util.hash_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.lean_map.util.hash_map.cljs$lang$applyTo = (function (seq22604){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22604));
}));

/**
 * Makes Persistent and Transient ArrayMaps convert to Lean Maps at the HashMap threshold
 *   (current 8 key value pairs)
 */
cljs.lean_map.util.set_maps_to_lean_map_BANG_ = (function cljs$lean_map$util$set_maps_to_lean_map_BANG_(){
(cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = cljs.lean_map.util.lean_persistent_assoc);

(cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = cljs.lean_map.util.lean_transient_assoc);

return cljs.core.reset_BANG_(cljs.lean_map.util.use_lean_map,true);
});
/**
 * Makes Persistent and Transient ArrayMaps convert to CLJS Maps at the HashMap threshold
 *   (current 8 key value pairs)
 */
cljs.lean_map.util.set_maps_to_cljs_map_BANG_ = (function cljs$lean_map$util$set_maps_to_cljs_map_BANG_(){
(cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = cljs.lean_map.util.cljs_persistent_assoc);

(cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = cljs.lean_map.util.cljs_transient_assoc);

return cljs.core.reset_BANG_(cljs.lean_map.util.use_lean_map,false);
});
/**
 * Is ClojureScript currently using Lean Maps or the default CLJS Map implementation
 */
cljs.lean_map.util.using_lean_maps_QMARK_ = (function cljs$lean_map$util$using_lean_maps_QMARK_(){
return cljs.core.deref(cljs.lean_map.util.use_lean_map);
});
/**
 * Check if a map is an instance of lean-map
 */
cljs.lean_map.util.lean_map_QMARK_ = (function cljs$lean_map$util$lean_map_QMARK_(m){
return (((m instanceof cljs.lean_map.core.PersistentHashMap)) || ((m instanceof cljs.lean_map.core.TransientHashMap)));
});
/**
 * Checks if a sequence is an instance of the lean-map seq
 */
cljs.lean_map.util.lean_map_seq_QMARK_ = (function cljs$lean_map$util$lean_map_seq_QMARK_(s){
return (s instanceof cljs.lean_map.core.NodeSeq);
});

//# sourceMappingURL=cljs.lean_map.util.js.map
