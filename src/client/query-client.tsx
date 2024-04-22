'use client'
import {
    QueryClient,
    QueryClientProvider,
    QueryCache
} from '@tanstack/react-query'
import { ReactNode } from "react";

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            console.log('Query error:', error)
        }
    }),
    defaultOptions: {
        mutations: {
            onError(error, variables, context) {
                console.log('Mutation', error)
            },
        }
    },
})

export const QueryClientProviderWrapper = ({ children }
    : { children: ReactNode }
) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
