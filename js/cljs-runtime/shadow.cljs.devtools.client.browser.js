import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./goog.dom.dom.js";
import "./goog.useragent.useragent.js";
import "./goog.useragent.product.js";
import "./goog.uri.uri.js";
import "./shadow.json.js";
import "./shadow.cljs.devtools.client.env.js";
import "./shadow.cljs.devtools.client.console.js";
import "./shadow.cljs.devtools.client.hud.js";
import "./shadow.cljs.devtools.client.websocket.js";
import "./shadow.cljs.devtools.client.shared.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21832 = arguments.length;
var i__5727__auto___21833 = (0);
while(true){
if((i__5727__auto___21833 < len__5726__auto___21832)){
args__5732__auto__.push((arguments[i__5727__auto___21833]));

var G__21834 = (i__5727__auto___21833 + (1));
i__5727__auto___21833 = G__21834;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21149){
var G__21150 = cljs.core.first(seq21149);
var seq21149__$1 = cljs.core.next(seq21149);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21150,seq21149__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21151 = cljs.core.seq(sources);
var chunk__21152 = null;
var count__21153 = (0);
var i__21154 = (0);
while(true){
if((i__21154 < count__21153)){
var map__21164 = chunk__21152.cljs$core$IIndexed$_nth$arity$2(null, i__21154);
var map__21164__$1 = cljs.core.__destructure_map(map__21164);
var src = map__21164__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21165){var e_21835 = e21165;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21835);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21835.message)].join('')));
}

var G__21836 = seq__21151;
var G__21837 = chunk__21152;
var G__21838 = count__21153;
var G__21839 = (i__21154 + (1));
seq__21151 = G__21836;
chunk__21152 = G__21837;
count__21153 = G__21838;
i__21154 = G__21839;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21151);
if(temp__5804__auto__){
var seq__21151__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21151__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21151__$1);
var G__21840 = cljs.core.chunk_rest(seq__21151__$1);
var G__21841 = c__5525__auto__;
var G__21842 = cljs.core.count(c__5525__auto__);
var G__21843 = (0);
seq__21151 = G__21840;
chunk__21152 = G__21841;
count__21153 = G__21842;
i__21154 = G__21843;
continue;
} else {
var map__21166 = cljs.core.first(seq__21151__$1);
var map__21166__$1 = cljs.core.__destructure_map(map__21166);
var src = map__21166__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21168){var e_21844 = e21168;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21844);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21844.message)].join('')));
}

var G__21845 = cljs.core.next(seq__21151__$1);
var G__21846 = null;
var G__21847 = (0);
var G__21848 = (0);
seq__21151 = G__21845;
chunk__21152 = G__21846;
count__21153 = G__21847;
i__21154 = G__21848;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21172 = cljs.core.seq(js_requires);
var chunk__21173 = null;
var count__21174 = (0);
var i__21175 = (0);
while(true){
if((i__21175 < count__21174)){
var js_ns = chunk__21173.cljs$core$IIndexed$_nth$arity$2(null, i__21175);
var require_str_21849 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21849);


var G__21850 = seq__21172;
var G__21851 = chunk__21173;
var G__21852 = count__21174;
var G__21853 = (i__21175 + (1));
seq__21172 = G__21850;
chunk__21173 = G__21851;
count__21174 = G__21852;
i__21175 = G__21853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21172);
if(temp__5804__auto__){
var seq__21172__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21172__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21172__$1);
var G__21854 = cljs.core.chunk_rest(seq__21172__$1);
var G__21855 = c__5525__auto__;
var G__21856 = cljs.core.count(c__5525__auto__);
var G__21857 = (0);
seq__21172 = G__21854;
chunk__21173 = G__21855;
count__21174 = G__21856;
i__21175 = G__21857;
continue;
} else {
var js_ns = cljs.core.first(seq__21172__$1);
var require_str_21858 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21858);


