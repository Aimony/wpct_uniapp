<template>
	<view class="background">
		<view class="suggest">
			<image src="/static/`PFBIVJ3D(9FWY1YR(SUE]8.png" class="top" mode="aspectFit"></image>
			<view class="title" v-html="code"></view>
			<editor class="input" maxlength="200" placeholder="请输入您的意见或建议" style="border: 0.5px solid black;"/>
			<button class="submit" size="mini">提交</button>
			<navigator class="historysuggest" url="../historySuggest/historySuggest">历史建议</navigator>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:"<h2>意见和建议</h2>"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.suggest{
		text-align: center;
		margin-top: 150rpx;
		position: absolute;
	}
	.input{
		margin-left:130rpx;
		width: 500rpx;
		height: 700rpx;
		border-radius: 20px;
		cursor: text;
		overflow: auto;
		margin-top: 250px;
		position: absolute;
		margin-top: 150rpx;
	}
	.submit{
		margin-top: 880rpx;
		margin-left: 325rpx;
	}
	.top{
		width: 400rpx;
		height: 200rpx;
		margin-bottom: 950rpx;
		position: absolute;
		margin-left: 170rpx;
		margin-top: -180rpx;
	}
	.historysuggest{
		margin-left: 325rpx;
	}
	.title{
		margin-top: 50rpx;
		margin-left: 155rpx;
		position: absolute;
		font-size: 40rpx;
		width: 450rpx;
		color: black;
	}
	
</style>
