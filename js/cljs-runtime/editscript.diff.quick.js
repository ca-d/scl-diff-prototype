import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.set.js";
import "./editscript.edit.js";
import "./editscript.util.common.js";
goog.provide('editscript.diff.quick');
editscript.diff.quick.diff_map = (function editscript$diff$quick$diff_map(script,path,a,b,opts){
cljs.core.reduce_kv((function (_,ka,va){
var path_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ka);
if(cljs.core.contains_QMARK_(b,ka)){
var G__16275 = script;
var G__16276 = path_SINGLEQUOTE_;
var G__16277 = va;
var G__16278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ka);
var G__16279 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16275,G__16276,G__16277,G__16278,G__16279) : editscript.diff.quick.diff_STAR_.call(null, G__16275,G__16276,G__16277,G__16278,G__16279));
} else {
var G__16280 = script;
var G__16281 = path_SINGLEQUOTE_;
var G__16282 = va;
var G__16283 = editscript.edit.nada();
var G__16284 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16280,G__16281,G__16282,G__16283,G__16284) : editscript.diff.quick.diff_STAR_.call(null, G__16280,G__16281,G__16282,G__16283,G__16284));
}
}),null,a);

return cljs.core.reduce_kv((function (_,kb,vb){
if(cljs.core.contains_QMARK_(a,kb)){
return null;
} else {
var G__16285 = script;
var G__16286 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,kb);
var G__16287 = editscript.edit.nada();
var G__16288 = vb;
var G__16289 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16285,G__16286,G__16287,G__16288,G__16289) : editscript.diff.quick.diff_STAR_.call(null, G__16285,G__16286,G__16287,G__16288,G__16289));
}
}),null,b);
});
/**
 * Adjust the indices to have a correct editscript
 */
editscript.diff.quick.diff_vec = (function editscript$diff$quick$diff_vec(script,path,a,b,opts){
var edits = editscript.util.common.vec_edits(a,b,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return editscript.edit.replace_data(script,path,b);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16290,op){
var vec__16291 = p__16290;
var ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(0),null);
var ia_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(1),null);
var ib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16291,(2),null);
var G__16294 = op;
var G__16294__$1 = (((G__16294 instanceof cljs.core.Keyword))?G__16294.fqn:null);
switch (G__16294__$1) {
case "-":
var G__16295_16384 = script;
var G__16296_16385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__16297_16386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__16298_16387 = editscript.edit.nada();
var G__16299_16388 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16295_16384,G__16296_16385,G__16297_16386,G__16298_16387,G__16299_16388) : editscript.diff.quick.diff_STAR_.call(null, G__16295_16384,G__16296_16385,G__16297_16386,G__16298_16387,G__16299_16388));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),ia_SINGLEQUOTE_,ib], null);

break;
case "+":
var G__16300_16389 = script;
var G__16301_16390 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__16302_16391 = editscript.edit.nada();
var G__16303_16392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__16304_16393 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16300_16389,G__16301_16390,G__16302_16391,G__16303_16392,G__16304_16393) : editscript.diff.quick.diff_STAR_.call(null, G__16300_16389,G__16301_16390,G__16302_16391,G__16303_16392,G__16304_16393));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ia,(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
case "r":
var G__16305_16394 = script;
var G__16306_16395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__16307_16396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__16308_16397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__16309_16398 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16305_16394,G__16306_16395,G__16307_16396,G__16308_16397,G__16309_16398) : editscript.diff.quick.diff_STAR_.call(null, G__16305_16394,G__16306_16395,G__16307_16396,G__16308_16397,G__16309_16398));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + op),(ia_SINGLEQUOTE_ + op),(ib + op)], null);

}
}),cljs.core.transient$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),edits);
}
});
editscript.diff.quick.diff_set = (function editscript$diff$quick$diff_set(script,path,a,b,opts){
var seq__16310_16399 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b));
var chunk__16311_16400 = null;
var count__16312_16401 = (0);
var i__16313_16402 = (0);
while(true){
if((i__16313_16402 < count__16312_16401)){
var va_16403 = chunk__16311_16400.cljs$core$IIndexed$_nth$arity$2(null, i__16313_16402);
var G__16324_16404 = script;
var G__16325_16405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_16403);
var G__16326_16406 = va_16403;
var G__16327_16407 = editscript.edit.nada();
var G__16328_16408 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16324_16404,G__16325_16405,G__16326_16406,G__16327_16407,G__16328_16408) : editscript.diff.quick.diff_STAR_.call(null, G__16324_16404,G__16325_16405,G__16326_16406,G__16327_16407,G__16328_16408));


