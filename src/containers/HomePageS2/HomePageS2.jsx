import { Fragment } from 'react'
import HeaderSectionS2 from '../../components/HeaderSectionS2/HeaderSectionS2'
import HeroSectionS2 from '../../components/HeroSectionS2/HeroSectionS2'
import AboutSectionS2 from '../../components/AboutSectionS2/AboutSectionS2'
import FanfactSection from '../../components/FanfactSection/FanfactSection'
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2'
import SkillSection from '../../components/SkillSection/SkillSection'
import DonatSectionS2 from '../../components/DonatSectionS2/DonatSectionS2'
import TeamSection from '../../components/TeamSection/TeamSection'
import BrandSection from '../../components/BrandSection/BrandSection'
import VideoSection from '../../components/VideoSection/VideoSection'
import CausesSectionS2 from '../../components/CausesSectionS2/CausesSectionS2'
import ChooseSection from '../../components/ChooseSection/ChooseSection'
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2'
import FooterSection from '../../components/FooterSection/FooterSection'




function HomePageS2() {

    return (
        <Fragment>
            <HeaderSectionS2 />
            <HeroSectionS2 />
            <AboutSectionS2 />
            <FanfactSection />
            <ServiceSectionS2 />
            <SkillSection />
            <DonatSectionS2 />
            <TeamSection hclass={'team_section section_space'} />
            <BrandSection hclass={'brand_section'} />
            <VideoSection />
            <CausesSectionS2 hclass={'causes_section_s2 section_space'} />
            <ChooseSection />
            <BlogSectionS2 />
            <FooterSection tClass={'footer_section_s2'} />
        </Fragment>
    )
}
export default HomePageS2;
