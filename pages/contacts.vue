<template>
    <div id="contacts">
        <div class="infoMain">
            <div class="infoGrids">
                <div class="mid">
                    <h1>{{$t('contactUs')}}</h1>
                    <br>
                    <form action="get" @submit.prevent="handleSubmit">
                        <label for="">
                            <p>{{ $t('request.name') }}</p>
                            <input type="text" :placeholder="$t('request.name')" name="name">
                        </label>
                        <label for="">
                            <p>{{ $t('request.email') }}</p>
                            <input placeholder="Email" type="text" name="email">
                        </label>
                        <label for="">
                            <p>{{ $t('request.phone') }}</p>
                            <input type="text" :placeholder="$t('request.phone')" name="phone">
                        </label>
                        <label for="">
                            <p>{{ $t('request.disc') }}</p>
                            <input type="text" :placeholder="$t('request.disc')" name="discription">
                        </label>
                        <label for="">
                            <input type="text" name="checked" hidden value="false">
                        </label>
                        <button>Send</button>
                    </form>

                </div>
            </div>
            <news />
        </div>
        <div class="response">
            <div class="error">

            </div>
            <div class="ok">
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    methods: {
        handleSubmit() {
            let formData = new FormData(event.target);
            let obj = {}

            formData.forEach((value, key) => {
                obj[key] = value
            })

            axios.post("https://645d2fb3250a246ae319f640.mockapi.io/request", obj)
                .then((tr) => {
                    console.log(tr);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    },
    computed: {
    }
}
</script>

<style>
.photos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-auto-rows: 200px;
    gap: 10px;
}

.photos img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
}
</style>