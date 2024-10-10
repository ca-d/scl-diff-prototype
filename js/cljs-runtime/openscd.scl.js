import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.js";
import "./clojure.string.js";
import "./clojure.data.js";
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
openscd.scl.defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SubNetwork","SubNetwork",1513043072),new cljs.core.Keyword(null,"DAI","DAI",-1380715744),new cljs.core.Keyword(null,"ConfDataSet","ConfDataSet",-960244928),new cljs.core.Keyword(null,"SMV","SMV",369202016),new cljs.core.Keyword(null,"NeutralPoint","NeutralPoint",-1282681631),new cljs.core.Keyword(null,"Function","Function",1904540321),new cljs.core.Keyword(null,"AccessPoint","AccessPoint",-9059166),new cljs.core.Keyword(null,"LNode","LNode",566631042),new cljs.core.Keyword(null,"ServerAt","ServerAt",-80406878),new cljs.core.Keyword(null,"Inputs","Inputs",-958498078),new cljs.core.Keyword(null,"DOType","DOType",-946654270),new cljs.core.Keyword(null,"LogControl","LogControl",1132593187),new cljs.core.Keyword(null,"SubEquipment","SubEquipment",-1880159453),new cljs.core.Keyword(null,"Server","Server",-1453472893),new cljs.core.Keyword(null,"SMVSettings","SMVSettings",-772432476),new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),new cljs.core.Keyword(null,"ConnectedAP","ConnectedAP",-1381548891),new cljs.core.Keyword(null,"Header","Header",1255420133),new cljs.core.Keyword(null,"ConfReportControl","ConfReportControl",1171542373),new cljs.core.Keyword(null,"DO","DO",555377637),new cljs.core.Keyword(null,"SMVsc","SMVsc",-674389914),new cljs.core.Keyword(null,"ReportSettings","ReportSettings",-2135201114),new cljs.core.Keyword(null,"IED","IED",-1202207737),new cljs.core.Keyword(null,"DataSet","DataSet",1832502311),new cljs.core.Keyword(null,"Communication","Communication",800195751),new cljs.core.Keyword(null,"ConfLNs","ConfLNs",-174971193),new cljs.core.Keyword(null,"SDO","SDO",-467426968),new cljs.core.Keyword(null,"EqFunction","EqFunction",1525876264),new cljs.core.Keyword(null,"GeneralEquipment","GeneralEquipment",94889864),new cljs.core.Keyword(null,"BDA","BDA",1284162761),new cljs.core.Keyword(null,"Terminal","Terminal",-1610057718),new cljs.core.Keyword(null,"Log","Log",1668795722),new cljs.core.Keyword(null,"SettingGroups","SettingGroups",-1927378165),new cljs.core.Keyword(null,"ClientServices","ClientServices",1712773067),new cljs.core.Keyword(null,"Line","Line",1577484267),new cljs.core.Keyword(null,"DOI","DOI",675703916),new cljs.core.Keyword(null,"McSecurity","McSecurity",-1266851668),new cljs.core.Keyword(null,"SMVSecurity","SMVSecurity",1159028460),new cljs.core.Keyword(null,"LogSettings","LogSettings",1082414093),new cljs.core.Keyword(null,"SettingControl","SettingControl",1352987789),new cljs.core.Keyword(null,"RedProt","RedProt",-693281587),new cljs.core.Keyword(null,"SDI","SDI",-2071007315),new cljs.core.Keyword(null,"EnumType","EnumType",-1438451634),new cljs.core.Keyword(null,"TapChanger","TapChanger",-2048168786),new cljs.core.Keyword(null,"DAType","DAType",-525603538),new cljs.core.Keyword(null,"TrgOps","TrgOps",1191552750),new cljs.core.Keyword(null,"TimeSyncProt","TimeSyncProt",2121906415),new cljs.core.Keyword(null,"SampledValueControl","SampledValueControl",-1835009617),new cljs.core.Keyword(null,"ConductingEquipment","ConductingEquipment",240024335),new cljs.core.Keyword(null,"GSE","GSE",-1057390737),new cljs.core.Keyword(null,"FileHandling","FileHandling",1280872816),new cljs.core.Keyword(null,"GOOSE","GOOSE",-1318299056),new cljs.core.Keyword(null,"EqSubFunction","EqSubFunction",-1274488144),new cljs.core.Keyword(null,"Substation","Substation",-1616046062),new cljs.core.Keyword(null,"GSEControl","GSEControl",1967882450),new cljs.core.Keyword(null,"ConnectivityNode","ConnectivityNode",963767219),new cljs.core.Keyword(null,"Services","Services",216940693),new cljs.core.Keyword(null,"SubFunction","SubFunction",-616419755),new cljs.core.Keyword(null,"LDevice","LDevice",185641685),new cljs.core.Keyword(null,"Bay","Bay",481732854),new cljs.core.Keyword(null,"GOOSESecurity","GOOSESecurity",1603518615),new cljs.core.Keyword(null,"ValueHandling","ValueHandling",-1748635433),new cljs.core.Keyword(null,"DA","DA",770036184),new cljs.core.Keyword(null,"TransformerWinding","TransformerWinding",1970243449),new cljs.core.Keyword(null,"EnumVal","EnumVal",-365622982),new cljs.core.Keyword(null,"RptEnabled","RptEnabled",-2056798822),new cljs.core.Keyword(null,"GSESettings","GSESettings",-381240710),new cljs.core.Keyword(null,"PowerTransformer","PowerTransformer",-1987658022),new cljs.core.Keyword(null,"CommProt","CommProt",1024567547),new cljs.core.Keyword(null,"PhysConn","PhysConn",-560502213),new cljs.core.Keyword(null,"VoltageLevel","VoltageLevel",1806986235),new cljs.core.Keyword(null,"Association","Association",1117992412),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"ProtNs","ProtNs",-321700004),new cljs.core.Keyword(null,"Voltage","Voltage",-463905283),new cljs.core.Keyword(null,"ReportControl","ReportControl",2059382493),new cljs.core.Keyword(null,"ClientLN","ClientLN",-837811427),new cljs.core.Keyword(null,"LNodeType","LNodeType",-1328186018),new cljs.core.Keyword(null,"LN","LN",-19107970)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),"true"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clock","clock",-894301127),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"kdc","kdc",-1313452933),"false",new cljs.core.Keyword(null,"router","router",1091916230),"false"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedName","iedName",402101163),"None",new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),"",new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bufTime","bufTime",51492580),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"0",new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),"LLN0",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"true",new cljs.core.Keyword(null,"prefix","prefix",-265908465),"",new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"phase","phase",575722892),"none",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"certificate","certificate",-1722392944),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"none","none",1333468478),"true",new cljs.core.Keyword(null,"password","password",417022471),"false",new cljs.core.Keyword(null,"strong","strong",269529000),"false",new cljs.core.Keyword(null,"timeout","timeout",-318625318),"30",new cljs.core.Keyword(null,"weak","weak",-263559193),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"synchSrcId","synchSrcId",-1341424891),new cljs.core.Keyword(null,"samplesPerSec","samplesPerSec",290641416),new cljs.core.Keyword(null,"nofASDU","nofASDU",549933451),new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"svID","svID",2004984953),new cljs.core.Keyword(null,"pdcTimeStamp","pdcTimeStamp",-807293638),new cljs.core.Keyword(null,"smpRate","smpRate",-200743717)],["Fix","false","false","Fix","false","Fix","Fix","Fix","false","Fix"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nameStructure","nameStructure",1614188240),"IEDName",new cljs.core.Keyword(null,"revision","revision",-1350113114),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bufConf","bufConf",-1805669827),"false",new cljs.core.Keyword(null,"bufMode","bufMode",442239108),"both"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"transient","transient",-741416458),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delivery","delivery",-1844470516),"multicast",new cljs.core.Keyword(null,"deliveryConf","deliveryConf",1274627683),"false",new cljs.core.Keyword(null,"rSV","rSV",-377232507),"false",new cljs.core.Keyword(null,"sv","sv",-170947079),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),new cljs.core.Keyword(null,"rptID","rptID",-1638118187),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),new cljs.core.Keyword(null,"owner","owner",-392611939)],["Fix","Fix","Fix","Fix","Fix","Fix","Fix","false","false"]),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"engRight","engRight",-1595406869),"full",new cljs.core.Keyword(null,"originalSclRelease","originalSclRelease",-1081077436),"1",new cljs.core.Keyword(null,"originalSclRevision","originalSclRevision",-836709520),"A",new cljs.core.Keyword(null,"originalSclVersion","originalSclVersion",-1809524001),"2003"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fixLnInst","fixLnInst",1397782802),"false",new cljs.core.Keyword(null,"fixPrefix","fixPrefix",2000600117),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rSV","rSV",-377232507),new cljs.core.Keyword(null,"supportsLdName","supportsLdName",-1152946517),new cljs.core.Keyword(null,"unbufReport","unbufReport",-1256563765),new cljs.core.Keyword(null,"readLog","readLog",-1167325044),new cljs.core.Keyword(null,"gsse","gsse",1726144048),new cljs.core.Keyword(null,"bufReport","bufReport",499691121),new cljs.core.Keyword(null,"noIctBinding","noIctBinding",592113523),new cljs.core.Keyword(null,"sv","sv",-170947079),new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),new cljs.core.Keyword(null,"goose","goose",-536708771)],["false","false","false","false","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encryption","encryption",932327985),"false",new cljs.core.Keyword(null,"signature","signature",1463754794),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"Fix",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"Fix",new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),"Fix"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actSG","actSG",1268860441),"1",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsr","hsr",-337177447),"false",new cljs.core.Keyword(null,"prp","prp",-170777589),"false",new cljs.core.Keyword(null,"rstp","rstp",1328619181),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"gi","gi",615521304),"true",new cljs.core.Keyword(null,"period","period",-352129191),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c37_238","c37_238",-898135915),"false",new cljs.core.Keyword(null,"iec61850_9_3","iec61850_9_3",634944364),"false",new cljs.core.Keyword(null,"other","other",995793544),"false",new cljs.core.Keyword(null,"sntp","sntp",2031979313),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refreshTime","refreshTime",1227432160),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"smpMod","smpMod",1474067362),new cljs.core.Keyword(null,"multicast","multicast",663249443),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"sampleRate","sampleRate",-541273751),new cljs.core.Keyword(null,"synchSourceId","synchSourceId",1337574989),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161)],["false","false","SmpPerPeriod","true","","false","false","false","false","None"]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ftp","ftp",911215182),"false",new cljs.core.Keyword(null,"ftps","ftps",-181752509),"false",new cljs.core.Keyword(null,"mms","mms",2022958659),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"goose","goose",-536708771),"true",new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161),"None",new cljs.core.Keyword(null,"type","type",1174270348),"GOOSE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameLength","nameLength",1065745338),"32"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setToRO","setToRO",-293917888),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"max","max",61366548),"1"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appID","appID",-437327348),"Fix",new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"dataLabel","dataLabel",-281723456),"Fix",new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ipv6","ipv6",1396006004),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"8-MMS"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902),""], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indexed","indexed",390758624),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"buffered","buffered",-1922691934),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"bufOvfl","bufOvfl",-2072761018),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"entryID","entryID",-1540914964),new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),new cljs.core.Keyword(null,"dataRef","dataRef",238120492),new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532),new cljs.core.Keyword(null,"seqNum","seqNum",-2121388205),new cljs.core.Keyword(null,"configRef","configRef",617933566)],["true","false","false","","0","true","0","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null)]);
openscd.scl.with_defaults = (function openscd$scl$with_defaults(p__12503){
var map__12504 = p__12503;
var map__12504__$1 = cljs.core.__destructure_map(map__12504);
var element = map__12504__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12504__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var default_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.defaults,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(cljs.core.truth_(default_attrs)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,attrs], 0)):attrs));
});
openscd.scl.without_identifiers = (function openscd$scl$without_identifiers(p__12505){
var map__12506 = p__12505;
var map__12506__$1 = cljs.core.__destructure_map(map__12506);
var element = map__12506__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc,attrs,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var G__12507 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element));
return (openscd.scl.identifier_attributes.cljs$core$IFn$_invoke$arity$1 ? openscd.scl.identifier_attributes.cljs$core$IFn$_invoke$arity$1(G__12507) : openscd.scl.identifier_attributes.call(null, G__12507));
})()));
});
openscd.scl.tos = (function openscd$scl$tos(p__12509,elm){
var map__12510 = p__12509;
var map__12510__$1 = cljs.core.__destructure_map(map__12510);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12510__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12510__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12510__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12510__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var ancestor = elm.closest(scope);
if(cljs.core.truth_((function (){var and__5000__auto__ = ancestor;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.some((function (p1__12508_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__12508_SHARP_);
}),cljs.core.vec(ancestor.querySelectorAll(from)));
} else {
return and__5000__auto__;
}
})())){
var referents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (target){
return cljs.core.every_QMARK_((function (p__12511){
var map__12512 = p__12511;
var map__12512__$1 = cljs.core.__destructure_map(map__12512);
var from__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12512__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12512__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target.getAttribute(to__$1),elm.getAttribute(from__$1));
}),fields);
}),cljs.core.vec(ancestor.querySelectorAll(to)));
return referents;
} else {
return null;
}
});
openscd.scl.with_schema_references = (function openscd$scl$with_schema_references(p__12513){
var map__12514 = p__12513;
var map__12514__$1 = cljs.core.__destructure_map(map__12514);
var element = map__12514__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12514__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12514__$1,new cljs.core.Keyword(null,"content","content",15833224));
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
openscd.scl.fcda_references = (function openscd$scl$fcda_references(p__12517){
var map__12518 = p__12517;
var map__12518__$1 = cljs.core.__destructure_map(map__12518);
var description = map__12518__$1;
var map__12519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__12519__$1 = cljs.core.__destructure_map(map__12519);
var ldInst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"ldInst","ldInst",-235322900));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var lnClass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557));
var lnInst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"lnInst","lnInst",1375769467));
var doName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"doName","doName",-1127433548));
var daName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"daName","daName",-674376218));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12518__$1,new cljs.core.Keyword(null,"content","content",15833224));
var element = new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(description));
var SCL = element.closest("SCL");
var IED = element.closest("IED");
var prefix_selector = ((clojure.string.blank_QMARK_(prefix))?null:["[prefix='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"']"].join(''));
var selector = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lnClass,"LLN0"))?["LDevice[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ldInst),"'] LN0[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnInst),"']"].join(''):["LDevice[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ldInst),"'] LN",prefix_selector,"[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnInst),"'][lnClass='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnClass),"']"].join(''));
var LN = IED.querySelector(selector);
var lnType = LN.getAttribute("lnType");
var LNType = SCL.querySelector(["DataTypeTemplates LNodeType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnType),"']"].join(''));
var do_name_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12515_SHARP_){
return clojure.string.replace(p1__12515_SHARP_,/\\(\\d+\\)/,"");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(doName,/\./));
var DO = LNType.querySelector(["DO[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(do_name_segments)),"']"].join(''));
var DOType = (cljs.core.truth_(DO)?SCL.querySelector(["DataTypeTemplates DOType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(DO.getAttribute("type")),"']"].join('')):null);
var sdo_type = new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884).cljs$core$IFn$_invoke$arity$1((function (p__12520){
while(true){
var map__12521 = p__12520;
var map__12521__$1 = cljs.core.__destructure_map(map__12521);
var sdo_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((sdo_type == null)){
return null;
} else {
var sdo = sdo_type.querySelector(["SDO[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((sdo == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),sdo_type,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__12578 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),SCL.querySelector(["DataTypeTemplates DOType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sdo.getAttribute("type")),"'] SDO"].join('')),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__12520 = G__12578;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),DOType,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(do_name_segments)], null)));
var da_name_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12516_SHARP_){
return clojure.string.replace(p1__12516_SHARP_,/\\(\\d+\\)/,"");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(daName,/\\./));
var DA = (cljs.core.truth_(sdo_type)?sdo_type.querySelector(["DA[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(da_name_segments)),"']"].join('')):null);
var DAType = (cljs.core.truth_(DA)?SCL.querySelector(["DataTypeTemplates DAType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(DA.getAttribute("type")),"']"].join('')):null);
var bda_type = new cljs.core.Keyword(null,"bda-type","bda-type",1629498884).cljs$core$IFn$_invoke$arity$1((function (p__12522){
while(true){
var map__12523 = p__12522;
var map__12523__$1 = cljs.core.__destructure_map(map__12523);
var bda_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"bda-type","bda-type",1629498884));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((bda_type == null)){
return null;
} else {
var bda = bda_type.querySelector(["BDA[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((bda == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),bda_type,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__12579 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),SCL.querySelector(["DataTypeTemplates DAType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bda.getAttribute("type")),"'] BDA"].join('')),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__12522 = G__12579;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),DAType,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(da_name_segments)], null)));
var child = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bda_type,DAType,sdo_type,DOType,LNType], null)));
if(cljs.core.truth_(child)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(description,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,(openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$1 ? openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$1(child) : openscd.scl.domToEdn.call(null, child))));
} else {
return description;
}
});
openscd.scl.special_references = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),openscd.scl.fcda_references], null);
openscd.scl.with_references = (function openscd$scl$with_references(element){
if(cljs.core.contains_QMARK_(openscd.scl.special_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)))){
var fexpr__12524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.special_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)));
return (fexpr__12524.cljs$core$IFn$_invoke$arity$1 ? fexpr__12524.cljs$core$IFn$_invoke$arity$1(element) : fexpr__12524.call(null, element));
} else {
if(cljs.core.contains_QMARK_(openscd.scl.schema_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)))){
return openscd.scl.with_schema_references(element);
} else {
return element;
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

(openscd.scl.Elm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12526,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12530 = k12526;
var G__12530__$1 = (((G__12530 instanceof cljs.core.Keyword))?G__12530.fqn:null);
switch (G__12530__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12526,else__5303__auto__);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12531){
var vec__12532 = p__12531;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(1),null);
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

(openscd.scl.Elm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12525){
var self__ = this;
var G__12525__$1 = this;
return (new cljs.core.RecordIter((0),G__12525__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(openscd.scl.Elm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12527,other12528){
var self__ = this;
var this12527__$1 = this;
return (((!((other12528 == null)))) && ((((this12527__$1.constructor === other12528.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12527__$1.tag,other12528.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12527__$1.attrs,other12528.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12527__$1.content,other12528.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12527__$1.__extmap,other12528.__extmap)))))))))));
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

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12526){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12535 = k12526;
var G__12535__$1 = (((G__12535 instanceof cljs.core.Keyword))?G__12535.fqn:null);
switch (G__12535__$1) {
case "tag":
case "attrs":
case "content":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12526);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12525){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12536 = cljs.core.keyword_identical_QMARK_;
var expr__12537 = k__5309__auto__;
if(cljs.core.truth_((pred__12536.cljs$core$IFn$_invoke$arity$2 ? pred__12536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__12537) : pred__12536.call(null, new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__12537)))){
return (new openscd.scl.Elm(G__12525,self__.attrs,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12536.cljs$core$IFn$_invoke$arity$2 ? pred__12536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__12537) : pred__12536.call(null, new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__12537)))){
return (new openscd.scl.Elm(self__.tag,G__12525,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12536.cljs$core$IFn$_invoke$arity$2 ? pred__12536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__12537) : pred__12536.call(null, new cljs.core.Keyword(null,"content","content",15833224),expr__12537)))){
return (new openscd.scl.Elm(self__.tag,self__.attrs,G__12525,self__.__meta,self__.__extmap,null));
} else {
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12525),null));
}
}
}
}));

