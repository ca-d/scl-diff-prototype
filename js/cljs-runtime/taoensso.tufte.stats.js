import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./taoensso.encore.js";
import "./goog.array.array.js";
goog.provide('taoensso.tufte.stats');
goog.scope(function(){
  taoensso.tufte.stats.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IReduce}
*/
taoensso.tufte.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedLongs.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["SortedLongs[len=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a.length),"]"].join('');
}));

(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
return (self__.a[idx]);
}));

(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,idx,not_found){
var self__ = this;
var ___$1 = this;
var max_idx = (self__.a.length - (1));
if((idx > max_idx)){
return not_found;
} else {
if((idx < max_idx)){
return not_found;
} else {
return (self__.a[idx]);
}
}
}));

(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,i){
var G__15326 = acc;
var G__15327 = (self__.a[i]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15326,G__15327) : f.call(null, G__15326,G__15327));
}),init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(self__.a.length));
}));

(taoensso.tufte.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedLongs.
 */
taoensso.tufte.stats.__GT_SortedLongs = (function taoensso$tufte$stats$__GT_SortedLongs(a){
return (new taoensso.tufte.stats.SortedLongs(a));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IReduce}
*/
taoensso.tufte.stats.SortedDoubles = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedDoubles.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["SortedDoubles[len=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a.length),"]"].join('');
}));

(taoensso.tufte.stats.SortedDoubles.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedDoubles.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
return (self__.a[idx]);
}));

(taoensso.tufte.stats.SortedDoubles.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,idx,not_found){
var self__ = this;
var ___$1 = this;
var max_idx = (self__.a.length - (1));
if((idx > max_idx)){
return not_found;
} else {
if((idx < max_idx)){
return not_found;
} else {
return (self__.a[idx]);
}
}
}));

(taoensso.tufte.stats.SortedDoubles.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,i){
var G__15330 = acc;
var G__15331 = (self__.a[i]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15330,G__15331) : f.call(null, G__15330,G__15331));
}),init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(self__.a.length));
}));

(taoensso.tufte.stats.SortedDoubles.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null))], null);
}));

(taoensso.tufte.stats.SortedDoubles.cljs$lang$type = true);

(taoensso.tufte.stats.SortedDoubles.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedDoubles");

(taoensso.tufte.stats.SortedDoubles.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.stats/SortedDoubles");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedDoubles.
 */
taoensso.tufte.stats.__GT_SortedDoubles = (function taoensso$tufte$stats$__GT_SortedDoubles(a){
return (new taoensso.tufte.stats.SortedDoubles(a));
});

taoensso.tufte.stats.sorted_longs_QMARK_ = (function taoensso$tufte$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedLongs);
});
taoensso.tufte.stats.sorted_doubles_QMARK_ = (function taoensso$tufte$stats$sorted_doubles_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedDoubles);
});
taoensso.tufte.stats.sorted_nums_QMARK_ = (function taoensso$tufte$stats$sorted_nums_QMARK_(x){
return ((taoensso.tufte.stats.sorted_longs_QMARK_(x)) || (taoensso.tufte.stats.sorted_doubles_QMARK_(x)));
});
/**
 * Returns `SortedLongs` given `SortedLongs`, `SortedDoubles`, or num seq.
 */
taoensso.tufte.stats.sorted_longs = (function taoensso$tufte$stats$sorted_longs(var_args){
var G__15335 = arguments.length;
switch (G__15335) {
case 1:
return taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2(false,nums);
}));

(taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2 = (function (allow_mutation_QMARK_,nums){
if(taoensso.tufte.stats.sorted_longs_QMARK_(nums)){
return nums;
} else {
if(taoensso.tufte.stats.sorted_doubles_QMARK_(nums)){
return (new taoensso.tufte.stats.SortedLongs(cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(nums.a)));
} else {
var a = ((cljs.core.array_QMARK_(nums))?(cljs.core.truth_(allow_mutation_QMARK_)?nums:cljs.core.aclone(nums)):cljs.core.to_array(nums));
taoensso.tufte.stats.goog$module$goog$array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
}
}));

(taoensso.tufte.stats.sorted_longs.cljs$lang$maxFixedArity = 2);

/**
 * Returns `SortedDoubles` given `SortedDoubles`, `SortedLongs`, or num seq.
 */
taoensso.tufte.stats.sorted_doubles = (function taoensso$tufte$stats$sorted_doubles(var_args){
var G__15339 = arguments.length;
switch (G__15339) {
case 1:
return taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2(false,nums);
}));

(taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2 = (function (allow_mutation_QMARK_,nums){
if(taoensso.tufte.stats.sorted_doubles_QMARK_(nums)){
return nums;
} else {
if(taoensso.tufte.stats.sorted_longs_QMARK_(nums)){
return (new taoensso.tufte.stats.SortedDoubles(cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(nums.a)));
} else {
var a = ((cljs.core.array_QMARK_(nums))?(cljs.core.truth_(allow_mutation_QMARK_)?nums:cljs.core.aclone(nums)):cljs.core.to_array(nums));
taoensso.tufte.stats.goog$module$goog$array.sort(a);

return (new taoensso.tufte.stats.SortedDoubles(a));
}
}
}));

(taoensso.tufte.stats.sorted_doubles.cljs$lang$maxFixedArity = 2);

taoensso.tufte.stats.fast_first = (function taoensso$tufte$stats$fast_first(x){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null);
});
taoensso.tufte.stats.float_num_QMARK_ = (function taoensso$tufte$stats$float_num_QMARK_(x){
return ((typeof x === 'number') && ((!((parseFloat(x) === parseInt(x,(10)))))));
});
/**
 * Returns `SortedLongs` or `SortedDoubles`,
 *  given `SortedLongs`, `SortedDoubles`, or num seq.
 */
taoensso.tufte.stats.sorted_nums = (function taoensso$tufte$stats$sorted_nums(var_args){
var G__15343 = arguments.length;
switch (G__15343) {
case 1:
return taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2(false,nums);
}));

(taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2 = (function (allow_mutation_QMARK_,nums){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nums], null);

if(taoensso.tufte.stats.sorted_longs_QMARK_(nums)){
return nums;
} else {
if(taoensso.tufte.stats.sorted_doubles_QMARK_(nums)){
return nums;
} else {
if(cljs.core.truth_((function (){var temp__5804__auto__ = taoensso.tufte.stats.fast_first(nums);
if(cljs.core.truth_(temp__5804__auto__)){
var n1 = temp__5804__auto__;
return taoensso.tufte.stats.float_num_QMARK_(n1);
} else {
return null;
}
})())){
return taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2(allow_mutation_QMARK_,nums);
} else {
return taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2(allow_mutation_QMARK_,nums);
}
}
}
}));

(taoensso.tufte.stats.sorted_nums.cljs$lang$maxFixedArity = 2);

/**
 * Returns interpolated nth numerical value.
 */
