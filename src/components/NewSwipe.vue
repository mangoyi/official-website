<template>
    <div class="block">
        <el-carousel trigger="click" :height="elheight">
            <el-carousel-item v-for="(item, index) in banlist" :key="index">
                <img v-bind:src="item.src" alt="error" width="100%" height="100%"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                elheight: "550px",
                banlist: [
                    {src: "./../../static/bannerImg/banner1.jpg"},
                    {src: "./../../static/bannerImg/banner2.jpg"},
                    {src: "./../../static/bannerImg/banner3.jpg"},
                    {src: "./../../static/bannerImg/banner4.jpg"},
                    {src: "./../../static/bannerImg/banner5.jpg"}
                ]
            }
        },
        mounted() {
            // this.elheight = `550px`;    // 首先在Virtual DOM渲染数据时，设置高度．
                                           // 然后监听window的resize事件．在浏览器窗口变化时再设置下高度．
            const that = this;
            window.onresize = function temp() {
                that.elheight = `${document.documentElement.clientWidth / 3.46}px`;
            };
        },
    }
</script>

<style>
    .block {
        margin-top: 92px;
    }
</style>
