import { CertificationsSection } from "@/components/Certifications-Section";
import InnerBanner from "@/components/Inner-banner";
import IsoCertificationSection from "@/components/Iso-certificate";
import ProjectsSection from "@/components/Projects";


export default function Ims() {
  return (
<>

<InnerBanner title="IMS @ Renfra" bgImage="/images/new-ims-banner.jpg" />
<CertificationsSection />
<IsoCertificationSection />
</>
  );
}