var G__16409 = seq__16310_16399;
var G__16410 = chunk__16311_16400;
var G__16411 = count__16312_16401;
var G__16412 = (i__16313_16402 + (1));
seq__16310_16399 = G__16409;
chunk__16311_16400 = G__16410;
count__16312_16401 = G__16411;
i__16313_16402 = G__16412;
continue;
} else {
var temp__5804__auto___16413 = cljs.core.seq(seq__16310_16399);
if(temp__5804__auto___16413){
var seq__16310_16414__$1 = temp__5804__auto___16413;
if(cljs.core.chunked_seq_QMARK_(seq__16310_16414__$1)){
var c__5525__auto___16415 = cljs.core.chunk_first(seq__16310_16414__$1);
var G__16416 = cljs.core.chunk_rest(seq__16310_16414__$1);
var G__16417 = c__5525__auto___16415;
var G__16418 = cljs.core.count(c__5525__auto___16415);
var G__16419 = (0);
seq__16310_16399 = G__16416;
chunk__16311_16400 = G__16417;
count__16312_16401 = G__16418;
i__16313_16402 = G__16419;
continue;
} else {
var va_16420 = cljs.core.first(seq__16310_16414__$1);
var G__16329_16422 = script;
var G__16330_16423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_16420);
var G__16331_16424 = va_16420;
var G__16332_16425 = editscript.edit.nada();
var G__16333_16426 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16329_16422,G__16330_16423,G__16331_16424,G__16332_16425,G__16333_16426) : editscript.diff.quick.diff_STAR_.call(null, G__16329_16422,G__16330_16423,G__16331_16424,G__16332_16425,G__16333_16426));


var G__16428 = cljs.core.next(seq__16310_16414__$1);
var G__16429 = null;
var G__16430 = (0);
var G__16431 = (0);
seq__16310_16399 = G__16428;
chunk__16311_16400 = G__16429;
count__16312_16401 = G__16430;
i__16313_16402 = G__16431;
continue;
}
} else {
}
}
break;
}

var seq__16334 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a));
var chunk__16335 = null;
var count__16336 = (0);
var i__16337 = (0);
while(true){
if((i__16337 < count__16336)){
var vb = chunk__16335.cljs$core$IIndexed$_nth$arity$2(null, i__16337);
var G__16348_16436 = script;
var G__16349_16437 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__16350_16438 = editscript.edit.nada();
var G__16351_16439 = vb;
var G__16352_16440 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16348_16436,G__16349_16437,G__16350_16438,G__16351_16439,G__16352_16440) : editscript.diff.quick.diff_STAR_.call(null, G__16348_16436,G__16349_16437,G__16350_16438,G__16351_16439,G__16352_16440));


var G__16451 = seq__16334;
var G__16452 = chunk__16335;
var G__16453 = count__16336;
var G__16454 = (i__16337 + (1));
seq__16334 = G__16451;
chunk__16335 = G__16452;
count__16336 = G__16453;
i__16337 = G__16454;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16334);
if(temp__5804__auto__){
var seq__16334__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16334__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16334__$1);
var G__16455 = cljs.core.chunk_rest(seq__16334__$1);
var G__16456 = c__5525__auto__;
var G__16457 = cljs.core.count(c__5525__auto__);
var G__16458 = (0);
seq__16334 = G__16455;
chunk__16335 = G__16456;
count__16336 = G__16457;
i__16337 = G__16458;
continue;
} else {
var vb = cljs.core.first(seq__16334__$1);
var G__16353_16459 = script;
var G__16354_16460 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__16355_16461 = editscript.edit.nada();
var G__16356_16462 = vb;
var G__16357_16463 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__16353_16459,G__16354_16460,G__16355_16461,G__16356_16462,G__16357_16463) : editscript.diff.quick.diff_STAR_.call(null, G__16353_16459,G__16354_16460,G__16355_16461,G__16356_16462,G__16357_16463));