(openscd.scl.Elm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(openscd.scl.Elm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12525){
var self__ = this;
var this__5299__auto____$1 = this;
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,G__12525,self__.__extmap,self__.__hash));
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
openscd.scl.map__GT_Elm = (function openscd$scl$map__GT_Elm(G__12529){
var extmap__5342__auto__ = (function (){var G__12539 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12529,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], 0));
if(cljs.core.record_QMARK_(G__12529)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12539);
} else {
return G__12539;
}
})();
return (new openscd.scl.Elm(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__12529),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__12529),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__12529),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

openscd.scl.domToEdn = cljs.core.memoize((function (dom){
while(true){
if(cljs.core.truth_(dom)){
var pred__12541 = cljs.core._EQ_;
var expr__12542 = dom.nodeType;
if(cljs.core.truth_((pred__12541.cljs$core$IFn$_invoke$arity$2 ? pred__12541.cljs$core$IFn$_invoke$arity$2((3),expr__12542) : pred__12541.call(null, (3),expr__12542)))){
return clojure.string.trim(dom.textContent);
} else {
if(cljs.core.truth_((pred__12541.cljs$core$IFn$_invoke$arity$2 ? pred__12541.cljs$core$IFn$_invoke$arity$2((4),expr__12542) : pred__12541.call(null, (4),expr__12542)))){
return dom.data;
} else {
if(cljs.core.truth_((pred__12541.cljs$core$IFn$_invoke$arity$2 ? pred__12541.cljs$core$IFn$_invoke$arity$2((9),expr__12542) : pred__12541.call(null, (9),expr__12542)))){
var G__12582 = dom.documentElement;
dom = G__12582;
continue;
} else {
if(cljs.core.truth_((pred__12541.cljs$core$IFn$_invoke$arity$2 ? pred__12541.cljs$core$IFn$_invoke$arity$2((1),expr__12542) : pred__12541.call(null, (1),expr__12542)))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dom.tagName,"DataTypeTemplates")){
return openscd.scl.with_references(openscd.scl.without_identifiers(openscd.scl.with_defaults(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),dom.tagName,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (dom,pred__12541,expr__12542){
return (function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a.name),a.value], null);
});})(dom,pred__12541,expr__12542))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom.attributes], 0))),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (dom,pred__12541,expr__12542){
return (function (p1__12540_SHARP_){
return (!((((p1__12540_SHARP_ == null)) || (clojure.string.blank_QMARK_(p1__12540_SHARP_)))));
});})(dom,pred__12541,expr__12542))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(openscd.scl.domToEdn,dom.childNodes)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925),dom], null)))));
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
}));
goog.exportSymbol('openscd.scl.domToEdn', openscd.scl.domToEdn);
openscd.scl.render_attributes = (function openscd$scl$render_attributes(attrs,target){
var table = document.createElement("table");
var seq__12544_12583 = cljs.core.seq(attrs);
var chunk__12545_12584 = null;
var count__12546_12585 = (0);
var i__12547_12586 = (0);
while(true){
if((i__12547_12586 < count__12546_12585)){
var vec__12554_12587 = chunk__12545_12584.cljs$core$IIndexed$_nth$arity$2(null, i__12547_12586);
var k_12588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12554_12587,(0),null);
var v_12589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12554_12587,(1),null);
var tr_12590 = document.createElement("tr");
var th_12591 = document.createElement("th");
var td_12592 = document.createElement("td");
var ns_th_12593 = document.createElement("th");
var components_12594 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12588),/:/,(2));
var anm_12595 = cljs.core.last(components_12594);
var ans_component_12596 = cljs.core.first(components_12594);
var ans_12597 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12595,ans_component_12596))?"":ans_component_12596);
(ns_th_12593.textContent = ans_12597);

