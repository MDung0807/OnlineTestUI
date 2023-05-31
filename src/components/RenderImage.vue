<template>
  <div>
    <figure class="image is-64x64">
      <img
          class="rounded"
          :src="image" alt="ht">
    </figure>
    <div class="mt-2">
      <div>
        <div class="font-bold text-slate-700 leading-snug">
          <a href="#" class="hover:underline">{{ name }}</a>
        </div>
        <div class="mt-2 text-sm text-slate-600">{{  }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RenderImage',
  props:['image', 'name'],
}
</script>