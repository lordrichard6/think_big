import AboutHeader from "../components/_about/Header/About"
import AboutSecondSection from "../components/_about/SecondSection"
import AboutThirdSection from "../components/_about/ThirdSection"

export default function AboutPage() {
    return (
        <div className="w-screen bg-slate-100 overflow-x-hidden py-28">
            <AboutHeader />
            <AboutSecondSection />
            <AboutThirdSection />
        </div>
    );
}