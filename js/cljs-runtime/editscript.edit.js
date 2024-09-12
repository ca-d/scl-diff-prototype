import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('editscript.edit');

/**
 * @interface
 */
editscript.edit.IEdit = function(){};

var editscript$edit$IEdit$auto_sizing$dyn_12970 = (function (this$,path,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.auto_sizing[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5351__auto__.call(null, this$,path,value));
} else {
var m__5349__auto__ = (editscript.edit.auto_sizing["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5349__auto__.call(null, this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.auto-sizing",this$);
}
}
});
editscript.edit.auto_sizing = (function editscript$edit$auto_sizing(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$auto_sizing$arity$3 == null)))))){
return this$.editscript$edit$IEdit$auto_sizing$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$auto_sizing$dyn_12970(this$,path,value);
}
});

var editscript$edit$IEdit$add_data$dyn_12977 = (function (this$,path,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.add_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5351__auto__.call(null, this$,path,value));
} else {
var m__5349__auto__ = (editscript.edit.add_data["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5349__auto__.call(null, this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.add-data",this$);
}
}
});
editscript.edit.add_data = (function editscript$edit$add_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$add_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$add_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$add_data$dyn_12977(this$,path,value);
}
});

var editscript$edit$IEdit$delete_data$dyn_12986 = (function (this$,path){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.delete_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5351__auto__.call(null, this$,path));
} else {
var m__5349__auto__ = (editscript.edit.delete_data["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5349__auto__.call(null, this$,path));
} else {
throw cljs.core.missing_protocol("IEdit.delete-data",this$);
}
}
});
editscript.edit.delete_data = (function editscript$edit$delete_data(this$,path){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$delete_data$arity$2 == null)))))){
return this$.editscript$edit$IEdit$delete_data$arity$2(this$,path);
} else {
return editscript$edit$IEdit$delete_data$dyn_12986(this$,path);
}
});

var editscript$edit$IEdit$replace_data$dyn_12992 = (function (this$,path,value){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.replace_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5351__auto__.call(null, this$,path,value));
} else {
var m__5349__auto__ = (editscript.edit.replace_data["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5349__auto__.call(null, this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.replace-data",this$);
}
}
});
editscript.edit.replace_data = (function editscript$edit$replace_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$replace_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$replace_data$dyn_12992(this$,path,value);
}
});

var editscript$edit$IEdit$replace_str$dyn_12999 = (function (this$,path,ops,level){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.replace_str[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__5351__auto__.call(null, this$,path,ops,level));
} else {
var m__5349__auto__ = (editscript.edit.replace_str["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__5349__auto__.call(null, this$,path,ops,level));
} else {
throw cljs.core.missing_protocol("IEdit.replace-str",this$);
}
}
});
editscript.edit.replace_str = (function editscript$edit$replace_str(this$,path,ops,level){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_str$arity$4 == null)))))){
return this$.editscript$edit$IEdit$replace_str$arity$4(this$,path,ops,level);
} else {
return editscript$edit$IEdit$replace_str$dyn_12999(this$,path,ops,level);
}
});


/**
 * @interface
 */
editscript.edit.IEditScript = function(){};

var editscript$edit$IEditScript$combine$dyn_13005 = (function (this$,that){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.combine[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5351__auto__.call(null, this$,that));
} else {
var m__5349__auto__ = (editscript.edit.combine["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5349__auto__.call(null, this$,that));
} else {
throw cljs.core.missing_protocol("IEditScript.combine",this$);
}
}
});
/**
 * Concate that editscript onto this editscript, return the new editscript
 */
editscript.edit.combine = (function editscript$edit$combine(this$,that){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$combine$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$combine$arity$2(this$,that);
} else {
return editscript$edit$IEditScript$combine$dyn_13005(this$,that);
}
});

var editscript$edit$IEditScript$get_size$dyn_13011 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.get_size[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.get_size["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-size",this$);
}
}
});
/**
 * Report the size of the editscript
 */
