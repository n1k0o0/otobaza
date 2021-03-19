<template lang="pug">
  .Dismantles
</template>
<script>
export default {
  name: 'Dismantles',
  asyncData ({ app, redirect }) {
    redirect(app.localePath({
      name: 'dismantles-slug',
      params: {
        slug: 'p-1'
      }
    }))
  }
}
</script>
