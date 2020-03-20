var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Key Events in the Supply Chain History',
    subtitle: 'Let us walk through a timeline of Supply Chain devlopments of some major companies',
    byline: 'By Angel Lin',
    footer: '',
    chapters: [
        {
            id: 'river-rouge',
            title: '1927 Ford',
            image: 'https://corporate.ford.com/content/dam/corporate/en/company/history/1913_Assembly_Line_of_FMC.jpg',
            description: 'In the 1920s, Henry Ford devised a manufacturing system that outperformed every other manufacturing operation of its day. Ford’s plant at River Rouge (near Dearborn, Michigan), along with another plant in Detroit, produced about 15 million Model T automobiles by 1927.',
            location: {
                center: [-83.12820, 42.27442],
                zoom: 13.63,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aichi',
            title: '1973 Toyota',
            image: 'https://www.peterjthomson.com/wp-content/uploads/2012/09/Toyota-Production-System-Lean-1024x683.jpg',
            description: 'The Toyota Production System (TPS) is an integrated socio-technical system developed mainly by Taiichi Ohno and Eiji Toyoda to efficiently organize manufacturing and logistics, including the interaction with suppliers and customers, to minimize cost and waste.',
            location: {
                center: [137.30346, 35.15043],
                zoom: 13.81,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bentonville',
            title: '1983 Walmart',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkDJQPyRsjdDpUEebP_s8xPMG3ePJ6_rqyoz5N1u3ppwwKpqbQ',
            description: 'To make its distribution process more efficient, Walmart made use of a logistics techniqueknown as ‘cross-docking.’ In this system, the finished goods were directly picked up from themanufacturing plant of a supplier, sorted out and then directly supplied to the customers. Thesystem reduced the handling and storage of finished goods, virtually eliminating the role of thedistribution centers and stores.',
            location: {
                center: [-94.25384, 36.34477],
                zoom: 10.12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'armonk',
            title: '2001 IBM',
            image: 'https://www.vpr.org/sites/vpr/files/styles/medium/public/201407/vt-historical-society-IBM-plant-1961.png',
            description: 'IBM begins successful 10 year effort to fully integrate its global supply chain.',
            location: {
                center: [-73.69933, 41.12456],
                zoom: 11.31,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