var G__21859 = cljs.core.next(seq__21172__$1);
var G__21860 = null;
var G__21861 = (0);
var G__21862 = (0);
seq__21172 = G__21859;
chunk__21173 = G__21860;
count__21174 = G__21861;
i__21175 = G__21862;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21197){
var map__21199 = p__21197;
var map__21199__$1 = cljs.core.__destructure_map(map__21199);
var msg = map__21199__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21207(s__21208){
return (new cljs.core.LazySeq(null,(function (){
var s__21208__$1 = s__21208;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21208__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21216 = cljs.core.first(xs__6360__auto__);
var map__21216__$1 = cljs.core.__destructure_map(map__21216);
var src = map__21216__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21208__$1,map__21216,map__21216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21199,map__21199__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21207_$_iter__21209(s__21210){
return (new cljs.core.LazySeq(null,((function (s__21208__$1,map__21216,map__21216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21199,map__21199__$1,msg,info,reload_info){
return (function (){
var s__21210__$1 = s__21210;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21210__$1);
if(temp__5804__auto____$1){
var s__21210__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21210__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21210__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21212 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21211 = (0);
while(true){
if((i__21211 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21211);
cljs.core.chunk_append(b__21212,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21866 = (i__21211 + (1));
i__21211 = G__21866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21212),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21207_$_iter__21209(cljs.core.chunk_rest(s__21210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21212),null);
}
} else {
var warning = cljs.core.first(s__21210__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21207_$_iter__21209(cljs.core.rest(s__21210__$2)));
}
} else {
return null;
}
break;
}
});})(s__21208__$1,map__21216,map__21216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21199,map__21199__$1,msg,info,reload_info))
,null,null));
});})(s__21208__$1,map__21216,map__21216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21199,map__21199__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21207(cljs.core.rest(s__21208__$1)));
} else {
var G__21867 = cljs.core.rest(s__21208__$1);
s__21208__$1 = G__21867;
continue;
}
} else {
var G__21868 = cljs.core.rest(s__21208__$1);
s__21208__$1 = G__21868;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21223_21869 = cljs.core.seq(warnings);
var chunk__21224_21870 = null;
var count__21225_21871 = (0);
var i__21226_21872 = (0);
while(true){
if((i__21226_21872 < count__21225_21871)){
var map__21235_21873 = chunk__21224_21870.cljs$core$IIndexed$_nth$arity$2(null, i__21226_21872);
var map__21235_21874__$1 = cljs.core.__destructure_map(map__21235_21873);
var w_21875 = map__21235_21874__$1;
var msg_21876__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21874__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21874__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21874__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21235_21874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21879)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21877),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21878),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21876__$1)].join(''));


var G__21881 = seq__21223_21869;
var G__21882 = chunk__21224_21870;
var G__21883 = count__21225_21871;
var G__21884 = (i__21226_21872 + (1));
seq__21223_21869 = G__21881;
chunk__21224_21870 = G__21882;
count__21225_21871 = G__21883;
i__21226_21872 = G__21884;
continue;
} else {
var temp__5804__auto___21885 = cljs.core.seq(seq__21223_21869);
if(temp__5804__auto___21885){
var seq__21223_21886__$1 = temp__5804__auto___21885;
if(cljs.core.chunked_seq_QMARK_(seq__21223_21886__$1)){
var c__5525__auto___21887 = cljs.core.chunk_first(seq__21223_21886__$1);
var G__21888 = cljs.core.chunk_rest(seq__21223_21886__$1);
var G__21889 = c__5525__auto___21887;
var G__21890 = cljs.core.count(c__5525__auto___21887);
var G__21891 = (0);
seq__21223_21869 = G__21888;
chunk__21224_21870 = G__21889;
count__21225_21871 = G__21890;
i__21226_21872 = G__21891;
continue;
} else {
var map__21236_21892 = cljs.core.first(seq__21223_21886__$1);
var map__21236_21893__$1 = cljs.core.__destructure_map(map__21236_21892);
var w_21894 = map__21236_21893__$1;
var msg_21895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236_21893__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236_21893__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236_21893__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236_21893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21898)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21896),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21897),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21895__$1)].join(''));


