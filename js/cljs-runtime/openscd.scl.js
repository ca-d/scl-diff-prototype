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
openscd.scl.defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SubNetwork","SubNetwork",1513043072),new cljs.core.Keyword(null,"DAI","DAI",-1380715744),new cljs.core.Keyword(null,"ConfDataSet","ConfDataSet",-960244928),new cljs.core.Keyword(null,"SMV","SMV",369202016),new cljs.core.Keyword(null,"NeutralPoint","NeutralPoint",-1282681631),new cljs.core.Keyword(null,"Function","Function",1904540321),new cljs.core.Keyword(null,"AccessPoint","AccessPoint",-9059166),new cljs.core.Keyword(null,"LNode","LNode",566631042),new cljs.core.Keyword(null,"ServerAt","ServerAt",-80406878),new cljs.core.Keyword(null,"Inputs","Inputs",-958498078),new cljs.core.Keyword(null,"DOType","DOType",-946654270),new cljs.core.Keyword(null,"LogControl","LogControl",1132593187),new cljs.core.Keyword(null,"SubEquipment","SubEquipment",-1880159453),new cljs.core.Keyword(null,"Server","Server",-1453472893),new cljs.core.Keyword(null,"SMVSettings","SMVSettings",-772432476),new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),new cljs.core.Keyword(null,"ConnectedAP","ConnectedAP",-1381548891),new cljs.core.Keyword(null,"Header","Header",1255420133),new cljs.core.Keyword(null,"ConfReportControl","ConfReportControl",1171542373),new cljs.core.Keyword(null,"DO","DO",555377637),new cljs.core.Keyword(null,"SMVsc","SMVsc",-674389914),new cljs.core.Keyword(null,"ReportSettings","ReportSettings",-2135201114),new cljs.core.Keyword(null,"IED","IED",-1202207737),new cljs.core.Keyword(null,"DataSet","DataSet",1832502311),new cljs.core.Keyword(null,"Communication","Communication",800195751),new cljs.core.Keyword(null,"ConfLNs","ConfLNs",-174971193),new cljs.core.Keyword(null,"SDO","SDO",-467426968),new cljs.core.Keyword(null,"EqFunction","EqFunction",1525876264),new cljs.core.Keyword(null,"GeneralEquipment","GeneralEquipment",94889864),new cljs.core.Keyword(null,"BDA","BDA",1284162761),new cljs.core.Keyword(null,"Terminal","Terminal",-1610057718),new cljs.core.Keyword(null,"Log","Log",1668795722),new cljs.core.Keyword(null,"SettingGroups","SettingGroups",-1927378165),new cljs.core.Keyword(null,"ClientServices","ClientServices",1712773067),new cljs.core.Keyword(null,"Line","Line",1577484267),new cljs.core.Keyword(null,"DOI","DOI",675703916),new cljs.core.Keyword(null,"McSecurity","McSecurity",-1266851668),new cljs.core.Keyword(null,"SMVSecurity","SMVSecurity",1159028460),new cljs.core.Keyword(null,"LogSettings","LogSettings",1082414093),new cljs.core.Keyword(null,"SettingControl","SettingControl",1352987789),new cljs.core.Keyword(null,"RedProt","RedProt",-693281587),new cljs.core.Keyword(null,"SDI","SDI",-2071007315),new cljs.core.Keyword(null,"EnumType","EnumType",-1438451634),new cljs.core.Keyword(null,"TapChanger","TapChanger",-2048168786),new cljs.core.Keyword(null,"DAType","DAType",-525603538),new cljs.core.Keyword(null,"TrgOps","TrgOps",1191552750),new cljs.core.Keyword(null,"TimeSyncProt","TimeSyncProt",2121906415),new cljs.core.Keyword(null,"SampledValueControl","SampledValueControl",-1835009617),new cljs.core.Keyword(null,"ConductingEquipment","ConductingEquipment",240024335),new cljs.core.Keyword(null,"GSE","GSE",-1057390737),new cljs.core.Keyword(null,"FileHandling","FileHandling",1280872816),new cljs.core.Keyword(null,"GOOSE","GOOSE",-1318299056),new cljs.core.Keyword(null,"EqSubFunction","EqSubFunction",-1274488144),new cljs.core.Keyword(null,"Substation","Substation",-1616046062),new cljs.core.Keyword(null,"GSEControl","GSEControl",1967882450),new cljs.core.Keyword(null,"ConnectivityNode","ConnectivityNode",963767219),new cljs.core.Keyword(null,"Services","Services",216940693),new cljs.core.Keyword(null,"SubFunction","SubFunction",-616419755),new cljs.core.Keyword(null,"LDevice","LDevice",185641685),new cljs.core.Keyword(null,"Bay","Bay",481732854),new cljs.core.Keyword(null,"GOOSESecurity","GOOSESecurity",1603518615),new cljs.core.Keyword(null,"ValueHandling","ValueHandling",-1748635433),new cljs.core.Keyword(null,"DA","DA",770036184),new cljs.core.Keyword(null,"TransformerWinding","TransformerWinding",1970243449),new cljs.core.Keyword(null,"EnumVal","EnumVal",-365622982),new cljs.core.Keyword(null,"RptEnabled","RptEnabled",-2056798822),new cljs.core.Keyword(null,"GSESettings","GSESettings",-381240710),new cljs.core.Keyword(null,"PowerTransformer","PowerTransformer",-1987658022),new cljs.core.Keyword(null,"CommProt","CommProt",1024567547),new cljs.core.Keyword(null,"PhysConn","PhysConn",-560502213),new cljs.core.Keyword(null,"VoltageLevel","VoltageLevel",1806986235),new cljs.core.Keyword(null,"Association","Association",1117992412),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"ProtNs","ProtNs",-321700004),new cljs.core.Keyword(null,"Voltage","Voltage",-463905283),new cljs.core.Keyword(null,"ReportControl","ReportControl",2059382493),new cljs.core.Keyword(null,"ClientLN","ClientLN",-837811427),new cljs.core.Keyword(null,"LNodeType","LNodeType",-1328186018),new cljs.core.Keyword(null,"LN","LN",-19107970)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),"true"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clock","clock",-894301127),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"kdc","kdc",-1313452933),"false",new cljs.core.Keyword(null,"router","router",1091916230),"false"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedName","iedName",402101163),"None",new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),"",new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bufTime","bufTime",51492580),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"0",new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),"LLN0",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"true",new cljs.core.Keyword(null,"prefix","prefix",-265908465),"",new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"phase","phase",575722892),"none",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"certificate","certificate",-1722392944),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"none","none",1333468478),"true",new cljs.core.Keyword(null,"password","password",417022471),"false",new cljs.core.Keyword(null,"strong","strong",269529000),"false",new cljs.core.Keyword(null,"timeout","timeout",-318625318),"30",new cljs.core.Keyword(null,"weak","weak",-263559193),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"synchSrcId","synchSrcId",-1341424891),new cljs.core.Keyword(null,"samplesPerSec","samplesPerSec",290641416),new cljs.core.Keyword(null,"nofASDU","nofASDU",549933451),new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"svID","svID",2004984953),new cljs.core.Keyword(null,"pdcTimeStamp","pdcTimeStamp",-807293638),new cljs.core.Keyword(null,"smpRate","smpRate",-200743717)],["Fix","false","false","Fix","false","Fix","Fix","Fix","false","Fix"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nameStructure","nameStructure",1614188240),"IEDName",new cljs.core.Keyword(null,"revision","revision",-1350113114),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bufConf","bufConf",-1805669827),"false",new cljs.core.Keyword(null,"bufMode","bufMode",442239108),"both"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"transient","transient",-741416458),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delivery","delivery",-1844470516),"multicast",new cljs.core.Keyword(null,"deliveryConf","deliveryConf",1274627683),"false",new cljs.core.Keyword(null,"rSV","rSV",-377232507),"false",new cljs.core.Keyword(null,"sv","sv",-170947079),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),new cljs.core.Keyword(null,"rptID","rptID",-1638118187),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),new cljs.core.Keyword(null,"owner","owner",-392611939)],["Fix","Fix","Fix","Fix","Fix","Fix","Fix","false","false"]),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"engRight","engRight",-1595406869),"full",new cljs.core.Keyword(null,"originalSclRelease","originalSclRelease",-1081077436),"1",new cljs.core.Keyword(null,"originalSclRevision","originalSclRevision",-836709520),"A",new cljs.core.Keyword(null,"originalSclVersion","originalSclVersion",-1809524001),"2003"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fixLnInst","fixLnInst",1397782802),"false",new cljs.core.Keyword(null,"fixPrefix","fixPrefix",2000600117),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rSV","rSV",-377232507),new cljs.core.Keyword(null,"supportsLdName","supportsLdName",-1152946517),new cljs.core.Keyword(null,"unbufReport","unbufReport",-1256563765),new cljs.core.Keyword(null,"readLog","readLog",-1167325044),new cljs.core.Keyword(null,"gsse","gsse",1726144048),new cljs.core.Keyword(null,"bufReport","bufReport",499691121),new cljs.core.Keyword(null,"noIctBinding","noIctBinding",592113523),new cljs.core.Keyword(null,"sv","sv",-170947079),new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),new cljs.core.Keyword(null,"goose","goose",-536708771)],["false","false","false","false","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encryption","encryption",932327985),"false",new cljs.core.Keyword(null,"signature","signature",1463754794),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"Fix",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"Fix",new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),"Fix"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actSG","actSG",1268860441),"1",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsr","hsr",-337177447),"false",new cljs.core.Keyword(null,"prp","prp",-170777589),"false",new cljs.core.Keyword(null,"rstp","rstp",1328619181),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"gi","gi",615521304),"true",new cljs.core.Keyword(null,"period","period",-352129191),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c37_238","c37_238",-898135915),"false",new cljs.core.Keyword(null,"iec61850_9_3","iec61850_9_3",634944364),"false",new cljs.core.Keyword(null,"other","other",995793544),"false",new cljs.core.Keyword(null,"sntp","sntp",2031979313),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refreshTime","refreshTime",1227432160),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"smpMod","smpMod",1474067362),new cljs.core.Keyword(null,"multicast","multicast",663249443),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"sampleRate","sampleRate",-541273751),new cljs.core.Keyword(null,"synchSourceId","synchSourceId",1337574989),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161)],["false","false","SmpPerPeriod","true","","false","false","false","false","None"]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ftp","ftp",911215182),"false",new cljs.core.Keyword(null,"ftps","ftps",-181752509),"false",new cljs.core.Keyword(null,"mms","mms",2022958659),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"goose","goose",-536708771),"true",new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161),"None",new cljs.core.Keyword(null,"type","type",1174270348),"GOOSE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameLength","nameLength",1065745338),"32"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setToRO","setToRO",-293917888),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"max","max",61366548),"1"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appID","appID",-437327348),"Fix",new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"dataLabel","dataLabel",-281723456),"Fix",new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ipv6","ipv6",1396006004),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"8-MMS"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902),""], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indexed","indexed",390758624),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"buffered","buffered",-1922691934),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"bufOvfl","bufOvfl",-2072761018),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"entryID","entryID",-1540914964),new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),new cljs.core.Keyword(null,"dataRef","dataRef",238120492),new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532),new cljs.core.Keyword(null,"seqNum","seqNum",-2121388205),new cljs.core.Keyword(null,"configRef","configRef",617933566)],["true","false","false","","0","true","0","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null)]);
openscd.scl.with_defaults = (function openscd$scl$with_defaults(p__19850){
var map__19851 = p__19850;
var map__19851__$1 = cljs.core.__destructure_map(map__19851);
var element = map__19851__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19851__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var default_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.defaults,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(cljs.core.truth_(default_attrs)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,attrs], 0)):attrs));
});
openscd.scl.without_identifiers = (function openscd$scl$without_identifiers(p__19852){
var map__19853 = p__19852;
var map__19853__$1 = cljs.core.__destructure_map(map__19853);
var element = map__19853__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc,attrs,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var G__19854 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element));
return (openscd.scl.identifier_attributes.cljs$core$IFn$_invoke$arity$1 ? openscd.scl.identifier_attributes.cljs$core$IFn$_invoke$arity$1(G__19854) : openscd.scl.identifier_attributes.call(null, G__19854));
})()));
});
openscd.scl.tos = (function openscd$scl$tos(p__19856,elm){
var map__19857 = p__19856;
var map__19857__$1 = cljs.core.__destructure_map(map__19857);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19857__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19857__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19857__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19857__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var ancestor = elm.closest(scope);
if(cljs.core.truth_((function (){var and__5000__auto__ = ancestor;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.some((function (p1__19855_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__19855_SHARP_);
}),cljs.core.vec(ancestor.querySelectorAll(from)));
} else {
return and__5000__auto__;
}
})())){
var referents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (target){
return cljs.core.every_QMARK_((function (p__19858){
var map__19859 = p__19858;
var map__19859__$1 = cljs.core.__destructure_map(map__19859);
var from__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target.getAttribute(to__$1),elm.getAttribute(from__$1));
}),fields);
}),cljs.core.vec(ancestor.querySelectorAll(to)));
return referents;
} else {
return null;
}
});
openscd.scl.with_schema_references = (function openscd$scl$with_schema_references(p__19860){
var map__19861 = p__19860;
var map__19861__$1 = cljs.core.__destructure_map(map__19861);
var element = map__19861__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19861__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19861__$1,new cljs.core.Keyword(null,"content","content",15833224));
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
/**
 * @param {...*} var_args
 */
openscd.scl.fcda_references = (function() { 
var openscd$scl$fcda_references__delegate = function (p__19865,p__19866){
var map__19867 = p__19865;
var map__19867__$1 = cljs.core.__destructure_map(map__19867);
var description = map__19867__$1;
var map__19868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__19868__$1 = cljs.core.__destructure_map(map__19868);
var ldInst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword(null,"ldInst","ldInst",-235322900));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var lnClass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557));
var lnInst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword(null,"lnInst","lnInst",1375769467));
var doName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword(null,"doName","doName",-1127433548));
var daName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,new cljs.core.Keyword(null,"daName","daName",-674376218));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19867__$1,new cljs.core.Keyword(null,"content","content",15833224));
var map__19869 = p__19866;
var map__19869__$1 = cljs.core.__destructure_map(map__19869);
var opts = map__19869__$1;
var deep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,new cljs.core.Keyword(null,"deep","deep",2090866875));
var element = new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(description));
var SCL = element.closest("SCL");
var IED = element.closest("IED");
var prefix_selector = ((clojure.string.blank_QMARK_(prefix))?null:["[prefix='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"']"].join(''));
var selector = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lnClass,"LLN0"))?["LDevice[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ldInst),"'] LN0[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnInst),"']"].join(''):["LDevice[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ldInst),"'] LN",prefix_selector,"[inst='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnInst),"'][lnClass='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnClass),"']"].join(''));
var LN = IED.querySelector(selector);
var lnType = LN.getAttribute("lnType");
var LNType = SCL.querySelector(["DataTypeTemplates LNodeType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnType),"']"].join(''));
var do_name_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19862_SHARP_){
return clojure.string.replace(p1__19862_SHARP_,/\\(\\d+\\)/,"");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(doName,/\./));
var DO = LNType.querySelector(["DO[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(do_name_segments)),"']"].join(''));
var DOI = (cljs.core.truth_(DO)?LN.querySelector([":scope > DOI[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(do_name_segments)),"']"].join('')):null);
var SDI = new cljs.core.Keyword(null,"sdi","sdi",1305828274).cljs$core$IFn$_invoke$arity$1((function (p__19870){
while(true){
var map__19871 = p__19870;
var map__19871__$1 = cljs.core.__destructure_map(map__19871);
var sdi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19871__$1,new cljs.core.Keyword(null,"sdi","sdi",1305828274));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19871__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((sdi == null)){
return null;
} else {
var new_sdi = sdi.querySelector([":scope >SDI[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((((new_sdi == null)) || (cljs.core.empty_QMARK_(cljs.core.rest(names))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdi","sdi",1305828274),sdi,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__19942 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdi","sdi",1305828274),new_sdi,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__19870 = G__19942;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdi","sdi",1305828274),DOI,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(do_name_segments)], null)));
var DAI = (cljs.core.truth_(SDI)?SDI.querySelector([":scope DAI[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(do_name_segments)),"']"].join('')):null);
var DOType = (cljs.core.truth_(DO)?SCL.querySelector(["DataTypeTemplates DOType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(DO.getAttribute("type")),"']"].join('')):null);
var sdo_type = new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884).cljs$core$IFn$_invoke$arity$1((function (p__19872){
while(true){
var map__19873 = p__19872;
var map__19873__$1 = cljs.core.__destructure_map(map__19873);
var sdo_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19873__$1,new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19873__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((sdo_type == null)){
return null;
} else {
var sdo = sdo_type.querySelector(["SDO[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((sdo == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),sdo_type,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__19943 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),SCL.querySelector(["DataTypeTemplates DOType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sdo.getAttribute("type")),"'] SDO"].join('')),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__19872 = G__19943;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sdo-type","sdo-type",-1092190884),DOType,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(do_name_segments)], null)));
var da_name_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19863_SHARP_){
return clojure.string.replace(p1__19863_SHARP_,/\\(\\d+\\)/,"");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(daName,/\\./));
var DA = (cljs.core.truth_(sdo_type)?sdo_type.querySelector(["DA[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(da_name_segments)),"']"].join('')):null);
var DAType = (cljs.core.truth_(DA)?SCL.querySelector(["DataTypeTemplates DAType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(DA.getAttribute("type")),"']"].join('')):null);
var bda_type = new cljs.core.Keyword(null,"bda-type","bda-type",1629498884).cljs$core$IFn$_invoke$arity$1((function (p__19874){
while(true){
var map__19875 = p__19874;
var map__19875__$1 = cljs.core.__destructure_map(map__19875);
var bda_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19875__$1,new cljs.core.Keyword(null,"bda-type","bda-type",1629498884));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19875__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
if((bda_type == null)){
return null;
} else {
var bda = bda_type.querySelector(["BDA[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(names)),"']"].join(''));
if((bda == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),bda_type,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
} else {
var G__19944 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),SCL.querySelector(["DataTypeTemplates DAType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bda.getAttribute("type")),"'] BDA, DataTypeTemplates EnumType[id='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bda.getAttribute("type"))].join('')),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(names)], null);
p__19874 = G__19944;
continue;
}
}
break;
}
})(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bda-type","bda-type",1629498884),DAType,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.rest(da_name_segments)], null)));
var linked_type = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bda_type,DAType,sdo_type,DOType,LNType], null)));
var extra_content = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19864_SHARP_){
return (openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2 ? openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2(p1__19864_SHARP_,opts) : openscd.scl.domToEdn.call(null, p1__19864_SHARP_,opts));
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
var openscd$scl$fcda_references = function (p__19865,var_args){
var p__19866 = null;
if (arguments.length > 1) {
var G__19945__i = 0, G__19945__a = new Array(arguments.length -  1);
while (G__19945__i < G__19945__a.length) {G__19945__a[G__19945__i] = arguments[G__19945__i + 1]; ++G__19945__i;}
  p__19866 = new cljs.core.IndexedSeq(G__19945__a,0,null);
} 
return openscd$scl$fcda_references__delegate.call(this,p__19865,p__19866);};
openscd$scl$fcda_references.cljs$lang$maxFixedArity = 1;
openscd$scl$fcda_references.cljs$lang$applyTo = (function (arglist__19946){
var p__19865 = cljs.core.first(arglist__19946);
var p__19866 = cljs.core.rest(arglist__19946);
return openscd$scl$fcda_references__delegate(p__19865,p__19866);
});
openscd$scl$fcda_references.cljs$core$IFn$_invoke$arity$variadic = openscd$scl$fcda_references__delegate;
return openscd$scl$fcda_references;
})()
;
openscd.scl.special_references = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),openscd.scl.fcda_references], null);
openscd.scl.with_references = (function openscd$scl$with_references(element,opts){
if(cljs.core.contains_QMARK_(openscd.scl.special_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)))){
var fexpr__19876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.special_references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(element)));
return (fexpr__19876.cljs$core$IFn$_invoke$arity$2 ? fexpr__19876.cljs$core$IFn$_invoke$arity$2(element,opts) : fexpr__19876.call(null, element,opts));
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

(openscd.scl.Elm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k19878,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__19882 = k19878;
var G__19882__$1 = (((G__19882 instanceof cljs.core.Keyword))?G__19882.fqn:null);
switch (G__19882__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19878,else__5303__auto__);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__19883){
var vec__19884 = p__19883;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19884,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19884,(1),null);
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

(openscd.scl.Elm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19877){
var self__ = this;
var G__19877__$1 = this;
return (new cljs.core.RecordIter((0),G__19877__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(openscd.scl.Elm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19879,other19880){
var self__ = this;
var this19879__$1 = this;
return (((!((other19880 == null)))) && ((((this19879__$1.constructor === other19880.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19879__$1.tag,other19880.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19879__$1.attrs,other19880.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19879__$1.content,other19880.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19879__$1.__extmap,other19880.__extmap)))))))))));
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

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k19878){
var self__ = this;
var this__5307__auto____$1 = this;
var G__19887 = k19878;
var G__19887__$1 = (((G__19887 instanceof cljs.core.Keyword))?G__19887.fqn:null);
switch (G__19887__$1) {
case "tag":
case "attrs":
case "content":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19878);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__19877){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__19888 = cljs.core.keyword_identical_QMARK_;
var expr__19889 = k__5309__auto__;
if(cljs.core.truth_((pred__19888.cljs$core$IFn$_invoke$arity$2 ? pred__19888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__19889) : pred__19888.call(null, new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__19889)))){
return (new openscd.scl.Elm(G__19877,self__.attrs,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19888.cljs$core$IFn$_invoke$arity$2 ? pred__19888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__19889) : pred__19888.call(null, new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__19889)))){
return (new openscd.scl.Elm(self__.tag,G__19877,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19888.cljs$core$IFn$_invoke$arity$2 ? pred__19888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__19889) : pred__19888.call(null, new cljs.core.Keyword(null,"content","content",15833224),expr__19889)))){
return (new openscd.scl.Elm(self__.tag,self__.attrs,G__19877,self__.__meta,self__.__extmap,null));
} else {
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__19877),null));
}
}
}
}));

