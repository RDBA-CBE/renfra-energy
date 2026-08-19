import CenterTextVideoSection from "@/components/About-Inner";
import CommitmentSection from "@/components/Commitment";
import InnerBanner from "@/components/Inner-banner";
import StatsSection from "@/components/Stats";
import ExecutiveMessageTabs from "@/components/Team-Message";
import MissionVisionSection from "@/components/Vision";


export default function About() {
  return (
<>

<InnerBanner title="About Us" bgImage="/images/banner-about.png" />
      {/* Your about page content below */}
      
      <CenterTextVideoSection />
      <StatsSection />
      <MissionVisionSection />
      <ExecutiveMessageTabs />
      <CommitmentSection />
</>
  );
}
