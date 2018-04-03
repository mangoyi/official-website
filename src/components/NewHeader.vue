<template>
    <div class="navwrap">
        <div class="navcenter">
            <span class="logo"></span>
            <div class="navright">
                <div class="ench">
                    <a href="/">中文</a>
                    /
                    <a href="http://baidu.com" target="_blank">English</a>
                    <a href="#" class="login">登录</a>
                    <a href="#" class="register">注册</a>
                </div>
                <ul class="navul">
                    <li><a href="#">首页</a></li>
                    <li>
                        <a href="#">方案</a>
                        <div>
                            
                        </div>    
                    </li>
                    <li><a href="#">产品</a></li>
                    <li><a href="#">技术支持</a></li>
                    <li><a href="#">合作伙伴</a></li>
                    <li><a href="#">应用平台</a></li>
                    <li><a href="#">关于我们</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
@import "./../assets/css/reset.css";

.navwrap {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 90px;
    background: #fff;
    position: fixed;
    z-index: 99999;
    top: 0;
}
.navcenter {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    width: 1200px;
}
.logo {
    display: inline-block;
    background: url(./../../static//logo.png) no-repeat;
    width: 103px;
    height: 52px;
    margin-top: 20px;
}
.ench {
    height: 20px;
    color: #969697;
    margin-top: 10px;
    width: 100%;
    text-align: right;
}
.ench a {
    color: #777;
    text-decoration: none;
    font-size: 14px;
}
.login {
    margin: 0 20px;
}
.navul {
    display: flex;
}
.navul li {
    padding: 0 20px;
}
.navul li a {
    display: block;
    text-decoration: none;
    color: #777;
    font-size: 17px;
    height: 60px;
    line-height: 60px;
}
.navul li:first-child {
    padding-left: 0;
}
.navul li:last-child {
    padding-right: 0;
}

</style>
