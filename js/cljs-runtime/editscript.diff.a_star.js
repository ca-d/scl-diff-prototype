import "./cljs_env.js";
import "./cljs.core.js";
import "./editscript.edit.js";
import "./editscript.util.pairing.js";
import "./editscript.util.common.js";
import "./goog.math.long.js";
goog.provide('editscript.diff.a_star');
goog.scope(function(){
  editscript.diff.a_star.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});

/**
 * @interface
 */
editscript.diff.a_star.INode = function(){};

var editscript$diff$a_star$INode$get_path$dyn_16694 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_path[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_path["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-path",this$);
}
}
});
/**
 * Get the path to the node from root
 */
editscript.diff.a_star.get_path = (function editscript$diff$a_star$get_path(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_path$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_path$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_path$dyn_16694(this$);
}
});

var editscript$diff$a_star$INode$get_value$dyn_16700 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_value[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_value["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-value",this$);
}
}
});
/**
 * Get the actual data
 */
editscript.diff.a_star.get_value = (function editscript$diff$a_star$get_value(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_value$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_value$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_value$dyn_16700(this$);
}
});

var editscript$diff$a_star$INode$get_children$dyn_16703 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_children[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_children["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-children",this$);
}
}
});
/**
 * Get all children node in a map
 */
editscript.diff.a_star.get_children = (function editscript$diff$a_star$get_children(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_children$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_children$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_children$dyn_16703(this$);
}
});

var editscript$diff$a_star$INode$add_child$dyn_16705 = (function (this$,node){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.add_child[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5351__auto__.call(null, this$,node));
} else {
var m__5349__auto__ = (editscript.diff.a_star.add_child["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5349__auto__.call(null, this$,node));
} else {
throw cljs.core.missing_protocol("INode.add-child",this$);
}
}
});
/**
 * Add a child node
 */
editscript.diff.a_star.add_child = (function editscript$diff$a_star$add_child(this$,node){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$add_child$arity$2 == null)))))){
return this$.editscript$diff$a_star$INode$add_child$arity$2(this$,node);
} else {
return editscript$diff$a_star$INode$add_child$dyn_16705(this$,node);
}
});

var editscript$diff$a_star$INode$get_key$dyn_16715 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_key[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_key["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-key",this$);
}
}
});
/**
 * Get the key of this node
 */
editscript.diff.a_star.get_key = (function editscript$diff$a_star$get_key(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_key$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_key$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_key$dyn_16715(this$);
}
});

var editscript$diff$a_star$INode$get_parent$dyn_16716 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_parent[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_parent["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-parent",this$);
}
}
});
/**
 * Get the parent node
 */
editscript.diff.a_star.get_parent = (function editscript$diff$a_star$get_parent(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_parent$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_parent$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_parent$dyn_16716(this$);
}
});

var editscript$diff$a_star$INode$get_first$dyn_16718 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_first[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_first["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-first",this$);
}
}
});
/**
 * Get the first child node
 */
editscript.diff.a_star.get_first = (function editscript$diff$a_star$get_first(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_first$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_first$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_first$dyn_16718(this$);
}
});

var editscript$diff$a_star$INode$get_last$dyn_16719 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_last[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_last["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-last",this$);
}
}
});
/**
 * Get the last child node
 */
editscript.diff.a_star.get_last = (function editscript$diff$a_star$get_last(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_last$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_last$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_last$dyn_16719(this$);
}
});

var editscript$diff$a_star$INode$get_next$dyn_16721 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_next[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_next["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-next",this$);
}
}
});
/**
 * Get the next sibling node
 */
editscript.diff.a_star.get_next = (function editscript$diff$a_star$get_next(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_next$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_next$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_next$dyn_16721(this$);
}
});

var editscript$diff$a_star$INode$set_next$dyn_16723 = (function (this$,node){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.set_next[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5351__auto__.call(null, this$,node));
} else {
var m__5349__auto__ = (editscript.diff.a_star.set_next["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,node) : m__5349__auto__.call(null, this$,node));
} else {
throw cljs.core.missing_protocol("INode.set-next",this$);
}
}
});
/**
 * Set the next sibling node
 */
editscript.diff.a_star.set_next = (function editscript$diff$a_star$set_next(this$,node){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$set_next$arity$2 == null)))))){
return this$.editscript$diff$a_star$INode$set_next$arity$2(this$,node);
} else {
return editscript$diff$a_star$INode$set_next$dyn_16723(this$,node);
}
});

var editscript$diff$a_star$INode$set_order$dyn_16724 = (function (this$,o){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.set_order[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,o) : m__5351__auto__.call(null, this$,o));
} else {
var m__5349__auto__ = (editscript.diff.a_star.set_order["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,o) : m__5349__auto__.call(null, this$,o));
} else {
throw cljs.core.missing_protocol("INode.set-order",this$);
}
}
});
/**
 * Set the traversal order of this node
 */
editscript.diff.a_star.set_order = (function editscript$diff$a_star$set_order(this$,o){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$set_order$arity$2 == null)))))){
return this$.editscript$diff$a_star$INode$set_order$arity$2(this$,o);
} else {
return editscript$diff$a_star$INode$set_order$dyn_16724(this$,o);
}
});

var editscript$diff$a_star$INode$get_order$dyn_16726 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_order[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_order["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-order",this$);
}
}
});
/**
 * Get the order of this node in traversal
 */
editscript.diff.a_star.get_order = (function editscript$diff$a_star$get_order(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_order$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_order$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_order$dyn_16726(this$);
}
});

var editscript$diff$a_star$INode$get_size$dyn_16727 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_size[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_size["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INode.get-size",this$);
}
}
});
/**
 * Get the size of sub-tree, used to estimate cost
 */
editscript.diff.a_star.get_size = (function editscript$diff$a_star$get_size(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$get_size$arity$1 == null)))))){
return this$.editscript$diff$a_star$INode$get_size$arity$1(this$);
} else {
return editscript$diff$a_star$INode$get_size$dyn_16727(this$);
}
});

var editscript$diff$a_star$INode$set_size$dyn_16728 = (function (this$,s){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.set_size[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5351__auto__.call(null, this$,s));
} else {
var m__5349__auto__ = (editscript.diff.a_star.set_size["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5349__auto__.call(null, this$,s));
} else {
throw cljs.core.missing_protocol("INode.set-size",this$);
}
}
});
/**
 * Set the size of sub-tree
 */
