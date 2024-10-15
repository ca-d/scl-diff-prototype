import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.js";
import "./clojure.string.js";
import "./clojure.set.js";
goog.provide('openscd.scl');
var module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity=shadow.js.require("module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity", {});
openscd.scl.after_next_paint = (function openscd$scl$after_next_paint(f){
return requestAnimationFrame((function (){
return setTimeout(f);
}));
});
openscd.scl.identifier_attributes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"DAI","DAI",-1380715744),new cljs.core.Keyword(null,"SMV","SMV",369202016),new cljs.core.Keyword(null,"LNode","LNode",566631042),new cljs.core.Keyword(null,"ConnectedAP","ConnectedAP",-1381548891),new cljs.core.Keyword(null,"ExtRef","ExtRef",1149939273),new cljs.core.Keyword(null,"Terminal","Terminal",-1610057718),new cljs.core.Keyword(null,"SDI","SDI",-2071007315),new cljs.core.Keyword(null,"LN0","LN0",-665542354),new cljs.core.Keyword(null,"GSE","GSE",-1057390737),new cljs.core.Keyword(null,"Hitem","Hitem",924242001),new cljs.core.Keyword(null,"LDevice","LDevice",185641685),new cljs.core.Keyword(null,"IEDName","IEDName",-600183430),new cljs.core.Keyword(null,"PhysConn","PhysConn",-560502213),new cljs.core.Keyword(null,"Association","Association",1117992412),new cljs.core.Keyword(null,"ClientLN","ClientLN",-837811427),new cljs.core.Keyword(null,"KDC","KDC",1629184798),new cljs.core.Keyword(null,"LN","LN",-19107970)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ix","ix",-268822678)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"cbName","cbName",-1384147934)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iedName","iedName",402101163),new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),new cljs.core.Keyword(null,"lnType","lnType",532569125)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iedName","iedName",402101163),new cljs.core.Keyword(null,"apName","apName",-1278337823)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iedName","iedName",402101163),new cljs.core.Keyword(null,"intAddr","intAddr",685685411),new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),new cljs.core.Keyword(null,"doName","doName",-1127433548),new cljs.core.Keyword(null,"daName","daName",-674376218),new cljs.core.Keyword(null,"serviceType","serviceType",1214313006),new cljs.core.Keyword(null,"srcLDInst","srcLDInst",1045935589),new cljs.core.Keyword(null,"srcPrefix","srcPrefix",1690419875),new cljs.core.Keyword(null,"srcLNClass","srcLNClass",-1631595345),new cljs.core.Keyword(null,"srcLNInst","srcLNInst",1316390516),new cljs.core.Keyword(null,"srcCBName","srcCBName",-523824883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connectivityNode","connectivityNode",1715477116)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ix","ix",-268822678)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"inst","inst",645962501)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"cbName","cbName",-1384147934)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"revision","revision",-1350113114)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"IED","IED",-1202207737),new cljs.core.Keyword(null,"inst","inst",645962501)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apRef","apRef",1746207760),new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"lnInst","lnInst",1375769467)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iedName","iedName",402101163),new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),new cljs.core.Keyword(null,"lnType","lnType",532569125)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apRef","apRef",1746207760),new cljs.core.Keyword(null,"iedName","iedName",402101163),new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"lnInst","lnInst",1375769467)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iedName","iedName",402101163),new cljs.core.Keyword(null,"apName","apName",-1278337823)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),new cljs.core.Keyword(null,"inst","inst",645962501)], null)]);
openscd.scl.schema_references = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ServerAt","ServerAt",-80406878),new cljs.core.Keyword(null,"LogControl","LogControl",1132593187),new cljs.core.Keyword(null,"DO","DO",555377637),new cljs.core.Keyword(null,"SDO","SDO",-467426968),new cljs.core.Keyword(null,"BDA","BDA",1284162761),new cljs.core.Keyword(null,"SampledValueControl","SampledValueControl",-1835009617),new cljs.core.Keyword(null,"GSEControl","GSEControl",1967882450),new cljs.core.Keyword(null,"DA","DA",770036184),new cljs.core.Keyword(null,"ReportControl","ReportControl",2059382493)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"apName"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>AccessPoint",new cljs.core.Keyword(null,"from","from",1815293044),":scope>AccessPoint>ServerAt",new cljs.core.Keyword(null,"scope","scope",-439358418),"IED"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>LogControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>LogControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DOType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>LNodeType>DO",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DOType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>DOType>SDO",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DAType, :scope>EnumType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>DOType>DA,\n          :scope>DAType>BDA",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>SampledValueControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>GSEControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DAType, :scope>EnumType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>DOType>DA, :scope>DAType>BDA",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>ReportControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>ReportControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN0"], null)], null)]);
openscd.scl.deep_schema_references = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"LN0","LN0",-665542354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"lnType"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"lnClass",new cljs.core.Keyword(null,"from","from",1815293044),"lnClass"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataTypeTemplates>LNodeType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>IED>AccessPoint>Server>LDevice>LN0",new cljs.core.Keyword(null,"scope","scope",-439358418),"SCL"], null)], null),new cljs.core.Keyword(null,"LN","LN",-19107970),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"lnType"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"lnClass",new cljs.core.Keyword(null,"from","from",1815293044),"lnClass"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataTypeTemplates>LNodeType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>IED>AccessPoint>LN",new cljs.core.Keyword(null,"scope","scope",-439358418),"SCL"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"lnType"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"lnClass",new cljs.core.Keyword(null,"from","from",1815293044),"lnClass"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataTypeTemplates>LNodeType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>IED>AccessPoint>Server>LDevice>LN",new cljs.core.Keyword(null,"scope","scope",-439358418),"SCL"], null)], null)], null);
openscd.scl.defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SubNetwork","SubNetwork",1513043072),new cljs.core.Keyword(null,"DAI","DAI",-1380715744),new cljs.core.Keyword(null,"ConfDataSet","ConfDataSet",-960244928),new cljs.core.Keyword(null,"SMV","SMV",369202016),new cljs.core.Keyword(null,"NeutralPoint","NeutralPoint",-1282681631),new cljs.core.Keyword(null,"Function","Function",1904540321),new cljs.core.Keyword(null,"AccessPoint","AccessPoint",-9059166),new cljs.core.Keyword(null,"LNode","LNode",566631042),new cljs.core.Keyword(null,"ServerAt","ServerAt",-80406878),new cljs.core.Keyword(null,"Inputs","Inputs",-958498078),new cljs.core.Keyword(null,"DOType","DOType",-946654270),new cljs.core.Keyword(null,"LogControl","LogControl",1132593187),new cljs.core.Keyword(null,"SubEquipment","SubEquipment",-1880159453),new cljs.core.Keyword(null,"Server","Server",-1453472893),new cljs.core.Keyword(null,"SMVSettings","SMVSettings",-772432476),new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),new cljs.core.Keyword(null,"ConnectedAP","ConnectedAP",-1381548891),new cljs.core.Keyword(null,"Header","Header",1255420133),new cljs.core.Keyword(null,"ConfReportControl","ConfReportControl",1171542373),new cljs.core.Keyword(null,"DO","DO",555377637),new cljs.core.Keyword(null,"SMVsc","SMVsc",-674389914),new cljs.core.Keyword(null,"ReportSettings","ReportSettings",-2135201114),new cljs.core.Keyword(null,"IED","IED",-1202207737),new cljs.core.Keyword(null,"DataSet","DataSet",1832502311),new cljs.core.Keyword(null,"Communication","Communication",800195751),new cljs.core.Keyword(null,"ConfLNs","ConfLNs",-174971193),new cljs.core.Keyword(null,"SDO","SDO",-467426968),new cljs.core.Keyword(null,"EqFunction","EqFunction",1525876264),new cljs.core.Keyword(null,"GeneralEquipment","GeneralEquipment",94889864),new cljs.core.Keyword(null,"BDA","BDA",1284162761),new cljs.core.Keyword(null,"Terminal","Terminal",-1610057718),new cljs.core.Keyword(null,"Log","Log",1668795722),new cljs.core.Keyword(null,"SettingGroups","SettingGroups",-1927378165),new cljs.core.Keyword(null,"ClientServices","ClientServices",1712773067),new cljs.core.Keyword(null,"Line","Line",1577484267),new cljs.core.Keyword(null,"DOI","DOI",675703916),new cljs.core.Keyword(null,"McSecurity","McSecurity",-1266851668),new cljs.core.Keyword(null,"SMVSecurity","SMVSecurity",1159028460),new cljs.core.Keyword(null,"LogSettings","LogSettings",1082414093),new cljs.core.Keyword(null,"SettingControl","SettingControl",1352987789),new cljs.core.Keyword(null,"RedProt","RedProt",-693281587),new cljs.core.Keyword(null,"SDI","SDI",-2071007315),new cljs.core.Keyword(null,"EnumType","EnumType",-1438451634),new cljs.core.Keyword(null,"TapChanger","TapChanger",-2048168786),new cljs.core.Keyword(null,"DAType","DAType",-525603538),new cljs.core.Keyword(null,"TrgOps","TrgOps",1191552750),new cljs.core.Keyword(null,"TimeSyncProt","TimeSyncProt",2121906415),new cljs.core.Keyword(null,"SampledValueControl","SampledValueControl",-1835009617),new cljs.core.Keyword(null,"ConductingEquipment","ConductingEquipment",240024335),new cljs.core.Keyword(null,"GSE","GSE",-1057390737),new cljs.core.Keyword(null,"FileHandling","FileHandling",1280872816),new cljs.core.Keyword(null,"GOOSE","GOOSE",-1318299056),new cljs.core.Keyword(null,"EqSubFunction","EqSubFunction",-1274488144),new cljs.core.Keyword(null,"Substation","Substation",-1616046062),new cljs.core.Keyword(null,"GSEControl","GSEControl",1967882450),new cljs.core.Keyword(null,"ConnectivityNode","ConnectivityNode",963767219),new cljs.core.Keyword(null,"Services","Services",216940693),new cljs.core.Keyword(null,"SubFunction","SubFunction",-616419755),new cljs.core.Keyword(null,"LDevice","LDevice",185641685),new cljs.core.Keyword(null,"Bay","Bay",481732854),new cljs.core.Keyword(null,"GOOSESecurity","GOOSESecurity",1603518615),new cljs.core.Keyword(null,"ValueHandling","ValueHandling",-1748635433),new cljs.core.Keyword(null,"DA","DA",770036184),new cljs.core.Keyword(null,"TransformerWinding","TransformerWinding",1970243449),new cljs.core.Keyword(null,"EnumVal","EnumVal",-365622982),new cljs.core.Keyword(null,"RptEnabled","RptEnabled",-2056798822),new cljs.core.Keyword(null,"GSESettings","GSESettings",-381240710),new cljs.core.Keyword(null,"PowerTransformer","PowerTransformer",-1987658022),new cljs.core.Keyword(null,"CommProt","CommProt",1024567547),new cljs.core.Keyword(null,"PhysConn","PhysConn",-560502213),new cljs.core.Keyword(null,"VoltageLevel","VoltageLevel",1806986235),new cljs.core.Keyword(null,"Association","Association",1117992412),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"ProtNs","ProtNs",-321700004),new cljs.core.Keyword(null,"Voltage","Voltage",-463905283),new cljs.core.Keyword(null,"ReportControl","ReportControl",2059382493),new cljs.core.Keyword(null,"ClientLN","ClientLN",-837811427),new cljs.core.Keyword(null,"LNodeType","LNodeType",-1328186018),new cljs.core.Keyword(null,"LN","LN",-19107970)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),"true"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clock","clock",-894301127),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"kdc","kdc",-1313452933),"false",new cljs.core.Keyword(null,"router","router",1091916230),"false"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedName","iedName",402101163),"None",new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),"",new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bufTime","bufTime",51492580),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"0",new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),"LLN0",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"true",new cljs.core.Keyword(null,"prefix","prefix",-265908465),"",new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"phase","phase",575722892),"none",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"certificate","certificate",-1722392944),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"none","none",1333468478),"true",new cljs.core.Keyword(null,"password","password",417022471),"false",new cljs.core.Keyword(null,"strong","strong",269529000),"false",new cljs.core.Keyword(null,"timeout","timeout",-318625318),"30",new cljs.core.Keyword(null,"weak","weak",-263559193),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"synchSrcId","synchSrcId",-1341424891),new cljs.core.Keyword(null,"samplesPerSec","samplesPerSec",290641416),new cljs.core.Keyword(null,"nofASDU","nofASDU",549933451),new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"svID","svID",2004984953),new cljs.core.Keyword(null,"pdcTimeStamp","pdcTimeStamp",-807293638),new cljs.core.Keyword(null,"smpRate","smpRate",-200743717)],["Fix","false","false","Fix","false","Fix","Fix","Fix","false","Fix"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nameStructure","nameStructure",1614188240),"IEDName",new cljs.core.Keyword(null,"revision","revision",-1350113114),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bufConf","bufConf",-1805669827),"false",new cljs.core.Keyword(null,"bufMode","bufMode",442239108),"both"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"transient","transient",-741416458),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delivery","delivery",-1844470516),"multicast",new cljs.core.Keyword(null,"deliveryConf","deliveryConf",1274627683),"false",new cljs.core.Keyword(null,"rSV","rSV",-377232507),"false",new cljs.core.Keyword(null,"sv","sv",-170947079),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),new cljs.core.Keyword(null,"rptID","rptID",-1638118187),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),new cljs.core.Keyword(null,"owner","owner",-392611939)],["Fix","Fix","Fix","Fix","Fix","Fix","Fix","false","false"]),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"engRight","engRight",-1595406869),"full",new cljs.core.Keyword(null,"originalSclRelease","originalSclRelease",-1081077436),"1",new cljs.core.Keyword(null,"originalSclRevision","originalSclRevision",-836709520),"A",new cljs.core.Keyword(null,"originalSclVersion","originalSclVersion",-1809524001),"2003"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fixLnInst","fixLnInst",1397782802),"false",new cljs.core.Keyword(null,"fixPrefix","fixPrefix",2000600117),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rSV","rSV",-377232507),new cljs.core.Keyword(null,"supportsLdName","supportsLdName",-1152946517),new cljs.core.Keyword(null,"unbufReport","unbufReport",-1256563765),new cljs.core.Keyword(null,"readLog","readLog",-1167325044),new cljs.core.Keyword(null,"gsse","gsse",1726144048),new cljs.core.Keyword(null,"bufReport","bufReport",499691121),new cljs.core.Keyword(null,"noIctBinding","noIctBinding",592113523),new cljs.core.Keyword(null,"sv","sv",-170947079),new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),new cljs.core.Keyword(null,"goose","goose",-536708771)],["false","false","false","false","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encryption","encryption",932327985),"false",new cljs.core.Keyword(null,"signature","signature",1463754794),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"Fix",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"Fix",new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),"Fix"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actSG","actSG",1268860441),"1",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsr","hsr",-337177447),"false",new cljs.core.Keyword(null,"prp","prp",-170777589),"false",new cljs.core.Keyword(null,"rstp","rstp",1328619181),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"gi","gi",615521304),"true",new cljs.core.Keyword(null,"period","period",-352129191),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c37_238","c37_238",-898135915),"false",new cljs.core.Keyword(null,"iec61850_9_3","iec61850_9_3",634944364),"false",new cljs.core.Keyword(null,"other","other",995793544),"false",new cljs.core.Keyword(null,"sntp","sntp",2031979313),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refreshTime","refreshTime",1227432160),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"smpMod","smpMod",1474067362),new cljs.core.Keyword(null,"multicast","multicast",663249443),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"sampleRate","sampleRate",-541273751),new cljs.core.Keyword(null,"synchSourceId","synchSourceId",1337574989),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161)],["false","false","SmpPerPeriod","true","","false","false","false","false","None"]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ftp","ftp",911215182),"false",new cljs.core.Keyword(null,"ftps","ftps",-181752509),"false",new cljs.core.Keyword(null,"mms","mms",2022958659),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"goose","goose",-536708771),"true",new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161),"None",new cljs.core.Keyword(null,"type","type",1174270348),"GOOSE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameLength","nameLength",1065745338),"32"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setToRO","setToRO",-293917888),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"max","max",61366548),"1"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appID","appID",-437327348),"Fix",new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"dataLabel","dataLabel",-281723456),"Fix",new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ipv6","ipv6",1396006004),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"8-MMS"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902),""], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indexed","indexed",390758624),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"buffered","buffered",-1922691934),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"bufOvfl","bufOvfl",-2072761018),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"entryID","entryID",-1540914964),new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),new cljs.core.Keyword(null,"dataRef","dataRef",238120492),new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532),new cljs.core.Keyword(null,"seqNum","seqNum",-2121388205),new cljs.core.Keyword(null,"configRef","configRef",617933566)],["true","false","false","","0","true","0","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null)]);
openscd.scl.with_defaults = (function openscd$scl$with_defaults(p__12821){
var map__12822 = p__12821;
var map__12822__$1 = cljs.core.__destructure_map(map__12822);
var element = map__12822__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12822__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var default_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.defaults,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(cljs.core.truth_(default_attrs)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,attrs], 0)):attrs));
});
openscd.scl.without_identifiers = (function openscd$scl$without_identifiers(p__12823){
var map__12824 = p__12823;
var map__12824__$1 = cljs.core.__destructure_map(map__12824);
var element = map__12824__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc,attrs,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var G__12825 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element));
return (openscd.scl.identifier_attributes.cljs$core$IFn$_invoke$arity$1 ? openscd.scl.identifier_attributes.cljs$core$IFn$_invoke$arity$1(G__12825) : openscd.scl.identifier_attributes.call(null, G__12825));
})()));
});
openscd.scl.tos = (function openscd$scl$tos(p__12827,elm){
var map__12828 = p__12827;
var map__12828__$1 = cljs.core.__destructure_map(map__12828);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12828__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12828__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12828__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12828__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var ancestor = elm.closest(scope);
if(cljs.core.truth_((function (){var and__5000__auto__ = ancestor;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.some((function (p1__12826_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__12826_SHARP_);
}),cljs.core.vec(ancestor.querySelectorAll(from)));
} else {
return and__5000__auto__;
}
})())){
var referents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (target){
return cljs.core.every_QMARK_((function (p__12829){
var map__12830 = p__12829;
var map__12830__$1 = cljs.core.__destructure_map(map__12830);
var from__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12830__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12830__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target.getAttribute(to__$1),elm.getAttribute(from__$1));
}),fields);
}),cljs.core.vec(ancestor.querySelectorAll(to)));
return referents;
} else {
return null;
}
});
openscd.scl.with_schema_references = (function openscd$scl$with_schema_references(p__12831){
var map__12832 = p__12831;
var map__12832__$1 = cljs.core.__destructure_map(map__12832);
var element = map__12832__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12832__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12832__$1,new cljs.core.Keyword(null,"content","content",15833224));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.schema_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
var referents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(openscd.scl.domToEdn,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$3(openscd.scl.tos,refs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(element)))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"content","content",15833224),(cljs.core.truth_((function (){var or__5002__auto__ = content;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return referents;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(content,referents):null));
});
openscd.scl.with_deep_schema_references = (function openscd$scl$with_deep_schema_references(p__12833){
var map__12834 = p__12833;
var map__12834__$1 = cljs.core.__destructure_map(map__12834);
var element = map__12834__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12834__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12834__$1,new cljs.core.Keyword(null,"content","content",15833224));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.deep_schema_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
var referents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(openscd.scl.domToEdn,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$3(openscd.scl.tos,refs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(element)))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"content","content",15833224),(cljs.core.truth_((function (){var or__5002__auto__ = content;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return referents;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(content,referents):null));
});
/**
 * @param {...*} var_args
 */
