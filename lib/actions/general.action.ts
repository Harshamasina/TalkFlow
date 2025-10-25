import { db, auth } from "@/firebase/admin";

export async function getInterviewsByUserId(
    userId: string
    ): Promise<Interview[] | null> {
    const interviews = await db
        .collection("interviews")
        .where("userId", "==", userId)
        .orderBy("createdAt", "desc")
        .get();

    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Interview[];
}

export async function getLatestInterviews(
    params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
    const { userId, limit = 20 } = params;
    const interviewsSnapshot = await db
        .collection("interviews")
        .orderBy("createdAt", "desc")
        .limit(limit * 3)
        .get();

    const interviews = interviewsSnapshot.docs
        .map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Interview[];

    return interviews
        .filter((interview) => {
            const isFinalized = interview.finalized ?? (interview as any).finalzed ?? false;
            return isFinalized && interview.userId !== userId;
        })
        .slice(0, limit);
}