editscript.diff.a_star.set_size = (function editscript$diff$a_star$set_size(this$,s){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$INode$set_size$arity$2 == null)))))){
return this$.editscript$diff$a_star$INode$set_size$arity$2(this$,s);
} else {
return editscript$diff$a_star$INode$set_size$dyn_16728(this$,s);
}
});


/**
* @constructor
 * @implements {editscript.diff.a_star.INode}
*/
editscript.diff.a_star.Node = (function (path,value,parent,children,first,last,next,index,order,size){
this.path = path;
this.value = value;
this.parent = parent;
this.children = children;
this.first = first;
this.last = last;
this.next = next;
this.index = index;
this.order = order;
this.size = size;
});
(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(this$__$1.editscript$diff$a_star$INode$get_path$arity$1(null, ));
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$set_size$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
(self__.size = cljs.core.long$(s));

return this$__$1;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$set_next$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (self__.next = n);
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_parent$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.parent;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.first;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_last$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.last;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.next;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$set_order$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
(self__.order = cljs.core.long$(o));

return this$__$1;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$get_order$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.order;
}));

(editscript.diff.a_star.Node.prototype.editscript$diff$a_star$INode$add_child$arity$2 = (function (_,node){
var self__ = this;
var ___$1 = this;
(self__.children = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.children,editscript.diff.a_star.get_key(node),node));

if(cljs.core.truth_(self__.last)){
editscript.diff.a_star.set_next(self__.last,node);
} else {
}

if(cljs.core.truth_(self__.first)){
} else {
(self__.first = node);
}

(self__.last = node);

return node;
}));

(editscript.diff.a_star.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)], null)),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"order","order",385854271,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.diff.a_star.Node.cljs$lang$type = true);

(editscript.diff.a_star.Node.cljs$lang$ctorStr = "editscript.diff.a-star/Node");

(editscript.diff.a_star.Node.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"editscript.diff.a-star/Node");
}));

/**
 * Positional factory function for editscript.diff.a-star/Node.
 */
editscript.diff.a_star.__GT_Node = (function editscript$diff$a_star$__GT_Node(path,value,parent,children,first,last,next,index,order,size){
return (new editscript.diff.a_star.Node(path,value,parent,children,first,last,next,index,order,size));
});

/**
 * map and vector are associative
 */
editscript.diff.a_star.associative_children = (function editscript$diff$a_star$associative_children(order,path,data,parent){
return cljs.core.reduce_kv((function (_,k,v){
var G__16432 = order;
var G__16433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__16434 = v;
var G__16435 = parent;
return (editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4 ? editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4(G__16432,G__16433,G__16434,G__16435) : editscript.diff.a_star.index_STAR_.call(null, G__16432,G__16433,G__16434,G__16435));
}),null,data);
});
/**
 * set is a map of keys to themselves
 */
editscript.diff.a_star.set_children = (function editscript$diff$a_star$set_children(order,path,data,parent){
var seq__16441 = cljs.core.seq(data);
var chunk__16442 = null;
var count__16443 = (0);
var i__16444 = (0);
while(true){
if((i__16444 < count__16443)){
var x = chunk__16442.cljs$core$IIndexed$_nth$arity$2(null, i__16444);
var G__16472_16737 = order;
var G__16473_16738 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x);
var G__16474_16739 = x;
var G__16475_16740 = parent;
(editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4 ? editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4(G__16472_16737,G__16473_16738,G__16474_16739,G__16475_16740) : editscript.diff.a_star.index_STAR_.call(null, G__16472_16737,G__16473_16738,G__16474_16739,G__16475_16740));


var G__16741 = seq__16441;
var G__16742 = chunk__16442;
var G__16743 = count__16443;
var G__16744 = (i__16444 + (1));
seq__16441 = G__16741;
chunk__16442 = G__16742;
count__16443 = G__16743;
i__16444 = G__16744;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16441);
if(temp__5804__auto__){
var seq__16441__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16441__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16441__$1);
var G__16745 = cljs.core.chunk_rest(seq__16441__$1);
var G__16746 = c__5525__auto__;
var G__16747 = cljs.core.count(c__5525__auto__);
var G__16748 = (0);
seq__16441 = G__16745;
chunk__16442 = G__16746;
count__16443 = G__16747;
i__16444 = G__16748;
continue;
} else {
var x = cljs.core.first(seq__16441__$1);
var G__16478_16751 = order;
var G__16479_16752 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x);
var G__16480_16753 = x;
var G__16481_16754 = parent;
(editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4 ? editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4(G__16478_16751,G__16479_16752,G__16480_16753,G__16481_16754) : editscript.diff.a_star.index_STAR_.call(null, G__16478_16751,G__16479_16752,G__16480_16753,G__16481_16754));


var G__16755 = cljs.core.next(seq__16441__$1);
var G__16756 = null;
var G__16757 = (0);
var G__16758 = (0);
seq__16441 = G__16755;
chunk__16442 = G__16756;
count__16443 = G__16757;
i__16444 = G__16758;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * add index as key
 */
editscript.diff.a_star.list_children = (function editscript$diff$a_star$list_children(order,path,data,parent){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (i,x){
var G__16484_16759 = order;
var G__16485_16760 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__16486_16761 = x;
var G__16487_16762 = parent;
(editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4 ? editscript.diff.a_star.index_STAR_.cljs$core$IFn$_invoke$arity$4(G__16484_16759,G__16485_16760,G__16486_16761,G__16487_16762) : editscript.diff.a_star.index_STAR_.call(null, G__16484_16759,G__16485_16760,G__16486_16761,G__16487_16762));

return (i + (1));
}),(0),data);
});
/**
 * order value reflects the size of elements
 */
editscript.diff.a_star.inc_order = (function editscript$diff$a_star$inc_order(order,size){
return cljs.core._vreset_BANG_(order,(function (o){
return (size + o);
})(cljs.core._deref(order)));
});
editscript.diff.a_star.index_collection = (function editscript$diff$a_star$index_collection(type,order,path,data,parent){
var node = editscript.diff.a_star.__GT_Node(path,data,parent,cljs.core.PersistentArrayMap.EMPTY,null,null,null,(0),(0),(1));
editscript.diff.a_star.add_child(parent,node);

var G__16491_16764 = type;
var G__16491_16765__$1 = (((G__16491_16764 instanceof cljs.core.Keyword))?G__16491_16764.fqn:null);
switch (G__16491_16765__$1) {
case "map":
case "vec":
editscript.diff.a_star.associative_children(order,path,data,node);

break;
case "set":
editscript.diff.a_star.set_children(order,path,data,node);

break;
case "lst":
editscript.diff.a_star.list_children(order,path,data,node);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16491_16765__$1)].join('')));

}

