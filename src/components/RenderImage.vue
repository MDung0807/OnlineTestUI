<template>
  <div>
    <figure class="image is-128x128">
      <img
          class="rounded"
          :src="image" alt="ht">
    </figure>
    <div class="mt-2">
      <div>
        
        <div class="mt-2 text-sm text-slate-600">{{ name }}</div>
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