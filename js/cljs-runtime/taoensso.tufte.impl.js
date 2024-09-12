import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./taoensso.encore.js";
import "./taoensso.tufte.stats.js";
goog.provide('taoensso.tufte.impl');

/**
* @constructor
*/
taoensso.tufte.impl.Time = (function (id,t,location_info){
this.id = id;
this.t = t;
this.location_info = location_info;
});

(taoensso.tufte.impl.Time.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"location-info","location-info",-1829860268,null)], null);
}));

(taoensso.tufte.impl.Time.cljs$lang$type = true);

(taoensso.tufte.impl.Time.cljs$lang$ctorStr = "taoensso.tufte.impl/Time");

(taoensso.tufte.impl.Time.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.impl/Time");
}));

/**
 * Positional factory function for taoensso.tufte.impl/Time.
 */
taoensso.tufte.impl.__GT_Time = (function taoensso$tufte$impl$__GT_Time(id,t,location_info){
return (new taoensso.tufte.impl.Time(id,t,location_info));
});


/**
* @constructor
*/
taoensso.tufte.impl.TimeSpan = (function (t0,t1){
this.t0 = t0;
this.t1 = t1;
});

(taoensso.tufte.impl.TimeSpan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.TimeSpan.cljs$lang$type = true);

(taoensso.tufte.impl.TimeSpan.cljs$lang$ctorStr = "taoensso.tufte.impl/TimeSpan");

(taoensso.tufte.impl.TimeSpan.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.impl/TimeSpan");
}));

/**
 * Positional factory function for taoensso.tufte.impl/TimeSpan.
 */
taoensso.tufte.impl.__GT_TimeSpan = (function taoensso$tufte$impl$__GT_TimeSpan(t0,t1){
return (new taoensso.tufte.impl.TimeSpan(t0,t1));
});


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.impl.PStats = (function (pd,t1,tspans,realized_){
this.pd = pd;
this.t1 = t1;
this.tspans = tspans;
this.realized_ = realized_;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(taoensso.tufte.impl.PStats.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.realized_);
}));

(taoensso.tufte.impl.PStats.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.realized_QMARK_(self__.realized_);
}));

(taoensso.tufte.impl.PStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pd","pd",1514324481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"tspans","tspans",451349869,null),new cljs.core.Symbol(null,"realized_","realized_",495032039,null)], null);
}));

(taoensso.tufte.impl.PStats.cljs$lang$type = true);

(taoensso.tufte.impl.PStats.cljs$lang$ctorStr = "taoensso.tufte.impl/PStats");

(taoensso.tufte.impl.PStats.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.impl/PStats");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PStats.
 */
taoensso.tufte.impl.__GT_PStats = (function taoensso$tufte$impl$__GT_PStats(pd,t1,tspans,realized_){
return (new taoensso.tufte.impl.PStats(pd,t1,tspans,realized_));
});


/**
* @constructor
*/
taoensso.tufte.impl.PState = (function (acc,id_times,id_sstats){
this.acc = acc;
this.id_times = id_times;
this.id_sstats = id_sstats;
});

(taoensso.tufte.impl.PState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"id-times","id-times",-1251134881,null),new cljs.core.Symbol(null,"id-sstats","id-sstats",142638084,null)], null);
}));

(taoensso.tufte.impl.PState.cljs$lang$type = true);

(taoensso.tufte.impl.PState.cljs$lang$ctorStr = "taoensso.tufte.impl/PState");

(taoensso.tufte.impl.PState.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.impl/PState");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PState.
 */
taoensso.tufte.impl.__GT_PState = (function taoensso$tufte$impl$__GT_PState(acc,id_times,id_sstats){
return (new taoensso.tufte.impl.PState(acc,id_times,id_sstats));
});


/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.impl.PData = (function (nmax,t0,pstate_){
this.nmax = nmax;
this.t0 = t0;
this.pstate_ = pstate_;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.impl.PData.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (taoensso.tufte.impl.deref_pdata.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.deref_pdata.cljs$core$IFn$_invoke$arity$1(this$__$1) : taoensso.tufte.impl.deref_pdata.call(null, this$__$1));
}));

(taoensso.tufte.impl.PData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nmax","nmax",-2045441365,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"pstate_","pstate_",-1982806579,null)], null);
}));

(taoensso.tufte.impl.PData.cljs$lang$type = true);

(taoensso.tufte.impl.PData.cljs$lang$ctorStr = "taoensso.tufte.impl/PData");