openscd.scl.fcda_references = (function() { 
var openscd$scl$fcda_references__delegate = function (p__12838,p__12839){
var map__12840 = p__12838;
var map__12840__$1 = cljs.core.__destructure_map(map__12840);
var description = map__12840__$1;
var map__12841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__12841__$1 = cljs.core.__destructure_map(map__12841);
var ldInst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12841__$1,new cljs.core.Keyword(null,"ldInst","ldInst",-235322900));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12841__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var lnClass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12841__$1,new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557));
var lnInst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12841__$1,new cljs.core.Keyword(null,"lnInst","lnInst",1375769467));
var doName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12841__$1,new cljs.core.Keyword(null,"doName","doName",-1127433548));
var daName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12841__$1,new cljs.core.Keyword(null,"daName","daName",-674376218));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12840__$1,new cljs.core.Keyword(null,"content","content",15833224));
var map__12842 = p__12839;
var map__12842__$1 = cljs.core.__destructure_map(map__12842);
var opts = map__12842__$1;
var deep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12842__$1,new cljs.core.Keyword(null,"deep","deep",2090866875));
var element = new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(description));
var SCL = element.closest("SCL");
var IED = element.closest("IED");
var prefix_selector = ((clojure.string.blank_QMARK_(prefix))?null:["[prefix='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"']"].join(''));
var selector = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lnClass,"LLN0"))?["LDevice[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ldInst),"'] LN0[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnInst),"']"].join(''):["LDevice[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ldInst),"'] LN",prefix_selector,"[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnInst),"'][lnClass='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnClass),"']"].join(''));
var LN = IED.querySelector(selector);
var lnType = LN.getAttribute("lnType");
var LNType = SCL.querySelector(["DataTypeTemplates LNodeType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnType),"']"].join(''));
var do_name_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12835_SHARP_){
return clojure.string.replace(p1__12835_SHARP_,/\\(\\d+\\)/,"");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(doName,/\./));
var DO = LNType.querySelector(["DO[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(do_name_segments)),"']"].join(''));
var DOI = (cljs.core.truth_(DO)?LN.querySelector([":scope > DOI[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(do_name_segments)),"']"].join('')):null);
var SDI = new cljs.core.Keyword(null,"sdi","sdi",1305828274).cljs$core$IFn$_invoke$arity$1((function (p__12843){
while(true){
var map__12844 = p__12843;
var map__12844__$1 = cljs.core.__destructure_map(map__12844);
var sdi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12844__$1,new cljs.core.Keyword(null,"sdi","sdi",1305828274));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12844__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((sdi == null)){
return null;
} else {
var new_sdi = sdi.querySelector([":scope >SDI[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((((new_sdi == null)) || (cljs.core.empty_QMARK_(cljs.core.rest(names))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdi","sdi",1305828274),sdi,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__12905 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdi","sdi",1305828274),new_sdi,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__12843 = G__12905;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdi","sdi",1305828274),DOI,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(do_name_segments)], null)));
var DAI = (cljs.core.truth_(SDI)?SDI.querySelector([":scope DAI[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(do_name_segments)),"']"].join('')):null);
var DOType = (cljs.core.truth_(DO)?SCL.querySelector(["DataTypeTemplates DOType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(DO.getAttribute("type")),"']"].join('')):null);
var sdo_type = new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884).cljs$core$IFn$_invoke$arity$1((function (p__12845){
while(true){
var map__12846 = p__12845;
var map__12846__$1 = cljs.core.__destructure_map(map__12846);
var sdo_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12846__$1,new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12846__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((sdo_type == null)){
return null;
} else {
var sdo = sdo_type.querySelector(["SDO[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((sdo == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),sdo_type,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__12906 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),SCL.querySelector(["DataTypeTemplates DOType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sdo.getAttribute("type")),"'] SDO"].join('')),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__12845 = G__12906;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),DOType,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(do_name_segments)], null)));
var da_name_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12836_SHARP_){
return clojure.string.replace(p1__12836_SHARP_,/\\(\\d+\\)/,"");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(daName,/\\./));
var DA = (cljs.core.truth_(sdo_type)?sdo_type.querySelector(["DA[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(da_name_segments)),"']"].join('')):null);
var DAType = (cljs.core.truth_(DA)?SCL.querySelector(["DataTypeTemplates DAType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(DA.getAttribute("type")),"']"].join('')):null);
var bda_type = new cljs.core.Keyword(null,"bda-type","bda-type",1629498884).cljs$core$IFn$_invoke$arity$1((function (p__12847){
while(true){
var map__12848 = p__12847;
var map__12848__$1 = cljs.core.__destructure_map(map__12848);
var bda_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12848__$1,new cljs.core.Keyword(null,"bda-type","bda-type",1629498884));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12848__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((bda_type == null)){
return null;
} else {
var bda = bda_type.querySelector(["BDA[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((bda == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),bda_type,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__12907 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),SCL.querySelector(["DataTypeTemplates DAType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bda.getAttribute("type")),"'] BDA, DataTypeTemplates EnumType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bda.getAttribute("type"))].join('')),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__12847 = G__12907;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),DAType,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(da_name_segments)], null)));
var linked_type = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bda_type,DAType,sdo_type,DOType,LNType], null)));
var extra_content = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12837_SHARP_){
return (openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2 ? openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2(p1__12837_SHARP_,opts) : openscd.scl.domToEdn.call(null, p1__12837_SHARP_,opts));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__5000__auto__ = deep;
if(cljs.core.truth_(and__5000__auto__)){
return linked_type;
} else {
return and__5000__auto__;
}
})(),DAI], null)));
var new_content = cljs.core.into.cljs$core$IFn$_invoke$arity$2(content,extra_content);
if(cljs.core.truth_(cljs.core.count(extra_content))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(description,new cljs.core.Keyword(null,"content","content",15833224),new_content);
} else {
return description;
}
};
var openscd$scl$fcda_references = function (p__12838,var_args){
var p__12839 = null;
if (arguments.length > 1) {
var G__12908__i = 0, G__12908__a = new Array(arguments.length -  1);
while (G__12908__i < G__12908__a.length) {G__12908__a[G__12908__i] = arguments[G__12908__i + 1]; ++G__12908__i;}
  p__12839 = new cljs.core.IndexedSeq(G__12908__a,0,null);
} 
return openscd$scl$fcda_references__delegate.call(this,p__12838,p__12839);};
openscd$scl$fcda_references.cljs$lang$maxFixedArity = 1;
openscd$scl$fcda_references.cljs$lang$applyTo = (function (arglist__12909){
var p__12838 = cljs.core.first(arglist__12909);
var p__12839 = cljs.core.rest(arglist__12909);
return openscd$scl$fcda_references__delegate(p__12838,p__12839);
});
openscd$scl$fcda_references.cljs$core$IFn$_invoke$arity$variadic = openscd$scl$fcda_references__delegate;
return openscd$scl$fcda_references;
})()
;
openscd.scl.special_references = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),openscd.scl.fcda_references], null);
openscd.scl.with_references = (function openscd$scl$with_references(element,opts){
if(cljs.core.contains_QMARK_(openscd.scl.special_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)))){
var fexpr__12849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.special_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)));
return (fexpr__12849.cljs$core$IFn$_invoke$arity$2 ? fexpr__12849.cljs$core$IFn$_invoke$arity$2(element,opts) : fexpr__12849.call(null, element,opts));
} else {
if(cljs.core.contains_QMARK_(openscd.scl.schema_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)))){
return openscd.scl.with_schema_references(element);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"deep","deep",2090866875).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.contains_QMARK_(openscd.scl.deep_schema_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)));
} else {
return and__5000__auto__;
}
})())){
return openscd.scl.with_deep_schema_references(element);
} else {
return element;
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
openscd.scl.Elm = (function (tag,attrs,content,__meta,__extmap,__hash){
this.tag = tag;
this.attrs = attrs;
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(openscd.scl.Elm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(openscd.scl.Elm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12851,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12855 = k12851;
var G__12855__$1 = (((G__12855 instanceof cljs.core.Keyword))?G__12855.fqn:null);
switch (G__12855__$1) {
case "tag":
return self__.tag;

break;
case "attrs":
return self__.attrs;

break;
case "content":
return self__.content;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12851,else__5303__auto__);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12856){
var vec__12857 = p__12856;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12857,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12857,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(openscd.scl.Elm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#openscd.scl.Elm{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
}));

(openscd.scl.Elm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12850){
var self__ = this;
var G__12850__$1 = this;
return (new cljs.core.RecordIter((0),G__12850__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(openscd.scl.Elm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(openscd.scl.Elm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,self__.__meta,self__.__extmap,self__.__hash));
}));

(openscd.scl.Elm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(openscd.scl.Elm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1983619414 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(openscd.scl.Elm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12852,other12853){
var self__ = this;
var this12852__$1 = this;
return (((!((other12853 == null)))) && ((((this12852__$1.constructor === other12853.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12852__$1.tag,other12853.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12852__$1.attrs,other12853.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12852__$1.content,other12853.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12852__$1.__extmap,other12853.__extmap)))))))))));
}));

