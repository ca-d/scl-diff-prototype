import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.js";
import "./fipp.edn.js";
import "./clojure.string.js";
import "./clojure.set.js";
import "./clojure.edn.js";
goog.provide('openscd.scl');
var module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity=shadow.js.require("module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity", {});
openscd.scl.after_next_paint = (function openscd$scl$after_next_paint(f){
return requestAnimationFrame((function (){
return setTimeout(f);
}));
});
openscd.scl.references = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ServerAt","ServerAt",-80406878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"apName"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>AccessPoint",new cljs.core.Keyword(null,"from","from",1815293044),":scope>AccessPoint>ServerAt",new cljs.core.Keyword(null,"scope","scope",-439358418),"IED"], null)], null),new cljs.core.Keyword(null,"DO","DO",555377637),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DOType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>LNodeType>DO",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.Keyword(null,"SDO","SDO",-467426968),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DOType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>DOType>SDO",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.Keyword(null,"BDA","BDA",1284162761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DAType, :scope>EnumType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>DOType>DA,\n          :scope>DAType>BDA",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null),new cljs.core.Keyword(null,"GSEControl","GSEControl",1967882450),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"name",new cljs.core.Keyword(null,"from","from",1815293044),"datSet"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DataSet",new cljs.core.Keyword(null,"from","from",1815293044),":scope>GSEControl",new cljs.core.Keyword(null,"scope","scope",-439358418),"LN0"], null)], null),new cljs.core.Keyword(null,"DA","DA",770036184),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"id",new cljs.core.Keyword(null,"from","from",1815293044),"type"], null)], null),new cljs.core.Keyword(null,"to","to",192099007),":scope>DAType, :scope>EnumType",new cljs.core.Keyword(null,"from","from",1815293044),":scope>DOType>DA, :scope>DAType>BDA",new cljs.core.Keyword(null,"scope","scope",-439358418),"DataTypeTemplates"], null)], null)], null);
openscd.scl.defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SubNetwork","SubNetwork",1513043072),new cljs.core.Keyword(null,"DAI","DAI",-1380715744),new cljs.core.Keyword(null,"ConfDataSet","ConfDataSet",-960244928),new cljs.core.Keyword(null,"SMV","SMV",369202016),new cljs.core.Keyword(null,"NeutralPoint","NeutralPoint",-1282681631),new cljs.core.Keyword(null,"Function","Function",1904540321),new cljs.core.Keyword(null,"AccessPoint","AccessPoint",-9059166),new cljs.core.Keyword(null,"LNode","LNode",566631042),new cljs.core.Keyword(null,"ServerAt","ServerAt",-80406878),new cljs.core.Keyword(null,"Inputs","Inputs",-958498078),new cljs.core.Keyword(null,"DOType","DOType",-946654270),new cljs.core.Keyword(null,"LogControl","LogControl",1132593187),new cljs.core.Keyword(null,"SubEquipment","SubEquipment",-1880159453),new cljs.core.Keyword(null,"Server","Server",-1453472893),new cljs.core.Keyword(null,"SMVSettings","SMVSettings",-772432476),new cljs.core.Keyword(null,"FCDA","FCDA",1518695140),new cljs.core.Keyword(null,"ConnectedAP","ConnectedAP",-1381548891),new cljs.core.Keyword(null,"Header","Header",1255420133),new cljs.core.Keyword(null,"ConfReportControl","ConfReportControl",1171542373),new cljs.core.Keyword(null,"DO","DO",555377637),new cljs.core.Keyword(null,"SMVsc","SMVsc",-674389914),new cljs.core.Keyword(null,"ReportSettings","ReportSettings",-2135201114),new cljs.core.Keyword(null,"IED","IED",-1202207737),new cljs.core.Keyword(null,"DataSet","DataSet",1832502311),new cljs.core.Keyword(null,"Communication","Communication",800195751),new cljs.core.Keyword(null,"ConfLNs","ConfLNs",-174971193),new cljs.core.Keyword(null,"SDO","SDO",-467426968),new cljs.core.Keyword(null,"EqFunction","EqFunction",1525876264),new cljs.core.Keyword(null,"GeneralEquipment","GeneralEquipment",94889864),new cljs.core.Keyword(null,"BDA","BDA",1284162761),new cljs.core.Keyword(null,"Terminal","Terminal",-1610057718),new cljs.core.Keyword(null,"Log","Log",1668795722),new cljs.core.Keyword(null,"SettingGroups","SettingGroups",-1927378165),new cljs.core.Keyword(null,"ClientServices","ClientServices",1712773067),new cljs.core.Keyword(null,"Line","Line",1577484267),new cljs.core.Keyword(null,"DOI","DOI",675703916),new cljs.core.Keyword(null,"McSecurity","McSecurity",-1266851668),new cljs.core.Keyword(null,"SMVSecurity","SMVSecurity",1159028460),new cljs.core.Keyword(null,"LogSettings","LogSettings",1082414093),new cljs.core.Keyword(null,"SettingControl","SettingControl",1352987789),new cljs.core.Keyword(null,"RedProt","RedProt",-693281587),new cljs.core.Keyword(null,"SDI","SDI",-2071007315),new cljs.core.Keyword(null,"EnumType","EnumType",-1438451634),new cljs.core.Keyword(null,"TapChanger","TapChanger",-2048168786),new cljs.core.Keyword(null,"DAType","DAType",-525603538),new cljs.core.Keyword(null,"TrgOps","TrgOps",1191552750),new cljs.core.Keyword(null,"TimeSyncProt","TimeSyncProt",2121906415),new cljs.core.Keyword(null,"SampledValueControl","SampledValueControl",-1835009617),new cljs.core.Keyword(null,"ConductingEquipment","ConductingEquipment",240024335),new cljs.core.Keyword(null,"GSE","GSE",-1057390737),new cljs.core.Keyword(null,"FileHandling","FileHandling",1280872816),new cljs.core.Keyword(null,"GOOSE","GOOSE",-1318299056),new cljs.core.Keyword(null,"EqSubFunction","EqSubFunction",-1274488144),new cljs.core.Keyword(null,"Substation","Substation",-1616046062),new cljs.core.Keyword(null,"GSEControl","GSEControl",1967882450),new cljs.core.Keyword(null,"ConnectivityNode","ConnectivityNode",963767219),new cljs.core.Keyword(null,"Services","Services",216940693),new cljs.core.Keyword(null,"SubFunction","SubFunction",-616419755),new cljs.core.Keyword(null,"LDevice","LDevice",185641685),new cljs.core.Keyword(null,"Bay","Bay",481732854),new cljs.core.Keyword(null,"GOOSESecurity","GOOSESecurity",1603518615),new cljs.core.Keyword(null,"ValueHandling","ValueHandling",-1748635433),new cljs.core.Keyword(null,"DA","DA",770036184),new cljs.core.Keyword(null,"TransformerWinding","TransformerWinding",1970243449),new cljs.core.Keyword(null,"EnumVal","EnumVal",-365622982),new cljs.core.Keyword(null,"RptEnabled","RptEnabled",-2056798822),new cljs.core.Keyword(null,"GSESettings","GSESettings",-381240710),new cljs.core.Keyword(null,"PowerTransformer","PowerTransformer",-1987658022),new cljs.core.Keyword(null,"CommProt","CommProt",1024567547),new cljs.core.Keyword(null,"PhysConn","PhysConn",-560502213),new cljs.core.Keyword(null,"VoltageLevel","VoltageLevel",1806986235),new cljs.core.Keyword(null,"Association","Association",1117992412),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"ProtNs","ProtNs",-321700004),new cljs.core.Keyword(null,"Voltage","Voltage",-463905283),new cljs.core.Keyword(null,"ReportControl","ReportControl",2059382493),new cljs.core.Keyword(null,"ClientLN","ClientLN",-837811427),new cljs.core.Keyword(null,"LNodeType","LNodeType",-1328186018),new cljs.core.Keyword(null,"LN","LN",-19107970)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modify","modify",-1261040869),"true"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clock","clock",-894301127),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"kdc","kdc",-1313452933),"false",new cljs.core.Keyword(null,"router","router",1091916230),"false"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedName","iedName",402101163),"None",new cljs.core.Keyword(null,"ldInst","ldInst",-235322900),"",new cljs.core.Keyword(null,"lnInst","lnInst",1375769467),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bufTime","bufTime",51492580),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"0",new cljs.core.Keyword(null,"lnClass","lnClass",-1618489557),"LLN0",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"true",new cljs.core.Keyword(null,"prefix","prefix",-265908465),"",new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"phase","phase",575722892),"none",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"certificate","certificate",-1722392944),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"none","none",1333468478),"true",new cljs.core.Keyword(null,"password","password",417022471),"false",new cljs.core.Keyword(null,"strong","strong",269529000),"false",new cljs.core.Keyword(null,"timeout","timeout",-318625318),"30",new cljs.core.Keyword(null,"weak","weak",-263559193),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"synchSrcId","synchSrcId",-1341424891),new cljs.core.Keyword(null,"samplesPerSec","samplesPerSec",290641416),new cljs.core.Keyword(null,"nofASDU","nofASDU",549933451),new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"svID","svID",2004984953),new cljs.core.Keyword(null,"pdcTimeStamp","pdcTimeStamp",-807293638),new cljs.core.Keyword(null,"smpRate","smpRate",-200743717)],["Fix","false","false","Fix","false","Fix","Fix","Fix","false","Fix"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nameStructure","nameStructure",1614188240),"IEDName",new cljs.core.Keyword(null,"revision","revision",-1350113114),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bufConf","bufConf",-1805669827),"false",new cljs.core.Keyword(null,"bufMode","bufMode",442239108),"both"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"transient","transient",-741416458),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delivery","delivery",-1844470516),"multicast",new cljs.core.Keyword(null,"deliveryConf","deliveryConf",1274627683),"false",new cljs.core.Keyword(null,"rSV","rSV",-377232507),"false",new cljs.core.Keyword(null,"sv","sv",-170947079),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cbName","cbName",-1384147934),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),new cljs.core.Keyword(null,"rptID","rptID",-1638118187),new cljs.core.Keyword(null,"optFields","optFields",-1875135626),new cljs.core.Keyword(null,"datSet","datSet",-1342634633),new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),new cljs.core.Keyword(null,"owner","owner",-392611939)],["Fix","Fix","Fix","Fix","Fix","Fix","Fix","false","false"]),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"engRight","engRight",-1595406869),"full",new cljs.core.Keyword(null,"originalSclRelease","originalSclRelease",-1081077436),"1",new cljs.core.Keyword(null,"originalSclRevision","originalSclRevision",-836709520),"A",new cljs.core.Keyword(null,"originalSclVersion","originalSclVersion",-1809524001),"2003"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fixLnInst","fixLnInst",1397782802),"false",new cljs.core.Keyword(null,"fixPrefix","fixPrefix",2000600117),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resvTms","resvTms",2121786808),"false"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rSV","rSV",-377232507),new cljs.core.Keyword(null,"supportsLdName","supportsLdName",-1152946517),new cljs.core.Keyword(null,"unbufReport","unbufReport",-1256563765),new cljs.core.Keyword(null,"readLog","readLog",-1167325044),new cljs.core.Keyword(null,"gsse","gsse",1726144048),new cljs.core.Keyword(null,"bufReport","bufReport",499691121),new cljs.core.Keyword(null,"noIctBinding","noIctBinding",592113523),new cljs.core.Keyword(null,"sv","sv",-170947079),new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),new cljs.core.Keyword(null,"goose","goose",-536708771)],["false","false","false","false","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encryption","encryption",932327985),"false",new cljs.core.Keyword(null,"signature","signature",1463754794),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"intgPd","intgPd",77150729),"Fix",new cljs.core.Keyword(null,"logEna","logEna",1936311139),"Fix",new cljs.core.Keyword(null,"trgOps","trgOps",2006884810),"Fix"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actSG","actSG",1268860441),"1",new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hsr","hsr",-337177447),"false",new cljs.core.Keyword(null,"prp","prp",-170777589),"false",new cljs.core.Keyword(null,"rstp","rstp",1328619181),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"gi","gi",615521304),"true",new cljs.core.Keyword(null,"period","period",-352129191),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c37_238","c37_238",-898135915),"false",new cljs.core.Keyword(null,"iec61850_9_3","iec61850_9_3",634944364),"false",new cljs.core.Keyword(null,"other","other",995793544),"false",new cljs.core.Keyword(null,"sntp","sntp",2031979313),"true"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refreshTime","refreshTime",1227432160),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"smpMod","smpMod",1474067362),new cljs.core.Keyword(null,"multicast","multicast",663249443),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"security","security",886963079),new cljs.core.Keyword(null,"sampleRate","sampleRate",-541273751),new cljs.core.Keyword(null,"synchSourceId","synchSourceId",1337574989),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161)],["false","false","SmpPerPeriod","true","","false","false","false","false","None"]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ftp","ftp",911215182),"false",new cljs.core.Keyword(null,"ftps","ftps",-181752509),"false",new cljs.core.Keyword(null,"mms","mms",2022958659),"true"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"goose","goose",-536708771),"true",new cljs.core.Keyword(null,"rGOOSE","rGOOSE",706360028),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"fixedOffs","fixedOffs",-1384673079),"false",new cljs.core.Keyword(null,"securityEnable","securityEnable",-1286360161),"None",new cljs.core.Keyword(null,"type","type",1174270348),"GOOSE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameLength","nameLength",1065745338),"32"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setToRO","setToRO",-293917888),"false"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"count","count",2139924085),"0",new cljs.core.Keyword(null,"dchg","dchg",1841209563),"false",new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"dupd","dupd",-1316681070),"false",new cljs.core.Keyword(null,"qchg","qchg",-1112937185),"false",new cljs.core.Keyword(null,"valImport","valImport",3275326),"false",new cljs.core.Keyword(null,"valKind","valKind",-153181576),"Set"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"max","max",61366548),"1"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appID","appID",-437327348),"Fix",new cljs.core.Keyword(null,"cbName","cbName",-1384147934),"Fix",new cljs.core.Keyword(null,"datSet","datSet",-1342634633),"Fix",new cljs.core.Keyword(null,"dataLabel","dataLabel",-281723456),"Fix",new cljs.core.Keyword(null,"kdaParticipant","kdaParticipant",-1364092234),"false"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"virtual","virtual",-1139229001),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ipv6","ipv6",1396006004),"false"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"desc","desc",2093485764),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"8-MMS"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiplier","multiplier",-1362683902),""], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indexed","indexed",390758624),new cljs.core.Keyword(null,"dataSet","dataSet",420571745),new cljs.core.Keyword(null,"buffered","buffered",-1922691934),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"bufTime","bufTime",51492580),new cljs.core.Keyword(null,"bufOvfl","bufOvfl",-2072761018),new cljs.core.Keyword(null,"intgPd","intgPd",77150729),new cljs.core.Keyword(null,"entryID","entryID",-1540914964),new cljs.core.Keyword(null,"reasonCode","reasonCode",527868140),new cljs.core.Keyword(null,"dataRef","dataRef",238120492),new cljs.core.Keyword(null,"timeStamp","timeStamp",1425535532),new cljs.core.Keyword(null,"seqNum","seqNum",-2121388205),new cljs.core.Keyword(null,"configRef","configRef",617933566)],["true","false","false","","0","true","0","false","false","false","false","false","false"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"iedType","iedType",380576967),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null)]);
openscd.scl.with_defaults = (function openscd$scl$with_defaults(p__11903){
var map__11904 = p__11903;
var map__11904__$1 = cljs.core.__destructure_map(map__11904);
var element = map__11904__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11904__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var default_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.defaults,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(cljs.core.truth_(default_attrs)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,attrs], 0)):attrs));
});
openscd.scl.tos = (function openscd$scl$tos(p__11906,elm){
var map__11907 = p__11906;
var map__11907__$1 = cljs.core.__destructure_map(map__11907);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11907__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11907__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11907__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11907__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
var ancestor = elm.closest(scope);
if(cljs.core.truth_((function (){var and__5000__auto__ = ancestor;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.some((function (p1__11905_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__11905_SHARP_);
}),cljs.core.vec(ancestor.querySelectorAll(from)));
} else {
return and__5000__auto__;
}
})())){
var referents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (target){
return cljs.core.every_QMARK_((function (p__11908){
var map__11909 = p__11908;
var map__11909__$1 = cljs.core.__destructure_map(map__11909);
var from__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11909__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11909__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target.getAttribute(to__$1),elm.getAttribute(from__$1));
}),fields);
}),cljs.core.vec(ancestor.querySelectorAll(to)));
return referents;
} else {
return null;
}
});
openscd.scl.with_references = (function openscd$scl$with_references(p__11910){
var map__11911 = p__11910;
var map__11911__$1 = cljs.core.__destructure_map(map__11911);
var element = map__11911__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11911__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11911__$1,new cljs.core.Keyword(null,"content","content",15833224));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(openscd.scl.references,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
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

(openscd.scl.Elm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k11913,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__11917 = k11913;
var G__11917__$1 = (((G__11917 instanceof cljs.core.Keyword))?G__11917.fqn:null);
switch (G__11917__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11913,else__5303__auto__);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__11918){
var vec__11919 = p__11918;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11919,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11919,(1),null);
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

(openscd.scl.Elm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11912){
var self__ = this;
var G__11912__$1 = this;
return (new cljs.core.RecordIter((0),G__11912__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(openscd.scl.Elm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11914,other11915){
var self__ = this;
var this11914__$1 = this;
return (((!((other11915 == null)))) && ((((this11914__$1.constructor === other11915.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11914__$1.tag,other11915.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11914__$1.attrs,other11915.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11914__$1.content,other11915.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11914__$1.__extmap,other11915.__extmap)))))))))));
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

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k11913){
var self__ = this;
var this__5307__auto____$1 = this;
var G__11922 = k11913;
var G__11922__$1 = (((G__11922 instanceof cljs.core.Keyword))?G__11922.fqn:null);
switch (G__11922__$1) {
case "tag":
case "attrs":
case "content":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11913);

}
}));

