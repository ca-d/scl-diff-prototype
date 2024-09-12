import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.core.rrb_vector.nodes.js";
import "./clojure.core.rrb_vector.trees.js";
goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_20651 = ret;
var shift_20652__$1 = shift;
while(true){
var arr_20654 = n_20651.arr;
var subidx_20655 = (((cnt - (1)) >> shift_20652__$1) & (31));
if((shift_20652__$1 === (5))){
(arr_20654[subidx_20655] = tail_node);
} else {
var child_20656 = (arr_20654[subidx_20655]);
if((child_20656 == null)){
(arr_20654[subidx_20655] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_20652__$1 - (5)),tail_node));
} else {
var editable_child_20657 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_20656);
(arr_20654[subidx_20655] = editable_child_20657);

var G__20658 = editable_child_20657;
var G__20659 = (shift_20652__$1 - (5));
n_20651 = G__20658;
shift_20652__$1 = G__20659;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__20575 = (shift - (5));
var G__20576 = ccnt;
var G__20577 = root_edit;
var G__20578 = child;
var G__20579 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__20575,G__20576,G__20577,G__20578,G__20579) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null, G__20575,G__20576,G__20577,G__20578,G__20579));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_20660 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_20661 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_20660,data_20661);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__20586 = (shift - (5));
var G__20587 = cnt;
var G__20588 = root_edit;
var G__20589 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__20586,G__20587,G__20588,G__20589) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null, G__20586,G__20587,G__20588,G__20589));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__20599 = (shift - (5));
var G__20600 = child_cnt;
var G__20601 = root_edit;
var G__20602 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__20599,G__20600,G__20601,G__20602) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null, G__20599,G__20600,G__20601,G__20602));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_20668__$1 = shift;
var node_20669 = ret;
while(true){
if((shift_20668__$1 === (0))){
var arr_20670 = node_20669.arr;
(arr_20670[(i & (31))] = val);
} else {
var arr_20671 = node_20669.arr;
var subidx_20672 = ((i >> shift_20668__$1) & (31));
var child_20673 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_20671[subidx_20672]));
(arr_20671[subidx_20672] = child_20673);

var G__20675 = (shift_20668__$1 - (5));
var G__20676 = child_20673;
shift_20668__$1 = G__20675;
node_20669 = G__20676;
continue;
}
break;
}
} else {
var arr_20677 = ret.arr;
var rngs_20678 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_20679 = ((i >> shift) & (31));
var subidx_20680__$1 = (function (){var subidx_20680__$1 = subidx_20679;
while(true){
if((i < ((rngs_20678[subidx_20680__$1]) | (0)))){
return subidx_20680__$1;
} else {
var G__20682 = (subidx_20680__$1 + (1));
subidx_20680__$1 = G__20682;
continue;
}
break;
}
})();
var i_20681__$1 = (((subidx_20680__$1 === (0)))?i:(i - (rngs_20678[(subidx_20680__$1 - (1))])));
(arr_20677[subidx_20680__$1] = (function (){var G__20641 = (shift - (5));
var G__20642 = root_edit;
var G__20643 = (arr_20677[subidx_20680__$1]);
var G__20644 = i_20681__$1;
var G__20645 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__20641,G__20642,G__20643,G__20644,G__20645) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null, G__20641,G__20642,G__20643,G__20644,G__20645));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