taoensso.tufte.stats.weighted_nth = (function taoensso$tufte$stats$weighted_nth(idx,nums){
var idx__$1 = idx;
var idx_floor = Math.floor(idx__$1);
var idx_ceil = Math.ceil(idx__$1);
if((idx_ceil === idx_floor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nums,(idx__$1 | (0)));
} else {
var weight_floor = (idx_ceil - idx__$1);
var weight_ceil = ((1) - weight_floor);
return ((weight_floor * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nums,(idx_floor | (0)))) + (weight_ceil * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nums,(idx_ceil | (0)))));
}
});
/**
 * Returns ?element.
 */
taoensso.tufte.stats.percentile = (function taoensso$tufte$stats$percentile(pnum,nums){
var snums = taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1(nums);
var max_idx = (cljs.core.count(snums) - (1));
if((max_idx >= (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * taoensso.encore.as_pnum_BANG_(pnum))));
} else {
return null;
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max] elements in:
 *  - O(1) for Sorted types (SortedLongs, SortedDoubles),
 *  - O(n.log_n) otherwise.
 */
taoensso.tufte.stats.percentiles = (function taoensso$tufte$stats$percentiles(nums){
var snums = taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1(nums);
var max_idx = (cljs.core.count(snums) - (1));
if((max_idx >= (0))){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.25))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.5))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.75))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.9))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.95))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.99))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,max_idx)], null);
} else {
return null;
}
});
taoensso.tufte.stats.bessel_correction = (function taoensso$tufte$stats$bessel_correction(n,add){
return (n + add);
});
taoensso.tufte.stats.rf_sum = (function taoensso$tufte$stats$rf_sum(acc,in$){
return (acc + in$);
});
taoensso.tufte.stats.rf_sum_variance = (function taoensso$tufte$stats$rf_sum_variance(xbar,acc,x){
return (acc + Math.pow((x - xbar),2.0));
});
taoensso.tufte.stats.rf_sum_abs_deviation = (function taoensso$tufte$stats$rf_sum_abs_deviation(central_point,acc,x){
return (acc + Math.abs((x - central_point)));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.stats.SummaryStats = (function (xfloats_QMARK_,nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum){
this.xfloats_QMARK_ = xfloats_QMARK_;
this.nx = nx;
this.xsum = xsum;
this.xmin = xmin;
this.xmax = xmax;
this.xlast = xlast;
this.p25 = p25;
this.p50 = p50;
this.p75 = p75;
this.p90 = p90;
this.p95 = p95;
this.p99 = p99;
this.xvar_sum = xvar_sum;
this.xmad_sum = xmad_sum;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SummaryStats.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["SummaryStats[n=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.nx),"]"].join('');
}));

(taoensso.tufte.stats.SummaryStats.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (taoensso.tufte.stats.deref_sstats.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.stats.deref_sstats.cljs$core$IFn$_invoke$arity$1(this$__$1) : taoensso.tufte.stats.deref_sstats.call(null, this$__$1));
}));

(taoensso.tufte.stats.SummaryStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"xfloats?","xfloats?",-1045666612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nx","nx",-355904839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xsum","xsum",-1727262973,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xmin","xmin",-666991895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xmax","xmax",-955946008,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xlast","xlast",2044041055,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p25","p25",-746504108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p50","p50",140405155,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p75","p75",1087889997,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p90","p90",1954450489,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p95","p95",561546053,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p99","p99",-1061840369,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xvar-sum","xvar-sum",1779238530,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xmad-sum","xmad-sum",-1123105350,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(taoensso.tufte.stats.SummaryStats.cljs$lang$type = true);

(taoensso.tufte.stats.SummaryStats.cljs$lang$ctorStr = "taoensso.tufte.stats/SummaryStats");

(taoensso.tufte.stats.SummaryStats.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.stats/SummaryStats");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SummaryStats.
 */
taoensso.tufte.stats.__GT_SummaryStats = (function taoensso$tufte$stats$__GT_SummaryStats(xfloats_QMARK_,nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum){
return (new taoensso.tufte.stats.SummaryStats(xfloats_QMARK_,nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum));
});

taoensso.tufte.stats.deref_sstats = (function taoensso$tufte$stats$deref_sstats(ss){
var fin = (cljs.core.truth_(ss.xfloats_QMARK_)?cljs.core.double$:(function (p1__15346_SHARP_){
return Math.round(p1__15346_SHARP_);
}));
var nx = ss.nx;
if((nx > (0))){
} else {
throw (new Error("Assert failed: (pos? nx)"));
}

return cljs.core.with_meta(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"var-sum","var-sum",-1026113793)],[(function (){var G__15350 = ss.xmin;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15350) : fin.call(null, G__15350));
})(),(ss.xsum / nx),(function (){var G__15351 = ss.p75;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15351) : fin.call(null, G__15351));
})(),ss.xmad_sum,(function (){var G__15352 = ss.p99;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15352) : fin.call(null, G__15352));
})(),nx,(function (){var G__15353 = ss.p25;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15353) : fin.call(null, G__15353));
})(),(function (){var G__15354 = ss.p90;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15354) : fin.call(null, G__15354));
})(),(ss.xvar_sum / nx),(function (){var G__15356 = ss.xmax;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15356) : fin.call(null, G__15356));
})(),(ss.xmad_sum / nx),(function (){var G__15357 = ss.xlast;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15357) : fin.call(null, G__15357));
})(),(function (){var G__15358 = ss.p50;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15358) : fin.call(null, G__15358));
})(),(function (){var G__15359 = ss.xsum;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15359) : fin.call(null, G__15359));
})(),(function (){var G__15360 = ss.p95;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__15360) : fin.call(null, G__15360));
})(),ss.xvar_sum]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"floats?","floats?",1396567155),ss.xfloats_QMARK_], null));
});
/**
 * Returns true iff given a SummaryStats argument.
 */
taoensso.tufte.stats.summary_stats_QMARK_ = (function taoensso$tufte$stats$summary_stats_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SummaryStats);
});
/**
 * Given a coll of numbers or previously dereffed SummaryStats map,
 *   returns a new mergeable ?SummaryStats with:
 *  (deref ss) => {:keys [n sum min max p25 ... p99 mean var mad]}
 * 
 *   See also `summary-stats-merge`.
 */