(th_12591.textContent = anm_12595);

if((v_12589 == null)){
(td_12592.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_12589)){
(td_12592.innerHTML = "<i>(empty)</i>");
} else {
(td_12592.textContent = v_12589);
}
}

tr_12590.appendChild(ns_th_12593);

tr_12590.appendChild(th_12591);

tr_12590.appendChild(td_12592);

table.appendChild(tr_12590);


var G__12598 = seq__12544_12583;
var G__12599 = chunk__12545_12584;
var G__12600 = count__12546_12585;
var G__12601 = (i__12547_12586 + (1));
seq__12544_12583 = G__12598;
chunk__12545_12584 = G__12599;
count__12546_12585 = G__12600;
i__12547_12586 = G__12601;
continue;
} else {
var temp__5804__auto___12602 = cljs.core.seq(seq__12544_12583);
if(temp__5804__auto___12602){
var seq__12544_12603__$1 = temp__5804__auto___12602;
if(cljs.core.chunked_seq_QMARK_(seq__12544_12603__$1)){
var c__5525__auto___12604 = cljs.core.chunk_first(seq__12544_12603__$1);
var G__12605 = cljs.core.chunk_rest(seq__12544_12603__$1);
var G__12606 = c__5525__auto___12604;
var G__12607 = cljs.core.count(c__5525__auto___12604);
var G__12608 = (0);
seq__12544_12583 = G__12605;
chunk__12545_12584 = G__12606;
count__12546_12585 = G__12607;
i__12547_12586 = G__12608;
continue;
} else {
var vec__12557_12609 = cljs.core.first(seq__12544_12603__$1);
var k_12610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557_12609,(0),null);
var v_12611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557_12609,(1),null);
var tr_12612 = document.createElement("tr");
var th_12613 = document.createElement("th");
var td_12614 = document.createElement("td");
var ns_th_12615 = document.createElement("th");
var components_12616 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12610),/:/,(2));
var anm_12617 = cljs.core.last(components_12616);
var ans_component_12618 = cljs.core.first(components_12616);
var ans_12619 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12617,ans_component_12618))?"":ans_component_12618);
(ns_th_12615.textContent = ans_12619);

