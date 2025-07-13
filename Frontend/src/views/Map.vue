<!-- src/views/MapView.vue -->
<template>
	<div id="map" style="height: 100vh;"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
	const map = L.map('map').setView([23.6978, 120.9605], 8) // 台灣中心點

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map)

	// // 使用者定位
	// map.locate({ setView: true, maxZoom: 13 })
})
</script>

<style scoped>
#map {
	width: 100%;
	height: 100%;
}
</style>