var G__21901 = cljs.core.next(seq__21223_21886__$1);
var G__21902 = null;
var G__21903 = (0);
var G__21904 = (0);
seq__21223_21869 = G__21901;
chunk__21224_21870 = G__21902;
count__21225_21871 = G__21903;
i__21226_21872 = G__21904;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21196_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21196_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21239){
var map__21240 = p__21239;
var map__21240__$1 = cljs.core.__destructure_map(map__21240);
var msg = map__21240__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21241 = cljs.core.seq(updates);
var chunk__21243 = null;
var count__21244 = (0);
var i__21245 = (0);
while(true){
if((i__21245 < count__21244)){
var path = chunk__21243.cljs$core$IIndexed$_nth$arity$2(null, i__21245);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21472_21907 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21476_21908 = null;
var count__21477_21909 = (0);
var i__21478_21910 = (0);
while(true){
if((i__21478_21910 < count__21477_21909)){
var node_21911 = chunk__21476_21908.cljs$core$IIndexed$_nth$arity$2(null, i__21478_21910);
if(cljs.core.not(node_21911.shadow$old)){
var path_match_21912 = shadow.cljs.devtools.client.browser.match_paths(node_21911.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21912)){
var new_link_21913 = (function (){var G__21559 = node_21911.cloneNode(true);
G__21559.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21912),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21559;
})();
(node_21911.shadow$old = true);

(new_link_21913.onload = ((function (seq__21472_21907,chunk__21476_21908,count__21477_21909,i__21478_21910,seq__21241,chunk__21243,count__21244,i__21245,new_link_21913,path_match_21912,node_21911,path,map__21240,map__21240__$1,msg,updates,reload_info){
return (function (e){
var seq__21561_21914 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21563_21915 = null;
var count__21564_21916 = (0);
var i__21565_21917 = (0);
while(true){
if((i__21565_21917 < count__21564_21916)){
var map__21598_21918 = chunk__21563_21915.cljs$core$IIndexed$_nth$arity$2(null, i__21565_21917);
var map__21598_21919__$1 = cljs.core.__destructure_map(map__21598_21918);
var task_21920 = map__21598_21919__$1;
var fn_str_21921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598_21919__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598_21919__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21925 = goog.getObjectByName(fn_str_21921,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21922)].join(''));

(fn_obj_21925.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21925.cljs$core$IFn$_invoke$arity$2(path,new_link_21913) : fn_obj_21925.call(null, path,new_link_21913));


var G__21926 = seq__21561_21914;
var G__21927 = chunk__21563_21915;
var G__21928 = count__21564_21916;
var G__21929 = (i__21565_21917 + (1));
seq__21561_21914 = G__21926;
chunk__21563_21915 = G__21927;
count__21564_21916 = G__21928;
i__21565_21917 = G__21929;
continue;
} else {
var temp__5804__auto___21930 = cljs.core.seq(seq__21561_21914);
if(temp__5804__auto___21930){
var seq__21561_21931__$1 = temp__5804__auto___21930;
if(cljs.core.chunked_seq_QMARK_(seq__21561_21931__$1)){
var c__5525__auto___21932 = cljs.core.chunk_first(seq__21561_21931__$1);
var G__21933 = cljs.core.chunk_rest(seq__21561_21931__$1);
var G__21934 = c__5525__auto___21932;
var G__21935 = cljs.core.count(c__5525__auto___21932);
var G__21936 = (0);
seq__21561_21914 = G__21933;
chunk__21563_21915 = G__21934;
count__21564_21916 = G__21935;
i__21565_21917 = G__21936;
continue;
} else {
var map__21599_21937 = cljs.core.first(seq__21561_21931__$1);
var map__21599_21938__$1 = cljs.core.__destructure_map(map__21599_21937);
var task_21939 = map__21599_21938__$1;
var fn_str_21940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21599_21938__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21599_21938__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21943 = goog.getObjectByName(fn_str_21940,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21941)].join(''));

(fn_obj_21943.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21943.cljs$core$IFn$_invoke$arity$2(path,new_link_21913) : fn_obj_21943.call(null, path,new_link_21913));


var G__21944 = cljs.core.next(seq__21561_21931__$1);
var G__21945 = null;
var G__21946 = (0);
var G__21947 = (0);
seq__21561_21914 = G__21944;
chunk__21563_21915 = G__21945;
count__21564_21916 = G__21946;
i__21565_21917 = G__21947;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21911);
});})(seq__21472_21907,chunk__21476_21908,count__21477_21909,i__21478_21910,seq__21241,chunk__21243,count__21244,i__21245,new_link_21913,path_match_21912,node_21911,path,map__21240,map__21240__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21912], 0));

goog.dom.insertSiblingAfter(new_link_21913,node_21911);


var G__21948 = seq__21472_21907;
var G__21949 = chunk__21476_21908;
var G__21950 = count__21477_21909;
var G__21951 = (i__21478_21910 + (1));
seq__21472_21907 = G__21948;
chunk__21476_21908 = G__21949;
count__21477_21909 = G__21950;
i__21478_21910 = G__21951;
continue;
} else {
var G__21952 = seq__21472_21907;
var G__21953 = chunk__21476_21908;
var G__21954 = count__21477_21909;
var G__21955 = (i__21478_21910 + (1));
seq__21472_21907 = G__21952;
chunk__21476_21908 = G__21953;
count__21477_21909 = G__21954;
i__21478_21910 = G__21955;
continue;
}
} else {
var G__21956 = seq__21472_21907;
var G__21957 = chunk__21476_21908;
var G__21958 = count__21477_21909;
var G__21959 = (i__21478_21910 + (1));
seq__21472_21907 = G__21956;
chunk__21476_21908 = G__21957;
count__21477_21909 = G__21958;
i__21478_21910 = G__21959;
continue;
}
} else {
var temp__5804__auto___21960 = cljs.core.seq(seq__21472_21907);
if(temp__5804__auto___21960){
var seq__21472_21961__$1 = temp__5804__auto___21960;
if(cljs.core.chunked_seq_QMARK_(seq__21472_21961__$1)){
var c__5525__auto___21962 = cljs.core.chunk_first(seq__21472_21961__$1);
var G__21963 = cljs.core.chunk_rest(seq__21472_21961__$1);
var G__21964 = c__5525__auto___21962;
var G__21965 = cljs.core.count(c__5525__auto___21962);
var G__21966 = (0);
seq__21472_21907 = G__21963;
chunk__21476_21908 = G__21964;
count__21477_21909 = G__21965;
i__21478_21910 = G__21966;
continue;
} else {
var node_21967 = cljs.core.first(seq__21472_21961__$1);
if(cljs.core.not(node_21967.shadow$old)){
var path_match_21968 = shadow.cljs.devtools.client.browser.match_paths(node_21967.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21968)){
var new_link_21969 = (function (){var G__21620 = node_21967.cloneNode(true);
G__21620.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21968),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21620;
})();
(node_21967.shadow$old = true);

(new_link_21969.onload = ((function (seq__21472_21907,chunk__21476_21908,count__21477_21909,i__21478_21910,seq__21241,chunk__21243,count__21244,i__21245,new_link_21969,path_match_21968,node_21967,seq__21472_21961__$1,temp__5804__auto___21960,path,map__21240,map__21240__$1,msg,updates,reload_info){
return (function (e){
var seq__21621_21972 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21623_21973 = null;
var count__21624_21974 = (0);
var i__21625_21975 = (0);
while(true){
if((i__21625_21975 < count__21624_21974)){
var map__21656_21976 = chunk__21623_21973.cljs$core$IIndexed$_nth$arity$2(null, i__21625_21975);
var map__21656_21977__$1 = cljs.core.__destructure_map(map__21656_21976);
var task_21978 = map__21656_21977__$1;
var fn_str_21979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656_21977__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656_21977__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21981 = goog.getObjectByName(fn_str_21979,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21980)].join(''));

(fn_obj_21981.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21981.cljs$core$IFn$_invoke$arity$2(path,new_link_21969) : fn_obj_21981.call(null, path,new_link_21969));


var G__21982 = seq__21621_21972;
var G__21983 = chunk__21623_21973;
var G__21984 = count__21624_21974;
var G__21985 = (i__21625_21975 + (1));
seq__21621_21972 = G__21982;
chunk__21623_21973 = G__21983;
count__21624_21974 = G__21984;
i__21625_21975 = G__21985;
continue;
} else {
var temp__5804__auto___21986__$1 = cljs.core.seq(seq__21621_21972);
if(temp__5804__auto___21986__$1){
var seq__21621_21987__$1 = temp__5804__auto___21986__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21621_21987__$1)){
var c__5525__auto___21988 = cljs.core.chunk_first(seq__21621_21987__$1);
var G__21989 = cljs.core.chunk_rest(seq__21621_21987__$1);
var G__21990 = c__5525__auto___21988;
var G__21991 = cljs.core.count(c__5525__auto___21988);
var G__21992 = (0);
seq__21621_21972 = G__21989;
chunk__21623_21973 = G__21990;
count__21624_21974 = G__21991;
i__21625_21975 = G__21992;
continue;
} else {
var map__21657_21993 = cljs.core.first(seq__21621_21987__$1);
var map__21657_21994__$1 = cljs.core.__destructure_map(map__21657_21993);
var task_21995 = map__21657_21994__$1;
var fn_str_21996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21657_21994__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21657_21994__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21998 = goog.getObjectByName(fn_str_21996,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21997)].join(''));

(fn_obj_21998.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21998.cljs$core$IFn$_invoke$arity$2(path,new_link_21969) : fn_obj_21998.call(null, path,new_link_21969));


var G__21999 = cljs.core.next(seq__21621_21987__$1);
var G__22000 = null;
var G__22001 = (0);
var G__22002 = (0);
seq__21621_21972 = G__21999;
chunk__21623_21973 = G__22000;
count__21624_21974 = G__22001;
i__21625_21975 = G__22002;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21967);
});})(seq__21472_21907,chunk__21476_21908,count__21477_21909,i__21478_21910,seq__21241,chunk__21243,count__21244,i__21245,new_link_21969,path_match_21968,node_21967,seq__21472_21961__$1,temp__5804__auto___21960,path,map__21240,map__21240__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21968], 0));

goog.dom.insertSiblingAfter(new_link_21969,node_21967);


var G__22003 = cljs.core.next(seq__21472_21961__$1);
var G__22004 = null;
var G__22005 = (0);
var G__22006 = (0);
seq__21472_21907 = G__22003;
chunk__21476_21908 = G__22004;
count__21477_21909 = G__22005;
i__21478_21910 = G__22006;
continue;
} else {
var G__22007 = cljs.core.next(seq__21472_21961__$1);
var G__22008 = null;
var G__22009 = (0);
var G__22010 = (0);
seq__21472_21907 = G__22007;
chunk__21476_21908 = G__22008;
count__21477_21909 = G__22009;
i__21478_21910 = G__22010;
continue;
}
} else {
var G__22011 = cljs.core.next(seq__21472_21961__$1);
var G__22012 = null;
var G__22013 = (0);
var G__22014 = (0);
seq__21472_21907 = G__22011;
chunk__21476_21908 = G__22012;
count__21477_21909 = G__22013;
i__21478_21910 = G__22014;
continue;
}
}
} else {
}
}
break;
}


