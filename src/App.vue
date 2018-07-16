<template>
	<div id="app">
		<!--<img src="./assets/logo.png">
		<button class="layui-btn">一个标准的按钮</button>
		{{title}}-->
		
		<router-view></router-view>
	</div>
</template>

<script>
	import $ from 'jquery'

	export default {
		name:'app',
		data() {
			return {
				title: "12345678"
			}
		},
		mounted() {
			$("button").click(function() {
				alert(1)
			})
		},
		methods: {
			startHacking() {
				this.$notify({
					title: 'It works!',
					type: 'success',
					message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
					duration: 5000
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
</style>