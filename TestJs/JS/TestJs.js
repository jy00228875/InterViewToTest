﻿var pageIndex = 0;
var res = [{ "img": "IMG/image1.png", "title": "A body on the beach", "author": "Mountain Observanse", "secTit": "Untied Nations", "date": "2015-02-28 10:54:00", "cot": "In cumulus convection ascent rates of several metres a second give a cooling rate of a few degrees per minute.Their clearest chance came on55 minutes as Jeffers met a right-wing corner from close-range, only to see his effort turned brilliantly over the bar by Kuszczak. ", "chatCount": "10" },
{ "img": "IMG/image2.png", "title": "what do people do?", "author": "Mutafire", "secTit": "", "date": "2015-02-27 09:00:11", "cot": "The clock points to ten minutes past midnight.As the global crude price rose after seven-month plunge, Chinese authority announced on Friday that the retail gasoline price will be raised by 390 yuan ($62.45) a metric ton.", "chatCount": "4" },
{ "img": "IMG/image2.png", "title": "China's latest Internet buzzword", "author": "Colin Speakman", "secTit": "", "date": "2015-02-27 09:00:11", "cot": "Per capita urban disposable income in Shanghai, China's financial hub, hit $7,611 last year, eclipsing Beijing to secure the first place nationwide.Per capita urban disposable income in Shanghai, China's financial hub, hit $7,611 last year, eclipsing Beijing to secure the first place nationwide.", "chatCount": "82" },
{ "img": "IMG/image1.png", "title": "Actress Yu Yue poses", "author": "Miss Barbara", "secTit": "Untied Nations", "date": "2015-02-28 12:00:11", "cot": "China licensed FDD-LTE networks, the 4G mobile standard network preferred by China Telecom and China Unicom, in a move that is expected to help the two telcos boost their 4G business.", "chatCount": "12" },
{ "img": "IMG/image1.png", "title": "On reunions", "author": "lilidan", "secTit": "Untied Nations", "date": "2015-02-28 08:00:11", "cot": "The Chinese dream of one day winning soccer's World Cup moved a step closer with a plan being passed during a meeting of the country's leading group for drafting overall reform.", "chatCount": "0" },
{ "img": "IMG/image2.png", "title": "Travel/Food", "author": "lichking", "secTit": "Untied Nations", "date": "2015-02-28 11:00:11", "cot": "Lizard Squad, a hacking group that had previously targeted Sony Corp's online videogame network, was possibly behind the cyber attack on lenovo.com.Lizard Squad, a hacking group that had previously targeted Sony Corp's online videogame network, was possibly behind the cyber attack on lenovo.com.", "chatCount": "8" }];
$(function () {
    $("#pre").click(function () {
        if (pageIndex <= 0) {
            alert("已经是第一页");
            return;
        }
        else {
            pageIndex--;
            $(".pageIndex[data-index=" + pageIndex + "]").click();
        }
    });
    $("#next").click(function () {
        if (pageIndex >= 2) {
            alert("已经是最后一页了");
            return;
        }
        else {
            pageIndex++;
            $(".pageIndex[data-index=" + pageIndex + "]").click();
        }
    });

    $(".pageIndex").click(function () {
        $(".pageIndex").css({ "background-color": "white", "color": "#4aa3cb" });
        $(this).css({ "background-color": "#4aa3cb", "color": "white" });
        var index = $(this).attr("data-index");
        pageIndex = index;

        setCotToEven("#content2 .cotDiv");
        setCotToSigle("#content1 .cotDiv");
    });


    $(".pageIndex[data-index=" + pageIndex + "]").click();

    //var fileref = document.createElement('link');
    //fileref.setAttribute("rel", "stylesheet");
    //fileref.setAttribute("type", "text/css");
    //fileref.setAttribute("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
    //document.getElementsByTagName("head")[0].appendChild(fileref);
});
//设定选取页数时,加载指定文章到偶数页面
function setCotToEven(tar) {
    $(tar).find(".title").text(res[pageIndex * 2 + 1].title);
    $(tar).find(".author").text(" by " + res[pageIndex * 2 + 1].author);
    if (res[pageIndex * 2 + 1].secTit == "")
        $(tar).find(".secTit").hide();
    else {
        $(tar).find(".secTit").show();
        $(tar).find(".secTit").text(res[pageIndex * 2 + 1].secTit);
    }
    $(tar).find(".date").text(SumTimeDig(res[pageIndex * 2 + 1].date));

    $(tar).find(".cot").text(res[pageIndex * 2 + 1].cot);
    $(tar).find(".chatCount").text(res[pageIndex * 2 + 1].chatCount);

    $("#content2 .imageDiv img").attr("src", res[pageIndex * 2 + 1].img);

    setCountRight("#content2 .cotDiv .title", 25);
    setCountRight("#content2 .cotDiv .cot", 250);
}
//设定选取页数时,加载指定文章到单数页面
function setCotToSigle(tar) {
    $(tar).find(".title").text(res[pageIndex * 2].title);

    $(tar).find(".author").text(" by " + res[pageIndex * 2].author);
    if (res[pageIndex * 2].secTit == "")
        $(tar).find(".secTit").hide();
    else {
        $(tar).find(".secTit").show();
        $(tar).find(".secTit").text(res[pageIndex * 2].secTit);
    }

    $(tar).find(".date").text(SumTimeDig(res[pageIndex * 2].date));

    $(tar).find(".cot").text(res[pageIndex * 2].cot);
    $(tar).find(".chatCount").text(res[pageIndex * 2].chatCount);

    $("#content1 .imageDiv img").attr("src", res[pageIndex * 2].img);

    setCountRight("#content1 .cotDiv .title", 25);
    setCountRight("#content1 .cotDiv .cot", 250);
}
//设定文章标题超过指定数就用...代替省略
function setCountRight(tar, num) {
    var tit = $(tar);
    var tarTit = tit.text().substr(0, num).trim();
    if (tit.text().length > num)
        tarTit += "...";
    tit.text(tarTit);
}

function SumTimeDig(date){
    var now = new Date();
    var tar = InitDate(date);
    var dig = now.getTime() - tar.getTime();
    var str = "";
    dig = dig / 1000;
    if (dig < 60) {
        str = parseInt(dig) + " seconds ago - ";
    }
    else if (dig / 60 < 60) {
        dig = dig / 60;
        str = parseInt(dig) + " minutes ago - ";
    }
    else if (dig / 60 / 60 < 24) {
        dig = dig / 60 / 60;
        str = parseInt(dig) + " hours ago - ";
    }
    else {
        dig = dig / 60 / 60 / 24;
        str = parseInt(dig) + " days ago - ";
    }
    return str;
}


function InitDate(dateStr) {
    var dateArr = dateStr.split(" ");
    var date = dateArr[0].split("-");
    var time = dateArr[1].split(":");
    var year = date[0];
    var month = date[1];
    var day = date[2];

    var hour = time[0];
    var minute = time[1];
    var second = time[2];

    return new Date(year, month-1, day, hour, minute, second);
}