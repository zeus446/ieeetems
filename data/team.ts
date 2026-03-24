import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
    // ================= CORE =================
    {
        id: 1,
        name: 'Keshava AK',
        role: 'Chairman',
        image: '/assets/members/KESHAVA AK/IMG-20260115-WA0067.jpg',
        bio: 'Leads the IEEE TEMS student chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/keshavaak/' },
        size: 'large',
        department: 'core',
        isCoHead: false
    },
    {
        id: 2,
        name: 'Amaeya Sesha Narayanan',
        role: 'Vice Chairperson',
        image: '/assets/members/AMAEYA SESHA NARAYANAN/IMG-20260115-WA0071.jpg',
        bio: 'Supports the Chairman and assists in leading the chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/amaeya-sesha-narayanan-57490726a/' },
        size: 'medium',
        imagePosition: 'center 20%',
        department: 'core',
        isCoHead: false
    },
    {
        id: 3,
        name: 'Mohamed Basheer',
        role: 'Secretary',
        image: '/assets/members/MOHAMED BASHEER/IMG-20260115-WA0064.jpg',
        bio: 'Handles chapter documentation and records.',
        socials: { linkedin: 'https://www.linkedin.com/in/mohamed-basheer/' },
        size: 'small',
        department: 'core',
        isCoHead: false
    },
    {
        id: 4,
        name: 'Prakhar Srivastava',
        role: 'Treasurer',
        image: '/assets/members/PRAKHAR SRIVASTAV/IMG-20260115-WA0068.jpg',
        bio: "Manages the chapter's finances and budget.",
        socials: { linkedin: 'https://www.linkedin.com/in/prakhar-s39/' },
        size: 'small',
        department: 'core',
        isCoHead: false
    },

    // ================= TECHNICAL =================
    {
        id: 5,
        name: 'Tamil Adhavan',
        role: 'Technical Lead',
        image: '/assets/members/TAMIL ADHAVAN/IMG-20260115-WA0066.jpg',
        bio: 'Oversees technical projects and activities.',
        socials: { linkedin: 'https://www.linkedin.com/in/tamiladhavan/' },
        size: 'medium',
        department: 'technical',
        isCoHead: false
    },
    {
        id: 6,
        name: 'Siddharth S',
        role: 'Technical Co-Lead',
        image: '/assets/members/Siddharth S/IMG-20260205-WA0005~2.jpg',
        bio: 'Supports technical initiatives and development activities within the chapter.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'technical',
        isCoHead: true
    },

    // ================= PUBLIC RELATIONS =================
    {
        id: 7,
        name: 'Akshaya KV',
        role: 'Public Relations Lead',
        image: '/assets/members/AKSHAYA KV/IMG-20260115-WA0075.jpg',
        bio: 'Manages communication and outreach for the chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/akshaya-kv-a30877348/' },
        size: 'small',
        department: 'pr',
        isCoHead: false
    },
    {
        id: 8,
        name: 'Abhay',
        role: 'Public Relations Co-Lead',
        image: '/assets/members/Abhay/Abhay.jpg',
        bio: 'Assists in managing communications and public outreach.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'pr',
        isCoHead: true
    },
     {
        id: 13,
        name: 'Abhinaya',
        role: 'Social Media Co-Lead',
        image: '/assets/members/Abhinaya/Abhinaya.jpg',
        bio: 'Supports social media strategy and online engagement.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'pr',
        isCoHead: true
    },

    // ================= ENTREPRENEURSHIP =================
    {
        id: 9,
        name: 'Sai Abijeeth',
        role: 'Entrepreneurship Lead',
        image: '/assets/members/SAI ABIJEETH/Sai.jpg',
        bio: 'Drives entrepreneurial initiatives and innovation programs.',
        socials: { linkedin: '#' },
        size: 'medium',
        department: 'entrepreneurship',
        isCoHead: false
    },
    {
        id: 10,
        name: 'Vijeta Sargam',
        role: 'Entrepreneurship Co-Lead',
        image: '/assets/members/Vijeta Sargam/Vijeta.jpg',
        bio: 'Supports entrepreneurship initiatives and startup-focused activities.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'entrepreneurship',
        isCoHead: true
    },
    {
        id: 11,
        name: 'Akhilesh',
        role: 'Entrepreneurship Co-Lead',
        image: '/assets/members/Akhilesh/Akhilesh.jpg',
        bio: 'Collaborates on entrepreneurship and startup-focused activities.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'entrepreneurship',
        isCoHead: true
    },

    // ================= SOCIAL MEDIA =================
    {
        id: 12,
        name: 'Nitheesh',
        role: 'Social Media Lead',
        image: '/assets/members/Nitheesh/nitheesh.jpg',
        bio: 'Leads social media strategy and digital engagement.',
        socials: { linkedin: '#' },
        size: 'medium',
        department: 'social',
        isCoHead: false
        
    },

    // ================= EVENTS =================
    {
        id: 14,
        name: 'Shrinesh T M',
        role: 'Events Management Lead',
        image: '/assets/members/SHRINESH T/srinesh.jpg',
        bio: 'Plans and executes chapter events and workshops.',
        socials: { linkedin: 'https://www.linkedin.com/in/shrinesh-t-m-788a29293/' },
        size: 'medium',
        department: 'events',
        isCoHead: false
    },

    // ================= CREATIVE =================
    {
        id: 15,
        name: 'Ayisha Hemni K',
        role: 'Creative Lead',
        image: '/assets/members/AYISHA HEMINI/Ayisha_Hemini.jpeg',
        bio: 'Leads creative design and branding initiatives.',
        socials: { linkedin: '#' },
        size: 'medium',
        department: 'creative',
        isCoHead: false
    },
    {
        id: 16,
        name: 'Anuska',
        role: 'Creative Co-Lead',
        image: '/assets/members/Anuska/Anuska.jpg',
        bio: 'Supports branding, graphics, and creative direction.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'creative',
        isCoHead: true
    },
    {
        id: 17,
        name: 'Azhara KS',
        role: 'Creative Co-Lead',
        image: '/assets/members/Azhara.ks/Azhara.jpg',
        bio: 'Supports design strategy and creative execution.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'creative',
        isCoHead: true
    },
    {
        id: 18,
        name: 'Kavyadharshini M',
        role: 'Creative Co-Lead',
        image: '/assets/members/Kavyadharhshini M/Kavyadharshini.jpg',
        bio: 'Contributes to visual branding and creative content development.',
        socials: { linkedin: '#' },
        size: 'small',
        department: 'creative',
        isCoHead: true
    }
];

export interface Advisor {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    socials: {
        linkedin?: string;
    };
}

export const ADVISORS: Advisor[] = [
    {
        id: 1,
        name: 'Abishai Gosula',
        role: 'Founding Advisor',
        image: '/assets/members/ABISHAI GOSULA/Abishai_new.jpeg',
        bio: "An integral pillar in founding IEEE TEMS SRM, Abishai's dedication and strategic guidance helped establish the chapter's strong foundation for innovation and leadership.",
        socials: { linkedin: 'https://www.linkedin.com/in/abishai-george-e-gosula/' }
    }
];