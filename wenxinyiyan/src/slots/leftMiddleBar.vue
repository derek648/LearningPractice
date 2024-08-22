<template>
    <slot>

        <!-- 对话历史框  -->
		<section class="leftMiddleBar_gzj mainContent" >
			<div id="dialogHistory_gzj">
				<!-- 文心大模型 -->
				<div class="d-flex flex-column">
					<div class="container-fluid position-relative">
						<div class="d-flex justify-content-start wenxinBigModel_gzj">
							<img src="../../public/pictures/gzj/leftMiddleBar/文心一言.png" alt="Logo" width="25" height="25"
								class="d-inline-block align-text-top">
							<text class="fw-bold">文心大模型</text>
						</div>
					</div>
				</div>
				<!-- 文心大模型工具版 -->
				<div class="d-flex flex-column">
					<div class="container-fluid position-relative">
						<div class="d-flex justify-content-start wenxinBigModelTool_gzj">
							<img src="../../public/pictures/gzj/leftMiddleBar/文心一言工具版.png" alt="Logo" width="25" height="25"
								class="d-inline-block align-text-top">
							<text>文心大模型4.0工具版</text>
						</div>
					</div>
				</div>
				<!-- 智能体广场 -->
				<div class="d-flex flex-column">
					<div class="container-fluid position-relative">
						<div class="d-flex justify-content-start intelligentPlaza_gzj">
							<img src="../../public/pictures/gzj/leftMiddleBar/应用.png" alt="Logo" width="22" height="22"
								class="d-inline-block align-text-top">
							<text class="fw-bold">智能体广场</text>
						</div>
					</div>
				</div>
				<!-- 搜索框 -->
				<!-- 对话历史框 -->
				<div class="container-fluid">
					<form class="d-flex" role="search">
						<input class="form-control btn-sm" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-secondary btn-sm trashBox_gzj" type="submit">
							<i class="bi bi-trash3"></i>
						</button>
					</form>
				</div>

				<div id="historicalDialog_gzj">
					<p>无搜索结果</p>
				</div>
				<!-- 开通会员 -->
				<div id="openPremium_gzj">
					<img src="../../public/pictures/gzj/leftMiddleBar/充值会员.png" />
				</div>
			</div>
		</section>

    </slot>
</template>