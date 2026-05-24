<?php

return [
    'name' => env('PORTFOLIO_NAME', 'Angelo Soliven'),
    'title' => 'Software Engineer',
    'tagline' => 'Relentless self-taught developer, passionate about crafting Next.js solutions, and driven to grow in tech.',
    'handle' => '@gelo.ge1o',
    'profile_url' => 'https://www.instagram.com/gelo.ge1o/',
    'profile_image' => '/images/profile.jpg',
    'availability' => 'Available for collaborations',
    'reference_url' => env('PORTFOLIO_REFERENCE_URL', 'https://myportfoliome.vercel.app/'),
    'contact_email' => env('PORTFOLIO_CONTACT_EMAIL', 'hello@example.com'),
    'cv_filename' => env('PORTFOLIO_CV_FILENAME', 'Angelo_Soliven_CV.pdf'),
    'copyright_year' => (int) date('Y'),

    'about' => [
        "I'm Angelo Soliven, a passionate self-taught Nigerian software engineer and an aspiring AI & Machine Language Expert with over 2yr +2 months of experience and a strong drive for building impactful web experiences.",
        "I've built and shipped real-world AI products and I'm just getting started. I love solving real problems through tech, learning fast, and creating beautiful, high-performing user interfaces.",
        "I'm currently working with Extern on advanced full-stack projects, diving deeper into AI, and actively preparing to land a role at a world-class company like Google. I'm also open to freelance and collaboration opportunities.",
        "I'm also actively building my presence in the tech community. With over 200+ followers on X, I've learned and connected with top minds, mentors in the indie hacker and maker space — including people like @Marc Lou, @johnrushx, @tdinh_me, and @levelsio. Their guidance and content have helped shape how I think about product-building, growth, and shipping fast.",
    ],

    'about_highlights' => ['Extern', 'Google'],
    'mentors' => ['@Marc Lou', '@johnrushx', '@tdinh_me', '@levelsio'],

    'experience_summary' => "As a self-taught dev, I've built impactful projects and AI products, solving real problems with Next.js, TypeScript, and AI. I'm actively seeking opportunities to gain hands-on experience, contribute to meaningful products, and grow professionally. If you're looking for someone hungry to learn and build — let's connect.",

    'skills' => [
        'Languages' => ['JavaScript', 'TypeScript', 'PHP', 'Python', 'C#'],
        'Frameworks' => ['React', 'Next.js', 'Laravel', 'Node.js', '.NET', 'Pega'],
        'Other' => ['AI / ML', 'REST APIs', 'Git', 'Bootstrap', 'Azure', 'MySQL', 'Docker'],
    ],

    'projects' => [
        [
            'title' => 'Jude Solar',
            'description' => 'Premium solar solutions for homes and businesses. The company delivers high-quality solar installations designed to reduce electricity costs by up to 80%, providing long-term energy independence and sustainability.',
            'url' => 'https://myportfoliome.vercel.app/',
            'image' => null,
        ],
        [
            'title' => 'ZendSolv',
            'description' => 'Implemented a production-grade company website for a digital solutions firm specializing in web development and end-to-end AI systems, delivering real-world software for real clients and measurable business impact.',
            'url' => 'https://myportfoliome.vercel.app/',
            'image' => null,
        ],
        [
            'title' => 'StartupFounder',
            'description' => 'A beautifully designed startup platform for developers to showcase their startups and for users to discover innovative tech projects. Built using modern frameworks for performance and scalability.',
            'url' => 'https://myportfoliome.vercel.app/',
            'image' => null,
        ],
        [
            'title' => 'Halamd',
            'description' => 'Halamd is an AI Mood Stylist — your personal, intelligent fashion companion that curates outfits based on your mood, style preferences, and the occasion. Using advanced AI and machine learning, it analyzes your emotional state and suggests clothing combinations that match your vibe.',
            'url' => 'https://myportfoliome.vercel.app/',
            'image' => null,
        ],
    ],

    'experience' => [
        [
            'role' => 'Founder and Developer',
            'company' => 'MideCode',
            'period' => '2024–Present',
        ],
        [
            'role' => 'Externship AI & Machine Learning',
            'company' => 'Extern',
            'period' => '2025–Present',
        ],
        [
            'role' => 'Backend Engineer',
            'company' => 'Zendsolv',
            'period' => '2025–Present',
        ],
        [
            'role' => 'Frontend Developer',
            'company' => 'Bright Sparks Academy',
            'period' => '2025–2026',
        ],
    ],

    'education' => [
        [
            'degree' => 'Self-taught Software Engineering',
            'school' => 'Continuous learning via projects & community',
            'period' => 'Ongoing',
        ],
    ],

    'contact_intro' => "Whether it's a freelance gig, a collaboration, or a full-time opportunity, or want to say hi? I'm always excited to connect with people who love building meaningful things. Drop a message, and I'll get back to you as soon as I can!",

    'social' => [
        ['type' => 'x', 'label' => 'X', 'url' => 'https://x.com/gelo.ge1o'],
        ['type' => 'github', 'label' => 'GitHub', 'url' => 'https://github.com/gelo.ge1o'],
        ['type' => 'linkedin', 'label' => 'LinkedIn', 'url' => 'https://www.linkedin.com/in/angelo-soliven'],
        ['type' => 'email', 'label' => 'Email', 'url' => 'mailto:' . env('PORTFOLIO_CONTACT_EMAIL', 'hello@example.com')],
    ],
];
