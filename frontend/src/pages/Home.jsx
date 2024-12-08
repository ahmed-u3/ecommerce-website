import React, { useContext, useEffect } from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import Skeleton from '../components/Skeleton';
import { LoadingContext } from '../context/LoadingContext';

// Skeletons sections 
const sections = [
    { component: Hero, skeleton: () => <Skeleton className="h-64 w-full mb-6" /> },
    { component: LatestCollection, skeleton: () => <Skeleton className="h-48 w-full mb-6" /> },
    { component: BestSeller, skeleton: () => <Skeleton className="h-48 w-full mb-6" /> },
    { component: OurPolicy, skeleton: () => <Skeleton className="h-32 w-full mb-6" /> },
    { component: NewsletterBox, skeleton: () => <Skeleton className="h-48 w-full mb-6" /> },
];

const Home = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => setLoading(false), 500); // Simulated loading time
            return () => clearTimeout(timer); // Cleanup
        }
    }, [loading, setLoading]);

    return (
        <div>
            {sections.map(({ component: Component, skeleton }, index) => (
                <div key={index}>
                    {loading ? skeleton() : <Component />}
                </div>
            ))}
        </div>
    );
};




// return (
//     <div>
//         <Hero />
//         <LatestCollection/>
//         <BestSeller/>
//         <OurPolicy/>
//         <NewsletterBox/>
//     </div>
// )
export default Home;

