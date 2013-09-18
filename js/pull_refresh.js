var myScroll_one,myScroll_two,myScroll_three,myScroll_four,myScroll_five,myScroll_six,myScroll_seven,myScroll_eight,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset;

function pullDownActionOne () {
    console.log('下拉刷新1');
    myScroll_one.refresh();
}

function pullUpActionOne () {
    console.log('上拉刷新1');
    myScroll_one.refresh();
}

function pullDownActionTwo () {
    console.log('下拉刷新2');
    myScroll_two.refresh();
}

function pullUpActionTwo () {
    console.log('上拉刷新2');
    myScroll_two.refresh();
}

function pullDownActionThree () {
    console.log('下拉刷新3');
    myScroll_three.refresh();
}

function pullUpActionThree () {
    console.log('上拉刷新3');
    myScroll_three.refresh();
}

function pullDownActionFour () {
    console.log('下拉刷新4');
    myScroll_four.refresh();
}

function pullUpActionFour () {
    console.log('上拉刷新4');
    myScroll_four.refresh();
}

function pullDownActionFive () {
    console.log('下拉刷新5');
    myScroll_five.refresh();
}

function pullUpActionFive () {
    console.log('上拉刷新5');
    myScroll_five.refresh();
}

function pullDownActionSix () {
    console.log('下拉刷新6');
    myScroll_six.refresh();
}

function pullUpActionSix () {
    console.log('上拉刷新6');
    myScroll_six.refresh();
}

function pullDownActionSeven () {
    console.log('下拉刷新7');
    myScroll_seven.refresh();
}

function pullUpActionSeven () {
    console.log('上拉刷新7');
    myScroll_seven.refresh();
}

function pullDownActionEight () {
    console.log('下拉刷新8');
    myScroll_eight.refresh();
}

function pullUpActionEight () {
    console.log('上拉刷新8');
    myScroll_eight.refresh();
}

function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll_one = new iScroll('scroller_one', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionOne();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionOne();
            }
        }


    });
    myScroll_two = new iScroll('scroller_two', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionTwo();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionTwo();
            }
        }


    });

    myScroll_three = new iScroll('scroller_three', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionThree();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionThree();
            }
        }


    });
    myScroll_four = new iScroll('scroller_four', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionFour();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionFour();
            }
        }


    });
    myScroll_five = new iScroll('scroller_five', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionFive();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionFive();
            }
        }


    });
    myScroll_six = new iScroll('scroller_six', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionSix();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionSix();
            }
        }


    });
    myScroll_seven = new iScroll('scroller_seven', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionSeven();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionSeven();
            }
        }


    });
    myScroll_eight = new iScroll('scroller_eight', {
        useTransition: true,
        topOffset: pullDownOffset,
        /*                hideScrollbar:true,*/
        vScrollbar:false,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                /* pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放开始刷新';*/
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                /*pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';*/
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                /*pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放开始刷新';*/
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                /* pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉刷新';*/
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                /* pullDownEl.className = 'loading';
                 pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';*/
                pullDownActionEight();
            } else if (pullUpEl.className.match('flip')) {
                /* pullUpEl.className = 'loading';
                 pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';*/
                pullUpActionEight();
            }
        }


    });


}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);