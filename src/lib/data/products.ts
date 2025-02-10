import { Product } from '../../types/product';

// Mock product data
export const products: Product[] = [
    {
        id: "ben-hogan-mens-solid-ottoman-golf-polo",
        title: "Ben Hogan Men's Solid Ottoman Golf Polo Shirt",
        description: "This Ben Hogan Men's Solid Ottoman Golf Polo Shirt makes for versatile casual wear or golf apparel. Built-in moisture wicking and sun protection keep you feeling dry while blocking out harmful UV rays. Durable textured Ottoman fabric and a ribbed collar with three-button placket give it classic polo style. The solid color makes this golf top easy to pair up with any pants or shorts for style that looks great both on and off the course.",
        price: 29.99,
        colorImages: [
            {
                color: "Black",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739111974/blackcrawai/gzgvpnrsqbvkkpgobjoj.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739111990/blackcrawai/ycxhjwfqbiy2jl19dzce.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739111974/blackcrawai/rufqefpsr2siyqbx6tu2.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739111992/blackcrawai/rs8ihxhkewjf1xqqts4p.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739112295/blackcrawai/pupufiga8b0d4yrbq2ja.jpg"
                ]
            },
            {
                color: "White",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739114309/blackcrawai/t-shirt/white/n11y6kxkmuakqi4ht41v.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739114309/blackcrawai/t-shirt/white/mfvvk5xuv8itupnuyhni.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739114309/blackcrawai/t-shirt/white/nuhfiqm64pu1mkwgzk6k.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739114309/blackcrawai/t-shirt/white/bmntr2cn1hz0jlcrx7of.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739114309/blackcrawai/t-shirt/white/j9xmxrjupvk0p97elo3k.jpg"
                ]
            }
        ],
        images: [
            "https://res.cloudinary.com/div6hglgk/image/upload/v1739111974/blackcrawai/gzgvpnrsqbvkkpgobjoj.jpg"
        ],
        variants: [
            { id: "v1", size: "S", stock: 10, color: "Black" },
            { id: "v2", size: "M", stock: 15, color: "Black" },
            { id: "v3", size: "L", stock: 8, color: "Black" },
            { id: "v4", size: "XL", stock: 5, color: "Black" },
            { id: "v5", size: "2XL", stock: 3, color: "Black" },
            { id: "v6", size: "3XL", stock: 0, color: "Black" },
            { id: "v7", size: "S", stock: 7, color: "White" },
            { id: "v8", size: "M", stock: 12, color: "White" }
        ],
        colors: ["Black", "White"],
        rating: {
            average: 4.8,
            count: 136,
            distribution: {
                5: 93,
                4: 33,
                3: 8,
                2: 2,
                1: 0
            },
            satisfactionPercentage: 95
        },
        reviews: [
            {
                id: "r1",
                rating: 5,
                userName: "Ha favorite shirts!",
                comment: "this is my favorite shirt, do not buy this garbage, they give you poor quality reps, do not buy more clothes in shopname, on top of that you want to return it and they block you.. the material",
                date: "26 August 2023",
                color: "Black",
                size: "XL",
                likes: 22,
                dislikes: 9
            },
            {
                id: "r2",
                rating: 4,
                userName: "Cool as a cucumber",
                comment: "This shirt is made of polyester and I wasn't sure how that would go for me, but when I received it and tried it on, I realized that the weave is quite different from the polyester shirts of my childhood.",
                date: "12 July 2023",
                color: "White",
                size: "L",
                likes: 34,
                dislikes: 0
            }
        ],
        specifications: {
            packageDimensions: "27.3 x 24.8 x 4.9 cm; 180 g",
            features: ["Moisture Wicking", "Stretchy", "SPF/UV Protection", "Easy Care"],
            dateFirstAvailable: "August 08, 2023",
            department: "Mens"
        },

        seller: {
            name: "Ben Hogan",
            imageUrl: "https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/9763b6f3669dbafe005a9c383f638a0b.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg",
            isOfficial: true,
            location: "Fort Worth, Texas",
            rating: 96,
            chatResponse: 98
        }
    },
    {
        id: "fall-limited-edition-sneakers",
        title: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250.00,
        originalPrice: 300.00,
        discountPercentage: 16,
        colorImages: [
            {
                color: "Black",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120742/blackcrawai/shoe/black/ixve3eyx5cfgeh7puvqf.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120742/blackcrawai/shoe/black/ncjicd2y0lypuwholyou.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120745/blackcrawai/shoe/black/xcyq1abafmjm23yf0qe2.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120743/blackcrawai/shoe/black/xeinzawwubr6hvbmpft1.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120743/blackcrawai/shoe/black/jtnjozftal2amgobhxgp.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120744/blackcrawai/shoe/black/am0ypcm6vbeu09dx3b3i.jpg"
                ]
            },
            {
                color: "White",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120746/blackcrawai/shoe/white/vm3bn58unzdigk8mbvt8.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120746/blackcrawai/shoe/white/tlfbdcfwogovh2nvhdiz.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120745/blackcrawai/shoe/white/gtvt2cw5ib6wd56wmxs0.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120744/blackcrawai/shoe/white/ftkt5jhtqijmfnfhlssg.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120745/blackcrawai/shoe/white/yyr2jul6hr0a0yabyxqx.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120745/blackcrawai/shoe/white/c0qbhqlc68andpundfic.jpg"
                ]
            },
            {
                color: "Red",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120743/blackcrawai/shoe/red/vzjgnzw9rxmzmyvb6a8o.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120743/blackcrawai/shoe/red/fvq8fcanexxr0tswsitp.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120743/blackcrawai/shoe/red/tc0rmslajjxdhjdpbvrn.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120747/blackcrawai/shoe/red/ssmrqhqsmnegyskmqnug.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120744/blackcrawai/shoe/red/pso8nlwdigl0jjsa9ejf.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739120744/blackcrawai/shoe/red/kl7qk1vutqnhf6befpbz.jpg"
                ]
            }
        ],
        colors: ["Black", "White", "Red"],
        images: [
            "https://res.cloudinary.com/div6hglgk/image/upload/v1739120742/blackcrawai/shoe/black/ixve3eyx5cfgeh7puvqf.jpg"
        ],
        variants: [
            { id: "v1", size: "US 7", stock: 5, color: "White" },
            { id: "v2", size: "US 8", stock: 10, color: "White" },
            { id: "v3", size: "US 9", stock: 8, color: "White" },
            { id: "v4", size: "US 10", stock: 3, color: "White" },
            { id: "v5", size: "US 11", stock: 0, color: "White" },
            { id: "v6", size: "US 7", stock: 5, color: "Black" },
            { id: "v7", size: "US 8", stock: 10, color: "Black" },
            { id: "v8", size: "US 9", stock: 8, color: "Black" },
            { id: "v9", size: "US 10", stock: 3, color: "Black" },
            { id: "v10", size: "US 11", stock: 0, color: "Black" },
            { id: "v11", size: "US 7", stock: 5, color: "Red" },
            { id: "v12", size: "US 8", stock: 10, color: "Red" },
            { id: "v13", size: "US 9", stock: 8, color: "Red" },
            { id: "v14", size: "US 10", stock: 3, color: "Red" },
            { id: "v15", size: "US 11", stock: 0, color: "Red" }
        ],
        rating: {
            average: 4.5,
            count: 65,
            distribution: {
                5: 45,
                4: 15,
                3: 3,
                2: 2,
                1: 0
            },
            satisfactionPercentage: 92
        },
        reviews: [
            {
                id: "r1",
                rating: 5,
                userName: "SneakerFan",
                comment: "Great sneakers for everyday wear. Very comfortable and stylish.",
                date: "15 August 2023",
                color: "White",
                size: "US 9",
                likes: 12,
                dislikes: 1
            }
        ],
        specifications: {
            packageDimensions: "33 x 22 x 11 cm; 350 g",
            features: ["Durable Rubber Sole", "Breathable Mesh", "Cushioned Insole"],
            dateFirstAvailable: "July 15, 2023",
            department: "Mens"
        },
        seller: {
            name: "Sneaker World",
            imageUrl: "https://images-platform.99static.com//4t0a6QScHv-yC-QedcABgxNVbeI=/1317x1923:2000x2606/fit-in/500x500/99designs-contests-attachments/63/63681/attachment_63681242",
            isOfficial: true,
            location: "Jakarta",
            rating: 98,
            chatResponse: 95
        }
    },
    {
        id: "premium-cotton-jacket",
        title: "Premium Cotton Jacket",
        description: "A sleek and comfortable cotton jacket perfect for any casual occasion. Features premium stitching and durable materials.",
        price: 149.99,
        originalPrice: 179.99,
        discountPercentage: 16,
        colorImages: [
            {
                color: "Black",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739116696/blackcrawai/jacket/black/zuuyvlctdr4tmbqg4ell.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739116697/blackcrawai/jacket/black/zj1cfdtsal3jdlxoaoav.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739116696/blackcrawai/jacket/black/d2ciil7x9ny5gwowqnbk.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739116697/blackcrawai/jacket/black/b8rl2uofphj4ljuf4hbv.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739116697/blackcrawai/jacket/black/dfmiamh8b0r8zq35uhll.jpg"
                ]
            }
        ],
        images: [
            "https://res.cloudinary.com/div6hglgk/image/upload/v1739116696/blackcrawai/jacket/black/zuuyvlctdr4tmbqg4ell.jpg",
        ],
        variants: [
            { id: "v6", size: "S", stock: 12, color: "Navy" },
            { id: "v7", size: "M", stock: 8, color: "Navy" },
            { id: "v8", size: "L", stock: 15, color: "Navy" },
            { id: "v9", size: "XL", stock: 4, color: "Navy" }
        ],
        rating: {
            average: 4.7,
            count: 42,
            distribution: {
                5: 32,
                4: 8,
                3: 2,
                2: 0,
                1: 0
            },
            satisfactionPercentage: 95
        },
        reviews: [
            {
                id: "r1",
                rating: 5,
                userName: "JacketLover",
                comment: "Perfect fit and great quality material. Highly recommended!",
                date: "20 July 2023",
                color: "Navy",
                size: "M",
                likes: 8,
                dislikes: 0
            }
        ],
        specifications: {
            packageDimensions: "40 x 30 x 5 cm; 450 g",
            features: ["100% Cotton", "Machine Washable", "Premium Stitching"],
            dateFirstAvailable: "June 01, 2023",
            department: "Mens"
        },
        seller: {
            name: "Fashion Hub",
            imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-logo%2Cclothing-store-logo%2Cbrand-logo-design-template-a8a8172b2c1031a900b3b831c7eaf2e3_screen.jpg?ts=1704225632",
            isOfficial: true,
            location: "Bandung",
            rating: 94,
            chatResponse: 92
        }
    },
    {
        id: "classic-denim-jeans",
        title: "Classic Denim Jeans",
        description: "High-quality denim jeans with a modern fit. Perfect blend of style and comfort for everyday wear.",
        price: 89.99,
        images: [
            "https://res.cloudinary.com/div6hglgk/image/upload/v1739123467/blackcrawai/jeans/piqzbfullslty33cjyv8.jpg",
        ],
        colorImages: [],
        variants: [
            { id: "v10", size: "30x32", stock: 8 },
            { id: "v11", size: "32x32", stock: 12 },
            { id: "v12", size: "34x32", stock: 6 },
            { id: "v13", size: "36x32", stock: 0 }
        ],
        rating: {
            average: 4.5,
            count: 28,
            distribution: { 5: 20, 4: 5, 3: 2, 2: 1, 1: 0 },
            satisfactionPercentage: 92
        },
        reviews: [],
        specifications: {
            packageDimensions: "30 x 20 x 4 cm; 400 g",
            features: ["100% Cotton Denim", "Classic Fit", "Machine Washable"],
            dateFirstAvailable: "May 15, 2023",
            department: "Mens"
        },
        seller: {
            name: "Denim Co",
            imageUrl: "https://www.shutterstock.com/shutterstock/photos/793004944/display_1500/stock-vector-denim-co-dry-goods-suppliers-tee-design-for-print-793004944.jpg",
            isOfficial: true,
            location: "Jakarta",
            rating: 94,
            chatResponse: 96
        }
    },
    {
        id: "adventure-pro-backpack",
        title: "Adventure Pro Backpack",
        description: "The Adventure Pro Backpack is perfect for both daily commutes and weekend explorations. Features multiple compartments, laptop sleeve, water-resistant material, and ergonomic design for maximum comfort. The durable construction and smart organization make it ideal for work, travel, or outdoor adventures.",
        price: 79.99,
        originalPrice: 99.99,
        discountPercentage: 20,
        colorImages: [
            {
                color: "Navy",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186116/blackcrawai/bag/navy/zmskywrc49ppqrcacek4.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186117/blackcrawai/bag/navy/p3jebs83y6cwifhn2wqm.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186115/blackcrawai/bag/navy/i0b1qnpbomoxcnvfyxah.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186116/blackcrawai/bag/navy/f8hyorq52mferqviq5aa.jpg"
                ]
            },
            {
                color: "Grey",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186117/blackcrawai/bag/gray/bbczbzlgy5o2xbsnky72.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186116/blackcrawai/bag/gray/c9zkkx2x12gloj7merje.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186115/blackcrawai/bag/gray/hnjrzql2jdyoz152uanz.jpg",
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186116/blackcrawai/bag/gray/ebxa4vfifw7anlydcn7v.jpg"
                ]
            }
        ],
        images: [
            "https://res.cloudinary.com/div6hglgk/image/upload/v1739186116/blackcrawai/bag/navy/zmskywrc49ppqrcacek4.jpg"
        ],
        colors: ["Navy", "Grey"],
        variants: [
            { id: "v1", size: "One Size", stock: 15, color: "Navy" },
            { id: "v2", size: "One Size", stock: 12, color: "Grey" }
        ],
        rating: {
            average: 4.6,
            count: 89,
            distribution: {
                5: 62,
                4: 20,
                3: 5,
                2: 1,
                1: 1
            },
            satisfactionPercentage: 94
        },
        reviews: [
            {
                id: "r1",
                rating: 5,
                userName: "AdventureSeeker",
                comment: "Perfect backpack for both work and weekend trips. The laptop compartment is well-padded and the water bottle pockets are deep enough to hold my 32oz bottle.",
                date: "3 March 2024",
                color: "Navy",
                size: "One Size",
                likes: 15,
                dislikes: 1
            }
        ],
        specifications: {
            packageDimensions: "50 x 35 x 20 cm; 800 g",
            features: [
                "Water-Resistant",
                "Laptop Sleeve (fits up to 15.6\")",
                "Multiple Compartments",
                "Padded Shoulder Straps",
                "Chest Strap"
            ],
            dateFirstAvailable: "January 15, 2024",
            department: "Unisex"
        },
        seller: {
            name: "OutdoorGear Pro",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfh2BNL9L51u0B0aN2klAY22noGgDpkaqPw&s",
            isOfficial: true,
            location: "Seattle, Washington",
            rating: 97,
            chatResponse: 94
        }
    },
    {
        id: "chronos-elite-watch",
        title: "Chronos Elite Watch",
        description: "The Chronos Elite Watch combines classic design with modern functionality. This sophisticated timepiece features a premium stainless steel case, scratch-resistant sapphire crystal, and water resistance up to 50m. Perfect for both formal occasions and daily wear, it includes a date display and chronograph functions.",
        price: 199.99,
        originalPrice: 249.99,
        discountPercentage: 20,
        colorImages: [
            {
                color: "Silver",
                images: [
                    "https://res.cloudinary.com/div6hglgk/image/upload/v1739186492/blackcrawai/watch/qq9uwdbmwj02zuvxwxdv.jpg"
                ]
            }
        ],
        images: [
            "https://res.cloudinary.com/div6hglgk/image/upload/v1739186492/blackcrawai/watch/qq9uwdbmwj02zuvxwxdv.jpg"
        ],
        colors: ["Silver"],
        variants: [
            { id: "v1", size: "One Size", stock: 8, color: "Silver" },
        ],
        rating: {
            average: 4.8,
            count: 45,
            distribution: {
                5: 38,
                4: 5,
                3: 2,
                2: 0,
                1: 0
            },
            satisfactionPercentage: 96
        },
        reviews: [
            {
                id: "r1",
                rating: 5,
                userName: "WatchEnthusiast",
                comment: "Exceptional quality for the price point. The chronograph functions work smoothly and the sapphire crystal really does resist scratches well. Very pleased with this purchase.",
                date: "15 February 2024",
                color: "Silver",
                size: "One Size",
                likes: 12,
                dislikes: 0
            }
        ],
        specifications: {
            packageDimensions: "10 x 10 x 8 cm; 180 g",
            features: [
                "Stainless Steel Case",
                "Sapphire Crystal",
                "50m Water Resistance",
                "Chronograph Function",
                "Date Display"
            ],
            dateFirstAvailable: "February 1, 2024",
            department: "Unisex"
        },
        seller: {
            name: "Chronos Timepieces",
            imageUrl: "https://logopond.com/logos/df45ca180cdc3310aee9ee8c3bdfb841.png",
            isOfficial: true,
            location: "Geneva, Switzerland",
            rating: 98,
            chatResponse: 96
        }
    }
];