(openscd.scl.Elm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__11912){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__11923 = cljs.core.keyword_identical_QMARK_;
var expr__11924 = k__5309__auto__;
if(cljs.core.truth_((pred__11923.cljs$core$IFn$_invoke$arity$2 ? pred__11923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__11924) : pred__11923.call(null, new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__11924)))){
return (new openscd.scl.Elm(G__11912,self__.attrs,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11923.cljs$core$IFn$_invoke$arity$2 ? pred__11923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__11924) : pred__11923.call(null, new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__11924)))){
return (new openscd.scl.Elm(self__.tag,G__11912,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11923.cljs$core$IFn$_invoke$arity$2 ? pred__11923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__11924) : pred__11923.call(null, new cljs.core.Keyword(null,"content","content",15833224),expr__11924)))){
return (new openscd.scl.Elm(self__.tag,self__.attrs,G__11912,self__.__meta,self__.__extmap,null));
} else {
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__11912),null));
}
}
}
}));

(openscd.scl.Elm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(openscd.scl.Elm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__11912){
var self__ = this;
var this__5299__auto____$1 = this;
return (new openscd.scl.Elm(self__.tag,self__.attrs,self__.content,G__11912,self__.__extmap,self__.__hash));
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
openscd.scl.map__GT_Elm = (function openscd$scl$map__GT_Elm(G__11916){
var extmap__5342__auto__ = (function (){var G__11926 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11916,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], 0));
if(cljs.core.record_QMARK_(G__11916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11926);
} else {
return G__11926;
}
})();
return (new openscd.scl.Elm(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__11916),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__11916),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__11916),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

