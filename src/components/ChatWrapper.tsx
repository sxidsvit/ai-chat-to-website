'use client'

import { Message, useChat } from 'ai/react'
import { Messages } from './Messages'
import { ChatInput } from './ChatInput'

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string
  initialMessages: Message[]
}) => {
  // useChat() - Allows you to easily create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the state for chat input, and updates the UI automatically as new messages are received.

  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    setInput,
  } = useChat({
    api: '/api/chat-stream',
    body: { sessionId },
    initialMessages,
  })

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  )
}
