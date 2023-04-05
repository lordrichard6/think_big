import HeaderComponent from '../components/_home/Header';
import TestimonialsComponent from '../components/_home/Testimonials';
import MyStoryComponent from '../components/_home/MyStory';

export default function Home() {
    return (
        <div className="bg-slate-100 relative overflow-x-hidden">
            <HeaderComponent />
            <TestimonialsComponent />
            <MyStoryComponent />
        </div>
    );
}