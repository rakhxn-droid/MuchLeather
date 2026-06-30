
export interface Product {
  id: string
  name: string
  price: string
  reviews: number
  image: string
  bestseller: boolean
  category: string
}

export const products: Product[] = [
  // Men's Wallets
  { id: "mw-001", name: "The Heritage Bi-Fold", price: "Rs. 6,490", reviews: 412, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop", bestseller: true, category: "men-wallets" },
  { id: "mw-002", name: "RFID Executive", price: "Rs. 7,490", reviews: 521, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop", bestseller: true, category: "men-wallets" },
  { id: "mw-003", name: "Minimalist Cardholder", price: "Rs. 3,990", reviews: 654, image: "https://images.unsplash.com/photo-1601592996763-f05c4c2c2e69?w=800&h=800&fit=crop", bestseller: false, category: "men-wallets" },
  { id: "mw-004", name: "Vintage Traveler", price: "Rs. 9,990", reviews: 342, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=800&fit=crop", bestseller: false, category: "men-wallets" },
  { id: "mw-005", name: "Carbon Fiber Slim", price: "Rs. 5,490", reviews: 234, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop", bestseller: true, category: "men-wallets" },
  { id: "mw-006", name: "Horween Leather", price: "Rs. 12,990", reviews: 189, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop", bestseller: false, category: "men-wallets" },
  { id: "mw-007", name: "Executive Trifold", price: "Rs. 8,490", reviews: 287, image: "https://images.unsplash.com/photo-1587918520066-868945221194?w=800&h=800&fit=crop", bestseller: true, category: "men-wallets" },
  { id: "mw-008", name: "Suede Accent", price: "Rs. 7,990", reviews: 156, image: "https://images.unsplash.com/photo-1605218427360-6961c386c812?w=800&h=800&fit=crop", bestseller: false, category: "men-wallets" },
  { id: "mw-009", name: "Money Clip Wallet", price: "Rs. 4,990", reviews: 321, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop", bestseller: true, category: "men-wallets" },
  { id: "mw-010", name: "Full Grain Zip", price: "Rs. 11,490", reviews: 234, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", bestseller: false, category: "men-wallets" },
  
  // Men's Bags
  { id: "mb-001", name: "Leather Backpack", price: "Rs. 15,990", reviews: 198, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop", bestseller: true, category: "men-bags" },
  { id: "mb-002", name: "Briefcase Pro", price: "Rs. 18,990", reviews: 267, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop", bestseller: true, category: "men-bags" },
  { id: "mb-003", name: "Messenger Bag", price: "Rs. 11,990", reviews: 312, image: "https://images.unsplash.com/photo-1506729634688-dd6de91d7d23?w=800&h=800&fit=crop", bestseller: false, category: "men-bags" },
  { id: "mb-004", name: "Duffel Weekender", price: "Rs. 16,990", reviews: 145, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop", bestseller: true, category: "men-bags" },
  { id: "mb-005", name: "Leather Laptop Bag", price: "Rs. 14,490", reviews: 389, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=800&fit=crop", bestseller: true, category: "men-bags" },
  { id: "mb-006", name: "Sling Bag", price: "Rs. 8,490", reviews: 276, image: "https://images.unsplash.com/photo-1598033129183-c4f5ddc27593?w=800&h=800&fit=crop", bestseller: false, category: "men-bags" },
  { id: "mb-007", name: "Leather Portfolio", price: "Rs. 9,990", reviews: 189, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop", bestseller: true, category: "men-bags" },
  { id: "mb-008", name: "Mini Crossbody", price: "Rs. 7,490", reviews: 223, image: "https://images.unsplash.com/photo-1571178182884-ca6b159952b4?w=800&h=800&fit=crop", bestseller: false, category: "men-bags" },
  
  // Women's Wallets
  { id: "ww-001", name: "Ladies Clutch", price: "Rs. 8,990", reviews: 287, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop", bestseller: true, category: "women-wallets" },
  { id: "ww-002", name: "Envelope Wallet", price: "Rs. 7,490", reviews: 356, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", bestseller: false, category: "women-wallets" },
  { id: "ww-003", name: "Zip Around", price: "Rs. 9,990", reviews: 223, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop", bestseller: true, category: "women-wallets" },
  { id: "ww-004", name: "Card Case", price: "Rs. 4,490", reviews: 412, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop", bestseller: false, category: "women-wallets" },
  { id: "ww-005", name: "Quilted Wallet", price: "Rs. 10,490", reviews: 245, image: "https://images.unsplash.com/photo-1551232869-69470a6ead24?w=800&h=800&fit=crop", bestseller: true, category: "women-wallets" },
  { id: "ww-006", name: "Metallic Accent", price: "Rs. 8,490", reviews: 189, image: "https://images.unsplash.com/photo-1480064739019-ec80ed799865?w=800&h=800&fit=crop", bestseller: false, category: "women-wallets" },
  { id: "ww-007", name: "Two-Tone Wallet", price: "Rs. 7,990", reviews: 312, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop", bestseller: true, category: "women-wallets" },
  { id: "ww-008", name: "Slim Cardholder", price: "Rs. 3,990", reviews: 456, image: "https://images.unsplash.com/photo-1587918520066-868945221194?w=800&h=800&fit=crop", bestseller: false, category: "women-wallets" },
  
  // Women's Handbags
  { id: "wh-001", name: "Tote Collection", price: "Rs. 14,990", reviews: 378, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop", bestseller: true, category: "women-handbags" },
  { id: "wh-002", name: "Crossbody Bag", price: "Rs. 12,490", reviews: 298, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", bestseller: true, category: "women-handbags" },
  { id: "wh-003", name: "Shoulder Bag", price: "Rs. 16,990", reviews: 187, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop", bestseller: false, category: "women-handbags" },
  { id: "wh-004", name: "Mini Satchel", price: "Rs. 10,990", reviews: 245, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop", bestseller: true, category: "women-handbags" },
  { id: "wh-005", name: "Hobo Bag", price: "Rs. 18,490", reviews: 178, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=800&fit=crop", bestseller: true, category: "women-handbags" },
  { id: "wh-006", name: "Basket Weave", price: "Rs. 15,990", reviews: 234, image: "https://images.unsplash.com/photo-1601592996763-f05c4c2c2e69?w=800&h=800&fit=crop", bestseller: false, category: "women-handbags" },
  { id: "wh-007", name: "Mini Bucket Bag", price: "Rs. 11,490", reviews: 289, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop", bestseller: true, category: "women-handbags" },
  { id: "wh-008", name: "Structured Tote", price: "Rs. 19,990", reviews: 156, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop", bestseller: false, category: "women-handbags" },
  { id: "wh-009", name: "Woven Satchel", price: "Rs. 13,990", reviews: 212, image: "https://images.unsplash.com/photo-1480064739019-ec80ed799865?w=800&h=800&fit=crop", bestseller: true, category: "women-handbags" },
  
  // Women's Clutches
  { id: "wc-001", name: "Evening Clutch", price: "Rs. 8,490", reviews: 312, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop", bestseller: true, category: "women-clutches" },
  { id: "wc-002", name: "Satin Envelope Clutch", price: "Rs. 7,990", reviews: 245, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop", bestseller: false, category: "women-clutches" },
  { id: "wc-003", name: "Embellished Clutch", price: "Rs. 12,990", reviews: 189, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", bestseller: true, category: "women-clutches" },
  { id: "wc-004", name: "Leather Foldover Clutch", price: "Rs. 9,490", reviews: 321, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop", bestseller: false, category: "women-clutches" },
  { id: "wc-005", name: "Box Clutch", price: "Rs. 10,990", reviews: 267, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop", bestseller: true, category: "women-clutches" },
  { id: "wc-006", name: "Quilted Clutch", price: "Rs. 8,990", reviews: 278, image: "https://images.unsplash.com/photo-1551232869-69470a6ead24?w=800&h=800&fit=crop", bestseller: false, category: "women-clutches" },
  { id: "wc-007", name: "Metallic Clutch", price: "Rs. 11,490", reviews: 198, image: "https://images.unsplash.com/photo-1480064739019-ec80ed799865?w=800&h=800&fit=crop", bestseller: true, category: "women-clutches" },
  
  // Travel Accessories
  { id: "tr-001", name: "Passport Holder", price: "Rs. 4,990", reviews: 456, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop", bestseller: true, category: "travel" },
  { id: "tr-002", name: "Luggage Tag Set", price: "Rs. 2,990", reviews: 321, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop", bestseller: false, category: "travel" },
  { id: "tr-003", name: "Dopp Kit", price: "Rs. 7,990", reviews: 267, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=800&fit=crop", bestseller: true, category: "travel" },
  { id: "tr-004", name: "Travel Wallet", price: "Rs. 6,990", reviews: 198, image: "https://images.unsplash.com/photo-1601592996763-f05c4c2c2e69?w=800&h=800&fit=crop", bestseller: false, category: "travel" },
  { id: "tr-005", name: "Garment Cover", price: "Rs. 8,990", reviews: 145, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", bestseller: true, category: "travel" },
  { id: "tr-006", name: "Document Holder", price: "Rs. 5,490", reviews: 287, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop", bestseller: false, category: "travel" },
  { id: "tr-007", name: "Watch Roll", price: "Rs. 9,490", reviews: 212, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop", bestseller: true, category: "travel" },
  { id: "tr-008", name: "Shoe Bag", price: "Rs. 4,490", reviews: 345, image: "https://images.unsplash.com/photo-1587918520066-868945221194?w=800&h=800&fit=crop", bestseller: false, category: "travel" },
  
  // Belts & Accessories
  { id: "ac-001", name: "Classic Leather Belt", price: "Rs. 5,990", reviews: 534, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop", bestseller: true, category: "accessories" },
  { id: "ac-002", name: "Reversible Belt", price: "Rs. 7,490", reviews: 389, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop", bestseller: false, category: "accessories" },
  { id: "ac-003", name: "Braided Belt", price: "Rs. 6,490", reviews: 276, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop", bestseller: true, category: "accessories" },
  { id: "ac-004", name: "Keychain Set", price: "Rs. 2,490", reviews: 412, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=800&fit=crop", bestseller: false, category: "accessories" },
  { id: "ac-005", name: "Suede Belt", price: "Rs. 6,990", reviews: 234, image: "https://images.unsplash.com/photo-1601592996763-f05c4c2c2e69?w=800&h=800&fit=crop", bestseller: true, category: "accessories" },
  { id: "ac-006", name: "Leather Cuff", price: "Rs. 3,490", reviews: 189, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop", bestseller: false, category: "accessories" },
  { id: "ac-007", name: "Leather Key Fob", price: "Rs. 1,990", reviews: 356, image: "https://images.unsplash.com/photo-1551232869-69470a6ead24?w=800&h=800&fit=crop", bestseller: true, category: "accessories" },
  { id: "ac-008", name: "Dress Belt", price: "Rs. 7,990", reviews: 267, image: "https://images.unsplash.com/photo-1480064739019-ec80ed799865?w=800&h=800&fit=crop", bestseller: false, category: "accessories" },
  { id: "ac-009", name: "Leather Bracelet", price: "Rs. 2,990", reviews: 298, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop", bestseller: true, category: "accessories" },
  { id: "ac-010", name: "O-Ring Belt", price: "Rs. 6,490", reviews: 245, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop", bestseller: false, category: "accessories" },
]

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const categoryNames: Record<string, string> = {
  'men-wallets': "Men's Wallets",
  'men-bags': "Men's Bags",
  'women-wallets': "Women's Wallets",
  'women-handbags': "Women's Handbags",
  'women-clutches': "Women's Clutches",
  'travel': "Travel Accessories",
  'accessories': "Belts & Accessories",
  'belts': "Belts & Accessories",
}
