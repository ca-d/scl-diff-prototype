import "./cljs_env.js";
import "./cljs.core.js";
import "./fipp.deque.js";
goog.provide('fipp.engine');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__21650 = cljs.core.get_global_hierarchy;
return (fexpr__21650.cljs$core$IFn$_invoke$arity$0 ? fexpr__21650.cljs$core$IFn$_invoke$arity$0() : fexpr__21650.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_(doc)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fipp.engine.serialize,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc], 0));
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_(doc)){
return fipp.engine.serialize_node.cljs$core$IFn$_invoke$arity$1(doc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__21686){
var vec__21688 = p__21686;
var seq__21689 = cljs.core.seq(vec__21688);
var first__21690 = cljs.core.first(seq__21689);
var seq__21689__$1 = cljs.core.next(seq__21689);
var _ = first__21690;
var text = seq__21689__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__21696){
var vec__21697 = p__21696;
var seq__21698 = cljs.core.seq(vec__21697);
var first__21699 = cljs.core.first(seq__21698);
var seq__21698__$1 = cljs.core.next(seq__21698);
var _ = first__21699;
var text = seq__21698__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,text)], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__21711){
var vec__21715 = p__21711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"span","span",1394872991),(function (p__21720){
var vec__21721 = p__21720;
var seq__21722 = cljs.core.seq(vec__21721);
var first__21723 = cljs.core.first(seq__21722);
var seq__21722__$1 = cljs.core.next(seq__21722);
var _ = first__21723;
var children = seq__21722__$1;
return fipp.engine.serialize(children);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"line","line",212345235),(function (p__21725){
var vec__21727 = p__21725;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21727,(0),null);
var inline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21727,(1),null);
var terminate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21727,(2),null);
var inline__$1 = (function (){var or__5002__auto__ = inline;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__5002__auto__ = terminate;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__22160__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__22160 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22162__i = 0, G__22162__a = new Array(arguments.length -  0);
while (G__22162__i < G__22162__a.length) {G__22162__a[G__22162__i] = arguments[G__22162__i + 0]; ++G__22162__i;}
  _ = new cljs.core.IndexedSeq(G__22162__a,0,null);
} 
return G__22160__delegate.call(this,_);};
G__22160.cljs$lang$maxFixedArity = 0;
G__22160.cljs$lang$applyTo = (function (arglist__22164){
var _ = cljs.core.seq(arglist__22164);
return G__22160__delegate(_);
});
G__22160.cljs$core$IFn$_invoke$arity$variadic = G__22160__delegate;
return G__22160;
})()
);
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"group","group",582596132),(function (p__21740){
var vec__21741 = p__21740;
var seq__21742 = cljs.core.seq(vec__21741);
var first__21743 = cljs.core.first(seq__21742);
var seq__21742__$1 = cljs.core.next(seq__21742);
var _ = first__21743;
var children = seq__21742__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__21745){
var vec__21747 = p__21745;
var seq__21748 = cljs.core.seq(vec__21747);
var first__21749 = cljs.core.first(seq__21748);
var seq__21748__$1 = cljs.core.next(seq__21748);
var _ = first__21749;
var args = seq__21748__$1;
var vec__21750 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((2),args));
var seq__21751 = cljs.core.seq(vec__21750);
var first__21752 = cljs.core.first(seq__21751);
var seq__21751__$1 = cljs.core.next(seq__21751);
var offset = first__21752;
var children = seq__21751__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null)], 0));
}));
fipp.engine.serialize_node.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"align","align",1964212802),(function (p__21756){
var vec__21757 = p__21756;
var seq__21758 = cljs.core.seq(vec__21757);
var first__21759 = cljs.core.first(seq__21758);
var seq__21758__$1 = cljs.core.next(seq__21758);
var _ = first__21759;
var args = seq__21758__$1;
var vec__21766 = ((typeof cljs.core.first(args) === 'number')?args:cljs.core.cons((0),args));
var seq__21767 = cljs.core.seq(vec__21766);
var first__21768 = cljs.core.first(seq__21767);
var seq__21767__$1 = cljs.core.next(seq__21767);
var offset = first__21768;
var children = seq__21767__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize(children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null)], 0));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_((0));
return (function() {
var G__22176 = null;
var G__22176__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__22176__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null, res));
});
var G__22176__2 = (function (res,node){
var delta = (function (){var G__21815 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__21815__$1 = (((G__21815 instanceof cljs.core.Keyword))?G__21815.fqn:null);
switch (G__21815__$1) {
case "text":
return cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count(new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = pos.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (pos.cljs$core$IDeref$_deref$arity$1(null, ) + delta));
var G__21819 = res;
var G__21820 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"right","right",-452581833),p);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21819,G__21820) : rf.call(null, G__21819,G__21820));
});
G__22176 = function(res,node){
switch(arguments.length){
case 0:
return G__22176__0.call(this);
case 1:
return G__22176__1.call(this,res);
case 2:
return G__22176__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22176.cljs$core$IFn$_invoke$arity$0 = G__22176__0;
G__22176.cljs$core$IFn$_invoke$arity$1 = G__22176__1;
G__22176.cljs$core$IFn$_invoke$arity$2 = G__22176__2;
return G__22176;
})()
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22179 = arguments.length;
var i__5727__auto___22180 = (0);
while(true){
if((i__5727__auto___22180 < len__5726__auto___22179)){
args__5732__auto__.push((arguments[i__5727__auto___22180]));

var G__22181 = (i__5727__auto___22180 + (1));
i__5727__auto___22180 = G__22181;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr(cljs.core.pop(deque),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(deque),args));
}));