(openscd.scl.Elm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(openscd.scl.Elm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__19877){
var self__ = this;
var this__5299__auto____$1 = this;
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,G__19877,self__.__extmap,self__.__hash));
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
openscd.scl.map__GT_Elm = (function openscd$scl$map__GT_Elm(G__19881){
var extmap__5342__auto__ = (function (){var G__19891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19881,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], 0));
if(cljs.core.record_QMARK_(G__19881)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19891);
} else {
return G__19891;
}
})();
return (new openscd.scl.Elm(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__19881),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__19881),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__19881),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

openscd.scl.domToEdn = cljs.core.memoize((function() { 
var G__19949__delegate = function (dom,p__19894){
while(true){
var map__19895 = p__19894;
var map__19895__$1 = cljs.core.__destructure_map(map__19895);
var opts = map__19895__$1;
var deep = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19895__$1,new cljs.core.Keyword(null,"deep","deep",2090866875),false);
if(cljs.core.truth_(dom)){
var pred__19896 = cljs.core._EQ_;
var expr__19897 = dom.nodeType;
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((3),expr__19897) : pred__19896.call(null, (3),expr__19897)))){
return clojure.string.trim(dom.textContent);
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((4),expr__19897) : pred__19896.call(null, (4),expr__19897)))){
return dom.data;
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((9),expr__19897) : pred__19896.call(null, (9),expr__19897)))){
var G__19950 = dom.documentElement;
var G__19951 = opts;
dom = G__19950;
p__19894 = G__19951;
continue;
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((1),expr__19897) : pred__19896.call(null, (1),expr__19897)))){
if(cljs.core.truth_((function (){var or__5002__auto__ = deep;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dom.tagName,"DataTypeTemplates");
}
})())){
return openscd.scl.with_references(openscd.scl.without_identifiers(openscd.scl.with_defaults(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),dom.tagName,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (dom,p__19894,pred__19896,expr__19897,map__19895,map__19895__$1,opts,deep){
return (function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a.name),a.value], null);
});})(dom,p__19894,pred__19896,expr__19897,map__19895,map__19895__$1,opts,deep))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom.attributes], 0))),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (dom,p__19894,pred__19896,expr__19897,map__19895,map__19895__$1,opts,deep){
return (function (p1__19892_SHARP_){
return (!((((p1__19892_SHARP_ == null)) || (clojure.string.blank_QMARK_(p1__19892_SHARP_)))));
});})(dom,p__19894,pred__19896,expr__19897,map__19895,map__19895__$1,opts,deep))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dom,p__19894,pred__19896,expr__19897,map__19895,map__19895__$1,opts,deep){
return (function (p1__19893_SHARP_){
return (openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2 ? openscd.scl.domToEdn.cljs$core$IFn$_invoke$arity$2(p1__19893_SHARP_,opts) : openscd.scl.domToEdn.call(null, p1__19893_SHARP_,opts));
});})(dom,p__19894,pred__19896,expr__19897,map__19895,map__19895__$1,opts,deep))
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
var G__19949 = function (dom,var_args){
var p__19894 = null;
if (arguments.length > 1) {
var G__19952__i = 0, G__19952__a = new Array(arguments.length -  1);
while (G__19952__i < G__19952__a.length) {G__19952__a[G__19952__i] = arguments[G__19952__i + 1]; ++G__19952__i;}
  p__19894 = new cljs.core.IndexedSeq(G__19952__a,0,null);
} 
return G__19949__delegate.call(this,dom,p__19894);};
G__19949.cljs$lang$maxFixedArity = 1;
G__19949.cljs$lang$applyTo = (function (arglist__19953){
var dom = cljs.core.first(arglist__19953);
var p__19894 = cljs.core.rest(arglist__19953);
return G__19949__delegate(dom,p__19894);
});
G__19949.cljs$core$IFn$_invoke$arity$variadic = G__19949__delegate;
return G__19949;
})()
);
goog.exportSymbol('openscd.scl.domToEdn', openscd.scl.domToEdn);
openscd.scl.render_attributes = (function openscd$scl$render_attributes(attrs,target){
var table = document.createElement("table");
var seq__19899_19954 = cljs.core.seq(attrs);
var chunk__19900_19955 = null;
var count__19901_19956 = (0);
var i__19902_19957 = (0);
while(true){
if((i__19902_19957 < count__19901_19956)){
var vec__19909_19958 = chunk__19900_19955.cljs$core$IIndexed$_nth$arity$2(null, i__19902_19957);
var k_19959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19909_19958,(0),null);
var v_19960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19909_19958,(1),null);
var tr_19961 = document.createElement("tr");
var th_19962 = document.createElement("th");
var td_19963 = document.createElement("td");
var ns_th_19964 = document.createElement("th");
var components_19965 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_19959),/:/,(2));
var anm_19966 = cljs.core.last(components_19965);
var ans_component_19967 = cljs.core.first(components_19965);
var ans_19968 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_19966,ans_component_19967))?"":ans_component_19967);
(ns_th_19964.textContent = ans_19968);

