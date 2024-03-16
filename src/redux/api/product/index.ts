import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCT.GetProductsResponse,
			PRODUCT.GetProductsRequest
		>({
			query: () => ({
				url: '/products',
				method: 'GET'
			}),
			providesTags: ['products']
		}),

		getProduct: build.query<
			PRODUCT.GetProductResponse,
			PRODUCT.GetProductRequest
		>({
			query: (_id) => ({
				url: `/products/${_id}`,
				method: 'GET'
			}),
			providesTags: ['products']
		}),

		postProduct: build.mutation<
			PRODUCT.PostProductResponse,
			PRODUCT.PostProductRequest
		>({
			query: (newProduct) => ({
				url: '/products',
				method: 'POST',
				body: newProduct
			}),
			invalidatesTags: ['products']
		}),

		deleteProduct: build.mutation<
			PRODUCT.DeleteProductResponse,
			PRODUCT.DeleteProductRequest
		>({
			query: (_id) => ({
				url: `/products/${_id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['products']
		})
	})
});
export const {
	useGetProductsQuery,
	useGetProductQuery,
	usePostProductMutation,
	useDeleteProductMutation
} = api;
