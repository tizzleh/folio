import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export default sanityClient({
  projectId: 'eotnpube', // you can find this in sanity.json
  dataset: 'development', // or the name you chose in step 1
  apiVersion: '2022-05-31',
  useCdn: true // `false` if you want to ensure fresh data
})

export const builder = imageUrlBuilder({
  clientConfig: {
    projectId: 'eotnpube', // you can find this in sanity.json
    dataset: 'development' // or the name you chose in step 1
  }
})