taoensso.tufte.stats.summary_stats = (function taoensso$tufte$stats$summary_stats(var_args){
var G__15363 = arguments.length;
switch (G__15363) {
case 1:
return taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(x)){
if(taoensso.tufte.stats.summary_stats_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
var map__15365 = x;
var map__15365__$1 = cljs.core.__destructure_map(map__15365);
var last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"last","last",1105735132));
var p50 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p95 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var var_sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"var-sum","var-sum",-1026113793));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p75 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var mad_sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p99 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p25 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"max","max",61366548));
var floats_QMARK_ = (function (){var b2__12027__auto__ = cljs.core.find(opts,new cljs.core.Keyword(null,"floats?","floats?",1396567155));
if(cljs.core.truth_(b2__12027__auto__)){
var e = b2__12027__auto__;
return cljs.core.val(e);
} else {
var b2__12027__auto____$1 = cljs.core.find(cljs.core.meta(x),new cljs.core.Keyword(null,"floats?","floats?",1396567155));
if(cljs.core.truth_(b2__12027__auto____$1)){
var e = b2__12027__auto____$1;
return cljs.core.val(e);
} else {
return taoensso.tufte.stats.float_num_QMARK_(sum);
}
}
})();
return (new taoensso.tufte.stats.SummaryStats(floats_QMARK_,n,sum,min,max,last,p25,p50,p75,p90,p95,p99,var_sum,mad_sum));
} else {
var snums = (function (){var temp__5802__auto__ = cljs.core.find(opts,new cljs.core.Keyword(null,"floats?","floats?",1396567155));
if(cljs.core.truth_(temp__5802__auto__)){
var e = temp__5802__auto__;
if(cljs.core.truth_(cljs.core.val(e))){
return taoensso.tufte.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2(true,x);
} else {
return taoensso.tufte.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2(true,x);
}
} else {
return taoensso.tufte.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2(true,x);
}
})();
var nx = cljs.core.count(snums);
if((nx > (0))){
var vec__15367 = taoensso.tufte.stats.percentiles(snums);
var xmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(6),null);
var xmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(7),null);
var xsum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.stats.rf_sum,0.0,snums);
var xbar = (xsum / nx);
var xlast = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,(nx - (1)));
var vec__15370 = taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.tufte.stats.rf_sum_variance,xbar),0.0,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.tufte.stats.rf_sum_abs_deviation,xbar),0.0,snums);
var xvar_sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15370,(0),null);
var xmad_sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15370,(1),null);
return (new taoensso.tufte.stats.SummaryStats(taoensso.tufte.stats.sorted_doubles_QMARK_(snums),nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum));
} else {
return null;
}
}
}
} else {
return null;
}
}));

(taoensso.tufte.stats.summary_stats.cljs$lang$maxFixedArity = 2);

/**
 * Given one or more SummaryStats, returns a new ?SummaryStats with:
 *  (summary-stats-merge
 *     (summary-stats nums1)
 *     (summary-stats nums2))
 * 
 *  an approximatation of (summary-stats (merge nums1 nums2))
 * 
 *   Useful when you want summary stats for a large coll of numbers for which
 *   it would be infeasible/expensive to keep all numbers for accurate merging.
 */
taoensso.tufte.stats.summary_stats_merge = (function taoensso$tufte$stats$summary_stats_merge(var_args){
var G__15375 = arguments.length;
switch (G__15375) {
case 1:
return taoensso.tufte.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$1 = (function (ss1){
return ss1;
}));

(taoensso.tufte.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$2 = (function (ss1,ss2){
if(cljs.core.truth_(ss1)){
if(cljs.core.truth_(ss2)){
var ss1__$1 = ss1;
var ss2__$1 = ss2;
var nx1 = ss1__$1.nx;
var nx2 = ss2__$1.nx;
var _ = (((nx1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? nx1)"))})());
var ___$1 = (((nx2 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? nx2)"))})());
var xfloats1_QMARK_ = ss1__$1.xfloats_QMARK_;
var xsum1 = ss1__$1.xsum;
var xmin1 = ss1__$1.xmin;
var xmax1 = ss1__$1.xmax;
var p25_1 = ss1__$1.p25;
var p50_1 = ss1__$1.p50;
var p75_1 = ss1__$1.p75;
var p90_1 = ss1__$1.p90;
var p95_1 = ss1__$1.p95;
var p99_1 = ss1__$1.p99;
var xvar_sum1 = ss1__$1.xvar_sum;
var xmad_sum1 = ss1__$1.xmad_sum;
var xfloats2_QMARK_ = ss2__$1.xfloats_QMARK_;
var xsum2 = ss2__$1.xsum;
var xmin2 = ss2__$1.xmin;
var xmax2 = ss2__$1.xmax;
var xlast2 = ss2__$1.xlast;
var p25_2 = ss2__$1.p25;
var p50_2 = ss2__$1.p50;
var p75_2 = ss2__$1.p75;
var p90_2 = ss2__$1.p90;
var p95_2 = ss2__$1.p95;
var p99_2 = ss2__$1.p99;
var xvar_sum2 = ss2__$1.xvar_sum;
var xmad_sum2 = ss2__$1.xmad_sum;
var xfloats3_QMARK_ = (function (){var or__5002__auto__ = xfloats1_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return xfloats2_QMARK_;
}
})();
var nx3 = (nx1 + nx2);
var nx1_ratio = (nx1 / nx3);
var nx2_ratio = (nx2 / nx3);
var xsum3 = (xsum1 + xsum2);
var xmin3 = (((xmin1 < xmin2))?xmin1:xmin2);
var xmax3 = (((xmax1 > xmax2))?xmax1:xmax2);
var xvar_sum3 = (xvar_sum1 + xvar_sum2);
var xmad_sum3 = (xmad_sum1 + xmad_sum2);
var p25_3 = ((nx1_ratio * p25_1) + (nx2_ratio * p25_2));
var p50_3 = ((nx1_ratio * p50_1) + (nx2_ratio * p50_2));
var p75_3 = ((nx1_ratio * p75_1) + (nx2_ratio * p75_2));
var p90_3 = ((nx1_ratio * p90_1) + (nx2_ratio * p90_2));
var p95_3 = ((nx1_ratio * p95_1) + (nx2_ratio * p95_2));
var p99_3 = ((nx1_ratio * p99_1) + (nx2_ratio * p99_2));
return (new taoensso.tufte.stats.SummaryStats(xfloats3_QMARK_,nx3,xsum3,xmin3,xmax3,xlast2,p25_3,p50_3,p75_3,p90_3,p95_3,p99_3,xvar_sum3,xmad_sum3));
} else {
return ss1;
}
} else {
return ss2;
}
}));

(taoensso.tufte.stats.summary_stats_merge.cljs$lang$maxFixedArity = 2);

taoensso.tufte.stats.buf_new = (function taoensso$tufte$stats$buf_new(var_args){
var G__15380 = arguments.length;
switch (G__15380) {
case 0:
return taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
}));

(taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$1 = (function (init){
if(cljs.core.truth_(init)){
return [init];
} else {
return [];
}
}));

(taoensso.tufte.stats.buf_new.cljs$lang$maxFixedArity = 1);

taoensso.tufte.stats.buf_add = (function taoensso$tufte$stats$buf_add(buf,x){
return buf.push(x);
});
taoensso.tufte.stats.buf_len = (function taoensso$tufte$stats$buf_len(buf){
return buf.length;
});

/**
 * @interface
 */
taoensso.tufte.stats.ISummaryStatsBuffered = function(){};

var taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$dyn_15668 = (function() {
var G__15669 = null;
var G__15669__1 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.tufte.stats.ssb_deref[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.tufte.stats.ssb_deref["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-deref",_);
}
}
});
var G__15669__2 = (function (_,flush_buffer_QMARK_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.tufte.stats.ssb_deref[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,flush_buffer_QMARK_) : m__5351__auto__.call(null, _,flush_buffer_QMARK_));
} else {
var m__5349__auto__ = (taoensso.tufte.stats.ssb_deref["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,flush_buffer_QMARK_) : m__5349__auto__.call(null, _,flush_buffer_QMARK_));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-deref",_);
}
}
});
G__15669 = function(_,flush_buffer_QMARK_){
switch(arguments.length){
case 1:
return G__15669__1.call(this,_);
case 2:
return G__15669__2.call(this,_,flush_buffer_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15669.cljs$core$IFn$_invoke$arity$1 = G__15669__1;
G__15669.cljs$core$IFn$_invoke$arity$2 = G__15669__2;
return G__15669;
})()
;
/**
 * Returns current ?sstats.
 */
taoensso.tufte.stats.ssb_deref = (function taoensso$tufte$stats$ssb_deref(var_args){
var G__15390 = arguments.length;
switch (G__15390) {
case 1:
return taoensso.tufte.stats.ssb_deref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.stats.ssb_deref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.ssb_deref.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$1 == null)))))){
return _.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$1(_);
} else {
return taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$dyn_15668(_);
}
}));