(taoensso.tufte.impl.PData.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.impl/PData");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PData.
 */
taoensso.tufte.impl.__GT_PData = (function taoensso$tufte$impl$__GT_PData(nmax,t0,pstate_){
return (new taoensso.tufte.impl.PData(nmax,t0,pstate_));
});

taoensso.tufte.impl.new_pdata_local = (function taoensso$tufte$impl$new_pdata_local(nmax){
var t0 = taoensso.encore.now_nano();
return (new taoensso.tufte.impl.PData(nmax,t0,cljs.core.volatile_BANG_((new taoensso.tufte.impl.PState([],null,null)))));
});
taoensso.tufte.impl.new_pdata_dynamic = (function taoensso$tufte$impl$new_pdata_dynamic(nmax){
var t0 = taoensso.encore.now_nano();
return (new taoensso.tufte.impl.PData(nmax,t0,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new taoensso.tufte.impl.PState(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),null,null)))));
});
/**
 * PData->PStats
 */
taoensso.tufte.impl.deref_pdata = (function taoensso$tufte$impl$deref_pdata(pd){
var t1 = taoensso.encore.now_nano();
var t0 = pd.t0;
var tspans = (new cljs.core.List(null,(new taoensso.tufte.impl.TimeSpan(t0,t1)),null,(1),null));
return (new taoensso.tufte.impl.PStats(pd,t1,tspans,(new cljs.core.Delay((function (){
return (taoensso.tufte.impl.deref_pstats.cljs$core$IFn$_invoke$arity$3 ? taoensso.tufte.impl.deref_pstats.cljs$core$IFn$_invoke$arity$3(pd,t1,tspans) : taoensso.tufte.impl.deref_pstats.call(null, pd,t1,tspans));
}),null))));
});
/**
 * nnil iff dynamic profiling active
 */
taoensso.tufte.impl._STAR_pdata_STAR_ = null;
var stack_16509 = [];
var pdata__16510 = cljs.core.volatile_BANG_(false);
taoensso.tufte.impl.pdata_local_get = (function taoensso$tufte$impl$pdata_local_get(){
return cljs.core.deref(pdata__16510);
});

taoensso.tufte.impl.pdata_local_pop = (function taoensso$tufte$impl$pdata_local_pop(){
var temp__5802__auto__ = stack_16509.pop();
if(cljs.core.truth_(temp__5802__auto__)){
var stashed = temp__5802__auto__;
return cljs.core.vreset_BANG_(pdata__16510,stashed);
} else {
return cljs.core.vreset_BANG_(pdata__16510,null);
}
});

taoensso.tufte.impl.pdata_local_push = (function taoensso$tufte$impl$pdata_local_push(v){
var temp__5802__auto__ = cljs.core.deref(pdata__16510);
if(cljs.core.truth_(temp__5802__auto__)){
var to_stash = temp__5802__auto__;
stack_16509.push(to_stash);

return cljs.core.vreset_BANG_(pdata__16510,v);
} else {
return cljs.core.vreset_BANG_(pdata__16510,v);
}
});

/**
* @constructor
*/
taoensso.tufte.impl.ElapsedTimeAcc = (function (tsum,max_t1){
this.tsum = tsum;
this.max_t1 = max_t1;
});

(taoensso.tufte.impl.ElapsedTimeAcc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tsum","tsum",-52990159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"max-t1","max-t1",314172921,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$type = true);

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$ctorStr = "taoensso.tufte.impl/ElapsedTimeAcc");

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.impl/ElapsedTimeAcc");
}));

/**
 * Positional factory function for taoensso.tufte.impl/ElapsedTimeAcc.
 */
taoensso.tufte.impl.__GT_ElapsedTimeAcc = (function taoensso$tufte$impl$__GT_ElapsedTimeAcc(tsum,max_t1){
return (new taoensso.tufte.impl.ElapsedTimeAcc(tsum,max_t1));
});

var sort_tspans_16515 = (function (tspans){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (tspan){
return tspan.t0;
}),tspans);
});
/**
 * Returns `tsum` (elapsed time) given collection of `TimeSpan`s.
 *  Based on https://codereview.stackexchange.com/a/126927.
 */
