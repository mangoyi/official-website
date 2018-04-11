<template>
  <div>
    <new-header></new-header>
    <new-swipe></new-swipe>
    <div class="owl-wrap">
        <div class="owl">
            <ul class="o-ul">
                <li class="item" v-for="(item, index) in piclist" :key="index">
                    <div class="pic">
                        <a href="#">
                            <i class="pichover"></i>
                            <img v-bind:src="item.src" alt="error" width="100%" height="100%" />
                        </a>
                    </div>
                    <div class="title">
                        <a href="#">{{ item.title }}</a>
                    </div>
                </li>
            </ul>
            <div class="more">
                <a href="#">了解更多</a>
            </div>
        </div>
    </div>
    <div class="news-wrap">
        <div class="news">
            <div class="nleft">
                <h3>新闻中心</h3>
                <ul>
                    <li v-for="(item, index) in timelist" :key="index">
                        <div class="time">
                            <span class="day">{{item.day}}</span>
                            <span class="month">{{item.month}}</span>
                        </div>
                        <a href="#">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="nright">
                <ul>
                    <li>
                        <div class="rtitle"><a href="#">视频 | 配置IP外线</a></div>
                        <div class="pic">
                            <a href="#">
                                <i class="pichover"></i>
                                <img src="./../../static/soImg/m001.jpg" alt="error" width="100%" height="100%">
                            </a>
                        </div>
                        <p class="content">
                            IP外线通过互联网连接电信运营商语音业务平台，具有业务融合能力强、成本低、部署快、维护易的优势。	在本集《迅时OM20快...
                        </p>
                    </li> 
                    <li>
                        <div class="rtitle"><a href="#">视频 | 设置个性化来电欢迎词</a></div>
                        <div class="pic">
                            <a href="#">
                                <i class="pichover"></i>
                                <img src="./../../static/soImg/m002.jpg" alt="error" width="100%" height="100%">
                            </a>
                        </div>
                        <p class="content">IP融合通信从点滴学起，尽在《迅时OM20快速安装》系列视频。想零成本完成来电欢迎词的定制？想根据营销活动随时随地变更来...</p>
                    </li>  
                </ul>
            </div>
        </div>
    </div>
    <new-footer></new-footer>
  </div>
</template>

<script>
    import NewHeader from '@/components/NewHeader.vue';
    import NewSwipe from '@/components/NewSwipe.vue';
    import NewFooter from '@/components/NewFooter.vue';

    export default {
        data() {
            return {
                piclist: [
                    {
                        src: "./../../static/soImg/w001.jpg",
                        title: "优质高效的电话沟通方案"
                    },
                    {
                        src: "./../../static/soImg/w002.jpg",
                        title: "IP网络上部署电话系统"
                    },
                    {
                        src: "./../../static/soImg/w003.jpg",
                        title: "接入运营商IMS核心网"
                    },
                    {
                        src: "./../../static/soImg/w004.jpg",
                        title: "企业电话录音解决方案"    
                    },
                    {
                        src: "./../../static/soImg/w005.jpg",
                        title: "企业语音与信息融合"    
                    },
                    {
                        src: "./../../static/soImg/w006.jpg",
                        title: "融合通信与传统PBX连接"
                    },
                ],
                timelist: [
                    {
                        month: "2018-03",
                        day: "09",
                        title: "迅时IP-PBX引领企业电话沟通新时代"
                    },
                    {
                        month: "2018-02",
                        day: "20",
                        title: "迅时2018春节放假通知"
                    },
                    {
                        month: "2018-02",
                        day: "08",
                        title: "迅时邀您相约美国ITEXPO展"
                    },
                    {
                        month: "2018-01",
                        day: "23",
                        title: "迅时2018年年会集锦"
                    }
                ]
            }
        },
        components: {
            NewHeader: NewHeader,
            NewSwipe: NewSwipe,
            NewFooter: NewFooter
        },
        method: {
            overShow() {
                this.showLayer = !this.showLayer;
            },
            outHide() {
                this.showLayer = !this.showLayer;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img {
        vertical-align: bottom;
    }
    .owl-wrap {
        padding: 50px 0 60px;
        background: #ecedef;
    }
    .owl {
        width: 1200px;
        min-width: 1200px;  
        margin: 0 auto;
    }
    .owl ul {
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }
    .owl ul li {
        width: 380px;
        margin: 0 30px 30px 0;
    }
    .owl ul li:nth-child(3n){  
        margin: 0 0;        
    }
    ul li .pic {
        position: relative;
        overflow: hidden;
    }
    ul li .pic img {
        transition: transform 0.4s;
    }
    ul li .pic:hover img{
        transform: scale(1.2);
        zoom: 1.2;
    }
    .pic .pichover {
        display: block;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        opacity: 0;
        transition: all ease 0.4s;
    }
    .pic .pichover:hover {
        opacity: 1;
    }
    .owl ul li .title {
        text-align: center;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        font-size: 20px;
    }
    .title a {
        text-decoration: none;
        color: #666;
    }
    .title a:hover {
        color: #003D88;
    }
    .more {
        text-align: center;
    }
    .more a {
        display: inline-block;
        background: #003D88;
        color: #fff;
        width: 180px;
        height: 55px;
        line-height: 55px;
        border-radius: 10px;
        text-align: center;
        font-size: 18px;
        text-decoration: none;
        transition: all ease .2s;
    }
    .more a:hover {
        background: black;
    }
    .news-wrap {
        overflow: hidden;
        height: 500px;
        margin-top: 60px;
    }
    .news {
        width: 1200px;
        max-width: 1200px;
        margin:0 auto;
        display: flex;
    }
    .nleft h3 {
        color: #003D88;
        font-size: 30px;
    }
    .nleft ul {
        padding-right: 45px;
        border-right: 2px solid #dcdcdc;
    }
    .nleft ul li {
        display: flex;
        padding: 18px 0;
    }
    .nleft .time {
        float: left;
        width: 55px;
        height: 55px;
        background: #595758;
        color: #fff;
        text-align: center;    
    }
    .nleft .day {
        display: inline-block;
        font-weight: bold;
        font-size: 30px;
        margin: 4px 0 -2px 0;
    }
    .nleft .month {
        font-size: 11px;
    }
    .nleft a {
        font-size: 18px;
        display: table;
        text-decoration: none;
        color: #666;
        width: 235px;
        margin-left: 20px;
        line-height: 25px;
        height: 50px;
        overflow: hidden;
    }
    .nright ul {
        width: 820px;
        display: flex;
    }
    .nright ul li {
        width: 380px;
        overflow: hidden;
        margin-left: 40px;
    }
    .nright .rtitle {
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    .nright .pic {
        overflow: hidden;
        margin: 15px 0 20px 0;
        width: 380px;
        height: 250px;
    }
    .nright .rtitle a {
        font-size: 18px;
        text-decoration: none;
        color: #666;
    }
    .nright .content {
        font-size: 16px;
        line-height: 28px;
        height: 56px;
        overflow: hidden;
        color: #666;
    }

</style>
