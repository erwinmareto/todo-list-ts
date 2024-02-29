import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
    mutations: {
      onError: (error: Error) => {
        /** You can use toast or notification here */
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          timer: 2000,
          showCloseButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      },
    },
  },
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));