openscd.scl.domToEdn = cljs.core.memoize((function (dom){
while(true){
var pred__11927 = cljs.core._EQ_;
var expr__11928 = dom.nodeType;
if(cljs.core.truth_((pred__11927.cljs$core$IFn$_invoke$arity$2 ? pred__11927.cljs$core$IFn$_invoke$arity$2((3),expr__11928) : pred__11927.call(null, (3),expr__11928)))){
return dom.textContent;
} else {
if(cljs.core.truth_((pred__11927.cljs$core$IFn$_invoke$arity$2 ? pred__11927.cljs$core$IFn$_invoke$arity$2((9),expr__11928) : pred__11927.call(null, (9),expr__11928)))){
var G__11985 = dom.documentElement;
dom = G__11985;
continue;
} else {
if(cljs.core.truth_((pred__11927.cljs$core$IFn$_invoke$arity$2 ? pred__11927.cljs$core$IFn$_invoke$arity$2((1),expr__11928) : pred__11927.call(null, (1),expr__11928)))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dom.tagName,"DataTypeTemplates")){
return openscd.scl.with_references(openscd.scl.with_defaults((new openscd.scl.Elm(dom.tagName,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (dom,pred__11927,expr__11928){
return (function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a.name),a.value], null);
});})(dom,pred__11927,expr__11928))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom.attributes], 0))),cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(openscd.scl.domToEdn,dom.childNodes))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925),dom], null),null,null,null,null))));
} else {
return null;
}
} else {
return null;
}
}
}
break;
}
}));
goog.exportSymbol('openscd.scl.domToEdn', openscd.scl.domToEdn);
openscd.scl.render_attributes = (function openscd$scl$render_attributes(attrs,target){
var table = document.createElement("table");
var seq__11930_11986 = cljs.core.seq(attrs);
var chunk__11931_11987 = null;
var count__11932_11988 = (0);
var i__11933_11989 = (0);
while(true){
if((i__11933_11989 < count__11932_11988)){
var vec__11940_11990 = chunk__11931_11987.cljs$core$IIndexed$_nth$arity$2(null, i__11933_11989);
var k_11991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11940_11990,(0),null);
var v_11992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11940_11990,(1),null);
var tr_11993 = document.createElement("tr");
var th_11994 = document.createElement("th");
var td_11995 = document.createElement("td");
var ns_th_11996 = document.createElement("th");
var components_11997 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_11991),/:/,(2));
var anm_11998 = cljs.core.last(components_11997);
var ans_component_11999 = cljs.core.first(components_11997);
var ans_12000 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_11998,ans_component_11999))?"":ans_component_11999);
(ns_th_11996.textContent = ans_12000);

