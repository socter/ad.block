/*


80OG8GOO@@@@@B@@@B@@@B@B@@@88ZOZ88@@BOMM@B@O8Z8GOGOZ8GO8O8MOO8MO@BMGOZOG8GOZ8G88O8O8OOMOBMMOOGOGOZOG
Gqq0q00Oviiiiiiiiiiiiiiiii5ON0N00BU7X8ZM  qMNEqEq0q0NGOBM@B@8GOO,;MGN0N0qEqENGOM8MMMM@MMOMB@MZq0qEPN
ON8GOGMZ UXSNP0qNq0q0PPFN:,BOG8GMB  rBMB. EBBMO88Z8ZOZjvur..OM@B  @BOGOZ8GOGOOu0OLLYvii:,  :OMOG8GGG
GZZOZOMG @B@M@@@B@B@@@B@BJ,@88ZMBq .B@B@P @@BMMM8OG8OOi.Lu  E@B: ::@BM88G8Z8OB  J7iF851M@@  :@8GZOZ8
O0OZ8GMZ M@:           O@7:BOGOB@ .BBOOB0 v:  .ZMZ8GOBk MB :@Bv 0B. kB@OOGOZO@L @B@L7B@U2@v 0@OZ8GGE
8EG8ZOMG MBZ0MBM  Y@E0PBBv,@OOB@  @@7 .   :k2Gq888Z8GBB Z@ L@v MB@B: ,G@BOG88@v M@B  BB. @O 5@88G8Z8
8N8G8GME OMMBB@B  0B@B@M@7:BMBO  . B@B@   :S@BBO8G8ZOBB @E Ok:Ei. .Bu   vO8GOBL uiv @7: JBO uBOEGZGZ
ZZZGEOMG MOOEGB@  1@OM8O@v,@Mk :BU @B@..O @. @@M8OZOO@  5S :Y@Mv2NOZBBFU5OG88@J BY  B@   uB u@88ZGZG
ON8Z8ZME.OMZGG@B  5BOGOG@7:BZikB@7i@@  B@ @B  UB@MO8BO:rXO0 ;B@B:O@  B@@MG8ZMB. B:: :iiB. @ :BMZ8GGE
GEZ8E8MG OM8ZOB@  1@88ZOBv,@8MMBB :O :O0r  :Z   rSMMM@MPUEG B7 Z :B ;@OOZ8Z8M@  LFB@2FB@B@@  @M8E8E8
O0OZ8GME.OMGO8@M  U@OZ88@7:@OGOM@ ,JqB2:. 7X@BL  ,GB:  rNB7 @M 1BB7,@B@88ZGZBB :@BMMBMM8@B@  BMZ8ZGE
ZZZ8GOMG BBMOMBB  u@OMOMBL,@88GBO :@BMB@r B@MBB@B@OMPkM@B@ :@@MMMF X7i788GZ8MM iBMG8GOGMY7L .@O8G8EG
O08Z8ZM0 ZMGOZMMk1MMOZOG@r,BOZ8MO jBOGM@  @OOGO8O8O8MMBMi  8: ,  :i;,.:qOZ8GMO L@G8Z8ZOOMi  FBOG8GGZ
GZZ8ZOOMi::::::ir7i:::::::JB88GOMBMMZ8O@7i@OZ8G8Z8G88OGMBvN@OGOBB@B@B@BMG8GO8MBBO8ZOG8GOM@Y;BMG8GOE8
OXENENGGBMMMMMBMBMBMMMBMMMMZZ0E0ZG80ENZGBM80ENENE0ZNE0ZEOBB8O8MO8E8E8EG0ZNENZE8EE0ZNENENG8@BMEE0E0EN


更新于  2016年7月9日 19:03:43
by ac
www.tiyan.me
*/

