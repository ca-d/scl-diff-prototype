import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.core.async.impl.protocols.js";
import "./cljs.core.async.impl.channels.js";
import "./cljs.core.async.impl.buffers.js";
import "./cljs.core.async.impl.timers.js";
import "./cljs.core.async.impl.dispatch.js";
import "./cljs.core.async.impl.ioc_helpers.js";
import "./goog.array.array.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14811 = (function (f,blockable,meta14812){
this.f = f;
this.blockable = blockable;
this.meta14812 = meta14812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14813,meta14812__$1){
var self__ = this;
var _14813__$1 = this;
return (new cljs.core.async.t_cljs$core$async14811(self__.f,self__.blockable,meta14812__$1));
}));

(cljs.core.async.t_cljs$core$async14811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14813){
var self__ = this;
var _14813__$1 = this;
return self__.meta14812;
}));

(cljs.core.async.t_cljs$core$async14811.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14812","meta14812",-855915521,null)], null);
}));

(cljs.core.async.t_cljs$core$async14811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14811");

(cljs.core.async.t_cljs$core$async14811.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14811.
 */
cljs.core.async.__GT_t_cljs$core$async14811 = (function cljs$core$async$__GT_t_cljs$core$async14811(f,blockable,meta14812){
return (new cljs.core.async.t_cljs$core$async14811(f,blockable,meta14812));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14802 = arguments.length;
switch (G__14802) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14811(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14872 = arguments.length;
switch (G__14872) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14892 = arguments.length;
switch (G__14892) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14909 = arguments.length;
switch (G__14909) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18475 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18475) : fn1.call(null, val_18475));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18475) : fn1.call(null, val_18475));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14914 = arguments.length;
switch (G__14914) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18492 = n;
var x_18493 = (0);
while(true){
if((x_18493 < n__5593__auto___18492)){
(a[x_18493] = x_18493);

var G__18494 = (x_18493 + (1));
x_18493 = G__18494;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14937 = (function (flag,meta14938){
this.flag = flag;
this.meta14938 = meta14938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14939,meta14938__$1){
var self__ = this;
var _14939__$1 = this;
return (new cljs.core.async.t_cljs$core$async14937(self__.flag,meta14938__$1));
}));

(cljs.core.async.t_cljs$core$async14937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14939){
var self__ = this;
var _14939__$1 = this;
return self__.meta14938;
}));

(cljs.core.async.t_cljs$core$async14937.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14938","meta14938",-827446482,null)], null);
}));

(cljs.core.async.t_cljs$core$async14937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14937");

(cljs.core.async.t_cljs$core$async14937.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14937.
 */
cljs.core.async.__GT_t_cljs$core$async14937 = (function cljs$core$async$__GT_t_cljs$core$async14937(flag,meta14938){
return (new cljs.core.async.t_cljs$core$async14937(flag,meta14938));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14937(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14958 = (function (flag,cb,meta14959){
this.flag = flag;
this.cb = cb;
this.meta14959 = meta14959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14960,meta14959__$1){
var self__ = this;
var _14960__$1 = this;
return (new cljs.core.async.t_cljs$core$async14958(self__.flag,self__.cb,meta14959__$1));
}));

(cljs.core.async.t_cljs$core$async14958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14960){
var self__ = this;
var _14960__$1 = this;
return self__.meta14959;
}));

(cljs.core.async.t_cljs$core$async14958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14959","meta14959",1617346592,null)], null);
}));