(th_11994.textContent = anm_11998);

if((v_11992 == null)){
(td_11995.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_11992)){
(td_11995.innerHTML = "<i>(empty)</i>");
} else {
(td_11995.textContent = v_11992);
}
}

tr_11993.appendChild(ns_th_11996);

tr_11993.appendChild(th_11994);

tr_11993.appendChild(td_11995);

table.appendChild(tr_11993);


var G__12001 = seq__11930_11986;
var G__12002 = chunk__11931_11987;
var G__12003 = count__11932_11988;
var G__12004 = (i__11933_11989 + (1));
seq__11930_11986 = G__12001;
chunk__11931_11987 = G__12002;
count__11932_11988 = G__12003;
i__11933_11989 = G__12004;
continue;
} else {
var temp__5804__auto___12005 = cljs.core.seq(seq__11930_11986);
if(temp__5804__auto___12005){
var seq__11930_12006__$1 = temp__5804__auto___12005;
if(cljs.core.chunked_seq_QMARK_(seq__11930_12006__$1)){
var c__5525__auto___12007 = cljs.core.chunk_first(seq__11930_12006__$1);
var G__12008 = cljs.core.chunk_rest(seq__11930_12006__$1);
var G__12009 = c__5525__auto___12007;
var G__12010 = cljs.core.count(c__5525__auto___12007);
var G__12011 = (0);
seq__11930_11986 = G__12008;
chunk__11931_11987 = G__12009;
count__11932_11988 = G__12010;
i__11933_11989 = G__12011;
continue;
} else {
var vec__11943_12012 = cljs.core.first(seq__11930_12006__$1);
var k_12013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11943_12012,(0),null);
var v_12014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11943_12012,(1),null);
var tr_12015 = document.createElement("tr");
var th_12016 = document.createElement("th");
var td_12017 = document.createElement("td");
var ns_th_12018 = document.createElement("th");
var components_12019 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12013),/:/,(2));
var anm_12020 = cljs.core.last(components_12019);
var ans_component_12021 = cljs.core.first(components_12019);
var ans_12022 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12020,ans_component_12021))?"":ans_component_12021);
(ns_th_12018.textContent = ans_12022);

