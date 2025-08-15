var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kömür Mavnası / Coal Barge',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
          id: 'First',
            alignment: 'centered',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.037, 41.061],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: ' ',
            location: {
                center: [29.039, 41.056],
                zoom: 16,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.026, 41.043],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'four',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.002, 41.033],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.989, 41.025],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'six',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.978, 41.020],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seven',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.969, 41.021],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eight',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.959, 41.030],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'nine',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.948, 41.039],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ten',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.938, 41.049],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eleven',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/gH63MmW/MEF-AAP-027-BAP-2025-07-04-11-39-03.png',
            description: '',
            location: {
                center: [28.948, 41.057],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twelve',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/TMdnGMvk/MEF-AAP-027-BAP-2025-06-29-15-11-01.png',
            description: '',
            location: {
                center: [28.946, 41.064],
                zoom: 17,
                pitch: 0,
                bearing: 0.00
             }
            }, 
    ]
};