function FindProxyForURL(url, host){
    //【返回无效代理，阻止符合以下规则的域名或IP地址连接。】
    var REJECT = "PROXY example.com:80";
    //【其他域名或IP地址直连。】
    var DIRECT = "DIRECT";
    var hosts = [
//=========域名Start=========
//<tudou> 土豆
"ad.api.3g.tudou.com",
"adcontrol.tudou.com",
"adplay.tudou.com",
"iwstat.tudou.com",
"nstat.tudou.com",
"stat.tudou.com",
"stats.tudou.com",
//<youku> 优酷
"ad.api.3g.youku.com",
"statis.api.3g.youku.com",
"atm.youku.com",
"stat.youku.com",
"actives.youku.com",
"agn.aty.sohu.com",
"mmg.aty.sohu.com",
"c.yes.youku.com",
"lstat.youku.com",
"lvip.youku.com",
"p.l.youku.com",
"r.l.youku.com",
"stat.youku.com",
"hudong.pl.youku.com",
"hFvid.atm.youku.com",
"html.atm.youku.com",
"valb.atm.youku.com",
"valf.atm.youku.com",
"valo.atm.youku.com",
"valp.atm.youku.com",
"speed.lstat.youku.com",
"urchin.lstat.youku.com",
"static.lstat.youku.com",
"valc.atm.youku.com",
"vid.atm.youku.com",
"walp.atm.youku.com",
//<letv> 乐视
"n.mark.letv.com",
"ark.letv.com",
"irs01.com",
//<baofeng> 暴风
"xs.houyi.baofeng.net",
//<hunantv> 湖南
"da.hunantv.com",
"miaozhen.com",
//<qq> QQ
"lives.l.qq.com",
"vqq.admaster.com.cn",
"act.qq.com",
"adsfile.qq.com",
"beacon.qq.com",
"e.qq.com",
"gdt.qq.com",
"l.qq.com",
"monitor.uu.qq.com",
"pgdt.gtimg.cn",
"pingjs.qq.com",
"pingma.qq.com",
"pingtcss.qq.com",
"report.qq.com",
"tajs.qq.com",
"tcss.qq.com",
//<pptv> PPTV
"de.as.pptv.com",
"pp2.pptv.com",
"stat.pptv.com",
"afp.pplive.com",
//<iqiyi> 爱奇艺
"cm.passport.iqiyi.com",
"cupid.iqiyi.com",
"paopao.iqiyi.com",
"ckm.iqiyi.com",
"ad.m.iqiyi.com",
"afp.qiyi.com",
"cupid.iqiyi.com",
"cupid.qiyi.com",
"ifacelog.iqiyi.com",
"rcd.iqiyi.com",
"msg.iqiyi.com",
"minisite.qiyi.com",
"cupid.qiyi.com",
"jsmsg.video.qiyi.com",
//<sina> 新浪
"cm.passport.iqiyi.com",
"ad.sina.com.cn",
"adm.leju.sina.com.cn",
"atm.sina.com",
"beacon.sina.com.cn",
"dcads.sina.com.cn",
"sax.sina.cn",
"sax.sina.com.cn",
"tjs.sjs.sinajs.cn",
//<google> 谷歌
"2mdn.net",
"admob.com",
"doubleclick.com",
"doubleclick.net",
"googleadsserving.cn",
"googleadsserving.cn",
"googlecommerce.com",
"googletagmanager.com",
"ads.google.com",
"afd.l.google.com",
"pagead-tpc.l.google.com",
"pagead.google.com",
"pagead.l.google.com",
"partnerad.l.google.com",
//<baidu> 百度
"adscdn.baidu.com",
"hm.baidu.com",
"eiv.baidu.com",
"pos.baidu.com",
"cpro.baidu.com",
"cpro.baidustatic.com",
"dup.baidustatic.com",
"eclick.baidu.com",
//<taobao> 淘宝
"tanx.com",
"alimama.com",
//<360> 360
"lianmeng.360.cn",
"3600.com",
"dev.tg.wan.360.cn",
"f.360.cn",
"kuaikan.netmon.360safe.com",
"leak.360.cn",
"openbox.mobilem.360.cn",
"pub.se.360.cn",
"soft.data.weather.360.cn",
"stat.360safe.com",
"stat.m.360.cn",
"update.360safe.com",
//<163> 163
"tanx.com",
"adgeo.163.com",
"bobo.163.com",
"fa.163.com",
"g.163.com",
"gb.corp.163.com",
"oadz.com",
"oimagea2.ydstatic.com",
"pagechoice.net",
"prom.gome.com.cn",
"rlogs.youdao.com",
"static.flv.uuzuonline.com",
"wanproxy.127.net",
"ws.126.net",
//<feng> 威锋
"yes1.feng.com",
"trk8.cn",
"yes1.feng.com",
"yes1.feng.com",
"yes1.feng.com",
"yes1.feng.com",
"yes1.feng.com",
//<others> 其他
"w.inmobi.com",
"w.inmobicdn.net",
"l.inmobicdn.net",
"sm.domobcdn.com",
"keydot.net",
"mengmob.com",
"zzzkxx.com",
"miaozhen.com",
"adsage.com",
"cocounion.com",
"admaster.com.cn",
"ipinyou.com",
"admin5.com",
"csbew.com",
"jusha.com",
"vsoon.com",
"soquair.com",
"guohead.com",
"live.chartboost.com",
"appodeal.com",
"fastapi.net",
"adsmogo.com",
"adsmogo.org",
"adsmogo.net",
"adsmogo.mobi",
"adlive.cn",
"sstc360.com",
"ad-brix.com",
"leadboltads.net",
"joyingmobi.com"
//=========域名End=========
//【在分界线上面可以追加域名，两边加上双引号，使用逗号分隔。】
    ]
    var ips = [
//=========IP地址Start=========
//<iqiyi>
"101.227.14.80",
"101.227.14.81",
"101.227.14.82",
"101.227.14.83",
"101.227.14.84",
"101.227.14.85",
"101.227.14.86"
//=========IP地址End=========
    ]
//【在分界线上面可以追加IP地址，两边加上双引号，使用逗号分隔。】
    for (n in hosts){
        if(dnsDomainIs(host, hosts[n])){
            return REJECT;
        }
    }
    for (n in ips){
        if(isInNet(host, ips[n], "225.225.225.225")){
            return REJECT;
        }
    }
    return DIRECT;
}