(th_12016.textContent = anm_12020);

if((v_12014 == null)){
(td_12017.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_12014)){
(td_12017.innerHTML = "<i>(empty)</i>");
} else {
(td_12017.textContent = v_12014);
}
}

tr_12015.appendChild(ns_th_12018);

tr_12015.appendChild(th_12016);

tr_12015.appendChild(td_12017);

table.appendChild(tr_12015);


var G__12023 = cljs.core.next(seq__11930_12006__$1);
var G__12024 = null;
var G__12025 = (0);
var G__12026 = (0);
seq__11930_11986 = G__12023;
chunk__11931_11987 = G__12024;
count__11932_11988 = G__12025;
i__11933_11989 = G__12026;
continue;
}
} else {
}
}
break;
}

return target.appendChild(table);
});
openscd.scl.render_node = (function openscd$scl$render_node(var_args){
var G__11948 = arguments.length;
switch (G__11948) {
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
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$3(data,target,(1));
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

(summary.textContent = ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data)),"> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," "].join(''));

details.appendChild(summary);

target.appendChild(details);

summary.addEventListener("contextmenu",(function (e){
summary.append([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(data))].join(''));

return e.preventDefault();
}));

summary.addEventListener("auxclick",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(1))){
e.preventDefault();

return cljs.core.run_BANG_((function (p1__11946_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11946_SHARP_.tagName,"DETAILS")){
return (p1__11946_SHARP_.open = cljs.core.not(p1__11946_SHARP_.open));
} else {
return null;
}
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(details.children));
} else {
return null;
}
}));