editscript.edit.get_size = (function editscript$edit$get_size(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_size$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_size$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_size$dyn_13011(this$);
}
});

var editscript$edit$IEditScript$set_size$dyn_13018 = (function (this$,size){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.set_size[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__5351__auto__.call(null, this$,size));
} else {
var m__5349__auto__ = (editscript.edit.set_size["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__5349__auto__.call(null, this$,size));
} else {
throw cljs.core.missing_protocol("IEditScript.set-size",this$);
}
}
});
/**
 * Set the size, return the script
 */
editscript.edit.set_size = (function editscript$edit$set_size(this$,size){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$set_size$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$set_size$arity$2(this$,size);
} else {
return editscript$edit$IEditScript$set_size$dyn_13018(this$,size);
}
});

var editscript$edit$IEditScript$edit_distance$dyn_13022 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.edit_distance[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.edit_distance["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEditScript.edit-distance",this$);
}
}
});
/**
 * Report the edit distance, i.e number of operations
 */
editscript.edit.edit_distance = (function editscript$edit$edit_distance(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$edit_distance$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$edit_distance$arity$1(this$);
} else {
return editscript$edit$IEditScript$edit_distance$dyn_13022(this$);
}
});

var editscript$edit$IEditScript$get_edits$dyn_13026 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.get_edits[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.get_edits["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-edits",this$);
}
}
});
/**
 * Report the edits as a vector
 */
editscript.edit.get_edits = (function editscript$edit$get_edits(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_edits$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_edits$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_edits$dyn_13026(this$);
}
});

var editscript$edit$IEditScript$get_adds_num$dyn_13030 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.get_adds_num[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.get_adds_num["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-adds-num",this$);
}
}
});
/**
 * Report the number of additions
 */
editscript.edit.get_adds_num = (function editscript$edit$get_adds_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_adds_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_adds_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_adds_num$dyn_13030(this$);
}
});

var editscript$edit$IEditScript$get_dels_num$dyn_13035 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.get_dels_num[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.get_dels_num["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-dels-num",this$);
}
}
});
/**
 * Report the number of deletions
 */
editscript.edit.get_dels_num = (function editscript$edit$get_dels_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_dels_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_dels_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_dels_num$dyn_13035(this$);
}
});

var editscript$edit$IEditScript$get_reps_num$dyn_13036 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.get_reps_num[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.get_reps_num["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-reps-num",this$);
}
}
});
/**
 * Report the number of replacements
 */
editscript.edit.get_reps_num = (function editscript$edit$get_reps_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_reps_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_reps_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_reps_num$dyn_13036(this$);
}
});


/**
 * @interface
 */
editscript.edit.IType = function(){};

var editscript$edit$IType$get_type$dyn_13039 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (editscript.edit.get_type[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (editscript.edit.get_type["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IType.get-type",this$);
}
}
});
/**
 * Return a type keyword, :val, :map, :lst, etc.
 */
editscript.edit.get_type = (function editscript$edit$get_type(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IType$get_type$arity$1 == null)))))){
return this$.editscript$edit$IType$get_type$arity$1(this$);
} else {
return editscript$edit$IType$get_type$dyn_13039(this$);
}
});


/**
* @constructor
 * @implements {editscript.edit.IType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
editscript.edit.t_editscript$edit12724 = (function (meta12725){
this.meta12725 = meta12725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(editscript.edit.t_editscript$edit12724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12726,meta12725__$1){
var self__ = this;
var _12726__$1 = this;
return (new editscript.edit.t_editscript$edit12724(meta12725__$1));
}));

(editscript.edit.t_editscript$edit12724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12726){
var self__ = this;
var _12726__$1 = this;
return self__.meta12725;
}));

(editscript.edit.t_editscript$edit12724.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.t_editscript$edit12724.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));

(editscript.edit.t_editscript$edit12724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12725","meta12725",1238574225,null)], null);
}));

(editscript.edit.t_editscript$edit12724.cljs$lang$type = true);

(editscript.edit.t_editscript$edit12724.cljs$lang$ctorStr = "editscript.edit/t_editscript$edit12724");

(editscript.edit.t_editscript$edit12724.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"editscript.edit/t_editscript$edit12724");
}));

/**
 * Positional factory function for editscript.edit/t_editscript$edit12724.
 */
