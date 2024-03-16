/* eslint-disable */
namespace PRODUCT {
	type GetProductsResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type GetProductsRequest = void;

	type GetProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type GetProductRequest = string;

	type PostProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type PostProductRequest = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
	};

	type DeleteProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type DeleteProductRequest = string;
}
