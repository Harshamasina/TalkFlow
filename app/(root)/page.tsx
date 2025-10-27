import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import robot from "../../public/robot.png";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentuser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

const page = async () => {
    const user = await getCurrentuser();
    const [userInterviews, latestInterviews] = await Promise.all([
        await getInterviewsByUserId(user?.id!),
        await getLatestInterviews({userId: user?.id!})
    ]);

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;

    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>Get Interview Ready with AI powered Practice and Feedback Chat Agent</h2>
                    <p className='text-lg'>Practice on real Interview Questions</p>
                    <Button asChild className="btn-primary text-white max-sw:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>
                </div>

                <Image src={robot} alt="robot AI" width={400} height={400} className="max-sm:hidden"/>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interview</h2>
                <div className="interviews-section">
                    {  
                        hasPastInterviews ? (
                            userInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id} />
                            ))
                        ) : (<p>You haven't taken any interviews yet!</p>)
                    }
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                <div className="interviews-section">
                    {  
                        hasUpcomingInterviews ? (
                            latestInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id} />
                            ))
                        ) : (<p>No Upcoming interviews yet!</p>)
                    }
                </div>
            </section>
        </>
    )
};

export default page;
