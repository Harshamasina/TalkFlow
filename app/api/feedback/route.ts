import { NextResponse } from "next/server";
import { createFeedback } from "@/lib/actions/general.action";

type FeedbackRequestBody = {
    interviewId: string;
    userId: string;
    transcript: { role: string; content: string }[];
    feedbackId?: string;
};

export async function POST(request: Request) {
    try {
        const { interviewId, userId, transcript, feedbackId } = (await request.json()) as FeedbackRequestBody;

        if (!interviewId || !userId || !Array.isArray(transcript)) {
            return NextResponse.json(
                { success: false, error: "Missing or invalid parameters." },
                { status: 400 }
            );
        }

        const result = await createFeedback({
            interviewId,
            userId,
            transcript,
            feedbackId,
        });

        if (!result.success) {
            return NextResponse.json(
                { success: false, error: "Failed to save feedback." },
                { status: 500 }
            );
        }

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error("Error handling feedback request:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
