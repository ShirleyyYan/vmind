<template>
    <div class="container" v-on:click.stop>
        <div class="container-left">
            <div class="container-back" v-on:click="clickBackIcon">
                <div class="back-icon">➔</div>
            </div>
        </div>
        <div class="container-right"></div>
    </div>
</template>

<script>
export default {
    name: 'EditorSidebarTab',
    methods: {
        clickBackIcon: function () {
            this.$emit('sidebar-hide');
        }
    }
}
</script>

<style scoped>
.container {
    width: 70vw;
    min-width: 300px;
    height: 100vh;
    background-color: white;
    border: #fc8383 1px solid; 
    text-align: left;
}
.container-left {
    display: inline-block;
    width: 40%;
    height: 100%;
    background-color: #fc8383;
    color: white;
}
.container-back {
    text-align: center;
    margin-top: 4vh;
    padding: 1vh 0 1vh 4vh;
}
.container-back:hover {
    background: linear-gradient(to right,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%);
}
.back-icon {
    width: 4vh;
    height: 4vh;
    border: 2px white solid;
    border-radius: 4vh;
    line-height: 4vh;
    font-size: 3vh;
    transform: rotateY(180deg);
}
.container-right {
    display: inline-block;
    height: 60%;
    width: 65%;
}
</style>