(th_19962.textContent = anm_19966);

if((v_19960 == null)){
(td_19963.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_19960)){
(td_19963.innerHTML = "<i>(empty)</i>");
} else {
(td_19963.textContent = v_19960);
}
}

tr_19961.appendChild(ns_th_19964);

tr_19961.appendChild(th_19962);

tr_19961.appendChild(td_19963);

table.appendChild(tr_19961);


var G__19969 = seq__19899_19954;
var G__19970 = chunk__19900_19955;
var G__19971 = count__19901_19956;
var G__19972 = (i__19902_19957 + (1));
seq__19899_19954 = G__19969;
chunk__19900_19955 = G__19970;
count__19901_19956 = G__19971;
i__19902_19957 = G__19972;
continue;
} else {
var temp__5804__auto___19973 = cljs.core.seq(seq__19899_19954);
if(temp__5804__auto___19973){
var seq__19899_19974__$1 = temp__5804__auto___19973;
if(cljs.core.chunked_seq_QMARK_(seq__19899_19974__$1)){
var c__5525__auto___19975 = cljs.core.chunk_first(seq__19899_19974__$1);
var G__19976 = cljs.core.chunk_rest(seq__19899_19974__$1);
var G__19977 = c__5525__auto___19975;
var G__19978 = cljs.core.count(c__5525__auto___19975);
var G__19979 = (0);
seq__19899_19954 = G__19976;
chunk__19900_19955 = G__19977;
count__19901_19956 = G__19978;
i__19902_19957 = G__19979;
continue;
} else {
var vec__19912_19980 = cljs.core.first(seq__19899_19974__$1);
var k_19981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912_19980,(0),null);
var v_19982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912_19980,(1),null);
var tr_19983 = document.createElement("tr");
var th_19984 = document.createElement("th");
var td_19985 = document.createElement("td");
var ns_th_19986 = document.createElement("th");
var components_19987 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_19981),/:/,(2));
var anm_19988 = cljs.core.last(components_19987);
var ans_component_19989 = cljs.core.first(components_19987);
var ans_19990 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_19988,ans_component_19989))?"":ans_component_19989);
(ns_th_19986.textContent = ans_19990);

