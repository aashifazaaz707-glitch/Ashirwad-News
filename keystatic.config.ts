import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'production'
    ? {
        kind: 'github',
        repo: 'asif/silly-mendeleev',
      }
    : {
        kind: 'local',
      },
  collections: {
    news: collection({
      label: 'समाचार (News)',
      slugField: 'title',
      path: 'src/content/news/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { 
            label: 'शीर्षक (News Headline)',
            description: 'समाचार का मुख्य शीर्षक जो कि URL भी बनेगा'
          } 
        }),
        publishDate: fields.datetime({
          label: 'प्रकाशन तिथि (Publish Date)',
          defaultValue: { kind: 'now' },
        }),
        category: fields.select({
          label: 'श्रेणी (Category)',
          options: [
            { label: 'मुख्य पृष्ठ (Home)', value: 'home' },
            { label: 'ताजा खबर (Breaking)', value: 'breaking' },
            { label: 'मुसरीघरारी (Musrigharari)', value: 'musrigharari' },
            { label: 'समस्तीपुर (Samastipur)', value: 'samastipur' },
            { label: 'बिहार (Bihar)', value: 'bihar' },
            { label: 'देश (India)', value: 'india' },
            { label: 'दुनिया (World)', value: 'world' },
            { label: 'राजनीति (Politics)', value: 'politics' },
          ],
          defaultValue: 'home',
        }),
        tags: fields.text({
          label: 'टैग (Tags)',
          description: 'अल्पविराम (comma) से अलग किए गए टैग, उदा. बिहार, समस्तीपुर, ताज़ा'
        }),
        isBreakingNews: fields.checkbox({
          label: 'ब्रेकिंग न्यूज़ है? (Is Breaking News)',
          description: 'टिकर में दिखाने के लिए इसे चालू करें',
          defaultValue: false,
        }),
        image: fields.image({
          label: 'मुख्य चित्र (Featured Image)',
          directory: 'public/images/news/',
          publicPath: '/images/news/',
        }),
        content: fields.document({
          label: 'समाचार विवरण (Content)',
          formatting: true,
          links: true,
          images: {
            directory: 'public/images/news/',
            publicPath: '/images/news/',
          },
        }),
      },
    }),
  },
});