var cs_16768 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(editscript.diff.a_star.get_size,cljs.core.vals(node.editscript$diff$a_star$INode$get_children$arity$1(null, ))));
var size_16769 = (node.editscript$diff$a_star$INode$get_size$arity$1(null, ) + cs_16768);
var G__16492_16770 = node;
G__16492_16770.editscript$diff$a_star$INode$set_order$arity$2(null, cljs.core.deref(order));

G__16492_16770.editscript$diff$a_star$INode$set_size$arity$2(null, size_16769);


editscript.diff.a_star.inc_order(order,size_16769);

return node;
});
editscript.diff.a_star.index_value = (function editscript$diff$a_star$index_value(order,path,data,parent){
var node = editscript.diff.a_star.__GT_Node(path,data,parent,null,null,null,null,(0),cljs.core.deref(order),(1));
editscript.diff.a_star.add_child(parent,node);

editscript.diff.a_star.inc_order(order,(1));

return node;
});
editscript.diff.a_star.index_STAR_ = (function editscript$diff$a_star$index_STAR_(order,path,data,parent){
var type = editscript.edit.get_type(data);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"val","val",128701612))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"str","str",1089608819))))){
return editscript.diff.a_star.index_value(order,path,data,parent);
} else {
return editscript.diff.a_star.index_collection(type,order,path,data,parent);
}
});
/**
 * Traverse data to build an indexing tree of Nodes,
 *   compute path, sizes of sub-trees, siblings, etc. for each Node.
 *   This takes little time
 */
editscript.diff.a_star.index = (function editscript$diff$a_star$index(data){
var order = cljs.core.volatile_BANG_((0));
return editscript.diff.a_star.index_STAR_(order,cljs.core.PersistentVector.EMPTY,data,editscript.diff.a_star.__GT_Node(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("editscript.diff.a-star","dummy","editscript.diff.a-star/dummy",978832816),null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,(0),(-1),(0)));
});
editscript.diff.a_star.coord_hash = (function editscript$diff$a_star$coord_hash(a,b){
return editscript.util.common.szudzik(editscript.diff.a_star.get_order(a),editscript.diff.a_star.get_order(b));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IComparable}
*/
editscript.diff.a_star.Coord = (function (a,b){
this.a = a;
this.b = b;
this.cljs$lang$protocol_mask$partition0$ = 6291456;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(editscript.diff.a_star.Coord.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return editscript.diff.a_star.coord_hash(self__.a,self__.b);
}));

(editscript.diff.a_star.Coord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.a.editscript$diff$a_star$INode$get_order$arity$1(null, ),editscript.diff.a_star.get_order(that.a))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.b.editscript$diff$a_star$INode$get_order$arity$1(null, ),editscript.diff.a_star.get_order(that.b))));
}));

(editscript.diff.a_star.Coord.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (this$__$1.cljs$core$IHash$_hash$arity$1(null, ) - cljs.core._hash(that));
}));

(editscript.diff.a_star.Coord.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null))], null);
}));

(editscript.diff.a_star.Coord.cljs$lang$type = true);

(editscript.diff.a_star.Coord.cljs$lang$ctorStr = "editscript.diff.a-star/Coord");

(editscript.diff.a_star.Coord.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"editscript.diff.a-star/Coord");
}));

/**
 * Positional factory function for editscript.diff.a-star/Coord.
 */
editscript.diff.a_star.__GT_Coord = (function editscript$diff$a_star$__GT_Coord(a,b){
return (new editscript.diff.a_star.Coord(a,b));
});

editscript.diff.a_star.get_coord = (function editscript$diff$a_star$get_coord(coord){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord.a,coord.b], null);
});

/**
 * @interface
 */
editscript.diff.a_star.IStep = function(){};

var editscript$diff$a_star$IStep$operator$dyn_16775 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.operator[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.operator["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IStep.operator",this$);
}
}
});
/**
 * Operator to try
 */
editscript.diff.a_star.operator = (function editscript$diff$a_star$operator(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IStep$operator$arity$1 == null)))))){
return this$.editscript$diff$a_star$IStep$operator$arity$1(this$);
} else {
return editscript$diff$a_star$IStep$operator$dyn_16775(this$);
}
});

var editscript$diff$a_star$IStep$current$dyn_16776 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.current[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.current["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IStep.current",this$);
}
}
});
/**
 * Starting pair of nodes
 */
editscript.diff.a_star.current = (function editscript$diff$a_star$current(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IStep$current$arity$1 == null)))))){
return this$.editscript$diff$a_star$IStep$current$arity$1(this$);
} else {
return editscript$diff$a_star$IStep$current$dyn_16776(this$);
}
});

var editscript$diff$a_star$IStep$neighbor$dyn_16777 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.neighbor[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.neighbor["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IStep.neighbor",this$);
}
}
});
/**
 * Destination pair of nodes
 */
editscript.diff.a_star.neighbor = (function editscript$diff$a_star$neighbor(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IStep$neighbor$arity$1 == null)))))){
return this$.editscript$diff$a_star$IStep$neighbor$arity$1(this$);
} else {
return editscript$diff$a_star$IStep$neighbor$dyn_16777(this$);
}
});


/**
* @constructor
 * @implements {editscript.diff.a_star.IStep}
*/
editscript.diff.a_star.Step = (function (op,cur,nbr){
this.op = op;
this.cur = cur;
this.nbr = nbr;
});
(editscript.diff.a_star.Step.prototype.editscript$diff$a_star$IStep$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.diff.a_star.Step.prototype.editscript$diff$a_star$IStep$operator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.op;
}));

(editscript.diff.a_star.Step.prototype.editscript$diff$a_star$IStep$current$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cur;
}));

(editscript.diff.a_star.Step.prototype.editscript$diff$a_star$IStep$neighbor$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.nbr;
}));

(editscript.diff.a_star.Step.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Coord","Coord",462878922,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nbr","nbr",-1618248259,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Coord","Coord",462878922,null)], null))], null);
}));

(editscript.diff.a_star.Step.cljs$lang$type = true);

(editscript.diff.a_star.Step.cljs$lang$ctorStr = "editscript.diff.a-star/Step");

