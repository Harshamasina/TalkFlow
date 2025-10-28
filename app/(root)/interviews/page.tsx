import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentuser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";
import robot from "@/public/robot.png";

const InterviewsPage = async () => {
  const user = await getCurrentuser();
  const userId = user?.id;

  let userInterviews: Interview[] = [];
  let latestInterviews: Interview[] = [];

  if (userId) {
    const [userInterviewData, latestInterviewData] = await Promise.all([
      getInterviewsByUserId(userId),
      getLatestInterviews({ userId }),
    ]);

    userInterviews = userInterviewData ?? [];
    latestInterviews = latestInterviewData ?? [];
  }

  const hasPastInterviews = userInterviews.length > 0;
  const hasUpcomingInterviews = latestInterviews.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex max-w-lg flex-col gap-6">
          <h2>Get Interview Ready with AI powered Practice and Feedback Chat Agent</h2>
          <p className="text-lg">Practice on Real Interview Questions</p>
          <Button asChild className="btn-primary text-white max-sw:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src={robot}
          alt="robot AI"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="mt-8 flex flex-col gap-6">
        <h2>Your Interview</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet!</p>
          )}
        </div>
      </section>

      <section className="mt-8 flex flex-col gap-6">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>No Upcoming interviews yet!</p>
          )}
        </div>
      </section>
    </>
  );
};

export default InterviewsPage;