(taoensso.tufte.stats.ssb_deref.cljs$core$IFn$_invoke$arity$2 = (function (_,flush_buffer_QMARK_){
if((((!((_ == null)))) && ((!((_.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$2 == null)))))){
return _.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$2(_,flush_buffer_QMARK_);
} else {
return taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$dyn_15668(_,flush_buffer_QMARK_);
}
}));

(taoensso.tufte.stats.ssb_deref.cljs$lang$maxFixedArity = 2);


var taoensso$tufte$stats$ISummaryStatsBuffered$ssb_clear$dyn_15682 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.tufte.stats.ssb_clear[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.tufte.stats.ssb_clear["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-clear",_);
}
}
});
/**
 * Clears all internal state and returns nil.
 */
taoensso.tufte.stats.ssb_clear = (function taoensso$tufte$stats$ssb_clear(_){
if((((!((_ == null)))) && ((!((_.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_clear$arity$1 == null)))))){
return _.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_clear$arity$1(_);
} else {
return taoensso$tufte$stats$ISummaryStatsBuffered$ssb_clear$dyn_15682(_);
}
});

var taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$dyn_15683 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.tufte.stats.ssb_flush[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.tufte.stats.ssb_flush["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-flush",_);
}
}
});
/**
 * Flushes internal buffer and returns newly merged sstats or nil.
 */
taoensso.tufte.stats.ssb_flush = (function taoensso$tufte$stats$ssb_flush(_){
if((((!((_ == null)))) && ((!((_.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$arity$1 == null)))))){
return _.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$arity$1(_);
} else {
return taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$dyn_15683(_);
}
});

var taoensso$tufte$stats$ISummaryStatsBuffered$ssb_push$dyn_15685 = (function (_,n){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.tufte.stats.ssb_push[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5351__auto__.call(null, _,n));
} else {
var m__5349__auto__ = (taoensso.tufte.stats.ssb_push["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5349__auto__.call(null, _,n));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-push",_);
}
}
});
/**
 * Adds given num to internal buffer.
 */
taoensso.tufte.stats.ssb_push = (function taoensso$tufte$stats$ssb_push(_,n){
if((((!((_ == null)))) && ((!((_.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_push$arity$2 == null)))))){
return _.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_push$arity$2(_,n);
} else {
return taoensso$tufte$stats$ISummaryStatsBuffered$ssb_push$dyn_15685(_,n);
}
});

/**
 * Clears internal state (incl. stats and buffers, etc.) for given
 *   stateful SummaryStats instance and returns nil.
 */
taoensso.tufte.stats.summary_stats_clear_BANG_ = (function taoensso$tufte$stats$summary_stats_clear_BANG_(stateful_summary_stats){
return taoensso.tufte.stats.ssb_clear(stateful_summary_stats);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {taoensso.tufte.stats.ISummaryStatsBuffered}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.stats.SummaryStatsBuffered = (function (sstats_,buf_,buf_size,merge_counter,merge_cb){
this.sstats_ = sstats_;
this.buf_ = buf_;
this.buf_size = buf_size;
this.merge_counter = merge_counter;
this.merge_cb = merge_cb;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SummaryStatsBuffered.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["SummaryStatsBuffered[n=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.sstats_),new cljs.core.Keyword(null,"n","n",562130025),(0))),", pending=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.buf_len(cljs.core.deref(self__.buf_))),(function (){var temp__5804__auto__ = self__.merge_counter;
if(cljs.core.truth_(temp__5804__auto__)){
var mc = temp__5804__auto__;
return [", merged=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mc))].join('');
} else {
return null;
}
})(),"]"].join('');
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$1(null, );
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__15405 = (arguments.length - (1));
switch (G__15405) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.apply = (function (self__,args15403){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15403)));
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var this$ = this;
return this$.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_push$arity$2(null, n);
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.taoensso$tufte$stats$ISummaryStatsBuffered$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$2(null, true);
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_deref$arity$2 = (function (this$,flush_buffer_QMARK_){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (function (){var and__5000__auto__ = flush_buffer_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return this$__$1.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(self__.sstats_);
}
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_clear$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.buf_,taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$0());

cljs.core.reset_BANG_(self__.sstats_,null);

var temp__5804__auto___15693 = self__.merge_counter;
if(cljs.core.truth_(temp__5804__auto___15693)){
var mc_15694 = temp__5804__auto___15693;
(mc_15694.cljs$core$IFn$_invoke$arity$2 ? mc_15694.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set","set",304602554),(0)) : mc_15694.call(null, new cljs.core.Keyword(null,"set","set",304602554),(0)));
} else {
}

return null;
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__15410 = cljs.core.reset_vals_BANG_(self__.buf_,taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$1(null));
var drained = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410,(0),null);
if((taoensso.tufte.stats.buf_len(drained) === (0))){
return null;
} else {
var t0 = (cljs.core.truth_(self__.merge_cb)?taoensso.encore.now_nano():null);
var _ = (function (){var temp__5804__auto__ = self__.merge_counter;
if(cljs.core.truth_(temp__5804__auto__)){
var mc = temp__5804__auto__;
return (mc.cljs$core$IFn$_invoke$arity$0 ? mc.cljs$core$IFn$_invoke$arity$0() : mc.call(null, ));
} else {
return null;
}
})();
var sstats_drained = taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(drained);
var sstats_merged = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.sstats_,taoensso.tufte.stats.summary_stats_merge,sstats_drained);
if(cljs.core.truth_(self__.merge_cb)){
var G__15414_15697 = this$__$1;
var G__15415_15698 = (taoensso.encore.now_nano() - t0);
(self__.merge_cb.cljs$core$IFn$_invoke$arity$2 ? self__.merge_cb.cljs$core$IFn$_invoke$arity$2(G__15414_15697,G__15415_15698) : self__.merge_cb.call(null, G__15414_15697,G__15415_15698));
} else {
}

return sstats_merged;
}
}));

(taoensso.tufte.stats.SummaryStatsBuffered.prototype.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_push$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
taoensso.tufte.stats.buf_add(cljs.core.deref(self__.buf_),n);

var temp__5804__auto___15700 = self__.buf_size;
if(cljs.core.truth_(temp__5804__auto___15700)){
var nmax_15701 = temp__5804__auto___15700;
if((taoensso.tufte.stats.buf_len(cljs.core.deref(self__.buf_)) > nmax_15701)){
this$__$1.taoensso$tufte$stats$ISummaryStatsBuffered$ssb_flush$arity$1(null, );
} else {
}
} else {
}

return null;
}));