(th_19984.textContent = anm_19988);

if((v_19982 == null)){
(td_19985.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_19982)){
(td_19985.innerHTML = "<i>(empty)</i>");
} else {
(td_19985.textContent = v_19982);
}
}

tr_19983.appendChild(ns_th_19986);

tr_19983.appendChild(th_19984);

tr_19983.appendChild(td_19985);

table.appendChild(tr_19983);


var G__19991 = cljs.core.next(seq__19899_19974__$1);
var G__19992 = null;
var G__19993 = (0);
var G__19994 = (0);
seq__19899_19954 = G__19991;
chunk__19900_19955 = G__19992;
count__19901_19956 = G__19993;
i__19902_19957 = G__19994;
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
var G__19917 = arguments.length;
switch (G__19917) {
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

return cljs.core.run_BANG_((function (p1__19915_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19915_SHARP_.tagName,"DETAILS")){
return (p1__19915_SHARP_.open = cljs.core.not(p1__19915_SHARP_.open));
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
var seq__19918_19996 = cljs.core.seq(ks);
var chunk__19919_19997 = null;
var count__19920_19998 = (0);
var i__19921_19999 = (0);
while(true){
if((i__19921_19999 < count__19920_19998)){
var k_20000 = chunk__19919_19997.cljs$core$IIndexed$_nth$arity$2(null, i__19921_19999);
var tr_20001 = document.createElement("tr");
var th_20002 = document.createElement("th");
var td_ours_20003 = document.createElement("td");
var td_arrow_20004 = document.createElement("td");
var td_theirs_20005 = document.createElement("td");
var ns_th_20006 = document.createElement("th");
var components_20007 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_20000),/:/,(2));
var anm_20008 = cljs.core.last(components_20007);
var ans_component_20009 = cljs.core.first(components_20007);
var ans_20010 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_20008,ans_component_20009))?"":ans_component_20009);
var v_ours_20011 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_20000) : ours.call(null, k_20000));
var v_theirs_20012 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_20000) : theirs.call(null, k_20000));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_20011,v_theirs_20012)){
} else {
(ns_th_20006.textContent = ans_20010);

(th_20002.textContent = anm_20008);

if((v_ours_20011 == null)){
(td_ours_20003.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_20011)){
(td_ours_20003.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_20003.textContent = v_ours_20011);
}
}

