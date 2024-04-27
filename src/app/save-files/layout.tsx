import {QueryClientProviderWrapper} from "@/context/query-client-context";
import {RootProvider} from "@/context/root-provider";
import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
            <RootProvider>
                {children}
            </RootProvider>
    )
}