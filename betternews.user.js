// ==UserScript==
// @name            Better News
// @namespace	    https://github.com/parkq/BetterNews.user.js
// @description	    Read Korean news websites without disgusting ads
// @include			*
// ==/UserScript==

var x = [
"http://news.fnnews.com/view_news/",
"http://cast.wowtv.co.kr/",
"http://www.nocutnews.co.kr/show.asp",
"http://mbn.mk.co.kr/pages/news/",
"http://nnews.mk.co.kr/newsRead.php",
"http://news.kukinews.com/article/view.asp",
"http://news.chosun.com/site/data/html_dir/",
"http://view.heraldm.com/view.php",
"http://www.etnews.com/news/",
"http://www.segye.com/articles/",
"http://www.naeil.com/news/",
"http://news.sbs.co.kr/section_news/news_read.jsp",
"http://news.khan.co.kr/kh_news/khan_art_view.html",
"http://koreajoongangdaily.joinsmsn.com/news/article/article.aspx",
"http://www.mediatoday.co.kr/news/articleView.html",
"http://world.kbs.co.kr/english/news/news_Po_detail.htm",
"http://www.seoul.co.kr/news/",
"http://joongang.joinsmsn.com/article/",
"http://imnews.imbc.com/replay/nwdesk/article/",
"http://www.edaily.co.kr/news/newspath.asp",
"http://www.dailian.co.kr/news/news_view.htm",
"http://www.ytn.co.kr/_ln/",
"http://www.dt.co.kr/contents.html",
"http://osen.mt.co.kr/article/",
"http://sports.chosun.com/news/",
"http://www.sportalkorea.com/news/view.php",
"http://sports.donga.com/3/all/",
"http://news.sportsseoul.com/read/",
"http://isplus.joinsmsn.com/article/",
"http://view.asiae.co.kr/news/",
"http://www.ohmynews.com/nws_web/view/at_pg.aspx",
"http://www.munhwa.com/news/view.html",
"hankooki.com/lpage/",
"http://www.hani.co.kr/arti/",
"http://cnews.mt.co.kr/mtview.php",
"http://www.dailian.co.kr/news/news_view.htm",
"http://www.newdaily.co.kr/news/article.html",
"http://news.donga.com/",
"http://view.koreaherald.com/kh/view.php",
"http://www.pressian.com/article/article.asp"
];

function isThisNews(url) {
	for (l in x) 
		if (url.toLowerCase().indexOf(x[l]) > -1)
			return true;
}

if (top === self) {

	var url = document.URL;
	var links = document.links;

	if (isThisNews(url))
		window.location = "http://www.instapaper.com/text?u=" + encodeURIComponent(url);
	else 
		for (i in links)
			if (isThisNews(links[i].href))
				links[i].href = "http://www.instapaper.com/text?u=" + encodeURIComponent(links[i].href);
};