taoensso.tufte.impl.tspans__GT_tsum = (function taoensso$tufte$impl$tspans__GT_tsum(tspans){
if(cljs.core.empty_QMARK_(tspans)){
return (0);
} else {
var sorted_tspans = sort_tspans_16515(tspans);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tspan){
var t1 = tspan.t1;
var max_t1 = acc.max_t1;
if((t1 > max_t1)){
var t0 = tspan.t0;
var tsum = acc.tsum;
return (new taoensso.tufte.impl.ElapsedTimeAcc((tsum + (t1 - Math.max(t0,max_t1))),t1));
} else {
return acc;
}
}),(new taoensso.tufte.impl.ElapsedTimeAcc((0),(0))),sorted_tspans).tsum;
}
});
taoensso.tufte.impl.fast_into = (function taoensso$tufte$impl$fast_into(c0,c1){
if((cljs.core.count(c0) > cljs.core.count(c1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(c0,c1);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(c1,c0);
}
});
taoensso.tufte.impl.merge_tspans = (function taoensso$tufte$impl$merge_tspans(nmax,t1,tspans0,tspans1){
var tspans2 = taoensso.tufte.impl.fast_into(tspans0,tspans1);
if((cljs.core.count(tspans2) > nmax)){
var tsum = taoensso.tufte.impl.tspans__GT_tsum(tspans2);
return (new cljs.core.List(null,(new taoensso.tufte.impl.TimeSpan((t1 - tsum),t1)),null,(1),null));
} else {
return tspans2;
}
});
/**
 * NB treats `from-times` as read-only (may be mutable `acc`)!
 */
taoensso.tufte.impl.times_into_id_times = (function taoensso$tufte$impl$times_into_id_times(to_id_times,from_times){
return cljs.core.not_empty((function (){var temp__5802__auto__ = taoensso.encore.force_ref(from_times);
if(cljs.core.truth_(temp__5802__auto__)){
var from_times__$1 = temp__5802__auto__;
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,in$){
var t = in$.t;
var id = in$.id;
var loc = in$.location_info;
var id_STAR_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,loc], null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,id_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,id_STAR_),t));
}),cljs.core.transient$((function (){var or__5002__auto__ = to_id_times;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),from_times__$1));
} else {
return to_id_times;
}
})());
});
/**
 * PStats->{:clock _ :stats {<id> <stats/sstats-map>}} (API output)
 */
taoensso.tufte.impl.deref_pstats = (function taoensso$tufte$impl$deref_pstats(pd,t1,tspans){
var t0 = pd.t0;
var pstate_ = pd.pstate_;
var pstate = taoensso.encore.force_ref(pstate_);
var id_times = pstate.id_times;
var id_sstats = pstate.id_sstats;
var id_times__$1 = taoensso.tufte.impl.times_into_id_times(id_times,pstate.acc);
var public_stats_output = (cljs.core.truth_(id_times__$1)?(function (){var id_STAR__sstats_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
var id_STAR__loc_ = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,id,times){
var vec__16481 = id;
var id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16481,(0),null);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16481,(1),null);
var sstats_LT_times = taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(times);
var sstats_merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.stats.summary_stats_merge,sstats_LT_times,cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_sstats,id));
var new_id_STAR__sstats = (function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(id_STAR__sstats_),id_STAR_);
if(cljs.core.truth_(temp__5802__auto__)){
var old = temp__5802__auto__;
return taoensso.tufte.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$2(old,sstats_merged);
} else {
return sstats_merged;
}
})();
var new_id_STAR__loc = (function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(id_STAR__loc_),id_STAR_);
if(cljs.core.truth_(temp__5802__auto__)){
var old = temp__5802__auto__;
if(cljs.core.set_QMARK_(old)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old,loc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,loc)){
return old;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([loc,old]);
}
}
} else {
return loc;
}
})();
var new_id_STAR__entry = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new_id_STAR__sstats),new cljs.core.Keyword(null,"loc","loc",-584284901),new_id_STAR__loc);
id_STAR__sstats_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(id_STAR__sstats_.cljs$core$IDeref$_deref$arity$1(null, ),id_STAR_,new_id_STAR__sstats));

id_STAR__loc_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(id_STAR__loc_.cljs$core$IDeref$_deref$arity$1(null, ),id_STAR_,new_id_STAR__loc));

return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,id_STAR_,new_id_STAR__entry);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),id_times__$1));
})():null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t0","t0",2120162535),t0,new cljs.core.Keyword(null,"t1","t1",24972444),t1,new cljs.core.Keyword(null,"total","total",1916810418),taoensso.tufte.impl.tspans__GT_tsum(tspans)], null),new cljs.core.Keyword(null,"stats","stats",-85643011),public_stats_output], null);
});
taoensso.tufte.impl.merge_sstats_when_needed = (function taoensso$tufte$impl$merge_sstats_when_needed(nmax,sstats){
if((cljs.core.count(sstats) <= nmax)){
return sstats;
} else {
return (new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.tufte.stats.summary_stats_merge,sstats),null,(1),null));
}
});
/**
 * Compacting merge
 */
