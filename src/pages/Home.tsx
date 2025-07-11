import BannerSection from "../components/BannerSection/BannerSection"
import ClientLogosSection from "../components/ClientLogosSection/ClientLogosSection"
import Footer from "../components/Footer/Footer"
import NewsSection from "../components/NewsSection/NewsSection"
import OurServicesSection from "../components/OurServicesSection/OurServicesSection"
import StatsSection from "../components/StatsSection/StatsSection"
import TestimonialsWhyChooseUs from "../components/TestimonialsWhyClosseUs/TestimonialsWhyClosseUs"
import WelcomeSection from "../components/WelcomeSection/WelcomeSection"

// function Home() {
const Home: React.FC = () => {
    return (
        <>
            <BannerSection/>
            <WelcomeSection />
            <OurServicesSection />
            <StatsSection />
            <TestimonialsWhyChooseUs/>
            <ClientLogosSection />
            <NewsSection />
            <Footer     />
        </>
    )
}

export default Home