var G__22015 = seq__21241;
var G__22016 = chunk__21243;
var G__22017 = count__21244;
var G__22018 = (i__21245 + (1));
seq__21241 = G__22015;
chunk__21243 = G__22016;
count__21244 = G__22017;
i__21245 = G__22018;
continue;
} else {
var G__22019 = seq__21241;
var G__22020 = chunk__21243;
var G__22021 = count__21244;
var G__22022 = (i__21245 + (1));
seq__21241 = G__22019;
chunk__21243 = G__22020;
count__21244 = G__22021;
i__21245 = G__22022;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21241);
if(temp__5804__auto__){
var seq__21241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21241__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21241__$1);
var G__22023 = cljs.core.chunk_rest(seq__21241__$1);
var G__22024 = c__5525__auto__;
var G__22025 = cljs.core.count(c__5525__auto__);
var G__22026 = (0);
seq__21241 = G__22023;
chunk__21243 = G__22024;
count__21244 = G__22025;
i__21245 = G__22026;
continue;
} else {
var path = cljs.core.first(seq__21241__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21665_22027 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21669_22028 = null;
var count__21670_22029 = (0);
var i__21671_22030 = (0);
while(true){
if((i__21671_22030 < count__21670_22029)){
var node_22031 = chunk__21669_22028.cljs$core$IIndexed$_nth$arity$2(null, i__21671_22030);
if(cljs.core.not(node_22031.shadow$old)){
var path_match_22032 = shadow.cljs.devtools.client.browser.match_paths(node_22031.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22032)){
var new_link_22033 = (function (){var G__21755 = node_22031.cloneNode(true);
G__21755.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22032),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21755;
})();
(node_22031.shadow$old = true);

(new_link_22033.onload = ((function (seq__21665_22027,chunk__21669_22028,count__21670_22029,i__21671_22030,seq__21241,chunk__21243,count__21244,i__21245,new_link_22033,path_match_22032,node_22031,path,seq__21241__$1,temp__5804__auto__,map__21240,map__21240__$1,msg,updates,reload_info){
return (function (e){
var seq__21760_22034 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21762_22035 = null;
var count__21763_22036 = (0);
var i__21764_22037 = (0);
while(true){
if((i__21764_22037 < count__21763_22036)){
var map__21777_22038 = chunk__21762_22035.cljs$core$IIndexed$_nth$arity$2(null, i__21764_22037);
var map__21777_22039__$1 = cljs.core.__destructure_map(map__21777_22038);
var task_22040 = map__21777_22039__$1;
var fn_str_22041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777_22039__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777_22039__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22043 = goog.getObjectByName(fn_str_22041,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22042)].join(''));

(fn_obj_22043.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22043.cljs$core$IFn$_invoke$arity$2(path,new_link_22033) : fn_obj_22043.call(null, path,new_link_22033));


var G__22044 = seq__21760_22034;
var G__22045 = chunk__21762_22035;
var G__22046 = count__21763_22036;
var G__22047 = (i__21764_22037 + (1));
seq__21760_22034 = G__22044;
chunk__21762_22035 = G__22045;
count__21763_22036 = G__22046;
i__21764_22037 = G__22047;
continue;
} else {
var temp__5804__auto___22048__$1 = cljs.core.seq(seq__21760_22034);
if(temp__5804__auto___22048__$1){
var seq__21760_22050__$1 = temp__5804__auto___22048__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21760_22050__$1)){
var c__5525__auto___22051 = cljs.core.chunk_first(seq__21760_22050__$1);
var G__22052 = cljs.core.chunk_rest(seq__21760_22050__$1);
var G__22053 = c__5525__auto___22051;
var G__22054 = cljs.core.count(c__5525__auto___22051);
var G__22055 = (0);
seq__21760_22034 = G__22052;
chunk__21762_22035 = G__22053;
count__21763_22036 = G__22054;
i__21764_22037 = G__22055;
continue;
} else {
var map__21778_22056 = cljs.core.first(seq__21760_22050__$1);
var map__21778_22057__$1 = cljs.core.__destructure_map(map__21778_22056);
var task_22058 = map__21778_22057__$1;
var fn_str_22059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21778_22057__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21778_22057__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22061 = goog.getObjectByName(fn_str_22059,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22060)].join(''));

(fn_obj_22061.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22061.cljs$core$IFn$_invoke$arity$2(path,new_link_22033) : fn_obj_22061.call(null, path,new_link_22033));


var G__22062 = cljs.core.next(seq__21760_22050__$1);
var G__22063 = null;
var G__22064 = (0);
var G__22065 = (0);
seq__21760_22034 = G__22062;
chunk__21762_22035 = G__22063;
count__21763_22036 = G__22064;
i__21764_22037 = G__22065;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22031);
});})(seq__21665_22027,chunk__21669_22028,count__21670_22029,i__21671_22030,seq__21241,chunk__21243,count__21244,i__21245,new_link_22033,path_match_22032,node_22031,path,seq__21241__$1,temp__5804__auto__,map__21240,map__21240__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22032], 0));

goog.dom.insertSiblingAfter(new_link_22033,node_22031);


var G__22066 = seq__21665_22027;
var G__22067 = chunk__21669_22028;
var G__22068 = count__21670_22029;
var G__22069 = (i__21671_22030 + (1));
seq__21665_22027 = G__22066;
chunk__21669_22028 = G__22067;
count__21670_22029 = G__22068;
i__21671_22030 = G__22069;
continue;
} else {
var G__22071 = seq__21665_22027;
var G__22072 = chunk__21669_22028;
var G__22073 = count__21670_22029;
var G__22074 = (i__21671_22030 + (1));
seq__21665_22027 = G__22071;
chunk__21669_22028 = G__22072;
count__21670_22029 = G__22073;
i__21671_22030 = G__22074;
continue;
}
} else {
var G__22075 = seq__21665_22027;
var G__22076 = chunk__21669_22028;
var G__22077 = count__21670_22029;
var G__22078 = (i__21671_22030 + (1));
seq__21665_22027 = G__22075;
chunk__21669_22028 = G__22076;
count__21670_22029 = G__22077;
i__21671_22030 = G__22078;
continue;
}
} else {
var temp__5804__auto___22079__$1 = cljs.core.seq(seq__21665_22027);
if(temp__5804__auto___22079__$1){
var seq__21665_22080__$1 = temp__5804__auto___22079__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21665_22080__$1)){
var c__5525__auto___22081 = cljs.core.chunk_first(seq__21665_22080__$1);
var G__22082 = cljs.core.chunk_rest(seq__21665_22080__$1);
var G__22083 = c__5525__auto___22081;
var G__22084 = cljs.core.count(c__5525__auto___22081);
var G__22085 = (0);
seq__21665_22027 = G__22082;
chunk__21669_22028 = G__22083;
count__21670_22029 = G__22084;
i__21671_22030 = G__22085;
continue;
} else {
var node_22086 = cljs.core.first(seq__21665_22080__$1);
if(cljs.core.not(node_22086.shadow$old)){
var path_match_22087 = shadow.cljs.devtools.client.browser.match_paths(node_22086.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22087)){
var new_link_22090 = (function (){var G__21779 = node_22086.cloneNode(true);
G__21779.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22087),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21779;
})();
(node_22086.shadow$old = true);

(new_link_22090.onload = ((function (seq__21665_22027,chunk__21669_22028,count__21670_22029,i__21671_22030,seq__21241,chunk__21243,count__21244,i__21245,new_link_22090,path_match_22087,node_22086,seq__21665_22080__$1,temp__5804__auto___22079__$1,path,seq__21241__$1,temp__5804__auto__,map__21240,map__21240__$1,msg,updates,reload_info){
return (function (e){
var seq__21780_22091 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21782_22092 = null;
var count__21783_22093 = (0);
var i__21784_22094 = (0);
while(true){
if((i__21784_22094 < count__21783_22093)){
var map__21796_22095 = chunk__21782_22092.cljs$core$IIndexed$_nth$arity$2(null, i__21784_22094);
var map__21796_22096__$1 = cljs.core.__destructure_map(map__21796_22095);
var task_22097 = map__21796_22096__$1;
var fn_str_22098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21796_22096__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21796_22096__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22100 = goog.getObjectByName(fn_str_22098,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22099)].join(''));

(fn_obj_22100.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22100.cljs$core$IFn$_invoke$arity$2(path,new_link_22090) : fn_obj_22100.call(null, path,new_link_22090));


var G__22101 = seq__21780_22091;
var G__22102 = chunk__21782_22092;
var G__22103 = count__21783_22093;
var G__22104 = (i__21784_22094 + (1));
seq__21780_22091 = G__22101;
chunk__21782_22092 = G__22102;
count__21783_22093 = G__22103;
i__21784_22094 = G__22104;
continue;
} else {
var temp__5804__auto___22105__$2 = cljs.core.seq(seq__21780_22091);
if(temp__5804__auto___22105__$2){
var seq__21780_22106__$1 = temp__5804__auto___22105__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21780_22106__$1)){
var c__5525__auto___22107 = cljs.core.chunk_first(seq__21780_22106__$1);
var G__22109 = cljs.core.chunk_rest(seq__21780_22106__$1);
var G__22110 = c__5525__auto___22107;
var G__22111 = cljs.core.count(c__5525__auto___22107);
var G__22112 = (0);
seq__21780_22091 = G__22109;
chunk__21782_22092 = G__22110;
count__21783_22093 = G__22111;
i__21784_22094 = G__22112;
continue;
} else {
var map__21799_22113 = cljs.core.first(seq__21780_22106__$1);
var map__21799_22114__$1 = cljs.core.__destructure_map(map__21799_22113);
var task_22115 = map__21799_22114__$1;
var fn_str_22116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799_22114__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799_22114__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22118 = goog.getObjectByName(fn_str_22116,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22117)].join(''));

(fn_obj_22118.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22118.cljs$core$IFn$_invoke$arity$2(path,new_link_22090) : fn_obj_22118.call(null, path,new_link_22090));


var G__22120 = cljs.core.next(seq__21780_22106__$1);
var G__22121 = null;
var G__22122 = (0);
var G__22123 = (0);
seq__21780_22091 = G__22120;
chunk__21782_22092 = G__22121;
count__21783_22093 = G__22122;
i__21784_22094 = G__22123;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22086);
});})(seq__21665_22027,chunk__21669_22028,count__21670_22029,i__21671_22030,seq__21241,chunk__21243,count__21244,i__21245,new_link_22090,path_match_22087,node_22086,seq__21665_22080__$1,temp__5804__auto___22079__$1,path,seq__21241__$1,temp__5804__auto__,map__21240,map__21240__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22087], 0));