(fipp.engine.update_right.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(fipp.engine.update_right.cljs$lang$applyTo = (function (seq21821){
var G__21822 = cljs.core.first(seq21821);
var seq21821__$1 = cljs.core.next(seq21821);
var G__21823 = cljs.core.first(seq21821__$1);
var seq21821__$2 = cljs.core.next(seq21821__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21822,G__21823,seq21821__$2);
}));

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__21828){
var map__21829 = p__21828;
var map__21829__$1 = cljs.core.__destructure_map(map__21829);
var options = map__21829__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var pos = cljs.core.volatile_BANG_((0));
var bufs = cljs.core.volatile_BANG_(fipp.deque.empty);
return (function() {
var G__22184 = null;
var G__22184__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__22184__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null, res));
});
var G__22184__2 = (function (res,p__21830){
var map__21831 = p__21830;
var map__21831__$1 = cljs.core.__destructure_map(map__21831);
var node = map__21831__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21831__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21831__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref(bufs);
if(cljs.core.empty_QMARK_(buffers)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_(pos,position_STAR_);

cljs.core.vreset_BANG_(bufs,(fipp.deque.create.cljs$core$IFn$_invoke$arity$1 ? fipp.deque.create.cljs$core$IFn$_invoke$arity$1(buffer) : fipp.deque.create.call(null, buffer)));

return res;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,node) : rf.call(null, res,node));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek(buffers);
var buffers_STAR_ = cljs.core.pop(buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr(begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_(buffers_STAR_)){
cljs.core.vreset_BANG_(pos,(0));

cljs.core.vreset_BANG_(bufs,fipp.deque.empty);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_(buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_(nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_(bufs,fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(buffers_STAR_,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes], 0)));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr(buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(buffers,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node], 0)));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref(pos))) && ((cljs.core.count(buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_(bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first(buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl(buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res__$1,begin) : rf.call(null, res__$1,begin));
var res_STAR___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_(buffers_STAR__STAR_)){
cljs.core.vreset_BANG_(pos,(0));

cljs.core.vreset_BANG_(bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_(pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first(buffers_STAR__STAR_)));

var G__22191 = buffers_STAR__STAR_;
var G__22192 = res_STAR___$1;
buffers_STAR_ = G__22191;
res__$1 = G__22192;
continue;
}
}
break;
}
}
}
});
G__22184 = function(res,p__21830){
switch(arguments.length){
case 0:
return G__22184__0.call(this);
case 1:
return G__22184__1.call(this,res);
case 2:
return G__22184__2.call(this,res,p__21830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22184.cljs$core$IFn$_invoke$arity$0 = G__22184__0;
G__22184.cljs$core$IFn$_invoke$arity$1 = G__22184__1;
G__22184.cljs$core$IFn$_invoke$arity$2 = G__22184__2;
return G__22184;
})()
});
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__21899){
var map__21900 = p__21899;
var map__21900__$1 = cljs.core.__destructure_map(map__21900);
var options = map__21900__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21900__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var fits = cljs.core.volatile_BANG_((0));
var length = cljs.core.volatile_BANG_(width);
var tab_stops = cljs.core.volatile_BANG_(cljs.core.list((0)));
var column = cljs.core.volatile_BANG_((0));
return (function() {
var G__22196 = null;
var G__22196__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__22196__1 = (function (res){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(res) : rf.call(null, res));
});
var G__22196__2 = (function (res,p__21905){
var map__21906 = p__21905;
var map__21906__$1 = cljs.core.__destructure_map(map__21906);
var node = map__21906__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21906__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21906__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek(cljs.core.deref(tab_stops));
var format_text = (function (text,width__$1){
var res_STAR_ = (((cljs.core.deref(column) === (0)))?(function (){
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (column.cljs$core$IDeref$_deref$arity$1(null, ) + indent));

var G__21923 = res;
var G__21924 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(indent," "));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21923,G__21924) : rf.call(null, G__21923,G__21924));
})()
:res);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (column.cljs$core$IDeref$_deref$arity$1(null, ) + width__$1));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res_STAR_,text) : rf.call(null, res_STAR_,text));
});
var G__21942 = op;
var G__21942__$1 = (((G__21942 instanceof cljs.core.Keyword))?G__21942.fqn:null);
switch (G__21942__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
return format_text(text,cljs.core.count(text));

break;
case "escaped":
return format_text(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node),(1));

