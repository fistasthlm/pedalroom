export const NETWORK = 'NETWORK';

export function networkProgress() {
   return {
      type: NETWORK,
      state: {
         networkProgress: true,
         networkFailed: false
      }
   };
}

export function networkFailed() {
   return {
      type: NETWORK,
      state: {
         networkProgress: false,
         subscriptionProgress: false,
         networkFailed: true
      }
   };
}

export function resetNetwork() {
   return {
      type: NETWORK,
      state: {
         networkProgress: false,
         subscriptionProgress: false,
         networkFailed: false
      }
   };
}