(openscd.scl.Elm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12851){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12860 = k12851;
var G__12860__$1 = (((G__12860 instanceof cljs.core.Keyword))?G__12860.fqn:null);
switch (G__12860__$1) {
case "tag":
case "attrs":
case "content":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12851);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12850){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12861 = cljs.core.keyword_identical_QMARK_;
var expr__12862 = k__5309__auto__;
if(cljs.core.truth_((pred__12861.cljs$core$IFn$_invoke$arity$2 ? pred__12861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__12862) : pred__12861.call(null, new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__12862)))){
return (new openscd.scl.Elm(G__12850,self__.attrs,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12861.cljs$core$IFn$_invoke$arity$2 ? pred__12861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__12862) : pred__12861.call(null, new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__12862)))){
return (new openscd.scl.Elm(self__.tag,G__12850,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12861.cljs$core$IFn$_invoke$arity$2 ? pred__12861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__12862) : pred__12861.call(null, new cljs.core.Keyword(null,"content","content",15833224),expr__12862)))){
return (new openscd.scl.Elm(self__.tag,self__.attrs,G__12850,self__.__meta,self__.__extmap,null));
} else {
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12850),null));
}
}
}
}));

(openscd.scl.Elm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(openscd.scl.Elm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12850){
var self__ = this;
var this__5299__auto____$1 = this;
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,G__12850,self__.__extmap,self__.__hash));
}));