(taoensso.tufte.stats.SummaryStatsBuffered.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sstats_","sstats_",-1678756230,null),new cljs.core.Symbol(null,"buf_","buf_",-495739085,null),new cljs.core.Symbol(null,"buf-size","buf-size",828478350,null),new cljs.core.Symbol(null,"merge-counter","merge-counter",-694937119,null),new cljs.core.Symbol(null,"merge-cb","merge-cb",692712502,null)], null);
}));

(taoensso.tufte.stats.SummaryStatsBuffered.cljs$lang$type = true);

(taoensso.tufte.stats.SummaryStatsBuffered.cljs$lang$ctorStr = "taoensso.tufte.stats/SummaryStatsBuffered");

(taoensso.tufte.stats.SummaryStatsBuffered.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.tufte.stats/SummaryStatsBuffered");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SummaryStatsBuffered.
 */
taoensso.tufte.stats.__GT_SummaryStatsBuffered = (function taoensso$tufte$stats$__GT_SummaryStatsBuffered(sstats_,buf_,buf_size,merge_counter,merge_cb){
return (new taoensso.tufte.stats.SummaryStatsBuffered(sstats_,buf_,buf_size,merge_counter,merge_cb));
});

/**
 * Returns a new stateful SummaryStatsBuffered with:
 *  (ssb <num>) => Adds given number to internal buffer.
 *  (deref ssb) => Flushes buffer if necessary, and returns a mergeable
 *                 ?SummaryStats. Deref again to get a map of summary
 *                 stats for all numbers ever added to ssb:
 *                   {:keys [n sum min max p25 ... p99 mean var mad]}.
 * 
 *   Useful for summarizing a (possibly infinite) stream of numbers.
 * 
 *   Options:
 *  :buffer-size - The maximum number of numbers that may be buffered
 *                 before next (ssb <num>) call will block to flush
 *                 buffer and merge with any existing summary stats.
 * 
 *                 Larger buffers mean better performance and more
 *                 accurate stats, at the cost of more memory use
 *                 while buffering.
 * 
 *  :buffer-init - Initial buffer content, useful for persistent ssb.
 *  :sstats-init - Initial summary stats,  useful for persistent ssb.
 */
taoensso.tufte.stats.summary_stats_buffered = (function taoensso$tufte$stats$summary_stats_buffered(var_args){
var G__15421 = arguments.length;
switch (G__15421) {
case 0:
return taoensso.tufte.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.tufte.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$1 = (function (p__15422){
var map__15423 = p__15422;
var map__15423__$1 = cljs.core.__destructure_map(map__15423);
var opts = map__15423__$1;
var buffer_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15423__$1,new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),100000.0);
var buffer_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15423__$1,new cljs.core.Keyword(null,"buffer-init","buffer-init",-1144679333));
var sstats_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15423__$1,new cljs.core.Keyword(null,"sstats-init","sstats-init",689628975));
var merge_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15423__$1,new cljs.core.Keyword(null,"merge-cb","merge-cb",-947819025));
return (new taoensso.tufte.stats.SummaryStatsBuffered(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(sstats_init)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$1(buffer_init)),cljs.core.long$(buffer_size),taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0(),merge_cb));
}));

(taoensso.tufte.stats.summary_stats_buffered.cljs$lang$maxFixedArity = 1);

/**
 * Returns fastest possible SummaryStatsBuffered.
 */
taoensso.tufte.stats.summary_stats_buffered_fast = (function taoensso$tufte$stats$summary_stats_buffered_fast(buffer_size,merge_cb){
return (new taoensso.tufte.stats.SummaryStatsBuffered(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.buf_new.cljs$core$IFn$_invoke$arity$0()),buffer_size,null,merge_cb));
});
/**
 * Returns true iff given a SummaryStatsBuffered instance.
 */
taoensso.tufte.stats.summary_stats_buffered_QMARK_ = (function taoensso$tufte$stats$summary_stats_buffered_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SummaryStatsBuffered);
});
/**
 * Returns true iff given a stateful SummaryStats instance.
 */
