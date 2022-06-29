<template>
	<div>
		About
		<p>{{peerId}}</p>
	</div>
</template>
<script>
import {ref} from 'vue'
import Peer from 'peerjs'

export default {
    data() {
        return {
            peerId: ''
        }
    },
    mounted: function () {
        this.init()
    },
    methods: {
        init() {
	        this.peerId = 'getting id ...'
            const peer = new Peer()
            peer.on('open', (id)=>{
                console.log('My peer ID is: ' + id)
                this.peerId = 'My peer ID is: ' + id
            })
        }
    }
}
</script>
