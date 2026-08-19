import SolutionsSection from "@/components/Home-Solutions";
import InnerBanner from "@/components/Inner-banner";
import { TabSolutionSection } from "@/components/Our-Solutions";

export default function Solutions() {
  return (
    <>
      <InnerBanner title="Solutions" bgImage="/images/solution-banner.png" />
      <TabSolutionSection />
    </>
  );
}
