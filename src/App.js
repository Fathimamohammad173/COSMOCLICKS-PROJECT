import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, Star, Plus, Minus, User, Package, Shield, Truck } from 'lucide-react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Hydrating Vitamin C Serum",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      category: "serums",
      rating: 4.8,
      reviews: 324,
      description: "Brightening serum with 20% Vitamin C for radiant skin"
    },
    {
      id: 2,
      name: "Nourishing Night Cream",
      price: 39.99,
      originalPrice: 54.99,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
      category: "moisturizers",
      rating: 4.9,
      reviews: 567,
      description: "Rich overnight moisturizer for deep hydration"
    },
    {
      id: 3,
      name: "Gentle Exfoliating Cleanser",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1609175214983-594001465d18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5zZXJ8ZW58MHx8MHx8fDA%3D",
      category: "cleansers",
      rating: 4.7,
      reviews: 189,
      description: "Mild exfoliant for smooth, clear complexion"
    },
    {
      id: 4,
      name: "Retinol Anti-Aging Serum",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      category: "serums",
      rating: 4.6,
      reviews: 432,
      description: "Powerful retinol formula for fine lines and wrinkles"
    },
    {
      id: 5,
      name: "Daily SPF 50 Moisturizer",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNraW5jYXJlfGVufDB8fDB8fHww",
      category: "sunscreen",
      rating: 4.8,
      reviews: 298,
      description: "Lightweight daily protection with broad spectrum SPF"
    },
    {
      id: 6,
      name: "Hydrating Face Mask Set",
      price: 34.99,
      originalPrice: 44.99,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
      category: "masks",
      rating: 4.9,
      reviews: 156,
      description: "3-pack hydrating masks for weekly skincare routine"
    },
    {
      id: 7,
      name: "Niacinamide Pore Minimizer",
      price: 36.99,
      originalPrice: 48.99,
      image: "https://images.unsplash.com/photo-1599847987657-881f11b92a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
      category: "serums",
      rating: 4.7,
      reviews: 287,
      description: "10% Niacinamide serum to minimize pores and control oil"
    },
    {
      id: 8,
      name: "Hyaluronic Acid Moisturizer",
      price: 42.99,
      originalPrice: 58.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop",
      category: "moisturizers",
      rating: 4.8,
      reviews: 445,
      description: "Ultra-hydrating moisturizer with hyaluronic acid"
    },
    {
      id: 9,
      name: "Micellar Cleansing Water",
      price: 18.99,
      originalPrice: 26.99,
      image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c",
      category: "cleansers",
      rating: 4.6,
      reviews: 334,
      description: "Gentle makeup remover for all skin types"
    },
  {
  id: 10,
  name: "Brightening Eye Cream",
  price: 45.99,
  originalPrice: 62.99,
  image: "https://media.istockphoto.com/id/2197917186/photo/skin-care-routine-highlights-with-model-applying-moisturizer-in-bright-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=pUFzKyGN2iwAiCZjK0xiBR8o_q5AqK5OvUwQfuOKsqo=", // Tested working eye cream image
  category: "eye-care",
  rating: 4.5,
  reviews: 198,
  description: "Anti-aging eye cream with peptides and caffeine"
},
{
     id: 11,
      name: "Clay Purifying Mask",
      price: 28.99,
      originalPrice: 38.99,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
      category: "masks",
      rating: 4.7,
      reviews: 267,
      description: "Deep-cleansing clay mask for oily and acne-prone skin"
    },
    {
      id: 12,
      name: "Glycolic Acid Toner",
      price: 32.99,
      originalPrice: 44.99,
      image: "https://plus.unsplash.com/premium_photo-1678377959909-3542d8096fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
      category: "toners",
      rating: 4.4,
      reviews: 312,
      description: "7% Glycolic acid toner for gentle exfoliation"
    },
    {
      id: 13,
      name: "Mineral Sunscreen SPF 30",
      price: 26.99,
      originalPrice: 35.99,
      image: "https://images.unsplash.com/photo-1629732097571-b042b35aa3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxza2luJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "sunscreen",
      rating: 4.6,
      reviews: 228,
      description: "Zinc oxide sunscreen for sensitive skin"
    },
    {
      id: 14,
      name: "Peptide Anti-Aging Serum",
      price: 67.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?w=300&h=300&fit=crop",
      category: "serums",
      rating: 4.9,
      reviews: 156,
      description: "Advanced peptide complex for firming and lifting"
    },
    {
      id: 15,
      name: "Rose Water Facial Mist",
      price: 22.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1580491934306-acf5f6886d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
      category: "toners",
      rating: 4.3,
      reviews: 189,
      description: "Refreshing rose water mist for hydration and soothing"
    },
    {
      id: 16,
      name: "Oil-Free Gel Moisturizer",
      price: 31.99,
      originalPrice: 41.99,
      image: "https://images.unsplash.com/photo-1616740794225-63e524d43ec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
      category: "moisturizers",
      rating: 4.7,
      reviews: 356,
      description: "Lightweight gel moisturizer for oily skin"
    },
    {
      id: 17,
      name: "Charcoal Detox Cleanser",
      price: 27.99,
      originalPrice: 36.99,
      image: "https://images.unsplash.com/photo-1648203107138-9e9f9dc64662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxza2luJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "cleansers",
      rating: 4.5,
      reviews: 278,
      description: "Activated charcoal cleanser for deep pore cleansing"
    },
    {
      id: 18,
      name: "Collagen Firming Mask",
      price: 38.99,
      originalPrice: 52.99,
      image: "https://images.unsplash.com/photo-1617778368431-f97343a411ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
      category: "masks",
      rating: 4.8,
      reviews: 201,
      description: "Anti-aging mask with marine collagen"
    },
    {
      id: 19,
      name: "Salicylic Acid Spot Treatment",
      price: 19.99,
      originalPrice: 27.99,
      image: "https://images.unsplash.com/photo-1601049541079-473f79fd3746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxza2luJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "treatments",
      rating: 4.4,
      reviews: 412,
      description: "2% Salicylic acid for acne and blemish treatment"
    },
    {
      id: 20,
      name: "Vitamin E Night Repair Oil",
      price: 41.99,
      originalPrice: 56.99,
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9pbHxlbnwwfHwwfHx8MA%3D%3D",
      category: "oils",
      rating: 4.6,
      reviews: 167,
      description: "Nourishing facial oil with vitamin E and rosehip"
    },
    {
      id: 21,
      name: "AHA/BHA Exfoliating Pads",
      price: 35.99,
      originalPrice: 47.99,
      image: "https://images.unsplash.com/photo-1623504509374-64bb0dbb56eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFkc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "treatments",
      rating: 4.7,
      reviews: 289,
      description: "Pre-soaked pads with alpha and beta hydroxy acids"
    },
    {
      id: 22,
      name: "Ceramide Barrier Repair Cream",
      price: 48.99,
      originalPrice: 64.99,
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyZWFtfGVufDB8fDB8fHww",
      category: "moisturizers",
      rating: 4.8,
      reviews: 234,
      description: "Rich cream with ceramides to repair skin barrier"
    },
    {
      id: 23,
      name: "Green Tea Antioxidant Serum",
      price: 44.99,
      originalPrice: 59.99,
      image: "https://media.istockphoto.com/id/1496615098/photo/beauty-latin-woman-applying-serum-on-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=gIUqM2uaCRrki5Di3ZF5LBaFUazNbjAPFdJnaiEKdVY=",
      category: "serums",
      rating: 4.5,
      reviews: 178,
      description: "Antioxidant-rich serum with green tea extract"
    },
    {
      id: 24,
      name: "Lip Repair Treatment",
      price: 16.99,
      originalPrice: 22.99,
      image: "https://plus.unsplash.com/premium_photo-1664304143731-dd6b1eac784d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlwfGVufDB8fDB8fHww",
      category: "lip-care",
      rating: 4.4,
      reviews: 145,
      description: "Intensive lip treatment for dry and chapped lips"
    },
    {
      id: 25,
      name: "Bakuchiol Natural Retinol Alternative",
      price: 52.99,
      originalPrice: 71.99,
      image: "https://plus.unsplash.com/premium_photo-1683121222517-f4d673c0d482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxza2luJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "serums",
      rating: 4.6,
      reviews: 203,
      description: "Plant-based retinol alternative for sensitive skin"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'serums', name: 'Serums' },
    { id: 'moisturizers', name: 'Moisturizers' },
    { id: 'cleansers', name: 'Cleansers' },
    { id: 'sunscreen', name: 'Sunscreen' },
    { id: 'masks', name: 'Face Masks' },
    { id: 'toners', name: 'Toners' },
    { id: 'eye-care', name: 'Eye Care' },
    { id: 'treatments', name: 'Treatments' },
    { id: 'oils', name: 'Face Oils' },
    { id: 'lip-care', name: 'Lip Care' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(prev => prev.map(item => 
      item.id === productId 
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                CosmoClicks
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search skincare products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-pink-500"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Your Perfect Skin
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Premium skincare products for every skin type and concern
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Now
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">2-3 business days delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                      wishlist.some(item => item.id === product.id)
                        ? 'bg-pink-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-pink-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlist.some(item => item.id === product.id) ? 'fill-current' : ''}`} />
                  </button>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-pink-600 font-semibold">${item.price}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="border-t p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total: ${getTotalPrice()}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
                CosmoClicks
              </div>
              <p className="text-gray-400">Your trusted partner for premium skincare solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Serums</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Moisturizers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cleansers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-400">Stay updated with our latest products and offers.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CosmoClicks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;