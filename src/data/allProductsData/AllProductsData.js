import modernSofa from '../../assets/images/modern-sofa.avif'
import LeatherSofa from '../../assets/images/leatherSofa.avif'
import QueenBed from '../../assets/images/QueenBed.avif'
import diningTable from '../../assets/images/diningtable.avif'
import chair from '../../assets/images/chair.avif'
import wardrobe from '../../assets/images/wardrobe1.webp'
import coffeeTable from '../../assets/images/cofeetable.jpg'
import shelf from '../../assets/images/shelf.webp'
import nightstand from '../../assets/images/nightstand.webp'
import tvStand from '../../assets/images/tvStand.webp'
import LShapedSofa from '../../assets/images/l_shaped_sofa.avif'
import VelvedSofa from '../../assets/images/velvet_sofa.jpg'
import ChesterfieldSofa from '../../assets/images/Chesterfield_Sofa.webp'
import ReclinerSofa from '../../assets/images/Recliner_Sofa.png'
import KingSizeBed from '../../assets/images/King_size_Bed.png'
import platformBed from '../../assets/images/platform_bed.webp'
import StorageBed from '../../assets/images/Storage_bed.png'
import BunkBed from '../../assets/images/BunkBed.png'
import CanopyBed from '../../assets/images/CanopyBed.png'