(editscript.diff.a_star.Step.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"editscript.diff.a-star/Step");
}));

/**
 * Positional factory function for editscript.diff.a-star/Step.
 */
editscript.diff.a_star.__GT_Step = (function editscript$diff$a_star$__GT_Step(op,cur,nbr){
return (new editscript.diff.a_star.Step(op,cur,nbr));
});

editscript.diff.a_star.get_step = (function editscript$diff$a_star$get_step(step){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(editscript.diff.a_star.operator,editscript.diff.a_star.current,editscript.diff.a_star.neighbor)(step);
});

/**
 * @interface
 */
editscript.diff.a_star.IState = function(){};

var editscript$diff$a_star$IState$get_came$dyn_16780 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_came[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_came["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IState.get-came",this$);
}
}
});
/**
 * Get the local succession map
 */
editscript.diff.a_star.get_came = (function editscript$diff$a_star$get_came(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IState$get_came$arity$1 == null)))))){
return this$.editscript$diff$a_star$IState$get_came$arity$1(this$);
} else {
return editscript$diff$a_star$IState$get_came$dyn_16780(this$);
}
});

var editscript$diff$a_star$IState$set_came$dyn_16781 = (function (this$,came){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.set_came[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,came) : m__5351__auto__.call(null, this$,came));
} else {
var m__5349__auto__ = (editscript.diff.a_star.set_came["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,came) : m__5349__auto__.call(null, this$,came));
} else {
throw cljs.core.missing_protocol("IState.set-came",this$);
}
}
});
/**
 * Set the local succession map
 */
editscript.diff.a_star.set_came = (function editscript$diff$a_star$set_came(this$,came){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IState$set_came$arity$2 == null)))))){
return this$.editscript$diff$a_star$IState$set_came$arity$2(this$,came);
} else {
return editscript$diff$a_star$IState$set_came$dyn_16781(this$,came);
}
});

var editscript$diff$a_star$IState$get_open$dyn_16782 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_open[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_open["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IState.get-open",this$);
}
}
});
/**
 * Get the open priority queue
 */
editscript.diff.a_star.get_open = (function editscript$diff$a_star$get_open(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IState$get_open$arity$1 == null)))))){
return this$.editscript$diff$a_star$IState$get_open$arity$1(this$);
} else {
return editscript$diff$a_star$IState$get_open$dyn_16782(this$);
}
});

var editscript$diff$a_star$IState$set_open$dyn_16783 = (function (this$,open){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.set_open[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,open) : m__5351__auto__.call(null, this$,open));
} else {
var m__5349__auto__ = (editscript.diff.a_star.set_open["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,open) : m__5349__auto__.call(null, this$,open));
} else {
throw cljs.core.missing_protocol("IState.set-open",this$);
}
}
});
/**
 * Set the open priority queue
 */
editscript.diff.a_star.set_open = (function editscript$diff$a_star$set_open(this$,open){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IState$set_open$arity$2 == null)))))){
return this$.editscript$diff$a_star$IState$set_open$arity$2(this$,open);
} else {
return editscript$diff$a_star$IState$set_open$dyn_16783(this$,open);
}
});

var editscript$diff$a_star$IState$get_g$dyn_16785 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.get_g[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.diff.a_star.get_g["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IState.get-g",this$);
}
}
});
/**
 * Get the g cost map
 */
editscript.diff.a_star.get_g = (function editscript$diff$a_star$get_g(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IState$get_g$arity$1 == null)))))){
return this$.editscript$diff$a_star$IState$get_g$arity$1(this$);
} else {
return editscript$diff$a_star$IState$get_g$dyn_16785(this$);
}
});

var editscript$diff$a_star$IState$set_g$dyn_16790 = (function (this$,g){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.diff.a_star.set_g[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,g) : m__5351__auto__.call(null, this$,g));
} else {
var m__5349__auto__ = (editscript.diff.a_star.set_g["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,g) : m__5349__auto__.call(null, this$,g));
} else {
throw cljs.core.missing_protocol("IState.set-g",this$);
}
}
});
/**
 * Set the g cost map
 */
editscript.diff.a_star.set_g = (function editscript$diff$a_star$set_g(this$,g){
if((((!((this$ == null)))) && ((!((this$.editscript$diff$a_star$IState$set_g$arity$2 == null)))))){
return this$.editscript$diff$a_star$IState$set_g$arity$2(this$,g);
} else {
return editscript$diff$a_star$IState$set_g$dyn_16790(this$,g);
}
});


/**
* @constructor
 * @implements {editscript.diff.a_star.IState}
*/
editscript.diff.a_star.State = (function (came,open,g){
this.came = came;
this.open = open;
this.g = g;
});
(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$get_came$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.came;
}));

(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$set_came$arity$2 = (function (this$,c){
var self__ = this;
var this$__$1 = this;
(self__.came = c);

return this$__$1;
}));

(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$get_open$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.open;
}));

(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$set_open$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
(self__.open = o);

return this$__$1;
}));

(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$get_g$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
}));

(editscript.diff.a_star.State.prototype.editscript$diff$a_star$IState$set_g$arity$2 = (function (this$,got){
var self__ = this;
var this$__$1 = this;
(self__.g = got);

return this$__$1;
}));

(editscript.diff.a_star.State.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"came","came",-1609486569,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"open","open",-123064921,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.diff.a_star.State.cljs$lang$type = true);

(editscript.diff.a_star.State.cljs$lang$ctorStr = "editscript.diff.a-star/State");

(editscript.diff.a_star.State.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"editscript.diff.a-star/State");
}));

/**
 * Positional factory function for editscript.diff.a-star/State.
 */
editscript.diff.a_star.__GT_State = (function editscript$diff$a_star$__GT_State(came,open,g){
return (new editscript.diff.a_star.State(came,open,g));
});