(th_12613.textContent = anm_12617);

if((v_12611 == null)){
(td_12614.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_12611)){
(td_12614.innerHTML = "<i>(empty)</i>");
} else {
(td_12614.textContent = v_12611);
}
}

tr_12612.appendChild(ns_th_12615);

tr_12612.appendChild(th_12613);

tr_12612.appendChild(td_12614);

table.appendChild(tr_12612);


var G__12620 = cljs.core.next(seq__12544_12603__$1);
var G__12621 = null;
var G__12622 = (0);
var G__12623 = (0);
seq__12544_12583 = G__12620;
chunk__12545_12584 = G__12621;
count__12546_12585 = G__12622;
i__12547_12586 = G__12623;
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
var G__12562 = arguments.length;
switch (G__12562) {
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

return cljs.core.run_BANG_((function (p1__12560_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12560_SHARP_.tagName,"DETAILS")){
return (p1__12560_SHARP_.open = cljs.core.not(p1__12560_SHARP_.open));
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
var seq__12563_12625 = cljs.core.seq(ks);
var chunk__12564_12626 = null;
var count__12565_12627 = (0);
var i__12566_12628 = (0);
while(true){
if((i__12566_12628 < count__12565_12627)){
var k_12629 = chunk__12564_12626.cljs$core$IIndexed$_nth$arity$2(null, i__12566_12628);
var tr_12630 = document.createElement("tr");
var th_12631 = document.createElement("th");
var td_ours_12632 = document.createElement("td");
var td_arrow_12633 = document.createElement("td");
var td_theirs_12634 = document.createElement("td");
var ns_th_12635 = document.createElement("th");
var components_12636 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12629),/:/,(2));
var anm_12637 = cljs.core.last(components_12636);
var ans_component_12638 = cljs.core.first(components_12636);
var ans_12639 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12637,ans_component_12638))?"":ans_component_12638);
var v_ours_12640 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_12629) : ours.call(null, k_12629));
var v_theirs_12641 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_12629) : theirs.call(null, k_12629));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_12640,v_theirs_12641)){
} else {
(ns_th_12635.textContent = ans_12639);

(th_12631.textContent = anm_12637);

if((v_ours_12640 == null)){
(td_ours_12632.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_12640)){
(td_ours_12632.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_12632.textContent = v_ours_12640);
}
}

