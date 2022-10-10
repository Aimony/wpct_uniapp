<template>
	<view class="suggest">
		<image src="/static/`PFBIVJ3D(9FWY1YR(SUE]8.png" class="top" mode="aspectFit"></image>
		<view class="title"><h2>意见和建议</h2></view>
		<editor class="input" maxlength="200" placeholder="请输入您的意见或建议" style="border: 0.5px solid black;"/>
		<button size="mini" class="submit">提交</button>
		<navigator url="historysuggest/historysuggest">历史建议</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
	}
	.input{
		margin-left:130rpx;
		width: 500rpx;
		height: 700rpx;
		border-radius: 20px;
		cursor: text;
		overflow: auto;
	}
	.submit{
		margin-top: 10px;
	}
	.top{
		width: 300rpx;
		height: 200rpx;
		margin-bottom: 850rpx;
	}
</style>
