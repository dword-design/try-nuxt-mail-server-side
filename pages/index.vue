<template>
  <form>
    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  asyncData: context => console.log(context.req),
}
</script>
