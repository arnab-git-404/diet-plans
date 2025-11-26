// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
// import { DietPlan } from '@/types';

// export default function HomePage() {
//   const router = useRouter();
//   const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchDietPlans();
//   }, [page, search]);

//   const fetchDietPlans = async () => {
//     setLoading(true);
//     try {
//       const params = new URLSearchParams();
//       if (search) params.append('search', search);
//       params.append('page', page.toString());
//       params.append('limit', '12');

//       const response = await fetch(`/api/diet-plans?${params}`);
//       const data = await response.json();

//       setDietPlans(data.dietPlans || []);
//       setTotalPages(data.pagination?.totalPages || 1);
//     } catch (error) {
//       console.error('Error fetching diet plans:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     setPage(1);
//     const params = new URLSearchParams();
//     if (search) params.append('search', search);
//     router.push(`/?${params}`);
//   };

//   return (
//     <div className=" max-w-7xl mx-auto px-12 py-12">
//       {/* Hero Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-bold mb-4 bg-[#02807f] bg-clip-text text-transparent">
//           Find Your Perfect Diet Plan
//         </h1>
//         <p className="text-xl text-muted-foreground mb-8">
//           Browse our collection of expert-designed diet plans tailored to your health goals
//         </p>

//         {/* Search Bar */}
//         <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
//             <Input
//               type="text"
//               placeholder="Search diet plans by keyword..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 h-12 text-base"
//             />
//           </div>
//         </form>
//       </div>

//       {/* Diet Plans Grid */}
//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <Card key={i} className="overflow-hidden animate-pulse">
//               <div className="aspect-video bg-muted" />
//               <CardContent className="p-6">
//                 <div className="h-6 bg-muted rounded mb-2" />
//                 <div className="h-4 bg-muted rounded w-3/4" />
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ) : dietPlans.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl text-muted-foreground">No diet plans found</p>
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {dietPlans.map((plan) => (
//               <Link key={plan._id} href={`/diet-plans/${plan._id}`}>
//                 <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
//                   <div className="relative aspect-video">
//                     <Image
//                       src={plan.imageUrl}
//                       alt={plan.title}
//                       fill
//                       className="object-cover"
//                     />
//                     {plan.price === 0 && (
//                       <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                         FREE
//                       </div>
//                     )}
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
//                     <p className="text-muted-foreground line-clamp-2">
//                       {plan.description}
//                     </p>
//                   </CardContent>
//                   <CardFooter className="p-6 pt-0">
//                     <Button className="w-full" variant="outline">
//                       View Details
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </Link>
//             ))}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center gap-4 mt-12">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => setPage((p) => Math.max(1, p - 1))}
//                 disabled={page === 1}
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
//               <span className="text-sm text-muted-foreground">
//                 Page {page} of {totalPages}
//               </span>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={page === totalPages}
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }



// V2 Home page
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Plus,
  Check,
} from "lucide-react";
import { DietPlan } from "@/types";
import { addToCart, getCartCount, getCart } from "@/lib/cart";
import { toast } from "sonner";


export default function HomePage() {

  const router = useRouter();
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [cartItemIds, setCartItemIds] = useState<Set<string>>(new Set());


  useEffect(() => {
    fetchDietPlans();
    updateCartState();
    // setCartCount(getCartCount());
  }, [page, search]);

    const updateCartState = () => {
    setCartCount(getCartCount());
    const cart = getCart();
    setCartItemIds(new Set(cart.map(item => item._id)));
  };


  const fetchDietPlans = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      params.append("page", page.toString());
      params.append("limit", "9");

      const response = await fetch(`/api/diet-plans?${params}`);
      const data = await response.json();

      setDietPlans(data.dietPlans || []);
      setTotalPages(data.pagination?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching diet plans:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchDietPlans();
  };

  const handleAddToCart = (plan: DietPlan) => {
    addToCart({
      _id: plan._id!,
      title: plan.title,
      description: plan.description,
      imageUrl: plan.imageUrl,
      pdfUrl: plan.pdfUrl,
      price: plan.price,
    });
    // setCartCount(getCartCount());
    updateCartState();
    toast.success(`${plan.title} added to cart!`);
  };

  const isInCart = (planId: string) => cartItemIds.has(planId);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
      {/* Hero Section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-[#02807f] bg-clip-text text-transparent">
          Find Your Perfect Diet Plan
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Browse our collection of expert-designed diet plans tailored to your
          health goals
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-12">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
              <Input
                type="text"
                placeholder="Search diet plans by keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 md:pl-10 h-10 md:h-12 text-sm md:text-base w-full"
              />
            </div>
          </form>

          {/* Cart Button */}
          <Link href="/cart" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="relative w-full h-10 md:h-12 sm:w-auto"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
              <span className="ml-2">Cart</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Diet Plans Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden animate-pulse">
              <div className="aspect-video bg-muted" />
              <CardContent className="p-4 md:p-6">
                <div className="h-6 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : dietPlans.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg md:text-xl text-muted-foreground">
            No diet plans found
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {dietPlans.map((plan) => (
              <Card
                key={plan._id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="relative aspect-video">
                  <Image
                    src={plan.imageUrl}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    FREE
                  </div> */}
                   {isInCart(plan._id!) && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <Check className="h-5 w-5" />
                    </div>
                  )}

                </div>
                <CardContent className="p-4 md:p-6 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
                    {plan.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 md:p-6 pt-0 flex gap-2">
                  <Link href={`/diet-plans/${plan._id}`} className="flex-1">
                    <Button className="w-full" variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>

                  <Button
                    className="flex-1"
                    size="sm"
                    onClick={() => handleAddToCart(plan)}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