var G__16464 = cljs.core.next(seq__16334__$1);
var G__16465 = null;
var G__16466 = (0);
var G__16467 = (0);
seq__16334 = G__16464;
chunk__16335 = G__16465;
count__16336 = G__16466;
i__16337 = G__16467;
continue;
}
} else {
return null;
}
}
break;
}
});
editscript.diff.quick.diff_lst = (function editscript$diff$quick$diff_lst(script,path,a,b,opts){
return editscript.diff.quick.diff_vec(script,path,cljs.core.vec(a),cljs.core.vec(b),opts);
});
editscript.diff.quick.diff_val = (function editscript$diff$quick$diff_val(script,path,_,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.edit.get_type(b),new cljs.core.Keyword(null,"nil","nil",99600501))){
return editscript.edit.delete_data(script,path);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,p__16360){
var map__16361 = p__16360;
var map__16361__$1 = cljs.core.__destructure_map(map__16361);
var opts = map__16361__$1;
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16361__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),new cljs.core.Keyword(null,"none","none",1333468478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
var G__16362 = editscript.edit.get_type(a);
var G__16362__$1 = (((G__16362 instanceof cljs.core.Keyword))?G__16362.fqn:null);
switch (G__16362__$1) {
case "nil":
return editscript.edit.add_data(script,path,b);

break;
case "map":
var G__16363 = editscript.edit.get_type(b);
var G__16363__$1 = (((G__16363 instanceof cljs.core.Keyword))?G__16363.fqn:null);
switch (G__16363__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "map":
var fexpr__16365 = new cljs.core.Var(function(){return editscript.diff.quick.diff_map;},new cljs.core.Symbol("editscript.diff.quick","diff-map","editscript.diff.quick/diff-map",1973051147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-map","diff-map",-711364586,null),"editscript/diff/quick.cljc",16,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_map)?editscript.diff.quick.diff_map.cljs$lang$test:null)]));
return (fexpr__16365.cljs$core$IFn$_invoke$arity$5 ? fexpr__16365.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__16365.call(null, script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "vec":
var G__16367 = editscript.edit.get_type(b);
var G__16367__$1 = (((G__16367 instanceof cljs.core.Keyword))?G__16367.fqn:null);
switch (G__16367__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "vec":
var fexpr__16368 = new cljs.core.Var(function(){return editscript.diff.quick.diff_vec;},new cljs.core.Symbol("editscript.diff.quick","diff-vec","editscript.diff.quick/diff-vec",-1781503036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-vec","diff-vec",-170849589,null),"editscript/diff/quick.cljc",16,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Adjust the indices to have a correct editscript",(cljs.core.truth_(editscript.diff.quick.diff_vec)?editscript.diff.quick.diff_vec.cljs$lang$test:null)]));
return (fexpr__16368.cljs$core$IFn$_invoke$arity$5 ? fexpr__16368.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__16368.call(null, script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "set":
var G__16369 = editscript.edit.get_type(b);
var G__16369__$1 = (((G__16369 instanceof cljs.core.Keyword))?G__16369.fqn:null);
switch (G__16369__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "set":
var fexpr__16370 = new cljs.core.Var(function(){return editscript.diff.quick.diff_set;},new cljs.core.Symbol("editscript.diff.quick","diff-set","editscript.diff.quick/diff-set",1246078730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-set","diff-set",-364591609,null),"editscript/diff/quick.cljc",16,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_set)?editscript.diff.quick.diff_set.cljs$lang$test:null)]));
return (fexpr__16370.cljs$core$IFn$_invoke$arity$5 ? fexpr__16370.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__16370.call(null, script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "lst":
var G__16372 = editscript.edit.get_type(b);
var G__16372__$1 = (((G__16372 instanceof cljs.core.Keyword))?G__16372.fqn:null);
switch (G__16372__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "lst":
var fexpr__16373 = new cljs.core.Var(function(){return editscript.diff.quick.diff_lst;},new cljs.core.Symbol("editscript.diff.quick","diff-lst","editscript.diff.quick/diff-lst",-1885319001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-lst","diff-lst",799109538,null),"editscript/diff/quick.cljc",16,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_lst)?editscript.diff.quick.diff_lst.cljs$lang$test:null)]));
return (fexpr__16373.cljs$core$IFn$_invoke$arity$5 ? fexpr__16373.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__16373.call(null, script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "str":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_diff,new cljs.core.Keyword(null,"none","none",1333468478))){
return editscript.diff.quick.diff_val(script,path,a,b);
} else {
var G__16376 = editscript.edit.get_type(b);
var G__16376__$1 = (((G__16376 instanceof cljs.core.Keyword))?G__16376.fqn:null);
switch (G__16376__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "str":
var fexpr__16377 = new cljs.core.Var(function(){return editscript.util.common.diff_str;},new cljs.core.Symbol("editscript.util.common","diff-str","editscript.util.common/diff-str",283460236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"editscript.util.common","editscript.util.common",1209759084,null),new cljs.core.Symbol(null,"diff-str","diff-str",1255675210,null),"editscript/util/common.cljc",15,1,161,161,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),new cljs.core.Symbol(null,"str-diff","str-diff",-1414820963,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),0.2], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(editscript.util.common.diff_str)?editscript.util.common.diff_str.cljs$lang$test:null)]));
return (fexpr__16377.cljs$core$IFn$_invoke$arity$5 ? fexpr__16377.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__16377.call(null, script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}
}

break;
case "val":
return editscript.diff.quick.diff_val(script,path,a,b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16362__$1)].join('')));

}
}
});
/**
 * Create an EditScript that represents the difference between `b` and `a`
 *   This algorithm is fast, but it does not attempt to generate an EditScript
 *   that is minimal in size
 */
editscript.diff.quick.diff = (function editscript$diff$quick$diff(var_args){
var G__16382 = arguments.length;
switch (G__16382) {
case 2:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
editscript.diff.quick.diff_STAR_(script,cljs.core.PersistentVector.EMPTY,a,b,opts);

return script;
}));

(editscript.diff.quick.diff.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=editscript.diff.quick.js.map