editscript.diff.a_star.get_state = (function editscript$diff$a_star$get_state(state){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(editscript.diff.a_star.get_came,editscript.diff.a_star.get_open,editscript.diff.a_star.get_g)(state);
});
editscript.diff.a_star.access_g = (function editscript$diff$a_star$access_g(g,cur){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(g,cur,editscript.diff.a_star.goog$module$goog$math$Long.getMaxValue());
});
editscript.diff.a_star.compute_cost = (function editscript$diff$a_star$compute_cost(cur,came,g,op,opts){
var gc = editscript.diff.a_star.access_g(g,cur);
var G__16532 = op;
var G__16532__$1 = (((G__16532 instanceof cljs.core.Keyword))?G__16532.fqn:null);
switch (G__16532__$1) {
case "=":
return gc;

break;
case "-":
return (gc + (1));

break;
case "a":
case "i":
var sb = editscript.diff.a_star.get_size(cur.b);
return (gc + (sb + (1)));

break;
case "r":
return (gc + (function (){var G__16533 = cur.a;
var G__16534 = cur.b;
var G__16535 = came;
var G__16536 = opts;
return (editscript.diff.a_star.diff_STAR_.cljs$core$IFn$_invoke$arity$4 ? editscript.diff.a_star.diff_STAR_.cljs$core$IFn$_invoke$arity$4(G__16533,G__16534,G__16535,G__16536) : editscript.diff.a_star.diff_STAR_.call(null, G__16533,G__16534,G__16535,G__16536));
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16532__$1)].join('')));

}
});
/**
 * A simplistic but optimistic estimate of the cost to reach goal when at (x y).
 * 
 *   For nested structure, multiple deletion may be merged into one.
 *   Also, because addition/replacement requires new value to be present in
 *   editscript, whereas deletion does not, we assign estimate differently. 
 */
editscript.diff.a_star.heuristic = (function editscript$diff$a_star$heuristic(type,cur,end,p__16539){
var vec__16540 = p__16539;
var gx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16540,(0),null);
var gy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16540,(1),null);
var G__16543 = type;
var G__16543__$1 = (((G__16543 instanceof cljs.core.Keyword))?G__16543.fqn:null);
switch (G__16543__$1) {
case "map":
case "set":
return (0);

break;
case "vec":
case "lst":
var vec__16544 = editscript.diff.a_star.get_coord(cur);
var na = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16544,(0),null);
var nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16544,(1),null);
var vec__16547 = editscript.diff.a_star.get_coord(end);
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16547,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16547,(1),null);
var x = (((ra === na))?gx:editscript.diff.a_star.get_order(na));
var y = (((rb === nb))?gy:editscript.diff.a_star.get_order(nb));
var dy = (gy - y);
var dx = (gx - x);
if((dx === (0))){
return dy;
} else {
if((dy === (0))){
return (1);
} else {
if((dx > dy)){
return (3);
} else {
if((dx < dy)){
return (dy - dx);
} else {
return (2);

}
}
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16543__$1)].join('')));

}
});
editscript.diff.a_star.explore = (function editscript$diff$a_star$explore(type,end,came,goal,state,step,opts){
var vec__16554 = editscript.diff.a_star.get_state(state);
var came_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16554,(0),null);
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16554,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16554,(2),null);
var vec__16557 = editscript.diff.a_star.get_step(step);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16557,(0),null);
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16557,(1),null);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16557,(2),null);
var tmp_g = editscript.diff.a_star.compute_cost(cur,came,g,op,opts);
if((tmp_g >= editscript.diff.a_star.access_g(g,nbr))){
return state;
} else {
var G__16562 = state;
editscript.diff.a_star.set_came(G__16562,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(came_SINGLEQUOTE_,nbr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,op], null)));

editscript.diff.a_star.set_open(G__16562,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(open,nbr,(tmp_g + editscript.diff.a_star.heuristic(type,nbr,end,goal))));

editscript.diff.a_star.set_g(G__16562,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(g,nbr,tmp_g));