details.addEventListener("toggle",(function (e){
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
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(data)));

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
var seq__11949_12028 = cljs.core.seq(ks);
var chunk__11950_12029 = null;
var count__11951_12030 = (0);
var i__11952_12031 = (0);
while(true){
if((i__11952_12031 < count__11951_12030)){
var k_12032 = chunk__11950_12029.cljs$core$IIndexed$_nth$arity$2(null, i__11952_12031);
var tr_12033 = document.createElement("tr");
var th_12034 = document.createElement("th");
var td_ours_12035 = document.createElement("td");
var td_arrow_12036 = document.createElement("td");
var td_theirs_12037 = document.createElement("td");
var ns_th_12038 = document.createElement("th");
var components_12039 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12032),/:/,(2));
var anm_12040 = cljs.core.last(components_12039);
var ans_component_12041 = cljs.core.first(components_12039);
var ans_12042 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12040,ans_component_12041))?"":ans_component_12041);
var v_ours_12043 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_12032) : ours.call(null, k_12032));
var v_theirs_12044 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_12032) : theirs.call(null, k_12032));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_12043,v_theirs_12044)){
} else {
(ns_th_12038.textContent = ans_12042);

(th_12034.textContent = anm_12040);

if((v_ours_12043 == null)){
(td_ours_12035.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_12043)){
(td_ours_12035.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_12035.textContent = v_ours_12043);
}
}

