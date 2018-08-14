/**
 * CopyRight Samphay
 * 2015/11/11
 */
"use strict";
function Calendar(){
    this.is_leap = function(year){
        var years = year || new Date().getFullYear();
        return years % 4 ? false : true;
    };
    this.isWeekend = function(date){
        return (
            new Date(date).getDay() == 0 ||
            new Date(date).getDay() == 6
        );
    };
    this.isToday = function(date){
        if(date){
            return this.now('yyyy-MM-dd') == new Date(date).Format('yyyy-MM-dd');
        }else{
            return false;
        }
    };
    this.isFuture = function(date){
        if(date){
            return this.now('yyyy-MM-dd') < new Date(date).Format('yyyy-MM-dd');
        }else{
            return false;
        }
    };
    this.perdays = function(year){
        return [31,this.is_leap(year)?29:28,31,30,31,30,31,31,30,31,30,31]
    };
    this.week_zh = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    this.week_en = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.month_zh = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    this.month_en = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    this.now = function(format){
        format = format || "yyyy-MM-dd hh:mm:ss";
        return new Date().Format(format);
    };
    this.weekth = function(date){
        return Math.round(this.dayth(date) / 7)+1;
    };
    this.dayth = function(date){
        date = date || this.now();
        var thisDate = new Date(date);
        var days = 0;
        for(var i = 0; i< thisDate.getMonth(); i++){
            days += this.perdays(thisDate.getFullYear())[i];
        }
        days += thisDate.getDate();
        return days;
    };
    this.calendarDay = function(date){
        date = date || this.now();
        //console.log(date);
        var This = this;
        var thisDate = new Date(date);
        var thisYear = thisDate.getFullYear();
        var M = thisDate.getMonth();
        var thisMonthZh = This.month_zh[M];
        var thisMonthEn = This.month_en[M];
        var prevMonthZh = This.month_zh[M-1];
        var prevMonthEn = This.month_en[M-1];
        var firstDay = function(){
            var _date_ = thisDate.Format("yyyy-MM-")+"01";
            return new Date(_date_).getDay();
        };
        var lastDay = function(){
            var _date_ = thisDate.Format("yyyy-MM-")+This.perdays(thisYear)[M];
            return 6 - new Date(_date_).getDay();
        };
        //alert("firstDay:"+firstDay());
        //alert("lastDay:"+lastDay());
        var MDays = this.perdays(thisYear)[M];
        function days(M,D){
            var beforeDayArray = [];
            if(D>0){
                //alert(D);
                for(var i = 0;i<D;i++){
                    var perM = (M - 1)<0?31:This.perdays(thisYear)[M - 1];
                    //alert(perM)
                    //beforeDayArray.push(perM - i);
                    var fullDate = ((M - 1)<0?(thisYear-1):thisYear)+"-"+((M - 1)<0?12:(M<10?"0"+M:M))+"-"+(perM - i);
                    beforeDayArray.push({
                        fullDate : fullDate,
                        year : (M - 1)<0?(thisYear-1):thisYear,
                        month : ((M - 1)<0?12:(M<10?"0"+M:M)),
                        month_zh : This.month_zh[(M - 1)<0?11:(M-1)],
                        month_en : This.month_en[(M - 1)<0?11:(M-1)],
                        day : perM - i,
                        week : new Date(fullDate).Format("周W"),
                        week_zh : This.week_zh[new Date(fullDate).getDay()],
                        week_en : This.week_en[new Date(fullDate).getDay()],
                        is_weekend : This.isWeekend(fullDate),
                        weekth : This.weekth(fullDate),
                        dayth : This.dayth(fullDate),
                        is_today : This.isToday(fullDate),
                        is_future : This.isFuture(fullDate),
                        is_not_thisMonth : true
                    });
                }
            }
            //alert(JSON.stringify(beforeDayArray,null,4));
            beforeDayArray.reverse();
            //alert(JSON.stringify(beforeDayArray,null,4));
            for(var i = 1; i<=MDays; i++){
                fullDate = thisYear+"-"+((M+1)<10?"0"+(M+1):(M+1))+"-"+(i<10?("0"+i):i);
                //beforeDayArray.push(i);
                beforeDayArray.push({
                    fullDate : fullDate,
                    year : thisYear,
                    month : ((M+1)<10?"0"+(M+1):(M+1)),
                    month_zh : This.month_zh[M],
                    month_en : This.month_en[M],
                    day : (i<10?("0"+i):i),
                    week : new Date(fullDate).Format("周W"),
                    week_zh : This.week_zh[new Date(fullDate).getDay()],
                    week_en : This.week_en[new Date(fullDate).getDay()],
                    is_weekend : This.isWeekend(fullDate),
                    weekth : This.weekth(fullDate),
                    dayth : This.dayth(fullDate),
                    is_today : This.isToday(fullDate),
                    is_future : This.isFuture(fullDate),
                    is_not_thisMonth : false
                });
            }
            for(var i = 1; i<=lastDay(); i++){
                fullDate = ((M + 1)>11?(thisYear+1):thisYear)+"-"+((M + 1)>11?"01":((M+2)<10?"0"+(M+2):(M+2)))+"-"+(i<10?("0"+i):i);
                //beforeDayArray.push(i);
                beforeDayArray.push({
                    fullDate : fullDate,
                    year : ((M + 1)>11?(thisYear+1):thisYear),
                    month : ((M + 1)>11?"01":((M+2)<10?"0"+(M+2):(M+2))),
                    month_zh : This.month_zh[(M + 1)>11?0:(M+1)],
                    month_en : This.month_en[(M + 1)>11?0:(M+1)],
                    day : (i<10?("0"+i):i),
                    week : new Date(fullDate).Format("周W"),
                    week_zh : This.week_zh[new Date(fullDate).getDay()],
                    week_en : This.week_en[new Date(fullDate).getDay()],
                    is_weekend : This.isWeekend(fullDate),
                    weekth : This.weekth(fullDate),
                    dayth : This.dayth(fullDate),
                    is_today : This.isToday(fullDate),
                    is_future : This.isFuture(fullDate),
                    is_not_thisMonth : true
                });
            }
            return beforeDayArray;
        }
        return days(M,firstDay());
    };
    this.calendar = function(year){
        year = year || this.now('yyyy');
        var This = this;
        function setCalendar (){
            var yearArray = {};
            for(var i = 0; i<= 11; i++){
                yearArray[i] = This.calendarDay(year+"-"+((i+1)<10?("0"+(i+1)):(i+1)));
            }
            return yearArray;
        }
        return setCalendar();
    };
    this.NOW = this.now();
    this.YEAR = new Date().getFullYear();
    this.MONTH = new Date().getMonth();
    this.DATE = new Date().getDate();
    this.DAY = new Date().getDay();
    this.HOUR = new Date().getHours();
    this.MINUTE = new Date().getMinutes();
    this.SECOND = new Date().getSeconds();
    this.MILSED = new Date().getMilliseconds();
    this.WEEKTH = this.weekth(this.NOW);
    this.DAYTH = this.dayth(this.NOW);
    this.thisYearCalendarData = this.calendar();
}
Calendar.prototype.getCalendarData = function(year,m){
    if(m){
        m = Number(m) - 1;
        this.calendarData = this.calendar(year)[m];
        return this.calendarData;
    }else{
        this.calendarData = this.calendar(year);
        return this.calendarData;
    }
};
