<template>
    <slot>
        <section class="loading">
			<div class="spinner-grow text-success" role="status">
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-grow text-danger" role="status">
			  <span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-grow text-warning" role="status">
			  <span class="visually-hidden">Loading...</span>
			</div>
		</section>
    </slot>
</template>