editscript.edit.__GT_t_editscript$edit12724 = (function editscript$edit$__GT_t_editscript$edit12724(meta12725){
return (new editscript.edit.t_editscript$edit12724(meta12725));
});


/**
 * A special type means 'not present'
 */
editscript.edit.nada = (function editscript$edit$nada(){
return (new editscript.edit.t_editscript$edit12724(cljs.core.PersistentArrayMap.EMPTY));
});
(editscript.edit.IType["null"] = true);

(editscript.edit.get_type["null"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.MapEntry.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.Cons.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.Subvec.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["_"] = true);

(editscript.edit.get_type["_"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.PersistentVector.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["string"] = true);

(editscript.edit.get_type["string"] = (function (_){
return new cljs.core.Keyword(null,"str","str",1089608819);
}));

(cljs.core.EmptyList.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.List.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));
editscript.edit.sizing_STAR_ = (function editscript$edit$sizing_STAR_(data,size){
var up = (function (s){
return (s + (1));
});
if(cljs.core.truth_((function (){var G__12771 = editscript.edit.get_type(data);
var fexpr__12770 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__12770.cljs$core$IFn$_invoke$arity$1 ? fexpr__12770.cljs$core$IFn$_invoke$arity$1(G__12771) : fexpr__12770.call(null, G__12771));
})())){
cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));

var seq__12778 = cljs.core.seq(data);
var chunk__12779 = null;
var count__12780 = (0);
var i__12781 = (0);
while(true){
if((i__12781 < count__12780)){
var child = chunk__12779.cljs$core$IIndexed$_nth$arity$2(null, i__12781);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null, child,size));


var G__13062 = seq__12778;
var G__13063 = chunk__12779;
var G__13064 = count__12780;
var G__13065 = (i__12781 + (1));
seq__12778 = G__13062;
chunk__12779 = G__13063;
count__12780 = G__13064;
i__12781 = G__13065;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12778);
if(temp__5804__auto__){
var seq__12778__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12778__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12778__$1);
var G__13069 = cljs.core.chunk_rest(seq__12778__$1);
var G__13070 = c__5525__auto__;
var G__13071 = cljs.core.count(c__5525__auto__);
var G__13072 = (0);
seq__12778 = G__13069;
chunk__12779 = G__13070;
count__12780 = G__13071;
i__12781 = G__13072;
continue;
} else {
var child = cljs.core.first(seq__12778__$1);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null, child,size));


var G__13075 = cljs.core.next(seq__12778__$1);
var G__13076 = null;
var G__13077 = (0);
var G__13078 = (0);
seq__12778 = G__13075;
chunk__12779 = G__13076;
count__12780 = G__13077;
i__12781 = G__13078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));
}
});
editscript.edit.sizing = (function editscript$edit$sizing(data){
var size = cljs.core.volatile_BANG_((0));
editscript.edit.sizing_STAR_(data,size);

return cljs.core.deref(size);
});