td_arrow_12633.classList.add("arrow");

(td_arrow_12633.textContent = "->");

if((v_theirs_12641 == null)){
(td_theirs_12634.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_12641)){
(td_theirs_12634.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_12634.textContent = v_theirs_12641);
}
}

tr_12630.appendChild(ns_th_12635);

tr_12630.appendChild(th_12631);

tr_12630.appendChild(td_ours_12632);

tr_12630.appendChild(td_arrow_12633);

tr_12630.appendChild(td_theirs_12634);

table.appendChild(tr_12630);
}


var G__12642 = seq__12563_12625;
var G__12643 = chunk__12564_12626;
var G__12644 = count__12565_12627;
var G__12645 = (i__12566_12628 + (1));
seq__12563_12625 = G__12642;
chunk__12564_12626 = G__12643;
count__12565_12627 = G__12644;
i__12566_12628 = G__12645;
continue;
} else {
var temp__5804__auto___12646 = cljs.core.seq(seq__12563_12625);
if(temp__5804__auto___12646){
var seq__12563_12647__$1 = temp__5804__auto___12646;
if(cljs.core.chunked_seq_QMARK_(seq__12563_12647__$1)){
var c__5525__auto___12648 = cljs.core.chunk_first(seq__12563_12647__$1);
var G__12649 = cljs.core.chunk_rest(seq__12563_12647__$1);
var G__12650 = c__5525__auto___12648;
var G__12651 = cljs.core.count(c__5525__auto___12648);
var G__12652 = (0);
seq__12563_12625 = G__12649;
chunk__12564_12626 = G__12650;
count__12565_12627 = G__12651;
i__12566_12628 = G__12652;
continue;
} else {
var k_12653 = cljs.core.first(seq__12563_12647__$1);
var tr_12654 = document.createElement("tr");
var th_12655 = document.createElement("th");
var td_ours_12656 = document.createElement("td");
var td_arrow_12657 = document.createElement("td");
var td_theirs_12658 = document.createElement("td");
var ns_th_12659 = document.createElement("th");
var components_12660 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12653),/:/,(2));
var anm_12661 = cljs.core.last(components_12660);
var ans_component_12662 = cljs.core.first(components_12660);
var ans_12663 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12661,ans_component_12662))?"":ans_component_12662);
var v_ours_12664 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_12653) : ours.call(null, k_12653));
var v_theirs_12665 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_12653) : theirs.call(null, k_12653));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_12664,v_theirs_12665)){
} else {
(ns_th_12659.textContent = ans_12663);

(th_12655.textContent = anm_12661);

if((v_ours_12664 == null)){
(td_ours_12656.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_12664)){
(td_ours_12656.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_12656.textContent = v_ours_12664);
}
}