taoensso.tufte.stats.summary_stats_stateful_QMARK_ = (function taoensso$tufte$stats$summary_stats_stateful_QMARK_(x){
return taoensso.tufte.stats.summary_stats_buffered_QMARK_(x);
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((n / d) * 100.0))),"%"].join('');
});
taoensso.tufte.stats._STAR_fmt_opts_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decimal-separator","decimal-separator",-1983110898),".",new cljs.core.Keyword(null,"thousands-separator","thousands-separator",-1818636599),","], null);
taoensso.tufte.stats.fmt_num = (function taoensso$tufte$stats$fmt_num(precision,n){
var n__$1 = taoensso.encore.roundn(precision,n);
var neg_QMARK_ = (n__$1 < (0));
var n_abs = Math.abs(n__$1);
var n_int_part = cljs.core.long$(n_abs);
var fmt_opts = taoensso.tufte.stats._STAR_fmt_opts_STAR_;
return [((neg_QMARK_)?"-":null),clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fmt_opts,new cljs.core.Keyword(null,"thousands-separator","thousands-separator",-1818636599)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),"",cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_int_part)))))),(function (){var temp__5804__auto__ = (function (){var and__5000__auto__ = (cljs.core.long$(precision) > (0));
if(and__5000__auto__){
return (n_abs - n_int_part);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var n_dec_part = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fmt_opts,new cljs.core.Keyword(null,"decimal-separator","decimal-separator",-1983110898))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_dec_part),"000000"].join(''),(2),precision))].join('');
} else {
return null;
}
})()].join('');
});
taoensso.tufte.stats.fmt_nsecs = (function taoensso$tufte$stats$fmt_nsecs(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [taoensso.tufte.stats.fmt_num((2),(ns / 6.0E10)),"m"].join('');
} else {
if((ns >= 1.0E9)){
return [taoensso.tufte.stats.fmt_num((2),(ns / 1.0E9)),"s"].join('');
} else {
if((ns >= 1000000.0)){
return [taoensso.tufte.stats.fmt_num((0),(ns / 1000000.0)),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [taoensso.tufte.stats.fmt_num((0),(ns / 1000.0)),"\u03BCs"].join('');
} else {
return [taoensso.tufte.stats.fmt_num((0),ns),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"sum","sum",136986814)], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"sum","sum",136986814)], null);
var migrate_15711 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"sum","sum",136986814)], null);
var format_column_QMARK__15712 = cljs.core.set(taoensso.tufte.stats.all_format_columns);
var format_column_15713 = (function (column){
var z = (function (){try{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(migrate_15711,column,column);
}catch (e15442){if((e15442 instanceof Error)){
var e = e15442;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e15442;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.truth_((format_column_QMARK__15712.cljs$core$IFn$_invoke$arity$1 ? format_column_QMARK__15712.cljs$core$IFn$_invoke$arity$1(z) : format_column_QMARK__15712.call(null, z)))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e15446){if((e15446 instanceof Error)){
var e = e15446;
return e;
} else {
throw e15446;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.tufte.stats","taoensso.tufte.stats",-1353606879,null),622,35,"jar:file:/home/chrdin00/.m2/repository/com/taoensso/tufte/2.6.3/tufte-2.6.3.jar!/taoensso/tufte/stats.cljc",new cljs.core.Symbol(null,"format-column?","format-column?",266143779,null),new cljs.core.Symbol("","format-column?","/format-column?",266143779,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"migrate","migrate",1433420784,null),new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.Symbol(null,"column","column",-576213674,null)),z,e,null);
}
});
taoensso.tufte.stats.format_columns = (function taoensso$tufte$stats$format_columns(columns){
if((columns === taoensso.tufte.stats.default_format_columns)){
return taoensso.tufte.stats.default_format_columns;
} else {
if((columns === taoensso.tufte.stats.all_format_columns)){
return taoensso.tufte.stats.all_format_columns;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(format_column_15713,columns);
}
}
});
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(id_sstats_STAR_,p__15451){
var map__15452 = p__15451;
var map__15452__$1 = cljs.core.__destructure_map(map__15452);
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15452__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(id_sstats_STAR_)){
return cljs.core.reduce_kv((function (acc,id,_sstats_STAR_){
var c = cljs.core.count((format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id) : format_id_fn.call(null, id)));
if((c > acc)){
return c;
} else {
return acc;
}
}),(9),id_sstats_STAR_);
} else {
return null;
}
});
/**
 * Given {<id> <sstats>} or {<id> <sstats-map>} pstats, returns a formatted
 *   table string. Assumes nanosecond clock, and stats based on profiling id'd
 *   nanosecond times.
 */
taoensso.tufte.stats.format_pstats = (function taoensso$tufte$stats$format_pstats(clock_total,id_sstats_STAR_,p__15457){
var map__15458 = p__15457;
var map__15458__$1 = cljs.core.__destructure_map(map__15458);
var opts = map__15458__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15458__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15458__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (ss){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(taoensso.encore.force_ref(ss),new cljs.core.Keyword(null,"sum","sum",136986814));
}));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15458__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15458__$1,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373));
if(cljs.core.truth_(id_sstats_STAR_)){
var columns__$1 = taoensso.tufte.stats.format_columns(columns);
var clock_total__$1 = cljs.core.long$(clock_total);
var accounted_total = cljs.core.reduce_kv((function (acc,_id,ss){
return (acc + cljs.core.long$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(taoensso.encore.force_ref(ss),new cljs.core.Keyword(null,"sum","sum",136986814))));
}),(0),id_sstats_STAR_);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__15463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_sstats_STAR_,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__15463) : sort_fn.call(null, G__15463));
}),taoensso.encore.rcompare,cljs.core.keys(id_sstats_STAR_));
var max_id_width__$1 = (function (){var or__5002__auto__ = max_id_width;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width(id_sstats_STAR_,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"pId",new cljs.core.Keyword(null,"min-width","min-width",1926193728),max_id_width__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"MAD",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Total",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1("");
var append_col = (function (column,s){
var map__15465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,column);
var map__15465__$1 = cljs.core.__destructure_map(map__15465);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15465__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(10));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15465__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__15470 = align;
var G__15470__$1 = (((G__15470 instanceof cljs.core.Keyword))?G__15470.fqn:null);
switch (G__15470__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15470__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)));
});
var seq__15471_15730 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),columns__$1));
var chunk__15472_15731 = null;
var count__15473_15732 = (0);
var i__15474_15733 = (0);
while(true){
if((i__15474_15733 < count__15473_15732)){
var column_15734 = chunk__15472_15731.cljs$core$IIndexed$_nth$arity$2(null, i__15474_15733);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_15734)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_15734,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15734,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__15735 = seq__15471_15730;
var G__15736 = chunk__15472_15731;
var G__15737 = count__15473_15732;
var G__15738 = (i__15474_15733 + (1));
seq__15471_15730 = G__15735;
chunk__15472_15731 = G__15736;
count__15473_15732 = G__15737;
i__15474_15733 = G__15738;
continue;
} else {
var temp__5804__auto___15740 = cljs.core.seq(seq__15471_15730);
if(temp__5804__auto___15740){
var seq__15471_15741__$1 = temp__5804__auto___15740;
if(cljs.core.chunked_seq_QMARK_(seq__15471_15741__$1)){
var c__5525__auto___15742 = cljs.core.chunk_first(seq__15471_15741__$1);
var G__15743 = cljs.core.chunk_rest(seq__15471_15741__$1);
var G__15744 = c__5525__auto___15742;
var G__15745 = cljs.core.count(c__5525__auto___15742);
var G__15746 = (0);
seq__15471_15730 = G__15743;
chunk__15472_15731 = G__15744;
count__15473_15732 = G__15745;
i__15474_15733 = G__15746;
continue;
} else {
var column_15748 = cljs.core.first(seq__15471_15741__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_15748)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_15748,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_15748,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__15749 = cljs.core.next(seq__15471_15741__$1);
var G__15751 = null;
var G__15752 = (0);
var G__15753 = (0);
seq__15471_15730 = G__15749;
chunk__15472_15731 = G__15751;
count__15473_15732 = G__15752;
i__15474_15733 = G__15753;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n\n");

var seq__15477_15755 = cljs.core.seq(sorted_ids);
var chunk__15478_15756 = null;
var count__15479_15757 = (0);
var i__15480_15758 = (0);
while(true){
if((i__15480_15758 < count__15479_15757)){
var id_15759 = chunk__15478_15756.cljs$core$IIndexed$_nth$arity$2(null, i__15480_15758);
var ssm_15762 = taoensso.encore.force_ref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_sstats_STAR_,id_15759));
var map__15520_15763 = ssm_15762;
var map__15520_15764__$1 = cljs.core.__destructure_map(map__15520_15763);
var n_15765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520_15764__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sum_15766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520_15764__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_15767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520_15764__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var mad_15768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520_15764__$1,new cljs.core.Keyword(null,"mad","mad",-1963165801));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_15759) : format_id_fn.call(null, id_15759)));

var seq__15522_15769 = cljs.core.seq(columns__$1);
var chunk__15523_15770 = null;
var count__15524_15771 = (0);
var i__15525_15772 = (0);
while(true){
if((i__15525_15772 < count__15524_15771)){
var column_15773 = chunk__15523_15770.cljs$core$IIndexed$_nth$arity$2(null, i__15525_15772);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15533_15774 = column_15773;
var G__15533_15775__$1 = (((G__15533_15774 instanceof cljs.core.Keyword))?G__15533_15774.fqn:null);
switch (G__15533_15775__$1) {
case "n":
append_col(column_15773,taoensso.tufte.stats.fmt_num((0),n_15765));

break;
case "mean":
append_col(column_15773,taoensso.tufte.stats.fmt_nsecs(mean_15767));

break;
case "mad":
append_col(column_15773,["\u00B1",taoensso.tufte.stats.perc(mad_15768,mean_15767)].join(''));

break;
case "sum":
append_col(column_15773,taoensso.tufte.stats.perc(sum_15766,clock_total__$1));

break;
case "clock":
append_col(column_15773,taoensso.tufte.stats.fmt_nsecs(sum_15766));

break;
default:
append_col(column_15773,taoensso.tufte.stats.fmt_nsecs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ssm_15762,column_15773)));

}