/**
* @constructor
 * @implements {editscript.edit.IEditScript}
 * @implements {editscript.edit.IEdit}
*/
editscript.edit.EditScript = (function (edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
this.edits = edits;
this.auto_sizing_QMARK_ = auto_sizing_QMARK_;
this.size = size;
this.adds_num = adds_num;
this.dels_num = dels_num;
this.reps_num = reps_num;
});
(editscript.edit.EditScript.prototype.editscript$edit$IEdit$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$auto_sizing$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
if(self__.auto_sizing_QMARK_){
(self__.size = cljs.core.long$(((((2) + self__.size) + editscript.edit.sizing(path)) + (cljs.core.truth_(value)?editscript.edit.sizing(value):(0)))));
} else {
}

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$add_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.adds_num = (self__.adds_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"+","+",1913524883),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null, path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$delete_data$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
(self__.dels_num = (self__.dels_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"-","-",-2112348439)], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null, path,null);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"r","r",-471384190),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null, path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_str$arity$4 = (function (this$,path,ops,level){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,(function (){var G__12817 = level;
var G__12817__$1 = (((G__12817 instanceof cljs.core.Keyword))?G__12817.fqn:null);
switch (G__12817__$1) {
case "character":
return new cljs.core.Keyword(null,"s","s",1705939918);

break;
case "word":
return new cljs.core.Keyword(null,"sw","sw",833113913);

break;
case "line":
return new cljs.core.Keyword(null,"sl","sl",1007549161);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12817__$1)].join('')));

}
})(),ops], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null, path,"");
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$combine$arity$2 = (function (_,that){
var self__ = this;
var ___$1 = this;
return (new editscript.edit.EditScript(cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.edits,editscript.edit.get_edits(that)),self__.auto_sizing_QMARK_,(self__.size + editscript.edit.get_size(that)),(self__.adds_num + editscript.edit.get_adds_num(that)),(self__.dels_num + editscript.edit.get_dels_num(that)),(self__.reps_num + editscript.edit.get_reps_num(that))));
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$set_size$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
(self__.size = cljs.core.long$(s));

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_edits$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.edits;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_adds_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.adds_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_dels_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.dels_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_reps_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.reps_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$edit_distance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.adds_num + self__.dels_num) + self__.reps_num);
}));

(editscript.edit.EditScript.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edits","edits",-599366147,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-sizing?","auto-sizing?",-1705546383,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"adds-num","adds-num",-1467287693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dels-num","dels-num",819513451,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"reps-num","reps-num",582946575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.edit.EditScript.cljs$lang$type = true);

(editscript.edit.EditScript.cljs$lang$ctorStr = "editscript.edit/EditScript");

(editscript.edit.EditScript.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"editscript.edit/EditScript");
}));

/**
 * Positional factory function for editscript.edit/EditScript.
 */
editscript.edit.__GT_EditScript = (function editscript$edit$__GT_EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
return (new editscript.edit.EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num));
});