(openscd.scl.Elm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(openscd.scl.Elm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","String","js/String",-2070054036,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentTreeMap","PersistentTreeMap",323423120,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentHashSet","PersistentHashSet",781756881,null)], null))], null);
}));

(openscd.scl.Elm.cljs$lang$type = true);

(openscd.scl.Elm.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"openscd.scl/Elm",null,(1),null));
}));

(openscd.scl.Elm.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"openscd.scl/Elm");
}));

/**
 * Positional factory function for openscd.scl/Elm.
 */
openscd.scl.__GT_Elm = (function openscd$scl$__GT_Elm(tag,attrs,content){
return (new openscd.scl.Elm(tag,attrs,content,null,null,null));
});

/**
 * Factory function for openscd.scl/Elm, taking a map of keywords to field values.
 */
openscd.scl.map__GT_Elm = (function openscd$scl$map__GT_Elm(G__12854){
var extmap__5342__auto__ = (function (){var G__12864 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12854,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], 0));
if(cljs.core.record_QMARK_(G__12854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12864);
} else {
return G__12864;
}
})();
return (new openscd.scl.Elm(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__12854),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__12854),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__12854),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

openscd.scl.domToEdn = cljs.core.memoize((function() { 
var G__12912__delegate = function (dom,p__12867){
while(true){
var map__12868 = p__12867;
var map__12868__$1 = cljs.core.__destructure_map(map__12868);
var opts = map__12868__$1;
var deep = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12868__$1,new cljs.core.Keyword(null,"deep","deep",2090866875),false);
if(cljs.core.truth_(dom)){
var pred__12869 = cljs.core._EQ_;
var expr__12870 = dom.nodeType;
if(cljs.core.truth_((pred__12869.cljs$core$IFn$_invoke$arity$2 ? pred__12869.cljs$core$IFn$_invoke$arity$2((3),expr__12870) : pred__12869.call(null, (3),expr__12870)))){
return clojure.string.trim(dom.textContent);
} else {
if(cljs.core.truth_((pred__12869.cljs$core$IFn$_invoke$arity$2 ? pred__12869.cljs$core$IFn$_invoke$arity$2((4),expr__12870) : pred__12869.call(null, (4),expr__12870)))){
return dom.data;
} else {
if(cljs.core.truth_((pred__12869.cljs$core$IFn$_invoke$arity$2 ? pred__12869.cljs$core$IFn$_invoke$arity$2((9),expr__12870) : pred__12869.call(null, (9),expr__12870)))){
var G__12913 = dom.documentElement;
var G__12914 = opts;
dom = G__12913;
p__12867 = G__12914;
continue;
} else {
if(cljs.core.truth_((pred__12869.cljs$core$IFn$_invoke$arity$2 ? pred__12869.cljs$core$IFn$_invoke$arity$2((1),expr__12870) : pred__12869.call(null, (1),expr__12870)))){
if(cljs.core.truth_((function (){var or__5002__auto__ = deep;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dom.tagName,"DataTypeTemplates");
}
})())){
return openscd.scl.with_references(openscd.scl.without_identifiers(openscd.scl.with_defaults(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),dom.tagName,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (dom,p__12867,pred__12869,expr__12870,map__12868,map__12868__$1,opts,deep){
return (function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a.name),a.value], null);
});})(dom,p__12867,pred__12869,expr__12870,map__12868,map__12868__$1,opts,deep))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom.attributes], 0))),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (dom,p__12867,pred__12869,expr__12870,map__12868,map__12868__$1,opts,deep){
return (function (p1__12865_SHARP_){
return (!((((p1__12865_SHARP_ == null)) || (clojure.string.blank_QMARK_(p1__12865_SHARP_)))));
});})(dom,p__12867,pred__12869,expr__12870,map__12868,map__12868__$1,opts,deep))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dom,p__12867,pred__12869,expr__12870,map__12868,map__12868__$1,opts,deep){
return (function (p1__12866_SHARP_){
return (openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2 ? openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2(p1__12866_SHARP_,opts) : openscd.scl.domToEdn.call(null, p1__12866_SHARP_,opts));
});})(dom,p__12867,pred__12869,expr__12870,map__12868,map__12868__$1,opts,deep))
,dom.childNodes)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925),dom], null)))),opts);
} else {
return null;
}
} else {
return null;
}
}
}
}
} else {
return null;
}
break;
}
};
var G__12912 = function (dom,var_args){
var p__12867 = null;
if (arguments.length > 1) {
var G__12915__i = 0, G__12915__a = new Array(arguments.length -  1);
while (G__12915__i < G__12915__a.length) {G__12915__a[G__12915__i] = arguments[G__12915__i + 1]; ++G__12915__i;}
  p__12867 = new cljs.core.IndexedSeq(G__12915__a,0,null);
} 
return G__12912__delegate.call(this,dom,p__12867);};
G__12912.cljs$lang$maxFixedArity = 1;
G__12912.cljs$lang$applyTo = (function (arglist__12916){
var dom = cljs.core.first(arglist__12916);
var p__12867 = cljs.core.rest(arglist__12916);
return G__12912__delegate(dom,p__12867);
});
G__12912.cljs$core$IFn$_invoke$arity$variadic = G__12912__delegate;
return G__12912;
})()
);
goog.exportSymbol('openscd.scl.domToEdn', openscd.scl.domToEdn);
openscd.scl.render_attributes = (function openscd$scl$render_attributes(attrs,target){
var table = document.createElement("table");
var seq__12872_12917 = cljs.core.seq(attrs);
var chunk__12873_12918 = null;
var count__12874_12919 = (0);
var i__12875_12920 = (0);
while(true){
if((i__12875_12920 < count__12874_12919)){
var vec__12882_12921 = chunk__12873_12918.cljs$core$IIndexed$_nth$arity$2(null, i__12875_12920);
var k_12922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12882_12921,(0),null);
var v_12923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12882_12921,(1),null);
var tr_12924 = document.createElement("tr");
var th_12925 = document.createElement("th");
var td_12926 = document.createElement("td");
var ns_th_12927 = document.createElement("th");
var components_12928 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12922),/:/,(2));
var anm_12929 = cljs.core.last(components_12928);
var ans_component_12930 = cljs.core.first(components_12928);
var ans_12931 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12929,ans_component_12930))?"":ans_component_12930);
(ns_th_12927.textContent = ans_12931);

