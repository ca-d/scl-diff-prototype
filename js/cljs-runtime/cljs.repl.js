goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18803){
var map__18804 = p__18803;
var map__18804__$1 = cljs.core.__destructure_map(map__18804);
var m = map__18804__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18804__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18813_19232 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18814_19233 = null;
var count__18815_19234 = (0);
var i__18816_19235 = (0);
while(true){
if((i__18816_19235 < count__18815_19234)){
var f_19236 = chunk__18814_19233.cljs$core$IIndexed$_nth$arity$2(null, i__18816_19235);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19236], 0));


var G__19237 = seq__18813_19232;
var G__19238 = chunk__18814_19233;
var G__19239 = count__18815_19234;
var G__19240 = (i__18816_19235 + (1));
seq__18813_19232 = G__19237;
chunk__18814_19233 = G__19238;
count__18815_19234 = G__19239;
i__18816_19235 = G__19240;
continue;
} else {
var temp__5804__auto___19241 = cljs.core.seq(seq__18813_19232);
if(temp__5804__auto___19241){
var seq__18813_19242__$1 = temp__5804__auto___19241;
if(cljs.core.chunked_seq_QMARK_(seq__18813_19242__$1)){
var c__5525__auto___19243 = cljs.core.chunk_first(seq__18813_19242__$1);
var G__19244 = cljs.core.chunk_rest(seq__18813_19242__$1);
var G__19245 = c__5525__auto___19243;
var G__19246 = cljs.core.count(c__5525__auto___19243);
var G__19247 = (0);
seq__18813_19232 = G__19244;
chunk__18814_19233 = G__19245;
count__18815_19234 = G__19246;
i__18816_19235 = G__19247;
continue;
} else {
var f_19248 = cljs.core.first(seq__18813_19242__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19248], 0));


var G__19249 = cljs.core.next(seq__18813_19242__$1);
var G__19250 = null;
var G__19251 = (0);
var G__19252 = (0);
seq__18813_19232 = G__19249;
chunk__18814_19233 = G__19250;
count__18815_19234 = G__19251;
i__18816_19235 = G__19252;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19256 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19256], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19256)))?cljs.core.second(arglists_19256):arglists_19256)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18845_19260 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18846_19261 = null;
var count__18847_19262 = (0);
var i__18848_19263 = (0);
while(true){
if((i__18848_19263 < count__18847_19262)){
var vec__18877_19264 = chunk__18846_19261.cljs$core$IIndexed$_nth$arity$2(null, i__18848_19263);
var name_19265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18877_19264,(0),null);
var map__18880_19266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18877_19264,(1),null);
var map__18880_19267__$1 = cljs.core.__destructure_map(map__18880_19266);
var doc_19268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880_19267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880_19267__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19265], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19269], 0));

if(cljs.core.truth_(doc_19268)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19268], 0));
} else {
}


var G__19270 = seq__18845_19260;
var G__19271 = chunk__18846_19261;
var G__19272 = count__18847_19262;
var G__19273 = (i__18848_19263 + (1));
seq__18845_19260 = G__19270;
chunk__18846_19261 = G__19271;
count__18847_19262 = G__19272;
i__18848_19263 = G__19273;
continue;
} else {
var temp__5804__auto___19274 = cljs.core.seq(seq__18845_19260);
if(temp__5804__auto___19274){
var seq__18845_19275__$1 = temp__5804__auto___19274;
if(cljs.core.chunked_seq_QMARK_(seq__18845_19275__$1)){
var c__5525__auto___19276 = cljs.core.chunk_first(seq__18845_19275__$1);
var G__19277 = cljs.core.chunk_rest(seq__18845_19275__$1);
var G__19278 = c__5525__auto___19276;
var G__19279 = cljs.core.count(c__5525__auto___19276);
var G__19280 = (0);
seq__18845_19260 = G__19277;
chunk__18846_19261 = G__19278;
count__18847_19262 = G__19279;
i__18848_19263 = G__19280;
continue;
} else {
var vec__18890_19281 = cljs.core.first(seq__18845_19275__$1);
var name_19282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890_19281,(0),null);
var map__18893_19283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18890_19281,(1),null);
var map__18893_19284__$1 = cljs.core.__destructure_map(map__18893_19283);
var doc_19285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18893_19284__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18893_19284__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19282], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19286], 0));

if(cljs.core.truth_(doc_19285)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19285], 0));
} else {
}


var G__19290 = cljs.core.next(seq__18845_19275__$1);
var G__19291 = null;
var G__19292 = (0);
var G__19293 = (0);
seq__18845_19260 = G__19290;
chunk__18846_19261 = G__19291;
count__18847_19262 = G__19292;
i__18848_19263 = G__19293;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18903 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18904 = null;
var count__18905 = (0);
var i__18906 = (0);
while(true){
if((i__18906 < count__18905)){
var role = chunk__18904.cljs$core$IIndexed$_nth$arity$2(null, i__18906);
var temp__5804__auto___19294__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19294__$1)){
var spec_19295 = temp__5804__auto___19294__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19295)], 0));
} else {
}


