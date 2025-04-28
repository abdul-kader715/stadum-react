import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
// import HomePageS2 from './HomePageS2/HomePageS2'
// import HomePageS3 from './HomePageS3/HomePageS3'
// import HomePageS4 from './HomePageS4/HomePageS4'
// import AboutPage from './AboutPage/AboutPage'
// import ServiceSinglePage from './ServiceSinglePage/ServiceSinglePage'
// import ContactPage from './ContactPage/ContactPage.jsx'
// import CausesPage from './CausesPage/CausesPage.jsx'
// import CausesSinglePage from './CausesSinglePage/CausesSinglePage.jsx'
// import ProjectPage from './ProjectPage/ProjectPage.jsx'
// import ProjectSinglePage from './ProjectSinglePage/ProjectSinglePage.jsx'
// import TeamSinglePage from './TeamSinglePage/TeamSinglePage.jsx'
// import TeamPage from './TeamPage/TeamPage.jsx'
// import ServicesPage from './ServicesPage/ServicesPage.jsx'
// import ServicesPageS2 from './ServicesPageS2/ServicesPageS2.jsx'
// import ServicesPageS3 from './ServicesPageS3/ServicesPageS3.jsx'
// import ServicesPageS4 from './ServicesPageS4/ServicesPageS4.jsx'
// import TestimonialPage from './TestimonialPageS4/TestimonialPage.jsx'
// import ErrorPage from './ErrorPage/ErrorPage.jsx'
// import BlogPage from './BlogPage/BlogPage.jsx'
// import BlogSinglePage from './BlogSinglePage/BlogSinglePage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' exact />
        <Route element={<HomePage />} path="home" />
        {/* <Route element={<HomePageS2 />} path="home-2" />
        <Route element={<HomePageS3 />} path="home-3" />
        <Route element={<HomePageS4 />} path="home-4" />
        <Route element={<AboutPage />} path="about" />
        <Route element={<ServiceSinglePage />} path="services-single/:slug" />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<CausesPage />} path="causes" />
        <Route element={<CausesSinglePage />} path="causes-single/:slug" />
        <Route element={<ProjectPage />} path="project" />
        <Route element={<ProjectSinglePage />} path="project-single/:slug" />
        <Route element={<TeamPage />} path="team/" />
        <Route element={<TeamSinglePage />} path="team-single/:slug" />
        <Route element={<ServicesPage />} path="services" />
        <Route element={<ServicesPageS2 />} path="services-s2" />
        <Route element={<ServicesPageS3 />} path="services-s3" />
        <Route element={<ServicesPageS4 />} path="services-s4" />
        <Route element={<TestimonialPage/>} path="testimonial" />
        <Route element={<BlogPage/>} path="blog" />
        <Route element={<BlogSinglePage/>} path="blog-single/:slug" />
        <Route element={<ErrorPage/>} path="404" /> */}

      </Routes>

    </BrowserRouter>
  )
}

export default App