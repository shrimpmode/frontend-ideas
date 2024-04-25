'use client'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from "react";

const queryClientContext = new QueryClient()

export const QueryClientProviderWrapper = ({ children }
    : { children: ReactNode }
) => (
    <QueryClientProvider client={queryClientContext}>{children}</QueryClientProvider>
)