const furnitureProducts = [
  {
    image: modernSofa,
    name: 'Modern Sofa',
    price: 799,
    id: 'sofa-1',
    description: 'This modern sofa is designed with sleek lines and soft cushioning that offers maximum comfort. Upholstered in durable fabric, it is built to withstand daily use. The versatile neutral color blends with any décor, making it an excellent centerpiece for both casual and formal living rooms. Ideal for lounging, entertaining, or relaxing after a long day.'
  },
  {
    image: LeatherSofa,
    name: 'Leather Sofa',
    price: 899,
    id: 'sofa-2',
    description: 'This leather sofa offers a luxurious touch with its premium material, sleek design, and lasting durability. Its smooth surface is easy to clean, and the cushioned seating ensures comfort for hours. Ideal for modern interiors, it serves as both a statement piece and a practical addition, balancing elegance with everyday functionality in any room.'
  },
  {
    image: LShapedSofa  ,
    name: 'L-Shaped Sofa',
    price: 950,
    id: 'sofa-3',
    description: 'Spacious and cozy, this L-shaped sofa provides ample seating for families or guests. The angular design fits snugly into corners, maximizing room space while enhancing comfort. It features high-resilience foam cushions and supportive upholstery. Its modern silhouette pairs beautifully with minimalist interiors, making it ideal for lounging, movie nights, or hosting gatherings.'
  },
  {
    image: VelvedSofa,
    name: 'Velvet Sofa',
    price: 720,
    id: 'sofa-4',
    description: 'This velvet sofa is the ultimate blend of comfort and elegance. The soft-touch velvet upholstery adds a luxurious texture, while the deep seating offers relaxation after a long day. It stands on solid legs for stability and is a stylish choice for any sophisticated living area that seeks charm and plush comfort.'
  },
  {
    image: ChesterfieldSofa,
    name: 'Chesterfield Sofa',
    price: 1050,
    id: 'sofa-5',
    description: 'A timeless classic, the Chesterfield Sofa features rolled arms, deep tufting, and a sturdy frame. Upholstered in rich fabric, it offers both elegance and comfort. The iconic silhouette adds vintage flair to traditional or contemporary homes. Ideal for formal lounges, libraries, or cozy living rooms that demand sophistication and style.'
  },
  {
    image: ReclinerSofa,
    name: 'Recliner Sofa',
    price: 1100,
    id: 'sofa-6',
    description: 'This recliner sofa combines ultimate relaxation with premium design. Featuring adjustable reclining mechanisms and plush padding, it supports your back and legs during rest. Whether watching movies or taking naps, it delivers consistent comfort. The sturdy build ensures long-lasting use in any lounge, entertainment space, or family room.'
  },
  {
    image: QueenBed,
    name: 'Queen Bed',
    price: 600,
    id: 'bed-1',
    description: 'The queen bed offers a perfect balance of space and comfort. Its sturdy wooden frame and soft upholstered headboard provide reliable support and style. Ideal for medium to large bedrooms, this bed promotes restful sleep and elevates the aesthetic of your space with its simple yet elegant design.'
  },
  {
    image: KingSizeBed,
    name: 'King Size Bed',
    price: 850,
    id: 'bed-2',
    description: 'Experience spacious luxury with this king size bed. Designed with a high-quality frame and a plush headboard, it ensures restful nights. Ideal for couples or individuals who enjoy extra room, it suits modern and classic interiors. A centerpiece that combines comfort, elegance, and durability for a perfect bedroom retreat.'
  },
  {
    image: platformBed,
    name: 'Platform Bed',
    price: 700,
    id: 'bed-3',
    description: 'Minimalist in style, this platform bed eliminates the need for a box spring with its solid support slats. It features clean lines and a low-profile design, perfect for contemporary interiors. Durable and space-efficient, it’s ideal for apartments or rooms where you want simplicity without sacrificing functionality or comfort.'
  },
  {
    image: StorageBed,
    name: 'Storage Bed',
    price: 780,
    id: 'bed-4',
    description: 'A smart solution for small spaces, this storage bed includes under-bed drawers for organizing clothes, bedding, or accessories. With a sturdy frame and upholstered headboard, it combines comfort and practicality. Ideal for anyone who needs extra storage without compromising on style or sleeping comfort.'
  },
  {
    image: BunkBed,
    name: 'Bunk Bed',
    price: 650,
    id: 'bed-5',
    description: 'This bunk bed is ideal for kids’ rooms, shared spaces, or compact homes. It features strong metal rails, a built-in ladder, and a stable frame to ensure safety and comfort. Designed for durability and space-saving, it’s a practical and fun solution for siblings or overnight guests.'
  },
  {
    image: CanopyBed,
    name: 'Canopy Bed',
    price: 980,
    id: 'bed-6',
    description: 'The canopy bed is a bold statement piece with tall posts for draping fabric or lights. Its classic frame adds charm and structure to the bedroom, creating a cozy retreat. Built from solid wood, it supports restful sleep while allowing you to personalize your space with creative canopy styling.'
  },

  {
    image: diningTable,
    name: 'Dining Table',
    price: 500,
    id: 'table-1',
    description: 'This rectangular dining table offers a perfect combination of functionality and elegance. Crafted from solid wood, it features a smooth surface and robust legs for stability. Ideal for family meals or entertaining guests, it comfortably seats multiple people. Its timeless design complements various interior styles, making it a versatile centerpiece for dining rooms or kitchens of any size.'
  },
  {
    image: diningTable,
    name: 'Round Table',
    price: 550,
    id: 'table-2',
    description: 'The round table is ideal for intimate settings, encouraging conversation and connection. Its compact design fits smaller spaces without sacrificing elegance. Made from high-quality wood with a smooth finish, it is both sturdy and easy to maintain. A great choice for kitchens or dining areas where space-saving furniture is needed without compromising on charm and style.'
  },
  {
    image: diningTable,
    name: 'Glass Table',
    price: 620,
    id: 'table-3',
    description: 'This modern glass table features a tempered glass top and sturdy metal legs, creating an airy and elegant dining experience. The transparent surface reflects light beautifully and is easy to clean. Designed to fit contemporary interiors, it blends style and practicality for dining rooms that value minimalism and sleek, open aesthetics.'
  },
  {
    image: diningTable,
    name: 'Extendable Table',
    price: 700,
    id: 'table-4',
    description: 'This extendable table is designed to adapt to your hosting needs. Whether serving a family dinner or entertaining guests, the hidden extension panel expands easily. Built with solid wood and finished with attention to detail, it blends practicality with elegance. Perfect for homes that need flexibility in their dining area without sacrificing style.'
  },
  {
    image: diningTable,
    name: 'Wooden Table',
    price: 580,
    id: 'table-5',
    description: 'Crafted from solid wood, this dining table offers durability and a warm, natural look. The classic design suits a variety of interiors—from rustic to modern. Its spacious top provides ample room for meals, decor, or work. Perfect for everyday use or special occasions, this table adds timeless charm to your dining space.'
  },
  {
    image: diningTable,
    name: 'Metal Frame Table',
    price: 530,
    id: 'table-6',
    description: 'This industrial-style table combines a rustic wood top with a bold metal frame for a sturdy, modern aesthetic. Ideal for lofts, studios, or contemporary homes, it delivers durability and visual contrast. The mix of materials adds depth and style, making it perfect for both casual meals and formal gatherings.'
  },
  {
    image: chair,
    name: 'Dining Chair',
    price: 120,
    id: 'chair-1',
    description: 'The dining chair combines comfort and simplicity with a cushioned seat and supportive backrest. Its clean design pairs effortlessly with any table style, while the sturdy legs ensure long-lasting use. Upholstered in soft, easy-to-clean fabric, it’s great for everyday dining or special occasions. A versatile addition to any dining room.'
  },
  {
    image: chair,
    name: 'Accent Chair',
    price: 140,
    id: 'chair-2',
    description: 'This accent chair adds personality and style to any space. Featuring soft upholstery and a supportive frame, it works well in reading corners, bedrooms, or living rooms. Its modern silhouette enhances the décor while offering a cozy spot to relax. A perfect combination of function and flair for any interior.'
  },
  {
    image: chair,
    name: 'Office Chair',
    price: 180,
    id: 'chair-3',
    description: 'Designed for productivity and comfort, this office chair features ergonomic support, adjustable height, and smooth-rolling casters. Its cushioned seat and breathable backrest ensure comfort during long work hours. Built with a sturdy frame and modern style, it’s a must-have for home offices or professional workspaces that prioritize performance and design.'
  },
  {
    image: chair,
    name: 'Rocking Chair',
    price: 160,
    id: 'chair-4',
    description: 'This classic rocking chair provides a calming motion perfect for nurseries, porches, or cozy living spaces. Its curved wooden base and supportive back make it ideal for relaxing moments. Built for durability and style, it complements a range of decors while offering a peaceful retreat from daily stress.'
  },
  {
    image: chair,
    name: 'Recliner Chair',
    price: 220,
    id: 'chair-5',
    description: 'The recliner chair offers luxurious comfort with its padded back, seat, and leg rest. Easily adjust the position to suit your needs—whether lounging, reading, or napping. Its durable construction and sleek design fit seamlessly in any living room or home theater. Relaxation has never been this convenient and stylish.'
  },
  {
    image: chair,
    name: 'Armchair',
    price: 190,
    id: 'chair-6',
    description: 'This plush armchair combines soft cushioning with a supportive structure, making it a cozy addition to any room. Its neutral fabric and classic design pair well with existing furniture. Whether used for reading, chatting, or simply relaxing, it adds comfort and charm to bedrooms, living rooms, or offices.'
  },

  {
    image: wardrobe,
    name: 'Sliding Wardrobe',
    price: 900,
    id: 'wardrobe-1',
    description: 'The sliding wardrobe is a sleek, space-saving storage solution ideal for modern bedrooms. Its smooth-gliding doors make it perfect for tight areas where swing doors aren’t practical. Inside, it features spacious compartments and shelves for organizing clothes, shoes, and accessories. Built with durable materials, it combines functionality and contemporary style in one beautiful, compact design.'
  },
  {
    image: wardrobe,
    name: 'Mirrored Wardrobe',
    price: 950,
    id: 'wardrobe-2',
    description: 'This mirrored wardrobe brings elegance and utility to your room. Full-length mirror panels enhance light and space while providing a convenient dressing option. Inside, multiple compartments offer organized storage for clothes and accessories. Sturdy, stylish, and space-conscious, it’s a practical choice for anyone wanting a wardrobe that’s as decorative as it is functional.'
  },
  {
    image: wardrobe,
    name: 'Wooden Wardrobe',
    price: 870,
    id: 'wardrobe-3',
    description: 'Crafted from solid wood, this classic wardrobe delivers timeless beauty and lasting strength. It includes hanging rails, shelving, and drawers for versatile storage options. The rich wood grain and smooth finish complement traditional and rustic interiors. Ideal for bedrooms in need of warmth and organization, this wardrobe blends practicality with enduring charm.'
  },
  {
    image: wardrobe,
    name: 'Two-Door Wardrobe',
    price: 760,
    id: 'wardrobe-4',
    description: 'This compact two-door wardrobe is perfect for smaller spaces without sacrificing storage. Inside, it offers a hanging rail and shelving to keep garments organized. Its clean design and minimalist aesthetic make it a great fit for modern or transitional interiors. Durable and stylish, it’s an efficient solution for maximizing bedroom storage.'
  },
  {
    image: wardrobe,
    name: 'Metal Wardrobe',
    price: 800,
    id: 'wardrobe-5',
    description: 'A modern industrial option, this metal wardrobe is durable, sleek, and easy to maintain. With ample interior space, it provides secure storage for clothing and accessories. Ventilation slots ensure airflow, while its clean lines make it suitable for lofts, studios, or minimalist bedrooms. Functionality meets bold design in this contemporary piece.'
  },
  {
    image: wardrobe,
    name: 'Three-Door Wardrobe',
    price: 980,
    id: 'wardrobe-6',
    description: 'This spacious three-door wardrobe is ideal for larger bedrooms or shared spaces. It features a combination of hanging areas, shelves, and drawers for versatile organization. Designed for both aesthetics and utility, its sturdy construction and elegant finish make it a statement piece that keeps your room neat and stylish.'
  },
  {
    image: coffeeTable,
    name: 'Round Coffee Table',
    price: 250,
    id: 'coffee-1',
    description: 'This round coffee table offers a charming centerpiece for any living area. Its smooth tabletop and sculpted base blend elegance with stability. Compact yet stylish, it works well in smaller rooms or as a side table. The solid build and versatile design make it suitable for traditional and contemporary decor alike.'
  },
  {
    image: coffeeTable,
    name: 'Glass Coffee Table',
    price: 300,
    id: 'coffee-2',
    description: 'This glass coffee table exudes modern sophistication. Featuring a tempered glass top and polished metal base, it adds brightness and elegance to your living room. The clear surface is easy to clean and opens up the space visually. A perfect blend of function and beauty for chic, modern interiors.'
  },
  {
    image: coffeeTable,
    name: 'Wood Coffee Table',
    price: 220,
    id: 'coffee-3',
    description: 'Crafted from rich wood, this coffee table combines rustic charm with practical use. The sturdy construction provides a stable surface for drinks, books, or decor. Its natural finish and grain add warmth and character to any living room. Ideal for cozy, inviting spaces with a farmhouse or traditional aesthetic.'
  },
  {
    image: coffeeTable,
    name: 'Modern Coffee Table',
    price: 275,
    id: 'coffee-4',
    description: 'Sleek and functional, this modern coffee table enhances any contemporary space. With clean lines and a spacious surface, it’s perfect for everyday use. Made with durable materials and a minimalist design, it pairs easily with various decor styles. Add a touch of sophistication and practicality to your living room setup.'
  },
  {
    image: coffeeTable,
    name: 'Lift-Top Coffee Table',
    price: 310,
    id: 'coffee-5',
    description: 'This lift-top coffee table offers extra versatility with a pop-up surface ideal for working or dining. The internal compartment provides hidden storage, keeping clutter out of sight. Its sturdy frame and modern design make it a functional and stylish addition to homes that value space-saving solutions with flair.'
  },
  {
    image: coffeeTable,
    name: 'Rustic Coffee Table',
    price: 260,
    id: 'coffee-6',
    description: 'The rustic coffee table brings rugged beauty to your space with its distressed finish and natural textures. Built from sturdy wood, it exudes warmth and charm. Ideal for farmhouse or industrial interiors, it offers both visual character and practical function. It’s a statement piece that anchors your living room perfectly.'
  },

  {
    image: shelf,
    name: 'Wall Bookshelf',
    price: 180,
    id: 'shelf-1',
    description: 'This wall-mounted bookshelf is the perfect space-saving solution for small rooms or modern apartments. It provides ample storage for books, décor, or personal items without taking up floor space. Its clean, minimalist design blends well with various interiors, and the sturdy construction ensures long-lasting use. Ideal for home offices, bedrooms, or living areas.'
  },
  {
    image: shelf,
    name: 'Corner Bookshelf',
    price: 200,
    id: 'shelf-2',
    description: 'Maximize your space with this stylish corner bookshelf. Designed to fit snugly into unused corners, it offers multiple tiers for books, plants, or collectibles. Its smart design makes it perfect for small rooms, while the neutral finish complements a wide range of styles. Durable and functional, it turns any corner into a feature.'
  },
  {
    image: shelf,
    name: 'Ladder Bookshelf',
    price: 190,
    id: 'shelf-3',
    description: 'The ladder bookshelf combines form and function in a modern, open-tier design. Its leaning frame adds visual interest while providing generous storage for books and décor. Constructed with durable materials, it’s both stable and lightweight. Perfect for living rooms, home offices, or studios where aesthetics and practicality meet beautifully.'
  },
  {
    image: shelf,
    name: '5-Tier Bookshelf',
    price: 210,
    id: 'shelf-4',
    description: 'This tall 5-tier bookshelf offers ample space for organizing books, photo frames, and display items. Its vertical structure makes efficient use of room height, while the sturdy frame ensures durability. Whether placed in a study, hallway, or living room, it brings order and elegance with its clean, functional design.'
  },
  {
    image: shelf,
    name: 'Modern Bookshelf',
    price: 230,
    id: 'shelf-5',
    description: 'The modern bookshelf features sharp lines, a compact frame, and open shelving that suits today’s contemporary interiors. It’s great for showcasing decorative items or storing essentials with a touch of style. Made from quality materials, it’s a durable piece that’s perfect for small apartments, home offices, or creative workspaces.'
  },
  {
    image: shelf,
    name: 'Wooden Bookshelf',
    price: 220,
    id: 'shelf-6',
    description: 'Built with solid wood, this bookshelf blends durability with natural charm. Its simple structure supports heavy books while offering space for decorative accents. The rich wooden finish complements classic or rustic interiors. Ideal for home libraries or cozy reading nooks, it provides reliable storage in an attractive, timeless form.'
  },
  {
    image: nightstand,
    name: 'Modern Nightstand',
    price: 150,
    id: 'night-1',
    description: 'This modern nightstand is a sleek addition to any bedroom. With a smooth finish, clean lines, and a discreet drawer, it balances style and practicality. Use it to store bedtime essentials while keeping your lamp and books within easy reach. Its compact design fits well in minimalist or contemporary setups.'
  },
  {
    image: nightstand,
    name: 'Wooden Nightstand',
    price: 130,
    id: 'night-2',
    description: 'Crafted from rich wood, this nightstand brings natural warmth to your bedside. It features a drawer and open shelf for convenient storage of personal items, books, or electronics. The classic design pairs well with a variety of bed frames and styles, offering durability and a welcoming, traditional touch.'
  },
  {
    image: nightstand,
    name: 'Two-Drawer Nightstand',
    price: 170,
    id: 'night-3',
    description: 'Offering extra storage, this two-drawer nightstand is both functional and stylish. The drawers glide smoothly and provide space for keeping essentials organized and out of sight. Its clean design fits into modern, transitional, or classic bedrooms easily, while the sturdy construction ensures long-term durability and usability.'
  },
  {
    image: nightstand,
    name: 'Floating Nightstand',
    price: 160,
    id: 'night-4',
    description: 'This floating nightstand mounts directly to your wall, freeing up valuable floor space. With a minimalist design and small drawer, it keeps essentials close without clutter. Perfect for contemporary and small-space bedrooms, it creates a sleek and airy aesthetic while offering just the right amount of storage.'
  },
  {
    image: nightstand,
    name: 'Vintage Nightstand',
    price: 155,
    id: 'night-5',
    description: 'Inspired by retro design, this vintage nightstand adds timeless charm to your bedroom. Decorative knobs, curved edges, and warm finishes bring nostalgic character. Its drawer and shelf offer convenient storage for books, glasses, or remotes. A perfect blend of style and utility for classic or eclectic spaces.'
  },
  {
    image: nightstand,
    name: 'Minimalist Nightstand',
    price: 145,
    id: 'night-6',
    description: 'The minimalist nightstand features a clean, understated design that blends effortlessly with modern decor. With a single drawer and flat surface, it’s great for holding lamps, phones, and essentials. Lightweight yet sturdy, it’s an ideal choice for those who appreciate simple living and clutter-free aesthetics in their bedroom.'
  },

  {
    image: tvStand,
    name: 'Modern TV Stand',
    price: 400,
    id: 'tv-1',
    description: 'Sleek and minimalist, this modern TV stand offers open shelving for consoles and hidden storage for accessories. Designed for clean cable management and visual balance, it complements contemporary living rooms. With a sturdy build and stylish finish, it supports most flat-screen TVs while enhancing the room’s overall aesthetic with functionality and elegance.'
  },
  {
    image: tvStand,
    name: 'Wood TV Console',
    price: 420,
    id: 'tv-2',
    description: 'Crafted from solid wood, this TV console delivers durability and timeless charm. It includes open shelves and cabinets to organize media players, games, or books. The rich wood tones and classic design make it suitable for rustic, farmhouse, or traditional interiors. It’s a dependable and decorative solution for your entertainment needs.'
  },
  {
    image: tvStand,
    name: 'Floating TV Stand',
    price: 380,
    id: 'tv-3',
    description: 'This wall-mounted floating TV stand frees up floor space while creating a sleek, modern look. Its streamlined design features storage compartments for electronics and décor. Perfect for compact or minimalist rooms, it also includes cable routing to keep wires hidden. Functional and eye-catching, it elevates your media setup with style.'
  },
  {
    image: tvStand,
    name: 'Glass TV Stand',
    price: 360,
    id: 'tv-4',
    description: 'Featuring tempered glass shelves and chrome legs, this stand blends contemporary style with durable construction. Its open design provides ventilation for devices and a light, airy presence. Suitable for modern homes, it accommodates flat-screen TVs while keeping electronics organized. A great choice for sleek, clutter-free entertainment setups.'
  },
  {
    image: tvStand,
    name: 'Corner TV Stand',
    price: 390,
    id: 'tv-5',
    description: 'Designed to maximize space, this corner TV stand fits neatly into room corners. It offers ample storage for media components and decorative items while maintaining a compact footprint. With a sturdy frame and stylish finish, it blends seamlessly into cozy or small living rooms, offering both practicality and visual appeal.'
  },
  {
    image: tvStand,
    name: 'Media Console',
    price: 440,
    id: 'tv-6',
    description: 'This spacious media console is perfect for organizing your entire entertainment system. With drawers, shelves, and cable ports, it hides clutter and simplifies connectivity. The solid build and sleek finish suit a wide range of decor styles. Whether for streaming, gaming, or storage, it’s a central hub for modern media living.'
  }
  
];

export default furnitureProducts;
