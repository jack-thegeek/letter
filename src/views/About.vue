<template>
	<div :class="`var-elevation--3`" class="about">
		<img alt="" class="logo" src="@/assets/images/logo.svg">
		<h1>情 书</h1>
		<p class="version">5.0</p>
		<p class="content">何同学倾心制作</p>
	</div>
</template>
<style lang="scss" scoped>
	h1, p {
		margin: 10px 0;
	}

	.about {
		background-color: white;
		border-radius: 5px;
		width: 85%;
		min-height: 400px;
		margin: 30px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			width: 45px;
			height: 45px;
		}

		h1 {
			font-size: 1.35em;
			font-weight: normal;
			color: rgba(0, 0, 0, 0.6);
		}

		.version, .content {
			font-weight: 100;
			margin-top: 5px;
			color: rgba(0, 0, 0, 0.4);
		}
	}
</style>