(th_12925.textContent = anm_12929);

if((v_12923 == null)){
(td_12926.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_12923)){
(td_12926.innerHTML = "<i>(empty)</i>");
} else {
(td_12926.textContent = v_12923);
}
}

tr_12924.appendChild(ns_th_12927);

tr_12924.appendChild(th_12925);

tr_12924.appendChild(td_12926);

table.appendChild(tr_12924);


var G__12932 = seq__12872_12917;
var G__12933 = chunk__12873_12918;
var G__12934 = count__12874_12919;
var G__12935 = (i__12875_12920 + (1));
seq__12872_12917 = G__12932;
chunk__12873_12918 = G__12933;
count__12874_12919 = G__12934;
i__12875_12920 = G__12935;
continue;
} else {
var temp__5804__auto___12936 = cljs.core.seq(seq__12872_12917);
if(temp__5804__auto___12936){
var seq__12872_12937__$1 = temp__5804__auto___12936;
if(cljs.core.chunked_seq_QMARK_(seq__12872_12937__$1)){
var c__5525__auto___12938 = cljs.core.chunk_first(seq__12872_12937__$1);
var G__12939 = cljs.core.chunk_rest(seq__12872_12937__$1);
var G__12940 = c__5525__auto___12938;
var G__12941 = cljs.core.count(c__5525__auto___12938);
var G__12942 = (0);
seq__12872_12917 = G__12939;
chunk__12873_12918 = G__12940;
count__12874_12919 = G__12941;
i__12875_12920 = G__12942;
continue;
} else {
var vec__12885_12943 = cljs.core.first(seq__12872_12937__$1);
var k_12944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12885_12943,(0),null);
var v_12945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12885_12943,(1),null);
var tr_12946 = document.createElement("tr");
var th_12947 = document.createElement("th");
var td_12948 = document.createElement("td");
var ns_th_12949 = document.createElement("th");
var components_12950 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12944),/:/,(2));
var anm_12951 = cljs.core.last(components_12950);
var ans_component_12952 = cljs.core.first(components_12950);
var ans_12953 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12951,ans_component_12952))?"":ans_component_12952);
(ns_th_12949.textContent = ans_12953);

