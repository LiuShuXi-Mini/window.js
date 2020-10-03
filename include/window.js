var __window = {};
__window.nowHWN = 0;
__window.eleid = {}
__window.nowp = {}
__window.nowp.x = 0
__window.nowp.y = 0
__window.usetaskboard = false
donnotselect(document.getElementById("__os_windows"))
function createWindow(html,title,w,h,x,y){
    var ret = {}
    //调整默认大小防止挡住
    __window.nowp.x = __window.nowp.x + 3
    __window.nowp.y = __window.nowp.y + 3
    if (__window.nowp.x > 20){
        __window.nowp.x = 1
        __window.nowp.y = 1
    }
    if (x == 0){
        x = __window.nowp.x
    }
    if (y == 0){
        y = __window.nowp.y
    }
    while (document.getElementById("__os_window_" + __window.nowHWN) != null){
        __window.nowHWN = __window.nowHWN + 1
        //重复句柄处理
    }
    var a = writewindowarea('<div id="' + "__os_window_" + __window.nowHWN  + '" class="window"></div>');
    if (a == 1){
        console.log("Error: Can not create window.Area not found.Try write a div that id is '__os_windows'(createWindow)")
        return 1
    }
    __window.eleid[__window.nowHWN] = "__os_window_" + __window.nowHWN;
    ret.eleid = "__os_window_" + __window.nowHWN;
    ret.hwn = __window.nowHWN;
    ret.write = function(data){
        document.getElementById(this.eleid).innerHTML = document.getElementById(this.eleid).innerHTML + data
    }
    ret.write('<div class="upboard" id="__upboard_' + __window.nowHWN  + '" ismove="false" movepx="0" movepy="0"></div>')
    ret.upboardid = '__upboard_' + __window.nowHWN
    ret.changeTitle = function(text){
        document.getElementById(this.upboardid).innerHTML = '<div id="__window_close_group"><a onclick=\'' + 'document.getElementById("__os_windows").removeChild(document.getElementById("' + ret.eleid + '"))' + ';document.getElementById("__os__taskboard").removeChild(document.getElementById("__program__' + ret.hwn + '"));' +'\'>×</a><a onclick=\'' + 'if (document.getElementById("' + ret.eleid + '").getAttribute("isbiggset") == "true"){' + 'document.getElementById("' + ret.eleid + '").style.left = document.getElementById("' + ret.eleid + '").getAttribute("lx") + "px";' + 'document.getElementById("' + ret.eleid + '").style.top = document.getElementById("' + ret.eleid + '").getAttribute("ly") + "px";' + 'document.getElementById("' + ret.eleid + '").style.width = document.getElementById("' + ret.eleid + '").getAttribute("la") + "px";' + 'document.getElementById("' + ret.eleid + '").style.height = document.getElementById("' + ret.eleid + '").getAttribute("lh") + "px";' + 'document.getElementById("' + ret.eleid + '").setAttribute("isbiggset","false");' + '}' + 'else{document.getElementById("' + ret.eleid + '").setAttribute("lx",document.getElementById("' + ret.eleid + '").offsetLeft);' + 'document.getElementById("' + ret.eleid + '").setAttribute("ly",document.getElementById("' + ret.eleid + '").offsetTop);' + 'document.getElementById("' + ret.eleid + '").setAttribute("la",document.getElementById("' + ret.eleid + '").offsetWidth);' + 'document.getElementById("' + ret.eleid + '").setAttribute("lh",document.getElementById("' + ret.eleid + '").offsetHeight);' + 'document.getElementById("' + ret.eleid + '").setAttribute("isbiggset","true");' + 'document.getElementById("' + ret.eleid + '").style.left = "0px";' + 'document.getElementById("' + ret.eleid + '").style.top = "0px";' + 'document.getElementById("' + ret.eleid + '").style.width = "100%";' + 'document.getElementById("' + ret.eleid + '").style.height = "100%";' + '}' +'\'>□</a><a onclick=\'' + 'document.getElementById("' + ret.eleid + '").style.display = "none"' +'\'>-</a></div>' + text;
    }
    ret.changeTitle(title)
    ret.write(html)
    ret.write("<div class='left' id='left_" + ret.hwn +"'></div>")
    ret.write("<div class='right' id='right_" + ret.hwn +"'></div>")
    ret.write("<div class='bottom' id='bottom_" + ret.hwn +"'></div>")
    ret.write("<div class='right-bottom' id='right_bottom_" + ret.hwn +"'></div>")
    ret.write("<div class='left-bottom' id='left_bottom_" + ret.hwn +"'></div>")
    ret.hide = function(){
        document.getElementById(this.eleid).style.display = "none"
    }
    ret.show = function(){
        document.getElementById(this.eleid).style.display = "block"
        document.getElementById(this.eleid).onclick()
    }
    ret.biggest = function(){
        document.getElementById(this.eleid).setAttribute("lx",document.getElementById(this.eleid).offsetLeft);
        document.getElementById(this.eleid).setAttribute("ly",document.getElementById(this.eleid).offsetTop);
        document.getElementById(this.eleid).setAttribute("la",document.getElementById(this.eleid).offsetWidth);
        document.getElementById(this.eleid).setAttribute("lh",document.getElementById(this.eleid).offsetHeight);
        document.getElementById(this.eleid).setAttribute("isbiggset","true");
        document.getElementById(this.eleid).style.left = "0px";
        document.getElementById(this.eleid).style.top = "0px";
        document.getElementById(this.eleid).style.width = "100%";
        document.getElementById(this.eleid).style.height = "100%";
    }
    ret.middle = function(){
        document.getElementById(this.eleid).style.left = document.getElementById(this.eleid).getAttribute("lx") + "px";
        document.getElementById(this.eleid).style.top = document.getElementById(this.eleid).getAttribute("ly") + "px";
        document.getElementById(this.eleid).style.width = document.getElementById(this.eleid).getAttribute("la") + "px";
        document.getElementById(this.eleid).style.height = document.getElementById(this.eleid).getAttribute("lh") + "px";
        document.getElementById(this.eleid).setAttribute("isbiggset","false");
    }
    ret.bigormid = function(){
        if (document.getElementById(this.eleid).getAttribute("isbiggset") == "true"){
            document.getElementById(this.eleid).style.left = document.getElementById(this.eleid).getAttribute("lx") + "px";
            document.getElementById(this.eleid).style.top = document.getElementById(this.eleid).getAttribute("ly") + "px";
            document.getElementById(this.eleid).style.width = document.getElementById(this.eleid).getAttribute("la") + "px";
            document.getElementById(this.eleid).style.height = document.getElementById(this.eleid).getAttribute("lh") + "px";
            document.getElementById(this.eleid).setAttribute("isbiggset","false");
        }
        else{
            document.getElementById(this.eleid).setAttribute("lx",document.getElementById(this.eleid).offsetLeft);
            document.getElementById(this.eleid).setAttribute("ly",document.getElementById(this.eleid).offsetTop);
            document.getElementById(this.eleid).setAttribute("la",document.getElementById(this.eleid).offsetWidth);
            document.getElementById(this.eleid).setAttribute("lh",document.getElementById(this.eleid).offsetHeight);
            document.getElementById(this.eleid).setAttribute("isbiggset","true");
            document.getElementById(this.eleid).style.left = "0px";
            document.getElementById(this.eleid).style.top = "0px";
            document.getElementById(this.eleid).style.width = "100%";
            document.getElementById(this.eleid).style.height = "100%";
        }
    }
    ret.delete = function(){
        document.getElementById("__os_windows").removeChild(document.getElementById(this.eleid))
        document.getElementById("__os__taskboard").removeChild(document.getElementById("__program__" + this.hwn))
    }
    ret.smallest = function(){
        document.getElementById(this.eleid).style.display = "none"
        //隐藏窗口

    }
    if (__window.usetaskboard == true){
        document.getElementById("__os__taskboard").innerHTML = document.getElementById("__os__taskboard").innerHTML + '<a class="task-button" id="__program__' + ret.hwn + '" onclick = \'' + 'if(document.getElementById("' + ret.eleid + '").style.display == "none"){document.getElementById("' + ret.eleid + '").style.display = "block";}else{if(document.getElementById("' + ret.eleid + '").getAttribute("ischange") == "true"){document.getElementById("' + ret.eleid + '").style.display = "none";}}'+ 'document.getElementById("' + ret.eleid + '").onclick();' + '\'>' + title +'</a>'
        console.log(title)
    }
    __window.nowHWN = __window.nowHWN + 1;
    document.getElementById(ret.eleid).style.left = x + "px"
    document.getElementById(ret.eleid).style.top = y + "px"
    if (w != 0){
        document.getElementById(ret.eleid).style.width = w + "px"
    }
    if (h != 0){
        document.getElementById(ret.eleid).style.height = h + "px"
    }
    addmoves()
    document.getElementById(ret.eleid).onclick()
    return ret
}
function newdownmsg(html){
    document.getElementById("msggroup").innerHTML = document.getElementById("msggroup").innerHTML + "<div class='msgcard'><a onclick='this.parentNode.parentNode.removeChild(this.parentNode);' class='task-button'>×</a><br>" + html + "</div>"
}
function orcstartmenu(){
    if(__window.usetaskboard == false){
        console.log("on orcstartmenu(),startmenu is not found.Please try __start()")
        return false
    }
    var startmenu = document.getElementById("__os__startmenu")
    if (startmenu.style.display == "none"){
        startmenu.style.display = "block"
    }
    else{
        startmenu.style.display = "none"
    }
}
function __start(){
    if (document.getElementById("__os__startmenu") == null){
        console.log("Error: 没有找到开始菜单！请创建id为'__os__startmenu'的div!")
        return 1
    }
    if (document.getElementById("__os__taskboard") == null){
        console.log("Warming: 没有找到任务栏！将自动创建id为'__os__taskboard'的div!")
        document.body.innerHTML = document.body.innerHTML + '<div id="__os__taskboard"></div>'
    }
    var html = document.getElementById("__os__startmenu").innerHTML
    document.body.removeChild(document.getElementById("__os__startmenu"))
    document.getElementById("__os__taskboard").innerHTML = '<a id="__os__startbutton" onclick="orcstartmenu()">开始</a>' + document.getElementById("__os__taskboard").innerHTML + "<div id='__os__startmenu'>" + html +"</div>"
    document.getElementById("__os__startmenu").style.bottom = document.getElementById("__os__taskboard").offsetHeight
    document.getElementById("__os__startmenu").style.bottom = document.getElementById("__os__taskboard").offsetHeight

    __window.usetaskboard = true
}
function writewindowarea(html){
    if (document.getElementById("__os_windows") == null){
        return 1;
    }
    if (document.getElementById("__move__bac") == null){
        document.getElementById("__os_windows").innerHTML = document.getElementById("__os_windows").innerHTML + "<div id='__move__bac'></div>";
    }
    document.getElementById("__os_windows").innerHTML = document.getElementById("__os_windows").innerHTML + html;
    return 0;
}
function donnotselect(element){
    if (typeof(element.onselectstart) != "undefined") {
        // IE下禁止元素被选取
        element.onselectstart = new Function("return false");
    } else {
        // firefox下禁止元素被选取的变通办法
        element.onmousedown = new Function("return false");
        element.onmouseup = new Function("return true");
    } 
}
function addmoves(){
    var a = 0
    document.getElementById("__move__bac").onmouseup = function(){
        document.body.onmouseup()
    }
    for (a in __window.eleid){
        var ele = document.getElementById(__window.eleid[a])
        if (ele != null){
            ele.onclick = function(){
                var a = 0
                for (a in __window.eleid){
                    if (document.getElementById(__window.eleid[a]) != null){
                        document.getElementById(__window.eleid[a]).style.zIndex = "3"
                        document.getElementById(__window.eleid[a]).setAttribute("ischange","false")
                    }
                }
                this.style.zIndex = "4"
                this.setAttribute("ischange","true")
                return false
            }
            //定位到标题栏并且加入移动
            ele = document.getElementById("__upboard_" + a)
            if (ele != null){
                ele.onmousedown = function(e){
                    this.parentNode.onclick()
                    this.setAttribute("ismove","true");
                    this.setAttribute("movepx",e.pageX);
                    this.setAttribute("movepy",e.pageY);
                    return false
                }
                ele.onmousemove = function(e){
                    if (this.getAttribute("ismove") == "true"){
                        document.getElementById("__move__bac").style.display = "block"
                        if (this.parentNode.getAttribute("isbiggset") == "true"){                        this.parentNode.style.left = this.parentNode.getAttribute("lx") + "px";
                            this.parentNode.style.top = this.parentNode.getAttribute("ly") + "px";
                            this.parentNode.style.width = this.parentNode.getAttribute("la") + "px";
                            this.parentNode.style.height = this.parentNode.getAttribute("lh") + "px";
                            this.parentNode.setAttribute("isbiggset","false");
                        }
                        this.parentNode.style.left = ele.parentNode.offsetLeft + e.pageX - ele.getAttribute("movepx") + "px";
                        this.parentNode.style.top = ele.parentNode.offsetTop + e.pageY - ele.getAttribute("movepy") + "px";
                        this.setAttribute("movepx",e.pageX)
                        this.setAttribute("movepy",e.pageY)
                    }
                    return false
                }
                ele.onmouseup = function(e){
                    this.setAttribute("ismove","false")
                    document.getElementById("__move__bac").style.display = "none"
                    return false
                }
            }
            //切换大小
            document.getElementById("right_" + a).onmousedown = function(){
                this.setAttribute("ischa","true")
                this.parentNode.onclick()
                console.log(this.getAttribute("ischa"))
            }
            document.getElementById("right_" + a).onmousemove = function(e){
                if (this.getAttribute("ischa") == "true"){
                    document.getElementById("__move__bac").style.display = "block"
                    this.parentNode.style.width = e.pageX - this.parentNode.offsetLeft + "px";
                    //this.parentNode.style.height = e.pageY - this.parentNode.offsetTop + "px";
                }
            }
            document.getElementById("right_" + a).onmouseup = function(){
                this.setAttribute("ischa","false")
                document.getElementById("__move__bac").style.display = "none"
                console.log(this.getAttribute("ischa"))
            }
            document.getElementById("bottom_" + a).onmousedown = function(){
                this.setAttribute("ischa","true")
                this.parentNode.onclick()
            }
            document.getElementById("bottom_" + a).onmousemove = function(e){
                if (this.getAttribute("ischa") == "true"){
                    document.getElementById("__move__bac").style.display = "block"
                    //this.parentNode.style.width = e.pageX - this.parentNode.offsetLeft + "px";
                    this.parentNode.style.height = e.pageY - this.parentNode.offsetTop + "px";
                }
            }
            document.getElementById("bottom_" + a).onmouseup = function(){
                this.setAttribute("ischa","false")
                document.getElementById("__move__bac").style.display = "none"
            }
            document.getElementById("left_" + a).onmousedown = function(){
                this.setAttribute("ischa","true")
                this.setAttribute("chx",this.parentNode.offsetLeft + this.parentNode.offsetWidth)
                this.parentNode.onclick()
            }
            document.getElementById("left_" + a).onmousemove = function(e){
                if (this.getAttribute("ischa") == "true"){
                    document.getElementById("__move__bac").style.display = "block"
                    var r = parseInt(this.getAttribute("chx"));
                    this.parentNode.style.left = e.pageX + "px"
                    this.parentNode.style.width = r - e.pageX  +"px"
                }
            }
            document.getElementById("left_" + a).onmouseup = function(){
                this.setAttribute("ischa","false")
                document.getElementById("__move__bac").style.display = "none"
            }
            document.getElementById("right_bottom_" + a).onmousedown = function(){
                this.setAttribute("ischa","true")
                this.parentNode.onclick()
                console.log(this.getAttribute("ischa"))
            }
            document.getElementById("right_bottom_" + a).onmousemove = function(e){
                if (this.getAttribute("ischa") == "true"){
                    document.getElementById("__move__bac").style.display = "block"
                    this.parentNode.style.width = e.pageX - this.parentNode.offsetLeft + "px";
                    this.parentNode.style.height = e.pageY - this.parentNode.offsetTop + "px";
                }
            }
            document.getElementById("right_bottom_" + a).onmouseup = function(){
                this.setAttribute("ischa","false")
                document.getElementById("__move__bac").style.display = "none"
                console.log(this.getAttribute("ischa"))
            }
            document.getElementById("left_bottom_" + a).onmousedown = function(){
                this.setAttribute("ischa","true")
                this.setAttribute("chx",this.parentNode.offsetLeft + this.parentNode.offsetWidth)
                this.parentNode.onclick()
            }
            document.getElementById("left_bottom_" + a).onmousemove = function(e){
                if (this.getAttribute("ischa") == "true"){
                    document.getElementById("__move__bac").style.display = "block"
                    var r = parseInt(this.getAttribute("chx"));
                    this.parentNode.style.left = e.pageX + "px"
                    this.parentNode.style.width = r - e.pageX  +"px"
                    this.parentNode.style.height = e.pageY - this.parentNode.offsetTop + "px";
                }
            }
            document.getElementById("left_bottom_" + a).onmouseup = function(){
                this.setAttribute("ischa","false")
                document.getElementById("__move__bac").style.display = "none"
            }
        }
    }
}
document.body.onmousemove = function(e){
    var a = 0
    for (a in __window.eleid){
        var ele = document.getElementById(__window.eleid[a])
        if (ele != null){
            document.getElementById("__upboard_" + a).onmousemove(e)
            document.getElementById("right_" + a).onmousemove(e)
            document.getElementById("bottom_" + a).onmousemove(e)
            document.getElementById("left_" + a).onmousemove(e)
            document.getElementById("right_bottom_" + a).onmousemove(e)
            document.getElementById("left_bottom_" + a).onmousemove(e)
        }
    }
}
document.body.onmouseup = function(e){
    var a = 0
    for (a in __window.eleid){
        var ele = document.getElementById(__window.eleid[a])
        if (ele != null){
            document.getElementById("__upboard_" + a).onmouseup(e)
            document.getElementById("right_" + a).onmouseup(e)
            document.getElementById("bottom_" + a).onmouseup(e)
            document.getElementById("left_" + a).onmouseup(e)
            document.getElementById("right_bottom_" + a).onmouseup(e)
            document.getElementById("left_bottom_" + a).onmouseup(e)
        }
    }
    document.getElementById("__move__bac").style.display = "none"
}
function webkit(url,title,w,h,x,y){
    if(w == 0){
        w = 700
    }
    if (h == 0){
        h = 400
    }
    var ret = createWindow('<iframe class="full-window" src="' + url + '" frameborder="0"></iframe>',title,w,h,x,y)
    return ret
}
//OS