editscript.edit.valid_str_edits_QMARK_ = (function editscript$edit$valid_str_edits_QMARK_(data,level){
return ((cljs.core.vector_QMARK_(data)) && (cljs.core.every_QMARK_((function (x){
var or__5002__auto__ = cljs.core.nat_int_QMARK_(x);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto____$1 = cljs.core.vector_QMARK_(x);
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x));
if(and__5000__auto____$2){
var vec__12860 = x;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(1),null);
var and__5000__auto____$3 = (function (){var fexpr__12863 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null);
return (fexpr__12863.cljs$core$IFn$_invoke$arity$1 ? fexpr__12863.cljs$core$IFn$_invoke$arity$1(op) : fexpr__12863.call(null, op));
})();
if(cljs.core.truth_(and__5000__auto____$3)){
var G__12864 = op;
var G__12864__$1 = (((G__12864 instanceof cljs.core.Keyword))?G__12864.fqn:null);
switch (G__12864__$1) {
case "-":
return cljs.core.nat_int_QMARK_(y);

break;
case "+":
case "r":
var G__12865 = level;
var G__12865__$1 = (((G__12865 instanceof cljs.core.Keyword))?G__12865.fqn:null);
switch (G__12865__$1) {
case "s":
return typeof y === 'string';

break;
case "sl":
case "sw":
return cljs.core.vector_QMARK_(y);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12865__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12864__$1)].join('')));

}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
}
}),data)));
});
editscript.edit.valid_edit_QMARK_ = (function editscript$edit$valid_edit_QMARK_(edit){
if(cljs.core.vector_QMARK_(edit)){
var c = cljs.core.count(edit);
if(((((1) < c)) && ((c < (4))))){
var vec__12866 = edit;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12866,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12866,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12866,(2),null);
var and__5000__auto__ = cljs.core.vector_QMARK_(path);
if(and__5000__auto__){
var and__5000__auto____$1 = (function (){var fexpr__12869 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__12869.cljs$core$IFn$_invoke$arity$1 ? fexpr__12869.cljs$core$IFn$_invoke$arity$1(op) : fexpr__12869.call(null, op));
})();
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),op))?(data == null):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3)));
if(and__5000__auto____$2){
if(cljs.core.truth_((function (){var fexpr__12870 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__12870.cljs$core$IFn$_invoke$arity$1 ? fexpr__12870.cljs$core$IFn$_invoke$arity$1(op) : fexpr__12870.call(null, op));
})())){
return editscript.edit.valid_str_edits_QMARK_(data,op);
} else {
return true;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
editscript.edit.valid_edits_QMARK_ = (function editscript$edit$valid_edits_QMARK_(edits){
if(cljs.core.vector_QMARK_(edits)){
if(cljs.core.seq(edits)){
return cljs.core.every_QMARK_(editscript.edit.valid_edit_QMARK_,edits);
} else {
return true;
}
} else {
return null;
}
});
editscript.edit.count_str_ops = (function editscript$edit$count_str_ops(data,adds,dels,reps){
var seq__12871 = cljs.core.seq(data);
var chunk__12873 = null;
var count__12874 = (0);
var i__12875 = (0);
while(true){
if((i__12875 < count__12874)){
var d = chunk__12873.cljs$core$IIndexed$_nth$arity$2(null, i__12875);
if(cljs.core.vector_QMARK_(d)){
var G__12901_13133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__12901_13134__$1 = (((G__12901_13133 instanceof cljs.core.Keyword))?G__12901_13133.fqn:null);
switch (G__12901_13134__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12901_13134__$1)].join('')));

}


var G__13139 = seq__12871;
var G__13140 = chunk__12873;
var G__13141 = count__12874;
var G__13142 = (i__12875 + (1));
seq__12871 = G__13139;
chunk__12873 = G__13140;
count__12874 = G__13141;
i__12875 = G__13142;
continue;
} else {
var G__13145 = seq__12871;
var G__13146 = chunk__12873;
var G__13147 = count__12874;
var G__13148 = (i__12875 + (1));
seq__12871 = G__13145;
chunk__12873 = G__13146;
count__12874 = G__13147;
i__12875 = G__13148;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12871);
if(temp__5804__auto__){
var seq__12871__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12871__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12871__$1);
var G__13149 = cljs.core.chunk_rest(seq__12871__$1);
var G__13150 = c__5525__auto__;
var G__13151 = cljs.core.count(c__5525__auto__);
var G__13152 = (0);
seq__12871 = G__13149;
chunk__12873 = G__13150;
count__12874 = G__13151;
i__12875 = G__13152;
continue;
} else {
var d = cljs.core.first(seq__12871__$1);
if(cljs.core.vector_QMARK_(d)){
var G__12902_13157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__12902_13158__$1 = (((G__12902_13157 instanceof cljs.core.Keyword))?G__12902_13157.fqn:null);
switch (G__12902_13158__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12902_13158__$1)].join('')));

}


