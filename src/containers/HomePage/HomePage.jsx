import { Fragment } from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import CategorieSection from '../../components/CategorieSection/CategorieSection';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import CommunitySection from '../../components/CommunitySection/CommunitySection';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import MentorshipSection from '../../components/MentorshipSection/MentorshipSection';
import PartnerstSection from '../../components/PartnerstSection/PartnersSection';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import TeamSection from '../../components/TeamSection/TeamSection';
import TestimonilSection from '../../components/TestimonilSection/TestimonilSection';
import TextSliderSection from '../../components/TextSliderSection/TextSliderSection';



function HomePage() {

   return (
      <Fragment>
         <ScrollTextAnimation />
         <HeaderSection />
         <HeroSection />
         <AboutSection />
         <CategorieSection />
         <CoursesSection />
         <ChooseSection />
         <TestimonilSection />
         <TeamSection />
         <PartnerstSection />
         <CommunitySection />
         <MentorshipSection />
         <CtaSection />
         <BlogSection />
         <TextSliderSection />
         <FooterSection />
      </Fragment>
   )
}

export default HomePage
