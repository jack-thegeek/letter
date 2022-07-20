<script setup>
import axios from '@/request'
import {reactive, ref} from 'vue'
import 'swiper/css'
import 'swiper/css/lazy'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Virtual, Lazy, Zoom} from 'swiper'

const lazyOptions = {
    loadPrevNext: true,
    loadOnTransitionStart: true
}

const modules = [Virtual, Lazy, Zoom]

let swiperRef = null
const onSwiper = (swiper) => {
    swiperRef = swiper
    // swiper.slideNext()
    // swiper.slideTo(80)
}

const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0)
}

let state = reactive({
    images: [
        {
            name: 'letter_1.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/3b5e4b55-6eee-4d6a-a2d7-88f024f9aa6c.webp'
        },
        {
            name: 'letter_2.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/52d9220c-146d-4160-8859-41ca46c3e6f6.webp'
        },
        {
            name: 'letter_3.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/1af60693-881d-49bb-9d74-65b05b7ff90a.webp'
        },
        {
            name: 'letter_4.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/71f4e4a5-fd26-490e-bb8e-0f90286015dc.webp'
        },
        {
            name: 'letter_5.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ac3ca5c6-492a-40d0-b664-54adc86dbe4f.webp'
        },
        {
            name: 'letter_6.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/30925c3f-8070-4038-8cf5-aaf5a26ec858.webp'
        },
        {
            name: 'letter_7.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/9842a813-9c7f-434d-8164-8642a0e7f729.webp'
        },
        {
            name: 'letter_8.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/8478f5fc-552f-447b-9a76-80bbc38d4f52.webp'
        }, {
            name: 'letter_9.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/c3c8cbbf-07d3-4750-a8fb-3162a3bfcd83.webp'
        },
        {
            name: 'letter_10.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/b8ccbf0b-6506-4a09-95a6-b4c1a4115b7f.webp'
        },
        {
            name: 'letter_11.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/df272b73-f5c2-4a59-b7c0-e682c4b7e51c.webp'
        },
        {
            name: 'letter_12.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/87b68aab-be54-42f8-bb51-7190c192fe3e.webp'
        },
        {
            name: 'letter_13.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/b094fec2-bc1d-45b2-bfa7-e61fd514a51a.webp'
        },
        {
            name: 'letter_14.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/7a0e78de-8b5c-4e1e-91ef-f77bf9cc54ec.webp'
        },
        {
            name: 'letter_15.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/695e0a00-1cf5-4cc5-aab2-9f6e96460d19.webp'
        },
        {
            name: 'letter_16.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/6e18608d-f5ce-476f-9035-1c2058a05b3d.webp'
        },
        {
            name: 'letter_17.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/0293d429-08c7-493c-8046-30c28c6c47ef.webp'
        },
        {
            name: 'letter_18.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/001e12b2-fc90-4f3a-8cb2-c819def05268.webp'
        },
        {
            name: 'letter_19.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/2f50a666-481e-42c8-89fc-851aff6d24ac.webp'
        },
        {
            name: 'letter_20.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/0deb9784-8a40-428e-a1f4-8374d912a1bb.webp'
        },
        {
            name: 'letter_21.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/dfc1244d-f2f6-4159-93d1-1d040bb5ce9f.webp'
        },
        {
            name: 'letter_22.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/8e3a34ac-0ff8-4592-9861-d93508d275f4.webp'
        },
        {
            name: 'letter_23.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/15d38d00-4712-4697-bb13-ae8b21b32788.webp'
        },
        {
            name: 'letter_24.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ffd10d15-b67d-4630-a7d7-3e28e33338b9.webp'
        },
        {
            name: 'letter_25.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/3f981b92-fc9f-4319-a920-da60b50b9e6a.webp'
        },
        {
            name: 'letter_26.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/124475bd-0f77-4911-9eb8-80918ed0dee0.webp'
        },
        {
            name: 'letter_27.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/f0bf2c5a-c3d5-4540-8f40-3940ba5286f3.webp'
        },
        {
            name: 'letter_28.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/5517fc32-0b5c-44e1-aa61-c2a8daaede76.webp'
        },
        {
            name: 'letter_29.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/877256e1-ff8f-4ea5-b331-d9c417fe1d85.webp'
        },
        {
            name: 'letter_30.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/944c26dd-b8a8-45a7-b6c0-27208f98fd27.webp'
        },
        {
            name: 'letter_31.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ab14882b-2d26-4773-aac4-5a80705829d3.webp'
        },
        {
            name: 'letter_32.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/4e041b74-a1bc-4fa7-86ad-bb97ce5177d4.webp'
        },
        {
            name: 'letter_33.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/41b2ca3a-c6e7-40d4-97ee-b61cf3ad3ed1.webp'
        },
        {
            name: 'letter_34.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/dbd5ee73-1828-4829-990a-9ceac23d47ce.webp'
        },
        {
            name: 'letter_35.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ef7fb248-d990-4307-af9b-97bd8479042a.webp'
        },
        {
            name: 'letter_36.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/09aa0690-342e-4bd0-b44f-bec42412ca21.webp'
        },
        {
            name: 'letter_37.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/e730ce9e-b9d4-4d26-81f0-52bb3940bf60.webp'
        },
        {
            name: 'letter_38.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/a928267c-ee21-4769-8702-f0c098125d5f.webp'
        },
        {
            name: 'letter_39.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/d5efa0d8-c886-4f0c-a642-d59d85f3e327.webp'
        },
        {
            name: 'letter_40.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/07b87f63-de2d-4be0-9374-de184dce4283.webp'
        },
        {
            name: 'letter_41.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/a330d2a5-e70c-43a4-a721-8e9c3798dda5.webp'
        },
        {
            name: 'letter_42.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/11c7863a-2a0a-4c57-b6eb-80db95c2356b.webp'
        },
        {
            name: 'letter_43.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/5014dc8e-9694-443d-acf5-28ad26c2c83d.webp'
        },
        {
            name: 'letter_44.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/9143abc7-e63d-4888-b530-c8e181d34649.webp'
        },
        {
            name: 'letter_45.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/9ed028a7-edda-4375-b257-a7d5bfa03cae.webp'
        },
        {
            name: 'letter_46.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/38bf7bcf-b6f4-4639-9ae6-7884d73062fe.webp'
        },
        {
            name: 'letter_47.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/70358b69-bbab-4773-962a-8a15b2db9371.webp'
        },
        {
            name: 'letter_48.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ae3177b1-5a30-46b8-9e00-ee40f2195e90.webp'
        },
        {
            name: 'letter_49.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/b3849248-32ca-4024-8039-245b420752fa.webp'
        },
        {
            name: 'letter_50.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/1a9bedf2-65f9-4a69-8954-019e447f1d3c.webp'
        },
        {
            name: 'letter_51.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/4f501045-2b6b-4923-9653-cb6074ab694f.webp'
        },
        {
            name: 'letter_52.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/cf5b4a17-f086-4fe0-aa66-c5cce2eb1a96.webp'
        },
        {
            name: 'letter_53.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/598c70cb-3edf-4acf-bef9-a4cc5a4f840c.webp'
        },
        {
            name: 'letter_54.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/3560ef04-ef6d-46d1-914e-cdea9eb3484f.webp'
        },
        {
            name: 'letter_55.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/3fdf1d1c-dd67-46e5-9b3e-5286d964b65d.webp'
        },
        {
            name: 'letter_56.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/f0822a8c-4fc0-48e9-bd2e-c157fe5726ab.webp'
        },
        {
            name: 'letter_57.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/e09e903f-2417-4f06-a540-a40aa98ce81c.webp'
        },
        {
            name: 'letter_58.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/92161df3-60ac-4942-b42c-9cd5ea7b7777.webp'
        },
        {
            name: 'letter_59.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/6fa25387-f37e-4b41-8250-3a7f8495e1c7.webp'
        },
        {
            name: 'letter_60.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/85482b93-7599-447c-817a-087077a3e157.webp'
        },
        {
            name: 'letter_61.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/afe38f3d-6ff3-403f-abca-882bfee10b25.webp'
        },
        {
            name: 'letter_62.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/c859215a-0436-42e7-a55d-d7b5dc8c5329.webp'
        },
        {
            name: 'letter_63.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/c67d8f9b-a516-457f-bd1c-5a1febb7ba94.webp'
        },
        {
            name: 'letter_64.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/4fd83f1b-f4bb-40c6-a661-37056becf68a.webp'
        },
        {
            name: 'letter_65.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/815983bc-061e-409f-ac32-b790bbd553f7.webp'
        },
        {
            name: 'letter_66.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/d963e944-de45-4caf-b6fd-fe83dd2fdc02.webp'
        },
        {
            name: 'letter_67.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/f2790017-f26c-4bbd-8926-8d229835dc41.webp'
        },
        {
            name: 'letter_68.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/0fcd837c-5f32-413e-98e6-f748ba2b63c6.webp'
        },
        {
            name: 'letter_69.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ae0ee53c-82e7-4e95-bd5e-53e7ef6e3318.webp'
        },
        {
            name: 'letter_70.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/7464a6c5-0c0a-4514-b5c3-130dd8daa9d9.webp'
        },
        {
            name: 'letter_71.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/99efd4d6-9a1c-4b80-b57a-75bdf8936669.webp'
        },
        {
            name: 'letter_72.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/ebd2f76d-25ba-4bce-9153-804b23cd14c6.webp'
        },
        {
            name: 'letter_73.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/a5f34905-23c4-48cb-a6dc-c50eca9510a7.webp'
        },
        {
            name: 'letter_74.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/2628d117-716d-4f74-b89d-597a49d006b8.webp'
        },
        {
            name: 'letter_75.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/1b6ff7fa-6775-4a98-8bcf-3c31edaa50ad.webp'
        },
        {
            name: 'letter_76.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/aee502cb-3ae6-4a9b-9eb8-4f056b6f3f68.webp'
        },
        {
            name: 'letter_77.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/eb7b2d14-72f1-4fda-888b-905d1bc4a64a.webp'
        },
        {
            name: 'letter_78.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/f44aae87-be94-4081-9b3d-1435eb572c5c.webp'
        },
        {
            name: 'letter_79.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/cbe17e39-6b73-4800-87a2-f2e9ad66d632.webp'
        },
        {
            name: 'letter_8.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/8478f5fc-552f-447b-9a76-80bbc38d4f52.webp'
        },
        {
            name: 'letter_80.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/885bc309-8ef7-4382-8171-72f48380e056.webp'
        },
        {
            name: 'letter_81.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/e2e1623e-6c50-4e4f-bd25-37e983dcb8f7.webp'
        },
        {
            name: 'letter_82.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/a8caf6c4-737e-4201-92be-7fed50e08e79.webp'
        },
        {
            name: 'letter_83.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/99ef9f63-6dd3-4d31-b894-683cb47a4814.webp'
        },
        {
            name: 'letter_84.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/36ccc172-1e2c-49e9-ae46-fa317f784f81.webp'
        },
        {
            name: 'letter_85.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/c585a5d4-9a04-47f9-87b7-260fc72eda79.webp'
        },
        {
            name: 'letter_86.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/783e6db3-aa80-4836-8302-d0f5d989b864.webp'
        },
        {
            name: 'letter_87.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/dfd14506-9ae0-4cc1-ae90-d908fce40dfc.webp'
        },
        {
            name: 'letter_88.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/746368b8-351e-499f-9dc7-d1d7f38037a6.webp'
        },
        {
            name: 'letter_89.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/dc1f9c18-234d-4480-bb9a-d691720701b5.webp'
        },
        {
            name: 'letter_9.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/c3c8cbbf-07d3-4750-a8fb-3162a3bfcd83.webp'
        },
        {
            name: 'letter_90.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/bc78c31c-d953-4530-961a-3e124afa4154.webp'
        },
        {
            name: 'letter_91.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/145bda6e-39df-464d-a1ae-247142ffef6f.webp'
        },
        {
            name: 'letter_92.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/5359ce3d-7f04-42ac-9c02-7180ccb7e00c.webp'
        },
        {
            name: 'letter_93.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/e080cf93-22f9-4d12-ba23-5038b3af4102.webp'
        },
        {
            name: 'letter_94.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/f056a1f1-e4c4-4141-a4d7-c52cba0eaa89.webp'
        },
        {
            name: 'letter_95.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/2e5acfe7-3d93-48e6-b202-150af0c96165.webp'
        },
        {
            name: 'letter_96.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/22fe9826-652d-4f57-9da0-5ad8e16539c1.webp'
        },
        {
            name: 'letter_97.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/70c72886-ea5a-4a40-8f4a-5ec5a6b0369f.webp'
        },
        {
            name: 'letter_98.webp',
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/bb15f852-64fc-49fb-9835-b3d6bd0e95c9.webp'
        }
    ]
})

// const getImages = async () => {
//   const result = await axios.get('/album')
//   if (result.data) {
//     state.images = result.data
//   }
// }

// getImages()
</script>
<template>
	<div class="full-width">
		<swiper @swiper="onSwiper" :modules="modules" :slides-per-view="1" :lazy="lazyOptions" virtual zoom>
			<swiper-slide
					v-for="(image, index) in state.images"
					:key="index"
					:virtualIndex="index">
				<div class="swiper-zoom-container">
					<img :data-src="image.url" alt="" class="swiper-lazy pic">
				</div>
				<div class="swiper-lazy-preloader"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<style scoped lang="scss">
	.pic {
		width: 100%;
		height: auto;
		object-fit: fill;
	}

	.description {

	}

	.full-width {
		margin: 25% -15px;
	}
</style>