td_arrow_12657.classList.add("arrow");

(td_arrow_12657.textContent = "->");

if((v_theirs_12665 == null)){
(td_theirs_12658.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_12665)){
(td_theirs_12658.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_12658.textContent = v_theirs_12665);
}
}

tr_12654.appendChild(ns_th_12659);

tr_12654.appendChild(th_12655);

tr_12654.appendChild(td_ours_12656);

tr_12654.appendChild(td_arrow_12657);

tr_12654.appendChild(td_theirs_12658);

table.appendChild(tr_12654);
}


var G__12666 = cljs.core.next(seq__12563_12647__$1);
var G__12667 = null;
var G__12668 = (0);
var G__12669 = (0);
seq__12563_12625 = G__12666;
chunk__12564_12626 = G__12667;
count__12565_12627 = G__12668;
i__12566_12628 = G__12669;
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
var G__12574 = arguments.length;
switch (G__12574) {
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

return cljs.core.run_BANG_((function (p1__12567_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12567_SHARP_.tagName,"DETAILS")){
return (p1__12567_SHARP_.open = cljs.core.not(p1__12567_SHARP_.open));
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
var their_identified_nodes = cljs.core.group_by(openscd.scl.tag_and_id,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(theirs));
var our_identified_nodes = cljs.core.group_by(openscd.scl.tag_and_id,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ours));
var node_pairs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__12568_SHARP_),(2));
}),cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([their_identified_nodes,our_identified_nodes], 0))));
var their_identities = cljs.core.set(cljs.core.keys(their_identified_nodes));
var our_identities = cljs.core.set(cljs.core.keys(our_identified_nodes));
var their_nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12569_SHARP_){
return cljs.core.first((their_identified_nodes.cljs$core$IFn$_invoke$arity$1 ? their_identified_nodes.cljs$core$IFn$_invoke$arity$1(p1__12569_SHARP_) : their_identified_nodes.call(null, p1__12569_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(their_identities,our_identities));
var our_nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12570_SHARP_){
return cljs.core.first((our_identified_nodes.cljs$core$IFn$_invoke$arity$1 ? our_identified_nodes.cljs$core$IFn$_invoke$arity$1(p1__12570_SHARP_) : our_identified_nodes.call(null, p1__12570_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(our_identities,their_identities));
var child_count = ((cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12571_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__12571_SHARP_));
}),node_pairs)) + cljs.core.count(their_nodes)) + cljs.core.count(our_nodes));
var nodes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12572_SHARP_){
var or__5002__auto__ = openscd.scl.tag_and_id(p1__12572_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return openscd.scl.tag_and_id(cljs.core.first(p1__12572_SHARP_));
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(node_pairs,their_nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([our_nodes], 0)));
cljs.core.run_BANG_((function (node_or_pair){
if(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node_or_pair))){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(node_or_pair,details,child_count,cljs.core.not(odd),new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
var vec__12575 = node_or_pair;
var ours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12575,(0),null);
var theirs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12575,(1),null);
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
openscd.scl.sclDomDiff = (function openscd$scl$sclDomDiff(dom1,dom2,target){
var edn1 = openscd.scl.domToEdn(dom1);
var edn2 = openscd.scl.domToEdn(dom2);
return openscd.scl.show_diff(edn1,edn2,target);
});
goog.exportSymbol('openscd.scl.sclDomDiff', openscd.scl.sclDomDiff);
openscd.scl.sclDomToEdn = (function openscd$scl$sclDomToEdn(dom){
return openscd.scl.show_data(openscd.scl.domToEdn(dom));
});
goog.exportSymbol('openscd.scl.sclDomToEdn', openscd.scl.sclDomToEdn);

//# sourceMappingURL=openscd.scl.js.map
