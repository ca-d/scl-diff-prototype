goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18210){
var map__18211 = p__18210;
var map__18211__$1 = cljs.core.__destructure_map(map__18211);
var m = map__18211__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18211__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18217_18636 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18218_18637 = null;
var count__18219_18638 = (0);
var i__18220_18639 = (0);
while(true){
if((i__18220_18639 < count__18219_18638)){
var f_18641 = chunk__18218_18637.cljs$core$IIndexed$_nth$arity$2(null, i__18220_18639);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18641], 0));


var G__18642 = seq__18217_18636;
var G__18643 = chunk__18218_18637;
var G__18644 = count__18219_18638;
var G__18645 = (i__18220_18639 + (1));
seq__18217_18636 = G__18642;
chunk__18218_18637 = G__18643;
count__18219_18638 = G__18644;
i__18220_18639 = G__18645;
continue;
} else {
var temp__5804__auto___18646 = cljs.core.seq(seq__18217_18636);
if(temp__5804__auto___18646){
var seq__18217_18647__$1 = temp__5804__auto___18646;
if(cljs.core.chunked_seq_QMARK_(seq__18217_18647__$1)){
var c__5525__auto___18648 = cljs.core.chunk_first(seq__18217_18647__$1);
var G__18649 = cljs.core.chunk_rest(seq__18217_18647__$1);
var G__18650 = c__5525__auto___18648;
var G__18651 = cljs.core.count(c__5525__auto___18648);
var G__18652 = (0);
seq__18217_18636 = G__18649;
chunk__18218_18637 = G__18650;
count__18219_18638 = G__18651;
i__18220_18639 = G__18652;
continue;
} else {
var f_18653 = cljs.core.first(seq__18217_18647__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18653], 0));


var G__18655 = cljs.core.next(seq__18217_18647__$1);
var G__18656 = null;
var G__18657 = (0);
var G__18658 = (0);
seq__18217_18636 = G__18655;
chunk__18218_18637 = G__18656;
count__18219_18638 = G__18657;
i__18220_18639 = G__18658;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18660 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18660], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18660)))?cljs.core.second(arglists_18660):arglists_18660)], 0));
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
var seq__18265_18679 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18266_18680 = null;
var count__18267_18681 = (0);
var i__18268_18682 = (0);
while(true){
if((i__18268_18682 < count__18267_18681)){
var vec__18349_18686 = chunk__18266_18680.cljs$core$IIndexed$_nth$arity$2(null, i__18268_18682);
var name_18687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349_18686,(0),null);
var map__18352_18688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18349_18686,(1),null);
var map__18352_18689__$1 = cljs.core.__destructure_map(map__18352_18688);
var doc_18690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352_18689__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352_18689__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18687], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18691], 0));

if(cljs.core.truth_(doc_18690)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18690], 0));
} else {
}


var G__18698 = seq__18265_18679;
var G__18699 = chunk__18266_18680;
var G__18700 = count__18267_18681;
var G__18701 = (i__18268_18682 + (1));
seq__18265_18679 = G__18698;
chunk__18266_18680 = G__18699;
count__18267_18681 = G__18700;
i__18268_18682 = G__18701;
continue;
} else {
var temp__5804__auto___18702 = cljs.core.seq(seq__18265_18679);
if(temp__5804__auto___18702){
var seq__18265_18703__$1 = temp__5804__auto___18702;
if(cljs.core.chunked_seq_QMARK_(seq__18265_18703__$1)){
var c__5525__auto___18705 = cljs.core.chunk_first(seq__18265_18703__$1);
var G__18706 = cljs.core.chunk_rest(seq__18265_18703__$1);
var G__18707 = c__5525__auto___18705;
var G__18708 = cljs.core.count(c__5525__auto___18705);
var G__18709 = (0);
seq__18265_18679 = G__18706;
chunk__18266_18680 = G__18707;
count__18267_18681 = G__18708;
i__18268_18682 = G__18709;
continue;
} else {
var vec__18388_18711 = cljs.core.first(seq__18265_18703__$1);
var name_18712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18388_18711,(0),null);
var map__18391_18713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18388_18711,(1),null);
var map__18391_18714__$1 = cljs.core.__destructure_map(map__18391_18713);
var doc_18715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18391_18714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18391_18714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18712], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18716], 0));

if(cljs.core.truth_(doc_18715)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18715], 0));
} else {
}


var G__18719 = cljs.core.next(seq__18265_18703__$1);
var G__18720 = null;
var G__18721 = (0);
var G__18722 = (0);
seq__18265_18679 = G__18719;
chunk__18266_18680 = G__18720;
count__18267_18681 = G__18721;
i__18268_18682 = G__18722;
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

var seq__18408 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18409 = null;
var count__18410 = (0);
var i__18411 = (0);
while(true){
if((i__18411 < count__18410)){
var role = chunk__18409.cljs$core$IIndexed$_nth$arity$2(null, i__18411);
var temp__5804__auto___18729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18729__$1)){
var spec_18731 = temp__5804__auto___18729__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18731)], 0));
} else {
}


