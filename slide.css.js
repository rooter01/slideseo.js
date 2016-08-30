//<![CDATA[
//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("http://fonts.googleapis.com/css?family=Montserrat:400,700");loadCSS("http://fonts.googleapis.com/css?family=Lato:300,400,700,900");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css");loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");loadCSS("'//fonts.googleapis.com/css?family=Muli:300,300italic,regular,italic&amp;subsets=latin&amp;subset=latin,latin-ext");loadCSS("http://fonts.googleapis.com/css?family=Oxygen");loadCSS("http://fonts.googleapis.com/css?family=Redressed");
// Total Posts
function getposts(json){var totalposts=json.feed.openSearch$totalResults.$t;document.write('<div class="totalposts"><span class="totalnumber">'+totalposts+'</span><span class="totallabel">Artikel yang di Publish</span></div>');}
//]]>