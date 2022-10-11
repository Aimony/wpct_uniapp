<template>
	<view class="suggest">
		<image src="/static/`PFBIVJ3D(9FWY1YR(SUE]8.png" class="top" mode="aspectFit"></image>
		<view class="title" v-html="code"></view>
		<editor class="input" maxlength="200" placeholder="请输入您的意见或建议" style="border: 0.5px solid black;"/>
		<button size="mini" class="submit" v-on:click="OnClick">{{submit}}</button>
		<navigator url="../historySuggest/historySuggest" class="history">历史建议</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:"<h2>意见和建议</h2>",
				submit:"提交"
			}
		},
		methods:{
			OnClick:function submit(){
				this.submit="提交成功";
				
			}
		}
	}
</script>

<style>
	
	.suggest{
		text-align: center;
		margin-top: 150rpx;
	}
	.input{
		margin-top: 100rpx;
		margin-left:130rpx;
		width: 500rpx;
		height: 700rpx;
		border-radius: 20px;
		cursor: text;
		overflow: auto;
		position: absolute;
	}
	.submit{
		margin-top: 430px;
		position: absolute;
		margin-left: -50rpx;
	}
	.top{
		width: 300rpx;
		height: 200rpx;
		margin-bottom: 850rpx;
		margin-top: -180rpx;
		position: absolute;
		margin-left: -160rpx;
	}
	.title{
		margin-top: 0rpx;
		margin-left: 265rpx;
		text-align: center;
		position: absolute;
	}
	.history{
		position: absolute;
		margin-top: 940rpx;
		margin-left: 320rpx;
	}
</style>