taoensso.tufte.impl.merge_pstats = (function taoensso$tufte$impl$merge_pstats(var_args){
var G__16485 = arguments.length;
switch (G__16485) {
case 2:
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3(null,ps0,ps1);
}));

(taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3 = (function (nmax,ps0,ps1){
if(cljs.core.truth_(ps0)){
if(cljs.core.truth_(ps1)){
var ps0__$1 = ps0;
var ps1__$1 = ps1;
var pd0 = ps0__$1.pd;
var pd1 = ps1__$1.pd;
var nmax__$1 = cljs.core.long$((function (){var or__5002__auto__ = nmax;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return pd0.nmax;
}
})());
var pd0_t0 = pd0.t0;
var ps0_t1 = ps0__$1.t1;
var pd1_t0 = pd1.t0;
var ps1_t1 = ps1__$1.t1;
var pd2_t0 = (((pd0_t0 < pd1_t0))?pd0_t0:pd1_t0);
var ps2_t1 = (((ps0_t1 > ps1_t1))?ps0_t1:ps1_t1);
var tspans2 = taoensso.tufte.impl.merge_tspans(nmax__$1,ps2_t1,ps0__$1.tspans,ps1__$1.tspans);
var pd0_pstate = taoensso.encore.force_ref(pd0.pstate_);
var pd1_pstate = taoensso.encore.force_ref(pd1.pstate_);
var pd0_id_times = taoensso.tufte.impl.times_into_id_times(pd0_pstate.id_times,pd0_pstate.acc);
var pd1_id_times = taoensso.tufte.impl.times_into_id_times(pd1_pstate.id_times,pd1_pstate.acc);
var pd0_id_sstats = pd0_pstate.id_sstats;
var pd1_id_sstats = pd1_pstate.id_sstats;
var pd2_ids = cljs.core.keys(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = pd0_id_times;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),pd1_id_times));
var vec__16486 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16489,id){
var vec__16490 = p__16489;
var pd2_id_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16490,(0),null);
var pd2_id_sstats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16490,(1),null);
var pd0_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd0_id_times,id);
var pd0_sstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd0_id_sstats,id);
var pd1_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd1_id_times,id);
var pd1_sstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd1_id_sstats,id);
var pd2_times = taoensso.tufte.impl.fast_into(pd0_times,pd1_times);
var pd2_sstats = taoensso.tufte.impl.fast_into(pd0_sstats,pd1_sstats);
if((cljs.core.count(pd2_times) <= nmax__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_times,id,pd2_times),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_sstats,id,pd2_sstats)], null);
} else {
var sstats_LT_times = taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(pd2_times);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_times,id,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_sstats,id,taoensso.tufte.impl.merge_sstats_when_needed(nmax__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pd2_sstats,sstats_LT_times)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd0_id_times,pd0_id_sstats], null),pd2_ids);
var pd2_id_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(0),null);
var pd2_id_sstats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(1),null);
var pd2 = (new taoensso.tufte.impl.PData(nmax__$1,pd2_t0,(new taoensso.tufte.impl.PState(null,pd2_id_times,pd2_id_sstats))));
return (new taoensso.tufte.impl.PStats(pd2,ps2_t1,tspans2,(new cljs.core.Delay((function (){
return taoensso.tufte.impl.deref_pstats(pd2,ps2_t1,tspans2);
}),null))));
} else {
return ps0;
}
} else {
return ps1;
}
}));

(taoensso.tufte.impl.merge_pstats.cljs$lang$maxFixedArity = 3);

