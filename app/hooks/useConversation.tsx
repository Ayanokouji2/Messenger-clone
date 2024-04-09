import { useParams } from 'next/navigation'
import { useMemo } from 'react'

const useConversation = () => {
    const params = useParams()

    // useMemo is used for memoization

    const conversationId = useMemo(() => {
        if (!params?.conversationId) return ' '

        return params.conversationId as string
    }, [params?.conversationId])

    const isOpen = useMemo(() => !!conversationId, [conversationId]) // '!!' converts the string into boolean

    return useMemo(
        () => ({
            isOpen,
            conversationId,
        }),
        [isOpen, conversationId]
    )
}

export default useConversation
