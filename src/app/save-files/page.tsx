'use client'

import { useQuery } from "@tanstack/react-query";
import { apiQuery } from "@/client/api-client";

export default function Page() {
    const { data } = useQuery({
        queryKey: ['shared-with-me'],
        queryFn: async () => {
            return await apiQuery('/files/shared-with-me/')
        }
    })
    return (
        <div>
            <div> Save files </div>
        </div>
    )
}
