<template>
    <div class="h-100">
        <div class="card shadow">
            <div class="card-header d-flex justify-content-between align-items-center font-weight-bold">
                <div class="w-50 text-left align-items-center" style="font-size:1.2rem">
                    荒境菁英怪 (悄悄話٩◉₃◉۶製作)
                </div>
                <div class="d-flex align-items-center w-50">
                    <div class="w-100 text-right mr-4">
                        世界線 :
                    </div>
                    <select class="form-control bg-secondary text-light" v-model="worldLine">
                        <option v-for="(item, key) in worldList" :value="item.value" :key="key">{{item.index}}</option>
                    </select>
                </div>
            </div>
            <div class="card-body">
                <div class="row" v-if="Elite.length > 0">

                    <div v-for="(monster, elite_key) in Elite[0]" v-bind:key="elite_key" class="col-md-6 mb-2 d-flex justify-content-between align-items-center">

                        <div class="col-md-6 bg-success w-100 h-100 rounded  align-items-center d-flex justify-content-center text-light font-weight-bold">
                            <!--<div class="bg-success w-100 h-100 rounded">
                                {{monster.Name}}
                            </div>-->
                            {{monster.Name}}
                        </div>

                        <div class="col-md-4 font-weight-bold">

                            <div class="text-center" v-bind:class="{ 'text-danger': monster.BornTime -  timeNow < 300, 'text-dark': monster.BornTime -  timeNow < -600 }">
                                {{timeReadable(monster.BornTime)}}
                            </div>
                        </div>

                        <div class="col-md-2 font-weight-bold">

                            <button class="btn btn-danger" @click="updateData(elite_key, monster)">
                                Killed
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>
</template>

<script>
    // @ is an alias to /src

    import { db } from '../js/firebase'
    const fStore = db.firestore()

    export default {
        name: 'Home',
        data() {
            return {
                Elite: [],
                worldLine: '14',
                worldList: [
                    { index: 1, value: "1" },
                    { index: 2, value: "2" },
                    { index: 3, value: "3" },
                    { index: 4, value: "4" },
                    { index: 5, value: "5" },
                    { index: 6, value: "6" },
                    { index: 7, value: "7" },
                    { index: 8, value: "8" },
                    { index: 9, value: "9" },
                    { index: 10, value: "10" },
                    { index: 11, value: "11" },
                    { index: 12, value: "12" },
                    { index: 13, value: "13" },
                    { index: 14, value: "14" },
                    { index: 15, value: "15" },
                    { index: 16, value: "16" },
                    { index: 17, value: "17" },
                    { index: 18, value: "18" },
                    { index: 19, value: "19" },
                    { index: 20, value: "20" },
                    { index: 21, value: "21" },
                    { index: 22, value: "22" },
                    { index: 23, value: "23" },
                    { index: 24, value: "24" },
                    { index: 25, value: "25" },
                    { index: 26, value: "26" },
                    { index: 27, value: "27" },
                    { index: 28, value: "28" },
                    { index: 29, value: "29" },
                    { index: 30, value: "30" },
                ],

                monsterList: {
                    0: { Name: "邪骸法師", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    1: { Name: "荒野犬妖", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    2: { Name: "邪骸劍客", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    3: { Name: "荒原佩瑞絲", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    4: { Name: "銀月虎王", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    5: { Name: "紅蛇阿克", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    6: { Name: "黑暗米諾斯", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    7: { Name: "廢墟石怪", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    8: { Name: "深淵魔馬", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    9: { Name: "荒野曼陀羅", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    10: { Name: "森之土人", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    11: { Name: "深淵蟻后", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    12: { Name: "荒野靈獸", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    13: { Name: "深淵蜥蜴", RebornTime: 60, BornTime: parseInt(Date.now() / 1000) },
                    14: { Name: "深淵之眼", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    15: { Name: "荒野瘋兔", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    16: { Name: "野花草精", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    17: { Name: "洛陽狸貓", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    18: { Name: "礦工土撥鼠", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                    19: { Name: "迷你魔猴", RebornTime: 30, BornTime: parseInt(Date.now() / 1000) },
                },
                timeObj: undefined,
                timeNow: undefined,
                undateKey: undefined
            }
        },
        methods: {
            test() {
                console.log(this.Elite)
            },

            timeReadable(time) {

                var min, sec, real

                real = time - this.timeNow

                if (real > 0) {

                    min = parseInt(real / 60)
                    sec = parseInt(real % 60)
                    return min + ":" + sec
                } else if (real < -600 && real <=0) {
                    return "---"
                } else {
                    return "Alive"
                }
            },

            timeCountDown() {
                this.timeNow = parseInt(Date.now() / 1000)
            },

            countDown(index) {
                this.monsterList[index].isGo = true
            },

            cleanCountDown(index) {
                this.monsterList[index].isGo = false
                this.monsterList[index].current = this.monsterList[index].time
            },

            addMessage: function () {

                for (var i = 1; i < 31; i++) {
                    var temp = "" + i
                    fStore.collection('RoElite').doc('WorldLine').collection(temp).add(this.monsterList)
                }
            },

            updateData(index, born) {

                var params = {}

                params[index] = {
                    Name: born.Name,
                    RebornTime: born.RebornTime,
                    BornTime: parseInt(Date.now() / 1000) + born.RebornTime * 60,
                }

                fStore.collection('RoElite').doc('WorldLine').collection(this.worldLine).doc(this.undateKey).update(params)

            },


        },

        mounted() {
            this.timeNow = parseInt(Date.now() / 1000)

            this.timeObj = setInterval(() => {
                this.timeCountDown()
            }, 1000)

            this.$bind(
                'Elite',
                fStore.collection('RoElite').doc('WorldLine').collection(this.worldLine)
            ).catch(() => {
                alert('Please Login to review data')
            })


            setTimeout(() => {
                this.undateKey = this.Elite[0].id
            }, 500);

        },

        watch: {
            worldLine(newValue, oldValue) {

                if (newValue != oldValue) {

                    this.Elite.length = 0

                    this.$bind(
                        'Elite',
                        fStore.collection('RoElite').doc('WorldLine').collection(newValue)
                    ).catch(() => {
                        alert('Please Login to review data')
                    })

                    setTimeout(() => {
                        this.undateKey = this.Elite[0].id
                        console.log(this.undateKey)
                    }, 500);


                }

            }
        },

        beforeDestroy() {
            clearInterval(this.timeObj)
        }


    }
</script>

<style>

    .monster-name {
        background-color: rgba(255, 192, 203, .5)
    }


</style>
