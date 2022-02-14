<template>
  <form method="POST">
    <input type="email" name="email" />
    <textarea name="text" />
    <button type="submit" name="submit">Send</button>
  </form>
</template>

<script>
export default {
  asyncData: context => {
    console.log(typeof context.req.body)
    console.log(JSON.stringify(context.req.body))
    if (context.req.body?.submit) {
      context.$mail.send({
        from: 'admin@foo.de',
        replyTo: context.req.body.email,
        text: context.req.body.text,
        to: 'admin@foo.de',
      })
    }
  },
}
</script>