taoensso.tufte.impl.capture_time_BANG_ = (function taoensso$tufte$impl$capture_time_BANG_(pd,id,ns_elapsed,location_info){
while(true){
var nmax = pd.nmax;
var pstate_ = pd.pstate_;
var pstate = cljs.core.deref(pstate_);
var acc = pstate.acc;
if((acc instanceof cljs.core.Atom)){
var new_time = (new taoensso.tufte.impl.Time(id,ns_elapsed,location_info));
var _QMARK_pulled_times = (function (){while(true){
var old_times = cljs.core.deref(acc);
var new_times = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old_times,new_time);
if((cljs.core.count(new_times) <= nmax)){
if(cljs.core.compare_and_set_BANG_(acc,old_times,new_times)){
return null;
} else {
continue;
}
} else {
if(cljs.core.compare_and_set_BANG_(acc,old_times,null)){
return new_times;
} else {
continue;
}
}
break;
}
})();
var temp__5804__auto__ = _QMARK_pulled_times;
if(cljs.core.truth_(temp__5804__auto__)){
var times = temp__5804__auto__;
var t0 = taoensso.encore.now_nano();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pstate_,((function (pd,id,ns_elapsed,location_info,t0,times,temp__5804__auto__,new_time,_QMARK_pulled_times,nmax,pstate_,pstate,acc){
return (function (pstate__$1){
return (taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4 ? taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4(pstate__$1,times,nmax,true) : taoensso.tufte.impl.compact_pstate.call(null, pstate__$1,times,nmax,true));
});})(pd,id,ns_elapsed,location_info,t0,times,temp__5804__auto__,new_time,_QMARK_pulled_times,nmax,pstate_,pstate,acc))
);

var G__16570 = pd;
var G__16571 = new cljs.core.Keyword("tufte","compaction","tufte/compaction",357384907);
var G__16572 = (taoensso.encore.now_nano() - t0);
var G__16573 = null;
pd = G__16570;
id = G__16571;
ns_elapsed = G__16572;
location_info = G__16573;
continue;
} else {
return null;
}
} else {
acc.push((new taoensso.tufte.impl.Time(id,ns_elapsed,location_info)));

if((acc.length > nmax)){
var t0 = taoensso.encore.now_nano();
cljs.core.vreset_BANG_(pstate_,(taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4 ? taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4(pstate,acc,nmax,false) : taoensso.tufte.impl.compact_pstate.call(null, pstate,acc,nmax,false)));

var G__16574 = pd;
var G__16575 = new cljs.core.Keyword("tufte","compaction","tufte/compaction",357384907);
var G__16576 = (taoensso.encore.now_nano() - t0);
var G__16577 = null;
pd = G__16574;
id = G__16575;
ns_elapsed = G__16576;
location_info = G__16577;
continue;
} else {
return null;
}
}
break;
}
});
taoensso.tufte.impl.compact_pstate = (function taoensso$tufte$impl$compact_pstate(pstate,pulled_times,nmax,dynamic_QMARK_){
var id_times = pstate.id_times;
var id_sstats = pstate.id_sstats;
var id_times__$1 = taoensso.tufte.impl.times_into_id_times(id_times,pulled_times);
var vec__16493 = cljs.core.reduce_kv((function (acc,id,times){
if((cljs.core.count(times) <= nmax)){
return acc;
} else {
var vec__16496 = acc;
var id_times__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16496,(0),null);
var id_sstats__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16496,(1),null);
var sstats_LT_times = taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(times);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_times__$2,id,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_sstats__$1,id,taoensso.tufte.impl.merge_sstats_when_needed(nmax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_sstats__$1,id),sstats_LT_times)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_times__$1,id_sstats], null),id_times__$1);
var id_times__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(0),null);
var id_sstats__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(1),null);
var new_acc = (cljs.core.truth_(dynamic_QMARK_)?pstate.acc:[]);
return (new taoensso.tufte.impl.PState(new_acc,id_times__$2,id_sstats__$1));
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.tufte !== 'undefined') && (typeof taoensso.tufte.impl !== 'undefined') && (typeof taoensso.tufte.impl.handlers_ !== 'undefined')){
} else {
/**
 * {<hid> <handler-fn>}
 */
taoensso.tufte.impl.handlers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
taoensso.tufte.impl.handle_blocking_BANG_ = (function taoensso$tufte$impl$handle_blocking_BANG_(m){
return taoensso.encore.run_kv_BANG_((function (id,f){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null, m));
}catch (e16499){var e = e16499;
try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["WARNING: Uncaught Tufte `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"` handler error\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], 0));
}catch (e16500){var _ = e16500;
return null;
}}}),cljs.core.deref(taoensso.tufte.impl.handlers_));
});
taoensso.tufte.impl.handle_BANG_ = (function taoensso$tufte$impl$handle_BANG_(m){
taoensso.tufte.impl.handle_blocking_BANG_(m);

return null;
});

//# sourceMappingURL=taoensso.tufte.impl.js.map
