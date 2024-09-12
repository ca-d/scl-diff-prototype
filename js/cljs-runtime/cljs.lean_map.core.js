import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('cljs.lean_map.core');




/**
* @constructor
*/
cljs.lean_map.core.Box = (function (val){
this.val = val;
});

(cljs.lean_map.core.Box.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.lean_map.core.Box.cljs$lang$type = true);

(cljs.lean_map.core.Box.cljs$lang$ctorStr = "cljs.lean-map.core/Box");

(cljs.lean_map.core.Box.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.lean-map.core/Box");
}));

/**
 * Positional factory function for cljs.lean-map.core/Box.
 */
cljs.lean_map.core.__GT_Box = (function cljs$lean_map$core$__GT_Box(val){
return (new cljs.lean_map.core.Box(val));
});



cljs.lean_map.core.mask = (function cljs$lean_map$core$mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.lean_map.core.bitmap_indexed_node_index = (function cljs$lean_map$core$bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.lean_map.core.bitpos = (function cljs$lean_map$core$bitpos(hash,shift){
return ((1) << cljs.lean_map.core.mask(hash,shift));
});
cljs.lean_map.core.can_edit = (function cljs$lean_map$core$can_edit(x,y){
return (((x != null)) && ((((y != null)) && ((x === y)))));
});
cljs.lean_map.core.inode_kv_reduce = (function cljs$lean_map$core$inode_kv_reduce(arr,kvs,nodes,f,init){
var kv_len = ((2) * kvs);
var node_len = (kv_len + nodes);
var i = (0);
var init__$1 = init;
while(true){
if((i < kv_len)){
var init__$2 = (function (){var G__21086 = init__$1;
var G__21087 = (arr[i]);
var G__21088 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21086,G__21087,G__21088) : f.call(null, G__21086,G__21087,G__21088));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return cljs.core.deref(init__$2);
} else {
var G__21349 = (i + (2));
var G__21350 = init__$2;
i = G__21349;
init__$1 = G__21350;
continue;
}
} else {
if((i < node_len)){
var init__$2 = (arr[i]).kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
return cljs.core.deref(init__$2);
} else {
var G__21351 = (i + (1));
var G__21352 = init__$2;
i = G__21351;
init__$1 = G__21352;
continue;
}
} else {
return init__$1;

}
}
break;
}
});
cljs.lean_map.core.hash_kv = (function cljs$lean_map$core$hash_kv(key,value){
var key_hash_code = (((31) + cljs.core.hash(key)) | (0));
return cljs.core.mix_collection_hash(((cljs.core.imul((31),key_hash_code) + cljs.core.hash(value)) | (0)),(2));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
*/
cljs.lean_map.core.BitmapIndexedNode = (function (edit,datamap,nodemap,arr){
this.edit = edit;
this.datamap = datamap;
this.nodemap = nodemap;
this.arr = arr;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.lean_map.core.BitmapIndexedNode.prototype.get_node = (function (i){
var self__ = this;
var _ = this;
return (self__.arr[(self__.arr.length - i)]);
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.merge_two_kv_pairs = (function (medit,shift,key1hash,key1,val1,key2hash,key2,val2){
var self__ = this;
var inode = this;
if(((((32) < shift)) && ((key1hash === key2hash)))){
return (new cljs.lean_map.core.HashCollisionNode(medit,key1hash,(2),[key1,val1,key2,val2]));
} else {
var mask1 = cljs.lean_map.core.mask(key1hash,shift);
var mask2 = cljs.lean_map.core.mask(key2hash,shift);
if((mask1 === mask2)){
var new_node = inode.merge_two_kv_pairs(medit,(shift + (5)),key1hash,key1,val1,key2hash,key2,val2);
return (new cljs.lean_map.core.BitmapIndexedNode(medit,(0),cljs.lean_map.core.bitpos(key1hash,shift),[new_node]));
} else {
var new_datamap = (cljs.lean_map.core.bitpos(key1hash,shift) | cljs.lean_map.core.bitpos(key2hash,shift));
if((mask1 < mask2)){
return (new cljs.lean_map.core.BitmapIndexedNode(medit,new_datamap,(0),[key1,val1,key2,val2]));
} else {
return (new cljs.lean_map.core.BitmapIndexedNode(medit,new_datamap,(0),[key2,val2,key1,val1]));
}
}
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.has_nodes_QMARK_ = (function (){
var self__ = this;
var _ = this;
return (!((self__.nodemap === (0))));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.data_arity = (function (){
var self__ = this;
var _ = this;
return cljs.core.bit_count(self__.datamap);
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.get_array = (function (){
var self__ = this;
var _ = this;
return self__.arr;
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.copy_and_migrate_to_inline = (function (e,bit,node){
var self__ = this;
var inode = this;
var idx_old = ((self__.arr.length - (1)) - cljs.lean_map.core.bitmap_indexed_node_index(self__.nodemap,bit));
var idx_new = ((2) * cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit));
var dst = (new Array((self__.arr.length + (1))));
cljs.core.array_copy(self__.arr,(0),dst,(0),idx_new);

(dst[idx_new] = (node.arr[(0)]));

(dst[(idx_new + (1))] = (node.arr[(1)]));

cljs.core.array_copy(self__.arr,idx_new,dst,(idx_new + (2)),(idx_old - idx_new));

cljs.core.array_copy(self__.arr,(idx_old + (1)),dst,(idx_old + (2)),((self__.arr.length - idx_old) - (1)));

return (new cljs.lean_map.core.BitmapIndexedNode(e,(self__.datamap | bit),(self__.nodemap ^ bit),dst));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.copy_and_migrate_to_node = (function (e,bit,node){
var self__ = this;
var inode = this;
var idx_old = ((2) * cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit));
var idx_new = ((self__.arr.length - (2)) - cljs.lean_map.core.bitmap_indexed_node_index(self__.nodemap,bit));
var dst = (new Array((self__.arr.length - (1))));
cljs.core.array_copy(self__.arr,(0),dst,(0),idx_old);

cljs.core.array_copy(self__.arr,((2) + idx_old),dst,idx_old,(idx_new - idx_old));

(dst[idx_new] = node);

cljs.core.array_copy(self__.arr,(idx_new + (2)),dst,(idx_new + (1)),((self__.arr.length - idx_new) - (2)));

return (new cljs.lean_map.core.BitmapIndexedNode(e,(self__.datamap ^ bit),(self__.nodemap | bit),dst));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var nodes = [null,null,null,null,null,null,null];
var cursors_lengths = [(0),(0),(0),(0),(0),(0),(0)];
(nodes[(0)] = inode);

(cursors_lengths[(0)] = inode.node_arity());

if((self__.datamap === (0))){
return (cljs.lean_map.core.create_inode_seq.cljs$core$IFn$_invoke$arity$6 ? cljs.lean_map.core.create_inode_seq.cljs$core$IFn$_invoke$arity$6(self__.arr,(0),nodes,cursors_lengths,(0),(0)) : cljs.lean_map.core.create_inode_seq.call(null, self__.arr,(0),nodes,cursors_lengths,(0),(0)));
} else {
return (new cljs.lean_map.core.NodeSeq(null,self__.arr,(0),nodes,cursors_lengths,(0),(inode.data_arity() - (1)),null));
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.lean_map.core.inode_kv_reduce(self__.arr,cljs.core.bit_count(self__.datamap),cljs.core.bit_count(self__.nodemap),f,init);
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = cljs.lean_map.core.bitpos(hash,shift);
if((!(((self__.datamap & bit) === (0))))){
var idx = cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit);
var k = (self__.arr[((2) * idx)]);
if(cljs.core.key_test(k,key)){
return (self__.arr[(((2) * idx) + (1))]);
} else {
return not_found;
}
} else {
if((!(((self__.nodemap & bit) === (0))))){
return (self__.arr[inode.node_at(bit)]).inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;

}
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.has_data_QMARK_ = (function (){
var self__ = this;
var _ = this;
return (!((self__.datamap === (0))));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.copy_and_set = (function (e,idx,val){
var self__ = this;
var inode = this;
if(cljs.lean_map.core.can_edit(e,self__.edit)){
(self__.arr[idx] = val);

return inode;
} else {
var new_arr = cljs.core.aclone(self__.arr);
(new_arr[idx] = val);

return (new cljs.lean_map.core.BitmapIndexedNode(e,self__.datamap,self__.nodemap,new_arr));
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.copy_and_remove_value = (function (e,bit){
var self__ = this;
var indoe = this;
var idx = ((2) * cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit));
var len = self__.arr.length;
var dst = (new Array((len - (2))));
cljs.core.array_copy(self__.arr,(0),dst,(0),idx);

cljs.core.array_copy(self__.arr,(idx + (2)),dst,idx,((len - idx) - (2)));

return (new cljs.lean_map.core.BitmapIndexedNode(e,(self__.datamap ^ bit),self__.nodemap,dst));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.single_kv_QMARK_ = (function (){
var self__ = this;
var _ = this;
return (((self__.nodemap === (0))) && (((1) === cljs.core.bit_count(self__.datamap))));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.hash_node = (function (hash_code){
var self__ = this;
var _ = this;
var data_len = (cljs.core.bit_count(self__.datamap) * (2));
var len = self__.arr.length;
var node_start = (((self__.datamap === (0)))?(0):data_len);
var d = (0);
var hash_code__$1 = hash_code;
while(true){
if((d < data_len)){
var G__21358 = (d + (2));
var G__21359 = ((hash_code__$1 + cljs.lean_map.core.hash_kv((self__.arr[d]),(self__.arr[(d + (1))]))) | (0));
d = G__21358;
hash_code__$1 = G__21359;
continue;
} else {
var n = node_start;
var hash_code__$2 = hash_code__$1;
while(true){
if((n < len)){
var G__21362 = (n + (1));
var G__21363 = (self__.arr[n]).hash_node(hash_code__$2);
n = G__21362;
hash_code__$2 = G__21363;
continue;
} else {
return hash_code__$2;
}
break;
}
}
break;
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.node_arity = (function (){
var self__ = this;
var _ = this;
return cljs.core.bit_count(self__.nodemap);
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.inode_assoc = (function (aedit,shift,keyhash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = cljs.lean_map.core.bitpos(keyhash,shift);
if((!(((self__.datamap & bit) === (0))))){
var idx = cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit);
var k = (self__.arr[((2) * idx)]);
if(cljs.core.key_test(k,key)){
return inode.copy_and_set(aedit,(((2) * idx) + (1)),val);
} else {
var v = (self__.arr[(((2) * idx) + (1))]);
var new_node = inode.merge_two_kv_pairs(aedit,(shift + (5)),cljs.core.hash(k),k,v,keyhash,key,val);
(added_leaf_QMARK_.val = true);

return inode.copy_and_migrate_to_node(aedit,bit,new_node);
}
} else {
if((!(((self__.nodemap & bit) === (0))))){
var node_idx = inode.node_at(bit);
var sub_node = (self__.arr[node_idx]);
var sub_node_new = sub_node.inode_assoc(aedit,(shift + (5)),keyhash,key,val,added_leaf_QMARK_);
if((sub_node === sub_node_new)){
return inode;
} else {
return inode.copy_and_set(aedit,node_idx,sub_node_new);
}
} else {
var n = self__.arr.length;
var idx = ((2) * cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit));
var new_arr = (new Array(((2) + n)));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),idx);

(new_arr[idx] = key);

(new_arr[(idx + (1))] = val);

cljs.core.array_copy(self__.arr,idx,new_arr,((2) + idx),(n - idx));

(added_leaf_QMARK_.val = true);

return (new cljs.lean_map.core.BitmapIndexedNode(aedit,(self__.datamap | bit),self__.nodemap,new_arr));

}
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = cljs.lean_map.core.bitpos(hash,shift);
if((!(((self__.datamap & bit) === (0))))){
var idx = cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit);
var k = (self__.arr[((2) * idx)]);
if(cljs.core.key_test(k,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(self__.arr[(((2) * idx) + (1))])], null);
} else {
return not_found;
}
} else {
if((!(((self__.nodemap & bit) === (0))))){
return inode.node_at(bit).inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;

}
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.node_at = (function (bit){
var self__ = this;
var _ = this;
return ((self__.arr.length - (1)) - cljs.lean_map.core.bitmap_indexed_node_index(self__.nodemap,bit));
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.inode_without = (function (wedit,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = cljs.lean_map.core.bitpos(hash,shift);
if((!(((self__.datamap & bit) === (0))))){
var idx = cljs.lean_map.core.bitmap_indexed_node_index(self__.datamap,bit);
if(cljs.core.key_test(key,(self__.arr[((2) * idx)]))){
(removed_leaf_QMARK_.val = true);

if(((((2) === cljs.core.bit_count(self__.datamap))) && ((self__.nodemap === (0))))){
var new_datamap = (((shift === (0)))?(self__.datamap ^ bit):cljs.lean_map.core.bitpos(hash,(0)));
if((idx === (0))){
return (new cljs.lean_map.core.BitmapIndexedNode(wedit,new_datamap,(0),[(self__.arr[(2)]),(self__.arr[(3)])]));
} else {
return (new cljs.lean_map.core.BitmapIndexedNode(wedit,new_datamap,(0),[(self__.arr[(0)]),(self__.arr[(1)])]));
}
} else {
return inode.copy_and_remove_value(wedit,bit);
}
} else {
return inode;
}
} else {
if((!(((self__.nodemap & bit) === (0))))){
var node_idx = inode.node_at(bit);
var sub_node = (self__.arr[node_idx]);
var sub_node_new = sub_node.inode_without(wedit,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((sub_node === sub_node_new)){
return inode;
} else {
if(sub_node_new.single_kv_QMARK_()){
if((((self__.datamap === (0))) && (((1) === cljs.core.bit_count(self__.nodemap))))){
return sub_node_new;
} else {
return inode.copy_and_migrate_to_inline(wedit,bit,sub_node_new);
}
} else {
return inode.copy_and_set(wedit,node_idx,sub_node_new);
}
}
} else {
return inode;

}
}
}));

(cljs.lean_map.core.BitmapIndexedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (inode,other){
var self__ = this;
var inode__$1 = this;
if((inode__$1 === other)){
return true;
} else {
if((other instanceof cljs.lean_map.core.BitmapIndexedNode)){
if((((self__.datamap === other.datamap)) && ((self__.nodemap === other.nodemap)))){
var len = self__.arr.length;
var i = (0);
var eq = true;
while(true){
if(((eq) && ((i < len)))){
var G__21375 = (i + (1));
var G__21376 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[i]),(other.arr[i]));
i = G__21375;
eq = G__21376;
continue;
} else {
return eq;
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
}));

(cljs.lean_map.core.BitmapIndexedNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit","edit",-1302639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"datamap","datamap",603763199,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nodemap","nodemap",1786841461,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.lean_map.core.BitmapIndexedNode.cljs$lang$type = true);

(cljs.lean_map.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.lean-map.core/BitmapIndexedNode");

(cljs.lean_map.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.lean-map.core/BitmapIndexedNode");
}));

/**
 * Positional factory function for cljs.lean-map.core/BitmapIndexedNode.
 */
cljs.lean_map.core.__GT_BitmapIndexedNode = (function cljs$lean_map$core$__GT_BitmapIndexedNode(edit,datamap,nodemap,arr){
return (new cljs.lean_map.core.BitmapIndexedNode(edit,datamap,nodemap,arr));
});

(cljs.lean_map.core.BitmapIndexedNode.EMPTY = (new cljs.lean_map.core.BitmapIndexedNode(null,(0),(0),[])));

/**
* @constructor
 * @implements {cljs.core.IEquiv}
*/
cljs.lean_map.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.lean_map.core.HashCollisionNode.prototype.get_node = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(cljs.lean_map.core.HashCollisionNode.prototype.persistent_inode_assoc = (function (idx,hedit,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

(added_leaf_QMARK_.val = true);

return (new cljs.lean_map.core.HashCollisionNode(hedit,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.lean_map.core.HashCollisionNode(hedit,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
}));

(cljs.lean_map.core.HashCollisionNode.prototype.has_nodes_QMARK_ = (function (){
var self__ = this;
var _ = this;
return false;
}));

(cljs.lean_map.core.HashCollisionNode.prototype.data_arity = (function (){
var self__ = this;
var _ = this;
return self__.cnt;
}));

(cljs.lean_map.core.HashCollisionNode.prototype.get_array = (function (){
var self__ = this;
var _ = this;
return self__.arr;
}));

(cljs.lean_map.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.lean_map.core.inode_kv_reduce(self__.arr,self__.cnt,(0),f,init);
}));

(cljs.lean_map.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
}));

(cljs.lean_map.core.HashCollisionNode.prototype.has_data_QMARK_ = (function (){
var self__ = this;
var _ = this;
return true;
}));

(cljs.lean_map.core.HashCollisionNode.prototype.single_kv_QMARK_ = (function (){
var self__ = this;
var _ = this;
return ((1) === self__.cnt);
}));

(cljs.lean_map.core.HashCollisionNode.prototype.hash_node = (function (hash_code){
var self__ = this;
var _ = this;
var len = self__.arr.length;
var n = (0);
var hash_code__$1 = hash_code;
while(true){
if((n < len)){
var G__21385 = (n + (2));
var G__21386 = ((hash_code__$1 + cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[n]),(self__.arr[(n + (1))])], null))) | (0));
n = G__21385;
hash_code__$1 = G__21386;
continue;
} else {
return hash_code__$1;
}
break;
}
}));

(cljs.lean_map.core.HashCollisionNode.prototype.node_arity = (function (){
var self__ = this;
var _ = this;
return (0);
}));

(cljs.lean_map.core.HashCollisionNode.prototype.mutable_inode_assoc = (function (idx,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((idx === (-1))){
var new_arr_21388 = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr_21388,(0),((2) * self__.cnt));

(self__.arr[((2) * self__.cnt)] = key);

(self__.arr[(((2) * self__.cnt) + (1))] = val);

(added_leaf_QMARK_.val = true);

(self__.cnt = (self__.cnt + (1)));
} else {
if(((self__.arr[(idx + (1))]) === val)){
} else {
(self__.arr[(idx + (1))] = val);
}
}

return inode;
}));

(cljs.lean_map.core.HashCollisionNode.prototype.inode_assoc = (function (hedit,_,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
} else {
throw (new Error("Assert failed: (== hash collision-hash)"));
}

var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if(hedit){
var new_node = ((cljs.lean_map.core.can_edit(self__.edit,hedit))?inode:(new cljs.lean_map.core.HashCollisionNode(hedit,hash,self__.cnt,cljs.core.aclone(self__.arr))));
return new_node.mutable_inode_assoc(idx,key,val,added_leaf_QMARK_);
} else {
return inode.persistent_inode_assoc(idx,hedit,key,val,added_leaf_QMARK_);
}
}));

(cljs.lean_map.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
}));

(cljs.lean_map.core.HashCollisionNode.prototype.inode_without = (function (wedit,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_.val = true);

var G__21167 = self__.cnt;
switch (G__21167) {
case (1):
return cljs.lean_map.core.BitmapIndexedNode.EMPTY;

break;
case (2):
var idx__$1 = ((cljs.core.key_test(key,(self__.arr[(0)])))?(2):(0));
return cljs.lean_map.core.BitmapIndexedNode.EMPTY.inode_assoc(wedit,(0),hash,(self__.arr[idx__$1]),(self__.arr[(idx__$1 + (1))]),removed_leaf_QMARK_);

break;
default:
return (new cljs.lean_map.core.HashCollisionNode(wedit,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
}));

(cljs.lean_map.core.HashCollisionNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (inode,other){
var self__ = this;
var inode__$1 = this;
if((inode__$1 === other)){
return true;
} else {
if((other instanceof cljs.lean_map.core.HashCollisionNode)){
if((self__.cnt === other.cnt)){
var len = self__.arr.length;
var other_arr = other.arr;
var i = (0);
var eq = true;
while(true){
if(((eq) && ((i < len)))){
var idx = cljs.core.hash_collision_node_find_index(other_arr,self__.cnt,(self__.arr[i]));
var G__21394 = (i + (2));
var G__21395 = (((idx > (-1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),(other_arr[(idx + (1))]))));
i = G__21394;
eq = G__21395;
continue;
} else {
return eq;
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
}));

(cljs.lean_map.core.HashCollisionNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit","edit",-1302639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"collision-hash","collision-hash",-35831342,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.lean_map.core.HashCollisionNode.cljs$lang$type = true);

(cljs.lean_map.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.lean-map.core/HashCollisionNode");

(cljs.lean_map.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.lean-map.core/HashCollisionNode");
}));

/**
 * Positional factory function for cljs.lean-map.core/HashCollisionNode.
 */
cljs.lean_map.core.__GT_HashCollisionNode = (function cljs$lean_map$core$__GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.lean_map.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.lean_map.core.persistent_map_hash = (function cljs$lean_map$core$persistent_map_hash(m){
return cljs.core.mix_collection_hash((((m.cnt === (0)))?(0):m.root.hash_node((0))),m.cnt);
});

/**
* @constructor
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.lean_map.core.PersistentHashMap = (function (meta,cnt,root,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
});
(cljs.lean_map.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null, other);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.keys(coll));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.vals(coll));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.get = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__21200 = cljs.core.seq(coll);
var chunk__21201 = null;
var count__21202 = (0);
var i__21203 = (0);
while(true){
if((i__21203 < count__21202)){
var vec__21217 = chunk__21201.cljs$core$IIndexed$_nth$arity$2(null, i__21203);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null, v,k));


var G__21414 = seq__21200;
var G__21415 = chunk__21201;
var G__21416 = count__21202;
var G__21417 = (i__21203 + (1));
seq__21200 = G__21414;
chunk__21201 = G__21415;
count__21202 = G__21416;
i__21203 = G__21417;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21200);
if(temp__5804__auto__){
var seq__21200__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21200__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21200__$1);
var G__21420 = cljs.core.chunk_rest(seq__21200__$1);
var G__21421 = c__5525__auto__;
var G__21422 = cljs.core.count(c__5525__auto__);
var G__21423 = (0);
seq__21200 = G__21420;
chunk__21201 = G__21421;
count__21202 = G__21422;
i__21203 = G__21423;
continue;
} else {
var vec__21220 = cljs.core.first(seq__21200__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21220,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null, v,k));


var G__21424 = cljs.core.next(seq__21200__$1);
var G__21425 = null;
var G__21426 = (0);
var G__21427 = (0);
seq__21200 = G__21424;
chunk__21201 = G__21425;
count__21202 = G__21426;
i__21203 = G__21427;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(cljs.core.reduced_QMARK_(init)){
return cljs.core.deref(init);
} else {
if((!((self__.root == null)))){
return self__.root.kv_reduce(f,init);
} else {
return init;

}
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.lean_map.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.__hash));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = cljs.lean_map.core.persistent_map_hash(coll__$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((coll__$1 === other)){
return true;
} else {
if((other instanceof cljs.lean_map.core.PersistentHashMap)){
return cljs.core._equiv(self__.root,other.root);
} else {
return cljs.core.equiv_map(coll__$1,other);
}
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.lean_map.core.TransientHashMap(({}),self__.root,self__.cnt));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.lean_map.core.PersistentHashMap.EMPTY,self__.meta);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without(null,(0),cljs.core.hash(k),k,(new cljs.lean_map.core.Box(false)));
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.lean_map.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,null));
}
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var added_leaf_QMARK_ = (new cljs.lean_map.core.Box(false));
var new_root = self__.root.inode_assoc(null,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.lean_map.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,null));
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((self__.root == null)){
return false;
} else {
return (!((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)));
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return self__.root.inode_seq();
} else {
return null;
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.lean_map.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.__hash));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return coll__$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__21446 = cljs.core._assoc(ret,cljs.core._nth(e,(0)),cljs.core._nth(e,(1)));
var G__21447 = cljs.core.next(es);
ret = G__21446;
es = G__21447;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__21238 = (arguments.length - (1));
switch (G__21238) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(cljs.lean_map.core.PersistentHashMap.prototype.apply = (function (self__,args21184){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21184)));
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null, k);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));

(cljs.lean_map.core.PersistentHashMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"root","root",1191874074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.lean_map.core.PersistentHashMap.cljs$lang$type = true);

(cljs.lean_map.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.lean-map.core/PersistentHashMap");

(cljs.lean_map.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.lean-map.core/PersistentHashMap");
}));

/**
 * Positional factory function for cljs.lean-map.core/PersistentHashMap.
 */
cljs.lean_map.core.__GT_PersistentHashMap = (function cljs$lean_map$core$__GT_PersistentHashMap(meta,cnt,root,__hash){
return (new cljs.lean_map.core.PersistentHashMap(meta,cnt,root,__hash));
});

(cljs.lean_map.core.PersistentHashMap.EMPTY = (new cljs.lean_map.core.PersistentHashMap(null,(0),cljs.lean_map.core.BitmapIndexedNode.EMPTY,cljs.core.empty_unordered_hash)));

/**
* @constructor
 * @implements {cljs.core.ITransientMap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientAssociative}
*/
cljs.lean_map.core.TransientHashMap = (function (edit,root,count){
this.edit = edit;
this.root = root;
this.count = count;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 56;
});
(cljs.lean_map.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition0$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMapEntry$))))?true:(((!o.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,o))){
return tcoll.assoc_BANG_(cljs.core.key(o),cljs.core.val(o));
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__5802__auto__ = cljs.core.first(es);
if(temp__5802__auto__){
var e = temp__5802__auto__;
var G__21470 = cljs.core.next(es);
var G__21471 = tcoll__$1.assoc_BANG_(cljs.core.key(e),cljs.core.val(e));
es = G__21470;
tcoll__$1 = G__21471;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
}));

(cljs.lean_map.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
var added_leaf_QMARK_ = (new cljs.lean_map.core.Box(false));
var node = self__.root.inode_assoc(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
(self__.root = node);
}

if(added_leaf_QMARK_.val){
(self__.count = (self__.count + (1)));
} else {
}

return tcoll;
} else {
throw (new Error("assoc! after persistent!"));
}
}));

(cljs.lean_map.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.lean_map.core.Box(false));
var node = self__.root.inode_without(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
(self__.root = node);
}

if(removed_leaf_QMARK_.val){
(self__.count = (self__.count - (1)));
} else {
}

return tcoll;
}
} else {
throw (new Error("dissoc! after persistent!"));
}
}));

(cljs.lean_map.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
(self__.edit = null);

return (new cljs.lean_map.core.PersistentHashMap(null,self__.count,self__.root,null));
} else {
throw (new Error("persistent! called twice"));
}
}));

(cljs.lean_map.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
}));

(cljs.lean_map.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
}));

(cljs.lean_map.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
}));

(cljs.lean_map.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
}));

(cljs.lean_map.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
}));

(cljs.lean_map.core.TransientHashMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edit","edit",-1302639,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.lean_map.core.TransientHashMap.cljs$lang$type = true);

(cljs.lean_map.core.TransientHashMap.cljs$lang$ctorStr = "cljs.lean-map.core/TransientHashMap");

(cljs.lean_map.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.lean-map.core/TransientHashMap");
}));

/**
 * Positional factory function for cljs.lean-map.core/TransientHashMap.
 */
cljs.lean_map.core.__GT_TransientHashMap = (function cljs$lean_map$core$__GT_TransientHashMap(edit,root,count){
return (new cljs.lean_map.core.TransientHashMap(edit,root,count));
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
cljs.lean_map.core.NodeSeq = (function (meta,arr,lvl,nodes,cursors,data_idx,data_len,__hash){
this.meta = meta;
this.arr = arr;
this.lvl = lvl;
this.nodes = nodes;
this.cursors = cursors;
this.data_idx = data_idx;
this.data_len = data_len;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.lean_map.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(cljs.lean_map.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null, other);
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[(self__.data_idx * (2))]),(self__.arr[((self__.data_idx * (2)) + (1))])], null);
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (cljs.lean_map.core.create_inode_seq.cljs$core$IFn$_invoke$arity$6 ? cljs.lean_map.core.create_inode_seq.cljs$core$IFn$_invoke$arity$6(self__.arr,self__.lvl,self__.nodes,self__.cursors,self__.data_idx,self__.data_len) : cljs.lean_map.core.create_inode_seq.call(null, self__.arr,self__.lvl,self__.nodes,self__.cursors,self__.data_idx,self__.data_len));
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.lean_map.core.NodeSeq(meta__$1,self__.arr,self__.lvl,self__.nodes,self__.cursors,self__.data_idx,self__.data_len,self__.__hash));
}));

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
}));