td_arrow_20004.classList.add("arrow");

(td_arrow_20004.textContent = "->");

if((v_theirs_20012 == null)){
(td_theirs_20005.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_20012)){
(td_theirs_20005.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_20005.textContent = v_theirs_20012);
}
}

tr_20001.appendChild(ns_th_20006);

tr_20001.appendChild(th_20002);

tr_20001.appendChild(td_ours_20003);

tr_20001.appendChild(td_arrow_20004);

tr_20001.appendChild(td_theirs_20005);

table.appendChild(tr_20001);
}


var G__20013 = seq__19918_19996;
var G__20014 = chunk__19919_19997;
var G__20015 = count__19920_19998;
var G__20016 = (i__19921_19999 + (1));
seq__19918_19996 = G__20013;
chunk__19919_19997 = G__20014;
count__19920_19998 = G__20015;
i__19921_19999 = G__20016;
continue;
} else {
var temp__5804__auto___20017 = cljs.core.seq(seq__19918_19996);
if(temp__5804__auto___20017){
var seq__19918_20018__$1 = temp__5804__auto___20017;
if(cljs.core.chunked_seq_QMARK_(seq__19918_20018__$1)){
var c__5525__auto___20019 = cljs.core.chunk_first(seq__19918_20018__$1);
var G__20020 = cljs.core.chunk_rest(seq__19918_20018__$1);
var G__20021 = c__5525__auto___20019;
var G__20022 = cljs.core.count(c__5525__auto___20019);
var G__20023 = (0);
seq__19918_19996 = G__20020;
chunk__19919_19997 = G__20021;
count__19920_19998 = G__20022;
i__19921_19999 = G__20023;
continue;
} else {
var k_20024 = cljs.core.first(seq__19918_20018__$1);
var tr_20025 = document.createElement("tr");
var th_20026 = document.createElement("th");
var td_ours_20027 = document.createElement("td");
var td_arrow_20028 = document.createElement("td");
var td_theirs_20029 = document.createElement("td");
var ns_th_20030 = document.createElement("th");
var components_20031 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_20024),/:/,(2));
var anm_20032 = cljs.core.last(components_20031);
var ans_component_20033 = cljs.core.first(components_20031);
var ans_20034 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_20032,ans_component_20033))?"":ans_component_20033);
var v_ours_20035 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_20024) : ours.call(null, k_20024));
var v_theirs_20036 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_20024) : theirs.call(null, k_20024));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_20035,v_theirs_20036)){
} else {
(ns_th_20030.textContent = ans_20034);

(th_20026.textContent = anm_20032);

if((v_ours_20035 == null)){
(td_ours_20027.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_20035)){
(td_ours_20027.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_20027.textContent = v_ours_20035);
}
}