var G__15778 = seq__15522_15769;
var G__15779 = chunk__15523_15770;
var G__15780 = count__15524_15771;
var G__15781 = (i__15525_15772 + (1));
seq__15522_15769 = G__15778;
chunk__15523_15770 = G__15779;
count__15524_15771 = G__15780;
i__15525_15772 = G__15781;
continue;
} else {
var temp__5804__auto___15782 = cljs.core.seq(seq__15522_15769);
if(temp__5804__auto___15782){
var seq__15522_15784__$1 = temp__5804__auto___15782;
if(cljs.core.chunked_seq_QMARK_(seq__15522_15784__$1)){
var c__5525__auto___15785 = cljs.core.chunk_first(seq__15522_15784__$1);
var G__15786 = cljs.core.chunk_rest(seq__15522_15784__$1);
var G__15787 = c__5525__auto___15785;
var G__15788 = cljs.core.count(c__5525__auto___15785);
var G__15789 = (0);
seq__15522_15769 = G__15786;
chunk__15523_15770 = G__15787;
count__15524_15771 = G__15788;
i__15525_15772 = G__15789;
continue;
} else {
var column_15790 = cljs.core.first(seq__15522_15784__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15540_15791 = column_15790;
var G__15540_15792__$1 = (((G__15540_15791 instanceof cljs.core.Keyword))?G__15540_15791.fqn:null);
switch (G__15540_15792__$1) {
case "n":
append_col(column_15790,taoensso.tufte.stats.fmt_num((0),n_15765));

break;
case "mean":
append_col(column_15790,taoensso.tufte.stats.fmt_nsecs(mean_15767));

break;
case "mad":
append_col(column_15790,["\u00B1",taoensso.tufte.stats.perc(mad_15768,mean_15767)].join(''));

break;
case "sum":
append_col(column_15790,taoensso.tufte.stats.perc(sum_15766,clock_total__$1));

break;
case "clock":
append_col(column_15790,taoensso.tufte.stats.fmt_nsecs(sum_15766));

break;
default:
append_col(column_15790,taoensso.tufte.stats.fmt_nsecs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ssm_15762,column_15790)));

}


var G__15800 = cljs.core.next(seq__15522_15784__$1);
var G__15801 = null;
var G__15802 = (0);
var G__15803 = (0);
seq__15522_15769 = G__15800;
chunk__15523_15770 = G__15801;
count__15524_15771 = G__15802;
i__15525_15772 = G__15803;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__15806 = seq__15477_15755;
var G__15807 = chunk__15478_15756;
var G__15808 = count__15479_15757;
var G__15809 = (i__15480_15758 + (1));
seq__15477_15755 = G__15806;
chunk__15478_15756 = G__15807;
count__15479_15757 = G__15808;
i__15480_15758 = G__15809;
continue;
} else {
var temp__5804__auto___15812 = cljs.core.seq(seq__15477_15755);
if(temp__5804__auto___15812){
var seq__15477_15813__$1 = temp__5804__auto___15812;
if(cljs.core.chunked_seq_QMARK_(seq__15477_15813__$1)){
var c__5525__auto___15814 = cljs.core.chunk_first(seq__15477_15813__$1);
var G__15815 = cljs.core.chunk_rest(seq__15477_15813__$1);
var G__15816 = c__5525__auto___15814;
var G__15817 = cljs.core.count(c__5525__auto___15814);
var G__15818 = (0);
seq__15477_15755 = G__15815;
chunk__15478_15756 = G__15816;
count__15479_15757 = G__15817;
i__15480_15758 = G__15818;
continue;
} else {
var id_15820 = cljs.core.first(seq__15477_15813__$1);
var ssm_15821 = taoensso.encore.force_ref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_sstats_STAR_,id_15820));
var map__15542_15822 = ssm_15821;
var map__15542_15823__$1 = cljs.core.__destructure_map(map__15542_15822);
var n_15824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15542_15823__$1,new cljs.core.Keyword(null,"n","n",562130025));
var sum_15825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15542_15823__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_15826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15542_15823__$1,new cljs.core.Keyword(null,"mean","mean",-1359234715));
var mad_15827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15542_15823__$1,new cljs.core.Keyword(null,"mad","mad",-1963165801));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_15820) : format_id_fn.call(null, id_15820)));

var seq__15543_15831 = cljs.core.seq(columns__$1);
var chunk__15544_15832 = null;
var count__15545_15833 = (0);
var i__15546_15834 = (0);
while(true){
if((i__15546_15834 < count__15545_15833)){
var column_15835 = chunk__15544_15832.cljs$core$IIndexed$_nth$arity$2(null, i__15546_15834);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15557_15836 = column_15835;
var G__15557_15837__$1 = (((G__15557_15836 instanceof cljs.core.Keyword))?G__15557_15836.fqn:null);
switch (G__15557_15837__$1) {
case "n":
append_col(column_15835,taoensso.tufte.stats.fmt_num((0),n_15824));

break;
case "mean":
append_col(column_15835,taoensso.tufte.stats.fmt_nsecs(mean_15826));

break;
case "mad":
append_col(column_15835,["\u00B1",taoensso.tufte.stats.perc(mad_15827,mean_15826)].join(''));

break;
case "sum":
append_col(column_15835,taoensso.tufte.stats.perc(sum_15825,clock_total__$1));

break;
case "clock":
append_col(column_15835,taoensso.tufte.stats.fmt_nsecs(sum_15825));

break;
default:
append_col(column_15835,taoensso.tufte.stats.fmt_nsecs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ssm_15821,column_15835)));

}


var G__15843 = seq__15543_15831;
var G__15844 = chunk__15544_15832;
var G__15845 = count__15545_15833;
var G__15846 = (i__15546_15834 + (1));
seq__15543_15831 = G__15843;
chunk__15544_15832 = G__15844;
count__15545_15833 = G__15845;
i__15546_15834 = G__15846;
continue;
} else {
var temp__5804__auto___15847__$1 = cljs.core.seq(seq__15543_15831);
if(temp__5804__auto___15847__$1){
var seq__15543_15848__$1 = temp__5804__auto___15847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15543_15848__$1)){
var c__5525__auto___15849 = cljs.core.chunk_first(seq__15543_15848__$1);
var G__15850 = cljs.core.chunk_rest(seq__15543_15848__$1);
var G__15851 = c__5525__auto___15849;
var G__15852 = cljs.core.count(c__5525__auto___15849);
var G__15853 = (0);
seq__15543_15831 = G__15850;
chunk__15544_15832 = G__15851;
count__15545_15833 = G__15852;
i__15546_15834 = G__15853;
continue;
} else {
var column_15854 = cljs.core.first(seq__15543_15848__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15564_15855 = column_15854;
var G__15564_15856__$1 = (((G__15564_15855 instanceof cljs.core.Keyword))?G__15564_15855.fqn:null);
switch (G__15564_15856__$1) {
case "n":
append_col(column_15854,taoensso.tufte.stats.fmt_num((0),n_15824));

break;
case "mean":
append_col(column_15854,taoensso.tufte.stats.fmt_nsecs(mean_15826));

break;
case "mad":
append_col(column_15854,["\u00B1",taoensso.tufte.stats.perc(mad_15827,mean_15826)].join(''));

break;
case "sum":
append_col(column_15854,taoensso.tufte.stats.perc(sum_15825,clock_total__$1));

break;
case "clock":
append_col(column_15854,taoensso.tufte.stats.fmt_nsecs(sum_15825));

break;
default:
append_col(column_15854,taoensso.tufte.stats.fmt_nsecs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ssm_15821,column_15854)));

}