(th_12947.textContent = anm_12951);

if((v_12945 == null)){
(td_12948.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_12945)){
(td_12948.innerHTML = "<i>(empty)</i>");
} else {
(td_12948.textContent = v_12945);
}
}

tr_12946.appendChild(ns_th_12949);

tr_12946.appendChild(th_12947);

tr_12946.appendChild(td_12948);

table.appendChild(tr_12946);


var G__12954 = cljs.core.next(seq__12872_12937__$1);
var G__12955 = null;
var G__12956 = (0);
var G__12957 = (0);
seq__12872_12917 = G__12954;
chunk__12873_12918 = G__12955;
count__12874_12919 = G__12956;
i__12875_12920 = G__12957;
continue;
}
} else {
}
}
break;
}

return target.appendChild(table);
});
openscd.scl.tag_and_id = (function openscd$scl$tag_and_id(node){
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node));
} else {
return and__5000__auto__;
}
})())){
var elm_id = module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.identity(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node),((typeof elm_id === 'string')?elm_id:null)], null);
} else {
return null;
}
});
openscd.scl.render_node = (function openscd$scl$render_node(var_args){
var G__12890 = arguments.length;
switch (G__12890) {
case 2:
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(openscd.scl.render_node.cljs$core$IFn$_invoke$arity$2 = (function (data,target){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$3(data,target,(2));
}));

(openscd.scl.render_node.cljs$core$IFn$_invoke$arity$3 = (function (data,target,sibling_count){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$4(data,target,sibling_count,false);
}));

(openscd.scl.render_node.cljs$core$IFn$_invoke$arity$4 = (function (data,target,sibling_count,odd){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(data,target,sibling_count,odd,null);
}));

(openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5 = (function (data,target,sibling_count,odd,old_or_new){
if(typeof data === 'string'){
if((!(clojure.string.blank_QMARK_(data)))){
var span = document.createElement("span");
(span.textContent = data);

return target.append(span);
} else {
return null;
}
} else {
var details = document.createElement("details");
var summary = document.createElement("summary");
var child_count = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(data)));
var title = module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.identity(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)));
if(cljs.core.truth_(odd)){
(details.className = "odd");
} else {
}

if(cljs.core.truth_(old_or_new)){
summary.classList.add(cljs.core.name(old_or_new));
} else {
}

(summary.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," "].join(''));

details.appendChild(summary);

target.appendChild(details);

summary.addEventListener("contextmenu",(function (e){
e.preventDefault();

summary.append([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(data))].join(''));

return e.preventDefault();
}));

summary.addEventListener("mousedown",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(1))){
e.preventDefault();

return cljs.core.run_BANG_((function (p1__12888_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12888_SHARP_.tagName,"DETAILS")){
return (p1__12888_SHARP_.open = cljs.core.not(p1__12888_SHARP_.open));
} else {
return null;
}
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(details.children));
} else {
return null;
}
}));

