import { Link } from "react-router-dom";

const copyright = "Copyright 2023 Think Big LLC. www.thinkbig.com"
const footerItems = [
    {
        name:'Terms', 
        link:"/termsofservice",
    },
    {
        name:'Privacy Policy', 
        link:"/",
    },
    {
        name:'Disclaimer', 
        link:"/",
    },
    {
        name:'Customer Support', 
        link:"/",
    }
]
const facebookAssociation = 'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.'
const disclaimer = 'DISCLAIMER: The sales figures stated above are my personal sales figures. Please understand my results are not typical, I’m not implying you’ll duplicate them (or do anything for that matter). I have the benefit of doing consulting 5+ years, and have an established following as a result. The average person who follows any “how to” information gets little to no results. I’m using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you’re not willing to accept that, this is not for you.'

export default function FooterComponent() {
    return (
        <footer className="flex flex-col justify-center items-center w-screen bg-primary-color text-alt text-sm md:text-md px-4 md:px-[200px] py-12">
            <p>{copyright}</p>
            <div className="flex my-4">
                {footerItems.map((item, i) => {
                    return <p className='cursor-pointer underline mx-4' key={i}><Link to={item.link}>{item.name}</Link></p>
                })}
            </div>
            <div className="">
                <p>{facebookAssociation}</p>
                <p>{disclaimer}</p>
            </div>
        </footer>
    );
}