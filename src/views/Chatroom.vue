<template>
	<div>
		Chatroom
		<p>{{peerId}}</p>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import Peer from 'peerjs'

let peerId = ref('loading my peer id ...')
const peer = new Peer()
peer.on('open', (id) => {
    console.log('My peer ID is: ' + id)
    peerId.value = 'My peer ID is: ' + id
})
</script>
