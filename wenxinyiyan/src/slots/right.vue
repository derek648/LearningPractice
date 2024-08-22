<template>
	<section class="right_all mainContent">
		<section class="right sticky-top">
			<nav class="navbar-expand-sm">
				<div class="position-relative">
					<div class="position-absolute top-0 start-50 translate-middle">
						<!-- carousel -->
						<div id="carouselExampleCaptions" class="carousel slide">
							<div class="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
									class="active" aria-current="true" aria-label="Slide 1"></button>
								<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
									aria-label="Slide 2"></button>
								<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
									aria-label="Slide 3"></button>
							</div>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://cacm.acm.org/wp-content/uploads/2024/08/080824.OP_.Tools-of-Our-Tools.jpg"
										class="d-block w-100" alt="...">
									<div class="carousel-caption d-none d-md-block">
										<h5>Tools of Our Tools? Exploring the Cybercene Conjecture</h5>
										<p>Are we seeing the dawning of a new epoch?</p>
									</div>
								</div>
								<div class="carousel-item">
									<img src="https://cacm.acm.org/wp-content/uploads/2024/07/073024.News_.The-Impact-of-AI-G.jpg?resize=1536,864"
										class="d-block w-100" alt="...">
									<div class="carousel-caption d-none d-md-block">
										<h5>The Impact of AI on Computer Science Education</h5>
										<p>The continued focus on incorporating AI into most job sectors
											will
											change
											how computer science is taught.</p>
									</div>
								</div>
								<div class="carousel-item">
									<img src="https://cacm.acm.org/wp-content/uploads/2024/07/072624.RE_.50-Years-of-Queries-G.jpg?resize=1536,864"
										class="d-block w-100" alt="...">
									<div class="carousel-caption d-none d-md-block">
										<h5>50 Years of Queries</h5>
										<p>A discussion of the evolution of the database industry over the
											last
											half
											century, and why the relational database concepts introduced by
											E.
											F.
											Codd have proven so resilient over several decades.</p>
									</div>
								</div>
							</div>
							<button class="carousel-control-prev" type="button"
								data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button"
								data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</section>
		<section class="dialog float-end">
			<div class="d-flex align-items-start justify-content-center">
				<div class="d-flex flex-column chartBackground ">
					<div class="shadow-lg p-3 mb-5 rounded">
						<div class="container-fluid position-relative row ">
							<div class="d-flex justify-content-start">
								<img src="../../public/pictures/gyt/resource/icon.png" alt="图标" width="25" height="25"
									class="d-inline-block align-text-top me-1"><span class="me-4">文件</span>
								<img src="../../public/pictures/gyt/resource/icon2.png" alt="图标" width="25" height="25"
									class="d-inline-block align-text-top me-1"><span class="me-4">图片</span>
								<img src="../../public/pictures/gyt/resource/icon3.png" alt="图标" width="25" height="25"
									class="d-inline-block align-text-top me-1"><span class="me-4">启用能力</span>
							</div>
							<textarea placeholder="在这里输入消息..." rows="5" class="shadow-lg rounded"
								id="enquiry"></textarea>
							<div class="d-flex justify-content-end">
								<button class="send_button mt-2">
									<!--   纸飞机小图标   -->
									<i class="bi bi-send" id="send"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>