break;
case "pass":
return format_text(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node),(0));

break;
case "line":
if((cljs.core.deref(fits) === (0))){
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

var G__21970 = res;
var G__21971 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join('');
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21970,G__21971) : rf.call(null, G__21970,G__21971));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
column.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (column.cljs$core$IDeref$_deref$arity$1(null, ) + cljs.core.count(inline)));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,inline) : rf.call(null, res,inline));
}

break;
case "break":
cljs.core.vreset_BANG_(length,((right + width) - indent));

cljs.core.vreset_BANG_(column,(0));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(res,"\n") : rf.call(null, res,"\n"));

break;
case "nest":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tab_stops.cljs$core$IDeref$_deref$arity$1(null, ),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tab_stops.cljs$core$IDeref$_deref$arity$1(null, ),(cljs.core.deref(column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
tab_stops.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.pop(tab_stops.cljs$core$IDeref$_deref$arity$1(null, )));

return res;

break;
case "begin":
cljs.core.vreset_BANG_(fits,(((cljs.core.deref(fits) > (0)))?(cljs.core.deref(fits) + (1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref(length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_(fits,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (cljs.core.deref(fits) - (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__22196 = function(res,p__21905){
switch(arguments.length){
case 0:
return G__22196__0.call(this);
case 1:
return G__22196__1.call(this,res);
case 2:
return G__22196__2.call(this,res,p__21905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22196.cljs$core$IFn$_invoke$arity$0 = G__22196__0;
G__22196.cljs$core$IFn$_invoke$arity$1 = G__22196__1;
G__22196.cljs$core$IFn$_invoke$arity$2 = G__22196__2;
return G__22196;
})()
});
});
fipp.engine.print_fns = (function fipp$engine$print_fns(options){
var map__22070 = options;
var map__22070__$1 = cljs.core.__destructure_map(map__22070);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22070__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),cljs.core._STAR_print_fn_STAR_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print","print",1299562414),print_fn,new cljs.core.Keyword(null,"println","println",1920840330),(function (){
var _STAR_print_fn_STAR__orig_val__22088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__22089 = print_fn;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22089);

try{return cljs.core.println();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22088);
}})], null);
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__22119 = arguments.length;
switch (G__22119) {
case 1:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1 = (function (document){
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(document,cljs.core.PersistentArrayMap.EMPTY);
}));

(fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2 = (function (document,options){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options], 0));
var map__22144 = fipp.engine.print_fns(options__$1);
var map__22144__$1 = cljs.core.__destructure_map(map__22144);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,new cljs.core.Keyword(null,"print","print",1299562414));
var println = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,new cljs.core.Keyword(null,"println","println",1920840330));
cljs.core.run_BANG_(print,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fipp.engine.annotate_rights,fipp.engine.annotate_begins(options__$1),fipp.engine.format_nodes(options__$1),fipp.engine.serialize(document)], 0)));

return (println.cljs$core$IFn$_invoke$arity$0 ? println.cljs$core$IFn$_invoke$arity$0() : println.call(null, ));
}));

(fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=fipp.engine.js.map