return G__16562;
}
});
editscript.diff.a_star.next_node = (function editscript$diff$a_star$next_node(na,ra){
var or__5002__auto__ = editscript.diff.a_star.get_next(na);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ra;
}
});
editscript.diff.a_star.vec_frontier = (function editscript$diff$a_star$vec_frontier(end,cur){
var vec__16564 = editscript.diff.a_star.get_coord(end);
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16564,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16564,(1),null);
var vec__16567 = editscript.diff.a_star.get_coord(cur);
var na = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16567,(0),null);
var nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16567,(1),null);
var a_EQ_b = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.diff.a_star.get_value(na),editscript.diff.a_star.get_value(nb));
var x_EQ_gx = (na === ra);
var x_LT_gx = (!(x_EQ_gx));
var y_LT_gy = (!((nb === rb)));
var na_SINGLEQUOTE_ = editscript.diff.a_star.next_node(na,ra);
var nb_SINGLEQUOTE_ = editscript.diff.a_star.next_node(nb,rb);
if(((x_LT_gx) && (((y_LT_gy) && (a_EQ_b))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"=","=",1152933628),cur,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb_SINGLEQUOTE_))], null);
} else {
var G__16573 = cljs.core.PersistentVector.EMPTY;
var G__16573__$1 = ((x_LT_gx)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16573,editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"-","-",-2112348439),cur,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb))):G__16573);
var G__16573__$2 = ((((x_LT_gx) && (y_LT_gy)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16573__$1,editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"r","r",-471384190),cur,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb_SINGLEQUOTE_))):G__16573__$1);
var G__16573__$3 = ((((x_EQ_gx) && (y_LT_gy)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16573__$2,editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"a","a",-2123407586),cur,editscript.diff.a_star.__GT_Coord(na,nb_SINGLEQUOTE_))):G__16573__$2);
if(((x_LT_gx) && (y_LT_gy))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16573__$3,editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"i","i",-1386841315),cur,editscript.diff.a_star.__GT_Coord(na,nb_SINGLEQUOTE_)));
} else {
return G__16573__$3;
}
}
});
editscript.diff.a_star.map_frontier = (function editscript$diff$a_star$map_frontier(init,end,cur){
var vec__16579 = editscript.diff.a_star.get_coord(end);
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(1),null);
var vec__16582 = editscript.diff.a_star.get_coord(cur);
var na = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(0),null);
var nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(1),null);
var ka = editscript.diff.a_star.get_key(na);
var kb = editscript.diff.a_star.get_key(nb);
if((na === ra)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editscript.diff.a_star.__GT_Step(((cljs.core.contains_QMARK_(editscript.diff.a_star.get_value(ra),kb))?new cljs.core.Keyword(null,"=","=",1152933628):new cljs.core.Keyword(null,"a","a",-2123407586)),cur,editscript.diff.a_star.__GT_Coord(ra,editscript.diff.a_star.next_node(nb,rb)))], null);
} else {
var va = editscript.diff.a_star.get_value(na);
var vb = editscript.diff.a_star.get_value(nb);
var mb = editscript.diff.a_star.get_value(rb);
var na_SINGLEQUOTE_ = editscript.diff.a_star.next_node(na,ra);
var cb = editscript.diff.a_star.get_children(rb);
if((na_SINGLEQUOTE_ === ra)){
var startb = editscript.diff.a_star.__GT_Coord(ra,init.b);
var enda = editscript.diff.a_star.__GT_Coord(na,(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(ka) : cb.call(null, ka)));
if(cljs.core.contains_QMARK_(mb,ka)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ka,kb)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editscript.diff.a_star.__GT_Step(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(va,vb))?new cljs.core.Keyword(null,"=","=",1152933628):new cljs.core.Keyword(null,"r","r",-471384190)),cur,startb)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"=","=",1152933628),cur,enda),editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"r","r",-471384190),enda,startb)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"-","-",-2112348439),cur,startb)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(mb,ka))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ka,kb))?editscript.diff.a_star.__GT_Step(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(va,vb))?new cljs.core.Keyword(null,"=","=",1152933628):new cljs.core.Keyword(null,"r","r",-471384190)),cur,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,(function (){var or__5002__auto__ = (function (){var G__16588 = editscript.diff.a_star.get_key(na_SINGLEQUOTE_);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__16588) : cb.call(null, G__16588));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return nb;
}
})())):editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"=","=",1152933628),cur,editscript.diff.a_star.__GT_Coord(na,(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(ka) : cb.call(null, ka))))):editscript.diff.a_star.__GT_Step(new cljs.core.Keyword(null,"-","-",-2112348439),cur,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb)))], null);
}
}
});
editscript.diff.a_star.frontier = (function editscript$diff$a_star$frontier(type,init,end,cur){
var G__16589 = type;
var G__16589__$1 = (((G__16589 instanceof cljs.core.Keyword))?G__16589.fqn:null);
switch (G__16589__$1) {
case "vec":
case "lst":
return editscript.diff.a_star.vec_frontier(end,cur);

break;
case "map":
case "set":
return editscript.diff.a_star.map_frontier(init,end,cur);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16589__$1)].join('')));

}
});
editscript.diff.a_star.A_STAR_ = (function editscript$diff$a_star$A_STAR_(type,ra,rb,came,opts){
var end = editscript.diff.a_star.__GT_Coord(ra,rb);
var init = editscript.diff.a_star.__GT_Coord(editscript.diff.a_star.get_first(ra),editscript.diff.a_star.get_first(rb));
var goal = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [editscript.diff.a_star.get_order(ra),editscript.diff.a_star.get_order(rb)], null);
var state = editscript.diff.a_star.__GT_State(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),editscript.util.pairing.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init,editscript.diff.a_star.heuristic(type,init,end,goal)], 0)),cljs.core.transient$(cljs.core.PersistentArrayMap.createAsIfByAssoc([init,(0)])));
while(true){
var vec__16600 = editscript.diff.a_star.get_state(state);
var came_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16600,(0),null);
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16600,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16600,(2),null);
if(cljs.core.empty_QMARK_(open)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("A* diff fails to find a solution",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ra","ra",-382035026),ra,new cljs.core.Keyword(null,"rb","rb",1673817808),rb], null));
} else {
var vec__16603 = cljs.core.peek(open);
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16603,(0),null);
var cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16603,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur,end)){
cljs.core._vreset_BANG_(came,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(came),end,cljs.core.persistent_BANG_(came_SINGLEQUOTE_)));

return cost;
} else {
var G__16811 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state,vec__16603,cur,cost,vec__16600,came_SINGLEQUOTE_,open,_,end,init,goal){
return (function (p1__16590_SHARP_,p2__16591_SHARP_){
return editscript.diff.a_star.explore(type,end,came,goal,p1__16590_SHARP_,p2__16591_SHARP_,opts);
});})(state,vec__16603,cur,cost,vec__16600,came_SINGLEQUOTE_,open,_,end,init,goal))
,editscript.diff.a_star.set_open(state,cljs.core.pop(open)),editscript.diff.a_star.frontier(type,init,end,cur));
state = G__16811;
continue;
}
}
break;
}
});
editscript.diff.a_star.vec_fn = (function editscript$diff$a_star$vec_fn(node){
var v = editscript.diff.a_star.get_value(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec","vec",-657847931),editscript.edit.get_type(v))){
return v;
} else {
return cljs.core.vec(v);
}
});
editscript.diff.a_star.use_quick = (function editscript$diff$a_star$use_quick(ra,rb,came,opts){
var edits = editscript.util.common.vec_edits(editscript.diff.a_star.vec_fn(ra),editscript.diff.a_star.vec_fn(rb),opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return edits;
} else {
var G__16609 = edits;
var vec__16610 = G__16609;
var seq__16611 = cljs.core.seq(vec__16610);
var first__16612 = cljs.core.first(seq__16611);
var seq__16611__$1 = cljs.core.next(seq__16611);
var op = first__16612;
var ops = seq__16611__$1;
var na = editscript.diff.a_star.get_first(ra);
var nb = editscript.diff.a_star.get_first(rb);
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var cost = (0);
var G__16609__$1 = G__16609;
var na__$1 = na;
var nb__$1 = nb;
var m__$1 = m;
var cost__$1 = cost;
while(true){
var vec__16617 = G__16609__$1;
var seq__16618 = cljs.core.seq(vec__16617);
var first__16619 = cljs.core.first(seq__16618);
var seq__16618__$1 = cljs.core.next(seq__16618);
var op__$1 = first__16619;
var ops__$1 = seq__16618__$1;
var na__$2 = na__$1;
var nb__$2 = nb__$1;
var m__$2 = m__$1;
var cost__$2 = cost__$1;
if(cljs.core.truth_(op__$1)){
var na_SINGLEQUOTE_ = editscript.diff.a_star.next_node(na__$2,ra);
var nb_SINGLEQUOTE_ = editscript.diff.a_star.next_node(nb__$2,rb);
var cur = editscript.diff.a_star.__GT_Coord(na__$2,nb__$2);
var sb = editscript.diff.a_star.get_size(nb__$2);
if(cljs.core.integer_QMARK_(op__$1)){
var G__16812 = (((op__$1 > (1)))?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(op__$1 - (1)),null,(1),null)),ops__$1)))):ops__$1);
var G__16813 = na_SINGLEQUOTE_;
var G__16814 = nb_SINGLEQUOTE_;
var G__16815 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$2,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,new cljs.core.Keyword(null,"=","=",1152933628)], null));
var G__16816 = cljs.core.long$(cost__$2);
G__16609__$1 = G__16812;
na__$1 = G__16813;
nb__$1 = G__16814;
m__$1 = G__16815;
cost__$1 = G__16816;
continue;
} else {
var G__16623 = op__$1;
var G__16623__$1 = (((G__16623 instanceof cljs.core.Keyword))?G__16623.fqn:null);
switch (G__16623__$1) {
case "-":
var G__16818 = ops__$1;
var G__16819 = na_SINGLEQUOTE_;
var G__16820 = nb__$2;
var G__16821 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$2,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb__$2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,op__$1], null));
var G__16822 = (cljs.core.long$(cost__$2) + (1));
G__16609__$1 = G__16818;
na__$1 = G__16819;
nb__$1 = G__16820;
m__$1 = G__16821;
cost__$1 = G__16822;
continue;