(cljs.core.async.t_cljs$core$async14958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14958");

(cljs.core.async.t_cljs$core$async14958.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14958.
 */
cljs.core.async.__GT_t_cljs$core$async14958 = (function cljs$core$async$__GT_t_cljs$core$async14958(flag,cb,meta14959){
return (new cljs.core.async.t_cljs$core$async14958(flag,cb,meta14959));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14958(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14977_SHARP_){
var G__14989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14977_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14989) : fret.call(null, G__14989));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14978_SHARP_){
var G__14995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14978_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14995) : fret.call(null, G__14995));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18505 = (i + (1));
i = G__18505;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18509 = arguments.length;
var i__5727__auto___18512 = (0);
while(true){
if((i__5727__auto___18512 < len__5726__auto___18509)){
args__5732__auto__.push((arguments[i__5727__auto___18512]));

var G__18514 = (i__5727__auto___18512 + (1));
i__5727__auto___18512 = G__18514;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15018){
var map__15019 = p__15018;
var map__15019__$1 = cljs.core.__destructure_map(map__15019);
var opts = map__15019__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15006){
var G__15007 = cljs.core.first(seq15006);
var seq15006__$1 = cljs.core.next(seq15006);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15007,seq15006__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15027 = arguments.length;
switch (G__15027) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14620__auto___18523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15056){
var state_val_15057 = (state_15056[(1)]);
if((state_val_15057 === (7))){
var inst_15052 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15060_18524 = state_15056__$1;
(statearr_15060_18524[(2)] = inst_15052);

(statearr_15060_18524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (1))){
var state_15056__$1 = state_15056;
var statearr_15062_18525 = state_15056__$1;
(statearr_15062_18525[(2)] = null);

(statearr_15062_18525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (4))){
var inst_15034 = (state_15056[(7)]);
var inst_15034__$1 = (state_15056[(2)]);
var inst_15035 = (inst_15034__$1 == null);
var state_15056__$1 = (function (){var statearr_15066 = state_15056;
(statearr_15066[(7)] = inst_15034__$1);

return statearr_15066;
})();
if(cljs.core.truth_(inst_15035)){
var statearr_15067_18529 = state_15056__$1;
(statearr_15067_18529[(1)] = (5));

} else {
var statearr_15068_18530 = state_15056__$1;
(statearr_15068_18530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (13))){
var state_15056__$1 = state_15056;
var statearr_15071_18535 = state_15056__$1;
(statearr_15071_18535[(2)] = null);

(statearr_15071_18535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (6))){
var inst_15034 = (state_15056[(7)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15056__$1,(11),to,inst_15034);
} else {
if((state_val_15057 === (3))){
var inst_15054 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15056__$1,inst_15054);
} else {
if((state_val_15057 === (12))){
var state_15056__$1 = state_15056;
var statearr_15077_18540 = state_15056__$1;
(statearr_15077_18540[(2)] = null);

(statearr_15077_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (2))){
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15056__$1,(4),from);
} else {
if((state_val_15057 === (11))){
var inst_15044 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
if(cljs.core.truth_(inst_15044)){
var statearr_15079_18543 = state_15056__$1;
(statearr_15079_18543[(1)] = (12));

} else {
var statearr_15080_18544 = state_15056__$1;
(statearr_15080_18544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (9))){
var state_15056__$1 = state_15056;
var statearr_15081_18545 = state_15056__$1;
(statearr_15081_18545[(2)] = null);

(statearr_15081_18545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (5))){
var state_15056__$1 = state_15056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15082_18546 = state_15056__$1;
(statearr_15082_18546[(1)] = (8));

} else {
var statearr_15083_18547 = state_15056__$1;
(statearr_15083_18547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (14))){
var inst_15050 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15084_18548 = state_15056__$1;
(statearr_15084_18548[(2)] = inst_15050);

(statearr_15084_18548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (10))){
var inst_15041 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15087_18554 = state_15056__$1;
(statearr_15087_18554[(2)] = inst_15041);

(statearr_15087_18554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (8))){
var inst_15038 = cljs.core.async.close_BANG_(to);
var state_15056__$1 = state_15056;
var statearr_15088_18561 = state_15056__$1;
(statearr_15088_18561[(2)] = inst_15038);

(statearr_15088_18561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_15089 = [null,null,null,null,null,null,null,null];
(statearr_15089[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_15089[(1)] = (1));

return statearr_15089;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_15056){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15056);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15090){var ex__13777__auto__ = e15090;
var statearr_15091_18578 = state_15056;
(statearr_15091_18578[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15056[(4)]))){
var statearr_15093_18579 = state_15056;
(statearr_15093_18579[(1)] = cljs.core.first((state_15056[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18580 = state_15056;
state_15056 = G__18580;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_15056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_15056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15097 = f__14621__auto__();
(statearr_15097[(6)] = c__14620__auto___18523);

return statearr_15097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15105){
var vec__15106 = p__15105;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(1),null);
var job = vec__15106;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14620__auto___18591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15115){
var state_val_15118 = (state_15115[(1)]);
if((state_val_15118 === (1))){
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15115__$1,(2),res,v);
} else {
if((state_val_15118 === (2))){
var inst_15112 = (state_15115[(2)]);
var inst_15113 = cljs.core.async.close_BANG_(res);
var state_15115__$1 = (function (){var statearr_15125 = state_15115;
(statearr_15125[(7)] = inst_15112);

return statearr_15125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15115__$1,inst_15113);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0 = (function (){
var statearr_15126 = [null,null,null,null,null,null,null,null];
(statearr_15126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__);

(statearr_15126[(1)] = (1));

return statearr_15126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1 = (function (state_15115){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15115);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15127){var ex__13777__auto__ = e15127;
var statearr_15128_18604 = state_15115;
(statearr_15128_18604[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15115[(4)]))){
var statearr_15129_18616 = state_15115;
(statearr_15129_18616[(1)] = cljs.core.first((state_15115[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18618 = state_15115;
state_15115 = G__18618;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = function(state_15115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1.call(this,state_15115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15131 = f__14621__auto__();
(statearr_15131[(6)] = c__14620__auto___18591);

return statearr_15131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15132){
var vec__15133 = p__15132;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15133,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15133,(1),null);
var job = vec__15133;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18620 = n;
var __18621 = (0);
while(true){
if((__18621 < n__5593__auto___18620)){
var G__15136_18622 = type;
var G__15136_18623__$1 = (((G__15136_18622 instanceof cljs.core.Keyword))?G__15136_18622.fqn:null);
switch (G__15136_18623__$1) {
case "compute":
var c__14620__auto___18626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18621,c__14620__auto___18626,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async){
return (function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = ((function (__18621,c__14620__auto___18626,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async){
return (function (state_15150){
var state_val_15151 = (state_15150[(1)]);
if((state_val_15151 === (1))){
var state_15150__$1 = state_15150;
var statearr_15152_18629 = state_15150__$1;
(statearr_15152_18629[(2)] = null);

(statearr_15152_18629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (2))){
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15150__$1,(4),jobs);
} else {
if((state_val_15151 === (3))){
var inst_15148 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15150__$1,inst_15148);
} else {
if((state_val_15151 === (4))){
var inst_15140 = (state_15150[(2)]);
var inst_15141 = process__$1(inst_15140);
var state_15150__$1 = state_15150;
if(cljs.core.truth_(inst_15141)){
var statearr_15153_18630 = state_15150__$1;
(statearr_15153_18630[(1)] = (5));

} else {
var statearr_15154_18631 = state_15150__$1;
(statearr_15154_18631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (5))){
var state_15150__$1 = state_15150;
var statearr_15155_18634 = state_15150__$1;
(statearr_15155_18634[(2)] = null);

(statearr_15155_18634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (6))){
var state_15150__$1 = state_15150;
var statearr_15157_18635 = state_15150__$1;
(statearr_15157_18635[(2)] = null);

(statearr_15157_18635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15151 === (7))){
var inst_15146 = (state_15150[(2)]);
var state_15150__$1 = state_15150;
var statearr_15159_18640 = state_15150__$1;
(statearr_15159_18640[(2)] = inst_15146);

(statearr_15159_18640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18621,c__14620__auto___18626,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async))
;
return ((function (__18621,switch__13773__auto__,c__14620__auto___18626,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0 = (function (){
var statearr_15160 = [null,null,null,null,null,null,null];
(statearr_15160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__);

(statearr_15160[(1)] = (1));

return statearr_15160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1 = (function (state_15150){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15150);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15164){var ex__13777__auto__ = e15164;
var statearr_15165_18654 = state_15150;
(statearr_15165_18654[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15150[(4)]))){
var statearr_15166_18659 = state_15150;
(statearr_15166_18659[(1)] = cljs.core.first((state_15150[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18670 = state_15150;
state_15150 = G__18670;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = function(state_15150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1.call(this,state_15150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__;
})()
;})(__18621,switch__13773__auto__,c__14620__auto___18626,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async))
})();
var state__14622__auto__ = (function (){var statearr_15167 = f__14621__auto__();
(statearr_15167[(6)] = c__14620__auto___18626);

return statearr_15167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
});})(__18621,c__14620__auto___18626,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async))
);


break;
case "async":
var c__14620__auto___18672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18621,c__14620__auto___18672,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async){
return (function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = ((function (__18621,c__14620__auto___18672,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async){
return (function (state_15181){
var state_val_15182 = (state_15181[(1)]);
if((state_val_15182 === (1))){
var state_15181__$1 = state_15181;
var statearr_15183_18673 = state_15181__$1;
(statearr_15183_18673[(2)] = null);

(statearr_15183_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (2))){
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15181__$1,(4),jobs);
} else {
if((state_val_15182 === (3))){
var inst_15179 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15181__$1,inst_15179);
} else {
if((state_val_15182 === (4))){
var inst_15171 = (state_15181[(2)]);
var inst_15172 = async(inst_15171);
var state_15181__$1 = state_15181;
if(cljs.core.truth_(inst_15172)){
var statearr_15184_18678 = state_15181__$1;
(statearr_15184_18678[(1)] = (5));

} else {
var statearr_15185_18683 = state_15181__$1;
(statearr_15185_18683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (5))){
var state_15181__$1 = state_15181;
var statearr_15188_18684 = state_15181__$1;
(statearr_15188_18684[(2)] = null);

(statearr_15188_18684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (6))){
var state_15181__$1 = state_15181;
var statearr_15189_18692 = state_15181__$1;
(statearr_15189_18692[(2)] = null);

(statearr_15189_18692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (7))){
var inst_15177 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15192_18695 = state_15181__$1;
(statearr_15192_18695[(2)] = inst_15177);

(statearr_15192_18695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18621,c__14620__auto___18672,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async))
;
return ((function (__18621,switch__13773__auto__,c__14620__auto___18672,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0 = (function (){
var statearr_15195 = [null,null,null,null,null,null,null];
(statearr_15195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__);

(statearr_15195[(1)] = (1));

return statearr_15195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1 = (function (state_15181){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15181);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15196){var ex__13777__auto__ = e15196;
var statearr_15197_18710 = state_15181;
(statearr_15197_18710[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15181[(4)]))){
var statearr_15198_18717 = state_15181;
(statearr_15198_18717[(1)] = cljs.core.first((state_15181[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18718 = state_15181;
state_15181 = G__18718;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = function(state_15181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1.call(this,state_15181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__;
})()
;})(__18621,switch__13773__auto__,c__14620__auto___18672,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async))
})();
var state__14622__auto__ = (function (){var statearr_15204 = f__14621__auto__();
(statearr_15204[(6)] = c__14620__auto___18672);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
});})(__18621,c__14620__auto___18672,G__15136_18622,G__15136_18623__$1,n__5593__auto___18620,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15136_18623__$1)].join('')));

}

var G__18723 = (__18621 + (1));
__18621 = G__18723;
continue;
} else {
}
break;
}

var c__14620__auto___18724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15228){
var state_val_15230 = (state_15228[(1)]);
if((state_val_15230 === (7))){
var inst_15224 = (state_15228[(2)]);
var state_15228__$1 = state_15228;
var statearr_15238_18726 = state_15228__$1;
(statearr_15238_18726[(2)] = inst_15224);

(statearr_15238_18726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (1))){
var state_15228__$1 = state_15228;
var statearr_15242_18732 = state_15228__$1;
(statearr_15242_18732[(2)] = null);

(statearr_15242_18732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (4))){
var inst_15209 = (state_15228[(7)]);
var inst_15209__$1 = (state_15228[(2)]);
var inst_15210 = (inst_15209__$1 == null);
var state_15228__$1 = (function (){var statearr_15243 = state_15228;
(statearr_15243[(7)] = inst_15209__$1);

return statearr_15243;
})();
if(cljs.core.truth_(inst_15210)){
var statearr_15244_18743 = state_15228__$1;
(statearr_15244_18743[(1)] = (5));

} else {
var statearr_15245_18748 = state_15228__$1;
(statearr_15245_18748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (6))){
var inst_15214 = (state_15228[(8)]);
var inst_15209 = (state_15228[(7)]);
var inst_15214__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15216 = [inst_15209,inst_15214__$1];
var inst_15217 = (new cljs.core.PersistentVector(null,2,(5),inst_15215,inst_15216,null));
var state_15228__$1 = (function (){var statearr_15248 = state_15228;
(statearr_15248[(8)] = inst_15214__$1);

return statearr_15248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15228__$1,(8),jobs,inst_15217);
} else {
if((state_val_15230 === (3))){
var inst_15226 = (state_15228[(2)]);
var state_15228__$1 = state_15228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15228__$1,inst_15226);
} else {
if((state_val_15230 === (2))){
var state_15228__$1 = state_15228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15228__$1,(4),from);
} else {
if((state_val_15230 === (9))){
var inst_15221 = (state_15228[(2)]);
var state_15228__$1 = (function (){var statearr_15257 = state_15228;
(statearr_15257[(9)] = inst_15221);

return statearr_15257;
})();
var statearr_15259_18759 = state_15228__$1;
(statearr_15259_18759[(2)] = null);

(statearr_15259_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (5))){
var inst_15212 = cljs.core.async.close_BANG_(jobs);
var state_15228__$1 = state_15228;
var statearr_15260_18760 = state_15228__$1;
(statearr_15260_18760[(2)] = inst_15212);

(statearr_15260_18760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (8))){
var inst_15214 = (state_15228[(8)]);
var inst_15219 = (state_15228[(2)]);
var state_15228__$1 = (function (){var statearr_15265 = state_15228;
(statearr_15265[(10)] = inst_15219);

return statearr_15265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15228__$1,(9),results,inst_15214);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0 = (function (){
var statearr_15270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__);

(statearr_15270[(1)] = (1));

return statearr_15270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1 = (function (state_15228){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15228);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15273){var ex__13777__auto__ = e15273;
var statearr_15276_18771 = state_15228;
(statearr_15276_18771[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15228[(4)]))){
var statearr_15280_18772 = state_15228;
(statearr_15280_18772[(1)] = cljs.core.first((state_15228[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18774 = state_15228;
state_15228 = G__18774;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = function(state_15228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1.call(this,state_15228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15283 = f__14621__auto__();
(statearr_15283[(6)] = c__14620__auto___18724);

return statearr_15283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


var c__14620__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15339){
var state_val_15340 = (state_15339[(1)]);
if((state_val_15340 === (7))){
var inst_15334 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15348_18775 = state_15339__$1;
(statearr_15348_18775[(2)] = inst_15334);

(statearr_15348_18775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (20))){
var state_15339__$1 = state_15339;
var statearr_15353_18776 = state_15339__$1;
(statearr_15353_18776[(2)] = null);

(statearr_15353_18776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (1))){
var state_15339__$1 = state_15339;
var statearr_15355_18777 = state_15339__$1;
(statearr_15355_18777[(2)] = null);

(statearr_15355_18777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (4))){
var inst_15294 = (state_15339[(7)]);
var inst_15294__$1 = (state_15339[(2)]);
var inst_15297 = (inst_15294__$1 == null);
var state_15339__$1 = (function (){var statearr_15363 = state_15339;
(statearr_15363[(7)] = inst_15294__$1);

return statearr_15363;
})();
if(cljs.core.truth_(inst_15297)){
var statearr_15366_18779 = state_15339__$1;
(statearr_15366_18779[(1)] = (5));

} else {
var statearr_15368_18780 = state_15339__$1;
(statearr_15368_18780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (15))){
var inst_15312 = (state_15339[(8)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15339__$1,(18),to,inst_15312);
} else {
if((state_val_15340 === (21))){
var inst_15329 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15370_18784 = state_15339__$1;
(statearr_15370_18784[(2)] = inst_15329);

(statearr_15370_18784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (13))){
var inst_15331 = (state_15339[(2)]);
var state_15339__$1 = (function (){var statearr_15372 = state_15339;
(statearr_15372[(9)] = inst_15331);

return statearr_15372;
})();
var statearr_15375_18797 = state_15339__$1;
(statearr_15375_18797[(2)] = null);

(statearr_15375_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (6))){
var inst_15294 = (state_15339[(7)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15339__$1,(11),inst_15294);
} else {
if((state_val_15340 === (17))){
var inst_15324 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
if(cljs.core.truth_(inst_15324)){
var statearr_15385_18799 = state_15339__$1;
(statearr_15385_18799[(1)] = (19));

} else {
var statearr_15387_18801 = state_15339__$1;
(statearr_15387_18801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (3))){
var inst_15336 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15339__$1,inst_15336);
} else {
if((state_val_15340 === (12))){
var inst_15308 = (state_15339[(10)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15339__$1,(14),inst_15308);
} else {
if((state_val_15340 === (2))){
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15339__$1,(4),results);
} else {
if((state_val_15340 === (19))){
var state_15339__$1 = state_15339;
var statearr_15399_18807 = state_15339__$1;
(statearr_15399_18807[(2)] = null);

(statearr_15399_18807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (11))){
var inst_15308 = (state_15339[(2)]);
var state_15339__$1 = (function (){var statearr_15401 = state_15339;
(statearr_15401[(10)] = inst_15308);

return statearr_15401;
})();
var statearr_15402_18810 = state_15339__$1;
(statearr_15402_18810[(2)] = null);

(statearr_15402_18810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (9))){
var state_15339__$1 = state_15339;
var statearr_15405_18814 = state_15339__$1;
(statearr_15405_18814[(2)] = null);

(statearr_15405_18814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (5))){
var state_15339__$1 = state_15339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15407_18815 = state_15339__$1;
(statearr_15407_18815[(1)] = (8));

} else {
var statearr_15409_18818 = state_15339__$1;
(statearr_15409_18818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (14))){
var inst_15312 = (state_15339[(8)]);
var inst_15315 = (state_15339[(11)]);
var inst_15312__$1 = (state_15339[(2)]);
var inst_15314 = (inst_15312__$1 == null);
var inst_15315__$1 = cljs.core.not(inst_15314);
var state_15339__$1 = (function (){var statearr_15417 = state_15339;
(statearr_15417[(8)] = inst_15312__$1);

(statearr_15417[(11)] = inst_15315__$1);

return statearr_15417;
})();
if(inst_15315__$1){
var statearr_15419_18820 = state_15339__$1;
(statearr_15419_18820[(1)] = (15));

} else {
var statearr_15420_18821 = state_15339__$1;
(statearr_15420_18821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (16))){
var inst_15315 = (state_15339[(11)]);
var state_15339__$1 = state_15339;
var statearr_15422_18822 = state_15339__$1;
(statearr_15422_18822[(2)] = inst_15315);

(statearr_15422_18822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (10))){
var inst_15305 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15426_18824 = state_15339__$1;
(statearr_15426_18824[(2)] = inst_15305);

(statearr_15426_18824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (18))){
var inst_15320 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15427_18827 = state_15339__$1;
(statearr_15427_18827[(2)] = inst_15320);

(statearr_15427_18827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (8))){
var inst_15302 = cljs.core.async.close_BANG_(to);
var state_15339__$1 = state_15339;
var statearr_15428_18828 = state_15339__$1;
(statearr_15428_18828[(2)] = inst_15302);

(statearr_15428_18828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0 = (function (){
var statearr_15442 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__);

(statearr_15442[(1)] = (1));

return statearr_15442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1 = (function (state_15339){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15339);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15443){var ex__13777__auto__ = e15443;
var statearr_15444_18834 = state_15339;
(statearr_15444_18834[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15339[(4)]))){
var statearr_15445_18836 = state_15339;
(statearr_15445_18836[(1)] = cljs.core.first((state_15339[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18841 = state_15339;
state_15339 = G__18841;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13774__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15450 = f__14621__auto__();
(statearr_15450[(6)] = c__14620__auto__);

return statearr_15450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));

return c__14620__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15454 = arguments.length;
switch (G__15454) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15468 = arguments.length;
switch (G__15468) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15473 = arguments.length;
switch (G__15473) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14620__auto___18860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15514){
var state_val_15515 = (state_15514[(1)]);
if((state_val_15515 === (7))){
var inst_15509 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
var statearr_15522_18866 = state_15514__$1;
(statearr_15522_18866[(2)] = inst_15509);

(statearr_15522_18866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (1))){
var state_15514__$1 = state_15514;
var statearr_15525_18867 = state_15514__$1;
(statearr_15525_18867[(2)] = null);

(statearr_15525_18867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (4))){
var inst_15485 = (state_15514[(7)]);
var inst_15485__$1 = (state_15514[(2)]);
var inst_15486 = (inst_15485__$1 == null);
var state_15514__$1 = (function (){var statearr_15528 = state_15514;
(statearr_15528[(7)] = inst_15485__$1);

return statearr_15528;
})();
if(cljs.core.truth_(inst_15486)){
var statearr_15529_18877 = state_15514__$1;
(statearr_15529_18877[(1)] = (5));

} else {
var statearr_15530_18880 = state_15514__$1;
(statearr_15530_18880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (13))){
var state_15514__$1 = state_15514;
var statearr_15533_18882 = state_15514__$1;
(statearr_15533_18882[(2)] = null);

(statearr_15533_18882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (6))){
var inst_15485 = (state_15514[(7)]);
var inst_15493 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15485) : p.call(null, inst_15485));
var state_15514__$1 = state_15514;
if(cljs.core.truth_(inst_15493)){
var statearr_15535_18885 = state_15514__$1;
(statearr_15535_18885[(1)] = (9));

} else {
var statearr_15536_18887 = state_15514__$1;
(statearr_15536_18887[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (3))){
var inst_15512 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15514__$1,inst_15512);
} else {
if((state_val_15515 === (12))){
var state_15514__$1 = state_15514;
var statearr_15545_18888 = state_15514__$1;
(statearr_15545_18888[(2)] = null);

(statearr_15545_18888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (2))){
var state_15514__$1 = state_15514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15514__$1,(4),ch);
} else {
if((state_val_15515 === (11))){
var inst_15485 = (state_15514[(7)]);
var inst_15499 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15514__$1,(8),inst_15499,inst_15485);
} else {
if((state_val_15515 === (9))){
var state_15514__$1 = state_15514;
var statearr_15553_18897 = state_15514__$1;
(statearr_15553_18897[(2)] = tc);

(statearr_15553_18897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (5))){
var inst_15489 = cljs.core.async.close_BANG_(tc);
var inst_15490 = cljs.core.async.close_BANG_(fc);
var state_15514__$1 = (function (){var statearr_15555 = state_15514;
(statearr_15555[(8)] = inst_15489);

return statearr_15555;
})();
var statearr_15558_18910 = state_15514__$1;
(statearr_15558_18910[(2)] = inst_15490);

(statearr_15558_18910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (14))){
var inst_15506 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
var statearr_15560_18911 = state_15514__$1;
(statearr_15560_18911[(2)] = inst_15506);

(statearr_15560_18911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (10))){
var state_15514__$1 = state_15514;
var statearr_15562_18913 = state_15514__$1;
(statearr_15562_18913[(2)] = fc);

(statearr_15562_18913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (8))){
var inst_15501 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
if(cljs.core.truth_(inst_15501)){
var statearr_15567_18918 = state_15514__$1;
(statearr_15567_18918[(1)] = (12));

} else {
var statearr_15568_18919 = state_15514__$1;
(statearr_15568_18919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_15569 = [null,null,null,null,null,null,null,null,null];
(statearr_15569[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_15569[(1)] = (1));

return statearr_15569;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_15514){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15514);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15571){var ex__13777__auto__ = e15571;
var statearr_15575_18920 = state_15514;
(statearr_15575_18920[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15514[(4)]))){
var statearr_15579_18921 = state_15514;
(statearr_15579_18921[(1)] = cljs.core.first((state_15514[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18922 = state_15514;
state_15514 = G__18922;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_15514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_15514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15580 = f__14621__auto__();
(statearr_15580[(6)] = c__14620__auto___18860);

return statearr_15580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14620__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15613){
var state_val_15614 = (state_15613[(1)]);
if((state_val_15614 === (7))){
var inst_15607 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15623_18926 = state_15613__$1;
(statearr_15623_18926[(2)] = inst_15607);

(statearr_15623_18926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (1))){
var inst_15586 = init;
var inst_15587 = inst_15586;
var state_15613__$1 = (function (){var statearr_15629 = state_15613;
(statearr_15629[(7)] = inst_15587);

return statearr_15629;
})();
var statearr_15630_18931 = state_15613__$1;
(statearr_15630_18931[(2)] = null);

(statearr_15630_18931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (4))){
var inst_15590 = (state_15613[(8)]);
var inst_15590__$1 = (state_15613[(2)]);
var inst_15591 = (inst_15590__$1 == null);
var state_15613__$1 = (function (){var statearr_15634 = state_15613;
(statearr_15634[(8)] = inst_15590__$1);

return statearr_15634;
})();
if(cljs.core.truth_(inst_15591)){
var statearr_15635_18932 = state_15613__$1;
(statearr_15635_18932[(1)] = (5));

} else {
var statearr_15636_18933 = state_15613__$1;
(statearr_15636_18933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (6))){
var inst_15587 = (state_15613[(7)]);
var inst_15595 = (state_15613[(9)]);
var inst_15590 = (state_15613[(8)]);
var inst_15595__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15587,inst_15590) : f.call(null, inst_15587,inst_15590));
var inst_15596 = cljs.core.reduced_QMARK_(inst_15595__$1);
var state_15613__$1 = (function (){var statearr_15638 = state_15613;
(statearr_15638[(9)] = inst_15595__$1);

return statearr_15638;
})();
if(inst_15596){
var statearr_15639_18935 = state_15613__$1;
(statearr_15639_18935[(1)] = (8));

} else {
var statearr_15640_18940 = state_15613__$1;
(statearr_15640_18940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (3))){
var inst_15611 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15613__$1,inst_15611);
} else {
if((state_val_15614 === (2))){
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15613__$1,(4),ch);
} else {
if((state_val_15614 === (9))){
var inst_15595 = (state_15613[(9)]);
var inst_15587 = inst_15595;
var state_15613__$1 = (function (){var statearr_15644 = state_15613;
(statearr_15644[(7)] = inst_15587);

return statearr_15644;
})();
var statearr_15645_18941 = state_15613__$1;
(statearr_15645_18941[(2)] = null);

(statearr_15645_18941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (5))){
var inst_15587 = (state_15613[(7)]);
var state_15613__$1 = state_15613;
var statearr_15647_18943 = state_15613__$1;
(statearr_15647_18943[(2)] = inst_15587);

(statearr_15647_18943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (10))){
var inst_15605 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15649_18948 = state_15613__$1;
(statearr_15649_18948[(2)] = inst_15605);

(statearr_15649_18948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (8))){
var inst_15595 = (state_15613[(9)]);
var inst_15601 = cljs.core.deref(inst_15595);
var state_15613__$1 = state_15613;
var statearr_15651_18949 = state_15613__$1;
(statearr_15651_18949[(2)] = inst_15601);

(statearr_15651_18949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13774__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13774__auto____0 = (function (){
var statearr_15652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15652[(0)] = cljs$core$async$reduce_$_state_machine__13774__auto__);

(statearr_15652[(1)] = (1));

return statearr_15652;
});
var cljs$core$async$reduce_$_state_machine__13774__auto____1 = (function (state_15613){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15613);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15656){var ex__13777__auto__ = e15656;
var statearr_15657_18950 = state_15613;
(statearr_15657_18950[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15613[(4)]))){
var statearr_15662_18953 = state_15613;
(statearr_15662_18953[(1)] = cljs.core.first((state_15613[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18954 = state_15613;
state_15613 = G__18954;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13774__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13774__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13774__auto____0;
cljs$core$async$reduce_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13774__auto____1;
return cljs$core$async$reduce_$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15668 = f__14621__auto__();
(statearr_15668[(6)] = c__14620__auto__);

return statearr_15668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));

return c__14620__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14620__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15685){
var state_val_15686 = (state_15685[(1)]);
if((state_val_15686 === (1))){
var inst_15679 = cljs.core.async.reduce(f__$1,init,ch);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15685__$1,(2),inst_15679);
} else {
if((state_val_15686 === (2))){
var inst_15681 = (state_15685[(2)]);
var inst_15683 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15681) : f__$1.call(null, inst_15681));
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15685__$1,inst_15683);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13774__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13774__auto____0 = (function (){
var statearr_15698 = [null,null,null,null,null,null,null];
(statearr_15698[(0)] = cljs$core$async$transduce_$_state_machine__13774__auto__);

(statearr_15698[(1)] = (1));

return statearr_15698;
});
var cljs$core$async$transduce_$_state_machine__13774__auto____1 = (function (state_15685){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15685);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15700){var ex__13777__auto__ = e15700;
var statearr_15701_18969 = state_15685;
(statearr_15701_18969[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15685[(4)]))){
var statearr_15703_18970 = state_15685;
(statearr_15703_18970[(1)] = cljs.core.first((state_15685[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18971 = state_15685;
state_15685 = G__18971;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13774__auto__ = function(state_15685){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13774__auto____1.call(this,state_15685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13774__auto____0;
cljs$core$async$transduce_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13774__auto____1;
return cljs$core$async$transduce_$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15716 = f__14621__auto__();
(statearr_15716[(6)] = c__14620__auto__);

return statearr_15716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));

return c__14620__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15726 = arguments.length;
switch (G__15726) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14620__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_15763){
var state_val_15765 = (state_15763[(1)]);
if((state_val_15765 === (7))){
var inst_15742 = (state_15763[(2)]);
var state_15763__$1 = state_15763;
var statearr_15771_18982 = state_15763__$1;
(statearr_15771_18982[(2)] = inst_15742);

(statearr_15771_18982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (1))){
var inst_15735 = cljs.core.seq(coll);
var inst_15736 = inst_15735;
var state_15763__$1 = (function (){var statearr_15777 = state_15763;
(statearr_15777[(7)] = inst_15736);

return statearr_15777;
})();
var statearr_15778_18986 = state_15763__$1;
(statearr_15778_18986[(2)] = null);

(statearr_15778_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (4))){
var inst_15736 = (state_15763[(7)]);
var inst_15740 = cljs.core.first(inst_15736);
var state_15763__$1 = state_15763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15763__$1,(7),ch,inst_15740);
} else {
if((state_val_15765 === (13))){
var inst_15756 = (state_15763[(2)]);
var state_15763__$1 = state_15763;
var statearr_15785_18987 = state_15763__$1;
(statearr_15785_18987[(2)] = inst_15756);

(statearr_15785_18987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (6))){
var inst_15745 = (state_15763[(2)]);
var state_15763__$1 = state_15763;
if(cljs.core.truth_(inst_15745)){
var statearr_15789_18993 = state_15763__$1;
(statearr_15789_18993[(1)] = (8));

} else {
var statearr_15792_18995 = state_15763__$1;
(statearr_15792_18995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (3))){
var inst_15761 = (state_15763[(2)]);
var state_15763__$1 = state_15763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15763__$1,inst_15761);
} else {
if((state_val_15765 === (12))){
var state_15763__$1 = state_15763;
var statearr_15796_18997 = state_15763__$1;
(statearr_15796_18997[(2)] = null);

(statearr_15796_18997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (2))){
var inst_15736 = (state_15763[(7)]);
var state_15763__$1 = state_15763;
if(cljs.core.truth_(inst_15736)){
var statearr_15799_18998 = state_15763__$1;
(statearr_15799_18998[(1)] = (4));

} else {
var statearr_15801_18999 = state_15763__$1;
(statearr_15801_18999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (11))){
var inst_15753 = cljs.core.async.close_BANG_(ch);
var state_15763__$1 = state_15763;
var statearr_15804_19002 = state_15763__$1;
(statearr_15804_19002[(2)] = inst_15753);

(statearr_15804_19002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (9))){
var state_15763__$1 = state_15763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15807_19004 = state_15763__$1;
(statearr_15807_19004[(1)] = (11));

} else {
var statearr_15809_19005 = state_15763__$1;
(statearr_15809_19005[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (5))){
var inst_15736 = (state_15763[(7)]);
var state_15763__$1 = state_15763;
var statearr_15819_19006 = state_15763__$1;
(statearr_15819_19006[(2)] = inst_15736);

(statearr_15819_19006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (10))){
var inst_15758 = (state_15763[(2)]);
var state_15763__$1 = state_15763;
var statearr_15821_19007 = state_15763__$1;
(statearr_15821_19007[(2)] = inst_15758);

(statearr_15821_19007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (8))){
var inst_15736 = (state_15763[(7)]);
var inst_15747 = cljs.core.next(inst_15736);
var inst_15736__$1 = inst_15747;
var state_15763__$1 = (function (){var statearr_15824 = state_15763;
(statearr_15824[(7)] = inst_15736__$1);

return statearr_15824;
})();
var statearr_15826_19014 = state_15763__$1;
(statearr_15826_19014[(2)] = null);

(statearr_15826_19014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_15829 = [null,null,null,null,null,null,null,null];
(statearr_15829[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_15829[(1)] = (1));

return statearr_15829;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_15763){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_15763);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e15832){var ex__13777__auto__ = e15832;
var statearr_15834_19021 = state_15763;
(statearr_15834_19021[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_15763[(4)]))){
var statearr_15836_19022 = state_15763;
(statearr_15836_19022[(1)] = cljs.core.first((state_15763[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19023 = state_15763;
state_15763 = G__19023;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_15763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_15763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_15844 = f__14621__auto__();
(statearr_15844[(6)] = c__14620__auto__);

return statearr_15844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));

return c__14620__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15857 = arguments.length;
switch (G__15857) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19030 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19030(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19032 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19032(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19039 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19039(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19043 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19043(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15915 = (function (ch,cs,meta15916){
this.ch = ch;
this.cs = cs;
this.meta15916 = meta15916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15917,meta15916__$1){
var self__ = this;
var _15917__$1 = this;
return (new cljs.core.async.t_cljs$core$async15915(self__.ch,self__.cs,meta15916__$1));
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15917){
var self__ = this;
var _15917__$1 = this;
return self__.meta15916;
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15916","meta15916",-1805104511,null)], null);
}));

(cljs.core.async.t_cljs$core$async15915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15915");

(cljs.core.async.t_cljs$core$async15915.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15915.
 */
cljs.core.async.__GT_t_cljs$core$async15915 = (function cljs$core$async$__GT_t_cljs$core$async15915(ch,cs,meta15916){
return (new cljs.core.async.t_cljs$core$async15915(ch,cs,meta15916));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15915(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14620__auto___19056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_16117){
var state_val_16118 = (state_16117[(1)]);
if((state_val_16118 === (7))){
var inst_16105 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16123_19060 = state_16117__$1;
(statearr_16123_19060[(2)] = inst_16105);

(statearr_16123_19060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (20))){
var inst_15992 = (state_16117[(7)]);
var inst_16010 = cljs.core.first(inst_15992);
var inst_16011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16010,(0),null);
var inst_16013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16010,(1),null);
var state_16117__$1 = (function (){var statearr_16130 = state_16117;
(statearr_16130[(8)] = inst_16011);

return statearr_16130;
})();
if(cljs.core.truth_(inst_16013)){
var statearr_16131_19063 = state_16117__$1;
(statearr_16131_19063[(1)] = (22));

} else {
var statearr_16132_19064 = state_16117__$1;
(statearr_16132_19064[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (27))){
var inst_15951 = (state_16117[(9)]);
var inst_16052 = (state_16117[(10)]);
var inst_16042 = (state_16117[(11)]);
var inst_16044 = (state_16117[(12)]);
var inst_16052__$1 = cljs.core._nth(inst_16042,inst_16044);
var inst_16053 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16052__$1,inst_15951,done);
var state_16117__$1 = (function (){var statearr_16138 = state_16117;
(statearr_16138[(10)] = inst_16052__$1);

return statearr_16138;
})();
if(cljs.core.truth_(inst_16053)){
var statearr_16139_19065 = state_16117__$1;
(statearr_16139_19065[(1)] = (30));

} else {
var statearr_16140_19066 = state_16117__$1;
(statearr_16140_19066[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (1))){
var state_16117__$1 = state_16117;
var statearr_16142_19067 = state_16117__$1;
(statearr_16142_19067[(2)] = null);

(statearr_16142_19067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (24))){
var inst_15992 = (state_16117[(7)]);
var inst_16018 = (state_16117[(2)]);
var inst_16019 = cljs.core.next(inst_15992);
var inst_15965 = inst_16019;
var inst_15966 = null;
var inst_15967 = (0);
var inst_15968 = (0);
var state_16117__$1 = (function (){var statearr_16146 = state_16117;
(statearr_16146[(13)] = inst_15966);

(statearr_16146[(14)] = inst_15965);

(statearr_16146[(15)] = inst_16018);

(statearr_16146[(16)] = inst_15968);

(statearr_16146[(17)] = inst_15967);

return statearr_16146;
})();
var statearr_16147_19068 = state_16117__$1;
(statearr_16147_19068[(2)] = null);

(statearr_16147_19068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (39))){
var state_16117__$1 = state_16117;
var statearr_16154_19073 = state_16117__$1;
(statearr_16154_19073[(2)] = null);

(statearr_16154_19073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (4))){
var inst_15951 = (state_16117[(9)]);
var inst_15951__$1 = (state_16117[(2)]);
var inst_15956 = (inst_15951__$1 == null);
var state_16117__$1 = (function (){var statearr_16159 = state_16117;
(statearr_16159[(9)] = inst_15951__$1);

return statearr_16159;
})();
if(cljs.core.truth_(inst_15956)){
var statearr_16161_19074 = state_16117__$1;
(statearr_16161_19074[(1)] = (5));

} else {
var statearr_16162_19075 = state_16117__$1;
(statearr_16162_19075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (15))){
var inst_15966 = (state_16117[(13)]);
var inst_15965 = (state_16117[(14)]);
var inst_15968 = (state_16117[(16)]);
var inst_15967 = (state_16117[(17)]);
var inst_15986 = (state_16117[(2)]);
var inst_15989 = (inst_15968 + (1));
var tmp16149 = inst_15966;
var tmp16150 = inst_15965;
var tmp16151 = inst_15967;
var inst_15965__$1 = tmp16150;
var inst_15966__$1 = tmp16149;
var inst_15967__$1 = tmp16151;
var inst_15968__$1 = inst_15989;
var state_16117__$1 = (function (){var statearr_16171 = state_16117;
(statearr_16171[(13)] = inst_15966__$1);

(statearr_16171[(14)] = inst_15965__$1);

(statearr_16171[(18)] = inst_15986);

(statearr_16171[(16)] = inst_15968__$1);

(statearr_16171[(17)] = inst_15967__$1);

return statearr_16171;
})();
var statearr_16173_19079 = state_16117__$1;
(statearr_16173_19079[(2)] = null);

(statearr_16173_19079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (21))){
var inst_16022 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16180_19083 = state_16117__$1;
(statearr_16180_19083[(2)] = inst_16022);

(statearr_16180_19083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (31))){
var inst_16052 = (state_16117[(10)]);
var inst_16056 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16052);
var state_16117__$1 = state_16117;
var statearr_16183_19085 = state_16117__$1;
(statearr_16183_19085[(2)] = inst_16056);

(statearr_16183_19085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (32))){
var inst_16043 = (state_16117[(19)]);
var inst_16042 = (state_16117[(11)]);
var inst_16044 = (state_16117[(12)]);
var inst_16041 = (state_16117[(20)]);
var inst_16058 = (state_16117[(2)]);
var inst_16060 = (inst_16044 + (1));
var tmp16174 = inst_16043;
var tmp16175 = inst_16042;
var tmp16176 = inst_16041;
var inst_16041__$1 = tmp16176;
var inst_16042__$1 = tmp16175;
var inst_16043__$1 = tmp16174;
var inst_16044__$1 = inst_16060;
var state_16117__$1 = (function (){var statearr_16188 = state_16117;
(statearr_16188[(21)] = inst_16058);

(statearr_16188[(19)] = inst_16043__$1);

(statearr_16188[(11)] = inst_16042__$1);

(statearr_16188[(12)] = inst_16044__$1);

(statearr_16188[(20)] = inst_16041__$1);

return statearr_16188;
})();
var statearr_16190_19098 = state_16117__$1;
(statearr_16190_19098[(2)] = null);

(statearr_16190_19098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (40))){
var inst_16075 = (state_16117[(22)]);
var inst_16081 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16075);
var state_16117__$1 = state_16117;
var statearr_16194_19099 = state_16117__$1;
(statearr_16194_19099[(2)] = inst_16081);

(statearr_16194_19099[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (33))){
var inst_16063 = (state_16117[(23)]);
var inst_16066 = cljs.core.chunked_seq_QMARK_(inst_16063);
var state_16117__$1 = state_16117;
if(inst_16066){
var statearr_16195_19104 = state_16117__$1;
(statearr_16195_19104[(1)] = (36));

} else {
var statearr_16196_19105 = state_16117__$1;
(statearr_16196_19105[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (13))){
var inst_15979 = (state_16117[(24)]);
var inst_15982 = cljs.core.async.close_BANG_(inst_15979);
var state_16117__$1 = state_16117;
var statearr_16198_19106 = state_16117__$1;
(statearr_16198_19106[(2)] = inst_15982);

(statearr_16198_19106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (22))){
var inst_16011 = (state_16117[(8)]);
var inst_16015 = cljs.core.async.close_BANG_(inst_16011);
var state_16117__$1 = state_16117;
var statearr_16199_19111 = state_16117__$1;
(statearr_16199_19111[(2)] = inst_16015);

(statearr_16199_19111[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (36))){
var inst_16063 = (state_16117[(23)]);
var inst_16070 = cljs.core.chunk_first(inst_16063);
var inst_16071 = cljs.core.chunk_rest(inst_16063);
var inst_16072 = cljs.core.count(inst_16070);
var inst_16041 = inst_16071;
var inst_16042 = inst_16070;
var inst_16043 = inst_16072;
var inst_16044 = (0);
var state_16117__$1 = (function (){var statearr_16200 = state_16117;
(statearr_16200[(19)] = inst_16043);

(statearr_16200[(11)] = inst_16042);

(statearr_16200[(12)] = inst_16044);

(statearr_16200[(20)] = inst_16041);

return statearr_16200;
})();
var statearr_16201_19112 = state_16117__$1;
(statearr_16201_19112[(2)] = null);

(statearr_16201_19112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (41))){
var inst_16063 = (state_16117[(23)]);
var inst_16083 = (state_16117[(2)]);
var inst_16084 = cljs.core.next(inst_16063);
var inst_16041 = inst_16084;
var inst_16042 = null;
var inst_16043 = (0);
var inst_16044 = (0);
var state_16117__$1 = (function (){var statearr_16202 = state_16117;
(statearr_16202[(25)] = inst_16083);

(statearr_16202[(19)] = inst_16043);

(statearr_16202[(11)] = inst_16042);

(statearr_16202[(12)] = inst_16044);

(statearr_16202[(20)] = inst_16041);

return statearr_16202;
})();
var statearr_16203_19117 = state_16117__$1;
(statearr_16203_19117[(2)] = null);

(statearr_16203_19117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (43))){
var state_16117__$1 = state_16117;
var statearr_16204_19118 = state_16117__$1;
(statearr_16204_19118[(2)] = null);

(statearr_16204_19118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (29))){
var inst_16093 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16205_19119 = state_16117__$1;
(statearr_16205_19119[(2)] = inst_16093);

(statearr_16205_19119[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (44))){
var inst_16102 = (state_16117[(2)]);
var state_16117__$1 = (function (){var statearr_16207 = state_16117;
(statearr_16207[(26)] = inst_16102);

return statearr_16207;
})();
var statearr_16208_19120 = state_16117__$1;
(statearr_16208_19120[(2)] = null);

(statearr_16208_19120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (6))){
var inst_16033 = (state_16117[(27)]);
var inst_16032 = cljs.core.deref(cs);
var inst_16033__$1 = cljs.core.keys(inst_16032);
var inst_16034 = cljs.core.count(inst_16033__$1);
var inst_16035 = cljs.core.reset_BANG_(dctr,inst_16034);
var inst_16040 = cljs.core.seq(inst_16033__$1);
var inst_16041 = inst_16040;
var inst_16042 = null;
var inst_16043 = (0);
var inst_16044 = (0);
var state_16117__$1 = (function (){var statearr_16209 = state_16117;
(statearr_16209[(27)] = inst_16033__$1);

(statearr_16209[(19)] = inst_16043);

(statearr_16209[(28)] = inst_16035);

(statearr_16209[(11)] = inst_16042);

(statearr_16209[(12)] = inst_16044);

(statearr_16209[(20)] = inst_16041);

return statearr_16209;
})();
var statearr_16211_19125 = state_16117__$1;
(statearr_16211_19125[(2)] = null);

(statearr_16211_19125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (28))){
var inst_16063 = (state_16117[(23)]);
var inst_16041 = (state_16117[(20)]);
var inst_16063__$1 = cljs.core.seq(inst_16041);
var state_16117__$1 = (function (){var statearr_16212 = state_16117;
(statearr_16212[(23)] = inst_16063__$1);

return statearr_16212;
})();
if(inst_16063__$1){
var statearr_16214_19129 = state_16117__$1;
(statearr_16214_19129[(1)] = (33));

} else {
var statearr_16216_19130 = state_16117__$1;
(statearr_16216_19130[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (25))){
var inst_16043 = (state_16117[(19)]);
var inst_16044 = (state_16117[(12)]);
var inst_16048 = (inst_16044 < inst_16043);
var inst_16049 = inst_16048;
var state_16117__$1 = state_16117;
if(cljs.core.truth_(inst_16049)){
var statearr_16219_19131 = state_16117__$1;
(statearr_16219_19131[(1)] = (27));

} else {
var statearr_16220_19132 = state_16117__$1;
(statearr_16220_19132[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (34))){
var state_16117__$1 = state_16117;
var statearr_16221_19133 = state_16117__$1;
(statearr_16221_19133[(2)] = null);

(statearr_16221_19133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (17))){
var state_16117__$1 = state_16117;
var statearr_16225_19134 = state_16117__$1;
(statearr_16225_19134[(2)] = null);

(statearr_16225_19134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (3))){
var inst_16108 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16117__$1,inst_16108);
} else {
if((state_val_16118 === (12))){
var inst_16027 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16236_19136 = state_16117__$1;
(statearr_16236_19136[(2)] = inst_16027);

(statearr_16236_19136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (2))){
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16117__$1,(4),ch);
} else {
if((state_val_16118 === (23))){
var state_16117__$1 = state_16117;
var statearr_16242_19137 = state_16117__$1;
(statearr_16242_19137[(2)] = null);

(statearr_16242_19137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (35))){
var inst_16091 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16243_19138 = state_16117__$1;
(statearr_16243_19138[(2)] = inst_16091);

(statearr_16243_19138[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (19))){
var inst_15992 = (state_16117[(7)]);
var inst_15997 = cljs.core.chunk_first(inst_15992);
var inst_15998 = cljs.core.chunk_rest(inst_15992);
var inst_15999 = cljs.core.count(inst_15997);
var inst_15965 = inst_15998;
var inst_15966 = inst_15997;
var inst_15967 = inst_15999;
var inst_15968 = (0);
var state_16117__$1 = (function (){var statearr_16244 = state_16117;
(statearr_16244[(13)] = inst_15966);

(statearr_16244[(14)] = inst_15965);

(statearr_16244[(16)] = inst_15968);

(statearr_16244[(17)] = inst_15967);

return statearr_16244;
})();
var statearr_16245_19139 = state_16117__$1;
(statearr_16245_19139[(2)] = null);

(statearr_16245_19139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (11))){
var inst_15965 = (state_16117[(14)]);
var inst_15992 = (state_16117[(7)]);
var inst_15992__$1 = cljs.core.seq(inst_15965);
var state_16117__$1 = (function (){var statearr_16250 = state_16117;
(statearr_16250[(7)] = inst_15992__$1);

return statearr_16250;
})();
if(inst_15992__$1){
var statearr_16254_19140 = state_16117__$1;
(statearr_16254_19140[(1)] = (16));

} else {
var statearr_16256_19144 = state_16117__$1;
(statearr_16256_19144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (9))){
var inst_16029 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16257_19145 = state_16117__$1;
(statearr_16257_19145[(2)] = inst_16029);

(statearr_16257_19145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (5))){
var inst_15963 = cljs.core.deref(cs);
var inst_15964 = cljs.core.seq(inst_15963);
var inst_15965 = inst_15964;
var inst_15966 = null;
var inst_15967 = (0);
var inst_15968 = (0);
var state_16117__$1 = (function (){var statearr_16258 = state_16117;
(statearr_16258[(13)] = inst_15966);

(statearr_16258[(14)] = inst_15965);

(statearr_16258[(16)] = inst_15968);

(statearr_16258[(17)] = inst_15967);

return statearr_16258;
})();
var statearr_16262_19150 = state_16117__$1;
(statearr_16262_19150[(2)] = null);

(statearr_16262_19150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (14))){
var state_16117__$1 = state_16117;
var statearr_16264_19151 = state_16117__$1;
(statearr_16264_19151[(2)] = null);

(statearr_16264_19151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (45))){
var inst_16099 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16265_19152 = state_16117__$1;
(statearr_16265_19152[(2)] = inst_16099);

(statearr_16265_19152[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (26))){
var inst_16033 = (state_16117[(27)]);
var inst_16095 = (state_16117[(2)]);
var inst_16096 = cljs.core.seq(inst_16033);
var state_16117__$1 = (function (){var statearr_16270 = state_16117;
(statearr_16270[(29)] = inst_16095);

return statearr_16270;
})();
if(inst_16096){
var statearr_16271_19153 = state_16117__$1;
(statearr_16271_19153[(1)] = (42));

} else {
var statearr_16272_19154 = state_16117__$1;
(statearr_16272_19154[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (16))){
var inst_15992 = (state_16117[(7)]);
var inst_15995 = cljs.core.chunked_seq_QMARK_(inst_15992);
var state_16117__$1 = state_16117;
if(inst_15995){
var statearr_16273_19155 = state_16117__$1;
(statearr_16273_19155[(1)] = (19));

} else {
var statearr_16275_19156 = state_16117__$1;
(statearr_16275_19156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (38))){
var inst_16088 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16280_19157 = state_16117__$1;
(statearr_16280_19157[(2)] = inst_16088);

(statearr_16280_19157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (30))){
var state_16117__$1 = state_16117;
var statearr_16281_19161 = state_16117__$1;
(statearr_16281_19161[(2)] = null);

(statearr_16281_19161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (10))){
var inst_15966 = (state_16117[(13)]);
var inst_15968 = (state_16117[(16)]);
var inst_15977 = cljs.core._nth(inst_15966,inst_15968);
var inst_15979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15977,(0),null);
var inst_15980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15977,(1),null);
var state_16117__$1 = (function (){var statearr_16282 = state_16117;
(statearr_16282[(24)] = inst_15979);

return statearr_16282;
})();
if(cljs.core.truth_(inst_15980)){
var statearr_16284_19162 = state_16117__$1;
(statearr_16284_19162[(1)] = (13));

} else {
var statearr_16290_19163 = state_16117__$1;
(statearr_16290_19163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (18))){
var inst_16025 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16291_19164 = state_16117__$1;
(statearr_16291_19164[(2)] = inst_16025);

(statearr_16291_19164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (42))){
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16117__$1,(45),dchan);
} else {
if((state_val_16118 === (37))){
var inst_15951 = (state_16117[(9)]);
var inst_16075 = (state_16117[(22)]);
var inst_16063 = (state_16117[(23)]);
var inst_16075__$1 = cljs.core.first(inst_16063);
var inst_16077 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16075__$1,inst_15951,done);
var state_16117__$1 = (function (){var statearr_16293 = state_16117;
(statearr_16293[(22)] = inst_16075__$1);

return statearr_16293;
})();
if(cljs.core.truth_(inst_16077)){
var statearr_16299_19165 = state_16117__$1;
(statearr_16299_19165[(1)] = (39));

} else {
var statearr_16303_19166 = state_16117__$1;
(statearr_16303_19166[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (8))){
var inst_15968 = (state_16117[(16)]);
var inst_15967 = (state_16117[(17)]);
var inst_15970 = (inst_15968 < inst_15967);
var inst_15971 = inst_15970;
var state_16117__$1 = state_16117;
if(cljs.core.truth_(inst_15971)){
var statearr_16307_19167 = state_16117__$1;
(statearr_16307_19167[(1)] = (10));

} else {
var statearr_16309_19172 = state_16117__$1;
(statearr_16309_19172[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13774__auto__ = null;
var cljs$core$async$mult_$_state_machine__13774__auto____0 = (function (){
var statearr_16313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16313[(0)] = cljs$core$async$mult_$_state_machine__13774__auto__);

(statearr_16313[(1)] = (1));

return statearr_16313;
});
var cljs$core$async$mult_$_state_machine__13774__auto____1 = (function (state_16117){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_16117);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e16315){var ex__13777__auto__ = e16315;
var statearr_16316_19174 = state_16117;
(statearr_16316_19174[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_16117[(4)]))){
var statearr_16317_19175 = state_16117;
(statearr_16317_19175[(1)] = cljs.core.first((state_16117[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19182 = state_16117;
state_16117 = G__19182;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13774__auto__ = function(state_16117){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13774__auto____1.call(this,state_16117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13774__auto____0;
cljs$core$async$mult_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13774__auto____1;
return cljs$core$async$mult_$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_16324 = f__14621__auto__();
(statearr_16324[(6)] = c__14620__auto___19056);

return statearr_16324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16330 = arguments.length;
switch (G__16330) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19187 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19187(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19195 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19195(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19199 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19199(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19212 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19212(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19217 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19217(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19219 = arguments.length;
var i__5727__auto___19220 = (0);
while(true){
if((i__5727__auto___19220 < len__5726__auto___19219)){
args__5732__auto__.push((arguments[i__5727__auto___19220]));

var G__19222 = (i__5727__auto___19220 + (1));
i__5727__auto___19220 = G__19222;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16393){
var map__16394 = p__16393;
var map__16394__$1 = cljs.core.__destructure_map(map__16394);
var opts = map__16394__$1;
var statearr_16395_19223 = state;
(statearr_16395_19223[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16396_19224 = state;
(statearr_16396_19224[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16397_19225 = state;
(statearr_16397_19225[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16382){
var G__16383 = cljs.core.first(seq16382);
var seq16382__$1 = cljs.core.next(seq16382);
var G__16384 = cljs.core.first(seq16382__$1);
var seq16382__$2 = cljs.core.next(seq16382__$1);
var G__16385 = cljs.core.first(seq16382__$2);
var seq16382__$3 = cljs.core.next(seq16382__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16383,G__16384,G__16385,seq16382__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16401 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16402){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16402 = meta16402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16403,meta16402__$1){
var self__ = this;
var _16403__$1 = this;
return (new cljs.core.async.t_cljs$core$async16401(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16402__$1));
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16403){
var self__ = this;
var _16403__$1 = this;
return self__.meta16402;
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16402","meta16402",2131302504,null)], null);
}));

(cljs.core.async.t_cljs$core$async16401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16401");

(cljs.core.async.t_cljs$core$async16401.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16401.
 */
cljs.core.async.__GT_t_cljs$core$async16401 = (function cljs$core$async$__GT_t_cljs$core$async16401(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16402){
return (new cljs.core.async.t_cljs$core$async16401(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16402));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16401(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14620__auto___19241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_16490){
var state_val_16491 = (state_16490[(1)]);
if((state_val_16491 === (7))){
var inst_16448 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16448)){
var statearr_16492_19243 = state_16490__$1;
(statearr_16492_19243[(1)] = (8));

} else {
var statearr_16493_19244 = state_16490__$1;
(statearr_16493_19244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (20))){
var inst_16440 = (state_16490[(7)]);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16490__$1,(23),out,inst_16440);
} else {
if((state_val_16491 === (1))){
var inst_16422 = calc_state();
var inst_16423 = cljs.core.__destructure_map(inst_16422);
var inst_16424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16423,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16423,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16423,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16428 = inst_16422;
var state_16490__$1 = (function (){var statearr_16494 = state_16490;
(statearr_16494[(8)] = inst_16424);

(statearr_16494[(9)] = inst_16428);

(statearr_16494[(10)] = inst_16426);

(statearr_16494[(11)] = inst_16425);

return statearr_16494;
})();
var statearr_16497_19246 = state_16490__$1;
(statearr_16497_19246[(2)] = null);

(statearr_16497_19246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (24))){
var inst_16431 = (state_16490[(12)]);
var inst_16428 = inst_16431;
var state_16490__$1 = (function (){var statearr_16498 = state_16490;
(statearr_16498[(9)] = inst_16428);

return statearr_16498;
})();
var statearr_16500_19248 = state_16490__$1;
(statearr_16500_19248[(2)] = null);

(statearr_16500_19248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (4))){
var inst_16442 = (state_16490[(13)]);
var inst_16440 = (state_16490[(7)]);
var inst_16439 = (state_16490[(2)]);
var inst_16440__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16439,(0),null);
var inst_16441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16439,(1),null);
var inst_16442__$1 = (inst_16440__$1 == null);
var state_16490__$1 = (function (){var statearr_16526 = state_16490;
(statearr_16526[(13)] = inst_16442__$1);

(statearr_16526[(14)] = inst_16441);

(statearr_16526[(7)] = inst_16440__$1);

return statearr_16526;
})();
if(cljs.core.truth_(inst_16442__$1)){
var statearr_16527_19254 = state_16490__$1;
(statearr_16527_19254[(1)] = (5));

} else {
var statearr_16528_19256 = state_16490__$1;
(statearr_16528_19256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (15))){
var inst_16464 = (state_16490[(15)]);
var inst_16432 = (state_16490[(16)]);
var inst_16464__$1 = cljs.core.empty_QMARK_(inst_16432);
var state_16490__$1 = (function (){var statearr_16534 = state_16490;
(statearr_16534[(15)] = inst_16464__$1);

return statearr_16534;
})();
if(inst_16464__$1){
var statearr_16535_19258 = state_16490__$1;
(statearr_16535_19258[(1)] = (17));

} else {
var statearr_16536_19259 = state_16490__$1;
(statearr_16536_19259[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (21))){
var inst_16431 = (state_16490[(12)]);
var inst_16428 = inst_16431;
var state_16490__$1 = (function (){var statearr_16538 = state_16490;
(statearr_16538[(9)] = inst_16428);

return statearr_16538;
})();
var statearr_16543_19260 = state_16490__$1;
(statearr_16543_19260[(2)] = null);

(statearr_16543_19260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (13))){
var inst_16457 = (state_16490[(2)]);
var inst_16458 = calc_state();
var inst_16428 = inst_16458;
var state_16490__$1 = (function (){var statearr_16548 = state_16490;
(statearr_16548[(17)] = inst_16457);

(statearr_16548[(9)] = inst_16428);

return statearr_16548;
})();
var statearr_16551_19261 = state_16490__$1;
(statearr_16551_19261[(2)] = null);

(statearr_16551_19261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (22))){
var inst_16484 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16554_19262 = state_16490__$1;
(statearr_16554_19262[(2)] = inst_16484);

(statearr_16554_19262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (6))){
var inst_16441 = (state_16490[(14)]);
var inst_16446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16441,change);
var state_16490__$1 = state_16490;
var statearr_16557_19263 = state_16490__$1;
(statearr_16557_19263[(2)] = inst_16446);

(statearr_16557_19263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (25))){
var state_16490__$1 = state_16490;
var statearr_16560_19264 = state_16490__$1;
(statearr_16560_19264[(2)] = null);

(statearr_16560_19264[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (17))){
var inst_16433 = (state_16490[(18)]);
var inst_16441 = (state_16490[(14)]);
var inst_16466 = (inst_16433.cljs$core$IFn$_invoke$arity$1 ? inst_16433.cljs$core$IFn$_invoke$arity$1(inst_16441) : inst_16433.call(null, inst_16441));
var inst_16467 = cljs.core.not(inst_16466);
var state_16490__$1 = state_16490;
var statearr_16567_19265 = state_16490__$1;
(statearr_16567_19265[(2)] = inst_16467);

(statearr_16567_19265[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (3))){
var inst_16488 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16490__$1,inst_16488);
} else {
if((state_val_16491 === (12))){
var state_16490__$1 = state_16490;
var statearr_16572_19266 = state_16490__$1;
(statearr_16572_19266[(2)] = null);

(statearr_16572_19266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (2))){
var inst_16431 = (state_16490[(12)]);
var inst_16428 = (state_16490[(9)]);
var inst_16431__$1 = cljs.core.__destructure_map(inst_16428);
var inst_16432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16431__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16431__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16431__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16490__$1 = (function (){var statearr_16575 = state_16490;
(statearr_16575[(12)] = inst_16431__$1);

(statearr_16575[(18)] = inst_16433);

(statearr_16575[(16)] = inst_16432);

return statearr_16575;
})();
return cljs.core.async.ioc_alts_BANG_(state_16490__$1,(4),inst_16434);
} else {
if((state_val_16491 === (23))){
var inst_16475 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16475)){
var statearr_16589_19269 = state_16490__$1;
(statearr_16589_19269[(1)] = (24));

} else {
var statearr_16596_19270 = state_16490__$1;
(statearr_16596_19270[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (19))){
var inst_16470 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16597_19272 = state_16490__$1;
(statearr_16597_19272[(2)] = inst_16470);

(statearr_16597_19272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (11))){
var inst_16441 = (state_16490[(14)]);
var inst_16454 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16441);
var state_16490__$1 = state_16490;
var statearr_16598_19276 = state_16490__$1;
(statearr_16598_19276[(2)] = inst_16454);

(statearr_16598_19276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (9))){
var inst_16461 = (state_16490[(19)]);
var inst_16441 = (state_16490[(14)]);
var inst_16432 = (state_16490[(16)]);
var inst_16461__$1 = (inst_16432.cljs$core$IFn$_invoke$arity$1 ? inst_16432.cljs$core$IFn$_invoke$arity$1(inst_16441) : inst_16432.call(null, inst_16441));
var state_16490__$1 = (function (){var statearr_16606 = state_16490;
(statearr_16606[(19)] = inst_16461__$1);

return statearr_16606;
})();
if(cljs.core.truth_(inst_16461__$1)){
var statearr_16610_19279 = state_16490__$1;
(statearr_16610_19279[(1)] = (14));

} else {
var statearr_16611_19280 = state_16490__$1;
(statearr_16611_19280[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (5))){
var inst_16442 = (state_16490[(13)]);
var state_16490__$1 = state_16490;
var statearr_16612_19282 = state_16490__$1;
(statearr_16612_19282[(2)] = inst_16442);

(statearr_16612_19282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (14))){
var inst_16461 = (state_16490[(19)]);
var state_16490__$1 = state_16490;
var statearr_16617_19283 = state_16490__$1;
(statearr_16617_19283[(2)] = inst_16461);

(statearr_16617_19283[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (26))){
var inst_16480 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16618_19285 = state_16490__$1;
(statearr_16618_19285[(2)] = inst_16480);

(statearr_16618_19285[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (16))){
var inst_16472 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16472)){
var statearr_16622_19286 = state_16490__$1;
(statearr_16622_19286[(1)] = (20));

} else {
var statearr_16623_19287 = state_16490__$1;
(statearr_16623_19287[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (10))){
var inst_16486 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16624_19289 = state_16490__$1;
(statearr_16624_19289[(2)] = inst_16486);

(statearr_16624_19289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (18))){
var inst_16464 = (state_16490[(15)]);
var state_16490__$1 = state_16490;
var statearr_16629_19290 = state_16490__$1;
(statearr_16629_19290[(2)] = inst_16464);

(statearr_16629_19290[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (8))){
var inst_16440 = (state_16490[(7)]);
var inst_16451 = (inst_16440 == null);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16451)){
var statearr_16632_19292 = state_16490__$1;
(statearr_16632_19292[(1)] = (11));

} else {
var statearr_16633_19294 = state_16490__$1;
(statearr_16633_19294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13774__auto__ = null;
var cljs$core$async$mix_$_state_machine__13774__auto____0 = (function (){
var statearr_16634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16634[(0)] = cljs$core$async$mix_$_state_machine__13774__auto__);

(statearr_16634[(1)] = (1));

return statearr_16634;
});
var cljs$core$async$mix_$_state_machine__13774__auto____1 = (function (state_16490){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_16490);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e16639){var ex__13777__auto__ = e16639;
var statearr_16640_19296 = state_16490;
(statearr_16640_19296[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_16490[(4)]))){
var statearr_16642_19297 = state_16490;
(statearr_16642_19297[(1)] = cljs.core.first((state_16490[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19299 = state_16490;
state_16490 = G__19299;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13774__auto__ = function(state_16490){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13774__auto____1.call(this,state_16490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13774__auto____0;
cljs$core$async$mix_$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13774__auto____1;
return cljs$core$async$mix_$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_16647 = f__14621__auto__();
(statearr_16647[(6)] = c__14620__auto___19241);

return statearr_16647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19304 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19304(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19309 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19309(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19318 = (function() {
var G__19319 = null;
var G__19319__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19319__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19319 = function(p,v){
switch(arguments.length){
case 1:
return G__19319__1.call(this,p);
case 2:
return G__19319__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19319.cljs$core$IFn$_invoke$arity$1 = G__19319__1;
G__19319.cljs$core$IFn$_invoke$arity$2 = G__19319__2;
return G__19319;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16689 = arguments.length;
switch (G__16689) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19318(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19318(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16730 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16731){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16731 = meta16731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16732,meta16731__$1){
var self__ = this;
var _16732__$1 = this;
return (new cljs.core.async.t_cljs$core$async16730(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16731__$1));
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16732){
var self__ = this;
var _16732__$1 = this;
return self__.meta16731;
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16731","meta16731",89929976,null)], null);
}));

(cljs.core.async.t_cljs$core$async16730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16730");

(cljs.core.async.t_cljs$core$async16730.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16730.
 */
cljs.core.async.__GT_t_cljs$core$async16730 = (function cljs$core$async$__GT_t_cljs$core$async16730(ch,topic_fn,buf_fn,mults,ensure_mult,meta16731){
return (new cljs.core.async.t_cljs$core$async16730(ch,topic_fn,buf_fn,mults,ensure_mult,meta16731));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16712 = arguments.length;
switch (G__16712) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16703_SHARP_){
if(cljs.core.truth_((p1__16703_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16703_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16703_SHARP_.call(null, topic)))){
return p1__16703_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16703_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16730(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14620__auto___19372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_16846){
var state_val_16847 = (state_16846[(1)]);
if((state_val_16847 === (7))){
var inst_16842 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
var statearr_16851_19376 = state_16846__$1;
(statearr_16851_19376[(2)] = inst_16842);

(statearr_16851_19376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (20))){
var state_16846__$1 = state_16846;
var statearr_16852_19377 = state_16846__$1;
(statearr_16852_19377[(2)] = null);

(statearr_16852_19377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (1))){
var state_16846__$1 = state_16846;
var statearr_16861_19378 = state_16846__$1;
(statearr_16861_19378[(2)] = null);

(statearr_16861_19378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (24))){
var inst_16825 = (state_16846[(7)]);
var inst_16834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16825);
var state_16846__$1 = state_16846;
var statearr_16865_19380 = state_16846__$1;
(statearr_16865_19380[(2)] = inst_16834);

(statearr_16865_19380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (4))){
var inst_16768 = (state_16846[(8)]);
var inst_16768__$1 = (state_16846[(2)]);
var inst_16770 = (inst_16768__$1 == null);
var state_16846__$1 = (function (){var statearr_16866 = state_16846;
(statearr_16866[(8)] = inst_16768__$1);

return statearr_16866;
})();
if(cljs.core.truth_(inst_16770)){
var statearr_16870_19381 = state_16846__$1;
(statearr_16870_19381[(1)] = (5));

} else {
var statearr_16871_19382 = state_16846__$1;
(statearr_16871_19382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (15))){
var inst_16819 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
var statearr_16873_19383 = state_16846__$1;
(statearr_16873_19383[(2)] = inst_16819);

(statearr_16873_19383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (21))){
var inst_16839 = (state_16846[(2)]);
var state_16846__$1 = (function (){var statearr_16874 = state_16846;
(statearr_16874[(9)] = inst_16839);

return statearr_16874;
})();
var statearr_16875_19384 = state_16846__$1;
(statearr_16875_19384[(2)] = null);

(statearr_16875_19384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (13))){
var inst_16796 = (state_16846[(10)]);
var inst_16801 = cljs.core.chunked_seq_QMARK_(inst_16796);
var state_16846__$1 = state_16846;
if(inst_16801){
var statearr_16876_19386 = state_16846__$1;
(statearr_16876_19386[(1)] = (16));

} else {
var statearr_16877_19387 = state_16846__$1;
(statearr_16877_19387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (22))){
var inst_16831 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
if(cljs.core.truth_(inst_16831)){
var statearr_16878_19390 = state_16846__$1;
(statearr_16878_19390[(1)] = (23));

} else {
var statearr_16881_19391 = state_16846__$1;
(statearr_16881_19391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (6))){
var inst_16768 = (state_16846[(8)]);
var inst_16825 = (state_16846[(7)]);
var inst_16827 = (state_16846[(11)]);
var inst_16825__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16768) : topic_fn.call(null, inst_16768));
var inst_16826 = cljs.core.deref(mults);
var inst_16827__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16826,inst_16825__$1);
var state_16846__$1 = (function (){var statearr_16885 = state_16846;
(statearr_16885[(7)] = inst_16825__$1);

(statearr_16885[(11)] = inst_16827__$1);

return statearr_16885;
})();
if(cljs.core.truth_(inst_16827__$1)){
var statearr_16886_19396 = state_16846__$1;
(statearr_16886_19396[(1)] = (19));

} else {
var statearr_16887_19397 = state_16846__$1;
(statearr_16887_19397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (25))){
var inst_16836 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
var statearr_16888_19398 = state_16846__$1;
(statearr_16888_19398[(2)] = inst_16836);

(statearr_16888_19398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (17))){
var inst_16796 = (state_16846[(10)]);
var inst_16809 = cljs.core.first(inst_16796);
var inst_16810 = cljs.core.async.muxch_STAR_(inst_16809);
var inst_16811 = cljs.core.async.close_BANG_(inst_16810);
var inst_16812 = cljs.core.next(inst_16796);
var inst_16782 = inst_16812;
var inst_16783 = null;
var inst_16784 = (0);
var inst_16785 = (0);
var state_16846__$1 = (function (){var statearr_16891 = state_16846;
(statearr_16891[(12)] = inst_16783);

(statearr_16891[(13)] = inst_16782);

(statearr_16891[(14)] = inst_16785);

(statearr_16891[(15)] = inst_16784);

(statearr_16891[(16)] = inst_16811);

return statearr_16891;
})();
var statearr_16892_19400 = state_16846__$1;
(statearr_16892_19400[(2)] = null);

(statearr_16892_19400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (3))){
var inst_16844 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16846__$1,inst_16844);
} else {
if((state_val_16847 === (12))){
var inst_16821 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
var statearr_16894_19402 = state_16846__$1;
(statearr_16894_19402[(2)] = inst_16821);

(statearr_16894_19402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (2))){
var state_16846__$1 = state_16846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16846__$1,(4),ch);
} else {
if((state_val_16847 === (23))){
var state_16846__$1 = state_16846;
var statearr_16895_19405 = state_16846__$1;
(statearr_16895_19405[(2)] = null);

(statearr_16895_19405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (19))){
var inst_16768 = (state_16846[(8)]);
var inst_16827 = (state_16846[(11)]);
var inst_16829 = cljs.core.async.muxch_STAR_(inst_16827);
var state_16846__$1 = state_16846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16846__$1,(22),inst_16829,inst_16768);
} else {
if((state_val_16847 === (11))){
var inst_16782 = (state_16846[(13)]);
var inst_16796 = (state_16846[(10)]);
var inst_16796__$1 = cljs.core.seq(inst_16782);
var state_16846__$1 = (function (){var statearr_16899 = state_16846;
(statearr_16899[(10)] = inst_16796__$1);

return statearr_16899;
})();
if(inst_16796__$1){
var statearr_16900_19407 = state_16846__$1;
(statearr_16900_19407[(1)] = (13));

} else {
var statearr_16901_19408 = state_16846__$1;
(statearr_16901_19408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (9))){
var inst_16823 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
var statearr_16903_19409 = state_16846__$1;
(statearr_16903_19409[(2)] = inst_16823);

(statearr_16903_19409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (5))){
var inst_16779 = cljs.core.deref(mults);
var inst_16780 = cljs.core.vals(inst_16779);
var inst_16781 = cljs.core.seq(inst_16780);
var inst_16782 = inst_16781;
var inst_16783 = null;
var inst_16784 = (0);
var inst_16785 = (0);
var state_16846__$1 = (function (){var statearr_16911 = state_16846;
(statearr_16911[(12)] = inst_16783);

(statearr_16911[(13)] = inst_16782);

(statearr_16911[(14)] = inst_16785);

(statearr_16911[(15)] = inst_16784);

return statearr_16911;
})();
var statearr_16912_19410 = state_16846__$1;
(statearr_16912_19410[(2)] = null);

(statearr_16912_19410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (14))){
var state_16846__$1 = state_16846;
var statearr_16916_19411 = state_16846__$1;
(statearr_16916_19411[(2)] = null);

(statearr_16916_19411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (16))){
var inst_16796 = (state_16846[(10)]);
var inst_16803 = cljs.core.chunk_first(inst_16796);
var inst_16804 = cljs.core.chunk_rest(inst_16796);
var inst_16806 = cljs.core.count(inst_16803);
var inst_16782 = inst_16804;
var inst_16783 = inst_16803;
var inst_16784 = inst_16806;
var inst_16785 = (0);
var state_16846__$1 = (function (){var statearr_16921 = state_16846;
(statearr_16921[(12)] = inst_16783);

(statearr_16921[(13)] = inst_16782);

(statearr_16921[(14)] = inst_16785);

(statearr_16921[(15)] = inst_16784);

return statearr_16921;
})();
var statearr_16924_19420 = state_16846__$1;
(statearr_16924_19420[(2)] = null);

(statearr_16924_19420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (10))){
var inst_16783 = (state_16846[(12)]);
var inst_16782 = (state_16846[(13)]);
var inst_16785 = (state_16846[(14)]);
var inst_16784 = (state_16846[(15)]);
var inst_16790 = cljs.core._nth(inst_16783,inst_16785);
var inst_16791 = cljs.core.async.muxch_STAR_(inst_16790);
var inst_16792 = cljs.core.async.close_BANG_(inst_16791);
var inst_16793 = (inst_16785 + (1));
var tmp16913 = inst_16783;
var tmp16914 = inst_16782;
var tmp16915 = inst_16784;
var inst_16782__$1 = tmp16914;
var inst_16783__$1 = tmp16913;
var inst_16784__$1 = tmp16915;
var inst_16785__$1 = inst_16793;
var state_16846__$1 = (function (){var statearr_16925 = state_16846;
(statearr_16925[(17)] = inst_16792);

(statearr_16925[(12)] = inst_16783__$1);

(statearr_16925[(13)] = inst_16782__$1);

(statearr_16925[(14)] = inst_16785__$1);

(statearr_16925[(15)] = inst_16784__$1);

return statearr_16925;
})();
var statearr_16926_19422 = state_16846__$1;
(statearr_16926_19422[(2)] = null);

(statearr_16926_19422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (18))){
var inst_16816 = (state_16846[(2)]);
var state_16846__$1 = state_16846;
var statearr_16927_19423 = state_16846__$1;
(statearr_16927_19423[(2)] = inst_16816);

(statearr_16927_19423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16847 === (8))){
var inst_16785 = (state_16846[(14)]);
var inst_16784 = (state_16846[(15)]);
var inst_16787 = (inst_16785 < inst_16784);
var inst_16788 = inst_16787;
var state_16846__$1 = state_16846;
if(cljs.core.truth_(inst_16788)){
var statearr_16928_19427 = state_16846__$1;
(statearr_16928_19427[(1)] = (10));

} else {
var statearr_16929_19428 = state_16846__$1;
(statearr_16929_19428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_16946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16946[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_16946[(1)] = (1));

return statearr_16946;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_16846){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_16846);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e16949){var ex__13777__auto__ = e16949;
var statearr_16958_19432 = state_16846;
(statearr_16958_19432[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_16846[(4)]))){
var statearr_16959_19433 = state_16846;
(statearr_16959_19433[(1)] = cljs.core.first((state_16846[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19434 = state_16846;
state_16846 = G__19434;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_16846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_16846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_16960 = f__14621__auto__();
(statearr_16960[(6)] = c__14620__auto___19372);

return statearr_16960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16982 = arguments.length;
switch (G__16982) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16987 = arguments.length;
switch (G__16987) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17001 = arguments.length;
switch (G__17001) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14620__auto___19444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_17051){
var state_val_17052 = (state_17051[(1)]);
if((state_val_17052 === (7))){
var state_17051__$1 = state_17051;
var statearr_17054_19450 = state_17051__$1;
(statearr_17054_19450[(2)] = null);

(statearr_17054_19450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (1))){
var state_17051__$1 = state_17051;
var statearr_17055_19451 = state_17051__$1;
(statearr_17055_19451[(2)] = null);

(statearr_17055_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (4))){
var inst_17009 = (state_17051[(7)]);
var inst_17008 = (state_17051[(8)]);
var inst_17011 = (inst_17009 < inst_17008);
var state_17051__$1 = state_17051;
if(cljs.core.truth_(inst_17011)){
var statearr_17067_19453 = state_17051__$1;
(statearr_17067_19453[(1)] = (6));

} else {
var statearr_17068_19454 = state_17051__$1;
(statearr_17068_19454[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (15))){
var inst_17037 = (state_17051[(9)]);
var inst_17042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17037);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17051__$1,(17),out,inst_17042);
} else {
if((state_val_17052 === (13))){
var inst_17037 = (state_17051[(9)]);
var inst_17037__$1 = (state_17051[(2)]);
var inst_17038 = cljs.core.some(cljs.core.nil_QMARK_,inst_17037__$1);
var state_17051__$1 = (function (){var statearr_17072 = state_17051;
(statearr_17072[(9)] = inst_17037__$1);

return statearr_17072;
})();
if(cljs.core.truth_(inst_17038)){
var statearr_17073_19456 = state_17051__$1;
(statearr_17073_19456[(1)] = (14));

} else {
var statearr_17074_19457 = state_17051__$1;
(statearr_17074_19457[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (6))){
var state_17051__$1 = state_17051;
var statearr_17075_19461 = state_17051__$1;
(statearr_17075_19461[(2)] = null);

(statearr_17075_19461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (17))){
var inst_17044 = (state_17051[(2)]);
var state_17051__$1 = (function (){var statearr_17077 = state_17051;
(statearr_17077[(10)] = inst_17044);

return statearr_17077;
})();
var statearr_17078_19462 = state_17051__$1;
(statearr_17078_19462[(2)] = null);

(statearr_17078_19462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (3))){
var inst_17049 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17051__$1,inst_17049);
} else {
if((state_val_17052 === (12))){
var _ = (function (){var statearr_17079 = state_17051;
(statearr_17079[(4)] = cljs.core.rest((state_17051[(4)])));

return statearr_17079;
})();
var state_17051__$1 = state_17051;
var ex17076 = (state_17051__$1[(2)]);
var statearr_17080_19465 = state_17051__$1;
(statearr_17080_19465[(5)] = ex17076);


if((ex17076 instanceof Object)){
var statearr_17084_19466 = state_17051__$1;
(statearr_17084_19466[(1)] = (11));

(statearr_17084_19466[(5)] = null);

} else {
throw ex17076;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (2))){
var inst_17007 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17008 = cnt;
var inst_17009 = (0);
var state_17051__$1 = (function (){var statearr_17100 = state_17051;
(statearr_17100[(11)] = inst_17007);

(statearr_17100[(7)] = inst_17009);

(statearr_17100[(8)] = inst_17008);

return statearr_17100;
})();
var statearr_17101_19470 = state_17051__$1;
(statearr_17101_19470[(2)] = null);

(statearr_17101_19470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (11))){
var inst_17013 = (state_17051[(2)]);
var inst_17014 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17051__$1 = (function (){var statearr_17104 = state_17051;
(statearr_17104[(12)] = inst_17013);

return statearr_17104;
})();
var statearr_17108_19472 = state_17051__$1;
(statearr_17108_19472[(2)] = inst_17014);

(statearr_17108_19472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (9))){
var inst_17009 = (state_17051[(7)]);
var _ = (function (){var statearr_17110 = state_17051;
(statearr_17110[(4)] = cljs.core.cons((12),(state_17051[(4)])));

return statearr_17110;
})();
var inst_17020 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17009) : chs__$1.call(null, inst_17009));
var inst_17021 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17009) : done.call(null, inst_17009));
var inst_17022 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17020,inst_17021);
var ___$1 = (function (){var statearr_17114 = state_17051;
(statearr_17114[(4)] = cljs.core.rest((state_17051[(4)])));

return statearr_17114;
})();
var state_17051__$1 = state_17051;
var statearr_17115_19474 = state_17051__$1;
(statearr_17115_19474[(2)] = inst_17022);

(statearr_17115_19474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (5))){
var inst_17035 = (state_17051[(2)]);
var state_17051__$1 = (function (){var statearr_17116 = state_17051;
(statearr_17116[(13)] = inst_17035);

return statearr_17116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17051__$1,(13),dchan);
} else {
if((state_val_17052 === (14))){
var inst_17040 = cljs.core.async.close_BANG_(out);
var state_17051__$1 = state_17051;
var statearr_17123_19475 = state_17051__$1;
(statearr_17123_19475[(2)] = inst_17040);

(statearr_17123_19475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (16))){
var inst_17047 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17124_19478 = state_17051__$1;
(statearr_17124_19478[(2)] = inst_17047);

(statearr_17124_19478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (10))){
var inst_17009 = (state_17051[(7)]);
var inst_17025 = (state_17051[(2)]);
var inst_17029 = (inst_17009 + (1));
var inst_17009__$1 = inst_17029;
var state_17051__$1 = (function (){var statearr_17125 = state_17051;
(statearr_17125[(7)] = inst_17009__$1);

(statearr_17125[(14)] = inst_17025);

return statearr_17125;
})();
var statearr_17126_19481 = state_17051__$1;
(statearr_17126_19481[(2)] = null);

(statearr_17126_19481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (8))){
var inst_17033 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17127_19482 = state_17051__$1;
(statearr_17127_19482[(2)] = inst_17033);

(statearr_17127_19482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_17128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17128[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_17128[(1)] = (1));

return statearr_17128;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_17051){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_17051);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e17129){var ex__13777__auto__ = e17129;
var statearr_17133_19483 = state_17051;
(statearr_17133_19483[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_17051[(4)]))){
var statearr_17134_19484 = state_17051;
(statearr_17134_19484[(1)] = cljs.core.first((state_17051[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19485 = state_17051;
state_17051 = G__19485;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_17051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_17051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_17139 = f__14621__auto__();
(statearr_17139[(6)] = c__14620__auto___19444);

return statearr_17139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17145 = arguments.length;
switch (G__17145) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14620__auto___19489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_17204){
var state_val_17205 = (state_17204[(1)]);
if((state_val_17205 === (7))){
var inst_17173 = (state_17204[(7)]);
var inst_17174 = (state_17204[(8)]);
var inst_17173__$1 = (state_17204[(2)]);
var inst_17174__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17173__$1,(0),null);
var inst_17175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17173__$1,(1),null);
var inst_17176 = (inst_17174__$1 == null);
var state_17204__$1 = (function (){var statearr_17220 = state_17204;
(statearr_17220[(9)] = inst_17175);

(statearr_17220[(7)] = inst_17173__$1);

(statearr_17220[(8)] = inst_17174__$1);

return statearr_17220;
})();
if(cljs.core.truth_(inst_17176)){
var statearr_17224_19492 = state_17204__$1;
(statearr_17224_19492[(1)] = (8));

} else {
var statearr_17229_19493 = state_17204__$1;
(statearr_17229_19493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (1))){
var inst_17163 = cljs.core.vec(chs);
var inst_17164 = inst_17163;
var state_17204__$1 = (function (){var statearr_17231 = state_17204;
(statearr_17231[(10)] = inst_17164);

return statearr_17231;
})();
var statearr_17233_19495 = state_17204__$1;
(statearr_17233_19495[(2)] = null);

(statearr_17233_19495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (4))){
var inst_17164 = (state_17204[(10)]);
var state_17204__$1 = state_17204;
return cljs.core.async.ioc_alts_BANG_(state_17204__$1,(7),inst_17164);
} else {
if((state_val_17205 === (6))){
var inst_17197 = (state_17204[(2)]);
var state_17204__$1 = state_17204;
var statearr_17236_19496 = state_17204__$1;
(statearr_17236_19496[(2)] = inst_17197);

(statearr_17236_19496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (3))){
var inst_17199 = (state_17204[(2)]);
var state_17204__$1 = state_17204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17204__$1,inst_17199);
} else {
if((state_val_17205 === (2))){
var inst_17164 = (state_17204[(10)]);
var inst_17166 = cljs.core.count(inst_17164);
var inst_17167 = (inst_17166 > (0));
var state_17204__$1 = state_17204;
if(cljs.core.truth_(inst_17167)){
var statearr_17238_19499 = state_17204__$1;
(statearr_17238_19499[(1)] = (4));

} else {
var statearr_17239_19501 = state_17204__$1;
(statearr_17239_19501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (11))){
var inst_17164 = (state_17204[(10)]);
var inst_17190 = (state_17204[(2)]);
var tmp17237 = inst_17164;
var inst_17164__$1 = tmp17237;
var state_17204__$1 = (function (){var statearr_17240 = state_17204;
(statearr_17240[(10)] = inst_17164__$1);

(statearr_17240[(11)] = inst_17190);

return statearr_17240;
})();
var statearr_17241_19503 = state_17204__$1;
(statearr_17241_19503[(2)] = null);

(statearr_17241_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (9))){
var inst_17174 = (state_17204[(8)]);
var state_17204__$1 = state_17204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17204__$1,(11),out,inst_17174);
} else {
if((state_val_17205 === (5))){
var inst_17195 = cljs.core.async.close_BANG_(out);
var state_17204__$1 = state_17204;
var statearr_17266_19505 = state_17204__$1;
(statearr_17266_19505[(2)] = inst_17195);

(statearr_17266_19505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (10))){
var inst_17193 = (state_17204[(2)]);
var state_17204__$1 = state_17204;
var statearr_17267_19506 = state_17204__$1;
(statearr_17267_19506[(2)] = inst_17193);

(statearr_17267_19506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17205 === (8))){
var inst_17175 = (state_17204[(9)]);
var inst_17173 = (state_17204[(7)]);
var inst_17174 = (state_17204[(8)]);
var inst_17164 = (state_17204[(10)]);
var inst_17185 = (function (){var cs = inst_17164;
var vec__17169 = inst_17173;
var v = inst_17174;
var c = inst_17175;
return (function (p1__17141_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17141_SHARP_);
});
})();
var inst_17186 = cljs.core.filterv(inst_17185,inst_17164);
var inst_17164__$1 = inst_17186;
var state_17204__$1 = (function (){var statearr_17268 = state_17204;
(statearr_17268[(10)] = inst_17164__$1);

return statearr_17268;
})();
var statearr_17269_19510 = state_17204__$1;
(statearr_17269_19510[(2)] = null);

(statearr_17269_19510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_17270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17270[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_17270[(1)] = (1));

return statearr_17270;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_17204){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_17204);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e17271){var ex__13777__auto__ = e17271;
var statearr_17272_19512 = state_17204;
(statearr_17272_19512[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_17204[(4)]))){
var statearr_17273_19513 = state_17204;
(statearr_17273_19513[(1)] = cljs.core.first((state_17204[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19514 = state_17204;
state_17204 = G__19514;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_17204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_17204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_17279 = f__14621__auto__();
(statearr_17279[(6)] = c__14620__auto___19489);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17305 = arguments.length;
switch (G__17305) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14620__auto___19520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_17336){
var state_val_17337 = (state_17336[(1)]);
if((state_val_17337 === (7))){
var inst_17316 = (state_17336[(7)]);
var inst_17316__$1 = (state_17336[(2)]);
var inst_17317 = (inst_17316__$1 == null);
var inst_17318 = cljs.core.not(inst_17317);
var state_17336__$1 = (function (){var statearr_17341 = state_17336;
(statearr_17341[(7)] = inst_17316__$1);

return statearr_17341;
})();
if(inst_17318){
var statearr_17343_19521 = state_17336__$1;
(statearr_17343_19521[(1)] = (8));

} else {
var statearr_17344_19527 = state_17336__$1;
(statearr_17344_19527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (1))){
var inst_17311 = (0);
var state_17336__$1 = (function (){var statearr_17345 = state_17336;
(statearr_17345[(8)] = inst_17311);

return statearr_17345;
})();
var statearr_17346_19530 = state_17336__$1;
(statearr_17346_19530[(2)] = null);

(statearr_17346_19530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (4))){
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17336__$1,(7),ch);
} else {
if((state_val_17337 === (6))){
var inst_17329 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17355_19533 = state_17336__$1;
(statearr_17355_19533[(2)] = inst_17329);

(statearr_17355_19533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (3))){
var inst_17331 = (state_17336[(2)]);
var inst_17332 = cljs.core.async.close_BANG_(out);
var state_17336__$1 = (function (){var statearr_17356 = state_17336;
(statearr_17356[(9)] = inst_17331);

return statearr_17356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17336__$1,inst_17332);
} else {
if((state_val_17337 === (2))){
var inst_17311 = (state_17336[(8)]);
var inst_17313 = (inst_17311 < n);
var state_17336__$1 = state_17336;
if(cljs.core.truth_(inst_17313)){
var statearr_17359_19534 = state_17336__$1;
(statearr_17359_19534[(1)] = (4));

} else {
var statearr_17360_19535 = state_17336__$1;
(statearr_17360_19535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (11))){
var inst_17311 = (state_17336[(8)]);
var inst_17321 = (state_17336[(2)]);
var inst_17322 = (inst_17311 + (1));
var inst_17311__$1 = inst_17322;
var state_17336__$1 = (function (){var statearr_17361 = state_17336;
(statearr_17361[(10)] = inst_17321);

(statearr_17361[(8)] = inst_17311__$1);

return statearr_17361;
})();
var statearr_17363_19537 = state_17336__$1;
(statearr_17363_19537[(2)] = null);

(statearr_17363_19537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (9))){
var state_17336__$1 = state_17336;
var statearr_17373_19538 = state_17336__$1;
(statearr_17373_19538[(2)] = null);

(statearr_17373_19538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (5))){
var state_17336__$1 = state_17336;
var statearr_17374_19540 = state_17336__$1;
(statearr_17374_19540[(2)] = null);

(statearr_17374_19540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (10))){
var inst_17326 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17375_19541 = state_17336__$1;
(statearr_17375_19541[(2)] = inst_17326);

(statearr_17375_19541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (8))){
var inst_17316 = (state_17336[(7)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17336__$1,(11),out,inst_17316);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_17386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17386[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_17386[(1)] = (1));

return statearr_17386;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_17336){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_17336);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e17387){var ex__13777__auto__ = e17387;
var statearr_17388_19543 = state_17336;
(statearr_17388_19543[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_17336[(4)]))){
var statearr_17389_19544 = state_17336;
(statearr_17389_19544[(1)] = cljs.core.first((state_17336[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19545 = state_17336;
state_17336 = G__19545;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_17336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_17336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_17394 = f__14621__auto__();
(statearr_17394[(6)] = c__14620__auto___19520);

return statearr_17394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17417 = (function (f,ch,meta17404,_,fn1,meta17418){
this.f = f;
this.ch = ch;
this.meta17404 = meta17404;
this._ = _;
this.fn1 = fn1;
this.meta17418 = meta17418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17419,meta17418__$1){
var self__ = this;
var _17419__$1 = this;
return (new cljs.core.async.t_cljs$core$async17417(self__.f,self__.ch,self__.meta17404,self__._,self__.fn1,meta17418__$1));
}));

(cljs.core.async.t_cljs$core$async17417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17419){
var self__ = this;
var _17419__$1 = this;
return self__.meta17418;
}));

(cljs.core.async.t_cljs$core$async17417.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17397_SHARP_){
var G__17422 = (((p1__17397_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17397_SHARP_) : self__.f.call(null, p1__17397_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17422) : f1.call(null, G__17422));
});
}));

(cljs.core.async.t_cljs$core$async17417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17404","meta17404",-1705641252,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17403","cljs.core.async/t_cljs$core$async17403",-1138298289,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17418","meta17418",948455394,null)], null);
}));

(cljs.core.async.t_cljs$core$async17417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17417");

(cljs.core.async.t_cljs$core$async17417.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17417.
 */
cljs.core.async.__GT_t_cljs$core$async17417 = (function cljs$core$async$__GT_t_cljs$core$async17417(f,ch,meta17404,_,fn1,meta17418){
return (new cljs.core.async.t_cljs$core$async17417(f,ch,meta17404,_,fn1,meta17418));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17403 = (function (f,ch,meta17404){
this.f = f;
this.ch = ch;
this.meta17404 = meta17404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17405,meta17404__$1){
var self__ = this;
var _17405__$1 = this;
return (new cljs.core.async.t_cljs$core$async17403(self__.f,self__.ch,meta17404__$1));
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17405){
var self__ = this;
var _17405__$1 = this;
return self__.meta17404;
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17417(self__.f,self__.ch,self__.meta17404,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17446 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17446) : self__.f.call(null, G__17446));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17404","meta17404",-1705641252,null)], null);
}));

(cljs.core.async.t_cljs$core$async17403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17403");

(cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17403.
 */
cljs.core.async.__GT_t_cljs$core$async17403 = (function cljs$core$async$__GT_t_cljs$core$async17403(f,ch,meta17404){
return (new cljs.core.async.t_cljs$core$async17403(f,ch,meta17404));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17403(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17465 = (function (f,ch,meta17466){
this.f = f;
this.ch = ch;
this.meta17466 = meta17466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17467,meta17466__$1){
var self__ = this;
var _17467__$1 = this;
return (new cljs.core.async.t_cljs$core$async17465(self__.f,self__.ch,meta17466__$1));
}));

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17467){
var self__ = this;
var _17467__$1 = this;
return self__.meta17466;
}));

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17466","meta17466",-986619597,null)], null);
}));

(cljs.core.async.t_cljs$core$async17465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17465");

(cljs.core.async.t_cljs$core$async17465.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17465.
 */
cljs.core.async.__GT_t_cljs$core$async17465 = (function cljs$core$async$__GT_t_cljs$core$async17465(f,ch,meta17466){
return (new cljs.core.async.t_cljs$core$async17465(f,ch,meta17466));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17465(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17497 = (function (p,ch,meta17498){
this.p = p;
this.ch = ch;
this.meta17498 = meta17498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17499,meta17498__$1){
var self__ = this;
var _17499__$1 = this;
return (new cljs.core.async.t_cljs$core$async17497(self__.p,self__.ch,meta17498__$1));
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17499){
var self__ = this;
var _17499__$1 = this;
return self__.meta17498;
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17498","meta17498",-1821770394,null)], null);
}));

(cljs.core.async.t_cljs$core$async17497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17497");

(cljs.core.async.t_cljs$core$async17497.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17497.
 */
cljs.core.async.__GT_t_cljs$core$async17497 = (function cljs$core$async$__GT_t_cljs$core$async17497(p,ch,meta17498){
return (new cljs.core.async.t_cljs$core$async17497(p,ch,meta17498));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17497(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17534 = arguments.length;
switch (G__17534) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14620__auto___19561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_17560){
var state_val_17561 = (state_17560[(1)]);
if((state_val_17561 === (7))){
var inst_17556 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17571_19562 = state_17560__$1;
(statearr_17571_19562[(2)] = inst_17556);

(statearr_17571_19562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (1))){
var state_17560__$1 = state_17560;
var statearr_17577_19564 = state_17560__$1;
(statearr_17577_19564[(2)] = null);

(statearr_17577_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (4))){
var inst_17542 = (state_17560[(7)]);
var inst_17542__$1 = (state_17560[(2)]);
var inst_17543 = (inst_17542__$1 == null);
var state_17560__$1 = (function (){var statearr_17578 = state_17560;
(statearr_17578[(7)] = inst_17542__$1);

return statearr_17578;
})();
if(cljs.core.truth_(inst_17543)){
var statearr_17579_19568 = state_17560__$1;
(statearr_17579_19568[(1)] = (5));

} else {
var statearr_17583_19569 = state_17560__$1;
(statearr_17583_19569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (6))){
var inst_17542 = (state_17560[(7)]);
var inst_17547 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17542) : p.call(null, inst_17542));
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17547)){
var statearr_17590_19572 = state_17560__$1;
(statearr_17590_19572[(1)] = (8));

} else {
var statearr_17591_19573 = state_17560__$1;
(statearr_17591_19573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (3))){
var inst_17558 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17560__$1,inst_17558);
} else {
if((state_val_17561 === (2))){
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17560__$1,(4),ch);
} else {
if((state_val_17561 === (11))){
var inst_17550 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17601_19574 = state_17560__$1;
(statearr_17601_19574[(2)] = inst_17550);

(statearr_17601_19574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (9))){
var state_17560__$1 = state_17560;
var statearr_17602_19577 = state_17560__$1;
(statearr_17602_19577[(2)] = null);

(statearr_17602_19577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (5))){
var inst_17545 = cljs.core.async.close_BANG_(out);
var state_17560__$1 = state_17560;
var statearr_17604_19579 = state_17560__$1;
(statearr_17604_19579[(2)] = inst_17545);

(statearr_17604_19579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (10))){
var inst_17553 = (state_17560[(2)]);
var state_17560__$1 = (function (){var statearr_17606 = state_17560;
(statearr_17606[(8)] = inst_17553);

return statearr_17606;
})();
var statearr_17607_19580 = state_17560__$1;
(statearr_17607_19580[(2)] = null);

(statearr_17607_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (8))){
var inst_17542 = (state_17560[(7)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17560__$1,(11),out,inst_17542);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_17611 = [null,null,null,null,null,null,null,null,null];
(statearr_17611[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_17611[(1)] = (1));

return statearr_17611;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_17560){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_17560);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e17617){var ex__13777__auto__ = e17617;
var statearr_17618_19599 = state_17560;
(statearr_17618_19599[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_17560[(4)]))){
var statearr_17619_19600 = state_17560;
(statearr_17619_19600[(1)] = cljs.core.first((state_17560[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19602 = state_17560;
state_17560 = G__19602;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_17560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_17560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_17628 = f__14621__auto__();
(statearr_17628[(6)] = c__14620__auto___19561);

return statearr_17628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17631 = arguments.length;
switch (G__17631) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14620__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_17733){
var state_val_17734 = (state_17733[(1)]);
if((state_val_17734 === (7))){
var inst_17726 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17735_19609 = state_17733__$1;
(statearr_17735_19609[(2)] = inst_17726);

(statearr_17735_19609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (20))){
var inst_17686 = (state_17733[(7)]);
var inst_17700 = (state_17733[(2)]);
var inst_17701 = cljs.core.next(inst_17686);
var inst_17666 = inst_17701;
var inst_17667 = null;
var inst_17668 = (0);
var inst_17669 = (0);
var state_17733__$1 = (function (){var statearr_17739 = state_17733;
(statearr_17739[(8)] = inst_17667);

(statearr_17739[(9)] = inst_17700);

(statearr_17739[(10)] = inst_17666);

(statearr_17739[(11)] = inst_17669);

(statearr_17739[(12)] = inst_17668);

return statearr_17739;
})();
var statearr_17740_19610 = state_17733__$1;
(statearr_17740_19610[(2)] = null);

(statearr_17740_19610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (1))){
var state_17733__$1 = state_17733;
var statearr_17744_19611 = state_17733__$1;
(statearr_17744_19611[(2)] = null);

(statearr_17744_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (4))){
var inst_17652 = (state_17733[(13)]);
var inst_17652__$1 = (state_17733[(2)]);
var inst_17656 = (inst_17652__$1 == null);
var state_17733__$1 = (function (){var statearr_17745 = state_17733;
(statearr_17745[(13)] = inst_17652__$1);

return statearr_17745;
})();
if(cljs.core.truth_(inst_17656)){
var statearr_17749_19612 = state_17733__$1;
(statearr_17749_19612[(1)] = (5));

} else {
var statearr_17752_19613 = state_17733__$1;
(statearr_17752_19613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (15))){
var state_17733__$1 = state_17733;
var statearr_17757_19614 = state_17733__$1;
(statearr_17757_19614[(2)] = null);

(statearr_17757_19614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (21))){
var state_17733__$1 = state_17733;
var statearr_17758_19615 = state_17733__$1;
(statearr_17758_19615[(2)] = null);

(statearr_17758_19615[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (13))){
var inst_17667 = (state_17733[(8)]);
var inst_17666 = (state_17733[(10)]);
var inst_17669 = (state_17733[(11)]);
var inst_17668 = (state_17733[(12)]);
var inst_17680 = (state_17733[(2)]);
var inst_17681 = (inst_17669 + (1));
var tmp17753 = inst_17667;
var tmp17754 = inst_17666;
var tmp17755 = inst_17668;
var inst_17666__$1 = tmp17754;
var inst_17667__$1 = tmp17753;
var inst_17668__$1 = tmp17755;
var inst_17669__$1 = inst_17681;
var state_17733__$1 = (function (){var statearr_17759 = state_17733;
(statearr_17759[(8)] = inst_17667__$1);

(statearr_17759[(10)] = inst_17666__$1);

(statearr_17759[(14)] = inst_17680);

(statearr_17759[(11)] = inst_17669__$1);

(statearr_17759[(12)] = inst_17668__$1);

return statearr_17759;
})();
var statearr_17762_19616 = state_17733__$1;
(statearr_17762_19616[(2)] = null);

(statearr_17762_19616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (22))){
var state_17733__$1 = state_17733;
var statearr_17769_19617 = state_17733__$1;
(statearr_17769_19617[(2)] = null);

(statearr_17769_19617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (6))){
var inst_17652 = (state_17733[(13)]);
var inst_17664 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17652) : f.call(null, inst_17652));
var inst_17665 = cljs.core.seq(inst_17664);
var inst_17666 = inst_17665;
var inst_17667 = null;
var inst_17668 = (0);
var inst_17669 = (0);
var state_17733__$1 = (function (){var statearr_17770 = state_17733;
(statearr_17770[(8)] = inst_17667);

(statearr_17770[(10)] = inst_17666);

(statearr_17770[(11)] = inst_17669);

(statearr_17770[(12)] = inst_17668);

return statearr_17770;
})();
var statearr_17773_19625 = state_17733__$1;
(statearr_17773_19625[(2)] = null);

(statearr_17773_19625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (17))){
var inst_17686 = (state_17733[(7)]);
var inst_17693 = cljs.core.chunk_first(inst_17686);
var inst_17694 = cljs.core.chunk_rest(inst_17686);
var inst_17695 = cljs.core.count(inst_17693);
var inst_17666 = inst_17694;
var inst_17667 = inst_17693;
var inst_17668 = inst_17695;
var inst_17669 = (0);
var state_17733__$1 = (function (){var statearr_17777 = state_17733;
(statearr_17777[(8)] = inst_17667);

(statearr_17777[(10)] = inst_17666);

(statearr_17777[(11)] = inst_17669);

(statearr_17777[(12)] = inst_17668);

return statearr_17777;
})();
var statearr_17778_19630 = state_17733__$1;
(statearr_17778_19630[(2)] = null);

(statearr_17778_19630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (3))){
var inst_17728 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17733__$1,inst_17728);
} else {
if((state_val_17734 === (12))){
var inst_17713 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17784_19631 = state_17733__$1;
(statearr_17784_19631[(2)] = inst_17713);

(statearr_17784_19631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (2))){
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17733__$1,(4),in$);
} else {
if((state_val_17734 === (23))){
var inst_17724 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17786_19633 = state_17733__$1;
(statearr_17786_19633[(2)] = inst_17724);

(statearr_17786_19633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (19))){
var inst_17704 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17788_19634 = state_17733__$1;
(statearr_17788_19634[(2)] = inst_17704);

(statearr_17788_19634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (11))){
var inst_17666 = (state_17733[(10)]);
var inst_17686 = (state_17733[(7)]);
var inst_17686__$1 = cljs.core.seq(inst_17666);
var state_17733__$1 = (function (){var statearr_17791 = state_17733;
(statearr_17791[(7)] = inst_17686__$1);

return statearr_17791;
})();
if(inst_17686__$1){
var statearr_17793_19635 = state_17733__$1;
(statearr_17793_19635[(1)] = (14));

} else {
var statearr_17797_19636 = state_17733__$1;
(statearr_17797_19636[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (9))){
var inst_17715 = (state_17733[(2)]);
var inst_17716 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17733__$1 = (function (){var statearr_17799 = state_17733;
(statearr_17799[(15)] = inst_17715);

return statearr_17799;
})();
if(cljs.core.truth_(inst_17716)){
var statearr_17800_19637 = state_17733__$1;
(statearr_17800_19637[(1)] = (21));

} else {
var statearr_17801_19638 = state_17733__$1;
(statearr_17801_19638[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (5))){
var inst_17658 = cljs.core.async.close_BANG_(out);
var state_17733__$1 = state_17733;
var statearr_17808_19639 = state_17733__$1;
(statearr_17808_19639[(2)] = inst_17658);

(statearr_17808_19639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (14))){
var inst_17686 = (state_17733[(7)]);
var inst_17691 = cljs.core.chunked_seq_QMARK_(inst_17686);
var state_17733__$1 = state_17733;
if(inst_17691){
var statearr_17814_19642 = state_17733__$1;
(statearr_17814_19642[(1)] = (17));

} else {
var statearr_17815_19644 = state_17733__$1;
(statearr_17815_19644[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (16))){
var inst_17711 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17818_19646 = state_17733__$1;
(statearr_17818_19646[(2)] = inst_17711);

(statearr_17818_19646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (10))){
var inst_17667 = (state_17733[(8)]);
var inst_17669 = (state_17733[(11)]);
var inst_17678 = cljs.core._nth(inst_17667,inst_17669);
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17733__$1,(13),out,inst_17678);
} else {
if((state_val_17734 === (18))){
var inst_17686 = (state_17733[(7)]);
var inst_17698 = cljs.core.first(inst_17686);
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17733__$1,(20),out,inst_17698);
} else {
if((state_val_17734 === (8))){
var inst_17669 = (state_17733[(11)]);
var inst_17668 = (state_17733[(12)]);
var inst_17672 = (inst_17669 < inst_17668);
var inst_17673 = inst_17672;
var state_17733__$1 = state_17733;
if(cljs.core.truth_(inst_17673)){
var statearr_17826_19654 = state_17733__$1;
(statearr_17826_19654[(1)] = (10));

} else {
var statearr_17827_19655 = state_17733__$1;
(statearr_17827_19655[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13774__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13774__auto____0 = (function (){
var statearr_17830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17830[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13774__auto__);

(statearr_17830[(1)] = (1));

return statearr_17830;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13774__auto____1 = (function (state_17733){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_17733);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e17838){var ex__13777__auto__ = e17838;
var statearr_17842_19658 = state_17733;
(statearr_17842_19658[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_17733[(4)]))){
var statearr_17852_19659 = state_17733;
(statearr_17852_19659[(1)] = cljs.core.first((state_17733[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19663 = state_17733;
state_17733 = G__19663;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13774__auto__ = function(state_17733){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13774__auto____1.call(this,state_17733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13774__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13774__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_17868 = f__14621__auto__();
(statearr_17868[(6)] = c__14620__auto__);

return statearr_17868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));

return c__14620__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17883 = arguments.length;
switch (G__17883) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17895 = arguments.length;
switch (G__17895) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14620__auto___19694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_17927){
var state_val_17928 = (state_17927[(1)]);
if((state_val_17928 === (7))){
var inst_17920 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_17931_19695 = state_17927__$1;
(statearr_17931_19695[(2)] = inst_17920);

(statearr_17931_19695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (1))){
var inst_17902 = null;
var state_17927__$1 = (function (){var statearr_17935 = state_17927;
(statearr_17935[(7)] = inst_17902);

return statearr_17935;
})();
var statearr_17936_19696 = state_17927__$1;
(statearr_17936_19696[(2)] = null);

(statearr_17936_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (4))){
var inst_17905 = (state_17927[(8)]);
var inst_17905__$1 = (state_17927[(2)]);
var inst_17906 = (inst_17905__$1 == null);
var inst_17907 = cljs.core.not(inst_17906);
var state_17927__$1 = (function (){var statearr_17942 = state_17927;
(statearr_17942[(8)] = inst_17905__$1);

return statearr_17942;
})();
if(inst_17907){
var statearr_17943_19697 = state_17927__$1;
(statearr_17943_19697[(1)] = (5));

} else {
var statearr_17944_19698 = state_17927__$1;
(statearr_17944_19698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (6))){
var state_17927__$1 = state_17927;
var statearr_17945_19702 = state_17927__$1;
(statearr_17945_19702[(2)] = null);

(statearr_17945_19702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (3))){
var inst_17922 = (state_17927[(2)]);
var inst_17923 = cljs.core.async.close_BANG_(out);
var state_17927__$1 = (function (){var statearr_17946 = state_17927;
(statearr_17946[(9)] = inst_17922);

return statearr_17946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17927__$1,inst_17923);
} else {
if((state_val_17928 === (2))){
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17927__$1,(4),ch);
} else {
if((state_val_17928 === (11))){
var inst_17905 = (state_17927[(8)]);
var inst_17914 = (state_17927[(2)]);
var inst_17902 = inst_17905;
var state_17927__$1 = (function (){var statearr_17947 = state_17927;
(statearr_17947[(7)] = inst_17902);

(statearr_17947[(10)] = inst_17914);

return statearr_17947;
})();
var statearr_17948_19706 = state_17927__$1;
(statearr_17948_19706[(2)] = null);

(statearr_17948_19706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (9))){
var inst_17905 = (state_17927[(8)]);
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17927__$1,(11),out,inst_17905);
} else {
if((state_val_17928 === (5))){
var inst_17902 = (state_17927[(7)]);
var inst_17905 = (state_17927[(8)]);
var inst_17909 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17905,inst_17902);
var state_17927__$1 = state_17927;
if(inst_17909){
var statearr_17961_19707 = state_17927__$1;
(statearr_17961_19707[(1)] = (8));

} else {
var statearr_17962_19708 = state_17927__$1;
(statearr_17962_19708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (10))){
var inst_17917 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_17973_19709 = state_17927__$1;
(statearr_17973_19709[(2)] = inst_17917);

(statearr_17973_19709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (8))){
var inst_17902 = (state_17927[(7)]);
var tmp17953 = inst_17902;
var inst_17902__$1 = tmp17953;
var state_17927__$1 = (function (){var statearr_17975 = state_17927;
(statearr_17975[(7)] = inst_17902__$1);

return statearr_17975;
})();
var statearr_17976_19711 = state_17927__$1;
(statearr_17976_19711[(2)] = null);

(statearr_17976_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_17977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17977[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_17977[(1)] = (1));

return statearr_17977;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_17927){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_17927);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e17978){var ex__13777__auto__ = e17978;
var statearr_17979_19712 = state_17927;
(statearr_17979_19712[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_17927[(4)]))){
var statearr_17980_19713 = state_17927;
(statearr_17980_19713[(1)] = cljs.core.first((state_17927[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19716 = state_17927;
state_17927 = G__19716;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_17927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_17927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_17984 = f__14621__auto__();
(statearr_17984[(6)] = c__14620__auto___19694);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17987 = arguments.length;
switch (G__17987) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14620__auto___19722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_18041){
var state_val_18042 = (state_18041[(1)]);
if((state_val_18042 === (7))){
var inst_18037 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18044_19723 = state_18041__$1;
(statearr_18044_19723[(2)] = inst_18037);

(statearr_18044_19723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (1))){
var inst_17994 = (new Array(n));
var inst_17995 = inst_17994;
var inst_17996 = (0);
var state_18041__$1 = (function (){var statearr_18051 = state_18041;
(statearr_18051[(7)] = inst_17996);

(statearr_18051[(8)] = inst_17995);

return statearr_18051;
})();
var statearr_18053_19724 = state_18041__$1;
(statearr_18053_19724[(2)] = null);

(statearr_18053_19724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (4))){
var inst_18002 = (state_18041[(9)]);
var inst_18002__$1 = (state_18041[(2)]);
var inst_18004 = (inst_18002__$1 == null);
var inst_18005 = cljs.core.not(inst_18004);
var state_18041__$1 = (function (){var statearr_18054 = state_18041;
(statearr_18054[(9)] = inst_18002__$1);

return statearr_18054;
})();
if(inst_18005){
var statearr_18055_19737 = state_18041__$1;
(statearr_18055_19737[(1)] = (5));

} else {
var statearr_18056_19738 = state_18041__$1;
(statearr_18056_19738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (15))){
var inst_18031 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18057_19739 = state_18041__$1;
(statearr_18057_19739[(2)] = inst_18031);

(statearr_18057_19739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (13))){
var state_18041__$1 = state_18041;
var statearr_18062_19740 = state_18041__$1;
(statearr_18062_19740[(2)] = null);

(statearr_18062_19740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (6))){
var inst_17996 = (state_18041[(7)]);
var inst_18027 = (inst_17996 > (0));
var state_18041__$1 = state_18041;
if(cljs.core.truth_(inst_18027)){
var statearr_18071_19741 = state_18041__$1;
(statearr_18071_19741[(1)] = (12));

} else {
var statearr_18072_19743 = state_18041__$1;
(statearr_18072_19743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (3))){
var inst_18039 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18041__$1,inst_18039);
} else {
if((state_val_18042 === (12))){
var inst_17995 = (state_18041[(8)]);
var inst_18029 = cljs.core.vec(inst_17995);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18041__$1,(15),out,inst_18029);
} else {
if((state_val_18042 === (2))){
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18041__$1,(4),ch);
} else {
if((state_val_18042 === (11))){
var inst_18021 = (state_18041[(2)]);
var inst_18022 = (new Array(n));
var inst_17995 = inst_18022;
var inst_17996 = (0);
var state_18041__$1 = (function (){var statearr_18081 = state_18041;
(statearr_18081[(7)] = inst_17996);

(statearr_18081[(8)] = inst_17995);

(statearr_18081[(10)] = inst_18021);

return statearr_18081;
})();
var statearr_18082_19746 = state_18041__$1;
(statearr_18082_19746[(2)] = null);

(statearr_18082_19746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (9))){
var inst_17995 = (state_18041[(8)]);
var inst_18019 = cljs.core.vec(inst_17995);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18041__$1,(11),out,inst_18019);
} else {
if((state_val_18042 === (5))){
var inst_18008 = (state_18041[(11)]);
var inst_17996 = (state_18041[(7)]);
var inst_17995 = (state_18041[(8)]);
var inst_18002 = (state_18041[(9)]);
var inst_18007 = (inst_17995[inst_17996] = inst_18002);
var inst_18008__$1 = (inst_17996 + (1));
var inst_18010 = (inst_18008__$1 < n);
var state_18041__$1 = (function (){var statearr_18083 = state_18041;
(statearr_18083[(11)] = inst_18008__$1);

(statearr_18083[(12)] = inst_18007);

return statearr_18083;
})();
if(cljs.core.truth_(inst_18010)){
var statearr_18084_19747 = state_18041__$1;
(statearr_18084_19747[(1)] = (8));

} else {
var statearr_18085_19749 = state_18041__$1;
(statearr_18085_19749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (14))){
var inst_18034 = (state_18041[(2)]);
var inst_18035 = cljs.core.async.close_BANG_(out);
var state_18041__$1 = (function (){var statearr_18091 = state_18041;
(statearr_18091[(13)] = inst_18034);

return statearr_18091;
})();
var statearr_18093_19750 = state_18041__$1;
(statearr_18093_19750[(2)] = inst_18035);

(statearr_18093_19750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (10))){
var inst_18025 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18098_19751 = state_18041__$1;
(statearr_18098_19751[(2)] = inst_18025);

(statearr_18098_19751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (8))){
var inst_18008 = (state_18041[(11)]);
var inst_17995 = (state_18041[(8)]);
var tmp18090 = inst_17995;
var inst_17995__$1 = tmp18090;
var inst_17996 = inst_18008;
var state_18041__$1 = (function (){var statearr_18104 = state_18041;
(statearr_18104[(7)] = inst_17996);

(statearr_18104[(8)] = inst_17995__$1);

return statearr_18104;
})();
var statearr_18105_19754 = state_18041__$1;
(statearr_18105_19754[(2)] = null);

(statearr_18105_19754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_18106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18106[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_18106[(1)] = (1));

return statearr_18106;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_18041){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_18041);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e18107){var ex__13777__auto__ = e18107;
var statearr_18108_19758 = state_18041;
(statearr_18108_19758[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_18041[(4)]))){
var statearr_18109_19760 = state_18041;
(statearr_18109_19760[(1)] = cljs.core.first((state_18041[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19763 = state_18041;
state_18041 = G__19763;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_18041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_18041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_18116 = f__14621__auto__();
(statearr_18116[(6)] = c__14620__auto___19722);

return statearr_18116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18136 = arguments.length;
switch (G__18136) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14620__auto___19781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14621__auto__ = (function (){var switch__13773__auto__ = (function (state_18207){
var state_val_18208 = (state_18207[(1)]);
if((state_val_18208 === (7))){
var inst_18203 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18214_19782 = state_18207__$1;
(statearr_18214_19782[(2)] = inst_18203);

(statearr_18214_19782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (1))){
var inst_18158 = [];
var inst_18159 = inst_18158;
var inst_18160 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18207__$1 = (function (){var statearr_18215 = state_18207;
(statearr_18215[(7)] = inst_18159);

(statearr_18215[(8)] = inst_18160);

return statearr_18215;
})();
var statearr_18216_19783 = state_18207__$1;
(statearr_18216_19783[(2)] = null);

(statearr_18216_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (4))){
var inst_18163 = (state_18207[(9)]);
var inst_18163__$1 = (state_18207[(2)]);
var inst_18164 = (inst_18163__$1 == null);
var inst_18165 = cljs.core.not(inst_18164);
var state_18207__$1 = (function (){var statearr_18223 = state_18207;
(statearr_18223[(9)] = inst_18163__$1);

return statearr_18223;
})();
if(inst_18165){
var statearr_18226_19793 = state_18207__$1;
(statearr_18226_19793[(1)] = (5));

} else {
var statearr_18227_19794 = state_18207__$1;
(statearr_18227_19794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (15))){
var inst_18159 = (state_18207[(7)]);
var inst_18195 = cljs.core.vec(inst_18159);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18207__$1,(18),out,inst_18195);
} else {
if((state_val_18208 === (13))){
var inst_18189 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18234_19799 = state_18207__$1;
(statearr_18234_19799[(2)] = inst_18189);

(statearr_18234_19799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (6))){
var inst_18159 = (state_18207[(7)]);
var inst_18191 = inst_18159.length;
var inst_18192 = (inst_18191 > (0));
var state_18207__$1 = state_18207;
if(cljs.core.truth_(inst_18192)){
var statearr_18238_19802 = state_18207__$1;
(statearr_18238_19802[(1)] = (15));

} else {
var statearr_18239_19803 = state_18207__$1;
(statearr_18239_19803[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (17))){
var inst_18200 = (state_18207[(2)]);
var inst_18201 = cljs.core.async.close_BANG_(out);
var state_18207__$1 = (function (){var statearr_18243 = state_18207;
(statearr_18243[(10)] = inst_18200);

return statearr_18243;
})();
var statearr_18246_19808 = state_18207__$1;
(statearr_18246_19808[(2)] = inst_18201);

(statearr_18246_19808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (3))){
var inst_18205 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18207__$1,inst_18205);
} else {
if((state_val_18208 === (12))){
var inst_18159 = (state_18207[(7)]);
var inst_18181 = cljs.core.vec(inst_18159);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18207__$1,(14),out,inst_18181);
} else {
if((state_val_18208 === (2))){
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18207__$1,(4),ch);
} else {
if((state_val_18208 === (11))){
var inst_18159 = (state_18207[(7)]);
var inst_18167 = (state_18207[(11)]);
var inst_18163 = (state_18207[(9)]);
var inst_18176 = inst_18159.push(inst_18163);
var tmp18248 = inst_18159;
var inst_18159__$1 = tmp18248;
var inst_18160 = inst_18167;
var state_18207__$1 = (function (){var statearr_18254 = state_18207;
(statearr_18254[(7)] = inst_18159__$1);

(statearr_18254[(8)] = inst_18160);

(statearr_18254[(12)] = inst_18176);

return statearr_18254;
})();
var statearr_18263_19812 = state_18207__$1;
(statearr_18263_19812[(2)] = null);

(statearr_18263_19812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (9))){
var inst_18160 = (state_18207[(8)]);
var inst_18172 = cljs.core.keyword_identical_QMARK_(inst_18160,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18207__$1 = state_18207;
var statearr_18269_19814 = state_18207__$1;
(statearr_18269_19814[(2)] = inst_18172);

(statearr_18269_19814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (5))){
var inst_18169 = (state_18207[(13)]);
var inst_18160 = (state_18207[(8)]);
var inst_18167 = (state_18207[(11)]);
var inst_18163 = (state_18207[(9)]);
var inst_18167__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18163) : f.call(null, inst_18163));
var inst_18169__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18167__$1,inst_18160);
var state_18207__$1 = (function (){var statearr_18278 = state_18207;
(statearr_18278[(13)] = inst_18169__$1);

(statearr_18278[(11)] = inst_18167__$1);

return statearr_18278;
})();
if(inst_18169__$1){
var statearr_18283_19822 = state_18207__$1;
(statearr_18283_19822[(1)] = (8));

} else {
var statearr_18293_19825 = state_18207__$1;
(statearr_18293_19825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (14))){
var inst_18167 = (state_18207[(11)]);
var inst_18163 = (state_18207[(9)]);
var inst_18183 = (state_18207[(2)]);
var inst_18185 = [];
var inst_18186 = inst_18185.push(inst_18163);
var inst_18159 = inst_18185;
var inst_18160 = inst_18167;
var state_18207__$1 = (function (){var statearr_18298 = state_18207;
(statearr_18298[(7)] = inst_18159);

(statearr_18298[(14)] = inst_18183);

(statearr_18298[(8)] = inst_18160);

(statearr_18298[(15)] = inst_18186);

return statearr_18298;
})();
var statearr_18302_19826 = state_18207__$1;
(statearr_18302_19826[(2)] = null);

(statearr_18302_19826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (16))){
var state_18207__$1 = state_18207;
var statearr_18307_19831 = state_18207__$1;
(statearr_18307_19831[(2)] = null);

(statearr_18307_19831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (10))){
var inst_18174 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
if(cljs.core.truth_(inst_18174)){
var statearr_18322_19832 = state_18207__$1;
(statearr_18322_19832[(1)] = (11));

} else {
var statearr_18326_19834 = state_18207__$1;
(statearr_18326_19834[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (18))){
var inst_18197 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18335_19835 = state_18207__$1;
(statearr_18335_19835[(2)] = inst_18197);

(statearr_18335_19835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (8))){
var inst_18169 = (state_18207[(13)]);
var state_18207__$1 = state_18207;
var statearr_18343_19837 = state_18207__$1;
(statearr_18343_19837[(2)] = inst_18169);

(statearr_18343_19837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13774__auto__ = null;
var cljs$core$async$state_machine__13774__auto____0 = (function (){
var statearr_18366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18366[(0)] = cljs$core$async$state_machine__13774__auto__);

(statearr_18366[(1)] = (1));

return statearr_18366;
});
var cljs$core$async$state_machine__13774__auto____1 = (function (state_18207){
while(true){
var ret_value__13775__auto__ = (function (){try{while(true){
var result__13776__auto__ = switch__13773__auto__(state_18207);
if(cljs.core.keyword_identical_QMARK_(result__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13776__auto__;
}
break;
}
}catch (e18370){var ex__13777__auto__ = e18370;
var statearr_18371_19839 = state_18207;
(statearr_18371_19839[(2)] = ex__13777__auto__);


if(cljs.core.seq((state_18207[(4)]))){
var statearr_18379_19840 = state_18207;
(statearr_18379_19840[(1)] = cljs.core.first((state_18207[(4)])));

} else {
throw ex__13777__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19843 = state_18207;
state_18207 = G__19843;
continue;
} else {
return ret_value__13775__auto__;
}
break;
}
});
cljs$core$async$state_machine__13774__auto__ = function(state_18207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13774__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13774__auto____1.call(this,state_18207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13774__auto____0;
cljs$core$async$state_machine__13774__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13774__auto____1;
return cljs$core$async$state_machine__13774__auto__;
})()
})();
var state__14622__auto__ = (function (){var statearr_18400 = f__14621__auto__();
(statearr_18400[(6)] = c__14620__auto___19781);

return statearr_18400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14622__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
