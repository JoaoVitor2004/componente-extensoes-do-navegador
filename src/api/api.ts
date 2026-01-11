import type SchemeExtensions from "../entities/Extension"

export const extensioApi = {
    getExtensions: async (): Promise<SchemeExtensions[]> => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/extensions`)
        const data: SchemeExtensions[] = await response.json()
        return data
    }
}