details.addEventListener("toggle",(function (){
if(cljs.core.truth_((function (){var and__5000__auto__ = details.open;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(details.classList.contains("rendered"));
} else {
return and__5000__auto__;
}
})())){
details.classList.add("rendered");

openscd.scl.render_attributes(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(data),details);

var span = document.createElement("span");
(span.textContent = "Loading...");

details.appendChild(span);

return openscd.scl.after_next_paint((function (){
cljs.core.run_BANG_((function (node){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$4(node,details,child_count,cljs.core.not(odd));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(openscd.scl.tag_and_id,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(data)));

return details.removeChild(span);
}));
} else {
return null;
}
}));

if((sibling_count < (2))){
return (details.open = true);
} else {
return null;
}
}
}));

(openscd.scl.render_node.cljs$lang$maxFixedArity = 5);

openscd.scl.show_data = (function openscd$scl$show_data(data){
openscd.scl.render_node.cljs$core$IFn$_invoke$arity$2(data,document.body);

return data;
});
openscd.scl.render_attribute_diff = (function openscd$scl$render_attribute_diff(ours,theirs,target){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ours,theirs)){
return null;
} else {
var table = document.createElement("table");
var ks = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(theirs),cljs.core.keys(ours)));
var seq__12891_12959 = cljs.core.seq(ks);
var chunk__12892_12960 = null;
var count__12893_12961 = (0);
var i__12894_12962 = (0);
while(true){
if((i__12894_12962 < count__12893_12961)){
var k_12963 = chunk__12892_12960.cljs$core$IIndexed$_nth$arity$2(null, i__12894_12962);
var tr_12964 = document.createElement("tr");
var th_12965 = document.createElement("th");
var td_ours_12966 = document.createElement("td");
var td_arrow_12967 = document.createElement("td");
var td_theirs_12968 = document.createElement("td");
var ns_th_12969 = document.createElement("th");
var components_12970 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12963),/:/,(2));
var anm_12971 = cljs.core.last(components_12970);
var ans_component_12972 = cljs.core.first(components_12970);
var ans_12973 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12971,ans_component_12972))?"":ans_component_12972);
var v_ours_12974 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_12963) : ours.call(null, k_12963));
var v_theirs_12975 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_12963) : theirs.call(null, k_12963));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_12974,v_theirs_12975)){
} else {
(ns_th_12969.textContent = ans_12973);

(th_12965.textContent = anm_12971);

if((v_ours_12974 == null)){
(td_ours_12966.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_12974)){
(td_ours_12966.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_12966.textContent = v_ours_12974);
}
}

td_arrow_12967.classList.add("arrow");

(td_arrow_12967.textContent = "->");

if((v_theirs_12975 == null)){
(td_theirs_12968.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_12975)){
(td_theirs_12968.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_12968.textContent = v_theirs_12975);
}
}

tr_12964.appendChild(ns_th_12969);

tr_12964.appendChild(th_12965);

tr_12964.appendChild(td_ours_12966);

tr_12964.appendChild(td_arrow_12967);

tr_12964.appendChild(td_theirs_12968);

table.appendChild(tr_12964);
}


var G__12976 = seq__12891_12959;
var G__12977 = chunk__12892_12960;
var G__12978 = count__12893_12961;
var G__12979 = (i__12894_12962 + (1));
seq__12891_12959 = G__12976;
chunk__12892_12960 = G__12977;
count__12893_12961 = G__12978;
i__12894_12962 = G__12979;
continue;
} else {
var temp__5804__auto___12980 = cljs.core.seq(seq__12891_12959);
if(temp__5804__auto___12980){
var seq__12891_12981__$1 = temp__5804__auto___12980;
if(cljs.core.chunked_seq_QMARK_(seq__12891_12981__$1)){
var c__5525__auto___12982 = cljs.core.chunk_first(seq__12891_12981__$1);
var G__12983 = cljs.core.chunk_rest(seq__12891_12981__$1);
var G__12984 = c__5525__auto___12982;
var G__12985 = cljs.core.count(c__5525__auto___12982);
var G__12986 = (0);
seq__12891_12959 = G__12983;
chunk__12892_12960 = G__12984;
count__12893_12961 = G__12985;
i__12894_12962 = G__12986;
continue;
} else {
var k_12987 = cljs.core.first(seq__12891_12981__$1);
var tr_12988 = document.createElement("tr");
var th_12989 = document.createElement("th");
var td_ours_12990 = document.createElement("td");
var td_arrow_12991 = document.createElement("td");
var td_theirs_12992 = document.createElement("td");
var ns_th_12993 = document.createElement("th");
var components_12994 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12987),/:/,(2));
var anm_12995 = cljs.core.last(components_12994);
var ans_component_12996 = cljs.core.first(components_12994);
var ans_12997 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12995,ans_component_12996))?"":ans_component_12996);
var v_ours_12998 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_12987) : ours.call(null, k_12987));
var v_theirs_12999 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_12987) : theirs.call(null, k_12987));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_12998,v_theirs_12999)){
} else {
(ns_th_12993.textContent = ans_12997);

(th_12989.textContent = anm_12995);

if((v_ours_12998 == null)){
(td_ours_12990.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_12998)){
(td_ours_12990.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_12990.textContent = v_ours_12998);
}
}

