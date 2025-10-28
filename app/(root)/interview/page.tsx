import Agent from "@/components/Agent";
import { getCurrentuser } from "@/lib/actions/auth.action";

const page = async () => {
    const user  = await getCurrentuser();
    const userName = user?.name ?? "Candidate";
    const userId = user?.id;
    
    return (
        <>
            <h3>Interview Generation</h3>
            <Agent
                userName={userName}
                userId={userId}
                // profileImage={user?.profileURL}
                type="generate"
            />
        </>
    )
};

export default page;