td_arrow_12036.classList.add("arrow");

(td_arrow_12036.textContent = "->");

if((v_theirs_12044 == null)){
(td_theirs_12037.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_12044)){
(td_theirs_12037.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_12037.textContent = v_theirs_12044);
}
}

tr_12033.appendChild(ns_th_12038);

tr_12033.appendChild(th_12034);

tr_12033.appendChild(td_ours_12035);

tr_12033.appendChild(td_arrow_12036);

tr_12033.appendChild(td_theirs_12037);

table.appendChild(tr_12033);
}


var G__12045 = seq__11949_12028;
var G__12046 = chunk__11950_12029;
var G__12047 = count__11951_12030;
var G__12048 = (i__11952_12031 + (1));
seq__11949_12028 = G__12045;
chunk__11950_12029 = G__12046;
count__11951_12030 = G__12047;
i__11952_12031 = G__12048;
continue;
} else {
var temp__5804__auto___12049 = cljs.core.seq(seq__11949_12028);
if(temp__5804__auto___12049){
var seq__11949_12050__$1 = temp__5804__auto___12049;
if(cljs.core.chunked_seq_QMARK_(seq__11949_12050__$1)){
var c__5525__auto___12051 = cljs.core.chunk_first(seq__11949_12050__$1);
var G__12052 = cljs.core.chunk_rest(seq__11949_12050__$1);
var G__12053 = c__5525__auto___12051;
var G__12054 = cljs.core.count(c__5525__auto___12051);
var G__12055 = (0);
seq__11949_12028 = G__12052;
chunk__11950_12029 = G__12053;
count__11951_12030 = G__12054;
i__11952_12031 = G__12055;
continue;
} else {
var k_12056 = cljs.core.first(seq__11949_12050__$1);
var tr_12057 = document.createElement("tr");
var th_12058 = document.createElement("th");
var td_ours_12059 = document.createElement("td");
var td_arrow_12060 = document.createElement("td");
var td_theirs_12061 = document.createElement("td");
var ns_th_12062 = document.createElement("th");
var components_12063 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.name(k_12056),/:/,(2));
var anm_12064 = cljs.core.last(components_12063);
var ans_component_12065 = cljs.core.first(components_12063);
var ans_12066 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anm_12064,ans_component_12065))?"":ans_component_12065);
var v_ours_12067 = (ours.cljs$core$IFn$_invoke$arity$1 ? ours.cljs$core$IFn$_invoke$arity$1(k_12056) : ours.call(null, k_12056));
var v_theirs_12068 = (theirs.cljs$core$IFn$_invoke$arity$1 ? theirs.cljs$core$IFn$_invoke$arity$1(k_12056) : theirs.call(null, k_12056));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_ours_12067,v_theirs_12068)){
} else {
(ns_th_12062.textContent = ans_12066);

(th_12058.textContent = anm_12064);

if((v_ours_12067 == null)){
(td_ours_12059.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_ours_12067)){
(td_ours_12059.innerHTML = "<i>(empty)</i>");
} else {
(td_ours_12059.textContent = v_ours_12067);
}
}

td_arrow_12060.classList.add("arrow");

(td_arrow_12060.textContent = "->");

if((v_theirs_12068 == null)){
(td_theirs_12061.innerHTML = "<i>(missing)</i>");
} else {
if(clojure.string.blank_QMARK_(v_theirs_12068)){
(td_theirs_12061.innerHTML = "<i>(empty)</i>");
} else {
(td_theirs_12061.textContent = v_theirs_12068);
}
}

tr_12057.appendChild(ns_th_12062);

tr_12057.appendChild(th_12058);

tr_12057.appendChild(td_ours_12059);

tr_12057.appendChild(td_arrow_12060);

tr_12057.appendChild(td_theirs_12061);

table.appendChild(tr_12057);
}


var G__12069 = cljs.core.next(seq__11949_12050__$1);
var G__12070 = null;
var G__12071 = (0);
var G__12072 = (0);
seq__11949_12028 = G__12069;
chunk__11950_12029 = G__12070;
count__11951_12030 = G__12071;
i__11952_12031 = G__12072;
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
var G__11963 = arguments.length;
switch (G__11963) {
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
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$4(ours,theirs,target,(1));
}));

(openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$4 = (function (ours,theirs,target,sibling_count){
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5(ours,theirs,target,sibling_count,false);
}));

(openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5 = (function (ours,theirs,target,sibling_count,odd){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ours,theirs)){
return null;
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

(summary.textContent = ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ours)),"> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," "].join(''));

details.appendChild(summary);

target.appendChild(details);

summary.addEventListener("contextmenu",(function (e){
summary.append([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(ours))," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(theirs))].join(''));

return e.preventDefault();
}));

summary.addEventListener("auxclick",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(1))){
e.preventDefault();

return cljs.core.run_BANG_((function (p1__11953_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11953_SHARP_.tagName,"DETAILS")){
return (p1__11953_SHARP_.open = cljs.core.not(p1__11953_SHARP_.open));
} else {
return null;
}
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(details.children));
} else {
return null;
}
}));

details.addEventListener("toggle",(function (e){
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
var node_pairs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__11954_SHARP_),(2));
}),cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.group_by((function (p1__11955_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__11955_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.identity(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__11955_SHARP_))))].join('');
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ours),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(theirs)))], 0))));
var their_identified_nodes = cljs.core.group_by((function (p1__11956_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__11956_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.identity(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__11956_SHARP_))))].join('');
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(theirs));
var our_identified_nodes = cljs.core.group_by((function (p1__11957_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__11957_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$$openenergytools$scl_lib$dist$tBaseElement$identity.identity(new cljs.core.Keyword("openscd.scl","element","openscd.scl/element",1923698925).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__11957_SHARP_))))].join('');
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ours));
var their_identities = cljs.core.set(cljs.core.keys(their_identified_nodes));
var our_identities = cljs.core.set(cljs.core.keys(our_identified_nodes));
var their_nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11958_SHARP_){
return cljs.core.first((their_identified_nodes.cljs$core$IFn$_invoke$arity$1 ? their_identified_nodes.cljs$core$IFn$_invoke$arity$1(p1__11958_SHARP_) : their_identified_nodes.call(null, p1__11958_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(their_identities,our_identities));
var our_nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11959_SHARP_){
return cljs.core.first((our_identified_nodes.cljs$core$IFn$_invoke$arity$1 ? our_identified_nodes.cljs$core$IFn$_invoke$arity$1(p1__11959_SHARP_) : our_identified_nodes.call(null, p1__11959_SHARP_)));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(our_identities,their_identities));
var child_count = ((cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11960_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__11960_SHARP_));
}),node_pairs)) + cljs.core.count(their_nodes)) + cljs.core.count(our_nodes));
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11964){
var vec__11965 = p__11964;
var ours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(0),null);
var theirs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(1),null);
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$5(ours__$1,theirs__$1,details,child_count,cljs.core.not(odd));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__11961_SHARP_){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__11961_SHARP_));
}),node_pairs)));

if(cljs.core.seq(their_nodes)){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(node,details,child_count,cljs.core.not(odd),new cljs.core.Keyword(null,"new","new",-2085437848));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),their_nodes)));
} else {
}

if(cljs.core.seq(our_nodes)){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return openscd.scl.render_node.cljs$core$IFn$_invoke$arity$5(node,details,child_count,cljs.core.not(odd),new cljs.core.Keyword(null,"old","old",-1825222690));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),our_nodes)));
} else {
}

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
}));

(openscd.scl.render_node_diff.cljs$lang$maxFixedArity = 5);

openscd.scl.show_diff = (function openscd$scl$show_diff(edn1,edn2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edn1,edn2)){
return null;
} else {
return openscd.scl.render_node_diff.cljs$core$IFn$_invoke$arity$3(edn1,edn2,document.body);
}
});
openscd.scl.sclDomDiff = (function openscd$scl$sclDomDiff(dom1,dom2){
var edn1 = openscd.scl.domToEdn(dom1);
var edn2 = openscd.scl.domToEdn(dom2);
return openscd.scl.show_diff(edn1,edn2);
});
goog.exportSymbol('openscd.scl.sclDomDiff', openscd.scl.sclDomDiff);
openscd.scl.sclDomToEdn = (function openscd$scl$sclDomToEdn(dom){
return openscd.scl.show_data(openscd.scl.domToEdn(dom));
});
goog.exportSymbol('openscd.scl.sclDomToEdn', openscd.scl.sclDomToEdn);

//# sourceMappingURL=openscd.scl.js.map
