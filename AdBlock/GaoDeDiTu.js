// ==UserScript==
// @ScriptName        高德地图☆净化
// @UpdateTime        2023-02-08
// @Suitable          自行观看“# > ”注释内容
// @Attention         使用前请卸载高德地图，挂载脚本然后使用
// @Version           V1.0.19
// @ScriptURL         https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Amap.conf
// ==/UserScript==


hostname=*.amap.com

# > 高德地图_请自行添加本地分流
;host, amdc.m.taobao.com, reject


# > 高德地图_底部tab栏角标
^https?:\/\/.*\.amap\.com\/ws\/message\/notice\/list url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_路线规划下方广告
^https?:\/\/.*\.amap\.com\/ws\/faas\/amap-navigation\/card-service-route-plan\? url reject-dict
# > 高德地图_首页右中广告
^https?:\/\/.*\.amap\.com\/ws\/shield\/frogserver\/aocs\/updatable url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_附近页面
^https?:\/\/.*\.amap\.com\/ws\/shield\/search\/nearbyrec_smart url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_打车页面处理
^https?:\/\/.*\.amap\.com\/ws\/promotion-web\/resource url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_Tip请求
^https?:\/\/.*\.amap\.com\/ws\/boss\/order_web\/\w{8}_information url reject-200
# > 高德地图_首页底部处理
^https?:\/\/.*\.amap\.com\/ws\/faas\/amap-navigation\/main-page url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_通用广告请求
^https?:\/\/.*\.amap\.com\/ws\/asa\/ads_attribution url reject
# > 高德地图_开屏广告
^https?:\/\/.*\.amap\.com\/ws\/valueadded\/alimama\/splash_screen url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_首页顶部推广
^https?:\/\/.*\.amap\.com\/ws\/msgbox\/pull url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_我的页面
^https?:\/\/.*\.amap\.com\/ws\/shield\/dsp\/profile\/index\/nodefaas url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_搜索框热词
^https?:\/\/.*\.amap\.com\/ws\/shield\/search\/new_hotword url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amap.js
# > 高德地图_搜索框scene
^https?:\/\/.*\.amap\.com\/ws\/shield\/scene\/recommend url reject-dict
# > 高德地图_首页左上角gif
^https?:\/\/.*\.amap\.com\/uploadimg\/\w+\.gif url reject-img
# > 高德地图_首页右中'2022出行报告'[已从根本上解决]
;^https?:\/\/img\.alicdn\.com\/imgextra\/i1\/O1CN01z5u64r1EdKvtRa19q_!!6000000000374-2-tps-120-120\.png
# > 高德地图_左下天气
^https?:\/\/.*\.amap\.com\/ws\/valueadded\/weather url reject-dict
