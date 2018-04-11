<template>
    <div class="foot-wrap">
        <div class="foot">
            <dl>
                <dt>关于迅时</dt>
                <dd>公司简介</dd>
                <dd>联系方式</dd>
                <dd>资质荣誉</dd>
                <dd>人才招聘</dd>
            </dl>
            <dl>
                <dt>合作伙伴</dt>
                <dd>分销商</dd>
            </dl>
            <dl>
                <dt>技术中心</dt>
                <dd>软件下载</dd>
                <dd>常用配置</dd>
                <dd>新手上路</dd>
            </dl>
            <dl>
                <dt>售后中心</dt>
                <dd>常见问题</dd>
                <dd>方案设计</dd>
                <dd>技术进阶</dd>
                <dd>视频课程</dd>
            </dl>
            <dl>
                <dt>联系方式</dt>
                <dd>
                    <img src="./../../static/soImg/icon-iphone.png" alt="error">
                    <span>021-61202700</span>
                </dd>
                <dd>
                    <img src="./../../static/soImg/icon-mess.png" alt="error">
                    <span>mangoyiy@163.com</span>
                </dd>
                <dd>
                    <img src="./../../static/soImg/icon-local.png" alt="error">
                    <span>上海市徐汇区平福路188号</span>
                </dd>
            </dl>
            <dl>
                <dd style="text-align: right;"><img src="./../../static/soImg/sc.jpg" alt=""></dd>
            </dl>
        </div>
        <div class="copyright">
            <div class="cleft">版权所有&copy;上海迅时通信设备有限公司 2018。 保留一切权利。</div>
            <div class="cright">
                <a href="#">网站地图</a>
                <i>|</i>
                <a href="#">隐私保护</a>
                <i>|</i>
                <a href="#">法律声明</a>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .foot-wrap{
        padding: 30px 0 30px 0;
        background: #313035;
        margin-top: 66px;
        color: #fff;
    }
    .foot {
        width: 1200px;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .foot dl {
        flex: 1;
    }
    .foot dt {
        border-bottom: 1px solid #ccc;
        padding-bottom: 16px;
        margin-bottom: 16px;
        width: 72px;
    }
    .foot dd {
        height: 28px;
        line-height: 28px;
        cursor: pointer;
    }
    .copyright {
        width: 1200px;
        max-width: 1200px;
        margin: 60px auto 0;
        display: flex;
        justify-content: space-between;
    }
    .copyright .cleft {
        font-size: 12px;
    }
    .copyright .cright a{
        color: white;
        font-size: 12px;    
        text-decoration: none;
    }
    .copyright .cright i {
            margin: 0 5px;
    }

</style>