goog.dom.insertSiblingAfter(new_link_22090,node_22086);


var G__22124 = cljs.core.next(seq__21665_22080__$1);
var G__22125 = null;
var G__22126 = (0);
var G__22127 = (0);
seq__21665_22027 = G__22124;
chunk__21669_22028 = G__22125;
count__21670_22029 = G__22126;
i__21671_22030 = G__22127;
continue;
} else {
var G__22128 = cljs.core.next(seq__21665_22080__$1);
var G__22129 = null;
var G__22130 = (0);
var G__22131 = (0);
seq__21665_22027 = G__22128;
chunk__21669_22028 = G__22129;
count__21670_22029 = G__22130;
i__21671_22030 = G__22131;
continue;
}
} else {
var G__22132 = cljs.core.next(seq__21665_22080__$1);
var G__22133 = null;
var G__22134 = (0);
var G__22135 = (0);
seq__21665_22027 = G__22132;
chunk__21669_22028 = G__22133;
count__21670_22029 = G__22134;
i__21671_22030 = G__22135;
continue;
}
}
} else {
}
}
break;
}


var G__22136 = cljs.core.next(seq__21241__$1);
var G__22137 = null;
var G__22138 = (0);
var G__22139 = (0);
seq__21241 = G__22136;
chunk__21243 = G__22137;
count__21244 = G__22138;
i__21245 = G__22139;
continue;
} else {
var G__22140 = cljs.core.next(seq__21241__$1);
var G__22141 = null;
var G__22142 = (0);
var G__22143 = (0);
seq__21241 = G__22140;
chunk__21243 = G__22141;
count__21244 = G__22142;
i__21245 = G__22143;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21802){
var map__21803 = p__21802;
var map__21803__$1 = cljs.core.__destructure_map(map__21803);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21803__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21804,done,error){
var map__21805 = p__21804;
var map__21805__$1 = cljs.core.__destructure_map(map__21805);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21805__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21808,done,error){
var map__21809 = p__21808;
var map__21809__$1 = cljs.core.__destructure_map(map__21809);
var msg = map__21809__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21810){
var map__21811 = p__21810;
var map__21811__$1 = cljs.core.__destructure_map(map__21811);
var src = map__21811__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21811__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21812 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21812) : done.call(null, G__21812));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21813){
var map__21814 = p__21813;
var map__21814__$1 = cljs.core.__destructure_map(map__21814);
var msg__$1 = map__21814__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21814__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21816){var ex = e21816;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21817){
var map__21818 = p__21817;
var map__21818__$1 = cljs.core.__destructure_map(map__21818);
var env = map__21818__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21818__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21824){
var map__21825 = p__21824;
var map__21825__$1 = cljs.core.__destructure_map(map__21825);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21826){
var map__21827 = p__21826;
var map__21827__$1 = cljs.core.__destructure_map(map__21827);
var svc = map__21827__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21827__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
