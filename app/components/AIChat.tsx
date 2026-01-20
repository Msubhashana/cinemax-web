"use client";

import { useState } from "react";

export default function AIChat() {
  const [chatInput, setChatInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function askAI() {
    setIsLoading(true);
    setAiResponse(""); // Clear old message

    // Call our new Backend API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: chatInput })
    });

    const data = await response.json();
    setAiResponse(data.reply);
    setIsLoading(false)
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
        <h2 className="text-xl font-bold mb-4 text-blue-900">
            🎬 Ask the AI Assistant
        </h2>
        <div className="flex gap-4">
            <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="e.g. I want a sad movie..."
                className="flex-1 p-3 border rounded shadow-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
            <button
                onClick={askAI}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-semibold"
                disabled={isLoading}
            >
                {isLoading ? "Thinking..." : "Ask"}
            </button>
        </div>

        {/* the AI reply bubble */}
        {aiResponse && (
          <div className="mt-4 p-4 bg-white rounded border border-gray-200 text-gray-800">
            <strong>AI says:</strong> {aiResponse}
          </div>
        )}

    </div>
  );
}