var G__19296 = seq__18903;
var G__19297 = chunk__18904;
var G__19298 = count__18905;
var G__19299 = (i__18906 + (1));
seq__18903 = G__19296;
chunk__18904 = G__19297;
count__18905 = G__19298;
i__18906 = G__19299;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18903);
if(temp__5804__auto____$1){
var seq__18903__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18903__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18903__$1);
var G__19300 = cljs.core.chunk_rest(seq__18903__$1);
var G__19301 = c__5525__auto__;
var G__19302 = cljs.core.count(c__5525__auto__);
var G__19303 = (0);
seq__18903 = G__19300;
chunk__18904 = G__19301;
count__18905 = G__19302;
i__18906 = G__19303;
continue;
} else {
var role = cljs.core.first(seq__18903__$1);
var temp__5804__auto___19304__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19304__$2)){
var spec_19305 = temp__5804__auto___19304__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19305)], 0));
} else {
}


var G__19306 = cljs.core.next(seq__18903__$1);
var G__19307 = null;
var G__19308 = (0);
var G__19309 = (0);
seq__18903 = G__19306;
chunk__18904 = G__19307;
count__18905 = G__19308;
i__18906 = G__19309;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18976 = datafied_throwable;
var map__18976__$1 = cljs.core.__destructure_map(map__18976);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18976__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18977 = cljs.core.last(via);
var map__18977__$1 = cljs.core.__destructure_map(map__18977);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18977__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18977__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18977__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18978 = data;
var map__18978__$1 = cljs.core.__destructure_map(map__18978);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18978__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18978__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18978__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18980 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18980__$1 = cljs.core.__destructure_map(map__18980);
var top_data = map__18980__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18980__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19007 = phase;
var G__19007__$1 = (((G__19007 instanceof cljs.core.Keyword))?G__19007.fqn:null);
switch (G__19007__$1) {
case "read-source":
var map__19012 = data;
var map__19012__$1 = cljs.core.__destructure_map(map__19012);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19019 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19019__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19019,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19019);
var G__19019__$2 = (cljs.core.truth_((function (){var fexpr__19034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19034.cljs$core$IFn$_invoke$arity$1 ? fexpr__19034.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19034.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19019__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19019__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19019__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19035 = top_data;
var G__19035__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19035,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19035);
var G__19035__$2 = (cljs.core.truth_((function (){var fexpr__19037 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19037.cljs$core$IFn$_invoke$arity$1 ? fexpr__19037.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19037.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19035__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19035__$1);
var G__19035__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19035__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19035__$2);
var G__19035__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19035__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19035__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19035__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19035__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19046 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(3),null);
var G__19054 = top_data;
var G__19054__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19054);
var G__19054__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19054__$1);
var G__19054__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19054__$2);
var G__19054__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19054__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19054__$4;
}

break;
case "execution":
var vec__19073 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19073,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18963_SHARP_){
var or__5002__auto__ = (p1__18963_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19080 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19080.cljs$core$IFn$_invoke$arity$1 ? fexpr__19080.cljs$core$IFn$_invoke$arity$1(p1__18963_SHARP_) : fexpr__19080.call(null, p1__18963_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19085 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19085__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19085,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19085);
var G__19085__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19085__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19085__$1);
var G__19085__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19085__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19085__$2);
var G__19085__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19085__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19085__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19085__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19085__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19007__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19096){
var map__19097 = p__19096;
var map__19097__$1 = cljs.core.__destructure_map(map__19097);
var triage_data = map__19097__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19113 = phase;
var G__19113__$1 = (((G__19113 instanceof cljs.core.Keyword))?G__19113.fqn:null);
switch (G__19113__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19114 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19115 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19116 = loc;
var G__19117 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19124_19324 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19125_19325 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19126_19326 = true;
var _STAR_print_fn_STAR__temp_val__19127_19327 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19126_19326);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19127_19327);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19093_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19093_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19125_19325);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19124_19324);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19114,G__19115,G__19116,G__19117) : format.call(null, G__19114,G__19115,G__19116,G__19117));

break;
case "macroexpansion":
var G__19146 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19148 = cause_type;
var G__19149 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19150 = loc;
var G__19151 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19146,G__19148,G__19149,G__19150,G__19151) : format.call(null, G__19146,G__19148,G__19149,G__19150,G__19151));

break;
case "compile-syntax-check":
var G__19160 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19161 = cause_type;
var G__19163 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19164 = loc;
var G__19165 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19160,G__19161,G__19163,G__19164,G__19165) : format.call(null, G__19160,G__19161,G__19163,G__19164,G__19165));

break;
case "compilation":
var G__19179 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19180 = cause_type;
var G__19181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19182 = loc;
var G__19183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19179,G__19180,G__19181,G__19182,G__19183) : format.call(null, G__19179,G__19180,G__19181,G__19182,G__19183));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19189 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19190 = symbol;
var G__19191 = loc;
var G__19192 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19195_19329 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19196_19330 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19197_19331 = true;
var _STAR_print_fn_STAR__temp_val__19198_19332 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19197_19331);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19198_19332);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19095_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19095_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19196_19330);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19195_19329);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19189,G__19190,G__19191,G__19192) : format.call(null, G__19189,G__19190,G__19191,G__19192));
} else {
var G__19209 = "Execution error%s at %s(%s).\n%s\n";
var G__19210 = cause_type;
var G__19211 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19212 = loc;
var G__19213 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19209,G__19210,G__19211,G__19212,G__19213) : format.call(null, G__19209,G__19210,G__19211,G__19212,G__19213));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19113__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
