import { Fragment } from 'react';
import ScrollTextAnimation from '../../components/ScrollTextAnimation/ScrollTextAnimation';
import HeaderSection from '../../components/HeaderSection/HeaderSection'
// import HeroSection from '../../components/HeroSection/HeroSection'
import AboutSection from '../../components/AboutSection/AboutSection'
// import ServiceSection from '../../components/ServiceSection/ServiceSection'
import CategorieSection from '../../components/CategorieSection/CategorieSection'
import CoursesSection from '../../components/CoursesSection/CoursesSection'
import ChooseSection from '../../components/ChooseSection/ChooseSection'
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerstSection from '../../components/PartnerstSection/PartnersSection'
import CommunitySection from '../../components/CommunitySection/CommunitySection'
import MentorshipSection from '../../components/MentorshipSection/MentorshipSection'
import CtaSection from '../../components/CtaSection/CtaSection'
import BlogSection from '../../components/BlogSection/BlogSection'
import TextSliderSection from '../../components/TextSliderSection/TextSliderSection'

// import TestimonilSection from '../../components/TestimonilSection/TestimonilSection'



import FooterSection from '../../components/FooterSection/FooterSection'



function HomePage() {

   return (
      <Fragment>
         <ScrollTextAnimation />
         <HeaderSection />
         <AboutSection />
         <CategorieSection />
         <CoursesSection />
         <ChooseSection />
         <TeamSection />
         <PartnerstSection />
         <CommunitySection />
         <MentorshipSection />
         <CtaSection/>
         <BlogSection />
         <TextSliderSection />
         <FooterSection />
         {/* 
         
            <HeroSection />
            
            <ServiceSection />
            
            
            <TestimonilSection />
            
            
            <ContactSection hClass={'contact_section'} />
             */}
      </Fragment>
   )
}

export default HomePage