var G__15859 = cljs.core.next(seq__15543_15848__$1);
var G__15860 = null;
var G__15861 = (0);
var G__15862 = (0);
seq__15543_15831 = G__15859;
chunk__15544_15832 = G__15860;
count__15545_15833 = G__15861;
i__15546_15834 = G__15862;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__15863 = cljs.core.next(seq__15477_15813__$1);
var G__15864 = null;
var G__15865 = (0);
var G__15866 = (0);
seq__15477_15755 = G__15863;
chunk__15478_15756 = G__15864;
count__15479_15757 = G__15865;
i__15480_15758 = G__15866;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Accounted");

var seq__15569_15867 = cljs.core.seq(columns__$1);
var chunk__15570_15868 = null;
var count__15571_15869 = (0);
var i__15572_15870 = (0);
while(true){
if((i__15572_15870 < count__15571_15869)){
var column_15871 = chunk__15570_15868.cljs$core$IIndexed$_nth$arity$2(null, i__15572_15870);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15576_15873 = column_15871;
var G__15576_15874__$1 = (((G__15576_15873 instanceof cljs.core.Keyword))?G__15576_15873.fqn:null);
switch (G__15576_15874__$1) {
case "sum":
append_col(column_15871,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_15871,taoensso.tufte.stats.fmt_nsecs(accounted_total));

break;
default:
append_col(column_15871,"");

}


var G__15876 = seq__15569_15867;
var G__15877 = chunk__15570_15868;
var G__15878 = count__15571_15869;
var G__15879 = (i__15572_15870 + (1));
seq__15569_15867 = G__15876;
chunk__15570_15868 = G__15877;
count__15571_15869 = G__15878;
i__15572_15870 = G__15879;
continue;
} else {
var temp__5804__auto___15880 = cljs.core.seq(seq__15569_15867);
if(temp__5804__auto___15880){
var seq__15569_15881__$1 = temp__5804__auto___15880;
if(cljs.core.chunked_seq_QMARK_(seq__15569_15881__$1)){
var c__5525__auto___15882 = cljs.core.chunk_first(seq__15569_15881__$1);
var G__15883 = cljs.core.chunk_rest(seq__15569_15881__$1);
var G__15884 = c__5525__auto___15882;
var G__15885 = cljs.core.count(c__5525__auto___15882);
var G__15886 = (0);
seq__15569_15867 = G__15883;
chunk__15570_15868 = G__15884;
count__15571_15869 = G__15885;
i__15572_15870 = G__15886;
continue;
} else {
var column_15888 = cljs.core.first(seq__15569_15881__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15578_15889 = column_15888;
var G__15578_15890__$1 = (((G__15578_15889 instanceof cljs.core.Keyword))?G__15578_15889.fqn:null);
switch (G__15578_15890__$1) {
case "sum":
append_col(column_15888,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_15888,taoensso.tufte.stats.fmt_nsecs(accounted_total));

break;
default:
append_col(column_15888,"");

}


var G__15893 = cljs.core.next(seq__15569_15881__$1);
var G__15894 = null;
var G__15895 = (0);
var G__15896 = (0);
seq__15569_15867 = G__15893;
chunk__15570_15868 = G__15894;
count__15571_15869 = G__15895;
i__15572_15870 = G__15896;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Clock");

var seq__15579_15897 = cljs.core.seq(columns__$1);
var chunk__15580_15898 = null;
var count__15581_15899 = (0);
var i__15582_15900 = (0);
while(true){
if((i__15582_15900 < count__15581_15899)){
var column_15901 = chunk__15580_15898.cljs$core$IIndexed$_nth$arity$2(null, i__15582_15900);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15585_15902 = column_15901;
var G__15585_15903__$1 = (((G__15585_15902 instanceof cljs.core.Keyword))?G__15585_15902.fqn:null);
switch (G__15585_15903__$1) {
case "sum":
append_col(column_15901,"100%");

break;
case "clock":
append_col(column_15901,taoensso.tufte.stats.fmt_nsecs(clock_total__$1));

break;
default:
append_col(column_15901,"");

}


var G__15906 = seq__15579_15897;
var G__15907 = chunk__15580_15898;
var G__15908 = count__15581_15899;
var G__15909 = (i__15582_15900 + (1));
seq__15579_15897 = G__15906;
chunk__15580_15898 = G__15907;
count__15581_15899 = G__15908;
i__15582_15900 = G__15909;
continue;
} else {
var temp__5804__auto___15910 = cljs.core.seq(seq__15579_15897);
if(temp__5804__auto___15910){
var seq__15579_15911__$1 = temp__5804__auto___15910;
if(cljs.core.chunked_seq_QMARK_(seq__15579_15911__$1)){
var c__5525__auto___15912 = cljs.core.chunk_first(seq__15579_15911__$1);
var G__15913 = cljs.core.chunk_rest(seq__15579_15911__$1);
var G__15914 = c__5525__auto___15912;
var G__15915 = cljs.core.count(c__5525__auto___15912);
var G__15916 = (0);
seq__15579_15897 = G__15913;
chunk__15580_15898 = G__15914;
count__15581_15899 = G__15915;
i__15582_15900 = G__15916;
continue;
} else {
var column_15918 = cljs.core.first(seq__15579_15911__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__15589_15919 = column_15918;
var G__15589_15920__$1 = (((G__15589_15919 instanceof cljs.core.Keyword))?G__15589_15919.fqn:null);
switch (G__15589_15920__$1) {
case "sum":
append_col(column_15918,"100%");

break;
case "clock":
append_col(column_15918,taoensso.tufte.stats.fmt_nsecs(clock_total__$1));

break;
default:
append_col(column_15918,"");

}


var G__15923 = cljs.core.next(seq__15579_15911__$1);
var G__15924 = null;
var G__15925 = (0);
var G__15926 = (0);
seq__15579_15897 = G__15923;
chunk__15580_15898 = G__15924;
count__15581_15899 = G__15925;
i__15582_15900 = G__15926;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});
taoensso.tufte.stats.summary_stats_format = taoensso.tufte.stats.format_pstats;

//# sourceMappingURL=taoensso.tufte.stats.js.map
