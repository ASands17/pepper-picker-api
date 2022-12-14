const picked = [
    {
        id: 1,
        name: 'Jalapeno',
        waterInfo: "Wait until soil is dry, then fully saturate",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 3-5 inches long and deep green or red",
        origin: "Mexico",
        flavorProfile: 'Vegetal, bright',
        scovilleUnits: '2,000 to 8,000',
        funFact: 'Jalapenos are the only chilli pepper to have been to space. In 1982, they were taken on board the Columbia space shuttle by William B. Lenoir. Those jalapenos had been grown by a fellow astronaut.',
        seedLink: 'https://www.burpee.com/pepper-hot-jalape-o-early-prod099710.html',
        imageUrl: 'https://images.thdstatic.com/productImages/4f767343-6ef8-4cdb-aeef-e0a72fd4a869/svn/bonnie-plants-vegetable-plants-2504-64_1000.jpg'
    },
    {
        id: 2,
        name: 'Habanero',
        waterInfo: "Wait until soil is dry, then fully saturate",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 2 inches long and green (or orange for heat lovers)",
        origin: "Caribbean Islands",
        flavorProfile: 'Smokey, fruity, floral, pungent',
        scovilleUnits: '100,000 to 350,000',
        funFact: "Back in 1999, Guinness ranked the Habanero as world’s hottest pepper. They have since been usurped by the Carolina Reaper pepper.",
        seedLink: 'https://www.burpee.com/pepper-hot-habanero-prod000805.html',
        imageUrl: 'https://www.isabeleats.com/wp-content/uploads/2019/09/habanero-peppers-small-2.jpg'
    },
    {
        id: 3,
        name: 'Shishito',
        waterInfo: "Water every 1-2 days as soil is dry, then water deeply",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 2-4 inches long and still green in color",
        origin: "Japan",
        flavorProfile: 'Peppery, fresh, grassy, citrusy',
        scovilleUnits: '100 to 1,000',
        funFact: 'The name, "Shishito", derives from the Japanese words "shishi", which means "lion", and "togarashi", which translated to "chili pepper". Hence, in Japan, it is known as the "Lion Head pepper".',
        seedLink: 'https://www.rareseeds.com/shishito-pepper',
        imageUrl: 'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/04/Pimiento-de-Padron-Peppers.jpg'
    },
    {
        id: 4,
        name: 'Chocolate Habanero',
        waterInfo: "Wait until soil is dry, water deeply once or twice a week. Decrease watering once peppers appear on plant for hotter peppers",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 1-2 inches in diameter and chocolatey red",
        origin: "Caribbean Islands",
        flavorProfile: 'Earthy, smokey, fruity',
        scovilleUnits: '300,000 to 425,000',
        funFact: 'Chocolate habaneros are typically used to make Jamaican jerk sauce.',
        seedLink: 'https://www.rareseeds.com/chocolate-habanero-pepper',
        imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-3e7442c711bcb1727b337f473b175126-lq'
    },
    {
        id: 5,
        name: 'Lesya',
        waterInfo: "Wait until soil is dry, then fully saturate",
        sunInfo: "Needs at least 8-12 hours of sun daily",
        harvestInfo: "Harvest when 3-5 inches long and deep green or red",
        origin: "Ukraine",
        flavorProfile: 'Sweet, juicy',
        scovilleUnits: '100 to 2,500',
        funFact: 'Lesyas are said to be one of the sweetest peppers out there!',
        seedLink: 'https://www.rareseeds.com/lesya-pepper',
        imageUrl: 'https://i.etsystatic.com/17951386/r/il/dfda86/2159636245/il_fullxfull.2159636245_3a0s.jpg'
    },
    {
        id: 6,
        name: 'Alma Paprika',
        waterInfo: "Keep soil evenly moist, give about one inch of water a week",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 1-2 inches long and red in color",
        origin: "Hungary",
        flavorProfile: 'Sweet, spicy',
        scovilleUnits: '2,000 to 10,000',
        funFact: 'Alma Paprika peppers can be dried and ground up to make paprika powder.',
        seedLink: 'https://www.superseeds.com/products/alma-paprika-pepper-70-days',
        imageUrl: 'https://www.kitchengardenseeds.com/media/catalog/product/cache/e6f8f2a0bfcd2d0ba57679670403adfa/a/l/alma-1.jpg'
    },
    {
        id: 7,
        name: 'Poblano',
        waterInfo: "Water regularly keeping soil damp but not saturated",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 4 inches long",
        origin: "Mexico",
        flavorProfile: 'Fresh, fruity',
        scovilleUnits: '1,000 to 2,000',
        funFact: 'The poblano has been one of the most popular peppers in Mexico for years. They are served dried, fried with whipped egg, stuffed, or used in sauces such as mole. They are also popular as a salsa ingredient.',
        seedLink: 'https://bonnieplants.com/products/poblano-ancho-pepper?_pos=1&_psq=poblano&_ss=e&_v=1.0',
        imageUrl: 'https://muybuenocookbook.com/wp-content/uploads/2022/06/poblano-peppers.jpg'
    },
    {
        id: 8,
        name: 'Cayenne',
        waterInfo: "Wait until soil is dry, then water deeply",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 4-6 inches long and red",
        origin: "Cayenne, French Guiana",
        flavorProfile: 'Peppery',
        scovilleUnits: '30,000 to 50,000',
        funFact: 'Cayenne is used worldwide to treat a variety of health conditions, including weak digestion, chronic pain, shingles, heart disease , sore throats, headaches, high cholesterol levels, poor circulation, and toothache .',
        seedLink: 'https://www.rareseeds.com/cayenne-long-thin-pepper',
        imageUrl: 'https://www.highmowingseeds.com/media/catalog/product/cache/6cbdb003cf4aae33b9be8e6a6cf3d7ad/2/7/2792_1.jpg'
    },
    {
        id: 9,
        name: 'Scotch Bonnet',
        waterInfo: "Wait until soil is dry, then water deeply. May need daily watering in hot weather",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when green color has changed to red, orange, peach or brown.",
        origin: "Caribbean Islands",
        flavorProfile: 'Smokey, fruity',
        scovilleUnits: '100,000 to 350,000+',
        funFact: "Scotch bonnets got their name because of their appearance. They grow in an odd, flattened shape that resembles a tam o\' shanter or a \'Scotsman\'s bonnet.\' ",
        seedLink: 'https://pepperjoe.com/collections/habanero-pepper-seeds/products/scotch-bonnet-rainbow-collection',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0915/1060/products/Scotch-Bonnet-Bounty-600-Yellow-Scotch-Bonnet_600x.jpg?v=1646923767'
    },
    {
        id: 10,
        name: 'Sweet Banana',
        waterInfo: "Keep soil moist but do not overwater",
        sunInfo: "Needs at least 8 hours of sun daily",
        harvestInfo: "Harvest when 2-3 inches long and light yellow or red",
        origin: "South America",
        flavorProfile: 'Tangy, slightly sweet',
        scovilleUnits: '0 to 500',
        funFact: 'Banana peppers are so named because of their resemblance to actual bananas. Their yellowish color and shape strongly resemble bananas when they are ripe on the plant.',
        seedLink: 'https://www.rareseeds.com/banana-pepper',
        imageUrl: 'https://s3.amazonaws.com/mygardenlife.com/plant-library/full/4943_38.jpg'
    },
    {
        id: 11,
        name: 'Tabasco',
        waterInfo: "Water every other day, or once soil is fully dry",
        sunInfo: "Prefers 6 hours of sun daily but will tolerate some shade",
        harvestInfo: "Harvest when 2 inches long and orange, or red. Picking when orange will help get a higher yield",
        origin: "Tabasco, Mexico",
        flavorProfile: 'Smokey',
        scovilleUnits: '30,000 to 50,000',
        funFact: 'Tabasco sauce is named after the tabasco peppers that it\'s made from. Today, the Tabasco company produces a wide variety of products and hot sauce flavors, from chipotle, jalapeño, and buffalo sauces to Tabasco olive oil and sriracha.',
        seedLink: 'https://www.rareseeds.com/tabasco-pepper',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5843057debbd1a9265704e03/244a87a4-7ecc-4931-bc31-7003a5d5a323/peppers.jpeg'
    },
    {
        id: 12,
        name: 'Mad Hatter',
        waterInfo: "Keep soil moist",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when large enough to use (any color)",
        origin: "USA",
        flavorProfile: 'Sweet, fruity, citrusy',
        scovilleUnits: '500 to 1,000',
        funFact: 'There’s a reason it’s called “Mad Hatter” and it’s not for the heat. No, the shape is one of the more unique you’ll find on the Scoville scale. Imagine a chili that’s been smushed, taking on a mitre-like shape in the process. It looks a lot like a bishop’s hat.',
        seedLink: 'https://www.burpee.com/pepper-hot-mad-hatter-hybrid-prod500125.html',
        imageUrl: 'https://www.burpee.com/media/catalog/product/3/5/3538b96f74acbd5bcbcde9d24216ccedeefe0548d85d6b2c96a5dfb875269123.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000&canvas=1000:1320'
    },
    {
        id: 13,
        name: 'Fish Pepper',
        waterInfo: "Keep soil lightly moist, not wet",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 3-5 inches long and deep green or red",
        origin: "United States",
        flavorProfile: 'Bold, tangy',
        scovilleUnits: '5,000 to 30,000',
        funFact: 'The African-American communities of the Chesapeake Bay area and major cities of the region (Baltimore and Philadelphia in particular) took to this chili and made it a culinary staple for oyster and crab houses. That’s where the name for this chili was coined.',
        seedLink: 'https://trueloveseeds.com/products/fish-pepper',
        imageUrl: 'https://assets.epicurious.com/photos/6065d92c8af215759419a4aa/1:1/w_1126,h_1126,c_limit/fish_pepper_HERO_VOG_final.jpg'
    },
    {
        id: 14,
        name: 'Habanada',
        waterInfo: "Wait until soil is dry, then water deeply",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 2-3 inches long and orange",
        origin: "USA",
        flavorProfile: 'Floral, citrusy, notes of guava',
        scovilleUnits: '0',
        funFact: 'The habanada pepper was developed by Michael Mazourek, a plant breeder at Cornell.',
        seedLink: 'https://www.rareseeds.com/habanada-sweet-pepper',
        imageUrl: 'https://www.highmowingseeds.com/media/catalog/product/cache/6cbdb003cf4aae33b9be8e6a6cf3d7ad/2/8/2824.jpg'
    },
    {
        id: 15,
        name: 'Serrano',
        waterInfo: "Keep soil slightly moist, not wet",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Harvest when 2-4 inches long and firm",
        origin: "Mexico",
        flavorProfile: 'Bright, grassy, smokey when red in color',
        scovilleUnits: '10,000 to 23,000',
        funFact: 'Serrano peppers are hot chile peppers named for the mountain ridges in Mexico where they originated. They\'re considered a fruit, and they\'re popular in Mexican cuisine—only second to the jalapeño pepper in popularity.',
        seedLink: 'https://seedsofchange.com/seeds/vegetables/organic-serrano-pepper-seeds',
        imageUrl: 'https://www.isabeleats.com/wp-content/uploads/2019/09/serrano-pepper-small-1.jpg'
    },
    {
        id: 16,
        name: 'Carolina Reaper',
        waterInfo: "Let soil dry, then water deeply. Do not overwater.",
        sunInfo: "Needs at least 6 hours of sun daily",
        harvestInfo: "Pick when peppers change from green to red for the most heat",
        origin: "USA",
        flavorProfile: 'Fruity, sweet',
        scovilleUnits: '1,400,000 to 2,200,000',
        funFact: 'Be warned... this is the hottest pepper in the world!',
        seedLink: 'https://pepperjoe.com/collections/carolina-reaper-seeds/products/carolina-reaper',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1537/5553/products/12980_1024x1024.jpg?v=1605192353'
    }
]

module.exports = picked;
// export default picked;
