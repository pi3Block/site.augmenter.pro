import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { PlatformPreview } from "@/components/sections/platform-preview";
import { Approach } from "@/components/sections/approach";
import { Pricing } from "@/components/sections/pricing";
import { Ideas } from "@/components/sections/ideas";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <PlatformPreview />
      <Approach />
      <Pricing />
      <Ideas />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
