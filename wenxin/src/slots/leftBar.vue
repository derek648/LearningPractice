<template>
    <slot>
        <section class="left_all mainContent">
			<nav class="navbar bg-body-tertiary">
				<div class="container-fluid position-relative">
					<a class="navbar-brand " href="#">
						<img src="../../public/pictures/gzj/leftMiddleBar/文心一言.png" alt="Logo" width="33" height="30"
							class="d-inline-block align-text-top position-absolute top-50 start-50 translate-middle">
					</a>
				</div>
			</nav>
			<p class="brand">文心一言</p>
			<div class="d-flex flex-column mt-2">
				<div class="d-flex justify-content-center">
					<i class="bi bi-chat-left-dots"></i>
				</div>
				<div class="d-flex justify-content-center">
					<lable class="label">会话</lable>
				</div>
			</div>
			<div class="d-flex flex-column mt-2">
				<div class="d-flex justify-content-center">
					<i class="bi bi-person-square"></i>
				</div>
				<div class="d-flex justify-content-center">
					<lable class="label">个性化</lable>
				</div>
			</div>
			<div class="d-flex flex-column mt-2">
				<div class="d-flex justify-content-center">
					<i class="bi bi-box2"></i>
				</div>
				<div class="d-flex justify-content-center">
					<lable class="label">百宝箱</lable>
				</div>
			</div>

			<div class="d-flex flex-column mt-2">
				<div class="d-flex justify-content-center">
					<i class="bi bi-book"></i>
				</div>
				<div class="d-flex justify-content-center">
					<lable class="label">使用指南</lable>
				</div>
			</div>
			<!-- 底部边栏 -->
			<div class="fixed-bottom">
				<div class="d-flex flex-column mt-2">
					<div class="d-flex justify-content-center">
						<i class="bi bi-envelope"></i>
					</div>
				</div>
				<div class="d-flex flex-column mt-2">
					<div class="d-flex justify-content-center">
						<i class="bi bi-gem"></i>
					</div>
					<div class="d-flex justify-content-center">
						<lable class="label">会员</lable>
					</div>
				</div>
				<div class="d-flex flex-column mt-2">
					<div class="d-flex justify-content-center">
						<i class="bi bi-person"></i>
					</div>
					<div class="d-flex justify-content-center">
						<lable class="label">账户</lable>
					</div>
				</div>
			</div>
		</section>
    </slot>
</template>

<script>

</script>