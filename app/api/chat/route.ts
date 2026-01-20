import { NextResponse } from "next/server";
import { resolve } from "path";
 export async function POST(req: Request) {
    // 1. Get the message the user sent
    const body = await req.json();
    const userMessage = body.message || "";

    // 2. Simulate "AI Thinking" delay (1 second)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. Our "Mock AI logic"
    // In the future we will swap this part with real OpenAI code!
    let aiReply = "I am not sure, but 'Inception' is always a good choice!";

    if (userMessage.toLowerCase().includes("sad")) {
        aiReply = "If you need a good cry, watch 'Interstellar'. The father-daughter bond is heartbreaking.";
    }
    else if (userMessage.toLowerCase().includes("action")) {
        aiReply = "For pure adrenaline, 'The Dark Knight' is the best action movie on your list.";
    }

    // 4. Send the response back to the frontend
    return NextResponse.json({ reply: aiReply });
 }