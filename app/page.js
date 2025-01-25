import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import { getListPage } from "@lib/contentParser";

const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } = frontmatter;
  
  return (
    <GSAPWrapper>
      <SeoMeta 
        title="Tip Screen - Smart Digital Tipping Solution for Modern Payments with Tip Screen"
        description="A professional digital tipping platform with multi-currency support, customizable tip screen, and seamless payment processing. Ideal for businesses and service providers."
        url="/"
        canonical="https://www.tip-screen.com"
      />
      <HomeBanner banner={banner} brands={brands} />
      <Features features={features} />
      <ShortIntro intro={intro} />
      <SpecialFeatures speciality={speciality} />
      <Testimonial testimonial={testimonial} />
      <Cta />
    </GSAPWrapper>
  );
};

export default Home;
