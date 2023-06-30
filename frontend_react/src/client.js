import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'xv1bo8zg',
  dataset: 'production',
  useCdn: true,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);