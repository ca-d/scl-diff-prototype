import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('mori');
goog.exportSymbol("mori.count",cljs.core.count);

;;
goog.exportSymbol("mori.empty",cljs.core.empty);

;;
goog.exportSymbol("mori.conj",cljs.core.conj);

;;

goog.exportSymbol("mori.conj.f0",cljs.core.conj.cljs$core$IFn$_invoke$arity$0);

goog.exportSymbol("mori.conj.f1",cljs.core.conj.cljs$core$IFn$_invoke$arity$1);

goog.exportSymbol("mori.conj.f2",cljs.core.conj.cljs$core$IFn$_invoke$arity$2);
goog.exportSymbol("mori.find",cljs.core.find);

;;
goog.exportSymbol("mori.nth",cljs.core.nth);

;;

goog.exportSymbol("mori.nth.f2",cljs.core.nth.cljs$core$IFn$_invoke$arity$2);

goog.exportSymbol("mori.nth.f3",cljs.core.nth.cljs$core$IFn$_invoke$arity$3);
goog.exportSymbol("mori.assoc",cljs.core.assoc);

;;

goog.exportSymbol("mori.assoc.f3",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3);
goog.exportSymbol("mori.dissoc",cljs.core.dissoc);

;;

goog.exportSymbol("mori.dissoc.f1",cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1);

goog.exportSymbol("mori.dissoc.f2",cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2);
goog.exportSymbol("mori.disj",cljs.core.disj);

;;

goog.exportSymbol("mori.disj.f1",cljs.core.disj.cljs$core$IFn$_invoke$arity$1);

goog.exportSymbol("mori.disj.f2",cljs.core.disj.cljs$core$IFn$_invoke$arity$2);
goog.exportSymbol("mori.pop",cljs.core.pop);

;;
goog.exportSymbol("mori.peek",cljs.core.peek);

;;
goog.exportSymbol("mori.get",cljs.core.get);

;;

goog.exportSymbol("mori.get.f2",cljs.core.get.cljs$core$IFn$_invoke$arity$2);

goog.exportSymbol("mori.get.f3",cljs.core.get.cljs$core$IFn$_invoke$arity$3);
goog.exportSymbol("mori.isEmpty",cljs.core.empty_QMARK_);

;;
goog.exportSymbol("mori.reverse",cljs.core.reverse);

;;
goog.exportSymbol("mori.into",cljs.core.into);

;;

goog.exportSymbol("mori.into.f0",cljs.core.into.cljs$core$IFn$_invoke$arity$0);

goog.exportSymbol("mori.into.f1",cljs.core.into.cljs$core$IFn$_invoke$arity$1);

goog.exportSymbol("mori.into.f2",cljs.core.into.cljs$core$IFn$_invoke$arity$2);

goog.exportSymbol("mori.into.f3",cljs.core.into.cljs$core$IFn$_invoke$arity$3);
goog.exportSymbol("mori.merge",cljs.core.merge);

;;
goog.exportSymbol("mori.subvec",cljs.core.subvec);

;;

goog.exportSymbol("mori.subvec.f2",cljs.core.subvec.cljs$core$IFn$_invoke$arity$2);

goog.exportSymbol("mori.subvec.f3",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3);
goog.exportSymbol("mori.keys",cljs.core.keys);

;;
goog.exportSymbol("mori.vals",cljs.core.vals);

;;
goog.exportSymbol("mori.equiv",cljs.core._EQ__EQ_);

;;

goog.exportSymbol("mori.equiv.f1",cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$1);

goog.exportSymbol("mori.equiv.f2",cljs.core._EQ__EQ_.cljs$core$IFn$_invoke$arity$2);
goog.exportSymbol("mori.sort",cljs.core.sort);

;;

goog.exportSymbol("mori.sort.f1",cljs.core.sort.cljs$core$IFn$_invoke$arity$1);

goog.exportSymbol("mori.sort.f2",cljs.core.sort.cljs$core$IFn$_invoke$arity$2);
goog.exportSymbol("mori.sortBy",cljs.core.sort_by);

;;

goog.exportSymbol("mori.sortBy.f2",cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2);

goog.exportSymbol("mori.sortBy.f3",cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3);
goog.exportSymbol("mori.vector",cljs.core.vector);

;;
goog.exportSymbol("mori.vec",cljs.core.vec);

;;
goog.exportSymbol("mori.Vector",cljs.core.PersistentVector);

;;
goog.exportSymbol("mori.hashMap",cljs.core.array_map);

;;
goog.exportSymbol("mori.ArrayMap",cljs.core.PersistentArrayMap);

;;
mori.arrayMapFromArray = (function mori$arrayMapFromArray(arr,no_clone,no_check){
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,no_clone,no_check) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,no_clone,no_check));
});
goog.exportSymbol('mori.arrayMapFromArray', mori.arrayMapFromArray);
mori.arrayMapUnwrap = (function mori$arrayMapUnwrap(m){
if((m instanceof cljs.core.PersistentArrayMap)){
return m.arr;
} else {
throw (new Error("Can only unwrap array maps"));
}
});
goog.exportSymbol('mori.arrayMapUnwrap', mori.arrayMapUnwrap);
goog.exportSymbol("mori.Map",cljs.core.PersistentHashMap);

;;
goog.exportSymbol("mori.set",cljs.core.set);

;;
goog.exportSymbol("mori.Set",cljs.core.PersistentHashSet);

;;
goog.exportSymbol("mori.compare",cljs.core.compare);

;;

//# sourceMappingURL=mori.js.map
