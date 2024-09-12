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
cljs.core.async.t_cljs$core$async14144 = (function (f,blockable,meta14145){
this.f = f;
this.blockable = blockable;
this.meta14145 = meta14145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14146,meta14145__$1){
var self__ = this;
var _14146__$1 = this;
return (new cljs.core.async.t_cljs$core$async14144(self__.f,self__.blockable,meta14145__$1));
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14146){
var self__ = this;
var _14146__$1 = this;
return self__.meta14145;
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14145","meta14145",1456649990,null)], null);
}));

(cljs.core.async.t_cljs$core$async14144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14144");

(cljs.core.async.t_cljs$core$async14144.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14144.
 */
cljs.core.async.__GT_t_cljs$core$async14144 = (function cljs$core$async$__GT_t_cljs$core$async14144(f,blockable,meta14145){
return (new cljs.core.async.t_cljs$core$async14144(f,blockable,meta14145));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14137 = arguments.length;
switch (G__14137) {
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
return (new cljs.core.async.t_cljs$core$async14144(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14234 = arguments.length;
switch (G__14234) {
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
var G__14275 = arguments.length;
switch (G__14275) {
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
var G__14323 = arguments.length;
switch (G__14323) {
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
var val_17899 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17899) : fn1.call(null, val_17899));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17899) : fn1.call(null, val_17899));
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
var G__14355 = arguments.length;
switch (G__14355) {
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
var n__5593__auto___17908 = n;
var x_17909 = (0);
while(true){
if((x_17909 < n__5593__auto___17908)){
(a[x_17909] = x_17909);

var G__17911 = (x_17909 + (1));
x_17909 = G__17911;
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
cljs.core.async.t_cljs$core$async14382 = (function (flag,meta14383){
this.flag = flag;
this.meta14383 = meta14383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14384,meta14383__$1){
var self__ = this;
var _14384__$1 = this;
return (new cljs.core.async.t_cljs$core$async14382(self__.flag,meta14383__$1));
}));

(cljs.core.async.t_cljs$core$async14382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14384){
var self__ = this;
var _14384__$1 = this;
return self__.meta14383;
}));

(cljs.core.async.t_cljs$core$async14382.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14383","meta14383",-1106067187,null)], null);
}));

(cljs.core.async.t_cljs$core$async14382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14382");

(cljs.core.async.t_cljs$core$async14382.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14382.
 */
cljs.core.async.__GT_t_cljs$core$async14382 = (function cljs$core$async$__GT_t_cljs$core$async14382(flag,meta14383){
return (new cljs.core.async.t_cljs$core$async14382(flag,meta14383));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14382(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14412 = (function (flag,cb,meta14413){
this.flag = flag;
this.cb = cb;
this.meta14413 = meta14413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14414,meta14413__$1){
var self__ = this;
var _14414__$1 = this;
return (new cljs.core.async.t_cljs$core$async14412(self__.flag,self__.cb,meta14413__$1));
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14414){
var self__ = this;
var _14414__$1 = this;
return self__.meta14413;
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14413","meta14413",1010977047,null)], null);
}));

(cljs.core.async.t_cljs$core$async14412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14412");

(cljs.core.async.t_cljs$core$async14412.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14412.
 */
cljs.core.async.__GT_t_cljs$core$async14412 = (function cljs$core$async$__GT_t_cljs$core$async14412(flag,cb,meta14413){
return (new cljs.core.async.t_cljs$core$async14412(flag,cb,meta14413));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14412(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14446_SHARP_){
var G__14454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14446_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14454) : fret.call(null, G__14454));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14447_SHARP_){
var G__14455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14447_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14455) : fret.call(null, G__14455));
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
var G__17927 = (i + (1));
i = G__17927;
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
var len__5726__auto___17929 = arguments.length;
var i__5727__auto___17930 = (0);
while(true){
if((i__5727__auto___17930 < len__5726__auto___17929)){
args__5732__auto__.push((arguments[i__5727__auto___17930]));

var G__17934 = (i__5727__auto___17930 + (1));
i__5727__auto___17930 = G__17934;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14480){
var map__14482 = p__14480;
var map__14482__$1 = cljs.core.__destructure_map(map__14482);
var opts = map__14482__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14465){
var G__14466 = cljs.core.first(seq14465);
var seq14465__$1 = cljs.core.next(seq14465);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14466,seq14465__$1);
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
var G__14504 = arguments.length;
switch (G__14504) {
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
var c__14004__auto___17944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_14576){
var state_val_14581 = (state_14576[(1)]);
if((state_val_14581 === (7))){
var inst_14568 = (state_14576[(2)]);
var state_14576__$1 = state_14576;
var statearr_14602_17945 = state_14576__$1;
(statearr_14602_17945[(2)] = inst_14568);

(statearr_14602_17945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (1))){
var state_14576__$1 = state_14576;
var statearr_14609_17946 = state_14576__$1;
(statearr_14609_17946[(2)] = null);

(statearr_14609_17946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (4))){
var inst_14544 = (state_14576[(7)]);
var inst_14544__$1 = (state_14576[(2)]);
var inst_14549 = (inst_14544__$1 == null);
var state_14576__$1 = (function (){var statearr_14613 = state_14576;
(statearr_14613[(7)] = inst_14544__$1);

return statearr_14613;
})();
if(cljs.core.truth_(inst_14549)){
var statearr_14619_17947 = state_14576__$1;
(statearr_14619_17947[(1)] = (5));

} else {
var statearr_14620_17948 = state_14576__$1;
(statearr_14620_17948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (13))){
var state_14576__$1 = state_14576;
var statearr_14624_17949 = state_14576__$1;
(statearr_14624_17949[(2)] = null);

(statearr_14624_17949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (6))){
var inst_14544 = (state_14576[(7)]);
var state_14576__$1 = state_14576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14576__$1,(11),to,inst_14544);
} else {
if((state_val_14581 === (3))){
var inst_14570 = (state_14576[(2)]);
var state_14576__$1 = state_14576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14576__$1,inst_14570);
} else {
if((state_val_14581 === (12))){
var state_14576__$1 = state_14576;
var statearr_14642_17957 = state_14576__$1;
(statearr_14642_17957[(2)] = null);

(statearr_14642_17957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (2))){
var state_14576__$1 = state_14576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14576__$1,(4),from);
} else {
if((state_val_14581 === (11))){
var inst_14561 = (state_14576[(2)]);
var state_14576__$1 = state_14576;
if(cljs.core.truth_(inst_14561)){
var statearr_14653_17958 = state_14576__$1;
(statearr_14653_17958[(1)] = (12));

} else {
var statearr_14658_17959 = state_14576__$1;
(statearr_14658_17959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (9))){
var state_14576__$1 = state_14576;
var statearr_14662_17960 = state_14576__$1;
(statearr_14662_17960[(2)] = null);

(statearr_14662_17960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (5))){
var state_14576__$1 = state_14576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14664_17961 = state_14576__$1;
(statearr_14664_17961[(1)] = (8));

} else {
var statearr_14665_17962 = state_14576__$1;
(statearr_14665_17962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (14))){
var inst_14566 = (state_14576[(2)]);
var state_14576__$1 = state_14576;
var statearr_14676_17963 = state_14576__$1;
(statearr_14676_17963[(2)] = inst_14566);

(statearr_14676_17963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (10))){
var inst_14558 = (state_14576[(2)]);
var state_14576__$1 = state_14576;
var statearr_14677_17964 = state_14576__$1;
(statearr_14677_17964[(2)] = inst_14558);

(statearr_14677_17964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (8))){
var inst_14552 = cljs.core.async.close_BANG_(to);
var state_14576__$1 = state_14576;
var statearr_14685_17965 = state_14576__$1;
(statearr_14685_17965[(2)] = inst_14552);

(statearr_14685_17965[(1)] = (10));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_14689 = [null,null,null,null,null,null,null,null];
(statearr_14689[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_14689[(1)] = (1));

return statearr_14689;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_14576){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_14576);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e14693){var ex__13182__auto__ = e14693;
var statearr_14695_17968 = state_14576;
(statearr_14695_17968[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_14576[(4)]))){
var statearr_14706_17969 = state_14576;
(statearr_14706_17969[(1)] = cljs.core.first((state_14576[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17970 = state_14576;
state_14576 = G__17970;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_14576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_14576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_14707 = f__14005__auto__();
(statearr_14707[(6)] = c__14004__auto___17944);

return statearr_14707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
var process__$1 = (function (p__14715){
var vec__14717 = p__14715;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14717,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14717,(1),null);
var job = vec__14717;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14004__auto___17972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_14730){
var state_val_14731 = (state_14730[(1)]);
if((state_val_14731 === (1))){
var state_14730__$1 = state_14730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14730__$1,(2),res,v);
} else {
if((state_val_14731 === (2))){
var inst_14727 = (state_14730[(2)]);
var inst_14728 = cljs.core.async.close_BANG_(res);
var state_14730__$1 = (function (){var statearr_14732 = state_14730;
(statearr_14732[(7)] = inst_14727);

return statearr_14732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14730__$1,inst_14728);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0 = (function (){
var statearr_14734 = [null,null,null,null,null,null,null,null];
(statearr_14734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__);

(statearr_14734[(1)] = (1));

return statearr_14734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1 = (function (state_14730){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_14730);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e14735){var ex__13182__auto__ = e14735;
var statearr_14736_17976 = state_14730;
(statearr_14736_17976[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_14730[(4)]))){
var statearr_14737_17977 = state_14730;
(statearr_14737_17977[(1)] = cljs.core.first((state_14730[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17978 = state_14730;
state_14730 = G__17978;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = function(state_14730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1.call(this,state_14730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_14738 = f__14005__auto__();
(statearr_14738[(6)] = c__14004__auto___17972);

return statearr_14738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14741){
var vec__14742 = p__14741;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(1),null);
var job = vec__14742;
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
var n__5593__auto___17979 = n;
var __17980 = (0);
while(true){
if((__17980 < n__5593__auto___17979)){
var G__14747_17981 = type;
var G__14747_17982__$1 = (((G__14747_17981 instanceof cljs.core.Keyword))?G__14747_17981.fqn:null);
switch (G__14747_17982__$1) {
case "compute":
var c__14004__auto___17984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17980,c__14004__auto___17984,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async){
return (function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = ((function (__17980,c__14004__auto___17984,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async){
return (function (state_14762){
var state_val_14763 = (state_14762[(1)]);
if((state_val_14763 === (1))){
var state_14762__$1 = state_14762;
var statearr_14765_17986 = state_14762__$1;
(statearr_14765_17986[(2)] = null);

(statearr_14765_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14763 === (2))){
var state_14762__$1 = state_14762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14762__$1,(4),jobs);
} else {
if((state_val_14763 === (3))){
var inst_14760 = (state_14762[(2)]);
var state_14762__$1 = state_14762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14762__$1,inst_14760);
} else {
if((state_val_14763 === (4))){
var inst_14752 = (state_14762[(2)]);
var inst_14753 = process__$1(inst_14752);
var state_14762__$1 = state_14762;
if(cljs.core.truth_(inst_14753)){
var statearr_14767_17993 = state_14762__$1;
(statearr_14767_17993[(1)] = (5));

} else {
var statearr_14768_17994 = state_14762__$1;
(statearr_14768_17994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14763 === (5))){
var state_14762__$1 = state_14762;
var statearr_14769_17995 = state_14762__$1;
(statearr_14769_17995[(2)] = null);

(statearr_14769_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14763 === (6))){
var state_14762__$1 = state_14762;
var statearr_14770_17996 = state_14762__$1;
(statearr_14770_17996[(2)] = null);

(statearr_14770_17996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14763 === (7))){
var inst_14758 = (state_14762[(2)]);
var state_14762__$1 = state_14762;
var statearr_14772_18002 = state_14762__$1;
(statearr_14772_18002[(2)] = inst_14758);

(statearr_14772_18002[(1)] = (3));


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
});})(__17980,c__14004__auto___17984,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async))
;
return ((function (__17980,switch__13177__auto__,c__14004__auto___17984,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0 = (function (){
var statearr_14773 = [null,null,null,null,null,null,null];
(statearr_14773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__);

(statearr_14773[(1)] = (1));

return statearr_14773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1 = (function (state_14762){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_14762);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e14774){var ex__13182__auto__ = e14774;
var statearr_14776_18003 = state_14762;
(statearr_14776_18003[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_14762[(4)]))){
var statearr_14777_18004 = state_14762;
(statearr_14777_18004[(1)] = cljs.core.first((state_14762[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18005 = state_14762;
state_14762 = G__18005;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = function(state_14762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1.call(this,state_14762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__;
})()
;})(__17980,switch__13177__auto__,c__14004__auto___17984,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async))
})();
var state__14006__auto__ = (function (){var statearr_14780 = f__14005__auto__();
(statearr_14780[(6)] = c__14004__auto___17984);

return statearr_14780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
});})(__17980,c__14004__auto___17984,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async))
);


break;
case "async":
var c__14004__auto___18006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17980,c__14004__auto___18006,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async){
return (function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = ((function (__17980,c__14004__auto___18006,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async){
return (function (state_14793){
var state_val_14794 = (state_14793[(1)]);
if((state_val_14794 === (1))){
var state_14793__$1 = state_14793;
var statearr_14797_18010 = state_14793__$1;
(statearr_14797_18010[(2)] = null);

(statearr_14797_18010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (2))){
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14793__$1,(4),jobs);
} else {
if((state_val_14794 === (3))){
var inst_14791 = (state_14793[(2)]);
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14793__$1,inst_14791);
} else {
if((state_val_14794 === (4))){
var inst_14783 = (state_14793[(2)]);
var inst_14784 = async(inst_14783);
var state_14793__$1 = state_14793;
if(cljs.core.truth_(inst_14784)){
var statearr_14801_18011 = state_14793__$1;
(statearr_14801_18011[(1)] = (5));

} else {
var statearr_14803_18012 = state_14793__$1;
(statearr_14803_18012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (5))){
var state_14793__$1 = state_14793;
var statearr_14804_18013 = state_14793__$1;
(statearr_14804_18013[(2)] = null);

(statearr_14804_18013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (6))){
var state_14793__$1 = state_14793;
var statearr_14810_18016 = state_14793__$1;
(statearr_14810_18016[(2)] = null);

(statearr_14810_18016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14794 === (7))){
var inst_14789 = (state_14793[(2)]);
var state_14793__$1 = state_14793;
var statearr_14812_18017 = state_14793__$1;
(statearr_14812_18017[(2)] = inst_14789);

(statearr_14812_18017[(1)] = (3));


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
});})(__17980,c__14004__auto___18006,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async))
;
return ((function (__17980,switch__13177__auto__,c__14004__auto___18006,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0 = (function (){
var statearr_14813 = [null,null,null,null,null,null,null];
(statearr_14813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__);

(statearr_14813[(1)] = (1));

return statearr_14813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1 = (function (state_14793){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_14793);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e14815){var ex__13182__auto__ = e14815;
var statearr_14816_18019 = state_14793;
(statearr_14816_18019[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_14793[(4)]))){
var statearr_14820_18020 = state_14793;
(statearr_14820_18020[(1)] = cljs.core.first((state_14793[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18021 = state_14793;
state_14793 = G__18021;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = function(state_14793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1.call(this,state_14793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__;
})()
;})(__17980,switch__13177__auto__,c__14004__auto___18006,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async))
})();
var state__14006__auto__ = (function (){var statearr_14826 = f__14005__auto__();
(statearr_14826[(6)] = c__14004__auto___18006);

return statearr_14826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
});})(__17980,c__14004__auto___18006,G__14747_17981,G__14747_17982__$1,n__5593__auto___17979,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14747_17982__$1)].join('')));

}

var G__18023 = (__17980 + (1));
__17980 = G__18023;
continue;
} else {
}
break;
}

var c__14004__auto___18024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_14857){
var state_val_14858 = (state_14857[(1)]);
if((state_val_14858 === (7))){
var inst_14849 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
var statearr_14875_18025 = state_14857__$1;
(statearr_14875_18025[(2)] = inst_14849);

(statearr_14875_18025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (1))){
var state_14857__$1 = state_14857;
var statearr_14876_18027 = state_14857__$1;
(statearr_14876_18027[(2)] = null);

(statearr_14876_18027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (4))){
var inst_14832 = (state_14857[(7)]);
var inst_14832__$1 = (state_14857[(2)]);
var inst_14833 = (inst_14832__$1 == null);
var state_14857__$1 = (function (){var statearr_14881 = state_14857;
(statearr_14881[(7)] = inst_14832__$1);

return statearr_14881;
})();
if(cljs.core.truth_(inst_14833)){
var statearr_14886_18029 = state_14857__$1;
(statearr_14886_18029[(1)] = (5));

} else {
var statearr_14887_18030 = state_14857__$1;
(statearr_14887_18030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (6))){
var inst_14838 = (state_14857[(8)]);
var inst_14832 = (state_14857[(7)]);
var inst_14838__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14841 = [inst_14832,inst_14838__$1];
var inst_14842 = (new cljs.core.PersistentVector(null,2,(5),inst_14839,inst_14841,null));
var state_14857__$1 = (function (){var statearr_14895 = state_14857;
(statearr_14895[(8)] = inst_14838__$1);

return statearr_14895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14857__$1,(8),jobs,inst_14842);
} else {
if((state_val_14858 === (3))){
var inst_14851 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14857__$1,inst_14851);
} else {
if((state_val_14858 === (2))){
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14857__$1,(4),from);
} else {
if((state_val_14858 === (9))){
var inst_14846 = (state_14857[(2)]);
var state_14857__$1 = (function (){var statearr_14918 = state_14857;
(statearr_14918[(9)] = inst_14846);

return statearr_14918;
})();
var statearr_14919_18036 = state_14857__$1;
(statearr_14919_18036[(2)] = null);

(statearr_14919_18036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (5))){
var inst_14835 = cljs.core.async.close_BANG_(jobs);
var state_14857__$1 = state_14857;
var statearr_14921_18038 = state_14857__$1;
(statearr_14921_18038[(2)] = inst_14835);

(statearr_14921_18038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (8))){
var inst_14838 = (state_14857[(8)]);
var inst_14844 = (state_14857[(2)]);
var state_14857__$1 = (function (){var statearr_14922 = state_14857;
(statearr_14922[(10)] = inst_14844);

return statearr_14922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14857__$1,(9),results,inst_14838);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1 = (function (state_14857){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_14857);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e14925){var ex__13182__auto__ = e14925;
var statearr_14926_18040 = state_14857;
(statearr_14926_18040[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_14857[(4)]))){
var statearr_14928_18041 = state_14857;
(statearr_14928_18041[(1)] = cljs.core.first((state_14857[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18042 = state_14857;
state_14857 = G__18042;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = function(state_14857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1.call(this,state_14857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_14929 = f__14005__auto__();
(statearr_14929[(6)] = c__14004__auto___18024);

return statearr_14929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));


var c__14004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_14973){
var state_val_14974 = (state_14973[(1)]);
if((state_val_14974 === (7))){
var inst_14969 = (state_14973[(2)]);
var state_14973__$1 = state_14973;
var statearr_14980_18045 = state_14973__$1;
(statearr_14980_18045[(2)] = inst_14969);

(statearr_14980_18045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (20))){
var state_14973__$1 = state_14973;
var statearr_14987_18046 = state_14973__$1;
(statearr_14987_18046[(2)] = null);

(statearr_14987_18046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (1))){
var state_14973__$1 = state_14973;
var statearr_14997_18047 = state_14973__$1;
(statearr_14997_18047[(2)] = null);

(statearr_14997_18047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (4))){
var inst_14936 = (state_14973[(7)]);
var inst_14936__$1 = (state_14973[(2)]);
var inst_14938 = (inst_14936__$1 == null);
var state_14973__$1 = (function (){var statearr_15010 = state_14973;
(statearr_15010[(7)] = inst_14936__$1);

return statearr_15010;
})();
if(cljs.core.truth_(inst_14938)){
var statearr_15019_18048 = state_14973__$1;
(statearr_15019_18048[(1)] = (5));

} else {
var statearr_15022_18049 = state_14973__$1;
(statearr_15022_18049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (15))){
var inst_14951 = (state_14973[(8)]);
var state_14973__$1 = state_14973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14973__$1,(18),to,inst_14951);
} else {
if((state_val_14974 === (21))){
var inst_14964 = (state_14973[(2)]);
var state_14973__$1 = state_14973;
var statearr_15040_18050 = state_14973__$1;
(statearr_15040_18050[(2)] = inst_14964);

(statearr_15040_18050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (13))){
var inst_14966 = (state_14973[(2)]);
var state_14973__$1 = (function (){var statearr_15052 = state_14973;
(statearr_15052[(9)] = inst_14966);

return statearr_15052;
})();
var statearr_15062_18051 = state_14973__$1;
(statearr_15062_18051[(2)] = null);

(statearr_15062_18051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (6))){
var inst_14936 = (state_14973[(7)]);
var state_14973__$1 = state_14973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14973__$1,(11),inst_14936);
} else {
if((state_val_14974 === (17))){
var inst_14959 = (state_14973[(2)]);
var state_14973__$1 = state_14973;
if(cljs.core.truth_(inst_14959)){
var statearr_15072_18052 = state_14973__$1;
(statearr_15072_18052[(1)] = (19));

} else {
var statearr_15073_18053 = state_14973__$1;
(statearr_15073_18053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (3))){
var inst_14971 = (state_14973[(2)]);
var state_14973__$1 = state_14973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14973__$1,inst_14971);
} else {
if((state_val_14974 === (12))){
var inst_14948 = (state_14973[(10)]);
var state_14973__$1 = state_14973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14973__$1,(14),inst_14948);
} else {
if((state_val_14974 === (2))){
var state_14973__$1 = state_14973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14973__$1,(4),results);
} else {
if((state_val_14974 === (19))){
var state_14973__$1 = state_14973;
var statearr_15087_18056 = state_14973__$1;
(statearr_15087_18056[(2)] = null);

(statearr_15087_18056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (11))){
var inst_14948 = (state_14973[(2)]);
var state_14973__$1 = (function (){var statearr_15089 = state_14973;
(statearr_15089[(10)] = inst_14948);

return statearr_15089;
})();
var statearr_15090_18058 = state_14973__$1;
(statearr_15090_18058[(2)] = null);

(statearr_15090_18058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (9))){
var state_14973__$1 = state_14973;
var statearr_15092_18062 = state_14973__$1;
(statearr_15092_18062[(2)] = null);

(statearr_15092_18062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (5))){
var state_14973__$1 = state_14973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15093_18063 = state_14973__$1;
(statearr_15093_18063[(1)] = (8));

} else {
var statearr_15095_18064 = state_14973__$1;
(statearr_15095_18064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (14))){
var inst_14951 = (state_14973[(8)]);
var inst_14953 = (state_14973[(11)]);
var inst_14951__$1 = (state_14973[(2)]);
var inst_14952 = (inst_14951__$1 == null);
var inst_14953__$1 = cljs.core.not(inst_14952);
var state_14973__$1 = (function (){var statearr_15097 = state_14973;
(statearr_15097[(8)] = inst_14951__$1);

(statearr_15097[(11)] = inst_14953__$1);

return statearr_15097;
})();
if(inst_14953__$1){
var statearr_15098_18065 = state_14973__$1;
(statearr_15098_18065[(1)] = (15));

} else {
var statearr_15100_18069 = state_14973__$1;
(statearr_15100_18069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (16))){
var inst_14953 = (state_14973[(11)]);
var state_14973__$1 = state_14973;
var statearr_15103_18079 = state_14973__$1;
(statearr_15103_18079[(2)] = inst_14953);

(statearr_15103_18079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (10))){
var inst_14945 = (state_14973[(2)]);
var state_14973__$1 = state_14973;
var statearr_15109_18080 = state_14973__$1;
(statearr_15109_18080[(2)] = inst_14945);

(statearr_15109_18080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (18))){
var inst_14956 = (state_14973[(2)]);
var state_14973__$1 = state_14973;
var statearr_15115_18082 = state_14973__$1;
(statearr_15115_18082[(2)] = inst_14956);

(statearr_15115_18082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14974 === (8))){
var inst_14942 = cljs.core.async.close_BANG_(to);
var state_14973__$1 = state_14973;
var statearr_15124_18084 = state_14973__$1;
(statearr_15124_18084[(2)] = inst_14942);

(statearr_15124_18084[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0 = (function (){
var statearr_15137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__);

(statearr_15137[(1)] = (1));

return statearr_15137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1 = (function (state_14973){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_14973);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e15145){var ex__13182__auto__ = e15145;
var statearr_15150_18085 = state_14973;
(statearr_15150_18085[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_14973[(4)]))){
var statearr_15154_18086 = state_14973;
(statearr_15154_18086[(1)] = cljs.core.first((state_14973[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18087 = state_14973;
state_14973 = G__18087;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__ = function(state_14973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1.call(this,state_14973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_15170 = f__14005__auto__();
(statearr_15170[(6)] = c__14004__auto__);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));

return c__14004__auto__;
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
var G__15177 = arguments.length;
switch (G__15177) {
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
var G__15203 = arguments.length;
switch (G__15203) {
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
var G__15216 = arguments.length;
switch (G__15216) {
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
var c__14004__auto___18106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_15254){
var state_val_15256 = (state_15254[(1)]);
if((state_val_15256 === (7))){
var inst_15250 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
var statearr_15266_18108 = state_15254__$1;
(statearr_15266_18108[(2)] = inst_15250);

(statearr_15266_18108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (1))){
var state_15254__$1 = state_15254;
var statearr_15270_18109 = state_15254__$1;
(statearr_15270_18109[(2)] = null);

(statearr_15270_18109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (4))){
var inst_15227 = (state_15254[(7)]);
var inst_15227__$1 = (state_15254[(2)]);
var inst_15230 = (inst_15227__$1 == null);
var state_15254__$1 = (function (){var statearr_15275 = state_15254;
(statearr_15275[(7)] = inst_15227__$1);

return statearr_15275;
})();
if(cljs.core.truth_(inst_15230)){
var statearr_15276_18110 = state_15254__$1;
(statearr_15276_18110[(1)] = (5));

} else {
var statearr_15277_18111 = state_15254__$1;
(statearr_15277_18111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (13))){
var state_15254__$1 = state_15254;
var statearr_15280_18112 = state_15254__$1;
(statearr_15280_18112[(2)] = null);

(statearr_15280_18112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (6))){
var inst_15227 = (state_15254[(7)]);
var inst_15236 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15227) : p.call(null, inst_15227));
var state_15254__$1 = state_15254;
if(cljs.core.truth_(inst_15236)){
var statearr_15284_18113 = state_15254__$1;
(statearr_15284_18113[(1)] = (9));

} else {
var statearr_15286_18114 = state_15254__$1;
(statearr_15286_18114[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (3))){
var inst_15252 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15254__$1,inst_15252);
} else {
if((state_val_15256 === (12))){
var state_15254__$1 = state_15254;
var statearr_15295_18115 = state_15254__$1;
(statearr_15295_18115[(2)] = null);

(statearr_15295_18115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (2))){
var state_15254__$1 = state_15254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15254__$1,(4),ch);
} else {
if((state_val_15256 === (11))){
var inst_15227 = (state_15254[(7)]);
var inst_15240 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15254__$1,(8),inst_15240,inst_15227);
} else {
if((state_val_15256 === (9))){
var state_15254__$1 = state_15254;
var statearr_15302_18116 = state_15254__$1;
(statearr_15302_18116[(2)] = tc);

(statearr_15302_18116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (5))){
var inst_15232 = cljs.core.async.close_BANG_(tc);
var inst_15234 = cljs.core.async.close_BANG_(fc);
var state_15254__$1 = (function (){var statearr_15305 = state_15254;
(statearr_15305[(8)] = inst_15232);

return statearr_15305;
})();
var statearr_15306_18118 = state_15254__$1;
(statearr_15306_18118[(2)] = inst_15234);

(statearr_15306_18118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (14))){
var inst_15248 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
var statearr_15309_18119 = state_15254__$1;
(statearr_15309_18119[(2)] = inst_15248);

(statearr_15309_18119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (10))){
var state_15254__$1 = state_15254;
var statearr_15315_18120 = state_15254__$1;
(statearr_15315_18120[(2)] = fc);

(statearr_15315_18120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (8))){
var inst_15242 = (state_15254[(2)]);
var state_15254__$1 = state_15254;
if(cljs.core.truth_(inst_15242)){
var statearr_15318_18121 = state_15254__$1;
(statearr_15318_18121[(1)] = (12));

} else {
var statearr_15320_18122 = state_15254__$1;
(statearr_15320_18122[(1)] = (13));

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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_15326 = [null,null,null,null,null,null,null,null,null];
(statearr_15326[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_15326[(1)] = (1));

return statearr_15326;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_15254){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_15254);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e15331){var ex__13182__auto__ = e15331;
var statearr_15332_18126 = state_15254;
(statearr_15332_18126[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_15254[(4)]))){
var statearr_15336_18128 = state_15254;
(statearr_15336_18128[(1)] = cljs.core.first((state_15254[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18129 = state_15254;
state_15254 = G__18129;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_15254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_15254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_15349 = f__14005__auto__();
(statearr_15349[(6)] = c__14004__auto___18106);

return statearr_15349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
var c__14004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_15387){
var state_val_15390 = (state_15387[(1)]);
if((state_val_15390 === (7))){
var inst_15383 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15406_18135 = state_15387__$1;
(statearr_15406_18135[(2)] = inst_15383);

(statearr_15406_18135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (1))){
var inst_15362 = init;
var inst_15364 = inst_15362;
var state_15387__$1 = (function (){var statearr_15409 = state_15387;
(statearr_15409[(7)] = inst_15364);

return statearr_15409;
})();
var statearr_15416_18136 = state_15387__$1;
(statearr_15416_18136[(2)] = null);

(statearr_15416_18136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (4))){
var inst_15368 = (state_15387[(8)]);
var inst_15368__$1 = (state_15387[(2)]);
var inst_15370 = (inst_15368__$1 == null);
var state_15387__$1 = (function (){var statearr_15430 = state_15387;
(statearr_15430[(8)] = inst_15368__$1);

return statearr_15430;
})();
if(cljs.core.truth_(inst_15370)){
var statearr_15433_18138 = state_15387__$1;
(statearr_15433_18138[(1)] = (5));

} else {
var statearr_15439_18139 = state_15387__$1;
(statearr_15439_18139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (6))){
var inst_15368 = (state_15387[(8)]);
var inst_15364 = (state_15387[(7)]);
var inst_15374 = (state_15387[(9)]);
var inst_15374__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15364,inst_15368) : f.call(null, inst_15364,inst_15368));
var inst_15375 = cljs.core.reduced_QMARK_(inst_15374__$1);
var state_15387__$1 = (function (){var statearr_15446 = state_15387;
(statearr_15446[(9)] = inst_15374__$1);

return statearr_15446;
})();
if(inst_15375){
var statearr_15450_18142 = state_15387__$1;
(statearr_15450_18142[(1)] = (8));

} else {
var statearr_15454_18145 = state_15387__$1;
(statearr_15454_18145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (3))){
var inst_15385 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15387__$1,inst_15385);
} else {
if((state_val_15390 === (2))){
var state_15387__$1 = state_15387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15387__$1,(4),ch);
} else {
if((state_val_15390 === (9))){
var inst_15374 = (state_15387[(9)]);
var inst_15364 = inst_15374;
var state_15387__$1 = (function (){var statearr_15483 = state_15387;
(statearr_15483[(7)] = inst_15364);

return statearr_15483;
})();
var statearr_15486_18148 = state_15387__$1;
(statearr_15486_18148[(2)] = null);

(statearr_15486_18148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (5))){
var inst_15364 = (state_15387[(7)]);
var state_15387__$1 = state_15387;
var statearr_15505_18149 = state_15387__$1;
(statearr_15505_18149[(2)] = inst_15364);

(statearr_15505_18149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (10))){
var inst_15381 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15520_18154 = state_15387__$1;
(statearr_15520_18154[(2)] = inst_15381);

(statearr_15520_18154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (8))){
var inst_15374 = (state_15387[(9)]);
var inst_15377 = cljs.core.deref(inst_15374);
var state_15387__$1 = state_15387;
var statearr_15529_18156 = state_15387__$1;
(statearr_15529_18156[(2)] = inst_15377);

(statearr_15529_18156[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13179__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13179__auto____0 = (function (){
var statearr_15550 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15550[(0)] = cljs$core$async$reduce_$_state_machine__13179__auto__);

(statearr_15550[(1)] = (1));

return statearr_15550;
});
var cljs$core$async$reduce_$_state_machine__13179__auto____1 = (function (state_15387){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_15387);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e15560){var ex__13182__auto__ = e15560;
var statearr_15566_18166 = state_15387;
(statearr_15566_18166[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_15387[(4)]))){
var statearr_15571_18169 = state_15387;
(statearr_15571_18169[(1)] = cljs.core.first((state_15387[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18171 = state_15387;
state_15387 = G__18171;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13179__auto__ = function(state_15387){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13179__auto____1.call(this,state_15387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13179__auto____0;
cljs$core$async$reduce_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13179__auto____1;
return cljs$core$async$reduce_$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_15579 = f__14005__auto__();
(statearr_15579[(6)] = c__14004__auto__);

return statearr_15579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));

return c__14004__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_15598){
var state_val_15599 = (state_15598[(1)]);
if((state_val_15599 === (1))){
var inst_15592 = cljs.core.async.reduce(f__$1,init,ch);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15598__$1,(2),inst_15592);
} else {
if((state_val_15599 === (2))){
var inst_15595 = (state_15598[(2)]);
var inst_15596 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15595) : f__$1.call(null, inst_15595));
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15598__$1,inst_15596);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13179__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13179__auto____0 = (function (){
var statearr_15609 = [null,null,null,null,null,null,null];
(statearr_15609[(0)] = cljs$core$async$transduce_$_state_machine__13179__auto__);

(statearr_15609[(1)] = (1));

return statearr_15609;
});
var cljs$core$async$transduce_$_state_machine__13179__auto____1 = (function (state_15598){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_15598);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e15613){var ex__13182__auto__ = e15613;
var statearr_15615_18181 = state_15598;
(statearr_15615_18181[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_15598[(4)]))){
var statearr_15616_18183 = state_15598;
(statearr_15616_18183[(1)] = cljs.core.first((state_15598[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18186 = state_15598;
state_15598 = G__18186;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13179__auto__ = function(state_15598){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13179__auto____1.call(this,state_15598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13179__auto____0;
cljs$core$async$transduce_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13179__auto____1;
return cljs$core$async$transduce_$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_15618 = f__14005__auto__();
(statearr_15618[(6)] = c__14004__auto__);

return statearr_15618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));

return c__14004__auto__;
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
var G__15638 = arguments.length;
switch (G__15638) {
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
var c__14004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_15679){
var state_val_15680 = (state_15679[(1)]);
if((state_val_15680 === (7))){
var inst_15661 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
var statearr_15687_18190 = state_15679__$1;
(statearr_15687_18190[(2)] = inst_15661);

(statearr_15687_18190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (1))){
var inst_15648 = cljs.core.seq(coll);
var inst_15649 = inst_15648;
var state_15679__$1 = (function (){var statearr_15689 = state_15679;
(statearr_15689[(7)] = inst_15649);

return statearr_15689;
})();
var statearr_15690_18193 = state_15679__$1;
(statearr_15690_18193[(2)] = null);

(statearr_15690_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (4))){
var inst_15649 = (state_15679[(7)]);
var inst_15659 = cljs.core.first(inst_15649);
var state_15679__$1 = state_15679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15679__$1,(7),ch,inst_15659);
} else {
if((state_val_15680 === (13))){
var inst_15673 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
var statearr_15702_18198 = state_15679__$1;
(statearr_15702_18198[(2)] = inst_15673);

(statearr_15702_18198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (6))){
var inst_15664 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
if(cljs.core.truth_(inst_15664)){
var statearr_15707_18199 = state_15679__$1;
(statearr_15707_18199[(1)] = (8));

} else {
var statearr_15709_18200 = state_15679__$1;
(statearr_15709_18200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (3))){
var inst_15677 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15679__$1,inst_15677);
} else {
if((state_val_15680 === (12))){
var state_15679__$1 = state_15679;
var statearr_15712_18202 = state_15679__$1;
(statearr_15712_18202[(2)] = null);

(statearr_15712_18202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (2))){
var inst_15649 = (state_15679[(7)]);
var state_15679__$1 = state_15679;
if(cljs.core.truth_(inst_15649)){
var statearr_15716_18203 = state_15679__$1;
(statearr_15716_18203[(1)] = (4));

} else {
var statearr_15719_18204 = state_15679__$1;
(statearr_15719_18204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (11))){
var inst_15670 = cljs.core.async.close_BANG_(ch);
var state_15679__$1 = state_15679;
var statearr_15721_18207 = state_15679__$1;
(statearr_15721_18207[(2)] = inst_15670);

(statearr_15721_18207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (9))){
var state_15679__$1 = state_15679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15723_18210 = state_15679__$1;
(statearr_15723_18210[(1)] = (11));

} else {
var statearr_15726_18211 = state_15679__$1;
(statearr_15726_18211[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (5))){
var inst_15649 = (state_15679[(7)]);
var state_15679__$1 = state_15679;
var statearr_15729_18214 = state_15679__$1;
(statearr_15729_18214[(2)] = inst_15649);

(statearr_15729_18214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (10))){
var inst_15675 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
var statearr_15734_18215 = state_15679__$1;
(statearr_15734_18215[(2)] = inst_15675);

(statearr_15734_18215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15680 === (8))){
var inst_15649 = (state_15679[(7)]);
var inst_15666 = cljs.core.next(inst_15649);
var inst_15649__$1 = inst_15666;
var state_15679__$1 = (function (){var statearr_15738 = state_15679;
(statearr_15738[(7)] = inst_15649__$1);

return statearr_15738;
})();
var statearr_15739_18217 = state_15679__$1;
(statearr_15739_18217[(2)] = null);

(statearr_15739_18217[(1)] = (2));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_15741 = [null,null,null,null,null,null,null,null];
(statearr_15741[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_15741[(1)] = (1));

return statearr_15741;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_15679){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_15679);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e15745){var ex__13182__auto__ = e15745;
var statearr_15746_18218 = state_15679;
(statearr_15746_18218[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_15679[(4)]))){
var statearr_15747_18219 = state_15679;
(statearr_15747_18219[(1)] = cljs.core.first((state_15679[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18220 = state_15679;
state_15679 = G__18220;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_15679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_15679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_15751 = f__14005__auto__();
(statearr_15751[(6)] = c__14004__auto__);

return statearr_15751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));

return c__14004__auto__;
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
var G__15766 = arguments.length;
switch (G__15766) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18222 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18222(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18226 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18226(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18234 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18234(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18238 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18238(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15865 = (function (ch,cs,meta15866){
this.ch = ch;
this.cs = cs;
this.meta15866 = meta15866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15867,meta15866__$1){
var self__ = this;
var _15867__$1 = this;
return (new cljs.core.async.t_cljs$core$async15865(self__.ch,self__.cs,meta15866__$1));
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15867){
var self__ = this;
var _15867__$1 = this;
return self__.meta15866;
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15865.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15866","meta15866",32204740,null)], null);
}));

(cljs.core.async.t_cljs$core$async15865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15865");

(cljs.core.async.t_cljs$core$async15865.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15865.
 */
cljs.core.async.__GT_t_cljs$core$async15865 = (function cljs$core$async$__GT_t_cljs$core$async15865(ch,cs,meta15866){
return (new cljs.core.async.t_cljs$core$async15865(ch,cs,meta15866));
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
var m = (new cljs.core.async.t_cljs$core$async15865(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14004__auto___18255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_16108){
var state_val_16112 = (state_16108[(1)]);
if((state_val_16112 === (7))){
var inst_16098 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16118_18256 = state_16108__$1;
(statearr_16118_18256[(2)] = inst_16098);

(statearr_16118_18256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (20))){
var inst_15970 = (state_16108[(7)]);
var inst_15994 = cljs.core.first(inst_15970);
var inst_15996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15994,(0),null);
var inst_15998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15994,(1),null);
var state_16108__$1 = (function (){var statearr_16124 = state_16108;
(statearr_16124[(8)] = inst_15996);

return statearr_16124;
})();
if(cljs.core.truth_(inst_15998)){
var statearr_16125_18263 = state_16108__$1;
(statearr_16125_18263[(1)] = (22));

} else {
var statearr_16126_18264 = state_16108__$1;
(statearr_16126_18264[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (27))){
var inst_15925 = (state_16108[(9)]);
var inst_16039 = (state_16108[(10)]);
var inst_16045 = (state_16108[(11)]);
var inst_16037 = (state_16108[(12)]);
var inst_16045__$1 = cljs.core._nth(inst_16037,inst_16039);
var inst_16047 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16045__$1,inst_15925,done);
var state_16108__$1 = (function (){var statearr_16134 = state_16108;
(statearr_16134[(11)] = inst_16045__$1);

return statearr_16134;
})();
if(cljs.core.truth_(inst_16047)){
var statearr_16137_18265 = state_16108__$1;
(statearr_16137_18265[(1)] = (30));

} else {
var statearr_16139_18270 = state_16108__$1;
(statearr_16139_18270[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (1))){
var state_16108__$1 = state_16108;
var statearr_16142_18277 = state_16108__$1;
(statearr_16142_18277[(2)] = null);

(statearr_16142_18277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (24))){
var inst_15970 = (state_16108[(7)]);
var inst_16003 = (state_16108[(2)]);
var inst_16007 = cljs.core.next(inst_15970);
var inst_15938 = inst_16007;
var inst_15939 = null;
var inst_15940 = (0);
var inst_15941 = (0);
var state_16108__$1 = (function (){var statearr_16143 = state_16108;
(statearr_16143[(13)] = inst_15940);

(statearr_16143[(14)] = inst_15941);

(statearr_16143[(15)] = inst_16003);

(statearr_16143[(16)] = inst_15938);

(statearr_16143[(17)] = inst_15939);

return statearr_16143;
})();
var statearr_16150_18278 = state_16108__$1;
(statearr_16150_18278[(2)] = null);

(statearr_16150_18278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (39))){
var state_16108__$1 = state_16108;
var statearr_16160_18279 = state_16108__$1;
(statearr_16160_18279[(2)] = null);

(statearr_16160_18279[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (4))){
var inst_15925 = (state_16108[(9)]);
var inst_15925__$1 = (state_16108[(2)]);
var inst_15929 = (inst_15925__$1 == null);
var state_16108__$1 = (function (){var statearr_16163 = state_16108;
(statearr_16163[(9)] = inst_15925__$1);

return statearr_16163;
})();
if(cljs.core.truth_(inst_15929)){
var statearr_16169_18281 = state_16108__$1;
(statearr_16169_18281[(1)] = (5));

} else {
var statearr_16171_18282 = state_16108__$1;
(statearr_16171_18282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (15))){
var inst_15940 = (state_16108[(13)]);
var inst_15941 = (state_16108[(14)]);
var inst_15938 = (state_16108[(16)]);
var inst_15939 = (state_16108[(17)]);
var inst_15964 = (state_16108[(2)]);
var inst_15965 = (inst_15941 + (1));
var tmp16156 = inst_15940;
var tmp16157 = inst_15938;
var tmp16158 = inst_15939;
var inst_15938__$1 = tmp16157;
var inst_15939__$1 = tmp16158;
var inst_15940__$1 = tmp16156;
var inst_15941__$1 = inst_15965;
var state_16108__$1 = (function (){var statearr_16176 = state_16108;
(statearr_16176[(13)] = inst_15940__$1);

(statearr_16176[(14)] = inst_15941__$1);

(statearr_16176[(18)] = inst_15964);

(statearr_16176[(16)] = inst_15938__$1);

(statearr_16176[(17)] = inst_15939__$1);

return statearr_16176;
})();
var statearr_16177_18286 = state_16108__$1;
(statearr_16177_18286[(2)] = null);

(statearr_16177_18286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (21))){
var inst_16010 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16186_18287 = state_16108__$1;
(statearr_16186_18287[(2)] = inst_16010);

(statearr_16186_18287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (31))){
var inst_16045 = (state_16108[(11)]);
var inst_16050 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16045);
var state_16108__$1 = state_16108;
var statearr_16189_18288 = state_16108__$1;
(statearr_16189_18288[(2)] = inst_16050);

(statearr_16189_18288[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (32))){
var inst_16039 = (state_16108[(10)]);
var inst_16038 = (state_16108[(19)]);
var inst_16036 = (state_16108[(20)]);
var inst_16037 = (state_16108[(12)]);
var inst_16052 = (state_16108[(2)]);
var inst_16053 = (inst_16039 + (1));
var tmp16181 = inst_16038;
var tmp16182 = inst_16036;
var tmp16183 = inst_16037;
var inst_16036__$1 = tmp16182;
var inst_16037__$1 = tmp16183;
var inst_16038__$1 = tmp16181;
var inst_16039__$1 = inst_16053;
var state_16108__$1 = (function (){var statearr_16193 = state_16108;
(statearr_16193[(10)] = inst_16039__$1);

(statearr_16193[(19)] = inst_16038__$1);

(statearr_16193[(21)] = inst_16052);

(statearr_16193[(20)] = inst_16036__$1);

(statearr_16193[(12)] = inst_16037__$1);

return statearr_16193;
})();
var statearr_16194_18289 = state_16108__$1;
(statearr_16194_18289[(2)] = null);

(statearr_16194_18289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (40))){
var inst_16065 = (state_16108[(22)]);
var inst_16069 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16065);
var state_16108__$1 = state_16108;
var statearr_16202_18290 = state_16108__$1;
(statearr_16202_18290[(2)] = inst_16069);

(statearr_16202_18290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (33))){
var inst_16056 = (state_16108[(23)]);
var inst_16058 = cljs.core.chunked_seq_QMARK_(inst_16056);
var state_16108__$1 = state_16108;
if(inst_16058){
var statearr_16204_18295 = state_16108__$1;
(statearr_16204_18295[(1)] = (36));

} else {
var statearr_16208_18296 = state_16108__$1;
(statearr_16208_18296[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (13))){
var inst_15953 = (state_16108[(24)]);
var inst_15958 = cljs.core.async.close_BANG_(inst_15953);
var state_16108__$1 = state_16108;
var statearr_16209_18301 = state_16108__$1;
(statearr_16209_18301[(2)] = inst_15958);

(statearr_16209_18301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (22))){
var inst_15996 = (state_16108[(8)]);
var inst_16000 = cljs.core.async.close_BANG_(inst_15996);
var state_16108__$1 = state_16108;
var statearr_16210_18306 = state_16108__$1;
(statearr_16210_18306[(2)] = inst_16000);

(statearr_16210_18306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (36))){
var inst_16056 = (state_16108[(23)]);
var inst_16060 = cljs.core.chunk_first(inst_16056);
var inst_16061 = cljs.core.chunk_rest(inst_16056);
var inst_16062 = cljs.core.count(inst_16060);
var inst_16036 = inst_16061;
var inst_16037 = inst_16060;
var inst_16038 = inst_16062;
var inst_16039 = (0);
var state_16108__$1 = (function (){var statearr_16212 = state_16108;
(statearr_16212[(10)] = inst_16039);

(statearr_16212[(19)] = inst_16038);

(statearr_16212[(20)] = inst_16036);

(statearr_16212[(12)] = inst_16037);

return statearr_16212;
})();
var statearr_16214_18307 = state_16108__$1;
(statearr_16214_18307[(2)] = null);

(statearr_16214_18307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (41))){
var inst_16056 = (state_16108[(23)]);
var inst_16071 = (state_16108[(2)]);
var inst_16073 = cljs.core.next(inst_16056);
var inst_16036 = inst_16073;
var inst_16037 = null;
var inst_16038 = (0);
var inst_16039 = (0);
var state_16108__$1 = (function (){var statearr_16217 = state_16108;
(statearr_16217[(25)] = inst_16071);

(statearr_16217[(10)] = inst_16039);

(statearr_16217[(19)] = inst_16038);

(statearr_16217[(20)] = inst_16036);

(statearr_16217[(12)] = inst_16037);

return statearr_16217;
})();
var statearr_16218_18309 = state_16108__$1;
(statearr_16218_18309[(2)] = null);

(statearr_16218_18309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (43))){
var state_16108__$1 = state_16108;
var statearr_16219_18319 = state_16108__$1;
(statearr_16219_18319[(2)] = null);

(statearr_16219_18319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (29))){
var inst_16081 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16225_18320 = state_16108__$1;
(statearr_16225_18320[(2)] = inst_16081);

(statearr_16225_18320[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (44))){
var inst_16095 = (state_16108[(2)]);
var state_16108__$1 = (function (){var statearr_16226 = state_16108;
(statearr_16226[(26)] = inst_16095);

return statearr_16226;
})();
var statearr_16227_18323 = state_16108__$1;
(statearr_16227_18323[(2)] = null);

(statearr_16227_18323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (6))){
var inst_16028 = (state_16108[(27)]);
var inst_16027 = cljs.core.deref(cs);
var inst_16028__$1 = cljs.core.keys(inst_16027);
var inst_16029 = cljs.core.count(inst_16028__$1);
var inst_16030 = cljs.core.reset_BANG_(dctr,inst_16029);
var inst_16035 = cljs.core.seq(inst_16028__$1);
var inst_16036 = inst_16035;
var inst_16037 = null;
var inst_16038 = (0);
var inst_16039 = (0);
var state_16108__$1 = (function (){var statearr_16228 = state_16108;
(statearr_16228[(27)] = inst_16028__$1);

(statearr_16228[(10)] = inst_16039);

(statearr_16228[(19)] = inst_16038);

(statearr_16228[(20)] = inst_16036);

(statearr_16228[(28)] = inst_16030);

(statearr_16228[(12)] = inst_16037);

return statearr_16228;
})();
var statearr_16230_18329 = state_16108__$1;
(statearr_16230_18329[(2)] = null);

(statearr_16230_18329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (28))){
var inst_16036 = (state_16108[(20)]);
var inst_16056 = (state_16108[(23)]);
var inst_16056__$1 = cljs.core.seq(inst_16036);
var state_16108__$1 = (function (){var statearr_16234 = state_16108;
(statearr_16234[(23)] = inst_16056__$1);

return statearr_16234;
})();
if(inst_16056__$1){
var statearr_16236_18333 = state_16108__$1;
(statearr_16236_18333[(1)] = (33));

} else {
var statearr_16238_18334 = state_16108__$1;
(statearr_16238_18334[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (25))){
var inst_16039 = (state_16108[(10)]);
var inst_16038 = (state_16108[(19)]);
var inst_16041 = (inst_16039 < inst_16038);
var inst_16042 = inst_16041;
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16042)){
var statearr_16239_18335 = state_16108__$1;
(statearr_16239_18335[(1)] = (27));

} else {
var statearr_16242_18336 = state_16108__$1;
(statearr_16242_18336[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (34))){
var state_16108__$1 = state_16108;
var statearr_16244_18339 = state_16108__$1;
(statearr_16244_18339[(2)] = null);

(statearr_16244_18339[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (17))){
var state_16108__$1 = state_16108;
var statearr_16245_18341 = state_16108__$1;
(statearr_16245_18341[(2)] = null);

(statearr_16245_18341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (3))){
var inst_16100 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16108__$1,inst_16100);
} else {
if((state_val_16112 === (12))){
var inst_16017 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16246_18342 = state_16108__$1;
(statearr_16246_18342[(2)] = inst_16017);

(statearr_16246_18342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (2))){
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16108__$1,(4),ch);
} else {
if((state_val_16112 === (23))){
var state_16108__$1 = state_16108;
var statearr_16251_18344 = state_16108__$1;
(statearr_16251_18344[(2)] = null);

(statearr_16251_18344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (35))){
var inst_16079 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16253_18346 = state_16108__$1;
(statearr_16253_18346[(2)] = inst_16079);

(statearr_16253_18346[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (19))){
var inst_15970 = (state_16108[(7)]);
var inst_15982 = cljs.core.chunk_first(inst_15970);
var inst_15983 = cljs.core.chunk_rest(inst_15970);
var inst_15985 = cljs.core.count(inst_15982);
var inst_15938 = inst_15983;
var inst_15939 = inst_15982;
var inst_15940 = inst_15985;
var inst_15941 = (0);
var state_16108__$1 = (function (){var statearr_16257 = state_16108;
(statearr_16257[(13)] = inst_15940);

(statearr_16257[(14)] = inst_15941);

(statearr_16257[(16)] = inst_15938);

(statearr_16257[(17)] = inst_15939);

return statearr_16257;
})();
var statearr_16260_18351 = state_16108__$1;
(statearr_16260_18351[(2)] = null);

(statearr_16260_18351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (11))){
var inst_15970 = (state_16108[(7)]);
var inst_15938 = (state_16108[(16)]);
var inst_15970__$1 = cljs.core.seq(inst_15938);
var state_16108__$1 = (function (){var statearr_16263 = state_16108;
(statearr_16263[(7)] = inst_15970__$1);

return statearr_16263;
})();
if(inst_15970__$1){
var statearr_16264_18352 = state_16108__$1;
(statearr_16264_18352[(1)] = (16));

} else {
var statearr_16265_18354 = state_16108__$1;
(statearr_16265_18354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (9))){
var inst_16019 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16269_18357 = state_16108__$1;
(statearr_16269_18357[(2)] = inst_16019);

(statearr_16269_18357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (5))){
var inst_15936 = cljs.core.deref(cs);
var inst_15937 = cljs.core.seq(inst_15936);
var inst_15938 = inst_15937;
var inst_15939 = null;
var inst_15940 = (0);
var inst_15941 = (0);
var state_16108__$1 = (function (){var statearr_16272 = state_16108;
(statearr_16272[(13)] = inst_15940);

(statearr_16272[(14)] = inst_15941);

(statearr_16272[(16)] = inst_15938);

(statearr_16272[(17)] = inst_15939);

return statearr_16272;
})();
var statearr_16274_18358 = state_16108__$1;
(statearr_16274_18358[(2)] = null);

(statearr_16274_18358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (14))){
var state_16108__$1 = state_16108;
var statearr_16276_18359 = state_16108__$1;
(statearr_16276_18359[(2)] = null);

(statearr_16276_18359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (45))){
var inst_16092 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16277_18363 = state_16108__$1;
(statearr_16277_18363[(2)] = inst_16092);

(statearr_16277_18363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (26))){
var inst_16028 = (state_16108[(27)]);
var inst_16083 = (state_16108[(2)]);
var inst_16084 = cljs.core.seq(inst_16028);
var state_16108__$1 = (function (){var statearr_16282 = state_16108;
(statearr_16282[(29)] = inst_16083);

return statearr_16282;
})();
if(inst_16084){
var statearr_16284_18364 = state_16108__$1;
(statearr_16284_18364[(1)] = (42));

} else {
var statearr_16285_18365 = state_16108__$1;
(statearr_16285_18365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (16))){
var inst_15970 = (state_16108[(7)]);
var inst_15973 = cljs.core.chunked_seq_QMARK_(inst_15970);
var state_16108__$1 = state_16108;
if(inst_15973){
var statearr_16287_18371 = state_16108__$1;
(statearr_16287_18371[(1)] = (19));

} else {
var statearr_16288_18372 = state_16108__$1;
(statearr_16288_18372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (38))){
var inst_16076 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16289_18374 = state_16108__$1;
(statearr_16289_18374[(2)] = inst_16076);

(statearr_16289_18374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (30))){
var state_16108__$1 = state_16108;
var statearr_16291_18378 = state_16108__$1;
(statearr_16291_18378[(2)] = null);

(statearr_16291_18378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (10))){
var inst_15941 = (state_16108[(14)]);
var inst_15939 = (state_16108[(17)]);
var inst_15951 = cljs.core._nth(inst_15939,inst_15941);
var inst_15953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15951,(0),null);
var inst_15954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15951,(1),null);
var state_16108__$1 = (function (){var statearr_16296 = state_16108;
(statearr_16296[(24)] = inst_15953);

return statearr_16296;
})();
if(cljs.core.truth_(inst_15954)){
var statearr_16297_18379 = state_16108__$1;
(statearr_16297_18379[(1)] = (13));

} else {
var statearr_16298_18380 = state_16108__$1;
(statearr_16298_18380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (18))){
var inst_16014 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16300_18385 = state_16108__$1;
(statearr_16300_18385[(2)] = inst_16014);

(statearr_16300_18385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (42))){
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16108__$1,(45),dchan);
} else {
if((state_val_16112 === (37))){
var inst_15925 = (state_16108[(9)]);
var inst_16065 = (state_16108[(22)]);
var inst_16056 = (state_16108[(23)]);
var inst_16065__$1 = cljs.core.first(inst_16056);
var inst_16066 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16065__$1,inst_15925,done);
var state_16108__$1 = (function (){var statearr_16306 = state_16108;
(statearr_16306[(22)] = inst_16065__$1);

return statearr_16306;
})();
if(cljs.core.truth_(inst_16066)){
var statearr_16308_18386 = state_16108__$1;
(statearr_16308_18386[(1)] = (39));

} else {
var statearr_16309_18387 = state_16108__$1;
(statearr_16309_18387[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (8))){
var inst_15940 = (state_16108[(13)]);
var inst_15941 = (state_16108[(14)]);
var inst_15944 = (inst_15941 < inst_15940);
var inst_15945 = inst_15944;
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_15945)){
var statearr_16315_18391 = state_16108__$1;
(statearr_16315_18391[(1)] = (10));

} else {
var statearr_16316_18392 = state_16108__$1;
(statearr_16316_18392[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13179__auto__ = null;
var cljs$core$async$mult_$_state_machine__13179__auto____0 = (function (){
var statearr_16321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16321[(0)] = cljs$core$async$mult_$_state_machine__13179__auto__);

(statearr_16321[(1)] = (1));

return statearr_16321;
});
var cljs$core$async$mult_$_state_machine__13179__auto____1 = (function (state_16108){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_16108);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e16322){var ex__13182__auto__ = e16322;
var statearr_16323_18406 = state_16108;
(statearr_16323_18406[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_16108[(4)]))){
var statearr_16324_18407 = state_16108;
(statearr_16324_18407[(1)] = cljs.core.first((state_16108[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18408 = state_16108;
state_16108 = G__18408;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13179__auto__ = function(state_16108){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13179__auto____1.call(this,state_16108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13179__auto____0;
cljs$core$async$mult_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13179__auto____1;
return cljs$core$async$mult_$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_16326 = f__14005__auto__();
(statearr_16326[(6)] = c__14004__auto___18255);

return statearr_16326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
var G__16336 = arguments.length;
switch (G__16336) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18414 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18414(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18417 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18417(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18424 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18424(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18425 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18425(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18431 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18431(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18432 = arguments.length;
var i__5727__auto___18433 = (0);
while(true){
if((i__5727__auto___18433 < len__5726__auto___18432)){
args__5732__auto__.push((arguments[i__5727__auto___18433]));

var G__18434 = (i__5727__auto___18433 + (1));
i__5727__auto___18433 = G__18434;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16411){
var map__16412 = p__16411;
var map__16412__$1 = cljs.core.__destructure_map(map__16412);
var opts = map__16412__$1;
var statearr_16413_18435 = state;
(statearr_16413_18435[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16415_18436 = state;
(statearr_16415_18436[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16418_18437 = state;
(statearr_16418_18437[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16402){
var G__16403 = cljs.core.first(seq16402);
var seq16402__$1 = cljs.core.next(seq16402);
var G__16404 = cljs.core.first(seq16402__$1);
var seq16402__$2 = cljs.core.next(seq16402__$1);
var G__16405 = cljs.core.first(seq16402__$2);
var seq16402__$3 = cljs.core.next(seq16402__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16403,G__16404,G__16405,seq16402__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16429 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16430){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16430 = meta16430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16431,meta16430__$1){
var self__ = this;
var _16431__$1 = this;
return (new cljs.core.async.t_cljs$core$async16429(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16430__$1));
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16431){
var self__ = this;
var _16431__$1 = this;
return self__.meta16430;
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16430","meta16430",-431687179,null)], null);
}));

(cljs.core.async.t_cljs$core$async16429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16429");

(cljs.core.async.t_cljs$core$async16429.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16429.
 */
cljs.core.async.__GT_t_cljs$core$async16429 = (function cljs$core$async$__GT_t_cljs$core$async16429(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16430){
return (new cljs.core.async.t_cljs$core$async16429(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16430));
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
var m = (new cljs.core.async.t_cljs$core$async16429(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14004__auto___18444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_16521){
var state_val_16522 = (state_16521[(1)]);
if((state_val_16522 === (7))){
var inst_16477 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16477)){
var statearr_16526_18445 = state_16521__$1;
(statearr_16526_18445[(1)] = (8));

} else {
var statearr_16527_18446 = state_16521__$1;
(statearr_16527_18446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (20))){
var inst_16470 = (state_16521[(7)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16521__$1,(23),out,inst_16470);
} else {
if((state_val_16522 === (1))){
var inst_16448 = calc_state();
var inst_16451 = cljs.core.__destructure_map(inst_16448);
var inst_16454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16451,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16451,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16451,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16457 = inst_16448;
var state_16521__$1 = (function (){var statearr_16529 = state_16521;
(statearr_16529[(8)] = inst_16455);

(statearr_16529[(9)] = inst_16457);

(statearr_16529[(10)] = inst_16454);

(statearr_16529[(11)] = inst_16456);

return statearr_16529;
})();
var statearr_16530_18447 = state_16521__$1;
(statearr_16530_18447[(2)] = null);

(statearr_16530_18447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (24))){
var inst_16460 = (state_16521[(12)]);
var inst_16457 = inst_16460;
var state_16521__$1 = (function (){var statearr_16532 = state_16521;
(statearr_16532[(9)] = inst_16457);

return statearr_16532;
})();
var statearr_16533_18448 = state_16521__$1;
(statearr_16533_18448[(2)] = null);

(statearr_16533_18448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (4))){
var inst_16470 = (state_16521[(7)]);
var inst_16472 = (state_16521[(13)]);
var inst_16468 = (state_16521[(2)]);
var inst_16470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16468,(0),null);
var inst_16471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16468,(1),null);
var inst_16472__$1 = (inst_16470__$1 == null);
var state_16521__$1 = (function (){var statearr_16537 = state_16521;
(statearr_16537[(14)] = inst_16471);

(statearr_16537[(7)] = inst_16470__$1);

(statearr_16537[(13)] = inst_16472__$1);

return statearr_16537;
})();
if(cljs.core.truth_(inst_16472__$1)){
var statearr_16538_18451 = state_16521__$1;
(statearr_16538_18451[(1)] = (5));

} else {
var statearr_16539_18452 = state_16521__$1;
(statearr_16539_18452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (15))){
var inst_16491 = (state_16521[(15)]);
var inst_16461 = (state_16521[(16)]);
var inst_16491__$1 = cljs.core.empty_QMARK_(inst_16461);
var state_16521__$1 = (function (){var statearr_16540 = state_16521;
(statearr_16540[(15)] = inst_16491__$1);

return statearr_16540;
})();
if(inst_16491__$1){
var statearr_16541_18453 = state_16521__$1;
(statearr_16541_18453[(1)] = (17));

} else {
var statearr_16542_18454 = state_16521__$1;
(statearr_16542_18454[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (21))){
var inst_16460 = (state_16521[(12)]);
var inst_16457 = inst_16460;
var state_16521__$1 = (function (){var statearr_16543 = state_16521;
(statearr_16543[(9)] = inst_16457);

return statearr_16543;
})();
var statearr_16544_18455 = state_16521__$1;
(statearr_16544_18455[(2)] = null);

(statearr_16544_18455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (13))){
var inst_16484 = (state_16521[(2)]);
var inst_16485 = calc_state();
var inst_16457 = inst_16485;
var state_16521__$1 = (function (){var statearr_16545 = state_16521;
(statearr_16545[(9)] = inst_16457);

(statearr_16545[(17)] = inst_16484);

return statearr_16545;
})();
var statearr_16546_18458 = state_16521__$1;
(statearr_16546_18458[(2)] = null);

(statearr_16546_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (22))){
var inst_16514 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16551_18463 = state_16521__$1;
(statearr_16551_18463[(2)] = inst_16514);

(statearr_16551_18463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (6))){
var inst_16471 = (state_16521[(14)]);
var inst_16475 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16471,change);
var state_16521__$1 = state_16521;
var statearr_16553_18464 = state_16521__$1;
(statearr_16553_18464[(2)] = inst_16475);

(statearr_16553_18464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (25))){
var state_16521__$1 = state_16521;
var statearr_16554_18465 = state_16521__$1;
(statearr_16554_18465[(2)] = null);

(statearr_16554_18465[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (17))){
var inst_16462 = (state_16521[(18)]);
var inst_16471 = (state_16521[(14)]);
var inst_16495 = (inst_16462.cljs$core$IFn$_invoke$arity$1 ? inst_16462.cljs$core$IFn$_invoke$arity$1(inst_16471) : inst_16462.call(null, inst_16471));
var inst_16496 = cljs.core.not(inst_16495);
var state_16521__$1 = state_16521;
var statearr_16555_18466 = state_16521__$1;
(statearr_16555_18466[(2)] = inst_16496);

(statearr_16555_18466[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (3))){
var inst_16519 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16521__$1,inst_16519);
} else {
if((state_val_16522 === (12))){
var state_16521__$1 = state_16521;
var statearr_16561_18467 = state_16521__$1;
(statearr_16561_18467[(2)] = null);

(statearr_16561_18467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (2))){
var inst_16457 = (state_16521[(9)]);
var inst_16460 = (state_16521[(12)]);
var inst_16460__$1 = cljs.core.__destructure_map(inst_16457);
var inst_16461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16460__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16460__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16460__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16521__$1 = (function (){var statearr_16563 = state_16521;
(statearr_16563[(18)] = inst_16462);

(statearr_16563[(16)] = inst_16461);

(statearr_16563[(12)] = inst_16460__$1);

return statearr_16563;
})();
return cljs.core.async.ioc_alts_BANG_(state_16521__$1,(4),inst_16463);
} else {
if((state_val_16522 === (23))){
var inst_16504 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16504)){
var statearr_16564_18471 = state_16521__$1;
(statearr_16564_18471[(1)] = (24));

} else {
var statearr_16565_18472 = state_16521__$1;
(statearr_16565_18472[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (19))){
var inst_16499 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16566_18476 = state_16521__$1;
(statearr_16566_18476[(2)] = inst_16499);

(statearr_16566_18476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (11))){
var inst_16471 = (state_16521[(14)]);
var inst_16481 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16471);
var state_16521__$1 = state_16521;
var statearr_16571_18477 = state_16521__$1;
(statearr_16571_18477[(2)] = inst_16481);

(statearr_16571_18477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (9))){
var inst_16488 = (state_16521[(19)]);
var inst_16461 = (state_16521[(16)]);
var inst_16471 = (state_16521[(14)]);
var inst_16488__$1 = (inst_16461.cljs$core$IFn$_invoke$arity$1 ? inst_16461.cljs$core$IFn$_invoke$arity$1(inst_16471) : inst_16461.call(null, inst_16471));
var state_16521__$1 = (function (){var statearr_16572 = state_16521;
(statearr_16572[(19)] = inst_16488__$1);

return statearr_16572;
})();
if(cljs.core.truth_(inst_16488__$1)){
var statearr_16573_18478 = state_16521__$1;
(statearr_16573_18478[(1)] = (14));

} else {
var statearr_16574_18479 = state_16521__$1;
(statearr_16574_18479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (5))){
var inst_16472 = (state_16521[(13)]);
var state_16521__$1 = state_16521;
var statearr_16577_18481 = state_16521__$1;
(statearr_16577_18481[(2)] = inst_16472);

(statearr_16577_18481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (14))){
var inst_16488 = (state_16521[(19)]);
var state_16521__$1 = state_16521;
var statearr_16578_18482 = state_16521__$1;
(statearr_16578_18482[(2)] = inst_16488);

(statearr_16578_18482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (26))){
var inst_16510 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16579_18483 = state_16521__$1;
(statearr_16579_18483[(2)] = inst_16510);

(statearr_16579_18483[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (16))){
var inst_16501 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16501)){
var statearr_16584_18484 = state_16521__$1;
(statearr_16584_18484[(1)] = (20));

} else {
var statearr_16585_18485 = state_16521__$1;
(statearr_16585_18485[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (10))){
var inst_16516 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16586_18493 = state_16521__$1;
(statearr_16586_18493[(2)] = inst_16516);

(statearr_16586_18493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (18))){
var inst_16491 = (state_16521[(15)]);
var state_16521__$1 = state_16521;
var statearr_16587_18494 = state_16521__$1;
(statearr_16587_18494[(2)] = inst_16491);

(statearr_16587_18494[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (8))){
var inst_16470 = (state_16521[(7)]);
var inst_16479 = (inst_16470 == null);
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16479)){
var statearr_16588_18498 = state_16521__$1;
(statearr_16588_18498[(1)] = (11));

} else {
var statearr_16589_18499 = state_16521__$1;
(statearr_16589_18499[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13179__auto__ = null;
var cljs$core$async$mix_$_state_machine__13179__auto____0 = (function (){
var statearr_16590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16590[(0)] = cljs$core$async$mix_$_state_machine__13179__auto__);

(statearr_16590[(1)] = (1));

return statearr_16590;
});
var cljs$core$async$mix_$_state_machine__13179__auto____1 = (function (state_16521){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_16521);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e16591){var ex__13182__auto__ = e16591;
var statearr_16592_18500 = state_16521;
(statearr_16592_18500[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_16521[(4)]))){
var statearr_16593_18501 = state_16521;
(statearr_16593_18501[(1)] = cljs.core.first((state_16521[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18503 = state_16521;
state_16521 = G__18503;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13179__auto__ = function(state_16521){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13179__auto____1.call(this,state_16521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13179__auto____0;
cljs$core$async$mix_$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13179__auto____1;
return cljs$core$async$mix_$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_16594 = f__14005__auto__();
(statearr_16594[(6)] = c__14004__auto___18444);

return statearr_16594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18506 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18506(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18510 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18510(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18514 = (function() {
var G__18515 = null;
var G__18515__1 = (function (p){
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
var G__18515__2 = (function (p,v){
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
G__18515 = function(p,v){
switch(arguments.length){
case 1:
return G__18515__1.call(this,p);
case 2:
return G__18515__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18515.cljs$core$IFn$_invoke$arity$1 = G__18515__1;
G__18515.cljs$core$IFn$_invoke$arity$2 = G__18515__2;
return G__18515;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16612 = arguments.length;
switch (G__16612) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18514(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18514(p,v);
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
cljs.core.async.t_cljs$core$async16621 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16622){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16622 = meta16622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16623,meta16622__$1){
var self__ = this;
var _16623__$1 = this;
return (new cljs.core.async.t_cljs$core$async16621(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16622__$1));
}));

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16623){
var self__ = this;
var _16623__$1 = this;
return self__.meta16622;
}));

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16622","meta16622",354444654,null)], null);
}));

(cljs.core.async.t_cljs$core$async16621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16621");

(cljs.core.async.t_cljs$core$async16621.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16621.
 */
cljs.core.async.__GT_t_cljs$core$async16621 = (function cljs$core$async$__GT_t_cljs$core$async16621(ch,topic_fn,buf_fn,mults,ensure_mult,meta16622){
return (new cljs.core.async.t_cljs$core$async16621(ch,topic_fn,buf_fn,mults,ensure_mult,meta16622));
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
var G__16615 = arguments.length;
switch (G__16615) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16613_SHARP_){
if(cljs.core.truth_((p1__16613_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16613_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16613_SHARP_.call(null, topic)))){
return p1__16613_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16613_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16621(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14004__auto___18530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_16702){
var state_val_16703 = (state_16702[(1)]);
if((state_val_16703 === (7))){
var inst_16698 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16704_18537 = state_16702__$1;
(statearr_16704_18537[(2)] = inst_16698);

(statearr_16704_18537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (20))){
var state_16702__$1 = state_16702;
var statearr_16705_18538 = state_16702__$1;
(statearr_16705_18538[(2)] = null);

(statearr_16705_18538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (1))){
var state_16702__$1 = state_16702;
var statearr_16707_18539 = state_16702__$1;
(statearr_16707_18539[(2)] = null);

(statearr_16707_18539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (24))){
var inst_16681 = (state_16702[(7)]);
var inst_16690 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16681);
var state_16702__$1 = state_16702;
var statearr_16710_18543 = state_16702__$1;
(statearr_16710_18543[(2)] = inst_16690);

(statearr_16710_18543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (4))){
var inst_16630 = (state_16702[(8)]);
var inst_16630__$1 = (state_16702[(2)]);
var inst_16631 = (inst_16630__$1 == null);
var state_16702__$1 = (function (){var statearr_16713 = state_16702;
(statearr_16713[(8)] = inst_16630__$1);

return statearr_16713;
})();
if(cljs.core.truth_(inst_16631)){
var statearr_16714_18544 = state_16702__$1;
(statearr_16714_18544[(1)] = (5));

} else {
var statearr_16716_18545 = state_16702__$1;
(statearr_16716_18545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (15))){
var inst_16675 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16717_18548 = state_16702__$1;
(statearr_16717_18548[(2)] = inst_16675);

(statearr_16717_18548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (21))){
var inst_16695 = (state_16702[(2)]);
var state_16702__$1 = (function (){var statearr_16719 = state_16702;
(statearr_16719[(9)] = inst_16695);

return statearr_16719;
})();
var statearr_16721_18549 = state_16702__$1;
(statearr_16721_18549[(2)] = null);

(statearr_16721_18549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (13))){
var inst_16654 = (state_16702[(10)]);
var inst_16658 = cljs.core.chunked_seq_QMARK_(inst_16654);
var state_16702__$1 = state_16702;
if(inst_16658){
var statearr_16723_18550 = state_16702__$1;
(statearr_16723_18550[(1)] = (16));

} else {
var statearr_16725_18551 = state_16702__$1;
(statearr_16725_18551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (22))){
var inst_16687 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
if(cljs.core.truth_(inst_16687)){
var statearr_16727_18553 = state_16702__$1;
(statearr_16727_18553[(1)] = (23));

} else {
var statearr_16729_18555 = state_16702__$1;
(statearr_16729_18555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (6))){
var inst_16681 = (state_16702[(7)]);
var inst_16683 = (state_16702[(11)]);
var inst_16630 = (state_16702[(8)]);
var inst_16681__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16630) : topic_fn.call(null, inst_16630));
var inst_16682 = cljs.core.deref(mults);
var inst_16683__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16682,inst_16681__$1);
var state_16702__$1 = (function (){var statearr_16730 = state_16702;
(statearr_16730[(7)] = inst_16681__$1);

(statearr_16730[(11)] = inst_16683__$1);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16683__$1)){
var statearr_16731_18560 = state_16702__$1;
(statearr_16731_18560[(1)] = (19));

} else {
var statearr_16732_18561 = state_16702__$1;
(statearr_16732_18561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (25))){
var inst_16692 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16736_18562 = state_16702__$1;
(statearr_16736_18562[(2)] = inst_16692);

(statearr_16736_18562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (17))){
var inst_16654 = (state_16702[(10)]);
var inst_16666 = cljs.core.first(inst_16654);
var inst_16667 = cljs.core.async.muxch_STAR_(inst_16666);
var inst_16668 = cljs.core.async.close_BANG_(inst_16667);
var inst_16669 = cljs.core.next(inst_16654);
var inst_16640 = inst_16669;
var inst_16641 = null;
var inst_16642 = (0);
var inst_16643 = (0);
var state_16702__$1 = (function (){var statearr_16738 = state_16702;
(statearr_16738[(12)] = inst_16643);

(statearr_16738[(13)] = inst_16641);

(statearr_16738[(14)] = inst_16642);

(statearr_16738[(15)] = inst_16640);

(statearr_16738[(16)] = inst_16668);

return statearr_16738;
})();
var statearr_16739_18564 = state_16702__$1;
(statearr_16739_18564[(2)] = null);

(statearr_16739_18564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (3))){
var inst_16700 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16702__$1,inst_16700);
} else {
if((state_val_16703 === (12))){
var inst_16677 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16740_18565 = state_16702__$1;
(statearr_16740_18565[(2)] = inst_16677);

(statearr_16740_18565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (2))){
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16702__$1,(4),ch);
} else {
if((state_val_16703 === (23))){
var state_16702__$1 = state_16702;
var statearr_16742_18567 = state_16702__$1;
(statearr_16742_18567[(2)] = null);

(statearr_16742_18567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (19))){
var inst_16683 = (state_16702[(11)]);
var inst_16630 = (state_16702[(8)]);
var inst_16685 = cljs.core.async.muxch_STAR_(inst_16683);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16702__$1,(22),inst_16685,inst_16630);
} else {
if((state_val_16703 === (11))){
var inst_16640 = (state_16702[(15)]);
var inst_16654 = (state_16702[(10)]);
var inst_16654__$1 = cljs.core.seq(inst_16640);
var state_16702__$1 = (function (){var statearr_16743 = state_16702;
(statearr_16743[(10)] = inst_16654__$1);

return statearr_16743;
})();
if(inst_16654__$1){
var statearr_16744_18569 = state_16702__$1;
(statearr_16744_18569[(1)] = (13));

} else {
var statearr_16746_18574 = state_16702__$1;
(statearr_16746_18574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (9))){
var inst_16679 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16751_18575 = state_16702__$1;
(statearr_16751_18575[(2)] = inst_16679);

(statearr_16751_18575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (5))){
var inst_16637 = cljs.core.deref(mults);
var inst_16638 = cljs.core.vals(inst_16637);
var inst_16639 = cljs.core.seq(inst_16638);
var inst_16640 = inst_16639;
var inst_16641 = null;
var inst_16642 = (0);
var inst_16643 = (0);
var state_16702__$1 = (function (){var statearr_16753 = state_16702;
(statearr_16753[(12)] = inst_16643);

(statearr_16753[(13)] = inst_16641);

(statearr_16753[(14)] = inst_16642);

(statearr_16753[(15)] = inst_16640);

return statearr_16753;
})();
var statearr_16754_18576 = state_16702__$1;
(statearr_16754_18576[(2)] = null);

(statearr_16754_18576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (14))){
var state_16702__$1 = state_16702;
var statearr_16758_18577 = state_16702__$1;
(statearr_16758_18577[(2)] = null);

(statearr_16758_18577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (16))){
var inst_16654 = (state_16702[(10)]);
var inst_16661 = cljs.core.chunk_first(inst_16654);
var inst_16662 = cljs.core.chunk_rest(inst_16654);
var inst_16663 = cljs.core.count(inst_16661);
var inst_16640 = inst_16662;
var inst_16641 = inst_16661;
var inst_16642 = inst_16663;
var inst_16643 = (0);
var state_16702__$1 = (function (){var statearr_16759 = state_16702;
(statearr_16759[(12)] = inst_16643);

(statearr_16759[(13)] = inst_16641);

(statearr_16759[(14)] = inst_16642);

(statearr_16759[(15)] = inst_16640);

return statearr_16759;
})();
var statearr_16760_18581 = state_16702__$1;
(statearr_16760_18581[(2)] = null);

(statearr_16760_18581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (10))){
var inst_16643 = (state_16702[(12)]);
var inst_16641 = (state_16702[(13)]);
var inst_16642 = (state_16702[(14)]);
var inst_16640 = (state_16702[(15)]);
var inst_16648 = cljs.core._nth(inst_16641,inst_16643);
var inst_16649 = cljs.core.async.muxch_STAR_(inst_16648);
var inst_16650 = cljs.core.async.close_BANG_(inst_16649);
var inst_16651 = (inst_16643 + (1));
var tmp16755 = inst_16641;
var tmp16756 = inst_16642;
var tmp16757 = inst_16640;
var inst_16640__$1 = tmp16757;
var inst_16641__$1 = tmp16755;
var inst_16642__$1 = tmp16756;
var inst_16643__$1 = inst_16651;
var state_16702__$1 = (function (){var statearr_16763 = state_16702;
(statearr_16763[(12)] = inst_16643__$1);

(statearr_16763[(13)] = inst_16641__$1);

(statearr_16763[(14)] = inst_16642__$1);

(statearr_16763[(15)] = inst_16640__$1);

(statearr_16763[(17)] = inst_16650);

return statearr_16763;
})();
var statearr_16764_18585 = state_16702__$1;
(statearr_16764_18585[(2)] = null);

(statearr_16764_18585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (18))){
var inst_16672 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16765_18586 = state_16702__$1;
(statearr_16765_18586[(2)] = inst_16672);

(statearr_16765_18586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16703 === (8))){
var inst_16643 = (state_16702[(12)]);
var inst_16642 = (state_16702[(14)]);
var inst_16645 = (inst_16643 < inst_16642);
var inst_16646 = inst_16645;
var state_16702__$1 = state_16702;
if(cljs.core.truth_(inst_16646)){
var statearr_16766_18596 = state_16702__$1;
(statearr_16766_18596[(1)] = (10));

} else {
var statearr_16767_18597 = state_16702__$1;
(statearr_16767_18597[(1)] = (11));

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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_16792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16792[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_16792[(1)] = (1));

return statearr_16792;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_16702){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_16702);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e16793){var ex__13182__auto__ = e16793;
var statearr_16794_18612 = state_16702;
(statearr_16794_18612[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_16702[(4)]))){
var statearr_16795_18613 = state_16702;
(statearr_16795_18613[(1)] = cljs.core.first((state_16702[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18618 = state_16702;
state_16702 = G__18618;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_16702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_16702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_16796 = f__14005__auto__();
(statearr_16796[(6)] = c__14004__auto___18530);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
var G__16810 = arguments.length;
switch (G__16810) {
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
var G__16833 = arguments.length;
switch (G__16833) {
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
var G__16846 = arguments.length;
switch (G__16846) {
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
var c__14004__auto___18653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_16934){
var state_val_16935 = (state_16934[(1)]);
if((state_val_16935 === (7))){
var state_16934__$1 = state_16934;
var statearr_16942_18654 = state_16934__$1;
(statearr_16942_18654[(2)] = null);

(statearr_16942_18654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (1))){
var state_16934__$1 = state_16934;
var statearr_16943_18655 = state_16934__$1;
(statearr_16943_18655[(2)] = null);

(statearr_16943_18655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (4))){
var inst_16883 = (state_16934[(7)]);
var inst_16882 = (state_16934[(8)]);
var inst_16886 = (inst_16883 < inst_16882);
var state_16934__$1 = state_16934;
if(cljs.core.truth_(inst_16886)){
var statearr_16947_18657 = state_16934__$1;
(statearr_16947_18657[(1)] = (6));

} else {
var statearr_16948_18659 = state_16934__$1;
(statearr_16948_18659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (15))){
var inst_16918 = (state_16934[(9)]);
var inst_16925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16918);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16934__$1,(17),out,inst_16925);
} else {
if((state_val_16935 === (13))){
var inst_16918 = (state_16934[(9)]);
var inst_16918__$1 = (state_16934[(2)]);
var inst_16920 = cljs.core.some(cljs.core.nil_QMARK_,inst_16918__$1);
var state_16934__$1 = (function (){var statearr_16956 = state_16934;
(statearr_16956[(9)] = inst_16918__$1);

return statearr_16956;
})();
if(cljs.core.truth_(inst_16920)){
var statearr_16957_18661 = state_16934__$1;
(statearr_16957_18661[(1)] = (14));

} else {
var statearr_16958_18662 = state_16934__$1;
(statearr_16958_18662[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (6))){
var state_16934__$1 = state_16934;
var statearr_16959_18663 = state_16934__$1;
(statearr_16959_18663[(2)] = null);

(statearr_16959_18663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (17))){
var inst_16927 = (state_16934[(2)]);
var state_16934__$1 = (function (){var statearr_16966 = state_16934;
(statearr_16966[(10)] = inst_16927);

return statearr_16966;
})();
var statearr_16967_18666 = state_16934__$1;
(statearr_16967_18666[(2)] = null);

(statearr_16967_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (3))){
var inst_16932 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16934__$1,inst_16932);
} else {
if((state_val_16935 === (12))){
var _ = (function (){var statearr_16968 = state_16934;
(statearr_16968[(4)] = cljs.core.rest((state_16934[(4)])));

return statearr_16968;
})();
var state_16934__$1 = state_16934;
var ex16965 = (state_16934__$1[(2)]);
var statearr_16970_18683 = state_16934__$1;
(statearr_16970_18683[(5)] = ex16965);


if((ex16965 instanceof Object)){
var statearr_16972_18686 = state_16934__$1;
(statearr_16972_18686[(1)] = (11));

(statearr_16972_18686[(5)] = null);

} else {
throw ex16965;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (2))){
var inst_16879 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16882 = cnt;
var inst_16883 = (0);
var state_16934__$1 = (function (){var statearr_16976 = state_16934;
(statearr_16976[(11)] = inst_16879);

(statearr_16976[(7)] = inst_16883);

(statearr_16976[(8)] = inst_16882);

return statearr_16976;
})();
var statearr_16979_18688 = state_16934__$1;
(statearr_16979_18688[(2)] = null);

(statearr_16979_18688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (11))){
var inst_16895 = (state_16934[(2)]);
var inst_16896 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16934__$1 = (function (){var statearr_16980 = state_16934;
(statearr_16980[(12)] = inst_16895);

return statearr_16980;
})();
var statearr_16982_18690 = state_16934__$1;
(statearr_16982_18690[(2)] = inst_16896);

(statearr_16982_18690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (9))){
var inst_16883 = (state_16934[(7)]);
var _ = (function (){var statearr_16983 = state_16934;
(statearr_16983[(4)] = cljs.core.cons((12),(state_16934[(4)])));

return statearr_16983;
})();
var inst_16904 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16883) : chs__$1.call(null, inst_16883));
var inst_16905 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16883) : done.call(null, inst_16883));
var inst_16906 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16904,inst_16905);
var ___$1 = (function (){var statearr_16984 = state_16934;
(statearr_16984[(4)] = cljs.core.rest((state_16934[(4)])));

return statearr_16984;
})();
var state_16934__$1 = state_16934;
var statearr_16985_18692 = state_16934__$1;
(statearr_16985_18692[(2)] = inst_16906);

(statearr_16985_18692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (5))){
var inst_16916 = (state_16934[(2)]);
var state_16934__$1 = (function (){var statearr_16986 = state_16934;
(statearr_16986[(13)] = inst_16916);

return statearr_16986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16934__$1,(13),dchan);
} else {
if((state_val_16935 === (14))){
var inst_16922 = cljs.core.async.close_BANG_(out);
var state_16934__$1 = state_16934;
var statearr_16988_18694 = state_16934__$1;
(statearr_16988_18694[(2)] = inst_16922);

(statearr_16988_18694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (16))){
var inst_16930 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16989_18695 = state_16934__$1;
(statearr_16989_18695[(2)] = inst_16930);

(statearr_16989_18695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (10))){
var inst_16883 = (state_16934[(7)]);
var inst_16909 = (state_16934[(2)]);
var inst_16910 = (inst_16883 + (1));
var inst_16883__$1 = inst_16910;
var state_16934__$1 = (function (){var statearr_16990 = state_16934;
(statearr_16990[(7)] = inst_16883__$1);

(statearr_16990[(14)] = inst_16909);

return statearr_16990;
})();
var statearr_16991_18696 = state_16934__$1;
(statearr_16991_18696[(2)] = null);

(statearr_16991_18696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (8))){
var inst_16914 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16994_18697 = state_16934__$1;
(statearr_16994_18697[(2)] = inst_16914);

(statearr_16994_18697[(1)] = (5));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_16995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16995[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_16995[(1)] = (1));

return statearr_16995;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_16934){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_16934);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e16996){var ex__13182__auto__ = e16996;
var statearr_16997_18698 = state_16934;
(statearr_16997_18698[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_16934[(4)]))){
var statearr_17002_18699 = state_16934;
(statearr_17002_18699[(1)] = cljs.core.first((state_16934[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18702 = state_16934;
state_16934 = G__18702;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_16934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_16934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17003 = f__14005__auto__();
(statearr_17003[(6)] = c__14004__auto___18653);

return statearr_17003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
var G__17007 = arguments.length;
switch (G__17007) {
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
var c__14004__auto___18705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17046){
var state_val_17049 = (state_17046[(1)]);
if((state_val_17049 === (7))){
var inst_17020 = (state_17046[(7)]);
var inst_17019 = (state_17046[(8)]);
var inst_17019__$1 = (state_17046[(2)]);
var inst_17020__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17019__$1,(0),null);
var inst_17021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17019__$1,(1),null);
var inst_17022 = (inst_17020__$1 == null);
var state_17046__$1 = (function (){var statearr_17052 = state_17046;
(statearr_17052[(9)] = inst_17021);

(statearr_17052[(7)] = inst_17020__$1);

(statearr_17052[(8)] = inst_17019__$1);

return statearr_17052;
})();
if(cljs.core.truth_(inst_17022)){
var statearr_17053_18707 = state_17046__$1;
(statearr_17053_18707[(1)] = (8));

} else {
var statearr_17054_18708 = state_17046__$1;
(statearr_17054_18708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (1))){
var inst_17009 = cljs.core.vec(chs);
var inst_17010 = inst_17009;
var state_17046__$1 = (function (){var statearr_17055 = state_17046;
(statearr_17055[(10)] = inst_17010);

return statearr_17055;
})();
var statearr_17056_18709 = state_17046__$1;
(statearr_17056_18709[(2)] = null);

(statearr_17056_18709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (4))){
var inst_17010 = (state_17046[(10)]);
var state_17046__$1 = state_17046;
return cljs.core.async.ioc_alts_BANG_(state_17046__$1,(7),inst_17010);
} else {
if((state_val_17049 === (6))){
var inst_17037 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17059_18712 = state_17046__$1;
(statearr_17059_18712[(2)] = inst_17037);

(statearr_17059_18712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (3))){
var inst_17039 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17046__$1,inst_17039);
} else {
if((state_val_17049 === (2))){
var inst_17010 = (state_17046[(10)]);
var inst_17012 = cljs.core.count(inst_17010);
var inst_17013 = (inst_17012 > (0));
var state_17046__$1 = state_17046;
if(cljs.core.truth_(inst_17013)){
var statearr_17065_18714 = state_17046__$1;
(statearr_17065_18714[(1)] = (4));

} else {
var statearr_17066_18715 = state_17046__$1;
(statearr_17066_18715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (11))){
var inst_17010 = (state_17046[(10)]);
var inst_17030 = (state_17046[(2)]);
var tmp17062 = inst_17010;
var inst_17010__$1 = tmp17062;
var state_17046__$1 = (function (){var statearr_17072 = state_17046;
(statearr_17072[(11)] = inst_17030);

(statearr_17072[(10)] = inst_17010__$1);

return statearr_17072;
})();
var statearr_17076_18716 = state_17046__$1;
(statearr_17076_18716[(2)] = null);

(statearr_17076_18716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (9))){
var inst_17020 = (state_17046[(7)]);
var state_17046__$1 = state_17046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17046__$1,(11),out,inst_17020);
} else {
if((state_val_17049 === (5))){
var inst_17035 = cljs.core.async.close_BANG_(out);
var state_17046__$1 = state_17046;
var statearr_17080_18718 = state_17046__$1;
(statearr_17080_18718[(2)] = inst_17035);

(statearr_17080_18718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (10))){
var inst_17033 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17081_18719 = state_17046__$1;
(statearr_17081_18719[(2)] = inst_17033);

(statearr_17081_18719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17049 === (8))){
var inst_17021 = (state_17046[(9)]);
var inst_17020 = (state_17046[(7)]);
var inst_17010 = (state_17046[(10)]);
var inst_17019 = (state_17046[(8)]);
var inst_17024 = (function (){var cs = inst_17010;
var vec__17015 = inst_17019;
var v = inst_17020;
var c = inst_17021;
return (function (p1__17005_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17005_SHARP_);
});
})();
var inst_17025 = cljs.core.filterv(inst_17024,inst_17010);
var inst_17010__$1 = inst_17025;
var state_17046__$1 = (function (){var statearr_17082 = state_17046;
(statearr_17082[(10)] = inst_17010__$1);

return statearr_17082;
})();
var statearr_17083_18723 = state_17046__$1;
(statearr_17083_18723[(2)] = null);

(statearr_17083_18723[(1)] = (2));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_17084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17084[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_17084[(1)] = (1));

return statearr_17084;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_17046){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17046);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17088){var ex__13182__auto__ = e17088;
var statearr_17092_18725 = state_17046;
(statearr_17092_18725[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17046[(4)]))){
var statearr_17093_18726 = state_17046;
(statearr_17093_18726[(1)] = cljs.core.first((state_17046[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18727 = state_17046;
state_17046 = G__18727;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_17046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_17046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17094 = f__14005__auto__();
(statearr_17094[(6)] = c__14004__auto___18705);

return statearr_17094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
var G__17100 = arguments.length;
switch (G__17100) {
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
var c__14004__auto___18729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17128){
var state_val_17129 = (state_17128[(1)]);
if((state_val_17129 === (7))){
var inst_17110 = (state_17128[(7)]);
var inst_17110__$1 = (state_17128[(2)]);
var inst_17111 = (inst_17110__$1 == null);
var inst_17112 = cljs.core.not(inst_17111);
var state_17128__$1 = (function (){var statearr_17130 = state_17128;
(statearr_17130[(7)] = inst_17110__$1);

return statearr_17130;
})();
if(inst_17112){
var statearr_17131_18730 = state_17128__$1;
(statearr_17131_18730[(1)] = (8));

} else {
var statearr_17132_18731 = state_17128__$1;
(statearr_17132_18731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (1))){
var inst_17105 = (0);
var state_17128__$1 = (function (){var statearr_17134 = state_17128;
(statearr_17134[(8)] = inst_17105);

return statearr_17134;
})();
var statearr_17135_18733 = state_17128__$1;
(statearr_17135_18733[(2)] = null);

(statearr_17135_18733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (4))){
var state_17128__$1 = state_17128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17128__$1,(7),ch);
} else {
if((state_val_17129 === (6))){
var inst_17123 = (state_17128[(2)]);
var state_17128__$1 = state_17128;
var statearr_17136_18734 = state_17128__$1;
(statearr_17136_18734[(2)] = inst_17123);

(statearr_17136_18734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (3))){
var inst_17125 = (state_17128[(2)]);
var inst_17126 = cljs.core.async.close_BANG_(out);
var state_17128__$1 = (function (){var statearr_17138 = state_17128;
(statearr_17138[(9)] = inst_17125);

return statearr_17138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17128__$1,inst_17126);
} else {
if((state_val_17129 === (2))){
var inst_17105 = (state_17128[(8)]);
var inst_17107 = (inst_17105 < n);
var state_17128__$1 = state_17128;
if(cljs.core.truth_(inst_17107)){
var statearr_17140_18736 = state_17128__$1;
(statearr_17140_18736[(1)] = (4));

} else {
var statearr_17141_18740 = state_17128__$1;
(statearr_17141_18740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (11))){
var inst_17105 = (state_17128[(8)]);
var inst_17115 = (state_17128[(2)]);
var inst_17116 = (inst_17105 + (1));
var inst_17105__$1 = inst_17116;
var state_17128__$1 = (function (){var statearr_17143 = state_17128;
(statearr_17143[(8)] = inst_17105__$1);

(statearr_17143[(10)] = inst_17115);

return statearr_17143;
})();
var statearr_17144_18742 = state_17128__$1;
(statearr_17144_18742[(2)] = null);

(statearr_17144_18742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (9))){
var state_17128__$1 = state_17128;
var statearr_17145_18743 = state_17128__$1;
(statearr_17145_18743[(2)] = null);

(statearr_17145_18743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (5))){
var state_17128__$1 = state_17128;
var statearr_17146_18746 = state_17128__$1;
(statearr_17146_18746[(2)] = null);

(statearr_17146_18746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (10))){
var inst_17120 = (state_17128[(2)]);
var state_17128__$1 = state_17128;
var statearr_17148_18749 = state_17128__$1;
(statearr_17148_18749[(2)] = inst_17120);

(statearr_17148_18749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17129 === (8))){
var inst_17110 = (state_17128[(7)]);
var state_17128__$1 = state_17128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17128__$1,(11),out,inst_17110);
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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_17150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17150[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_17150[(1)] = (1));

return statearr_17150;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_17128){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17128);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17151){var ex__13182__auto__ = e17151;
var statearr_17152_18755 = state_17128;
(statearr_17152_18755[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17128[(4)]))){
var statearr_17154_18756 = state_17128;
(statearr_17154_18756[(1)] = cljs.core.first((state_17128[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18757 = state_17128;
state_17128 = G__18757;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_17128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_17128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17156 = f__14005__auto__();
(statearr_17156[(6)] = c__14004__auto___18729);

return statearr_17156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
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
cljs.core.async.t_cljs$core$async17171 = (function (f,ch,meta17160,_,fn1,meta17172){
this.f = f;
this.ch = ch;
this.meta17160 = meta17160;
this._ = _;
this.fn1 = fn1;
this.meta17172 = meta17172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17173,meta17172__$1){
var self__ = this;
var _17173__$1 = this;
return (new cljs.core.async.t_cljs$core$async17171(self__.f,self__.ch,self__.meta17160,self__._,self__.fn1,meta17172__$1));
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17173){
var self__ = this;
var _17173__$1 = this;
return self__.meta17172;
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17158_SHARP_){
var G__17178 = (((p1__17158_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17158_SHARP_) : self__.f.call(null, p1__17158_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17178) : f1.call(null, G__17178));
});
}));

(cljs.core.async.t_cljs$core$async17171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17160","meta17160",1050900739,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17159","cljs.core.async/t_cljs$core$async17159",425381422,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17172","meta17172",-1213923576,null)], null);
}));

(cljs.core.async.t_cljs$core$async17171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17171");

(cljs.core.async.t_cljs$core$async17171.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17171.
 */
cljs.core.async.__GT_t_cljs$core$async17171 = (function cljs$core$async$__GT_t_cljs$core$async17171(f,ch,meta17160,_,fn1,meta17172){
return (new cljs.core.async.t_cljs$core$async17171(f,ch,meta17160,_,fn1,meta17172));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17159 = (function (f,ch,meta17160){
this.f = f;
this.ch = ch;
this.meta17160 = meta17160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17161,meta17160__$1){
var self__ = this;
var _17161__$1 = this;
return (new cljs.core.async.t_cljs$core$async17159(self__.f,self__.ch,meta17160__$1));
}));

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17161){
var self__ = this;
var _17161__$1 = this;
return self__.meta17160;
}));

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17171(self__.f,self__.ch,self__.meta17160,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17185 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17185) : self__.f.call(null, G__17185));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17160","meta17160",1050900739,null)], null);
}));

(cljs.core.async.t_cljs$core$async17159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17159");

(cljs.core.async.t_cljs$core$async17159.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17159.
 */
cljs.core.async.__GT_t_cljs$core$async17159 = (function cljs$core$async$__GT_t_cljs$core$async17159(f,ch,meta17160){
return (new cljs.core.async.t_cljs$core$async17159(f,ch,meta17160));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17159(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17194 = (function (f,ch,meta17195){
this.f = f;
this.ch = ch;
this.meta17195 = meta17195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17196,meta17195__$1){
var self__ = this;
var _17196__$1 = this;
return (new cljs.core.async.t_cljs$core$async17194(self__.f,self__.ch,meta17195__$1));
}));

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17196){
var self__ = this;
var _17196__$1 = this;
return self__.meta17195;
}));

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17195","meta17195",1417493259,null)], null);
}));

(cljs.core.async.t_cljs$core$async17194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17194");

(cljs.core.async.t_cljs$core$async17194.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17194.
 */
cljs.core.async.__GT_t_cljs$core$async17194 = (function cljs$core$async$__GT_t_cljs$core$async17194(f,ch,meta17195){
return (new cljs.core.async.t_cljs$core$async17194(f,ch,meta17195));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17214 = (function (p,ch,meta17215){
this.p = p;
this.ch = ch;
this.meta17215 = meta17215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17216,meta17215__$1){
var self__ = this;
var _17216__$1 = this;
return (new cljs.core.async.t_cljs$core$async17214(self__.p,self__.ch,meta17215__$1));
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17216){
var self__ = this;
var _17216__$1 = this;
return self__.meta17215;
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17215","meta17215",-1499565005,null)], null);
}));

(cljs.core.async.t_cljs$core$async17214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17214");

(cljs.core.async.t_cljs$core$async17214.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17214.
 */
cljs.core.async.__GT_t_cljs$core$async17214 = (function cljs$core$async$__GT_t_cljs$core$async17214(p,ch,meta17215){
return (new cljs.core.async.t_cljs$core$async17214(p,ch,meta17215));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17214(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17256 = arguments.length;
switch (G__17256) {
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
var c__14004__auto___18777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17292){
var state_val_17293 = (state_17292[(1)]);
if((state_val_17293 === (7))){
var inst_17288 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17296_18778 = state_17292__$1;
(statearr_17296_18778[(2)] = inst_17288);

(statearr_17296_18778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (1))){
var state_17292__$1 = state_17292;
var statearr_17297_18780 = state_17292__$1;
(statearr_17297_18780[(2)] = null);

(statearr_17297_18780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (4))){
var inst_17272 = (state_17292[(7)]);
var inst_17272__$1 = (state_17292[(2)]);
var inst_17273 = (inst_17272__$1 == null);
var state_17292__$1 = (function (){var statearr_17298 = state_17292;
(statearr_17298[(7)] = inst_17272__$1);

return statearr_17298;
})();
if(cljs.core.truth_(inst_17273)){
var statearr_17299_18781 = state_17292__$1;
(statearr_17299_18781[(1)] = (5));

} else {
var statearr_17300_18782 = state_17292__$1;
(statearr_17300_18782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (6))){
var inst_17272 = (state_17292[(7)]);
var inst_17277 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17272) : p.call(null, inst_17272));
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17277)){
var statearr_17301_18783 = state_17292__$1;
(statearr_17301_18783[(1)] = (8));

} else {
var statearr_17302_18785 = state_17292__$1;
(statearr_17302_18785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (3))){
var inst_17290 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17292__$1,inst_17290);
} else {
if((state_val_17293 === (2))){
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17292__$1,(4),ch);
} else {
if((state_val_17293 === (11))){
var inst_17280 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17305_18789 = state_17292__$1;
(statearr_17305_18789[(2)] = inst_17280);

(statearr_17305_18789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (9))){
var state_17292__$1 = state_17292;
var statearr_17306_18790 = state_17292__$1;
(statearr_17306_18790[(2)] = null);

(statearr_17306_18790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (5))){
var inst_17275 = cljs.core.async.close_BANG_(out);
var state_17292__$1 = state_17292;
var statearr_17307_18792 = state_17292__$1;
(statearr_17307_18792[(2)] = inst_17275);

(statearr_17307_18792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (10))){
var inst_17285 = (state_17292[(2)]);
var state_17292__$1 = (function (){var statearr_17308 = state_17292;
(statearr_17308[(8)] = inst_17285);

return statearr_17308;
})();
var statearr_17309_18793 = state_17292__$1;
(statearr_17309_18793[(2)] = null);

(statearr_17309_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (8))){
var inst_17272 = (state_17292[(7)]);
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17292__$1,(11),out,inst_17272);
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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_17313 = [null,null,null,null,null,null,null,null,null];
(statearr_17313[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_17313[(1)] = (1));

return statearr_17313;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_17292){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17292);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17315){var ex__13182__auto__ = e17315;
var statearr_17317_18795 = state_17292;
(statearr_17317_18795[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17292[(4)]))){
var statearr_17318_18796 = state_17292;
(statearr_17318_18796[(1)] = cljs.core.first((state_17292[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18797 = state_17292;
state_17292 = G__18797;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_17292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_17292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17328 = f__14005__auto__();
(statearr_17328[(6)] = c__14004__auto___18777);

return statearr_17328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17330 = arguments.length;
switch (G__17330) {
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
var c__14004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17395){
var state_val_17396 = (state_17395[(1)]);
if((state_val_17396 === (7))){
var inst_17391 = (state_17395[(2)]);
var state_17395__$1 = state_17395;
var statearr_17399_18805 = state_17395__$1;
(statearr_17399_18805[(2)] = inst_17391);

(statearr_17399_18805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (20))){
var inst_17361 = (state_17395[(7)]);
var inst_17372 = (state_17395[(2)]);
var inst_17373 = cljs.core.next(inst_17361);
var inst_17347 = inst_17373;
var inst_17348 = null;
var inst_17349 = (0);
var inst_17350 = (0);
var state_17395__$1 = (function (){var statearr_17404 = state_17395;
(statearr_17404[(8)] = inst_17348);

(statearr_17404[(9)] = inst_17349);

(statearr_17404[(10)] = inst_17372);

(statearr_17404[(11)] = inst_17347);

(statearr_17404[(12)] = inst_17350);

return statearr_17404;
})();
var statearr_17405_18806 = state_17395__$1;
(statearr_17405_18806[(2)] = null);

(statearr_17405_18806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (1))){
var state_17395__$1 = state_17395;
var statearr_17408_18807 = state_17395__$1;
(statearr_17408_18807[(2)] = null);

(statearr_17408_18807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (4))){
var inst_17336 = (state_17395[(13)]);
var inst_17336__$1 = (state_17395[(2)]);
var inst_17337 = (inst_17336__$1 == null);
var state_17395__$1 = (function (){var statearr_17409 = state_17395;
(statearr_17409[(13)] = inst_17336__$1);

return statearr_17409;
})();
if(cljs.core.truth_(inst_17337)){
var statearr_17410_18808 = state_17395__$1;
(statearr_17410_18808[(1)] = (5));

} else {
var statearr_17411_18809 = state_17395__$1;
(statearr_17411_18809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (15))){
var state_17395__$1 = state_17395;
var statearr_17415_18811 = state_17395__$1;
(statearr_17415_18811[(2)] = null);

(statearr_17415_18811[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (21))){
var state_17395__$1 = state_17395;
var statearr_17416_18812 = state_17395__$1;
(statearr_17416_18812[(2)] = null);

(statearr_17416_18812[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (13))){
var inst_17348 = (state_17395[(8)]);
var inst_17349 = (state_17395[(9)]);
var inst_17347 = (state_17395[(11)]);
var inst_17350 = (state_17395[(12)]);
var inst_17357 = (state_17395[(2)]);
var inst_17358 = (inst_17350 + (1));
var tmp17412 = inst_17348;
var tmp17413 = inst_17349;
var tmp17414 = inst_17347;
var inst_17347__$1 = tmp17414;
var inst_17348__$1 = tmp17412;
var inst_17349__$1 = tmp17413;
var inst_17350__$1 = inst_17358;
var state_17395__$1 = (function (){var statearr_17417 = state_17395;
(statearr_17417[(8)] = inst_17348__$1);

(statearr_17417[(14)] = inst_17357);

(statearr_17417[(9)] = inst_17349__$1);

(statearr_17417[(11)] = inst_17347__$1);

(statearr_17417[(12)] = inst_17350__$1);

return statearr_17417;
})();
var statearr_17419_18819 = state_17395__$1;
(statearr_17419_18819[(2)] = null);

(statearr_17419_18819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (22))){
var state_17395__$1 = state_17395;
var statearr_17431_18823 = state_17395__$1;
(statearr_17431_18823[(2)] = null);

(statearr_17431_18823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (6))){
var inst_17336 = (state_17395[(13)]);
var inst_17345 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17336) : f.call(null, inst_17336));
var inst_17346 = cljs.core.seq(inst_17345);
var inst_17347 = inst_17346;
var inst_17348 = null;
var inst_17349 = (0);
var inst_17350 = (0);
var state_17395__$1 = (function (){var statearr_17432 = state_17395;
(statearr_17432[(8)] = inst_17348);

(statearr_17432[(9)] = inst_17349);

(statearr_17432[(11)] = inst_17347);

(statearr_17432[(12)] = inst_17350);

return statearr_17432;
})();
var statearr_17433_18825 = state_17395__$1;
(statearr_17433_18825[(2)] = null);

(statearr_17433_18825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (17))){
var inst_17361 = (state_17395[(7)]);
var inst_17365 = cljs.core.chunk_first(inst_17361);
var inst_17366 = cljs.core.chunk_rest(inst_17361);
var inst_17367 = cljs.core.count(inst_17365);
var inst_17347 = inst_17366;
var inst_17348 = inst_17365;
var inst_17349 = inst_17367;
var inst_17350 = (0);
var state_17395__$1 = (function (){var statearr_17435 = state_17395;
(statearr_17435[(8)] = inst_17348);

(statearr_17435[(9)] = inst_17349);

(statearr_17435[(11)] = inst_17347);

(statearr_17435[(12)] = inst_17350);

return statearr_17435;
})();
var statearr_17436_18826 = state_17395__$1;
(statearr_17436_18826[(2)] = null);

(statearr_17436_18826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (3))){
var inst_17393 = (state_17395[(2)]);
var state_17395__$1 = state_17395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17395__$1,inst_17393);
} else {
if((state_val_17396 === (12))){
var inst_17381 = (state_17395[(2)]);
var state_17395__$1 = state_17395;
var statearr_17439_18828 = state_17395__$1;
(statearr_17439_18828[(2)] = inst_17381);

(statearr_17439_18828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (2))){
var state_17395__$1 = state_17395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17395__$1,(4),in$);
} else {
if((state_val_17396 === (23))){
var inst_17389 = (state_17395[(2)]);
var state_17395__$1 = state_17395;
var statearr_17442_18829 = state_17395__$1;
(statearr_17442_18829[(2)] = inst_17389);

(statearr_17442_18829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (19))){
var inst_17376 = (state_17395[(2)]);
var state_17395__$1 = state_17395;
var statearr_17445_18830 = state_17395__$1;
(statearr_17445_18830[(2)] = inst_17376);

(statearr_17445_18830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (11))){
var inst_17361 = (state_17395[(7)]);
var inst_17347 = (state_17395[(11)]);
var inst_17361__$1 = cljs.core.seq(inst_17347);
var state_17395__$1 = (function (){var statearr_17446 = state_17395;
(statearr_17446[(7)] = inst_17361__$1);

return statearr_17446;
})();
if(inst_17361__$1){
var statearr_17447_18831 = state_17395__$1;
(statearr_17447_18831[(1)] = (14));

} else {
var statearr_17448_18833 = state_17395__$1;
(statearr_17448_18833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (9))){
var inst_17383 = (state_17395[(2)]);
var inst_17384 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17395__$1 = (function (){var statearr_17449 = state_17395;
(statearr_17449[(15)] = inst_17383);

return statearr_17449;
})();
if(cljs.core.truth_(inst_17384)){
var statearr_17450_18834 = state_17395__$1;
(statearr_17450_18834[(1)] = (21));

} else {
var statearr_17451_18835 = state_17395__$1;
(statearr_17451_18835[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (5))){
var inst_17339 = cljs.core.async.close_BANG_(out);
var state_17395__$1 = state_17395;
var statearr_17452_18836 = state_17395__$1;
(statearr_17452_18836[(2)] = inst_17339);

(statearr_17452_18836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (14))){
var inst_17361 = (state_17395[(7)]);
var inst_17363 = cljs.core.chunked_seq_QMARK_(inst_17361);
var state_17395__$1 = state_17395;
if(inst_17363){
var statearr_17453_18837 = state_17395__$1;
(statearr_17453_18837[(1)] = (17));

} else {
var statearr_17454_18838 = state_17395__$1;
(statearr_17454_18838[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (16))){
var inst_17379 = (state_17395[(2)]);
var state_17395__$1 = state_17395;
var statearr_17455_18840 = state_17395__$1;
(statearr_17455_18840[(2)] = inst_17379);

(statearr_17455_18840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17396 === (10))){
var inst_17348 = (state_17395[(8)]);
var inst_17350 = (state_17395[(12)]);
var inst_17355 = cljs.core._nth(inst_17348,inst_17350);
var state_17395__$1 = state_17395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17395__$1,(13),out,inst_17355);
} else {
if((state_val_17396 === (18))){
var inst_17361 = (state_17395[(7)]);
var inst_17370 = cljs.core.first(inst_17361);
var state_17395__$1 = state_17395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17395__$1,(20),out,inst_17370);
} else {
if((state_val_17396 === (8))){
var inst_17349 = (state_17395[(9)]);
var inst_17350 = (state_17395[(12)]);
var inst_17352 = (inst_17350 < inst_17349);
var inst_17353 = inst_17352;
var state_17395__$1 = state_17395;
if(cljs.core.truth_(inst_17353)){
var statearr_17457_18841 = state_17395__$1;
(statearr_17457_18841[(1)] = (10));

} else {
var statearr_17458_18842 = state_17395__$1;
(statearr_17458_18842[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13179__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13179__auto____0 = (function (){
var statearr_17459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17459[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13179__auto__);

(statearr_17459[(1)] = (1));

return statearr_17459;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13179__auto____1 = (function (state_17395){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17395);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17463){var ex__13182__auto__ = e17463;
var statearr_17464_18844 = state_17395;
(statearr_17464_18844[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17395[(4)]))){
var statearr_17466_18849 = state_17395;
(statearr_17466_18849[(1)] = cljs.core.first((state_17395[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18850 = state_17395;
state_17395 = G__18850;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13179__auto__ = function(state_17395){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13179__auto____1.call(this,state_17395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13179__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13179__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17467 = f__14005__auto__();
(statearr_17467[(6)] = c__14004__auto__);

return statearr_17467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));

return c__14004__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
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
var G__17473 = arguments.length;
switch (G__17473) {
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
var G__17476 = arguments.length;
switch (G__17476) {
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
var c__14004__auto___18863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17512){
var state_val_17513 = (state_17512[(1)]);
if((state_val_17513 === (7))){
var inst_17507 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
var statearr_17525_18868 = state_17512__$1;
(statearr_17525_18868[(2)] = inst_17507);

(statearr_17525_18868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (1))){
var inst_17485 = null;
var state_17512__$1 = (function (){var statearr_17526 = state_17512;
(statearr_17526[(7)] = inst_17485);

return statearr_17526;
})();
var statearr_17527_18869 = state_17512__$1;
(statearr_17527_18869[(2)] = null);

(statearr_17527_18869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (4))){
var inst_17488 = (state_17512[(8)]);
var inst_17488__$1 = (state_17512[(2)]);
var inst_17493 = (inst_17488__$1 == null);
var inst_17494 = cljs.core.not(inst_17493);
var state_17512__$1 = (function (){var statearr_17528 = state_17512;
(statearr_17528[(8)] = inst_17488__$1);

return statearr_17528;
})();
if(inst_17494){
var statearr_17529_18870 = state_17512__$1;
(statearr_17529_18870[(1)] = (5));

} else {
var statearr_17530_18871 = state_17512__$1;
(statearr_17530_18871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (6))){
var state_17512__$1 = state_17512;
var statearr_17531_18872 = state_17512__$1;
(statearr_17531_18872[(2)] = null);

(statearr_17531_18872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (3))){
var inst_17509 = (state_17512[(2)]);
var inst_17510 = cljs.core.async.close_BANG_(out);
var state_17512__$1 = (function (){var statearr_17532 = state_17512;
(statearr_17532[(9)] = inst_17509);

return statearr_17532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17512__$1,inst_17510);
} else {
if((state_val_17513 === (2))){
var state_17512__$1 = state_17512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17512__$1,(4),ch);
} else {
if((state_val_17513 === (11))){
var inst_17488 = (state_17512[(8)]);
var inst_17501 = (state_17512[(2)]);
var inst_17485 = inst_17488;
var state_17512__$1 = (function (){var statearr_17534 = state_17512;
(statearr_17534[(10)] = inst_17501);

(statearr_17534[(7)] = inst_17485);

return statearr_17534;
})();
var statearr_17535_18876 = state_17512__$1;
(statearr_17535_18876[(2)] = null);

(statearr_17535_18876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (9))){
var inst_17488 = (state_17512[(8)]);
var state_17512__$1 = state_17512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17512__$1,(11),out,inst_17488);
} else {
if((state_val_17513 === (5))){
var inst_17488 = (state_17512[(8)]);
var inst_17485 = (state_17512[(7)]);
var inst_17496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17488,inst_17485);
var state_17512__$1 = state_17512;
if(inst_17496){
var statearr_17539_18881 = state_17512__$1;
(statearr_17539_18881[(1)] = (8));

} else {
var statearr_17541_18882 = state_17512__$1;
(statearr_17541_18882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (10))){
var inst_17504 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
var statearr_17542_18885 = state_17512__$1;
(statearr_17542_18885[(2)] = inst_17504);

(statearr_17542_18885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (8))){
var inst_17485 = (state_17512[(7)]);
var tmp17536 = inst_17485;
var inst_17485__$1 = tmp17536;
var state_17512__$1 = (function (){var statearr_17543 = state_17512;
(statearr_17543[(7)] = inst_17485__$1);

return statearr_17543;
})();
var statearr_17544_18886 = state_17512__$1;
(statearr_17544_18886[(2)] = null);

(statearr_17544_18886[(1)] = (2));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_17547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17547[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_17547[(1)] = (1));

return statearr_17547;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_17512){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17512);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17554){var ex__13182__auto__ = e17554;
var statearr_17555_18887 = state_17512;
(statearr_17555_18887[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17512[(4)]))){
var statearr_17556_18888 = state_17512;
(statearr_17556_18888[(1)] = cljs.core.first((state_17512[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18889 = state_17512;
state_17512 = G__18889;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_17512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_17512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17557 = f__14005__auto__();
(statearr_17557[(6)] = c__14004__auto___18863);

return statearr_17557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17564 = arguments.length;
switch (G__17564) {
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
var c__14004__auto___18896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17616){
var state_val_17617 = (state_17616[(1)]);
if((state_val_17617 === (7))){
var inst_17610 = (state_17616[(2)]);
var state_17616__$1 = state_17616;
var statearr_17624_18897 = state_17616__$1;
(statearr_17624_18897[(2)] = inst_17610);

(statearr_17624_18897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (1))){
var inst_17571 = (new Array(n));
var inst_17572 = inst_17571;
var inst_17573 = (0);
var state_17616__$1 = (function (){var statearr_17625 = state_17616;
(statearr_17625[(7)] = inst_17572);

(statearr_17625[(8)] = inst_17573);

return statearr_17625;
})();
var statearr_17627_18898 = state_17616__$1;
(statearr_17627_18898[(2)] = null);

(statearr_17627_18898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (4))){
var inst_17578 = (state_17616[(9)]);
var inst_17578__$1 = (state_17616[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var inst_17580 = cljs.core.not(inst_17579);
var state_17616__$1 = (function (){var statearr_17630 = state_17616;
(statearr_17630[(9)] = inst_17578__$1);

return statearr_17630;
})();
if(inst_17580){
var statearr_17631_18899 = state_17616__$1;
(statearr_17631_18899[(1)] = (5));

} else {
var statearr_17632_18900 = state_17616__$1;
(statearr_17632_18900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (15))){
var inst_17604 = (state_17616[(2)]);
var state_17616__$1 = state_17616;
var statearr_17633_18901 = state_17616__$1;
(statearr_17633_18901[(2)] = inst_17604);

(statearr_17633_18901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (13))){
var state_17616__$1 = state_17616;
var statearr_17637_18902 = state_17616__$1;
(statearr_17637_18902[(2)] = null);

(statearr_17637_18902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (6))){
var inst_17573 = (state_17616[(8)]);
var inst_17599 = (inst_17573 > (0));
var state_17616__$1 = state_17616;
if(cljs.core.truth_(inst_17599)){
var statearr_17638_18907 = state_17616__$1;
(statearr_17638_18907[(1)] = (12));

} else {
var statearr_17639_18908 = state_17616__$1;
(statearr_17639_18908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (3))){
var inst_17612 = (state_17616[(2)]);
var state_17616__$1 = state_17616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17616__$1,inst_17612);
} else {
if((state_val_17617 === (12))){
var inst_17572 = (state_17616[(7)]);
var inst_17602 = cljs.core.vec(inst_17572);
var state_17616__$1 = state_17616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17616__$1,(15),out,inst_17602);
} else {
if((state_val_17617 === (2))){
var state_17616__$1 = state_17616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17616__$1,(4),ch);
} else {
if((state_val_17617 === (11))){
var inst_17591 = (state_17616[(2)]);
var inst_17594 = (new Array(n));
var inst_17572 = inst_17594;
var inst_17573 = (0);
var state_17616__$1 = (function (){var statearr_17640 = state_17616;
(statearr_17640[(7)] = inst_17572);

(statearr_17640[(8)] = inst_17573);

(statearr_17640[(10)] = inst_17591);

return statearr_17640;
})();
var statearr_17641_18910 = state_17616__$1;
(statearr_17641_18910[(2)] = null);

(statearr_17641_18910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (9))){
var inst_17572 = (state_17616[(7)]);
var inst_17589 = cljs.core.vec(inst_17572);
var state_17616__$1 = state_17616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17616__$1,(11),out,inst_17589);
} else {
if((state_val_17617 === (5))){
var inst_17584 = (state_17616[(11)]);
var inst_17572 = (state_17616[(7)]);
var inst_17573 = (state_17616[(8)]);
var inst_17578 = (state_17616[(9)]);
var inst_17583 = (inst_17572[inst_17573] = inst_17578);
var inst_17584__$1 = (inst_17573 + (1));
var inst_17585 = (inst_17584__$1 < n);
var state_17616__$1 = (function (){var statearr_17650 = state_17616;
(statearr_17650[(11)] = inst_17584__$1);

(statearr_17650[(12)] = inst_17583);

return statearr_17650;
})();
if(cljs.core.truth_(inst_17585)){
var statearr_17652_18914 = state_17616__$1;
(statearr_17652_18914[(1)] = (8));

} else {
var statearr_17653_18916 = state_17616__$1;
(statearr_17653_18916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (14))){
var inst_17607 = (state_17616[(2)]);
var inst_17608 = cljs.core.async.close_BANG_(out);
var state_17616__$1 = (function (){var statearr_17655 = state_17616;
(statearr_17655[(13)] = inst_17607);

return statearr_17655;
})();
var statearr_17656_18917 = state_17616__$1;
(statearr_17656_18917[(2)] = inst_17608);

(statearr_17656_18917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (10))){
var inst_17597 = (state_17616[(2)]);
var state_17616__$1 = state_17616;
var statearr_17658_18918 = state_17616__$1;
(statearr_17658_18918[(2)] = inst_17597);

(statearr_17658_18918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17617 === (8))){
var inst_17584 = (state_17616[(11)]);
var inst_17572 = (state_17616[(7)]);
var tmp17654 = inst_17572;
var inst_17572__$1 = tmp17654;
var inst_17573 = inst_17584;
var state_17616__$1 = (function (){var statearr_17659 = state_17616;
(statearr_17659[(7)] = inst_17572__$1);

(statearr_17659[(8)] = inst_17573);

return statearr_17659;
})();
var statearr_17660_18919 = state_17616__$1;
(statearr_17660_18919[(2)] = null);

(statearr_17660_18919[(1)] = (2));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_17661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17661[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_17661[(1)] = (1));

return statearr_17661;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_17616){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17616);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17671){var ex__13182__auto__ = e17671;
var statearr_17672_18920 = state_17616;
(statearr_17672_18920[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17616[(4)]))){
var statearr_17673_18921 = state_17616;
(statearr_17673_18921[(1)] = cljs.core.first((state_17616[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18925 = state_17616;
state_17616 = G__18925;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_17616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_17616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17677 = f__14005__auto__();
(statearr_17677[(6)] = c__14004__auto___18896);

return statearr_17677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17686 = arguments.length;
switch (G__17686) {
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
var c__14004__auto___18927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14005__auto__ = (function (){var switch__13177__auto__ = (function (state_17741){
var state_val_17742 = (state_17741[(1)]);
if((state_val_17742 === (7))){
var inst_17737 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17760_18932 = state_17741__$1;
(statearr_17760_18932[(2)] = inst_17737);

(statearr_17760_18932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (1))){
var inst_17696 = [];
var inst_17697 = inst_17696;
var inst_17698 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17741__$1 = (function (){var statearr_17761 = state_17741;
(statearr_17761[(7)] = inst_17697);

(statearr_17761[(8)] = inst_17698);

return statearr_17761;
})();
var statearr_17762_18934 = state_17741__$1;
(statearr_17762_18934[(2)] = null);

(statearr_17762_18934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (4))){
var inst_17701 = (state_17741[(9)]);
var inst_17701__$1 = (state_17741[(2)]);
var inst_17702 = (inst_17701__$1 == null);
var inst_17703 = cljs.core.not(inst_17702);
var state_17741__$1 = (function (){var statearr_17768 = state_17741;
(statearr_17768[(9)] = inst_17701__$1);

return statearr_17768;
})();
if(inst_17703){
var statearr_17769_18935 = state_17741__$1;
(statearr_17769_18935[(1)] = (5));

} else {
var statearr_17770_18936 = state_17741__$1;
(statearr_17770_18936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (15))){
var inst_17697 = (state_17741[(7)]);
var inst_17729 = cljs.core.vec(inst_17697);
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17741__$1,(18),out,inst_17729);
} else {
if((state_val_17742 === (13))){
var inst_17724 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17771_18937 = state_17741__$1;
(statearr_17771_18937[(2)] = inst_17724);

(statearr_17771_18937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (6))){
var inst_17697 = (state_17741[(7)]);
var inst_17726 = inst_17697.length;
var inst_17727 = (inst_17726 > (0));
var state_17741__$1 = state_17741;
if(cljs.core.truth_(inst_17727)){
var statearr_17773_18938 = state_17741__$1;
(statearr_17773_18938[(1)] = (15));

} else {
var statearr_17774_18939 = state_17741__$1;
(statearr_17774_18939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (17))){
var inst_17734 = (state_17741[(2)]);
var inst_17735 = cljs.core.async.close_BANG_(out);
var state_17741__$1 = (function (){var statearr_17776 = state_17741;
(statearr_17776[(10)] = inst_17734);

return statearr_17776;
})();
var statearr_17777_18940 = state_17741__$1;
(statearr_17777_18940[(2)] = inst_17735);

(statearr_17777_18940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (3))){
var inst_17739 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17741__$1,inst_17739);
} else {
if((state_val_17742 === (12))){
var inst_17697 = (state_17741[(7)]);
var inst_17717 = cljs.core.vec(inst_17697);
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17741__$1,(14),out,inst_17717);
} else {
if((state_val_17742 === (2))){
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17741__$1,(4),ch);
} else {
if((state_val_17742 === (11))){
var inst_17697 = (state_17741[(7)]);
var inst_17705 = (state_17741[(11)]);
var inst_17701 = (state_17741[(9)]);
var inst_17714 = inst_17697.push(inst_17701);
var tmp17778 = inst_17697;
var inst_17697__$1 = tmp17778;
var inst_17698 = inst_17705;
var state_17741__$1 = (function (){var statearr_17789 = state_17741;
(statearr_17789[(7)] = inst_17697__$1);

(statearr_17789[(8)] = inst_17698);

(statearr_17789[(12)] = inst_17714);

return statearr_17789;
})();
var statearr_17791_18959 = state_17741__$1;
(statearr_17791_18959[(2)] = null);

(statearr_17791_18959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (9))){
var inst_17698 = (state_17741[(8)]);
var inst_17710 = cljs.core.keyword_identical_QMARK_(inst_17698,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17741__$1 = state_17741;
var statearr_17795_18961 = state_17741__$1;
(statearr_17795_18961[(2)] = inst_17710);

(statearr_17795_18961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (5))){
var inst_17698 = (state_17741[(8)]);
var inst_17707 = (state_17741[(13)]);
var inst_17705 = (state_17741[(11)]);
var inst_17701 = (state_17741[(9)]);
var inst_17705__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17701) : f.call(null, inst_17701));
var inst_17707__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17705__$1,inst_17698);
var state_17741__$1 = (function (){var statearr_17796 = state_17741;
(statearr_17796[(13)] = inst_17707__$1);

(statearr_17796[(11)] = inst_17705__$1);

return statearr_17796;
})();
if(inst_17707__$1){
var statearr_17797_18968 = state_17741__$1;
(statearr_17797_18968[(1)] = (8));

} else {
var statearr_17798_18969 = state_17741__$1;
(statearr_17798_18969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (14))){
var inst_17705 = (state_17741[(11)]);
var inst_17701 = (state_17741[(9)]);
var inst_17719 = (state_17741[(2)]);
var inst_17720 = [];
var inst_17721 = inst_17720.push(inst_17701);
var inst_17697 = inst_17720;
var inst_17698 = inst_17705;
var state_17741__$1 = (function (){var statearr_17800 = state_17741;
(statearr_17800[(7)] = inst_17697);

(statearr_17800[(8)] = inst_17698);

(statearr_17800[(14)] = inst_17721);

(statearr_17800[(15)] = inst_17719);

return statearr_17800;
})();
var statearr_17801_18973 = state_17741__$1;
(statearr_17801_18973[(2)] = null);

(statearr_17801_18973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (16))){
var state_17741__$1 = state_17741;
var statearr_17802_18975 = state_17741__$1;
(statearr_17802_18975[(2)] = null);

(statearr_17802_18975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (10))){
var inst_17712 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
if(cljs.core.truth_(inst_17712)){
var statearr_17807_18979 = state_17741__$1;
(statearr_17807_18979[(1)] = (11));

} else {
var statearr_17808_18981 = state_17741__$1;
(statearr_17808_18981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (18))){
var inst_17731 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17809_18982 = state_17741__$1;
(statearr_17809_18982[(2)] = inst_17731);

(statearr_17809_18982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (8))){
var inst_17707 = (state_17741[(13)]);
var state_17741__$1 = state_17741;
var statearr_17810_18983 = state_17741__$1;
(statearr_17810_18983[(2)] = inst_17707);

(statearr_17810_18983[(1)] = (10));


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
var cljs$core$async$state_machine__13179__auto__ = null;
var cljs$core$async$state_machine__13179__auto____0 = (function (){
var statearr_17826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17826[(0)] = cljs$core$async$state_machine__13179__auto__);

(statearr_17826[(1)] = (1));

return statearr_17826;
});
var cljs$core$async$state_machine__13179__auto____1 = (function (state_17741){
while(true){
var ret_value__13180__auto__ = (function (){try{while(true){
var result__13181__auto__ = switch__13177__auto__(state_17741);
if(cljs.core.keyword_identical_QMARK_(result__13181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13181__auto__;
}
break;
}
}catch (e17831){var ex__13182__auto__ = e17831;
var statearr_17832_18992 = state_17741;
(statearr_17832_18992[(2)] = ex__13182__auto__);


if(cljs.core.seq((state_17741[(4)]))){
var statearr_17833_18998 = state_17741;
(statearr_17833_18998[(1)] = cljs.core.first((state_17741[(4)])));

} else {
throw ex__13182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19006 = state_17741;
state_17741 = G__19006;
continue;
} else {
return ret_value__13180__auto__;
}
break;
}
});
cljs$core$async$state_machine__13179__auto__ = function(state_17741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13179__auto____1.call(this,state_17741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13179__auto____0;
cljs$core$async$state_machine__13179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13179__auto____1;
return cljs$core$async$state_machine__13179__auto__;
})()
})();
var state__14006__auto__ = (function (){var statearr_17835 = f__14005__auto__();
(statearr_17835[(6)] = c__14004__auto___18927);

return statearr_17835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14006__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