td_arrow_12991.classList.add("arrow");

(td_arrow_12991.textContent = "->");

if((v_theirs_12999 == null)){
(td_theirs_12992.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_12999)){
(td_theirs_12992.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_12992.textContent = v_theirs_12999);
}
}

tr_12988.appendChild(ns_th_12993);

tr_12988.appendChild(th_12989);

tr_12988.appendChild(td_ours_12990);

tr_12988.appendChild(td_arrow_12991);

tr_12988.appendChild(td_theirs_12992);

table.appendChild(tr_12988);
}


var G__13000 = cljs.core.next(seq__12891_12981__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12891_12959 = G__13000;
chunk__12892_12960 = G__13001;
count__12893_12961 = G__13002;
i__12894_12962 = G__13003;
continue;
}
} else {
}
}
break;
}

return target.appendChild(table);
}
});
openscd.scl.render_node_diff = (function openscd$scl$render_node_diff(var_args){
var G__12901 = arguments.length;
switch (G__12901) {
case 3:
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$3 = (function (ours,theirs,target){
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$4(ours,theirs,target,(2));
}));

(openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$4 = (function (ours,theirs,target,sibling_count){
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5(ours,theirs,target,sibling_count,false);
}));

(openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5 = (function (ours,theirs,target,sibling_count,odd){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ours,theirs)){
return null;
} else {
if((theirs == null)){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(ours,target,sibling_count,odd,new cljs.core.Keyword(null,"old","old",-1825222690));
} else {
if((ours == null)){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(theirs,target,sibling_count,odd,new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
if(typeof ours === 'string'){
if(((clojure.string.blank_QMARK_(ours)) && (clojure.string.blank_QMARK_(theirs)))){
return null;
} else {
var span = document.createElement("span");
(span.textContent = [ours," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(theirs)].join(''));

return target.append(span);
}
} else {
var details = document.createElement("details");
var summary = document.createElement("summary");
var title = module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.identity((function (){var or__5002__auto__ = new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ours));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(theirs));
}
})());
if(cljs.core.truth_(odd)){
(details.className = "odd");
} else {
}

details.classList.add("diff");

(summary.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ours))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," "].join(''));

details.appendChild(summary);

target.appendChild(details);

summary.addEventListener("contextmenu",(function (e){
summary.append([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(ours))," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(theirs))].join(''));

return e.preventDefault();
}));

summary.addEventListener("auxclick",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(1))){
e.preventDefault();

return cljs.core.run_BANG_((function (p1__12895_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12895_SHARP_.tagName,"DETAILS")){
return (p1__12895_SHARP_.open = cljs.core.not(p1__12895_SHARP_.open));
} else {
return null;
}
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(details.children));
} else {
return null;
}
}));

details.addEventListener("toggle",(function (){
if(cljs.core.truth_((function (){var and__5000__auto__ = details.open;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(details.classList.contains("rendered"));
} else {
return and__5000__auto__;
}
})())){
details.classList.add("rendered");

openscd.scl.render_attribute_diff(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(ours),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(theirs),details);

var span = document.createElement("span");
(span.textContent = "Loading...");

details.appendChild(span);

return openscd.scl.after_next_paint((function (){
var their_identified_elements = cljs.core.group_by(openscd.scl.tag_and_id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(theirs)));
var our_identified_elements = cljs.core.group_by(openscd.scl.tag_and_id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ours)));
var element_pairs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12896_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__12896_SHARP_),(2))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12896_SHARP_),cljs.core.second(p1__12896_SHARP_))));
}),cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([their_identified_elements,our_identified_elements], 0))));
var their_identities = cljs.core.set(cljs.core.keys(their_identified_elements));
var our_identities = cljs.core.set(cljs.core.keys(our_identified_elements));
var their_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12897_SHARP_){
return cljs.core.first((their_identified_elements.cljs$core$IFn$_invoke$arity$1 ? their_identified_elements.cljs$core$IFn$_invoke$arity$1(p1__12897_SHARP_) : their_identified_elements.call(null, p1__12897_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(their_identities,our_identities));
var our_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12898_SHARP_){
return cljs.core.first((our_identified_elements.cljs$core$IFn$_invoke$arity$1 ? our_identified_elements.cljs$core$IFn$_invoke$arity$1(p1__12898_SHARP_) : our_identified_elements.call(null, p1__12898_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(our_identities,their_identities));
var child_count = ((cljs.core.count(element_pairs) + cljs.core.count(their_elements)) + cljs.core.count(our_elements));
var elements = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12899_SHARP_){
var or__5002__auto__ = openscd.scl.tag_and_id(p1__12899_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return openscd.scl.tag_and_id(cljs.core.first(p1__12899_SHARP_));
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(element_pairs,their_elements,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([our_elements], 0)));
var nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ours))),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(theirs)))], null));
cljs.core.run_BANG_((function (node_or_pair){
if(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node_or_pair))){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(node_or_pair,details,child_count,cljs.core.not(odd),new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
var vec__12902 = node_or_pair;
var ours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(0),null);
var theirs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(1),null);
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5(ours__$1,theirs__$1,details,child_count,cljs.core.not(odd));
}
}),nodes);

return details.removeChild(span);
}));
} else {
return null;
}
}));

if((sibling_count < (2))){
return (details.open = true);
} else {
return null;
}
}
}
}
}
}));

(openscd.scl.render_node_diff.cljs$lang$maxFixedArity = 5);

openscd.scl.show_diff = (function openscd$scl$show_diff(edn1,edn2,target){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edn1,edn2)){
return null;
} else {
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$3(edn1,edn2,target);
}
});
openscd.scl.sclDomDiff = (function openscd$scl$sclDomDiff(dom1,dom2,target,deep){
var edn1 = openscd.scl.domToEdn(dom1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deep","deep",2090866875),deep], null));
var edn2 = openscd.scl.domToEdn(dom2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deep","deep",2090866875),deep], null));
return openscd.scl.show_diff(edn1,edn2,target);
});
goog.exportSymbol('openscd.scl.sclDomDiff', openscd.scl.sclDomDiff);
openscd.scl.sclDomToEdn = (function openscd$scl$sclDomToEdn(dom,deep){
return openscd.scl.show_data(openscd.scl.domToEdn(dom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deep","deep",2090866875),deep], null)));
});
goog.exportSymbol('openscd.scl.sclDomToEdn', openscd.scl.sclDomToEdn);

//# sourceMappingURL=openscd.scl.js.map