td_arrow_20028.classList.add("arrow");

(td_arrow_20028.textContent = "->");

if((v_theirs_20036 == null)){
(td_theirs_20029.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_20036)){
(td_theirs_20029.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_20029.textContent = v_theirs_20036);
}
}

tr_20025.appendChild(ns_th_20030);

tr_20025.appendChild(th_20026);

tr_20025.appendChild(td_ours_20027);

tr_20025.appendChild(td_arrow_20028);

tr_20025.appendChild(td_theirs_20029);

table.appendChild(tr_20025);
}


var G__20037 = cljs.core.next(seq__19918_20018__$1);
var G__20038 = null;
var G__20039 = (0);
var G__20040 = (0);
seq__19918_19996 = G__20037;
chunk__19919_19997 = G__20038;
count__19920_19998 = G__20039;
i__19921_19999 = G__20040;
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
var G__19928 = arguments.length;
switch (G__19928) {
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

return cljs.core.run_BANG_((function (p1__19922_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19922_SHARP_.tagName,"DETAILS")){
return (p1__19922_SHARP_.open = cljs.core.not(p1__19922_SHARP_.open));
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
var element_pairs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19923_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__19923_SHARP_),(2))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__19923_SHARP_),cljs.core.second(p1__19923_SHARP_))));
}),cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([their_identified_elements,our_identified_elements], 0))));
var their_identities = cljs.core.set(cljs.core.keys(their_identified_elements));
var our_identities = cljs.core.set(cljs.core.keys(our_identified_elements));
var their_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19924_SHARP_){
return cljs.core.first((their_identified_elements.cljs$core$IFn$_invoke$arity$1 ? their_identified_elements.cljs$core$IFn$_invoke$arity$1(p1__19924_SHARP_) : their_identified_elements.call(null, p1__19924_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(their_identities,our_identities));
var our_elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19925_SHARP_){
return cljs.core.first((our_identified_elements.cljs$core$IFn$_invoke$arity$1 ? our_identified_elements.cljs$core$IFn$_invoke$arity$1(p1__19925_SHARP_) : our_identified_elements.call(null, p1__19925_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(our_identities,their_identities));
var child_count = ((cljs.core.count(element_pairs) + cljs.core.count(their_elements)) + cljs.core.count(our_elements));
var elements = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__19926_SHARP_){
var or__5002__auto__ = openscd.scl.tag_and_id(p1__19926_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return openscd.scl.tag_and_id(cljs.core.first(p1__19926_SHARP_));
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(element_pairs,their_elements,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([our_elements], 0)));
var nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ours))),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(theirs)))], null));
cljs.core.run_BANG_((function (node_or_pair){
if(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node_or_pair))){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(node_or_pair,details,child_count,cljs.core.not(odd),new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
var vec__19929 = node_or_pair;
var ours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19929,(0),null);
var theirs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19929,(1),null);
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
openscd.scl.sclDomDiff = (function openscd$scl$sclDomDiff(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20042 = arguments.length;
var i__5727__auto___20043 = (0);
while(true){
if((i__5727__auto___20043 < len__5726__auto___20042)){
args__5732__auto__.push((arguments[i__5727__auto___20043]));

var G__20044 = (i__5727__auto___20043 + (1));
i__5727__auto___20043 = G__20044;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return openscd.scl.sclDomDiff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});
goog.exportSymbol('openscd.scl.sclDomDiff', openscd.scl.sclDomDiff);

(openscd.scl.sclDomDiff.cljs$core$IFn$_invoke$arity$variadic = (function (dom1,dom2,target,p__19936){
var map__19937 = p__19936;
var map__19937__$1 = cljs.core.__destructure_map(map__19937);
var opts = map__19937__$1;
var edn1 = openscd.scl.domToEdn(dom1,opts);
var edn2 = openscd.scl.domToEdn(dom2,opts);
return openscd.scl.show_diff(edn1,edn2,target);
}));

(openscd.scl.sclDomDiff.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(openscd.scl.sclDomDiff.cljs$lang$applyTo = (function (seq19932){
var G__19933 = cljs.core.first(seq19932);
var seq19932__$1 = cljs.core.next(seq19932);
var G__19934 = cljs.core.first(seq19932__$1);
var seq19932__$2 = cljs.core.next(seq19932__$1);
var G__19935 = cljs.core.first(seq19932__$2);
var seq19932__$3 = cljs.core.next(seq19932__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19933,G__19934,G__19935,seq19932__$3);
}));

openscd.scl.sclDomToEdn = (function openscd$scl$sclDomToEdn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20045 = arguments.length;
var i__5727__auto___20046 = (0);
while(true){
if((i__5727__auto___20046 < len__5726__auto___20045)){
args__5732__auto__.push((arguments[i__5727__auto___20046]));

var G__20047 = (i__5727__auto___20046 + (1));
i__5727__auto___20046 = G__20047;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return openscd.scl.sclDomToEdn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});
goog.exportSymbol('openscd.scl.sclDomToEdn', openscd.scl.sclDomToEdn);

(openscd.scl.sclDomToEdn.cljs$core$IFn$_invoke$arity$variadic = (function (dom,p__19940){
var map__19941 = p__19940;
var map__19941__$1 = cljs.core.__destructure_map(map__19941);
var opts = map__19941__$1;
return openscd.scl.domToEdn(dom,opts);
}));

(openscd.scl.sclDomToEdn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(openscd.scl.sclDomToEdn.cljs$lang$applyTo = (function (seq19938){
var G__19939 = cljs.core.first(seq19938);
var seq19938__$1 = cljs.core.next(seq19938);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19939,seq19938__$1);
}));


//# sourceMappingURL=openscd.scl.js.map
