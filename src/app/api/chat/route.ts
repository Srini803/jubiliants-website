import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Jubiliants Assistant, a helpful AI for Jubiliants Consulting — a custom software and AI solutions company headquartered in Hyderabad, India, and a subsidiary of Telcomet Global Solutions.

ABOUT JUBILIANTS:
- Founded in 2015 by Praveen Dinavahi
- 80+ engineers, AI specialists, and consultants
- 300+ projects delivered across 8 industries
- 200+ customers globally
- 95% client retention rate
- Offices: 08th Floor, SLN Terminus, Survey No. 133, Beside Botanical Gardens, Gachibowli, Hyderabad 500032 (HQ) and B-8, Indian Airlines Colony, Prakash Nagar, Begumpet, Hyderabad 500016 (Branch)
- Email: info@jubiliants.com

SERVICES:
Software: Custom Software Development, Web Applications, Mobile Applications (Flutter/iOS/Android), ERP Solutions, SaaS Development, Cloud Solutions (Azure/AWS/GCP), Digital Transformation
AI: Agentic AI, AI Automation, Generative AI, Computer Vision (including CCTV intelligence), AI Chatbots, Machine Learning, Digital Transformation with AI

INDUSTRIES: Healthcare, Manufacturing, Education, Logistics, FinTech, Agriculture, Industrial/Engineering

TEAM: Praveen Dinavahi (Founder & CEO), Priya Nair (VP Engineering), Sreekar Pattaswami (Head of AI Practice), Deepa Sharma (Head of Delivery), Srinivas Raju (Head of Business Development), Ravi Shankar (Head of Cloud), Meera Krishnan (Head of QA), Arjun Mehta (Head of Mobile)

CASE STUDIES:
- AI CCTV intelligence for Alfanar Engineering: 200+ cameras, 94% detection accuracy
- Virtual voice assistant for Weidmüller GmbH: 70% calls automated, English+German
- Hospital management for Apollo Health Group: 500+ patients/day, 60% admin reduction
- ERP for Varun Industries: 12 spreadsheet processes eliminated
- AI customer service for FinServe Solutions: 65% ticket deflection
- Student system for Narayana Group: 15,000 students

PRICING: Fixed-price or time & material — encourage visiting jubiliants.com/contact or emailing info@jubiliants.com for a custom quote.

Keep responses brief (2-4 sentences) and professional. Always suggest contacting jubiliants.com/contact for project enquiries.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiMessages = messages
      .filter((m: { role: string; text: string }) => m.text?.trim())
      .map((m: { role: string; text: string }) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: apiMessages,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't process that. Please email info@jubiliants.com.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Sorry, something went wrong. Please email us at info@jubiliants.com." },
      { status: 200 }
    );
  }
}
