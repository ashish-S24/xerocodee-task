interface DescriptionPart {
    text: string;
    link?: string;
}

interface Service {
    icon: string;
    title: string;
    description: (string | DescriptionPart)[];
}


export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'about_us', label: 'About Us ' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
];


export const CHALLENGES = [
    {
        icon: '/monitor.svg',
        title: 'Front-end',
        description: 'Our frontend developers understand the delicate balance between aesthetics and functionality.'
    },
    {
        icon: '/simcard.svg',
        title: 'Back-end',
        description: 'Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.'
    },
    {
        icon: '/driver.svg',
        title: 'Data Analysts',
        description: 'Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.'
    }
]



export const SERVICES: Service[] = [
    {
        icon: '/monitor_dev.svg',
        title: 'Custom Software Development',
        description: [
            'Create ', { text: 'custom software', link: 'https://www.bairesdev.com/solutions/custom-software/' }, ' tailored for your unique needs, including ',
            { text: 'front-end', link: 'https://www.bairesdev.com/solutions/front-end/' },
            ', and core ',
            { text: 'back-end', link: 'https://www.bairesdev.com/solutions/back-end/' },
            ' technology.'
        ]
    },
    {
        icon: '/document-code.svg',
        title: 'QA and Testing',
        description: [
            'Create ', { text: 'custom software', link: 'https://www.bairesdev.com/solutions/custom-software/' }, ' tailored for your unique needs, including ',
            { text: 'front-end', link: 'https://www.bairesdev.com/solutions/front-end/' },
            ', and core ',
            { text: 'back-end', link: 'https://www.bairesdev.com/solutions/back-end/' },
            ' technology.'
        ]
    },
    {
        icon: '/data.svg',
        title: 'AI and Data Science',
        description: ['Use leading ', { text: 'AI, machine learning', link: 'https://www.bairesdev.com/solutions/machine-learning/' }, ' and data engineering technologies to unlock business value.']
    },
    {
        icon: '/brush.svg',
        title: 'UX/UI Design',
        description: ['Create beautiful, pixel-perfect, and easy-to-use ', { text: 'designs', link: 'https://www.bairesdev.com/solutions/ui-ux/' }, ' that delight your end users.']
    },
    {
        icon: '/mobile.svg',
        title: 'Mobile App Development',
        description: ['Build performant, scalable, and secure ', { text: 'mobile applications', link: 'https://www.bairesdev.com/solutions/mobile-app/' }, ' for ', { text: 'iOS', link: 'https://www.bairesdev.com/solutions/ios/' }, ' and ', { text: 'Android', link: 'https://www.bairesdev.com/solutions/android/' }, ' devices.']
    },
    {
        icon: '/shapes.svg',
        title: 'Platform and Infrastructure',
        description: ['Ensure applications are secure, fault tolerant and highly available with our ', { text: 'DevOps', link: 'https://www.bairesdev.com/solutions/devops/' }, ' and ', { text: 'Security', link: 'https://www.bairesdev.com/solutions/cybersecurity/' }, ' engineers.']
    },

]


export const COMPANY_LOGOS = [
    { icon_large: '/organization_icons/samsung-logo.png', icon_small: '/organization_icons/simple-icons-samsung.png' },
    { icon_large: '/organization_icons/microsoft-logo.png', icon_small: '/organization_icons/simple-icons-microsoft.png' },
    { icon_large: '/organization_icons/google-logo.png', icon_small: '/organization_icons/simple-icons-google.png' },
    { icon_large: '/organization_icons/slack-logo.png', icon_small: '/organization_icons/simple-icons-slack.png' },
    { icon_large: '/organization_icons/lg-logo.png', icon_small: '/organization_icons/simple-icons-lg.png' },
    { icon_large: '/organization_icons/sony-logo.png', icon_small: '/organization_icons/simple-icons-sony.png' },
]



export const REVIEWS = [
    {
        icon: '/review_1.png',
        head: '"Exceptional Solutions, Exceeded Expectations!"',
        review: '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
        name: 'Mary Johnson',
        title: 'CEO of TechCraft Solutions'
    },
    {
        icon: '/review_2.png',
        head: '"Transformed Our Business with Innovative Tech!"',
        review: '"We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their teams dedication to innovation and problem-solving is unmatched. Were grateful for their partnership."',
        name: 'Mark Williams',
        title: 'COO of InnovateNow Inc'
    },
    {
        icon: '/review_4.png',
        head: '"Sculpted User Experiences Beyond Imagination!"',
        review: '"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."',
        name: 'Emily Clark',
        title: 'CMO of Visionary Apps'
    },
    {
        icon: '/review_4.png',
        head: '"Sculpted User Experiences Beyond Imagination!"',
        review: '"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."',
        name: 'Emily Clark',
        title: 'CMO of Visionary Apps'
    }
]



export const REASONS = [
    {
        title: 'Expertise Across the Tech Spectrum',
        description: 'Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.',
        varient: "bg-white"
    },
    {
        title: 'Proven Track Record of Success:',
        description: 'Our portfolio is a testament to our ability to deliver impactful results.',
        varient: "green_gradient"
    },
    {
        title: 'Collaborative Approach, Transparent Communication:',
        description: 'We believe in working hand-in-hand with our clients.',
        varient: "bg-white"
    },
    {
        title: 'Tailored Solutions for Your Unique Needs:',
        description: 'We understand that no two projects are alike.',
        varient: "blue_gradient"
    }

]