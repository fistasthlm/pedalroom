import { createClient } from 'contentful';

export function initClient() {
   const client = createClient({
      space: 'x1j0zkbk3421',
      accessToken: '51423a880ccaf2847c19f43968300dc01225a61cacea3f8fa40c6452cf610442',
      host: 'cdn.contentful.com'
   });

   return client;
}
