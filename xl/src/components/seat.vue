<template>

    <div class="container">
        <div class="content">
            <div class="left">
                <ul>
                    <li><router-link to="/server/server01" active-class="active">设备采购服务</router-link></li>
                    <li><router-link to="/server/server02" active-class="active">应用及数据服务</router-link></li>
                    <li><a href="#">服务器维护</a></li>
                    <li><a href="#">企业网络部署</a></li>
                </ul>
            </div>
            <div class="right">
                <h2>服务范围</h2>
               <router-view></router-view>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:"seat",
    data () {
        return {
            
        }
    }
}
</script>


