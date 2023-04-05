/* eslint-disable jsx-a11y/iframe-has-title */
export default function CustomerSupport() {
    return (
        <div className="w-screen min-h-screen px-6 bg-slate-100 py-28 terms-text flex flex-col justify-center items-center">
            <div className="terms w-full text-primary text-secondary-color">
                <p>
                    <h1 className="text-3xl md:text-5xl"><strong>We'd Love To Hear From You</strong></h1>
                </p>
                <p>
                    <strong>For inquiries regarding our Knowledge Business Accelerator program</strong> {`, 
                    please reach out to your dedicated Client Success Coach for support, or 
                    email: `}<a href="/">support@thinkbig.com</a>{` for billing inquiries.`}
                </p>
                <p>
                    <strong>For inquiries regarding our Productized Profits program</strong> {`,please 
                    post in the FB:`} <a href="/">https://www.facebook.com/groups/bigthinkers/</a>
                </p>
                <p>
                    {`Additionally, we offer `} <strong>general phone support at (+41) 078 798 95 33</strong>
                </p>
                <p>
                    {`For mailing inquiries, our mailing address is as follows: 
                    `}
                    <strong>Hauptstr. 17, 8048 Zurich, Switzerland</strong>
                </p>
            </div>
            <div className="w-full lg:w-[681px] h-[300px] lg:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21609.42602777489!2d8.460666566561718!3d47.38895481500931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bc0e470d21d%3A0x1fcd415ee1d510e0!2sAltstetten%2C%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1678282728054!5m2!1sen!2sch"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}
