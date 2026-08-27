import React, { useEffect,useState }  from 'react'
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'

function ProductDetails() {

  let { id }= useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  
  const getSingleProduct = async()=>{
    try {
      let res =await axios.get(`https://fakestoreapi.com/products/${id}`)
      
    setProduct(res.data)
    return
    } catch (error) {
      console.log('error in getting single products',error)
    }
  }

  useEffect(()=>{
    getSingleProduct()
  },[])


  const backBtn = ()=>{
    navigate('/')
  }


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 px-6 py-10 transition-colors">
  <div className="max-w-6xl mx-auto">

    {/* Back Button */}
    <button
      onClick={backBtn}
      className="mb-8 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
    >
      ← Back
    </button>

    {/* Product Card */}
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-black/30 overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">

        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-112.5 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <span className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-yellow-500 text-lg">
              ★
            </span>

            <span className="font-semibold text-gray-900 dark:text-white">
              {product.rating?.rate}
            </span>

            <span className="text-gray-500 dark:text-gray-400">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Price */}
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            ${product.price}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-7 mb-8">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="flex-1 bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition">
              Add to Cart
            </button>

            <button onClick={backBtn} className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Back
            </button>

          </div>

        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ProductDetails;