break;
case "+":
var G__16823 = ops__$1;
var G__16824 = na__$2;
var G__16825 = nb_SINGLEQUOTE_;
var G__16826 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$2,editscript.diff.a_star.__GT_Coord(na__$2,nb_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,(((na__$2 === ra))?new cljs.core.Keyword(null,"a","a",-2123407586):new cljs.core.Keyword(null,"i","i",-1386841315))], null));
var G__16827 = ((cljs.core.long$(cost__$2) + (1)) + cljs.core.long$(sb));
G__16609__$1 = G__16823;
na__$1 = G__16824;
nb__$1 = G__16825;
m__$1 = G__16826;
cost__$1 = G__16827;
continue;

break;
case "r":
var G__16828 = ops__$1;
var G__16829 = na_SINGLEQUOTE_;
var G__16830 = nb_SINGLEQUOTE_;
var G__16831 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$2,editscript.diff.a_star.__GT_Coord(na_SINGLEQUOTE_,nb_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,op__$1], null));
var G__16832 = ((cljs.core.long$(cost__$2) + (1)) + cljs.core.long$(sb));
G__16609__$1 = G__16828;
na__$1 = G__16829;
nb__$1 = G__16830;
m__$1 = G__16831;
cost__$1 = G__16832;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16623__$1)].join('')));

}
}
} else {
var root = editscript.diff.a_star.__GT_Coord(ra,rb);
cljs.core._vreset_BANG_(came,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(came),root,cljs.core.persistent_BANG_(m__$2)));

return cost__$2;
}
break;
}
}
});
editscript.diff.a_star.diff_STAR_ = (function editscript$diff$a_star$diff_STAR_(ra,rb,came,opts){
var sa = editscript.diff.a_star.get_size(ra);
var sb = editscript.diff.a_star.get_size(rb);
var va = editscript.diff.a_star.get_value(ra);
var vb = editscript.diff.a_star.get_value(rb);
var typea = editscript.edit.get_type(va);
var update = (function (){
return cljs.core._vreset_BANG_(came,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(came),editscript.diff.a_star.__GT_Coord(ra,rb),cljs.core.PersistentArrayMap.EMPTY));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((1),sa,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sb], 0))){
update();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(va,vb)){
return (0);
} else {
return (2);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sa)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sb)))){
update();

return (sb + (1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typea,editscript.edit.get_type(vb))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(va,vb)){
update();

return (0);
} else {
var r = (sb + (1));
var a = (cljs.core.truth_((function (){var and__5000__auto__ = (function (){var fexpr__16627 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null], null), null);
return (fexpr__16627.cljs$core$IFn$_invoke$arity$1 ? fexpr__16627.cljs$core$IFn$_invoke$arity$1(typea) : fexpr__16627.call(null, typea));
})();
if(cljs.core.truth_(and__5000__auto__)){
var cc_PLUS_1 = (function (p1__16626_SHARP_){
return (cljs.core.count(editscript.diff.a_star.get_children(p1__16626_SHARP_)) + (1));
});
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sa,cc_PLUS_1(ra))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sb,cc_PLUS_1(rb))));
} else {
return and__5000__auto__;
}
})())?(function (){var res = editscript.diff.a_star.use_quick(ra,rb,came,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return (r + (1));
} else {
return res;
}
})():editscript.diff.a_star.A_STAR_(typea,ra,rb,came,opts));
if((r < a)){
update();

return r;
} else {
return a;
}
}
} else {
update();

return (sb + (1));

}
}
}
});
editscript.diff.a_star.index_key_QMARK_ = (function editscript$diff$a_star$index_key_QMARK_(node){
var G__16631 = editscript.edit.get_type(editscript.diff.a_star.get_value(node));
var fexpr__16630 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null], null), null);
return (fexpr__16630.cljs$core$IFn$_invoke$arity$1 ? fexpr__16630.cljs$core$IFn$_invoke$arity$1(G__16631) : fexpr__16630.call(null, G__16631));
});
editscript.diff.a_star.adjust_delete_insert = (function editscript$diff$a_star$adjust_delete_insert(trie,op,root,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"=","=",1152933628))){
return path;
} else {
var newp = cljs.core.PersistentVector.EMPTY;
var prev = cljs.core.PersistentVector.EMPTY;
var node = root;
var left = path;
while(true){
if(cljs.core.seq(left)){
var vec__16648 = left;
var seq__16649 = cljs.core.seq(vec__16648);
var first__16650 = cljs.core.first(seq__16649);
var seq__16649__$1 = cljs.core.next(seq__16649);
var k = first__16650;
var ks = seq__16649__$1;
var d = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(trie),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"delta","delta",108939957)),(0));
var G__16839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(newp,(cljs.core.truth_(editscript.diff.a_star.index_key_QMARK_(node))?(k + d):k));
var G__16840 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev,k);
var G__16841 = (function (){var fexpr__16652 = editscript.diff.a_star.get_children(node);
return (fexpr__16652.cljs$core$IFn$_invoke$arity$1 ? fexpr__16652.cljs$core$IFn$_invoke$arity$1(k) : fexpr__16652.call(null, k));
})();
var G__16842 = ks;
newp = G__16839;
prev = G__16840;
node = G__16841;
left = G__16842;
continue;
} else {
if(cljs.core.truth_(editscript.diff.a_star.index_key_QMARK_(editscript.diff.a_star.get_parent(node)))){
var seen = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(path))?cljs.core.pop(path):path),new cljs.core.Keyword(null,"delta","delta",108939957));
var d = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(trie),seen,(0));
cljs.core._vreset_BANG_(trie,cljs.core.assoc_in(cljs.core._deref(trie),seen,(function (){var G__16653 = op;
var G__16653__$1 = (((G__16653 instanceof cljs.core.Keyword))?G__16653.fqn:null);
switch (G__16653__$1) {
case "-":
return (d - (1));

break;
case "i":
return (d + (1));

break;
default:
return d;

}
})()));

