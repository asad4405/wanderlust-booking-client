import Banner from "@/components/home/Banner";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
    return (
        <div>
            <Banner/>
            <FeaturedDestinations/>
            <WhyChooseUs/>
            <Testimonial/>
        </div>
    )
}
