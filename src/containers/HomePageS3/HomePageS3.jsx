import { Fragment } from 'react'
import HeaderSectionS3 from '../../components/HeaderSectionS3/HeaderSectionS3'
import HeroSectionS3 from '../../components/HeroSectionS3/HeroSectionS3'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2'
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3'
import AboutSectionS3 from '../../components/AboutSectionS3/AboutSectionS3'
import CausesSectionS3 from '../../components/CausesSectionS3/CausesSectionS3'
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2'
import StorySection from '../../components/StorySection/StorySection'
import BrandSection from '../../components/BrandSection/BrandSection'
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3'
import InastagarmSection from '../../components/InastagarmSection/InastagarmSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import TestimonilSectionS2 from '../../components/TestimonilSectionS2/TestimonilSectionS2'
import FaqSection from '../../components/FaqSection/FaqSection'




function HomePageS3() {

    return (
        <Fragment>
            <HeaderSectionS3 />
            <HeroSectionS3 />
            <CtaSectionS2 />
            <ServiceSectionS3 />
            <AboutSectionS3 />
            <CausesSectionS3 hclass={'causes_section_s3 section_space'} />
            <FeaturesSectionS2 />
            <StorySection />
            <TestimonilSectionS2 />
            <FaqSection />
            <BrandSection hclass={'brand_section s2'}/>
            <BlogSectionS3 />
            <InastagarmSection />
            <FooterSection tClass={'footer_section_s3'} />
        </Fragment>
    )
}

export default HomePageS3;