return newp;
} else {
return newp;
}
}
break;
}
}
});
editscript.diff.a_star.adjust_append = (function editscript$diff$a_star$adjust_append(trie,op,na,nb,path,path_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"a","a",-2123407586))){
if(cljs.core.truth_(editscript.diff.a_star.index_key_QMARK_(na))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,(function (){var seen = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"delta","delta",108939957));
var d = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(trie),seen,(0));
cljs.core._vreset_BANG_(trie,cljs.core.assoc_in(cljs.core._deref(trie),seen,(d + (1))));

return (d + cljs.core.count(editscript.diff.a_star.get_children(na)));
})());
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,editscript.diff.a_star.get_key(nb));
}
} else {
return path_SINGLEQUOTE_;
}
});
editscript.diff.a_star.convert_path = (function editscript$diff$a_star$convert_path(trie,op,roota,na,nb,path){
return editscript.diff.a_star.adjust_append(trie,op,na,nb,path,editscript.diff.a_star.adjust_delete_insert(trie,op,roota,path));
});
editscript.diff.a_star.write_script = (function editscript$diff$a_star$write_script(steps,roota,script,p__16656){
var map__16657 = p__16656;
var map__16657__$1 = cljs.core.__destructure_map(map__16657);
var opts = map__16657__$1;
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16657__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),new cljs.core.Keyword(null,"none","none",1333468478));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (trie,p__16660){
var vec__16661 = p__16660;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16661,(0),null);
var na = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16661,(1),null);
var nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16661,(2),null);
var path = editscript.diff.a_star.convert_path(trie,op,roota,na,nb,editscript.diff.a_star.get_path(na));
var va = editscript.diff.a_star.get_value(na);
var vb = editscript.diff.a_star.get_value(nb);
var G__16664_16850 = op;
var G__16664_16851__$1 = (((G__16664_16850 instanceof cljs.core.Keyword))?G__16664_16850.fqn:null);
switch (G__16664_16851__$1) {
case "-":
editscript.edit.delete_data(script,path);

break;
case "r":
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"str","str",1089608819),editscript.edit.get_type(va),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([editscript.edit.get_type(vb)], 0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(str_diff,new cljs.core.Keyword(null,"none","none",1333468478))))){
editscript.util.common.diff_str(script,path,va,vb,opts);
} else {
editscript.edit.replace_data(script,path,vb);
}

break;
case "a":
case "i":
editscript.edit.add_data(script,path,vb);

break;
default:

}

return trie;
}),cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delta","delta",108939957),(0)], null)),steps);
});
editscript.diff.a_star.trace_STAR_ = (function editscript$diff$a_star$trace_STAR_(came,cur,steps){
var temp__5802__auto__ = (came.cljs$core$IFn$_invoke$arity$1 ? came.cljs$core$IFn$_invoke$arity$1(cur) : came.call(null, cur));
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.seq(m)){
var v = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(cur) : m.call(null, cur));
while(true){
if(cljs.core.truth_(v)){
var vec__16665 = v;
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(1),null);
var vec__16668 = editscript.diff.a_star.get_coord(prev);
var na = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16668,(0),null);
var nb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16668,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = (came.cljs$core$IFn$_invoke$arity$1 ? came.cljs$core$IFn$_invoke$arity$1(prev) : came.call(null, prev));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"r","r",-471384190));
} else {
return and__5000__auto__;
}
})())){
(editscript.diff.a_star.trace_STAR_.cljs$core$IFn$_invoke$arity$3 ? editscript.diff.a_star.trace_STAR_.cljs$core$IFn$_invoke$arity$3(came,prev,steps) : editscript.diff.a_star.trace_STAR_.call(null, came,prev,steps));
} else {
cljs.core._vreset_BANG_(steps,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(steps),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,na,nb], null)));
}

var G__16853 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(prev) : m.call(null, prev));
v = G__16853;
continue;
} else {
return steps;
}
break;
}
} else {
var vec__16671 = editscript.diff.a_star.get_coord(cur);
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(1),null);
cljs.core._vreset_BANG_(steps,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(steps),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.diff.a_star.get_value(ra),editscript.diff.a_star.get_value(rb)))?new cljs.core.Keyword(null,"=","=",1152933628):new cljs.core.Keyword(null,"r","r",-471384190)),ra,rb], null)));

return steps;
}
} else {
return steps;
}
});
editscript.diff.a_star.trace = (function editscript$diff$a_star$trace(var_args){
var G__16683 = arguments.length;
switch (G__16683) {
case 2:
return editscript.diff.a_star.trace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return editscript.diff.a_star.trace.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.a_star.trace.cljs$core$IFn$_invoke$arity$2 = (function (came,cur){
return cljs.core.deref(editscript.diff.a_star.trace_STAR_(came,cur,cljs.core.volatile_BANG_(cljs.core.List.EMPTY)));
}));

(editscript.diff.a_star.trace.cljs$core$IFn$_invoke$arity$4 = (function (came,cur,script,opts){
return editscript.diff.a_star.write_script(editscript.diff.a_star.trace.cljs$core$IFn$_invoke$arity$2(came,cur),cur.a,script,opts);
}));

(editscript.diff.a_star.trace.cljs$lang$maxFixedArity = 4);

/**
 * Create an EditScript that represents the minimal difference between `b` and `a`
 */
editscript.diff.a_star.diff = (function editscript$diff$a_star$diff(var_args){
var G__16685 = arguments.length;
switch (G__16685) {
case 2:
return editscript.diff.a_star.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.a_star.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.a_star.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.a_star.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.diff.a_star.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
} else {
var roota_16857 = editscript.diff.a_star.index(a);
var rootb_16858 = editscript.diff.a_star.index(b);
var came_16859 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var cost_16860 = editscript.diff.a_star.diff_STAR_(roota_16857,rootb_16858,came_16859,opts);
editscript.diff.a_star.trace.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(came_16859),editscript.diff.a_star.__GT_Coord(roota_16857,rootb_16858),script,opts);

}

return script;
}));

(editscript.diff.a_star.diff.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=editscript.diff.a_star.js.map
