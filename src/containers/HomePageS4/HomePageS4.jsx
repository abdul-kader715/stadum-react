import { Fragment } from 'react'
import HeaderSectionS4 from '../../components/HeaderSectionS4/HeaderSectionS4'
import HeroSectionS4 from '../../components/HeroSectionS4/HeroSectionS4'
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4'
import AboutSectionS4 from '../../components/AboutSectionS4/AboutSectionS4'
import FanfactSectionS2 from '../../components/FanfactSectionS2/FanfactSectionS2'
import ProcessSection from '../../components/ProcessSection/ProcessSection'
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2'
import BrandSection from '../../components/BrandSection/BrandSection'
import BlogSection from '../../components/BlogSection/BlogSection'
import PricingSection  from '../../components/PricingSection/PricingSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import TestimonilSectionS3 from '../../components/TestimonilSectionS3/TestimonilSectionS3'
import VideoSectionS2 from '../../components/VideoSectionS2/VideoSectionS2'
import CtaSection from '../../components/CtaSection/CtaSection'




function HomePageS4() {

    return (
        <Fragment>
            <HeaderSectionS4 />
            <HeroSectionS4 />
            <ServiceSectionS4 />
            <AboutSectionS4 />
            <BrandSection hclass={'brand_section'}/>
            <ProcessSection />
            <TestimonilSectionS3 hclass={'testimonial_section_s3 section_space'} />
            <FanfactSectionS2/>
            <ProjectSectionS2 hClass={'project_section_s3'}/>
            <VideoSectionS2 />
            <PricingSection />
            <CtaSection hClass={'cta_section s2'} />
            <BlogSection hClass={'blog_section s4 section_space'}/>
            <FooterSection tClass={'footer_section'} />
        </Fragment>
    )
}

export default HomePageS4;
