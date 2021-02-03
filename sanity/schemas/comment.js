export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Comments wont show on the site without approval."
    },
    {
      name: 'name',
      type: 'string',
      readOnly: true
    },
    {
      name: 'email',
      type: 'string',
      readOnly: true
    },
    {
      name: 'comment',
      type: 'text',
      readOnly: true
    },
    {
      name: 'post',
      type: 'reference',
      to: [
        {type: 'post'}
      ],
      readOnly: true
    }
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      post: 'post.title'
    },
    prepare({name, comment, post}) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment
      }
    }
  }
}