(cljs.lean_map.core.NodeSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"lvl","lvl",155936261,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"cursors","cursors",2037213517,null),new cljs.core.Symbol(null,"data-idx","data-idx",-850719763,null),new cljs.core.Symbol(null,"data-len","data-len",698706645,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.lean_map.core.NodeSeq.cljs$lang$type = true);

(cljs.lean_map.core.NodeSeq.cljs$lang$ctorStr = "cljs.lean-map.core/NodeSeq");

(cljs.lean_map.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.lean-map.core/NodeSeq");
}));

/**
 * Positional factory function for cljs.lean-map.core/NodeSeq.
 */
cljs.lean_map.core.__GT_NodeSeq = (function cljs$lean_map$core$__GT_NodeSeq(meta,arr,lvl,nodes,cursors,data_idx,data_len,__hash){
return (new cljs.lean_map.core.NodeSeq(meta,arr,lvl,nodes,cursors,data_idx,data_len,__hash));
});

cljs.lean_map.core.node_arr_clone = (function cljs$lean_map$core$node_arr_clone(arr){
return [(arr[(0)]),(arr[(1)]),(arr[(2)]),(arr[(3)]),(arr[(4)]),(arr[(5)]),(arr[(6)])];
});
cljs.lean_map.core.create_inode_seq = (function cljs$lean_map$core$create_inode_seq(arr,lvl,nodes,cursors,data_idx,data_len){
if((data_idx < data_len)){
return (new cljs.lean_map.core.NodeSeq(null,arr,lvl,nodes,cursors,(data_idx + (1)),data_len,null));
} else {
var nodes__$1 = cljs.lean_map.core.node_arr_clone(nodes);
var cursors__$1 = cljs.lean_map.core.node_arr_clone(cursors);
var lvl__$1 = lvl;
while(true){
if((lvl__$1 >= (0))){
var node_idx = (cursors__$1[lvl__$1]);
if((node_idx === (0))){
var G__21512 = (lvl__$1 - (1));
lvl__$1 = G__21512;
continue;
} else {
var node = (nodes__$1[lvl__$1]).get_node(node_idx);
var has_nodes = node.has_nodes_QMARK_();
var new_lvl = ((has_nodes)?(lvl__$1 + (1)):lvl__$1);
(cursors__$1[lvl__$1] = (node_idx - (1)));

if(has_nodes){
(nodes__$1[new_lvl] = node);

(cursors__$1[new_lvl] = node.node_arity());
} else {
}

if(node.has_data_QMARK_()){
return (new cljs.lean_map.core.NodeSeq(null,node.get_array(),new_lvl,nodes__$1,cursors__$1,(0),(node.data_arity() - (1)),null));
} else {
var G__21517 = (lvl__$1 + (1));
lvl__$1 = G__21517;
continue;
}
}
} else {
return null;
}
break;
}
}
});
(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.lean_map.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
}));

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.lean_map.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
}));

//# sourceMappingURL=cljs.lean_map.core.js.map