var G__18736 = seq__18408;
var G__18737 = chunk__18409;
var G__18738 = count__18410;
var G__18739 = (i__18411 + (1));
seq__18408 = G__18736;
chunk__18409 = G__18737;
count__18410 = G__18738;
i__18411 = G__18739;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18408);
if(temp__5804__auto____$1){
var seq__18408__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18408__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18408__$1);
var G__18744 = cljs.core.chunk_rest(seq__18408__$1);
var G__18745 = c__5525__auto__;
var G__18746 = cljs.core.count(c__5525__auto__);
var G__18747 = (0);
seq__18408 = G__18744;
chunk__18409 = G__18745;
count__18410 = G__18746;
i__18411 = G__18747;
continue;
} else {
var role = cljs.core.first(seq__18408__$1);
var temp__5804__auto___18750__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18750__$2)){
var spec_18752 = temp__5804__auto___18750__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18752)], 0));
} else {
}


var G__18753 = cljs.core.next(seq__18408__$1);
var G__18754 = null;
var G__18755 = (0);
var G__18756 = (0);
seq__18408 = G__18753;
chunk__18409 = G__18754;
count__18410 = G__18755;
i__18411 = G__18756;
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
var map__18450 = datafied_throwable;
var map__18450__$1 = cljs.core.__destructure_map(map__18450);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18450__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18450__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18450__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18451 = cljs.core.last(via);
var map__18451__$1 = cljs.core.__destructure_map(map__18451);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18452 = data;
var map__18452__$1 = cljs.core.__destructure_map(map__18452);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18454 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18454__$1 = cljs.core.__destructure_map(map__18454);
var top_data = map__18454__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18454__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18457 = phase;
var G__18457__$1 = (((G__18457 instanceof cljs.core.Keyword))?G__18457.fqn:null);
switch (G__18457__$1) {
case "read-source":
var map__18458 = data;
var map__18458__$1 = cljs.core.__destructure_map(map__18458);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18458__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18458__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18459 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18459__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18459,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18459);
var G__18459__$2 = (cljs.core.truth_((function (){var fexpr__18465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18465.cljs$core$IFn$_invoke$arity$1 ? fexpr__18465.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18465.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18459__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18459__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18459__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18459__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18468 = top_data;
var G__18468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18468);
var G__18468__$2 = (cljs.core.truth_((function (){var fexpr__18469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18469.cljs$core$IFn$_invoke$arity$1 ? fexpr__18469.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18469.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18468__$1);
var G__18468__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18468__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18468__$2);
var G__18468__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18468__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18468__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18468__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18468__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18476 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(3),null);
var G__18480 = top_data;
var G__18480__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18480,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18480);
var G__18480__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18480__$1);
var G__18480__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18480__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18480__$2);
var G__18480__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18480__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18480__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18480__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18480__$4;
}

break;
case "execution":
var vec__18489 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18489,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18441_SHARP_){
var or__5002__auto__ = (p1__18441_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18495.cljs$core$IFn$_invoke$arity$1 ? fexpr__18495.cljs$core$IFn$_invoke$arity$1(p1__18441_SHARP_) : fexpr__18495.call(null, p1__18441_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18496 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18496__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18496);
var G__18496__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18496__$1);
var G__18496__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18496__$2);
var G__18496__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18496__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18496__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18457__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18508){
var map__18513 = p__18508;
var map__18513__$1 = cljs.core.__destructure_map(map__18513);
var triage_data = map__18513__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18526 = phase;
var G__18526__$1 = (((G__18526 instanceof cljs.core.Keyword))?G__18526.fqn:null);
switch (G__18526__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18531 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18532 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18533 = loc;
var G__18534 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18536_18848 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18537_18849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18538_18850 = true;
var _STAR_print_fn_STAR__temp_val__18539_18851 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18538_18850);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18539_18851);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18502_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18502_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18537_18849);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18536_18848);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18531,G__18532,G__18533,G__18534) : format.call(null, G__18531,G__18532,G__18533,G__18534));

break;
case "macroexpansion":
var G__18549 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18550 = cause_type;
var G__18551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18552 = loc;
var G__18553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18549,G__18550,G__18551,G__18552,G__18553) : format.call(null, G__18549,G__18550,G__18551,G__18552,G__18553));

break;
case "compile-syntax-check":
var G__18563 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18565 = cause_type;
var G__18566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18568 = loc;
var G__18569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18563,G__18565,G__18566,G__18568,G__18569) : format.call(null, G__18563,G__18565,G__18566,G__18568,G__18569));

break;
case "compilation":
var G__18573 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18574 = cause_type;
var G__18575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18576 = loc;
var G__18577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18573,G__18574,G__18575,G__18576,G__18577) : format.call(null, G__18573,G__18574,G__18575,G__18576,G__18577));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18581 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18582 = symbol;
var G__18583 = loc;
var G__18584 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18587_18873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18588_18874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18589_18875 = true;
var _STAR_print_fn_STAR__temp_val__18590_18876 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18589_18875);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18590_18876);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18506_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18506_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18588_18874);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18587_18873);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18581,G__18582,G__18583,G__18584) : format.call(null, G__18581,G__18582,G__18583,G__18584));
} else {
var G__18608 = "Execution error%s at %s(%s).\n%s\n";
var G__18609 = cause_type;
var G__18610 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18611 = loc;
var G__18612 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18608,G__18609,G__18610,G__18611,G__18612) : format.call(null, G__18608,G__18609,G__18610,G__18611,G__18612));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18526__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