var G__13160 = cljs.core.next(seq__12871__$1);
var G__13161 = null;
var G__13162 = (0);
var G__13163 = (0);
seq__12871 = G__13160;
chunk__12873 = G__13161;
count__12874 = G__13162;
i__12875 = G__13163;
continue;
} else {
var G__13165 = cljs.core.next(seq__12871__$1);
var G__13166 = null;
var G__13167 = (0);
var G__13168 = (0);
seq__12871 = G__13165;
chunk__12873 = G__13166;
count__12874 = G__13167;
i__12875 = G__13168;
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
editscript.edit.count_ops = (function editscript$edit$count_ops(edits){
var adds = cljs.core.volatile_BANG_((0));
var dels = cljs.core.volatile_BANG_((0));
var reps = cljs.core.volatile_BANG_((0));
var seq__12903_13169 = cljs.core.seq(edits);
var chunk__12904_13170 = null;
var count__12905_13171 = (0);
var i__12906_13172 = (0);
while(true){
if((i__12906_13172 < count__12905_13171)){
var vec__12923_13174 = chunk__12904_13170.cljs$core$IIndexed$_nth$arity$2(null, i__12906_13172);
var __13175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12923_13174,(0),null);
var op_13176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12923_13174,(1),null);
var data_13177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12923_13174,(2),null);
var G__12926_13178 = op_13176;
var G__12926_13179__$1 = (((G__12926_13178 instanceof cljs.core.Keyword))?G__12926_13178.fqn:null);
switch (G__12926_13179__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (adds.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (dels.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (reps.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_13177,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12926_13179__$1)].join('')));

}


var G__13182 = seq__12903_13169;
var G__13183 = chunk__12904_13170;
var G__13184 = count__12905_13171;
var G__13185 = (i__12906_13172 + (1));
seq__12903_13169 = G__13182;
chunk__12904_13170 = G__13183;
count__12905_13171 = G__13184;
i__12906_13172 = G__13185;
continue;
} else {
var temp__5804__auto___13186 = cljs.core.seq(seq__12903_13169);
if(temp__5804__auto___13186){
var seq__12903_13187__$1 = temp__5804__auto___13186;
if(cljs.core.chunked_seq_QMARK_(seq__12903_13187__$1)){
var c__5525__auto___13188 = cljs.core.chunk_first(seq__12903_13187__$1);
var G__13189 = cljs.core.chunk_rest(seq__12903_13187__$1);
var G__13190 = c__5525__auto___13188;
var G__13191 = cljs.core.count(c__5525__auto___13188);
var G__13192 = (0);
seq__12903_13169 = G__13189;
chunk__12904_13170 = G__13190;
count__12905_13171 = G__13191;
i__12906_13172 = G__13192;
continue;
} else {
var vec__12935_13194 = cljs.core.first(seq__12903_13187__$1);
var __13195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12935_13194,(0),null);
var op_13196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12935_13194,(1),null);
var data_13197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12935_13194,(2),null);
var G__12938_13200 = op_13196;
var G__12938_13201__$1 = (((G__12938_13200 instanceof cljs.core.Keyword))?G__12938_13200.fqn:null);
switch (G__12938_13201__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (adds.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (dels.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (reps.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_13197,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12938_13201__$1)].join('')));

}


var G__13203 = cljs.core.next(seq__12903_13187__$1);
var G__13204 = null;
var G__13205 = (0);
var G__13206 = (0);
seq__12903_13169 = G__13203;
chunk__12904_13170 = G__13204;
count__12905_13171 = G__13205;
i__12906_13172 = G__13206;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(adds),cljs.core.deref(dels),cljs.core.deref(reps)], null);
});
/**
 * Create an EditScript instance from a vector of edits, like those obtained
 *   through calling `get-edits` on an EditScript
 */
editscript.edit.edits__GT_script = (function editscript$edit$edits__GT_script(edits){
if(cljs.core.truth_(editscript.edit.valid_edits_QMARK_(edits))){
} else {
throw (new Error(["Assert failed: ","Not a vector of valid edits","\n","(valid-edits? edits)"].join('')));
}

var vec__12949 = editscript.edit.count_ops(edits);
var adds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(0),null);
var dels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(1),null);
var reps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12949,(2),null);
return editscript.edit.__GT_EditScript(edits,true,editscript.edit.sizing(edits),adds,dels,reps);
});
(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,opts){
var o__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(o__$1.editscript$edit$IEditScript$get_edits$arity$1(null, ))], 0));
}));

//# sourceMappingURL=editscript.edit.js.map
