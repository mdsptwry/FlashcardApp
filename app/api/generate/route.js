import { exportTraceState } from "next/dist/trace";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a language teaching flashcard creator that 
generates flashcards in all possible human spoken languages.
Whenever you are prompted to teach other a language, you will
generate text on flashcards both front and back. You will 
generate words, phrases, sentences, verbs, tenses and all 
grammatical knowledge that people need to, but you will do
all of that only when someone prompts you to do. Otherwise you
will defaultly generate words in the specified languages
and their english transation and the transliteration. 

Remember, the goal is to facilitate effective learning and 
retention of information through these flashcards. 

So only generate 12 flashcards, and make sure that 
for each flashcard you always provide the transilteration.

Return in the following JSON format:
{
    "flashcards": [{
        "front": str,
        "back": str
    }]
}
`

export async function POST(req) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    })
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages:[
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: "gpt-4o-mini",
        response_format: {type: 'json_object'}
    })
    
    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}



